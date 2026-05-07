import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import AdSlot from "@/components/AdSlot";

type RelatedPost = {
  tag: string;
  title: string;
  href: string;
};

export const ArticleHeader = () => (
  <header className="border-b border-border">
    <div className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between gap-4">
      <Link to="/" className="font-display text-lg text-foreground">
        What Is My <span className="text-primary">Age</span>
      </Link>
      <Link
        to="/"
        className="text-xs sm:text-sm bg-primary text-primary-foreground px-4 py-2 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
      >
        Calculate my age
      </Link>
    </div>
  </header>
);

export const ArticleFooter = () => (
  <footer className="py-6 text-center text-xs text-muted-foreground/60 space-x-3 border-t border-border">
    <Link to="/" className="hover:text-foreground transition-colors">
      whatismyage.me
    </Link>
    <span aria-hidden>·</span>
    <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
    <span aria-hidden>·</span>
    <Link to="/privacy" className="hover:text-foreground transition-colors">
      Privacy
    </Link>
  </footer>
);

export const ArticleShell = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <ArticleHeader />
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-5 pt-8">
        <AdSlot slotId="post-top" />
      </div>
      <article className="max-w-2xl mx-auto px-5 py-12">{children}</article>
    </main>
    <ArticleFooter />
  </div>
);

export const Lead = ({ children }: { children: ReactNode }) => (
  <p className="italic text-foreground/80 border-l-4 border-primary pl-4 mb-8 text-lg leading-relaxed">
    {children}
  </p>
);

export const Paragraph = ({ children }: { children: ReactNode }) => (
  <p className="text-foreground/90 leading-relaxed mb-5 text-[17px]">{children}</p>
);

export const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="font-display text-2xl text-foreground mt-10 mb-3 pt-4 border-t border-border">
    {children}
  </h2>
);

export const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="font-display text-xl text-foreground mt-7 mb-2">{children}</h3>
);

export const StatBox = ({ number, label }: { number: string; label: string }) => (
  <div className="bg-card border-l-4 border-primary rounded-r-xl py-5 px-6 my-7">
    <div className="text-3xl sm:text-4xl font-bold text-primary">{number}</div>
    <div className="text-xs text-muted-foreground mt-1">{label}</div>
  </div>
);

export const Note = ({ children }: { children: ReactNode }) => (
  <div className="bg-secondary/60 rounded-xl px-5 py-4 my-6 text-foreground/90 leading-relaxed">
    {children}
  </div>
);

export const Quote = ({ children }: { children: ReactNode }) => (
  <blockquote className="border-l-4 border-primary bg-secondary/50 rounded-r-xl px-5 py-4 my-7 italic text-foreground/80 leading-relaxed">
    {children}
  </blockquote>
);

export const FormulaBox = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="bg-card border border-border rounded-xl p-5 my-6">
    <div className="font-semibold text-foreground mb-2">{title}</div>
    <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
  </div>
);

export const CtaBox = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="bg-primary text-primary-foreground rounded-2xl p-7 text-center my-10">
    <h3 className="font-display text-2xl mb-2">{title}</h3>
    <p className="text-primary-foreground/85 mb-5">{children}</p>
    <Link
      to="/"
      className="inline-block bg-background text-primary font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
    >
      Calculate mine →
    </Link>
  </div>
);

export const RelatedPosts = ({ posts }: { posts: RelatedPost[] }) => (
  <section className="bg-card border border-border rounded-xl p-5 my-8" aria-labelledby="related-posts">
    <h3 id="related-posts" className="font-semibold text-foreground mb-4">
      More from whatismyage.me
    </h3>
    <div className="space-y-3">
      {posts.map((post) => (
        <Link key={post.href} to={post.href} className="flex items-start gap-3 group">
          <span className="text-[10px] uppercase tracking-wider bg-secondary text-secondary-foreground rounded-full px-2 py-1 mt-0.5 shrink-0">
            {post.tag}
          </span>
          <span className="text-sm text-foreground leading-snug group-hover:text-primary transition-colors">
            {post.title}
          </span>
        </Link>
      ))}
    </div>
  </section>
);

export const BackToBlog = () => (
  <p className="text-sm">
    <Link to="/blog" className="text-primary hover:underline">
      ← All posts
    </Link>
  </p>
);

type ComparisonRow = (string | { value: string; status?: "yes" | "no" | "partial" })[];

export const ComparisonTable = ({
  headers,
  rows,
}: {
  headers: string[];
  rows: ComparisonRow[];
}) => (
  <div className="my-7 overflow-x-auto rounded-xl border border-border">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-primary text-primary-foreground">
          {headers.map((h) => (
            <th key={h} className="text-left font-semibold px-4 py-3">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="even:bg-secondary/40">
            {row.map((cell, j) => {
              const text = typeof cell === "string" ? cell : cell.value;
              const status = typeof cell === "string" ? undefined : cell.status;
              const cls =
                status === "yes"
                  ? "text-primary font-semibold"
                  : status === "no"
                  ? "text-muted-foreground font-semibold"
                  : status === "partial"
                  ? "text-foreground/70 font-medium"
                  : "text-foreground/90";
              return (
                <td key={j} className={`px-4 py-3 border-t border-border ${cls}`}>
                  {text}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const ProsConsList = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <div className="bg-card border border-border rounded-xl p-5 my-6">
    <div className="font-semibold text-foreground mb-3">{title}</div>
    <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-[16px] leading-relaxed">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  </div>
);
