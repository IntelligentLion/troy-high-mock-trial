---
name: design-token-agent
description: Establish the complete design system — tokens.css and global.css — before any UI code is written
type: task
---

# Design Token Agent

**Goal:** Create `/src/styles/tokens.css` and `/src/styles/global.css`.

## Aesthetic: "Chambers & Conviction"
Dark navy courtroom gravity + sharp gold accents + clean serif type + confident whitespace.
Not corporate-stiff — accomplished and alive.

## Deliverables

### tokens.css
- Color palette (navy, gold, gold-light, cream, slate, charcoal, red-accent, white, muted)
- Typography (Cormorant Garamond + DM Sans + JetBrains Mono via Google Fonts)
- Type scale (xs through 6xl)
- Spacing scale (space-1 through space-32)
- Border radius (sm, md, lg, full)
- Box shadows (sm, md, lg, gold)
- Motion easing + duration tokens

### global.css
- CSS reset / normalize
- Base body styles using tokens
- Link styles
- Focus ring styles (gold, visible)
- Utility classes (.sr-only, .monogram-avatar, etc.)
- Mobile-first base, with responsive enhancements
