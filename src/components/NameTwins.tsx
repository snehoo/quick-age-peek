import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface NameTwinsProps {
  name: string;
  year: number;
  country?: string | null;
}

interface Twin {
  label: string;
  name: string;
  blurb: string;
}

const NameTwins = ({ name, year, country }: NameTwinsProps) => {
  const [twins, setTwins] = useState<Twin[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const trimmed = name.trim();
    if (!trimmed || !year) {
      setTwins(null);
      return;
    }

    let cancelled = false;
    const ctrl = new AbortController();
    setLoading(true);
    setError(null);
    setTwins(null);

    const t = setTimeout(async () => {
      try {
        const { data, error: fnErr } = await supabase.functions.invoke("name-twins", {
          body: { name: trimmed, year, country: country || null },
        });
        if (cancelled) return;
        if (fnErr) {
          setError(fnErr.message || "Failed to load name twins");
        } else if (data?.twins) {
          setTwins(data.twins as Twin[]);
        }
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Failed to load");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }, 400); // small debounce while user types name

    return () => {
      cancelled = true;
      ctrl.abort();
      clearTimeout(t);
    };
  }, [name, year, country]);

  if (loading) {
    return (
      <section className="mt-8 rounded-xl border border-border bg-card p-6">
        <h2 className="font-display text-xl text-foreground mb-1">
          Celebrity Name-Twins{" "}
          <span className="text-muted-foreground font-body text-base">(The Class of {year})</span>
        </h2>
        <div className="mt-4 space-y-3">
          <div className="h-4 w-3/4 bg-muted/60 rounded animate-pulse" />
          <div className="h-4 w-2/3 bg-muted/60 rounded animate-pulse" />
          <div className="h-4 w-1/2 bg-muted/60 rounded animate-pulse" />
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Searching pop-culture archives…</p>
      </section>
    );
  }

  if (error || !twins || twins.length === 0) return null;

  return (
    <section className="mt-8 rounded-xl border border-border bg-card p-6 animate-fade-in-up">
      <h2 className="font-display text-xl text-foreground mb-1">
        Celebrity Name-Twins{" "}
        <span className="text-muted-foreground font-body text-base">(The Class of {year})</span>
      </h2>
      <p className="text-sm text-muted-foreground mb-5">
        You don't just share a name — you share a "start date" with these icons and characters
        who shaped culture the year you were born
        {country ? ` in ${country}` : ""}.
      </p>

      <ul className="space-y-4">
        {twins.map((t, i) => (
          <li key={`${t.name}-${i}`} className="border-l-2 border-primary/40 pl-4">
            <p className="text-sm font-medium text-primary mb-0.5">{t.label}</p>
            <p className="text-foreground">
              <span className="font-semibold">{t.name}</span>
              <span className="text-muted-foreground"> — {t.blurb}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NameTwins;
