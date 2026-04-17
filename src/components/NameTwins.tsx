import { getNameTwins } from "@/lib/nameTwins";

interface NameTwinsProps {
  name: string;
  year: number;
  country?: string | null;
}

const NameTwins = ({ name, year, country }: NameTwinsProps) => {
  const data = getNameTwins(name, year, country);
  if (!data) return null;

  return (
    <section className="mt-8 rounded-xl border border-border bg-card p-6 animate-fade-in-up">
      <h2 className="font-display text-xl text-foreground mb-1">
        Celebrity Name-Twins{" "}
        <span className="text-muted-foreground font-body text-base">
          (The Class of {year})
        </span>
      </h2>
      <p className="text-sm text-muted-foreground mb-5">
        You don't just share a name — you share a "start date" with these icons and characters
        who dominated the cultural conversation the year you were born
        {country ? ` in ${country}` : ""}.
      </p>

      <ul className="space-y-4">
        {data.twins.map((t) => (
          <li key={t.name} className="border-l-2 border-primary/40 pl-4">
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
