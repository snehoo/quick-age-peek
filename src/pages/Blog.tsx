import { Link } from "react-router-dom";
import { Fragment, useEffect } from "react";
import AdSlot from "@/components/AdSlot";



const posts = [
  {
    slug: "how-many-heartbeats-in-a-lifetime",
    tag: "Biology & Science",
    title: "How Many Heartbeats Does a Human Have in a Lifetime?",
    excerpt:
      "The average human heart beats 2.5 billion times in a lifetime. Discover the science behind resting heart rate, cardiac output, and how to calculate your personal heartbeat total.",
    readTime: "6 min read",
  },
  {
    slug: "how-many-full-moons-in-a-lifetime",
    tag: "Astronomy & Time",
    title: "How Many Full Moons Will You See in Your Lifetime?",
    excerpt:
      "There are roughly 13 full moons per year. Over an average lifetime you will see around 1,000 full moons — fewer than most people expect.",
    readTime: "5 min read",
  },
  {
    slug: "what-generation-am-i",
    tag: "Culture & Identity",
    title: "What Generation Am I? The Complete Birth Year Guide",
    excerpt:
      "Find out which generation you belong to — Gen Z, Millennial, Gen X, Boomer — with birth year ranges and what defines each one.",
    readTime: "6 min read",
  },
  {
    slug: "how-to-calculate-age-in-days",
    tag: "How-to & Calculation",
    title: "How to Calculate Your Exact Age in Days",
    excerpt:
      "Learn how to calculate your exact age in days, account for leap years correctly, and understand milestone day counts.",
    readTime: "5 min read",
  },
  {
    slug: "what-is-a-life-clock",
    tag: "Philosophy & Perspective",
    title: "What Is a Life Clock? Your Age as a 24-Hour Day Explained",
    excerpt:
      "If your life were a 24-hour day, what time is it right now? The life clock converts your age into a powerful time-of-day metaphor.",
    readTime: "6 min read",
  },
  {
    slug: "what-day-of-the-week-was-i-born",
    tag: "Trivia & History",
    title: "What Day of the Week Were You Born? And Why It Matters",
    excerpt:
      "Discover the Doomsday algorithm, weekday folklore from Monday's Child to Thai birth colours, and what your birth weekday actually reveals.",
    readTime: "5 min read",
  },
  {
    slug: "how-many-seconds-old-am-i",
    tag: "Science & Numbers",
    title: "How Many Seconds Old Are You Right Now?",
    excerpt:
      "A 38-year-old has lived 1.2 billion seconds. Find out when you turn 1 billion seconds old and why seconds are the most honest unit of age.",
    readTime: "5 min read",
  },
  {
    slug: "birthday-twins-famous-people-born-on-your-birthday",
    tag: "Culture & Curiosity",
    title: "Birthday Twins: Famous People Born on Your Birthday",
    excerpt:
      "The birthday paradox, the similarity-attraction effect, and the famous figures who arrived on the same calendar date as you.",
    readTime: "5 min read",
  },
  {
    slug: "how-to-find-your-zodiac-sign-by-birth-date",
    tag: "Astrology & Culture",
    title: "How to Find Your Zodiac Sign by Birth Date",
    excerpt:
      "Western, Vedic, and Chinese astrology — plus what your sun sign, moon sign, and rising sign actually mean for your birth chart.",
    readTime: "6 min read",
  },
  {
    slug: "what-does-days-to-birthday-mean",
    tag: "How-to & Celebration",
    title: "Days to Your Next Birthday: How the Countdown Works",
    excerpt:
      "How the days-to-birthday number is calculated, why it feels different at every age, and the milestones worth tracking on the way there.",
    readTime: "5 min read",
  },
  {
    slug: "calculator-net-vs-calculatorsoup-age-calculator",
    tag: "Tool Comparison",
    title: "Calculator.net vs CalculatorSoup Age Calculator: Which Is More Accurate?",
    excerpt:
      "We compare Calculator.net and CalculatorSoup on accuracy, leap-year handling, and output detail — so you can pick the right age tool in seconds.",
    readTime: "8 min read",
  },
  {
    slug: "calculatorsoup-vs-omnicalculator",
    tag: "Tool Comparison",
    title: "CalculatorSoup vs OmniCalculator: Best Age Calculator Compared",
    excerpt:
      "Two of the internet's most-visited calculator sites both offer free age tools. Here's how CalculatorSoup and OmniCalculator differ on features, depth, and speed.",
    readTime: "7 min read",
  },
  {
    slug: "myagecalculator-vs-calculator-net",
    tag: "Tool Comparison",
    title: "MyAgeCalculator vs Calculator.net: Fastest Way to Find Your Exact Age",
    excerpt:
      "MyAgeCalculator vs Calculator.net compared on speed, timezone support, birth-time precision, and feature breadth — find the right one for your situation.",
    readTime: "7 min read",
  },
  {
    slug: "omnicalculator-vs-calculator-net",
    tag: "Tool Comparison",
    title: "OmniCalculator vs Calculator.net: Which Age Calculator Wins?",
    excerpt:
      "OmniCalculator and Calculator.net both offer free age tools. We compare features, accuracy, and ease of use so you can pick the right one immediately.",
    readTime: "7 min read",
  },
  {
    slug: "gigacalculator-vs-omnicalculator",
    tag: "Tool Comparison",
    title: "GigaCalculator vs OmniCalculator Age Tool",
    excerpt:
      "GigaCalculator vs OmniCalculator: which age tool wins on accuracy, features, and speed? Full feature-by-feature comparison.",
    readTime: "8 min read",
  },
  {
    slug: "age-calculator-statistics",
    tag: "Data & Trends",
    title: "Age Calculator Statistics (2025): 50+ Data Points on Usage Trends & Behavior",
    excerpt:
      "50+ age calculator statistics for 2025 — search demand, demographics, device share, geographic trends, and the AI-driven shift to instant answers.",
    readTime: "6 min read",
  },
  {
    slug: "how-different-age-groups-behave-online-statistics",
    tag: "Data & Trends",
    title: "How Different Age Groups Behave Online Statistics (2025): 55+ Data Points on Gen Z, Screen Time, and Digital Habits",
    excerpt:
      "55+ data points on how Gen Z, Millennials, Gen X, and Boomers behave online — screen time, mobile share, social media use, and platform preferences.",
    readTime: "7 min read",
  },
  {
    slug: "what-happens-inside-your-body-over-time-statistics",
    tag: "Biology & Science",
    title: "What Happens Inside Your Body Over Time Statistics (2025): 55+ Data Points on Sleep, Heartbeats, and Biological Aging",
    excerpt:
      "55+ data points on heartbeats, sleep, calories, and biological aging across an average human lifetime — sourced from WHO, CDC, AHA, and NIH.",
    readTime: "7 min read",
  },
  {
    slug: "how-age-and-birthdays-distribute-globally-statistics",
    tag: "Demographics",
    title: "How Age and Birthdays Distribute Globally Statistics (2025): 52+ Data Points on Population Age, Birth Trends, and Birthday Patterns",
    excerpt:
      "52+ data points on global median age, fertility rates, most common birth months, and how birthdays cluster across countries and cultures.",
    readTime: "7 min read",
  },
  {
    slug: "how-people-measure-time-and-life-statistics",
    tag: "Philosophy & Data",
    title: "How People Measure Time and Life Statistics (2025): 52+ Data Points on Lifespan, Time Perception, and Life Milestones",
    excerpt:
      "52+ data points on lifespan in days and weeks, time perception, life milestones, and how digital tools are reshaping how we experience time.",
    readTime: "8 min read",
  },
  {
    slug: "how-old-am-i-if-i-was-born-in-1985",
    tag: "Birth Year Guide",
    title: "How Old Am I If I Was Born in 1985?",
    excerpt:
      "Born in 1985? You're 40 or 41 in 2026. Your age in days, heartbeats, full moons — and the world you arrived into.",
    readTime: "5 min read",
  },
  {
    slug: "how-old-am-i-if-i-was-born-in-1986",
    tag: "Birth Year Guide",
    title: "How Old Am I If I Was Born in 1986?",
    excerpt:
      "Born in 1986? You're 39 or 40 in 2026. Discover your age in days, heartbeats, full moons, and what made 1986 unforgettable.",
    readTime: "5 min read",
  },
  {
    slug: "how-old-am-i-if-i-was-born-in-1987",
    tag: "Birth Year Guide",
    title: "How Old Am I If I Was Born in 1987?",
    excerpt:
      "Born in 1987? You're 38 or 39 in 2026. Your life in days, heartbeats, and full moons — plus the world you were born into.",
    readTime: "5 min read",
  },
  {
    slug: "how-old-am-i-if-i-was-born-in-1988",
    tag: "Birth Year Guide",
    title: "How Old Am I If I Was Born in 1988?",
    excerpt:
      "Born in 1988? You're 37 or 38 in 2026. Your age in days, heartbeats, full moons — and a look back at the world that welcomed you.",
    readTime: "5 min read",
  },
  {
    slug: "how-old-am-i-if-i-was-born-in-1989",
    tag: "Birth Year Guide",
    title: "How Old Am I If I Was Born in 1989?",
    excerpt:
      "Born in 1989? You're 36 or 37 in 2026. Your life in numbers and the year the Berlin Wall fell and the web was born.",
    readTime: "5 min read",
  },
  {
    slug: "how-old-am-i-if-i-was-born-in-1995",
    tag: "Birth Year Guide",
    title: "How Old Am I If I Was Born in 1995?",
    excerpt:
      "Born in 1995? You're 30 or 31 in 2026. Your life in days, heartbeats, and full moons — plus the world that shaped you.",
    readTime: "5 min read",
  },
  {
    slug: "how-old-am-i-if-i-was-born-in-1996",
    tag: "Birth Year Guide",
    title: "How Old Am I If I Was Born in 1996?",
    excerpt:
      "Born in 1996? You're 29 or 30 in 2026. The last Millennials — your life in numbers and the landmark year you arrived.",
    readTime: "5 min read",
  },
  {
    slug: "how-old-am-i-if-i-was-born-in-1997",
    tag: "Birth Year Guide",
    title: "How Old Am I If I Was Born in 1997?",
    excerpt:
      "Born in 1997? You're 28 or 29 in 2026. The first Gen Z — your life in heartbeats, full moons, and the year Google was founded.",
    readTime: "5 min read",
  },
  {
    slug: "how-old-am-i-if-i-was-born-in-1998",
    tag: "Birth Year Guide",
    title: "How Old Am I If I Was Born in 1998?",
    excerpt:
      "Born in 1998? You're 27 or 28 in 2026. Your life in days, heartbeats, and full moons — plus the defining year you arrived.",
    readTime: "5 min read",
  },
  {
    slug: "how-old-am-i-if-i-was-born-in-1999",
    tag: "Birth Year Guide",
    title: "How Old Am I If I Was Born in 1999?",
    excerpt:
      "Born in 1999? You're 26 or 27 in 2026. The last year of the millennium — your life in numbers and what shaped your generation.",
    readTime: "5 min read",
  },
  {
    slug: "how-old-am-i-if-i-was-born-in-2000",
    tag: "Birth Year Guide",
    title: "How Old Am I If I Was Born in 2000?",
    excerpt:
      "Born in 2000? You're 25 or 26 in 2026. A true child of the new millennium — your life in heartbeats, full moons, and beyond.",
    readTime: "5 min read",
  },
  {
    slug: "how-old-am-i-if-i-was-born-in-2001",
    tag: "Birth Year Guide",
    title: "How Old Am I If I Was Born in 2001?",
    excerpt:
      "Born in 2001? You're 24 or 25 in 2026. Your life in numbers and the unforgettable world that shaped you.",
    readTime: "5 min read",
  },
  {
    slug: "how-old-am-i-if-i-was-born-in-2002",
    tag: "Birth Year Guide",
    title: "How Old Am I If I Was Born in 2002?",
    excerpt:
      "Born in 2002? You're 23 or 24 in 2026. Your life in days, heartbeats, and full moons — and the early 2000s world you arrived in.",
    readTime: "5 min read",
  },
  {
    slug: "how-old-am-i-if-i-was-born-in-1990",
    tag: "Birth Year Guide",
    title: "How Old Am I If I Was Born in 1990?",
    excerpt:
      "Born in 1990? You're 35 or 36 in 2026. Your life in days, heartbeats, and full moons — plus the world-changing year you arrived in.",
    readTime: "5 min read",
  },
  {
    slug: "how-old-am-i-if-i-was-born-in-1991",
    tag: "Birth Year Guide",
    title: "How Old Am I If I Was Born in 1991?",
    excerpt:
      "Born in 1991? You're 34 or 35 in 2026. Your life in numbers — and the year the Soviet Union collapsed and the web went live.",
    readTime: "5 min read",
  },
  {
    slug: "how-old-am-i-if-i-was-born-in-1992",
    tag: "Birth Year Guide",
    title: "How Old Am I If I Was Born in 1992?",
    excerpt:
      "Born in 1992? You're 33 or 34 in 2026. Your age in days, heartbeats, and full moons — plus the iconic year you entered the world.",
    readTime: "5 min read",
  },
  {
    slug: "how-old-am-i-if-i-was-born-in-1993",
    tag: "Birth Year Guide",
    title: "How Old Am I If I Was Born in 1993?",
    excerpt:
      "Born in 1993? You're 32 or 33 in 2026. Your life in days, heartbeats, and full moons — and the remarkable world that welcomed you.",
    readTime: "5 min read",
  },
  {
    slug: "how-old-am-i-if-i-was-born-in-1994",
    tag: "Birth Year Guide",
    title: "How Old Am I If I Was Born in 1994?",
    excerpt:
      "Born in 1994? You're 31 or 32 in 2026. Your life in numbers — and the incredible year that gave us Mandela's election and Pulp Fiction.",
    readTime: "5 min read",
  },
  {
    slug: "how-many-hours-old-am-i",
    tag: "Time & Numbers",
    title: "How Many Hours Old Am I?",
    excerpt:
      "A 30-year-old has lived ~263,000 hours. Find your exact age in hours — plus where all those hours actually go.",
    readTime: "6 min read",
  },
  {
    slug: "how-many-minutes-old-am-i",
    tag: "Time & Numbers",
    title: "How Many Minutes Old Am I?",
    excerpt:
      "Probably more than you think. Calculate your age in minutes, and discover what that enormous number really means.",
    readTime: "6 min read",
  },
  {
    slug: "how-many-months-old-am-i",
    tag: "Time & Numbers",
    title: "How Many Months Old Am I?",
    excerpt:
      "Months are one of humanity's oldest units of time. Find your exact age in months — plus the milestones worth noticing.",
    readTime: "6 min read",
  },
  {
    slug: "how-many-weeks-old-am-i",
    tag: "Time & Numbers",
    title: "How Many Weeks Old Am I?",
    excerpt:
      "The average life is roughly 4,000 weeks. Find your week count — plus why thinking in weeks changes how you see your life.",
    readTime: "6 min read",
  },
  {
    slug: "how-old-am-i-complete-guide",
    tag: "How-to & Calculation",
    title: "How Old Am I? The Complete Guide to Calculating Your Age",
    excerpt:
      "Beyond years — every way to calculate your age in months, weeks, days, hours, minutes, seconds, and heartbeats. The complete guide.",
    readTime: "10 min read",
  },
];

