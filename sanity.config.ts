// Sanity Studio for the blog, embedded in the site at /studio (see astro.config.mjs).
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
  name: 'spectrum-shepherd',
  title: 'Spectrum Shepherd blog',
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'jhozhuio',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([S.documentTypeListItem('post').title('Blog posts')]),
    }),
  ],
  schema: { types: schemaTypes },
});
