// Blog ("Perspectives") posts, as listed on spectrumshepherd.com/blog. Individual posts still live on
// the current site, so `url` points there until the articles are migrated. Years are shown only
// where the live listing shows them. `thumb` is the live post image; `icon` / `tone` are the v1 tiles.
// `group` splits the v2 page into "For educators" and "For families" (our labels, not the live site's).
import type { IconName } from '../components/v3/BrandIcon.astro';

const live = 'https://www.spectrumshepherd.com/post/';
export type Post = {
  slug: string; title: string; date: string; read: string; excerpt: string;
  icon: IconName; tone: 'brand' | 'yellow' | 'orange'; url: string; thumb: string; group: 'educators' | 'families';
};

const p = (slug: string, title: string, date: string, read: string, excerpt: string, icon: IconName, tone: Post['tone'], thumb: string, group: Post['group']): Post =>
  ({ slug, title, date, read, excerpt, icon, tone, url: live + slug, thumb: `/images/blog/${thumb}.jpg`, group });

export const posts: Post[] = [
  p('self-advocacy-activities-high-school-special-education', '5 Self-Advocacy Activities for High School Special Education', 'Oct 13', '4 min',
    'Five practical self-advocacy activities with whole-class setups, flexible communication supports and simple progress checks for special education teachers.', 'people', 'brand', 'self-advocacy', 'educators'),
  p('measuring-what-matters-in-life-and-functional-skills', 'Measuring what matters in life and functional skills', 'Aug 19', '5 min',
    'Accuracy tells part of the story. Prompt level and self-initiation show how independence is developing.', 'progress', 'yellow', 'measuring', 'educators'),
  p('functional-skills-vs-life-skills-special-education', 'Functional Skills vs. Life Skills in Special Education: What’s the Difference?', 'Aug 7', '4 min',
    'Life skills and functional skills overlap, but schools often use the terms differently. Here is a practical way to think about both, and what strong transition instruction should actually build.', 'lesson', 'orange', 'functional-vs-life', 'educators'),
  p('extended-school-year-transition-students', 'Extended School Year Goals for Transition-Age Students: A Practical Guide', 'Jun 30', '4 min',
    'For transition-age students, ESY can protect the skills that are hardest to rebuild: employment routines, daily living, self-advocacy and getting around the community.', 'spark', 'brand', 'esy', 'educators'),
  p('age-appropriate-transition-assessment', 'What Actually Counts as an Age-Appropriate Transition Assessment', 'Jun 17', '5 min',
    'An age-appropriate transition assessment isn’t a form you can buy off the shelf. Here’s what actually counts, what doesn’t, and how to keep it defensible under Indicator 13.', 'check', 'yellow', 'assessment', 'educators'),
  p('iep-transition-goals', 'A Compliant Goal Isn’t the Same as Meaningful One: Writing IEP Transition Goals That Go Somewhere', 'Jun 11', '4 min',
    'You can write a transition goal that checks every Indicator 13 box and still watch it lead nowhere.', 'shield', 'orange', 'iep-goals', 'educators'),
  p('will-our-students-even-use-it', '“Will Our Students Use It?”', 'May 26', '3 min',
    'One administrator asked us that, kindly, before our beta started. We took the bet anyway.', 'people', 'brand', 'students-use-it', 'educators'),
  p('can-he-really-hold-a-job', '“Can He Really Hold a Job?”', 'Sep 12, 2025', '3 min',
    'Reframing work readiness for autistic adults.', 'progress', 'yellow', 'hold-a-job', 'families'),
  p('how-to-build-a-circle-of-support-when-the-old-one-fades', 'How to Build a Circle of Support (When the Old One Fades)', 'Jun 3, 2025', '2 min',
    'Because neither of you should have to do this alone.', 'people', 'orange', 'circle-of-support', 'families'),
  // The last four are further down the live listing; their article links are not known yet, so they open the blog.
  { slug: 'five-conversations', title: 'The 5 Conversations Parents of Autistic Teens Need to Have…', date: 'May 28, 2025', read: '3 min',
    excerpt: 'Balancing the next chapter: a graduation cap sits alongside gaming gear.', icon: 'lesson', tone: 'brand', url: 'https://www.spectrumshepherd.com/blog', thumb: '/images/blog/five-conversations.jpg', group: 'families' },
  { slug: 'ssi-ssdi', title: 'SSI, SSDI, and WTF: A Crash Course in Disability Benefits…', date: 'May 19, 2025', read: '3 min',
    excerpt: '“Why is getting help harder than getting a mortgage?” That’s what one mom told us.', icon: 'download', tone: 'yellow', url: 'https://www.spectrumshepherd.com/blog', thumb: '/images/blog/ssi-ssdi.jpg', group: 'families' },
  { slug: 'transition-blues', title: 'The Autism Transition Blues', date: 'May 15, 2025', read: '1 min',
    excerpt: 'By a mom who’s been there. I remember thinking, we’re almost there. Senior year.', icon: 'heart', tone: 'orange', url: 'https://www.spectrumshepherd.com/blog', thumb: '/images/blog/transition-blues.jpg', group: 'families' },
  { slug: 'enhancing-adult-life', title: 'Enhancing Adult Life for Autistic Individuals with…', date: 'Feb 20, 2025', read: '2 min',
    excerpt: 'Navigating the challenges of adulthood can be daunting for individuals on the autism spectrum.', icon: 'growth', tone: 'brand', url: 'https://www.spectrumshepherd.com/blog', thumb: '/images/blog/enhancing-adult-life.jpg', group: 'families' },
];
