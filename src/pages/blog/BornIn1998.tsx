import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const credit = (name: string, url = "https://unsplash.com") => (
  <>
    Photo by {name} on{" "}
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
      Unsplash
    </a>
  </>
);

const BornIn1998 = () => (
  <BornInYearArticle
    year={1998}
    preBirthdayAge={27}
    postBirthdayAge={28}
    slug="how-old-am-i-if-i-was-born-in-1998"
    title="How Old Am I If I Was Born in 1998? | Age in 2026"
    description="Born in 1998? You're 27 or 28 in 2026. Calculate your exact age in days, heartbeats, and full moons — and discover what made 1998 such a pivotal year."
    intro={
      <>
        If you were born in 1998, you are <strong>27 or 28 years old in 2026</strong> — 28 if
        your birthday has already passed this year, 27 if it's still ahead. Here's a fact that
        tends to stop people: Google was founded on September 4, 1998. That means Google and you
        are exactly the same age. You are the first generation for whom it has always existed —
        you've never had to look something up in a physical encyclopedia, never navigated with a
        paper map, never not had a search bar available. The internet, for you, has always been
        searchable.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=75&auto=format&fit=crop",
      alt: "Laptop open with code on screen — the digital world your generation built their lives around",
      credit: credit("Christopher Gower"),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1519882337540-1b0dbb1c4cb3?w=1200&q=75&auto=format&fit=crop",
      alt: "PlayStation gaming setup — the console era that defined 2000s childhood",
      credit: credit("Kamil S"),
    }}
    daysLived={
      <>
        At 28, you've lived approximately <strong>10,227 days</strong>. At 27, it's closer to{" "}
        <strong>9,862 days</strong>. Nearly ten thousand days of accumulated experience — most of
        it mundane in the best possible way, some of it genuinely formative, all of it yours.
      </>
    }
    hoursMinutes={
      <>
        Twenty-eight years works out to roughly <strong>245,280 hours</strong> and{" "}
        <strong>14,716,800 minutes</strong> of existence. That total goes up by 1,440 every single
        day, whether you do anything remarkable with them or not.
      </>
    }
    heartbeats={
      <>
        At approximately 100,000 heartbeats per day, a 28-year-old has logged roughly{" "}
        <strong>1.02 billion heartbeats</strong>. Your heart started beating in 1997 — before you
        had a name, before you had a face — and it hasn't stopped since.
      </>
    }
    fullMoons={
      <>
        The lunar cycle completes every 29.5 days. Since 1998, the full moon has risen
        approximately <strong>341 times</strong>. Most of them passed without you noticing.
        A few of them probably didn't.
      </>
    }
    breaths={
      <>
        At 15 breaths per minute over 28 years: roughly <strong>220 million breaths</strong>.
        Each one automatic, each one underwriting everything else you've ever been doing.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1998, you are firmly <strong>Generation Z</strong> — and the Google generation
          in the most literal sense possible. Google launched the same year you were born. You've
          never used the internet without it. That's not a trivial fact: it means your entire
          relationship with knowledge, curiosity, and finding answers has been mediated by one
          company's algorithm for your entire conscious life.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Your generation grew up entirely post-9/11. You were three years old when the attacks
          happened — no memories, just a world that already had TSA security lines, colour-coded
          terror alerts, and the quiet assumption that public spaces needed to be watched. The wars
          in Afghanistan and Iraq were the background noise of your entire childhood. By the time
          you were old enough to read the news, they had simply always been happening — a fact so
          normalised you likely didn't think of them as news at all.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Smartphones arrived in your early life (the iPhone launched in 2007, when you were about
          nine). Social media wasn't something you joined as a finished adult — it was something
          you grew up inside, shaping yourself inside. Instagram, Snapchat, and later TikTok
          weren't communication tools for your cohort; they were where identity happened, where
          social hierarchies formed, where people got cancelled and celebrated in equal measure.
          The pressure to perform a version of yourself online from age 13 onwards is something
          your generation navigated without any prior generation's guidance — because no prior
          generation had faced it.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          COVID hit when you were 21 or 22 — right in the middle of university or first jobs.
          Many in your cohort graduated into a world that had temporarily stopped hiring, moved
          back home, watched planned social lives pause for a year, and emerged into a changed
          labour market with changed expectations. At 27 or 28 in 2026, you're rebuilding momentum
          — in expensive cities, often carrying student debt, often renting housing that costs
          significantly more than it did when your parents were this age. That gap is real and it's
          documented. It's not a personal failure; it's a structural condition.
        </p>
      </>
    }
    worldIntro="Here's what was happening in 1998, the year you arrived:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>Google founded, September 4:</strong> Larry Page and Sergey Brin incorporated
          Google Inc. in a Menlo Park garage. At the time, Yahoo was the dominant search engine and
          directories were how you navigated the web. Within five years, "googling" would become a
          verb in the dictionary. You've never known the internet without it. Full story at{" "}
          <a
            href="https://about.google/our-story/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Google's About page
          </a>
          .
        </li>
        <li>
          <strong>The Clinton–Lewinsky scandal dominated the year:</strong> Monica Lewinsky's name
          was everywhere. Clinton denied the affair in January ("I did not have sexual relations
          with that woman"), admitted it on national television in August, and faced impeachment
          proceedings beginning in October. He was acquitted in February 1999. The scandal consumed
          American political life for over a year and is now the subject of Ryan Murphy's Hulu
          series.
        </li>
        <li>
          <strong>India and Pakistan both test nuclear weapons, May:</strong> Within three weeks of
          each other, both countries conducted underground nuclear tests — India first (Operation
          Shakti, May 11), then Pakistan in response (May 28). Both became declared nuclear states
          overnight. International sanctions followed. The subcontinent's strategic balance shifted
          permanently.
        </li>
        <li>
          <strong>iMac G3 launched, August 15:</strong> Steve Jobs unveiled the translucent,
          colourful, egg-shaped all-in-one iMac — the computer that announced Apple's comeback.
          "Bondi Blue" became a design moment. Two years earlier, Apple had been weeks from
          bankruptcy. Jobs called it "the computer for the rest of us."
        </li>
        <li>
          <strong>Good Friday Agreement signed, April 10:</strong> The agreement ended decades of
          sectarian violence in Northern Ireland, brokered by the UK, Irish, and US governments
          (Bill Clinton played a key personal role). It remains one of the most successful peace
          deals of the modern era. Background at{" "}
          <a
            href="https://www.dfa.ie/our-role-policies/northern-ireland/good-friday-agreement/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Ireland's Department of Foreign Affairs
          </a>
          .
        </li>
        <li>
          <strong>Mark McGwire hits 70 home runs:</strong> Breaking Roger Maris's 1961 record of
          61, McGwire's home-run chase with Sammy Sosa captivated a nation that had been drifting
          away from baseball. 123 million Americans watched game 62 on television. McGwire later
          admitted steroid use. The era is now called the "steroid era" — but in 1998, it felt like
          a national celebration.
        </li>
        <li>
          <strong>Seinfeld finale, May 14 — 76 million viewers:</strong> The show that defined
          1990s comedy ended after nine seasons. The finale drew 76 million viewers, making it one
          of the most-watched TV events of the decade. Also in cinemas that year:{" "}
          <em>Saving Private Ryan</em>, <em>The Truman Show</em>, <em>Armageddon</em>,{" "}
          <em>There's Something About Mary</em>, <em>Mulan</em>. Music: Lauryn Hill's{" "}
          <em>The Miseducation of Lauryn Hill</em>, Jay-Z's <em>Vol. 2...Hard Knock Life</em>,
          Massive Attack's <em>Mezzanine</em>.
        </li>
      </ul>
    }
    worldOutro={
      <>
        The world you arrived in was one of unusual optimism — the economy was booming, the Cold
        War was over, and the internet was beginning to feel like it might change everything.
        Twenty-eight years later, you can confirm: it did.
      </>
    }
    futureRows={[
      ["2027", "28–29"],
      ["2030", "31–32"],
      ["2035", "36–37"],
      ["2040", "41–42"],
      ["2050", "51–52"],
      ["2060", "61–62"],
    ]}
    futureNote={
      <>
        Your 30th birthday lands in 2028. The milestone is close — and the 30s, statistically
        speaking, tend to be when earnings, relationships, and life satisfaction start to stabilise.
      </>
    }
    planetRows={[
      ["Mercury", "~116 Mercury years (88 days per orbit)"],
      ["Venus", "~45 Venus years (225 days per orbit)"],
      ["Mars", "~14.9 Mars years (687 days per orbit)"],
      ["Jupiter", "~2.3 Jupiter years (12 Earth years per orbit)"],
      ["Saturn", "~0.95 Saturn years (29.5 Earth years per orbit)"],
    ]}
    planetNote={
      <>
        On Saturn, you'd be approaching your first birthday. On Mercury, you'd be 116. The number
        that defines you is entirely a function of which rock you're standing on — and you picked
        a reasonably comfortable one.
      </>
    }
    lifeClock={
      <>
        Map a human life onto a 24-hour clock — midnight at birth, midnight at age 79 — and a
        28-year-old lands at approximately <strong>8:30 AM</strong>. The morning is still going.
        The full day is ahead.
      </>
    }
    finalNote={
      <>
        The stats above use 28 as the base age. Your precise tally — days, hours, heartbeats,
        full moons — depends on your specific birthday. Get your exact figure at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me
        </a>
        .
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i" },
      {
        tag: "Biology",
        title: "How Many Heartbeats in a Lifetime?",
        href: "/blog/how-many-heartbeats-in-a-lifetime",
      },
      {
        tag: "Astronomy",
        title: "How Many Full Moons in a Lifetime?",
        href: "/blog/how-many-full-moons-in-a-lifetime",
      },
      { tag: "Perspective", title: "What Is a Life Clock?", href: "/blog/what-is-a-life-clock" },
    ]}
  />
);

export default BornIn1998;
