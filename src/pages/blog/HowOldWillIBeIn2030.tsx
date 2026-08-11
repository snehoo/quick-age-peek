import { Link } from "react-router-dom";
import { ArticleShell, BackToBlog, CtaBox, H2, H3, Lead, Paragraph, AuthorBio,
  RelatedPosts, Note, ByLine,
  TLDR, BulletList,
} from "@/components/blog/ArticleLayout";
import { useArticleMeta } from "@/components/blog/articleMeta";

const meta = {
  title: "How Old Will I Be in 2030? Age Calculator by Birth Year",
  description: "Find out exactly how old you'll be in 2030 with our complete birth year table, plus what the world might look like when you get there.",
  canonical: "https://whatismyage.me/blog/how-old-will-i-be-in-2030/",
  publishedDate: "2026-06-24",
  headline: "How Old Will I Be in 2030?",
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
  { tag: "Predictions", title: "How Old Will I Be in 2040?", href: "/blog/how-old-will-i-be-in-2040/" },
  { tag: "Predictions", title: "How Old Will I Be in 2050?", href: "/blog/how-old-will-i-be-in-2050/" },
  { tag: "Milestones", title: "When Will I Be 1 Billion Seconds Old?", href: "/blog/when-will-i-be-1-billion-seconds-old/" },
  { tag: "Time Units", title: "How to Calculate Your Exact Age in Days", href: "/blog/how-to-calculate-age-in-days/" },
];

