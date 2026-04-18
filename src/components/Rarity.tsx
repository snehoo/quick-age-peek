interface RarityProps {
  ageYears: number;
  totalDays: number;
  birthMonth: number;
  birthDay: number;
}

// Rough cumulative % of world population at or below a given age (UN 2023 estimates, smoothed)
// Index = age in years. Value = % of world younger than that age.
const YOUNGER_PCT: Record<number, number> = {
  0: 0, 5: 8, 10: 16, 15: 24, 20: 32, 25: 40, 30: 47, 35: 54,
  40: 61, 45: 67, 50: 73, 55: 78, 60: 83, 65: 87, 70: 91, 75: 94,
  80: 96, 85: 98, 90: 99, 95: 99.7, 100: 99.95,
};

function pctYoungerThan(age: number): number {
  const keys = Object.keys(YOUNGER_PCT).map(Number).sort((a, b) => a - b);
  if (age <= keys[0]) return 0;
  if (age >= keys[keys.length - 1]) return 99.95;
  for (let i = 0; i < keys.length - 1; i++) {
    if (age >= keys[i] && age < keys[i + 1]) {
      const a = keys[i], b = keys[i + 1];
      const t = (age - a) / (b - a);
      return YOUNGER_PCT[a] + t * (YOUNGER_PCT[b] - YOUNGER_PCT[a]);
    }
  }
  return 50;
}

const Rarity = ({ ageYears, totalDays, birthMonth, birthDay }: RarityProps) => {
  const youngerThanYou = pctYoungerThan(ageYears); // % of world younger
  const olderThanYou = 100 - youngerThanYou; // % of world older
  // "1 in X" — share birthday (month+day): 1/365.25
  const oneInBirthday = 365;

  const stats = [
    { label: "older than", value: `${youngerThanYou.toFixed(0)}% of the world` },
    { label: "younger than", value: `${olderThanYou.toFixed(0)}%` },
    { label: "one of", value: `1 in ${oneInBirthday} people share your birthday` },
    { label: "lived through", value: `${Math.floor(totalDays / 7).toLocaleString()} weeks already` },
  ];

  return (
    <div className="mt-8 rounded-xl border border-border bg-card p-6 animate-fade-in-up">
      <h2 className="text-xl text-foreground mb-1">✨ How rare are you?</h2>
      <p className="text-xs text-muted-foreground/70 mb-4">A few quietly powerful truths about your timeline</p>
      <ul className="space-y-2.5 text-sm text-foreground">
        <li>
          You are <span className="font-semibold text-primary">older than {youngerThanYou.toFixed(0)}%</span> of people alive today.
        </li>
        <li>
          You are <span className="font-semibold text-primary">younger than {olderThanYou.toFixed(0)}%</span> of the world.
        </li>
        <li>
          You are <span className="font-semibold text-primary">1 in {oneInBirthday}</span> — only that many people share your exact birthday.
        </li>
        <li className="text-muted-foreground">
          You've already lived through <span className="font-medium text-foreground">{Math.floor(totalDays / 7).toLocaleString()} weeks</span>.
        </li>
      </ul>
    </div>
  );
};

export default Rarity;
