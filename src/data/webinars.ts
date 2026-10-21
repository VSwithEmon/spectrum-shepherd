// On-demand webinars, as listed on spectrumshepherd.com/webinars. The videos still live on the
// current site, so `url` points there until they are migrated.
const live = 'https://www.spectrumshepherd.com/webinar/';
export type Webinar = { title: string; tags: string[]; description: string; url: string };

export const webinars: Webinar[] = [
  {
    title: '5 in 25: Empowering Paraprofessionals',
    tags: ['Paraprofessionals', 'Executive Functioning', 'Student Independence'],
    description: 'Dr. Lori Lopez-Lopez (Intella Consulting Associates) breaks down 5 practical strategies to empower paraprofessionals, build student independence, and foster executive functioning skills.',
    url: live + '5-in-25-empowering-paraprofessionals',
  },
  {
    title: '5 Ways to Activate the School Environment for ESY for Transition Skills Learning',
    tags: ['Extended School Year', 'Transition Planning'],
    description: 'Five immediately actionable strategies in 25 minutes to maximize the unique building and staff engagement opportunities possible during the extended school year program.',
    url: live + '5-ways-to-activate-the-school-environment-for-esy-for-transition-skills-learning',
  },
  {
    title: '5 in 25: Back to School Systems for IEP Transition Success',
    tags: ['Transition Planning', 'Back to School'],
    description: 'The first weeks back decide how well transition planning goes all year. Put five simple systems in place now, and every IEP meeting this year lands stronger.',
    url: live + '5-in-25-back-to-school-systems-for-iep-transition-success',
  },
  {
    title: 'The Role of School Leaders in Transition Skills Planning',
    tags: ['Transition Planning', 'School Leadership'],
    description: 'You won’t sit in on most of this year’s transition meetings, but what you build shapes every one of them. A practical look at how school leaders strengthen transition planning.',
    url: live + 'the-role-of-school-leaders-in-transition-skills-planning',
  },
];
