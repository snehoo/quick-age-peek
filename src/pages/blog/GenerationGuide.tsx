import { Link } from "react-router-dom";
import { ArticleShell, BackToBlog, CtaBox, H2, H3, Lead, Paragraph, Quote, AuthorBio,
  RelatedPosts, ByLine,
  TLDR, BulletList, ExternalLink,
} from "@/components/blog/ArticleLayout";
import { useArticleMeta } from "@/components/blog/articleMeta";
import { useFaqMeta } from "@/components/blog/faqMeta";

const FAQ_ITEMS = [
  {
    q: "What generation am I if I was born in 1990?",
    a: "If you were born in 1990, you are a Millennial (Generation Y), defined as those born between 1981 and 1996. Millennials are the first generation to grow up with the internet and came of age around the 2008 financial crisis.",
  },
  {
    q: "Am I a Millennial or Gen Z?",
    a: "The boundary between Millennials and Gen Z is typically set at 1996–1997. Those born in 1996 or earlier are Millennials; those born in 1997 or later are Gen Z. People born right on the boundary (1995–1998) are sometimes called 'Zillennials' — a micro-generation with traits of both.",
  },
  {
    q: "What are the birth year ranges for each generation?",
    a: "Silent Generation: 1928–1945. Baby Boomers: 1946–1964. Generation X: 1965–1980. Millennials: 1981–1996. Generation Z: 1997–2012. Generation Alpha: 2013–present. These ranges vary slightly by source.",
  },
  {
    q: "What generation is someone born in 2000?",
    a: "Someone born in 2000 is Generation Z (Gen Z), born between 1997 and 2012. In 2025, they are 24–25 years old.",
  },
];

const meta = {
  title: "What Generation Am I? Complete Guide | whatismyage.me",
  description: "Find out which generation you belong to — Gen Z, Millennial, Gen X, Boomer — with birth year ranges, defining traits, and what makes each generation unique.",
  canonical: "https://whatismyage.me/blog/what-generation-am-i/",
  publishedDate: "2026-06-24",
  headline: "What Generation Am I? The Complete Birth Year Guide",
};

const generations = [
  ["Generation Alpha", "Born 2013–present · Under 12 in 2025", "The first generation born entirely into a world of smartphones and AI", "Gen Alpha is still forming. Furthermore, they are the children of older Millennials and younger Gen X parents. As a result, they are growing up with unprecedented access to technology from infancy. Additionally, they are the first generation for whom AI assistants are simply a normal part of childhood."],
  ["Generation Z (Gen Z)", "Born 1997–2012 · Ages 13–28 in 2025", "Digital natives who have never known a world without the internet", "Gen Z grew up with smartphones from childhood. Consequently, social media was their primary social arena from adolescence. Moreover, they are the most ethnically diverse generation in recorded history. Additionally, they came of age during climate anxiety, the COVID-19 pandemic, and significant political instability — events that have shaped a notably pragmatic and financially cautious worldview."],
  ["Millennials (Generation Y)", "Born 1981–1996 · Ages 29–44 in 2025", "The last generation to know life before the internet — and the first to live entirely online", "Millennials occupy a unique cultural position. They remember childhood before smartphones. However, they built their entire adult lives around digital technology. Furthermore, they entered the workforce during or immediately after the 2008 global financial crisis. Consequently, their relationship with homeownership, job security, and financial institutions was permanently altered. They are, additionally, the most formally educated generation in history."],
  ["Generation X", "Born 1965–1980 · Ages 45–60 in 2025", "The overlooked middle child — independent, self-reliant, sceptical of institutions", "Gen X is demographically smaller than the Boomers before them and Millennials after — which is partly why they are so frequently overlooked in generational discourse. Moreover, they grew up as latchkey kids, often home alone after school, which cultivated fierce self-reliance. Furthermore, they were the first generation to adopt the internet as adults, giving them a genuinely bicultural relationship with analogue and digital life."],
  ["Baby Boomers", "Born 1946–1964 · Ages 61–79 in 2025", "Born into post-war optimism, came of age during the greatest cultural revolution of the 20th century", "The Baby Boom refers to the dramatic spike in births following World War II. Subsequently, Boomers grew up during unprecedented Western economic expansion — an environment that shaped deep expectations of upward mobility and homeownership. Additionally, they came of age during the civil rights movement, the moon landings, and Woodstock. The dismissive \"OK Boomer\" label obscures the genuine complexity of a generation that produced both fierce progressives and committed conservatives."],
  ["Silent Generation", "Born 1928–1945 · Ages 80–97 in 2025", "Shaped by the Great Depression and World War II — resilient, cautious, quietly determined", "The Silent Generation grew up during extraordinary hardship. Moreover, they are the last generation to have lived a significant portion of their lives entirely without television. They are also, notably, the generation that produced many of the civil rights movement's most influential leaders — including Martin Luther King Jr. and John Lewis."],
];

const related = [
  { tag: "Philosophy", title: "What Is a Life Clock? Your Age as a 24-Hour Day Explained", href: "/blog/what-is-a-life-clock/" },
  { tag: "Science", title: "How Many Heartbeats in a Human Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime/" },
  { tag: "Astronomy", title: "How Many Full Moons Will You See in Your Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime/" },
  { tag: "How-to", title: "How to Calculate Your Exact Age in Days", href: "/blog/how-to-calculate-age-in-days/" },
];

