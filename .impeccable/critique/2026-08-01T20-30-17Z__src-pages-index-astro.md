---
target: second-pass critique of the portfolio homepage
total_score: 24
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-08-01T20-30-17Z
slug: src-pages-index-astro
---
## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---:|---|
| 1 | Visibility of system status | 3/4 | Active navigation, scroll rail, accordion state, and project selection are clear; mailto and native print actions provide no in-page confirmation. |
| 2 | Match between system and real world | 3/4 | Plain section and résumé conventions fit the audience; RAG, Neo4j, and similar terms are not framed for less-technical collaborators. |
| 3 | User control and freedom | 3/4 | Anchor navigation, résumé back path, toggles, and Escape-close menu work well; external/native actions have no bespoke recovery. |
| 4 | Consistency and standards | 3/4 | The component language is cohesive, but the project image/content mismatch and résumé mode split weaken consistency. |
| 5 | Error prevention | 3/4 | There are no risky forms or destructive actions; stale project imagery and print/cancel behavior can still mislead. |
| 6 | Recognition rather than recall | 3/4 | Headings, dates, labels, and active states are visible; mobile hides experience roles/dates and the VEL. wordmark does not identify the owner. |
| 7 | Flexibility and efficiency | n/a | Experience portfolio; no expert accelerator is expected for the primary task. |
| 8 | Aesthetic and minimalist design | 3/4 | The visual world is distinctive and spacious, but portrait tint, hero whitespace, and repeated project imagery can compete with proof. |
| 9 | Error recovery | 3/4 | Back/anchor paths and reversible toggles are clear; there is no in-page recovery if an external link or print action fails. |
| 10 | Help and documentation | n/a | Experience portfolio; a product help system is not required. |
| **Total** |  | **24/32** | **Good, 75%** |

## Design Specificity Verdict

The portfolio is strongly authored. The pale linden/deep olive field, oversized Archivo typography, mono annotations, open rule-divided rows, progress rail, dark project chapter, and tactile controls make “The Systems Field Guide” legible immediately. It does not feel like a category-interchangeable template.

The main specificity and credibility drop is in the proof layer: every project tab uses `public/projects/LookalsPresentation.jpeg`, including Trisurya, COMPFEST, and Systems lab. The selected content changes while the visual evidence still says LOOKALS. The About headline “I love to move fast and break things!” is also a generic developer trope that conflicts with the reliability positioning in `PRODUCT.md`.

The deterministic detector found no findings in `src/pages/index.astro`, imported markup, `src/layouts/Layout.astro`, `src/scripts/portfolio.ts`, or `src/pages/resume.astro`. It found 25 supplemental CSS findings in `src/styles/global.css`: one `layout-transition` warning at line 326 (`transition: height`) and 24 advisory `design-system-font-size` findings at lines 126, 144, 227, 334, 396, 500, 508, 610, 621, 671, 693, 700, 722, 727, 733, 840, 857, 869, 999, 1007, 1083, 1100, 1124, and 1145. `src/styles/resume.css` has two advisory font-size findings at lines 11 and 23. The 22 findings in unused starter `src/components/Welcome.astro` are out of scope/false positives for this surface.

No reliable user-visible `[Human]` overlay is available: the Browser connector reported no available browser, so the evidence pass could only confirm the live/detect endpoints with `curl`. The independent design pass used fresh Playwright pages for desktop/mobile and the key interactions.

## Overall Impression

This is a memorable, calm portfolio that earns attention through a coherent visual point of view and a well-structured evidence path. It is strongest when the interface and proof agree—experience rows, the dark project chapter, and the contact end-state. The single biggest opportunity is to make every visual and verbal signal reinforce the reliability promise, especially on mobile and inside project tabs.

## What's Working

- The visual system is distinctive and internally coherent. The linden/olive palette, mono annotations, hairline rules, and dark work chapter create a recognizable field-guide identity.
- The information architecture is evidence-first. Experience details open in place, project facts sit beside the selected work, and long-scroll anchors plus active states support scanning.
- The interaction and accessibility baseline is strong: semantic landmarks, skip link, visible focus, ARIA expanded/hidden/selected states, keyboard project-tab navigation, Escape-close menu, and 44–48px targets.

## Priority Issues

### [P1] Project evidence is visibly inconsistent

