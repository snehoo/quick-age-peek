import { Link } from "react-router-dom";
import { CtaBox, Figure, H2, Lead, Paragraph, AuthorBio,
  RelatedPosts, SimpleTable, UnitArticleShell, credit, ext } from "@/components/blog/UnitArticle";
import { BulletList } from "@/components/blog/ArticleLayout";

const meta = {
  title: "How Many Weeks Old Am I? Calculate Your Age in Weeks | whatismyage.me",
  description: "How many weeks old are you? Find out instantly — plus the formula, week milestones to look forward to, and why thinking in weeks changes how you see your life.",
  canonical: "https://whatismyage.me/blog/how-many-weeks-old-am-i",
  publishedDate: "2026-06-24",
  headline: "How Many Weeks Old Am I?",
};

const WeeksOld = () => (
  <UnitArticleShell meta={meta} title="How Many Weeks Old Am I?">
    <Figure
      src="https://images.unsplash.com/photo-1501139083538-0139583c060f?w=1200&q=75&auto=format&fit=crop"
      alt="A glowing hourglass with sand falling — the quiet passage of time"
      credit={credit("Aron Visuals", "https://unsplash.com/photos/selective-focus-photo-of-brown-and-blue-hourglass-on-stones-BXOXnQ26B7o")}
    />
    <Lead>
      Most of us think of our age in years. But years are coarse — a blunt tool for measuring something as textured as a human life. Weeks are different. A week is something you can actually feel.
    </Lead>
    <Paragraph>
      The answer is probably a bigger number than you expect. And it has a way of making life feel both longer and more immediate at the same time.
    </Paragraph>

    <H2>How to Calculate Your Age in Weeks</H2>
    <Paragraph><strong>Age in weeks = Age in years × 52.1775</strong></Paragraph>
    <Paragraph>The figure 52.1775 accounts for the average year including {ext("https://en.wikipedia.org/wiki/Leap_year", "leap years")} (365.25 ÷ 7). For a more precise count: total days lived ÷ 7.</Paragraph>

    <SimpleTable
      headers={["Age (years)", "Approximate weeks old"]}
      rows={[
        ["20", "~1,044 weeks"],
        ["25", "~1,305 weeks"],
        ["30", "~1,566 weeks"],
        ["35", "~1,827 weeks"],
        ["40", "~2,087 weeks"],
        ["45", "~2,348 weeks"],
        ["50", "~2,609 weeks"],
        ["60", "~3,131 weeks"],
        ["70", "~3,652 weeks"],
      ]}
    />

    <H2>Why Should You Think in Weeks?</H2>
    <Figure
      src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&q=75&auto=format&fit=crop"
      alt="A close-up of a vintage wall clock face with ornate numerals"
      credit={credit("Ocean Ng", "https://unsplash.com/photos/selective-focus-photography-of-wall-clock-L0xOtAnv94Y")}
    />
    <Paragraph>
      A year is abstract. A week — you know what 52 of those look like. When you realise you're roughly 1,800 weeks old (in your mid-30s), you start to think differently. A wasted week isn't just a blip in a year — it's one of the roughly 4,000 weeks {ext("https://en.wikipedia.org/wiki/Four_Thousand_Weeks", "the average person gets in a lifetime")}.
    </Paragraph>
    <Paragraph>
      This is the logic behind Tim Urban's famous {ext("https://waitbutwhy.com/2014/05/life-weeks.html", "Wait But Why post on life in weeks")}, which visualised an entire human life as a grid of 4,160 boxes. The weekly rhythm is one of the most psychologically natural units of time, deeply tied to how {ext("https://en.wikipedia.org/wiki/Autobiographical_memory", "autobiographical memory")} organizes a life into recognizable chunks.
    </Paragraph>

    <H2>Milestone Weeks to Look Forward To</H2>
    <SimpleTable
      headers={["Milestone", "Age when reached"]}
      rows={[
        ["500 weeks", "~9 years, 7 months"],
        ["1,000 weeks", "~19 years, 2 months"],
        ["1,500 weeks", "~28 years, 9 months"],
        ["2,000 weeks", "~38 years, 4 months"],
        ["2,500 weeks", "~47 years, 11 months"],
        ["3,000 weeks", "~57 years, 6 months"],
        ["3,500 weeks", "~67 years, 1 month"],
        ["4,000 weeks", "~76 years, 8 months"],
      ]}
    />
    <Paragraph>The 2,000 week mark — arriving in your late 30s — is a particularly striking one.</Paragraph>

    <H2>How Many Weeks Are in a Human Lifetime?</H2>
    <Paragraph>Based on {ext("https://www.who.int/data/gho/indicator-metadata-registry/imr-details/65", "WHO life expectancy data")}, a human lifetime contains roughly:</Paragraph>
    <BulletList
      items={[
        "~3,800 weeks at a 73-year lifespan",
        "~4,160 weeks at an 80-year lifespan",
        "~4,680 weeks at a 90-year lifespan",
      ]}
    />
    <Paragraph>Of a typical 80-year life, {ext("https://www.sleepfoundation.org/how-sleep-works/how-much-sleep-do-we-really-need", "sleep accounts for roughly a third")} — approximately 1,400 of those weeks. The remaining ~2,700 waking weeks are the ones you actually experience.</Paragraph>

    <H2>Age in Weeks vs Other Units</H2>
    <SimpleTable
      headers={["Unit", "30-year-old", "40-year-old", "50-year-old"]}
      rows={[
        ["Years", "30", "40", "50"],
        ["Months", "~360", "~480", "~600"],
        [<strong key="1">Weeks</strong>, <strong key="2">~1,566</strong>, <strong key="3">~2,087</strong>, <strong key="4">~2,609</strong>],
        ["Days", "~10,958", "~14,610", "~18,263"],
        ["Hours", "~263,000", "~350,000", "~438,000"],
      ]}
    />
    <Paragraph>
      See also: <Link to="/blog/how-to-calculate-age-in-days/" className="text-primary underline">days old</Link> · <Link to="/blog/how-many-seconds-old-am-i/" className="text-primary underline">seconds old</Link> · <Link to="/blog/how-many-heartbeats-in-a-lifetime/" className="text-primary underline">heartbeats in a lifetime</Link>
    </Paragraph>

    <CtaBox title="Find your exact week count">
      Enter your date of birth at the <Link to="/" className="underline">whatismyage.me age calculator</Link> and get your age in weeks, days, hours, minutes, and more.
    </CtaBox>

    <AuthorBio

      name="Snehal Patel"

      bio="Snehal is a developer and data enthusiast from Mumbai who loves finding unexpected patterns in numbers. When not building calculators, they're probably wondering how many breaths they've taken so far. What Is My Age was born from a simple question: what does your age really mean?"

    />

    <RelatedPosts posts={[
      { tag: "How-to", title: "How to Calculate Your Age in Days", href: "/blog/how-to-calculate-age-in-days/" },
      { tag: "Numbers", title: "How Many Seconds Old Am I?", href: "/blog/how-many-seconds-old-am-i/" },
      { tag: "Biology", title: "How Many Heartbeats in a Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime/" },
      { tag: "Astronomy", title: "How Many Full Moons in a Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime/" },
      { tag: "Time", title: "What Is a Life Clock?", href: "/blog/what-is-a-life-clock/" },
    ]} />
  </UnitArticleShell>
);

export default WeeksOld;
