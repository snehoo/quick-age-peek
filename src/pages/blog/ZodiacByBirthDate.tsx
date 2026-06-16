import { Link } from "react-router-dom";
import {
  ArticleShell,
  Lead,
  Paragraph,
  H2,
  H3,
  CtaBox,
  AuthorBio,
  RelatedPosts,
  BackToBlog,
} from "@/components/blog/ArticleLayout";
import { useArticleMeta } from "@/components/blog/articleMeta";

const CANONICAL = "https://whatismyage.me/blog/how-to-find-your-zodiac-sign-by-birth-date";
const TITLE = "How to Find Your Zodiac Sign by Birth Date | whatismyage.me";
const DESC =
  "Find your zodiac sign by birth date — covering Western, Vedic, and Chinese astrology. Discover what your sun sign, moon sign, and rising sign actually mean.";
const HEADLINE = "How to Find Your Zodiac Sign by Birth Date";

const ZODIAC = [
  ["Aries", "21 March – 19 April", "The first sign. Bold, pioneering, competitive. Ruled by Mars."],
  ["Taurus", "20 April – 20 May", "Grounded, sensual, persistent. Ruled by Venus."],
  ["Gemini", "21 May – 20 June", "Curious, adaptable, communicative. Ruled by Mercury."],
  ["Cancer", "21 June – 22 July", "Intuitive, nurturing, deeply emotional. Ruled by the Moon."],
  ["Leo", "23 July – 22 August", "Confident, creative, magnetic. Ruled by the Sun."],
  ["Virgo", "23 August – 22 September", "Analytical, meticulous, service-oriented. Ruled by Mercury."],
  ["Libra", "23 September – 22 October", "Balanced, diplomatic, aesthetic. Ruled by Venus."],
  ["Scorpio", "23 October – 21 November", "Intense, perceptive, transformative. Ruled by Pluto and Mars."],
  ["Sagittarius", "22 November – 21 December", "Philosophical, adventurous, honest. Ruled by Jupiter."],
  ["Capricorn", "22 December – 19 January", "Disciplined, ambitious, patient. Ruled by Saturn."],
  ["Aquarius", "20 January – 18 February", "Innovative, humanitarian, independent. Ruled by Uranus."],
  ["Pisces", "19 February – 20 March", "Imaginative, empathetic, spiritual. Ruled by Neptune."],
];

