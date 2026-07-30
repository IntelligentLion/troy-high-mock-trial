// Build-time prerender: serve the freshly built dist/ as an SPA, drive each route
// through real Chromium so the React app renders its JSON-driven content, then
// snapshot the resulting HTML to static dist/<route>/index.html files.
//
// Why a headless browser instead of SSG: all page content is loaded client-side
// from /data/site-content.json via react-query. Rendering in a real browser lets
// that fetch resolve naturally, so we capture fully-populated markup without
// refactoring the data layer. The client switches to hydrateRoot (see main.tsx)
// and reads the inlined window.__SITE_CONTENT__ (see useSiteContent.ts), so the
// first client paint matches this snapshot exactly — no flash, no mismatch.

import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync, statSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");

// Static routes declared in src/App.tsx (the catch-all "*" / NotFound is skipped).
const ROUTES = [
  "/",
  "/about",
  "/team",
  "/team/2025-26",
  "/team/2026-27",
  "/join",
  "/alumni",
  "/gallery",
  "/sponsors",
  "/contact",
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
};

// Inline the site content as a global so the hydrating client has its data
// synchronously. Escaping "<" prevents a "</script>" breakout; that is the only
// escape required here (the content JSON holds no U+2028/U+2029 separators).
function buildContentScript(json) {
  const safe = json.replace(/</g, "\\u003c");
  return `<script>window.__SITE_CONTENT__=${safe}</script>`;
}

function startServer() {
  const server = createServer((req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    const filePath = join(DIST, urlPath);

    // Serve real files (assets, /data/*.json, favicon, images) directly…
    if (existsSync(filePath) && statSync(filePath).isFile()) {
      readFile(filePath).then((buf) => {
        res.writeHead(200, { "Content-Type": MIME[extname(filePath)] || "application/octet-stream" });
        res.end(buf);
      });
      return;
    }
    // …otherwise fall back to the SPA shell so the router can take over.
    readFile(join(DIST, "index.html")).then((buf) => {
      res.writeHead(200, { "Content-Type": MIME[".html"] });
      res.end(buf);
    });
  });
  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => resolve(server));
  });
}

async function main() {
  if (!existsSync(join(DIST, "index.html"))) {
    throw new Error("dist/index.html not found — run `vite build` first.");
  }

  const contentJson = await readFile(join(DIST, "data", "site-content.json"), "utf8");
  const contentScript = buildContentScript(contentJson);

  const server = await startServer();
  const { port } = server.address();
  const base = `http://127.0.0.1:${port}`;
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Snapshot every route before writing anything, so the untouched SPA shell
  // keeps serving as the fallback throughout the crawl.
  const snapshots = new Map();
  for (const route of ROUTES) {
    await page.goto(`${base}${route}`, { waitUntil: "networkidle" });
    // Wait until the app has actually rendered content into #root.
    await page.waitForFunction(() => {
      const r = document.getElementById("root");
      return !!r && r.children.length > 0;
    });
    await page.waitForSelector("main, footer", { timeout: 15000 });
    // Let the data-driven content paint (react-query resolving window.__SITE_CONTENT__).
    await page.waitForTimeout(400);

    // Reset scroll-reveal state before snapshotting: the IntersectionObserver has
    // stamped `is-in` on every above-the-fold element by now, which would bake the
    // *revealed* state into the static HTML. The hydrating client starts from
    // `inView=false`, so that mismatch makes the title flash visible, hide, then
    // replay the reveal. Capturing the pre-reveal (hidden) state instead matches
    // the client's first render exactly — the reveal then plays once, cleanly.
    await page.evaluate(() => {
      document.querySelectorAll(".is-in").forEach((el) => el.classList.remove("is-in"));
    });

    let html = await page.evaluate(() => "<!DOCTYPE html>\n" + document.documentElement.outerHTML);
    // Inline content so the client hydrates against identical markup.
    html = html.replace("</head>", `${contentScript}</head>`);

    const hasH1 = html.includes("<h1");
    snapshots.set(route, html);
    console.log(`  ${route.padEnd(16)} ${(html.length / 1024).toFixed(0)} KB  ${hasH1 ? "h1 ok" : "NO H1"}`);
  }

  await browser.close();
  server.close();

  for (const [route, html] of snapshots) {
    const outDir = route === "/" ? DIST : join(DIST, route);
    await mkdir(outDir, { recursive: true });
    await writeFile(join(outDir, "index.html"), html, "utf8");
  }

  console.log(`\nPrerendered ${snapshots.size} routes to static HTML.`);
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