**Why it matters:** Selecting Trisurya, COMPFEST, or Systems lab changes the heading, copy, and facts while the artwork still shows LOOKALS. Recruiters use visual proof as a trust signal; this reads like a stale or broken case study.

**Fix:** Give each project an intentional media field. Use project-specific artwork where available; otherwise use a neutral “case study in progress” treatment, diagram, code crop, or explicit no-image panel. Never reuse a named project image for unrelated tabs.

**Suggested command:** `$impeccable polish`

### [P1] Mobile Experience hides the role and date

**Why it matters:** At narrow widths the rows show only employer names. Visitors cannot tell whether Apple Developer Academy represents Product Researcher & Developer, or what period each role covers—the proof most relevant to a hiring decision.

**Fix:** Keep a compact role/date line in each row, or include both fields in the expanded detail. Use a two-line metadata layout instead of deleting the evidence at `<=1100px` and `<=600px`.

**Suggested command:** `$impeccable adapt`

### [P1] About voice and portrait treatment undermine reliability

**Why it matters:** “I love to move fast and break things!” suggests recklessness against the hero promise that software should stay reliable. The heavy olive multiply veil makes the portrait hard to read by default, and hover cannot rescue that on touch devices.

**Fix:** Replace the headline with a human, reliability-aligned statement without adding unsupported claims. Lighten the static veil or make the portrait readable by default on touch; reserve the stronger tint for hover/interaction.

**Suggested command:** `$impeccable clarify`

### [P2] The first viewport does not clearly identify the person

**Why it matters:** The VEL. wordmark is memorable but does not say Carleano Wongso, and the hero has no role label. A first-time recruiter sees a strong slogan before knowing whose portfolio it is.

**Fix:** Pair the wordmark with the full name/role in the header or add a compact identity cue in the first viewport. Keep the reliability statement as the dominant headline.

**Suggested command:** `$impeccable layout`

### [P2] Hero choice density and résumé handoff need one more hierarchy pass

**Why it matters:** Six nav anchors, two hero CTAs, and two social links compete with the primary hiring path while the desktop hero leaves a large empty field. The résumé route is polished and print-ready but visually changes mode and gives Print / save PDF equal weight to Back to portfolio.

**Fix:** Choose one primary conversion for the hero, demote social links to Contact/footer, and use the freed space for identity or verified evidence. On the résumé route, keep Back as the secondary control, add a short screen/A4 cue near print, and verify 320px wrapping.

**Suggested command:** `$impeccable layout`

## Persona Red Flags

### Jordan — first-timer

- The VEL. wordmark and slogan do not identify Carleano or the role within the first viewport.
- RAG, Neo4j, SwiftUI, and real-time collaboration are not framed for a non-technical client or collaborator.
- Mobile Experience removes role/date context, making employer names ambiguous.
- The Trisurya tab showing LOOKALS artwork looks like a stale case study.

### Riley — stress tester

- Switching tabs reproduces the visual/content mismatch; localStorage can preserve a later project selection across refresh.
- Native print and external links rely on browser behavior without a visible cancelled/failed state.
- Long company names and project facts should be checked at 320px and under text zoom.

### Casey — distracted mobile user

- Touch targets and the menu are good, but key experience proof is removed on mobile and contact links continue below the first contact viewport.
- The project and experience evidence sits after a long scroll, so interruption makes the primary proof easy to lose.
- Menu metadata is close to the bottom edge on short screens; preserve enough bottom padding if the menu grows.

## Minor Observations

- Later sections are numbered 02–06, but the hero has no 01 · Home marker; this may be intentional, but the sequence suggests a missing chapter.
- The technology marquee is polished but currently reads as a logo résumé strip; one sentence about why the tools matter could make it more evidentiary.
- About, hero, and résumé use slightly different identity labels; unify the hierarchy of Software Engineer, AI Builder, and Computer Science Student.
- Contact links use both ↗ and →; standardize if arrows are part of the interaction language.
- The mobile menu’s focus handling is good for the current controls; add a true focus trap only if the menu gains more interactive content.

## Questions to Consider

- What if the first viewport named Carleano and showed one verified proof point instead of only a slogan?
- Is “break things” an intentional stance, and if so, how does it coexist with reliability as the brand promise?
- Should a project tab switch only when its image/evidence is genuinely available?
- Which conversion matters most to recruiters: selected work, résumé, or conversation?
- Could the portrait be readable by default on touch devices, with the tint reserved for hover/interaction?
