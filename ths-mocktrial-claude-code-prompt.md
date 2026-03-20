# THS Mock Trial Website — Claude Code Prompt

## Project Overview

Build a production-grade, multi-page static website for the **Troy High School Mock Trial Team** (Fullerton, CA). The site must be bold, modern, professional, prestigious, yet friendly and approachable — think *law firm meets elite academic club meets community hub*. The audience is prospective sponsors, alumni, competing students, judges, and the broader legal/academic community.

---

## Subagent 1 — Scraper Agent

**Goal:** Extract all content and assets from the old Weebly site before any UI work begins.

**Tasks:**

1. Fetch and fully parse all pages from `https://thsmocktrial.weebly.com` including:
   - Home page
   - Alumni & Gallery page (`/alumni--gallery.html`)
   - Any linked sub-pages (about, team, contact, etc.)

2. Extract and catalog:
   - All text content (bios, descriptions, team history, mission statements, coach info)
   - All image URLs — download every image and save to `/assets/images/` organized by year folder (`/assets/images/2016/`, `/assets/images/2017/`, ..., `/assets/images/2024/`)
   - All names (alumni, officers, members) with associated years
   - Any awards, competition results, or achievements mentioned
   - Any existing sponsorship or partner mentions

3. Produce a structured JSON manifest at `/data/site-content.json` with the following schema:

```json
{
  "team": {
    "name": "Troy High School Mock Trial",
    "founded": 2016,
    "school": "Troy High School, Fullerton CA",
    "description": "...",
    "coaches": []
  },
  "alumni": [
    {
      "name": "...",
      "years": ["2016-2017"],
      "role": "...",
      "achievements": []
    }
  ],
  "gallery": {
    "2016": ["path/to/img1.jpg"],
    "2017": []
  },
  "currentYear": {
    "season": "2025-2026",
    "officers": [],
    "members": [
      {
        "name": "...",
        "role": "...",
        "photo": "...",
        "competitions": [],
        "awards": []
      }
    ]
  },
  "sponsors": [],
  "achievements": []
}
```

4. If images cannot be downloaded directly, log their source URLs in `/data/image-manifest.json` for manual retrieval and flag them clearly.

5. Handle Weebly's obfuscated class names gracefully — use semantic content selectors and `<img>` src extraction rather than relying on class names. If the old site is completely inaccessible, flag all missing content with `<!-- TODO: ADD CONTENT -->` comments rather than hallucinating placeholder data.

**Output:** `/data/site-content.json`, `/data/image-manifest.json`, `/assets/images/**`

---

## Subagent 2 — Design Token Agent

**Goal:** Establish the complete design system before any UI code is written.

**Output:** `/src/styles/tokens.css`, `/src/styles/global.css`

### Aesthetic Direction

**"Chambers & Conviction"** — the visual language of serious legal prestige crossed with the energy of youth excellence. Think dark navy courtroom gravity + sharp gold accents + clean serif type + confident whitespace. Not corporate-stiff; *accomplished and alive*.

### Color Palette

```css
:root {
  /* Core Palette */
  --color-navy:        #0D1B2A;   /* primary dark background */
  --color-gold:        #C9A84C;   /* prestige accent */
  --color-gold-light:  #E8C97A;   /* hover/active states */
  --color-cream:       #F7F3EC;   /* warm off-white background */
  --color-slate:       #3D5A73;   /* secondary text, dividers */
  --color-charcoal:    #1E2D3D;   /* card backgrounds */
  --color-red-accent:  #8B1A1A;   /* competition/achievement callouts */
  --color-white:       #FFFFFF;
  --color-muted:       #8A9BB0;   /* de-emphasized text */
}
```

### Typography

```css
:root {
  --font-display: 'Cormorant Garamond', serif;  /* headlines — legal elegance */
  --font-body:    'DM Sans', sans-serif;         /* body — modern readability */
  --font-mono:    'JetBrains Mono', monospace;   /* stats, numbers, badges */
}
```

Import both fonts from Google Fonts. Cormorant Garamond weights 400, 600, 700 italic. DM Sans weights 400, 500, 600.