const GenerationGuide = () => {
  useArticleMeta(meta);
  useFaqMeta(FAQ_ITEMS);

  return (
    <ArticleShell>
      <BackToBlog />
      <h1 className="font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-4">What Generation Am I? The Complete Birth Year Guide</h1>
      <ByLine publishedDate="2026-06-24" />
      <Lead>You have probably been called a Millennial or a Boomer in an argument online. However, do you actually know which generation you belong to — where the boundaries sit and what genuinely defines each one?</Lead>
      <TLDR
        items={[
    "What Generation Am I by Birth Year — The Complete Breakdown",
    "Am I a Millennial or Gen Z? The Zillennial Micro-Generation Explained",
    "Why Generational Labels Are Useful — and Where They Fail",
    "Generational Identity in India — A Different Historical Lens",
        ]}
      />

      <Paragraph>Generational labels are sociological shorthand. Moreover, they are imperfect tools — broad brushes applied to enormously diverse groups of people. Nevertheless, they capture something real: the shared historical events, economic conditions, and technologies that shape people born within the same window of time.</Paragraph>
      <H2>What Generation Am I Based on My Birth Year?</H2>
      <div className="space-y-4 my-7">
        {generations.map(([name, years, tagline, body]) => (
          <section key={name} className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-xl font-bold text-primary mb-1">{name}</h3>
            <div className="text-xs text-muted-foreground mb-2">{years}</div>
            <div className="text-sm italic text-foreground/75 mb-3">"{tagline}"</div>
            <p className="text-[15px] text-foreground/90 leading-relaxed">{body}</p>
          </section>
        ))}
      </div>
      <H2>Am I a Millennial or Gen Z? The Zillennial Micro-Generation Explained</H2>
      <Paragraph>If you were born between approximately 1993 and 1998, you may feel that neither Millennial nor Gen Z quite fits your experience. This borderline cohort is increasingly referred to as <strong>Zillennials</strong> — a term covered alongside the standard generational breakdown used by <ExternalLink href="https://www.pewresearch.org/">Pew Research Center</ExternalLink>. Specifically, they were old enough to experience childhood without a smartphone, yet young enough to have grown up with social media during their formative teenage years.</Paragraph>
      <Paragraph>Furthermore, Zillennials tend to share Millennial nostalgia for early internet culture alongside Gen Z fluency with modern platforms. As a result, many find that the Zillennial label captures their dual digital identity more accurately than either adjacent generation.</Paragraph>
      <H3>What other micro-generations are there?</H3>
      <Paragraph>Beyond the Zillennial cohort, a few other micro-generations are worth knowing:</Paragraph>
      <BulletList
        items={[
          <span key="jones"><strong>Generation Jones</strong> — people born between 1965 and 1969, named for the experience of being promised Boomer idealism but coming of age just as that optimism faded.</span>,
          <span key="beta"><strong>Generation Beta</strong> — those born after 2025, a label that has begun circulating even though the cultural contours of that cohort remain entirely undefined.</span>,
        ]}
      />
      <Paragraph>See <ExternalLink href="https://en.wikipedia.org/wiki/Generation">Wikipedia's overview of generational naming conventions</ExternalLink> for more on how these labels have evolved.</Paragraph>
      <H2>Why Generational Labels Are Useful — and Where They Fail</H2>
      <Paragraph>Generational labels work best as shorthand for shared economic contexts. For instance, a Millennial who grew up in rural Maharashtra and one who grew up in Manhattan both navigated the same post-2008 labour market. They adopted the same social media platforms. Moreover, they confronted the same global pandemic at the same life stage. The label captures those macro-level convergences even when individual experiences diverge dramatically.</Paragraph>
      <Quote>"Generations are not defined by birth years alone — they are defined by the events that marked their coming of age."</Quote>
      <Paragraph>Conversely, labels fail when applied as stereotypes. Not every Boomer owns property. Not every Millennial is financially struggling. Furthermore, generational identity intersects with class, geography, and culture in ways that simple birth-year brackets cannot capture.</Paragraph>
      <H2>Generational Identity in India — A Different Historical Lens</H2>
      <Paragraph>Western generational frameworks do not map cleanly onto the Indian experience. For instance, India's economic liberalisation of 1991 was a more significant cultural rupture for many Indians than any global event in the standard Western generational timeline. Indians born before 1985 grew up in a largely socialist, licence-raj economy. Consequently, consumer choice, private television, and global brands arrived as sudden, transformative forces rather than gradual background shifts.</Paragraph>
      <Paragraph>Additionally, the mobile internet revolution arrived in India later but accelerated faster — Jio's 2016 launch compressed a decade of digital adoption into two years. As a result, Indian Millennials and early Gen Z experienced a uniquely compressed version of the digital transition. Therefore, generational identity in India is arguably better defined by economic inflection points than by the cultural touchstones of the Western framework used by sources such as the <ExternalLink href="https://www.census.gov/">U.S. Census Bureau</ExternalLink>.</Paragraph>
      <Paragraph>To discover your generation alongside other personal life stats — <Link to="/blog/how-many-heartbeats-in-a-lifetime/" className="text-primary underline">heartbeat count</Link>, <Link to="/blog/how-many-full-moons-in-a-lifetime/" className="text-primary underline">full moons lived</Link>, and <Link to="/blog/what-is-a-life-clock/" className="text-primary underline">life clock time</Link> — use our calculator at whatismyage.me.</Paragraph>
      <CtaBox title="Discover your generation — and much more">Enter your date of birth to see your generational identity, heartbeat count, full moons, and personalised life card.</CtaBox>
      <AuthorBio
        name="Snehal Patel"
        bio="Snehal is a developer and data enthusiast from Mumbai who loves finding unexpected patterns in numbers. When not building calculators, they're probably wondering how many breaths they've taken so far. What Is My Age was born from a simple question: what does your age really mean?"
      />

      <RelatedPosts posts={related} />
      <BackToBlog />
    </ArticleShell>
  );
};

export default GenerationGuide;
