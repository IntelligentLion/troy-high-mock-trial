import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Production HTML is prerendered to static markup (see scripts/prerender.mjs) so
// crawlers and no-JS clients get full content. On the client we deliberately
// client-render rather than hydrate: the page uses framer-motion, whose
// post-mount styles can never match a snapshot captured after animations settle,
// which would trigger hydration mismatches. Because the prerendered content is
// inlined as window.__SITE_CONTENT__ (see useSiteContent.ts), this first render
// is synchronous and produces identical markup — React swaps the static DOM for
// its own copy in a single frame, so there is no visible flash.
createRoot(document.getElementById("root")!).render(<App />);
