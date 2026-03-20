import { useQuery } from "@tanstack/react-query";
import type { SiteContent } from "@/types/site-content";

async function fetchSiteContent(): Promise<SiteContent> {
  const res = await fetch("/data/site-content.json");
  if (!res.ok) throw new Error("Failed to load site content");
  return res.json();
}

export function useSiteContent() {
  return useQuery<SiteContent>({
    queryKey: ["site-content"],
    queryFn: fetchSiteContent,
    staleTime: Infinity,
  });
}
