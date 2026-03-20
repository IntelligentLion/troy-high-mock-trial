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
│   │   ├── SponsorTierCard.tsx
│   │   └── MonogramAvatar.tsx
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
- **Photo fallback**: missing photos → `<MonogramAvatar>` component (initials on `--color-navy` circle with `--color-gold` text)
- Hard-coding in JSX is only acceptable for permanent structural copy (headlines, section descriptions)

## Design System

Aesthetic: **"Chambers & Conviction"** — dark navy courtroom gravity + sharp gold accents + clean serif type

### Colors
- `--color-navy: #0D1B2A` — primary dark background
- `--color-gold: #C9A84C` — prestige accent (use sparingly)
- `--color-gold-light: #E8C97A` — hover/active
- `--color-cream: #F7F3EC` — warm off-white background
- `--color-slate: #3D5A73` — secondary text, dividers
- `--color-charcoal: #1E2D3D` — card backgrounds
- `--color-red-accent: #8B1A1A` — competition/achievement callouts
- `--color-white: #FFFFFF`
- `--color-muted: #8A9BB0` — de-emphasized text

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
