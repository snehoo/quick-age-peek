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
    description="Born in 1992? You're 33 or 34 in 2026. Discover your age in days, heartbeats, and full moons — plus a look back at the iconic year you entered the world."
    intro={
      <>
        If you were born in 1992, you are <strong>33 or 34 years old in 2026</strong> — 34 if your
        birthday has already passed this year, 33 if it's still on its way. You were born in the
        year of the{" "}
        <a
          href="https://www.olympic.org/barcelona-1992"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Barcelona Olympics
        </a>
        , the year the European Union was created by the{" "}
        <a
          href="https://www.europarl.europa.eu/about-parliament/en/democracy-and-human-rights/maastricht-treaty"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Maastricht Treaty
        </a>
        , and the year the first text message was ever sent.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1759171053096-e7dbe7c36eb6?w=1200&q=75&auto=format&fit=crop",
      alt: "Retro arcade machines glowing with neon light in the dark",
      credit: credit("Jason Leung", "https://unsplash.com/photos/retro-arcade-machines-glow-in-the-dark-eB5l2Y-MaZw"),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1764561842676-f3bbcaa75184?w=1200&q=75&auto=format&fit=crop",
      alt: "A colourful 90s smiley face graphic with wavy psychedelic patterns",
      credit: credit("Logan Voss", "https://unsplash.com/photos/a-colorful-smiley-face-with-wavy-background-patterns-NvmVwxxTSrs"),
    }}
    daysLived={
      <>
        At 34 years old, you've lived approximately <strong>12,419 days</strong> — over twelve
        thousand mornings that started whether you were ready or not.
      </>
    }
    hoursMinutes={
      <>
        <strong>~298,056 hours</strong> of being alive, and <strong>~17,883,360 minutes</strong>{" "}
        since your first breath.
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
        <strong>1.24 billion heartbeats</strong> — automatic, relentless, yours.
      </>
    }
    fullMoons={
      <>
        The lunar cycle completes every 29.5 days. Since 1992, you've seen approximately{" "}
        <strong>432 full moons</strong> light up the night sky.
      </>
    }
    breaths={
      <>
        At 15 breaths per minute across 34 years: roughly <strong>267 million breaths</strong>.
        Each one a quiet, invisible miracle.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1992, you are a <strong>Millennial</strong>. According to{" "}
          <a
            href="https://www.pewresearch.org/social-trends/2019/01/17/where-millennials-end-and-generation-z-begins/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Pew Research
          </a>
          , the Millennial generation spans roughly 1981 to 1996 — placing you right in its heart.
          You were 9 on 9/11, grew up with Harry Potter, Tamagotchis, and dial-up internet.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          You and text messaging were born the same year: the first SMS — reading "Merry Christmas"
          — was transmitted on{" "}
          <a
            href="https://www.theguardian.com/technology/2012/dec/03/first-text-message-sent-20-years-ago"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            December 3, 1992
          </a>
          . Your communication style and the medium that defines it arrived together.
        </p>
      </>
    }
    worldIntro="1992 was exuberant, dramatic, and full of landmark moments:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>Barcelona Olympics:</strong> Widely considered the finest modern Olympics. The US
          Dream Team (Jordan, Magic, Bird) dominated basketball.
        </li>
        <li>
          <strong>The European Union born:</strong> The Maastricht Treaty was signed on February 7,
          formally creating the EU.
        </li>
        <li>
          <strong>Bill Clinton elected:</strong> The Arkansas Governor defeated incumbent George
          H.W. Bush in November.
        </li>
        <li>
          <strong>First text message:</strong> Engineer Neil Papworth sent "Merry Christmas" to
          Vodafone director Richard Jarvis.
        </li>
        <li>
          <strong>Music:</strong> The Bodyguard soundtrack, Red Hot Chili Peppers, En Vogue, Sir
          Mix-A-Lot, Arrested Development.
        </li>
        <li>
          <strong>Film:</strong> <em>Aladdin</em>, <em>The Bodyguard</em>, <em>A Few Good Men</em>,{" "}
          <em>Reservoir Dogs</em>, <em>Unforgiven</em>.
        </li>
      </ul>
    }
    futureRows={[
      ["2027", "34–35"],
      ["2030", "37–38"],
      ["2035", "42–43"],
      ["2040", "47–48"],
      ["2050", "57–58"],
    ]}
    planetRows={[
      ["Mercury", "~141 Mercury years"],
      ["Venus", "~55 Venus years"],
      ["Mars", "~18 Mars years"],
      ["Jupiter", "~2.8 Jupiter years"],
      ["Saturn", "~1.1 Saturn years"],
    ]}
    planetNote="On Mars you'd be 18 — just entering adulthood. On Mercury, 141."
    lifeClock={
      <>
        On a 24-hour life clock — midnight at birth, midnight at the end of a full life — a
        34-year-old (based on a{" "}
        <a
          href="https://www.who.int/data/gho/indicator-metadata-registry/imr-details/65"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          global life expectancy of ~73 years
        </a>
        ) sits at approximately <strong>11:11 AM</strong>. Before noon. Everything still to come.
      </>
    }
    finalNote={
      <>
        The figures above are calculated for someone turning 34 in 2026. Find your precise age at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me
        </a>{" "}
        — free, instant, and far more interesting than just "34".
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
