import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // The site root serves the main homepage direction (V3); the lavender alternative is /v4.
  redirects: { '/': '/v3' },
  vite: { plugins: [tailwindcss()] },
});
