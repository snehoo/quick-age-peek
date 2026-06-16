import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const credit = (name: string, url = "https://unsplash.com") => (
  <>
    Photo by {name} on{" "}
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
      Unsplash
    </a>
  </>
);

const BornIn1991 = () => (
  <BornInYearArticle
    year={1991}
    preBirthdayAge={34}
    postBirthdayAge={35}
    slug="how-old-am-i-if-i-was-born-in-1991"
    title="How Old Am I If I Was Born in 1991? | Age in 2026"
    description="Born in 1991? You're 34 or 35 in 2026. Discover your age in days, heartbeats, full moons — and why 1991 was one of the most consequential years in modern history."
    intro={
      <>
        If you were born in 1991, you are <strong>34 or 35 years old in 2026</strong> — 35 if your
        birthday has already passed this year, 34 if it's still on its way. You have a claim to one
        of the most consequential birth years of the twentieth century: the Soviet Union collapsed
        on Christmas Day 1991, ending 46 years of Cold War. The{" "}
        <a
          href="https://home.cern/science/computing/birth-web/short-history-web"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          World Wide Web went publicly live
        </a>{" "}
        in August. And on September 24, Nirvana released <em>Nevermind</em> — and the 80s were
        officially over. You came into a world mid-transformation.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1552872762-2f21d58a5d9d?w=1200&q=75&auto=format&fit=crop",
      alt: "Retro CRT television set with VHS tape — classic early-90s living room",
      credit: credit(
        "Possessed Photography",
        "https://unsplash.com/photos/retro-crt-tv-with-vhs-tapes-tiNCpHudGrw"
      ),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=75&auto=format&fit=crop",
      alt: "Retro SNES game controller — a childhood icon of the early 90s",
      credit: credit(
        "Finn Mund",
        "https://unsplash.com/photos/retro-snes-game-controller-on-wooden-surface-FMFJlxMBBuU"
      ),
    }}
    daysLived={
      <>
        At 35 years old, you've lived approximately <strong>12,784 days</strong>. Nearly 13,000
        individual days — of decisions made, meals eaten, things learned, and a handful of moments
        you'll carry the rest of your life.
      </>
    }
    hoursMinutes={
      <>
        <strong>~306,816 hours</strong> since birth, and <strong>~18,408,960 minutes</strong> of
        life lived so far. For perspective: you've slept through roughly 100,000 of those hours,
        which is exactly the right amount.
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
        , according to the American Heart Association. Over 35 years, that's roughly{" "}
        <strong>1.28 billion heartbeats</strong> — without a single conscious effort on your part.
      </>
    }
    fullMoons={
      <>
        The lunar cycle completes every 29.5 days. Since 1991, you've witnessed approximately{" "}
        <strong>440 full moons</strong> — each one the same silver light, each one marking a month
        of your life quietly passing.
      </>
    }
    breaths={
      <>
        At 15 breaths per minute over 35 years: roughly <strong>275 million breaths</strong>.
        Automatic. Constant. The quiet engine running beneath every single thing you've done.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1991, you sit near the textbook centre of the{" "}
          <strong>Millennial generation</strong> (1981–1996 per{" "}
          <a
            href="https://www.pewresearch.org/social-trends/2019/01/17/where-millennials-end-and-generation-z-begins/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Pew Research
          </a>
          ). You've never known a world where the Soviet Union existed. The Cold War — which
          structured every corner of geopolitics for 46 years — was over before you were conscious
          of it. That shapes how your generation relates to concepts like ideology and
          international order differently from everyone born before you.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          You were 10 on September 11, 2001. Old enough to sense the fear around you but young
          enough that the pre-9/11 world is mostly a blur. The{" "}
          <a
            href="https://www.investopedia.com/articles/economics/09/financial-crisis-review.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            2008 financial crisis
          </a>{" "}
          hit when you were 16–17 — that's old enough to absorb the fear in your parents' voices,
          and young enough that it shaped your whole attitude toward financial security and
          institutions before you ever had a bank account of your own.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          At 34–35 in 2026, you're at a psychologically interesting junction: young enough to
          still feel like you're building, old enough to have real stakes. Many people born in 1991
          are now 8–12 years into careers and navigating the shift from "doing the work" to
          "managing people who do the work." The pandemic landed when you were 28–29 — right at
          the moment a lot of life decisions were in motion — and its reverberations are still
          very much with you.
        </p>
      </>
    }
    worldIntro="1991 was a year that rewrote the world map. Here's what was happening when you arrived:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>The Soviet Union dissolved (December 25):</strong>{" "}
          <a
            href="https://www.bbc.co.uk/news/world-europe-16018218"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Mikhail Gorbachev resigned on Christmas Day
          </a>{" "}
          and 15 Soviet republics became independent nations overnight. The Cold War — 46 years old
          — was officially over.
        </li>
        <li>
          <strong>Gulf War (January–February):</strong> Operation Desert Storm lasted 42 days.
          A US-led coalition of 34 nations expelled Iraqi forces from Kuwait. It was the first war
          widely watched live on CNN — real-time combat footage in living rooms around the world.
        </li>
        <li>
          <strong>World Wide Web goes public (August 6):</strong> Tim Berners-Lee made his
          first web page live at CERN — the birth of the web as a public technology. You and the
          internet grew up together.
        </li>
        <li>
          <strong>Nirvana releases <em>Nevermind</em> (September 24):</strong> "Smells Like Teen
          Spirit" changed the sound of mainstream music overnight and effectively ended the 80s
          hairband era. Kurt Cobain was 24.
        </li>
        <li>
          <strong>Freddie Mercury died (November 24):</strong> One day after publicly acknowledging
          he had AIDS, the Queen frontman was gone. Magic Johnson announced he was HIV-positive
          just two weeks earlier — both events reshaping public understanding of the epidemic.
        </li>
        <li>
          <strong>Film & culture:</strong> <em>The Silence of the Lambs</em>,{" "}
          <em>Terminator 2: Judgment Day</em>, <em>Beauty and the Beast</em> (first animated film
          nominated for Best Picture), <em>Thelma & Louise</em>. Linus Torvalds released Linux 0.01
          in September.
        </li>
        <li>
          <strong>Sport:</strong> Michael Jordan led the Chicago Bulls to their first NBA
          Championship. The Rodney King beating (March 3) was captured on videotape — its
          aftermath would reshape American cities the following year.
        </li>
      </ul>
    }
    worldOutro="You were born into the first year of the post-Cold War world — a world that thought it had figured things out. It hadn't, but it was optimistic about it."
    futureRows={[
      ["2027", "35–36"],
      ["2030", "38–39"],
      ["2035", "43–44"],
      ["2040", "48–49"],
      ["2050", "58–59"],
      ["2060", "68–69"],
    ]}
    futureNote="You clear 40 in 2031 or 2032 — a milestone birthday in what's likely to be a decade of significant change."
    planetRows={[
      ["Mercury", "~145 Mercury years"],
      ["Venus", "~57 Venus years"],
      ["Mars", "~18 Mars years"],
      ["Jupiter", "~2.9 Jupiter years"],
      ["Saturn", "~1.2 Saturn years"],
    ]}
    planetNote="On Jupiter you haven't even turned 3. On Mercury you'd have orbited the sun 145 times. Your age is entirely a matter of perspective."
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
        — a 35-year-old (based on ~79 years average) sits at approximately{" "}
        <strong>10:38 AM</strong>. Still firmly morning. Everything still ahead.
      </>
    }
    finalNote={
      <>
        These figures are based on turning 35 in 2026. Your precise age — in days, hours, minutes,
        and heartbeats — depends on your exact birthday. Find it all at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me
        </a>
        .
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i/" },
      { tag: "Biology", title: "How Many Heartbeats in a Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime/" },
      { tag: "How-to", title: "How to Calculate Your Age in Days", href: "/blog/how-to-calculate-age-in-days/" },
      { tag: "Time", title: "What Is a Life Clock?", href: "/blog/what-is-a-life-clock/" },
    ]}
  />
);

export default BornIn1991;
