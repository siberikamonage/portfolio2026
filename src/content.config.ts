import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    cardTitle: z.string(),
    description: z.string(),
    years: z.string(),
    field: z.string(),
    tags: z.array(z.string()),
    cover: z.string(),
    coverAlt: z.string(),
    accent: z.string().optional(),
    order: z.number(),
    nda: z.boolean().default(false),
    meta: z
      .object({ timeline: z.string(), field: z.string(), team: z.string(), role: z.string() })
      .optional(),
  }),
});

export const collections = { projects };
