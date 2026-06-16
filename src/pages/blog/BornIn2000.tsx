import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const credit = (name: string, url = "https://unsplash.com") => (
  <>
    Photo by {name} on{" "}
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
      Unsplash
    </a>
  </>
);

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
        your birthday has already passed, 25 if it's still ahead. There's something different about
        being born in the year 2000 specifically. The world had been counting down to that date
        for years, watching the clock, half-convinced the computers would fail and civilisation
        would stutter. They didn't. And into the calm aftermath, you arrived — a literal child of
        the new millennium. Twenty-five is the quarter-century mark: old enough to feel the weight
        of adult life, young enough to still be genuinely early in it.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1520350094-7f655b3e65c9?w=1200&q=75&auto=format&fit=crop",
      alt: "Early social media era — the digital world that 2000-borns grew up building themselves inside",
      credit: credit("Daria Nepriakhina"),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1517649281203-dad836b4c5b9?w=1200&q=75&auto=format&fit=crop",
      alt: "Early smartphone era — the technology that defined Gen Z's teenage years",
      credit: credit("Tyler Lastovich"),
    }}
    daysLived={
      <>
        At 26, you've lived approximately <strong>9,497 days</strong>. At 25, it's closer to{" "}
        <strong>9,131 days</strong>. Over nine thousand individual mornings — each one arrived,
        each one got through, each one shaped you in ways you can't fully audit.
      </>
    }
    hoursMinutes={
      <>
        Twenty-six years translates to roughly <strong>227,928 hours</strong> and{" "}
        <strong>13,675,680 minutes</strong> of existence. That figure climbs by 1,440 every single
        day, automatically, without requiring your attention.
      </>
    }
    heartbeats={
      <>
        At approximately 100,000 heartbeats per day, you've accumulated roughly{" "}
        <strong>949 million heartbeats</strong> over 26 years — closing in on a billion, each one
        silent and involuntary, each one keeping everything else possible.
      </>
    }
    fullMoons={
      <>
        The lunar cycle completes every 29.5 days. Since 2000, the full moon has risen
        approximately <strong>322 times</strong>. Your whole life has unfolded against that rhythm,
        whether or not you ever looked up.
      </>
    }
    breaths={
      <>
        At 15 breaths per minute over 26 years: roughly <strong>204 million breaths</strong>.
        The first one announced you to a room that had been waiting. The rest have been entirely
        unremarkable, which is exactly as it should be.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 2000, you are <strong>Generation Z</strong> — and one of its most symbolically
          loaded members. The year 2000 carried the weight of a millennium, the relief of Y2K
          fizzling, the peak of dot-com mania. You arrived into an optimistic, slightly deranged
          moment in history and have been navigating the aftermath ever since.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          You were one year old on September 11, 2001 — you have no memory of it, but grew up in
          a world permanently reshaped by it. The post-9/11 security state (airport scanners,
          surveillance infrastructure, endless overseas military operations) has been the wallpaper
          of your entire conscious life. The war in Afghanistan lasted until 2021 — from before
          your memory until you were 21 years old. For most people your age, it had simply always
          been happening.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Your generation grew up entirely inside social media. Instagram arrived when you were
          around ten, Snapchat when you were around twelve. Identity formation for Gen Z happened
          partially in public, on platforms, with metrics attached — likes, followers, views.
          That's genuinely new in human history. No generation before yours had to navigate
          adolescence with the added layer of a personal brand. Mental health researchers have
          been tracking the consequences carefully, and the data on Gen Z's anxiety and depression
          rates is not encouraging. Your cohort is not imagining the pressure; it's real and
          measurable.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          COVID arrived when you were 19 or 20 — the threshold of adult independence. Many of
          your cohort moved back home in spring 2020, watched first apartments fall through,
          first jobs evaporate or go fully remote. The traditional early-twenties rite of passage
          — moving out, building a social world from scratch, figuring out who you are away from
          your family — was compressed and disrupted. At 25 or 26 in 2026, you're rebuilding that
          momentum. The quarter century is behind you. The second quarter century has barely begun.
        </p>
      </>
    }
    worldIntro="Here's what was happening in the year 2000, when you arrived:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>The dot-com bubble peaked and began collapsing:</strong> The NASDAQ hit 5,048
          on March 10, 2000 — then began a 78% two-year crash. Pets.com, Webvan, Boo.com, and
          hundreds of other companies with no revenue and billion-dollar valuations evaporated.
          $5 trillion in market value was wiped out. It was the largest destruction of paper
          wealth in US history to that point.
        </li>
        <li>
          <strong>Bush v. Gore — the most contested election in US history:</strong> George W. Bush
          won the presidency by 537 votes in Florida after a 36-day recount battle that went to the
          Supreme Court. The Court's 5-4 decision in Bush's favour remains one of the most
          controversial judicial rulings in American history. Context at{" "}
          <a
            href="https://www.history.com/this-day-in-history/supreme-court-rules-in-bush-v-gore"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            History.com
          </a>
          .
        </li>
        <li>
          <strong>The Human Genome Project published its working draft, June 26:</strong> Bill
          Clinton and Tony Blair made a joint announcement that scientists had completed a working
          draft of the entire human genome sequence — mapping the 3 billion base pairs of human
          DNA. Clinton called it "the most wondrous map ever produced by humankind." Background at{" "}
          <a
            href="https://www.genome.gov/10001772"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            NIH Human Genome Research Institute
          </a>
          .
        </li>
        <li>
          <strong>PlayStation 2 launched in Japan, March 4:</strong> The PS2 went on to become
          the best-selling video game console of all time — 155 million units sold. It also
          functioned as a DVD player, which made it many families' first DVD player. The Xbox
          launched in 2001; the two defined a generation's gaming life.
        </li>
        <li>
          <strong>The Concorde crashed, July 25:</strong> Air France Flight 4590 crashed on
          takeoff near Paris, killing all 113 on board. The supersonic passenger plane — which had
          crossed the Atlantic in 3.5 hours — was grounded and never flew commercially again.
          The world's only supersonic passenger service ended because of it.
        </li>
        <li>
          <strong>Survivor and Big Brother launched reality TV:</strong> Survivor premiered in the
          US on May 31 (16.1 million viewers for the finale). Big Brother had already launched in
          the Netherlands in 1999 and spread globally in 2000. The reality TV era began, and it
          has never ended.
        </li>
        <li>
          <strong>Music and film:</strong> Tiger Woods won the US Open by 15 strokes at Pebble
          Beach — considered the greatest major performance in golf history. In cinemas:{" "}
          <em>Gladiator</em>, <em>Cast Away</em>, <em>Erin Brockovich</em>, <em>Almost Famous</em>.
          On the charts: Eminem's <em>The Marshall Mathers LP</em>, Destiny's Child's "Say My Name,"
          Jay-Z's <em>The Dynasty</em>, Radiohead's <em>Kid A</em>.
        </li>
      </ul>
    }
    worldOutro={
      <>
        You were born at the exact moment the world was deciding what the twenty-first century
        would be. Turns out it was going to be defined by screens, networks, and the slow
        reckoning with what those things do to people. You've had a front-row seat the whole time.
      </>
    }
    futureRows={[
      ["2027", "26–27"],
      ["2030", "29–30"],
      ["2035", "34–35"],
      ["2040", "39–40"],
      ["2050", "49–50"],
      ["2060", "59–60"],
    ]}
    futureNote={
      <>
        Your 30th birthday arrives in 2030 — the year you turn the same number as the decade.
        A neat coincidence the calendar will only offer once.
      </>
    }
    planetRows={[
      ["Mercury", "~108 Mercury years (88 days per orbit)"],
      ["Venus", "~42 Venus years (225 days per orbit)"],
      ["Mars", "~13.8 Mars years (687 days per orbit)"],
      ["Jupiter", "~2.2 Jupiter years (12 Earth years per orbit)"],
      ["Saturn", "~0.88 Saturn years (29.5 Earth years per orbit)"],
    ]}
    planetNote={
      <>
        On Saturn, you haven't completed a single full trip around the sun yet. On Mercury,
        you'd be 108. The same life, wildly different numbers depending on the planet.
      </>
    }
    lifeClock={
      <>
        Map a human life onto a 24-hour clock — midnight at birth, midnight at age 79 — and a
        26-year-old lands at approximately <strong>7:54 AM</strong>. Still early morning.
        The whole day ahead.
      </>
    }
    finalNote={
      <>
        The numbers above use 26 as the base age. Your precise count — in days, hours, heartbeats,
        and full moons — depends on your exact birthday. Find yours at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me
        </a>
        .
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i/" },
      {
        tag: "Biology",
        title: "How Many Heartbeats in a Lifetime?",
        href: "/blog/how-many-heartbeats-in-a-lifetime/",
      },
      {
        tag: "Astronomy",
        title: "How Many Full Moons in a Lifetime?",
        href: "/blog/how-many-full-moons-in-a-lifetime/",
      },
      { tag: "Perspective", title: "What Is a Life Clock?", href: "/blog/what-is-a-life-clock/" },
    ]}
  />
);

export default BornIn2000;
