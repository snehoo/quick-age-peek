import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const BornIn1996 = () => (
  <BornInYearArticle
    year={1996}
    preBirthdayAge={29}
    postBirthdayAge={30}
    slug="how-old-am-i-if-i-was-born-in-1996"
    title="How Old Am I If I Was Born in 1996? | Age in 2026"
    description="Born in 1996? You're 29 or 30 in 2026. Discover your exact age in days, heartbeats, and full moons — plus the landmark year you entered the world."
    intro={
      <>
        If you were born in 1996, you are <strong>29 or 30 years old in 2026</strong> — 30 if
        your birthday has already passed this year, 29 if it's still ahead. Thirty is a milestone
        that tends to arrive with an unexpected weight. You happen to be the last birth year that
        Pew Research classifies as Millennial — the final chapter of one generation and the
        bridge to the next.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1614767464582-b23a647d835f?w=1200&q=75&auto=format&fit=crop",
      alt: "Silver flip phone on a sleek black background — late 90s style",
      credit: (
        <>
          Photo by Alp Duran on{" "}
          <a href="https://unsplash.com/photos/silver-flip-phone-on-black-background-ixieIvbyRHo" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
        </>
      ),
    }}
    heartbeatImage={{
      src: "https://images.unsplash.com/photo-1763336319374-9c46256c1fa0?w=1200&q=75&auto=format&fit=crop",
      alt: "Vintage boombox with radios on antique furniture — mid-90s vibes",
      credit: (
        <>
          Photo by Gustavo Alejandro Espinosa Reyes on{" "}
          <a href="https://unsplash.com/photos/vintage-boombox-and-radios-on-antique-furniture-YLOZQvD8GBE" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
        </>
      ),
    }}
    daysLived={
      <>
        At 30 years old, you've lived approximately <strong>10,958 days</strong> — nearly eleven
        thousand individual days of waking up and getting on with it.
      </>
    }
    hoursMinutes={
      <>
        <strong>~262,992 hours</strong> since birth and{" "}
        <strong>~15,779,520 minutes</strong> of life lived.
      </>
    }
    heartbeats={
      <>
        Your heart beats around 100,000 times every day. Over 30 years, that's approximately{" "}
        <strong>1.09 billion heartbeats</strong> — every one automatic, every one yours.
      </>
    }
    fullMoons={
      <>
        The lunar cycle takes 29.5 days. Since 1996, you've lived through approximately{" "}
        <strong>372 full moons</strong>.
      </>
    }
    breaths={
      <>
        At 15 breaths per minute across 30 years: roughly <strong>236 million breaths</strong>.
        Invisible. Automatic. Essential.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1996, you are the <strong>last Millennial</strong> — the final birth year in
          the generation as defined by Pew Research. Those born in 1997 onward are classified as
          Gen Z.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          You were 5 years old on September 11, 2001 — too young to process it, old enough to
          feel its presence in the years that followed. You had a childhood largely
          pre-social-media, but a full adolescence shaped by it. You may feel equally at home in
          Millennial and Gen Z cultural spaces — both generations claim you as their own.
        </p>
      </>
    }
    worldIntro="1996 was a year of genuine landmark moments. Here's what was happening when you arrived:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li><strong>Dolly the sheep cloned:</strong> On July 5, 1996, Dolly became the first mammal cloned from an adult somatic cell — a scientific milestone that rewrote our understanding of biology.</li>
        <li><strong>Nintendo 64 launched:</strong> The N64 launched in Japan in June 1996, bringing <em>Super Mario 64</em> — the first great 3D platformer — to millions of living rooms.</li>
        <li><strong>Atlanta Olympics:</strong> The 1996 Summer Games were held in Atlanta. Michael Johnson won both 200m and 400m gold.</li>
        <li><strong>Music:</strong> The Spice Girls released <em>Wannabe</em> in July 1996. Also: Celine Dion's <em>Because You Loved Me</em>, No Doubt's <em>Don't Speak</em>, 2Pac's <em>California Love</em>, Fugees' <em>Killing Me Softly</em>.</li>
        <li><strong>Film:</strong> <em>Mission: Impossible</em>, <em>Jerry Maguire</em>, <em>The English Patient</em>, <em>Trainspotting</em>, <em>Scream</em>, <em>Space Jam</em>, <em>Independence Day</em>.</li>
        <li><strong>Tech:</strong> Google's founders Larry Page and Sergey Brin began their research project — originally called <em>Backrub</em> — at Stanford in 1996.</li>
        <li><strong>Sport:</strong> Manchester United won the Premier League and FA Cup double. Germany won Euro 96. Damon Hill became F1 World Champion.</li>
      </ul>
    }
    futureRows={[
      ["2027", "30–31"],
      ["2030", "33–34"],
      ["2035", "38–39"],
      ["2040", "43–44"],
      ["2050", "53–54"],
      ["2060", "63–64"],
    ]}
    planetRows={[
      ["Mercury", "~124 Mercury years"],
      ["Venus", "~49 Venus years"],
      ["Mars", "~16 Mars years"],
      ["Jupiter", "~2.5 Jupiter years"],
      ["Saturn", "~1.02 Saturn years"],
    ]}
    planetNote="On Saturn you've just barely completed a single orbit — celebrating your 1st 'birthday' for the first time."
    lifeClock={
      <>
        On a 24-hour life clock, a 30-year-old (based on a global average life expectancy of ~73
        years) sits at approximately <strong>9:51 AM</strong>. Still morning. The full day ahead.
      </>
    }
    finalNote={
      <>
        These numbers are based on turning 30 in 2026. Your precise age — in days, hours,
        minutes, and heartbeats — depends on your specific birth date. Find it at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">whatismyage.me</a>.
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i" },
      { tag: "Astronomy", title: "How Many Full Moons in a Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime" },
      { tag: "Perspective", title: "What Is a Life Clock?", href: "/blog/what-is-a-life-clock" },
    ]}
  />
);

export default BornIn1996;
