import { defineCollection, z } from 'astro:content';

const students = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    photo: z.string().optional(),
    major: z.string(),
    year: z.string(),
    researchFocus: z.string(),
    accomplishments: z.array(z.string()).optional().default([]),
    email: z.string().optional().default(''),
    linkedin: z.string().optional().default(''),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    image: z.string().optional(),
    externalLink: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.string(),
    startDate: z.coerce.date(),
    description: z.string(),
    image: z.string().optional(),
    team: z.array(z.string()).optional().default([]),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = {
  students,
  news,
  projects,
};
