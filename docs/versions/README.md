# Site versions

A record of each major version of this portfolio, kept as source material for a
case study on how the site evolved. Each version folder holds:

- `screenshots/`: desktop (1280×800) and mobile (375×812) captures.
- `site/`: a static copy of the built site, a lightweight clickable prototype.
  View it with `node scripts/serve-snapshot.mjs <version> [port]`. From V2 on, the site lives
  under `/pm-portfolio/` (the GitHub Pages base path), so open `http://localhost:<port>/pm-portfolio/`.
- `NOTES.md`: what changed, and why, from a product perspective.

Each version is also a Git tag (`v1`, `v2`, ...).

| Version | Tag | Summary |
|---|---|---|
| [V1](v1/NOTES.md) | `v1` | Stock Astro blog template, no personal content. |
| [V2](v2/NOTES.md) | `v2` | Warm, personal redesign: interactive timeline, case studies, live resume. |
