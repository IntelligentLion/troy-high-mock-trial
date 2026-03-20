---
name: component-agent
description: Build all reusable UI components — components.css, nav.js, gallery.js, animations.js
type: task
---

# Component Agent

**Goal:** Build all reusable UI components after design tokens are established.

## Deliverables

### nav.js
- Fixed top nav, logo left / links right
- Transparent → solid navy on scroll
- Mobile hamburger with slide-in drawer
- Active page indicator (gold underline)
- Links: Home · Team · Alumni · Gallery · Sponsors · Contact

### gallery.js (vanilla JS, no libraries)
- Click thumbnail → full-size overlay
- Left/right arrow navigation
- Keyboard support (← → Escape)
- Caption display if available
- Smooth fade in/out
- Focus trap while open; restore focus on close

### animations.js
- Stats count-up animation via Intersection Observer
- Scroll-triggered reveal animations
- Smooth scroll-to-section for tab bar

### components.css
- `.member-card` (officer variant + member variant)
- `.year-tab-bar` (sticky, scrollable, gold active state)
- `.stats-counter` (monospace numbers)
- `.sponsor-tier-card` (three tiers, Partner highlighted)
- `.footer` (dark navy, full layout)
- `.monogram-avatar` (initials on navy circle, gold text)
- `.pill` (competition badges)
- `.award-badge` (gold star + name)
- `.lightbox` overlay styles

## Rules
- Vanilla JS only — no external libraries
- Mobile-first CSS
- All interactive elements must be keyboard accessible
