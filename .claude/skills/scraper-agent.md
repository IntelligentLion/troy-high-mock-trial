---
name: scraper-agent
description: Scrape the old THS Mock Trial Weebly site and produce structured JSON content + image manifest
type: task
---

# Scraper Agent

**Goal:** Extract all content and assets from `https://thsmocktrial.weebly.com` before any UI work.

## Steps

1. Fetch all pages: home, `/alumni--gallery.html`, and any linked sub-pages
2. Extract: all text, image URLs, names, years, awards, achievements, sponsors
3. Download images → `/assets/images/{year}/`
4. Produce `/data/site-content.json` with schema:
   - `team`: name, founded, school, description, coaches
   - `alumni`: array of { name, years, role, achievements }
   - `gallery`: { "2016": ["path/img.jpg"], ... }
   - `currentYear`: { season, officers, members }
   - `sponsors`: []
   - `achievements`: []
5. Produce `/data/image-manifest.json` for any images that couldn't be downloaded

## Rules
- Use semantic content selectors + `<img>` src extraction — not Weebly class names
- If site is inaccessible, flag all missing content with `<!-- TODO: ADD CONTENT -->`
- Never hallucinate data
