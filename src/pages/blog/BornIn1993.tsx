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
    description="Born in 1993? You're 32 or 33 in 2026. See your age in days, heartbeats, and full moons — and revisit the remarkable, sometimes frightening year that welcomed you into the world."
    intro={
      <>
        If you were born in 1993, you are <strong>32 or 33 years old in 2026</strong> — 33 if your
        birthday has already passed this year, 32 if it's still coming. You were born the year
        Jurassic Park showed the world what CGI could do, the year Schindler's List made Spielberg
        cry on set, and the year the World Trade Center was bombed for the first time — 8 years
        before most people had heard of Al-Qaeda. The early 90s had a specific texture: genuine
        optimism, dial-up internet arriving like a rumour, and the slow dawning sense that
        everything was about to change in ways nobody could quite articulate yet. You grew up in
        exactly that gap.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?w=1200&q=75&auto=format&fit=crop",
      alt: "Abstract technological concept with colourful light patterns — early internet era",
      credit: credit(
        "Rodion Kutsaiev",
        "https://unsplash.com/photos/abstract-tech-concept-with-colorful-lights-0VGG7cqTwCo"
      ),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=75&auto=format&fit=crop",
      alt: "Mountain landscape at golden hour — the outdoors optimism of the early 90s",
      credit: credit(
        "Sven Scheuermeier",
        "https://unsplash.com/photos/mountain-landscape-golden-hour-2zDXqgTzEFE"
      ),
    }}
    daysLived={
      <>
        At 33 years old, you've lived approximately <strong>12,054 days</strong>. Over twelve
        thousand individual days — each one different from the last, even the ones that felt
        identical. You've changed significantly since day one. So has the world.
      </>
    }
    hoursMinutes={
      <>
        <strong>~289,296 hours</strong> since your first breath, and{" "}
        <strong>~17,357,760 minutes</strong> of life lived so far. To state the obvious: you've
        spent roughly a third of those hours asleep, which is exactly the right decision.
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
        <strong>1.20 billion heartbeats</strong>. It ran during every exam, every argument, every
        ordinary Tuesday. It never once asked for acknowledgement.
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
        . Since 1993, you've witnessed roughly <strong>421 full moons</strong> rise overhead —
        each one the same ancient light, each one over a completely different version of your life.
      </>
    }
    breaths={
      <>
        At 15 breaths per minute over 33 years: approximately <strong>259 million breaths</strong>.
        Your first one announced you to the room. Every one since has kept you in it, quietly,
        without ceremony.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1993, you're on the younger end of the <strong>Millennial generation</strong>{" "}
          (1981–1996 per{" "}
          <a
            href="https://www.pewresearch.org/social-trends/2019/01/17/where-millennials-end-and-generation-z-begins/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Pew Research
          </a>
          ), but you're not quite Gen Z either — you remember a world before smartphones, even if
          only just. You were 8 on September 11, 2001. Old enough to know something terrible had
          happened; young enough that it arrived as adult fear filtering through to a child's world.
          The{" "}
          <a
            href="https://www.investopedia.com/articles/economics/09/financial-crisis-review.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            2008 financial crisis
          </a>{" "}
          hit when you were 15 — shaping your entire generation's relationship with job security,
          homeownership, and institutions in ways still very much playing out.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          You entered the workforce around 2015–2016, just as the gig economy was peaking and
          permanent jobs were quietly becoming rarer. Student loan debt is a defining financial
          reality for this cohort: the average US borrower your age owes approximately{" "}
          <a
            href="https://studentaid.gov/data-center/student/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            $33,000
          </a>
          , and that number shapes everything from housing decisions to retirement savings in ways
          that don't show up cleanly in any single statistic.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          At 32–33 in 2026, the early 30s carry a particular psychological quality. If the 20s are
          largely about figuring out who you are, the 30s tend to be about accepting it — and
          deciding what to do with that. Many people your age are at a genuine fork: stay on the
          current path, or make a pivot while the window still feels open. The pandemic hit at
          26–27, right when a lot of things were crystallising. Its effects on how your generation
          thinks about work, place, and ambition are still unfolding.
        </p>
      </>
    }
    worldIntro="1993 was a year of landmark events, messy politics, and extraordinary culture. Here's what the world looked like when you arrived:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>World Trade Center bombed (February 26):</strong>{" "}
          <a
            href="https://www.fbi.gov/history/famous-cases/world-trade-center-bombing-1993"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            A truck bomb in the North Tower's parking garage
          </a>{" "}
          killed 6 and injured over 1,000. This was 8 years before 9/11. The towers had already
          been a target once before you were old enough to walk.
        </li>
        <li>
          <strong>Bill Clinton inaugurated (January 20):</strong> The first Baby Boomer president
          — who had famously played saxophone on The Arsenio Hall Show during the campaign — took
          office. His administration would preside over the longest peacetime economic expansion
          in US history.
        </li>
        <li>
          <strong>Mandela and de Klerk win Nobel Peace Prize (October):</strong> Jointly awarded
          for their work negotiating the end of apartheid in South Africa. The first democratic
          elections would follow in April 1994.
        </li>
        <li>
          <strong>Jurassic Park opened (June 11):</strong> The first film to use CGI dinosaurs
          convincingly, it grossed $914 million worldwide and permanently changed what audiences
          expected from blockbusters. Spielberg also released <em>Schindler's List</em> the same
          year — winning 7 Oscars and declining his director's fee on principle.
        </li>
        <li>
          <strong>The graphical web is born:</strong> NCSA Mosaic — the first graphical web browser —
          was released in 1993, making the internet accessible to anyone who didn't want to type
          commands. The White House got its first website and email address the same year.
        </li>
        <li>
          <strong>Music:</strong> Nirvana's <em>In Utero</em>, Pearl Jam at their commercial peak,
          debut albums from Radiohead (<em>Pablo Honey</em>), Björk (<em>Debut</em>), and
          Wu-Tang Clan (<em>Enter the Wu-Tang: 36 Chambers</em>) — one of the most consequential
          single years in rock and hip-hop simultaneously.
        </li>
        <li>
          <strong>NAFTA signed (December 8):</strong> Clinton signed the North American Free Trade
          Agreement into law, creating the world's largest free trade zone between the US, Canada,
          and Mexico. Its effects on manufacturing and labour would be debated for the next three
          decades.
        </li>
      </ul>
    }
    worldOutro="You were born into a year that felt, in many ways, like the beginning of something. The Cold War was over, the internet was becoming real, and the future seemed navigable. Your generation has spent its 30s learning that navigable and easy aren't the same thing — and getting on with it anyway."
    futureRows={[
      ["2027", "33–34"],
      ["2030", "36–37"],
      ["2035", "41–42"],
      ["2040", "46–47"],
      ["2050", "56–57"],
      ["2060", "66–67"],
    ]}
    futureNote="You hit 40 in 2033 — a decade away, which is both a long time and not very long at all."
    planetRows={[
      ["Mercury", "~137 Mercury years"],
      ["Venus", "~53 Venus years"],
      ["Mars", "~17 Mars years"],
      ["Jupiter", "~2.8 Jupiter years"],
      ["Saturn", "~1.1 Saturn years"],
    ]}
    planetNote="On Saturn you haven't quite finished your second orbit of the sun. On Mercury you'd be 137. The universe has no consistent opinion on how old you are."
    lifeClock={
      <>
        On a 24-hour life clock — midnight at birth, midnight at the end of a{" "}
        <a
          href="https://www.who.int/data/gho/indicator-metadata-registry/imr-details/65"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          full life expectancy
        </a>{" "}
        — a 33-year-old (based on ~79 years average) sits at approximately{" "}
        <strong>10:01 AM</strong>. Still firmly morning. The afternoon hasn't even started.
      </>
    }
    finalNote={
      <>
        These numbers are based on turning 33 in 2026. Your precise age — in days, hours, minutes,
        and heartbeats — is tied to your exact birthday. Find it at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me
        </a>
        .
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i/" },
      { tag: "Trivia", title: "What Day of the Week Were You Born?", href: "/blog/what-day-of-the-week-was-i-born/" },
      { tag: "Astrology", title: "How to Find Your Zodiac Sign by Birth Date", href: "/blog/how-to-find-your-zodiac-sign-by-birth-date/" },
      { tag: "Culture", title: "Birthday Twins: Famous People Born on Your Birthday", href: "/blog/birthday-twins-famous-people-born-on-your-birthday/" },
    ]}
  />
);

export default BornIn1993;
