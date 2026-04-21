import { useEffect } from "react";

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;

  if (!el) {
    if (selector.startsWith("link")) {
      el = document.createElement("link");
      (el as HTMLLinkElement).rel = "canonical";
    } else {
      el = document.createElement("meta");
      const match = selector.match(/\[(name|property)="([^"]+)"\]/);
      if (match) el.setAttribute(match[1], match[2]);
    }
    document.head.appendChild(el);
  }

  el.setAttribute(attr, value);
};

export type ArticleMeta = {
  title: string;
  description: string;
  canonical: string;
  headline: string;
};

export const useArticleMeta = ({ title, description, canonical, headline }: ArticleMeta) => {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", canonical);
    setMeta('meta[property="og:type"]', "content", "article");
    setMeta('meta[property="og:site_name"]', "content", "What Is My Age");
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:image"]', "content", "https://whatismyage.me/og-image.png");
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", "https://whatismyage.me/og-image.png");

    const existing = document.getElementById("article-jsonld");
    if (existing) existing.remove();

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "article-jsonld";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline,
      description,
      url: canonical,
      image: "https://whatismyage.me/og-image.png",
      datePublished: "2026-04-20",
      dateModified: "2026-04-20",
      author: { "@type": "Organization", name: "whatismyage.me", url: "https://whatismyage.me" },
      publisher: { "@type": "Organization", name: "What Is My Age", url: "https://whatismyage.me" },
      mainEntityOfPage: canonical,
    });
    document.head.appendChild(ld);

    return () => {
      setMeta('link[rel="canonical"]', "href", "https://whatismyage.me/");
      document.getElementById("article-jsonld")?.remove();
    };
  }, [canonical, description, headline, title]);
};
