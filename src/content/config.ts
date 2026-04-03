import { defineCollection, z } from 'astro:content';

export const collections = {
  projects: defineCollection({
    type: 'content',
    schema: z.object({
      title:    z.string(),
      status:   z.enum(['live', 'wip', 'archived', 'internal']),
      tech:     z.array(z.string()),
      url:      z.string().optional(),
      repo:     z.string().optional(),
      featured: z.boolean().optional(),
    }),
  }),
};
