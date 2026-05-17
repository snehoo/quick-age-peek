import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const credit = (name: string, url = "https://unsplash.com") => (
  <>
    Photo by {name} on{" "}
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
      Unsplash
    </a>
  </>
);

const BornIn1987 = () => (
  <BornInYearArticle
    year={1987}
    preBirthdayAge={38}
    postBirthdayAge={39}
    slug="how-old-am-i-if-i-was-born-in-1987"
    title="How Old Am I If I Was Born in 1987? | Age in 2026"
    description="Born in 1987? You're 38 or 39 in 2026 — older Millennial, with a foot in two worlds. Discover your age in days, heartbeats, and full moons, plus the events that defined the year of your birth."
    intro={
      <>
        If you were born in 1987, you are <strong>38 or 39 years old in 2026</strong> — 38 if your
        birthday is still ahead, 39 if it has already come and gone. You belong to the older edge of
        the Millennial generation: old enough to have had a proper pre-internet childhood, young
        enough to have adapted to the digital world without ever feeling out of place in it. You were
        born the year the global stock market dropped 22.6 percent in a single afternoon, the year
        Reagan stood at the Berlin Wall and told Gorbachev to tear it down, and the year U2 released
        The Joshua Tree. The world in 1987 was simultaneously ending one era and beginning another —
        and so, in its own way, were you.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=75&auto=format&fit=crop",
      alt: "Neon lights in warm pink and purple tones, evoking late 1980s night-time atmosphere",
      credit: credit("Hector Falcon"),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200&q=75&auto=format&fit=crop",
      alt: "Old polaroid camera on a wooden surface, analogue photography from the 1980s",
      credit: credit("Alexander Andrews"),
    }}
    daysLived={
      <>
        At 39 years old, you have lived approximately <strong>14,245 days</strong> — at 38, roughly{" "}
        <strong>13,880 days</strong>. Each of those days began whether you were ready for it or not,
        and ended the same way. The ones that felt interchangeable were still moving you forward.
      </>
    }
    hoursMinutes={
      <>
        Thirty-nine years works out to approximately <strong>341,640 hours</strong> and{" "}
        <strong>20,498,400 minutes</strong> of being alive. Add 1,440 minutes for every day that
        passes from here.
      </>
    }
    heartbeats={
      <>
        At roughly 100,000 heartbeats per day, your heart has beaten approximately{" "}
        <strong>1.42 billion times</strong> since you were born. It has kept going through every
        exam, every first day, every sleepless 3am, every ordinary Tuesday — without ever asking
        permission or taking a day off.
      </>
    }
    fullMoons={
      <>
        The full moon rises every 29.5 days. Since 1987, it has appeared approximately{" "}
        <strong>474 times</strong>. You may have noticed it occasionally. You definitely did not
        notice it most of the time, which is fine — it rose anyway.
      </>
    }
    breaths={
      <>
        Fifteen breaths per minute over 39 years adds up to approximately{" "}
        <strong>307 million breaths</strong>. The first one arrived with some effort. Every one
        since has been entirely automatic, keeping everything else running in the background.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1987, you are a <strong>Millennial</strong> — specifically an older one, in the
          first half of the cohort Pew Research defines as 1981–1996. What makes your position
          within that generation distinctive is an experience that younger Millennials and Gen Z
          simply did not have: you grew up in a world that was genuinely, structurally offline. Your
          childhood was cassette tapes and Saturday morning cartoons and playing outside because
          there was nothing inside compelling enough. The internet arrived during your early
          secondary school years as a slow, expensive novelty. By the time it became the
          infrastructure of daily life, you were in your twenties — old enough to remember what came
          before, young enough to adopt what came after as second nature.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          In 2026, you are 38 or 39, and several things are statistically likely to be true about
          your life right now. If you started saving into a pension or retirement account at 25, that
          money has had 13–14 years of compound growth. If you bought a home in the 2010s, before
          prices in most markets went vertical, the equity position is probably better than you
          expected. Many people in this age band are entering the &quot;this is it&quot; phase of
          their career — not in a defeatist way, but in the sense of: the professional identity you
          have built is roughly the one you are going to have, and that is clarifying in a useful way.
          It tends to concentrate effort.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          The 40th birthday is either just behind you or one to two years ahead — and the approach
          tends to provoke more reflection than the day itself. People who have crossed 40 recently
          consistently report that the number feels less significant once you are actually in it.
          What tends to shift is a quiet reduction in the gap between who you are and who you
          thought you were supposed to be by now. The 30s can be loud with that gap. The 40s are
          often quieter.
        </p>
      </>
    }
    worldIntro="Here is the world that was happening when you were born in 1987:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>Black Monday, October 19:</strong> Stock markets around the world crashed
          simultaneously. The Dow Jones Industrial Average fell 22.6 percent in a single session —
          still the largest single-day percentage drop in the index&apos;s history, greater even
          than any day during the 1929 crash. Markets in Hong Kong, Australia, and the UK fell by
          comparable proportions. More at{" "}
          <a
            href="https://www.history.com/this-day-in-history/black-monday"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            History.com
          </a>
          .
        </li>
        <li>
          <strong>&quot;Tear down this wall,&quot; June 12:</strong> President Ronald Reagan stood
          at the Brandenburg Gate in West Berlin and directly addressed Mikhail Gorbachev:
          &quot;General Secretary Gorbachev, if you seek peace, if you seek prosperity for the
          Soviet Union and Eastern Europe, if you seek liberalisation — come here to this gate. Mr
          Gorbachev, tear down this wall!&quot; The Wall fell two years later, in November 1989.
        </li>
        <li>
          <strong>INF Treaty, December 8:</strong> Reagan and Gorbachev signed the
          Intermediate-Range Nuclear Forces Treaty — the first agreement between the superpowers to
          eliminate an entire category of nuclear weapons. It was a genuine turning point in the
          Cold War that had defined global geopolitics since before either of them was born.
        </li>
        <li>
          <strong>World population hits 5 billion, July 11:</strong> The United Nations designated
          July 11, 1987 as the &quot;Day of Five Billion&quot; — the approximate date world
          population crossed that threshold. It had taken just 13 years to add the previous billion.
          In 2026, global population is approximately 8.2 billion.
        </li>
        <li>
          <strong>U2&apos;s The Joshua Tree, March 9:</strong> The album became the fastest-selling
          album in UK chart history at that point, reaching number one in both the UK and US
          simultaneously. With &quot;With or Without You&quot; and &quot;Where the Streets Have No
          Name,&quot; it made U2 the biggest band in the world for a few years. Michael Jackson
          released <em>Bad</em> the same year.
        </li>
        <li>
          <strong>Dirty Dancing, August 21:</strong> Patrick Swayze and Jennifer Grey starred in
          the film that grossed $218 million on a $6 million budget. It spent 18 weeks in the US
          box office top ten. &quot;(I&apos;ve Had) The Time of My Life&quot; won the Academy Award
          for Best Original Song.
        </li>
        <li>
          <strong>Baby Jessica, October 14–16:</strong> Eighteen-month-old Jessica McClure fell 22
          feet into a well in Midland, Texas. She was rescued 58 hours later after a nationally
          televised operation that captivated the country. The rescue was among the first major
          news events to be broadcast continuously on cable television, and it established the
          template for round-the-clock breaking news coverage that would define the following decades.
        </li>
      </ul>
    }
    worldOutro={
      <>
        You were born at the tail end of the Cold War, into a world that was starting to sense —
        without quite believing — that the decades-long standoff between the superpowers might
        actually be coming to an end. By the time you were old enough to remember the news, it was.
      </>
    }
    futureRows={[
      ["2027", "39–40"],
      ["2030", "42–43"],
      ["2035", "47–48"],
      ["2040", "52–53"],
      ["2050", "62–63"],
      ["2060", "72–73"],
    ]}
    futureNote={
      <>
        The 40th birthday is either just behind you or arriving in the next year or two — either
        way, the 50s are still more than a decade away.
      </>
    }
    planetRows={[
      ["Mercury", "~162 Mercury years (88 days per orbit)"],
      ["Venus", "~63 Venus years (225 days per orbit)"],
      ["Mars", "~20 Mars years (687 days per orbit)"],
      ["Jupiter", "~3.3 Jupiter years (12 Earth years per orbit)"],
      ["Saturn", "~1.3 Saturn years (29.5 Earth years per orbit)"],
    ]}
    planetNote={
      <>
        On Mars, you are just crossing 20. On Jupiter, you are a young adult of three and a bit. On
        Mercury, you would have lived 162 full years. Time moves at an entirely different rate
        depending on where you are standing.
      </>
    }
    lifeClock={
      <>
        Map a full human life onto a 24-hour clock — midnight at birth, midnight at 79 years old —
        and a 39-year-old arrives at approximately <strong>11:51 AM</strong>. Nine minutes before
        noon. The morning is nearly over. The entire afternoon is still in front of you, and most
        days the afternoon is when the best things happen.
      </>
    }
    finalNote={
      <>
        The figures above are calculated to an age of 39. Your specific count in days, hours,
        minutes, and heartbeats depends on your exact date of birth. Enter it at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me
        </a>{" "}
        to get your precise number, calculated to today.
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

export default BornIn1987;
