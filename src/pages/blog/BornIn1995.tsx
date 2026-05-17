import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const credit = (name: string, url = "https://unsplash.com") => (
  <>
    Photo by {name} on{" "}
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
      Unsplash
    </a>
  </>
);

const BornIn1995 = () => (
  <BornInYearArticle
    year={1995}
    preBirthdayAge={30}
    postBirthdayAge={31}
    slug="how-old-am-i-if-i-was-born-in-1995"
    title="How Old Am I If I Was Born in 1995? | Age in 2026"
    description="Born in 1995? You're 30 or 31 in 2026. Find your exact age in days, heartbeats, and full moons — plus a look at the year Windows 95 and Toy Story changed everything."
    intro={
      <>
        If you were born in 1995, you are <strong>30 or 31 years old in 2026</strong> — 31 if your
        birthday has passed this year, 30 if it's still ahead. Thirty is the milestone that lands
        differently than any other — not because anything actually changes, but because the number
        sounds like a sentence. You happen to share it with some notable company: 1995 was the year{" "}
        <a
          href="https://www.history.com/this-day-in-history/amazon-opens-for-business"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Amazon opened to the public
        </a>
        , Windows 95 launched with a Rolling Stones soundtrack and 7 million copies sold in five
        weeks, and Pixar released the first fully computer-animated feature film. You and the modern
        internet are the same age. You grew up alongside it. That's not a coincidence — it's the
        defining fact of your generation.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1583454155184-870eeb502652?w=1200&q=75&auto=format&fit=crop",
      alt: "Colorful 90s toys and gadgets — Tamagotchi era nostalgia",
      credit: credit("Unsplash", "https://unsplash.com"),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc?w=1200&q=75&auto=format&fit=crop",
      alt: "Cassette player and Walkman — mid-90s personal audio",
      credit: credit("Valentino Funghi", "https://unsplash.com/@funghi"),
    }}
    daysLived={
      <>
        At 31 years old, you've lived approximately <strong>11,323 days</strong>. Over eleven
        thousand mornings that started whether you were ready or not — commutes, conversations,
        bad news, and ordinary Tuesdays that somehow became the years you remember most clearly.
      </>
    }
    hoursMinutes={
      <>
        That's <strong>~271,752 hours</strong> since your first breath, and{" "}
        <strong>~16,305,120 minutes</strong> of life so far. For context: if you'd spent every
        single one of those minutes watching films, you'd have gotten through roughly 270,000
        feature-length movies. You haven't. But you could have.
      </>
    }
    heartbeats={
      <>
        Your heart beats approximately 100,000 times a day, according to the{" "}
        <a
          href="https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          American Heart Association
        </a>
        . Over 31 years, that's roughly <strong>1.13 billion heartbeats</strong> — never once
        stopping to check whether you deserved them. It just kept going.
      </>
    }
    fullMoons={
      <>
        The{" "}
        <a
          href="https://moon.nasa.gov/moon-in-motion/phases-eclipses-supermoons/moon-phases/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          lunar cycle
        </a>{" "}
        runs 29.5 days. Since 1995, roughly <strong>384 full moons</strong> have risen while you
        were alive — each one quietly marking another month passed.
      </>
    }
    breaths={
      <>
        At a resting rate of 15 breaths per minute over 31 years: approximately{" "}
        <strong>243 million breaths</strong>. Your first one was the announcement. Every single
        one since has been the invisible, automatic work of staying in the room.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1995, you are a <strong>Millennial</strong> — near the tail end of the
          generation.{" "}
          <a
            href="https://www.pewresearch.org/social-trends/2019/01/17/where-millennials-end-and-generation-z-begins/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Pew Research
          </a>{" "}
          draws the Millennial cutoff at 1996, making you one of the final members of that cohort.
          In practice, people born in 1995 often feel stranded between two generations: too young
          to relate to the early-Millennial experience of dialing up the internet on a shared
          family computer, too old to have grown up with smartphones from the start. You remember
          life before social media, but only just.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          You were 6 years old on September 11, 2001. Too young to process it politically, old
          enough to feel the shift in how the adults around you moved through the world afterward.
          The years of heightened security, the wars, the background hum of anxiety — all of that
          became normal during your elementary school years. You have never known a world without
          airport security theater. You grew up with <em>Harry Potter</em>, Pokémon, early
          broadband, and MSN Messenger in roughly equal measure, and you hit secondary school right
          as social media was becoming genuinely unavoidable.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Turning 30 in 2026 carries a particular weight for 1995 kids. The{" "}
          <a
            href="https://www.imf.org/en/Publications/WP/Issues/2016/12/31/The-Global-Financial-Crisis-and-the-Developing-World-Impact-and-Response-23665"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            2008 financial crisis
          </a>{" "}
          hit when you were 13 — meaning your entire understanding of adult economic life was
          formed in its wake. You graduated around 2017 into a decent job market, then watched a
          pandemic upend it three years later. At 30 or 31, many of you are finally in the first
          stable professional chapter of your lives, carrying the memory of just how quickly
          "stable" can change.
        </p>
      </>
    }
    worldIntro="1995 was the year the digital age went from specialist hobby to everyday life. Here's what was happening when you arrived:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>Windows 95 launched:</strong> On August 24, Microsoft released Windows 95 with a
          campaign that paid $12 million to license the Rolling Stones' "Start Me Up." Seven million
          copies sold in five weeks. The Start button, the taskbar, the desktop metaphor — all of
          it began here.
        </li>
        <li>
          <strong>Oklahoma City bombing:</strong>{" "}
          <a
            href="https://www.fbi.gov/history/famous-cases/oklahoma-city-bombing"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            On April 19
          </a>
          , Timothy McVeigh detonated a truck bomb outside the Alfred P. Murrah Federal Building —
          168 people killed, including 19 children. The deadliest domestic terrorism attack in
          American history up to that point.
        </li>
        <li>
          <strong>eBay founded:</strong> Pierre Omidyar launched the site in September 1995. The
          first item sold was a broken laser pointer for $14.83. He asked the buyer if he understood
          it was broken. The buyer said he collected broken laser pointers.{" "}
          <a
            href="https://www.ebay.com/help/account/default/ebays-story?id=4012"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            The internet economy was born.
          </a>
        </li>
        <li>
          <strong><em>Toy Story</em>:</strong> Pixar released the world's first fully
          computer-animated feature film on November 22. It changed cinema permanently and also
          made you afraid your toys came alive when you left the room.
        </li>
        <li>
          <strong>O.J. Simpson acquitted:</strong> On October 3, 150 million Americans watched the
          verdict live. The trial had dominated television for nine months and split the country
          along racial lines in ways that polling made uncomfortably visible.
        </li>
        <li>
          <strong>Music:</strong> Oasis vs. Blur — the Battle of Britpop consumed an entire
          summer. Also: Alanis Morissette's <em>Jagged Little Pill</em>, Coolio's{" "}
          <em>Gangsta's Paradise</em>, TLC's "Waterfalls," Hootie &amp; the Blowfish's{" "}
          <em>Cracked Rear View</em> selling 21 million copies. Radio was a real cultural force.
        </li>
        <li>
          <strong>The Tokyo subway attack:</strong> On March 20, members of the Aum Shinrikyo cult
          released sarin nerve agent in the Tokyo subway during rush hour — 13 dead, nearly 1,000
          seriously injured, thousands more affected. The first major chemical terrorism attack on
          a civilian transit system.
        </li>
      </ul>
    }
    worldOutro={
      <>
        1995 sits at a specific inflection point: analog culture at its confident peak, digital
        life just becoming real. The Walkman was still everywhere. The web was mostly text.
        Blockbuster had a line on Friday night. Within five years, nearly all of it would look
        antique. You were born right at the hinge.
      </>
    }
    futureRows={[
      ["2027", "31–32"],
      ["2030", "34–35"],
      ["2035", "39–40"],
      ["2036", "40–41"],
      ["2040", "44–45"],
      ["2050", "54–55"],
    ]}
    futureNote={
      <>
        The milestone <strong>40</strong> arrives in 2035 or 2036 depending on your birthday.
        From 30, that's a full decade away — close enough to think about occasionally, far enough
        that it doesn't need to be thought about yet.
      </>
    }
    planetRows={[
      ["Mercury", "~129 Mercury years"],
      ["Venus", "~50 Venus years"],
      ["Mars", "~16 Mars years"],
      ["Jupiter", "~2.6 Jupiter years"],
      ["Saturn", "~1.05 Saturn years"],
    ]}
    planetNote="On Saturn you've just barely completed your first full orbit — you'd be celebrating your 1st 'birthday' for the first time. On Mercury, the same 31 years works out to 129. The universe is not consistent about this."
    lifeClock={
      <>
        On a 24-hour life clock — midnight at birth, midnight at the end of a full life — a
        31-year-old (based on a{" "}
        <a
          href="https://www.who.int/data/gho/indicator-metadata-registry/imr-details/65"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          global average life expectancy of ~73 years
        </a>
        ) sits at approximately <strong>10:10 AM</strong>. The morning is still going. There's an
        entire afternoon ahead, and the evening hasn't been thought about yet.
      </>
    }
    finalNote={
      <>
        The numbers above use 31 as the base age. Your precise count — calculated from your actual
        birth date — is at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me
        </a>
        .
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i" },
      { tag: "Biology", title: "How Many Heartbeats in a Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime" },
      { tag: "Perspective", title: "What Is a Life Clock?", href: "/blog/what-is-a-life-clock" },
      { tag: "Trivia", title: "What Day of the Week Were You Born?", href: "/blog/what-day-of-the-week-was-i-born" },
    ]}
  />
);

export default BornIn1995;
