import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const credit = (name: string, url = "https://unsplash.com") => (
  <>
    Photo by {name} on{" "}
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
      Unsplash
    </a>
  </>
);

const BornIn1993 = () => (
  <BornInYearArticle
    year={1993}
    preBirthdayAge={32}
    postBirthdayAge={33}
    slug="how-old-am-i-if-i-was-born-in-1993"
    title="How Old Am I If I Was Born in 1993? | Age in 2026"
    description="Born in 1993? You're 32 or 33 in 2026. See your age in days, heartbeats, and full moons — and revisit the remarkable world that welcomed you."
    intro={
      <>
        If you were born in 1993, you are <strong>32 or 33 years old in 2026</strong> — 33 if your
        birthday has already passed this year, 32 if it's still coming. You were born in the
        middle of a decade that had genuine confidence in the future. The Cold War was over. The
        internet was becoming real. The early 90s had a specific texture: Saturday morning
        cartoons, mixtapes, and the slow dawning awareness that everything was about to change.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1764014353572-bcdfce164b73?w=1200&q=75&auto=format&fit=crop",
      alt: "Man holding a vintage boombox with headphones around his neck",
      credit: credit("Shoham Avisrur", "https://unsplash.com/photos/man-holding-a-vintage-boombox-with-headphones-around-neck-T8n9Zs3Hxlw"),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1763525398166-9879d1bbd4f3?w=1200&q=75&auto=format&fit=crop",
      alt: "A vintage Panasonic cassette player resting on tiled floor",
      credit: credit("Robert | Visual Diary", "https://unsplash.com/photos/a-black-panasonic-portable-cassette-player-sits-on-tiled-floor-4F3a4lgCmJw"),
    }}
    daysLived={
      <>
        At 33 years old, you've lived approximately <strong>12,054 days</strong>. Over twelve
        thousand individual days — each one different from the last, even when they didn't feel
        that way.
      </>
    }
    hoursMinutes={
      <>
        <strong>~289,296 hours</strong> since your first breath, and{" "}
        <strong>~17,357,760 minutes</strong> of life so far.
      </>
    }
    heartbeats={
      <>
        Your heart beats approximately{" "}
        <a
          href="https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          100,000 times a day
        </a>
        , according to the American Heart Association. Over 33 years, that's roughly{" "}
        <strong>1.20 billion heartbeats</strong>.
      </>
    }
    fullMoons={
      <>
        The moon completes its cycle every{" "}
        <a
          href="https://moon.nasa.gov/moon-in-motion/phases-eclipses-supermoons/moon-phases/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          29.5 days
        </a>
        . Since 1993, you've witnessed roughly <strong>421 full moons</strong> rise overhead.
      </>
    }
    breaths={
      <>
        At 15 breaths per minute over 33 years: approximately <strong>259 million breaths</strong>.
        Your first announced you to the world. Every one since has kept you in it.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1993, you are a <strong>Millennial</strong> — on the younger end of the cohort.
          According to{" "}
          <a
            href="https://www.pewresearch.org/social-trends/2019/01/17/where-millennials-end-and-generation-z-begins/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Pew Research
          </a>
          , Millennials were born between 1981 and 1996. You were 8 on 9/11.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          The{" "}
          <a
            href="https://www.imf.org/en/Publications/WP/Issues/2016/12/31/The-Global-Financial-Crisis-and-the-Developing-World-Impact-and-Response-23665"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            2008 financial crisis
          </a>{" "}
          hit when you were 15 — shaping how your generation thinks about job security and home
          ownership in ways still playing out today.
        </p>
      </>
    }
    worldIntro="1993 was a year of landmark events, messy politics, and extraordinary culture:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>The Oslo Accords:</strong> On{" "}
          <a
            href="https://www.history.com/this-day-in-history/rabin-and-arafat-shake-hands"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            September 13, 1993
          </a>
          , Rabin and Arafat signed a historic peace agreement on the White House lawn.
        </li>
        <li>
          <strong>World Trade Center bombing:</strong> A truck bomb exploded in the North Tower's
          underground garage on February 26.
        </li>
        <li>
          <strong>The graphical web is born:</strong> NCSA Mosaic — the first graphical web browser
          — was released in 1993.
        </li>
        <li>
          <strong>Music:</strong> Whitney Houston's <em>I Will Always Love You</em>, Snoop Dogg's{" "}
          <em>Doggystyle</em>, Björk's <em>Debut</em>, Radiohead's <em>Pablo Honey</em>.
        </li>
        <li>
          <strong>Film:</strong> Spielberg directed both <em>Schindler's List</em> and{" "}
          <em>Jurassic Park</em>. Also: <em>The Fugitive</em>, <em>Groundhog Day</em>.
        </li>
        <li>
          <strong>World:</strong> Mandela and de Klerk jointly won the{" "}
          <a
            href="https://www.nobelprize.org/prizes/peace/1993/summary/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Nobel Peace Prize
          </a>
          .
        </li>
      </ul>
    }
    futureRows={[
      ["2027", "33–34"],
      ["2030", "36–37"],
      ["2035", "41–42"],
      ["2040", "46–47"],
      ["2050", "56–57"],
    ]}
    planetRows={[
      ["Mercury", "~137 Mercury years"],
      ["Venus", "~53 Venus years"],
      ["Mars", "~17 Mars years"],
      ["Jupiter", "~2.8 Jupiter years"],
      ["Saturn", "~1.1 Saturn years"],
    ]}
    planetNote="On Saturn, you haven't even celebrated your second birthday. On Mercury, you'd be 137."
    lifeClock={
      <>
        On a 24-hour life clock — midnight at birth, midnight at the end of a full life — a
        33-year-old (based on a{" "}
        <a
          href="https://www.who.int/data/gho/indicator-metadata-registry/imr-details/65"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          global average life expectancy of ~73 years
        </a>
        ) sits at approximately <strong>10:51 AM</strong>. Still firmly morning.
      </>
    }
    finalNote={
      <>
        These numbers are based on turning 33 in 2026. Find your precise age — in days, hours,
        minutes, and heartbeats — at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me
        </a>
        .
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i" },
      { tag: "Trivia", title: "What Day of the Week Were You Born?", href: "/blog/what-day-of-the-week-was-i-born" },
      { tag: "Astrology", title: "How to Find Your Zodiac Sign by Birth Date", href: "/blog/how-to-find-your-zodiac-sign-by-birth-date" },
      { tag: "Culture", title: "Birthday Twins: Famous People Born on Your Birthday", href: "/blog/birthday-twins-famous-people-born-on-your-birthday" },
    ]}
  />
);

export default BornIn1993;