const ZodiacByBirthDate = () => {
  useArticleMeta({ title: TITLE, description: DESC, canonical: CANONICAL, headline: HEADLINE });

  return (
    <ArticleShell>
      <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        ← All posts
      </Link>

      <h1 className="font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-4">
        {HEADLINE}
      </h1>

      <Lead>
        Your zodiac sign is one of the first things people want to know about you — and one of the first
        things you discover when you enter your birth date anywhere. However, most people only know their
        Western sun sign. Furthermore, there are two other major astrological systems that assign entirely
        different signs to the same birth date.
      </Lead>

      <Paragraph>
        Additionally, even within Western astrology, your sun sign is only one of three primary placements.
        Consequently, understanding what your birth date actually tells astrologers requires knowing all
        three systems — and which parts of each actually carry meaning.
      </Paragraph>

      <H2>Western Zodiac Sign Dates — The Complete List by Birth Date</H2>
      <Paragraph>
        Western astrology divides the year into 12 signs based on the sun's position at the moment of
        birth. Moreover, the dates shift slightly year to year based on the solar calendar. However, the
        following dates are standard reference points:
      </Paragraph>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-7">
        {ZODIAC.map(([name, dates, desc]) => (
          <div key={name} className="bg-card border border-border rounded-xl p-4">
            <div className="text-base font-bold text-primary">{name}</div>
            <div className="text-xs text-muted-foreground mb-2">{dates}</div>
            <p className="text-sm text-foreground/90 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <H2>What Is a Cusp Sign? Understanding Zodiac Borderlines</H2>
      <Paragraph>
        If you were born within two to three days of a sign boundary, you may have heard you are "on the
        cusp." For instance, someone born on 22 April might feel caught between Aries and Taurus. However,
        most mainstream astrologers do not recognise cusp signs as a formal category. Specifically, your
        sun sign is determined by the exact date and time of the sun's transition — and you are either
        fully in one sign or the other.
      </Paragraph>
      <Paragraph>
        Nevertheless, cusp-born individuals often find traits of both adjacent signs resonate with them.
        Moreover, this is partly because your <strong>moon sign</strong> and <strong>rising sign</strong>{" "}
        add substantial complexity to any birth chart — meaning the "blended" feeling often comes from
        those placements rather than any literal cusp effect.
      </Paragraph>

      <H2>Sun Sign, Moon Sign, and Rising Sign — What's the Difference?</H2>
      <Paragraph>
        Your <strong>sun sign</strong> — the one based purely on birth date — represents your core identity
        and conscious self. Additionally, it is the sign most people mean when they say "I'm a Scorpio" or
        "she's a Leo." However, it is only one of three fundamental placements in a Western birth chart.
      </Paragraph>
      <Paragraph>
        Furthermore, your <strong>moon sign</strong> — determined by the moon's position at your birth —
        governs your emotional inner world, instincts, and subconscious patterns. Consequently, two people
        with the same sun sign but different moon signs will behave very differently under stress or in
        intimate relationships. Additionally, calculating your moon sign requires knowing not just your
        birth date but your birth time, since the moon changes sign every 2.5 days.
      </Paragraph>
      <Paragraph>
        Moreover, your <strong>rising sign</strong> (or ascendant) — determined by which zodiac sign was on
        the eastern horizon at your exact moment and place of birth — governs your outward personality and
        first impressions. As a result, many astrologers argue that the rising sign is the most externally
        visible of the three. Specifically, it shapes how strangers perceive you before they know you well.
      </Paragraph>

      <H3>How to find your moon sign and rising sign</H3>
      <Paragraph>
        Calculating moon sign requires your birth date and an approximate birth time. Meanwhile,
        calculating your rising sign requires both birth time and birth location — specifically the
        latitude and longitude of your birthplace. Consequently, a complete birth chart — sometimes called
        a <strong>natal chart</strong> or <em>kundali</em> in Vedic astrology — requires all three data
        points. Furthermore, free natal chart calculators are widely available online and produce detailed
        charts in seconds.
      </Paragraph>

      <H2>Vedic Astrology — A Different Zodiac for the Same Birth Date</H2>
      <Paragraph>
        Western astrology and <strong>Vedic astrology</strong> (also called Jyotish) use different
        reference systems. Specifically, Western astrology uses the tropical zodiac — tied to the seasons
        and the solstices. Conversely, Vedic astrology uses the sidereal zodiac — tied to the actual
        position of the stars. As a result, the two systems currently differ by approximately 23 degrees,
        meaning most people's Vedic sun sign is one sign earlier than their Western sign.
      </Paragraph>
      <Paragraph>
        For example, someone born on 15 March is a Pisces in Western astrology. However, in Vedic
        astrology they are likely an Aquarius. Furthermore, Vedic astrology places considerably more
        emphasis on the moon sign (<em>Rashi</em>) than the sun sign — meaning the first question a Vedic
        astrologer asks is "what is your moon sign?" rather than "what is your sun sign?"
      </Paragraph>

      <H2>Chinese Zodiac — Your Sign by Birth Year</H2>
      <Paragraph>
        The <strong>Chinese zodiac</strong> system operates on a 12-year cycle rather than a monthly one.
        Consequently, your Chinese zodiac sign is determined primarily by your birth year rather than your
        birth date. Moreover, the Chinese zodiac year begins at Chinese New Year — which falls in late
        January or early February — rather than 1 January. Therefore, people born in January or early
        February need to check whether their birth fell before or after Chinese New Year in their year.
      </Paragraph>
      <Paragraph>
        The 12 Chinese zodiac animals, in cycle order, are: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse,
        Goat, Monkey, Rooster, Dog, and Pig. Furthermore, each animal is associated with five elements —
        Wood, Fire, Earth, Metal, Water — on a 60-year cycle. As a result, a complete Chinese zodiac
        designation includes both the animal and the element (for instance, Wood Dragon or Fire Horse).
      </Paragraph>

      <H2>Your Zodiac Sign at whatismyage.me</H2>
      <Paragraph>
        When you enter your date of birth at{" "}
        <Link to="/" className="text-primary underline">
          whatismyage.me
        </Link>
        , your Western zodiac sign appears automatically as part of your personal life snapshot. Moreover,
        it sits alongside your{" "}
        <Link to="/blog/what-generation-am-i/" className="text-primary underline">
          generational identity
        </Link>
        , your{" "}
        <Link to="/blog/how-many-full-moons-in-a-lifetime/" className="text-primary underline">
          full moon count
        </Link>
        , and your{" "}
        <Link
          to="/blog/birthday-twins-famous-people-born-on-your-birthday/"
          className="text-primary underline"
        >
          famous birthday twins
        </Link>{" "}
        — creating a rich, multi-dimensional picture of what your birth date says about you.
      </Paragraph>

      <CtaBox title="Find your zodiac sign and full life portrait">
        Enter your date of birth at whatismyage.me — zodiac sign, generation, heartbeats, full moons, and
        your shareable life card, all in one place.
      </CtaBox>

      <AuthorBio

        name="Snehal Patel"

        bio="Snehal is a developer and data enthusiast from Mumbai who loves finding unexpected patterns in numbers. When not building calculators, they're probably wondering how many breaths they've taken so far. What Is My Age was born from a simple question: what does your age really mean?"

      />


      <RelatedPosts
        posts={[
          { tag: "Science", title: "How Many Heartbeats in a Human Lifetime?", href: "/blog/how-many-heartbeats-in-a-lifetime/" },
          { tag: "Astronomy", title: "How Many Full Moons Will You See in Your Lifetime?", href: "/blog/how-many-full-moons-in-a-lifetime/" },
          { tag: "Culture", title: "What Generation Am I? The Complete Guide", href: "/blog/what-generation-am-i/" },
          { tag: "How-to", title: "How to Calculate Your Exact Age in Days", href: "/blog/how-to-calculate-age-in-days/" },
        ]}
      />

      <BackToBlog />
    </ArticleShell>
  );
};

export default ZodiacByBirthDate;
