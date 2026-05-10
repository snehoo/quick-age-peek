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
        birthday has already passed this year, 34 if it's still on its way. You were born in the
        year the Soviet Union collapsed, the year the{" "}
        <a
          href="https://home.cern/science/computing/birth-web/short-history-web"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          World Wide Web
        </a>{" "}
        went live, and the year Nirvana's <em>Nevermind</em> changed music overnight.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1771366629899-2b695442ad31?w=1200&q=75&auto=format&fit=crop",
      alt: "Retro desk setup with vintage computer and drawing supplies",
      credit: credit("Calvin Wise", "https://unsplash.com/photos/retro-desk-with-vintage-computer-and-drawing-supplies-6PAGsCSXSFc"),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1776018276961-177292bdd7ad?w=1200&q=75&auto=format&fit=crop",
      alt: "Stack of vintage boomboxes on display — a 90s time capsule",
      credit: credit("Charles Puaud", "https://unsplash.com/photos/stack-of-vintage-boomboxes-and-speakers-on-display-uCdFUuhBsW0"),
    }}
    daysLived={
      <>
        At 35 years old, you've lived approximately <strong>12,784 days</strong> — nearly 13,000
        individual days of decisions, meals, conversations, and sleep.
      </>
    }
    hoursMinutes={
      <>
        <strong>~306,816 hours</strong> since birth, and <strong>~18,408,960 minutes</strong> of
        life lived so far.
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
        . Over 35 years, that's roughly <strong>1.28 billion heartbeats</strong>.
      </>
    }
    fullMoons={
      <>
        The lunar cycle is 29.5 days. Since 1991, you've lived through approximately{" "}
        <strong>440 full moons</strong>.
      </>
    }
    breaths={
      <>
        At 15 breaths per minute over 35 years: roughly <strong>275 million breaths</strong>.
        Automatic. Constant. The quiet engine beneath everything.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1991, you are a <strong>Millennial</strong> — in the textbook centre of the
          generation (roughly 1981–1996 per{" "}
          <a
            href="https://www.pewresearch.org/social-trends/2019/01/17/where-millennials-end-and-generation-z-begins/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Pew Research
          </a>
          ). You were 10 on 9/11, grew up with Harry Potter, got your first mobile around 11 or 12.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          You graduated into or near the{" "}
          <a
            href="https://www.investopedia.com/articles/economics/09/financial-crisis-review.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            2008 financial crisis
          </a>
          , which shaped your generation's relationship with economic security in ways still
          playing out today.
        </p>
      </>
    }
    worldIntro="1991 was a year that rewrote the world map. Here's what was happening:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>The Soviet Union dissolved:</strong> On{" "}
          <a
            href="https://www.history.com/this-day-in-history/u-s-s-r-dissolves"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            December 25, 1991
          </a>
          , Mikhail Gorbachev resigned and the USSR officially ceased to exist.
        </li>
        <li>
          <strong>The World Wide Web goes public:</strong> Tim Berners-Lee made the web publicly
          available on August 6, 1991.
        </li>
        <li>
          <strong>Music:</strong> Nirvana's <em>Nevermind</em>, R.E.M.'s <em>Out of Time</em>,
          U2's <em>Achtung Baby</em>, Massive Attack's <em>Blue Lines</em>.
        </li>
        <li>
          <strong>Film:</strong> <em>The Silence of the Lambs</em>, <em>Terminator 2</em>,{" "}
          <em>Beauty and the Beast</em>, <em>Thelma & Louise</em>, <em>JFK</em>.
        </li>
        <li>
          <strong>Tech:</strong> Linus Torvalds released Linux 0.01. Apple introduced the
          PowerBook laptop.
        </li>
        <li>
          <strong>Sport:</strong> Michael Jordan led the Chicago Bulls to their first NBA
          Championship.
        </li>
      </ul>
    }
    futureRows={[
      ["2027", "35–36"],
      ["2030", "38–39"],
      ["2035", "43–44"],
      ["2040", "48–49"],
      ["2050", "58–59"],
    ]}
    planetRows={[
      ["Mercury", "~145 Mercury years"],
      ["Venus", "~57 Venus years"],
      ["Mars", "~18 Mars years"],
      ["Jupiter", "~2.9 Jupiter years"],
      ["Saturn", "~1.2 Saturn years"],
    ]}
    planetNote="On Jupiter you haven't even turned 3. On Mercury you'd be 145."
    lifeClock={
      <>
        On a 24-hour life clock — midnight at birth, midnight at the end of a{" "}
        <a
          href="https://www.who.int/data/gho/indicator-metadata-registry/imr-details/65"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          full life
        </a>{" "}
        — a 35-year-old sits at approximately <strong>10:38 AM</strong>. Still morning.
        Everything still ahead.
      </>
    }
    finalNote={
      <>
        These figures are based on turning 35 in 2026. Your precise age — in days, hours, minutes,
        seconds, and heartbeats — is tied to your exact birthday. Find it at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me
        </a>
        .
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i" },
      { tag: "Biology", title: "How Many Heartbeats in a Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime" },
      { tag: "How-to", title: "How to Calculate Your Age in Days", href: "/blog/how-to-calculate-age-in-days" },
      { tag: "Time", title: "What Is a Life Clock?", href: "/blog/what-is-a-life-clock" },
    ]}
  />
);

export default BornIn1991;
