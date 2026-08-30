---
name: "Carleano Ravelza Wongso Portfolio"
description: "A calm, tactile field guide to reliable software and the work behind it."
colors:
  primary: "#44624a"
  neutral-bg: "#f1ebe1"
  surface: "#ffffff"
  muted-ink: "#44624a"
  accent: "#8ba888"
  accent-soft: "#c0cfb2"
typography:
  display:
    fontFamily: '"Archivo", "Avenir Next", sans-serif'
    fontSize: "clamp(54px, 7vw, 96px)"
    fontWeight: 560
    lineHeight: "0.94"
    letterSpacing: "-0.03em"
  headline:
    fontFamily: '"Archivo", "Avenir Next", sans-serif'
    fontSize: "clamp(40px, 4.8vw, 68px)"
    fontWeight: 550
    lineHeight: "0.98"
    letterSpacing: "-0.025em"
  title:
    fontFamily: '"Archivo", "Avenir Next", sans-serif'
    fontSize: "clamp(22px, 2.4vw, 33px)"
    fontWeight: 550
    lineHeight: "1"
    letterSpacing: "-0.025em"
  body:
    fontFamily: '"Source Sans 3", "Segoe UI", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
  label:
    fontFamily: '"IBM Plex Mono", "SFMono-Regular", monospace'
    fontSize: "11px"
    fontWeight: 400
    lineHeight: "1.4"
    letterSpacing: "0.045em"
rounded:
  pill: "999px"
  circle: "50%"
  media: "2px"
spacing:
  page-gutter: "20px"
  control: "48px"
  section: "clamp(88px, 9vw, 144px)"
  nav: "76px"
  row: "112px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "0 19px"
    height: "48px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "0 19px"
    height: "48px"
  navigation:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.primary}"
    height: "{spacing.nav}"
  experience-row:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.title}"
    height: "{spacing.row}"
  project-tab:
    backgroundColor: "transparent"
    textColor: "{colors.muted-ink}"
    typography: "{typography.title}"
    height: "92px"
---

# Design System: Carleano Ravelza Wongso Portfolio

## Overview

**Creative North Star: "The Systems Field Guide"**

This visual system treats the portfolio as a field guide to work that has shipped. It is calm and precise enough for a technical reader to scan, but warm enough to keep the person behind the systems visible. The warm ivory canvas, deep green ink, oversized sans-serif headlines, and compact mono labels make the interface feel like a carefully annotated record rather than a generic startup landing page.

The composition stays spacious and editorial while the controls remain tactile. Hairline rules divide the long-form story, a dark project band gives the work a distinct chapter, and small translations, shadows, and expanding rows make interaction feel present without becoming decorative. Future screens should preserve this balance: confident structure, human copy, and evidence-first emphasis.

**Key Characteristics:**

- Warm ivory field with deep green ink and a restrained sage accent range.
- Oversized Archivo display type paired with Source Sans 3 body copy and IBM Plex Mono metadata.
- Twelve-column desktop compositions, thin section rules, and generous vertical breathing room.
- Pill-shaped actions with small lift and arrow motion; circular controls for compact toggles.
- A dark project chapter and restrained multiply-tinted imagery that let proof carry the visual weight.

## Colors

The palette uses five deliberate colors, with tonal contrast and one dark structural plane instead of a collection of unrelated hues.

### Primary

