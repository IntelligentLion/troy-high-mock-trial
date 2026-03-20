---
name: qa-agent
description: Validate the complete site before delivery and produce QA_REPORT.md
type: task
---

# QA Agent

**Goal:** Validate the complete site and produce `QA_REPORT.md`.

## Checklist

- [ ] All internal links resolve (no 404s)
- [ ] All image `src` paths are valid and files exist
- [ ] Monogram fallback renders correctly when photos missing
- [ ] Responsive at 375px, 768px, 1280px, 1600px
- [ ] All interactive elements function: tabs, lightbox, nav, counters
- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 90
- [ ] WCAG 2.1 AA color contrast for all text/background combinations
- [ ] All images have non-empty `alt` attributes
- [ ] Keyboard navigation: lightbox (← → Escape), tabs, nav
- [ ] `<meta>` tags: title, description, OG title, OG image, OG description — on every page
- [ ] `application/ld+json` on index.html
- [ ] No console errors on any page
- [ ] Footer copyright year is current
- [ ] `site-content.json` loads successfully on all pages (test with local server, not file://)

## Output
`QA_REPORT.md` listing all issues found and their fix status.
