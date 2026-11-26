# Public resume sync

The site's Resume button serves `public/resume.pdf`, a redacted version of the master resume.
This runbook keeps it in sync. A scheduled Claude task follows it daily; you can also ask
Claude to "sync my resume" at any time.

## Files

| What | Where |
|---|---|
| Master resume (private, never published) | Google Doc `1xSPwTVkvwlJ4xLAnqP27_Y0thcxuR98Mh_A-V3t8tXc`, "Joel Huffman - Product Manager Resume" |
| Public copy (private in Drive; source of the PDF) | Google Doc ID in `scripts/resume-sync.json` → `publicDocId`, "Joel Huffman - Resume (Public)" |
| Published PDF | `public/resume.pdf` → https://huffmanj25.github.io/pm-portfolio/resume.pdf |
| Sync state | `scripts/resume-sync.json` |

## Steps

1. **Check for changes.** Get the master Doc's `modifiedTime` from Drive. If it equals
   `masterModifiedTime` in `scripts/resume-sync.json`, stop: nothing to do.
2. **Read the master** with Drive `read_file_content`.
3. **Make a fresh public copy.** Drive `copy_file` the master, titled "Joel Huffman - Resume (Public)".
4. **Redact the copy** with one Docs `update_doc` batch of `replaceAllText` requests, following the
   rules below. Rewrite whole phrases so sentences still read naturally.
5. **Verify.** Read the copy back and confirm none of the "must not appear" items remain. If any do,
   or a sentence reads badly, stop and report to Joel instead of publishing.
6. **Export** the copy as PDF (Drive `download_file_content`, `application/pdf`) to `public/resume.pdf`.
7. **Swap the public copy.** Trash the previous public copy (its ID is in `publicDocId`; it was made by
   this process), then update `scripts/resume-sync.json` with the new `publicDocId`, the master's
   `masterModifiedTime` and `syncedAt`.
8. **Publish.** Run `npm run build` to confirm the site builds, then commit `public/resume.pdf` and
   `scripts/resume-sync.json` on `main` ("Sync public resume") and push. The deploy runs automatically.
9. **Flag timeline drift.** If roles, titles, dates or headline outcomes in the master no longer match
   `src/data/timeline.ts`, don't edit the site: tell Joel what changed so he can approve an update.

## Redaction rules

**Must not appear in the public version**
- Phone number. Keep email, LinkedIn and city.
- Security, identity or payment vendors (e.g. IXOPAY, Auth0, Okta) and descriptions of how sensitive
  data is accessed or unmasked.
- Internal system or product names from a former employer (e.g. eProfile, Umbrella Faces, Tramada).
- Exact dollar figures tied to an employer ($600K, $300K, ...).
- Exact customer, client or user counts (~10,000 companies, 6–8M users) and throughput figures
  ("thousands of profiles per minute").
- The word "proprietary" describing an employer's data.

**Replace with**
| Exact | Public |
|---|---|
| Six-figure dollar amount (savings) | "six-figure (projected) annual savings" |
| Thousands of client companies | "thousands of client companies" |
| Millions of users | "millions of users" |
| Throughput figure | "high-volume" |
| Named SSO / identity vendor | "enterprise single sign-on" |
| Named tokenization vendor | "payment-card tokenization" |

**Keep as is:** titles, employers, dates, team sizes, percentages (e.g. "20% fewer errors"),
"weeks to hours", skills, tools in the Skills section, education, awards.

When the master changes in ways these rules don't cover, apply the same intent (show scale and
impact, hide figures and security details) and mention the judgment call in the report.
