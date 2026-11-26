---
title: From weeks to hours for stuck reservations
summary: An internal tool that let support find and fix stuck travel reservations (PNRs) themselves, instead of waiting weeks in an engineering queue.
org: Corporate Travel Management
role: Product Manager
timeframe: 2022–2026
order: 2
tags: [Internal tools, Workflow automation, Support operations]
outcomes:
  - value: Six figures
    label: saved every year
  - value: Weeks → hours
    label: to resolve a stuck reservation
  - value: −20%
    label: errors in the resolution process
---

## The problem

A PNR (passenger name record) is the reservation record that ties a trip together. When one got **stuck**, support had no good way to see what had happened, and fixing it could take **weeks**.

<!-- TODO(Joel): how did a stuck PNR get noticed, who was waiting on it, and roughly how many happened per month? -->

## My role

Product manager for the tool, from defining the problem with the support team through launch.

## What we built

A **full-stack PNR-tracking tool for support**: one place to look up a reservation, see where it got stuck and act on it.

<!-- TODO(Joel): the 2–3 capabilities that mattered most (e.g. search, status history, one-click retry or escalation) and any you deliberately left out. -->

## Key decisions

<!-- TODO(Joel): the main tradeoff, for example building an internal tool instead of fixing root causes upstream, or which user (support agent vs. engineer) you designed for first. -->

- **Design for the people doing the work.** Support staff, not engineers, were the primary users, so the tool had to answer "what's wrong and what do I do?" without needing system knowledge.

## Results

- Stuck-reservation resolution went from **weeks to hours**.
- **Six-figure** annual savings.
- **20% fewer errors** in the process.

## What I learned

<!-- TODO(Joel): a lesson about internal tools, e.g. how you measured the savings or how adoption went. -->
