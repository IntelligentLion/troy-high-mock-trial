---
name: page-build-agent
description: Assemble all 6 HTML pages using components and data from site-content.json
type: task
---

# Page Build Agent

**Goal:** Assemble all 6 pages after components and scraper data are ready.

## Data Loading Pattern
All dynamic content loaded via:
```js
fetch('/data/site-content.json').then(r => r.json()).then(data => { /* populate */ })
```
Always include a graceful loading state.

## Pages (in order)

### index.html — Home
- Full-viewport hero: navy bg, diagonal rule-line texture (CSS only), headline "Advocating Excellence Since 2016"
- Stats bar: 4 animated counters (Years Active, Competitions, Awards Won, Alumni)
- About section: 60/40 split, serif pull-quote, team history from JSON
- Latest season teaser: 3 officer thumbnails, competition dates, CTA → team.html
- Sponsors CTA band: navy bg, gold headline, tier names
- Footer

### team.html — 2025-2026 Roster
- Short hero banner with season badge
- Officers grid: 3-col desktop, officer card variant (gold ring, elevated shadow)
- Members grid: 4-col desktop, compact card variant
- Data from: `site-content.json → currentYear`

### alumni.html — Alumni Honor Wall
- Header: "Those Who Came Before", double gold rule
- Client-side search bar (filters by name in real time)
- Year sections 2016-17 through 2024-25, collapsible
- Empty year: "Records for this year are being collected..."

### gallery.html — Photo Gallery
- Sticky year tab bar (2016–current)
- Per-year grid: 4-col desktop, lazy-loaded thumbnails
- Lightbox integration
- Empty year: dashed gold border card

### sponsors.html — Sponsorship
- Hero: "Invest in Tomorrow's Advocates"
- Tier cards: Counsel (Bronze) · Associate (Silver) · Partner (Gold featured)
- Current sponsors logo grid
- Contact strip with mailto CTA

### contact.html
- Advisor info, team email, social links
- Google Maps iframe (Troy High School, Fullerton CA)
- Interest form (mailto-based): Name, Email, Message, dropdown

## Rules
- Every page: unique `<title>`, `<meta description>`, OG tags
- index.html: `application/ld+json` SportsTeam structured data
- No hard-coded member data in HTML
- Monogram avatar for any missing member photo
