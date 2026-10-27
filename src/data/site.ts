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
  schools: '/schools',
  app: '/the-platform', // "The Platform" (renamed from The App, Oct 27, 2026)
  about: '/about',
  blog: '/blog',
  webinars: '/webinars',
  research: '/beyond-the-transition-plan',
  whitePaper: 'https://www.spectrumshepherd.com/_files/ugd/d236a4_825c2d446a3c427a8e36697fa7ba0182.pdf',
  // The Shepherd app (separate system). Used as the sign-up form's action and the log-in destination.
  appTrial: 'https://app.shepherdskills.com/trial',
  appLogin: 'https://app.shepherdskills.com',
};

// The one page set the nav, footer, logo and homepage cards link (Oct 27, 2026: the V2 homepage and
// every -v2 page were removed; their URLs redirect to these pages in astro.config.mjs).
export type PageSet = {
  home: string; teachers: string; schools: string; app: string;
  about: string; blog: string; webinars: string; research: string;
};
export const pagesV1: PageSet = {
  home: '/v1', teachers: '/teachers', schools: '/schools', app: '/the-platform',
  about: '/about', blog: '/blog', webinars: '/webinars', research: '/beyond-the-transition-plan',
};

