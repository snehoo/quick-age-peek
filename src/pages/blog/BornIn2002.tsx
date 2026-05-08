import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const BornIn2002 = () => (
  <BornInYearArticle
    year={2002}
    preBirthdayAge={23}
    postBirthdayAge={24}
    slug="how-old-am-i-if-i-was-born-in-2002"
    title="How Old Am I If I Was Born in 2002? | Age in 2026"
    description="Born in 2002? You're 23 or 24 in 2026. Find your exact age in days, heartbeats, and full moons — plus a look at the early 2000s world you were born into."
    intro={
      <>
        If you were born in 2002, you are <strong>23 or 24 years old in 2026</strong> — 24 if
        your birthday has passed this year, 23 if it's still ahead. Early twenties. The years of
        figuring out who you actually are. You were born in 2002 — the year the euro began
        circulating as physical cash, the year <em>Spider-Man</em> became a global phenomenon,
        and the year the International Criminal Court was established.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1773998240458-9a36e718c63a?w=1200&q=75&auto=format&fit=crop",
      alt: "A transparent purple iPod with colourful keyboard — iconic early 2000s tech",
      credit: (
        <>
          Photo by Rich Laxa on{" "}
          <a href="https://unsplash.com/photos/transparent-purple-ipod-with-colorful-keyboard-in-ear-headphones-98ZX4sKgytg" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
        </>
      ),
    }}
    heartbeatImage={{
      src: "https://images.unsplash.com/photo-1771366629899-2b695442ad31?w=1200&q=75&auto=format&fit=crop",
      alt: "A retro desk with vintage computer and drawing supplies — early 2000s home setup",
      credit: (
        <>
          Photo by Calvin Wise on{" "}
          <a href="https://unsplash.com/photos/retro-desk-with-vintage-computer-and-drawing-supplies-6PAGsCSXSFc" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
        </>
      ),
    }}
    daysLived={
      <>
        At 24 years old, you've lived approximately <strong>8,766 days</strong> — nearly nine
        thousand individual days of experience, each one different from the last.
      </>
    }
    hoursMinutes={
      <>
        <strong>~210,384 hours</strong> since your first breath and{" "}
        <strong>~12,623,040 minutes</strong> of life so far.
      </>
    }
    heartbeats={
      <>
        Your heart beats approximately 100,000 times a day per the American Heart Association.
        Over 24 years, that's roughly <strong>876 million heartbeats</strong> — over three
        quarters of a billion, all automatic.
      </>
    }
    fullMoons={
      <>
        The lunar cycle completes every 29.5 days. Since 2002, you've seen approximately{" "}
        <strong>297 full moons</strong> rise over your life.
      </>
    }
    breaths={
      <>
        At 15 breaths per minute over 24 years: roughly <strong>189 million breaths</strong>.
        Each one keeping you here, one quiet moment at a time.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 2002, you are <strong>Generation Z</strong> — fully and squarely. You are among
          the most digitally native people alive. You have no meaningful memory of a pre-internet
          world.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          You came of age during COVID-19 — you were 17 or 18 when lockdowns began. Your final
          years of school or first years of university happened behind screens, in isolation,
          during one of the most socially disorienting periods in modern memory. You are entering
          a workforce being reshaped by artificial intelligence.
        </p>
      </>
    }
    worldIntro="2002 was an early 2000s world — post-9/11, pre-social media, right at the hinge. Here's what was happening:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li><strong>Euro coins and notes launched:</strong> On January 1, 2002, euro banknotes and coins entered circulation across 12 European countries simultaneously — one of the largest currency transitions in history.</li>
        <li><strong>Spider-Man:</strong> Sam Raimi's <em>Spider-Man</em> grossed over $821 million globally and launched the modern superhero blockbuster era.</li>
        <li><strong>International Criminal Court:</strong> The ICC officially began functioning on July 1, 2002 — the world's first permanent international criminal tribunal.</li>
        <li><strong>Music:</strong> Nelly's <em>Hot in Herre</em>, Justin Timberlake's <em>Cry Me a River</em>, Eminem's <em>Without Me</em>, Coldplay's <em>The Scientist</em>, Avril Lavigne's debut <em>Let Go</em>.</li>
        <li><strong>Film:</strong> <em>The Lord of the Rings: The Two Towers</em>, <em>Spider-Man</em>, <em>Minority Report</em>, <em>Chicago</em>, <em>Bowling for Columbine</em>, <em>Bend It Like Beckham</em>.</li>
        <li><strong>Sport:</strong> Brazil won the FIFA World Cup in Japan/South Korea — Ronaldo top scored with 8 goals. South Korea's run to the semi-finals was one of the tournament's great stories.</li>
      </ul>
    }
    futureRows={[
      ["2027", "24–25"],
      ["2030", "27–28"],
      ["2035", "32–33"],
      ["2040", "37–38"],
      ["2050", "47–48"],
      ["2060", "57–58"],
    ]}
    planetRows={[
      ["Mercury", "~100 Mercury years"],
      ["Venus", "~39 Venus years"],
      ["Mars", "~13 Mars years"],
      ["Jupiter", "~2 Jupiter years"],
      ["Saturn", "~0.81 Saturn years"],
    ]}
    planetNote="On Jupiter, you'd be celebrating your 2nd birthday. On Mercury, you'd be 100 years old."
    lifeClock={
      <>
        On a 24-hour life clock — midnight at birth, midnight at the end of a full life — a
        24-year-old (based on a global average life expectancy of ~73 years) sits at
        approximately <strong>7:53 AM</strong>. Early morning. A long, full day ahead.
      </>
    }
    finalNote={
      <>
        These figures are based on turning 24 in 2026. Your precise age — in days, hours,
        minutes, and heartbeats — depends on your exact birthday. Find it at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">whatismyage.me</a>.
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i" },
      { tag: "Astronomy", title: "How Many Full Moons in a Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime" },
      { tag: "How-to", title: "How to Calculate Age in Days", href: "/blog/how-to-calculate-age-in-days" },
    ]}
  />
);

export default BornIn2002;
