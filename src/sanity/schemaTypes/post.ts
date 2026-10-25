import { defineArrayMember, defineField, defineType } from 'sanity';

// Blog post. Every image needs alt text (the audience includes disabled students).
const imageWithAlt = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'image',
    options: { hotspot: true },
    fields: [
      defineField({
        name: 'alt',
        title: 'Alt text',
        type: 'string',
        description: 'Describe the image for people using screen readers. Required.',
        validation: (r) => r.required().max(160),
      }),
    ],
  });

export const categories = [
  { title: 'Teaching', value: 'teaching' },
  { title: 'Transition planning', value: 'transition' },
  { title: 'IEP & compliance', value: 'iep' },
  { title: 'Leadership', value: 'leadership' },
  { title: 'Product news', value: 'product' },
];

export const post = defineType({
  name: 'post',
  title: 'Blog post',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'meta', title: 'Details & SEO' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', group: 'content', validation: (r) => r.required().max(110) }),
    defineField({
      name: 'slug',
      title: 'URL',
      type: 'slug',
      group: 'content',
      description: 'The page address, e.g. /blog/your-post. Click Generate to make it from the title.',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Summary',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'One or two sentences shown on the blog list and in search results.',
      validation: (r) => r.required().max(220),
    }),
    { ...imageWithAlt('coverImage', 'Cover image'), group: 'content', validation: (r: any) => r.required() },
    defineField({
      name: 'body',
      title: 'Article',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Paragraph', value: 'normal' },
            { title: 'Heading', value: 'h2' },
            { title: 'Subheading', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [
              defineArrayMember({
                name: 'link',
                title: 'Link',
                type: 'object',
                fields: [defineField({ name: 'href', title: 'URL', type: 'url', validation: (r) => r.uri({ allowRelative: true, scheme: ['http', 'https', 'mailto'] }) })],
              }),
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alt text', type: 'string', validation: (r) => r.required().max(160) }),
            defineField({ name: 'caption', title: 'Caption', type: 'string' }),
          ],
        }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'meta',
      options: { list: categories, layout: 'radio' },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'authorName', title: 'Author', type: 'string', group: 'meta', validation: (r) => r.required() }),
    defineField({ name: 'authorRole', title: 'Author role', type: 'string', group: 'meta', description: 'e.g. Special education teacher' }),
    defineField({
      name: 'publishedAt',
      title: 'Publish date',
      type: 'datetime',
      group: 'meta',
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({ name: 'featured', title: 'Feature at the top of the blog', type: 'boolean', group: 'meta', initialValue: false }),
    defineField({
      name: 'seoDescription',
      title: 'Search description',
      type: 'text',
      rows: 2,
      group: 'meta',
      description: 'Optional. Shown by Google; defaults to the summary.',
      validation: (r) => r.max(160),
    }),
  ],
  orderings: [{ title: 'Newest first', name: 'publishedDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: {
    select: { title: 'title', media: 'coverImage', date: 'publishedAt', category: 'category' },
    prepare: ({ title, media, date, category }) => ({
      title,
      media,
      subtitle: [categories.find((c) => c.value === category)?.title, date && new Date(date).toLocaleDateString('en-US', { dateStyle: 'medium' })].filter(Boolean).join(' · '),
    }),
  },
});
