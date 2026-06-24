import { Link } from "react-router-dom";
import { ArticleShell, BackToBlog, CtaBox, FormulaBox, H2, H3, Lead, Paragraph, Quote, AuthorBio,
  RelatedPosts, TLDR, ByLine, OrderedList, ExternalLink } from "@/components/blog/ArticleLayout";
import { useArticleMeta } from "@/components/blog/articleMeta";

const meta = {
  title: "What Is a Life Clock? Your Age as a 24-Hour Day | whatismyage.me",
  description: "If your life were a 24-hour day, what time is it right now? The life clock converts your age into a clock time — a powerful way to understand your time and what remains.",
  canonical: "https://whatismyage.me/blog/what-is-a-life-clock",
  headline: "What Is a Life Clock? Your Age as a 24-Hour Day Explained",
  publishedDate: "2026-06-24",
};

const clock = [
  ["12:00 AM – 3:00 AM", "Ages 0–10 · deep night", "Childhood. The world is entirely new and endlessly large."],
  ["3:00 AM – 6:00 AM", "Ages 10–20 · pre-dawn", "Adolescence. The world is stirring. Identity is forming."],
  ["6:00 AM – 9:00 AM", "Ages 20–30 · early morning", "The day is beginning in earnest. Everything feels possible."],
  ["9:00 AM – 12:00 PM", "Ages 30–40 · mid-morning", "Building momentum. Hitting your stride. Making things real."],
  ["12:00 PM – 3:00 PM", "Ages 40–50 · midday", "The peak of the day. Full capacity. Experience and energy aligned."],
  ["3:00 PM – 6:00 PM", "Ages 50–60 · golden afternoon", "Experienced, purposeful, unhurried. The light is exceptional."],
  ["6:00 PM – 9:00 PM", "Ages 60–70 · evening", "Reflection. Depth. The most beautiful hour of the day for many."],
  ["9:00 PM – 12:00 AM", "Ages 70–80+ · night", "The day's work nearly done. Stars fully visible. Quiet satisfaction."],
];

const related = [
  { tag: "Science", title: "How Many Heartbeats in a Human Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime/" },
  { tag: "Astronomy", title: "How Many Full Moons Will You See in Your Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime/" },
  { tag: "Culture", title: "What Generation Am I? The Complete Guide", href: "/blog/what-generation-am-i/" },
  { tag: "How-to", title: "How to Calculate Your Exact Age in Days", href: "/blog/how-to-calculate-age-in-days/" },
];

