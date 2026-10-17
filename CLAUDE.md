# Spectrum Shepherd website

Marketing site for Spectrum Shepherd, an AI life-skills coach for neurodiverse students aged 14–22.
Buyers are special education teachers (free 45-day trial) and school/district leaders (15-min briefing).

## Source designs
- The current homepage is Figma frame "Homepage v4 — Redesign" (file `kf6bETSiXfVOzzNbTlCFA7`, node `38585:69285`, Landing Page page), built from the file's own design system. It's implemented in `src/pages/index.astro`.
- `/new` (`src/pages/new.astro`, components in `src/components/new/`) is a second, code-only direction under client review: "the path to independence", inspired by but not copied from the references. A fixed Current/New switch (`DesignToggle.astro`) appears on both homepages only.
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
