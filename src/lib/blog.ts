// Blog data from Sanity (fetched at build time; publishing in the Studio triggers a rebuild).
import { sanityClient } from 'sanity:client';
import { createImageUrlBuilder } from '@sanity/image-url';
import { categories } from '../sanity/schemaTypes/post';

export const configured = !!sanityClient.config().projectId;

const builder = createImageUrlBuilder(sanityClient);
/** Image URL from a Sanity image (respects the editor's hotspot/crop). */
export const imageUrl = (source: any, width: number, height?: number) => {
  let b = builder.image(source).width(width).auto('format').quality(80);
  if (height) b = b.height(height).fit('crop');
  return b.url();
};

export interface PostCard {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  featured?: boolean;
  authorName: string;
  authorRole?: string;
  coverImage: { alt: string; asset: any; hotspot?: any; crop?: any };
  words: number;
}
export interface Post extends PostCard {
  body: any[];
  seoDescription?: string;
}

const cardFields = `_id, title, "slug": slug.current, excerpt, category, publishedAt, featured, authorName, authorRole, coverImage,
  "words": length(string::split(pt::text(body), " "))`;

// Published posts only: drafts stay in the Studio until the editor presses Publish.
const live = `_type == "post" && defined(slug.current) && publishedAt <= now() && !(_id in path("drafts.**"))`;

// On Vercel a failed fetch fails the build (so a Sanity outage never publishes an empty blog);
// locally, without network access to Sanity, the blog builds empty with a warning.
async function query<T>(groq: string): Promise<T[]> {
  if (!configured) return [];
  try {
    return await sanityClient.fetch(groq);
  } catch (err) {
    if (process.env.VERCEL) throw err;
    console.warn(`[blog] Could not reach Sanity, building the blog without posts: ${(err as Error).message}`);
    return [];
  }
}

export const getPosts = () => query<PostCard>(`*[${live}] | order(publishedAt desc) { ${cardFields} }`);
export const getPostsWithBody = () => query<Post>(`*[${live}] | order(publishedAt desc) { ${cardFields}, body, seoDescription }`);

export const categoryTitle = (v: string) => categories.find((c) => c.value === v)?.title ?? v;
export const readTime = (words = 0) => `${Math.max(1, Math.round(words / 220))} min read`;
export const formatDate = (iso: string) => new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
