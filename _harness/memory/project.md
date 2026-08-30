---
role: agent-memory
scope: project
---

# Project Memory

Durable, verified knowledge for the nested portfolio application. Keep this file concise. Do not store secrets, speculative claims, or task-local notes here.

## Repository boundary

- `portfolio/` is a separate Git repository/submodule inside the parent portfolio evidence workspace.
- The parent `../BahanPortfolio/` directory contains raw and staged project evidence. Its nested repositories are independent and should not be edited incidentally.
- The child application is protected: file writes, public changes, artifact replacement, and harness changes require explicit confirmation.

## Product

- The application is a public personal portfolio and printable résumé experience for Carleano Ravelza Wongso.
- Its audience includes recruiters, engineering leaders, clients, and collaborators evaluating software, systems, AI, and product work.
- The product should lead with verifiable evidence of shipping, make systems thinking legible, and keep the contact path explicit.
- The site currently has no authentication, database, or server-side product workflow.

## Stack and commands

- Astro 7.1 with React 19 and Tailwind CSS 4 through the Vite plugin.
- Strict TypeScript via `astro/tsconfigs/strict`.
- Node.js requirement is `>=22.12.0`; use `pnpm` and the existing lockfile.
- Relevant commands are `pnpm astro check`, `pnpm build`, `pnpm doctor`, and `pnpm build:cv`.
- Development follows `astro dev --background` with the Astro background-server controls in `AGENTS.astro.md`.
- `pnpm build:cv` writes the generated PDF to `public/Resume_CarleanoRavelzaWongso.pdf` and therefore requires explicit scope.

## Current structure

- `src/pages/index.astro` is the current page route.
- `src/components/` contains the header, experience, work, technology marquee, and arrow components.
- `src/layouts/Layout.astro` contains the shared document shell.
- `src/styles/` contains global portfolio styling and résumé print styling.
- `src/scripts/portfolio.ts` contains browser-side menu, navigation, tab, expansion, progress, and reveal behavior.
- `_cv/` contains Typst résumé sources; `public/` contains shipped images, logos, and the résumé PDF.

## Durable conventions

- English is used for harness and agent guidance. Preserve Indonesian source material and user-facing language unless translation is requested.
- Verify every public claim against current code, résumé evidence, project reports, or an explicit user decision. Never fabricate credentials, metrics, dates, testimonials, customers, or technical claims.
- Preserve the established linden, sage, olive, and accent visual family, open editorial layouts, visible focus states, keyboard-operable controls, semantic landmarks, and meaningful image alternative text.
- Consult current framework and library documentation through Context7 before version-sensitive implementation work.
- Use one agent by default; coordinate multiple agents only for independent audits or preparation, and never let them edit the same source file concurrently.

## Deferred decisions

These are known unresolved choices. If a future task reaches one, ask the user rather than selecting a default:

- Whether a public `/resume/` route should exist; current source has `src/archive/resume.astro`, while `src/pages/` currently contains only `index.astro`.
- Which résumé-only details, including phone information, should be exposed on the website.
- Which current project images and evidence are canonical for each portfolio entry.
- Whether the technology marquee should animate as described by `DESIGN.md` or remain aligned with current implementation.
- Conflicting model/version descriptions across résumé and ALPR materials.
- Any changes to career facts, dates, project metrics, publications, links, availability, or education details.

## Memory policy

- Put active plans, inspected paths, temporary hypotheses, unresolved task discrepancies, validation results, and handoffs in `_harness/memory/agents/*.local.md`.
- Promote only verified, stable facts or user-confirmed decisions into this file.
- Remove completed or obsolete local notes; merge or rewrite duplicate durable notes instead of appending noise.
