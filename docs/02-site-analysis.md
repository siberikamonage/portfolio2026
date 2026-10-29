# Site analysis — isoldarts.framer.website

Captured 2026-10-29 with a headless browser at 1440 / 810 / 390 px. Values marked
`~` are estimates; everything else was read from the rendered page or its CSS.

Reference material saved next to this file:

- `reference/screenshots/` — full-page captures (desktop + mobile) of the three live pages
- `reference/content/` — raw text of each live page, in reading order
- `reference/assets-manifest.json` — every image and font URL, per page

---

## 1. Overview

**Owner:** Alina / Isabella / 逸瑶 — product designer (B2B / FinTech / HR Tech, ex-Sber).
**Goal of the site:** get hired. Primary CTA is "Hire me" (jumps to contacts), secondary is "CV" (Google Drive PDF).
**Look:** minimal, editorial, large grotesk headlines. Dark home page (near-black), light case-study pages (white), big rounded image cards, lots of whitespace.

### Sitemap

```
/                                  Home (dark)       — hero, projects, about, contacts
/technobrand                       Case study (light) — "Gateway for IT Talents"
/sbertreasury                      Case study (light) — "Enterprise financial managing system"

Unlinked CMS leftovers (in sitemap.xml, not reachable from navigation):
/mini-articles/sber-treasury       draft template, placeholder text
/mini-articles/cards-app           draft template, placeholder text
/large-articles/gateway-for-it-talents   draft, older copy of technobrand
/large-articles/sbertreasury       draft, placeholder text ("text", "All of the pages…")
/large-articles/cards-app          draft, placeholder text
```

**Recommendation:** rebuild only the 3 live pages. The `/mini-articles/*` and `/large-articles/*` pages are unfinished Framer CMS templates and shouldn't be carried over.

Anchors on home: `#projects`, `#about`, `#contacts`.

---

## 2. Design tokens

### Colors

| Token | Value | Use |
|---|---|---|
| `bg-dark` | `#080808` | Home page background, dark buttons, case-study "Hire me" pill |
| `bg-light` | `#FFFFFF` | Case-study background, primary button on dark |
| `surface-light` | `#F5F5F5` | Case-study grey panels (journey map, carousels, stat cards) |
| `surface-light-2` | `rgba(8,8,8,0.04)` | Quote/comment boxes on light pages |
| `btn-secondary-dark` | `rgba(255,255,255,0.24)` | "CV", "Read Story", social buttons on dark |
| `btn-secondary-dark-hover` | `rgba(255,255,255,0.16)` | hover of the above |
| `btn-primary-dark-hover` | `rgba(255,255,255,0.88)` | hover of white "Hire me" |
| `text-on-dark` | `#FFFFFF` | |
| `text-on-dark-muted` | `rgba(255,255,255,0.6)` | project meta (year, field, tags) |
| `text-on-dark-subtle` | `rgba(255,255,255,0.64)` | footer copyright |
| `hero-muted-word` | `#5E5E5E` (rgb 94,94,94) | grey words in hero / about headlines |
| `text-body-muted-dark` | `#707070` (rgb 112,112,112) | about paragraph on home |
| `text-on-light` | `#080808` | |
| `text-on-light-muted` | `rgba(8,8,8,0.6)` | labels ("Timeline", "Field"…), captions |
| `accent-technobrand` | `#3D83F7` | highlighted stat card on /technobrand |
| `accent-sbertreasury` | `#17806E` | highlighted stat card on /sbertreasury |
| `overlay` | `rgba(0,0,0,0.2)` | carousel arrow buttons |

No dark/light mode toggle; each page has a fixed theme.

### Typography

Fonts (all self-hosted by Framer as woff2; URLs in `reference/assets-manifest.json`):

| Family | Weights used | Role |
|---|---|---|
| **Sharp Grotesk Book 20** | 400 | All display headings and big stat numbers |
| **Neue Montreal** (Regular / Medium / Italic) | 400, 500, 400i | Body, nav, buttons, meta |
| Sharp Grotesk Bold 05, Neue Montreal Bold / Medium Italic | — | Loaded but not seen in use |
| Inter | — | Framer default fallback only |

⚠️ Both Sharp Grotesk (Sharp Type) and Neue Montreal (Pangram Pangram) are **commercial fonts**. Copying the woff2 files from Framer's CDN into a public repo is not covered by a license. Need a decision — see §9.

Type scale (size / line-height / letter-spacing):

