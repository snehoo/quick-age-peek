import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const credit = (name: string, url = "https://unsplash.com") => (
  <>
    Photo by {name} on{" "}
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
      Unsplash
    </a>
  </>
);

const BornIn1986 = () => (
  <BornInYearArticle
    year={1986}
    preBirthdayAge={39}
    postBirthdayAge={40}
    slug="how-old-am-i-if-i-was-born-in-1986"
    title="How Old Am I If I Was Born in 1986? | Age in 2026"
    description="Born in 1986? You're 39 or 40 in 2026 — right at one of life's most psychologically weighted birthdays. Discover your age in days, heartbeats, and full moons, and revisit the year Challenger fell, Chernobyl burned, and Maradona used his hand."
    intro={
      <>
        If you were born in 1986, you are <strong>39 or 40 years old in 2026</strong> — 39 if your
        birthday is still to come this year, 40 if it has already passed. Turning 40 carries a
        cultural charge that almost no other birthday does: people whisper the number in the months
        before it arrives, plan surprise parties, and spend a surprising amount of quiet time
        turning it over. You were born the year the Space Shuttle Challenger broke apart 73 seconds
        after launch, the year Chernobyl reactor number four exploded, and the year Top Gun made
        aviator sunglasses non-negotiable. The world you arrived in was tense, spectacular, and
        utterly unprepared for what was coming next.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=75&auto=format&fit=crop",
      alt: "Vintage green-screen computer monitor glowing in a dark room — early personal computing era",
      credit: credit("Markus Spiske"),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=75&auto=format&fit=crop",
      alt: "Retro arcade machine with colourful screen lighting, 1980s gaming culture",
      credit: credit("Mika Baumeister"),
    }}
    daysLived={
      <>
        At 40 years old you have lived approximately <strong>14,610 days</strong>, and at 39
        roughly <strong>14,245 days</strong>. Fourteen thousand-plus mornings of coffee or tea,
        alarm clocks, commutes, decisions about what to eat — most of them unremarkable, all of
        them yours. Each one moved you forward whether you intended it to or not.
      </>
    }
    hoursMinutes={
      <>
        Forty years converts to roughly <strong>350,640 hours</strong> and approximately{" "}
        <strong>21,038,400 minutes</strong> of existence. Time that has gone into work, sleep,
        meals, conversations, waiting rooms, and at least a few dozen hours of television you would
        not admit to enjoying but found inexplicably comforting.
      </>
    }
    heartbeats={
      <>
        The resting heart beats around 70 times per minute — roughly 100,000 times a day. Over 40
        years, that is approximately <strong>1.46 billion heartbeats</strong>. Each one fired
        without instruction, beginning in the fifth week after conception, and continuing without
        interruption through every fever, sprint, and sleepless night since the day you were born.
      </>
    }
    fullMoons={
      <>
        Since 1986, the moon has completed its 29.5-day cycle approximately{" "}
        <strong>487 times</strong>. Sailors used to navigate by it. Farmers planted by it. You have
        probably photographed it badly on a phone at least a dozen times, and the photos never quite
        capture it, and you took them anyway.
      </>
    }
    breaths={
      <>
        Breathing 15 times per minute over 40 years adds up to roughly{" "}
        <strong>315 million breaths</strong>. The first one announced you to the room. The rest
        arrived invisibly, tens of thousands of times per day, an automatic system running in the
        background of everything else you have ever done.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1986, you sit right on the generational cusp between Gen X and Millennial — and
          where you land often depends more on personality than birth year. Pew Research places Gen X
          at 1965–1980, which technically puts 1986 in the Millennial band. But 1985–1988 babies
          frequently identify with Gen X sensibilities as much as Millennial ones: a certain irony as
          default setting, a pre-internet childhood that felt genuinely different from what came
          after, and a mild allergic reaction to earnestness. You owned a Nokia before you owned a
          smartphone. You remember what it felt like to not be reachable. That is not a small thing.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          In 2026, you are 39 or 40, and the biography of your generation contains two major
          economic shocks that are worth naming. The 2008 financial crisis hit you at 21 or 22 —
          either finishing university or taking your first steps into a job market that suddenly had
          no floor. It compressed your early career by roughly three to five years compared to the
          cohort immediately ahead of you: the people who got their foot in the door before 2007 were
          safe; many of you were not. Then COVID arrived when you were 33 or 34, mid-career, possibly
          mid-mortgage, possibly mid-family-building, and reshuffled everything again. Two major
          economic disruptions in 15 years goes a long way to explaining why the financial position
          of this cohort varies so widely from person to person.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          What 40 actually feels like, for most people who have passed through it, is less dramatic
          than its reputation. The anxiety tends to be in the approach rather than the arrival. The
          decade itself typically brings a clearer sense of what you actually want — less time
          performing confidence, more time spent on things that genuinely hold your attention. Many
          people who passed 40 recently describe it as the first decade where they stopped measuring
          themselves against an imagined version of what their life was supposed to look like by now.
          That is worth something.
        </p>
      </>
    }
    worldIntro="1986 was one of the most dramatic years of the Cold War era. Here is what defined it:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>Space Shuttle Challenger, January 28:</strong> Seventy-three seconds after
          launch, the orbiter broke apart and all seven crew members died — including Christa
          McAuliffe, a New Hampshire schoolteacher selected as the first civilian in space. An
          estimated 17 percent of Americans watched it live on television, many of them
          schoolchildren watching in classrooms. NASA halted the shuttle programme for 32 months.
          Full mission record at{" "}
          <a
            href="https://www.nasa.gov/mission/sts-51-l/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            NASA.gov
          </a>
          .
        </li>
        <li>
          <strong>Chernobyl, April 26:</strong> Reactor number four at the Chernobyl Nuclear Power
          Plant in Soviet Ukraine exploded during a safety test, releasing radiation estimated at 400
          times the Hiroshima bomb. More than 350,000 people were eventually evacuated from the
          surrounding area. The exclusion zone around the site remains in place today. WHO fact sheet
          at{" "}
          <a
            href="https://www.who.int/news-room/fact-sheets/detail/chernobyl-nuclear-disaster"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            WHO.int
          </a>
          .
        </li>
        <li>
          <strong>Top Gun, May 16:</strong> The Tom Cruise film became the highest-grossing movie of
          1986, taking $356 million globally. US Navy recruitment offices reported a measurable spike
          in applications in the weeks after it opened. The film&apos;s soundtrack went platinum six
          times. A sequel, Top Gun: Maverick, arrived 36 years later in 2022 and outgrossed the
          original by a factor of four.
        </li>
        <li>
          <strong>Halley&apos;s Comet, February:</strong> The comet made its closest approach to
          Earth in February 1986, faintly visible to the naked eye in the southern hemisphere. It
          orbits the sun every 75–76 years and will not return until 2061. If you are alive to see
          it, you will be 74 or 75 — the same age many of your grandparents were when they watched
          it in 1986.
        </li>
        <li>
          <strong>Mike Tyson, youngest heavyweight champion, November 22:</strong> At 20 years and 4
          months, Tyson knocked out Trevor Berbick in the second round to become the youngest
          heavyweight boxing champion in history. That record still stands in 2026.
        </li>
        <li>
          <strong>Pixar founded, February 3:</strong> Steve Jobs bought the computer graphics
          division of Lucasfilm for $10 million and renamed it Pixar Animation Studios. The company
          went on to make Toy Story (1995), Finding Nemo (2003), The Incredibles (2004), Up (2009),
          and numerous other films that 1986 babies would eventually sit through with their own
          children.
        </li>
        <li>
          <strong>Maradona&apos;s &quot;Hand of God,&quot; June 22:</strong> Argentina beat England
          2–1 in the FIFA World Cup quarter-final in Mexico City. Diego Maradona scored the first
          goal with his left hand, told reporters afterward it was &quot;a little with the head of
          Maradona and a little with the hand of God,&quot; then scored what was later voted the
          goal of the twentieth century — a solo run past five England players. Argentina won the
          tournament.
        </li>
      </ul>
    }
    worldOutro={
      <>
        Two of the defining technological disasters of the late twentieth century — Challenger and
        Chernobyl — happened in the same year you were born, within 87 days of each other. Both of
        them changed how governments, engineers, and ordinary people thought about complex systems
        and institutional trust. That context is, in its own quiet way, part of what the world was
        made of when you arrived.
      </>
    }
    futureRows={[
      ["2027", "40–41"],
      ["2030", "43–44"],
      ["2035", "48–49"],
      ["2040", "53–54"],
      ["2050", "63–64"],
      ["2060", "73–74"],
    ]}
    futureNote={
      <>
        The 50th birthday lands in 2036. Halley&apos;s Comet returns in 2061, by which point you
        will be 74 or 75 — making you perhaps the only generation to have a comet as a personal
        milestone marker.
      </>
    }
    planetRows={[
      ["Mercury", "~166 Mercury years (88 days per orbit)"],
      ["Venus", "~65 Venus years (225 days per orbit)"],
      ["Mars", "~21 Mars years (687 days per orbit)"],
      ["Jupiter", "~3.3 Jupiter years (12 Earth years per orbit)"],
      ["Saturn", "~1.35 Saturn years (29.5 Earth years per orbit)"],
    ]}
    planetNote={
      <>
        You have completed 1.35 orbits of the sun on Saturn&apos;s timescale. On Mercury, you are
        approaching 166 years old. The universe operates on a very wide range of clocks, and none
        of them are particularly interested in how 40 feels.
      </>
    }
    lifeClock={
      <>
        On a 24-hour life clock — mapping birth at midnight and a full life expectancy of 79 years
        to the next midnight — a 40-year-old sits at approximately <strong>12:09 PM</strong>. Nine
        minutes past noon. The morning is behind you. Everything from here is afternoon and evening,
        and most days the afternoon is the best part of the day.
      </>
    }
    finalNote={
      <>
        All figures above are calculated to an age of 40. Your exact count in days, hours, and
        heartbeats depends on your specific birthday. Enter it at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me
        </a>{" "}
        to get the precise number, calculated to the minute.
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

export default BornIn1986;
