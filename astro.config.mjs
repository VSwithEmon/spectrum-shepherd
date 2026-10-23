import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

// Sanity project for the blog ("Spectrum Shepherd website", sanity.io/manage). The ID is public (it
// ships in the Studio bundle); PUBLIC_SANITY_PROJECT_ID / PUBLIC_SANITY_DATASET override it if set.
const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const projectId = env.PUBLIC_SANITY_PROJECT_ID || 'jhozhuio';
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