### Type Scale

```css
:root {
  --text-xs:   0.75rem;
  --text-sm:   0.875rem;
  --text-base: 1rem;
  --text-lg:   1.125rem;
  --text-xl:   1.25rem;
  --text-2xl:  1.5rem;
  --text-3xl:  2rem;
  --text-4xl:  2.75rem;
  --text-5xl:  3.75rem;
  --text-6xl:  5rem;
}
```

### Spacing, Radius & Shadow

```css
:root {
  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-3:  0.75rem;
  --space-4:  1rem;
  --space-6:  1.5rem;
  --space-8:  2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
  --space-32: 8rem;

  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   16px;
  --radius-full: 9999px;

  --shadow-sm:   0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  --shadow-md:   0 4px 12px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12);
  --shadow-lg:   0 10px 40px rgba(0,0,0,0.2);
  --shadow-gold: 0 4px 20px rgba(201,168,76,0.25);
}
```

### Motion

```css
:root {
  --ease-out-expo:  cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast:  150ms;
  --duration-base:  300ms;
  --duration-slow:  600ms;
}
```

---

## Subagent 3 — Component Agent

**Goal:** Build all reusable UI components before pages are assembled.

**Output:** `/src/styles/components.css`, `/src/js/nav.js`, `/src/js/gallery.js`, `/src/js/animations.js`

### Components to Build

#### Navigation (`nav.js`)
- Fixed top nav with logo on left, links on right
- Background transitions from transparent to solid navy on scroll
- Mobile hamburger menu with slide-in drawer
- Active page indicator (gold underline)
- Links: Home · Team · Alumni · Gallery · Sponsors · Contact

#### Member Card (`.member-card`)
```html
<article class="member-card">
  <div class="member-photo-wrap">
    <img src="..." alt="[Name]" loading="lazy" />
  </div>
  <div class="member-info">
    <h3 class="member-name">First Last</h3>
    <span class="member-role">Attorney · Witness · Officer</span>
    <div class="member-competitions">
      <!-- one .pill per competition -->
    </div>
    <div class="member-awards">
      <!-- one .award-badge per award -->
    </div>
  </div>
</article>
```
- Officer variant: larger card, gold ring on photo border, slightly elevated shadow
- Member variant: more compact, standard border

#### Gallery Lightbox (`gallery.js`)
- Vanilla JS only — no external libraries
- Click any thumbnail to open full-size overlay
- Left/right arrow navigation, keyboard support (← → Escape)
- Caption display if metadata available
- Smooth fade-in/out transitions

#### Year Tab Bar
- Sticky horizontal scrollable tab bar
- One tab per year 2016 through current
- Active tab: gold background, navy text
- Inactive: transparent, cream text, gold hover
- Smooth scroll-to-section behavior

#### Stats Counter
- Animated count-up on scroll-into-view
- Uses Intersection Observer API
- Monospace font for numbers

#### Sponsor Tier Cards
- Three tiers: **Counsel** (Bronze) · **Associate** (Silver) · **Partner** (Gold)
- Most popular tier highlighted with gold border + "Recommended" badge
- Benefits checklist per tier

#### Footer
- Dark navy background
- Logo, nav links, school name, contact email, social icons
- Copyright line: `© [year] Troy High School Mock Trial Team`

---

## Subagent 4 — Page Build Agent

**Goal:** Assemble all 6 pages using components and data from `site-content.json`. All dynamic content is populated via `fetch('/data/site-content.json')` on page load with a graceful loading state.

---

### `index.html` — Home

#### Hero Section
- Full-viewport height
- Background: dark navy with subtle diagonal rule-line texture (CSS only, no images)
- Optionally overlay a semi-transparent parchment texture via CSS `background-image`
- Large display-font headline: *"Advocating Excellence Since 2016"*
- Sub-headline: team description pulled from `site-content.json`
- Two CTAs side by side:
  - Primary (gold fill): `Meet the Team` → `team.html`
  - Secondary (gold outline): `Support Us` → `sponsors.html`
