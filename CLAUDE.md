# Spectrum Shepherd website

Marketing site for Spectrum Shepherd, an AI life-skills coach for neurodiverse students aged 14–22.
Buyers are special education teachers (free 45-day trial) and school/district leaders (15-min briefing).

## Source designs
- The current homepage (V1, `/`) is Figma frame "Homepage Design (v1)" in the "Website" section of file `6JMhALsrhqylYR6QjNPy9V` (node `38859:3660`; nav dropdown open states are `38859:2925`, `38859:2859`, `38859:2986`). It's implemented in `src/pages/index.astro`. V1-only differences are passed as props (`Hero` eyebrow/lede/trail, `LogoBand layout="row"`, `Testimonial highlight={false}`) so V2 stays as it is. The earlier source was "Homepage v4 — Redesign" (file `kf6bETSiXfVOzzNbTlCFA7`, node `38585:69285`).
- `/v2` (`src/pages/v2.astro`, new components in `src/components/v2/`) is Figma frame "Homepage Design (v2)" in the same "Website" section (node `38859:3052`). It sets `palette="calm"` on `Base`, which turns on the `calm:` variant (`global.css`); components use it to swap large yellow areas for brand greens. Keep yellow only as small accents there.
- The earlier green-first V3 and V4 were removed (Oct 2026). `ComplianceBridge`, `HowItWorks` and `Faq` are no longer on any page but are kept for reuse.
- `/v3` and `/v4` apply the client's Oct 20, 2026 feedback (Figma section "Homepage Design( update here)", file `kf6bETSiXfVOzzNbTlCFA7`, node `38709:6131`). V3 = main direction (yellow accent); V4 = lavender alternative (`palette="lavender"` → `lavender:` variant, `lavender-*` tokens). Shared components opt in with a `refresh` prop (SiteNav, Hero, DemoSection, SiteFooter via `Base refresh`); new sections live in `src/components/v3/`. Only the school logo strip moves; everything else is static. Hero sky (Figma "Landing Page" reference, node `38766:11359`): cream → `mist` gradient, reference clouds and birds (`public/images/hero/`, lg+ only); V3 uses the pine-tree hills (`v3/PineHills.astro`, `scene="pines"`), V4 keeps the layered hills with small trees (`scene="classic"`).
- Inner pages (Figma sections "Teachers page", "Schools page", "The App page", "About page", "Blog (Perspectives) page", "Webinars page", "Beyond the Transition Plan (research) page" — build **v1**; v2 are alternates, not built): `/teachers`, `/schools`, `/the-app`, `/about`, `/blog`, `/webinars`, `/beyond-the-transition-plan`. They use `Base refresh` (V3 nav/footer, logo → `/v3`) and share `PageHero`, `CtaPanel`, `StatPanel`, `FaqSection` in `src/components/v3/`. Destinations live in `src/data/site.ts`; blog posts and webinar videos still link to spectrumshepherd.com (`src/data/posts.ts`, `webinars.ts`). The V3 homepage links to all of them (nav menus, audience cards, footer) and its free-trial buttons go to `/sign-up`. Paraphrased About/research copy is marked "[Verify copy]"; founder photos/titles and the teacher-story video are placeholders.
- Account pages (Figma sections "Book a demo page", "Sign up free page", "Log in page"; there is no separate free-trial page — every free-trial button goes to `/sign-up`): `/book-a-demo` (restyled in the V3 look; also used by V1/V2 CTAs), `/sign-up` (teacher details form; the password is set in the Shepherd app — **never collect passwords on this site**) and `/login` (hands off to the app's secure log-in). In refresh mode "Sign up free" and all trial buttons → `/sign-up`, Log in → `/login`. Forms still need their `action` wired (TODO in each page); `site.appTrial`/`site.appLogin` hold the app URLs.
- A fixed V1–V4 switch (`DesignToggle.astro`) appears on these homepages only; `/` is V1.
- Live site: Vercel project `spectrum-shepherd-5qfw` (https://spectrum-shepherd-5qfw.vercel.app), deployed from `VSwithEmon/spectrum-shepherd` main on every push.
- `/book-a-demo` is the standalone demo-request page.
- `option-b-homepage.html` ("Sunrise") is the earlier direction, kept for reference only.
- The client's inspiration references are MagicSchool and Headspace: warm, polished, short headlines, real people, simple navigation.

## Current status (Oct 23, 2026)
Figma file `kf6bETSiXfVOzzNbTlCFA7`, page "Home Page Design" (`38641:74923`). Each page has its own section with versions side by side.
- **Teachers pages (built):** `/teachers` = Figma Teachers v1, linked from homepage V3 (nav, footer, audience card); `/teachers-v2` = Figma Teachers v2 in the lavender style, linked from homepage V4. Base picks the link from `palette` (`teachersHref`). Both use a tagline-only band (the live page has no school-logo row), the `TrialCta` split closing panel; v1 adds the night-vs-sunset `NightDay` panel and has no hills under the hero, v2 has classic hills + plain before/after cards.
- **Built in code and pushed:** `/v3` (V1 direction) and `/v4` (lavender) incl. the new hero sky/clouds/birds, pine hills (V3) vs layered hills with extra trees (V4), V4 audiences as photo rows; inner pages `/teachers`, `/schools`, `/the-app`, `/about`, `/blog`, `/webinars`, `/beyond-the-transition-plan`; account pages `/book-a-demo`, `/sign-up`, `/login`.
- **Figma only — NOT yet built:**
  - (Teachers v1/v2 are now built — see below.)
  - **Schools / App / About / Blog / Webinars / Research v2** designs (alternates; only v1 is built).
  - **Mobile** designs for inner pages (code is responsive; only the homepage V1 has a Figma mobile frame).
- **Figma components:** `Site / Nav` and `Site / Footer` (instances on all pages), `Decor / Cloud tower` and `Decor / Cloud bank`, icon family + trees in "Componnet" section. The old "Free trial page" Figma section is unused (no `/free-trial` page).
- **Logo:** nav logo is the client-supplied `public/images/logo.png` (166×60, white background, used in `Logo.astro`); replace with an SVG / larger transparent PNG when available. `logo-mark.png` is still used as a decorative watermark mask.
- **Open client decisions:** which results to feature; transition-plan download title/destination; community link target; form actions and the Jessica Bershad review; lavender vs yellow; licensed photos to replace AI images; founder photos/titles; post-trial terms; teacher-story video.
- **Deploy:** pushes go to `raselhossain036-star/spectrum-shepherd-site`; the live Vercel site deploys from `VSwithEmon/spectrum-shepherd`, so Emon must pull `main` (or give write access) for changes to go live.
- **Working tips:** very long chat sessions burn the plan limit fast (every message re-reads the whole history, images are costly) — start fresh sessions and batch requests.

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
