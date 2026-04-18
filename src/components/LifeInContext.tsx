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

const LifeInContext = ({ ageYears, birthYear, country }: LifeInContextProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const isIndia = country?.toLowerCase() === "india";

  // World Cups (FIFA every 4 yrs, Cricket ODI every 4 yrs ≈ 1 every 2 yrs combined major)
  const fifaWorldCups = Math.floor(ageYears / 4);
  const cricketWorldCups = Math.floor(ageYears / 4);
  // Indian general elections every ~5 yrs; US presidential every 4
  const elections = isIndia ? Math.floor(ageYears / 5) : Math.floor(ageYears / 4);
  const monsoons = ageYears; // 1 per year

  const gen = getGeneration(birthYear);

  const items = isIndia
    ? [
        { value: monsoons, label: "Monsoons lived through" },
        { value: cricketWorldCups, label: "Cricket World Cups" },
        { value: elections, label: "General elections" },
      ]
    : [
        { value: ageYears, label: "Summers lived through" },
        { value: fifaWorldCups, label: "FIFA World Cups" },
        { value: elections, label: isIndia ? "Elections" : "Presidential elections" },
      ];

  return (
    <div
      ref={ref}
      className={`mt-10 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="text-xl text-foreground mb-5 text-center">🌍 Life In Context</h2>

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
