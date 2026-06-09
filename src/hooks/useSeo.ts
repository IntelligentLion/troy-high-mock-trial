import { useEffect } from "react";

const SITE_URL = "https://troymocktrial.org";
const SITE_NAME = "Troy High School Mock Trial";
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/jserra-trophy.jpg`;

interface SeoOptions {
  /** Full <title> for the page. */
  title: string;
  /** Meta description — one clear sentence, ~150 chars. */
  description: string;
  /** Route path used to build the canonical/OG url (e.g. "/team"). */
  path?: string;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Keeps the document title, meta description, canonical link, and Open Graph /
 * Twitter tags in sync with the active route. No external dependency — this is a
 * client-side update layered over the static tags in index.html.
 */
export function useSeo({ title, description, path = "" }: SeoOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    upsertCanonical(url);

    upsertMeta("name", "description", description);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:image", DEFAULT_OG_IMAGE);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", DEFAULT_OG_IMAGE);
  }, [title, description, path]);
}
