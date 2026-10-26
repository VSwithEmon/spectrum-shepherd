// Site-wide destinations (nav, footer, page CTAs).
// Individual blog posts and webinar videos still live on the current site (spectrumshepherd.com)
// until they are migrated; those URLs are in posts.ts / webinars.ts.
//
// Account pages: /sign-up is the account form (every free-trial button goes there) and /login
// hands off to the Shepherd app. The marketing site never stores passwords: `appTrial` and
// `appLogin` are the app's own sign-up and log-in endpoints, which the forms submit to / link to.
export const site = {
  home: '/v1',
  trial: '/sign-up',
  signup: '/sign-up',
  login: '/login',
  demo: '/book-a-demo',
  teachers: '/teachers',
  teachersV2: '/teachers-v2', // Teachers page for the lavender homepage (V2)
  schools: '/schools',
  app: '/the-app',
  about: '/about',
  blog: '/blog',
  webinars: '/webinars',
  research: '/beyond-the-transition-plan',
  whitePaper: 'https://www.spectrumshepherd.com/_files/ugd/d236a4_825c2d446a3c427a8e36697fa7ba0182.pdf',
  // The Shepherd app (separate system). Used as the sign-up form's action and the log-in destination.
  appTrial: 'https://app.shepherdskills.com/trial',
  appLogin: 'https://app.shepherdskills.com',
};

// Two page sets, one per homepage design (Oct 2026):
//  - V1 (yellow accents) links the v1 pages;
//  - V2 (lavender accents) links the v2 pages, which swap every yellow accent for lavender
//    (`<Base palette="lavender">`).
// Base picks the set from `palette`, so the nav, footer and logo stay inside the same design.
export type PageSet = {
  home: string; teachers: string; schools: string; app: string;
  about: string; blog: string; webinars: string; research: string;
};
export const pagesV1: PageSet = {
  home: '/v1', teachers: '/teachers', schools: '/schools', app: '/the-app',
  about: '/about', blog: '/blog', webinars: '/webinars', research: '/beyond-the-transition-plan',
};
export const pagesV2: PageSet = {
  home: '/v2', teachers: '/teachers-v2', schools: '/schools-v2', app: '/the-app-v2',
  about: '/about-v2', blog: '/blog-v2', webinars: '/webinars-v2', research: '/beyond-the-transition-plan-v2',
};
export const pagesFor = (palette?: 'lavender'): PageSet => (palette === 'lavender' ? pagesV2 : pagesV1);
