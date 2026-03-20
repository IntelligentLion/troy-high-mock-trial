# Troy High School Mock Trial — CLAUDE.md

## Project Overview

Static website for the **Troy High School Mock Trial Team** (Fullerton, CA).
Audience: prospective sponsors, alumni, competing students, judges, legal/academic community.

## Tech Stack

- **Pure vanilla HTML/CSS/JS** — no React, no Vue, no npm, no build tools
- Deployable to Netlify Drop, GitHub Pages, or Vercel with zero config
- Every page must work as a static file served from any basic HTTP server
- Google Fonts CDN is the only allowed external dependency

## Architecture

```
/
├── index.html          # Home
├── team.html           # 2025-2026 Roster
├── alumni.html         # Alumni Honor Wall
├── gallery.html        # Photo Gallery
├── sponsors.html       # Sponsorship Tiers
├── contact.html        # Contact + Interest Form
├── src/
│   ├── styles/
│   │   ├── tokens.css      # Design tokens (colors, type, spacing)
│   │   ├── global.css      # Base styles, resets
│   │   └── components.css  # Reusable component styles
│   └── js/
│       ├── nav.js          # Fixed nav + mobile hamburger
│       ├── gallery.js      # Lightbox (vanilla JS only)
│       └── animations.js   # Intersection Observer animations
├── assets/
│   ├── images/             # Organized by year folder (2016/–2025/)
│   │   └── members/        # Current member photos
│   └── icons/
└── data/
    ├── site-content.json   # ALL dynamic content (loaded via fetch())
    └── image-manifest.json # Image source URLs for manual retrieval
```

## Content Rules

- **All dynamic content** (names, bios, awards, photos) comes from `fetch('/data/site-content.json')`
- **No hallucinated data** — if a value is unknown, use `<!-- TODO: ADD [FIELD] -->` comments
- **Photo fallback**: missing photos → monogram avatar (initials on `--color-navy` circle with `--color-gold` text)
- Hard-coding in HTML is only acceptable for permanent structural copy (headlines, section descriptions)

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
