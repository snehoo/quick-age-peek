import { Helmet } from "react-helmet-async";

export default function HowOldAmI() {
  return (
    <>
      <Helmet>
        <title>How Old Am I? — Calculate Your Age Every Way</title>
        <meta
          name="description"
          content="Find out how old you really are. Calculate your age in years, months, days, hours, minutes, seconds, heartbeats, and full moons."
        />
        <meta name="keywords" content="how old am i, calculate age, age calculator, age in days, age in seconds" />
      </Helmet>

      <article className="prose prose-lg max-w-2xl mx-auto px-4 py-12">
        <h1>How Old Am I? The Ultimate Age Calculator Guide</h1>

        <p className="lead">
          You think you know your age. But do you really? There are dozens of ways to measure how old you actually are — and each one tells a different story.
        </p>

        <h2>Quick Answer: Your Age in Numbers</h2>
        <p>
          If you were born today, you're:
        </p>
        <ul>
          <li><strong>2.5 billion heartbeats</strong> old</li>
          <li><strong>1,000+ full moons</strong> old</li>
          <li>Around <strong>10,000+ days</strong> old (for a 30-year-old)</li>
          <li>Over <strong>300 million seconds</strong> old</li>
        </ul>

        <h2>Different Ways to Calculate Your Age</h2>

        <h3>1. Age in Days</h3>
        <p>
          The number of days you've lived. This matters because:
        </p>
        <ul>
          <li>Days are more granular than years</li>
          <li>You can spot 1,000-day and 10,000-day milestones</li>
          <li>It's the basis for calculating age in hours, minutes, and seconds</li>
        </ul>
        <p>
          <a href="/blog/how-to-calculate-age-in-days">Learn to calculate age in days →</a>
        </p>

        <h3>2. Age in Heartbeats</h3>
        <p>
          Your heart beats ~2.5 billion times in a lifetime. Resting heart rate varies (50-100 bpm), so your heartbeat count is personal:
        </p>
        <ul>
          <li>Low heart rate = fewer heartbeats per year</li>
          <li>Higher heart rate = more heartbeats per year</li>
          <li>Athletes might have 500 million fewer heartbeats than average</li>
        </ul>
        <p>
          <a href="/blog/how-many-heartbeats-in-a-lifetime">Calculate your heartbeats →</a>
        </p>

        <h3>3. Age in Full Moons</h3>
        <p>
          There are ~13 full moons per year, meaning you'll see roughly 1,000 full moons in a 76-year lifetime. This is often fewer than people expect.
        </p>
        <p>
          <a href="/blog/how-many-full-moons-in-a-lifetime">See your full moon count →</a>
        </p>

        <h3>4. Life Clock — Age as a 24-Hour Day</h3>
        <p>
          If your life were a single 24-hour day, what time is it now? This reveals a powerful perspective on your life stage:
        </p>
        <ul>
          <li>Age 20 = ~6:41 AM (early morning)</li>
          <li>Age 40 = ~1:23 PM (early afternoon)</li>
          <li>Age 60 = ~8:05 PM (evening)</li>
        </ul>
        <p>
          <a href="/blog/what-is-a-life-clock">Calculate your life clock →</a>
        </p>

        <h3>5. What Generation Are You?</h3>
        <p>
          Your age determines your generation — Gen Z, Millennial, Gen X, or Boomer. Generations define shared cultural experiences and worldviews.
        </p>
        <p>
          <a href="/blog/what-generation-am-i">Find your generation →</a>
        </p>

        <h3>6. What Day of the Week Were You Born?</h3>
        <p>
          A lesser-known fact about your age: the specific day of the week you were born. Some cultures believe birth day influences personality.
        </p>
        <p>
          <a href="/blog/what-day-of-the-week-was-i-born">Calculate your birth day →</a>
        </p>

        <h2>Why These Different Age Measurements Matter</h2>

        <p>
          Years are coarse. They miss the fine grain of your life. When you know:
        </p>
        <ul>
          <li><strong>Your age in days</strong>, you can spot 10,000-day milestones</li>
          <li><strong>Your age in heartbeats</strong>, you feel the weight of mortality</li>
          <li><strong>Your age in full moons</strong>, you realize 1,000 is not that many</li>
          <li><strong>Your life clock</strong>, you see your life stage vividly</li>
        </ul>

        <h2>The Bottom Line: You're Older Than You Think</h2>

        <p>
          You've lived more than you realize. Whether measured in heartbeats, seconds, or full moons — the numbers are always larger than years alone suggest. That's the point.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <p className="font-bold">Ready to see your age in all its forms?</p>
          <p>
            Head to the <a href="/">age calculator</a> and enter your birth date. We'll show you how old you really are.
          </p>
        </div>
      </article>
    </>
  );
}
