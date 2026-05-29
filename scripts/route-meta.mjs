// Per-route SEO metadata used by prerender.mjs to inject correct
// canonical / OG / Twitter tags into the static HTML for each route.
// Keep titles/descriptions in sync with the React page components.

const SITE = "https://whatismyage.me";
const OG_IMAGE = `${SITE}/og-image.png`;

export const ROUTE_META = {
  "/": {
    title: "What Is My Age? — Your life in numbers",
    description:
      "Calculate your age beyond years. Discover how many heartbeats, full moons, days, and seconds you've lived. Enter your birth date and see your life in numbers.",
    canonical: `${SITE}/`,
    ogType: "website",
  },
  "/blog": {
    title: "Blog — whatismyage.me",
    description:
      "Stories about time, age, heartbeats, full moons, and the numbers that quietly shape your life.",
    canonical: `${SITE}/blog/`,
    ogType: "website",
  },
  "/about": {
    title: "About — What Is My Age?",
    description:
      "Learn about What Is My Age — the story behind the calculator, who built it, and why it exists.",
    canonical: `${SITE}/about/`,
    ogType: "website",
  },
  "/contact": {
    title: "Contact — What Is My Age?",
    description:
      "Contact What Is My Age — send feedback, report bugs, or just say hello.",
    canonical: `${SITE}/contact/`,
    ogType: "website",
  },
  "/privacy": {
    title: "Privacy Policy — whatismyage.me",
    description:
      "How whatismyage.me handles your data — birth dates are processed in your browser and never stored on our servers.",
    canonical: `${SITE}/privacy/`,
    ogType: "website",
  },
  "/blog/how-many-heartbeats-in-a-lifetime": {
    title: "How Many Heartbeats in Your Lifetime — 2.5 Billion",
    description:
      "Your heart beats 2.5 billion times in a lifetime. Calculate your exact heartbeat total by age — plus discover how resting heart rate affects your personal count.",
    canonical: `${SITE}/blog/how-many-heartbeats-in-a-lifetime/`,
    ogType: "article",
  },
  "/blog/how-many-full-moons-in-a-lifetime": {
    title: "How Many Full Moons Will You See in Your Lifetime? | whatismyage.me",
    description:
      "Only ~13 full moons per year means you'll see roughly 1,000 in your lifetime — fewer than most expect. Calculate your personal moon count by age.",
    canonical: `${SITE}/blog/how-many-full-moons-in-a-lifetime/`,
    ogType: "article",
  },
  "/blog/what-generation-am-i": {
    title: "What Generation Am I? Find Your Generation by Birth Year",
    description:
      "Enter your birth year to find your generation — Gen Z, Millennial, Gen X, Boomer. See birth year ranges, traits, and what defines your generation.",
    canonical: `${SITE}/blog/what-generation-am-i/`,
    ogType: "article",
  },
  "/blog/how-to-calculate-age-in-days": {
    title: "How to Calculate Your Exact Age in Days | whatismyage.me",
    description:
      "Calculate your exact age in days with our complete formula. Account for leap years, month variations, and hit your invisible 10,000-day milestone.",
    canonical: `${SITE}/blog/how-to-calculate-age-in-days/`,
    ogType: "article",
  },
  "/blog/what-is-a-life-clock": {
    title: "Life Clock Calculator — What Time Is Your Life?",
    description:
      "See your age as a 24-hour clock. If your life were one day, what time is it now? Calculate your life clock in seconds and discover your personal time.",
    canonical: `${SITE}/blog/what-is-a-life-clock/`,
    ogType: "article",
  },
  "/blog/what-day-of-the-week-was-i-born": {
    title: "What Day of the Week Were You Born? Calculator",
    description:
      "Find what day you were born with our calculator. See birth day statistics, personality traits by weekday, and the Doomsday algorithm explained.",
    canonical: `${SITE}/blog/what-day-of-the-week-was-i-born/`,
    ogType: "article",
  },
  "/blog/how-many-seconds-old-am-i": {
    title: "How Many Seconds Old Are You? Calculate Your Exact Age | whatismyage.me",
    description:
      "Calculate your exact age in seconds — most people have lived 1+ billion seconds without knowing. Discover the 1 billion second milestone and what it means.",
    canonical: `${SITE}/blog/how-many-seconds-old-am-i/`,
    ogType: "article",
  },
  "/blog/birthday-twins-famous-people-born-on-your-birthday": {
    title: "Find Famous People Born on Your Birthday",
    description:
      "Discover who shares your birthday — celebrities, athletes, and historical figures. Plus the science of birthday coincidences and twin birth date odds.",
    canonical: `${SITE}/blog/birthday-twins-famous-people-born-on-your-birthday/`,
    ogType: "article",
  },
  "/blog/how-to-find-your-zodiac-sign-by-birth-date": {
    title: "Find Your Zodiac Sign — Sun, Moon & Rising Signs Explained | whatismyage.me",
    description:
      "Find your zodiac sign by birth date. Explore Western, Vedic, and Chinese astrology — plus calculate your sun, moon, and rising signs instantly.",
    canonical: `${SITE}/blog/how-to-find-your-zodiac-sign-by-birth-date/`,
    ogType: "article",
  },
  "/blog/what-does-days-to-birthday-mean": {
    title: "Days Until Your Birthday Calculator — Count Your Days | whatismyage.me",
    description:
      "Calculate days until your next birthday and understand what that countdown reveals about time perception, milestone celebration, and life's invisible moments.",
    canonical: `${SITE}/blog/what-does-days-to-birthday-mean/`,
    ogType: "article",
  },
  "/blog/calculator-net-vs-calculatorsoup-age-calculator": {
    title: "Calculator.net vs CalculatorSoup — Which Age Calculator Wins? | whatismyage.me",
    description:
      "Compare Calculator.net vs CalculatorSoup age calculators side-by-side. Which handles leap years better? Faster? More accurate? See the full comparison.",
    canonical: `${SITE}/blog/calculator-net-vs-calculatorsoup-age-calculator/`,
    ogType: "article",
  },
  "/blog/calculatorsoup-vs-omnicalculator": {
    title: "CalculatorSoup vs OmniCalculator — Full Feature Comparison | whatismyage.me",
    description:
      "CalculatorSoup vs OmniCalculator age calculator comparison. Which is faster? More accurate? Supports more date formats? Full breakdown to help you choose.",
    canonical: `${SITE}/blog/calculatorsoup-vs-omnicalculator/`,
    ogType: "article",
  },
  "/blog/myagecalculator-vs-calculator-net": {
    title: "MyAgeCalculator vs Calculator.net — Accuracy & Speed Test | whatismyage.me",
    description:
      "MyAgeCalculator vs Calculator.net comparison: which calculates age faster? Handles leap years better? Better timezone support? See our detailed breakdown.",
    canonical: `${SITE}/blog/myagecalculator-vs-calculator-net/`,
    ogType: "article",
  },
  "/blog/omnicalculator-vs-calculator-net": {
    title: "OmniCalculator vs Calculator.net — Which Age Tool is Best? | whatismyage.me",
    description:
      "OmniCalculator vs Calculator.net age calculator showdown. UI design, calculation speed, feature set, and accuracy — complete comparison for age calculation.",
    canonical: `${SITE}/blog/omnicalculator-vs-calculator-net/`,
    ogType: "article",
  },
  "/blog/gigacalculator-vs-omnicalculator": {
    title: "GigaCalculator vs OmniCalculator — Best Age Calculator Face-Off | whatismyage.me",
    description:
      "GigaCalculator vs OmniCalculator comparison: interface, leap year handling, timezone support, and calculation accuracy. Which free age tool is best?",
    canonical: `${SITE}/blog/gigacalculator-vs-omnicalculator/`,
    ogType: "article",
  },
  "/blog/how-old-am-i": {
    title: "How Old Am I? The Ultimate Age Calculator Guide | whatismyage.me",
    description:
      "You think you know your age. But do you really? Discover dozens of ways to measure how old you actually are — from days to heartbeats and full moons.",
    canonical: `${SITE}/blog/how-old-am-i/`,
    ogType: "article",
  },
  "/blog/age-calculator": {
    title: "Age Calculator — The Best Way to Calculate Your Exact Age | whatismyage.me",
    description:
      "The ultimate age calculator. Calculate your age in years, days, hours, minutes, seconds, heartbeats, and full moons. See your life in numbers.",
    canonical: `${SITE}/blog/age-calculator/`,
    ogType: "article",
  },
  "/blog/age-in-days-calculator": {
    title: "Age in Days Calculator — Find Your Exact Day Count | whatismyage.me",
    description:
      "Calculate your exact age in days with our precise age in days calculator. Discover milestone days, track your day count, and see what your life's days reveal.",
    canonical: `${SITE}/blog/age-in-days-calculator/`,
    ogType: "article",
  },
  "/blog/age-calculator-for-legal-documents": {
    title: "Age Calculator for Legal Documents | WhatIsMyAge.me",
    description:
      "Need an exact age for a visa, passport, insurance form or school admission? Here's why precision matters for legal documents — and the best free tool to use.",
    canonical: `${SITE}/blog/age-calculator-for-legal-documents/`,
    ogType: "article",
  },
  "/blog/age-calculator-for-medical-professionals": {
    title: "Age Calculator for Medical Professionals | WhatIsMyAge.me",
    description:
      "Doctors, nurses, and clinicians need precise chronological age for dosing, assessments, and screening. Here are the best age calculator tools for healthcare use.",
    canonical: `${SITE}/blog/age-calculator-for-medical-professionals/`,
    ogType: "article",
  },
  "/blog/age-calculator-no-sign-up": {
    title: "Age Calculator No Sign-Up Required | WhatIsMyAge.me",
    description:
      "Want an online age calculator with no login or sign-up required? We list the top tools you can use instantly — no account, no email, no friction whatsoever.",
    canonical: `${SITE}/blog/age-calculator-no-sign-up/`,
    ogType: "article",
  },
  "/blog/better-alternative-to-calculator-net": {
    title: "Better Alternative to Calculator.net Age Tool | WhatIsMyAge.me",
    description:
      "Why is WhatIsMyAge.me a better alternative to Calculator.net for age calculation? We compare features, speed, UI, and accuracy — side by side, honestly.",
    canonical: `${SITE}/blog/better-alternative-to-calculator-net/`,
    ogType: "article",
  },
  "/blog/calculator-net-alternative": {
    title: "Calculator.net Alternative for Age | WhatIsMyAge.me",
    description:
      "Looking for a calculator.net alternative for age calculation? Discover 7 faster, cleaner options — no clutter, no popups, instant results from your date of birth.",
    canonical: `${SITE}/blog/calculator-net-alternative/`,
    ogType: "article",
  },
  "/blog/calculatorsoup-age-calculator-alternative": {
    title: "CalculatorSoup Age Calculator Alternative | WhatIsMyAge.me",
    description:
      "CalculatorSoup age calculator vs WhatIsMyAge.me: which is faster for a simple age lookup? We compare features, speed, and output depth — honestly and side by side.",
    canonical: `${SITE}/blog/calculatorsoup-age-calculator-alternative/`,
    ogType: "article",
  },
  "/blog/free-age-calculator-no-ads": {
    title: "Best Ad-Free Age Calculator Online | WhatIsMyAge.me",
    description:
      "Tired of ads ruining your age calculation? We tested the top free age calculator no ads options in 2026 — here are the cleanest, fastest tools with zero popups.",
    canonical: `${SITE}/blog/free-age-calculator-no-ads/`,
    ogType: "article",
  },
  "/blog/gigacalculator-age-calculator-alternative": {
    title: "GigaCalculator Alternative for Age | WhatIsMyAge.me",
    description:
      "Looking for a GigaCalculator alternative for age calculation? We compare 6 cleaner, faster options — including which one gives you the most complete result fastest.",
    canonical: `${SITE}/blog/gigacalculator-age-calculator-alternative/`,
    ogType: "article",
  },
  "/blog/omnicalculator-alternative-age-tool": {
    title: "Omni Calculator Alternative for Age | WhatIsMyAge.me",
    description:
      "Omni Calculator is powerful but often overkill for a simple age lookup. Discover 5 focused Omni Calculator alternatives that return your exact age in seconds.",
    canonical: `${SITE}/blog/omnicalculator-alternative-age-tool/`,
    ogType: "article",
  },
  "/blog/age-calculator-statistics": {
    title:
      "Age Calculator Statistics 2026: 50+ Data Points on Trends & Usage | whatismyage.me",
    description:
      "Discover 50+ age calculator statistics for 2026 — search trends, demographics, user behavior patterns, and insights on age-related online activity.",
    canonical: `${SITE}/blog/age-calculator-statistics/`,
    ogType: "article",
  },
  "/blog/how-different-age-groups-behave-online-statistics": {
    title:
      "Age Group Online Behavior 2026: Gen Z, Millennials, Gen X, Boomers | whatismyage.me",
    description:
      "55+ data points comparing Gen Z, Millennials, Gen X, and Boomer online behavior — screen time, social media, mobile usage, and digital habits in 2026.",
    canonical: `${SITE}/blog/how-different-age-groups-behave-online-statistics/`,
    ogType: "article",
  },
  "/blog/what-happens-inside-your-body-over-time-statistics": {
    title:
      "Body Changes Over Time: 55+ Statistics on Heartbeats, Sleep & Aging | whatismyage.me",
    description:
      "55+ data points on what happens in your body across a lifetime — heartbeats, sleep patterns, calorie burn, and biological aging markers.",
    canonical: `${SITE}/blog/what-happens-inside-your-body-over-time-statistics/`,
    ogType: "article",
  },
  "/blog/how-age-and-birthdays-distribute-globally-statistics": {
    title:
      "Global Age & Birthday Statistics 2026: 52+ Data Points by Country | whatismyage.me",
    description:
      "52+ global age statistics including median age, fertility rates, birth month distribution, and birthday patterns across countries in 2026.",
    canonical: `${SITE}/blog/how-age-and-birthdays-distribute-globally-statistics/`,
    ogType: "article",
  },
  "/blog/how-people-measure-time-and-life-statistics": {
    title:
      "Time & Life Measurement Statistics 2026: 52+ Data Points on Lifespan | whatismyage.me",
    description:
      "52+ statistics on how people measure time and life — lifespan data, time perception, life milestones, and cultural approaches to aging.",
    canonical: `${SITE}/blog/how-people-measure-time-and-life-statistics/`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-1985": {
    title: "Born in 1985? Calculate Your Age in 2026 | whatismyage.me",
    description:
      "Born in 1985? You're 40-41 in 2026. Calculate your exact age in days, heartbeats, and full moons. See age in all dimensions beyond years.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-1985/`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-1986": {
    title: "Born in 1986? Calculate Your Age in 2026 | whatismyage.me",
    description:
      "Born in 1986? You're 39-40 in 2026. Calculate your exact age in days, heartbeats, full moons. See beyond years to your complete age.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-1986/`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-1987": {
    title: "Born in 1987? Calculate Your Age in 2026 | whatismyage.me",
    description:
      "Born in 1987? You're 38-39 in 2026. Calculate your exact age in days, heartbeats, full moons. Discover all dimensions of your age.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-1987/`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-1988": {
    title: "Born in 1988? Calculate Your Age in 2026 | whatismyage.me",
    description:
      "Born in 1988? You're 37-38 in 2026. Calculate your exact age in days, heartbeats, full moons. See your life beyond years.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-1988/`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-1989": {
    title: "Born in 1989? Calculate Your Age in 2026 | whatismyage.me",
    description:
      "Born in 1989? You're 36-37 in 2026. Calculate your exact age in days, heartbeats, full moons. Discover complete age measurements.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-1989/`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-1995": {
    title: "Born in 1995? Calculate Your Age in 2026 | whatismyage.me",
    description:
      "Born in 1995? You're 30-31 in 2026. Calculate your exact age in days, heartbeats, full moons. See your life measured in all units.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-1995/`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-1996": {
    title: "Born in 1996? Calculate Your Age in 2026 | whatismyage.me",
    description:
      "Born in 1996? You're 29-30 in 2026. Calculate your exact age in days, heartbeats, full moons. Explore complete age dimensions.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-1996/`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-1997": {
    title: "Born in 1997? Calculate Your Age in 2026 | whatismyage.me",
    description:
      "Born in 1997? You're 28-29 in 2026. Calculate your exact age in days, heartbeats, full moons. See age beyond years.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-1997/`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-1998": {
    title: "Born in 1998? Calculate Your Age in 2026 | whatismyage.me",
    description:
      "Born in 1998? You're 27-28 in 2026. Calculate your exact age in days, heartbeats, full moons. Discover all age metrics.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-1998/`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-1999": {
    title: "Born in 1999? Calculate Your Age in 2026 | whatismyage.me",
    description:
      "Born in 1999? You're 26-27 in 2026. Calculate your exact age in days, heartbeats, full moons. See your life in numbers.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-1999/`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-2000": {
    title: "Born in 2000? Calculate Your Age in 2026 | whatismyage.me",
    description:
      "Born in 2000? You're 25-26 in 2026. Calculate your exact age in days, heartbeats, full moons. Explore complete age measurements.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-2000/`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-2001": {
    title: "Born in 2001? Calculate Your Age in 2026 | whatismyage.me",
    description:
      "Born in 2001? You're 24-25 in 2026. Calculate your exact age in days, heartbeats, full moons. See your life beyond years.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-2001/`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-2002": {
    title: "Born in 2002? Calculate Your Age in 2026 | whatismyage.me",
    description:
      "Born in 2002? You're 23-24 in 2026. Calculate your exact age in days, heartbeats, full moons. Discover age metrics that matter.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-2002/`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-1990": {
    title: "Born in 1990? Calculate Your Age in 2026 | whatismyage.me",
    description:
      "Born in 1990? You're 35-36 in 2026. Calculate your exact age in days, heartbeats, full moons. See your complete age measurement.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-1990/`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-1991": {
    title: "Born in 1991? Calculate Your Age in 2026 | whatismyage.me",
    description:
      "Born in 1991? You're 34-35 in 2026. Calculate your exact age in days, heartbeats, full moons. Discover age beyond years.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-1991/`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-1992": {
    title: "Born in 1992? Calculate Your Age in 2026 | whatismyage.me",
    description:
      "Born in 1992? You're 33-34 in 2026. Calculate your exact age in days, heartbeats, full moons. See all age dimensions.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-1992/`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-1993": {
    title: "Born in 1993? Calculate Your Age in 2026 | whatismyage.me",
    description:
      "Born in 1993? You're 32-33 in 2026. Calculate your exact age in days, heartbeats, full moons. Explore complete age metrics.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-1993/`,
    ogType: "article",
  },
  "/blog/how-old-am-i-if-i-was-born-in-1994": {
    title: "Born in 1994? Calculate Your Age in 2026 | whatismyage.me",
    description:
      "Born in 1994? You're 31-32 in 2026. Calculate your exact age in days, heartbeats, full moons. See your life in numbers.",
    canonical: `${SITE}/blog/how-old-am-i-if-i-was-born-in-1994/`,
    ogType: "article",
  },
  "/blog/how-many-hours-old-am-i": {
    title: "How Many Hours Old Am I? Calculate Your Exact Hour Count | whatismyage.me",
    description:
      "Calculate your exact age in hours instantly. Most people have lived 250,000+ hours without realizing it. See your personal hour count by age.",
    canonical: `${SITE}/blog/how-many-hours-old-am-i/`,
    ogType: "article",
  },
  "/blog/how-many-minutes-old-am-i": {
    title: "How Many Minutes Old Am I? Calculate Your Age in Minutes | whatismyage.me",
    description:
      "Calculate your age in minutes instantly — you're likely 15+ million minutes old. Use our formula and table to find your exact minute count by age.",
    canonical: `${SITE}/blog/how-many-minutes-old-am-i/`,
    ogType: "article",
  },
  "/blog/how-many-months-old-am-i": {
    title: "How Many Months Old Am I? Find Your Age in Months | whatismyage.me",
    description:
      "Calculate your age in months instantly with our formula and reference table. A 30-year-old has lived ~360 months — see your personal count by age.",
    canonical: `${SITE}/blog/how-many-months-old-am-i/`,
    ogType: "article",
  },
  "/blog/how-many-weeks-old-am-i": {
    title: "How Many Weeks Old Am I? Calculate Your Exact Week Count | whatismyage.me",
    description:
      "Calculate your age in weeks — most people have lived 1,500+ weeks without knowing. Use our formula to find your exact week count and milestone weeks.",
    canonical: `${SITE}/blog/how-many-weeks-old-am-i/`,
    ogType: "article",
  },
  "/blog/how-old-am-i-complete-guide": {
    title: "How Old Am I? Every Measurement Explained (2026) | whatismyage.me",
    description:
      "How old are you really? Beyond years — calculate your age in days, hours, minutes, seconds, heartbeats, and full moons. Complete formulas, tables, and tools.",
    canonical: `${SITE}/blog/how-old-am-i-complete-guide/`,
    ogType: "article",
  },
  "/blog/how-old-will-i-be-in-2030": {
    title: "How Old Will I Be in 2030? Birth Year Age Calculator | whatismyage.me",
    description:
      "Find your exact age in 2030 by birth year. Use our instant calculator table to see how old you'll be in just 4 years, plus what that milestone means.",
    canonical: `${SITE}/blog/how-old-will-i-be-in-2030/`,
    ogType: "article",
  },
  "/blog/how-old-will-i-be-in-2040": {
    title: "How Old Will I Be in 2040? Birth Year Calculator | whatismyage.me",
    description:
      "Calculate your age in 2040 instantly by birth year. Use our complete table to see how old you'll be in 14 years, plus major life stage insights.",
    canonical: `${SITE}/blog/how-old-will-i-be-in-2040/`,
    ogType: "article",
  },
  "/blog/how-old-will-i-be-in-2050": {
    title: "How Old Will I Be in 2050? Birth Year Age Calculator | whatismyage.me",
    description:
      "Find your age in 2050 by birth year instantly. Use our calculator to see how old you'll be in 24 years and what that life stage might look like.",
    canonical: `${SITE}/blog/how-old-will-i-be-in-2050/`,
    ogType: "article",
  },
  "/blog/what-day-will-i-be-10000-days-old": {
    title: "When Will I Turn 10,000 Days Old? Find Your Exact Date | whatismyage.me",
    description:
      "Calculate your 10,000-day birthday — an invisible milestone most people miss. Find your exact date and discover why reaching 10,000 days matters.",
    canonical: `${SITE}/blog/what-day-will-i-be-10000-days-old/`,
    ogType: "article",
  },
  "/blog/when-will-i-be-1-billion-seconds-old": {
    title: "When Will I Be 1 Billion Seconds Old? Find Your Milestone Date | whatismyage.me",
    description:
      "Calculate when you'll reach 1 billion seconds old — an invisible milestone at ~31.7 years. Find your exact date and why this matters.",
    canonical: `${SITE}/blog/when-will-i-be-1-billion-seconds-old/`,
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

  // Build array of JSON-LD schemas for this route
  const jsonLdSchemas = [];

  // Homepage: WebApplication schema
  if (route === "/") {
    jsonLdSchemas.push({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "What Is My Age?",
      url: SITE,
      description: meta.description,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    });
  }

  // Blog index: BreadcrumbList schema
  if (route === "/blog") {
    jsonLdSchemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${SITE}/blog`,
        },
      ],
    });
  }

  // Article pages: Article schema + BreadcrumbList
  if (meta.ogType === "article") {
    const isArticlePage = route.startsWith("/blog/") && route !== "/blog";

    jsonLdSchemas.push({
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
    });

    // Add BreadcrumbList for article pages
    if (isArticlePage) {
      jsonLdSchemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: meta.title.replace(/ \| whatismyage\.me$/, ""),
            item: meta.canonical,
          },
        ],
      });

      // Add FAQ schema for article pages
      jsonLdSchemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I calculate my exact age?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Enter your birth date into an age calculator to get your exact age in years, months, days, hours, minutes, and seconds. The calculator accounts for leap years and varying month lengths to ensure accuracy.",
            },
          },
          {
            "@type": "Question",
            name: "Why would I want to know my age in different units?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Measuring age in different units like days, heartbeats, or full moons provides perspective on your life. For example, seeing your age as 1+ billion seconds or 10,000+ days can feel more meaningful than years alone.",
            },
          },
          {
            "@type": "Question",
            name: "How accurate are online age calculators?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Accurate age calculators properly account for leap years, varying month lengths, and your birth time. Most online calculators are accurate to the day. The key is whether they handle leap years and month variations correctly.",
            },
          },
          {
            "@type": "Question",
            name: "What is the 10,000-day milestone?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The 10,000-day milestone represents approximately 27.4 years of life. It's an invisible birthday that most people pass without noticing, but it serves as an interesting marker of how many actual days you've lived.",
            },
          },
          {
            "@type": "Question",
            name: "How many full moons will I see in my lifetime?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "There are approximately 13 full moons per year, so over a typical 76-year lifetime, you'll see roughly 1,000 full moons — fewer than most people expect.",
            },
          },
        ],
      });
    }
  } else if (route !== "/") {
    // Other pages (privacy, etc): WebSite schema
    jsonLdSchemas.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "What Is My Age",
      url: SITE,
      description: meta.description,
    });
  }

  // Build JSON-LD script tags
  const jsonLdScripts = jsonLdSchemas
    .map((schema) => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
    .join("\n    ");

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
    ${jsonLdScripts}
  `;

  // Insert just before </head>
  html = html.replace(/<\/head>/i, `${injected}\n</head>`);
  return html;
}
