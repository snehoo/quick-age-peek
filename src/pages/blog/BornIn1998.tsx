import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const BornIn1998 = () => (
  <BornInYearArticle
    year={1998}
    preBirthdayAge={27}
    postBirthdayAge={28}
    slug="how-old-am-i-if-i-was-born-in-1998"
    title="How Old Am I If I Was Born in 1998? | Age in 2026"
    description="Born in 1998? You're 27 or 28 in 2026. Discover your age in days, heartbeats, and full moons — plus the defining events of the year you arrived."
    intro={
      <>
        If you were born in 1998, you are <strong>27 or 28 years old in 2026</strong> — 28 if
        your birthday has already passed this year, 27 if it's still ahead. The late twenties
        have a particular texture: enough adult life behind you to feel experienced, enough ahead
        to feel unfinished. You were born in 1998 — the year Google officially launched, the year{" "}
        <em>The Legend of Zelda: Ocarina of Time</em> released, and the year the world began
        quietly panicking about Y2K.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1702285566276-a0c819b84e54?w=1200&q=75&auto=format&fit=crop",
      alt: "A blurry image of a multicoloured Y2K-style background — late 90s digital aesthetic",
      credit: (
        <>
          Photo by Kukai Art on{" "}
          <a href="https://unsplash.com/photos/a-blurry-image-of-a-multicolored-background-KhgA0E4MeQ8" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
        </>
      ),
    }}
    heartbeatImage={{
      src: "https://images.unsplash.com/photo-1771366629899-2b695442ad31?w=1200&q=75&auto=format&fit=crop",
      alt: "A retro desk setup with vintage computer — late 90s home office energy",
      credit: (
        <>
          Photo by Calvin Wise on{" "}
          <a href="https://unsplash.com/photos/retro-desk-with-vintage-computer-and-drawing-supplies-6PAGsCSXSFc" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
        </>
      ),
    }}
    daysLived={
      <>
        At 28 years old, you've lived approximately <strong>10,227 days</strong> — over ten
        thousand individual days of being alive, making choices, and experiencing the world.
      </>
    }
    hoursMinutes={
      <>
        <strong>~245,448 hours</strong> since your first breath and{" "}
        <strong>~14,726,880 minutes</strong> of life so far.
      </>
    }
    heartbeats={
      <>
        Your heart beats around 100,000 times a day per the American Heart Association. Over 28
        years, that's approximately <strong>1.02 billion heartbeats</strong> — crossing the
        billion mark, still going strong without a single day off.
      </>
    }
    fullMoons={
      <>
        The lunar cycle is 29.5 days. Since 1998, roughly <strong>347 full moons</strong> have
        risen over your life — each one lighting up a different chapter.
      </>
    }
    breaths={
      <>
        At 15 breaths per minute over 28 years: approximately{" "}
        <strong>220 million breaths</strong>. Each one quiet, automatic, essential.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1998, you are firmly <strong>Generation Z</strong>. According to Pew Research,
          Gen Z begins in 1997 — placing you squarely in it.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Your childhood was the last one where being online was optional. Then everything
          changed, fast: Facebook (2006), the iPhone (2007), Instagram (2010), Snapchat (2011),
          TikTok (2018). You navigated every one of these shifts in real time, often without
          adult guidance on how to do it.
        </p>
      </>
    }
    worldIntro="1998 was a year of tech breakthroughs, political drama, and unforgettable culture:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li><strong>Google launches:</strong> Larry Page and Sergey Brin incorporated Google on September 4, 1998 in a garage in Menlo Park.</li>
        <li><strong>Ocarina of Time:</strong> <em>The Legend of Zelda: Ocarina of Time</em> released for the N64 in November 1998 and is still widely regarded as one of the greatest video games ever made.</li>
        <li><strong>Clinton impeached:</strong> US President Bill Clinton was impeached by the House of Representatives in December 1998 — only the second President in US history to be impeached.</li>
        <li><strong>Human Genome Project:</strong> The project was in full swing in 1998, racing to map the complete human DNA sequence.</li>
        <li><strong>Music:</strong> <em>Believe</em> by Cher topped charts globally. Also: Jay-Z's <em>Vol. 2... Hard Knock Life</em>, Lauryn Hill's <em>The Miseducation of Lauryn Hill</em>, Madonna's <em>Ray of Light</em>, Massive Attack's <em>Mezzanine</em>.</li>
        <li><strong>Film:</strong> <em>Saving Private Ryan</em>, <em>The Truman Show</em>, <em>Shakespeare in Love</em>, <em>Lock, Stock and Two Smoking Barrels</em>, <em>There's Something About Mary</em>, <em>Armageddon</em>.</li>
        <li><strong>Sport:</strong> France hosted and won the FIFA World Cup — their first ever title — beating Brazil 3-0 in the final. Zinedine Zidane scored twice.</li>
      </ul>
    }
    futureRows={[
      ["2027", "28–29"],
      ["2030", "31–32"],
      ["2035", "36–37"],
      ["2040", "41–42"],
      ["2050", "51–52"],
      ["2060", "61–62"],
    ]}
    planetRows={[
      ["Mercury", "~116 Mercury years"],
      ["Venus", "~45 Venus years"],
      ["Mars", "~15 Mars years"],
      ["Jupiter", "~2.4 Jupiter years"],
      ["Saturn", "~0.95 Saturn years"],
    ]}
    planetNote="On Saturn you haven't even finished your first orbit. On Mercury you'd be 116 years old."
    lifeClock={
      <>
        On a 24-hour life clock, a 28-year-old (based on a global average life expectancy of ~73
        years) sits at approximately <strong>9:13 AM</strong>. Early morning. The whole day still
        ahead.
      </>
    }
    finalNote={
      <>
        These numbers are based on turning 28 in 2026. For your precise age — in days, hours,
        minutes, and heartbeats — visit{" "}
        <a href="https://whatismyage.me" className="text-primary underline">whatismyage.me</a> and
        enter your date of birth.
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i" },
      { tag: "Astronomy", title: "How Many Full Moons in a Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime" },
      { tag: "How-to", title: "How to Calculate Age in Days", href: "/blog/how-to-calculate-age-in-days" },
    ]}
  />
);

export default BornIn1998;
