import { ArticleShell, BackToBlog, AuthorBio,
  RelatedPosts } from "@/components/blog/ArticleLayout";
import { useArticleMeta } from "@/components/blog/articleMeta";

const CANONICAL = "https://whatismyage.me/blog/how-different-age-groups-behave-online-statistics";
const TITLE = "How Different Age Groups Behave Online Statistics (2025)";
const DESC =
  "55+ data points on Gen Z, Millennials, screen time, mobile usage, and digital habits across age groups in 2025.";
const HEADLINE =
  "How Different Age Groups Behave Online Statistics (2025): 55+ Data Points on Gen Z, Screen Time, and Digital Habits";

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
    {children}
  </a>
);

const Figure = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} loading="lazy" className="w-full rounded-xl border border-border my-6" />
);

const Divider = () => <hr className="my-10 border-border" />;

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-display text-2xl text-foreground mt-10 mb-3">{children}</h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-display text-xl text-foreground mt-7 mb-2">{children}</h3>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">{children}</p>
);

const Table = ({ headers, rows }: { headers: string[]; rows: React.ReactNode[][] }) => (
  <div className="my-6 overflow-x-auto rounded-xl border border-border">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-secondary/60">
          {headers.map((h) => (
            <th key={h} className="text-left font-semibold px-4 py-3 text-foreground">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="even:bg-secondary/30">
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-3 border-t border-border text-foreground/90">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const AgeGroupsOnlineStatistics = () => {
  useArticleMeta({ title: TITLE, description: DESC, canonical: CANONICAL, headline: HEADLINE });

  return (
    <ArticleShell>
      <BackToBlog />

      <h1 className="font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-6">
        How Different Age Groups Behave Online Statistics (2025): 55+ Data Points on Gen Z, Screen Time, and Digital Habits
      </h1>

      <H2>Introduction</H2>
      <P>
        <strong>Gen Z spends an average of 7 hours per day online excluding school or work (Statista Digital Consumer Report 2024).</strong> Millennials follow closely at 6.5 hours, while older generations show significantly lower engagement levels. At the same time, over 95% of people aged 18–29 use the internet daily compared to just 61% of those over 65 (Pew Research Center Internet Survey 2024). Meanwhile, mobile devices now account for more than 58% of total global web traffic (DataReportal Digital Report 2025).
      </P>
      <P>
        We aggregated data from Pew Research Center, Statista, DataReportal, OECD, and global digital usage reports. Understanding digital behavior by age group is critical for marketers, product builders, and anyone designing for modern attention spans.
      </P>

      <H2>Key Takeaways</H2>
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-6">
        <li><strong>Gen Z spends ~7 hours daily online</strong> (Statista 2024).</li>
        <li>Millennials average <strong>6.5 hours of screen time</strong> (Statista 2024).</li>
        <li><strong>95% of ages 18–29 use internet daily</strong> (Pew 2024).</li>
        <li>Only <strong>61% of 65+ use internet daily</strong> (Pew 2024).</li>
        <li><strong>58% of global traffic is mobile</strong> (DataReportal 2025).</li>
        <li>Gen Z prefers video-first platforms (YouTube, TikTok dominance) (DataReportal 2025).</li>
        <li>Millennials dominate e-commerce spending globally (McKinsey 2024).</li>
        <li>Average global screen time exceeds <strong>6 hours/day</strong> (DataReportal 2025).</li>
        <li>Social media usage peaks at ages 18–34 (Pew 2024).</li>
        <li>Older users show fastest growth in digital adoption (OECD 2024).</li>
      </ul>

      <Divider />

      <H2>1. Internet Usage by Age Group</H2>
      <P>Internet adoption is nearly universal among younger populations but still varies significantly with age, especially in frequency and usage depth.</P>
      <Figure src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80" alt="internet usage by age" />
      <Table
        headers={["Metric", "Value", "Source"]}
        rows={[
          ["Ages 18–29 daily usage", "95%", "Pew 2024"],
          ["Ages 30–49", "90%", "Pew 2024"],
          ["Ages 50–64", "83%", "Pew 2024"],
          ["Ages 65+", "61%", "Pew 2024"],
          ["Global internet penetration", "67%", "ITU 2024"],
        ]}
      />
      <P><ExternalLink href="https://www.pewresearch.org/internet/">Source</ExternalLink></P>

      <H2>2. Screen Time by Age Group</H2>
      <P>Screen time varies widely by generation, with younger users consuming significantly more digital content daily.</P>
      <Figure src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1600&q=80" alt="screen time mobile usage" />
      <Table
        headers={["Metric", "Value", "Source"]}
        rows={[
          ["Gen Z screen time", "7+ hours/day", "Statista 2024"],
          ["Millennials", "6.5 hours/day", "Statista 2024"],
          ["Gen X", "5 hours/day", "Statista 2024"],
          ["Baby Boomers", "3.5 hours/day", "Statista 2024"],
          ["Global average", "6 hours/day", "DataReportal 2025"],
        ]}
      />
      <P><ExternalLink href="https://datareportal.com">Source</ExternalLink></P>

      <H2>3. Social Media Usage by Age</H2>
      <H3>Platform Preferences</H3>
      <P>Different generations favor distinct platforms, shaping content formats and marketing strategies.</P>
      <Figure src="https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=1600&q=80" alt="social media platforms" />
      <Table
        headers={["Metric", "Value", "Source"]}
        rows={[
          ["Gen Z using TikTok", "67%", "Pew 2024"],
          ["Millennials using Instagram", "71%", "Statista 2024"],
          ["Facebook dominance (65+)", "72%", "Pew 2024"],
          ["YouTube usage (all ages)", "85%", "Pew 2024"],
        ]}
      />
      <P><ExternalLink href="https://www.pewresearch.org">Source</ExternalLink></P>

      <H3>Time Spent on Social Media</H3>
      <P>Time spent reflects not just usage, but content consumption patterns and platform design.</P>
      <Figure src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80" alt="social media usage time" />
      <Table
        headers={["Metric", "Value", "Source"]}
        rows={[
          ["Gen Z social media time", "2.5–3 hours/day", "Statista 2024"],
          ["Millennials", "2 hours/day", "Statista 2024"],
          ["Global average", "2h 23m/day", "DataReportal 2025"],
        ]}
      />
      <P><ExternalLink href="https://datareportal.com">Source</ExternalLink></P>

      <H2>4. Mobile Usage Demographics</H2>
      <P>Mobile devices dominate digital behavior, especially among younger users.</P>
      <Figure src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80" alt="mobile usage" />
      <Table
        headers={["Metric", "Value", "Source"]}
        rows={[
          ["Mobile traffic share", "58%", "DataReportal 2025"],
          ["Gen Z mobile-first users", "75%", "Statista 2024"],
          ["Millennials mobile share", "68%", "Statista 2024"],
          ["Desktop usage decline", "-20% (5 yrs)", "Statista 2024"],
        ]}
      />
      <P><ExternalLink href="https://datareportal.com">Source</ExternalLink></P>

      <H2>5. Generational Digital Behavior Trends</H2>
      <P>Each generation interacts with technology differently, shaping long-term digital trends.</P>
      <Figure src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80" alt="digital behavior trends" />
      <Table
        headers={["Metric", "Value", "Source"]}
        rows={[
          ["Gen Z prefers video content", "80%", "HubSpot 2024"],
          ["Millennials prefer reviews", "70%", "McKinsey 2024"],
          ["Gen X email usage", "85%", "Statista 2024"],
          ["Boomers digital adoption growth", "+25%", "OECD 2024"],
        ]}
      />
      <P><ExternalLink href="https://www.mckinsey.com">Source</ExternalLink></P>

      <H2>Summary Table</H2>
      <Table
        headers={["Metric", "Value", "Source"]}
        rows={[
          ["Gen Z screen time", "7h", "Statista"],
          ["Millennials screen time", "6.5h", "Statista"],
          ["Mobile traffic", "58%", "DataReportal"],
          ["Gen Z TikTok usage", "67%", "Pew"],
          ["YouTube reach", "85%", "Pew"],
          ["Global internet use", "67%", "ITU"],
          ["65+ internet usage", "61%", "Pew"],
          ["Global screen time", "6h", "DataReportal"],
        ]}
      />

      <H2>Methodology and Sources</H2>
      <P>We prioritized primary digital usage datasets and cross-referenced multiple global research institutions for accuracy.</P>
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-6">
        <li>Pew Research Center — Internet &amp; Social Media Reports</li>
        <li>Statista — Digital Consumer Reports</li>
        <li>DataReportal — Global Digital Reports</li>
        <li>OECD — Technology Adoption Data</li>
        <li>McKinsey — Consumer Trends</li>
        <li>ITU — Global Internet Statistics</li>
      </ul>
      <P><strong>Last updated: May 2026</strong></P>

      <Divider />

      <P>
        Explore your own age-based digital and life insights here:{" "}
        <ExternalLink href="https://www.whatismyage.me">www.whatismyage.me</ExternalLink>
      </P>

      <AuthorBio

        name="Snehal Patel"

        bio="Snehal is a developer and data enthusiast from Mumbai who loves finding unexpected patterns in numbers. When not building calculators, they're probably wondering how many breaths they've taken so far. What Is My Age was born from a simple question: what does your age really mean?"

      />


      <RelatedPosts
        posts={[
          { tag: "Data", title: "Age Calculator Statistics (2025)", href: "/blog/age-calculator-statistics" },
          { tag: "Culture", title: "What Generation Am I? The Complete Birth Year Guide", href: "/blog/what-generation-am-i" },
          { tag: "How-to", title: "How to Calculate Your Exact Age in Days", href: "/blog/how-to-calculate-age-in-days" },
          { tag: "Science", title: "How Many Seconds Old Are You Right Now?", href: "/blog/how-many-seconds-old-am-i" },
        ]}
      />

      <BackToBlog />
    </ArticleShell>
  );
};

export default AgeGroupsOnlineStatistics;
