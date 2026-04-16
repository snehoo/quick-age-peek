import { getNameInfo } from "@/lib/nameData";

interface NameInsightsProps {
  name: string;
  birthYear: number;
}

const NameInsights = ({ name, birthYear }: NameInsightsProps) => {
  const info = getNameInfo(name, birthYear);
  if (!name.trim()) return null;

  return (
    <div className="mt-8 rounded-xl border border-border bg-card p-6 animate-fade-in-up">
      <h2 className="text-xl text-foreground mb-4">
        The name <span className="text-primary">{name.trim()}</span>
      </h2>
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        {info.meaning && (
          <p>
            <span className="font-semibold text-foreground">Meaning:</span> {info.meaning}
            {info.origin && <span> — from {info.origin}</span>}
          </p>
        )}
        <p>
          <span className="font-semibold text-foreground">Vibe:</span> {info.vibe}
        </p>
        <p>
          <span className="font-semibold text-foreground">Popularity:</span> {info.popularity}
        </p>
      </div>
    </div>
  );
};

export default NameInsights;
