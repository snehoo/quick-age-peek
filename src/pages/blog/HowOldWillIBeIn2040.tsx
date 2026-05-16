import { Link } from "react-router-dom";
import { ArticleShell, BackToBlog, CtaBox, H2, H3, Lead, Paragraph, AuthorBio,
  RelatedPosts } from "@/components/blog/ArticleLayout";
import { useArticleMeta } from "@/components/blog/articleMeta";

const meta = {
  title: "How Old Will I Be in 2040? Age Calculator by Birth Year",
  description: "Wondering how old you'll be in 2040? Find your age instantly with our complete birth year table — plus what the world could look like in fourteen years.",
  canonical: "https://whatismyage.me/blog/how-old-will-i-be-in-2040",
  headline: "How Old Will I Be in 2040?",
};

const Figure = ({ src, alt, credit }: { src: string; alt: string; credit?: React.ReactNode }) => (
  <figure className="my-8">
    <img src={src} alt={alt} loading="lazy" className="w-full rounded-xl border border-border" />
    {credit && <figcaption className="text-xs text-muted-foreground mt-2 italic">{credit}</figcaption>}
  </figure>
);

const Table = ({ headers, rows }: { headers: string[]; rows: React.ReactNode[][] }) => (
  <div className="my-6 overflow-x-auto rounded-xl border border-border">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-secondary/60">
          {headers.map((h) => (
            <th key={h} className="text-left font-semibold px-4 py-3 text-foreground">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="even:bg-secondary/30">
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-3 border-t border-border text-foreground/90">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline">
    {children}
  </a>
);

const related = [
  { tag: "Predictions", title: "How Old Will I Be in 2030?", href: "/blog/how-old-will-i-be-in-2030" },
  { tag: "Predictions", title: "How Old Will I Be in 2050?", href: "/blog/how-old-will-i-be-in-2050" },
  { tag: "Milestones", title: "When Will I Be 1 Billion Seconds Old?", href: "/blog/when-will-i-be-1-billion-seconds-old" },
  { tag: "Culture", title: "What Generation Am I? The Complete Birth Year Guide", href: "/blog/what-generation-am-i" },
];

const HowOldWillIBeIn2040 = () => {
  useArticleMeta(meta);

  return (
    <ArticleShell>
      <BackToBlog />
      <h1 className="font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-4">How Old Will I Be in 2040?</h1>
      <Lead>2040 is fourteen years away — close enough to plan for, far enough to feel like a different world. But your age in 2040 is something you can calculate exactly, right now.</Lead>
      <Paragraph>A lot can happen in fourteen years. In 2010, fourteen years before today, there was no Instagram, no Uber, no ChatGPT, no iPad. The world of 2040 will likely contain things equally hard to anticipate right now.</Paragraph>

      <Figure
        src="https://images.unsplash.com/photo-1564836663277-c4aa761b9882?w=1200&q=75&auto=format&fit=crop"
        alt="An empty road stretching between futuristic glass and steel buildings"
        credit={
          <>
            Photo by Lennon Cheng on{" "}
            <a href="https://unsplash.com/photos/empty-road-surrounded-buildings-yAeUPmbyS-0" target="_blank" rel="noopener noreferrer" className="underline">
              Unsplash
            </a>
          </>
        }
      />

      <H2>How to Calculate Your Age in 2040</H2>
      <H3>The Formula</H3>
      <Paragraph><strong>Age in 2040 = 2040 − your birth year</strong></Paragraph>
      <Paragraph>Then adjust:</Paragraph>
      <ul className="list-disc list-inside space-y-2 mb-5 text-foreground/90">
        <li><strong>If your birthday has passed by the date in 2040 you're asking about</strong> → use the result</li>
        <li><strong>If your birthday hasn't happened yet</strong> → subtract 1</li>
      </ul>
      <Paragraph>Example: born in <strong>1995</strong> → 2040 − 1995 = <strong>45</strong>. If you're asking about a date before your birthday in 2040, you'll still be 44.</Paragraph>
      <Paragraph>For your exact age on a specific date, use the <Link to="/" className="text-primary underline">whatismyage.me calculator</Link>.</Paragraph>

      <H2>Age in 2040 by Birth Year — Complete Table</H2>
      <Table
        headers={["Birth year", "Age in 2040"]}
        rows={[
          ["1950", "89–90"],
          ["1955", "84–85"],
          ["1960", "79–80"],
          ["1965", "74–75"],
          ["1970", "69–70"],
          ["1975", "64–65"],
          ["1980", "59–60"],
          ["1985", "54–55"],
          ["1990", "49–50"],
          ["1995", "44–45"],
          ["2000", "39–40"],
          ["2005", "34–35"],
          ["2010", "29–30"],
          ["2020", "19–20"],
        ]}
      />

      <H2>Milestone Ages in 2040</H2>
      <Paragraph>2040 delivers a wave of significant birthdays:</Paragraph>
      <ul className="list-disc list-inside space-y-2 mb-5 text-foreground/90">
        <li><strong>Born in 1990?</strong> You'll hit <strong>50</strong> in 2040 — half a century.</li>
        <li><strong>Born in 1980?</strong> You'll reach <strong>60</strong>.</li>
        <li><strong>Born in 1970?</strong> You'll turn <strong>70</strong>.</li>
        <li><strong>Born in 2000?</strong> You'll be <strong>40</strong> — your first major milestone.</li>
        <li><strong>Born in 2010?</strong> You'll turn <strong>30</strong>, entering adulthood fully.</li>
        <li><strong>Born in 2020?</strong> You'll turn <strong>20</strong>, just reaching the start of independent life.</li>
      </ul>
      <Paragraph>For those born around 1989–1991, 2040 brings the crossing of 50 — a milestone that <ExternalLink href="https://www.apa.org/monitor/2020/07/life-after-50">research consistently finds is associated with a shift in life priorities</ExternalLink> toward meaning, relationships, and legacy over achievement and status.</Paragraph>

      <H2>What Might the World Look Like in 2040?</H2>
      <Figure
        src="https://images.unsplash.com/photo-1452696193712-6cabf5103b63?w=1200&q=75&auto=format&fit=crop"
        alt="A glass-facade skyscraper reflecting a dramatic sky, architectural and forward-looking"
        credit={
          <>
            Photo by drmakete lab on{" "}
            <a href="https://unsplash.com/photos/the-reflection-of-the-sky-in-the-glass-of-a-building-hsg538WrP0Y" target="_blank" rel="noopener noreferrer" className="underline">
              Unsplash
            </a>
          </>
        }
      />
      <Paragraph>Forecasting 14 years out involves real uncertainty, but several trends point toward a meaningfully different world by 2040:</Paragraph>
      <ul className="list-disc list-inside space-y-3 mb-5 text-foreground/90">
        <li><strong>Climate and energy:</strong> The <ExternalLink href="https://www.iea.org/reports/net-zero-by-2050">International Energy Agency's Net Zero Roadmap</ExternalLink> projects that by 2040, clean electricity could supply the majority of global energy demand if current investment trajectories continue.</li>
        <li><strong>Ageing populations:</strong> By 2040, <ExternalLink href="https://www.who.int/news-room/fact-sheets/detail/ageing-and-health">the WHO projects</ExternalLink> that the number of people aged 60 and over will have doubled globally compared to 2015.</li>
        <li><strong>AI in the workplace:</strong> <ExternalLink href="https://www.oxfordeconomics.com/recent-releases/how-robots-change-the-world">Oxford Economics estimates</ExternalLink> that automation will have transformed large portions of routine and cognitive work by the late 2030s.</li>
        <li><strong>Longevity science:</strong> <ExternalLink href="https://gero.usc.edu/">Researchers at institutions including the Longevity Institute at USC</ExternalLink> are working toward significant extensions of healthy lifespan. By 2040, serious longevity therapies may be entering clinical use.</li>
      </ul>
      <Paragraph>The world of 2040 will be shaped enormously by decisions made — politically, technologically, personally — in the years between now and then. You'll be part of those decisions.</Paragraph>

      <H2>Your Life in Numbers in 2040</H2>
      <Paragraph>For someone turning 50 in 2040 (born in 1990), here's what that age looks like across units:</Paragraph>
      <Table
        headers={["Unit", "Amount at age 50"]}
        rows={[
          ["Months", "~600 months"],
          ["Weeks", "~2,609 weeks"],
          ["Days", "~18,263 days"],
          ["Hours", "~438,300 hours"],
          ["Heartbeats", "~1.83 billion"],
          ["Full moons", "~620"],
        ]}
      />
      <Paragraph>Explore: <Link to="/blog/how-many-weeks-old-am-i" className="text-primary underline">How many weeks old are you?</Link> · <Link to="/blog/how-many-heartbeats-in-a-lifetime" className="text-primary underline">How many heartbeats in a lifetime?</Link> · <Link to="/blog/what-is-a-life-clock" className="text-primary underline">What is a life clock?</Link></Paragraph>

      <H2>Your Age Across All Future Years</H2>
      <Table
        headers={["Year", "Born 1985", "Born 1990", "Born 1995", "Born 2000", "Born 2005"]}
        rows={[
          ["2027", "41–42", "36–37", "31–32", "26–27", "21–22"],
          ["2030", "44–45", "39–40", "34–35", "29–30", "24–25"],
          ["2040", "54–55", "49–50", "44–45", "39–40", "34–35"],
          ["2050", "64–65", "59–60", "54–55", "49–50", "44–45"],
          ["2060", "74–75", "69–70", "64–65", "59–60", "54–55"],
        ]}
      />
      <Paragraph>→ See also: <Link to="/blog/how-old-will-i-be-in-2030" className="text-primary underline">How old will I be in 2030?</Link> · <Link to="/blog/how-old-will-i-be-in-2050" className="text-primary underline">How old will I be in 2050?</Link></Paragraph>

      <H2>Find Your Exact Age on Any Date in 2040</H2>
      <Paragraph>The table above gives your age across the full year. For a precise answer — your age on a specific date in 2040 — visit <Link to="/" className="text-primary underline">whatismyage.me</Link> and enter your date of birth alongside any future date.</Paragraph>
      <Paragraph>Also explore:</Paragraph>
      <ul className="list-disc list-inside space-y-2 mb-5 text-foreground/90">
        <li>👥 <Link to="/blog/what-generation-am-i" className="text-primary underline">What generation are you?</Link></li>
        <li>🕰 <Link to="/blog/what-is-a-life-clock" className="text-primary underline">What is a life clock?</Link></li>
        <li>⏱ <Link to="/blog/how-many-seconds-old-am-i" className="text-primary underline">How many seconds old are you?</Link></li>
      </ul>

      <CtaBox title="Find your exact age on any date in 2040">Enter your date of birth at whatismyage.me — get your precise age, plus heartbeats, full moons, and shareable life card.</CtaBox>
      <AuthorBio
        name="Snehal Patel"
        bio="Snehal is a developer and data enthusiast from Mumbai who loves finding unexpected patterns in numbers. When not building calculators, they're probably wondering how many breaths they've taken so far. What Is My Age was born from a simple question: what does your age really mean?"
      />

      <RelatedPosts posts={related} />
      <BackToBlog />
    </ArticleShell>
  );
};

export default HowOldWillIBeIn2040;
