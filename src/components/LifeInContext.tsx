import { useReveal } from "@/hooks/useReveal";

interface LifeInContextProps {
  ageYears: number;
  birthYear: number;
  country: string | null;
}

const getGeneration = (year: number): { name: string; tagline: string } => {
  if (year <= 1945) return { name: "Silent Generation", tagline: "Built the modern world from the rubble." };
  if (year <= 1964) return { name: "Baby Boomer", tagline: "Rewrote the rules and never looked back." };
  if (year <= 1980) return { name: "Gen X", tagline: "The original independents — analog kids, digital adults." };
  if (year <= 1984) return { name: "Xennial", tagline: "Last to remember dial-up, first to text." };
  if (year <= 1994) return { name: "Millennial", tagline: "Grew up online, came of age in chaos, still optimistic." };
  if (year <= 1998) return { name: "Zillennial", tagline: "Caught between Millennial nostalgia and Gen Z energy." };
  if (year <= 2012) return { name: "Gen Z", tagline: "Born scrolling, fluent in irony, quietly changing everything." };
  return { name: "Gen Alpha", tagline: "iPad in one hand, the future in the other." };
};

type Item = { value: number | string; label: string };

const getItems = (ageYears: number, country: string | null): Item[] => {
  const c = (country || "").toLowerCase().trim();
  // Full moons: ~12.37 per year
  const fullMoons = Math.floor(ageYears * 12.37);

  if (c === "india") {
    return [
      { value: fullMoons, label: "Full moons" },
      { value: Math.floor(ageYears / 4), label: "Cricket World Cups" },
      { value: Math.floor(ageYears / 5), label: "General elections" },
    ];
  }
  if (c === "usa" || c === "us" || c === "united states" || c === "united states of america") {
    return [
      { value: fullMoons, label: "Full moons" },
      { value: ageYears, label: "Super Bowls" },
      { value: Math.floor(ageYears / 4), label: "Presidential elections" },
    ];
  }
  if (c === "uk" || c === "united kingdom" || c === "england" || c === "britain" || c === "great britain") {
    return [
      { value: fullMoons, label: "Full moons" },
      { value: ageYears, label: "FA Cup Finals" },
      { value: Math.max(1, Math.floor(ageYears / 10)), label: "Royal events" },
    ];
  }
  if (c === "australia") {
    return [
      { value: fullMoons, label: "Full moons" },
      { value: ageYears, label: "AFL Grand Finals" },
      { value: ageYears, label: "Summers (southern)" },
    ];
  }
  // Global fallback
  return [
    { value: fullMoons, label: "Full moons" },
    { value: Math.floor(ageYears / 4), label: "FIFA World Cups" },
    { value: ageYears, label: "Orbits around the Sun" },
  ];
};

const LifeInContext = ({ ageYears, birthYear, country }: LifeInContextProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const gen = getGeneration(birthYear);
  const items = getItems(ageYears, country);

  return (
    <div
      ref={ref}
      className={`mt-10 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="text-xl text-foreground mb-5 text-center">Life In Context</h2>

      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.label} className="age-stat-card">
            <div className="age-stat-value text-2xl sm:text-3xl">{item.value}</div>
            <div className="age-stat-label">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 age-stat-card text-center">
        <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Your generation</div>
        <div className="font-display text-2xl text-primary mb-1">{gen.name}</div>
        <div className="text-sm text-muted-foreground italic">{gen.tagline}</div>
      </div>
    </div>
  );
};

export default LifeInContext;
