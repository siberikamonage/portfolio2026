import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Served from GitHub Pages at https://siberikamonage.github.io/portfolio2026/.
// With a custom domain later: set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://siberikamonage.github.io',
  base: '/portfolio2026',
  integrations: [mdx()],
});