- Decorative SVG: scales of justice or gavel, gold, positioned bottom-right of hero, partially clipped

#### Stats Bar
- Full-width dark charcoal band
- Four animated counters: **Years Active** · **Competitions Entered** · **Awards Won** · **Alumni**
- Numbers animate up when scrolled into view via Intersection Observer
- Monospace font for numerals, display font for labels

#### About Section
- 2-column layout (60/40 split): rich copy left, photo right
- Gold horizontal rule above section title
- Serif pull-quote in gold: something about advocacy, justice, or excellence
- Team history narrative from 2016 to present, populated from JSON
- Section background: cream (`--color-cream`)

#### Latest Season Teaser
- Card or band previewing the 2025-2026 season
- 3 officer portrait thumbnails in overlapping stack
- Competition dates if available
- CTA button → `team.html`

#### Sponsors Call-to-Action Band
- Dark navy background, gold headline: *"Partner With Future Legal Leaders"*
- 2–3 sentence pitch on team mission and community impact
- Three tier names with icons, no full details
- Single CTA → `sponsors.html`

#### Footer (shared component)

---

### `team.html` — 2025-2026 Roster

#### Season Header
- Hero banner (shorter than home): season year badge, section title *"2025–2026 Team"*
- Decorative gold rule

#### Officers Section
- Section title: *"Leadership"*
- Card grid: 3 columns desktop → 2 tablet → 1 mobile
- Officer card variant (larger, gold photo ring, elevated shadow)
- Each card includes:
  - Circular photo with gold ring border
  - Name (display font, large)
  - Title/Role (e.g., President, Captain, Head Attorney)
  - Competition history: pill badges (e.g., `Regional · State · Nationals`)
  - Awards: gold star icon + award name per award

#### Members Section
- Section title: *"Team Members"*
- Card grid: 4 columns desktop → 3 tablet → 2 → 1 mobile
- Compact member card variant
- Same competition + award structure as officers

#### Data Source
All member data populated from `site-content.json → currentYear`. If photo path is missing, render a monogram avatar (initials on navy circle background).

---

### `alumni.html` — Alumni Honor Wall

#### Page Header
- Serif headline: *"Those Who Came Before"*
- Short tribute paragraph honoring the team's legacy since 2016
- Decorative double gold rule

#### Search Bar
- Client-side search: filters visible alumni cards by name in real time
- Placeholder: *"Search alumni by name..."*
- Styled with gold focus ring

#### Year Sections (2016–17 through 2024–25)
- One `<section>` per year, collapsible via disclosure triangle
- Year header: large display font year range + decorative rule
- Alumni grid: compact name cards (photo if available, else monogram; name; role)
- Treat each section as a **permanent honor record** — language should feel like an honor wall or yearbook page, not a list

#### Empty Year Handling
- If a year has no data from the scraper, show: *"Records for this year are being collected. If you graduated in [year], reach out to be included."*

---

### `gallery.html` — Photo Gallery

#### Year Tab Navigation
- Sticky horizontal tab bar, scrollable on mobile
- Tabs: one per year from 2016 to current
- Active tab: gold background
- Clicking a tab smooth-scrolls to that year's gallery section

#### Per-Year Gallery Grid
- Uniform grid: 4 columns desktop → 3 → 2 → 1
- Thumbnail images with subtle hover zoom (CSS transform)
- Click opens lightbox (built in Component Agent)
- Caption shown in lightbox if available
- All images use `loading="lazy"`

#### Empty State
- If a year has no images: card with dashed gold border reading *"Photos coming soon — contact us to contribute memories from [year]."*

#### Performance Notes
- Compress all downloaded images to WebP at build time if possible
- Use `<picture>` elements with WebP + JPEG fallback

---

### `sponsors.html` — Sponsorship

#### Hero Band
- Bold display headline: *"Invest in Tomorrow's Advocates"*
- 2–3 sentence pitch: team reach, alumni outcomes, community presence
- Background: dark navy with subtle gold gradient overlay

#### Sponsorship Tiers

