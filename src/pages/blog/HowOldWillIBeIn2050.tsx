import { Link } from "react-router-dom";
import { ArticleShell, BackToBlog, CtaBox, H2, Lead, Paragraph, AuthorBio,
  RelatedPosts } from "@/components/blog/ArticleLayout";
import { useArticleMeta } from "@/components/blog/articleMeta";

const meta = {
  title: "How Old Will I Be in 2050? Age Calculator by Birth Year",
  description: "How old will you be in 2050? Find your age instantly by birth year — plus a fascinating look at what the world might look like in 24 years time.",
  canonical: "https://whatismyage.me/blog/how-old-will-i-be-in-2050",
  headline: "How Old Will I Be in 2050?",
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
  { tag: "Predictions", title: "How Old Will I Be in 2030?", href: "/blog/how-old-will-i-be-in-2030/" },
  { tag: "Predictions", title: "How Old Will I Be in 2040?", href: "/blog/how-old-will-i-be-in-2040/" },
  { tag: "Milestones", title: "When Will I Be 1 Billion Seconds Old?", href: "/blog/when-will-i-be-1-billion-seconds-old/" },
  { tag: "Time & Philosophy", title: "What Is a Life Clock?", href: "/blog/what-is-a-life-clock/" },
];

const HowOldWillIBeIn2050 = () => {
  useArticleMeta(meta);

  return (
    <ArticleShell>
      <BackToBlog />
      <h1 className="font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-4">How Old Will I Be in 2050?</h1>
      <Lead>2050 sounds like science fiction — but it's just 24 years away. A child born today will be in their mid-twenties. Someone in their twenties today will be approaching fifty. And the choices made between now and then will have shaped the world in ways both predictable and entirely surprising.</Lead>
      <Paragraph>But first: how old will you be in 2050?</Paragraph>

      <Figure
        src="https://images.unsplash.com/photo-1564836663277-c4aa761b9882?w=1200&q=75&auto=format&fit=crop"
        alt="A long empty road stretching between towering glass buildings into the distance"
        credit={
          <>
            Photo by Lennon Cheng on{" "}
            <a href="https://unsplash.com/photos/empty-road-surrounded-buildings-yAeUPmbyS-0" target="_blank" rel="noopener noreferrer" className="underline">
              Unsplash
            </a>
          </>
        }
      />

      <H2>How to Calculate Your Age in 2050</H2>
      <Paragraph><strong>Age in 2050 = 2050 − your birth year</strong></Paragraph>
      <Paragraph>Then adjust:</Paragraph>
      <ul className="list-disc list-inside space-y-2 mb-5 text-foreground/90">
        <li><strong>If your birthday has passed by the point in 2050 you're asking about</strong> → use the result</li>
        <li><strong>If your birthday hasn't happened yet</strong> → subtract 1</li>
      </ul>
      <Paragraph>Example: born in <strong>1988</strong> → 2050 − 1988 = <strong>62</strong>. If asking about a date before your birthday in 2050, you'll be 61.</Paragraph>
      <Paragraph>For a precise figure on a specific date, use the <Link to="/" className="text-primary underline">whatismyage.me calculator</Link>.</Paragraph>

      <H2>Age in 2050 by Birth Year — Complete Table</H2>
      <Table
        headers={["Birth year", "Age in 2050"]}
        rows={[
          ["1945", "104–105"],
          ["1950", "99–100"],
          ["1960", "89–90"],
          ["1970", "79–80"],
          ["1980", "69–70"],
          ["1985", "64–65"],
          ["1990", "59–60"],
          ["1995", "54–55"],
          ["2000", "49–50"],
          ["2005", "44–45"],
          ["2010", "39–40"],
          ["2015", "34–35"],
          ["2020", "29–30"],
          ["2025", "24–25"],
        ]}
      />

      <H2>What Milestone Ages Does 2050 Bring?</H2>
      <Paragraph>2050 is a year of significant round-number milestones for a huge swath of people alive today:</Paragraph>
      <ul className="list-disc list-inside space-y-2 mb-5 text-foreground/90">
        <li><strong>Born in 1990?</strong> You'll turn <strong>60</strong> in 2050 — the threshold of what many still consider "older" but what medicine is increasingly treating as mid-life.</li>
        <li><strong>Born in 2000?</strong> You'll hit <strong>50</strong>.</li>
        <li><strong>Born in 1980?</strong> You'll reach <strong>70</strong>.</li>
        <li><strong>Born in 2010?</strong> You'll be <strong>40</strong> — the same milestone age that feels so significant today.</li>
        <li><strong>Born in 2025?</strong> You'll turn <strong>25</strong> in 2050 — just getting started.</li>
      </ul>
      <Paragraph>There's something genuinely interesting about looking at 2050 as a milestone year: it's the year that appears in virtually every major <ExternalLink href="https://unfccc.int/process-and-meetings/the-paris-agreement">climate target</ExternalLink>, <ExternalLink href="https://www.nature.com/articles/s43587-021-00078-7">longevity research horizon</ExternalLink>, and <ExternalLink href="https://www.un.org/development/desa/pd/content/world-population-prospects-2022">global demographic projection</ExternalLink>. The year that determines so much about the world will also be the year you cross a personal milestone.</Paragraph>

      <H2>What the World Might Look Like in 2050</H2>
      <Figure
        src="https://images.unsplash.com/photo-1452696193712-6cabf5103b63?w=1200&q=75&auto=format&fit=crop"
        alt="Light refracting through a glass building facade, a symbol of the transparency of the future"
        credit={
          <>
            Photo by drmakete lab on{" "}
            <a href="https://unsplash.com/photos/the-reflection-of-the-sky-in-the-glass-of-a-building-hsg538WrP0Y" target="_blank" rel="noopener noreferrer" className="underline">
              Unsplash
            </a>
          </>
        }
      />
      <Paragraph>2050 is the central horizon year for most of the world's major long-term projections. Here's what researchers and institutions are forecasting:</Paragraph>
      <ul className="list-disc list-inside space-y-3 mb-5 text-foreground/90">
        <li><strong>Climate:</strong> The <ExternalLink href="https://unfccc.int/process-and-meetings/the-paris-agreement">Paris Agreement</ExternalLink> targets net-zero global emissions by 2050. Whether that goal is met will define the physical conditions of the world you'll inhabit.</li>
        <li><strong>Population:</strong> The <ExternalLink href="https://www.un.org/development/desa/pd/content/world-population-prospects-2022">UN projects</ExternalLink> global population will reach approximately 9.7 billion by 2050. Europe, Japan, and China will face significant population decline.</li>
        <li><strong>Life expectancy:</strong> <ExternalLink href="https://www.nature.com/articles/s43587-021-00078-7">WHO and academic longevity researchers</ExternalLink> suggest that by 2050, healthy life expectancy in developed countries could reach into the 80s as a norm.</li>
        <li><strong>Work and economy:</strong> <ExternalLink href="https://www.weforum.org/reports/the-future-of-jobs-report-2023/">The World Economic Forum projects</ExternalLink> that AI and automation will have created as many new job categories as they've eliminated.</li>
        <li><strong>Space:</strong> <ExternalLink href="https://www.nasa.gov/artemis/">NASA's Artemis programme</ExternalLink> and commercial operators aim to establish a sustained human presence on the Moon well before 2050.</li>
      </ul>
      <Paragraph>The world of 2050 will be shaped by the people alive today — including you.</Paragraph>

      <H2>Your Life in Numbers at Your 2050 Age</H2>
      <Paragraph>For someone turning 60 in 2050 (born in 1990), here's what six decades looks like across units:</Paragraph>
      <Table
        headers={["Unit", "Amount at age 60"]}
        rows={[
          ["Months", "~720 months"],
          ["Weeks", "~3,131 weeks"],
          ["Days", "~21,915 days"],
          ["Hours", "~525,960 hours"],
          ["Heartbeats", "~2.19 billion"],
          ["Full moons", "~744"],
        ]}
      />
      <Paragraph>Explore: <Link to="/blog/how-many-weeks-old-am-i/" className="text-primary underline">How many weeks old are you?</Link> · <Link to="/blog/how-many-heartbeats-in-a-lifetime/" className="text-primary underline">How many heartbeats in a lifetime?</Link> · <Link to="/blog/how-many-full-moons-in-a-lifetime/" className="text-primary underline">How many full moons in a lifetime?</Link> · <Link to="/blog/what-is-a-life-clock/" className="text-primary underline">What is a life clock?</Link></Paragraph>

      <H2>Your Age Across All Future Years</H2>
      <Table
        headers={["Year", "Born 1985", "Born 1990", "Born 1995", "Born 2000", "Born 2010"]}
        rows={[
          ["2030", "44–45", "39–40", "34–35", "29–30", "19–20"],
          ["2040", "54–55", "49–50", "44–45", "39–40", "29–30"],
          ["2050", "64–65", "59–60", "54–55", "49–50", "39–40"],
          ["2060", "74–75", "69–70", "64–65", "59–60", "49–50"],
          ["2075", "89–90", "84–85", "79–80", "74–75", "64–65"],
        ]}
      />
      <Paragraph>→ See also: <Link to="/blog/how-old-will-i-be-in-2030/" className="text-primary underline">How old will I be in 2030?</Link> · <Link to="/blog/how-old-will-i-be-in-2040/" className="text-primary underline">How old will I be in 2040?</Link></Paragraph>

      <H2>Get Your Exact Age on Any Date in 2050</H2>
      <Paragraph>The table above gives your age across the full year 2050. For a precise answer tied to a specific date, visit <Link to="/" className="text-primary underline">whatismyage.me</Link> — enter your date of birth and any future date to see exactly where you'll be.</Paragraph>
      <Paragraph>Also explore:</Paragraph>
      <ul className="list-disc list-inside space-y-2 mb-5 text-foreground/90">
        <li>👥 <Link to="/blog/what-generation-am-i/" className="text-primary underline">What generation are you?</Link></li>
        <li>⏳ <Link to="/blog/when-will-i-be-1-billion-seconds-old/" className="text-primary underline">When will I be 1 billion seconds old?</Link></li>
        <li>🕰 <Link to="/blog/what-is-a-life-clock/" className="text-primary underline">What is a life clock?</Link></li>
      </ul>

      <CtaBox title="Find your exact age on any date in 2050">Enter your date of birth at whatismyage.me — get your precise age, plus heartbeats, full moons, and shareable life card.</CtaBox>
      <AuthorBio
        name="Snehal Patel"
        bio="Snehal is a developer and data enthusiast from Mumbai who loves finding unexpected patterns in numbers. When not building calculators, they're probably wondering how many breaths they've taken so far. What Is My Age was born from a simple question: what does your age really mean?"
      />

      <RelatedPosts posts={related} />
      <BackToBlog />
    </ArticleShell>
  );
};

export default HowOldWillIBeIn2050;
