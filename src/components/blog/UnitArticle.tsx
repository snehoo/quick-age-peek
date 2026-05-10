import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { ArticleShell, BackToBlog, CtaBox, H2, H3, Lead, Paragraph, RelatedPosts } from "@/components/blog/ArticleLayout";
import { useArticleMeta } from "@/components/blog/articleMeta";

export const Figure = ({ src, alt, credit }: { src: string; alt: string; credit: ReactNode }) => (
  <figure className="my-7">
    <img src={src} alt={alt} loading="lazy" className="w-full rounded-xl border border-border" />
    <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">{credit}</figcaption>
  </figure>
);

export const SimpleTable = ({ headers, rows }: { headers: string[]; rows: (string | ReactNode)[][] }) => (
  <div className="my-7 overflow-x-auto rounded-xl border border-border">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-primary text-primary-foreground">
          {headers.map((h, i) => (
            <th key={i} className="text-left font-semibold px-4 py-3">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="even:bg-secondary/40">
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-3 border-t border-border text-foreground/90">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const credit = (name: string, url = "https://unsplash.com") => (
  <>
    Photo by {name} on{" "}
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a>
  </>
);

export const ext = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="underline">{label}</a>
);

export const UnitArticleShell = ({
  meta,
  title,
  children,
}: {
  meta: { title: string; description: string; canonical: string; headline: string };
  title: string;
  children: ReactNode;
}) => {
  useArticleMeta(meta);
  return (
    <ArticleShell>
      <BackToBlog />
      <h1 className="font-display text-3xl sm:text-4xl text-foreground leading-tight mt-6 mb-4">{title}</h1>
      {children}
    </ArticleShell>
  );
};

// Re-exports for convenience
export { Link, CtaBox, H2, H3, Lead, Paragraph, RelatedPosts };
