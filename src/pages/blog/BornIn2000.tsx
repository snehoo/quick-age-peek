import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const BornIn2000 = () => (
  <BornInYearArticle
    year={2000}
    preBirthdayAge={25}
    postBirthdayAge={26}
    slug="how-old-am-i-if-i-was-born-in-2000"
    title="How Old Am I If I Was Born in 2000? | Age in 2026"
    description="Born in 2000? You're 25 or 26 in 2026. Find your exact age in days, heartbeats, and full moons — and explore what it means to be a true child of the new millennium."
    intro={
      <>
        If you were born in 2000, you are <strong>25 or 26 years old in 2026</strong> — 26 if
        your birthday has already passed this year, 25 if it's still ahead. There's something
        genuinely different about being born in the year 2000. You are a child of the new
        millennium — born at the exact moment the world held its breath waiting for clocks to
        tick over. You were the future arriving.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1626726092122-f5b2af39faf6?w=1200&q=75&auto=format&fit=crop",
      alt: "Black and silver candybar phone — the phone of the millennium era",
      credit: (
        <>
          Photo by Girl with red hat on{" "}
          <a href="https://unsplash.com/photos/black-and-silver-candybar-phone-ma2ur_ld0ko" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
        </>
      ),
    }}
    heartbeatImage={{
      src: "https://images.unsplash.com/photo-1614767464582-b23a647d835f?w=1200&q=75&auto=format&fit=crop",
      alt: "Silver flip phone on a black background — 2000s nostalgia",
      credit: (
        <>
          Photo by Alp Duran on{" "}
          <a href="https://unsplash.com/photos/silver-flip-phone-on-black-background-ixieIvbyRHo" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
        </>
      ),
    }}
    daysLived={
      <>
        At 26 years old, you've lived approximately <strong>9,497 days</strong>. Over nine
        thousand individual days — each one a page in a story still very much being written.
      </>
    }
    hoursMinutes={
      <>
        <strong>~227,928 hours</strong> since your first breath and{" "}
        <strong>~13,675,680 minutes</strong> of existence.
      </>
    }
    heartbeats={
      <>
        Your heart beats approximately 100,000 times a day per the American Heart Association.
        Over 26 years, that's roughly <strong>949 million heartbeats</strong> — closing in on a
        billion, every single one automatic.
      </>
    }
    fullMoons={
      <>
        The lunar cycle is 29.5 days. Since 2000, you've witnessed roughly{" "}
        <strong>322 full moons</strong> lighting up the night sky.
      </>
    }
    breaths={
      <>
        At 15 breaths per minute over 26 years: approximately{" "}
        <strong>204 million breaths</strong>. The first one announced you to the world.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 2000, you are <strong>Generation Z</strong> — and one of its most symbolically
          significant members, having been born in the year the millennium turned. You don't
          remember a time before the internet — it has always been the background of your life.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          You were 1 year old on September 11, 2001 — you have no memory of it, yet grew up in a
          world permanently shaped by it. You were 20 when COVID-19 arrived — right at the
          threshold of adult independence — and spent a formative period of your life in
          lockdown.
        </p>
      </>
    }
    worldIntro="2000 was a year that carried the weight of a new era. Here's what was happening when you arrived:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li><strong>Y2K — the anti-climax:</strong> The Y2K bug turned out to be largely a non-event. Systems held. The world didn't end.</li>
        <li><strong>Dot-com boom peaks:</strong> In March 2000, the NASDAQ Composite peaked at 5,048 — the height of the dot-com bubble — before crashing spectacularly.</li>
        <li><strong>US Presidential election:</strong> The 2000 US election between George W. Bush and Al Gore ended in a contested 36-day recount of Florida votes, ultimately decided by the Supreme Court.</li>
        <li><strong>Music:</strong> 'N Sync's <em>No Strings Attached</em> sold 2.4 million copies in its first week. Also: Eminem's <em>The Marshall Mathers LP</em>, Destiny's Child's <em>Say My Name</em>, Coldplay's debut <em>Parachutes</em>, Radiohead's <em>Kid A</em>.</li>
        <li><strong>Film:</strong> <em>Gladiator</em>, <em>Cast Away</em>, <em>Erin Brockovich</em>, <em>Billy Elliot</em>, <em>Requiem for a Dream</em>, <em>Almost Famous</em>, <em>Traffic</em>.</li>
        <li><strong>Sydney Olympics:</strong> The 2000 Summer Games are widely regarded as among the best organised in history. Cathy Freeman's 400m gold was iconic.</li>
        <li><strong>Tech:</strong> The PlayStation 2 launched in 2000, selling 155 million units over its lifetime.</li>
      </ul>
    }
    futureRows={[
      ["2027", "26–27"],
      ["2030", "29–30"],
      ["2035", "34–35"],
      ["2040", "39–40"],
      ["2050", "49–50"],
      ["2060", "59–60"],
    ]}
    futureNote="The 30 milestone arrives in 2030 — the year you turn the same number as the decade."
    planetRows={[
      ["Mercury", "~108 Mercury years"],
      ["Venus", "~42 Venus years"],
      ["Mars", "~14 Mars years"],
      ["Jupiter", "~2.2 Jupiter years"],
      ["Saturn", "~0.88 Saturn years"],
    ]}
    planetNote="On Saturn, you haven't yet completed a single trip around the sun. On Mercury, you'd be 108."
    lifeClock={
      <>
        On a 24-hour life clock — midnight at birth, midnight at the end of a full life — a
        26-year-old (based on a global average life expectancy of ~73 years) sits at
        approximately <strong>8:34 AM</strong>. Early morning. Everything still ahead.
      </>
    }
    finalNote={
      <>
        These numbers are based on turning 26 in 2026. Your precise age — in days, hours,
        minutes, and heartbeats — depends on your exact birthday. Find it at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">whatismyage.me</a>.
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i" },
      { tag: "Astronomy", title: "How Many Full Moons in a Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime" },
      { tag: "How-to", title: "How to Calculate Age in Days", href: "/blog/how-to-calculate-age-in-days" },
    ]}
  />
);

export default BornIn2000;
