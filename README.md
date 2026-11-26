# pm-portfolio

Joel Huffman's product management portfolio, built with [Astro](https://astro.build) and
deployed to GitHub Pages at https://huffmanj25.github.io/pm-portfolio/.

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at http://localhost:4321/pm-portfolio/ |
| `npm run build` | Build the static site to `./dist/` |
| `npm run preview` | Preview the build locally |

## Where things live

| Path | What |
|---|---|
| `src/consts.ts` | Name, headline, "Currently" line, links, resume Doc ID |
| `src/data/timeline.ts` | Timeline entries, skills, education (curated from the resume Doc) |
| `src/content/work/` | Case studies (Markdown) |
| `src/content/writing/` | Writing posts (Markdown) |
| `src/components/Timeline.astro` | Interactive timeline |
| `docs/versions/` | Screenshots, snapshots and notes for each site version |

Pushing to `main` deploys via `.github/workflows/deploy.yml`.
