#!/usr/bin/env node
// Rewrites the Writing section of a markdown file from the blog's RSS feed.
//
//   node scripts/update-writing.mjs [--format=list|log] [file...]
//
// Formats: `list` writes markdown bullets, `log` writes a dated code block for
// the terminal variant. Files default to README.md. Each file must contain both
// marker comments:
//
//   <!-- WRITING:START -->
//   ...generated list...
//   <!-- WRITING:END -->
//
// Exits 1 without touching any file if the feed can't be read or parses to
// zero posts, so a bad fetch can never blank the section.

const FEED = process.env.FEED_URL ?? 'https://isaacurman.com/feed.xml';
const COUNT = Number(process.env.POST_COUNT ?? 4);
const START = '<!-- WRITING:START -->';
const END = '<!-- WRITING:END -->';

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };

function decode(s) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&(amp|lt|gt|quot|apos|nbsp);/g, (m, n) => ENTITIES[n] ?? m)
    .trim();
}

// Only [ and ] need escaping: they would terminate the link text early.
const escapeLinkText = (s) => s.replace(/([[\]])/g, '\\$1');

function tag(block, name) {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`));
  return m ? decode(m[1]) : '';
}

async function fetchPosts() {
  const res = await fetch(FEED, {
    headers: { 'user-agent': 'iurman-profile-readme' },
    signal: AbortSignal.timeout(20_000),
  });
  if (!res.ok) throw new Error(`${FEED} returned ${res.status}`);

  const xml = await res.text();
  const posts = [...xml.matchAll(/<item[^>]*>([\s\S]*?)<\/item>/g)]
    .map(([, block]) => ({
      title: tag(block, 'title'),
      link: tag(block, 'link'),
      date: Date.parse(tag(block, 'pubDate')) || 0,
    }))
    .filter((p) => p.title && p.link);

  if (!posts.length) throw new Error(`no items parsed from ${FEED}`);

  // The feed is already newest-first, but do not depend on that.
  return posts.sort((a, b) => b.date - a.date).slice(0, COUNT);
}

const isoDate = (ms) => new Date(ms).toISOString().slice(0, 10);

function render(posts, format) {
  if (format === 'log') {
    const lines = posts.map((p) => `${p.date ? isoDate(p.date) : '          '}  ${p.title}`);
    return ['```', ...lines, '```'].join('\n');
  }
  return posts.map((p) => `- [${escapeLinkText(p.title)}](${p.link})`).join('\n');
}

async function main() {
  const args = process.argv.slice(2);
  const format = (args.find((a) => a.startsWith('--format='))?.split('=')[1] ?? 'list').trim();
  if (format !== 'list' && format !== 'log') {
    throw new Error(`unknown --format=${format}, expected list or log`);
  }

  const files = args.filter((a) => !a.startsWith('--'));
  if (!files.length) files.push('README.md');

  const posts = await fetchPosts();
  const list = render(posts, format);
  const { readFile, writeFile } = await import('node:fs/promises');

  let changed = 0;
  for (const file of files) {
    const before = await readFile(file, 'utf8');
    const start = before.indexOf(START);
    const end = before.indexOf(END);
    if (start === -1 || end === -1 || end < start) {
      throw new Error(`${file} is missing the WRITING:START / WRITING:END markers`);
    }

    const after =
      before.slice(0, start + START.length) + '\n\n' + list + '\n\n' + before.slice(end);

    if (after !== before) {
      await writeFile(file, after);
      changed++;
      console.log(`updated ${file}`);
    } else {
      console.log(`${file} already current`);
    }
  }

  console.log(`${posts.length} posts, ${changed} file(s) changed`);
}

main().catch((err) => {
  console.error(`update-writing failed: ${err.message}`);
  process.exit(1);
});
