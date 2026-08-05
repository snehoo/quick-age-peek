import { Link } from "react-router-dom";
import { useEffect } from "react";


const CANONICAL = "https://whatismyage.me/blog/how-many-heartbeats-in-a-lifetime/";
const TITLE = "How Many Heartbeats in a Human Lifetime?";
const DESC =
  "The average human heart beats 2.5 billion times in a lifetime. Discover resting heart rate science, cardiac output, and how to calculate your personal heartbeat total.";

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (!el) {
    if (selector.startsWith("link")) {
      el = document.createElement("link");
      (el as HTMLLinkElement).rel = "canonical";
    } else {
      el = document.createElement("meta");
      const m = selector.match(/\[(name|property)="([^"]+)"\]/);
      if (m) (el as HTMLMetaElement).setAttribute(m[1], m[2]);
    }
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const StatCard = ({ n, l }: { n: string; l: string }) => (
  <div className="bg-card border border-border rounded-xl p-4 text-center">
    <div className="text-2xl font-bold text-primary">{n}</div>
    <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
      {l}
    </div>
  </div>
);

const HeartbeatsLifetime = () => {
  useEffect(() => {
    document.title = TITLE;
    setMeta('meta[name="description"]', "content", DESC);
    setMeta('link[rel="canonical"]', "href", CANONICAL);
    setMeta('meta[property="og:title"]', "content", TITLE);
    setMeta('meta[property="og:description"]', "content", DESC);
    setMeta('meta[property="og:url"]', "content", CANONICAL);
    setMeta('meta[property="og:type"]', "content", "article");
    setMeta('meta[name="twitter:title"]', "content", TITLE);
    setMeta('meta[name="twitter:description"]', "content", DESC);

    // JSON-LD
    const existing = document.getElementById("article-jsonld");
    if (existing) existing.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "article-jsonld";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "How Many Heartbeats Does a Human Have in a Lifetime?",
      description: DESC,
      url: CANONICAL,
      datePublished: "2026-04-20",
      dateModified: "2026-07-17",
      author: { "@type": "Organization", name: "whatismyage.me", url: "https://whatismyage.me" },
      publisher: { "@type": "Organization", name: "What Is My Age", url: "https://whatismyage.me" },
      mainEntityOfPage: CANONICAL,
    });
    document.head.appendChild(ld);

    // BreadcrumbList JSON-LD
    const bcExisting = document.getElementById("breadcrumb-jsonld");
    if (bcExisting) bcExisting.remove();
    const bcLd = document.createElement("script");
    bcLd.type = "application/ld+json";
    bcLd.id = "breadcrumb-jsonld";
    bcLd.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://whatismyage.me/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://whatismyage.me/blog/" },
        { "@type": "ListItem", position: 3, name: "How Many Heartbeats in a Human Lifetime?", item: CANONICAL },
      ],
    });
    document.head.appendChild(bcLd);

    // FAQPage JSON-LD
    const faqExisting = document.getElementById("faq-jsonld");
    if (faqExisting) faqExisting.remove();
    const faqLd = document.createElement("script");
    faqLd.type = "application/ld+json";
    faqLd.id = "faq-jsonld";
    faqLd.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How many heartbeats does a human have in a lifetime?",
          acceptedAnswer: { "@type": "Answer", text: "The average human heart beats approximately 2.5 billion times in a lifetime. Based on a resting heart rate of 70 beats per minute and a life expectancy of 79 years, the calculation is: 70 bpm × 60 min × 24 hr × 365 days × 79 years ≈ 2,912,000,000 beats." },
        },
        {
          "@type": "Question",
          name: "What is a normal resting heart rate?",
          acceptedAnswer: { "@type": "Answer", text: "A normal resting heart rate for adults is 60–100 beats per minute. Well-trained athletes often have resting rates of 40–60 bpm because their hearts pump more blood per beat, requiring fewer beats overall." },
        },
        {
          "@type": "Question",
          name: "How many heartbeats per day does a human have?",
          acceptedAnswer: { "@type": "Answer", text: "At a resting rate of 70 bpm, the heart beats approximately 100,800 times per day. At a higher rate of 80 bpm, that rises to about 115,200 beats per day." },
        },
        {
          "@type": "Question",
          name: "How many times does the heart beat per year?",
          acceptedAnswer: { "@type": "Answer", text: "At 70 beats per minute, the heart beats approximately 36.8 million times per year (70 × 60 × 24 × 365 = 36,792,000)." },
        },
      ],
    });
    document.head.appendChild(faqLd);

    return () => {
      // restore site default canonical on unmount
      setMeta('link[rel="canonical"]', "href", "https://whatismyage.me/");
      const el = document.getElementById("article-jsonld");
      if (el) el.remove();
      document.getElementById("breadcrumb-jsonld")?.remove();
      document.getElementById("faq-jsonld")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border">
        <div className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="font-display text-lg text-foreground">
            What Is My <span className="text-primary">Age</span>
          </Link>
          <Link
            to="/"
            className="text-xs sm:text-sm bg-primary text-primary-foreground px-4 py-2 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Calculate my age
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <article className="max-w-2xl mx-auto px-5 py-12">
          <Link
            to="/blog"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← All posts
          </Link>

          <h1 className="font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-4">
            How Many Heartbeats Does a Human Have in a Lifetime?
          </h1>

          <p className="italic text-foreground/80 border-l-4 border-primary pl-4 mb-8 text-lg leading-relaxed">
            Your heart has been beating since before you were born. Furthermore,
            it has never once stopped to rest. But how many times has it actually
            beaten — and how many beats remain?
          </p>

          <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
            The answer is staggering. By the time the average person reaches 80,
            their heart will have completed approximately{" "}
            <strong>2.5 to 3 billion beats</strong>. Not million. Billion. That
            single number changes how most people think about the organ quietly
            working inside them every second of every day.
          </p>

          <div className="bg-card border-l-4 border-primary rounded-r-xl py-5 px-6 my-7">
            <div className="text-3xl sm:text-4xl font-bold text-primary">
              ~2.85 billion
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Average lifetime heartbeats based on 70 BPM resting heart rate
              over 77.5 years (CDC, 2022)
            </div>
          </div>

          <h2 className="font-display text-2xl text-foreground mt-10 mb-3 pt-4 border-t border-border">
            How to Calculate Your Total Heartbeats in a Lifetime
          </h2>
          <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
            The calculation starts with your <strong>resting heart rate</strong>{" "}
            — the number of times your heart beats per minute while at rest. For
            most healthy adults, this figure ranges from 60 to 100 beats per
            minute (BPM). Consequently, doctors commonly use 70–72 BPM as a
            reliable average for estimation purposes.
          </p>

          <div className="grid grid-cols-2 gap-3 my-7">
            <StatCard n="72" l="Beats per minute" />
            <StatCard n="4,320" l="Beats per hour" />
            <StatCard n="103,680" l="Beats per day" />
            <StatCard n="37,843,200" l="Beats per year" />
          </div>

          <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
            Therefore, multiply 37.8 million by your age in years and you have a
            working estimate of your personal heartbeat total. For instance, a
            38-year-old has already crossed 1.43 billion beats. Moreover,
            someone born in 1970 is rapidly approaching 2 billion.
          </p>

          <div className="bg-card border border-border rounded-xl p-5 my-6">
            <div className="font-semibold text-foreground mb-2">
              Total heartbeats formula
            </div>
            <div className="text-sm text-muted-foreground leading-relaxed">
              Age in years × 365.25 × 24 × 60 × resting BPM = lifetime heartbeats
              <br />
              Example: 38 × 365.25 × 24 × 60 × 72 ={" "}
              <strong className="text-foreground">1,432,166,400 beats</strong>
            </div>
          </div>

          <h2 className="font-display text-2xl text-foreground mt-10 mb-3 pt-4 border-t border-border">
            Does Cardiac Output Affect Your Total Heartbeat Count?
          </h2>
          <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
            <strong>Cardiac output</strong> — the volume of blood the heart
            pumps per minute — is distinct from heart rate. However, both are
            deeply connected. A typical adult heart pumps around 5 litres of
            blood per minute at rest. Additionally, with each heartbeat the
            heart ejects roughly 70ml of blood, known as the stroke volume.
          </p>

          <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
            Over a lifetime, your heart will pump approximately{" "}
            <strong>200 million litres of blood</strong> — enough to fill 80
            Olympic swimming pools. Meanwhile, every single beat is coordinating
            oxygen delivery to every cell in your body simultaneously. As a
            result, cardiovascular health becomes one of the most consequential
            factors in how long — and how well — you live.
          </p>

          <h3 className="font-display text-xl text-foreground mt-7 mb-2">
            What the science says about heart rate and life expectancy
          </h3>
          <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
            Research consistently links lower resting heart rate to better
            cardiovascular health outcomes. A landmark 2013 Danish study
            tracking 5,200 men over 16 years found a clear association between
            elevated resting pulse rate and mortality risk. Consequently, a
            resting heart rate below 60 BPM — called <strong>bradycardia</strong>{" "}
            in athletic individuals — is generally considered a sign of
            excellent cardiovascular fitness.
          </p>

          <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
            Conversely, a persistently elevated heart rate above 100 BPM at
            rest — <strong>tachycardia</strong> — signals increased strain on
            the heart. Similarly, high <strong>heart rate variability</strong>{" "}
            (the variation between beats) is increasingly recognised as a
            marker of good autonomic nervous system function and overall
            health.
          </p>

          <h2 className="font-display text-2xl text-foreground mt-10 mb-3 pt-4 border-t border-border">
            Do All Mammals Get the Same Number of Heartbeats in a Lifetime?
          </h2>
          <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
            This is where the biology becomes genuinely surprising. Research
            across the animal kingdom reveals a remarkable pattern: most
            mammals accumulate roughly{" "}
            <Link to="/blog/when-will-i-be-1-billion-seconds-old/" className="text-primary underline">
              one billion heartbeats
            </Link>{" "}
            over their lifespan, regardless of body size.
          </p>

          <div className="bg-secondary/60 rounded-xl px-5 py-4 my-6 text-foreground/90 leading-relaxed">
            A hamster's heart beats 400 times a minute. It lives for roughly 3
            years. An elephant's heart beats 28 times a minute. It lives for 70
            years. Both arrive at approximately one billion total beats.
          </div>

          <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
            Humans are a notable exception. Subsequently, thanks to modern
            medicine, nutrition, and sanitation, we live 2.5 times longer than
            the mammalian heart-rate pattern would predict. In fact, we receive
            what amounts to a biological bonus — one gifted entirely by
            civilisation.
          </p>

          <h3 className="font-display text-xl text-foreground mt-7 mb-2">
            Exercise, resting heart rate, and your personal beat count
          </h3>
          <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
            Exercise is the most powerful tool for lowering your resting pulse
            rate. Elite endurance athletes regularly record resting rates in
            the low 40s. For instance, cyclist Miguel Indurain reportedly had a
            resting rate of just 28 BPM. Furthermore, a lower resting rate
            means fewer total beats over a lifetime — though whether this
            directly extends life remains debated.
          </p>

          <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
            Additionally, factors such as stress, poor sleep, excessive
            caffeine intake, and certain medications all raise resting heart
            rate meaningfully. Therefore, managing these variables is not
            merely wellness advice — it is arithmetic.
          </p>

          <h2 className="font-display text-2xl text-foreground mt-10 mb-3 pt-4 border-t border-border">
            Your Personal Heartbeat Counter — Calculated to This Moment
          </h2>
          <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
            Your exact heartbeat total depends entirely on your date of birth
            and your personal resting heart rate. However, using the standard
            72 BPM reference figure, the numbers are straightforward to
            calculate. Moreover, they tell a story no other single statistic
            can.
          </p>

          <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
            For more on translating your age into remarkable numbers, try the{" "}
            <Link to="/" className="text-primary underline">
              age calculator on whatismyage.me
            </Link>
            . You may also enjoy{" "}
            <Link to="/blog/how-many-full-moons-in-a-lifetime/" className="text-primary underline">how many full moons you'll see in a lifetime</Link>,{" "}
            <Link to="/blog/what-is-a-life-clock/" className="text-primary underline">your life as a 24-hour clock</Link>,{" "}
            <Link to="/blog/how-to-calculate-age-in-days/" className="text-primary underline">your exact age in days</Link>, and{" "}
            <Link to="/blog/what-generation-am-i/" className="text-primary underline">which generation you belong to</Link>.
          </p>

          <div className="bg-primary text-primary-foreground rounded-2xl p-7 text-center my-10">
            <h3 className="font-display text-2xl mb-2">
              Calculate your exact heartbeat count
            </h3>
            <p className="text-primary-foreground/85 mb-5">
              Enter your date of birth at whatismyage.me and see your personal
              heartbeat total — calculated to this exact second.
            </p>
            <Link
              to="/"
              className="inline-block bg-background text-primary font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Calculate mine →
            </Link>
          </div>

          <p className="text-sm">
            <Link to="/blog" className="text-primary hover:underline">
              ← All posts
            </Link>
          </p>
        </article>
      </main>

      <footer className="py-6 text-center text-xs text-muted-foreground/60 space-x-3 border-t border-border">
        <Link to="/" className="hover:text-foreground transition-colors">
          whatismyage.me
        </Link>
        <span aria-hidden>·</span>
        <Link to="/blog" className="hover:text-foreground transition-colors">
          Blog
        </Link>
        <span aria-hidden>·</span>
        <Link to="/privacy" className="hover:text-foreground transition-colors">
          Privacy
        </Link>
      </footer>
    </div>
  );
};

export default HeartbeatsLifetime;
