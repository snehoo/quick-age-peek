import { Link } from "react-router-dom";
import { useEffect } from "react";



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

        <div className="space-y-5">
          {posts.map((p) => (
            <Link
              key={p.slug}
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
          ))}
        </div>
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
