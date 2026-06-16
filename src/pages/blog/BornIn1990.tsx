import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const credit = (name: string, url = "https://unsplash.com") => (
  <>
    Photo by {name} on{" "}
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
      Unsplash
    </a>
  </>
);

const BornIn1990 = () => (
  <BornInYearArticle
    year={1990}
    preBirthdayAge={35}
    postBirthdayAge={36}
    slug="how-old-am-i-if-i-was-born-in-1990"
    title="How Old Am I If I Was Born in 1990? | Age in 2026"
    description="Born in 1990? You're 35 or 36 in 2026. Find your exact age in days, heartbeats, and full moons — plus the world-changing year you were born into."
    intro={
      <>
        If you were born in 1990, you are <strong>35 or 36 years old in 2026</strong> — 36 if your
        birthday has already passed this year, 35 if it's still ahead. You came into the world at
        an extraordinary hinge moment. The{" "}
        <a
          href="https://www.britannica.com/event/Cold-War"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Cold War
        </a>{" "}
        was ending. Nelson Mandela walked free after 27 years. The Hubble Space Telescope launched.
        Germany reunified after 41 years of division.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1763336319374-9c46256c1fa0?w=1200&q=75&auto=format&fit=crop",
      alt: "Vintage boombox and radios arranged on antique furniture",
      credit: credit(
        "Gustavo Alejandro Espinosa Reyes",
        "https://unsplash.com/photos/vintage-boombox-and-radios-on-antique-furniture-YLOZQvD8GBE"
      ),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1776490878540-3788d5f87391?w=1200&q=75&auto=format&fit=crop",
      alt: "A white Game Boy with colourful neon lighting — pure 90s nostalgia",
      credit: credit(
        "Dmitry Spravko",
        "https://unsplash.com/photos/a-white-nintendo-game-boy-with-colorful-lighting-ed_A3LZDmTk"
      ),
    }}
    daysLived={
      <>
        At 36 years old, you've lived approximately <strong>13,149 days</strong>. That's over
        thirteen thousand individual sunrises — each one a new page.
      </>
    }
    hoursMinutes={
      <>
        <strong>~315,576 hours</strong> since your first breath, and{" "}
        <strong>~18,934,560 minutes</strong> of conscious existence.
      </>
    }
    heartbeats={
      <>
        Your heart beats roughly{" "}
        <a
          href="https://www.health.harvard.edu/heart-health/resting-heart-rate-can-reflect-current-future-health"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          100,000 times per day
        </a>
        . Over 36 years, that's approximately <strong>1.31 billion heartbeats</strong> — each one
        automatic, every one keeping you here.
      </>
    }
    fullMoons={
      <>
        The moon completes its cycle every 29.5 days. Since 1990, you've witnessed approximately{" "}
        <strong>450 full moons</strong> rising overhead.
      </>
    }
    breaths={
      <>
        At a resting rate of 15 breaths per minute, you've taken around{" "}
        <strong>283 million breaths</strong> since birth. Your first was the most important thing
        you've ever done.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1990, you are a <strong>Millennial</strong> — part of the cohort born roughly
          1981–1996, the most studied generation in modern history. You were 11 years old on
          September 11, 2001. You grew up with dial-up internet giving way to broadband, MSN
          Messenger giving way to Facebook, and flip phones giving way to the iPhone (launched
          when you were 17).
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          According to{" "}
          <a
            href="https://www.pewresearch.org/social-trends/2019/01/17/where-millennials-end-and-generation-z-begins/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Pew Research
          </a>
          , Millennials are the most educated generation in US history — and also among the most
          financially squeezed. You and the World Wide Web are essentially the same age: Tim
          Berners-Lee submitted his proposal for the web in March 1990.
        </p>
      </>
    }
    worldIntro="1990 was a year that rewrote the map. Here's what was happening:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>Nelson Mandela freed:</strong> On{" "}
          <a
            href="https://www.history.com/this-day-in-history/mandela-is-freed"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            February 11, 1990
          </a>
          , after 27 years in prison, Mandela walked free.
        </li>
        <li>
          <strong>German reunification:</strong> On October 3, East and West Germany officially
          unified after 41 years of division.
        </li>
        <li>
          <strong>Hubble Space Telescope:</strong> Launched April 24 aboard the Space Shuttle
          Discovery — reshaping our understanding of the{" "}
          <a
            href="https://www.nasa.gov/mission/hubble-space-telescope/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            observable universe
          </a>
          .
        </li>
        <li>
          <strong>Music:</strong> MC Hammer's <em>U Can't Touch This</em>, Madonna's <em>Vogue</em>,
          Sinéad O'Connor's <em>Nothing Compares 2 U</em> all topped charts.
        </li>
        <li>
          <strong>Film:</strong> <em>Home Alone</em>, <em>Pretty Woman</em>, <em>Ghost</em>,{" "}
          <em>Goodfellas</em>, <em>Edward Scissorhands</em> all released.
        </li>
        <li>
          <strong>Sport:</strong> West Germany won the FIFA World Cup in Italy. Roger Federer was
          born in August 1990.
        </li>
      </ul>
    }
    futureRows={[
      ["2027", "36–37"],
      ["2030", "39–40"],
      ["2035", "44–45"],
      ["2040", "49–50"],
      ["2050", "59–60"],
    ]}
    futureNote="The big 40 lands in 2030 — a milestone year in a milestone year."
    planetRows={[
      ["Mercury", "~149 Mercury years"],
      ["Venus", "~58 Venus years"],
      ["Mars", "~19 Mars years"],
      ["Jupiter", "~3 Jupiter years"],
      ["Saturn", "~1.2 Saturn years"],
    ]}
    planetNote="On Saturn, you haven't completed your second orbit of the sun. On Mercury, you'd be ancient."
    lifeClock={
      <>
        On a 24-hour life clock — midnight at birth, midnight again at the end of a{" "}
        <a
          href="https://www.who.int/data/gho/indicator-metadata-registry/imr-details/65"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          full life expectancy
        </a>{" "}
        — a 36-year-old (based on ~79 years average) sits at approximately <strong>10:57 AM</strong>.
        Still before noon. The whole afternoon ahead.
      </>
    }
    finalNote={
      <>
        The figures above are based on turning 36 in 2026. Your precise age depends on your exact
        birthday — find it all at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me
        </a>
        .
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i/" },
      { tag: "Biology", title: "How Many Heartbeats in a Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime/" },
      { tag: "Astronomy", title: "How Many Full Moons in a Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime/" },
      { tag: "Time", title: "What Is a Life Clock?", href: "/blog/what-is-a-life-clock/" },
    ]}
  />
);

export default BornIn1990;
