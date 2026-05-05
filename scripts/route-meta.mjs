// Per-route SEO metadata used by prerender.mjs to inject correct
// canonical / OG / Twitter tags into the static HTML for each route.
// Keep titles/descriptions in sync with the React page components.

const SITE = "https://whatismyage.me";
const OG_IMAGE = `${SITE}/og-image.png`;

export const ROUTE_META = {
  "/": {
    title: "What Is My Age? — Your life in numbers",
    description:
      "Not just years — discover your heartbeats, full moons, days alive, generation, and who shares your birthday. Enter your date of birth and see your life in numbers.",
    canonical: `${SITE}/`,
    ogType: "website",
  },
  "/blog": {
    title: "Blog — whatismyage.me",
    description:
      "Stories about time, age, heartbeats, full moons, and the numbers that quietly shape your life.",
    canonical: `${SITE}/blog`,
    ogType: "website",
  },
  "/privacy": {
    title: "Privacy Policy — whatismyage.me",
    description:
      "How whatismyage.me handles your data — birth dates are processed in your browser and never stored on our servers.",
    canonical: `${SITE}/privacy`,
    ogType: "website",
  },
  "/blog/how-many-heartbeats-in-a-lifetime": {
    title: "How Many Heartbeats in a Human Lifetime? | whatismyage.me",
    description:
      "The average human heart beats 2.5 billion times in a lifetime. Discover resting heart rate science, cardiac output, and how to calculate your personal heartbeat total.",
    canonical: `${SITE}/blog/how-many-heartbeats-in-a-lifetime`,
    ogType: "article",
  },
  "/blog/how-many-full-moons-in-a-lifetime": {
    title: "How Many Full Moons Will You See in Your Lifetime? | whatismyage.me",
    description:
      "There are roughly 13 full moons per year. Over an average lifetime you will see around 1,000 full moons — fewer than most people expect.",
    canonical: `${SITE}/blog/how-many-full-moons-in-a-lifetime`,
    ogType: "article",
  },
  "/blog/what-generation-am-i": {
    title: "What Generation Am I? The Complete Birth Year Guide | whatismyage.me",
    description:
      "Find out which generation you belong to — Gen Z, Millennial, Gen X, Boomer — with birth year ranges and what defines each one.",
    canonical: `${SITE}/blog/what-generation-am-i`,
    ogType: "article",
  },
  "/blog/how-to-calculate-age-in-days": {
    title: "How to Calculate Your Exact Age in Days | whatismyage.me",
    description:
      "Learn how to calculate your exact age in days, account for leap years correctly, and understand milestone day counts.",
    canonical: `${SITE}/blog/how-to-calculate-age-in-days`,
    ogType: "article",
  },
  "/blog/what-is-a-life-clock": {
    title: "What Is a Life Clock? Your Age as a 24-Hour Day Explained | whatismyage.me",
    description:
      "If your life were a 24-hour day, what time is it right now? The life clock converts your age into a powerful time-of-day metaphor.",
    canonical: `${SITE}/blog/what-is-a-life-clock`,
    ogType: "article",
  },
  "/blog/what-day-of-the-week-was-i-born": {
    title: "What Day of the Week Were You Born? | whatismyage.me",
    description:
      "Find out what day of the week you were born — and what it means. Discover the Doomsday algorithm, birth day personality theories, and weekday statistics.",
    canonical: `${SITE}/blog/what-day-of-the-week-was-i-born`,
    ogType: "article",
  },
  "/blog/how-many-seconds-old-am-i": {
    title: "How Many Seconds Old Are You Right Now? | whatismyage.me",
    description:
      "Find out how many seconds old you are — and what that number reveals about time, the billion-second milestone, and how seconds compare to heartbeats.",
    canonical: `${SITE}/blog/how-many-seconds-old-am-i`,
    ogType: "article",
  },
  "/blog/birthday-twins-famous-people-born-on-your-birthday": {
    title: "Birthday Twins: Famous People Born on Your Birthday | whatismyage.me",
    description:
      "Discover who shares your birthday — the science of birthday coincidences, famous birthday twins, and what it actually means to share a birth date with a celebrity.",
    canonical: `${SITE}/blog/birthday-twins-famous-people-born-on-your-birthday`,
    ogType: "article",
  },
  "/blog/how-to-find-your-zodiac-sign-by-birth-date": {
    title: "How to Find Your Zodiac Sign by Birth Date | whatismyage.me",
    description:
      "Find your zodiac sign by birth date — covering Western, Vedic, and Chinese astrology. Discover what your sun sign, moon sign, and rising sign actually mean.",
    canonical: `${SITE}/blog/how-to-find-your-zodiac-sign-by-birth-date`,
    ogType: "article",
  },
  "/blog/what-does-days-to-birthday-mean": {
    title: "Days Until Your Birthday: The Countdown Explained | whatismyage.me",
    description:
      "Find out exactly how many days until your next birthday — how the countdown is calculated, what to do with the number, and why birthdays matter more than we admit.",
    canonical: `${SITE}/blog/what-does-days-to-birthday-mean`,
    ogType: "article",
  },
  "/blog/calculator-net-vs-calculatorsoup-age-calculator": {
    title: "Calculator.net vs CalculatorSoup Age Calculator | whatismyage.me",
    description:
      "Calculator.net vs CalculatorSoup age calculator: which tool is more accurate? We compare features, leap-year handling, and outputs to help you choose.",
    canonical: `${SITE}/blog/calculator-net-vs-calculatorsoup-age-calculator`,
    ogType: "article",
  },
  "/blog/calculatorsoup-vs-omnicalculator": {
    title: "CalculatorSoup vs OmniCalculator Age Calculator | whatismyage.me",
    description:
      "CalculatorSoup vs OmniCalculator: which age calculator wins? Compare features, accuracy, and speed — then find the fastest option for your exact age.",
    canonical: `${SITE}/blog/calculatorsoup-vs-omnicalculator`,
    ogType: "article",
  },
  "/blog/myagecalculator-vs-calculator-net": {
    title: "MyAgeCalculator vs Calculator.net | whatismyage.me",
    description:
      "MyAgeCalculator vs Calculator.net: which finds your exact age fastest? We compare speed, features, timezone support & precision. Find your answer in seconds.",
    canonical: `${SITE}/blog/myagecalculator-vs-calculator-net`,
    ogType: "article",
  },
  "/blog/omnicalculator-vs-calculator-net": {
    title: "OmniCalculator vs Calculator.net Age Calculator | whatismyage.me",
    description:
      "OmniCalculator vs Calculator.net: we compare both age calculators on features, accuracy, and ease of use—so you pick the right tool in seconds.",
    canonical: `${SITE}/blog/omnicalculator-vs-calculator-net`,
    ogType: "article",
  },
  "/blog/gigacalculator-vs-omnicalculator": {
    title: "GigaCalculator vs OmniCalculator Age Tool | whatismyage.me",
    description:
      "GigaCalculator vs OmniCalculator: which age tool wins on accuracy, features, and speed? Full comparison to help you pick the best free age calculator.",
    canonical: `${SITE}/blog/gigacalculator-vs-omnicalculator`,
    ogType: "article",
  },
  "/blog/age-calculator-statistics": {
    title:
      "Age Calculator Statistics (2025): 50+ Data Points on Usage Trends & Behavior | whatismyage.me",
    description:
      "Explore 50+ age calculator statistics for 2025 including search trends, demographics, usage behavior, and AI-driven growth insights.",
    canonical: `${SITE}/blog/age-calculator-statistics`,
    ogType: "article",
  },
  "/blog/how-different-age-groups-behave-online-statistics": {
    title:
      "How Different Age Groups Behave Online Statistics (2025): 55+ Data Points | whatismyage.me",
    description:
      "55+ data points on how Gen Z, Millennials, Gen X, and Boomers behave online — screen time, mobile, and social media trends in 2025.",
    canonical: `${SITE}/blog/how-different-age-groups-behave-online-statistics`,
    ogType: "article",
  },
  "/blog/what-happens-inside-your-body-over-time-statistics": {
    title:
      "What Happens Inside Your Body Over Time Statistics (2025): 55+ Data Points | whatismyage.me",
    description:
      "55+ data points on heartbeats, sleep, calories, and biological aging across an average human lifetime in 2025.",
    canonical: `${SITE}/blog/what-happens-inside-your-body-over-time-statistics`,
    ogType: "article",
  },
  "/blog/how-age-and-birthdays-distribute-globally-statistics": {
    title:
      "How Age and Birthdays Distribute Globally Statistics (2025): 52+ Data Points | whatismyage.me",
    description:
      "52+ data points on global median age, fertility, birth months, and birthday distribution patterns across countries in 2025.",
    canonical: `${SITE}/blog/how-age-and-birthdays-distribute-globally-statistics`,
    ogType: "article",
  },
  "/blog/how-people-measure-time-and-life-statistics": {
    title:
      "How People Measure Time and Life Statistics (2025): 52+ Data Points | whatismyage.me",
    description:
      "52+ data points on lifespan, time perception, life milestones, and how cultures measure life in 2025.",
    canonical: `${SITE}/blog/how-people-measure-time-and-life-statistics`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-1985": {
    title: "How Old Am I If I Was Born in 1985? | Age in 2026",
    description:
      "Born in 1985? You're 40 or 41 in 2026 — but your life is so much more than that. Discover your age in days, heartbeats, full moons, and what makes 1985 babies unique.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-1985`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-1986": {
    title: "How Old Am I If I Was Born in 1986? | Age in 2026",
    description:
      "Born in 1986? You're 39 or 40 in 2026. Find out your age in days, heartbeats, full moons, and relive what made 1986 one of the most eventful years in modern history.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-1986`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-1987": {
    title: "How Old Am I If I Was Born in 1987? | Age in 2026",
    description:
      "Born in 1987? You're 38 or 39 in 2026. See your age in days, heartbeats, and full moons — plus a look back at the remarkable world you were born into.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-1987`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-1988": {
    title: "How Old Am I If I Was Born in 1988? | Age in 2026",
    description:
      "Born in 1988? You're 37 or 38 in 2026. Discover your age in days, heartbeats, full moons, and what the world looked like when you first arrived in it.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-1988`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-1989": {
    title: "How Old Am I If I Was Born in 1989? | Age in 2026",
    description:
      "Born in 1989? You're 36 or 37 in 2026. Find your age in days, heartbeats, and full moons — plus why 1989 was one of the most extraordinary years in modern history.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-1989`,
    ogType: "article",
  },
};

const escapeHtml = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/**
 * Rewrites the head of an HTML template so that <title>, description, canonical,
 * og:*, twitter:* and JSON-LD reflect the given route. Removes any existing
 * occurrences of those tags first to guarantee no duplicates.
 */
export function injectRouteMeta(template, route) {
  const meta = ROUTE_META[route] ?? ROUTE_META["/"];
  const t = escapeHtml(meta.title);
  const d = escapeHtml(meta.description);
  const c = escapeHtml(meta.canonical);

  let html = template;

  // Strip existing title, description, canonical, og:*, twitter:*, and our jsonld block
  html = html
    .replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\s+name=["']description["'][^>]*>\s*/gi, "")
    .replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+property=["']og:[^"']+["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+name=["']twitter:[^"']+["'][^>]*>\s*/gi, "")
    .replace(
      /<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>\s*/gi,
      "",
    );

  const jsonLd =
    meta.ogType === "article"
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: meta.title.replace(/ \| whatismyage\.me$/, ""),
          description: meta.description,
          url: meta.canonical,
          image: OG_IMAGE,
          datePublished: "2026-04-20",
          dateModified: "2026-04-20",
          author: { "@type": "Organization", name: "whatismyage.me", url: SITE },
          publisher: { "@type": "Organization", name: "What Is My Age", url: SITE },
          mainEntityOfPage: meta.canonical,
        }
      : {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "What Is My Age",
          url: SITE,
          description: meta.description,
        };

  const injected = `
    <title>${t}</title>
    <meta name="description" content="${d}">
    <link rel="canonical" href="${c}">
    <meta property="og:type" content="${meta.ogType}">
    <meta property="og:site_name" content="What Is My Age">
    <meta property="og:url" content="${c}">
    <meta property="og:title" content="${t}">
    <meta property="og:description" content="${d}">
    <meta property="og:image" content="${OG_IMAGE}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${t}">
    <meta name="twitter:description" content="${d}">
    <meta name="twitter:image" content="${OG_IMAGE}">
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  `;

  // Insert just before </head>
  html = html.replace(/<\/head>/i, `${injected}\n</head>`);
  return html;
}
