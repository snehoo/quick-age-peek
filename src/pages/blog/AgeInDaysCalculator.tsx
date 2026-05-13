import { Helmet } from "react-helmet-async";

export default function AgeInDaysCalculator() {
  return (
    <>
      <Helmet>
        <title>Age in Days Calculator — Find Your Exact Age Today</title>
        <meta
          name="description"
          content="Calculate your exact age in days with our precise age in days calculator. Discover milestone days, track your day count, and see what your life's days reveal."
        />
        <meta name="keywords" content="age in days, age calculator days, how many days old am I, days lived" />
      </Helmet>

      <article className="prose prose-lg max-w-2xl mx-auto px-4 py-12">
        <h1>Age in Days Calculator — Find Your Exact Day Count</h1>

        <p className="lead">
          Your life in days. Not years — days. Enter your birth date below and discover exactly how many days you've lived, and what the major milestones mean.
        </p>

        <h2>What is an Age in Days Calculator?</h2>
        <p>
          An age in days calculator takes your birth date and counts every single day you've been alive. It accounts for:
        </p>
        <ul>
          <li><strong>Leap years</strong> — Feb 29 occurs every 4 years (mostly)</li>
          <li><strong>Varying month lengths</strong> — January has 31 days, February has 28 or 29</li>
          <li><strong>Timezone adjustments</strong> — If you were born at midnight vs. noon</li>
          <li><strong>Current time</strong> — Hours and minutes matter for precise counts</li>
        </ul>

        <h2>Why Count Your Age in Days?</h2>
        <p>
          Years are convenient but coarse. Days reveal the finer grain of your life:
        </p>
        <ul>
          <li>A 30-year-old has lived ~11,000 days. That number feels heavier than "30".</li>
          <li>Milestone days (like your 10,000th) mark invisible birthdays you never noticed</li>
          <li>Days align with heartbeats and seconds — other precise age measurements</li>
          <li>Different cultures mark age differently; days are universal</li>
        </ul>

        <h2>How to Calculate Age in Days: The Formula</h2>
        <p>
          The formula is straightforward, but the details matter:
        </p>
        <pre>
          <code>{`Age in Days = Today's Date − Birth Date

Example:
Born: January 15, 1995
Today: May 13, 2026

Step 1: Calculate total days between dates
Years × 365 = 31 years × 365 = 11,315 days

Step 2: Add leap year days (Feb 29 in 1996, 2000, 2004, 2008, 2012, 2016, 2020, 2024)
= 8 leap days

Step 3: Add remaining days (Jan 15 to May 13 = 128 days)

Final: 11,315 + 8 + 128 = 11,451 days`}</code>
        </pre>

        <h2>Major Age Milestones in Days</h2>
        <p>
          These day counts mark invisible turning points in your life:
        </p>
        <ul>
          <li><strong>1,000 days</strong> — ~2.7 years (often missed toddler milestone)</li>
          <li><strong>5,000 days</strong> — ~13.7 years (usually around age 13-14)</li>
          <li><strong>10,000 days</strong> — ~27.4 years (often in your late 20s)</li>
          <li><strong>15,000 days</strong> — ~41 years (mid-life marker)</li>
          <li><strong>20,000 days</strong> — ~54.8 years (approaching retirement)</li>
          <li><strong>25,000 days</strong> — ~68.5 years (entering final chapter)</li>
          <li><strong>30,000 days</strong> — ~82.2 years (approaching century milestone)</li>
        </ul>

        <h2>Other Ways to Measure Your Age</h2>
        <p>
          Days are just one piece. Try these calculators to see your age in other measurements:
        </p>
        <ul>
          <li><a href="/blog/how-many-heartbeats-in-a-lifetime">Age in Heartbeats</a> — How many times has your heart beaten?</li>
          <li><a href="/blog/how-many-hours-old-am-i">Age in Hours</a> — The precise hourly count</li>
          <li><a href="/blog/how-many-minutes-old-am-i">Age in Minutes</a> — Down to the minute</li>
          <li><a href="/blog/how-many-seconds-old-am-i">Age in Seconds</a> — The billion-second milestone</li>
          <li><a href="/blog/how-many-weeks-old-am-i">Age in Weeks</a> — Weeks as a life measure</li>
          <li><a href="/blog/how-many-months-old-am-i">Age in Months</a> — The monthly perspective</li>
        </ul>

        <h2>How Does Leap Year Affect Your Day Count?</h2>
        <p>
          Most calculators treat leap years correctly, but here's how they matter:
        </p>
        <ul>
          <li>Born in a leap year? You likely saw Feb 29 on your birth certificate</li>
          <li>Leap years occur every 4 years (with exceptions for century years)</li>
          <li>Skipping Feb 29 in non-leap years is why "day counts" get tricky</li>
          <li>Our calculator accounts for all leap days between your birth and today</li>
        </ul>

        <h2>The Bottom Line</h2>
        <p>
          Your age in days is a more visceral number than years. It shows that life isn't measured in neat calendar blocks — it's measured in sunrise after sunrise after sunrise. Enter your birth date above and see exactly how many days you've collected so far.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <p className="font-bold">Ready to find your exact age in days?</p>
          <p>
            Head to the <a href="/">age calculator</a> and enter your birth date. We'll show you your day count plus hours, minutes, seconds, and more.
          </p>
        </div>
      </article>
    </>
  );
}
