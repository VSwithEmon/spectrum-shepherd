// Site-wide destinations for the V3/V4 refresh (nav, footer, page CTAs).
// Individual blog posts and webinar videos still live on the current site (spectrumshepherd.com)
// until they are migrated; those URLs are in posts.ts / webinars.ts.
//
// Account pages: /sign-up is the account form (every free-trial button goes there) and /login
// hands off to the Shepherd app. The marketing site never stores passwords: `appTrial` and
// `appLogin` are the app's own sign-up and log-in endpoints, which the forms submit to / link to.
export const site = {
  home: '/v3',
  trial: '/sign-up',
  signup: '/sign-up',
  login: '/login',
  demo: '/book-a-demo',
  teachers: '/teachers',
  teachersV2: '/teachers-v2', // Teachers page for the lavender homepage (V4)
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
