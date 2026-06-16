import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const credit = (name: string, url = "https://unsplash.com") => (
  <>
    Photo by {name} on{" "}
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
      Unsplash
    </a>
  </>
);

const BornIn1989 = () => (
  <BornInYearArticle
    year={1989}
    preBirthdayAge={36}
    postBirthdayAge={37}
    slug="how-old-am-i-if-i-was-born-in-1989"
    title="How Old Am I If I Was Born in 1989? | Age in 2026"
    description="Born in 1989? You're 36 or 37 in 2026. Find your exact age in days, heartbeats, and full moons — plus why 1989 was one of the most extraordinary years in modern history."
    intro={
      <>
        If you were born in 1989, you are <strong>36 or 37 years old in 2026</strong> — 37 if your
        birthday has already passed this year, 36 if it's still ahead of you. You arrived during a
        year that genuinely changed the shape of the world: the Berlin Wall fell, the World Wide Web
        was proposed at CERN, and a lone protester stood in front of a tank column in Beijing. Taylor
        Swift was born in December of 1989 — your exact contemporary. You and the modern internet
        are the same age, and you've both had quite the run.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1484069133823-6c0b72649490?w=1200&q=75&auto=format&fit=crop",
      alt: "Vintage cassette tape close-up — a perfect late-80s time capsule",
      credit: credit(
        "Namroud Gorguis",
        "https://unsplash.com/photos/brown-cassette-tape-FZWivbri0Xk"
      ),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1471478331149-d8d4b2a6e731?w=1200&q=75&auto=format&fit=crop",
      alt: "Neon-lit city street at night — the electric late-80s urban feeling",
      credit: credit(
        "Axel Ahoi",
        "https://unsplash.com/photos/neon-lights-city-street-at-night-wgMBlZ2Sl6I"
      ),
    }}
    daysLived={
      <>
        At 37 years old, you've lived approximately <strong>13,514 days</strong>. That's over
        thirteen thousand individual mornings — each one arriving whether you were ready or not,
        and the vast majority of which you navigated just fine.
      </>
    }
    hoursMinutes={
      <>
        <strong>~324,336 hours</strong> since your first breath, and{" "}
        <strong>~19,460,160 minutes</strong> of conscious existence. Roughly 6,000 of those hours
        were spent at school. A lot more than that were not.
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
        . Over 37 years, that's approximately <strong>1.35 billion heartbeats</strong> — each one
        automatic, each one keeping you in the game. It never asked for your permission and it
        never stopped to rest.
      </>
    }
    fullMoons={
      <>
        The moon completes a full cycle every 29.5 days. Since 1989, you've witnessed approximately{" "}
        <strong>460 full moons</strong> rising overhead — each one the same moon, the same light,
        an entirely different version of you looking up at it.
      </>
    }
    breaths={
      <>
        At a resting rate of 15 breaths per minute, you've taken around{" "}
        <strong>291 million breaths</strong> since birth. Your first one was the most important
        thing you've ever done, and you did it completely on instinct.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1989, you are a <strong>Millennial</strong> — technically on the younger end of
          the cohort (roughly 1981–1996 per{" "}
          <a
            href="https://www.pewresearch.org/social-trends/2019/01/17/where-millennials-end-and-generation-z-begins/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Pew Research
          </a>
          ), but old enough to remember life before smartphones. You were 12 on September 11, 2001
          — young enough to be frightened without fully understanding what was changing, old enough
          to remember exactly where you were. You graduated high school around 2007 and hit the job
          market right as the 2008 financial crisis was dismantling it.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          At 36–37 in 2026, you're in what researchers call "peak earning potential" years — but
          that phrase lands differently for a generation that watched the housing market collapse in
          their early 20s. Many people your age are now 10–15 years into careers, stepping into
          first management roles, building actual savings for the first time, or reassessing
          everything after the pandemic reshuffled priorities at age 30–31. The restlessness is
          real, and it's not random.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Your generational touchstones include dial-up internet giving way to broadband, MSN
          Messenger giving way to Facebook, and the iPhone launching when you were 17 or 18 —
          young enough to adopt it immediately, old enough to remember what came before. You
          existed before the algorithm decided what you should see. That's rarer than it sounds now.
        </p>
      </>
    }
    worldIntro="1989 was a year that rewrote the map of the modern world. Here's what was happening when you arrived:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>The Berlin Wall fell (November 9):</strong> After 28 years dividing East and West
          Berlin, East Germany announced its citizens could cross freely.{" "}
          <a
            href="https://www.history.com/this-day-in-history/the-berlin-wall-opens"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Crowds gathered and began taking sledgehammers to it
          </a>{" "}
          — one of history's most joyful televised moments.
        </li>
        <li>
          <strong>Tiananmen Square (June 4):</strong> Chinese students led pro-democracy protests
          in Beijing. The government's crackdown produced the iconic "Tank Man" photograph — a
          lone figure standing before a column of Type 59 tanks. The estimated death toll remains
          disputed: hundreds to thousands.
        </li>
        <li>
          <strong>The World Wide Web proposed (March 12):</strong>{" "}
          <a
            href="https://home.web.cern.ch/science/computing/birth-web"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Tim Berners-Lee submitted his proposal at CERN
          </a>{" "}
          — returned with the note "Vague but exciting." You and the internet were conceived in the
          same year.
        </li>
        <li>
          <strong>Exxon Valdez oil spill (March 24):</strong> 11 million gallons of crude oil spilled
          into Prince William Sound, Alaska — one of the worst environmental disasters in US history,
          affecting over 1,300 miles of coastline.
        </li>
        <li>
          <strong>San Francisco earthquake (October 17):</strong> A 6.9-magnitude quake struck during
          Game 3 of the World Series — 67 people died, and the whole country watched it happen live
          on national television.
        </li>
        <li>
          <strong>Taylor Swift born (December 13):</strong> She is your exact contemporary. She's
          spent her 30s rerecording her albums, selling out stadiums, and breaking records. You've
          had your own version of a decade.
        </li>
        <li>
          <strong>Film & music:</strong> <em>Batman</em>, <em>Indiana Jones and the Last Crusade</em>,
          <em> Dead Poets Society</em>, <em>When Harry Met Sally</em>. On the charts: Bon Jovi's
          "Livin' on a Prayer," Madonna's "Like a Prayer," and The Stone Roses' debut album —
          which still holds up.
        </li>
      </ul>
    }
    worldOutro="You were born into a world that was becoming something entirely new — and so were you."
    futureRows={[
      ["2027", "37–38"],
      ["2030", "40–41"],
      ["2035", "45–46"],
      ["2040", "50–51"],
      ["2050", "60–61"],
      ["2060", "70–71"],
    ]}
    futureNote="The 40s arrive in 2029 or 2030 depending on your birthday — a milestone decade in what's shaping up to be a milestone era."
    planetRows={[
      ["Mercury", "~153 Mercury years"],
      ["Venus", "~60 Venus years"],
      ["Mars", "~19 Mars years"],
      ["Jupiter", "~3.1 Jupiter years"],
      ["Saturn", "~1.3 Saturn years"],
    ]}
    planetNote="On Mars you'd just be finishing your teenage years. On Mercury, you'd have circled the sun 153 times. Time is wonderfully strange."
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
        — a 37-year-old (based on ~79 years average) sits at approximately{" "}
        <strong>11:15 AM</strong>. Still before noon. The whole afternoon and evening still ahead.
      </>
    }
    finalNote={
      <>
        These figures are based on turning 37 in 2026. Your precise age — in days, hours, minutes,
        even seconds — depends on your exact birthday. Find it all at{" "}
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

export default BornIn1989;
