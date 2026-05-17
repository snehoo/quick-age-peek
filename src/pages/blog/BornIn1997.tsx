import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const credit = (name: string, url = "https://unsplash.com") => (
  <>
    Photo by {name} on{" "}
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
      Unsplash
    </a>
  </>
);

const BornIn1997 = () => (
  <BornInYearArticle
    year={1997}
    preBirthdayAge={28}
    postBirthdayAge={29}
    slug="how-old-am-i-if-i-was-born-in-1997"
    title="How Old Am I If I Was Born in 1997? | Age in 2026"
    description="Born in 1997? You're 28 or 29 in 2026. Find your exact age in days, heartbeats, and full moons — plus the remarkable world you were born into."
    intro={
      <>
        If you were born in 1997, you are <strong>28 or 29 years old in 2026</strong> — 29 if
        your birthday has already passed this year, 28 if it's still coming. You are the very first
        birth year of Generation Z, according to Pew Research. You arrived in a year that felt like
        civilisation was speeding up: Princess Diana died on a Paris motorway. Deep Blue beat the
        world chess champion. Steve Jobs returned to save a nearly bankrupt Apple. And a debut
        novelist named J.K. Rowling published a quiet little book about a boy wizard that would
        define your entire childhood.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=75&auto=format&fit=crop",
      alt: "Neon lights glowing in the dark — the electric aesthetic of the late 1990s",
      credit: credit("Aranprime"),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1492011221367-f191e2e8f823?w=1200&q=75&auto=format&fit=crop",
      alt: "Retro Y2K aesthetic — bright colours and early digital culture",
      credit: credit("Umberto"),
    }}
    daysLived={
      <>
        At 29, you've lived approximately <strong>10,593 days</strong>. At 28, it's closer to{" "}
        <strong>10,227 days</strong>. Either way, that's more than ten thousand individual mornings
        — each one arrived, was lived through, and is now part of whatever you've become.
      </>
    }
    hoursMinutes={
      <>
        Twenty-nine years translates to roughly <strong>254,232 hours</strong> and{" "}
        <strong>15,253,920 minutes</strong> of existence. Your clock has been running since 1997,
        and it hasn't skipped a beat.
      </>
    }
    heartbeats={
      <>
        The human heart beats approximately 100,000 times a day. Over 29 years, that adds up to
        roughly <strong>1.06 billion heartbeats</strong> — each one silent, involuntary, and
        keeping every single other thing you've ever done possible.
      </>
    }
    fullMoons={
      <>
        The lunar cycle takes 29.5 days to complete. Since 1997, the full moon has risen
        approximately <strong>359 times</strong>. You've seen most of them, whether you noticed
        or not.
      </>
    }
    breaths={
      <>
        At 15 breaths per minute over 29 years: roughly <strong>228 million breaths</strong>.
        The first one happened in a room where people were waiting for it. The rest have arrived
        without fanfare, billions of times, doing their job.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1997, you are <strong>Generation Z</strong> — the very first year of the cohort
          as defined by Pew Research. That makes you the oldest Gen Z, which is genuinely its own
          experience. You remember a childhood before social media. You have early memories of dial-up
          internet, of AIM away messages, of Blockbuster on Friday nights. But your teens were
          completely reshaped by the smartphone: Instagram arrived when you were 13, Snapchat when
          you were 14, and TikTok when you were around 19. You watched each platform rewire social
          life and had to adapt in real time, without a roadmap.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Your generation grew up entirely after 9/11 — you were four years old when the towers
          fell, which means you have no memory of a pre-9/11 world. Airport security, surveillance
          cameras everywhere, armed police at public events: that was simply the background of
          childhood. The post-9/11 security state isn't something that happened to you; it's the
          only world you've ever known.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          COVID arrived when you were 22 or 23 — old enough to have made plans, young enough that
          those plans hadn't yet solidified. Graduating into a pandemic, watching first jobs
          evaporate or go fully remote, missing the in-person early-career experiences that tend to
          matter more than people admit: that was a wound specific to your cohort. Gen Z has also
          driven a cultural shift toward talking openly about mental health, anxiety, and burnout
          — partly because social media made those conversations unavoidable, and partly because
          the generation genuinely needed them.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          At 28 or 29, you're in what sociologists call "emerging adulthood" — late by historical
          standards, precisely on time by modern ones. You're probably 3–5 years into a first real
          career, possibly mid-pivot into a second. Student debt, high rents, and the gig economy
          have made the traditional markers of adulthood (house, pension, stability) harder to hit
          than they were for your parents at this age. You're not imagining that; the numbers back
          it up. And yet here you are, figuring it out anyway.
        </p>
      </>
    }
    worldIntro="Here's what was happening on Earth the year you arrived:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>Princess Diana died, August 31:</strong> A car crash in the Pont de l'Alma
          tunnel in Paris killed Diana, Princess of Wales. Over 1 billion people watched her funeral
          on September 6 — one of the most watched television events in history. The outpouring of
          public grief was unlike anything that had come before. Full context:{" "}
          <a
            href="https://www.history.com/this-day-in-history/princess-diana-dies"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            History.com
          </a>
          .
        </li>
        <li>
          <strong>Harry Potter and the Philosopher's Stone published, June 26:</strong> J.K. Rowling's
          debut novel came out from Bloomsbury with a print run of just 500 copies. Kids born in 1997
          were the exact target age when books 3 through 7 were released. You were the Harry Potter
          generation — you grew up with the series page by page.
        </li>
        <li>
          <strong>Deep Blue defeats Kasparov, May 11:</strong> IBM's chess computer became the first
          machine to beat a reigning world champion under tournament conditions. Garry Kasparov — the
          greatest chess player alive — lost match two of a six-game series. People genuinely didn't
          know what to make of it. More at{" "}
          <a
            href="https://www.ibm.com/history/deep-blue"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            IBM.com
          </a>
          .
        </li>
        <li>
          <strong>Hong Kong returned to China, July 1:</strong> After 156 years as a British colony,
          the handover was watched by millions. Prince Charles and Chris Patten (the last Governor)
          sailed away as the Chinese flag was raised at midnight.
        </li>
        <li>
          <strong>The Kyoto Protocol adopted, December 11:</strong> The first international treaty
          legally binding nations to reduce greenhouse gas emissions. The US signed it but never
          ratified it. The debate it started has never stopped. Background at{" "}
          <a
            href="https://unfccc.int/kyoto_protocol"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            UNFCCC
          </a>
          .
        </li>
        <li>
          <strong>Steve Jobs returned to Apple:</strong> Apple was weeks from bankruptcy. Microsoft
          invested $150 million to keep it alive. Jobs was back as interim CEO, and the product
          pipeline that would eventually produce the iMac, iPod, iPhone, and iPad was about to begin.
          Nobody in 1997 saw that coming.
        </li>
        <li>
          <strong>Titanic (December 19) and a year of great music:</strong> James Cameron's film
          became the first to gross $1 billion and the first to cost $200 million to make. Meanwhile,
          Radiohead released <em>OK Computer</em>, Daft Punk released <em>Homework</em>, and Puff
          Daddy's "I'll Be Missing You" — a tribute to the Notorious B.I.G., who had been shot dead
          on March 9 — was inescapable all summer.
        </li>
      </ul>
    }
    worldOutro={
      <>
        You came into a world mid-transformation — analogue in texture but beginning to go digital
        everywhere that mattered. The culture you absorbed as a child (Harry Potter, early internet,
        Titanic, Radiohead) left a fingerprint that's still visible in what your generation cares
        about in 2026.
      </>
    }
    futureRows={[
      ["2027", "29–30"],
      ["2030", "32–33"],
      ["2035", "37–38"],
      ["2040", "42–43"],
      ["2050", "52–53"],
      ["2060", "62–63"],
    ]}
    futureNote={
      <>
        Your 30th birthday lands in 2027 — just around the corner. The 30s tend to be when things
        start to click, for what it's worth.
      </>
    }
    planetRows={[
      ["Mercury", "~120 Mercury years (88 days per orbit)"],
      ["Venus", "~47 Venus years (225 days per orbit)"],
      ["Mars", "~15 Mars years (687 days per orbit)"],
      ["Jupiter", "~2.4 Jupiter years (12 Earth years per orbit)"],
      ["Saturn", "~0.98 Saturn years (29.5 Earth years per orbit)"],
    ]}
    planetNote={
      <>
        On Saturn, you haven't quite completed your first full orbit yet — you'd be approaching your
        Saturnian first birthday. On Mercury, you'd be 120. The numbers depend entirely on which
        rock you're standing on.
      </>
    }
    lifeClock={
      <>
        Map a human life onto a 24-hour clock — midnight at birth, midnight at age 79 — and a
        29-year-old lands at approximately <strong>8:48 AM</strong>. Still morning. The rest of
        the day is ahead of you.
      </>
    }
    finalNote={
      <>
        The numbers above use 29 as the base age. Your precise count — in days, hours, minutes,
        and heartbeats — depends on your specific birthday. Plug it into{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me
        </a>{" "}
        and get your exact figure, calculated to today.
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

export default BornIn1997;
