import { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    years: "24", months: "4", days: "5", hours: "12", minutes: "33", seconds: "12",
    daysAlive: "8,891", toBirthday: "240", daysSlept: "2,963", heartBeats: "1.0B",
    moons: "296", cups: "6", orbits: "24",
  },
  {
    years: "33", months: "5", days: "1", hours: "12", minutes: "34", seconds: "34",
    daysAlive: "12,205", toBirthday: "213", daysSlept: "4,068", heartBeats: "1.4B",
    moons: "408", cups: "8", orbits: "33",
  },
  {
    years: "40", months: "10", days: "29", hours: "12", minutes: "35", seconds: "47",
    daysAlive: "14,943", toBirthday: "32", daysSlept: "4,981", heartBeats: "1.7B",
    moons: "494", cups: "10", orbits: "40",
  },
  {
    years: "56", months: "6", days: "27", hours: "12", minutes: "37", seconds: "30",
    daysAlive: "20,663", toBirthday: "156", daysSlept: "6,887", heartBeats: "2.4B",
    moons: "692", cups: "14", orbits: "56",
  },
  {
    years: "68", months: "3", days: "5", hours: "12", minutes: "38", seconds: "33",
    daysAlive: "24,931", toBirthday: "271", daysSlept: "8,310", heartBeats: "2.9B",
    moons: "841", cups: "17", orbits: "68",
  },
  {
    years: "85", months: "11", days: "5", hours: "12", minutes: "39", seconds: "2",
    daysAlive: "31,385", toBirthday: "26", daysSlept: "10,461", heartBeats: "3.6B",
    moons: "1051", cups: "21", orbits: "85",
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
        <div className="age-stat-card"><div className={`${numCls} text-2xl sm:text-3xl`}>{s.cups}</div><div className="age-stat-label">FIFA World Cups</div></div>
        <div className="age-stat-card"><div className={`${numCls} text-2xl sm:text-3xl`}>{s.orbits}</div><div className="age-stat-label">Orbits Around the Sun</div></div>
      </div>
    </div>
  );
};

export default DemoSlideshow;
