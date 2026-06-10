// src/components/blog/articleMeta.ts
// ─────────────────────────────────────────────────────────────────
// CHANGED: canonical URL is now auto-normalised to always end with /
// This fixes the GSC "Alternative page with proper canonical tag" error
// for all 42 blog pages in one place — no need to edit each page file.
// ─────────────────────────────────────────────────────────────────

import { useEffect } from "react";

interface ArticleMetaOptions {
  title: string;
  description: string;
  canonical: string;
  headline?: string;
  ogImage?: string;
}

// ── Helper: ensure URL ends with exactly one trailing slash ──────
function withTrailingSlash(url: string): string {
  // Don't touch URLs that end with a file extension
  if (/\.[a-zA-Z0-9]+$/.test(url)) return url;
  return url.endsWith("/") ? url : url + "/";
}

// ── Helper: set or create a <link> tag ──────────────────────────
function setLink(rel: string, href: string): void {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

// ── Helper: set or create a <meta> tag ──────────────────────────
function setMeta(attrKey: string, attrVal: string, content: string): void {
  let el = document.querySelector(
    `meta[${attrKey}="${attrVal}"]`
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrKey, attrVal);
    document.head.appendChild(el);
  }
  el.content = content;
}

// ── Helper: set or create a <script type="application/ld+json"> ─
function setJsonLd(data: object): void {
  let el = document.querySelector(
    'script[type="application/ld+json"]'
  ) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

// ── Main hook ────────────────────────────────────────────────────
export function useArticleMeta({
  title,
  description,
  canonical,
  headline,
  ogImage,
}: ArticleMetaOptions): void {
  useEffect(() => {
    // ── Normalise canonical: ALWAYS trailing slash ──
    const canonicalUrl = withTrailingSlash(canonical);
    const image = ogImage || "https://whatismyage.me/og-default.jpg";
    const articleTitle = headline || title;

    // ── Document title ──
    document.title = title;

    // ── Canonical ──
    setLink("canonical", canonicalUrl);

    // ── Meta description ──
    setMeta("name", "description", description);

    // ── Open Graph ──
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);       // ← trailing slash
    setMeta("property", "og:image", image);
    setMeta("property", "og:type", "article");
    setMeta("property", "og:site_name", "WhatIsMyAge.me");

    // ── Twitter Card ──
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    // ── Article JSON-LD Schema ──
    setJsonLd({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: articleTitle,
      description: description,
      url: canonicalUrl,                               // ← trailing slash
      dateModified: new Date().toISOString().split("T")[0],
      author: {
        "@type": "Person",
        name: "Snehal Patel",
      },
      publisher: {
        "@type": "Organization",
        name: "WhatIsMyAge.me",
        url: "https://whatismyage.me/",
        logo: {
          "@type": "ImageObject",
          url: "https://whatismyage.me/logo.png",
        },
      },
    });

  }, [title, description, canonical, headline, ogImage]);
}
