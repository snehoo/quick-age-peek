import { BornInYearArticle } from "@/components/blog/BornInYearArticle";

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
        your birthday has already passed this year, 24 if it's still ahead. Mid-twenties. The age
        at which the future starts to feel less abstract and more like something you're actively
        building. You were born in the year the world changed — 2001 is a year defined above all
        by September 11, but also by Wikipedia, the iPod, and the first mapping of the human
        genome.
      </>
    }
    topImage={{
      src: "https://images.unsplash.com/photo-1702285566276-a0c819b84e54?w=1200&q=75&auto=format&fit=crop",
      alt: "A blurry multicoloured abstract background — early 2000s digital aesthetic",
      credit: (
        <>
          Photo by Kukai Art on{" "}
          <a href="https://unsplash.com/photos/a-blurry-image-of-a-multicolored-background-KhgA0E4MeQ8" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
        </>
      ),
    }}
    heartbeatImage={{
      src: "https://images.unsplash.com/photo-1776018276961-177292bdd7ad?w=1200&q=75&auto=format&fit=crop",
      alt: "Vintage boomboxes stacked on display — nostalgic early 2000s vibes",
      credit: (
        <>
          Photo by Charles Puaud on{" "}
          <a href="https://unsplash.com/photos/stack-of-vintage-boomboxes-and-speakers-on-display-uCdFUuhBsW0" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
        </>
      ),
    }}
    daysLived={
      <>
        At 25 years old, you've lived approximately <strong>9,131 days</strong> — over nine
        thousand individual days of experience, growth, and becoming.
      </>
    }
    hoursMinutes={
      <>
        <strong>~219,144 hours</strong> since you were born and{" "}
        <strong>~13,148,640 minutes</strong> of life so far.
      </>
    }
    heartbeats={
      <>
        Your heart beats approximately 100,000 times a day per the American Heart Association.
        Over 25 years, that's roughly <strong>913 million heartbeats</strong> — approaching a
        billion, powered entirely automatically.
      </>
    }
    fullMoons={
      <>
        The lunar cycle is 29.5 days. Since 2001, you've seen approximately{" "}
        <strong>310 full moons</strong>.
      </>
    }
    breaths={
      <>
        At 15 breaths per minute across 25 years: roughly{" "}
        <strong>197 million breaths</strong> — each one invisible, each one essential.
      </>
    }
    generation={
      <>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          Born in 2001, you are firmly <strong>Generation Z</strong>. You have no memory of
          September 11, 2001 — you were a newborn or infant. Yet you grew up in a world
          permanently changed by it.
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">
          You are among the most thoroughly digitally native people in history. You entered the
          job market post-COVID, in a world of hybrid work, economic uncertainty, and AI
          beginning to reshape entire industries — including ones you trained for.
        </p>
      </>
    }
    worldIntro="2001 was one of the most consequential years in modern history. Here's what was happening:"
    worldEvents={
      <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
        <li><strong>September 11:</strong> On September 11, 2001, al-Qaeda terrorists hijacked four commercial aircraft. Nearly 3,000 people died. The event reshaped global politics, security, and foreign affairs for decades.</li>
        <li><strong>Human Genome Project:</strong> In February 2001, scientists announced the first draft of the complete human genome sequence — one of the greatest scientific achievements in history.</li>
        <li><strong>iPod:</strong> Apple launched the original iPod on October 23, 2001 — 1,000 songs in your pocket. It changed how humanity listened to music.</li>
        <li><strong>Wikipedia:</strong> Wikipedia was founded on January 15, 2001 by Jimmy Wales and Larry Sanger.</li>
        <li><strong>Film:</strong> <em>Harry Potter and the Philosopher's Stone</em>, <em>The Lord of the Rings: The Fellowship of the Ring</em>, <em>Shrek</em>, <em>Moulin Rouge!</em>, <em>Memento</em>, <em>A Beautiful Mind</em>, <em>Ocean's Eleven</em>.</li>
        <li><strong>Music:</strong> Beyoncé's <em>Crazy in Love</em>, Missy Elliott's <em>Get Ur Freak On</em>, Lifehouse's <em>Hanging by a Moment</em>, Daft Punk's <em>Discovery</em>.</li>
        <li><strong>Sport:</strong> Australia won the Rugby World Cup. Barry Bonds hit 73 home runs in a single MLB season — a record that still stands.</li>
      </ul>
    }
    futureRows={[
      ["2027", "25–26"],
      ["2030", "28–29"],
      ["2035", "33–34"],
      ["2040", "38–39"],
      ["2050", "48–49"],
      ["2060", "58–59"],
    ]}
    planetRows={[
      ["Mercury", "~104 Mercury years"],
      ["Venus", "~41 Venus years"],
      ["Mars", "~13 Mars years"],
      ["Jupiter", "~2.1 Jupiter years"],
      ["Saturn", "~0.85 Saturn years"],
    ]}
    planetNote="On Saturn you're not yet 1 year old. On Mercury you'd be 104."
    lifeClock={
      <>
        On a 24-hour life clock — midnight at birth, midnight at the end of a full life — a
        25-year-old (based on a global average life expectancy of ~73 years) sits at
        approximately <strong>8:13 AM</strong>. Early morning. The whole day ahead.
      </>
    }
    finalNote={
      <>
        These figures are based on turning 25 in 2026. Your precise age — in days, hours,
        minutes, and heartbeats — is tied to your exact birthday. Discover it at{" "}
        <a href="https://whatismyage.me" className="text-primary underline">whatismyage.me</a>.
      </>
    }
    related={[
      { tag: "Identity", title: "What Generation Am I?", href: "/blog/what-generation-am-i" },
      { tag: "Biology", title: "How Many Heartbeats in a Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime" },
      { tag: "Perspective", title: "What Is a Life Clock?", href: "/blog/what-is-a-life-clock" },
    ]}
  />
);

export default BornIn2001;
