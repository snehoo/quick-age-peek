import { useReveal } from "@/hooks/useReveal";
import LoadingDots from "./LoadingDots";
import { useEffect, useState } from "react";

interface TimeLeftProps {
  ageYears: number;
  totalDays: number;
  birthMonth: number;
  birthDay: number;
}

const LIFE_EXPECTANCY = 80;

const TimeLeft = ({ ageYears, totalDays, birthMonth, birthDay }: TimeLeftProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setReady(true), 700);
    return () => clearTimeout(t);
  }, [visible]);

  const yearsLeft = Math.max(LIFE_EXPECTANCY - ageYears, 0);
  // Weekends left ≈ 52 per year remaining
  const weekendsLeft = Math.max(Math.round(yearsLeft * 52), 0);
  // Summers left = full summers remaining (1 per year)
  const summersLeft = yearsLeft;

  const stats = [
    { value: yearsLeft.toLocaleString(), label: "Years left" },
    { value: weekendsLeft.toLocaleString(), label: "Weekends left" },
    { value: summersLeft.toLocaleString(), label: "Summers left" },
  ];

  return (
    <div
      ref={ref}
      className={`mt-10 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="text-xl text-foreground mb-1 text-center">⏳ Time Left</h2>
      <p className="text-sm text-muted-foreground mb-5 italic text-center">If you live to {LIFE_EXPECTANCY}…</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`age-stat-card transition-all duration-500 ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            {ready ? (
              <>
                <div className="age-stat-value text-3xl sm:text-4xl">{s.value}</div>
                <div className="age-stat-label">{s.label}</div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <LoadingDots />
                <div className="age-stat-label mt-2">{s.label}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLeft;
