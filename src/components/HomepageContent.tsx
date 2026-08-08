import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "How do I calculate my exact age in years, months, and days?",
    a: "Enter your date of birth — day, month, and year — into the calculator above. The result immediately shows your complete age in years, months, days, hours, minutes, and seconds. No manual counting required. The calculator handles leap years, varying month lengths, and all edge cases automatically.",
  },
  {
    q: "Is this age calculator accurate for official documents and forms?",
    a: "Yes. The calculator uses the standard Western chronological age method — the same system used by governments, schools, and legal institutions worldwide. For visa applications, school admissions, insurance forms, and similar documents, the result in completed years is what you need. For critical legal purposes, always cross-check against your birth certificate as the authoritative source.",
  },
  {
    q: "Can I calculate my age as of a specific past or future date?",
    a: "Yes. The calculator defaults to today's date, but you can change the target date to any date you choose. This is useful for forms that ask for your age as of an application closing date, an exam date, or any other specific reference point. Simply adjust the second date field before calculating.",
  },
  {
    q: "What is the difference between completed age and running age?",
    a: "Your completed age is the number of full years you have lived since your last birthday. Your running age is the year you are currently working through — effectively your completed age plus one. Most official documents, medical records, and legal contexts ask for completed age. For example, someone who turned 35 last month has a completed age of 35 and a running age of 36.",
  },
  {
    q: "How does the calculator handle people born on February 29?",
    a: "For people born on February 29 (leap day), the calculator treats February 28 as their birthday in non-leap years. This is the internationally accepted convention used by most governments and legal systems. In leap years, February 29 is used as normal. The total age calculation remains accurate regardless.",
  },
  {
    q: "Does the calculator store my date of birth?",
    a: "No. The calculation happens entirely within your browser. Your date of birth is never sent to a server, stored in a database, or linked to any account. There is no account to create, no email required, and no data retained after you close the page. See our privacy policy for full details.",
  },
  {
    q: "How old am I in days, hours, and seconds?",
    a: "The calculator shows all of these simultaneously in your result. A 30-year-old is approximately 10,957 days old, 262,980 hours old, and 946,728,000 seconds old. These numbers vary slightly depending on your exact birth date due to leap years. Use the calculator above for a precise figure based on your specific birthday.",
  },
  {
    q: "Why does my age in months differ from calculator to calculator?",
    a: "Different calculators handle month-end edge cases differently. For example, if you were born on January 31 and you check your age on March 31, some tools count two full months while others count one month and a variable number of days. WhatIsMyAge.me uses the most common Western convention: a full month is counted when the same day-of-month is reached in the following month.",
  },
];

