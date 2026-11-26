# V2: Warm, personal redesign (Nov 25, 2026)

**Tag:** `v2` · **Branch:** `v2-redesign`
**Prototype:** `node scripts/serve-snapshot.mjs v2 4401`, then open http://localhost:4401/pm-portfolio/

## What changed from V1
- **Identity in five seconds:** home page leads with photo, name, focus area, a "Currently" line and
  three actions (download resume, email, LinkedIn).
- **Interactive career timeline:** a horizontal track you drag, scroll or step through with arrow
  buttons. Each card leads with an outcome and expands for details. On phones it becomes a vertical list.
- **Case studies:** three outcome-first case studies (traveler-profile platform, PNR-tracking tool,
  smart-home wall panel) with headline metrics.
- **Live resume:** the download button exports the master Google Doc as a PDF, so it's never stale.
- **Writing:** the template blog became a "Writing" section, starting with a post about this redesign.
- **Warm visual system:** cream and terracotta palette, serif headings, rounded cards; dark mode follows
  the device setting.
- **Deployment:** GitHub Actions workflow for GitHub Pages.

## Product decisions and why

| Decision | Alternatives considered | Why |
|---|---|---|
| Warm & personal style | Minimal, bold editorial, dark dashboard | Hiring is about people; the site should feel like meeting Joel. |
| Horizontal draggable timeline | Vertical scroll, filterable | More engaging on laptops, where recruiters mostly read. |
| Vertical timeline on phones | Horizontal swipe on phones | Sideways dragging on small screens is frustrating; same content, better ergonomics. |
| Live PDF + curated timeline file | Fully automatic rebuild from the Doc | Automatic parsing breaks whenever the Doc's formatting changes; a curated summary also reads better. |
| Outcome-first cards and case studies | Duty-based job descriptions | Hiring managers skim; results are the signal. |
| Only verified claims in the side-project case study | Include everything | Credibility: unverified features were left out. |
| Static site, one small script | Client-side framework | Fast, free to host, nothing to maintain. |
| Removed page entrance animation | Keep fade-in | It could leave content invisible when animations are paused; reliability over polish. |
| Approximate employer figures, no security vendors | Publish resume numbers as-is | Protects a former employer's confidential details while still showing scale and impact. |

## Pre-launch confidentiality pass
Before publishing, every claim about a former employer was reviewed for what's safe on a public site.

| Risk | What was on the page | What changed |
|---|---|---|
| High | Named security vendors (card tokenization, SSO) and how stored card data is accessed | Removed; described generically ("payment-card tokenization", "enterprise single sign-on") |
| Medium | Exact savings, client-company count, user count, data-feed throughput | Rounded to "six figures", "thousands of companies", "millions of travelers", "high-volume" |
| Low | Title, dates, team sizes, percentages, approach | Kept |

**Why:** a resume goes to one recruiter; a public site can be read by anyone, including competitors.
The exact figures stay on the resume. Home-page stats now lead with "Weeks → hours" instead of dollars.

## Known gaps going into V3
- Case studies 1 and 2 have `TODO(Joel)` comments where only Joel can add detail (tradeoffs, lessons).
- About page needs an "Outside of work" paragraph.
- Resume download works only once the Google Doc is shared "Anyone with the link: Viewer".
- No analytics yet, so there's no data on how visitors use the timeline.