const Blog = () => {
  useEffect(() => {
    document.title = "Blog — whatismyage.me";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Stories about time, age, heartbeats, full moons, and the numbers that quietly shape your life."
      );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full px-5 py-4 max-w-3xl mx-auto w-full">
        <Link to="/" className="font-display text-lg text-foreground">
          What Is My <span className="text-primary">Age</span>
        </Link>
      </header>
      <main className="flex-1 max-w-3xl mx-auto px-5 py-12 w-full">
        <Link
          to="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back
        </Link>

        <header className="mt-8 mb-10">
          <h1 className="text-4xl sm:text-5xl text-foreground mb-3">
            The <span className="text-primary">Blog</span>
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Stories about time, age, and the numbers that quietly shape your
            life.
          </p>
        </header>

        <AdSlot slotId="blog-top" />

        <div className="space-y-5">
          {posts.map((p, idx) => (
            <Fragment key={p.slug}>
              <Link
                to={`/blog/${p.slug}`}
                className="block rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3 mb-3 text-xs uppercase tracking-wider text-muted-foreground">
                  <span className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {p.tag}
                  </span>
                  <span>{p.readTime}</span>
                </div>
                <h2 className="text-2xl text-foreground mb-2 leading-snug">
                  {p.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {p.excerpt}
                </p>
                <span className="inline-block mt-4 text-primary text-sm font-medium">
                  Read article →
                </span>
              </Link>
              {(idx + 1) % 3 === 0 && idx < posts.length - 1 && (
                <AdSlot slotId="blog-infeed" />
              )}
            </Fragment>
          ))}
        </div>

        <AdSlot slotId="blog-bottom" />
      </main>

      <footer className="py-6 text-center text-xs text-muted-foreground/60 space-x-3">
        <Link to="/" className="hover:text-foreground transition-colors">
          whatismyage.me
        </Link>
        <span aria-hidden>·</span>
        <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
        <span aria-hidden>·</span>
        <Link to="/privacy" className="hover:text-foreground transition-colors">
          Privacy
        </Link>
      </footer>
    </div>
  );
};

export default Blog;
