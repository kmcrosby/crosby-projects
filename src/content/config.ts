import { defineCollection, z } from 'astro:content';

const students = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    photo: z.string().optional(),
    major: z.string(),
    graduationYear: z.string(),
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
    featured: z.boolean().default(false),
    image: z.string().optional(),
    description: z.string(),
    status: z.enum(['Active', 'Completed', 'Upcoming']),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
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

const settings = defineCollection({
  type: 'data',
  schema: z.object({
    // Hero Section
    heroImage: z.string().optional(),
    heroTitle: z.string().optional(),
    heroSubtitle: z.string().optional(),
    heroOverlayOpacity: z.number().min(0).max(100).optional().default(50),
    // Color Theme
    primaryColor: z.string().optional().default('#D0202E'),
    primaryColorLight: z.string().optional().default('#EE2A37'),
    primaryColorDark: z.string().optional().default('#7A232F'),
    accentColor: z.string().optional().default('#3AB0C8'),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    heroTitle: z.string().optional(),
    intro: z.string().optional(),
    // About page fields
    mission: z.string().optional(),
    focusAreas: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).optional(),
    directorSection: z.string().optional(),
    uniquePoints: z.array(z.string()).optional(),
    // Join page fields
    benefits: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).optional(),
    academicRequirements: z.array(z.string()).optional(),
    personalQualities: z.array(z.string()).optional(),
    applicationSteps: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).optional(),
    ctaTitle: z.string().optional(),
    ctaButtonText: z.string().optional(),
    // Contact page fields
    directorName: z.string().optional(),
    directorTitle: z.string().optional(),
    directorSubtitle: z.string().optional(),
    location: z.object({
      name: z.string(),
      address: z.string(),
      city: z.string(),
    }).optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).optional(),
    formAction: z.string().optional(),
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
  settings,
  pages,
};
