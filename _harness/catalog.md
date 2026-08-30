---
target: _harness/catalog.md
role: agent-instruction
scope: structure-lookup
description: Project structure and module lookup
---

# Project Catalog

## Application structure

| Path | Role |
| --- | --- |
| `src/pages/index.astro` | Current landing-page route and page composition |
| `src/components/` | Shared portfolio sections: header, experience, work, technology marquee, and arrow control |
| `src/layouts/Layout.astro` | Shared document shell and page metadata/layout |
| `src/styles/global.css` | Portfolio tokens, layout, responsive styling, and interaction states |
| `src/styles/resume.css` | Résumé-specific styling and print rules |
| `src/scripts/portfolio.ts` | Client-side navigation, menu, tabs, expansion, progress, and reveal behavior |
| `src/archive/resume.astro` | Archived résumé page source; its public route is not currently confirmed |
| `src/assets/` | Local Astro assets; currently empty |
| `public/` | Shipped static assets, logos, profile image, project images, and résumé PDF |
| `public/projects/` | Project visuals for Compfest, Eduvate, Indonesian ALPR, Lookals, Quorum AI, and Trisurya |
| `_cv/CV.typ` | Primary Typst résumé source used by `build:cv` |
| `_cv/resume.typ` | Additional Typst résumé source; inspect before changing CV output |
| `_harness/` | Agent routing, constraints, workflows, memory, GC policy, and skills |

## Configuration and commands

| Path | Role |
| --- | --- |
| `package.json` | Scripts, Astro/React/Tailwind dependencies, and Node engine requirement |
| `astro.config.mjs` | React integration and Tailwind Vite plugin configuration |
| `tsconfig.json` | Strict Astro TypeScript configuration and React JSX settings |
| `pnpm-workspace.yaml` | pnpm policy and allowed dependency build settings |
| `AGENTS.md` | Harness entrypoint and setup/normal-use routing |
| `AGENTS.astro.md` | Astro development-server and documentation guidance |
| `PRODUCT.md` | Product facts, audience, evidence policy, and unresolved content questions |
| `DESIGN.md` | Visual language, typography, layout, component, and accessibility-adjacent conventions |

## Parent repository context

| Path | Role |
| --- | --- |
| `../BahanPortfolio/` | Raw and staged evidence for future portfolio content |
| `../_harness/` | Parent-repository agent guidance; consult when a task crosses the application boundary |
| `../.gitmodules` | Declares `portfolio/` as a separate Git submodule |
| `../.kilo/plans/` | Parent planning artifacts; not application source |
| `../.tmp/` | Parent temporary reports and audit artifacts |

Nested project repositories under `../BahanPortfolio/` keep their own source, dependencies, and lockfiles. Do not edit them as an incidental part of a portfolio task.

## Generated and protected areas

Treat `.git/`, `node_modules/`, `.astro/`, `dist/`, generated Impeccable live state, secrets, and environment files as non-source data. Do not inspect or modify secret contents. Treat the whole `portfolio/` repository as protected for write operations; see `rules.md` for confirmation requirements.
