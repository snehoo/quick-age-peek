import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const BornIn1985 = () => (
  <BornInYearArticle
    year={1985}
    preBirthdayAge={40}
    postBirthdayAge={41}
    slug="how-old-am-i-if-i-was-born-in-1985"
    title="How Old Am I If I Was Born in 1985? | Age in 2026"
    description="Born in 1985? You're 40 or 41 in 2026 — but your life is so much more than that. Discover your age in days, heartbeats, full moons, and what makes 1985 babies unique."
    intro={
      <>
        If you were born in 1985, you are <strong>40 or 41 years old in 2026</strong> — 40 if your
        birthday hasn't arrived yet this year, 41 if it has. But if you grew up in the mid-80s, you
        already know that a single number never tells the whole story. You arrived in a world of
        cassette tapes and neon leg warmers, where Back to the Future was playing in cinemas and the
        first Nintendo Entertainment System had just landed in American homes.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1692623438129-2949d20ca82e?fm=jpg&q=80&w=1200&auto=format&fit=crop",
      alt: "A vintage birthday cake with candles glowing warmly",
      credit: (
        <>
          Photo by Paulina Kaminska on{" "}
          <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline">
            Unsplash
          </a>
        </>
      ),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1680730044689-1970d56a7f06?fm=jpg&q=80&w=1200&auto=format&fit=crop",
      alt: "Children gathered around a birthday cake, blowing out candles together",
      credit: (
        <>
          Photo by Nationaal Archief on{" "}
          <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline">
            Unsplash
          </a>
        </>
      ),
    }}
    daysLived={
      <>
        At 41 years old, you've lived approximately <strong>14,975 days</strong> (give or take a few
        depending on your exact birthday and leap years). That's nearly 15,000 individual sunrises
        you've been around for. Think about that the next time one feels ordinary.
      </>
    }
    hoursMinutes={
      <>
        <strong>~359,400 hours</strong> since you were born and{" "}
        <strong>~21,564,000 minutes</strong> of life logged.
      </>
    }
    heartbeats={
      <>
        Your heart beats around 100,000 times a day. Over 41 years, that adds up to roughly{" "}
        <strong>1.5 billion heartbeats</strong> — each one automatic, relentless, yours. Not a
        single one taken for granted.
      </>
    }
    fullMoons={
      <>
        The moon completes its cycle every 29.5 days. Since 1985, you've witnessed approximately{" "}
        <strong>500 full moons</strong> light up the night sky.
      </>
    }
    breaths={
      <>
        At an average of 15 breaths per minute, you've taken somewhere in the region of{" "}
        <strong>300 million breaths</strong> since the moment you entered the world.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1985, you are a <strong>Millennial</strong> — specifically an "elder millennial"
          or "geriatric millennial" (a term worn with pride and mild irony in equal measure). You
          straddle two worlds: you remember life before the internet but adapted to it young enough
          to feel native. You had a childhood without smartphones but an adulthood defined by them.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Your generational cohort (roughly 1981–1996) is the most studied, analyzed, and
          occasionally blamed generation in recent history. What's certain is that your formative
          years gave you an unusual resilience: you came of age during the dot-com boom, lived
          through 9/11 as a teenager or young adult, graduated into a financial crisis, and built
          your career through a global pandemic.
        </p>
      </>
    }
    worldImage={{
      src: "https://images.unsplash.com/photo-1661505084118-2c3eacef5663?fm=jpg&q=80&w=1200&auto=format&fit=crop",
      alt: "A couple sharing a moment near a vintage birthday cake",
      credit: (
        <>
          Photo by Annie Spratt on{" "}
          <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline">
            Unsplash
          </a>
        </>
      ),
    }}
    worldIntro="When you came into the world in 1985, here's what was happening around you:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>Music:</strong> "We Are the World" topped charts as a charity supergroup anthem.
          Madonna's <em>Like a Virgin</em> was everywhere. Bruce Springsteen was Born in the USA.
        </li>
        <li>
          <strong>Film:</strong> Back to the Future opened to rapturous reviews in July. The
          Goonies, Cocoon, and The Breakfast Club all hit cinemas the same year.
        </li>
        <li>
          <strong>Tech:</strong> The first version of Windows (1.0) was released by Microsoft in
          November 1985. The Commodore 64 was the home computer to have.
        </li>
        <li>
          <strong>World:</strong> Mikhail Gorbachev became the leader of the Soviet Union. Live Aid
          raised $125 million for famine relief in Ethiopia.
        </li>
        <li>
          <strong>Sport:</strong> Chicago Bears won Super Bowl XX. Boris Becker, just 17, became the
          youngest Wimbledon men's singles champion ever.
        </li>
      </ul>
    }
    worldOutro="You've lived through the end of the Cold War, the rise of the internet, the smartphone revolution, streaming, social media, and AI. That's a lot of world to absorb in four decades."
    futureRows={[
      ["2027", "41–42"],
      ["2030", "44–45"],
      ["2035", "49–50"],
      ["2040", "54–55"],
      ["2050", "64–65"],
      ["2060", "74–75"],
    ]}
    futureNote="The 50th birthday is on the horizon — and for 1985 babies, that milestone arrives in 2035."
    planetRows={[
      ["Mercury", "~170 Mercury years"],
      ["Venus", "~67 Venus years"],
      ["Mars", "~21 Mars years"],
      ["Jupiter", "~3.4 Jupiter years"],
      ["Saturn", "~1.4 Saturn years"],
    ]}
    planetNote="On Jupiter, you'd barely be starting primary school. On Mercury, you'd be ancient. It's all relative."
    lifeClock={
      <>
        If a human life were a 24-hour clock — with birth at midnight and a full life at the stroke
        of midnight again — a 41-year-old sitting at an average life expectancy of around 79 years
        is at approximately <strong>12:25 PM</strong>. Just past noon. The whole afternoon still
        stretches ahead.
      </>
    }
    finalNote={
      <>
        The numbers above are based on turning 41 in 2026, but your exact age depends on your
        specific birthday. To see your precise age — down to days, hours, minutes, and even
        heartbeats — use the{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me age calculator
        </a>
        . Enter your date of birth and discover your life in numbers.
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i" },
      { tag: "Biology", title: "How Many Heartbeats in a Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime" },
      { tag: "Astronomy", title: "How Many Full Moons in a Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime" },
    ]}
  />
);

export default BornIn1985;
