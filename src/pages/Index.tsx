import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import AgeCalculator from "@/components/AgeCalculator";
import { getGeneration } from "@/lib/lifeContext";
import BlogMenu, { BLOG_POSTS } from "@/components/BlogMenu";

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
  // Random sample age between 25-58, recomputed on each page load
  const sample = useMemo(() => {
    const years = Math.floor(Math.random() * (58 - 25 + 1)) + 25;
    const totalDays = years * 365.25;
    // Lunar cycle ≈ 29.53 days
    const fullMoons = Math.round(totalDays / 29.53);
    // Avg 80 bpm
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
      <main className="flex-1 flex flex-col items-center justify-center px-5 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl text-foreground leading-tight mb-3">
            <span className="text-primary">{sample.years}</span> years.{" "}
            <span className="text-primary">{sample.fullMoons}</span> full moons.{" "}
            <span className="text-primary">{sample.beatsStr}</span> heartbeats.{" "}
            A <span className="text-primary">{sample.generation}</span>.
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Your age in years is just the beginning — discover your heartbeats, full moons, and the exact moment of your life's 24-hour clock.
          </p>
        </div>
        <AgeCalculator />
      </main>
      <footer className="py-6 px-5 text-center text-xs text-muted-foreground/60">
        <nav aria-label="Blog posts" className="mb-3 flex flex-wrap justify-center gap-x-3 gap-y-1">
          <Link to="/blog" className="hover:text-primary transition-colors font-medium">
            Blog
          </Link>
          {BLOG_POSTS.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="hover:text-primary transition-colors"
            >
              {p.title}
            </Link>
          ))}
        </nav>
        <div className="space-x-3">
          <span>whatismyage.me</span>
          <span aria-hidden>·</span>
          <BlogMenu />
          <span aria-hidden>·</span>
          <a href="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
