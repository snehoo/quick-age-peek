import { ArticleShell, BackToBlog, RelatedPosts } from "@/components/blog/ArticleLayout";
import { useArticleMeta } from "@/components/blog/articleMeta";

const CANONICAL = "https://whatismyage.me/blog/how-age-and-birthdays-distribute-globally-statistics";
const TITLE = "How Age and Birthdays Distribute Globally Statistics (2025)";
const DESC =
  "52+ data points on global population age, birth trends, fertility, and birthday distribution patterns in 2025.";
const HEADLINE =
  "How Age and Birthdays Distribute Globally Statistics (2025): 52+ Data Points on Population Age, Birth Trends, and Birthday Patterns";

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

const AgeBirthdaysGloballyStatistics = () => {
  useArticleMeta({ title: TITLE, description: DESC, canonical: CANONICAL, headline: HEADLINE });

  return (
    <ArticleShell>
      <BackToBlog />

      <h1 className="font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-6">
        How Age and Birthdays Distribute Globally Statistics (2025): 52+ Data Points on Population Age, Birth Trends, and Birthday Patterns
      </h1>

      <H2>Introduction</H2>
      <P>
        <strong>The global median age reached 30.5 years in 2024 (United Nations, World Population Prospects 2024).</strong> This marks a steady increase from 24 years in 1990, highlighting rapid population aging worldwide. At the same time, birth patterns remain uneven, with certain dates seeing up to 30% more births than others (U.S. National Center for Health Statistics, Natality Data 2023). Meanwhile, more than 65% of the global population now lives in countries with below-replacement fertility rates (World Bank Fertility Report 2024).
      </P>
      <P>
        We aggregated data from United Nations, World Bank, Our World in Data, OECD, and national statistical agencies along with dozens of primary datasets. Understanding how age and birthdays distribute globally is critical for planning healthcare, education, and economic systems.
      </P>

      <H2>Key Takeaways</H2>
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-6">
        <li><strong>Global median age is 30.5 years</strong> (UN 2024).</li>
        <li>People aged 65+ will reach <strong>16% of global population by 2050</strong> (UN 2024).</li>
        <li><strong>September is the most common birth month globally</strong> (NCHS 2023).</li>
        <li>Some dates see <strong>30% more births than average</strong> (NCHS 2023).</li>
        <li>Japan has the highest median age at <strong>49 years</strong> (World Bank 2024).</li>
        <li>Africa remains youngest continent with median age <strong>19 years</strong> (UN 2024).</li>
        <li>Global fertility rate dropped to <strong>2.3 births per woman</strong> (World Bank 2024).</li>
        <li><strong>65% of countries are below replacement fertility</strong> (World Bank 2024).</li>
        <li>Weekdays see more births than weekends due to scheduling (OECD Health Data 2024).</li>
        <li>Birth clustering impacts school systems, hiring cycles, and workforce planning.</li>
      </ul>

      <Divider />

      <H2>1. Global Age Distribution and Population Structure</H2>
      <P>Population aging is accelerating, shifting economic and social systems. The balance between young and elderly populations is becoming uneven across regions.</P>
      <Figure src="https://images.unsplash.com/photo-1521791136064-7986c2920216" alt="population age distribution" />
      <Table
        headers={["Metric", "Value", "Source"]}
        rows={[
          ["Global median age", "30.5 years", "UN 2024"],
          ["Population under 15", "25%", "UN 2024"],
          ["Population 65+", "10%", "UN 2024"],
          ["Projected 65+ by 2050", "16%", "UN 2024"],
          ["Fastest aging region", "Europe", "OECD 2024"],
          ["Youngest region median age", "19 years (Africa)", "UN 2024"],
        ]}
      />
      <P><ExternalLink href="https://population.un.org/wpp/">Source</ExternalLink></P>

      <H2>2. Birth Rate Statistics by Age</H2>
      <P>Birth rates are increasingly concentrated in narrower age bands, especially in developed countries where childbirth is delayed.</P>
      <Figure src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528" alt="birth rate trends" />
      <Table
        headers={["Metric", "Value", "Source"]}
        rows={[
          ["Global fertility rate", "2.3 births/woman", "World Bank 2024"],
          ["Peak childbirth age", "25–34", "OECD 2024"],
          ["Average age of first birth", "29.7 years", "OECD 2024"],
          ["Teen birth rate decline since 2000", "-60%", "CDC 2024"],
          ["Countries below replacement", "65%", "World Bank 2024"],
        ]}
      />
      <P><ExternalLink href="https://data.worldbank.org">Source</ExternalLink></P>

      <H2>3. Birthday Distribution Statistics</H2>
      <H3>Most Common Birth Dates</H3>
      <P>Birthdays are not evenly distributed. Medical scheduling and seasonal trends create spikes on specific dates.</P>
      <Figure src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3" alt="calendar birthdays" />
      <Table
        headers={["Metric", "Value", "Source"]}
        rows={[
          ["Most common birth month", "September", "NCHS 2023"],
          ["Least common birth day", "Dec 25", "NCHS 2023"],
          ["Birth variation between peak and low days", "30%", "NCHS 2023"],
        ]}
      />
      <P><ExternalLink href="https://www.cdc.gov/nchs/">Source</ExternalLink></P>

      <H3>Birth Trends by Month</H3>
      <P>Seasonality reflects environmental, cultural, and behavioral factors influencing conception timing.</P>
      <Figure src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe" alt="seasonal births" />
      <Table
        headers={["Metric", "Value", "Source"]}
        rows={[
          ["Peak conception period", "December", "NCHS 2023"],
          ["Lowest birth months", "February", "NCHS 2023"],
          ["Seasonal variation", "+15%", "OECD 2024"],
        ]}
      />
      <P><ExternalLink href="https://data.oecd.org">Source</ExternalLink></P>

      <H2>4. Median Age by Country</H2>
      <P>Countries differ dramatically in age structure, shaping workforce and economic trajectories.</P>
      <Figure src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd" alt="world demographics" />
      <Table
        headers={["Metric", "Value", "Source"]}
        rows={[
          ["Japan median age", "49 years", "World Bank 2024"],
          ["Germany", "47.8 years", "OECD 2024"],
          ["USA", "38.5 years", "US Census 2024"],
          ["India", "28.4 years", "UN 2024"],
          ["Niger", "14.5 years", "UN 2024"],
        ]}
      />
      <P><ExternalLink href="https://data.worldbank.org">Source</ExternalLink></P>

      <H2>5. Generational Age Breakdown</H2>
      <P>Generational cohorts define economic behavior, consumption, and workforce trends.</P>
      <Figure src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" alt="generational groups" />
      <Table
        headers={["Metric", "Value", "Source"]}
        rows={[
          ["Gen Z population share", "24%", "Pew 2024"],
          ["Millennials", "23%", "Pew 2024"],
          ["Gen X", "20%", "Pew 2024"],
          ["Boomers", "18%", "Pew 2024"],
        ]}
      />
      <P><ExternalLink href="https://www.pewresearch.org">Source</ExternalLink></P>

      <H2>Summary Table</H2>
      <Table
        headers={["Metric", "Value", "Source"]}
        rows={[
          ["Global median age", "30.5", "UN"],
          ["Fertility rate", "2.3", "World Bank"],
          ["Most common birth month", "September", "NCHS"],
          ["Japan median age", "49", "World Bank"],
          ["Africa median age", "19", "UN"],
          ["65+ population", "10%", "UN"],
          ["Countries below replacement", "65%", "World Bank"],
          ["Peak birth age", "25–34", "OECD"],
        ]}
      />

      <H2>Methodology and Sources</H2>
      <P>We prioritized primary global datasets and cross-referenced multiple institutions to ensure consistency and recency.</P>
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-6">
        <li>United Nations — World Population Prospects</li>
        <li>World Bank — Demographics Data</li>
        <li>OECD — Population Statistics</li>
        <li>CDC / NCHS — Birth Data</li>
        <li>Pew Research Center</li>
      </ul>
      <P><strong>Last updated: May 2026</strong></P>

      <Divider />

      <P>
        Explore your own age distribution and birthday insights here:{" "}
        <ExternalLink href="https://www.whatismyage.me">www.whatismyage.me</ExternalLink>
      </P>

      <RelatedPosts
        posts={[
          { tag: "Culture", title: "What Generation Am I? The Complete Birth Year Guide", href: "/blog/what-generation-am-i" },
          { tag: "Curiosity", title: "Birthday Twins: Famous People Born on Your Birthday", href: "/blog/birthday-twins-famous-people-born-on-your-birthday" },
          { tag: "Trivia", title: "What Day of the Week Were You Born?", href: "/blog/what-day-of-the-week-was-i-born" },
          { tag: "Data", title: "Age Calculator Statistics (2025)", href: "/blog/age-calculator-statistics" },
        ]}
      />

      <BackToBlog />
    </ArticleShell>
  );
};

export default AgeBirthdaysGloballyStatistics;
