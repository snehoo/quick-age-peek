import { Link } from "react-router-dom";
import { CtaBox, Figure, H2, H3, Lead, Paragraph, RelatedPosts, SimpleTable, UnitArticleShell, credit, ext } from "@/components/blog/UnitArticle";

const meta = {
  title: "How Many Minutes Old Am I? Calculate Your Age in Minutes | whatismyage.me",
  description: "How many minutes old are you? Probably more than you think. Find your age in minutes instantly, understand the formula, and discover what that enormous number really means.",
  canonical: "https://whatismyage.me/blog/how-many-minutes-old-am-i",
  headline: "How Many Minutes Old Am I?",
};

const MinutesOld = () => (
  <UnitArticleShell meta={meta} title="How Many Minutes Old Am I?">
    <Figure
      src="https://images.unsplash.com/photo-1501139083538-0139583c060f?w=1200&q=75&auto=format&fit=crop"
      alt="A glowing digital clock display in blue — time ticking forward"
      credit={credit("Aron Visuals", "https://unsplash.com/photos/selective-focus-photo-of-brown-and-blue-hourglass-on-stones-BXOXnQ26B7o")}
    />
    <Lead>
      Of all the units of time, minutes might be the one that best captures how life actually feels. Not years — those blur past. Not seconds — those vanish. Minutes are the granular texture of daily experience.
    </Lead>
    <Paragraph>
      If you're 30, the answer is approximately <strong>15.8 million minutes</strong>. If you're 40, around <strong>21 million</strong>. Fifty? Close to <strong>26.3 million minutes</strong>.
    </Paragraph>

    <H2>How to Calculate Your Age in Minutes</H2>
    <H3>The Formula</H3>
    <Paragraph><strong>Age in minutes = Age in years × 525,960</strong></Paragraph>
    <Paragraph>525,960 is the number of minutes in an average year (365.25 × 24 × 60). So a 35-year-old is approximately <strong>18,408,600 minutes old</strong>.</Paragraph>
    <H3>The Precise Method</H3>
    <Paragraph>Calculate total days between your birth date and today, then multiply by 1,440 (minutes in a day). The fastest way to get an exact figure is the <Link to="/" className="text-primary underline">whatismyage.me calculator</Link>.</Paragraph>

    <H2>Quick Reference: Your Age in Minutes</H2>
    <SimpleTable
      headers={["Age (years)", "Age in minutes"]}
      rows={[
        ["18", "~9,467,280 minutes"],
        ["20", "~10,519,200 minutes"],
        ["25", "~13,149,000 minutes"],
        ["30", "~15,778,800 minutes"],
        ["35", "~18,408,600 minutes"],
        ["40", "~21,038,400 minutes"],
        ["45", "~23,668,200 minutes"],
        ["50", "~26,298,000 minutes"],
        ["60", "~31,557,600 minutes"],
        ["70", "~36,817,200 minutes"],
      ]}
    />

    <H2>What Can You Do in a Minute?</H2>
    <Figure
      src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=1200&q=75&auto=format&fit=crop"
      alt="A close-up of a vintage stopwatch, face on, mid-tick"
      credit={credit("Djim Loic", "https://unsplash.com/photos/white-pocket-watch-with-gold-colored-frame-ft0-Xu4nTvA")}
    />
    <Paragraph>A minute sounds small. But consider what happens in 60 seconds:</Paragraph>
    <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[17px] leading-relaxed mb-5">
      <li>Your heart beats approximately {ext("https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates", "70 times")}</li>
      <li>You take roughly 15 breaths</li>
      <li>Your body produces around {ext("https://www.ncbi.nlm.nih.gov/books/NBK259/", "25 million new red blood cells")}</li>
      <li>The Earth travels approximately {ext("https://www.nasa.gov/solar-system/earth/", "1,800 kilometres")} in its orbit</li>
    </ul>

    <H2>The History of the Minute</H2>
    <Paragraph>
      The minute has roots stretching back to {ext("https://www.britannica.com/science/minute-time-measurement", "ancient Babylon")}. Babylonian astronomers used a base-60 system, which is why both hours and minutes are divided into 60 units — a system so practical it has survived unchanged for over 4,000 years.
    </Paragraph>
    <Paragraph>The word "minute" comes from the Latin <em>pars minuta prima</em> — "first small part" of an hour.</Paragraph>

    <H2>Your Waking Minutes</H2>
    <Paragraph>
      Of all the minutes you've lived, roughly a third have been spent asleep. According to {ext("https://www.sleepfoundation.org/how-sleep-works/how-much-sleep-do-we-really-need", "the Sleep Foundation")}, adults need 7–9 hours per night.
    </Paragraph>
    <Paragraph>
      Over 40 years: ~21 million total minutes, ~7 million asleep, leaving ~14 million waking minutes. According to {ext("https://news.harvard.edu/gazette/story/2010/11/wandering-mind-not-a-happy-mind/", "research from Harvard on attention")}, people spend roughly 47% of their waking time thinking about something other than what they're doing — that's ~6.6 million of those 14 million minutes spent mentally elsewhere.
    </Paragraph>

    <H2>Milestone Minute Numbers</H2>
    <SimpleTable
      headers={["Milestone", "Age when reached"]}
      rows={[
        ["10 million minutes", "~19 years, 1 month"],
        ["15 million minutes", "~28 years, 7 months"],
        ["20 million minutes", "~38 years, 2 months"],
        ["25 million minutes", "~47 years, 8 months"],
        ["30 million minutes", "~57 years, 1 month"],
      ]}
    />

    <H2>Minutes vs Other Units</H2>
    <SimpleTable
      headers={["Unit", "30 years", "40 years", "50 years"]}
      rows={[
        ["Months", "360", "480", "600"],
        ["Weeks", "~1,566", "~2,087", "~2,609"],
        ["Days", "~10,958", "~14,610", "~18,263"],
        ["Hours", "~262,980", "~350,640", "~438,300"],
        [<strong key="1">Minutes</strong>, <strong key="2">~15.8 million</strong>, <strong key="3">~21 million</strong>, <strong key="4">~26.3 million</strong>],
        ["Seconds", "~946 million", "~1.26 billion", "~1.58 billion"],
      ]}
    />
    <Paragraph>
      Related: <Link to="/blog/how-many-hours-old-am-i" className="text-primary underline">hours old</Link> · <Link to="/blog/how-many-weeks-old-am-i" className="text-primary underline">weeks old</Link> · <Link to="/blog/how-many-seconds-old-am-i" className="text-primary underline">seconds old</Link>
    </Paragraph>

    <CtaBox title="Find your exact minute count">
      Enter your date of birth at whatismyage.me — your minutes alive, calculated to this exact second.
    </CtaBox>

    <RelatedPosts posts={[
      { tag: "Time", title: "How Many Hours Old Am I?", href: "/blog/how-many-hours-old-am-i" },
      { tag: "Time", title: "How Many Weeks Old Am I?", href: "/blog/how-many-weeks-old-am-i" },
      { tag: "How-to", title: "How to Calculate Your Age in Days", href: "/blog/how-to-calculate-age-in-days" },
      { tag: "Numbers", title: "How Many Seconds Old Am I?", href: "/blog/how-many-seconds-old-am-i" },
      { tag: "Time", title: "What Is a Life Clock?", href: "/blog/what-is-a-life-clock" },
    ]} />
  </UnitArticleShell>
);

export default MinutesOld;
