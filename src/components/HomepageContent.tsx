const HomepageContent = () => {
  return (
    <section
      className="px-5 pb-16 text-left"
      aria-label="Age calculator guide"
    >
      <div className="max-w-2xl mx-auto space-y-10 text-sm leading-relaxed">

        {/* Stat-backed intro — first 30% of content */}
        <p className="text-muted-foreground">
          <strong className="text-foreground">How old am I?</strong> Enter your date of birth above
          and this free age calculator answers instantly — your exact age today in years, months,
          and days, plus your age in seconds, heartbeats, and full moons. The average human
          lifetime equals approximately{" "}
          <strong className="text-foreground">2.5 billion heartbeats</strong>, 960 full moons, and
          31.69 years to your first billion seconds. No sign-up. Works on any device. Your date of
          birth is never stored or sent to any server.
        </p>

        {/* Section: What does this calculator show? */}
        <div>
          <h2 className="text-base font-semibold text-foreground mb-3">
            What does this age calculator show?
          </h2>
          <p className="text-muted-foreground mb-3">
            Most age calculators return one number: years. This one converts your birth date into
            every meaningful unit of time and life experience in a single result.
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Exact age in years, months, and days</li>
            <li>Age in weeks, total days, hours, minutes, and seconds</li>
            <li>Approximate heartbeat count (based on 70 BPM resting average)</li>
            <li>Full moon count since the day you were born</li>
            <li>Your generation — Gen Z, Millennial, Gen X, and more</li>
            <li>The day of the week you were born</li>
            <li>Your zodiac sign by date of birth</li>
            <li>Countdown in days to your next birthday</li>
            <li>Your 10,000th day alive — exact date</li>
            <li>Your 1 billion second milestone — exact date and time</li>
          </ul>
        </div>

        {/* Section: How is age calculated */}
        <div>
          <h2 className="text-base font-semibold text-foreground mb-3">
            How is age calculated from a date of birth?
          </h2>
          <p className="text-muted-foreground mb-3">
            Subtract your birth year from the current year. If your birthday has not yet passed
            this year, subtract 1. That gives your age in complete years. For age in days, multiply
            completed years by 365, add one extra day for each leap year since birth, then add the
            days elapsed since your most recent birthday.
          </p>
          <p className="text-muted-foreground mb-3">
            <strong className="text-foreground">Example:</strong> Born 10 July 2000. Today is
            22 July 2026. Age = 2026 − 2000 = 26 years, 0 months, 12 days = approximately
            9,509 days old.
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Leap years add one extra day every four years (with century-year exceptions)</li>
            <li>The calendar average is 365.2425 days per year over a 400-year cycle</li>
            <li>Age in hours = age in days × 24</li>
            <li>Age in minutes = age in hours × 60</li>
            <li>Age in seconds = age in minutes × 60</li>
            <li>Age in heartbeats = age in seconds ÷ 60 × resting BPM</li>
          </ul>
        </div>

        {/* Section: What generation am I */}
        <div>
          <h2 className="text-base font-semibold text-foreground mb-3">
            What generation am I?
          </h2>
          <p className="text-muted-foreground mb-3">
            Your generation is determined by your birth year. Each generation is shaped by the
            technology and world events present during childhood and young adulthood. The standard
            cutoff years used by researchers and demographers are:
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3">
            <li><strong className="text-foreground">Gen Alpha:</strong> born 2013–2025 (ages 1–13 in 2026)</li>
            <li><strong className="text-foreground">Gen Z:</strong> born 1997–2012 (ages 14–29 in 2026)</li>
            <li><strong className="text-foreground">Millennials:</strong> born 1981–1996 (ages 30–45 in 2026)</li>
            <li><strong className="text-foreground">Gen X:</strong> born 1965–1980 (ages 46–61 in 2026)</li>
            <li><strong className="text-foreground">Baby Boomers:</strong> born 1946–1964 (ages 62–80 in 2026)</li>
            <li><strong className="text-foreground">Silent Generation:</strong> born 1928–1945 (ages 81–98 in 2026)</li>
          </ul>
          <p className="text-muted-foreground">
            Researchers disagree on exact cutoff years by one to two years at the boundaries. The
            ranges above are the most widely cited. Millennials grew up alongside the early
            internet; Gen Z are the first truly mobile-native generation; Gen Alpha has never known
            a world without smartphones and AI assistants.
          </p>
        </div>

        {/* Section: How many heartbeats */}
        <div>
          <h2 className="text-base font-semibold text-foreground mb-3">
            How many heartbeats does a person have in a lifetime?
          </h2>
          <p className="text-muted-foreground mb-3">
            A typical resting heart rate is 60–80 beats per minute. Over an 80-year life at
            70 BPM, the heart beats approximately{" "}
            <strong className="text-foreground">2.94 billion times</strong>. The formula: age in
            years × 365.25 × 24 × 60 × resting BPM.
          </p>
          <p className="text-muted-foreground mb-2">Lifetime heartbeats by fitness level:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3">
            <li>Elite athletes (40–50 BPM): approximately 1.7 billion beats over 80 years</li>
            <li>Average adult (60–80 BPM): approximately 2.5–3.0 billion beats over 80 years</li>
            <li>Higher resting rate (80–100 BPM): approximately 3.0–3.7 billion beats over 80 years</li>
          </ul>
          <p className="text-muted-foreground mb-2">Cumulative heartbeat milestones at 70 BPM:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Age 10: approximately 295 million beats</li>
            <li>Age 20: approximately 591 million beats</li>
            <li>Age 30: approximately 887 million beats</li>
            <li>Age 38: approximately 1.12 billion beats</li>
            <li>Age 50: approximately 1.48 billion beats</li>
            <li>Age 80: approximately 2.37 billion beats</li>
          </ul>
        </div>

        {/* Section: 1 billion seconds */}
        <div>
          <h2 className="text-base font-semibold text-foreground mb-3">
            When will I be 1 billion seconds old?
          </h2>
          <p className="text-muted-foreground mb-3">
            One billion seconds equals{" "}
            <strong className="text-foreground">31 years, 8 months, and approximately 8 days</strong>{" "}
            (31.69 years exactly). Every person alive reaches this milestone in their early
            thirties. It is one of the most striking numerical coincidences in human experience: a
            number that sounds astronomical yet fits inside a single human lifetime.
          </p>
          <p className="text-muted-foreground mb-2">Second milestones by age:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>500 million seconds: age 15.85 (mid-teens)</li>
            <li>1 billion seconds: age 31.69 (early thirties)</li>
            <li>1.5 billion seconds: age 47.54 (late forties)</li>
            <li>2 billion seconds: age 63.38 (early sixties)</li>
            <li>2.5 billion seconds: age 79.23 (late seventies)</li>
            <li>3 billion seconds: age 95.08 (mid-nineties)</li>
          </ul>
        </div>

        {/* Section: Full moons */}
        <div>
          <h2 className="text-base font-semibold text-foreground mb-3">
            How many full moons will I see in my lifetime?
          </h2>
          <p className="text-muted-foreground mb-3">
            The Moon completes one full cycle every{" "}
            <strong className="text-foreground">29.5 days</strong>, giving roughly 12.4 full moons
            per year. Over an 80-year lifetime, a person witnesses approximately{" "}
            <strong className="text-foreground">960 to 1,000 full moons</strong> in total — fewer
            than 1,000, which makes each one worth pausing to notice.
          </p>
          <p className="text-muted-foreground mb-2">Full moons seen by age:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Age 10: approximately 124 full moons</li>
            <li>Age 20: approximately 248 full moons</li>
            <li>Age 30: approximately 373 full moons</li>
            <li>Age 40: approximately 497 full moons</li>
            <li>Age 50: approximately 621 full moons</li>
            <li>Age 60: approximately 745 full moons</li>
            <li>Age 80: approximately 992 full moons</li>
          </ul>
        </div>

        {/* Section: Milestone reference */}
        <div>
          <h2 className="text-base font-semibold text-foreground mb-3">
            Notable age milestones to look out for
          </h2>
          <p className="text-muted-foreground mb-2">In days:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3">
            <li>1,000 days: age 2 years, 8 months</li>
            <li>5,000 days: age 13 years, 8 months</li>
            <li>10,000 days: age 27 years, 4 months</li>
            <li>20,000 days: age 54 years, 9 months</li>
            <li>25,000 days: age 68 years, 6 months</li>
          </ul>
          <p className="text-muted-foreground mb-2">In heartbeats (at 70 BPM):</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3">
            <li>500 million heartbeats: approximately age 13.6</li>
            <li>1 billion heartbeats: approximately age 27.2</li>
            <li>2 billion heartbeats: approximately age 54.4</li>
            <li>3 billion heartbeats: approximately age 81.6</li>
          </ul>
          <p className="text-muted-foreground mb-2">In full moons:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>100th full moon: approximately age 8</li>
            <li>250th full moon: approximately age 20</li>
            <li>500th full moon: approximately age 40</li>
            <li>750th full moon: approximately age 60</li>
            <li>1,000th full moon: approximately age 80</li>
          </ul>
        </div>

        {/* Section: FAQ */}
        <div>
          <h2 className="text-base font-semibold text-foreground mb-4">
            Common age calculator questions
          </h2>
          <div className="space-y-5">
            <div>
              <p className="font-medium text-foreground mb-1">
                How old am I if I was born in a specific year?
              </p>
              <p className="text-muted-foreground">
                Subtract your birth year from 2026. If your birthday has not yet passed this year,
                subtract one more. Example: born in 1990 → 2026 − 1990 = 36, or 35 if your
                birthday falls later in the year.
              </p>
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">
                Why does my age differ by one day on different calculators?
              </p>
              <p className="text-muted-foreground">
                Some calculators count the birth date itself as day 1; others start counting the
                day after birth. Whatismyage.me uses the standard convention: age is 0 at birth
                and increments to 1 on the first birthday.
              </p>
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">
                How do I calculate my exact age without a calculator?
              </p>
              <p className="text-muted-foreground">
                Subtract your birth year from the current year for an approximate answer. For
                exactness, also check whether your current-year birthday has passed. If not,
                subtract one additional year. For age in days, multiply your completed years by 365,
                add leap-year days, then add days since your last birthday.
              </p>
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">
                What is the most accurate free age calculator?
              </p>
              <p className="text-muted-foreground">
                Any calculator that accounts for leap years and checks whether the current-year
                birthday has passed gives the correct result in years. This calculator additionally
                shows age in seconds, heartbeats, full moons, and generational identity — all in a
                single result, with no account required.
              </p>
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">
                Is my date of birth stored when I use this calculator?
              </p>
              <p className="text-muted-foreground">
                No. All calculations run entirely in your browser. Your birth date is never sent to
                any server and is not stored, tracked, or shared.
              </p>
            </div>
          </div>
        </div>

        {/* Visible author + date line */}
        <p className="text-xs text-muted-foreground/60 border-t border-border pt-4">
          Last updated: 22 July 2026 · Written by{" "}
          <a href="/about/" className="hover:text-foreground transition-colors underline">
            Snehal Patel
          </a>
        </p>

      </div>
    </section>
  );
};

export default HomepageContent;
