// Schools that helped shape Shepherd. Shared by LogoBand.astro and v3/LogoMarquee.astro.
// Add `logo: '/images/logos/<file>.png'` as each school's file arrives (see public/images/logos/).
// Round seals fill the pin; wide wordmarks get extra `pad` so they fit inside the circle.
// White logos need a dark pin (`bg`). Burr & Burton uses its emblem only (wordmark too small at 64px).
// x/y place the pins along LogoBand's trail layout (1200-wide composition).
export type School = { name: string; mono: string; x: number; y: number; logo?: string; pad?: string; bg?: string };

export const schools: School[] = [
  { name: 'Burr & Burton Academy', mono: 'BB', x: 100, y: 40, logo: '/images/logos/burr-burton.png', pad: 'p-1.5', bg: 'bg-brand-800' },
  { name: 'Cotting School', mono: 'CS', x: 300, y: 96, logo: '/images/logos/cotting-school.png' },
  { name: 'North Hunterdon', mono: 'NH', x: 500, y: 40, logo: '/images/logos/north-hunterdon.png', pad: 'p-1' },
  { name: 'Kinnelon Schools', mono: 'KS', x: 700, y: 96, logo: '/images/logos/kinnelon.png' },
  { name: 'Voorhees HS', mono: 'VH', x: 900, y: 40, logo: '/images/logos/voorhees.png', pad: 'p-1' },
  { name: 'Newmark Education', mono: 'NE', x: 1100, y: 96, logo: '/images/logos/newmark.png', pad: 'p-1.5' },
];
