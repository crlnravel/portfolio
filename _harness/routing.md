---
target: _harness/routing.md
role: agent-instruction
scope: task-routing
description: Task-to-file mapping
---

# Task Routing

## Entry sequence

1. Read `AGENTS.md`.
2. Read only the route below that matches the task.
3. Read `rules.md` before any write or public-content decision.
4. Read `workflow.md` when executing, validating, or handing off work.

Do not load the entire parent repository or every harness file by default.

## Routes

| Task | Read first | Then inspect |
| --- | --- | --- |
| Project overview | `readme.md` | `PRODUCT.md`, current pages |
| File or module lookup | `catalog.md` | The named directory or file only |
| Any implementation or edit | `rules.md`, `workflow.md` | The smallest relevant source set |
| Product copy, claims, dates, metrics, career history, or links | `PRODUCT.md`, `memory/project.md` | `../BahanPortfolio/`, résumé evidence, and current page content |
| Landing-page layout or components | `DESIGN.md` | `src/pages/`, `src/components/`, `src/layouts/` |
| Styling, responsive behavior, or visual review | `DESIGN.md` | `src/styles/`, relevant component, and existing Impeccable skill guidance |
| Browser interactions, tabs, menu, expansion, progress, or reveal behavior | `AGENTS.astro.md` | `src/scripts/portfolio.ts`, relevant component, and page markup |
| Routes, Astro components, React integration, content collections, or Tailwind | `AGENTS.astro.md`, `rules.md` | Relevant Astro config, page/component, and current dependency versions |
| Résumé content or print layout | `PRODUCT.md`, `DESIGN.md` | `_cv/`, `src/archive/`, `src/styles/resume.css`, and public PDF |
| Public image or logo work | `rules.md`, `PRODUCT.md`, `DESIGN.md` | `public/`, then parent evidence only when explicitly needed |
| Accessibility, responsive, or performance audit | `DESIGN.md`, `workflow.md` | Relevant rendered route, source, and browser behavior |
| Local validation | `workflow.md`, `package.json` | Only the command-relevant output and source |
| Harness self-audit or harness change | `_harness/skills/harness/SKILL.md`, `rules.md` | Relevant `_harness/` files and `AGENTS.md` |
| Parent evidence or staged content | `../_harness/routing.md`, `../_harness/rules.md` | The explicitly named `../BahanPortfolio/` material |
| Nested EduVate, QuorumAI, or ALPR source | Parent harness first | The named child repository's own guidance and lockfile |

## Source precedence

Use current implementation and directly inspectable evidence before draft prose or historical critique. Treat `PRODUCT.md` and `DESIGN.md` as important guidance, not permission to override current code without review. For public factual claims, require a source path or an explicit user decision.

## Context boundaries

- `portfolio/` is a separate repository and protected application.
- `../BahanPortfolio/` is evidence/staging context, not an automatic edit target.
- Nested Git repositories are independent projects.
- `.impeccable/` is generated tool state, not durable product documentation.
- `_harness/memory/agents/*.local.md` is task-local context and should not be used as project truth.
