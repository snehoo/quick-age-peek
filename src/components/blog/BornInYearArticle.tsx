import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import {
  ArticleShell,
  BackToBlog,
  CtaBox,
  H2,
  H3,
  Lead,
  Paragraph,
  RelatedPosts,
} from "./ArticleLayout";
import { useArticleMeta } from "./articleMeta";

type ImageBlock = {
  src: string;
  alt: string;
  credit: ReactNode;
};

type Row = [string, string];

export type BornInYearProps = {
  year: number;
  preBirthdayAge: number;
  postBirthdayAge: number;
  slug: string;
  title: string;
  description: string;
  intro: ReactNode;
  topImage: ImageBlock;
  midImage?: ImageBlock;
  heartbeatImage?: ImageBlock;
  worldImage?: ImageBlock;
  daysLived: ReactNode;
  hoursMinutes: ReactNode;
  heartbeats: ReactNode;
  fullMoons: ReactNode;
  breaths: ReactNode;
  generation: ReactNode;
  worldIntro: ReactNode;
  worldEvents: ReactNode;
  worldOutro?: ReactNode;
  futureRows: Row[];
  futureNote?: ReactNode;
  planetRows: Row[];
  planetNote: ReactNode;
  lifeClock: ReactNode;
  finalNote: ReactNode;
  related: { tag: string; title: string; href: string }[];
};

const SimpleTable = ({ headers, rows }: { headers: [string, string]; rows: Row[] }) => (
  <div className="my-7 overflow-x-auto rounded-xl border border-border">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-primary text-primary-foreground">
          {headers.map((h) => (
            <th key={h} className="text-left font-semibold px-4 py-3">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(([a, b], i) => (
          <tr key={i} className="even:bg-secondary/40">
            <td className="px-4 py-3 border-t border-border text-foreground/90">{a}</td>
            <td className="px-4 py-3 border-t border-border text-foreground/90">{b}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Figure = ({ src, alt, credit }: ImageBlock) => (
  <figure className="my-7">
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full rounded-xl border border-border"
    />
    <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
      {credit}
    </figcaption>
  </figure>
);

export const BornInYearArticle = (p: BornInYearProps) => {
  const canonical = `https://whatismyage.me/blog/${p.slug}`;
  useArticleMeta({
    title: p.title,
    description: p.description,
    canonical,
    headline: p.title.replace(/ \| .+$/, ""),
  });

  return (
    <ArticleShell>
      <Link
        to="/blog"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        ← All posts
      </Link>

      <h1 className="font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-4">
        How Old Am I If I Was Born in {p.year}?
      </h1>

      <Figure {...p.topImage} />

      <Lead>{p.intro}</Lead>

      <H2>Your Age in 2026: The Quick Answer</H2>
      <SimpleTable
        headers={["If your birthday is…", "Your age in 2026"]}
        rows={[
          ["Before today's date", `${p.postBirthdayAge} years old`],
          ["After today's date", `${p.preBirthdayAge} years old`],
        ]}
      />
      <Paragraph>
        The formula is simple: <strong>2026 − {p.year} = {p.postBirthdayAge}</strong>, then
        subtract 1 if your birthday hasn't happened yet this year.
      </Paragraph>

      <H2>Your Life in Numbers</H2>
      {p.midImage && <Figure {...p.midImage} />}

      <H3>Days Lived</H3>
      <Paragraph>{p.daysLived}</Paragraph>

      <H3>Hours and Minutes</H3>
      <Paragraph>{p.hoursMinutes}</Paragraph>

      <H3>Heartbeats</H3>
      {p.heartbeatImage && <Figure {...p.heartbeatImage} />}
      <Paragraph>{p.heartbeats}</Paragraph>

      <H3>Full Moons</H3>
      <Paragraph>{p.fullMoons}</Paragraph>

      <H3>Breaths</H3>
      <Paragraph>{p.breaths}</Paragraph>

      <H2>What Generation Are You?</H2>
      {p.generation}

      <H2>The World You Were Born Into</H2>
      {p.worldImage && <Figure {...p.worldImage} />}
      <Paragraph>{p.worldIntro}</Paragraph>
      {p.worldEvents}
      {p.worldOutro && <Paragraph>{p.worldOutro}</Paragraph>}

      <H2>How Old Will You Be in the Future?</H2>
      <SimpleTable headers={["Year", "Your Age"]} rows={p.futureRows} />
      {p.futureNote && <Paragraph>{p.futureNote}</Paragraph>}

      <H2>Your Age on Other Planets</H2>
      <SimpleTable headers={["Planet", "Your Age"]} rows={p.planetRows} />
      <Paragraph>{p.planetNote}</Paragraph>

      <H2>Your Life Clock: Where Are You?</H2>
      <Paragraph>{p.lifeClock}</Paragraph>

      <H2>Calculate Your Exact Age</H2>
      <Paragraph>{p.finalNote}</Paragraph>

      <CtaBox title="See your exact age in numbers">
        Enter your date of birth at whatismyage.me to see your age in days, heartbeats, full moons,
        and more — calculated to this exact second.
      </CtaBox>

      <RelatedPosts posts={p.related} />

      <BackToBlog />
    </ArticleShell>
  );
};