const HowOldWillIBeIn2030 = () => {
  useArticleMeta(meta);

  return (
    <ArticleShell>
      <BackToBlog />
      <h1 className="font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-4">How Old Will I Be in 2030?</h1>
      <ByLine publishedDate="2026-06-24" />
      <Lead>2030 is closer than it feels — just four years from now. By the time it arrives, the world will have shifted measurably in technology, climate, and demographics. But the most immediate question is personal: how old will you be?</Lead>
      <TLDR
        items={[
    "How to Calculate Your Age in 2030",
    "Age in 2030 by Birth Year — Complete Table",
    "What Milestone Ages Will 2030 Bring?",
    "What the World Might Look Like When You Get There",
    "Your Life in Numbers in 2030",
    "Plan Ahead: Your Age in Other Future Years",
        ]}
      />

      <Paragraph>The answer depends entirely on your birth year and the month of your birthday relative to whatever date in 2030 you're asking about. Here's everything you need to know.</Paragraph>

      <Figure
        src="https://images.unsplash.com/photo-1560390816-3400050aab0b?w=1200&q=75&auto=format&fit=crop"
        alt="A modern train gliding through a futuristic indoor station with lush greenery"
        credit={
          <>
            Photo by Peerapon Chantharainthron on{" "}
            <a href="https://unsplash.com/photos/train-near-trees-inside-building-with-indoor-waterfalls-kavu6S_qtYo" target="_blank" rel="noopener noreferrer" className="underline">
              Unsplash
            </a>
          </>
        }
      />

      <H2>How to Calculate Your Age in 2030</H2>
      <H3>The Formula</H3>
      <Paragraph><strong>Age in 2030 = 2030 − your birth year</strong></Paragraph>
      <Paragraph>Then adjust by 1:</Paragraph>
      <ul className="list-disc list-inside space-y-2 mb-5 text-foreground/90">
        <li><strong>If your birthday falls before or on the date in 2030 you're thinking about</strong> → use the result as-is</li>
        <li><strong>If your birthday falls after that date</strong> → subtract 1</li>
      </ul>
      <Paragraph>For example, someone born in <strong>1990</strong> will turn <strong>40</strong> in 2030. If their birthday is in March and you're asking about January 1, 2030, they'll still be 39 on that date. This subtraction method follows the standard <ExternalLink href="https://en.wikipedia.org/wiki/Gregorian_calendar">Gregorian calendar</ExternalLink>, the dating system used for these calculations.</Paragraph>

      <H2>Age in 2030 by Birth Year — Complete Table</H2>
      <Table
        headers={["Birth year", "Age in 2030"]}
        rows={[
          ["1950", "79–80"],
          ["1955", "74–75"],
          ["1960", "69–70"],
          ["1965", "64–65"],
          ["1970", "59–60"],
          ["1975", "54–55"],
          ["1980", "49–50"],
          ["1985", "44–45"],
          ["1990", "39–40"],
          ["1995", "34–35"],
          ["2000", "29–30"],
          ["2005", "24–25"],
          ["2010", "19–20"],
        ]}
      />

      <H2>What Milestone Ages Will 2030 Bring?</H2>
      <Paragraph>For millions of people, 2030 carries a round-number milestone:</Paragraph>
      <BulletList
        items={[
          <span key="1990"><strong>Born in 1990?</strong> You'll turn <strong>40</strong> in 2030 — the big one for most late millennials.</span>,
          <span key="1980"><strong>Born in 1980?</strong> You'll hit <strong>50</strong> — half a century.</span>,
          <span key="1970"><strong>Born in 1970?</strong> You'll reach <strong>60</strong>.</span>,
          <span key="2000"><strong>Born in 2000?</strong> You'll turn <strong>30</strong> — your first major decade marker.</span>,
          <span key="2010"><strong>Born in 2010?</strong> You'll turn <strong>20</strong> — crossing into adulthood.</span>,
        ]}
      />
      <Paragraph>2030 is a mathematically satisfying year for milestone birthdays because it's a round number in a round decade. Whatever age it brings you to, it's a natural moment for reflection and forward-planning.</Paragraph>

      <H2>What Might the World Look Like When You Get There?</H2>
      <Figure
        src="https://images.unsplash.com/photo-1452696193712-6cabf5103b63?w=1200&q=75&auto=format&fit=crop"
        alt="Glass skyscrapers reflecting a blue sky — the architecture of the near future"
        credit={
          <>
            Photo by drmakete lab on{" "}
            <a href="https://unsplash.com/photos/the-reflection-of-the-sky-in-the-glass-of-a-building-hsg538WrP0Y" target="_blank" rel="noopener noreferrer" className="underline">
              Unsplash
            </a>
          </>
        }
      />
      <Paragraph>2030 is a significant target year for a wide range of global initiatives:</Paragraph>
      <ul className="list-disc list-inside space-y-3 mb-5 text-foreground/90">
        <li><strong>UN Sustainable Development Goals:</strong> The <ExternalLink href="https://www.un.org/sustainabledevelopment/decade-of-action/">United Nations' 2030 Agenda</ExternalLink> set 2030 as the deadline for achieving 17 global goals covering poverty, climate, health, and education. How many will have been met will define much of the decade's legacy.</li>
        <li><strong>Climate targets:</strong> Most major economies have set <ExternalLink href="https://unfccc.int/process-and-meetings/the-paris-agreement">2030 emissions reduction targets</ExternalLink> as a crucial waypoint toward net-zero by 2050.</li>
        <li><strong>AI and automation:</strong> <ExternalLink href="https://www.mckinsey.com/featured-insights/future-of-work/the-future-of-work-after-covid-19">Economists at McKinsey estimate</ExternalLink> that by 2030, up to 30% of work tasks in some sectors could be automatable.</li>
        <li><strong>Electric vehicles:</strong> <ExternalLink href="https://www.iea.org/reports/global-ev-outlook-2023">The International Energy Agency projects</ExternalLink> that by 2030, EVs could make up a significant share of new car sales globally.</li>
      </ul>

      <H2>Your Life in Numbers in 2030</H2>
      <Paragraph>Whatever age you reach in 2030, here's what that will look like in alternative units — using 40 as an example (born in 1990):</Paragraph>
      <Table
        headers={["Unit", "Amount at age 40"]}
        rows={[
          ["Months", "~480 months"],
          ["Weeks", "~2,087 weeks"],
          ["Days", "~14,610 days"],
          ["Hours", "~350,640 hours"],
          ["Heartbeats", "~1.46 billion"],
          ["Full moons", "~496"],
        ]}
      />
      <Paragraph>Explore more: <Link to="/blog/how-many-weeks-old-am-i/" className="text-primary underline">How many weeks old are you?</Link> · <Link to="/blog/how-many-heartbeats-in-a-lifetime/" className="text-primary underline">How many heartbeats in a lifetime?</Link> · <Link to="/blog/how-many-full-moons-in-a-lifetime/" className="text-primary underline">How many full moons in a lifetime?</Link></Paragraph>

      <H2>Plan Ahead: Your Age in Other Future Years</H2>
      <Table
        headers={["Year", "Born 1985", "Born 1990", "Born 1995", "Born 2000", "Born 2005"]}
        rows={[
          ["2027", "41–42", "36–37", "31–32", "26–27", "21–22"],
          ["2030", "44–45", "39–40", "34–35", "29–30", "24–25"],
          ["2035", "49–50", "44–45", "39–40", "34–35", "29–30"],
          ["2040", "54–55", "49–50", "44–45", "39–40", "34–35"],
          ["2050", "64–65", "59–60", "54–55", "49–50", "44–45"],
        ]}
      />
      <Paragraph>→ See also: <Link to="/blog/how-old-will-i-be-in-2040/" className="text-primary underline">How old will I be in 2040?</Link> · <Link to="/blog/how-old-will-i-be-in-2050/" className="text-primary underline">How old will I be in 2050?</Link></Paragraph>

      <H2>Find Your Exact Age on Any Future Date</H2>
      <Paragraph>The table above gives your age for the full year. For a precise figure — your age on a specific date in 2030, down to days and hours — use the <Link to="/" className="text-primary underline">whatismyage.me calculator</Link>. Enter your date of birth and any future date to see exactly where you'll be.</Paragraph>
      <Paragraph>Also explore:</Paragraph>
      <ul className="list-disc list-inside space-y-2 mb-5 text-foreground/90">
        <li>🕰 <Link to="/blog/what-is-a-life-clock/" className="text-primary underline">What is a life clock?</Link></li>
        <li>👥 <Link to="/blog/what-generation-am-i/" className="text-primary underline">What generation are you?</Link></li>
        <li>📅 <Link to="/blog/how-to-calculate-age-in-days/" className="text-primary underline">How to calculate your age in days</Link></li>
      </ul>

      <CtaBox title="Find your exact age on any future date">Enter your date of birth at whatismyage.me — get your precise age in 2030, plus heartbeats, full moons, and shareable life card.</CtaBox>
      <AuthorBio
        name="Snehal Patel"
        bio="Snehal is a developer and data enthusiast from Mumbai who loves finding unexpected patterns in numbers. When not building calculators, they're probably wondering how many breaths they've taken so far. What Is My Age was born from a simple question: what does your age really mean?"
      />

      <RelatedPosts posts={related} />
      <BackToBlog />
    </ArticleShell>
  );
};

export default HowOldWillIBeIn2030;
