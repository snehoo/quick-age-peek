import { useState, useEffect, useRef } from "react";
import { calculateAge, type AgeResult } from "@/lib/ageCalculator";
import { getGeneration, getLocalizedItems, getAgeMoodLine, getLifeClockMood } from "@/lib/lifeContext";
import { parseIsoDate, isoToLocalDate, getMonthDay } from "@/lib/isoDate";
import { Slider } from "@/components/ui/slider";
import CompactNameTile from "./CompactNameTile";
import FamousBirthdaysList from "./FamousBirthdaysList";
import ShareCard from "./ShareCard";
import DemoSlideshow from "./DemoSlideshow";
import AdSlot from "./AdSlot";
import { supabase } from "@/integrations/supabase/client";

const DEFAULT_LIFE_EXPECTANCY = 80;

interface AgeCalculatorProps {
  showHero?: boolean;
}

const AgeCalculator = ({ showHero = false }: AgeCalculatorProps) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [lifeExpectancy, setLifeExpectancy] = useState(DEFAULT_LIFE_EXPECTANCY);
  const [result, setResult] = useState<AgeResult | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [timezone, setTimezone] = useState<string>("");
  const [error, setError] = useState("");
  const [topCelebName, setTopCelebName] = useState<string | null>(null);
  const dobRef = useRef<string>("");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data) => {
        if (data?.country_name) setCountry(data.country_name);
        if (data?.timezone) setTimezone(data.timezone);
      })
      .catch(() => {});
  }, []);

  const startLiveUpdate = (dobStr: string) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    dobRef.current = dobStr;
    const dobLocal = isoToLocalDate(dobStr);
    if (!dobLocal) return;
    const tick = () => setResult(calculateAge(dobLocal));
    tick();
    intervalRef.current = setInterval(tick, 1000);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const validateAndStart = (dobStr: string) => {
    setError("");
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (!dobStr) {
      setResult(null);
      return;
    }

    const parts = parseIsoDate(dobStr);
    if (!parts) {
      setResult(null);
      return;
    }
    const dobDate = isoToLocalDate(dobStr)!;
    const now = new Date();

    if (dobDate > now) {
      setError("Date of birth can't be in the future.");
      setResult(null);
      return;
    }
    if (parts.year < 1900) {
      setError("Please enter a valid date of birth.");
      setResult(null);
      return;
    }

    startLiveUpdate(dobStr);
  };

  // Live recalculation as soon as a valid date is entered
  useEffect(() => {
    validateAndStart(dob);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dob]);

  // Fetch top famous birthday celeb (matches Famous Birthday Twins source) for the share card
  useEffect(() => {
    if (!dob) {
      setTopCelebName(null);
      return;
    }
    const md = getMonthDay(dob);
    if (!md) return;
    const { month, day } = md;
    let cancelled = false;
    setTopCelebName(null);
    const t = setTimeout(async () => {
      try {
        const { data, error } = await supabase.functions.invoke("famous-birthdays", {
          body: { month, day },
        });
        if (cancelled) return;
        if (!error && data?.people?.[0]?.name) setTopCelebName(data.people[0].name as string);
      } catch (e) {
        if (!cancelled) console.error("share card celeb fetch", e);
      }
    }, 350);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [dob]);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dob) {
      setError("Please enter your date of birth.");
      return;
    }
    validateAndStart(dob);
  };

  const openPicker = (el: HTMLInputElement | null) => {
    if (!el) return;
    const input = el as HTMLInputElement & { showPicker?: () => void };
    try {
      input.focus();
      input.showPicker?.();
    } catch {
      /* no-op */
    }
  };

  const greeting = name.trim() ? name.trim() : "You";

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleCalculate} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1.5">
            First name <span className="text-muted-foreground/70 font-normal">(so we can make it personal)</span>
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Sarah"
            className="w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>

        <div>
          <label htmlFor="dob" className="block text-sm font-medium text-muted-foreground mb-1.5">
            Date of birth
          </label>
          <input
            id="dob"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            onClick={(e) => openPicker(e.currentTarget)}
            onFocus={(e) => openPicker(e.currentTarget)}
            onTouchEnd={(e) => openPicker(e.currentTarget)}
            max={new Date().toISOString().split("T")[0]}
            className="w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors cursor-pointer [&::-webkit-calendar-picker-indicator]:cursor-pointer"
          />
        </div>

        {error && <p className="text-destructive text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full rounded-lg bg-primary py-3.5 font-semibold text-primary-foreground hover:opacity-90 active:scale-[0.99] transition-all"
        >
          Calculate My Age
        </button>
      </form>

      {showHero && !result && (
        <div className="mt-8 animate-fade-in-up">
          <DemoSlideshow />
        </div>
      )}

      {(() => {
        // Hours alive in current 24h cycle of "life as a day"
        const lifeFraction = Math.min(result.years / lifeExpectancy, 0.999);
        const totalMinsInDay = lifeFraction * 24 * 60;
        const lifeHour = Math.floor(totalMinsInDay / 60);
        const lifeMin = Math.floor(totalMinsInDay % 60);
        const ampm = lifeHour >= 12 ? "PM" : "AM";
        const displayHour = lifeHour % 12 === 0 ? 12 : lifeHour % 12;
        const lifeTimeStr = `${displayHour}:${String(lifeMin).padStart(2, "0")} ${ampm}`;

        // Days spent sleeping — avg 8 hours/day = 1/3 of life
        const nightsSlept = Math.floor(result.totalDays / 3);

        // Heart beats: avg 80 bpm
        const heartBeats = result.totalDays * 24 * 60 * 80;
        const heartBeatsStr =
          heartBeats >= 1e9
            ? `${(heartBeats / 1e9).toFixed(1)}B`
            : `${(heartBeats / 1e6).toFixed(0)}M`;

        const moodLine = getAgeMoodLine(result.years);
        const shortMood = getLifeClockMood(result.years);
        const yearsLeft = Math.max(lifeExpectancy - result.years, 0);
        const weekendsLeft = Math.max(Math.round(yearsLeft * 52), 0);
        const localized = getLocalizedItems(result.years, country);
        const dobParts = parseIsoDate(dob);
        const dobDate = isoToLocalDate(dob);
        if (!dobParts || !dobDate) return null;
        const gen = getGeneration(dobParts.year);
        const dobFormatted = dobDate.toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        // Only compute detailed values if result exists
        if (!result) {
          return (
            <div className="mt-10" style={{ opacity: 0, pointerEvents: "none" }}>
              {/* Space reservation: skeleton structure with zero/empty values */}
              <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 mb-4 opacity-30">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground leading-tight min-h-[1.4em]">
                  {greeting}, you are <span className="text-primary">0</span> years old
                </h2>
                <p className="text-sm text-muted-foreground mt-1 h-5"></p>
                <div className="mt-4 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3">
                  <p className="text-sm sm:text-base text-foreground italic h-6"></p>
                </div>
              </div>

              <div className="h-8"></div>

              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="age-stat-card opacity-30">
                    <div className="age-stat-value">-</div>
                    <div className="age-stat-label">-</div>
                  </div>
                ))}
              </div>

              <div className="h-8"></div>

              <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="age-stat-card opacity-30">
                    <div className="age-stat-value text-2xl sm:text-3xl">-</div>
                    <div className="age-stat-label">-</div>
                  </div>
                ))}
              </div>

              <div className="h-8"></div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="age-stat-card text-center opacity-30">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">-</div>
                  <div className="font-display text-2xl sm:text-3xl text-primary">--:-- --</div>
                  <div className="text-xs text-muted-foreground italic mt-1 leading-snug h-4"></div>
                </div>
                <div className="age-stat-card text-center opacity-30">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">-</div>
                  <div className="font-display text-2xl sm:text-3xl text-primary">0 years</div>
                  <div className="text-xs text-muted-foreground mt-0.5 h-4"></div>
                  <div className="mt-3 px-1 h-8"></div>
                </div>
              </div>

              <div className="h-8"></div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="age-stat-card text-center opacity-30">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">-</div>
                  <div className="text-sm text-muted-foreground italic">-</div>
                </div>
                <div className="age-stat-card text-center opacity-30">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">-</div>
                  <div className="font-display text-xl text-primary mb-1">-</div>
                  <div className="text-xs text-muted-foreground italic leading-snug h-4"></div>
                </div>
              </div>

              <div className="h-8"></div>

              <div className="mt-4 rounded-xl border border-border bg-card p-5 sm:p-6 opacity-30">
                <p className="text-sm text-muted-foreground h-5"></p>
              </div>

              <div className="h-8"></div>

              <div className="mt-4 rounded-xl border border-border bg-card p-5 sm:p-6 opacity-30">
                <p className="text-sm text-muted-foreground h-16"></p>
              </div>
            </div>
          );
        }

        return (
          <div className="mt-10 transition-opacity duration-300" style={{ opacity: 1 }}>
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 mb-4">
              <h2 className="font-display text-2xl sm:text-3xl text-foreground leading-tight min-h-[1.4em]">
                {greeting}, you are <span className="text-primary">{result.years}</span> years old
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {timezone ? `${timezone} · ` : ""}{dobFormatted}
              </p>
              <div className="mt-4 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3">
                <p className="text-sm sm:text-base text-foreground italic">
                  &ldquo;{moodLine}&rdquo;
                </p>
              </div>
            </div>

            <AdSlot slotId="results-top" />

            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="age-stat-card">
                <div className="age-stat-value">{result.years}</div>
                <div className="age-stat-label">Years</div>
              </div>
              <div className="age-stat-card">
                <div className="age-stat-value">{result.months}</div>
                <div className="age-stat-label">Months</div>
              </div>
              <div className="age-stat-card">
                <div className="age-stat-value">{result.days}</div>
                <div className="age-stat-label">Days</div>
              </div>
              <div className="age-stat-card">
                <div className="age-stat-value">{result.hours}</div>
                <div className="age-stat-label">Hours</div>
              </div>
              <div className="age-stat-card">
                <div className="age-stat-value">{result.minutes}</div>
                <div className="age-stat-label">Minutes</div>
              </div>
              <div className="age-stat-card">
                <div className="age-stat-value animate-pulse">{result.seconds}</div>
                <div className="age-stat-label">Seconds</div>
              </div>
              <div className="age-stat-card">
                <div className="age-stat-value">{result.totalDays.toLocaleString()}</div>
                <div className="age-stat-label">Days Alive</div>
              </div>
              <div className="age-stat-card">
                <div className="age-stat-value">
                  {result.nextBirthdayDays === 0 ? "🎂" : result.nextBirthdayDays}
                </div>
                <div className="age-stat-label">
                  {result.nextBirthdayDays === 0 ? "Happy Birthday!" : "To Birthday"}
                </div>
              </div>
              <div className="age-stat-card">
                <div className="age-stat-value">{nightsSlept.toLocaleString()}</div>
                <div className="age-stat-label">Days Slept</div>
              </div>
              <div className="age-stat-card">
                <div className="age-stat-value">{heartBeatsStr}</div>
                <div className="age-stat-label">Heart Beats</div>
              </div>
            </div>

            <AdSlot slotId="home-mid" />

            {/* Localized "Life in context" 3-box set */}
            <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
              {localized.map((item) => (
                <div key={item.label} className="age-stat-card">
                  <div className="age-stat-value text-2xl sm:text-3xl">{item.value}</div>
                  <div className="age-stat-label">{item.label}</div>
                </div>
              ))}
            </div>

            {/* 24-hour life clock + Time Left (combined) — 2-tile set */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="age-stat-card text-center">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Life as a 24-hour day
                </div>
                <div className="font-display text-2xl sm:text-3xl text-primary">{lifeTimeStr}</div>
                <div className="text-xs text-muted-foreground italic mt-1 leading-snug">{shortMood}</div>
              </div>
              <div className="age-stat-card text-center">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Time Left (to age {lifeExpectancy})
                </div>
                <div className="font-display text-2xl sm:text-3xl text-primary">
                  {yearsLeft.toLocaleString()} years
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {weekendsLeft.toLocaleString()} weekends
                </div>
                <div className="mt-3 px-1">
                  <Slider
                    value={[lifeExpectancy]}
                    min={70}
                    max={100}
                    step={1}
                    onValueChange={(v) => setLifeExpectancy(v[0])}
                    aria-label="Life expectancy"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground/70 mt-1">
                    <span>70</span>
                    <span>{lifeExpectancy}</span>
                    <span>100</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Name + Generation 2-tile set */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              {name.trim() ? (
                <CompactNameTile
                  name={name}
                  birthYear={dobParts.year}
                  country={country}
                />
              ) : (
                <div className="age-stat-card text-center">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Name meaning</div>
                  <div className="text-sm text-muted-foreground italic">Add your name above to reveal its meaning.</div>
                </div>
              )}
              <div className="age-stat-card text-center">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Generation</div>
                <div className="font-display text-xl text-primary mb-1">{gen.name}</div>
                <div className="text-xs text-muted-foreground italic leading-snug">{gen.tagline}</div>
              </div>
            </div>

            {/* Famous birthday twins — single tile */}
            <FamousBirthdaysList
              month={dobParts.month}
              day={dobParts.day}
            />

            <ShareCard
              name={name}
              years={result.years}
              totalDays={result.totalDays}
              fullMoons={Math.floor(result.years * 12.37)}
              heartBeatsStr={heartBeatsStr}
              moodLine={moodLine}
              dobFormatted={dobFormatted}
              nextBirthdayDays={result.nextBirthdayDays}
              generationName={gen.name}
              generationTagline={gen.tagline}
              famousName={topCelebName}
            />
          </div>
        );
      })()}
    </div>
  );
};

export default AgeCalculator;
