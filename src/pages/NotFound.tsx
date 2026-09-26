import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-md animate-fade-in-up">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Error 404 <span className="text-border">·</span> Page Not Found
          </p>

          <div className="mt-5 font-display text-6xl leading-none text-destructive">
            −100%
          </div>

          <p className="mt-4 text-lg font-semibold leading-snug text-foreground">
            Pages that don&apos;t exist get 100% fewer views than the rest of this site.
          </p>

          <div className="mt-6 space-y-2.5">
            <div className="flex items-center gap-3">
              <span className="w-28 shrink-0 text-xs text-muted-foreground">This page</span>
              <div className="h-2 flex-1 rounded-full bg-secondary">
                <div className="h-2 w-0 rounded-full bg-destructive" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-28 shrink-0 text-xs text-muted-foreground">Every other page</span>
              <div className="h-2 flex-1 rounded-full bg-secondary">
                <div className="h-2 w-full rounded-full bg-primary" />
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-[11px] text-muted-foreground">
            <span>Strong signal</span>
            <span>this page vs. every other one</span>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          This page doesn&apos;t exist, or it&apos;s moved. Here&apos;s the step to take:
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="rounded-full bg-primary px-6 py-2.5 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go to Homepage
          </Link>
          <Link
            to="/blog/"
            className="rounded-full border border-border bg-card px-6 py-2.5 text-center text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Browse the Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
