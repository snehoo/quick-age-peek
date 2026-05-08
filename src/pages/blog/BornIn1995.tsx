import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const BornIn1995 = () => (
  <BornInYearArticle
    year={1995}
    preBirthdayAge={30}
    postBirthdayAge={31}
    slug="how-old-am-i-if-i-was-born-in-1995"
    title="How Old Am I If I Was Born in 1995? | Age in 2026"
    description="Born in 1995? You're 30 or 31 in 2026. Find your exact age in days, heartbeats, and full moons — plus a look at the world that shaped you."
    intro={
      <>
        If you were born in 1995, you are <strong>30 or 31 years old in 2026</strong> — 31 if your
        birthday has already passed this year, 30 if it's still coming up. Turning 30 is a
        milestone, and you happen to share it with some notable company: 1995 was the year{" "}
        <a className="text-primary underline" href="https://www.history.com/this-day-in-history/amazon-opens-for-business" target="_blank" rel="noopener noreferrer">Amazon opened to the public</a>,
        Pixar released <em>Toy Story</em> — the first fully computer-animated feature film — and
        eBay was founded. The digital economy you grew up inside was being assembled around you
        that very year.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1626726092122-f5b2af39faf6?w=1200&q=75&auto=format&fit=crop",
      alt: "Black and silver candybar mobile phone — a mid-90s icon",
      credit: (
        <>
          Photo by Girl with red hat on{" "}
          <a href="https://unsplash.com/photos/black-and-silver-candybar-phone-ma2ur_ld0ko" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
        </>
      ),
    }}
    heartbeatImage={{
      src: "https://images.unsplash.com/photo-1773998240458-9a36e718c63a?w=1200&q=75&auto=format&fit=crop",
      alt: "A transparent purple iPod with colourful in-ear headphones — early 2000s tech nostalgia",
      credit: (
        <>
          Photo by Rich Laxa on{" "}
          <a href="https://unsplash.com/photos/transparent-purple-ipod-with-colorful-keyboard-in-ear-headphones-98ZX4sKgytg" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
        </>
      ),
    }}
    daysLived={
      <>
        At 31 years old, you've lived approximately <strong>11,323 days</strong>. Over eleven
        thousand individual mornings that started whether you were ready or not.
      </>
    }
    hoursMinutes={
      <>
        <strong>~271,752 hours</strong> since you were born and{" "}
        <strong>~16,305,120 minutes</strong> of life and counting.
      </>
    }
    heartbeats={
      <>
        Your heart beats approximately 100,000 times a day, according to the American Heart
        Association. Over 31 years, that's roughly <strong>1.13 billion heartbeats</strong> —
        never once pausing, never once needing a reminder.
      </>
    }
    fullMoons={
      <>
        The lunar cycle is 29.5 days. Since 1995, you've watched roughly{" "}
        <strong>384 full moons</strong> rise — each one a quiet marker of another chapter passing.
      </>
    }
    breaths={
      <>
        At 15 breaths per minute over 31 years: approximately{" "}
        <strong>243 million breaths</strong>. Your first was the one that mattered most.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1995, you sit right on the generational boundary. Pew Research places the
          Millennial cut-off at 1996, making you a <strong>Millennial</strong> — but one who
          shares many traits with Gen Z.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          You were 6 years old on September 11, 2001 — too young to fully comprehend, old enough
          to absorb the fear in the adults around you. You grew up with <em>Harry Potter</em>,
          Pokemon, and early internet in roughly equal measure. You had a mobile phone by
          secondary school and a smartphone by your mid-teens. Instagram launched when you were
          15, and you probably joined within the first few months.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          You represent the last generation to have had a childhood substantially free of social
          media — and the first to have had your entire adolescence reshaped by it.
        </p>
      </>
    }
    worldIntro="1995 was the year the digital age went mainstream. Here's what was happening:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li><strong>Amazon opens:</strong> On July 16, 1995, Jeff Bezos launched Amazon.com to the public — initially just selling books from his garage. You and e-commerce are the same age.</li>
        <li><strong><em>Toy Story</em>:</strong> On November 22, Pixar released <em>Toy Story</em> — the world's first fully computer-animated feature film. It changed cinema permanently.</li>
        <li><strong>Windows 95:</strong> Microsoft launched Windows 95 on August 24 to massive fanfare, with a campaign featuring the Rolling Stones' <em>Start Me Up</em>. The modern PC era began here.</li>
        <li><strong>eBay founded:</strong> Pierre Omidyar launched eBay in September 1995, creating the template for internet commerce and peer-to-peer selling.</li>
        <li><strong>Music:</strong> Oasis vs. Blur — the Battle of Britpop. Also: TLC's <em>Waterfalls</em>, Mariah Carey & Boyz II Men's <em>One Sweet Day</em>, Alanis Morissette's <em>Jagged Little Pill</em>, Coolio's <em>Gangsta's Paradise</em>.</li>
        <li><strong>Film:</strong> <em>Braveheart</em>, <em>Se7en</em>, <em>Apollo 13</em>, <em>The Usual Suspects</em>, <em>GoldenEye</em>, <em>Clueless</em>.</li>
        <li><strong>Sport:</strong> The Rugby World Cup in South Africa — Nelson Mandela presented the trophy wearing the Springboks jersey in one of sport's most iconic moments.</li>
      </ul>
    }
    futureRows={[
      ["2027", "31–32"],
      ["2030", "34–35"],
      ["2035", "39–40"],
      ["2040", "44–45"],
      ["2050", "54–55"],
      ["2060", "64–65"],
    ]}
    futureNote="The milestone 40 arrives in 2035 or 2036 depending on your birthday."
    planetRows={[
      ["Mercury", "~129 Mercury years"],
      ["Venus", "~50 Venus years"],
      ["Mars", "~16 Mars years"],
      ["Jupiter", "~2.6 Jupiter years"],
      ["Saturn", "~1.05 Saturn years"],
    ]}
    planetNote="On Saturn, you've just barely completed your first full orbit. On Mercury, you'd be 129."
    lifeClock={
      <>
        On a 24-hour life clock — midnight at birth, midnight at the end of a full life — a
        31-year-old (based on a global average life expectancy of ~73 years) sits at approximately{" "}
        <strong>10:10 AM</strong>. Still morning. Everything still ahead.
      </>
    }
    finalNote={
      <>
        These numbers are based on turning 31 in 2026. Your precise age — in days, hours, minutes,
        heartbeats — depends on your specific birthday. Find it at{" "}
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

export default BornIn1995;
