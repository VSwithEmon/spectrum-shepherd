// Blog ("Perspectives") posts, as listed on spectrumshepherd.com/blog. Individual posts still live on
// the current site, so `url` points there until the articles are migrated. Years are shown only
// where the live listing shows them.
import type { IconName } from '../components/v3/BrandIcon.astro';

const live = 'https://www.spectrumshepherd.com/post/';
export type Post = { slug: string; title: string; date: string; read: string; excerpt: string; icon: IconName; tone: 'brand' | 'yellow' | 'orange'; url: string };

const p = (slug: string, title: string, date: string, read: string, excerpt: string, icon: IconName, tone: Post['tone']): Post =>
  ({ slug, title, date, read, excerpt, icon, tone, url: live + slug });

export const posts: Post[] = [
  p('self-advocacy-activities-high-school-special-education', '5 Self-Advocacy Activities for High School Special Education', 'Oct 13', '4 min',
    'Five practical self-advocacy activities with whole-class setups, flexible communication supports and simple progress checks for special education teachers.', 'people', 'brand'),
  p('measuring-what-matters-in-life-and-functional-skills', 'Measuring what matters in life and functional skills', 'Aug 19', '5 min',
    'Accuracy tells part of the story. Prompt level and self-initiation show how independence is developing.', 'progress', 'yellow'),
  p('functional-skills-vs-life-skills-special-education', 'Functional Skills vs. Life Skills in Special Education: What’s the Difference?', 'Aug 7', '4 min',
    'Life skills and functional skills overlap, but schools often use the terms differently. Here is a practical way to think about both, and what strong transition instruction should actually build.', 'lesson', 'orange'),
  p('extended-school-year-transition-students', 'Extended School Year Goals for Transition-Age Students: A Practical Guide', 'Jun 30', '4 min',
    'For transition-age students, ESY can protect the skills that are hardest to rebuild: employment routines, daily living, self-advocacy and getting around the community.', 'spark', 'brand'),
  p('age-appropriate-transition-assessment', 'What Actually Counts as an Age-Appropriate Transition Assessment', 'Jun 17', '5 min',
    'An age-appropriate transition assessment isn’t a form you can buy off the shelf. Here’s what actually counts, what doesn’t, and how to keep it defensible under Indicator 13.', 'check', 'yellow'),
  p('iep-transition-goals', 'A Compliant Goal Isn’t the Same as Meaningful One: Writing IEP Transition Goals That Go Somewhere', 'Jun 11', '4 min',
    'You can write a transition goal that checks every Indicator 13 box and still watch it lead nowhere.', 'shield', 'orange'),
  p('will-our-students-even-use-it', '“Will Our Students Use It?”', 'May 26', '3 min',
    'One administrator asked us that, kindly, before our beta started. We took the bet anyway.', 'people', 'brand'),
  p('can-he-really-hold-a-job', '“Can He Really Hold a Job?”', 'Sep 12, 2025', '3 min',
    'Reframing work readiness for autistic adults.', 'progress', 'yellow'),
  p('how-to-build-a-circle-of-support-when-the-old-one-fades', 'How to Build a Circle of Support (When the Old One Fades)', 'Jun 3, 2025', '2 min',
    'Because neither of you should have to do this alone.', 'people', 'orange'),
];
