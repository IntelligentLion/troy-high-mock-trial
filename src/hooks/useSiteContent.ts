import { useQuery } from "@tanstack/react-query";
import type { SiteContent } from "@/types/site-content";

declare global {
  interface Window {
    /** Injected by scripts/prerender.mjs into each prerendered page. */
    __SITE_CONTENT__?: SiteContent;
  }
}

async function fetchSiteContent(): Promise<SiteContent> {
  const res = await fetch("/data/site-content.json");
  if (!res.ok) throw new Error("Failed to load site content");
  return res.json();
}

// On prerendered/hydrated pages the content is inlined as a global, so the very
// first client render produces the same DOM the prerender captured — no loading
// flash, no hydration mismatch, and no extra network round-trip.
const inlinedContent =
  typeof window !== "undefined" ? window.__SITE_CONTENT__ : undefined;

export function useSiteContent() {
  return useQuery<SiteContent>({
    queryKey: ["site-content"],
    queryFn: fetchSiteContent,
    initialData: inlinedContent,
    staleTime: Infinity,
  });
}
