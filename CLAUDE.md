# Spectrum Shepherd website

Marketing site for Spectrum Shepherd, a personalized life skills curriculum platform for transition-age neurodivergent students.
Buyers are special education teachers (free 45-day trial, `/sign-up`) and school/district leaders (Book a Demo).

## Final design (updated Oct 29, 2026)
Figma file `6JMhALsrhqylYR6QjNPy9V`. The site matches these frames 1:1; older rounds live in git history.
- **Homepage** `/` (`src/pages/index.astro`): section "Landing page design" `38916:8452`; desktop `38916:8453`, mobile 390 `38916:9098`.
- **Inner pages**, section "Inner Pages" `38916:10489`:
  - `/teachers` (`38916:10490`), `/schools` (`38916:11011`), `/the-platform` (`38916:12766`), `/about` (`38916:11943`).
  - `/blog` (`38916:12052`, tabs "For educators" / "For families"), `/blog/<slug>` (`38916:12104`, post with comments), `/webinars` (`38916:12231`), `/webinars/<slug>` (`38916:12338`), `/beyond-the-transition-plan` (`38916:12646`).
  - `/book-a-demo` (`38916:12392`), `/login` (`38916:12562`, standalone card), `/sign-up` (`38916:12502`).
- Retired URLs redirect in `vercel.json`: `/v1`, `/v2` → `/`; `/the-app*` → `/the-platform`; `/<page>-v2` → `/<page>`.
- Client-approved copy wins over Figma wording: the Teachers before/after rows use the five approved pairs. The "15-minute walkthrough" photo label on /book-a-demo was removed (client feedback).
- No em dashes in our own visible copy (article text copied from the client's live posts stays as written). "Students", never "learners", in our copy.
- Figma text renders slightly narrower than browsers, so a few lines wrap one word differently; don't chase those with fixed widths.

## Code layout
- Pages in `src/pages/`; shared sections in `src/components/v3/` (PageHero, HeroHills, SkyDecor, LogoMarquee, Results, StatPanel, AudienceRows, Testimonial, DemoInvite, NightDay, EvidenceReport, LessonLibrary, FaqSection, TrialCta, CtaPanel, AuthShell); nav `SiteNav`, footer `SiteFooter`, layout `src/layouts/Base.astro`.
- Destinations live in `src/data/site.ts` (`pagesV2` is an alias of `pagesV1`). Trial buttons → `/sign-up`; log in → `/login` (hands off to the Shepherd app; never collect passwords on this site).
- Homepage and Schools "Book a Demo" open the demo form in a native `<dialog>` (`DemoInvite`; `[data-demo-open]`); without JS it links to `/book-a-demo`. Nav "Book a demo" links to `/book-a-demo`. Forms still need their `action` wired (client's booking/form service).
- Product visuals (dashboards, reports) are illustrative samples marked SAMPLE; they must not imply every feature exists or guarantee compliance.
- Only motion: the school logo strip (`LogoMarquee`), paused on hover and for reduced motion.
- Teacher story video: `public/videos/emily-colisimo-teacher-story.mp4` (from spectrumshepherd.com/teachers); the play button on the Teachers story card swaps in the player.
- The logo-band highlight words are plain tilted yellow pills, as in Figma (the building-block version is in git history, commit bd77f17).
- Blog: Sanity CMS. Editors write at `/studio` (config `sanity.config.ts`, schema `src/sanity/schemaTypes/`). `getAllPosts()` in `src/lib/blog.ts` lists published Sanity posts first (their "Blog tab" field picks the tab), then the articles copied from spectrumshepherd.com (`src/data/posts.ts` + full text in `src/data/post-content.json`). Every post gets `/blog/<slug>` (Sanity posts render their Portable Text body). Comments: the form needs the client's comment service; no comments are shown until then (we don't show sample comments). Project `jhozhuio`, dataset `production`. A Vercel deploy hook must be added in Sanity for publish-to-rebuild.
- Live site: Vercel project `spectrum-shepherd-5qfw` (https://spectrum-shepherd-5qfw.vercel.app), deployed from `VSwithEmon/spectrum-shepherd` main on every push. Rasel's repo (`raselhossain036-star/spectrum-shepherd-site`, remote `collaborator`) is merged in (Oct 27 and Oct 29, 2026); push to VSwithEmon explicitly.

## Stack
- Astro + Tailwind CSS v4, static output. One reusable component per section.
- No client-side framework on public pages (mobile menu, demo dialog, blog tabs/search are small vanilla scripts). React is only for the embedded Sanity Studio.

## Design tokens
- Tokens live in `@theme` in `src/styles/global.css`, mirroring the Figma variables. Use those utilities, not raw hex values.
- Brand green scale (`brand-25`…`brand-950`), ink #1A2718, muted #536255, border #E9EAEB, cream page background #FEFAF5; yellow and orange accents; status colours `success-25`, `error-25/700`, `warning-25/700`, `track`.
- Font: Montserrat (400–700). Type scale `text-xs`…`text-xl` and `text-display-xs`…`text-display-2xl`, following the Figma text styles.
- Primary buttons use brand-700 → brand-800, one step darker than the Figma gradient, so white text passes 4.5:1. Book a Demo is the dark (brand-800) primary everywhere.

## Rules
- Accessibility first: real buttons and links, labelled form fields, alt text on every image, 4.5:1 text contrast, visible focus states. Audience includes disabled students.
- Exactly one H1 per page; headings in order.
- Never invent statistics. Keep placeholders until the client supplies real content. The 100% teacher stat stays only if the original survey supports it.
- Use "students", never "learners". No pricing.
- Every page links to Privacy policy, Terms and Accessibility in the footer.
- Responsive down to 360px wide; check mobile before calling a section done.
