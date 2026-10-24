// On-demand webinars, as listed on spectrumshepherd.com/webinars. Each one opens its own details page
// (/webinars/<slug>, v1 only) with the register form; the video itself still lives on the current site.
export type Speaker = { name: string; org: string; photo: string };
export type Webinar = {
  slug: string;
  title: string;
  tags: string[];
  description: string;
  url: string;
  /** Longer copy for the details page; falls back to `description`. */
  body?: string[];
  duration?: string;
  speaker?: Speaker;
};

const detail = (slug: string) => `/webinars/${slug}`;

export const webinars: Webinar[] = [
  {
    slug: '5-in-25-empowering-paraprofessionals',
    title: '5 in 25: Empowering Paraprofessionals',
    tags: ['Paraprofessionals', 'Executive Functioning', 'Student Independence'],
    description: 'Dr. Lori Lopez-Lopez (Intella Consulting Associates) breaks down 5 practical strategies to empower paraprofessionals, build student independence, and foster executive functioning skills.',
    url: detail('5-in-25-empowering-paraprofessionals'),
    duration: '25 minutes',
    body: [
      'Paraprofessionals spend more time beside students than almost anyone on the team, yet few get guidance on when to step back. When support turns into doing the work, students lose the chance to build independence.',
      'In 25 minutes, Dr. Lori Lopez-Lopez of Intella Consulting Associates shares five practical strategies that shift paras from helping to coaching, so students grow their executive functioning skills along the way.',
      'You’ll leave with moves your paraprofessionals can use with students the next day.',
    ],
    speaker: { name: 'Dr. Lori Lopez-Lopez', org: 'Intella Consulting Associates', photo: '/images/photos/lori-lopez-lopez.jpg' },
  },
  {
    slug: '5-ways-to-activate-the-school-environment-for-esy-for-transition-skills-learning',
    title: '5 Ways to Activate the School Environment for ESY for Transition Skills Learning',
    tags: ['Extended School Year', 'Transition Planning'],
    description: 'Five immediately actionable strategies in 25 minutes to maximize the unique building and staff engagement opportunities possible during the extended school year program.',
    url: detail('5-ways-to-activate-the-school-environment-for-esy-for-transition-skills-learning'),
    duration: '25 minutes',
  },
  {
    slug: '5-in-25-back-to-school-systems-for-iep-transition-success',
    title: '5 in 25: Back to School Systems for IEP Transition Success',
    tags: ['Transition Planning', 'Back to School'],
    description: 'The first weeks back decide how well transition planning goes all year. Put five simple systems in place now, and every IEP meeting this year lands stronger.',
    url: detail('5-in-25-back-to-school-systems-for-iep-transition-success'),
    duration: '25 minutes',
  },
  {
    slug: 'the-role-of-school-leaders-in-transition-skills-planning',
    title: 'The Role of School Leaders in Transition Skills Planning',
    tags: ['Transition Planning', 'School Leadership'],
    description: 'You won’t sit in on most of this year’s transition meetings, but what you build shapes every one of them. A practical look at how school leaders strengthen transition planning.',
    url: detail('the-role-of-school-leaders-in-transition-skills-planning'),
  },
];

// Live thumbnails, in the same order as the webinars. The first two are infographics (shown whole).
export const webinarThumbs = [
  { src: '/images/webinars/paraprofessionals.jpg', fit: 'object-contain bg-haze' },
  { src: '/images/webinars/esy.jpg', fit: 'object-contain bg-haze' },
  { src: '/images/webinars/speaker.jpg', fit: 'object-cover object-top' },
  { src: '/images/webinars/speaker.jpg', fit: 'object-cover object-top' },
];
