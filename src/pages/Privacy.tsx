import { Link } from "react-router-dom";
import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy — whatismyage.me";
    const meta = document.querySelector('meta[name="description"]');
    const desc =
      "Privacy Policy for whatismyage.me — what data we collect, how we use Google AdSense cookies, and how to opt out.";
    if (meta) meta.setAttribute("content", desc);
  }, []);

  const lastUpdated = "April 20, 2026";

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-2xl mx-auto px-5 py-12 w-full">
        <Link
          to="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back
        </Link>

        <article className="mt-8 space-y-8">
          <header>
            <h1 className="text-3xl sm:text-4xl text-foreground mb-2">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </header>

          <section className="space-y-3">
            <p className="text-foreground/90 leading-relaxed">
              whatismyage.me ("we", "us") is a free tool that turns your date of
              birth into a fun breakdown of your life — heartbeats, full moons,
              days alive, and more. We try to collect as little as possible.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl text-foreground">1. What we collect</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/90 leading-relaxed">
              <li>
                <strong>Name and date of birth</strong> you enter into the
                calculator. This is processed entirely in your browser to
                generate your results.
              </li>
              <li>
                <strong>We do not store your name or date of birth.</strong> It
                is never sent to a database, never associated with you, and
                disappears the moment you close or refresh the page.
              </li>
              <li>
                <strong>Anonymous usage data</strong> (such as page views and
                rough country) may be collected by standard web analytics to
                help us improve the site.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl text-foreground">
              2. Cookies and advertising
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              We use <strong>Google AdSense</strong> to display ads. Google and
              its partners use cookies (including the DoubleClick DART cookie)
              to serve ads based on your visit to this site and other sites on
              the internet. These cookies may be used to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/90 leading-relaxed">
              <li>Show ads relevant to your interests</li>
              <li>Limit the number of times you see the same ad</li>
              <li>Measure the effectiveness of advertising campaigns</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed">
              Third-party vendors, including Google, may also use cookies to
              serve ads based on your prior visits to this website or other
              websites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl text-foreground">3. How to opt out</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/90 leading-relaxed">
              <li>
                Opt out of personalised ads from Google by visiting{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Google Ads Settings
                </a>
                .
              </li>
              <li>
                Opt out of third-party vendor cookies via{" "}
                <a
                  href="https://www.aboutads.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  aboutads.info
                </a>{" "}
                or{" "}
                <a
                  href="https://www.youronlinechoices.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  youronlinechoices.com
                </a>
                .
              </li>
              <li>
                You can also block or delete cookies in your browser settings at
                any time. The site will still work without them.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl text-foreground">4. Children</h2>
            <p className="text-foreground/90 leading-relaxed">
              whatismyage.me is not directed at children under 13, and we do
              not knowingly collect personal information from them.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl text-foreground">5. Your rights</h2>
            <p className="text-foreground/90 leading-relaxed">
              Because we do not store your name or date of birth, there is
              nothing personal of yours for us to access, export, or delete. For
              any questions about this policy, contact us at{" "}
              <a
                href="mailto:hello@whatismyage.me"
                className="text-primary underline"
              >
                hello@whatismyage.me
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl text-foreground">6. Changes</h2>
            <p className="text-foreground/90 leading-relaxed">
              We may update this policy from time to time. The "Last updated"
              date at the top will always reflect the latest version.
            </p>
          </section>
        </article>
      </main>

      <footer className="py-6 text-center text-xs text-muted-foreground/60">
        <Link to="/" className="hover:text-foreground transition-colors">
          whatismyage.me
        </Link>
      </footer>
    </div>
  );
};

export default Privacy;
