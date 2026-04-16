import { getFamousBirthdays } from "@/lib/famousBirthdays";

interface FamousBirthdaysProps {
  month: number;
  day: number;
}

const tagColors: Record<string, string> = {
  Athlete: "bg-accent/15 text-accent",
  Musician: "bg-primary/15 text-primary",
  Actor: "bg-purple-500/15 text-purple-600",
  Founder: "bg-blue-500/15 text-blue-600",
  Leader: "bg-amber-500/15 text-amber-700",
  Scientist: "bg-teal-500/15 text-teal-600",
  Inventor: "bg-teal-500/15 text-teal-600",
  Writer: "bg-rose-500/15 text-rose-600",
  Director: "bg-indigo-500/15 text-indigo-600",
  Activist: "bg-green-500/15 text-green-600",
  Royalty: "bg-yellow-500/15 text-yellow-700",
  Billionaire: "bg-emerald-500/15 text-emerald-600",
  Artist: "bg-pink-500/15 text-pink-600",
};

const FamousBirthdaysList = ({ month, day }: FamousBirthdaysProps) => {
  const people = getFamousBirthdays(month, day);

  if (people.length === 0) return null;

  const isExact = people.some(
    (p) => p.born === `${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`
  );

  return (
    <div className="mt-8 rounded-xl border border-border bg-card p-6 animate-fade-in-up">
      <h2 className="text-xl text-foreground mb-1">
        {isExact ? "Born on your birthday 🎂" : "Born around your birthday"}
      </h2>
      <p className="text-xs text-muted-foreground/70 mb-4">
        Famous people who share your {isExact ? "exact birthday" : "birth month"}
      </p>
      <div className="flex flex-wrap gap-3">
        {people.map((person, i) => (
          <div
            key={`${person.name}-${i}`}
            className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2"
          >
            <span className="text-sm font-medium text-foreground">{person.name}</span>
            <span
              className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${tagColors[person.tag] || "bg-muted text-muted-foreground"}`}
            >
              {person.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamousBirthdaysList;