const LifeClock = () => {
  useArticleMeta(meta);

  return (
    <ArticleShell>
      <BackToBlog />
      <h1 className="font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-4">What Is a Life Clock? Your Age as a 24-Hour Day Explained</h1>
      <ByLine publishedDate={meta.publishedDate} />
      <Lead>Imagine your entire life — from birth to its natural end — compressed into a single 24-hour day. Midnight is birth. The following midnight is the end. Consequently, the question becomes simple and quietly profound: what time is it for you right now?</Lead>
      <TLDR
        items={[
          "Life clock time = (current age ÷ assumed lifespan) × 24 hours.",
          "A 38-year-old assuming an 80-year lifespan is at 11:24 AM — late morning, with a long afternoon still ahead.",
          "The metaphor draws on Stoic philosophy and Oliver Burkeman's Four Thousand Weeks, which frame finitude as clarifying rather than morbid.",
          "Unlike a life expectancy calculator, the life clock doesn't predict how long you'll live — it reframes where you stand in whatever lifespan you choose.",
          "Changing the assumed lifespan (70, 80, 90, 100) shifts your life clock time significantly, which is itself a useful exercise.",
        ]}
      />
      <Paragraph>This is the life clock. Moreover, it is one of the most powerful and disorienting ways to understand exactly where you are in your own story. Furthermore, it replaces the abstract weight of years with something every human understands instantly: a time of day.</Paragraph>
      <div className="bg-foreground rounded-2xl p-7 my-7 text-center">
        <div className="text-5xl font-bold text-primary leading-none">11:23 AM</div>
        <div className="text-xs text-background/70 mt-3">Life clock time for a 38-year-old assuming an 80-year lifespan — late morning, long afternoon ahead</div>
      </div>
      <H2>How to Calculate Your Life Clock Time from Your Age</H2>
      <Paragraph>The calculation is elegantly simple. Specifically, divide your current age by your assumed lifespan to produce a decimal fraction. Subsequently, multiply that fraction by 24 to convert it into hours. Finally, convert the decimal remainder to minutes.</Paragraph>
      <Paragraph>For a 38-year-old assuming 80 years: 38 ÷ 80 = 0.475. Multiply by 24 = 11.4 hours. The 0.4 remainder converts to 24 minutes. Therefore, life clock time: <strong>11:24 AM</strong>.</Paragraph>
      <FormulaBox title="Life clock formula">Life clock time = (current age ÷ assumed lifespan) × 24 hours<br />Example: (38 ÷ 80) × 24 = 11.4 hours = <strong className="text-foreground">11:24 AM</strong><br />At lifespan 90: (38 ÷ 90) × 24 = 10:08 AM &nbsp;|&nbsp; At lifespan 70: (38 ÷ 70) × 24 = 13:01 PM</FormulaBox>
      <Paragraph>Notably, adjusting the assumed lifespan changes everything. Moreover, this makes the life clock a useful tool for examining your assumptions about <strong>time left to live</strong> — not with morbidity, but with clarity. Additionally, the calculation is worth revisiting at different assumed lifespans to see how dramatically the time changes.</Paragraph>
      <H2>What Every Hour of the Life Clock Represents</H2>
      <OrderedList
        items={clock.map(([time, age, text]) => (
          <span key={time}>
            <strong>{time}</strong> ({age}) — {text}
          </span>
        ))}
      />
      <div className="grid sm:grid-cols-2 gap-3 my-7">
        {clock.map(([time, age, text]) => (
          <div key={time} className="bg-card border border-border rounded-xl p-4">
            <div className="font-bold text-primary">{time}</div>
            <div className="text-xs text-muted-foreground my-1">{age}</div>
            <div className="text-sm italic text-foreground/75 leading-relaxed">{text}</div>
          </div>
        ))}
      </div>
      <H2>Why the Life Clock Changes How You Think About Age and Time</H2>
      <Paragraph>The life clock works precisely because it strips away social expectations. Saying you are 38 carries a specific cultural weight — milestones hit or missed, comparisons to peers, a sense of being on or off some imagined schedule. Conversely, saying it is 11:23 AM in your life carries none of that baggage.</Paragraph>
      <Paragraph>Furthermore, we all understand intuitively that 11 AM is not late. In fact, it is mid-morning. The day is clearly in full swing, and there is a long afternoon, evening, and night still ahead. As a result, the same information — being 38 years old — registers entirely differently when expressed as a time of day rather than a number of years.</Paragraph>
      <Quote>"The shortness of life is not a problem to be solved. It is a fact to be lived with — and lived well." — Oliver Burkeman, <ExternalLink href="https://www.fourthousandweeks.com/">Four Thousand Weeks</ExternalLink></Quote>
      <H2>How does Stoic philosophy frame the life clock?</H2>
      <Paragraph>The metaphor of life as a single day is ancient. Specifically, ancient Greek philosophers spoke of the morning, noon, and evening of a human life. Furthermore, Sophocles opened his masterwork Oedipus Rex with the riddle of a creature who walks on four legs in the morning, two at noon, and three in the evening — a riddle whose answer is a human being.</Paragraph>
      <Paragraph>Moreover, the Stoics used the shortness of life as a central philosophical prompt. <ExternalLink href="https://classics.mit.edu/Seneca/letters.html">Seneca's Letters</ExternalLink> return repeatedly to this theme: time is the only resource that cannot be recovered once spent. Therefore, the question is not how much time you have, but what you do with it. Consequently, the life clock functions not as a countdown but as a compass — a directional tool rather than a threat.</Paragraph>
      <H3>What is the four thousand weeks framework?</H3>
      <Paragraph>In his widely read book <em>Four Thousand Weeks</em>, philosopher Oliver Burkeman makes a similar observation. Specifically, he argues that a human life of 80 years contains approximately 4,000 weeks — a number small enough to hold in your mind, large enough to matter. Furthermore, he suggests that acknowledging finitude is not depressing but liberating. As a result, accepting that you cannot do everything frees you to choose what actually matters. The life clock embodies exactly this insight.</Paragraph>
      <H2>How is life clock time different from a life expectancy calculator?</H2>
      <Paragraph>A conventional <strong>life expectancy calculator</strong>, such as the <ExternalLink href="https://www.ssa.gov/oact/STATS/table4c6.html">Social Security Administration's actuarial life tables</ExternalLink>, estimates how many years you are likely to live based on health data, geography, and lifestyle factors. However, the life clock works differently. It does not predict. Instead, it reframes. Moreover, it takes whatever lifespan you choose — 80, 90, 100 — and shows you where in that arc you currently stand.</Paragraph>
      <Paragraph>Additionally, the life clock is not about <strong>time left to live</strong> in a morbid sense. Rather, it is about understanding the shape of a life in progress. Similarly, it is about recognising that 11 AM is not late — and that the afternoon, whenever it arrives, still contains enormous possibility.</Paragraph>
      <H2>How Your Life Clock Connects to Your Other Age Stats</H2>
      <Paragraph>The life clock is one of several powerful ways to reframe what your age actually means. Furthermore, your <Link to="/blog/how-many-heartbeats-in-a-lifetime/" className="text-primary underline">heartbeat total</Link> shows the biological machinery running behind those years. Additionally, your <Link to="/blog/how-many-full-moons-in-a-lifetime/" className="text-primary underline">full moon count</Link> provides a poetic, astronomical measure of time. Moreover, your <Link to="/blog/how-to-calculate-age-in-days/" className="text-primary underline">exact age in days</Link> gives you the raw, unvarnished total. Together, these numbers paint a portrait of a life that a single number in years can never fully convey.</Paragraph>
      <CtaBox title="What time is it on your life clock?">Enter your date of birth at whatismyage.me to find your exact life clock time — plus heartbeats, full moons, days alive, and your shareable life card.</CtaBox>
      <AuthorBio
        name="Snehal Patel"
        bio="Snehal is a developer and data enthusiast from Mumbai who loves finding unexpected patterns in numbers. When not building calculators, they're probably wondering how many breaths they've taken so far. What Is My Age was born from a simple question: what does your age really mean?"
      />

      <RelatedPosts posts={related} />
      <BackToBlog />
    </ArticleShell>
  );
};

export default LifeClock;
