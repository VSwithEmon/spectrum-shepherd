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
  audience?: "educators" | "families";
  authorName: string;
  authorRole?: string;
  coverImage: { alt: string; asset: any; hotspot?: any; crop?: any };
  words: number;
}
export interface Post extends PostCard {
  body: any[];
  seoDescription?: string;
}

const cardFields = `_id, title, "slug": slug.current, excerpt, category, audience, publishedAt, featured, authorName, authorRole, coverImage,
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

/** Short date for the blog list ("Aug 19"; with the year when it isn't this year). */
export const shortDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', ...(d.getFullYear() !== new Date().getFullYear() ? { year: 'numeric' } : {}) });
};

// ---- Blog list = Sanity posts first, then the articles copied from spectrumshepherd.com ----
import { posts as livePosts, type Post as LivePost } from '../data/posts';
export type BlogPost = LivePost & { cms?: { body: any[]; coverAlt: string; author: string; authorRole?: string; publishedAt: string } };
export async function getAllPosts(): Promise<BlogPost[]> {
  const cms = await getPostsWithBody();
  const fromCms: BlogPost[] = cms.map((p) => ({
    slug: p.slug, title: p.title, date: shortDate(p.publishedAt), read: readTime(p.words).replace(' read', ''), excerpt: p.excerpt,
    icon: 'lesson', tone: 'brand', url: `https://spectrum-shepherd-5qfw.vercel.app/blog/${p.slug}`, thumb: imageUrl(p.coverImage, 800, 600),
    group: p.audience ?? 'educators',
    cms: { body: p.body, coverAlt: p.coverImage?.alt ?? '', author: p.authorName, authorRole: p.authorRole, publishedAt: p.publishedAt },
  }));
  const taken = new Set(fromCms.map((p) => p.slug));
  return [...fromCms, ...livePosts.filter((p) => !taken.has(p.slug))];
}
