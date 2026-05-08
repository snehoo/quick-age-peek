import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

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
        your birthday has already passed this year, 26 if it's still coming. You were born in the
        final year of the twentieth century — the year the whole world was watching the clock,
        wondering what would happen when it ticked over to 2000. <em>The Matrix</em> hit cinemas.
        Napster launched. The euro was introduced. And somewhere in all of that, you arrived.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1650535261994-41fd11b04220?w=1200&q=75&auto=format&fit=crop",
      alt: "A woman wearing a white hat and round sunglasses — Y2K aesthetic",
      credit: (
        <>
          Photo by Deon on{" "}
          <a href="https://unsplash.com/photos/a-woman-wearing-a-white-hat-and-sunglasses-rLBKTgznq5I" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
        </>
      ),
    }}
    heartbeatImage={{
      src: "https://images.unsplash.com/photo-1773998240458-9a36e718c63a?w=1200&q=75&auto=format&fit=crop",
      alt: "Transparent purple iPod with colourful keyboard and earphones — early 2000s nostalgia",
      credit: (
        <>
          Photo by Rich Laxa on{" "}
          <a href="https://unsplash.com/photos/transparent-purple-ipod-with-colorful-keyboard-in-ear-headphones-98ZX4sKgytg" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
        </>
      ),
    }}
    daysLived={
      <>
        At 27 years old, you've lived approximately <strong>9,862 days</strong> — nearly ten
        thousand individual days of waking up on this planet and getting on with it.
      </>
    }
    hoursMinutes={
      <>
        <strong>~236,688 hours</strong> since your first breath and{" "}
        <strong>~14,201,280 minutes</strong> of life so far.
      </>
    }
    heartbeats={
      <>
        Your heart beats approximately 100,000 times a day per the American Heart Association.
        Over 27 years, that's roughly <strong>986 million heartbeats</strong> — approaching a
        billion, never once interrupted.
      </>
    }
    fullMoons={
      <>
        The lunar cycle is 29.5 days. Since 1999, you've watched approximately{" "}
        <strong>334 full moons</strong> rise.
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
          Born in 1999, you are <strong>Generation Z</strong>. You had the very last childhood in
          which being offline was the default. Then came the iPhone (2007), Facebook opening to
          everyone (2006), YouTube going mainstream — and suddenly the world was permanently
          connected.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          You came of age during COVID-19, which hit when you were 20 or 21 — right at the moment
          you were supposed to be building a social life, launching a career, and figuring out
          who you are as an adult. That experience has left a visible mark on your generation's
          mental health, economic expectations, and relationship with institutions.
        </p>
      </>
    }
    worldIntro="1999 was the last year of the millennium — and it felt like it. Here's what was happening:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li><strong>Y2K:</strong> The Y2K bug consumed global attention throughout 1999. Governments spent an estimated $300–600 billion preparing for the possibility that computer systems would fail.</li>
        <li><strong>The euro launched:</strong> On January 1, 1999, the euro was introduced as the official currency of 11 European Union member states.</li>
        <li><strong>Napster:</strong> Shawn Fanning launched Napster in June 1999, enabling peer-to-peer music file sharing. It had 80 million users at its peak.</li>
        <li><strong>The Matrix:</strong> Released in March 1999, <em>The Matrix</em> pioneered bullet-time cinematography and defined a generation's visual language.</li>
        <li><strong>Music:</strong> Britney Spears' debut <em>...Baby One More Time</em>, TLC's <em>No Scrubs</em>, Ricky Martin's <em>Livin' La Vida Loca</em>, Eminem's <em>The Slim Shady LP</em>, Lauryn Hill's Grammy sweep.</li>
        <li><strong>Film:</strong> <em>The Matrix</em>, <em>Fight Club</em>, <em>American Beauty</em>, <em>The Sixth Sense</em>, <em>Toy Story 2</em>, <em>Being John Malkovich</em>.</li>
        <li><strong>Sport:</strong> Manchester United won an unprecedented treble — Premier League, FA Cup, and Champions League — in the same season.</li>
      </ul>
    }
    futureRows={[
      ["2027", "27–28"],
      ["2030", "30–31"],
      ["2035", "35–36"],
      ["2040", "40–41"],
      ["2050", "50–51"],
      ["2060", "60–61"],
    ]}
    futureNote="The big 30 is arriving in 2029 or 2030 — depending on your birthday."
    planetRows={[
      ["Mercury", "~112 Mercury years"],
      ["Venus", "~44 Venus years"],
      ["Mars", "~14 Mars years"],
      ["Jupiter", "~2.3 Jupiter years"],
      ["Saturn", "~0.92 Saturn years"],
    ]}
    planetNote="On Saturn you haven't yet completed a single full orbit of the sun."
    lifeClock={
      <>
        On a 24-hour life clock — midnight at birth, midnight at the end of a full life — a
        27-year-old (based on a global average life expectancy of ~73 years) sits at
        approximately <strong>8:53 AM</strong>. Morning light. Everything ahead.
      </>
    }
    finalNote={
      <>
        These numbers are based on turning 27 in 2026. Your precise age — in days, hours,
        minutes, and heartbeats — depends on your exact birthday. Find it instantly at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">whatismyage.me</a>.
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i" },
      { tag: "Biology", title: "How Many Heartbeats in a Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime" },
      { tag: "Perspective", title: "What Is a Life Clock?", href: "/blog/what-is-a-life-clock" },
    ]}
  />
);

export default BornIn1999;
