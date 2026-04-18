import { useState, useEffect, useRef } from "react";
import { calculateAge, type AgeResult } from "@/lib/ageCalculator";
import NameInsights from "./NameInsights";
import FamousBirthdaysList from "./FamousBirthdaysList";
import BirthSongPlayer from "./BirthSongPlayer";
import NameTwins from "./NameTwins";
import Rarity from "./Rarity";

const AgeCalculator = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<AgeResult | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [timezone, setTimezone] = useState<string>("");
  const [error, setError] = useState("");
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
    const tick = () => setResult(calculateAge(new Date(dobStr)));
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

    const dobDate = new Date(dobStr);
    const now = new Date();

    if (isNaN(dobDate.getTime())) {
      setResult(null);
      return;
    }
    if (dobDate > now) {
      setError("Date of birth can't be in the future.");
      setResult(null);
      return;
    }
    if (dobDate.getFullYear() < 1900) {
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
    requestAnimationFrame(() => {
      try {
        input.focus();
        input.showPicker?.();
      } catch {
        /* no-op */
      }
    });
  };

  const greeting = name.trim() ? name.trim() : "You";

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleCalculate} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1.5">
            Your name <span className="text-muted-foreground/60">(optional)</span>
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

      {result && (
        <div className="mt-10 animate-fade-in-up">
          <p className="text-center font-display text-2xl text-foreground mb-1">
            {greeting}, you are <span className="text-primary">{result.years}</span> years old
            {country && (
              <span className="text-muted-foreground text-lg font-body"> — from {country}</span>
            )}
          </p>
          {timezone && (
            <p className="text-center text-xs text-muted-foreground/70 mb-1">
              Timezone: {timezone}
            </p>
          )}
          <p className="text-center text-sm text-muted-foreground mb-8">
            🎂 {result.nextBirthdayDays === 0
              ? "Happy Birthday!"
              : `${result.nextBirthdayDays} day${result.nextBirthdayDays > 1 ? "s" : ""} until your next birthday`}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
            <div className="age-stat-card col-span-2 sm:col-span-3">
              <div className="age-stat-value text-lg">{result.totalDays.toLocaleString()}</div>
              <div className="age-stat-label">Total Days Alive</div>
            </div>
          </div>

          {name.trim() && (
            <NameInsights name={name} birthYear={new Date(dob).getFullYear()} country={country} />
          )}

          <FamousBirthdaysList
            month={new Date(dob).getMonth() + 1}
            day={new Date(dob).getDate()}
          />

          {name.trim() && (
            <NameTwins
              name={name}
              year={new Date(dob).getFullYear()}
              country={country}
            />
          )}

          <BirthSongPlayer
            year={new Date(dob).getFullYear()}
            month={new Date(dob).getMonth() + 1}
          />
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
