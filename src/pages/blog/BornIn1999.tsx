import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const credit = (name: string, url = "https://unsplash.com") => (
  <>
    Photo by {name} on{" "}
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
      Unsplash
    </a>
  </>
);

const BornIn1999 = () => (
  <BornInYearArticle
    year={1999}
    preBirthdayAge={26}
    postBirthdayAge={27}
    slug="how-old-am-i-if-i-was-born-in-1999"
    title="How Old Am I If I Was Born in 1999? | Age in 2026"
    description="Born in 1999? You're 26 or 27 in 2026. Find your age in days, heartbeats, and full moons — plus why 1999 was one of the most electric years in modern history."
    intro={
      <>
        If you were born in 1999, you are <strong>26 or 27 years old in 2026</strong> — 27 if
        your birthday has already passed this year, 26 if it's still coming. You arrived in the
        final year of the twentieth century — the year the entire world was watching a digital
        clock and quietly panicking about what would happen when it rolled over to 2000. Billions
        were spent. Bunkers were stocked. The Matrix hit cinemas and asked whether any of it was
        even real. Napster launched and broke the music industry in half. And somewhere in all
        of that extraordinary noise, you arrived.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1497515114851-e55cf768414d?w=1200&q=75&auto=format&fit=crop",
      alt: "Old computer countdown display — the Y2K era that defined 1999",
      credit: credit("Markus Spiske"),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1592659762303-f57d1c2f5f40?w=1200&q=75&auto=format&fit=crop",
      alt: "2000s childhood toys and colourful objects — the world 1999 babies grew up in",
      credit: credit("Stas Knop"),
    }}
    daysLived={
      <>
        At 27, you've lived approximately <strong>9,862 days</strong>. At 26, it's closer to{" "}
        <strong>9,497 days</strong>. Either way, that's nearly ten thousand mornings. You've
        woken up and chosen what to do with each one. That's worth pausing on.
      </>
    }
    hoursMinutes={
      <>
        Twenty-seven years translates to roughly <strong>236,688 hours</strong> and{" "}
        <strong>14,201,280 minutes</strong> of existence. Every day adds another 1,440 to
        the total, rain or shine.
      </>
    }
    heartbeats={
      <>
        At approximately 100,000 heartbeats per day, you've clocked roughly{" "}
        <strong>986 million heartbeats</strong> over 27 years — approaching a billion, never
        once pausing for a break.
      </>
    }
    fullMoons={
      <>
        The lunar cycle takes 29.5 days to complete. Since 1999, the full moon has risen
        approximately <strong>334 times</strong>. Ancient calendars were built around this rhythm.
        Your life has unfolded against it whether you looked up or not.
      </>
    }
    breaths={
      <>
        At 15 breaths per minute over 27 years: roughly <strong>212 million breaths</strong>.
        Automatic. Constant. The quiet engine of being alive.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1999, you are <strong>Generation Z</strong> — and you had the very last
          childhood in which being offline was the default. You might have fuzzy early memories
          of dial-up internet, of boxy family computers that lived in a specific room and had to
          be shared. Then, fairly rapidly, everything changed: the iPhone arrived in 2007 (when
          you were around eight), Facebook opened to everyone in 2006, YouTube went mainstream
          in 2007. By the time you hit your teens, the always-connected world was simply the
          world.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Your generation grew up entirely post-9/11. You were about two years old when the
          attacks happened, so you have no memory of the pre-9/11 world at all. The post-9/11
          security state — airport body scanners, surveillance cameras on every street corner,
          the assumption that your metadata might be collected — is just how things are. You
          never had a version of normal to compare it to.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Columbine happened months before you were born, in April 1999. You grew up in the
          lockdown-drill generation — schools that trained you from primary age to shelter in
          place. That particular anxiety, woven into the fabric of American education since 1999,
          is part of the texture of Gen Z childhood in a way that has no real precedent.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          COVID hit when you were 20 or 21 — peak university years, the years you were supposed
          to be building a social world and figuring out who you are as an adult. A lot of that
          happened behind screens, in isolation, with a pandemic backdrop. Gen Z has the highest
          recorded rates of anxiety and depression of any generation in modern survey data —
          researchers link it partly to social media use from ages 10–12 onward, partly to the
          cumulative weight of growing up with active-shooter drills, climate anxiety, economic
          uncertainty, and a pandemic hitting right on cue. At 26 or 27 in 2026, you are in
          early career mode, figuring out a high-cost world without a very helpful roadmap.
        </p>
      </>
    }
    worldIntro="Here's what was happening in 1999, the year you arrived:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>Y2K dominated global attention all year:</strong> The fear that two-digit year
          codes in computer systems would cause catastrophic failures at midnight January 1, 2000
          led to an estimated $300–600 billion in remediation spending worldwide. Governments,
          banks, airlines, hospitals — everyone was scrambling. It largely fizzled. But the fear
          was completely real at the time. Full context at{" "}
          <a
            href="https://www.bbc.com/news/technology-49040765"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            BBC News
          </a>
          .
        </li>
        <li>
          <strong>Napster launched, June 1:</strong> Shawn Fanning, a 19-year-old Northeastern
          University student, released his peer-to-peer music file-sharing application. Within
          two years it had 80 million registered users. Within five years it had helped destroy
          the CD industry. The music business has never fully recovered (or reorganised) since.
        </li>
        <li>
          <strong>Columbine High School shooting, April 20:</strong> Two students killed 13 people
          and injured 21 others before taking their own lives. It was the deadliest school shooting
          in US history at the time. It changed school security permanently — and it happened the
          month before many 1999-borns arrived in the world.
        </li>
        <li>
          <strong>The Matrix, March 31:</strong> The Wachowskis' sci-fi film introduced bullet-time
          cinematography, grossed $463 million, and launched a philosophical conversation about
          simulated reality that genuinely hasn't stopped. The red pill / blue pill metaphor has
          become embedded in the culture in ways its creators probably didn't fully intend.
        </li>
        <li>
          <strong>Star Wars: Episode I – The Phantom Menace, May 19:</strong> The most
          anticipated film in cinema history up to that point. People camped outside cinemas for
          weeks. It grossed over $1 billion. The disappointment was proportional to the hype.
          "Jar Jar Binks" became a cultural shorthand for cinematic let-down.
        </li>
        <li>
          <strong>Euro launched as electronic currency, January 1:</strong> Eleven EU countries
          adopted the euro as their official currency, though coins and notes wouldn't arrive
          until January 2002. The largest currency unification in history began with a button
          press, not a ceremony.
        </li>
        <li>
          <strong>Music of 1999:</strong> Britney Spears' debut <em>...Baby One More Time</em>{" "}
          sold 25 million copies. Eminem's <em>The Slim Shady LP</em> arrived. The Backstreet Boys
          and <em>*NSYNC</em> were inescapable. TLC's <em>No Scrubs</em> won Grammy Awards.
          Santana's <em>Supernatural</em> swept the 2000 Grammys with nine wins.
        </li>
      </ul>
    }
    worldOutro={
      <>
        You arrived at the exact hinge between centuries — close enough to the analogue world to
        have some fingerprints of it, young enough to be entirely shaped by what came after.
        The Y2K generation grew up to be the generation that actually built the digital world
        everyone else now lives in.
      </>
    }
    futureRows={[
      ["2027", "27–28"],
      ["2030", "30–31"],
      ["2035", "35–36"],
      ["2040", "40–41"],
      ["2050", "50–51"],
      ["2060", "60–61"],
    ]}
    futureNote={
      <>
        Your 30th birthday arrives in 2029 or 2030 — depending on your specific date of birth.
        The big round number is just ahead.
      </>
    }
    planetRows={[
      ["Mercury", "~112 Mercury years (88 days per orbit)"],
      ["Venus", "~44 Venus years (225 days per orbit)"],
      ["Mars", "~14.4 Mars years (687 days per orbit)"],
      ["Jupiter", "~2.3 Jupiter years (12 Earth years per orbit)"],
      ["Saturn", "~0.92 Saturn years (29.5 Earth years per orbit)"],
    ]}
    planetNote={
      <>
        On Saturn, you haven't yet completed your first full orbit of the sun. On Mercury, you'd
        be 112. The number depends entirely on which planet you call home.
      </>
    }
    lifeClock={
      <>
        Map a human life onto a 24-hour clock — midnight at birth, midnight at age 79 — and a
        27-year-old lands at approximately <strong>8:13 AM</strong>. Still early morning.
        The day is wide open.
      </>
    }
    finalNote={
      <>
        The numbers above use 27 as the base age. Your precise count — in days, hours, heartbeats,
        and full moons — depends on your exact birthday. Find it at{" "}
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

export default BornIn1999;
