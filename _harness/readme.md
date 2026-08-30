---
target: _harness/readme.md
role: agent-instruction
scope: project-context
description: Project context and harness overview
---

# Portfolio Harness

## Scope

This harness governs the nested `portfolio/` repository. The parent repository is a portfolio evidence workspace; it contains source repositories, screenshots, notebooks, reports, model artifacts, and other material that may support this site. Parent-repository context is relevant when a task explicitly asks for evidence or content preparation, but parent files are not automatically part of the application.

## Project

This is a public Astro portfolio and printable résumé experience for Carleano Ravelza Wongso. It presents engineering experience, shipped projects, AI and systems work, achievements, public contact paths, and a visual identity centered on reliable software and evidence of shipping.

The application is static and currently has no authentication, database, or server-side product workflow. Most content is authored in Astro components and frontmatter. Browser behavior is implemented in TypeScript.

## Stack

- Astro 7 with the React 19 integration
- Tailwind CSS 4 through the Vite plugin, plus custom CSS
- Strict TypeScript with the Astro strict config
- Typst sources under `_cv/` for résumé generation
- `pnpm` and Node.js 22.12 or newer

## Agent operating model

1. Read `AGENTS.md` first.
2. Classify the task and load only the relevant harness files.
3. Inspect current code and evidence before proposing a change.
4. Ask for confirmation before protected or ambiguous changes.
5. Make the smallest coherent change and validate it with the relevant project command.
6. Review the resulting diff and state unresolved facts or decisions explicitly.

## Source of truth

- `PRODUCT.md` contains product purpose, audience, claims guidance, and evidence notes; it is partly draft material.
- `DESIGN.md` contains the visual system and design constraints.
- `src/` contains the current application behavior.
- `public/` contains shipped public assets.
- `../BahanPortfolio/` contains parent-repository evidence and staging material.
- `_harness/memory/project.md` contains only verified durable project knowledge.

When these sources disagree, prefer current code and directly verifiable evidence, record the discrepancy, and ask before choosing a public-facing interpretation.

## Harness map

- `routing.md`: task-to-file and context routing
- `catalog.md`: current structure and important paths
- `rules.md`: hard constraints, safety boundaries, and confirmation gates
- `workflow.md`: execution and validation procedures
- `memory/project.md`: durable facts and confirmed conventions
- `memory/agents/*.local.md`: task-local working context

The harness is intentionally minimal. Do not create `_harness/agents.md` or additional instruction layers unless the user explicitly approves them.
