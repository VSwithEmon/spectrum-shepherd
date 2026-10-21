# Spectrum Shepherd website

Marketing site for Spectrum Shepherd, an AI life-skills coach for neurodiverse students aged 14–22.
Buyers are special education teachers (free 45-day trial) and school/district leaders (15-min briefing).

## Source designs
- The current homepage (V1, `/`) is Figma frame "Homepage Design (v1)" in the "Website" section of file `6JMhALsrhqylYR6QjNPy9V` (node `38859:3660`; nav dropdown open states are `38859:2925`, `38859:2859`, `38859:2986`). It's implemented in `src/pages/index.astro`. V1-only differences are passed as props (`Hero` eyebrow/lede/trail, `LogoBand layout="row"`, `Testimonial highlight={false}`) so V2 stays as it is. The earlier source was "Homepage v4 — Redesign" (file `kf6bETSiXfVOzzNbTlCFA7`, node `38585:69285`).
- `/v2` (`src/pages/v2.astro`, new components in `src/components/v2/`) is Figma frame "Homepage Design (v2)" in the same "Website" section (node `38859:3052`). It sets `palette="calm"` on `Base`, which turns on the `calm:` variant (`global.css`); components use it to swap large yellow areas for brand greens. Keep yellow only as small accents there.
- The earlier green-first V3 and V4 were removed (Oct 2026). `ComplianceBridge`, `HowItWorks` and `Faq` are no longer on any page but are kept for reuse.
- `/v3` and `/v4` apply the client's Oct 20, 2026 feedback (Figma section "Homepage Design( update here)", file `kf6bETSiXfVOzzNbTlCFA7`, node `38709:6131`). V3 = main direction (yellow accent); V4 = lavender alternative (`palette="lavender"` → `lavender:` variant, `lavender-*` tokens). Shared components opt in with a `refresh` prop (SiteNav, Hero, DemoSection, SiteFooter via `Base refresh`); new sections live in `src/components/v3/`. Only the school logo strip moves; everything else is static.
- A fixed V1–V4 switch (`DesignToggle.astro`) appears on these homepages only; `/` is V1.
- Live site: Vercel project `spectrum-shepherd-5qfw` (https://spectrum-shepherd-5qfw.vercel.app), deployed from `VSwithEmon/spectrum-shepherd` main on every push.
- `/book-a-demo` is the standalone demo-request page.
- `option-b-homepage.html` ("Sunrise") is the earlier direction, kept for reference only.
- The client's inspiration references are MagicSchool and Headspace: warm, polished, short headlines, real people, simple navigation.

## Stack
- Astro + Tailwind CSS v4, static output. One reusable component per homepage section in `src/components/`.
- No client-side framework unless a section genuinely needs interactivity (the mobile menu is a small vanilla script).

## Design tokens
- Tokens live in `@theme` in `src/styles/global.css`, mirroring the Figma variables. Use those utilities, not raw hex values.
- Brand green scale (`brand-25`…`brand-950`), ink #1A2718, muted #536255, border #E9EAEB, cream page background #FEFAF5; yellow and orange accents.
- Font: Montserrat (400–700). Type scale `text-xs`…`text-xl` and `text-display-xs`…`text-display-2xl`, following the Figma text styles.
- Primary buttons use brand-700 → brand-800, one step darker than the Figma gradient, so white text passes 4.5:1.

## Rules
- Accessibility first: real buttons and links, labelled form fields, alt text on every image, 4.5:1 text contrast, visible focus states. Audience includes disabled learners.
- Exactly one H1 per page; headings in order.
- Never invent statistics. Keep placeholders like `[X]%` and `[PHOTO …]` until the client supplies real content.
- Every page links to Privacy policy, Terms and Accessibility in the footer.
- Responsive down to 360px wide; check mobile before calling a section done.
