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
    mediaOutlet: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    description: z.string(),
    image: z.string().optional(),
    gallery: z.array(z.string()).optional().default([]),
    team: z.array(z.string()).optional().default([]),
    fundingSource: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    date: z.coerce.date(),
    type: z.string(),
    venue: z.string().optional(),
    doi: z.string().optional(),
    pdf: z.string().optional(),
    abstract: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    link: z.string().optional(),
    file: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

const media = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    outlet: z.string(),
    type: z.string(),
    summary: z.string(),
    link: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

const partners = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    logo: z.string().optional(),
    website: z.string().optional(),
    description: z.string(),
    partnerType: z.string(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  students,
  news,
  projects,
  publications,
  resources,
  media,
  partners,
};
