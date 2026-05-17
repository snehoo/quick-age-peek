import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const credit = (name: string, url = "https://unsplash.com") => (
  <>
    Photo by {name} on{" "}
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
      Unsplash
    </a>
  </>
);

const BornIn1996 = () => (
  <BornInYearArticle
    year={1996}
    preBirthdayAge={29}
    postBirthdayAge={30}
    slug="how-old-am-i-if-i-was-born-in-1996"
    title="How Old Am I If I Was Born in 1996? | Age in 2026"
    description="Born in 1996? You're 29 or 30 in 2026. Find your exact age in days, heartbeats, and full moons — plus the story of the year Dolly, the N64, and the Spice Girls arrived."
    intro={
      <>
        If you were born in 1996, you are <strong>29 or 30 years old in 2026</strong> — 30 if
        your birthday has already passed this year, 29 if it's still ahead. Thirty has a way of
        arriving with unexpected weight — not because anything changes on the day, but because the
        number sounds different from all the ones before it. You are, depending on which researcher
        you ask, either the last Millennial or the first Gen Z. Pew Research draws the Millennial
        cutoff at 1996, making you the final chapter of one generation and the bridge to another.
        You grew up in two worlds simultaneously, and most of the time you know exactly which one
        you're in.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=1200&q=75&auto=format&fit=crop",
      alt: "Neon 90s aesthetic — vivid colors and retro vibes",
      credit: credit("Unsplash", "https://unsplash.com"),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1547394765-185e1e68b046?w=1200&q=75&auto=format&fit=crop",
      alt: "Old VHS tape collection — late 90s home video nostalgia",
      credit: credit("Unsplash", "https://unsplash.com"),
    }}
    daysLived={
      <>
        At 30 years old, you've lived approximately <strong>10,958 days</strong>. Nearly eleven
        thousand mornings — some you can recall in sharp detail, most that have dissolved into the
        general texture of a decade. All of them happened. All of them count.
      </>
    }
    hoursMinutes={
      <>
        That's <strong>~262,992 hours</strong> since your first breath, and{" "}
        <strong>~15,779,520 minutes</strong> of life lived. If you'd spent every minute of it
        listening to music, you'd have gotten through every song ever released by the Spice Girls
        approximately 400,000 times. You haven't. Nobody has.
      </>
    }
    heartbeats={
      <>
        Your heart beats around{" "}
        <a
          href="https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          100,000 times every day
        </a>
        , according to the American Heart Association. Over 30 years, that works out to
        approximately <strong>1.09 billion heartbeats</strong> — every one automatic, none of
        them requested, all of them yours.
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
        takes 29.5 days. Since 1996, roughly <strong>372 full moons</strong> have risen while you
        were alive — each one a quiet marker of another month in the rearview.
      </>
    }
    breaths={
      <>
        At a resting rate of 15 breaths per minute over 30 years: approximately{" "}
        <strong>236 million breaths</strong>. Invisible. Automatic. Each one the body saying,
        without ceremony, that it intends to keep going.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1996, you occupy one of the stranger positions in generational taxonomy. Pew
          Research places you as the{" "}
          <a
            href="https://www.pewresearch.org/social-trends/2019/01/17/where-millennials-end-and-generation-z-begins/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            last Millennial
          </a>{" "}
          — 1997 is where Gen Z officially begins. But in practice, people born in 1996 often feel
          pulled by both generations. You remember a childhood without smartphones, but you had one
          by the time you were thirteen. You had a Facebook account before you started secondary
          school, and Instagram was already mainstream by your first year of high school. Unlike
          earlier Millennials who watched social media arrive as young adults, you grew up inside
          it during the years when identity is most vulnerable to external pressure.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          You were 5 years old on September 11, 2001 — at the edge of memory. The event exists
          for you less as a specific recollection than as a before-and-after. The world you walked
          into as a conscious person was already the post-9/11 world: airport security, the
          background presence of counterterrorism, a general sense that large institutions could
          be suddenly and violently surprised. The{" "}
          <a
            href="https://www.imf.org/en/Publications/WP/Issues/2016/12/31/The-Global-Financial-Crisis-and-the-Developing-World-Impact-and-Response-23665"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            2008 financial crisis
          </a>{" "}
          hit when you were 12 — your parents' anxiety about money during your formative years
          shaped how your cohort thinks about economic security in ways that data on Millennial
          spending habits consistently shows up.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          At 29 or 30 in 2026, many in your cohort are confronting the rent-versus-buy question in
          cities where the math feels broken, navigating careers that have already been interrupted
          by at least one major economic disruption, and turning 30 in a world that looks
          genuinely different from the one you imagined at 20. The milestone lands differently
          than your older siblings described. It's less dramatic than expected, more reflective.
          The questions it raises are real ones, and most of you are starting to have actual
          answers — even if those answers keep changing.
        </p>
      </>
    }
    worldIntro="1996 was a year of genuine landmarks — in science, sport, technology, and culture. Here's what was happening when you arrived:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>Dolly the sheep cloned:</strong> On{" "}
          <a
            href="https://www.bbc.com/news/uk-scotland-edinburgh-east-fife-38910969"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            July 5, 1996
          </a>
          , scientists at the Roslin Institute in Scotland announced the first mammal cloned from
          an adult somatic cell. The ethical and scientific debate that followed has never entirely
          stopped.
        </li>
        <li>
          <strong>Nintendo 64 launched:</strong> The N64 launched in Japan on June 23 with{" "}
          <em>Super Mario 64</em> — widely considered the first great 3D platformer. It redefined
          what a video game could feel like. The US launch followed on September 29, and children
          waited in lines that wrapped around the block.
        </li>
        <li>
          <strong>Atlanta Olympics:</strong> The Centennial Games ran July 19–August 4 with 196
          nations competing. Michael Johnson won the 200m and 400m gold medals in his iconic golden
          shoes. A pipe bomb in Centennial Olympic Park killed 2 and injured 111.
        </li>
        <li>
          <strong>The Spice Girls:</strong> "Wannabe" was released on July 8 — the debut single
          that launched one of the most commercially successful acts of the decade. "Spice World"
          as a cultural phenomenon captured the exact generation born in 1995–97 at exactly the
          right age.
        </li>
        <li>
          <strong>The dot-com era begins:</strong> Yahoo went public in April, raising $33.8 million.
          Amazon — which had launched to the public in July 1995 — exploded in 1996 as mainstream
          consumers discovered online shopping. The internet was no longer an experiment.
        </li>
        <li>
          <strong>Mad cow disease crisis:</strong> The British government confirmed in March that
          BSE (bovine spongiform encephalopathy) could be transmitted to humans. The resulting
          crisis devastated the UK beef industry and reshuffled European food safety regulation
          permanently.
        </li>
        <li>
          <strong>Music and film:</strong> Tupac Shakur was shot on September 7 and died six days
          later — his death, alongside Biggie's in 1997, marked the end of hip-hop's most
          commercially dominant era. Also: No Doubt's "Don't Speak," Fugees' "Killing Me Softly,"
          the "Macarena" spending 14 weeks at US #1. Films: <em>Trainspotting</em>,{" "}
          <em>Jerry Maguire</em>, <em>Space Jam</em>, <em>Mission: Impossible</em>,{" "}
          <em>Scream</em>.
        </li>
      </ul>
    }
    worldOutro={
      <>
        1996 sits at a specific point where analog culture was fully mature and digital culture was
        becoming unavoidable. The Nintendo 64 was in living rooms. The internet was in kitchens.
        Blockbuster was still at its peak. Within four years, most of the landscape would look
        completely different. You were born right at the seam.
      </>
    }
    futureRows={[
      ["2027", "30–31"],
      ["2030", "33–34"],
      ["2035", "38–39"],
      ["2036", "39–40"],
      ["2040", "43–44"],
      ["2050", "53–54"],
    ]}
    futureNote={
      <>
        The milestone <strong>40</strong> arrives in 2036 — a full decade from now if you haven't
        hit 30 yet, or just over nine years if you have. The number that seemed enormous at 20
        has a way of arriving more quietly than expected. For 1996 kids, 30 is the one that
        actually lands first.
      </>
    }
    planetRows={[
      ["Mercury", "~124 Mercury years"],
      ["Venus", "~49 Venus years"],
      ["Mars", "~16 Mars years"],
      ["Jupiter", "~2.5 Jupiter years"],
      ["Saturn", "~1.02 Saturn years"],
    ]}
    planetNote="On Saturn, you've just barely completed your first full orbit — your Saturn birthday is essentially this year. On Mercury, those same 30 Earth years translate to 124. Perspective is relative, and on other planets it is extremely relative."
    lifeClock={
      <>
        On a 24-hour life clock — midnight at birth, midnight at the end of a full life — a
        30-year-old (based on a{" "}
        <a
          href="https://www.who.int/data/gho/indicator-metadata-registry/imr-details/65"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          global average life expectancy of ~73 years
        </a>
        ) sits at approximately <strong>9:51 AM</strong>. The morning is fully underway. There is
        an entire afternoon ahead, and the evening hasn't been thought about yet.
      </>
    }
    finalNote={
      <>
        The numbers above use 30 as the base age. Your precise count — calculated from your
        actual birth date — is at{" "}
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
      { tag: "Numbers", title: "How Many Seconds Old Are You Right Now?", href: "/blog/how-many-seconds-old-am-i" },
    ]}
  />
);

export default BornIn1996;
