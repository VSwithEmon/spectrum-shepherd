// Schools that helped shape Shepherd, in the order of the Figma logo strip (Oct 2026).
// Used by v3/LogoMarquee.astro. Add `logo: '/images/logos/<file>.png'` as each school's file arrives
// (see public/images/logos/). White logos need a dark pin (`bg`). `logoSize` is the logo's size in px
// inside the 45px pin (from Figma). Burr & Burton uses its emblem only (wordmark too small at this size).
export type School = { name: string; mono: string; logo?: string; bg?: string; logoSize: number };

export const schools: School[] = [
  { name: 'Voorhees HS', mono: 'VH', logo: '/images/logos/voorhees.png', logoSize: 32 },
  { name: 'Newmark Education', mono: 'NE', logo: '/images/logos/newmark.png', logoSize: 29 },
  { name: 'Burr & Burton Academy', mono: 'BB', logo: '/images/logos/burr-burton.png', bg: 'bg-brand-800', logoSize: 29 },
  { name: 'Cotting School', mono: 'CS', logo: '/images/logos/cotting-school.png', logoSize: 35 },
  { name: 'North Hunterdon', mono: 'NH', logo: '/images/logos/north-hunterdon.png', logoSize: 32 },
  { name: 'Kinnelon Schools', mono: 'KS', logo: '/images/logos/kinnelon.png', logoSize: 35 },
];