| Role | Desktop (≥1200) | Mobile (<810) | Font |
|---|---|---|---|
| Case-study title (H1) | 88 / 96 / -3.52px (-0.04em) | 40 / 48 / -1.6px | Sharp Grotesk |
| Big stat number | 88 / 96 / -3.52px | 40 / 48 / -1.6px | Sharp Grotesk |
| Home hero / section H1 | 64 / 76.8 / -2.56px (-0.04em) | 40 / 48 / -1.6px | Sharp Grotesk |
| Section H2 ("Context", project titles) | 48 / 52 / -1.92px | 32 / 36–40 / -1.28px | Sharp Grotesk |
| H3 ("The Entrance Gate Insight") | 32 / 40 / -0.64px | 24 / 32 / -0.48px | Sharp Grotesk |
| Body | 20 / 28 / -0.2px (-0.01em) | 16 / 24 / -0.16px | Neue Montreal Regular |
| Body, long lists | 20 / 32–48 | 16 / 24 | Neue Montreal Regular |
| Body emphasis / sub-heads | 20 / 28, weight 500 | 16 / 24, 500 | Neue Montreal Medium |
| Nav, buttons | 20 / 28, 500 | 16 / 24, 500 | Neue Montreal Medium |
| About paragraph (home) | 20 / 32 / -0.2px | 16 / 25.6 | Neue Montreal Regular, #707070 |

All text is sentence case, no uppercase transforms.

### Spacing & layout

| | Desktop 1440 | Tablet 810–1199 | Mobile <810 |
|---|---|---|---|
| Side gutter | 64px | ~32px | 16px |
| Content width (home) | full width minus gutters (1312 @1440) | | 358 @390 |
| Case-study text column | ~1064px centered (`max-width ≈ 1072px`) | | full width |
| Case-study images / panels | full width (1312) | | full width |
| Project card gap | ~140px between cards | | ~100px |

Breakpoints (Framer defaults): **≥1200 desktop, 810–1199 tablet, <810 mobile.**

### Radius / effects

| Element | Radius |
|---|---|
| Project cover images, case-study panels | 20px |
| Buttons (CV, Hire me, Read Story, socials) | 16px (large), 10px (small pills) |
| Grey case-study sections | 40px (~) |
| Card top images | 12px 12px 0 0 |

No shadows or blur on the site's own UI (the device mockups have shadows baked into the images).

---

## 3. Global components

### Header (fixed, transparent)
- `position: fixed; top: 0`, transparent background, no blur.
- **Home (dark):** left — logo text "Alina ＊ Isabella ＊ 逸瑶" (→ `/`); right — "Projects" (→ `#projects`), "About me" (→ `#about`), "Hire me" white pill (→ `#contacts`, black text, `16px` radius, padding ~10×24).
- **Case studies (light):** left — "← Back to projects" (→ `/#projects`); right — black "Hire me" pill (white text).
- **Mobile:** logo becomes "A ＊ I", links collapse into a "Menu" text button. Menu opens a **full-screen white overlay**: "Close" top-right; large links "Alina ＊ Isabella [ 逸瑶 ]", "Projects", "About me"; full-width black "Hire me" button pinned to the bottom.
- Hover: white pill → `rgba(255,255,255,0.88)`.

### Buttons
| Variant | Background | Text | Hover |
|---|---|---|---|
| Primary on dark | `#FFF` | `#080808` | bg `rgba(255,255,255,.88)` |
| Secondary on dark | `rgba(255,255,255,.24)` | `#FFF` | bg `rgba(255,255,255,.16)` |
| Primary on light | `#080808` | `#FFF` | ~opacity .8 |
| "Contact" (NDA project) | secondary on dark, with 🔒 lock icon | `rgba(255,255,255,.8)` | — has **no link** |

Hero buttons: 250×76 desktop, full-width stacked on mobile.

### Project card (home)
```
┌──────────────────────────────────────────────┐
│ cover image 16:9, radius 20                  │
└──────────────────────────────────────────────┘
Title (Sharp Grotesk 48)
2023 – 2025   HR Tech   Graphic Design, Brand Advocacy   ← muted 60%, gap ~24
One-line description (white, 20px)
[ Read Story ]                                           ← secondary button
```
The whole card links to the case study. No image-zoom hover was detected; only the button background changes.

### Footer
- Big "Let's keep in touch" (Sharp Grotesk 64, centered).
- Three secondary buttons in a row: "LinkedIn ↗", "Telegram ↗", "Instagram ↗" (~163×46, open in new tab).
- Bottom bar: left — underlined email; right — "© 2025 Alina/Isabella/逸瑶" (home) / "© 2025 Isabella Snyder. All rights reserved" (drafts). Case-study pages have no footer: they end after the last section.

