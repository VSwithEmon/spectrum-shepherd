# Spectrum Shepherd website

Marketing site for Spectrum Shepherd, an AI life-skills coach for neurodiverse students aged 14–22.
Buyers are special education teachers (free 45-day trial) and school/district leaders (15-min briefing).

## Source designs
- The homepage (`src/pages/index.astro`) is Figma frame "Homepage Design (v1) — main direction (yellow accents)" (file `6JMhALsrhqylYR6QjNPy9V`, node `38876:3531`, "Web" page), built from the client's 20 Oct 2026 feedback. Nav menu open states: `38859:2925`, `38859:2859`, `38859:2986`.
- Earlier rounds (V1 `38859:3660`, V2 `38859:3052`, V3/V4) were replaced by that single direction; they live in git history. `ComplianceBridge`, `HowItWorks`, `Faq`, `ClosingCta` and `Trust` are kept for reuse.
- Client direction to keep: green core palette, yellow as the main accent, peach secondary, orange only as a small touch. Clouds, tree-topped hills and setting sun; dotted paths with varied dot sizes (static); large Shepherd swirl as a faint watermark. No animation except the slow right-to-left school logo strip (`LogoBand`), which pauses on hover and stops for reduced motion.
- Icons: the illustrated "Icon v2" family in `public/images/icons/v2/` (pale disc, green hatched sticker, white glyph with dark outline). Don't reuse the student app's book/tools illustrations.
- Logo: Spectrum Shepherd company logo (`public/images/brand/`), PNGs from Figma until the client supplies SVGs.
- Photography: the client wants licensed (not AI) photos of teens and young adults (16–22). Current audience photos are Figma placeholders.
- `/v2` is Figma "Homepage Design (v2) — lavender alternative" (node `38877:5873`, mobile `38877:7143`; V1 mobile `38877:6499`): same sections, `palette="lavender"` on `Base` (sets `data-palette`, `lavender:` variant swaps yellow accents), audiences as alternating rows (`AudienceRows`). A floating V1/V2 switch (`DesignToggle`) sits on both homepages for review.
- `/teachers` is Figma "Teachers — Desktop 1440 (v1)" (node `38877:7930`); its sections live in `src/components/teachers/`. Hero, logo band and stat panel are shared (`PageHero`, `LogoBand logos={false}`, `StatPanel`).
- Live site: Vercel project `spectrum-shepherd-5qfw` (https://spectrum-shepherd-5qfw.vercel.app), deployed from `VSwithEmon/spectrum-shepherd` main on every push.
- `/book-a-demo` is the standalone demo-request page.
- Blog: Sanity CMS. Editors write at `/studio` (Sanity Studio embedded via `@sanity/astro`, config in `sanity.config.ts`, schema in `src/sanity/schemaTypes/`). Pages `/blog` and `/blog/[slug]` are built statically from published posts (`src/lib/blog.ts`); publishing in the Studio calls a Vercel deploy hook to rebuild. Sanity project `jhozhuio` (org "Spectrum Shepherd"), dataset `production` (public read); env vars `PUBLIC_SANITY_PROJECT_ID` / `PUBLIC_SANITY_DATASET` override. With no posts the blog shows an empty state. Every image requires alt text in the schema.
- `option-b-homepage.html` ("Sunrise") is the earlier direction, kept for reference only.
- The client's inspiration references are MagicSchool and Headspace: warm, polished, short headlines, real people, simple navigation.

## Stack
- Astro + Tailwind CSS v4, static output. One reusable component per homepage section in `src/components/`.
- No client-side framework on public pages (the mobile menu, blog filter and video card are small vanilla scripts). React is installed only for the embedded Sanity Studio at `/studio`.

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
