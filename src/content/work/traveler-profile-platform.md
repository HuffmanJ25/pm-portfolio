---
title: One traveler profile for millions of people
summary: Consolidating three regional traveler-profile systems into a single in-house platform for thousands of client companies, without breaking bookings along the way.
org: Corporate Travel Management
role: Product Manager, platform owner
timeframe: 2022–2026
order: 1
tags: [Platform strategy, Identity & access, Data migration, PCI compliance]
outcomes:
  - value: 3 → 1
    label: regional systems consolidated into one global platform
  - value: Millions
    label: of travelers on one global profile platform
  - value: Six figures
    label: in projected annual savings
---

<!--
  Public-site rule: keep CTM figures approximate and don't name security vendors or describe
  how sensitive data is protected. Exact numbers stay on the resume sent to recruiters.
-->

## The problem

A traveler profile is the record behind every corporate booking: names that match passports, loyalty numbers, seat and meal preferences, payment details and company travel policy. CTM was running **three regional profile systems**, which meant three sets of costs, three sets of integrations and no single view of a traveler across regions.

<!-- TODO(Joel): one or two sentences on what hurt most before the change (cost, slow feature delivery, inconsistent data?) and who felt it. Keep it general: no internal incidents or figures. -->

## My role

I owned the global traveler-profile platform end to end, as product lead for a 9-person global profile team and a 7-engineer North America profile team.

## Key decisions

### Build vs. buy

Before committing, I researched the build-vs-buy options and built the cost analysis behind the decision to consolidate onto **one in-house product**. The case rested on three things:

- **Savings:** retiring three regional systems.
- **Data ownership:** traveler profile data is strategically valuable, and keeping it in-house kept control of it.
- **Speed after MVP:** once the core was built, new features would ship faster than waiting on vendor roadmaps.

<!-- TODO(Joel): what was the strongest argument *for* buying, and how did you answer it? Keep vendor names out. -->

### Security and access as product features

At this scale, who can see and change a profile is a core feature, not an afterthought. I led:

- **Role-based access control** with configurable, feature-level permissions.
- **Enterprise single sign-on** for client companies.
- **Payment-card tokenization**, taken all the way through PCI compliance sign-off.

### Migrating without disruption

Consolidation only works if bookings keep flowing. I led the data mappings and migration tooling, owned or unblocked API contracts with external systems and **high-volume HR data feeds**, and supported a **phased, region-by-region go-to-market**.

### Saying no

We ran staged rollouts with feature flags and beta groups. When one feature underperformed, I **paused it and refocused the team on globalization**, the work that unlocked the consolidation.

<!-- TODO(Joel): what signal told you it was underperforming, and how did stakeholders react? Describe the feature generically, not by its internal name. -->

## Results

- Three regional systems consolidated into **one global platform** serving thousands of client companies and millions of travelers.
- **Six-figure** projected annual savings.
- A permissions, single sign-on and tokenization foundation that passed **PCI compliance sign-off**.

## What I learned

<!-- TODO(Joel): 2–3 honest lessons, e.g. what you'd do differently on the migration, or how you'd sequence regions next time. -->

Platform work is mostly invisible when it goes well. Making the business case explicit, in numbers, is what kept the program funded and the team focused through a multi-year consolidation.
