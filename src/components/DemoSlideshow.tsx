import { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    years: "21", months: "8", days: "26", hours: "11", minutes: "33", seconds: "54",
    daysAlive: "7,939", toBirthday: "96", daysSlept: "2,646", heartBeats: "915M",
    moons: "259", cups: "5", cupsLabel: "FIFA World Cups",
    orbits: "21", orbitsLabel: "Orbits Around the Sun",
  },
  {
    years: "34", months: "8", days: "26", hours: "11", minutes: "38", seconds: "11",
    daysAlive: "12,688", toBirthday: "96", daysSlept: "4,229", heartBeats: "1.5B",
    moons: "420", cups: "8", cupsLabel: "FIFA World Cups",
    orbits: "34", orbitsLabel: "Orbits Around the Sun",
  },
  {
    years: "41", months: "8", days: "26", hours: "11", minutes: "42", seconds: "47",
    daysAlive: "15,244", toBirthday: "96", daysSlept: "5,081", heartBeats: "1.8B",
    moons: "507", cups: "10", cupsLabel: "FIFA World Cups",
    orbits: "41", orbitsLabel: "Orbits Around the Sun",
  },
  {
    years: "53", months: "8", days: "26", hours: "11", minutes: "43", seconds: "46",
    daysAlive: "19,627", toBirthday: "96", daysSlept: "6,542", heartBeats: "2.3B",
    moons: "655", cups: "13", cupsLabel: "FIFA World Cups",
    orbits: "53", orbitsLabel: "Orbits Around the Sun",
  },
  {
    years: "75", months: "8", days: "26", hours: "11", minutes: "44", seconds: "22",
    daysAlive: "27,663", toBirthday: "96", daysSlept: "9,221", heartBeats: "3.2B",
    moons: "927", cups: "18", cupsLabel: "FIFA World Cups",
    orbits: "75", orbitsLabel: "Orbits Around the Sun",
  },
];

const HOLD = 3000;
const FADE = 280;

const DemoSlideshow = () => {
  const [idx, setIdx] = useState(0);
  const [blink, setBlink] = useState(false);
  const idxRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => {
        idxRef.current = (idxRef.current + 1) % SLIDES.length;
        setIdx(idxRef.current);
        requestAnimationFrame(() => setBlink(false));
      }, FADE);
    }, HOLD);
    return () => clearInterval(interval);
  }, []);

  const s = SLIDES[idx];
  const numCls = `age-stat-value transition-opacity duration-300 ${blink ? "opacity-0" : "opacity-100"}`;

  return (
    <div aria-hidden="true">
      <div className="grid grid-cols-2 gap-4 sm:gap-5">
        <div className="age-stat-card"><div className={numCls}>{s.years}</div><div className="age-stat-label">Years</div></div>
        <div className="age-stat-card"><div className={numCls}>{s.months}</div><div className="age-stat-label">Months</div></div>
        <div className="age-stat-card"><div className={numCls}>{s.days}</div><div className="age-stat-label">Days</div></div>
        <div className="age-stat-card"><div className={numCls}>{s.hours}</div><div className="age-stat-label">Hours</div></div>
        <div className="age-stat-card"><div className={numCls}>{s.minutes}</div><div className="age-stat-label">Minutes</div></div>
        <div className="age-stat-card"><div className={numCls}>{s.seconds}</div><div className="age-stat-label">Seconds</div></div>
        <div className="age-stat-card"><div className={numCls}>{s.daysAlive}</div><div className="age-stat-label">Days Alive</div></div>
        <div className="age-stat-card"><div className={numCls}>{s.toBirthday}</div><div className="age-stat-label">To Birthday</div></div>
        <div className="age-stat-card"><div className={numCls}>{s.daysSlept}</div><div className="age-stat-label">Days Slept</div></div>
        <div className="age-stat-card"><div className={numCls}>{s.heartBeats}</div><div className="age-stat-label">Heart Beats</div></div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
        <div className="age-stat-card"><div className={`${numCls} text-2xl sm:text-3xl`}>{s.moons}</div><div className="age-stat-label">Full Moons</div></div>
        <div className="age-stat-card"><div className={`${numCls} text-2xl sm:text-3xl`}>{s.cups}</div><div className="age-stat-label">{s.cupsLabel}</div></div>
        <div className="age-stat-card"><div className={`${numCls} text-2xl sm:text-3xl`}>{s.orbits}</div><div className="age-stat-label">{s.orbitsLabel}</div></div>
      </div>
    </div>
  );
};

export default DemoSlideshow;
