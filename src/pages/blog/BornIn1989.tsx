import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const BornIn1989 = () => (
  <BornInYearArticle
    year={1989}
    preBirthdayAge={36}
    postBirthdayAge={37}
    slug="how-old-am-i-if-i-was-born-in-1989"
    title="How Old Am I If I Was Born in 1989? | Age in 2026"
    description="Born in 1989? You're 36 or 37 in 2026. Find your age in days, heartbeats, and full moons — plus why 1989 was one of the most extraordinary years in modern history."
    intro={
      <>
        If you were born in 1989, you are <strong>36 or 37 years old in 2026</strong>. Whether
        you've already passed your birthday this year or it's still coming, you're firmly in your
        late thirties — a point in life that tends to feel both settled and surprisingly restless at
        the same time.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1723466372840-ff6b887f4cc3?fm=jpg&q=80&w=1200&auto=format&fit=crop",
      alt: "A woman sitting at a table with a vintage book, warm and contemplative",
      credit: (
        <>
          Photo by Beaver Fernandez on{" "}
          <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline">
            Unsplash
          </a>
        </>
      ),
    }}
    heartbeatImage={{
      src: "https://images.unsplash.com/photo-1679472005171-915915085a6a?fm=jpg&q=80&w=1200&auto=format&fit=crop",
      alt: "A vintage dining room set for a birthday, candles and celebration",
      credit: (
        <>
          Photo by Markus Spiske on{" "}
          <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline">
            Unsplash
          </a>
        </>
      ),
    }}
    daysLived={
      <>
        At 37 years old, you've lived approximately <strong>13,514 days</strong>. Each one began
        with the sun rising whether you were ready or not.
      </>
    }
    hoursMinutes={
      <>
        <strong>~324,336 hours</strong> since your first breath and{" "}
        <strong>~19,460,160 minutes</strong> of being alive.
      </>
    }
    heartbeats={
      <>
        Your heart has beaten approximately <strong>1.35 billion times</strong> since the day you
        were born. It kept going through every season, every year, every night you stayed up too
        late — without ever being told to.
      </>
    }
    fullMoons={
      <>
        Since 1989, you've seen approximately <strong>460 full moons</strong> rise. That's 460
        nights when the sky was lit silver, marking the passage of your life in its own quiet
        rhythm.
      </>
    }
    breaths={
      <>
        At 15 breaths per minute over 37 years: roughly <strong>291 million breaths</strong>. Your
        first one changed everything.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1989, you are a <strong>Millennial</strong> — one of the younger ones, right on
          the cusp of the generation boundary. You came of age in the mid-2000s: MySpace, early
          YouTube, flip phones that felt revolutionary, and the slow dawning realisation that the
          internet was going to change absolutely everything.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          You were 12 years old on September 11, 2001. You graduated high school in the
          mid-to-late 2000s, possibly into the teeth of the 2008 financial crisis if you went
          straight to university. You've never known a professional world without email. You barely
          remember a time before Google.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Your relationship with social media is particular: you're old enough to have existed
          before Instagram reshaped self-presentation, but young enough to have grown up with it as
          a fact of life rather than an imposition.
        </p>
      </>
    }
    worldIntro="1989 was a year that changed the map of the world. Here's what was happening when you arrived:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>The Berlin Wall:</strong> On November 9, 1989, the Berlin Wall fell. After 28
          years dividing East and West Berlin, crowds gathered and began tearing it down with
          hammers and bare hands. It was one of the most joyful televised moments of the twentieth
          century.
        </li>
        <li>
          <strong>Tiananmen Square:</strong> In June, Chinese students led pro-democracy protests in
          Beijing's Tiananmen Square. The government's crackdown — including the iconic image of a
          lone man facing a column of tanks — shocked the world.
        </li>
        <li>
          <strong>The World Wide Web:</strong> Tim Berners-Lee submitted his proposal for the World
          Wide Web in March 1989 at CERN. The document was returned with the note "Vague but
          exciting." You were born the same year as the technology that would define your
          generation.
        </li>
        <li>
          <strong>Music:</strong> Madonna, Bobby Brown, New Kids on the Block, and Roxanne Shanté.
          Also: Janet Jackson's <em>Rhythm Nation 1814</em> and Milli Vanilli's scandalous rise and
          fall.
        </li>
        <li>
          <strong>Film:</strong> <em>Batman</em> (Tim Burton), <em>Indiana Jones and the Last Crusade</em>,{" "}
          <em>Dead Poets Society</em>, <em>When Harry Met Sally</em>, <em>Do the Right Thing</em>.
          One of cinema's great years.
        </li>
        <li>
          <strong>Sport:</strong> The Hillsborough disaster in April 1989 claimed 97 Liverpool
          football fans' lives at an FA Cup semi-final in Sheffield. San Francisco 49ers won Super
          Bowl XXIII.
        </li>
      </ul>
    }
    worldOutro="You were born into a world in the middle of becoming something entirely new."
    futureRows={[
      ["2027", "37–38"],
      ["2030", "40–41"],
      ["2035", "45–46"],
      ["2040", "50–51"],
      ["2050", "60–61"],
      ["2060", "70–71"],
    ]}
    futureNote="The 40s are on the horizon — arriving in 2029 or 2030 depending on your birthday."
    planetRows={[
      ["Mercury", "~153 Mercury years"],
      ["Venus", "~60 Venus years"],
      ["Mars", "~19 Mars years"],
      ["Jupiter", "~3.1 Jupiter years"],
      ["Saturn", "~1.3 Saturn years"],
    ]}
    planetNote="On Mars, you'd be a teenager. On Mercury, you'd have lived 153 full orbital years. Time is wonderfully strange."
    lifeClock={
      <>
        On a 24-hour life clock — midnight birth to midnight at the end of a full life — a
        37-year-old (average life expectancy ~79 years) sits at approximately{" "}
        <strong>11:15 AM</strong>. Before noon. The whole rest of the day ahead.
      </>
    }
    finalNote={
      <>
        These numbers are based on turning 37 in 2026. Your precise age — in days, hours, minutes,
        even heartbeats — depends on your specific birthday. Discover it all at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me
        </a>
        .
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i" },
      { tag: "Astronomy", title: "How Many Full Moons in a Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime" },
      { tag: "Perspective", title: "What Is a Life Clock?", href: "/blog/what-is-a-life-clock" },
    ]}
  />
);

export default BornIn1989;
