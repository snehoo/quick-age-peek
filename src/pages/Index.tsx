import { useEffect, useMemo } from "react";
import AgeCalculator from "@/components/AgeCalculator";
import AdSlot from "@/components/AdSlot";
import { getGeneration } from "@/lib/lifeContext";
import { useWebApplicationMeta } from "@/components/blog/webAppMeta";

const BLOG_POSTS = [
  { slug: "how-many-heartbeats-in-a-lifetime", title: "How Many Heartbeats in a Lifetime?" },
  { slug: "how-many-full-moons-in-a-lifetime", title: "How Many Full Moons in a Lifetime?" },
  { slug: "what-generation-am-i", title: "What Generation Am I?" },
  { slug: "how-to-calculate-age-in-days", title: "Calculate Your Age in Days" },
  { slug: "what-is-a-life-clock", title: "What Is a Life Clock?" },
  { slug: "what-day-of-the-week-was-i-born", title: "What Day of the Week Were You Born?" },
  { slug: "how-many-seconds-old-am-i", title: "How Many Seconds Old Are You?" },
  { slug: "birthday-twins-famous-people-born-on-your-birthday", title: "Birthday Twins: Famous People Born on Your Birthday" },
  { slug: "how-to-find-your-zodiac-sign-by-birth-date", title: "How to Find Your Zodiac Sign by Birth Date" },
  { slug: "what-does-days-to-birthday-mean", title: "Days to Your Next Birthday" },
  { slug: "calculator-net-vs-calculatorsoup-age-calculator", title: "Calculator.net vs CalculatorSoup Age Calculator" },
  { slug: "calculatorsoup-vs-omnicalculator", title: "CalculatorSoup vs OmniCalculator: Best Age Calculator" },
  { slug: "myagecalculator-vs-calculator-net", title: "MyAgeCalculator vs Calculator.net" },
  { slug: "omnicalculator-vs-calculator-net", title: "OmniCalculator vs Calculator.net" },
];

const setCanonical = (href: string) => {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
};

const Index = () => {
  useWebApplicationMeta();

  useEffect(() => {
    setCanonical("https://whatismyage.me/");
  }, []);

  // Random sample age between 25-58, recomputed on each page load
  const sample = useMemo(() => {
    const years = Math.floor(Math.random() * (58 - 25 + 1)) + 25;
    const totalDays = years * 365.25;
    const fullMoons = Math.round(totalDays / 29.53);
    const beats = totalDays * 24 * 60 * 80;
    const beatsStr =
      beats >= 1e9
        ? `${(beats / 1e9).toFixed(2)} billion`
        : `${(beats / 1e6).toFixed(0)} million`;
    const birthYear = new Date().getFullYear() - years;
    const generation = getGeneration(birthYear).name;
    return { years, fullMoons, beatsStr, generation };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <h1 style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0,0,0,0)" }}>
        What Is My Age — Age Calculator
      </h1>
      <main className="flex-1 flex flex-col items-center px-5 pt-8 sm:pt-12 pb-16">
        <AdSlot slotId="home-top" />
        <div className="mb-8 text-center max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl text-foreground leading-tight mb-3">
            <span className="text-primary">{sample.years}</span> years.{" "}
            <span className="text-primary">{sample.fullMoons}</span> full moons.{" "}
            <span className="text-primary">{sample.beatsStr}</span> heartbeats.{" "}
            A <span className="text-primary">{sample.generation}</span>.
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Your life, counted in ways you've never seen.<br />
            Enter your date of birth and discover the numbers behind your story.
          </p>
        </div>
        <AgeCalculator showHero />
        <AdSlot slotId="home-bottom" />
      </main>
      <footer className="py-6 px-5 text-center text-xs text-muted-foreground/60">
        <div className="space-x-3">
          <span>whatismyage.me</span>
          <span aria-hidden>·</span>
          <a href="/blog" className="hover:text-foreground transition-colors">Blog</a>
          <span aria-hidden>·</span>
          <a href="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </a>
        </div>
        <nav aria-label="Blog posts" className="sr-only">
          <a href="/blog">All blog posts</a>
          {BLOG_POSTS.map((p) => (
            <a key={p.slug} href={`/blog/${p.slug}`}>
              {p.title}
            </a>
          ))}
        </nav>
      </footer>
    </div>
  );
};

export default Index;
