import { useEffect } from "react";

export const useWebApplicationMeta = () => {
  useEffect(() => {
    const existing = document.getElementById("webapp-jsonld");
    if (existing) existing.remove();

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "webapp-jsonld";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "What Is My Age?",
      url: "https://whatismyage.me/",
      description:
        "Not just years — discover your heartbeats, full moons, days alive, generation, and who shares your birthday.",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        "priceCurrency": "USD",
      },
    });
    document.head.appendChild(ld);

    return () => {
      document.getElementById("webapp-jsonld")?.remove();
    };
  }, []);
};
