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
    description="Born in 1994? You're 31 or 32 in 2026. Find your exact age in days, heartbeats, and full moons — plus a look at the extraordinary year you arrived in."
    intro={
      <>
        If you were born in 1994, you are <strong>31 or 32 years old in 2026</strong> — 32 if
        your birthday has already passed this year, 31 if it's still coming. You entered a year
        that film historians still argue was the greatest twelve months in cinema history:{" "}
        <em>Pulp Fiction</em>, <em>The Shawshank Redemption</em>, <em>The Lion King</em>, and{" "}
        <em>Forrest Gump</em> all opened within months of each other. Beyond the screens, 1994 was
        a year of rupture and reinvention — a democratic election in South Africa, the birth of
        Amazon in a Bellevue garage, and a death in Seattle that left a generation feeling
        suddenly older.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1587614093080-a5afe8a54d0c?w=1200&q=75&auto=format&fit=crop",
      alt: "Old Windows 95-era personal computer on a desk — mid-90s nostalgia",
      credit: credit("Slejven Djurakovic", "https://unsplash.com/@slavudin"),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1200&q=75&auto=format&fit=crop",
      alt: "Retro gaming controller — Super Nintendo era",
      credit: credit("Glenn Carstens-Peters", "https://unsplash.com/@glenncarstenspeters"),
    }}
    daysLived={
      <>
        At 32 years old, you've lived approximately <strong>11,688 days</strong>. Nearly twelve
        thousand individual mornings — some extraordinary, most ordinary, each one yours. The
        extraordinary ones are easy to count. The ordinary ones are the ones that actually built
        you.
      </>
    }
    hoursMinutes={
      <>
        That's <strong>~280,512 hours</strong> since your first breath, and{" "}
        <strong>~16,830,720 minutes</strong> of existence on this particular planet. To put it
        another way: you've been alive long enough to watch every episode of a 20-season television
        series roughly 270 times over.
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
        , according to the American Heart Association. Over 32 years, that works out to roughly{" "}
        <strong>1.17 billion heartbeats</strong>. Your heart started before you could think,
        before you could speak, and it hasn't stopped once to ask for credit.
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
        takes 29.5 days. Since 1994, roughly <strong>410 full moons</strong> have risen while you
        were alive — most of them seen briefly through a window before moving on with the evening.
      </>
    }
    breaths={
      <>
        At a resting rate of 15 breaths per minute over 32 years: approximately{" "}
        <strong>251 million breaths</strong>. The first one was the announcement. Every one after
        has been the quiet, automatic work of staying here.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1994, you are a <strong>Millennial</strong> — sitting near the younger end of
          the cohort.{" "}
          <a
            href="https://www.pewresearch.org/social-trends/2019/01/17/where-millennials-end-and-generation-z-begins/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Pew Research
          </a>{" "}
          places the Millennial generation at 1981–1996. You were 7 years old on September 11,
          2001 — young enough that the event was absorbed more as a feeling than a political
          analysis, but old enough that there is a clear before and after in your memory. The
          world you expected to grow up in changed on a Tuesday morning in second or third grade.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          The{" "}
          <a
            href="https://www.imf.org/en/Publications/WP/Issues/2016/12/31/The-Global-Financial-Crisis-and-the-Developing-World-Impact-and-Response-23665"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            2008 financial crisis
          </a>{" "}
          arrived when you were 14. You watched your parents' generation lose jobs, houses, and
          retirement savings during your most formative years — which is why your cohort tends to
          carry a certain wariness about economic stability that older generations sometimes mistake
          for pessimism. You graduated into a job market that was still rebuilding. Many of you
          came out of college carrying student debt into a recovery that felt slower than advertised.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          In 2026, at 31 or 32, you're in the thick of what sociologists sometimes call "the
          consolidation years." The big questions — what to do, who to be with, where to live —
          have mostly started to have actual answers, even if those answers sometimes surprise you.
          Many in your cohort are buying first homes, having first children, or actively deciding
          they don't want those things. The quarter-life crisis has settled into something more
          workable. You're old enough to know who you are. You're young enough that you can still
          change it.
        </p>
      </>
    }
    worldIntro="1994 was a year of rupture, reinvention, and some of the most enduring cultural works ever made:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>Kurt Cobain died:</strong> On April 5, 1994,{" "}
          <a
            href="https://www.history.com/this-day-in-history/kurt-cobain-dies"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Nirvana's frontman was found dead at 27
          </a>
          . For a generation just beginning to form its cultural identity, it landed like a
          floor giving way. <em>Rolling Stone</em> called it the day rock died for a generation.
        </li>
        <li>
          <strong>Nelson Mandela inaugurated:</strong>{" "}
          <a
            href="https://www.history.com/this-day-in-history/mandela-inaugurated-as-south-africa-s-first-black-president"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            On May 10, 1994
          </a>
          , Mandela became South Africa's first democratically elected president, ending apartheid.
          One of the genuine good-news moments of the decade.
        </li>
        <li>
          <strong>The Rwandan Genocide:</strong> Between April and July, approximately 800,000
          Tutsis and moderate Hutus were murdered in 100 days — the fastest mass killing in
          recorded history.
        </li>
        <li>
          <strong>The O.J. Simpson Bronco chase:</strong> On June 17, 95 million Americans
          watched live as O.J. Simpson led police in a low-speed chase on the I-405 freeway.
          His subsequent trial became the first true media circus of the television age.
        </li>
        <li>
          <strong>Amazon founded:</strong>{" "}
          <a
            href="https://www.britannica.com/topic/Amazoncom"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            On July 5, 1994
          </a>
          , Jeff Bezos incorporated a company in his Bellevue garage. He briefly called it
          "Cadabra." The world would eventually know it differently.
        </li>
        <li>
          <strong>Cinema's greatest year:</strong> <em>Pulp Fiction</em> (October 14),{" "}
          <em>The Lion King</em> (June 15), <em>Forrest Gump</em> (July 6),{" "}
          <em>The Shawshank Redemption</em> (September 23), and <em>Speed</em> all opened in a
          twelve-month window. Film historians still argue over whether a single year has ever
          matched it.
        </li>
        <li>
          <strong>Music:</strong> Green Day's <em>Dookie</em>, Weezer's Blue Album, Soundgarden's{" "}
          <em>Superunknown</em>, Oasis's <em>Definitely Maybe</em>, and TLC's{" "}
          <em>CrazySexyCool</em> all dropped within the same year. Grunge and Britpop were both
          at full volume simultaneously.
        </li>
      </ul>
    }
    worldOutro={
      <>
        You were born into a year that felt like a crossroads. The optimism of the post-Cold War
        era was intact but starting to fray at the edges. The internet was becoming real but
        hadn't yet changed daily life. The last great analog decade was still running — but 1994
        was the year it started to show its age.
      </>
    }
    futureRows={[
      ["2027", "32–33"],
      ["2030", "35–36"],
      ["2034", "39–40"],
      ["2035", "40–41"],
      ["2040", "45–46"],
      ["2050", "55–56"],
    ]}
    futureNote={
      <>
        The milestone <strong>40</strong> arrives in 2034 or 2035, depending on your birthday
        month. You're close enough to see it without quite being there yet — which is probably
        exactly the right distance from a number like that.
      </>
    }
    planetRows={[
      ["Mercury", "~133 Mercury years"],
      ["Venus", "~52 Venus years"],
      ["Mars", "~17 Mars years"],
      ["Jupiter", "~2.7 Jupiter years"],
      ["Saturn", "~1.1 Saturn years"],
    ]}
    planetNote="On Jupiter you'd still be in what passes for toddlerhood. On Saturn, you're just barely through your first full orbit. On Mercury, you'd be celebrating your 133rd. The universe has very different ideas about what 'old' means."
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
        ) sits at approximately <strong>10:32 AM</strong>. The morning meeting is done. There's
        a full afternoon ahead.
      </>
    }
    finalNote={
      <>
        The numbers above use 32 as the base age. Your precise count — in days, hours, minutes,
        and heartbeats from your actual birth date — is at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me
        </a>
        .
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i/" },
      { tag: "Trivia", title: "What Day of the Week Were You Born?", href: "/blog/what-day-of-the-week-was-i-born/" },
      { tag: "Astrology", title: "How to Find Your Zodiac Sign by Birth Date", href: "/blog/how-to-find-your-zodiac-sign-by-birth-date/" },
      { tag: "Numbers", title: "How Many Seconds Old Are You Right Now?", href: "/blog/how-many-seconds-old-am-i/" },
    ]}
  />
);

export default BornIn1994;