| Feature | Counsel | Associate | Partner |
|---|---|---|---|
| Logo on website | ✓ | ✓ | ✓ |
| Social media mention | — | ✓ | ✓ |
| Name in team materials | — | ✓ | ✓ |
| Banner at competitions | — | — | ✓ |
| Featured sponsor spotlight | — | — | ✓ |
| Personal thank-you letter | ✓ | ✓ | ✓ |

- Render as styled cards, not just a table
- Partner tier: gold border, "Featured" badge, most prominent
- Each tier has a mailto CTA: `Become a [Tier] Sponsor`

#### Current Sponsors Section
- Logo grid for any sponsors extracted from old site
- If none found: placeholder section with italic text: *"Be the first to partner with us."*

#### Contact Strip
- Simple band: *"Questions about sponsorship? Reach out directly."*
- Email link, styled as a button

---

### `contact.html`

- Faculty advisor name and email (from scraped data)
- Team contact email
- Social media links (Instagram, etc. if found on old site)
- Embedded Google Maps iframe for Troy High School, Fullerton CA
- Interest form (mailto-based, no backend):
  - Fields: Name, Email, Message, dropdown (Join Team / Sponsor / Alumni / Other)

---

## Subagent 5 — QA Agent

**Goal:** Validate the complete site before delivery.

**Checklist:**

- [ ] All internal links resolve correctly (no 404s)
- [ ] All image `src` paths are valid and files exist
- [ ] Monogram fallback renders correctly when photos are missing
- [ ] Site is fully responsive at 375px, 768px, 1280px, 1600px
- [ ] All interactive elements (tabs, lightbox, nav, counters) function correctly
- [ ] Lighthouse audit: Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 90
- [ ] Color contrast passes WCAG 2.1 AA for all text/background combinations
- [ ] All images have non-empty `alt` attributes
- [ ] Keyboard navigation works for lightbox (← → Escape), tabs, and nav
- [ ] `<meta>` tags present: title, description, OG title, OG image, OG description
- [ ] JSON structured data (`application/ld+json`) added to index.html for the organization
- [ ] No console errors on any page
- [ ] Footer copyright year is current
- [ ] `site-content.json` successfully loads on all pages (test with local server, not `file://`)

**Output:** `QA_REPORT.md` listing all issues found and their fix status.

---

## Subagent Summary Table

| # | Subagent | Depends On | Output |
|---|---|---|---|
| 1 | **Scraper Agent** | None (runs first) | `/data/site-content.json`, `/assets/images/**` |
| 2 | **Design Token Agent** | None (runs in parallel with 1) | `/src/styles/tokens.css`, `/src/styles/global.css` |
| 3 | **Component Agent** | Subagent 2 | `/src/styles/components.css`, `/src/js/*.js` |
| 4 | **Page Build Agent** | Subagents 1 + 3 | `*.html` (all 6 pages) |
| 5 | **QA Agent** | Subagent 4 | `QA_REPORT.md` + in-place fixes |

---

## File Structure

```
/
├── index.html
├── team.html
├── alumni.html
├── gallery.html
├── sponsors.html
├── contact.html
├── QA_REPORT.md
├── src/
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── global.css
│   │   └── components.css
│   └── js/
│       ├── nav.js
│       ├── gallery.js
│       └── animations.js
├── assets/
│   ├── images/
│   │   ├── 2016/
│   │   ├── 2017/
│   │   ├── 2018/
│   │   ├── 2019/
│   │   ├── 2020/
│   │   ├── 2021/
│   │   ├── 2022/
│   │   ├── 2023/
│   │   ├── 2024/
│   │   ├── 2025/
│   │   └── members/
│   └── icons/
└── data/
    ├── site-content.json
    └── image-manifest.json
```

---

## PRD — Product Requirements Document

### Goals

| Goal | Metric |
|---|---|
| Global discoverability | Ranks for "Troy High School Mock Trial" within 60 days |
| Sponsor conversion | Sponsorship page loads in < 2s; clear tier CTA above fold |
| Community | Every alum listed by name; current members feel proud |
| Longevity | Non-dev team member can update JSON to add new members each year |

