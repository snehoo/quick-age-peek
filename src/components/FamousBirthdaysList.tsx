import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface FamousBirthdaysProps {
  month: number;
  day: number;
  country?: string | null;
}

interface Person {
  name: string;
  tag: string;
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

const FamousBirthdaysList = ({ month, day, country }: FamousBirthdaysProps) => {
  const [people, setPeople] = useState<Person[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!month || !day) return;
    let cancelled = false;
    setLoading(true);
    setPeople(null);

    const t = setTimeout(async () => {
      try {
        const { data, error } = await supabase.functions.invoke("famous-birthdays", {
          body: { month, day, country: country || null },
        });
        if (cancelled) return;
        if (!error && data?.people) setPeople(data.people as Person[]);
      } catch (e) {
        if (!cancelled) console.error(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }, 300);

    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [month, day, country]);

  if (loading) {
    return (
      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <h2 className="text-xl text-foreground mb-4">Famous Birthday Twins</h2>
        <div className="flex flex-wrap gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-9 w-32 bg-muted/60 rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (!people || people.length === 0) return null;

  const topPeople = people.slice(0, 3);

  return (
    <div className="mt-8 rounded-xl border border-border bg-card p-6 animate-fade-in-up">
      <h2 className="text-xl text-foreground mb-4">Famous Birthday Twins</h2>
      <div className="flex flex-wrap gap-3">
        {topPeople.map((person, i) => (
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
