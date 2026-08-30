---
target: _harness/workflow.md
role: agent-instruction
scope: workflows
description: Execution flows and procedures
---

# Workflows

## Standard task flow

1. Read `AGENTS.md` and classify the request.
2. Route to the smallest relevant context using `routing.md`.
3. Inspect the current implementation, working tree, and applicable source evidence.
4. Identify protected paths, public-facing effects, generated outputs, and unresolved decisions.
5. State the exact files and intended change, then obtain confirmation before writing.
6. Make the smallest coherent change. Do not mix unrelated cleanup into the task.
7. Run the narrowest relevant validation command and inspect its output.
8. Review the diff, confirm no secrets or generated noise were included, and report changes, checks, and remaining uncertainty.

## UI and interaction changes

1. Read `DESIGN.md`, the relevant component/layout/style files, and `src/scripts/portfolio.ts` when behavior is involved.
2. Preserve existing semantic structure, focus behavior, keyboard interaction, ARIA state, responsive breakpoints, and reduced-motion behavior.
3. Confirm any change to visual direction, public navigation, route exposure, or content hierarchy before editing.
4. Validate with `pnpm astro check` and `pnpm build`; use a local preview or browser review when visual behavior matters.

## Content and evidence changes

1. Read `PRODUCT.md` and `memory/project.md`.
2. Locate the supporting source in the résumé, current application, or explicitly named material under `../BahanPortfolio/`.
3. Separate verified facts, draft facts, and unresolved choices.
4. Present the claim changes and sources for confirmation before editing public content.
5. Recheck links, wording, dates, metrics, and accessibility text after the edit.

## Résumé and print changes

1. Inspect `_cv/CV.typ`, `_cv/resume.typ`, the relevant résumé page/style source, and the current public PDF.
2. Confirm whether the change applies to source, web presentation, generated PDF, or all of them.
3. Obtain confirmation before changing résumé facts, public contact exposure, print layout, or the generated PDF.
4. Use `pnpm build:cv` only when PDF regeneration is explicitly in scope; it writes to `public/Resume_CarleanoRavelzaWongso.pdf`.
5. Validate the relevant route and print behavior, then inspect the generated artifact without committing incidental output.

## Asset and parent-evidence workflow

1. Inspect existing public assets before sourcing or creating replacements.
2. If evidence is needed, route to the parent harness and inspect only the named material under `../BahanPortfolio/`.
3. Treat nested project repositories as read-only unless the user explicitly names that repository and confirms the edit.
4. Confirm before replacing, deleting, publishing, uploading, or changing the public meaning of an asset.

## Local development and validation

- Development: use `astro dev --background` and manage it with `astro dev status`, `astro dev logs`, and `astro dev stop` as described in `AGENTS.astro.md`.
- Type and Astro validation: `pnpm astro check`.
- Production build: `pnpm build`.
- React Doctor review: `pnpm doctor`; it uses `npx react-doctor@latest` and may require external access.
- Résumé generation: `pnpm build:cv`; this is a write operation and requires explicit scope.
- There is currently no standard portfolio test or lint script. Do not claim tests passed when only type checking or building was run.

Choose commands based on the changed surface. Build output under `dist/` and Astro-generated state are validation artifacts, not source to edit manually.

## Harness maintenance workflow

1. Propose the smallest rule, route, workflow, or memory change that addresses the observed gap.
2. Obtain explicit approval before editing core harness files or durable project memory.
3. Keep task-local notes in `memory/agents/*.local.md` and remove them when the task is complete.
4. Run the harness audit skill when a harness-quality review is requested.
5. Summarize preserved rules, changed guidance, and any remaining drift.
