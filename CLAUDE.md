# Troy High School Mock Trial — CLAUDE.md

## Project Overview

Static website for the **Troy High School Mock Trial Team** (Fullerton, CA).
Audience: prospective sponsors, alumni, competing students, judges, legal/academic community.

## Tech Stack

- **React + Vite + TypeScript**
- Tailwind CSS for styling (with CSS custom properties for design tokens)
- React Router for client-side routing
- Shadcn/ui component primitives where appropriate
- Deployable to Netlify, GitHub Pages, or Vercel

## Architecture

```
/
├── src/
│   ├── pages/
│   │   ├── Index.tsx       # Home
│   │   ├── Team.tsx        # 2025-2026 Roster
│   │   ├── Alumni.tsx      # Alumni Honor Wall
│   │   ├── Gallery.tsx     # Photo Gallery
│   │   ├── Sponsors.tsx    # Sponsorship Tiers
│   │   └── Contact.tsx     # Contact + Interest Form
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── MemberCard.tsx
│   │   ├── GalleryLightbox.tsx
│   │   ├── YearTabBar.tsx
│   │   ├── StatsCounter.tsx
│   │   └── SponsorTierCard.tsx
│   ├── styles/
│   │   ├── tokens.css      # CSS custom properties (colors, type, spacing)
│   │   └── global.css      # Base styles, animations
│   ├── hooks/
│   │   └── useSiteContent.ts   # Fetch + cache site-content.json
│   └── types/
│       └── site-content.ts     # TypeScript types for JSON schema
├── public/
│   └── data/
│       ├── site-content.json   # ALL dynamic content
│       └── image-manifest.json # Image source URLs
└── public/assets/images/       # Organized by year (2016/–2025/)
```

## Content Rules

- **All dynamic content** (names, bios, awards, photos) loaded via `useSiteContent()` hook fetching `/data/site-content.json`
- **No hallucinated data** — if a value is unknown, leave a `{/* TODO: ADD [FIELD] */}` comment
- **No monogram/initials avatar logos for people.** When someone has no photo, render their name/role/bio as plain text with no image slot — do not substitute an initials circle (e.g. "CH" for Coach Harold) or any other abbreviated stand-in graphic. That pattern reads as vibecoded.
- **Photo fallback**: missing photos → no image at all (card layout reflows to text-only); never a placeholder graphic
- Hard-coding in JSX is only acceptable for permanent structural copy (headlines, section descriptions)

## Design System

Aesthetic: **"Chambers & Conviction" (light)** — warm paper background + deep navy text + gold accents; the home hero and footer are dark navy bands that bookend the light body

### Colors
- Page background is warm paper (`hsl(45 57% 97%)` ≈ `#FCFAF4`), cards are white — see semantic tokens in `src/index.css`
- `--color-navy: #12275E` — deep navy: text, hero/footer backgrounds
- `--color-gold: #A16207` — dark gold, safe as **text** on light backgrounds (bright gold text fails WCAG on white)
- `--color-gold-fill: #FFC53D` — bright amber for **fills only** (buttons, active pills) with navy text on top
- `--color-gold-light: #FFD666` — fill hover state
- `--color-cream: #F3ECD9` — deeper warm tint for alternate surfaces
- `--color-slate: #44608C` — secondary text, dividers
- `--color-charcoal: #FFFFFF` — card surfaces (legacy token name)
- `--color-red-accent: #C22F2F` — competition/achievement callouts
- `--color-white: #FFFFFF`
- `--color-muted: #5C6B84` — de-emphasized text

**Gold rule:** never use `--color-gold-fill` as a text color on light backgrounds, and never use `--color-gold` as text on navy — inside dark bands (`.hero-dark`, footer) use white text and `--color-gold-fill` accents.

### Fonts
- Display: `Cormorant Garamond` (serif) — headlines, pull-quotes
- Body: `DM Sans` (sans-serif) — body copy
- Mono: `JetBrains Mono` — stats, numbers, badges

## CSS Conventions

- **Mobile-first**: base styles for mobile, `@media (min-width: ...)` for larger screens
- Breakpoints: 375px / 480px / 768px / 1280px / 1600px
- Use CSS custom properties from `tokens.css` — never hardcode colors or spacing

## Accessibility Requirements

- WCAG 2.1 AA color contrast for all text
- All images must have descriptive `alt` attributes
- Full keyboard navigation: gallery lightbox (← → Escape), tabs, nav
- Lightbox must trap focus while open, restore focus to triggering thumbnail on close
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`
- Visible, styled focus states (not just browser default)

## SEO Requirements

- Unique `<title>` and `<meta name="description">` on every page
- Open Graph tags on every page
- `application/ld+json` structured data on `index.html`

## Performance Requirements

- Lighthouse Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 90
- All images: `loading="lazy"`, compressed (target < 200KB each)
- No external JS dependencies (Google Fonts CDN excepted)
- Time to Interactive < 3s on simulated 4G

## Implementation Phases

1. Scraper → `data/site-content.json`, `data/image-manifest.json`, `assets/images/**`
2. Design Tokens → `src/styles/tokens.css`, `src/styles/global.css`
3. Components → `src/styles/components.css`, `src/js/*.js`
4. Pages → all 6 HTML pages (index → team → alumni → gallery → sponsors → contact)
5. QA → `QA_REPORT.md` + in-place fixes
