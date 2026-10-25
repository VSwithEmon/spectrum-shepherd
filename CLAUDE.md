# Spectrum Shepherd website

Marketing site for Spectrum Shepherd, an AI life-skills coach for neurodiverse students aged 14–22.
Buyers are special education teachers (free 45-day trial) and school/district leaders (15-min briefing).

## Source designs
- The homepage (`src/pages/index.astro`) is the former V2 (lavender alternative, Figma node `38877:5873`, mobile `38877:7143`) with the client's approved copy of 26 Oct 2026: yellow accent, lavender only as support, audiences as alternating rows (`AudienceRows`, data in `src/data/audiences.ts`). `/v2` redirects to `/` (vercel.json). V1 (`38876:3531`) and older rounds live in git history. `ComplianceBridge`, `HowItWorks`, `Faq`, `ClosingCta` and `Trust` are kept for reuse.
- Client direction to keep: green core palette, yellow as the main accent, peach secondary, orange only as a small touch. Clouds, tree-topped hills and setting sun; dotted paths with varied dot sizes (static); large Shepherd swirl as a faint watermark. No animation except the slow right-to-left school logo strip (`LogoBand`), which pauses on hover and stops for reduced motion. Don't lead with AI. Use "students", never "learners". No pricing. Keep stats compact (no supporting sentences).
- Book a Demo is the dark filled primary everywhere; Sign up free / Start Free Trial is secondary. `Button demo` opens the `DemoDialog` pop-up (`data-demo`, native `<dialog>` in `Base`); without JS it falls back to `/book-a-demo`. `src/data/site.ts` holds `bookingUrl` (client's Calendly/HubSpot link, still empty: the form has no backend until then), the trial link and the real social accounts used by the footer.
- Nav: direct links Teachers, Schools, The App, plus a Resources menu (free transition plan, funding guide, blog, webinars).
- Icons: the illustrated "Icon v2" family in `public/images/icons/v2/` (pale disc, green hatched sticker, white glyph with dark outline). Don't reuse the student app's book/tools illustrations.
- Logo: Spectrum Shepherd company logo (`public/images/brand/`), PNGs from Figma until the client supplies SVGs. The client wants the official stacked logo, larger.
- Photography: the client wants licensed, authentic (not AI) photos of teens and young adults (16–22). Current audience photos are Figma placeholders.
- Product visuals are illustrative samples (marked SAMPLE) and must not imply every feature exists or guarantee compliance.
- `/teachers` is Figma "Teachers, Desktop 1440 (v1)" (node `38877:7930`); its sections live in `src/components/teachers/`. Hero, logo band and stat panel are shared (`PageHero`, `LogoBand` with logos, `StatPanel`).
- `/schools` is the client's V2 brief for special education directors (26 Oct 2026), in the homepage/Teachers visual system: hero with `AdminDashboard`, value cards, `SkillProgress`, `CurriculumMap`, `LessonLibrary`, `EvidenceReport`, `StatPanel`, `LogoBand`, `DemoSection`. Components in `src/components/schools/`. The old Schools overview video (`public/videos/schools-overview.mp4`) is currently unused.
- `/the-app` and `/the-app-v2` are Figma "The App V1" (`38885:22840`) and "The App V2" (`38886:9651`): one body in `src/components/app/AppPage.astro`; V2 adds the cloudy sky (`AppSky`) and tree-topped hills. Both keep the green/yellow palette. `/the-app-v3` (Figma "The App V3", `38888:10753`) swaps in a two-column hero (`AppHeroV3`, clouds via `AppSky layout="v3"`); the rest is the same body. A V1/V2/V3 switch (`DesignToggle`, App pages only) sits on all three.
- Inner pages were ported from the collaborator repo (`raselhossain036-star/spectrum-shepherd-site`, remote `collaborator`) and matched to the current Figma frames (section `38877:7929`). Fixed-position desktop compositions (App phone stage, Schools road) switch on at `xl` so 1024px doesn't overflow.
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
