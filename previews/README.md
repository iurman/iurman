# README variants

Three complete profile READMEs, built from your portfolio's content and palette
(`#040403` void, `#32746D` accent, `#89AAE6` electric, `#FFC4D1` ember).

All three keep your devicon row and the space-themed banner art. None of them use em dashes, and
the copy is plain: no night-sky metaphors, no sign-off tagline.

| | Variant | The hook | Best if |
| :-- | :-- | :-- | :-- |
| **A** | [Night Sky](variant-a-night-sky.md) | Custom animated banner: starfield, orbit rings, a black hole, your gradient rule | You want the profile to feel like an extension of isaacurman.com |
| **B** | [Terminal](variant-b-terminal.md) | Animated terminal-window banner and a real `neofetch` block. Every section is a shell command | You want it to read like you run infrastructure, because you do |
| **C** | [Systems Map](variant-c-systems-map.md) | A Mermaid diagram of the whole column you own, product down to infra, with a pager edge looping back. Depth hidden in `<details>` | You want the most information density and the strongest single idea |

[`blocks.md`](blocks.md) has optional modules: stat cards, the contribution snake, badge rows, and
the ASCII stack tree that variant B used before the icons went back in.

---

## How to preview

GitHub renders these files exactly as it renders a profile README. The banners animate, the Mermaid
diagram draws, tables and `<details>` behave the same. Click a variant link above.

To iterate, edit a variant file, push, and refresh the page.

To tweak without pushing, paste the file contents into any of these:

- <https://github.com/iurman/iurman/edit/main/README.md>, then the **Preview** tab. Closest to the
  real thing. Don't commit until you're happy.
- A [new secret gist](https://gist.github.com). Instant render, throwaway.
- Any new issue's comment box, then the **Preview** tab.

Two things behave differently in the profile README specifically:

1. **Image paths.** Files here use `../assets/…` so they preview from this folder. The root
   `README.md` uses absolute `https://raw.githubusercontent.com/iurman/iurman/main/assets/…` URLs,
   because relative paths are less reliable when GitHub renders the README on your profile page
   instead of inside the repo. Keep the absolute form at the root.
2. **Mermaid** inherits the viewer's GitHub theme, so check variant C in light mode too before
   shipping it.

---

## How to ship

The root [`README.md`](../README.md) on this branch is already variant A. To switch:

```bash
cp previews/variant-b-terminal.md README.md   # or variant-c-systems-map.md
```

Then change the image path back to absolute:

```
../assets/  ->  https://raw.githubusercontent.com/iurman/iurman/main/assets/
```

Merge to `main` and the profile updates. The banner SVGs won't render in the root README until
they exist on `main`, which is expected on this branch and resolves when you merge.

Once you've picked one, `rm -rf previews/` and delete the unused banner from `assets/`. Nothing
else depends on them.

---

## The Writing section updates itself

`scripts/update-writing.mjs` reads <https://isaacurman.com/feed.xml> and rewrites whatever sits
between these two comments:

```
<!-- WRITING:START -->
<!-- WRITING:END -->
```

All four files already have them, so the section stays current without you touching it.
`.github/workflows/update-writing.yml` runs it daily at 06:00 UTC, on manual dispatch, and on a
`blog-updated` repository dispatch. It commits only when the list actually changed.

Run it yourself any time:

```bash
node scripts/update-writing.mjs README.md              # markdown bullets
node scripts/update-writing.mjs --format=log FILE.md   # dated code block, for variant B
POST_COUNT=6 node scripts/update-writing.mjs           # show six instead of four
```

If the feed 404s, times out, or parses to zero posts, the script exits 1 **without writing
anything**, so a bad fetch fails the workflow loudly instead of blanking your README.

Four things to know:

1. **Scheduled workflows only run from the default branch.** The cron does nothing until you merge
   this branch to `main`.
2. **If you pick variant B**, change the workflow's script line to
   `node scripts/update-writing.mjs --format=log README.md`.
3. **GitHub disables cron on repos with 60 days of no activity** and emails you about it. Posting
   triggers a commit, which resets the clock, so this only bites during a long writing gap.
4. **Cron is best-effort** and often runs late under load. If you want the README to update the
   moment a post goes live, have the portfolio's deploy step fire the repository dispatch. The
   `curl` for it is commented at the top of the workflow file, and it needs a fine-grained PAT
   scoped to `contents:write` on `iurman/iurman` only.

---

## What changed from the old README

| Old | New | Why |
| :-- | :-- | :-- |
| `# Hi 👋, I'm Isaac` | The banner | It's the most common opening line on GitHub, and it spends your best line of screen space on a greeting |
| `🔭 🛠️ 🎓 ⚡` emoji bullets | Prose | That exact emoji set is the GitHub default template |
| "Senior Software Engineer Team Lead" | "Product Engineer & Team Lead" | Matches how you position yourself on the site |
| Ephemera: "temporary content sharing" | Encrypted in the browser, expires by time or view count | You rebuilt it. The old copy predates that |
| ResuPals: "runs entirely in-browser" | Guest mode is local, sign-in syncs to your private cloud | The repo has D1 and cloud sync. See the note below |
| No mention of the homelab or hosting business | In the intro of all three | It's your most distinctive credential and it was missing entirely |
| No writing section | Four recent posts | You publish regularly and the profile didn't say so |
| 23 devicons | Same 23 devicons | Kept at your request |

### One accuracy note

The first draft said ResuPals "runs entirely in the browser, nothing leaves the tab." Reading
`iurman/resupals` shows that's true for guest mode only: `localStorage`, no account, no server
calls. Signed-in users sync to D1 on Cloudflare, and AI job tailoring on paid plans sends the job
description out by design. All three variants now say guest mode is local and sign-in syncs.

Two smaller things from the same read: the ResuPals stack in your portfolio frontmatter lists
`Next.js, TypeScript, Tailwind, TipTap, dnd-kit`, but the repo also runs on Cloudflare Workers with
D1 and Drizzle, so the variants list those. Your portfolio project entry may be worth updating too.

Everything else is sourced from `iurman/portfolio` (`src/lib/config.ts`, `content/projects`,
`content/posts`). If it's wrong there, it's wrong here.
