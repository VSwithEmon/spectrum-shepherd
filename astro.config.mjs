import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // The site root serves the main homepage direction (V1); the lavender alternative is /v2.
  redirects: { '/': '/v1', '/the-app': '/the-platform' },
  vite: { plugins: [tailwindcss()] },
});
