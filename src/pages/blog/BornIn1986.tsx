import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const BornIn1986 = () => (
  <BornInYearArticle
    year={1986}
    preBirthdayAge={39}
    postBirthdayAge={40}
    slug="how-old-am-i-if-i-was-born-in-1986"
    title="How Old Am I If I Was Born in 1986? | Age in 2026"
    description="Born in 1986? You're 39 or 40 in 2026. Find out your age in days, heartbeats, full moons, and relive what made 1986 one of the most eventful years in modern history."
    intro={
      <>
        If you were born in 1986, you are <strong>39 or 40 years old in 2026</strong>. That "or"
        matters — whether you've hit 40 yet depends entirely on whether your birthday has passed
        this calendar year. Turning 40 is a milestone people tend to feel. But here's the thing: 40
        isn't a cliff edge, it's a vantage point.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1687253958716-1518e0dc5362?fm=jpg&q=80&w=1200&auto=format&fit=crop",
      alt: "A young boy blowing out candles on a birthday cake, vintage feel",
      credit: (
        <>
          Photo by Annie Spratt on{" "}
          <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline">
            Unsplash
          </a>
        </>
      ),
    }}
    midImage={{
      src: "https://images.unsplash.com/photo-1705820922514-f78e764c3122?fm=jpg&q=80&w=1200&auto=format&fit=crop",
      alt: "A heart-shaped happy birthday balloon floating against a soft background",
      credit: (
        <>
          Photo by Yuheng Ouyang on{" "}
          <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline">
            Unsplash
          </a>
        </>
      ),
    }}
    daysLived={
      <>
        At 40 years old, you've lived approximately <strong>14,610 days</strong>. That's over 14,000
        individual days of experiences, decisions, meals, conversations, and sleep.
      </>
    }
    hoursMinutes={
      <>
        <strong>~350,640 hours</strong> of existence and <strong>~21,038,400 minutes</strong> since
        your first breath.
      </>
    }
    heartbeats={
      <>
        With the heart beating roughly 100,000 times per day, you've clocked up around{" "}
        <strong>1.46 billion heartbeats</strong>. Your heart has never once asked for a day off.
      </>
    }
    fullMoons={
      <>
        At one full moon every 29.5 days, you've seen approximately <strong>490 full moons</strong>{" "}
        since birth — each one rising over a different version of you.
      </>
    }
    breaths={
      <>
        At 15 breaths per minute: roughly <strong>315 million breaths</strong> drawn in 40 years.
        Every single one kept you alive.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1986, you are a <strong>Millennial</strong> — part of the cohort that grew up with
          dial-up internet, lived through Y2K anxiety, graduated into the early 2000s, and watched
          social media reshape human connection in real time.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          You're old enough to remember Blockbuster Video on a Friday night, but young enough to
          have learned to code-switch between analog nostalgia and digital fluency. You probably
          have strong feelings about which era of <em>The Simpsons</em> was best (golden age:
          Seasons 3–8, widely accepted).
        </p>
      </>
    }
    worldIntro="1986 was a year the world would remember. Here's what was happening when you arrived:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>Tragedy in Space:</strong> The Space Shuttle Challenger broke apart 73 seconds
          after launch on January 28, 1986, killing all seven crew members. The nation watched live.
        </li>
        <li>
          <strong>Chernobyl:</strong> On April 26, Reactor No. 4 at the Chernobyl Nuclear Power
          Plant exploded in northern Ukraine — the worst nuclear disaster in history.
        </li>
        <li>
          <strong>The World Cup:</strong> Mexico hosted the FIFA World Cup. Diego Maradona scored
          both the infamous "Hand of God" goal and the breathtaking "Goal of the Century" against
          England. Argentina won the tournament.
        </li>
        <li>
          <strong>Music:</strong> Peter Gabriel's <em>Sledgehammer</em>, Wham!'s{" "}
          <em>The Edge of Heaven</em>, Madonna's <em>Papa Don't Preach</em>, Run-DMC's{" "}
          <em>Walk This Way</em> with Aerosmith. A year of impossible musical variety.
        </li>
        <li>
          <strong>Film:</strong> <em>Top Gun</em>, <em>Aliens</em>, <em>Ferris Bueller's Day Off</em>
          , <em>Labyrinth</em>, <em>Crocodile Dundee</em>. Quite possibly the greatest single year
          for mainstream cinema.
        </li>
        <li>
          <strong>Tech:</strong> The first version of Microsoft Excel for Windows launched. Apple's
          Steve Jobs founded NeXT after being ousted from Apple.
        </li>
      </ul>
    }
    worldOutro="You were born into a world in motion — and it hasn't slowed down since."
    futureRows={[
      ["2027", "40–41"],
      ["2030", "43–44"],
      ["2035", "48–49"],
      ["2040", "53–54"],
      ["2050", "63–64"],
      ["2060", "73–74"],
    ]}
    planetRows={[
      ["Mercury", "~166 Mercury years"],
      ["Venus", "~65 Venus years"],
      ["Mars", "~21 Mars years"],
      ["Jupiter", "~3.4 Jupiter years"],
      ["Saturn", "~1.4 Saturn years"],
    ]}
    planetNote="On Saturn, you wouldn't even have celebrated your second birthday yet. Perspective is everything."
    lifeClock={
      <>
        If life is a 24-hour clock — midnight at birth, midnight again at the end of a full life — a
        40-year-old based on a ~79-year life expectancy is sitting at roughly{" "}
        <strong>12:09 PM</strong>. Just past noon. The afternoon, and everything in it, is still
        ahead.
      </>
    }
    finalNote={
      <>
        The numbers above are calculated for someone turning 40 in 2026. Your precise age — in days,
        hours, minutes, and heartbeats — depends on your exact birth date. Find it all at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me
        </a>
        .
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i" },
      { tag: "Biology", title: "How Many Heartbeats in a Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime" },
      { tag: "Perspective", title: "What Is a Life Clock?", href: "/blog/what-is-a-life-clock" },
    ]}
  />
);

export default BornIn1986;