### Non-Goals
- No CMS or backend — static files only
- No authentication or login
- No real-time data or live competition scoring

### Hosting
- Must be deployable to **Netlify Drop**, **GitHub Pages**, or **Vercel** with zero configuration
- No build tools, no npm, no bundler — pure HTML/CSS/JS

### Performance Requirements
- Lighthouse Performance ≥ 90
- Lighthouse Accessibility ≥ 90
- Lighthouse SEO ≥ 90
- All images use `loading="lazy"` and are compressed (target < 200KB per image)
- No external JS dependencies (Google Fonts CDN excepted)
- Time to Interactive < 3s on simulated 4G

### Accessibility Requirements
- WCAG 2.1 AA color contrast for all text
- All images have descriptive `alt` attributes
- Full keyboard navigation for gallery lightbox, tab bar, and nav menu
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>` used correctly
- Focus styles visible and styled (not just browser default)

### SEO Requirements
- Unique `<title>` and `<meta name="description">` on every page
- Open Graph tags (`og:title`, `og:description`, `og:image`) on every page
- `application/ld+json` structured data on `index.html`:
```json
{
  "@context": "https://schema.org",
  "@type": "SportsTeam",
  "name": "Troy High School Mock Trial Team",
  "url": "https://[domain]",
  "foundingDate": "2016",
  "location": {
    "@type": "Place",
    "name": "Troy High School, Fullerton, CA"
  }
}
```

### Responsive Breakpoints
| Name | Width |
|---|---|
| Mobile S | 375px |
| Mobile L | 480px |
| Tablet | 768px |
| Desktop | 1280px |
| Wide | 1600px |

---

## Implementation Order

```
Step 1  →  Scraper Agent runs on thsmocktrial.weebly.com
           Outputs: site-content.json, image-manifest.json, /assets/images/**

Step 2  →  Design Token Agent runs (parallel with Step 1)
           Outputs: tokens.css, global.css

Step 3  →  Component Agent runs (after Step 2)
           Outputs: components.css, nav.js, gallery.js, animations.js

Step 4  →  Page Build Agent assembles all 6 pages (after Steps 1 + 3)
           Pages built in this order:
             4a. index.html  (establishes all layout patterns)
             4b. team.html   (most data-dense page)
             4c. alumni.html (honor wall + search)
             4d. gallery.html (lightbox + tabs)
             4e. sponsors.html
             4f. contact.html

Step 5  →  QA Agent validates and patches
           Output: QA_REPORT.md

Step 6  →  Final polish pass
           - Add scroll-triggered animations (Intersection Observer)
           - Tune spacing and typography at all breakpoints
           - Run final Lighthouse audit
           - Verify all images load correctly
```

---

## Key Implementation Constraints

1. **Vanilla only.** No React, no Vue, no npm, no build tools. Every page must open correctly as a static file served from any basic HTTP server.
2. **JSON-driven content.** All member names, bios, photos, awards, and competition data must come from `site-content.json` via `fetch()`. Hard-coding content in HTML is only acceptable for structural/permanent copy (headlines, section descriptions).
3. **No hallucinated data.** If the scraper cannot retrieve a value, leave a `<!-- TODO: ADD [FIELD] -->` comment. Do not invent names, awards, or photos.
4. **Photo fallback.** Any member missing a photo renders a monogram avatar: their initials centered on a `--color-navy` circle with `--color-gold` text.
5. **Lightbox accessibility.** The gallery lightbox must trap focus while open, be dismissible via Escape, and restore focus to the triggering thumbnail on close.
6. **Gold is precious.** Use `--color-gold` sparingly — borders, accents, active states, CTAs. If everything is gold, nothing is.
7. **Mobile-first CSS.** Write base styles for mobile, then use `@media (min-width: ...)` to enhance for larger screens.
8. **Year data completeness.** The site must account for every year from 2016-17 through 2025-26. Years with no scraped data should render gracefully with the empty-state components defined above.
