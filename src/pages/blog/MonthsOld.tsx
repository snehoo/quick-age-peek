import { Link } from "react-router-dom";
import { CtaBox, Figure, H2, H3, Lead, Paragraph, AuthorBio,
  RelatedPosts, SimpleTable, UnitArticleShell, credit, ext } from "@/components/blog/UnitArticle";

const meta = {
  title: "How Many Months Old Am I? Calculate Your Age in Months | whatismyage.me",
  description: "Wondering how many months old you are? Get the formula, a quick reference table, and the fascinating reason months are one of the most meaningful ways to measure a human life.",
  canonical: "https://whatismyage.me/blog/how-many-months-old-am-i",
  headline: "How Many Months Old Am I?",
};

const MonthsOld = () => (
  <UnitArticleShell meta={meta} title="How Many Months Old Am I?">
    <Figure
      src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=75&auto=format&fit=crop"
      alt="A neatly laid out monthly calendar on a wooden desk"
      credit={credit("Behnam Norouzi", "https://unsplash.com/photos/white-and-black-weekly-planner-on-gray-surface-OHNZMnqXUsg")}
    />
    <Lead>
      When babies are young, everyone counts their age in months. At some point — usually around age 2 or 3 — we switch to years and never look back. But there's something interesting that happens when adults reclaim months as a unit of age.
    </Lead>
    <Paragraph>
      You are not simply "32 years old." You are somewhere around <strong>384 months old</strong> — nearly four hundred individual months of experience, each one distinct, each one gone.
    </Paragraph>

    <H2>How to Calculate Your Age in Months</H2>
    <H3>The Simple Formula</H3>
    <Paragraph><strong>Age in months = Age in years × 12</strong></Paragraph>
    <Paragraph>If you're 30 years old: 30 × 12 = <strong>360 months</strong>.</Paragraph>
    <H3>The Precise Method</H3>
    <Paragraph>For an exact count: count the complete years since your birth year, add the complete months since your last birthday, then add any remaining days as a fraction of a month. The fastest way is the <Link to="/" className="text-primary underline">whatismyage.me calculator</Link>.</Paragraph>

    <H2>Quick Reference: Your Age in Months</H2>
    <SimpleTable
      headers={["Age (years)", "Age in months"]}
      rows={[
        ["18", "216 months"],
        ["20", "240 months"],
        ["25", "300 months"],
        ["30", "360 months"],
        ["35", "420 months"],
        ["40", "480 months"],
        ["45", "540 months"],
        ["50", "600 months"],
        ["60", "720 months"],
        ["70", "840 months"],
      ]}
    />

    <H2>Why the Month Is One of Humanity's Oldest Units of Time</H2>
    <Figure
      src="https://images.unsplash.com/photo-1523251343397-9225e4cb6319?w=1200&q=75&auto=format&fit=crop"
      alt="A vintage hourglass with golden sand, soft and contemplative"
      credit={credit("Nathan Dumlao", "https://unsplash.com/photos/brown-and-blue-hourglass-on-stones-5Hl5reICevY")}
    />
    <Paragraph>
      The month is rooted in something real. The {ext("https://moon.nasa.gov/moon-in-motion/phases-eclipses-supermoons/moon-phases/", "lunar cycle")} takes approximately 29.5 days to complete. {ext("https://www.britannica.com/science/calendar/The-earliest-calendars", "Archaeological evidence")} suggests lunar calendars date back at least 30,000 years — making the month one of the oldest measuring tools in human history.
    </Paragraph>
    <Paragraph>
      According to {ext("https://www.nature.com/articles/s41562-022-01393-3", "research on psychological time")}, months sit at a unique point in our sense of time: short enough to feel recent, long enough to feel like genuine history.
    </Paragraph>

    <H2>Months as a Window Into Your Life</H2>
    <H3>How many months do you have left?</H3>
    <Paragraph>
      Based on {ext("https://www.who.int/data/gho/indicator-metadata-registry/imr-details/65", "WHO global life expectancy data")}, average life expectancy is approximately 73 years — or <strong>876 months</strong>. A 35-year-old (420 months) has approximately <strong>456 months</strong> remaining on that average.
    </Paragraph>
    <H3>What have you spent your months on?</H3>
    <Paragraph>If you're 40 years old (480 months): ~160 months asleep, ~100 months working, ~13 months eating, leaving ~200 months that were genuinely yours.</Paragraph>

    <H2>Milestone Month Numbers</H2>
    <SimpleTable
      headers={["Months", "Age"]}
      rows={[
        ["100 months", "8 years, 4 months"],
        ["200 months", "16 years, 8 months"],
        ["300 months", "25 years"],
        ["400 months", "33 years, 4 months"],
        ["500 months", "41 years, 8 months"],
        ["600 months", "50 years"],
        ["700 months", "58 years, 4 months"],
        ["800 months", "66 years, 8 months"],
      ]}
    />
    <Paragraph>The 300-month mark — arriving right at age 25 — is a quarter-century. Three hundred individual months of being alive.</Paragraph>

    <H2>Age in Months Across Different Units</H2>
    <SimpleTable
      headers={["Unit", "25 years", "35 years", "50 years"]}
      rows={[
        [<strong key="1">Months</strong>, <strong key="2">300</strong>, <strong key="3">420</strong>, <strong key="4">600</strong>],
        ["Weeks", "~1,305", "~1,827", "~2,609"],
        ["Days", "~9,131", "~12,784", "~18,263"],
        ["Hours", "~219,000", "~306,800", "~438,300"],
        ["Heartbeats", "~913 million", "~1.28 billion", "~1.83 billion"],
      ]}
    />
    <Paragraph>
      Explore: <Link to="/blog/how-many-weeks-old-am-i/" className="text-primary underline">weeks old</Link> · <Link to="/blog/how-to-calculate-age-in-days/" className="text-primary underline">days old</Link> · <Link to="/blog/how-many-seconds-old-am-i/" className="text-primary underline">seconds old</Link>
    </Paragraph>

    <CtaBox title="Find your exact age in months">
      Enter your date of birth at whatismyage.me and see your age in months, weeks, days, hours, and heartbeats — calculated precisely.
    </CtaBox>

    <AuthorBio

      name="Snehal Patel"

      bio="Snehal is a developer and data enthusiast from Mumbai who loves finding unexpected patterns in numbers. When not building calculators, they're probably wondering how many breaths they've taken so far. What Is My Age was born from a simple question: what does your age really mean?"

    />


    <RelatedPosts posts={[
      { tag: "How-to", title: "How to Calculate Your Age in Days", href: "/blog/how-to-calculate-age-in-days/" },
      { tag: "Time", title: "How Many Weeks Old Am I?", href: "/blog/how-many-weeks-old-am-i/" },
      { tag: "Numbers", title: "How Many Seconds Old Am I?", href: "/blog/how-many-seconds-old-am-i/" },
      { tag: "Astronomy", title: "How Many Full Moons in a Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime/" },
      { tag: "Time", title: "What Is a Life Clock?", href: "/blog/what-is-a-life-clock/" },
    ]} />
  </UnitArticleShell>
);

export default MonthsOld;
