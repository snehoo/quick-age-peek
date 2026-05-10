import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const credit = (name: string, url = "https://unsplash.com") => (
  <>
    Photo by {name} on{" "}
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
      Unsplash
    </a>
  </>
);

const BornIn1994 = () => (
  <BornInYearArticle
    year={1994}
    preBirthdayAge={31}
    postBirthdayAge={32}
    slug="how-old-am-i-if-i-was-born-in-1994"
    title="How Old Am I If I Was Born in 1994? | Age in 2026"
    description="Born in 1994? You're 31 or 32 in 2026. Find your exact age in days, heartbeats, and full moons — plus the incredible year you arrived in."
    intro={
      <>
        If you were born in 1994, you are <strong>31 or 32 years old in 2026</strong> — 32 if your
        birthday has already passed, 31 if it's still ahead. You were born in one of the most
        consequential years of the 1990s. The{" "}
        <a
          href="https://www.bbc.co.uk/news/uk-england-kent-27497073"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Channel Tunnel
        </a>{" "}
        opened. Nelson Mandela was elected President of South Africa.{" "}
        <a
          href="https://www.britannica.com/technology/Netscape-Navigator"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Netscape Navigator
        </a>{" "}
        launched. Jeff Bezos founded Amazon.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1774080852192-a3ee866af471?w=1200&q=75&auto=format&fit=crop",
      alt: "Vintage boombox with stickers sitting on a wooden shelf",
      credit: credit("wenbin sia", "https://unsplash.com/photos/vintage-boombox-with-stickers-on-a-wooden-shelf-ZX6vViTbYIE"),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1777428411827-b3ed593b9171?w=1200&q=75&auto=format&fit=crop",
      alt: "A black boombox with bold red speaker accents — unmistakably 90s",
      credit: credit("Smithsonian", "https://unsplash.com/photos/a-black-boombox-with-red-speaker-accents-vMzz_BwnXUU"),
    }}
    daysLived={
      <>
        At 32 years old, you've lived approximately <strong>11,688 days</strong>. Nearly twelve
        thousand individual days on this planet — each one different.
      </>
    }
    hoursMinutes={
      <>
        <strong>~280,512 hours</strong> since you were born, and{" "}
        <strong>~16,830,720 minutes</strong> of existence so far.
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
          100,000 times every day
        </a>
        . Over 32 years, that's roughly <strong>1.17 billion heartbeats</strong> — each one yours.
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
        is 29.5 days. Since 1994, roughly <strong>410 full moons</strong> have risen over your
        life.
      </>
    }
    breaths={
      <>
        At a resting rate of 15 breaths per minute over 32 years: approximately{" "}
        <strong>251 million breaths</strong>.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1994, you are a <strong>Millennial</strong> — very close to the generational
          boundary.{" "}
          <a
            href="https://www.pewresearch.org/social-trends/2019/01/17/where-millennials-end-and-generation-z-begins/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Pew Research
          </a>{" "}
          places the Millennial generation at 1981–1996, making you one of its youngest members.
          You were 7 on 9/11.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          You grew up alongside YouTube (2005), Facebook (2006), and the iPhone (2007). The entire
          social media era unfolded during your teens and twenties — you watched it happen in real
          time.
        </p>
      </>
    }
    worldIntro="1994 was a year of landmark moments, extraordinary films, and historic turning points:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>Nelson Mandela elected:</strong> On{" "}
          <a
            href="https://www.history.com/this-day-in-history/mandela-inaugurated-as-south-africa-s-president"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            May 10, 1994
          </a>
          , Mandela was inaugurated as South Africa's first democratically elected President.
        </li>
        <li>
          <strong>Channel Tunnel opens:</strong> Connecting Britain and France by rail, 31 miles
          beneath the English Channel.
        </li>
        <li>
          <strong>Netscape Navigator launched:</strong> Marc Andreessen's browser made the web
          genuinely accessible.
        </li>
        <li>
          <strong>Amazon founded:</strong> Jeff Bezos launched it from a Bellevue garage in July
          1994.
        </li>
        <li>
          <strong>Music:</strong> Oasis's <em>Definitely Maybe</em>, Blur's <em>Parklife</em>,
          Green Day's <em>Dookie</em>, TLC's <em>CrazySexyCool</em>.
        </li>
        <li>
          <strong>Film:</strong> <em>The Lion King</em>, <em>Pulp Fiction</em>,{" "}
          <em>Forrest Gump</em>, <em>The Shawshank Redemption</em>, <em>Four Weddings</em>.
          Possibly the greatest single year for cinema ever.
        </li>
      </ul>
    }
    futureRows={[
      ["2027", "32–33"],
      ["2030", "35–36"],
      ["2035", "40–41"],
      ["2040", "45–46"],
      ["2050", "55–56"],
    ]}
    futureNote="The milestone 40 arrives in 2034 or 2035, depending on your birthday month."
    planetRows={[
      ["Mercury", "~133 Mercury years"],
      ["Venus", "~52 Venus years"],
      ["Mars", "~17 Mars years"],
      ["Jupiter", "~2.7 Jupiter years"],
      ["Saturn", "~1.1 Saturn years"],
    ]}
    planetNote="On Jupiter, you'd be a toddler. On Mercury, you'd be ancient."
    lifeClock={
      <>
        On a 24-hour life clock — midnight at birth, midnight at the end of a full life — a
        32-year-old (based on a{" "}
        <a
          href="https://www.who.int/data/gho/indicator-metadata-registry/imr-details/65"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          global average life expectancy of ~73 years
        </a>
        ) sits at approximately <strong>10:32 AM</strong>. Solidly morning.
      </>
    }
    finalNote={
      <>
        The numbers above are based on turning 32 in 2026. Find your precise age instantly at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me
        </a>
        .
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i" },
      { tag: "Trivia", title: "What Day of the Week Were You Born?", href: "/blog/what-day-of-the-week-was-i-born" },
      { tag: "Astrology", title: "How to Find Your Zodiac Sign by Birth Date", href: "/blog/how-to-find-your-zodiac-sign-by-birth-date" },
      { tag: "Numbers", title: "How Many Seconds Old Are You Right Now?", href: "/blog/how-many-seconds-old-am-i" },
    ]}
  />
);

export default BornIn1994;
