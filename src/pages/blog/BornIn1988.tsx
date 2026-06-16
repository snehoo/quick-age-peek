import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const credit = (name: string, url = "https://unsplash.com") => (
  <>
    Photo by {name} on{" "}
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
      Unsplash
    </a>
  </>
);

const BornIn1988 = () => (
  <BornInYearArticle
    year={1988}
    preBirthdayAge={37}
    postBirthdayAge={38}
    slug="how-old-am-i-if-i-was-born-in-1988"
    title="How Old Am I If I Was Born in 1988? | Age in 2026"
    description="Born in 1988? You're 37 or 38 in 2026 — late 30s, Millennial, firmly yourself. Discover your age in days, heartbeats, and full moons, plus the remarkable year of Seoul, Flo-Jo, and Stephen Hawking."
    intro={
      <>
        If you were born in 1988, you are <strong>37 or 38 years old in 2026</strong> — 37 if your
        birthday has not come around yet this year, 38 if it has. Late thirties: a decade that tends
        to get far less cultural attention than the thirties-as-crisis or the forties-as-milestone,
        and is often, quietly, better for it. You were born the year of the Seoul Olympics, the year
        Stephen Hawking published A Brief History of Time, and the year Die Hard established the
        template for every action movie that followed it. The world in 1988 was wrapping up a
        decade of excess and beginning, without knowing it, the final few years of the Cold War.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1527181152855-af66b7d3f9b4?w=1200&q=75&auto=format&fit=crop",
      alt: "Old Macintosh computer on a desk, early personal computing from the late 1980s",
      credit: credit("Mathew Schwartz"),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1491193223822-51a82d9ee81f?w=1200&q=75&auto=format&fit=crop",
      alt: "Stack of retro VHS tapes, the dominant home video format of the 1980s and early 90s",
      credit: credit("Leon Bublitz"),
    }}
    daysLived={
      <>
        At 38 years old, you have lived approximately <strong>13,880 days</strong> — at 37, roughly{" "}
        <strong>13,515 days</strong>. Nearly 14,000 mornings of being alive. Some were extraordinary.
        Most were ordinary. Both kinds built you.
      </>
    }
    hoursMinutes={
      <>
        Thirty-eight years works out to approximately <strong>333,120 hours</strong> and{" "}
        <strong>19,987,200 minutes</strong> of life. You are closing in on 20 million minutes —
        a number that keeps climbing by exactly 1,440 every day.
      </>
    }
    heartbeats={
      <>
        At roughly 100,000 heartbeats per day, your heart has beaten approximately{" "}
        <strong>1.39 billion times</strong> since the moment you were born — through childhood summers,
        teenage exams, the 2008 financial crisis, a global pandemic, and every unremarkable Thursday
        in between, without a single deliberate instruction from you.
      </>
    }
    fullMoons={
      <>
        The lunar cycle completes every 29.5 days. Since 1988, the full moon has risen approximately{" "}
        <strong>461 times</strong>. It has appeared over every version of you that has ever existed,
        in every city and country you have ever been in.
      </>
    }
    breaths={
      <>
        At a resting rate of 15 breaths per minute over 38 years, you have taken approximately{" "}
        <strong>299 million breaths</strong>. You were approaching 300 million before you finished
        reading this sentence. The system runs entirely without your attention.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1988, you are a <strong>Millennial</strong> — Pew Research defines the cohort as
          1981 to 1996, which places you comfortably in the older half. What that means in practical
          terms is that you have one of the more unusual experiential profiles of any living
          generation: you had a childhood that was entirely pre-smartphone, a teenage period when the
          internet existed but was not yet load-bearing, and an adult life built on digital
          infrastructure from the ground up. You remember how it felt to not be able to look
          something up immediately. You adapted to being able to without much trouble. Neither world
          is foreign to you.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          In 2026, you are 37 or 38, and the late thirties occupy an interesting position
          generationally. The 2008 financial crisis hit you at 19 or 20 — right as you were
          entering adulthood, either at university or just starting work. It shaped your baseline
          assumptions about job security and economic stability in ways that are probably still
          visible. COVID arrived when you were 31 or 32, early enough in your career that it
          disrupted rather than derailed. Many people in this age band pivoted industries between
          2020 and 2022 — moving from sectors that contracted (travel, hospitality, retail) into
          ones that expanded (technology, healthcare, logistics, remote-everything). If you are among
          them, that pivot probably felt disorienting at the time and clarifying in retrospect.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          The late thirties are also often described as the decade where people finally feel
          genuinely comfortable in their own skin — a cliché that happens to be backed by data.
          Surveys of wellbeing by age consistently show life satisfaction rising through the thirties
          and into the forties. The version of yourself that is 38 has survived enough to have
          earned a certain amount of confidence, and is young enough that a very large amount of
          life remains ahead. If you have school-age children, this is the decade you are in the
          middle of them. If you started putting money away at 25, compound interest has had 12 or
          13 years to do its work.
        </p>
      </>
    }
    worldIntro="Here is what the world looked like in 1988, the year you were born:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>Seoul Summer Olympics, September 17 – October 2:</strong> For the first time since
          Munich in 1972, the Summer Games took place without a major boycott — 160 nations
          competed. Florence Griffith Joyner (&quot;Flo-Jo&quot;) set world records in the 100m
          (10.49 seconds) and 200m (21.34 seconds) that still stand in 2026, nearly four decades
          later. Ben Johnson of Canada won the 100m in world record time, then was disqualified
          after testing positive for stanozolol.
        </li>
        <li>
          <strong>A Brief History of Time, March 1:</strong> Stephen Hawking published his
          explanation of cosmology, black holes, and the origins of the universe for a general
          audience. It sold over 10 million copies in its first two decades and spent 237 weeks on
          the Sunday Times bestseller list. It made theoretical physics briefly, genuinely popular.
          Hawking&apos;s page at{" "}
          <a
            href="https://www.hawking.org.uk/in-brief"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            hawking.org.uk
          </a>
          .
        </li>
        <li>
          <strong>Die Hard, July 15:</strong> Bruce Willis starred as New York detective John
          McClane in a film that spent the following three decades being debated as either the
          best Christmas movie ever made or not a Christmas movie at all. It defined the structure
          of the action blockbuster — reluctant lone hero, enclosed setting, wisecracking under
          fire — for a generation of filmmakers. Also in 1988: Rain Man (Best Picture winner), Who
          Framed Roger Rabbit, Beetlejuice, Big, and Coming to America.
        </li>
        <li>
          <strong>Pan Am Flight 103, December 21:</strong> A bomb exploded on board the aircraft
          over Lockerbie, Scotland, killing all 243 passengers, 16 crew members, and 11 people on
          the ground — 270 people in total. It remains the deadliest terrorist attack in British
          history and led directly to the transformation of international aviation security.
        </li>
        <li>
          <strong>George H.W. Bush elected president, November 8:</strong> Bush defeated Michael
          Dukakis 426 electoral votes to 111. He would serve one term, then be succeeded by Bill
          Clinton in 1993.
        </li>
        <li>
          <strong>Iran-Iraq War ends, August 20:</strong> After eight years and an estimated 500,000
          deaths on both sides, a UN-brokered ceasefire took effect. The war had begun in 1980 with
          Iraq&apos;s invasion of Iran and ended with neither side having gained meaningful territory.
        </li>
        <li>
          <strong>Music in 1988:</strong> Guns N&apos; Roses released &quot;Sweet Child O&apos;
          Mine&quot; in August. Public Enemy released <em>It Takes a Nation of Millions to Hold Us
          Back</em>. Tracy Chapman&apos;s self-titled debut was a surprise phenomenon. Kylie Minogue
          and Rick Astley were inescapable on pop radio. Michael Jackson&apos;s Bad tour was
          filling stadiums on five continents.
        </li>
      </ul>
    }
    worldOutro={
      <>
        You were born in the final stretch of the Cold War, in a year when records were broken in
        athletics, in publishing, and in film — and broken apart in the sky over Lockerbie. The
        world of 1988 was simultaneously more dangerous and more spectacular than it is usually
        remembered as being.
      </>
    }
    futureRows={[
      ["2027", "38–39"],
      ["2030", "41–42"],
      ["2035", "46–47"],
      ["2040", "51–52"],
      ["2050", "61–62"],
      ["2060", "71–72"],
    ]}
    futureNote={
      <>
        The 40th birthday arrives in 2026 or 2027 depending on when in the year you were born. The
        50s begin between 2038 and 2039. Plenty of road ahead.
      </>
    }
    planetRows={[
      ["Mercury", "~157 Mercury years (88 days per orbit)"],
      ["Venus", "~62 Venus years (225 days per orbit)"],
      ["Mars", "~20 Mars years (687 days per orbit)"],
      ["Jupiter", "~3.2 Jupiter years (12 Earth years per orbit)"],
      ["Saturn", "~1.3 Saturn years (29.5 Earth years per orbit)"],
    ]}
    planetNote={
      <>
        On Jupiter, you are a young adult of three. On Saturn, you have completed just over one full
        orbit of the sun. On Mercury, you are 157. The solar system has a wide range of opinions
        about how old you are.
      </>
    }
    lifeClock={
      <>
        On a 24-hour life clock — birth at midnight, average life expectancy of 79 years at midnight
        again — a 38-year-old sits at approximately <strong>11:33 AM</strong>. The morning is nearly
        over but noon has not yet arrived. The whole afternoon still lies ahead, and statistically
        speaking, the afternoon tends to be the more interesting half.
      </>
    }
    finalNote={
      <>
        All calculations above use 38 as the base age. Your exact number of days, hours, minutes,
        and heartbeats depends on your specific birthday. Enter it at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me
        </a>{" "}
        and get your precise count, calculated to right now.
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i/" },
      {
        tag: "Biology",
        title: "How Many Heartbeats in a Lifetime?",
        href: "/blog/how-many-heartbeats-in-a-lifetime/",
      },
      {
        tag: "Astronomy",
        title: "How Many Full Moons in a Lifetime?",
        href: "/blog/how-many-full-moons-in-a-lifetime/",
      },
      { tag: "How-to", title: "Calculate Your Age in Days", href: "/blog/how-to-calculate-age-in-days/" },
    ]}
  />
);

export default BornIn1988;