const HomepageContent = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <section className="hp-content-section" aria-label="About this age calculator">
      <div className="hp-content-inner">

        {/* INTRO — indexable summary block for AI/search snippet extraction */}
        <div className="px-5 pb-2 text-center">
          <div className="max-w-xl mx-auto text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>
              <strong className="text-foreground">How old am I?</strong> Enter your date of birth above and
              this free age calculator answers instantly — your exact age today in years, months, and days,
              plus your age in weeks, hours, seconds, and heartbeats. It accounts for leap years
              automatically, works on any device, and needs no sign-up.
            </p>
            <p>
              You'll also see your generation, the day of the week you were born, a live countdown to your
              next birthday, and milestones like your 10,000th day and 1 billionth second alive. Your birth
              date is processed entirely in your browser and never stored.
            </p>
          </div>
        </div>

        {/* BLOCK 1: ABOUT THE TOOL */}
        <div className="hp-about">
          <div className="hp-section-label">About This Tool</div>
          <h2 className="hp-section-title">The age calculator built for people who want a real answer</h2>
          <div className="hp-section-body">
            <p>
              WhatIsMyAge.me is a free, focused age calculator that tells you exactly how old you are —
              not just in years, but in months, days, hours, minutes, and seconds. Enter your date of birth
              and your complete age appears instantly, no account required.
            </p>
            <p>
              Most age calculator sites are built around general-purpose calculator hubs, where your
              question is one of hundreds competing for space. This site exists for one reason only:
              to give you a precise, accurate age from a date of birth, as fast as possible.
            </p>
          </div>
          <div className="hp-about-grid">
            <div className="hp-about-col">
              <h3>What it calculates</h3>
              <p>
                Your exact chronological age in years, months, days, hours, minutes, and seconds.
                All units appear together in one result — no dropdowns, no page switching.
              </p>
            </div>
            <div className="hp-about-col">
              <h3>Who it's for</h3>
              <p>
                Anyone who needs a precise age — parents filling in school admission forms, professionals
                verifying dates for documents, healthcare workers checking patient ages, or simply
                curious people who want to know how many seconds they have been alive.
              </p>
            </div>
            <div className="hp-about-col">
              <h3>How it handles edge cases</h3>
              <p>
                The calculator accounts for leap years, varying month lengths, and end-of-month
                date boundaries. A person born on February 29 is handled correctly.
              </p>
            </div>
            <div className="hp-about-col">
              <h3>Your privacy</h3>
              <p>
                Your date of birth is processed entirely within your browser. Nothing is transmitted
                to a server. Nothing is stored or linked to you. The calculation happens locally.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 2: WHO USES IT */}
        <div className="hp-section-label">Common Uses</div>
        <h2 className="hp-section-title">When exact age actually matters</h2>
        <div className="hp-section-body">
          <p>
            Age is rarely just a number in the contexts where it truly counts.
            Here are the situations where people reach for a precise age calculator most often.
          </p>
        </div>
        <div className="hp-use-cases">
          {[
            { icon: "🏫", title: "School Admissions", body: "Many schools and districts require children to meet an age cutoff to the day. Being one day short of the threshold can mean waiting another full year. Exact age calculation removes all guesswork." },
            { icon: "🛂", title: "Visa & Passport Forms", body: "Working holiday visas, dependent child entries, and many immigration categories require age in years and months on the date of application — not just a birth year." },
            { icon: "🏥", title: "Healthcare & Clinical", body: "Doctors, nurses, and pharmacists use exact age for dosing calculations, developmental assessments, vaccine schedules, and screening eligibility — often to the month or day." },
            { icon: "💼", title: "HR & Employment", body: "Many competitive exams, government roles, and age-gated job categories have strict minimum and maximum age limits calculated as of a specific date. One day past the cutoff can mean disqualification." },
            { icon: "🎉", title: "Milestones & Curiosity", body: "How many days have you been alive? When will you turn exactly 1 billion seconds old? What day of the week were you born? These questions make for surprisingly memorable birthday moments." },
            { icon: "📋", title: "Legal & Official Documents", body: "Courts, solicitors, insurance providers, and pension administrators all work with completed age — the number of full years elapsed — calculated from your exact date of birth to a specific reference date." },
          ].map((uc) => (
            <div key={uc.title} className="hp-uc-card">
              <span className="hp-uc-icon">{uc.icon}</span>
              <div className="hp-uc-title">{uc.title}</div>
              <p className="hp-uc-body">{uc.body}</p>
            </div>
          ))}
        </div>

        <hr className="hp-divider" />

        {/* BLOCK 3: HOW IT WORKS */}
        <div className="hp-section-label">How It Works</div>
        <h2 className="hp-section-title">The calculation behind your exact age</h2>
        <div className="hp-section-body">
          <p>
            Age calculation looks simple. Subtract your birth year from the current year and
            you get a number. But that rough figure is wrong roughly half the time — because it
            does not account for whether your birthday has passed yet this year, how many days
            are in each month, or how leap years affect the total day count.
          </p>
          <p>
            A precise age calculation works differently. It computes the number of full years
            elapsed, then the remaining months, then the remaining days — accounting for every
            calendar edge case along the way.
          </p>
        </div>
        <div className="hp-formula">{`Age = Today's Date − Date of Birth

Step 1: Count full years elapsed since last birthday
Step 2: Count full months elapsed since last birthday month
Step 3: Count remaining days since last full month

Example: Born 15 March 1990 → Today 6 August 2026
  → 36 full years elapsed (birthday passed in March 2026)
  → 4 full months since birthday (March → August)
  → 22 remaining days (15 Jul → 6 Aug)
  → Result: 36 years, 4 months, 22 days

Extended output:
  → Multiply days × 24 → hours lived
  → Multiply hours × 60 → minutes lived
  → Multiply minutes × 60 → seconds lived`}</div>
        <div className="hp-steps">
          {[
            { n: "1", title: "Enter your date of birth", body: "Select your day, month, and year of birth using the date picker above. The full date is required for precise results — year alone is not enough." },
            { n: "2", title: "Choose a target date (optional)", body: "By default, the calculator uses today's date. You can change this to any past or future date — useful for forms that ask for your age as of a specific deadline." },
            { n: "3", title: "Read your complete result", body: "Your age appears in all units simultaneously — years, months, days, hours, minutes, and seconds — in a single result screen. No dropdowns. No extra pages." },
            { n: "4", title: "Explore more", body: "Curious about your age in days, what generation you belong to, or when you'll hit one billion seconds? The blog below covers these and dozens more age-related questions." },
          ].map((s) => (
            <div key={s.n} className="hp-step">
              <div className="hp-step-num">{s.n}</div>
              <div className="hp-step-title">{s.title}</div>
              <p className="hp-step-body">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="hp-highlight">
          <strong>A note on accuracy:</strong> WhatIsMyAge.me uses the Western chronological age system —
          age increases on each birthday, starting from zero at birth. This is the standard used by
          governments, schools, hospitals, and legal systems across most of the world.
          For forms and official documents, always use the completed age (full years elapsed),
          not the running age (the year currently being lived).
        </div>

        <hr className="hp-divider" />

        {/* BLOCK 4: STATS */}
        <div className="hp-section-label">By the Numbers</div>
        <h2 className="hp-section-title">Age in perspective</h2>
        <div className="hp-section-body">
          <p>Most people think of age in years. Here is what those years look like in other units.</p>
        </div>
        <div className="hp-stats">
          {[
            { num: "365.25", label: "Days in an average year (including leap years)" },
            { num: "8,766", label: "Hours in one year" },
            { num: "~1 billion", label: "Seconds in 31.7 years" },
            { num: "10,000", label: "Days old at approximately age 27.4" },
            { num: "Feb 29", label: "The edge case every age calculator must handle correctly" },
            { num: "~2.5 bn", label: "Seconds lived by age 80" },
          ].map((s) => (
            <div key={s.label} className="hp-stat">
              <span className="hp-stat-num">{s.num}</span>
              <span className="hp-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <hr className="hp-divider" />

        {/* BLOCK 5: FAQ */}
        <div className="hp-section-label">Frequently Asked Questions</div>
        <h2 className="hp-section-title">Questions about age calculation</h2>
        <div className="hp-faq">
          {faqs.map((faq, i) => (
            <div key={i} className={`hp-faq-item${openFaq === i ? " open" : ""}`}>
              <button className="hp-faq-q" onClick={() => toggleFaq(i)} type="button">
                {faq.q}
                <span className="hp-faq-icon">+</span>
              </button>
              <div className="hp-faq-a">{faq.a}</div>
            </div>
          ))}
        </div>

        <hr className="hp-divider" />

        {/* BLOCK 6: FROM THE BLOG */}
        <div className="hp-section-label">From the Blog</div>
        <h2 className="hp-section-title">Explore more age-related questions</h2>
        <div className="hp-section-body">
          <p>
            Beyond your exact age, there is a lot more to discover. The WhatIsMyAge.me blog
            covers age curiosities, calculation guides, and tools for specific use cases.
          </p>
        </div>
        <div className="hp-articles">
          {[
            { href: "/blog/how-many-seconds-old-am-i/", tag: "Fun Facts", title: "How Many Seconds Old Am I?", desc: "The surprisingly large number behind a seemingly simple question." },
            { href: "/blog/how-many-weeks-old-am-i/", tag: "Fun Facts", title: "How Many Weeks Old Am I?", desc: "Your age in weeks — and why the number is always bigger than you expect." },
            { href: "/blog/what-generation-am-i/", tag: "Generations", title: "What Generation Am I?", desc: "Boomer, Gen X, Millennial, or Gen Z — find out which generation you belong to." },
            { href: "/blog/when-will-i-be-1-billion-seconds-old/", tag: "Milestones", title: "When Will I Be 1 Billion Seconds Old?", desc: "It happens at 31.7 years. Here's exactly when your billion-second birthday falls." },
            { href: "/blog/what-day-of-the-week-was-i-born/", tag: "Fun Facts", title: "What Day of the Week Was I Born?", desc: "Monday's child is fair of face — but which day were you actually born on?" },
            { href: "/blog/how-to-calculate-age-in-days/", tag: "Guide", title: "How to Calculate Age in Days", desc: "The step-by-step method for calculating exact age in days, manually or with a tool." },
          ].map((a) => (
            <Link key={a.href} className="hp-article-card" to={a.href}>
              <span className="hp-article-tag">{a.tag}</span>
              <span className="hp-article-title">{a.title}</span>
              <span className="hp-article-desc">{a.desc}</span>
            </Link>
          ))}
        </div>

        <hr className="hp-divider" />

        {/* BLOCK 7: ABOUT THE SITE (E-E-A-T) */}
        <div className="hp-section-label">About This Site</div>
        <h2 className="hp-section-title">Built for accuracy, not for clicks</h2>
        <div className="hp-section-body">
          <p>
            WhatIsMyAge.me was created because most age calculator sites bury the tool under
            advertising, require you to navigate between multiple pages for different units,
            or deliver a result surrounded by so much surrounding content that finding the
            actual answer takes longer than it should.
          </p>
          <p>
            This site does one thing: it tells you how old you are, precisely, in every unit
            that matters, immediately. The blog adds educational context for people who want
            to understand the calculation, explore what their age means in different units,
            or learn when a precise age calculation is legally or clinically important.
          </p>
          <p>
            Every calculation uses the Gregorian calendar standard and handles all known
            edge cases — leap years, month-end dates, and year-end boundaries — correctly.
            If you notice a result that seems wrong, use the contact page to let us know.
          </p>
        </div>
        <div className="hp-author-strip">
          <div className="hp-author-avatar">🧮</div>
          <div className="hp-author-text">
            <div className="hp-author-name">WhatIsMyAge.me — Built by Snehal Patel</div>
            <p className="hp-author-bio">
              Developer and data enthusiast from Mumbai. Built this because age calculators
              shouldn't make you work for a simple answer. Every number here is calculated
              correctly, every edge case handled.{" "}
              <Link to="/about/" className="hp-author-link" style={{ display: "inline", border: "none", padding: 0, fontSize: "inherit", color: "inherit" }}>Read the full story →</Link>
            </p>
            <div className="hp-author-links">
              <Link className="hp-author-link" to="/about/">About</Link>
              <Link className="hp-author-link" to="/contact/">Contact</Link>
              <Link className="hp-author-link" to="/privacy/">Privacy</Link>
              <Link className="hp-author-link" to="/blog/">Blog</Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomepageContent;
