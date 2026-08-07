# Product

<!-- impeccable:product-schema 1 -->

> Initial draft. Audience and purpose are confirmed. Factual details below are sourced from the current site and `public/Resume_CarleanoRavelzaWongso.pdf` and should be corrected in a later pass if they change.

## Platform

web

## Stack

Existing Astro project with the React integration and Tailwind CSS through Vite. The product currently has a single-scroll portfolio at `/` and a résumé route at `/resume/`.

## Users

- Primary: hiring teams, including recruiters and engineering leaders evaluating Carleano for software engineering or AI-focused opportunities.
- Secondary: potential clients and collaborators looking for someone to turn ideas into maintainable products.
- Visitor job: quickly understand engineering depth, shipped work, systems and AI experience, and the best way to start a conversation.

## Product Purpose

A personal portfolio and résumé experience that helps hiring teams assess how Carleano builds reliable software, while also opening conversations about freelance work, collaborations, and ambitious products. Success means a visitor can understand the work, trust the evidence, and contact Carleano without friction.

## Positioning

Draft positioning: an engineer who turns ideas into reliable, maintainable products across web applications, backend systems, cloud infrastructure, AI-powered products, and native Apple-platform work. The proof comes from shipped work, role history, project stories, and measurable outcomes rather than a generic technology list.

## Operating Context

- Public, self-serve web experience for visitors scanning on desktop or mobile; the résumé is also intended to be printed or saved as an A4 PDF.
- The landing page is organized around Home, About, Experience, Projects, Achievements, and Contact, with anchor navigation.
- Current interaction patterns include expandable experience rows, project tabs, a responsive mobile menu, and a reading-progress rail. The résumé includes a print/save action.
- The primary conversion is email contact, with LinkedIn and GitHub as supporting paths.
- Portfolio content is evaluated as evidence of work; future content must not add unsupported claims, testimonials, customers, benchmarks, or credentials.

## Capabilities and Constraints

- Current content covers work at Apple Developer Academy, QuorumAI, freelance development, and Pusilkom UI × PT Medco Energi Internasional Tbk; education at Universitas Indonesia; projects including Lookals, Trisurya, COMPFEST, and an ongoing systems lab; and two 2025 competition awards.
- The current site is a public Astro web project with no authenticated flows or server-side product workflow.
- Existing implementation provides semantic landmarks, a skip link, visible focus states, keyboard-oriented project tabs, ARIA state for expandable controls and mobile navigation, responsive layouts, and image alternative text. No product-specific accessibility standard has been confirmed yet; preserve this baseline.
- Draft facts to verify later: exact job titles and dates, project descriptions and metrics, publication wording, education details, external links, current availability, and which résumé-only details should appear on the website.
- The résumé PDF includes a phone number and personal domain, while the current portfolio uses email, LinkedIn, and GitHub as public contact paths. Whether the phone number should be exposed on the website remains undecided.
- No testimonials or customer quotes are currently on hand. Do not fabricate them.

## Brand Commitments

- Name: Carleano Ravelza Wongso; the current About copy also uses “Carl.”
- Base: Jakarta, Indonesia.
- Existing public identity assets: `public/logo.svg`, `public/favicon.svg`, and `public/Ravel Profile.jpg`.
- Existing public channels: `carleanoravel@gmail.com`, LinkedIn, GitHub, and the `carlravel.tech` canonical domain used by the site.
- Draft voice: direct, technically literate, human, and reliability-focused, with recurring language about shipping, systems, and moving ideas into products. Confirm or revise this later with the product facts.

## Evidence on Hand

- `public/Resume_CarleanoRavelzaWongso.pdf`: one-page résumé containing the current education, experience, project, award, and technical-skill claims; it states that Trisurya was published and presented at an IEEE conference.
- `public/Ravel Profile.jpg`: profile image used by the About section.
- `public/logo.svg` and `public/favicon.svg`: current wordmark and favicon assets.
- `public/projects/LookalsPresentation.jpeg`: the only project image currently on hand; it is used by the project presentation surface.
- The portfolio and résumé routes in `src/pages/` are the current proof surface for the product.

## Product Principles

1. Lead with evidence of shipping, not an undifferentiated list of tools.
2. Make systems thinking and reliability legible to a technically sophisticated visitor.
3. Keep the path from interest to conversation short and explicit.
4. Treat every claim as something a visitor could verify from the available work or résumé.
