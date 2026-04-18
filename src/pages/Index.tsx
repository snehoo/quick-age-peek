import { useMemo } from "react";
import AgeCalculator from "@/components/AgeCalculator";

const Index = () => {
  // Random sample age between 25-45, recomputed on each page load
  const sample = useMemo(() => {
    const years = Math.floor(Math.random() * (45 - 25 + 1)) + 25;
    const totalDays = years * 365.25;
    // Lunar cycle ≈ 29.53 days
    const fullMoons = Math.round(totalDays / 29.53);
    // Avg 80 bpm
    const beats = totalDays * 24 * 60 * 80;
    const beatsStr =
      beats >= 1e9
        ? `${(beats / 1e9).toFixed(2)}B`
        : `${(beats / 1e6).toFixed(0)}M`;
    return { years, fullMoons, beatsStr };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-5 py-16">
        <div className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl text-foreground leading-tight mb-3">
            <span className="text-primary">{sample.years}</span> years.{" "}
            <span className="text-primary">{sample.fullMoons}</span> full moons.{" "}
            <span className="text-primary">{sample.beatsStr}</span> heartbeats.
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Your age in years is just the beginning — discover your heartbeats, full moons, and the exact moment of your life's 24-hour clock.
          </p>
        </div>
        <AgeCalculator />
      </main>
      <footer className="py-6 text-center text-xs text-muted-foreground/60">
        What Is My Age · simple age calculator
      </footer>
    </div>
  );
};

export default Index;
