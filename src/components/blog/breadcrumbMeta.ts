import { useEffect } from "react";

export const useBreadcrumbMeta = (breadcrumbs?: Array<{ name: string; url: string }>) => {
  useEffect(() => {
    const existing = document.getElementById("breadcrumb-jsonld");
    if (existing) existing.remove();

    const defaultBreadcrumbs = [
      { name: "Home", url: "https://whatismyage.me/" },
      { name: "Blog", url: "https://whatismyage.me/blog" },
    ];

    const items = breadcrumbs || defaultBreadcrumbs;

    const itemListElement = items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    }));

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "breadcrumb-jsonld";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement,
    });
    document.head.appendChild(ld);

    return () => {
      document.getElementById("breadcrumb-jsonld")?.remove();
    };
  }, [breadcrumbs]);
};
