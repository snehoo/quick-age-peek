import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const BornIn1988 = () => (
  <BornInYearArticle
    year={1988}
    preBirthdayAge={37}
    postBirthdayAge={38}
    slug="how-old-am-i-if-i-was-born-in-1988"
    title="How Old Am I If I Was Born in 1988? | Age in 2026"
    description="Born in 1988? You're 37 or 38 in 2026. Discover your age in days, heartbeats, full moons, and what the world looked like when you first arrived in it."
    intro={
      <>
        If you were born in 1988, you are <strong>37 or 38 years old in 2026</strong>. Thirty-seven
        or thirty-eight trips around the sun, each one leaving its mark in ways you can and can't
        quite articulate. You were born in the final stretch of the 1980s — a decade of excess,
        innovation, and improbable hair.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1680730044689-1970d56a7f06?fm=jpg&q=80&w=1200&auto=format&fit=crop",
      alt: "A group of children blowing out candles on a cake, vintage black and white photo",
      credit: (
        <>
          Photo by Nationaal Archief on{" "}
          <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline">
            Unsplash
          </a>
        </>
      ),
    }}
    heartbeatImage={{
      src: "https://images.unsplash.com/photo-1692623650168-2fa4d2611346?fm=jpg&q=80&w=1200&auto=format&fit=crop",
      alt: "A close-up of a vintage-style cake with cherries and soft cream",
      credit: (
        <>
          Photo by Paulina Kaminska on{" "}
          <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline">
            Unsplash
          </a>
        </>
      ),
    }}
    daysLived={
      <>
        At 38 years old, you've lived approximately <strong>13,880 days</strong>. Nearly 14,000
        individual days of being alive on this planet.
      </>
    }
    hoursMinutes={
      <>
        <strong>~333,120 hours</strong> since you were born and{" "}
        <strong>~19,987,200 minutes</strong> of existence.
      </>
    }
    heartbeats={
      <>
        Your heart has beaten approximately <strong>1.39 billion times</strong> since the moment you
        were born. Through childhood summers, teenage angst, adult pressures, and every quiet
        Tuesday in between — your heart kept the beat without being asked.
      </>
    }
    fullMoons={
      <>
        You've witnessed approximately <strong>470 full moons</strong> since birth. That's 470
        nights the moon went full, each rising over a different version of you.
      </>
    }
    breaths={
      <>
        At 15 breaths per minute over 38 years: roughly <strong>299 million breaths</strong>. Your
        very first breath was the most important thing you've ever done.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1988, you are a <strong>Millennial</strong> — and a particularly interesting
          vintage of one. You were 13 when 9/11 happened, which means that event fell right at the
          start of your teenage identity formation. It shaped how your generation understood risk,
          security, and the world beyond your neighbourhood.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          You came of age in the early 2000s — iPods, early Facebook (if you were in university),{" "}
          <em>The OC</em>, flip phones, and the quiet normalcy before smartphones rewired
          everything. You're old enough to have a MySpace memory, young enough to have adapted to
          Instagram without too much trauma.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Your relationship with work was shaped by entering the labour market during or just after
          the 2008 financial crisis. Your relationship with money is probably more complicated than
          your parents' was at the same age.
        </p>
      </>
    }
    worldIntro="1988 was a year of endings and beginnings. Here's what was happening:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>The Olympics:</strong> Seoul, South Korea hosted the Summer Olympics — the first
          on the Korean Peninsula. Ben Johnson famously won (then lost) the 100m gold after testing
          positive for steroids. Florence Griffith Joyner set world records that still stand.
        </li>
        <li>
          <strong>Music:</strong> Michael Jackson's <em>Bad</em> tour was selling out arenas
          globally. Tracy Chapman's self-titled debut was a surprise phenomenon. George Michael,
          INXS, Guns N' Roses — the year had range.
        </li>
        <li>
          <strong>Film:</strong> <em>Rain Man</em> won Best Picture. <em>Die Hard</em> invented the
          modern action movie template. <em>Beetlejuice</em> and <em>Big</em> showed Tim Burton and
          Tom Hanks at their playful best.
        </li>
        <li>
          <strong>Tech:</strong> The first worm to gain widespread attention — the Morris Worm —
          spread across the internet in November 1988, infecting thousands of computers and raising
          the first serious alarm about cybersecurity.
        </li>
        <li>
          <strong>World:</strong> The Iran-Iraq War ended after eight years. The Pan Am Flight 103
          bombing over Lockerbie, Scotland killed 270 people on December 21.
        </li>
        <li>
          <strong>Sport:</strong> The Los Angeles Dodgers won the World Series. Steffi Graf
          completed the Golden Slam — all four Grand Slams plus Olympic gold in the same year.
        </li>
      </ul>
    }
    futureRows={[
      ["2027", "38–39"],
      ["2030", "41–42"],
      ["2035", "46–47"],
      ["2040", "51–52"],
      ["2050", "61–62"],
      ["2060", "71–72"],
    ]}
    planetRows={[
      ["Mercury", "~157 Mercury years"],
      ["Venus", "~61 Venus years"],
      ["Mars", "~20 Mars years"],
      ["Jupiter", "~3.2 Jupiter years"],
      ["Saturn", "~1.3 Saturn years"],
    ]}
    planetNote="On Jupiter, you're just over three years old. The solar system has a way of making 38 feel very young."
    lifeClock={
      <>
        On a 24-hour life clock, a 38-year-old (average life expectancy ~79 years) sits at
        approximately <strong>11:33 AM</strong>. The morning is nearly over, but noon hasn't struck
        yet — and the whole afternoon lies ahead.
      </>
    }
    finalNote={
      <>
        The numbers above are calculated around turning 38 in 2026. To see your exact age right down
        to hours, minutes, and heartbeats, use the{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me age calculator
        </a>{" "}
        — just enter your date of birth.
      </>
    }
    related={[
      { tag: "Biology", title: "How Many Heartbeats in a Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime" },
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i" },
      { tag: "How-to", title: "Calculate Your Age in Days", href: "/blog/how-to-calculate-age-in-days" },
    ]}
  />
);

export default BornIn1988;
