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

    // FAQPage JSON-LD — mirrors the visible FAQ in HomepageContent
    const faqExisting = document.getElementById("homepage-faq-jsonld");
    if (faqExisting) faqExisting.remove();
    const faqLd = document.createElement("script");
    faqLd.type = "application/ld+json";
    faqLd.id = "homepage-faq-jsonld";
    faqLd.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How old am I if I was born in a specific year?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Subtract your birth year from 2026. If your birthday has not yet passed this year, subtract one more. Example: born in 1990 → 2026 − 1990 = 36, or 35 if your birthday falls later in the year.",
          },
        },
        {
          "@type": "Question",
          name: "Why does my age differ by one day on different calculators?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some calculators count the birth date itself as day 1; others start counting the day after birth. Whatismyage.me uses the standard convention: age is 0 at birth and increments to 1 on the first birthday.",
          },
        },
        {
          "@type": "Question",
          name: "How do I calculate my exact age without a calculator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Subtract your birth year from the current year for an approximate answer. For exactness, also check whether your current-year birthday has passed. If not, subtract one additional year. For age in days, multiply your completed years by 365, add leap-year days, then add days since your last birthday.",
          },
        },
        {
          "@type": "Question",
          name: "What is the most accurate free age calculator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Any calculator that accounts for leap years and checks whether the current-year birthday has passed gives the correct result in years. Whatismyage.me additionally shows age in seconds, heartbeats, full moons, and generational identity — all in a single result, with no account required.",
          },
        },
        {
          "@type": "Question",
          name: "Is my date of birth stored when I use this calculator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. All calculations run entirely in your browser. Your birth date is never sent to any server and is not stored, tracked, or shared.",
          },
        },
      ],
    });
    document.head.appendChild(faqLd);

    return () => {
      document.getElementById("webapp-jsonld")?.remove();
      document.getElementById("homepage-faq-jsonld")?.remove();
    };
  }, []);
};
