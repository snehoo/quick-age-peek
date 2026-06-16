import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const credit = (name: string, url = "https://unsplash.com") => (
  <>
    Photo by {name} on{" "}
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
      Unsplash
    </a>
  </>
);

const BornIn2002 = () => (
  <BornInYearArticle
    year={2002}
    preBirthdayAge={23}
    postBirthdayAge={24}
    slug="how-old-am-i-if-i-was-born-in-2002"
    title="How Old Am I If I Was Born in 2002? | Age in 2026"
    description="Born in 2002? You're 23 or 24 in 2026. Find your exact age in days, heartbeats, and full moons — plus a look at the early 2000s world you were born into."
    intro={
      <>
        If you were born in 2002, you are <strong>23 or 24 years old in 2026</strong> — 24 if
        your birthday has passed this year, 23 if it's still ahead. Early twenties: the years of
        figuring out who you actually are, independent of the structures (school, family, the place
        you grew up) that used to define you. You were born in 2002 — the year 300 million
        Europeans woke up with new coins in their pockets, the year Sam Raimi's <em>Spider-Man</em>{" "}
        kicked off the modern superhero era, and, quietly in a dorm room somewhere, the year
        Friendster launched and social media first went mainstream. You were one year old when
        social media was invented.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1584446049209-a7ceea4e1c54?w=1200&q=75&auto=format&fit=crop",
      alt: "Pandemic and 2020 era — the defining disruption of Gen Z's coming-of-age years",
      credit: credit("Fusion Medical Animation"),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1200&q=75&auto=format&fit=crop",
      alt: "Early 2000s iPod and music era — the soundtrack of the generation born in 2002",
      credit: credit("blocks"),
    }}
    daysLived={
      <>
        At 24, you've lived approximately <strong>8,766 days</strong>. At 23, it's closer to{" "}
        <strong>8,400 days</strong>. Over eight thousand individual days of experience — each
        one different from the last, the recent ones probably more interesting than the early ones.
      </>
    }
    hoursMinutes={
      <>
        Twenty-four years translates to roughly <strong>210,240 hours</strong> and{" "}
        <strong>12,614,400 minutes</strong> of existence. That number grows by 1,440 every day,
        automatically, whether you're paying attention or not.
      </>
    }
    heartbeats={
      <>
        At approximately 100,000 heartbeats per day, you've accumulated roughly{" "}
        <strong>876 million heartbeats</strong> over 24 years — over three quarters of a billion,
        every single one automatic, none requiring a conscious decision to continue.
      </>
    }
    fullMoons={
      <>
        The lunar cycle completes every 29.5 days. Since 2002, the full moon has risen
        approximately <strong>297 times</strong>. Your whole life, measured in moons.
      </>
    }
    breaths={
      <>
        At 15 breaths per minute over 24 years: roughly <strong>189 million breaths</strong>.
        Each one quietly underwriting everything else you've ever done.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 2002, you are <strong>Generation Z</strong> — fully and squarely, without
          any of the "elder Gen Z" asterisks that 1997-borns sometimes claim. You are among the
          most genuinely digitally native people alive. You don't remember dial-up internet,
          don't remember a world before WiFi, don't remember a time when looking something up
          meant going to a library. Broadband and Google were simply always there.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Your generation grew up entirely post-9/11. You were born the year after the attacks —
          you have zero memory of them. But you grew up inside every consequence: the surveillance
          infrastructure, the security theatre at airports, the continuous overseas military
          operations that were simply part of the background of childhood. September 11 is something
          you studied in school, the way older generations studied Vietnam. That's a genuinely
          different relationship with that event than anyone born before 2001.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Smartphones arrived when you were around five to eight years old. Social media was
          handed to you in early adolescence — Instagram when you were around nine or ten,
          Snapchat at twelve or thirteen, TikTok by fifteen or sixteen. Identity formation for
          your cohort happened partially in public, on platforms, with performance metrics
          (likes, followers, views) attached. Researchers have spent years studying this and the
          findings are consistent: Gen Z has the highest recorded rates of anxiety and depression
          of any generation in modern survey history. The correlation with social media use from
          ages 10–12 onward is strong. You are not imagining the weight of it.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          COVID arrived when you were 17 or 18 — the final year of secondary school or the very
          first year of university. Your A-levels, your leaving cert, your senior year — disrupted
          or cancelled. The moment you were supposed to transition into adult independence happened
          during a global pandemic. Many in your cohort moved back home, missed the in-person
          experiences that tend to shape early adulthood, and emerged into a changed world
          carrying the invisible weight of that disruption. At 23 or 24 in 2026, you're the
          youngest in this series — and you're only just getting started.
        </p>
      </>
    }
    worldIntro="Here's what was happening in 2002, the year you arrived:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>Euro coins and notes entered circulation, January 1:</strong> Twelve countries,
          300 million people, switched physical currencies overnight — the largest currency
          transition in history. Greeks, Germans, Italians, French and others all woke up with
          euros instead of drachmas, marks, lire, and francs. Background at{" "}
          <a
            href="https://www.ecb.europa.eu/euro/changeover/html/index.en.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            European Central Bank
          </a>
          .
        </li>
        <li>
          <strong>Salt Lake City Winter Olympics, February:</strong> The first Olympics since 9/11.
          The American flag recovered from Ground Zero was carried into the opening ceremony by
          a group of NYPD officers and firefighters. The moment was raw and real. Team USA won
          34 medals — their best Winter Games performance at the time.
        </li>
        <li>
          <strong>Spider-Man (Sam Raimi), May 3:</strong> Tobey Maguire as Peter Parker grossed
          $821 million globally — the first superhero film of the modern era to cross $800 million.
          It proved comic-book adaptations could be serious, emotional blockbusters. The MCU would
          launch five years later and take that lesson to its logical conclusion.
        </li>
        <li>
          <strong>Bali bombings, October 12:</strong> Two bombs at nightclubs in Kuta, Bali killed
          202 people — mostly Australian tourists. It was the deadliest terrorist attack since 9/11
          and made brutally clear that the "war on terror" wasn't geographically contained.
        </li>
        <li>
          <strong>Friendster launched — social media goes mainstream:</strong> Friendster was the
          first social network to reach mainstream adoption, hitting 3 million users in its first
          few months. MySpace followed in 2003. Facebook in 2004. The social media era was born.
          You were one year old when it started. You've never known a world without it.
        </li>
        <li>
          <strong>The DC Sniper attacks, October 2–22:</strong> John Muhammad and Lee Boyd Malvo
          killed 10 people across three weeks of random shootings in the Washington DC area.
          Schools cancelled outdoor activities. Gas stations erected plywood shields. The region
          was paralysed for nearly a month.
        </li>
        <li>
          <strong>Music and film of 2002:</strong> Eminem released both "Without Me" and "Lose
          Yourself" and starred in <em>8 Mile</em>. Justin Timberlake launched his solo career
          with "Cry Me a River." Avril Lavigne's debut <em>Let Go</em>, Coldplay's{" "}
          <em>A Rush of Blood to the Head</em>. In cinemas: <em>The Lord of the Rings: The Two
          Towers</em>, <em>Minority Report</em>, <em>Chicago</em> (Best Picture), Sam Raimi's
          <em>Spider-Man</em>. Brazil won the FIFA World Cup with Ronaldo scoring 8 goals.
        </li>
      </ul>
    }
    worldOutro={
      <>
        You arrived one year after the world changed and grew up entirely inside the consequences.
        In 2026 you're in your early twenties, building something from scratch — and you're doing
        it with more context, more self-awareness, and more information than any generation before
        you had at this age. That counts for something.
      </>
    }
    futureRows={[
      ["2027", "24–25"],
      ["2030", "27–28"],
      ["2035", "32–33"],
      ["2040", "37–38"],
      ["2050", "47–48"],
      ["2060", "57–58"],
    ]}
    futureNote={
      <>
        Your 30th birthday arrives in 2032. The late twenties — which everyone warns you about
        and which most people actually find more stable than their early twenties — are still
        ahead of you.
      </>
    }
    planetRows={[
      ["Mercury", "~100 Mercury years (88 days per orbit)"],
      ["Venus", "~39 Venus years (225 days per orbit)"],
      ["Mars", "~12.8 Mars years (687 days per orbit)"],
      ["Jupiter", "~2.0 Jupiter years (12 Earth years per orbit)"],
      ["Saturn", "~0.81 Saturn years (29.5 Earth years per orbit)"],
    ]}
    planetNote={
      <>
        On Jupiter, you'd just be celebrating your second birthday. On Mercury, you'd be
        a century old. On Saturn, you haven't completed your first full orbit around the sun.
        Age is a very local concept.
      </>
    }
    lifeClock={
      <>
        Map a human life onto a 24-hour clock — midnight at birth, midnight at age 79 — and a
        24-year-old lands at approximately <strong>7:16 AM</strong>. Early morning. The entire
        day is in front of you.
      </>
    }
    finalNote={
      <>
        The figures above use 24 as the base age. Your precise count — days, hours, heartbeats,
        full moons — depends on your exact birthday. Get your specific number at{" "}
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

export default BornIn2002;
