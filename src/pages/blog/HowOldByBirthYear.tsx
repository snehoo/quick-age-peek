import { Link } from "react-router-dom";
import {
  ArticleShell,
  ByLine,
  CtaBox,
  H2,
  Lead,
  Paragraph,
  RelatedPosts,
  TLDR,
} from "@/components/blog/ArticleLayout";
import { useArticleMeta } from "@/components/blog/articleMeta";
import { useFaqMeta } from "@/components/blog/faqMeta";

// One line of history per birth year. These carry over the year-specific
// content from the old one-page-per-year articles (retired 2026-10-12).
const HISTORY: Record<number, string> = {
  1985: "Live Aid played London and Philadelphia on the same day; the NES launched in the US.",
  1986: "The Space Shuttle Challenger was lost 73 seconds after launch; Chernobyl's reactor exploded.",
  1987: "Black Monday wiped 22.6% off the Dow in one day; Reagan said “tear down this wall”.",
  1988: "The Seoul Olympics; Stephen Hawking published A Brief History of Time.",
  1989: "The Berlin Wall fell; the World Wide Web was proposed at CERN.",
  1990: "Nelson Mandela walked free; the Hubble Space Telescope launched; Germany reunified.",
  1991: "The Soviet Union dissolved; the Web went public; Nirvana released Nevermind.",
  1992: "The Barcelona Olympics; the first text message was sent.",
  1993: "Jurassic Park showed what CGI could do; the World Trade Center was bombed for the first time.",
  1994: "Pulp Fiction, The Shawshank Redemption and The Lion King; South Africa's first democratic election.",
  1995: "Amazon opened to the public; Windows 95 launched.",
  1996: "Pew Research's last Millennial birth year.",
  1997: "Pew Research's first Gen Z birth year; Deep Blue beat Kasparov; the first Harry Potter book.",
  1998: "Google was founded on 4 September 1998, so you and Google are the same age.",
  1999: "The Y2K countdown; The Matrix; Napster.",
  2000: "The millennium year itself.",
  2001: "Wikipedia launched; the September 11 attacks.",
  2002: "Euro notes and coins went into circulation; Sam Raimi's Spider-Man.",
};

const FIRST_YEAR = 1960;
const LAST_YEAR = 2015;

const generation = (y: number) =>
  y >= 2013 ? "Gen Alpha" : y >= 1997 ? "Gen Z" : y >= 1981 ? "Millennial" : y >= 1965 ? "Gen X" : "Boomer";

const HowOldByBirthYear = () => {
  const now = new Date();
  const thisYear = now.getFullYear();
  const canonical = "https://whatismyage.me/blog/how-old-am-i-by-birth-year/";
  const title = `How Old Am I by Birth Year? Age Table for ${thisYear}`;
  const description = `Find your age in ${thisYear} from your birth year: a table for every year from ${FIRST_YEAR} to ${LAST_YEAR}, before and after your birthday, with your generation.`;

  useArticleMeta({
    title,
    description,
    canonical,
    headline: title,
    publishedDate: "2026-10-12",
  });
  useFaqMeta([
    {
      q: "How do I work out my age from my birth year?",
      a: `Subtract your birth year from ${thisYear}. If your birthday hasn't happened yet this year, subtract one more. Someone born in 1991 is ${thisYear - 1991} after their birthday and ${thisYear - 1991 - 1} before it.`,
    },
    {
      q: "How old am I if I was born in 2000?",
      a: `${thisYear - 2000} if your birthday has passed this year, ${thisYear - 2001} if it hasn't.`,
    },
    {
      q: "What generation am I by birth year?",
      a: "Using Pew Research's ranges: Gen X 1965–1980, Millennials 1981–1996, Gen Z 1997–2012, Gen Alpha 2013 onwards.",
    },
  ]);

  const years = [];
  for (let y = LAST_YEAR; y >= FIRST_YEAR; y--) years.push(y);

  return (
    <ArticleShell>
      <Link to="/blog/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        ← All posts
      </Link>
      <h1 className="font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-4">
        How Old Am I by Birth Year?
      </h1>
      <ByLine publishedDate="2026-10-12" />

      <Lead>
        Find your birth year in the table below. Your age in {thisYear} is the first number if your
        birthday has already passed this year, and the second if it's still coming. For your exact
        age in years, months and days, use the <Link to="/" className="underline">age calculator</Link>.
      </Lead>

      <TLDR
        items={[
          <>Age = {thisYear} − birth year, minus 1 if your birthday hasn't happened yet this year.</>,
          <>Born in 1990? You're {thisYear - 1990} after your birthday, {thisYear - 1991} before it.</>,
          <>Born in 2000? You're {thisYear - 2000} after your birthday, {thisYear - 2001} before it.</>,
        ]}
      />

      <H2>Age by birth year ({thisYear})</H2>
      <div className="my-7 overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              <th className="text-left font-semibold px-3 py-3">Born in</th>
              <th className="text-left font-semibold px-3 py-3">Birthday passed</th>
              <th className="text-left font-semibold px-3 py-3">Birthday to come</th>
              <th className="text-left font-semibold px-3 py-3">Generation</th>
              <th className="text-left font-semibold px-3 py-3 hidden sm:table-cell">That year</th>
            </tr>
          </thead>
          <tbody>
            {years.map((y) => (
              <tr key={y} id={`born-${y}`} className="even:bg-secondary/40 scroll-mt-24 target:bg-accent/30">
                <td className="px-3 py-2 border-t border-border font-semibold">{y}</td>
                <td className="px-3 py-2 border-t border-border">{thisYear - y}</td>
                <td className="px-3 py-2 border-t border-border">{thisYear - y - 1}</td>
                <td className="px-3 py-2 border-t border-border">{generation(y)}</td>
                <td className="px-3 py-2 border-t border-border text-foreground/80 hidden sm:table-cell">
                  {HISTORY[y] ?? ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2>Why your age can be one of two numbers</H2>
      <Paragraph>
        A birth year alone can't pin your age down to one number. Between 1 January and your
        birthday you're one year younger than {thisYear} minus your birth year; from your birthday
        to 31 December you're exactly that. That's why every row has two ages.
      </Paragraph>

      <H2>What happened the year you were born</H2>
      <Paragraph>
        For birth years 1985 to 2002, the last column of the table notes what else was happening
        that year. (On a phone, turn sideways to see it.) A few that people ask about most:
      </Paragraph>
      <ul className="list-disc pl-6 my-4 space-y-2 text-foreground/90">
        {[1989, 1991, 1998, 2000].map((y) => (
          <li key={y}>
            <strong>{y}:</strong> {HISTORY[y]}
          </li>
        ))}
      </ul>

      <CtaBox title="Want your exact age?">
        <Paragraph>
          The <Link to="/" className="underline">age calculator</Link> gives your age in years,
          months and days, and the <Link to="/blog/what-is-a-life-clock/" className="underline">life clock</Link>{" "}
          shows where you are in an average lifetime.
        </Paragraph>
      </CtaBox>

      <RelatedPosts
        posts={[
          { tag: "Milestones", title: "When will I be 1 billion seconds old?", href: "/blog/when-will-i-be-1-billion-seconds-old/" },
          { tag: "Age facts", title: "How many seconds old am I?", href: "/blog/how-many-seconds-old-am-i/" },
          { tag: "Birthdays", title: "How age and birthdays are distributed around the world", href: "/blog/how-age-and-birthdays-distribute-globally-statistics/" },
        ]}
      />
    </ArticleShell>
  );
};

export default HowOldByBirthYear;
