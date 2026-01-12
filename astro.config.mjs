import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://kmcrosby.github.io',
  base: '/crosby-projects',
  integrations: [mdx(), sitemap()],
  output: 'static',
});
