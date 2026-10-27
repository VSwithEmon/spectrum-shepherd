import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // The site root serves the main homepage direction (V1); the lavender alternative is /v2.
  redirects: {
    '/': '/v1',
    '/the-app': '/the-platform',
    // The V2 homepage and its -v2 pages were removed (Oct 27, 2026); old links land on the main pages.
    '/v2': '/v1',
    '/teachers-v2': '/teachers',
    '/schools-v2': '/schools',
    '/the-app-v2': '/the-platform',
    '/about-v2': '/about',
    '/blog-v2': '/blog',
    '/webinars-v2': '/webinars',
    '/beyond-the-transition-plan-v2': '/beyond-the-transition-plan',
  },
  vite: { plugins: [tailwindcss()] },
});
