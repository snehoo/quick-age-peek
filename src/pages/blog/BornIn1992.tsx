import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const credit = (name: string, url = "https://unsplash.com") => (
  <>
    Photo by {name} on{" "}
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
      Unsplash
    </a>
  </>
);

const BornIn1992 = () => (
  <BornInYearArticle
    year={1992}
    preBirthdayAge={33}
    postBirthdayAge={34}
    slug="how-old-am-i-if-i-was-born-in-1992"
    title="How Old Am I If I Was Born in 1992? | Age in 2026"
    description="Born in 1992? You're 33 or 34 in 2026. Discover your age in days, heartbeats, and full moons — plus a look back at the iconic, chaotic, exuberant year you entered the world."
    intro={
      <>
        If you were born in 1992, you are <strong>33 or 34 years old in 2026</strong> — 34 if your
        birthday has already passed this year, 33 if it's still on its way. You share a birth year
        with the{" "}
        <a
          href="https://www.olympic.org/barcelona-1992"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Barcelona Olympics
        </a>{" "}
        — widely considered the finest modern Games — and with the first text message ever sent.
        The European Union was created by the Maastricht Treaty while you were in the womb. The LA
        Riots burned for four days in April. Reservoir Dogs premiered at Sundance. 1992 was a lot.
        So, statistically, are you.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1614680889399-4b4c35eff47e?w=1200&q=75&auto=format&fit=crop",
      alt: "Colourful 90s nostalgia items arranged on a flat surface",
      credit: credit(
        "Biel Morro",
        "https://unsplash.com/photos/colorful-90s-nostalgia-flat-lay-HCha-UHkIg8"
      ),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=75&auto=format&fit=crop",
      alt: "Colourful cassette mix tapes stacked together — 90s music culture",
      credit: credit(
        "Oleg Laptev",
        "https://unsplash.com/photos/assorted-cassette-tapes-QRne3Yqqm3Q"
      ),
    }}
    daysLived={
      <>
        At 34 years old, you've lived approximately <strong>12,419 days</strong> — over twelve
        thousand individual mornings, each one a fresh page. You've made approximately 12,419
        decisions about what to eat for breakfast. Most of them were fine.
      </>
    }
    hoursMinutes={
      <>
        <strong>~298,056 hours</strong> of being alive, and <strong>~17,883,360 minutes</strong>{" "}
        since your first breath. To put it another way: if you spent one minute appreciating every
        minute of your life, it would take you 34 years.
      </>
    }
    heartbeats={
      <>
        According to the{" "}
        <a
          href="https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          American Heart Association
        </a>
        , your heart beats around 100,000 times a day. Over 34 years, that's approximately{" "}
        <strong>1.24 billion heartbeats</strong> — automatic, relentless, never once asking you
        whether you deserved it.
      </>
    }
    fullMoons={
      <>
        The lunar cycle completes every 29.5 days. Since 1992, you've watched approximately{" "}
        <strong>432 full moons</strong> rise overhead — each one the same pale disc, each one
        marking a different chapter of your life.
      </>
    }
    breaths={
      <>
        At 15 breaths per minute across 34 years: roughly <strong>267 million breaths</strong>.
        Invisible, constant, taken entirely for granted — which is exactly how the best things work.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1992, you are a <strong>Millennial</strong> — right in the middle of the cohort
          (1981–1996 per{" "}
          <a
            href="https://www.pewresearch.org/social-trends/2019/01/17/where-millennials-end-and-generation-z-begins/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Pew Research
          </a>
          ). You were 9 on September 11, 2001 — young enough that the world felt unstable without
          fully understanding why. You grew up with Harry Potter books arriving as genuine events,
          MSN Messenger as a social lifeline, and the iPhone entering your life at 15. You are, by
          most measures, a digital native who also remembers a pre-digital childhood.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          The{" "}
          <a
            href="https://www.investopedia.com/articles/economics/09/financial-crisis-review.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            2008 financial crisis
          </a>{" "}
          hit when you were 15–16 — old enough to sense the fear in the adults around you, young
          enough that you absorbed it as a background fact about how the world worked. Researchers
          consistently find that generations who come of age during economic crises carry more
          cautious attitudes toward debt and homeownership for decades afterward. Your generation is
          a case study.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          At 33–34 in 2026, you're in a decade that researchers describe as producing some of the
          sharpest jumps in reported life satisfaction. You entered the job market around 2014–2016
          — not quite into the teeth of the 2008 crash, but squarely into the gig economy and
          rising rents. Many people your age are now 5–10 years into serious relationships, some
          with children starting primary school. Homeownership rates for your cohort are historically
          low but creeping upward — driven partly by pandemic-era relocations that made the
          numbers pencil out in ways they never had in cities.
        </p>
      </>
    }
    worldIntro="1992 was exuberant, dramatic, and packed with landmark moments. Here's what the world looked like when you arrived:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>Barcelona Olympics (July–August):</strong> The US Dream Team — Jordan, Magic
          Johnson, Bird, Barkley — won gold by an average margin of 44 points per game. Sprinter
          Linford Christie won the 100m gold at age 32, the oldest man ever to do so.
        </li>
        <li>
          <strong>LA Riots (April 29 – May 4):</strong> After four LAPD officers were acquitted for
          beating Rodney King — despite a video that had been broadcast globally — Los Angeles
          erupted. 63 people died, over 12,000 were arrested, and $1 billion in property was damaged.
        </li>
        <li>
          <strong>Bill Clinton elected (November 3):</strong> The Arkansas Governor defeated
          incumbent George H.W. Bush. James Carville's internal campaign slogan — "It's the economy,
          stupid" — became one of the most quoted lines in American political history.
        </li>
        <li>
          <strong>The Maastricht Treaty (February 7):</strong> Signed by 12 European nations,
          creating the European Union and setting the path toward a single currency. The modern EU
          was born the same year you were.
        </li>
        <li>
          <strong>First text message (December 3):</strong> Engineer Neil Papworth sent "Merry
          Christmas" to Vodafone director Richard Jarvis. You and SMS arrived in the same year, and
          you spent your teens proving it.
        </li>
        <li>
          <strong>Film & music:</strong> <em>Reservoir Dogs</em> premiered at Sundance (Tarantino's
          debut), <em>Aladdin</em>, <em>Unforgiven</em>, <em>A Few Good Men</em>.
          Red Hot Chili Peppers' "Under the Bridge," Boyz II Men's "End of the Road" (13 weeks at
          #1), En Vogue. Johnny Carson hosted his final <em>Tonight Show</em> on May 22.
        </li>
        <li>
          <strong>Euro Disney opened (April 12):</strong> Outside Paris, to a critical reception
          that included French intellectuals calling it "a cultural Chernobyl." It eventually became
          Disneyland Paris. Mike Tyson was convicted and sentenced to 6 years in prison in March.
        </li>
      </ul>
    }
    worldOutro="You were born into a year of genuine turbulence and genuine joy in almost equal measure. Your generation has always known how to hold both."
    futureRows={[
      ["2027", "34–35"],
      ["2030", "37–38"],
      ["2035", "42–43"],
      ["2040", "47–48"],
      ["2050", "57–58"],
      ["2060", "67–68"],
    ]}
    futureNote="The big 40 arrives in 2032 — still a long way out, and the 30s have plenty of their own moments first."
    planetRows={[
      ["Mercury", "~141 Mercury years"],
      ["Venus", "~55 Venus years"],
      ["Mars", "~18 Mars years"],
      ["Jupiter", "~2.8 Jupiter years"],
      ["Saturn", "~1.1 Saturn years"],
    ]}
    planetNote="On Mars you'd be 18 — just entering adulthood. On Mercury you'd have orbited the sun 141 times. The universe has no consistent opinion on how old you are."
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
        — a 34-year-old (based on ~79 years average) sits at approximately{" "}
        <strong>10:18 AM</strong>. Not even close to noon. The whole afternoon still ahead.
      </>
    }
    finalNote={
      <>
        The figures above are calculated for someone turning 34 in 2026. Your precise age — in
        days, hours, minutes, and heartbeats — depends on your exact birthday. Find it at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me
        </a>{" "}
        — free, instant, and considerably more interesting than just "34."
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i" },
      { tag: "Biology", title: "How Many Heartbeats in a Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime" },
      { tag: "Astronomy", title: "How Many Full Moons in a Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime" },
      { tag: "Trivia", title: "Birthday Twins: Famous People Born on Your Birthday", href: "/blog/birthday-twins-famous-people-born-on-your-birthday" },
    ]}
  />
);

export default BornIn1992;
