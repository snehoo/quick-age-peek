import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Props {
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

const CompactNameTile = ({ name, birthYear, country }: Props) => {
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

  const trimmed = name.trim();
  if (!trimmed) return null;

  return (
    <div className="age-stat-card text-center">
      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Name meaning</div>
      <div className="font-display text-xl text-primary mb-1">{trimmed}</div>
      {loading ? (
        <div className="h-3 w-2/3 mx-auto bg-muted/60 rounded animate-pulse" />
      ) : data?.meaning ? (
        <div className="text-xs text-muted-foreground italic leading-snug">
          {data.meaning}
          {data.origin && <> · {data.origin}</>}
        </div>
      ) : (
        <div className="text-xs text-muted-foreground italic">A name worth carrying.</div>
      )}
    </div>
  );
};

export default CompactNameTile;
