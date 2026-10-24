# Spectrum Shepherd website

Marketing site for Spectrum Shepherd, an AI life-skills coach for neurodiverse students aged 14–22.
Buyers are special education teachers (free 45-day trial) and school/district leaders (15-min briefing).

## Source designs
- **Homepages** (Figma file `kf6bETSiXfVOzzNbTlCFA7`, section "Homepage Design( update here)", node `38709:6131`): `/` redirects to `/v3` (`astro.config.mjs`). `/v3` = Figma "Homepage Design (v1) — main direction (yellow accents)" (node `38709:6933`, mobile `38724:75625`) and `/v4` = Figma "Homepage Design (v2) — lavender alternative" (node `38723:74995`, mobile `38826:183000`; `palette="lavender"` → `lavender:` variant, `lavender-*` tokens). V2-only differences from V1 are props: `Results capitalized` (V3 captions start with a capital), `DownloadBanner title` (placeholder wording differs), `AudienceGrid` (V3) vs `AudienceRows` (V4, newer check icon). The coded V1/V2 pages, their `calm` palette and the components only they used (Proof, Audiences, LogoBand, ClosingCta, AudienceStack, LogoStrip, old Testimonial) were removed on Oct 24, 2026; the older Figma file `6JMhALsrhqylYR6QjNPy9V` ("Website" section) is history. `ComplianceBridge`, `HowItWorks`, `Faq`, `Trust`, `BookDemo` are not on any page but are kept for reuse.
- Homepage build notes: both homepages share one `Hero` (cream → haze → mist sky, `v3/SkyDecor` clouds and birds — a phone-sized set on <640px, the full set from lg — and `v3/HeroHills`: the exact Figma hills, tree silhouettes and sun, cropped right at 0.45 scale on phones). `DemoSection` is the demo form; its `compact` prop is the homepage spacing. The `Students aged 14–22` field is in Figma but deliberately **not built** (client had it removed Oct 20, 2026). Icons: `v3/BrandIcon` is now the illustrated check-in-a-circle family (SVGs in `public/images/icons/illustrated/v2/`, exported from Figma `Icon v2 (illustrated)`). Audience photos in `public/images/photos/audience-*.jpg` are the Figma V1/V2 photos at 1100px. The school logo strip is the only motion (`LogoMarquee`, order and pin sizes from Figma).
- Inner pages (Figma sections "Teachers page", "Schools page", "The App page", "About page", "Blog (Perspectives) page", "Webinars page", "Beyond the Transition Plan (research) page" — build **v1**; v2 are alternates, not built): `/teachers`, `/schools`, `/the-app`, `/about`, `/blog`, `/webinars`, `/beyond-the-transition-plan`. They use `Base refresh` (V3 nav/footer, logo → `/v3`) and share `PageHero`, `CtaPanel`, `StatPanel`, `FaqSection` in `src/components/v3/`. Destinations live in `src/data/site.ts`; blog posts and webinar videos still link to spectrumshepherd.com (`src/data/posts.ts`, `webinars.ts`). The V3 homepage links to all of them (nav menus, audience cards, footer) and its free-trial buttons go to `/sign-up`. Paraphrased About/research copy is marked "[Verify copy]"; founder photos/titles and the teacher-story video are placeholders.
- Account pages (Figma sections "Book a demo page", "Sign up free page", "Log in page"; there is no separate free-trial page — every free-trial button goes to `/sign-up`): `/book-a-demo` (restyled in the V3 look; the homepage CTAs link here), `/sign-up` (teacher details form; the password is set in the Shepherd app — **never collect passwords on this site**) and `/login` (hands off to the app's secure log-in). In refresh mode "Sign up free" and all trial buttons → `/sign-up`, Log in → `/login`. Forms still need their `action` wired (TODO in each page); `site.appTrial`/`site.appLogin` hold the app URLs.
- A fixed V3/V4 switch (`DesignToggle.astro`) appears on the two homepages only.
- Live site: Vercel project `spectrum-shepherd-5qfw` (https://spectrum-shepherd-5qfw.vercel.app), deployed from `VSwithEmon/spectrum-shepherd` main on every push.
- `/book-a-demo` is the standalone demo-request page.
- `option-b-homepage.html` ("Sunrise") is the earlier direction, kept for reference only.
- The client's inspiration references are MagicSchool and Headspace: warm, polished, short headlines, real people, simple navigation.

## Current status (Oct 24, 2026)
Figma file `kf6bETSiXfVOzzNbTlCFA7`, page "Home Page Design" (`38641:74923`). Each page has its own section with versions side by side.
- **Teachers pages (built):** `/teachers` = Figma Teachers v1, linked from homepage V3 (nav, footer, audience card); `/teachers-v2` = Figma Teachers v2 in the lavender style, linked from homepage V4. Base picks the link from `palette` (`teachersHref`). Both use a tagline-only band (the live page has no school-logo row), the `TrialCta` split closing panel; v1 adds the night-vs-sunset `NightDay` panel and has no hills under the hero, v2 has classic hills + plain before/after cards.
- **Built in code:** `/v3` and `/v4` rebuilt Oct 24, 2026 to match the Figma "update here" homepages (hero sky, clouds, birds, hills with trees, illustrated icons, new audience photos, results arcs, logo strip, demo form) on desktop and the 390px mobile frames; inner pages `/teachers`, `/schools`, `/the-app`, `/about`, `/blog`, `/webinars`, `/beyond-the-transition-plan`; account pages `/book-a-demo`, `/sign-up`, `/login`.
- **Figma only — NOT yet built** (all v2 frames sit to the right of v1 in their section and use the live spectrumshepherd.com copy; shared look = cream→mist sky, `Decor / Cloud` instances, "Hills + trail" with triangle trees, illustrated icons, soft-cloud green briefing CTA):
  - **Schools v1 edits** (`38745:76496`): Teachers-style hero sky/clouds/hills, no logo strip, "Skills that stick" with photo + 0:57 video, illustrated Schools icons, "Beyond the classroom" as a rising 3-step staircase, briefing CTA as split panel with pine hills.
  - **Schools v2** (`38854:81539`): centred hero with Setup/Practice/Evidence cards (bubble watermark), photo+video collage, cloud CTA, bento "Beyond the classroom", outcome cards, questions accordion.
  - **Teachers v1 Questions** restyled as the Schools v2 accordion.
  - **The App v2** (`38866:81824`): copy-left hero with 77% donut, "Built for schools" + ecosystem wheel (live labels), CTA with 18 / 400+ / 3 / 100% fact tiles.
  - **About v2** (`38872:82583`): story hero, Transition Cliff pull quote, 2026 100% band, founders as tilted polaroids with the real founder photos, mission + yellow quote card.
  - **Blog v2** (`38878:82736`, big hero) and **Blog v3** (`38880:82869`, short header): all 13 live posts, split into "For educators" / "For families" (our labels); thumbnails are low-res crops of the live page.
  - **Webinars v2** (`38883:82960`): 2×2 grid of the 4 live webinars; **Webinar detail** (`38884:83071`): live copy, speaker card, labelled register form (first/last name, school, work email).
  - **Log in v2** (`38897:83489`): homepage sky with a centred card copying the live app sign-in (Sign in with Google / Microsoft, invitation code + "Connect account", no password field). Google/Microsoft marks are stand-ins — use the official brand assets.
  - **Mobile / nav:** the homepage mobile frames are now built; the V2 nav open-state menus (`38830:*`) are still Figma only, and inner pages have no mobile frames (code is responsive).
  - **Research v2** (`38894:83179`): homepage-style sky hero (clouds, birds, tree hills) with the white paper cover, centred Indicator 13 pull quote, execution questions + "plan presence ≠ quality ≠ execution" card, the two cited study stats, download panel.
  - Copy we wrote (not on the live site) is flagged in each design: eyebrow labels, "See the outcomes", "Your briefing / A short call. No prep needed.", "years old — where we start", blog section labels, "4 sessions".
- **Figma components:** `Site / Nav` and `Site / Footer` (instances on all pages), `Decor / Cloud tower` and `Decor / Cloud bank`, icon family + trees in "Componnet" section. Icon kit `38713:74964` has the original line icons, the illustrated "Icon v2" set (check-in-a-circle style: check, lesson, progress, people, download, shield, spark) and the Schools set (report, growth, milestone, route, heart, briefcase, target, prompt, steps); the site code still uses the line-style `BrandIcon`. The old "Free trial page" Figma section is unused (no `/free-trial` page).
- **Logo:** nav logo is the client-supplied `public/images/logo.png` (166×60, white background, used in `Logo.astro`); replace with an SVG / larger transparent PNG when available. `logo-mark.png` is still used as a decorative watermark mask.
- **Open client decisions:** which results to feature; transition-plan download title/destination; community link target; form actions and the Jessica Bershad review; lavender vs yellow; licensed photos to replace AI images; founder titles (photos now in About v2 Figma, not yet in code); original blog/webinar thumbnails; post-trial terms; teacher-story video.
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
