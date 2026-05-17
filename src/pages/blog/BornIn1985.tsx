import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const credit = (name: string, url = "https://unsplash.com") => (
  <>
    Photo by {name} on{" "}
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
      Unsplash
    </a>
  </>
);

const BornIn1985 = () => (
  <BornInYearArticle
    year={1985}
    preBirthdayAge={40}
    postBirthdayAge={41}
    slug="how-old-am-i-if-i-was-born-in-1985"
    title="How Old Am I If I Was Born in 1985? | Age in 2026"
    description="Born in 1985? You're 40 or 41 in 2026 — a psychologically loaded number. Discover your age in days, heartbeats, and full moons, plus what made 1985 one of the most culturally electric years of the twentieth century."
    intro={
      <>
        If you were born in 1985, you are <strong>40 or 41 years old in 2026</strong> — 40 if your
        birthday is still ahead of you this year, 41 if it has already passed. Forty is one of
        those numbers that arrives with a strange gravitational pull: you know you are not old, but
        you also know the person you were at twenty would find the person you are now unrecognisably
        competent. You were born the year Live Aid shook two continents simultaneously, the year
        Nintendo landed in American living rooms and rescued an entire industry, and the year Marty
        McFly taught a generation that even the past is worth going back to. Four decades later,
        here you are — and the maths of your life are far more interesting than a single number.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1559734251985-6f63bafb6afc?w=1200&q=75&auto=format&fit=crop",
      alt: "Retro vinyl record player with warm amber lighting, evocative of mid-1980s culture",
      credit: credit("blocks"),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1523906834658-5e12e02bf1e6?w=1200&q=75&auto=format&fit=crop",
      alt: "Close-up of a cassette tape, a defining object of 1980s childhood",
      credit: credit("Daniel Schludi"),
    }}
    daysLived={
      <>
        At 41 years old, you have lived approximately <strong>14,975 days</strong> — at 40, roughly{" "}
        <strong>14,610 days</strong>. Nearly 15,000 individual mornings. Some of them you remember
        with crystalline clarity. Most of them you don&apos;t, because the brain is an editor, not a
        tape recorder. The days that actually shaped you are still in there, organised in ways you
        will never fully audit.
      </>
    }
    hoursMinutes={
      <>
        Forty-one years works out to approximately <strong>359,160 hours</strong> and{" "}
        <strong>21,549,600 minutes</strong> of being alive. That number climbs by 1,440 minutes
        every day, regardless of what you do with them.
      </>
    }
    heartbeats={
      <>
        The resting heart beats around 100,000 times per day. Over 41 years, that is approximately{" "}
        <strong>1.5 billion heartbeats</strong> — each one automatic, each one keeping everything
        else possible. Your heart started beating about three weeks after conception, before you had
        a name or a birthday, and it has not paused since.
      </>
    }
    fullMoons={
      <>
        The lunar cycle takes 29.5 days to complete. Since 1985, the full moon has risen
        approximately <strong>499 times</strong>. Ancient calendars were built around that rhythm.
        Your life has unfolded against it, whether or not you ever looked up.
      </>
    }
    breaths={
      <>
        At a resting rate of 15 breaths per minute, you have taken roughly{" "}
        <strong>323 million breaths</strong> since birth. The first one announced you to the room.
        The rest arrived quietly, tens of thousands of times each day, without you ever having to
        remember them.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1985, you occupy a genuinely interesting generational position. Pew Research places
          Millennials between 1981 and 1996, which puts you firmly inside that cohort — but 1985
          babies sit in the &quot;elder Millennial&quot; band, and many feel the gravitational pull
          of Gen X equally strongly. You had a childhood almost entirely free of social media, a
          teenager&apos;s introduction to the internet via dial-up connections that sounded like a
          fax machine arguing with itself, and a twenties defined by the slow normalisation of
          smartphones. You grew up renting VHS tapes from Blockbuster on Friday evenings. You also
          built your adult social life on Facebook before migrating to Instagram before quietly muting
          most of it in your late thirties.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          In 2026, you are 40 or 41, and the statistics on what that means are genuinely
          encouraging. Earnings tend to peak in the early-to-mid forties for most professions. If
          you had children in your late twenties, they are teenagers now, which is its own demanding
          category. If you bought a house before 2020, you are sitting on equity that would have
          seemed implausible to your 25-year-old self. If you are still renting, you are far from
          alone: the 1985 cohort graduated university around 2007, directly into the jaw of the
          global financial crisis, which compressed this generation&apos;s ability to save a
          deposit by several years and left a lasting mark on their relationship with economic
          security.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          The other thing that tends to arrive around 40 is the &quot;sandwich generation&quot;
          reality: your parents are typically in their mid-to-late 60s or 70s now, and depending on
          their health, you may find yourself providing support upwards at the same time as raising
          children downward. Research consistently finds that people in their forties report higher
          life satisfaction than they expected — the existential turbulence of the thirties tends to
          settle into something quieter and more solid. The things you used to be anxious about, you
          either fixed or stopped caring about. Both count.
        </p>
      </>
    }
    worldIntro="Here is what was happening in the world when you arrived in 1985:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>Live Aid, July 13:</strong> Bob Geldof and Midge Ure organised simultaneous
          concerts at Wembley Stadium in London and JFK Stadium in Philadelphia. An estimated 1.9
          billion viewers in 150 countries watched. The event raised approximately $127 million for
          Ethiopian famine relief — a number that would have been inconceivable for a single day of
          charity concerts before. Queen&apos;s 20-minute Wembley set is still cited as the
          greatest live rock performance in history. Full context at{" "}
          <a
            href="https://www.history.com/this-day-in-history/live-aid-concert-raises-money-for-african-famine"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            History.com
          </a>
          .
        </li>
        <li>
          <strong>Nintendo Entertainment System, October 18:</strong> After the 1983 video game
          market crash had nearly killed the industry — Atari had lost $536 million in a single year
          — Nintendo launched the NES across North America with Super Mario Bros. bundled in. It
          sold 61.91 million units over its commercial lifespan and reset what consumers expected
          from interactive entertainment.
        </li>
        <li>
          <strong>Back to the Future, July 3:</strong> Directed by Robert Zemeckis and starring
          Michael J. Fox, the film grossed $381 million globally and became the highest-earning movie
          of 1985. It was still the #1 film in North America seven weeks after opening. Forty years
          on, it is in regular rotation on streaming services.
        </li>
        <li>
          <strong>Windows 1.0, November 20:</strong> Microsoft shipped its first graphical operating
          environment. Critics were underwhelmed — it ran slowly on hardware of the era and offered
          limited functionality. No one in 1985 imagined it would eventually power the computers of
          more than a billion people.
        </li>
        <li>
          <strong>New Coke, April 23:</strong> Coca-Cola reformulated its 99-year-old recipe after
          taste tests suggested consumers preferred a sweeter drink. The public reaction was one of
          the most comprehensively misjudged brand decisions in corporate history. Thousands of angry
          calls flooded Coca-Cola&apos;s hotline daily. Within 77 days, Coca-Cola Classic was back
          on shelves. Market research had simply failed to account for what the original Coke
          meant to people emotionally.
        </li>
        <li>
          <strong>Titanic discovered, September 1:</strong> Oceanographer Robert Ballard located the
          wreck of RMS Titanic on the floor of the North Atlantic, 73 years after it sank. The
          discovery at 3,800 metres depth was made using a remotely operated vehicle called Argo. The
          find transfixed the world and eventually inspired James Cameron&apos;s 1997 film.
        </li>
        <li>
          <strong>Boris Becker, Wimbledon, age 17:</strong> The West German teenager became the
          youngest men&apos;s singles champion in Wimbledon history — a record that still stands in
          2026. Also in the charts that year: &quot;We Are the World,&quot; Tears for Fears&apos;
          &quot;Shout,&quot; Madonna&apos;s &quot;Material Girl,&quot; and Bruce Springsteen&apos;s
          Born in the USA tour, which filled stadiums all summer.
        </li>
      </ul>
    }
    worldOutro={
      <>
        You were born at a specific cultural hinge point: after colour television but before the
        internet, after the personal computer but before it became small enough to carry in a pocket.
        The technologies that now define everyday life were either brand-new toys or had not yet been
        imagined. That gives you a particular vantage point — old enough to remember what came
        before, young enough to have adapted to what followed without too much friction.
      </>
    }
    futureRows={[
      ["2027", "41–42"],
      ["2030", "44–45"],
      ["2035", "49–50"],
      ["2040", "54–55"],
      ["2050", "64–65"],
      ["2060", "74–75"],
    ]}
    futureNote={
      <>
        The 50th birthday arrives in 2035 — still nine years away. The 60s begin in 2045. Plenty of
        time between here and there.
      </>
    }
    planetRows={[
      ["Mercury", "~170 Mercury years (88 days per orbit)"],
      ["Venus", "~67 Venus years (225 days per orbit)"],
      ["Mars", "~21 Mars years (687 days per orbit)"],
      ["Jupiter", "~3.4 Jupiter years (12 Earth years per orbit)"],
      ["Saturn", "~1.4 Saturn years (29.5 Earth years per orbit)"],
    ]}
    planetNote={
      <>
        On Saturn, you have completed barely one and a half full orbits of the sun. On Mercury, you
        would be approaching 170. The planet you were born on seems, under the circumstances, to
        have timed things reasonably well.
      </>
    }
    lifeClock={
      <>
        Map a full human life onto a 24-hour clock — midnight at birth, midnight at the average life
        expectancy of 79 years — and a 41-year-old lands at approximately{" "}
        <strong>12:26 PM</strong>. Just past noon. The morning is behind you. The afternoon is
        entirely intact. Most people find the afternoon is the best part.
      </>
    }
    finalNote={
      <>
        The calculations above use 41 as the base age. Your precise count — in days, hours, minutes,
        heartbeats, and full moons — depends on your exact date of birth. Put it into{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me
        </a>{" "}
        and get your specific number, calculated to today.
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i" },
      {
        tag: "Biology",
        title: "How Many Heartbeats in a Lifetime?",
        href: "/blog/how-many-heartbeats-in-a-lifetime",
      },
      {
        tag: "Astronomy",
        title: "How Many Full Moons in a Lifetime?",
        href: "/blog/how-many-full-moons-in-a-lifetime",
      },
      { tag: "Perspective", title: "What Is a Life Clock?", href: "/blog/what-is-a-life-clock" },
    ]}
  />
);

export default BornIn1985;
