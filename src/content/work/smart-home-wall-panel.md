---
title: A smart-home wall panel, built with AI
summary: A side project where I directed an AI coding assistant to turn a locked-down Fire tablet into a touch control panel for my smart lights, and treated it like a real product.
org: Personal project
role: Product owner, directing AI-assisted development
timeframe: Nov 2026
order: 3
tags: [AI-assisted development, Prototyping, Security, Hardware]
outcomes:
  - value: ~70%
    label: fewer idle network requests (16 → 5 per minute)
  - value: ~85%
    label: fewer page redraws (820 → 123 per minute)
  - value: '25'
    label: automated tests guarding the build
---

## The problem

I wanted a simple wall panel to control my Govee smart lights: tap a scene, turn everything off at night. The hardware I had was an Amazon Fire HD 8 tablet, which is full of preinstalled apps and has a **locked bootloader**.

## My role

I acted as product owner: setting goals and constraints, making the calls on scope and risk, and directing an AI coding assistant (Claude Code) to do the implementation, research and testing.

## Key decisions

### Choose the realistic path over the ambitious one

Reflashing the tablet with a clean OS wasn't possible because of the locked bootloader. Instead of betting the project on fighting the hardware, I turned Fire OS into a **single-purpose kiosk** with Fully Kiosk, and disabled 23 preinstalled apps, every change logged with its undo command so it could be reversed.

### Don't wait on dependencies

The dashboard was built with a **demo mode** first, so the UI could be designed and tested before an API key even existed. That kept the feedback loop short.

### Test on the real thing

Tests against a fake server all passed. Testing on the **real lamp** revealed that Govee's API never reports toggle or scene state, a bug that would have made the gradient switch flip back to "off" every 15 seconds. It was fixed before I relied on it.

### Time-box the experiment, accept the answer

I also wanted my Wyze video doorbell on the panel. We researched and tested the integration options and found the cause of the failure: the open-source streaming bridge (go2rtc) doesn't support this doorbell's camera type. Rather than sink more time into a closed ecosystem, I **accepted the negative result with evidence** and moved on.

### Keep secrets off the client

The Govee API key stays on my home PC and **never reaches the tablet**. The local service validates input and is protected against cross-site requests, path traversal and oversized requests. Credentials used during the Wyze testing were deleted once they weren't needed.

### Measure before optimizing

The panel runs all day, so idle activity matters. We **measured first**, then optimized only the parts we could safely verify: adaptive polling and a clock that updates once a minute.

## Results

| Metric (idle, per minute) | Before | After |
|---|---|---|
| Network requests | 16 | 5 |
| Page redraws | 820 | 123 |

*Measured in a test browser, not on the tablet itself.*

- Scenes, all-on/off, 12 color presets, custom colors with favorites, and per-segment control of a 4-segment lamp with its 107 built-in scenes.
- A local server that restarts automatically when the PC signs in, after we found it had silently stopped once.
- 25 automated tests.

## What I learned

- **AI makes building cheap, so judgment becomes the bottleneck.** The most valuable things I did were scoping, deciding what not to build, and insisting on real-hardware testing.
- **Reversibility lowers the cost of being wrong.** Logging every change with its undo made it easy to experiment on a device I depend on.
- **A clear "no" is a result.** Documenting why the doorbell integration is blocked saves the next attempt from starting over.
