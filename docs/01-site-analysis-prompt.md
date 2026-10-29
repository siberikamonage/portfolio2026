# Prompt: Analyze the Framer portfolio for a from-scratch rebuild

Paste everything below the line into an AI assistant that can browse the web
(or one you give screenshots / saved HTML to). Save its answer as
`docs/02-site-analysis.md` — that file becomes the spec for the rebuild.

---

You are a senior front-end engineer and product designer. I am moving my
portfolio off Framer and rebuilding it by hand in my own Git repository.
Your job is to reverse-engineer the live site into a complete, buildable spec.
Do not write the implementation yet — only analyze and document.

**Site:** https://isoldarts.framer.website

## How to work

1. Visit every page reachable from the site: home, each project/case-study
   page, about, contact, and any 404 or legal page. Follow links in the nav,
   footer, and project cards. List every URL you find.
2. Look at each page at three widths: desktop (1440px), tablet (810px), and
   mobile (390px). Framer uses these breakpoints by default; note if the site
   uses others.
3. Where you can read the page source, use it to get exact values (fonts,
   colors, sizes, image URLs). Where you are estimating from what you see, mark
   the value with `~`.
4. If something can't be seen (blocked, behind a login, loaded on scroll and
   never appeared), say so instead of guessing.

## What to report

Use these headings, in this order.

### 1. Overview
- Who the site is for and what it's trying to make a visitor do (hire, contact,
  browse work).
- The overall look in a few words (e.g. "minimal, editorial, dark, large type").
- Sitemap: a tree of every page and its URL slug.

### 2. Design tokens
- **Colors:** every color used, as hex, with its role (background, surface,
  text primary/secondary, accent, border, hover). Note dark/light mode if any.
- **Typography:** font families (and whether they are Google Fonts, Adobe
  Fonts, or custom files), weights, and a type scale table: role → size /
  line-height / letter-spacing / weight / case, for desktop and mobile.
- **Spacing:** the spacing steps that repeat (e.g. 8, 16, 24, 40, 80...),
  section padding, gaps between grid items.
- **Layout:** max content width, columns and gutters per breakpoint.
- **Radius, borders, shadows, blur** values.

### 3. Global components
For each: what it contains, how it's laid out, how it behaves at each
breakpoint, and its states (hover, active, focus, open).
- Header / navigation (sticky? transparent over hero? mobile menu style?)
- Footer
- Buttons and links
- Project card
- Any tags, badges, dividers, cursor effects, or loaders

### 4. Page by page
For every page, list its sections top to bottom. For each section give:
- Purpose and layout (with a small ASCII sketch if it helps)
- All text content, copied exactly
- Images/videos: what they show, aspect ratio, and source URL if visible
- Responsive changes between desktop, tablet and mobile

### 5. Motion and interaction
- Page-load / intro animations
- Scroll-triggered effects (fade, slide, parallax, sticky, scrubbed)
- Hover effects on cards, links, buttons, images
- Page transitions
- Marquees, carousels, sliders, custom cursors
For each: what moves, from → to, duration, easing, delay/stagger, and what
triggers it.

### 6. Content and assets inventory
- A table of every project: title, year, client/role, short description,
  tags/categories, cover image, and page URL.
- Bio / about text, skills, services, experience, clients, awards.
- Contact details and social links (email, LinkedIn, Behance, Dribbble,
  Instagram, etc.).
- A list of all media files with URLs so they can be downloaded.
- Favicon, social share image, page titles and meta descriptions.

### 7. Behavior and integrations
- Forms (fields, validation, where they submit)
- Analytics or third-party embeds
- Anything driven by the Framer CMS (repeating collections) that should become
  a data file in the rebuild

### 8. Rebuild recommendations
- Recommended stack for a fast, static, easy-to-edit portfolio (e.g.
  Next.js / Astro + Tailwind + Framer Motion or GSAP) and why.
- Proposed folder structure and how project content should be stored
  (Markdown/MDX, JSON).
- Hard-to-replicate parts and how to approach each.
- Accessibility and performance issues on the current site worth fixing in the
  rebuild.
- A build order: a numbered list of steps from empty repo to deployed site.

### 9. Open questions
Anything you couldn't determine, plus decisions I need to make (domain,
hosting, whether to keep the design identical or refresh it).

## Output rules
- Markdown only. Use tables for tokens and inventories.
- Be exact: real hex codes, px values, and copied text over descriptions like
  "a dark gray" or "some intro text".
- Keep the report factual; put opinions only in section 8.
