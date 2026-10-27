# Spectrum Shepherd website

Marketing site for Spectrum Shepherd, a personalized life skills curriculum platform for transition-age neurodivergent students.
Buyers are special education teachers (free 45-day trial, `/sign-up`) and school/district leaders (Book a Demo).

## Final design (Oct 27, 2026)
Figma file `6JMhALsrhqylYR6QjNPy9V`. The site matches these frames 1:1; older rounds (V1/V2/V3 homepages, `-v2` pages, The App pages) live in git history.
- **Homepage** `/` (`src/pages/index.astro`): section "Homepage Design( update here)" `38892:12051`; desktop `38892:12052`, mobile 390 `38892:12696`.
- **Inner pages**, section "Inner page" `38892:13467`:
  - `/teachers` (`38892:13468`), `/schools` (`38892:13975`), `/the-platform` (`38892:16025`), `/about` (`38892:14893`).
  - `/blog` (`38892:15284`, tabs "For educators" / "For families"), `/webinars` (`38892:15485`), `/webinars/<slug>` (`38892:15592`), `/beyond-the-transition-plan` (`38892:15904`).
  - `/book-a-demo` (`38892:15647`), `/login` (Log in v1 `38892:15819`, standalone card), `/sign-up` (`38892:15758`).
- Retired URLs redirect in `vercel.json`: `/v1`, `/v2` → `/`; `/the-app*` → `/the-platform`; `/<page>-v2` → `/<page>`.
- Where the client's approved copy (Oct 26 feedback) differs from a Figma frame, the copy wins (e.g. the Teachers before/after rows). No em dashes in visible text.
- Figma text renders slightly narrower than browsers, so a few lines wrap one word differently; don't chase those with fixed widths.

## Code layout
- Pages in `src/pages/`; shared sections in `src/components/v3/` (PageHero, HeroHills, SkyDecor, LogoMarquee, Results, StatPanel, AudienceRows, Testimonial, DemoInvite, NightDay, EvidenceReport, LessonLibrary, FaqSection, TrialCta, CtaPanel, AuthShell); nav `SiteNav`, footer `SiteFooter`, layout `src/layouts/Base.astro`.
- Destinations live in `src/data/site.ts` (`pagesV2` is an alias of `pagesV1`). Trial buttons → `/sign-up`; log in → `/login` (hands off to the Shepherd app; never collect passwords on this site).
- Homepage and Schools "Book a Demo" open the demo form in a native `<dialog>` (`DemoInvite`; `[data-demo-open]`); without JS it links to `/book-a-demo`. Nav "Book a demo" links to `/book-a-demo`. Forms still need their `action` wired (client's booking/form service).
- Product visuals (dashboards, reports) are illustrative samples marked SAMPLE; they must not imply every feature exists or guarantee compliance.
- Only motion: the school logo strip (`LogoMarquee`), paused on hover and for reduced motion.
- `public/images/photos/demo-tablet.jpg` is exported from Figma at 1x (430×320); replace with the original photo when available.
- Blog: Sanity CMS. Editors write at `/studio` (config `sanity.config.ts`, schema `src/sanity/schemaTypes/`). `/blog` lists published Sanity posts first (their "Blog tab" field picks the tab) and then the posts still on spectrumshepherd.com (`src/data/posts.ts`); each Sanity post gets `/blog/<slug>`. Project `jhozhuio`, dataset `production`. A Vercel deploy hook must be added in Sanity for publish-to-rebuild.
- Live site: Vercel project `spectrum-shepherd-5qfw` (https://spectrum-shepherd-5qfw.vercel.app), deployed from `VSwithEmon/spectrum-shepherd` main on every push. Rasel's repo (`raselhossain036-star/spectrum-shepherd-site`, remote `collaborator`) was merged in on Oct 27, 2026; push to VSwithEmon explicitly.

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