### Carousel (case studies)
- Full-width grey panel (`#F5F5F5`, radius 20), one 16:9 image at a time.
- Round prev/next arrow buttons (40×40, `rgba(0,0,0,0.2)`), labelled "Previous"/"Next", vertically centered on the left/right edges.
- 7 carousels on /technobrand and 7 on /sbertreasury (3–5 slides each).

### Stat cards (case studies)
Bento grid: one tall accent card (blue `#3D83F7` / green `#17806E`, white text) + 3 grey cards (`#F5F5F5`). Number in Sharp Grotesk 88, caption in Neue Montreal 20.

---

## 4. Page by page

### `/` Home (dark, ~5630px tall at desktop)

1. **Hero** — centered, three lines of Sharp Grotesk 64, mixed white and grey (`#5E5E5E`) words:
   > Product designer *creating* / cohesive *digital* experiences / *through* systematic research
   (italics = grey words). On mobile the copy changes to "Designer *creating* cohesive *digital* experiences *via* systematic research".
   Buttons: **CV** (secondary → Google Drive `https://drive.google.com/file/d/1tQvOobW47Dck4afW4fe14JAfj_lbGn_g/view?usp=sharing`) and **Hire me** (primary → `#contacts`).
2. **Projects** (`#projects`) — 3 stacked project cards (see §6 for content).
3. **About** (`#about`) — centered heading "Curiosity-driven life. / Research-backed design." (Sharp Grotesk 64, white), paragraph (20/32, `#707070`, ~640px wide, centered):
   > I approach design the way I approach life – with curiosity, consistency, and focus on what matters. This approach helps me solve ambiguous problems in B2B/FinTech environments where user, business, and technical needs compete.

   Below: a **horizontally scrollable row of 5 portrait photos** (429×549, radius 20, gap ~24). It overflows the viewport on purpose (it's not an auto-scrolling marquee).
4. **Contacts** (`#contacts`) — footer described in §3.

### `/technobrand` — "Gateway for IT Talents" (light, ~26,400px)

Header block: H1 → 16:9 cover → 4-column meta row (labels muted):
| Timeline | Field | Team | My role |
|---|---|---|---|
| July 2023 – January 2025 | HR Tech | Product Owner, Frontend Developers, HR Stakeholders, Content Manager | Product Designer, UX Researcher, Brand Designer |

Sections (text in `reference/content/technobrand.txt`):
1. Context, then a stat bento: **12 000** peak MAU (blue), **150** applicants Nov 2024, **190%** hire increase, **100** event applications
2. Research & Discovery: goals list, a numbered method list, "Journey to become a Sber Employee" CJM diagram (image)
3. The "Entrance Gate" Insight + "Full candidate journey" grey callout
4. User Personas: 2 persona cards (Dmitry, Michael) side by side
5. Critical Problems Discovered: carousel with problem text on the left and quote-card images on the right
6. Solution 1, Unified Benefits Showcase: The Problem, a quote box, drafts carousel, Design Decisions, Results & Validation
7. Solution 2, which is also titled "Unified Benefits Showcase" (**copy error**: it's really about vacancy filtering): Problem, Design Process image, Design Solutions, carousels
8. Solution 3, Design System & External Guidelines
9. Overall Results & Impact, Key Learnings, Biggest Takeaway

### `/sbertreasury` — "Enterprise financial managing system" (light, ~22,000px)

| Timeline | Field | Team | My role |
|---|---|---|---|
| May 2021 – Dec 2022 | Enterprise FinTech | Designers, Product Owners, Business & System Analysts, QA Testers | Product Designer, Scrum Master |

Sections (text in `reference/content/sbertreasury.txt`):
1. Project Overview
2. Our design team: 2-column layout, text plus a B&W photo
3. "Legacy system Sber Corporation" carousel; Key results list
4. Stat bento: **80%** migrated (green), **8–10 → 2 weeks** lead time, **7.5x** deployed features, **200** enterprise companies
5. Understanding the Problem Space: 3 user groups
6. Understanding User Needs
7. Design Approach 1, Ruble Payment Form: benchmarking, testing questions, Option 1 vs 2, quotes, decision
8. Design Approach 2, Simplified Access Path: JTBDs, table component, "Maybe too flexible?"
9. Design Process improvements: checklists, sprints, syncing, results
10. Reflection & Learnings, What I'd do differently

Mobile: same order, single column; the 4-column meta row becomes 2×2; bento cards stack.

---

## 5. Motion and interaction

| Effect | Where | Details |
|---|---|---|
| Fade-in on load | Hero / page content | opacity 0 → 1, **1s**, delay **0.5s**, ease `cubic-bezier(0.5,0,0.88,0.77)` |
| Fade-in (desktop variant) | Sections | opacity 0 → 1, **0.7s**, ease `cubic-bezier(0.44,0,0.56,1)` |
| Fade-in (mobile variant) | Sections | spring, duration 0.4s, bounce 0.2 |
| Button hover | All buttons | background-color change only (values in §3), ~0.2s |
| Carousel | Case studies | click arrows to slide; no autoplay detected |
| Mobile menu | <810 | full-screen overlay, opens on "Menu" |
| Smooth anchor scroll | Nav links | `#projects` / `#about` / `#contacts` |

The hero and about headlines are split into one `<span>` per character (a Framer text effect). In the captures the grey/white colors stay static, so it may be an appear effect that stagger-fades characters. Hard to confirm headless; I'll treat it as an optional enhancement (see §8).

No parallax, sticky-scroll, custom cursor, or page transitions were found.

---

## 6. Content and assets inventory

### Projects

| # | Title (home) | Years | Field | Tags | Description | Link | Cover |
|---|---|---|---|---|---|---|---|
| 1 | Sber Gateway for IT Talents | 2023 – 2025 | HR Tech | Graphic Design, Brand Advocacy | HR space for future employees of the largest Russian bank showcasing benefits and career opportunities | `/technobrand` | `QTrViYKaN4HJcMT1uEtn4YCBlw.jpg` (1920×1080) |
| 2 | Enterprise Financial Flows Managing System | 2021 – 2022 | B2B | Thorough Research, Team Management | Web client for viewing, managing and controlling financial flows of large enterprises with complex organizational structure | `/sbertreasury` | `BPcn7h5AIjL1LX74SfpaRIk5uW8.jpg` (1920×1080) |
| 3 | Corporate Networking and Locating App | 2025 | B2C | Iterating on Research, Full Autonomy | App for corporate social networking and locating friends on the map | **NDA, no page** ("🔒 Contact" button, no link) | `k7OJPLm627ldwr4klrkn8LUMtSk.png` (3146×1766) |

### About photos (home gallery)
`CbMjBLk1qq9cLDNiF5qRkfv8s0.png`, `ZBEnfvxTxXiTzgfktsUsSOGLM.jpg`, `Qp3FQvhA2YDiwGRXcL0ppfIicws.jpg`, `ZLioBGNMERXQ0UmmWV6m9XeZB0.png`, `UGZeIzwMuU2hgM3TTKFdPEK9BE.jpg`. All on `https://framerusercontent.com/images/`.

### Case-study media
- `/technobrand`: 40 unique images (mostly 1920×1080 JPG, some 3840 px PNG)
- `/sbertreasury`: 27 unique images
- 2 SVG arrow icons (`6tTbkXggWgQCAJ4DO2QEdXXmgM.svg`, `11KSGbIZoRSg4pjdnUoif6MKHI.svg`)

The full list with display sizes is in `reference/assets-manifest.json`. Append `?width=…` to get resized versions from Framer, or drop the query for the original.

### Contacts & links
| | |
|---|---|
| Email | siberikamonage@gmail.com (⚠️ currently linked as `https://siberikamonage@gmail.com`, a broken link; should be `mailto:`) |
| LinkedIn | https://www.linkedin.com/in/uxdesignisabella/ |
| Telegram | https://t.me/firstnameyiyao |
| Instagram | https://www.instagram.com/isoldarts/ |
| CV | https://drive.google.com/file/d/1tQvOobW47Dck4afW4fe14JAfj_lbGn_g/view?usp=sharing |

### SEO / meta (currently all defaults)
- `<title>`: "My Framer Site" on every live page
- Description: "Made with Framer"
- No OG image on live pages; Framer default favicon

---

## 7. Behavior and integrations

- **Forms:** none. Contact is via links only.
- **Analytics / embeds:** only Framer's own runtime and the "Made in Framer" badge. No GA, Hotjar, etc.
- **CMS:** two Framer collections (`mini-articles`, `large-articles`) exist but are only drafts. In the rebuild, projects become a local data file (or MDX) with one entry per project.

---

## 8. Rebuild recommendations

### Stack
**Astro + Tailwind CSS + MDX**, deployed to **Vercel / Netlify / GitHub Pages**.
- The site is static content with light interactivity, so Astro ships near-zero JS by default.
- MDX lets each case study be a long-form document that drops in components (`<Carousel>`, `<StatGrid>`, `<MetaRow>`, `<Callout>`).
- Motion: CSS + a tiny `IntersectionObserver` for fade-ins; [Embla](https://www.embla-carousel.com/) (or a hand-rolled scroll-snap carousel) for carousels.

(Alternative: Next.js + Framer Motion if you prefer React everywhere. It's heavier, but the move from Framer feels more familiar.)

### Folder structure
```
src/
  layouts/   BaseLayout.astro, CaseStudyLayout.astro
  components/ Header, MobileMenu, Footer, Button, ProjectCard,
              Carousel, StatGrid, MetaRow, Callout, PhotoRow
  content/
    projects/ technobrand.mdx, sbertreasury.mdx, networking-app.mdx (nda: true)
  pages/      index.astro, [slug].astro
  styles/     tokens.css (colors, type scale, spacing from §2)
public/
  fonts/      (licensed or substitute fonts)
  images/     downloaded from framerusercontent (optimized via astro:assets)
```

### Hard parts
1. **Fonts.** Licensing (see §9). Free look-alikes: *Neue Montreal* → "Inter Tight" / "Geist"; *Sharp Grotesk Book* → "Space Grotesk" / "Familjen Grotesk" (~ close, not identical).
2. **Case-study length.** ~26k px of content per page. Moving the text into MDX by hand is the bulk of the work; the raw text is already extracted in `reference/content/`.
3. **Carousels.** 14 in total; build one accessible component and reuse it.
4. **Character-split headline effect.** Optional: a staggered CSS animation on word spans gets close.

### Fix while rebuilding
- `mailto:` link for the email
- Real `<title>`, meta descriptions, OG images, favicon
- `alt` text: **every image currently has an empty `alt`**
- Real heading hierarchy (only one `<h1>` per page)
- Lazy-load and serve AVIF/WebP; current pages pull 3840 px PNGs
- Fix the "Solution 2: Unified Benefits Showcase" title on /technobrand and the duplicated paragraph under "Drafts, process and insights" / "User Personas"
- Drop the "Made in Framer" badge

### Build order
1. Scaffold Astro + Tailwind; add `tokens.css` from §2; set up fonts
2. Base layout, header (desktop and mobile menu), footer, buttons
3. Home: hero, project cards from content collection, about, photo row, contacts
4. Download and optimize all images listed in the manifest
5. Case-study layout: title, cover, meta row, prose styles
6. Components: StatGrid, Carousel, Callout, PersonaCard
7. Port `/technobrand` content to MDX
8. Port `/sbertreasury` content to MDX
9. Motion: fade-in on scroll, button transitions, menu animation
10. SEO/meta, favicon, OG images, accessibility pass, Lighthouse
11. Deploy plus custom domain

---

## 9. Open questions (decisions for you)

1. **Fonts:** do you own licenses for Sharp Grotesk and Neue Montreal (webfont licenses)? If yes, put the files in `public/fonts`. If not, pick free substitutes.
2. **Name / branding:** home footer says "© 2025 Alina/Isabella/逸瑶", drafts say "Isabella Snyder". Which name should be used in titles, meta, and the footer?
3. **Design:** keep it pixel-identical, or refresh while porting (e.g., fix the copy errors, add a project page for the NDA app)?
4. **NDA project:** keep as "Contact"-only card, link it to the email, or add a password-protected page?
5. **Hosting & domain:** Vercel, Netlify, or GitHub Pages? A custom domain?
6. **Stack:** OK with Astro + Tailwind + MDX, or do you prefer Next.js?
7. **Draft pages** (`/mini-articles/*`, `/large-articles/*`): confirm they can be dropped.

---

## 10. Decisions (2026-10-29)

| Question | Decision |
|---|---|
| Fonts | Licensed files will be uploaded to `public/fonts/`; free fallbacks (Space Grotesk, Inter Tight) until then |
| Name | **Alina Nizamitinova** |
| Design | Port the site and refresh it at the same time |
| Stack / hosting | Astro + MDX, GitHub Pages (free, deploys from this repo) |
| Draft CMS pages | Dropped |

### What the refresh changed vs. the Framer site
- Name updated everywhere; real page titles, descriptions, OG images, favicon
- Email is now a working `mailto:` link
- Descriptive `alt` text on covers and personal photos
- Removed copy duplicates on /technobrand (repeated paragraphs under "User Personas" and
  "Drafts", and the "Results & Validation" block that repeated "Design Decisions")
- "Solution 2" renamed to "Vacancy Search & Filtering" (it was a copy of Solution 1's title)
- Case studies now have the contacts footer and a "Next project" link
- NDA card links to email ("Under NDA — ask me") instead of a dead button
- Header gets a blurred background on scroll; project covers zoom slightly on hover
- Carousels show a counter, support keyboard arrows and swipe
- Images converted to WebP (~9 MB total, from much larger PNG/JPG originals)
