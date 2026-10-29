# Alina Nizamitinova — Portfolio

Personal portfolio, rebuilt from Framer with [Astro](https://astro.build) + MDX.
Live at **https://siberikamonage.github.io/portfolio2026/**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321/portfolio2026/
npm run build      # production build into dist/
```

## Where things live

| What | Where |
|---|---|
| Name, email, CV link, socials | `src/data/site.ts` |
| Projects (cards + case studies) | `src/content/projects/*.mdx` |
| Images | `public/images/<project>/` |
| Fonts | `public/fonts/` (see the README there) |
| Colors, type scale, spacing | `src/styles/global.css` |
| Home page | `src/pages/index.astro` |
| Case-study page template | `src/pages/[slug].astro` |

### Adding or editing a project

Each project is one `.mdx` file. The frontmatter (top block) feeds the home-page card
and the case-study header; the body is the case study. Write it like Markdown and drop in
these components where needed (no imports required):

```mdx
<Figure src="image.webp" alt="What the image shows" />
<Gallery images={["a.webp", "b.webp"]} />
<Carousel images={["1.webp", "2.webp", "3.webp"]} label="Vacancy page drafts" />
<SlideCarousel slides={[{ "title": "…", "text": "…", "image": "x.webp" }]} />
<Callout label="Comments from UX Research">"Quote here"</Callout>
<Stats accent="#3D83F7" items={[{ "value": "190%", "label": "Increase in hires" }]} />
<ResultCards items={[{ "title": "…", "text": "…" }]} />
<Split image="photo.webp">Text next to an image</Split>
```

Image file names are relative to `public/images/<project-file-name>/`.
Set `nda: true` in the frontmatter to show a card without a case-study page.

## Deploy

Every push to `main` (or the current working branch) builds and publishes the site via
GitHub Actions (`.github/workflows/deploy.yml`).
One-time setup: **GitHub → Settings → Pages → Source: GitHub Actions**.
