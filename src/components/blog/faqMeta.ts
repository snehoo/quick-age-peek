import { useEffect } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

export function useFaqMeta(items: FaqItem[]): void {
  useEffect(() => {
    const existing = document.getElementById("faq-jsonld");
    if (existing) existing.remove();

    if (!items.length) return;

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "faq-jsonld";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });
    document.head.appendChild(ld);

    return () => {
      document.getElementById("faq-jsonld")?.remove();
    };
  }, [items]);
}
