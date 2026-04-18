export const getGeneration = (year: number): { name: string; tagline: string } => {
  if (year <= 1945) return { name: "Silent Generation", tagline: "Built the modern world from the rubble." };
  if (year <= 1964) return { name: "Baby Boomer", tagline: "Rewrote the rules and never looked back." };
  if (year <= 1980) return { name: "Gen X", tagline: "The original independents — analog kids, digital adults." };
  if (year <= 1984) return { name: "Xennial", tagline: "Last to remember dial-up, first to text." };
  if (year <= 1994) return { name: "Millennial", tagline: "Last to know life before the internet." };
  if (year <= 1998) return { name: "Zillennial", tagline: "Caught between Millennial nostalgia and Gen Z energy." };
  if (year <= 2012) return { name: "Gen Z", tagline: "Born scrolling, fluent in irony, quietly changing everything." };
  return { name: "Gen Alpha", tagline: "iPad in one hand, the future in the other." };
};

export type LocalizedItem = { value: number | string; label: string };

export const getLocalizedItems = (ageYears: number, country: string | null): LocalizedItem[] => {
  const c = (country || "").toLowerCase().trim();
  const fullMoons = Math.floor(ageYears * 12.37);

  if (c === "india") {
    return [
      { value: fullMoons, label: "Full moons" },
      { value: Math.floor(ageYears / 4), label: "Cricket World Cups" },
      { value: Math.floor(ageYears / 5), label: "General elections" },
    ];
  }
  if (["usa", "us", "united states", "united states of america"].includes(c)) {
    return [
      { value: fullMoons, label: "Full moons" },
      { value: ageYears, label: "Super Bowls" },
      { value: Math.floor(ageYears / 4), label: "Presidential elections" },
    ];
  }
  if (["uk", "united kingdom", "england", "britain", "great britain"].includes(c)) {
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
  return [
    { value: fullMoons, label: "Full moons" },
    { value: Math.floor(ageYears / 4), label: "FIFA World Cups" },
    { value: ageYears, label: "Orbits around the Sun" },
  ];
};

// Mood line for "you are X years old"
export const getAgeMoodLine = (ageYears: number): string => {
  if (ageYears < 13) return "Just getting started — every day is a brand new world.";
  if (ageYears < 20) return "The teenage chapter — loud, messy, unforgettable.";
  if (ageYears < 30) return "Still in the morning of your life — the best chapters are ahead.";
  if (ageYears < 40) return "Hitting your stride — building the life you imagined.";
  if (ageYears < 50) return "Midday energy — you've earned your point of view.";
  if (ageYears < 60) return "The golden afternoon — wisdom meets momentum.";
  if (ageYears < 70) return "Slowing down to savour — the view from here is wider.";
  if (ageYears < 80) return "Every sunset is a quiet kind of victory.";
  return "A life well-lived — your story is the gift.";
};

// Short mood for the 24-hour life clock card
export const getLifeClockMood = (ageYears: number): string => {
  if (ageYears < 20) return "early morning · the day is yours";
  if (ageYears < 35) return "morning · best chapters ahead";
  if (ageYears < 50) return "midday · in full motion";
  if (ageYears < 65) return "afternoon · the long view";
  if (ageYears < 80) return "evening · soft golden hours";
  return "late night · stars and stories";
};
