import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

// Sanity project for the blog. Set PUBLIC_SANITY_PROJECT_ID (and optionally PUBLIC_SANITY_DATASET)
// in Vercel and in a local .env. Without a project ID the blog builds with an empty list.
const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const projectId = env.PUBLIC_SANITY_PROJECT_ID || 'not-configured';
const dataset = env.PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  integrations: [
    sanity({
      projectId,
      dataset,
      apiVersion: '2026-10-01',
      useCdn: false,
      // Editors manage posts at /studio. Static build: vercel.json rewrites /studio/* to /studio.
      studioBasePath: '/studio',
    }),
    react(),
  ],
  vite: { plugins: [tailwindcss()] },
});
