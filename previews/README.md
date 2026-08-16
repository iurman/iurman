# README variants — preview & pick

Three complete profile READMEs, all built from your portfolio's actual content and palette
(`#040403` void · `#32746D` accent · `#89AAE6` electric · `#FFC4D1` ember · Syne/Outfit/Fira Code voice).

| | Variant | The hook | Best if |
| :-- | :-- | :-- | :-- |
| **A** | [Night Sky](variant-a-night-sky.md) | Custom animated SVG banner — starfield, orbit rings, an event horizon, your gradient rule | You want the profile to feel like an extension of isaacurman.com |
| **B** | [Terminal](variant-b-terminal.md) | Animated terminal-window banner + a real `neofetch` block; every section is a shell command | You want it to read like *you run infrastructure*, because you do |
| **C** | [Systems Map](variant-c-systems-map.md) | A Mermaid diagram of the whole column you own, product → infra, with a "3 a.m. pager" feedback edge; depth hidden in `<details>` | You want the most information density and the strongest single idea |

Plus [`blocks.md`](blocks.md) — optional modules (stat cards, snake, badges, your original devicon
row) with honest notes on which ones are actually reliable.

---

## How to preview

**Easiest — right here.** GitHub renders these files exactly as it renders a profile README:
the SVG banners animate, the Mermaid diagram draws, tables and `<details>` behave identically.
Click a variant link above.

**To iterate.** Edit any variant file, push, and refresh the page. Same rendering.

**To tweak without pushing.** Paste the file's contents into any of these:
- <https://github.com/iurman/iurman/edit/main/README.md> → **Preview** tab (closest to the real thing; don't commit until you're happy)
- A [new secret gist](https://gist.github.com) — instant render, throwaway
- Any new issue's comment box → **Preview** tab

⚠️ Two things behave differently in the *profile* README specifically:
1. **Image paths.** Files here use `../assets/…` so they preview from this folder. The root
   `README.md` uses absolute `https://raw.githubusercontent.com/iurman/iurman/main/assets/…`
   URLs, because relative paths are less reliable when GitHub renders the README on your
   profile page rather than inside the repo. Keep the absolute form at the root.
2. **Mermaid** renders on your profile, but it inherits the *viewer's* GitHub theme — so check
   variant C in both light and dark mode before shipping it.

---

## How to ship

The root [`README.md`](../README.md) of this branch is already set to **Variant A**. So:

```bash
# swap the pick
cp previews/variant-b-terminal.md README.md   # or variant-c-systems-map.md

# then fix the two image paths back to absolute (variants B and A only)
# ../assets/  ->  https://raw.githubusercontent.com/iurman/iurman/main/assets/
```

Merge the branch to `main` and the profile updates immediately.

The banner SVGs won't render in the root README until they exist on `main` — that's expected on
this branch, and resolves the moment you merge.

**Optional cleanup:** once you've picked one, `rm -rf previews/` and delete the unused banner from
`assets/`. Nothing else in the repo depends on them.

---

## What changed vs. the old README, and why

Researched against what currently reads as *authored* versus *generated* on GitHub profiles:

| Old | New | Reason |
| :-- | :-- | :-- |
| `# Hi 👋, I'm Isaac` | A banner or a claim | The single most common opening line on GitHub; it burns your best line of screen space on a greeting |
| `🔭 🛠️ 🎓 ⚡` emoji bullets | Structured "Currently" list | That emoji set is the literal GitHub default template |
| 22 uniform 40px devicons | Grouped stack tables | Icon walls flatten hierarchy — Git and Kubernetes get equal weight — and are the top "generated profile" tell. Preserved in `blocks.md` if you want it back |
| "Senior Software Engineer Team Lead" | "Product Engineer & Team Lead" | Matches how you actually position yourself on the site |
| Ephemera: "temporary content sharing" | "zero-knowledge, AES-256-GCM in the browser" | You rebuilt it; the old copy predates that |
| No mention of the homelab or hosting business | Front and center | It's your most distinctive credential and the *why* behind how you build. It was missing entirely |
| No writing section | 4 recent posts | You publish regularly; the profile didn't say so |

Everything is sourced from `iurman/portfolio` (`src/lib/config.ts`, `content/projects`,
`content/posts`) — so if it's wrong there, it's wrong here too.
