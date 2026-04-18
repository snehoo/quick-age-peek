import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface NameInsightsProps {
  name: string;
  birthYear: number;
  country?: string | null;
}

interface Insights {
  meaning?: string;
  origin?: string;
  popularity?: string;
  personality?: string;
}

const NameInsights = ({ name, birthYear, country }: NameInsightsProps) => {
  const [data, setData] = useState<Insights | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const trimmed = name.trim();
    if (!trimmed || !birthYear) {
      setData(null);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setData(null);

    const t = setTimeout(async () => {
      try {
        const { data: res, error } = await supabase.functions.invoke("name-insights", {
          body: { name: trimmed, year: birthYear, country: country || null },
        });
        if (cancelled) return;
        if (!error && res) setData(res as Insights);
      } catch (e) {
        if (!cancelled) console.error(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }, 400);

    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [name, birthYear, country]);

  if (!name.trim()) return null;

  if (loading) {
    return (
      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <h2 className="text-xl text-foreground mb-4">
          The name <span className="text-primary">{name.trim()}</span>
        </h2>
        <div className="space-y-3">
          <div className="h-4 w-3/4 bg-muted/60 rounded animate-pulse" />
          <div className="h-4 w-2/3 bg-muted/60 rounded animate-pulse" />
          <div className="h-4 w-1/2 bg-muted/60 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="mt-8 rounded-xl border border-border bg-card p-6 animate-fade-in-up">
      <h2 className="text-xl text-foreground mb-4">
        The name <span className="text-primary">{name.trim()}</span>
      </h2>
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        {data.meaning && (
          <p>
            <span className="font-semibold text-foreground">Meaning:</span> {data.meaning}
            {data.origin && <span> — from {data.origin}</span>}
          </p>
        )}
        {data.popularity && (
          <p>
            <span className="font-semibold text-foreground">Popularity:</span> {data.popularity}
          </p>
        )}
        {data.personality && (
          <p>
            <span className="font-semibold text-foreground">Personality:</span> {data.personality}
          </p>
        )}
      </div>
    </div>
  );
};

export default NameInsights;