- **Deep green ink (#44624a):** The main text, primary action, dark project surface, and strongest structural line.

### Neutral

- **Warm ivory (#f1ebe1):** The default page canvas and translucent sticky-header base; it keeps the long scroll light and continuous.
- **White (#ffffff):** High-contrast content on dark sections and the clean contact surface.
- **Pale sage (#c0cfb2):** Soft interaction tints and quiet secondary surfaces.
- **Sage green (#8ba888):** Rules, active accents, progress fill, and multiply overlays; use it as a signal rather than a second dominant voice.

**The Five-Color Rule.** Keep new color decisions inside the approved deep green, sage, pale sage, ivory, and white palette unless a future product decision explicitly changes the visual world.

## Typography

**Display Font:** Archivo (with Avenir Next and sans-serif fallbacks)  
**Body Font:** Source Sans 3 (with Segoe UI and sans-serif fallbacks)  
**Label/Mono Font:** IBM Plex Mono (with SFMono-Regular and monospace fallbacks)

**Character:** Archivo supplies a wide, assertive voice for headlines without becoming theatrical. Source Sans 3 keeps paragraphs approachable, while IBM Plex Mono turns section numbers, dates, and metadata into a quiet engineering annotation layer.

### Hierarchy

- **Display** (560, `clamp(54px, 7vw, 96px)`, `0.94` line-height): Hero statement and résumé masthead; the largest proof of confidence.
- **Headline** (550, `clamp(40px, 4.8vw, 68px)`, `0.98` line-height): Section titles and major statements.
- **Title** (550, `clamp(22px, 2.4vw, 33px)`, `1` line-height): Experience rows and project navigation names.
- **Body** (400, `16px`, `1.6` line-height): Explanatory copy, with longer text constrained to readable measure.
- **Label** (400, `11px`, `0.045em` tracking): Eyebrows, metadata, dates, and technical annotations; use compact mono rather than heavy all-caps display treatment.

**The Headline-First Rule.** Let one oversized statement establish the section before supporting copy explains it; do not flatten the hierarchy into equal-sized cards or labels.

## Layout

The desktop shell is a centered container capped at 1280px with a 20px page gutter. The hero uses a twelve-column grid with the statement spanning eight columns and actions occupying the remaining four. About and recognition use asymmetric image/copy or lead/list splits; experience uses a 5/7 heading split; the project stage uses a 4/8 index-to-panel split. Section rhythm is generous, with vertical padding ranging from 88px to 144px and hairline rules marking chapter changes.

At 1100px the shell and grid tighten; at 820px the primary navigation gives way to the circular mobile menu and multi-column compositions collapse into readable stacks. At 600px the page gutter narrows to 14px and controls wrap naturally. The résumé keeps its own 1080px measure, collapses to one column below 700px, and preserves an A4 print layout.

**The Chapter Rule.** Use spacing and rules to separate narrative chapters; do not turn every content block into a floating card.

## Elevation & Depth

Depth is mostly structural: the pale field, sage surface, deep project band, image overlays, and thin rules establish planes before shadows do. The selected component philosophy adds a tactile lift to actions: buttons translate upward on hover with a small contact shadow, while project panels and images remain flat at rest. The result should feel physical at the point of interaction but quiet everywhere else.

### Shadow Vocabulary

- **Contact shadow:** A one-pixel shadow under resting buttons keeps the pill grounded without making it look elevated.
- **Hover lift:** A soft 8px by 20px shadow appears with a 2px upward translation on interactive buttons only.
- **No ambient card shadow:** Containers, project panels, and section bands rely on tone and rules instead of persistent blur.

**The Tactile-Only Rule.** Use elevation as feedback for an action or state, never as decoration on passive content.

## Shapes

Actions and compact controls use fully rounded pills (999px), while menu and expand controls use perfect circles (50%). Project imagery clips to a nearly square 2px radius. Content sections are otherwise open rectangles with no card shells; thin borders and horizontal rules do the framing. Focus rings remain visible and offset so the rounded silhouettes do not erase keyboard state.

## Components

### Buttons

- **Shape:** Fully rounded pill (999px), minimum 48px height, with horizontal padding around 19px.
- **Primary:** Deep green fill with white text; use for the main work/contact action and the header CTA.
- **Secondary:** Transparent ivory field with a deep green border and text; use for the résumé and lower-priority paths.
- **Hover / Focus:** Lift 2px, add the soft hover shadow, darken toward the ink color, and keep a 3px visible focus outline with 4px offset. Arrow icons move 3px horizontally on hover.

### Navigation

- **Style:** Sticky 76px header with a translucent linden background and 16px backdrop blur; wordmark left, centered anchor links, and a pill CTA right.
- **Active state:** Deep olive text plus a one-pixel underline that grows from the left.
- **Mobile treatment:** Replace the link cluster with a 46px circular menu button and a full-width clipped menu panel; preserve the same mono numbering and linden/olive contrast.

### Experience Rows

- **Structure:** Open rows with a top rule and bottom dividers, a minimum 112px rhythm, and a five-column desktop grid for index, company, role, date, and expand control.
- **Interaction:** Hover tint and a 4px role nudge provide feedback; the 44px circular plus control rotates 45 degrees while the detail row expands.
- **Content:** Keep the employer and role distinct so scanning remains possible before the longer detail is opened.

### Project Stage

- **Structure:** A dark olive chapter with a left project index and a right panel; tab rows are 92px tall and active state is carried by color and the arrow mark.
- **Panel:** Use a 16:9 image area with a nearly square clip, followed by a two-column copy/facts split. Keep facts in mono labels and short values.
- **State:** Switching tabs reveals one panel at a time and preserves the visitor's selected project locally.

### Image Treatment

- **Portrait:** Grayscale and slightly contrasty at rest, with an olive multiply veil that clears on hover.
- **Project imagery:** Use the same tonal overlay logic so images sit inside the field guide rather than becoming unrelated full-color posters.

### Technology Marquee

- **Style:** A low-key horizontal logo rail with a soft edge mask, compact mono heading, and a slow 34-second linear loop.
- **Role:** Supporting evidence of tools used; it should never compete with the project stories or hero statement.

## Do's and Don'ts

### Do:

- **Do** keep the pale linden, sage, deep olive, and accent-line roles coherent across new surfaces.
- **Do** give each section one clear typographic lead and let supporting copy remain readable and human.
- **Do** use thin rules, open layouts, and dark chapter bands to organize long-form evidence.
- **Do** make actions feel tactile through pill geometry, clear focus, and small purposeful motion.
- **Do** preserve the warm, technically literate voice of a field guide to shipped work.

### Don't:

- **Don't** introduce generic startup SaaS tropes such as glossy gradient hero treatments, glass cards, or dashboard-like UI chrome.
- **Don't** add unrelated hues or persistent shadows that compete with the single-family palette and tonal depth.
- **Don't** turn every experience, project, or achievement into a rounded card grid; the incumbent system is defined by open rows and rules.
- **Don't** let the technology marquee, decorative motion, or imagery overpower the evidence and the person behind it.
