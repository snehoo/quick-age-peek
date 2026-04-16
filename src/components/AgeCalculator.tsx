import { useState, useEffect } from "react";
import { calculateAge, type AgeResult } from "@/lib/ageCalculator";

const AgeCalculator = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<AgeResult | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data) => {
        if (data?.country_name) setCountry(data.country_name);
      })
      .catch(() => {});
  }, []);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!dob) {
      setError("Please enter your date of birth.");
      return;
    }

    const dobDate = new Date(dob);
    const now = new Date();

    if (dobDate > now) {
      setError("Date of birth can't be in the future.");
      return;
    }
    if (dobDate.getFullYear() < 1900) {
      setError("Please enter a valid date of birth.");
      return;
    }

    setResult(calculateAge(dobDate));
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
            max={new Date().toISOString().split("T")[0]}
            className="w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
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
              <div className="age-stat-value">{result.totalDays.toLocaleString()}</div>
              <div className="age-stat-label">Total Days</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
