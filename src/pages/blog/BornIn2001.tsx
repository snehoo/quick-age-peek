import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const credit = (name: string, url = "https://unsplash.com") => (
  <>
    Photo by {name} on{" "}
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
      Unsplash
    </a>
  </>
);

const BornIn2001 = () => (
  <BornInYearArticle
    year={2001}
    preBirthdayAge={24}
    postBirthdayAge={25}
    slug="how-old-am-i-if-i-was-born-in-2001"
    title="How Old Am I If I Was Born in 2001? | Age in 2026"
    description="Born in 2001? You're 24 or 25 in 2026. Discover your exact age in days, heartbeats, and full moons — and the unforgettable world that shaped you."
    intro={
      <>
        If you were born in 2001, you are <strong>24 or 25 years old in 2026</strong> — 25 if
        your birthday has already passed this year, 24 if it's still ahead. Mid-twenties: the age
        at which the future starts to feel less like a concept and more like something you're
        actively building. You were born in the year the world changed in ways it still hasn't
        fully recovered from. September 11 happened a few months before or after your first
        birthday. Wikipedia launched the same year you did. So did the iPod. The war in
        Afghanistan that started the month you were born didn't end until you were 20.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=1200&q=75&auto=format&fit=crop",
      alt: "TikTok and YouTube Gen Z era — the digital platforms that defined this generation",
      credit: credit("Kon Karampelas"),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&q=75&auto=format&fit=crop",
      alt: "Streaming and Netflix era — how 2001-borns consume culture",
      credit: credit("Thibault Penin"),
    }}
    daysLived={
      <>
        At 25, you've lived approximately <strong>9,131 days</strong>. At 24, it's closer to{" "}
        <strong>8,766 days</strong>. Nearly nine thousand days — each one a distinct unit of
        experience, most of them quietly unremarkable, some of them anything but.
      </>
    }
    hoursMinutes={
      <>
        Twenty-five years works out to roughly <strong>219,000 hours</strong> and{" "}
        <strong>13,140,000 minutes</strong> of being alive. The counter doesn't pause.
        It's been running since the moment you arrived.
      </>
    }
    heartbeats={
      <>
        At approximately 100,000 heartbeats per day, you've accumulated roughly{" "}
        <strong>913 million heartbeats</strong> over 25 years — approaching a billion,
        each one automatic, each one essential, none of them requiring your conscious
        participation.
      </>
    }
    fullMoons={
      <>
        The lunar cycle completes every 29.5 days. Since 2001, the full moon has risen
        approximately <strong>310 times</strong>. Your whole life has been measured against
        that rhythm, quietly, in the background.
      </>
    }
    breaths={
      <>
        At 15 breaths per minute over 25 years: roughly <strong>197 million breaths</strong>.
        Invisible, automatic, and entirely responsible for everything else you've managed to do.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 2001, you are firmly <strong>Generation Z</strong> — and you represent something
          specific within it: the first cohort for whom 9/11 is genuinely history class rather than
          living memory. People born in 1997 were four; they might have fragments of memory, a
          parent's reaction, a disrupted routine. You were a newborn or an infant. You have
          nothing. And that's a genuinely different experience — you grew up entirely inside the
          post-9/11 world, with no before to compare it to.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          The war in Afghanistan that began in October 2001 — the month you were born, or close
          to it — lasted until August 2021. For your entire conscious life, until you were 20
          years old, the United States was at war in Afghanistan. It was always happening. The
          troops were always there. You didn't know a world in which that wasn't true, and then
          suddenly it ended, and you probably didn't feel the particular relief that older
          generations felt, because you'd never known the alternative.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Smartphones arrived in your early life (the iPhone when you were around six, Android
          devices shortly after). By the time you were in secondary school, having a smartphone
          was normal. Social media wasn't something you discovered; it was something you were
          handed. Instagram, Snapchat, TikTok — each one arrived and reshaped your social
          environment before you had the adult context to evaluate what was happening. Gen Z
          has the highest recorded rates of anxiety and depression of any generation in survey
          history, and researchers connect it partly to social media use from ages 10–12 onward.
          Your cohort is not imagining the pressure.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          COVID arrived when you were 18 or 19 — the final year of secondary school or the
          first year of university. Many in your cohort missed their graduation, their leaving
          events, their first months of independent life. The traditional rite of passage into
          adulthood was disrupted at the exact moment it was supposed to happen. At 24 or 25
          in 2026, you're making up for lost time in a job market that's simultaneously tight
          and being reshaped by AI. It's a genuinely unusual hand to have been dealt.
        </p>
      </>
    }
    worldIntro="Here's what was happening in 2001, the year you arrived:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>September 11 attacks, September 11:</strong> Four coordinated hijackings killed
          2,977 people. The Twin Towers collapsed on live television watched by hundreds of millions.
          The world changed before your first birthday. Context and history at{" "}
          <a
            href="https://www.911memorial.org/911-faqs"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            9/11 Memorial & Museum
          </a>
          .
        </li>
        <li>
          <strong>Apple unveiled the iPod, October 23:</strong> Steve Jobs stood on stage and
          said "1,000 songs in your pocket." The original iPod cost $399, held 5GB, and had a
          scroll wheel. It changed how humanity listened to music — and set up the product
          architecture that would eventually produce the iPhone. Full announcement context at{" "}
          <a
            href="https://www.apple.com/newsroom/2001/10/23Apple-Presents-iPod/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Apple Newsroom
          </a>
          .
        </li>
        <li>
          <strong>Wikipedia launched, January 15:</strong> Jimmy Wales and Larry Sanger launched
          what was supposed to be an experiment — a free, user-editable encyclopedia. Within a
          year it had 20,000 articles. By 2026 it has over 60 million. It became the way most
          of the world accesses encyclopedic knowledge.
        </li>
        <li>
          <strong>USA PATRIOT Act signed, October 26:</strong> The sweeping surveillance law
          expanded the US government's ability to monitor communications, conduct searches, and
          track financial transactions. It shaped the security infrastructure you grew up inside.
          Many provisions are still in force in modified form in 2026.
        </li>
        <li>
          <strong>Enron collapsed, December 2:</strong> The largest US corporate bankruptcy at
          the time. Enron had been valued at $70 billion; employees' pension funds were wiped out
          while executives sold their shares. It defined a generation's distrust of large
          corporations and led to the Sarbanes-Oxley Act.
        </li>
        <li>
          <strong>Harry Potter and the Philosopher's Stone film, November 16:</strong> The first
          film adaptation of J.K. Rowling's novels grossed $974 million globally. Two weeks later,
          on December 19, <em>The Lord of the Rings: The Fellowship of the Ring</em> opened.
          Both franchises would define the pop culture of your childhood and early adolescence.
        </li>
        <li>
          <strong>Music of 2001:</strong> Jay-Z's <em>The Blueprint</em> — considered one of the
          greatest hip-hop albums ever — dropped on September 11, 2001, largely overshadowed by
          events. Daft Punk's <em>Discovery</em>, Linkin Park's <em>Hybrid Theory</em>, Alicia
          Keys' <em>Songs in A Minor</em> (which sold 236,000 copies in its first day), and
          OutKast's <em>Stankonia</em> all landed in this year.
        </li>
      </ul>
    }
    worldOutro={
      <>
        You were born into a year that drew a hard line in history — before and after. Everything
        that came after 2001 carries the weight of what happened that September, and you've been
        living in the aftermath your entire life without ever having known the before.
      </>
    }
    futureRows={[
      ["2027", "25–26"],
      ["2030", "28–29"],
      ["2035", "33–34"],
      ["2040", "38–39"],
      ["2050", "48–49"],
      ["2060", "58–59"],
    ]}
    futureNote={
      <>
        Your 30th birthday arrives in 2031. Still a few years away — the late twenties are
        still ahead of you.
      </>
    }
    planetRows={[
      ["Mercury", "~104 Mercury years (88 days per orbit)"],
      ["Venus", "~41 Venus years (225 days per orbit)"],
      ["Mars", "~13.3 Mars years (687 days per orbit)"],
      ["Jupiter", "~2.1 Jupiter years (12 Earth years per orbit)"],
      ["Saturn", "~0.85 Saturn years (29.5 Earth years per orbit)"],
    ]}
    planetNote={
      <>
        On Saturn, you're not yet 1 year old — you'd be 11 months into your first Saturnian year.
        On Mercury, you'd be 104. The number that counts is the one on the planet you're actually
        standing on.
      </>
    }
    lifeClock={
      <>
        Map a human life onto a 24-hour clock — midnight at birth, midnight at age 79 — and a
        25-year-old lands at approximately <strong>7:35 AM</strong>. Early morning. The full day
        is absolutely still ahead.
      </>
    }
    finalNote={
      <>
        The figures above use 25 as the base age. Your precise count — in days, hours, heartbeats,
        and full moons — depends on your specific birthday. Find yours at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me
        </a>
        .
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
      { tag: "Perspective", title: "What Is a Life Clock?", href: "/blog/what-is-a-life-clock/" },
    ]}
  />
);

export default BornIn2001;
