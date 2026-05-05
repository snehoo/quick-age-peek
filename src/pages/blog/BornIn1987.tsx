import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

const BornIn1987 = () => (
  <BornInYearArticle
    year={1987}
    preBirthdayAge={38}
    postBirthdayAge={39}
    slug="how-old-am-i-if-i-was-born-in-1987"
    title="How Old Am I If I Was Born in 1987? | Age in 2026"
    description="Born in 1987? You're 38 or 39 in 2026. See your age in days, heartbeats, and full moons — plus a look back at the remarkable world you were born into."
    intro={
      <>
        If you were born in 1987, you are <strong>38 or 39 years old in 2026</strong> — 39 if your
        birthday has already passed this year, 38 if it's still coming up. You were born in the late
        1980s, that strange and vibrant twilight of the Cold War era, when the world was tense but
        pop culture was gleefully unconcerned.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1692623438129-2949d20ca82e?fm=jpg&q=80&w=1200&auto=format&fit=crop",
      alt: "A close-up of a vintage cake with cherries on top, warm and nostalgic",
      credit: (
        <>
          Photo by Paulina Kaminska on{" "}
          <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline">
            Unsplash
          </a>
        </>
      ),
    }}
    heartbeatImage={{
      src: "https://images.unsplash.com/photo-1692640848099-325af9b3f75f?fm=jpg&q=80&w=1200&auto=format&fit=crop",
      alt: "A white birthday cake topped with two cherries, delicate and celebratory",
      credit: (
        <>
          Photo by Paulina Kaminska on{" "}
          <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline">
            Unsplash
          </a>
        </>
      ),
    }}
    daysLived={
      <>
        At 39 years old, you've lived approximately <strong>14,245 days</strong>. Each one different
        from the last, even when they didn't feel like it.
      </>
    }
    hoursMinutes={
      <>
        <strong>~341,880 hours</strong> of life lived and <strong>~20,512,800 minutes</strong> from
        birth to now.
      </>
    }
    heartbeats={
      <>
        Your heart has beaten approximately <strong>1.42 billion times</strong> since you were born.
        It has thumped through exams, heartbreaks, first days, last days, joy, grief, and everything
        in between — without you ever having to ask it to.
      </>
    }
    fullMoons={
      <>
        You've lived through roughly <strong>480 full moons</strong>. That's 480 cycles of the moon
        rising full and bright over whatever chapter of life you happened to be in.
      </>
    }
    breaths={
      <>
        At a resting rate of 15 breaths per minute: approximately{" "}
        <strong>307 million breaths</strong> in 39 years. The first one was the hardest. Every one
        since has been automatic.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 1987, you are a <strong>Millennial</strong>. You're young enough to have grown up
          with the internet as a presence in your teenage years, but old enough to remember a time
          before Google, before streaming, before social media made everyone's life a performance.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          You probably had a Nokia phone before a smartphone. You almost certainly remember the
          exact moment you first heard about September 11, 2001 — you were 13 or 14. You graduated
          into the workforce somewhere around the 2008 financial crisis, which shaped your
          relationship with economic security in ways that still surface today.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          You're part of a generation that was called "entitled" by people who had free university
          education and cheap housing, which is a neat historical irony you've learned to find
          mildly amusing.
        </p>
      </>
    }
    worldIntro="1987 was a year of extraordinary events. Here's the world that welcomed you:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li>
          <strong>Black Monday:</strong> On October 19, 1987, global stock markets crashed
          spectacularly. The Dow Jones lost 22.6% in a single day — still the largest one-day
          percentage drop in history.
        </li>
        <li>
          <strong>Music:</strong> Michael Jackson's <em>Bad</em> album dominated the charts. U2
          released <em>The Joshua Tree</em> to universal acclaim. Whitney Houston, Bon Jovi, and Pet
          Shop Boys were all having career-defining years.
        </li>
        <li>
          <strong>Film:</strong> <em>The Princess Bride</em>, <em>RoboCop</em>, <em>Predator</em>,{" "}
          <em>Dirty Dancing</em>, <em>Full Metal Jacket</em>, and <em>Wall Street</em> all released
          in 1987. An embarrassment of riches.
        </li>
        <li>
          <strong>Tech:</strong> The first disposable camera was sold by Fujifilm. IBM introduced
          the PS/2 personal computer. Hypercard — an early precursor to the web — launched on Mac.
        </li>
        <li>
          <strong>World:</strong> The Intermediate-Range Nuclear Forces Treaty between the US and
          Soviet Union was signed in December, a landmark moment in nuclear disarmament.
        </li>
        <li>
          <strong>Sport:</strong> The San Francisco 49ers won Super Bowl XXI. The America's Cup was
          contested in Perth, Australia for the first time.
        </li>
      </ul>
    }
    futureRows={[
      ["2027", "39–40"],
      ["2030", "42–43"],
      ["2035", "47–48"],
      ["2040", "52–53"],
      ["2050", "62–63"],
      ["2060", "72–73"],
    ]}
    futureNote="The big 40 is either just behind you or approaching fast — either way, you're in excellent company."
    planetRows={[
      ["Mercury", "~162 Mercury years"],
      ["Venus", "~63 Venus years"],
      ["Mars", "~20 Mars years"],
      ["Jupiter", "~3.3 Jupiter years"],
      ["Saturn", "~1.3 Saturn years"],
    ]}
    planetNote="On Mars, you'd be celebrating your 20th birthday. On Mercury, you'd be 162 years old. The universe has a very different sense of time."
    lifeClock={
      <>
        On a 24-hour life clock — midnight birth, midnight at the end of a full life — a 39-year-old
        (based on an average life expectancy of ~79 years) sits at approximately{" "}
        <strong>11:51 AM</strong>. Still before noon. Still a whole afternoon ahead.
      </>
    }
    finalNote={
      <>
        These figures are based on turning 39 in 2026. For your precise age in days, hours, minutes,
        and heartbeats — tied to your actual birthday — visit{" "}
        <a href="https://whatismyage.me" className="text-primary underline">
          whatismyage.me
        </a>{" "}
        and enter your date of birth.
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i" },
      { tag: "Astronomy", title: "How Many Full Moons in a Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime" },
      { tag: "Perspective", title: "What Is a Life Clock?", href: "/blog/what-is-a-life-clock" },
    ]}
  />
);

export default BornIn1987;
