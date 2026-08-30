---
target: _harness/rules.md
role: agent-instruction
scope: constraints
description: Constraints, boundaries, and evolution rules
---

# Rules and Guardrails

## Protected writes

- `portfolio/` is a separate Git submodule/repository under the parent repository.
- Ask for explicit confirmation before creating, editing, moving, or deleting any file in this repository, including application code, public assets, CV output, generated artifacts with meaningful project impact, and core harness files.
- The setup confirmation authorizes only this initial harness generation. It does not pre-authorize future changes.
- Ask again when an unresolved product choice appears. Do not silently choose a route, phone-number exposure, public claim, project metric, career detail, asset, design behavior, or deployment target.
- Ask before changing Git state, submodule configuration, package manifests, lockfiles, repository configuration, or external integrations.

## Evidence and public truth

- Never invent testimonials, customers, benchmarks, metrics, credentials, dates, job titles, publications, links, or technical claims.
- Verify public claims against current source material, the résumé, project reports, or a user decision.
- Treat draft or conflicting material as unresolved. Record the discrepancy and ask for the choice when implementation reaches it.
- Do not merge conflicting ALPR model/version descriptions without evidence review.
- Treat the résumé route, current image inventory, and design/code marquee behavior as items to verify before changing public behavior.

## Design and accessibility

- Follow `DESIGN.md` for palette, typography, layout, open section structure, tactile controls, and motion vocabulary.
- Preserve semantic landmarks, skip navigation, visible focus states, keyboard-operable tabs, ARIA state, responsive behavior, and meaningful image alternative text.
- Keep new colors within the established linden, sage, olive, and accent family unless the user explicitly changes the visual direction.
- Do not introduce generic SaaS dashboards, glossy gradients, glass cards, persistent ambient card shadows, or decorative UI that competes with evidence.
- Prefer reduced motion and avoid making essential content depend on animation.

## Technical conventions

- Use the existing Astro, React, Tailwind, TypeScript, and pnpm setup unless a confirmed task changes the stack.
- Consult current framework/library/tool documentation through the required Context7 workflow before implementing unfamiliar or version-sensitive APIs.
- Follow `AGENTS.astro.md` for Astro documentation and development-server management.
- Do not add a dependency, route, content system, or build integration when a smaller existing-pattern change is sufficient.
- Keep application content and behavior in their established locations unless the task explicitly includes a structural migration.

## Repository and data safety

- Do not modify any `.git/` directory, `.gitmodules`, credentials, API keys, OAuth secrets, certificates, `.env` files, or private tokens.
- Do not treat `node_modules/`, `.astro/`, `dist/`, caches, or generated Impeccable live state as source files.
- Do not replace tracked résumé PDFs, screenshots, model weights, or other evidence artifacts without explicit scope and confirmation.
- Do not edit nested repositories under `../BahanPortfolio/` as an incidental side effect of a portfolio task.
- External uploads, deployments, Hugging Face or Vercel changes, database resets, and infrastructure actions always require confirmation.

## Harness evolution

- Keep the harness small, composable, and high-signal.
- Change core harness files only through an explicit user-approved update.
- Put verified durable knowledge in `memory/project.md`; put active task context in `memory/agents/*.local.md`.
- Do not create `_harness/agents.md`, duplicate rules in new files, or add instruction layers without explicit approval.

## Confirmation matrix

| Action | Default |
| --- | --- |
| Read, search, inventory, or static analysis | No confirmation |
| Local non-mutating inspection or review | No confirmation |
| Local preview or dev server | No confirmation unless it changes project files or needs external access |
| Any file write in `portfolio/` | Confirm first |
| Public content or claim change | Confirm first, with evidence |
| Delete, move, or replace an artifact | Confirm first |
| Git, dependency, lockfile, or repository configuration change | Confirm first |
| External upload, deployment, secret, or infrastructure action | Confirm first |
