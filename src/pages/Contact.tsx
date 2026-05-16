import { Link } from "react-router-dom";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact — What Is My Age?";
    const meta = document.querySelector('meta[name="description"]');
    const desc =
      "Contact What Is My Age — send feedback, report bugs, or just say hello.";
    if (meta) meta.setAttribute("content", desc);
  }, []);

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
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-muted-foreground">
              Found a bug? Have feedback? Or just want to say hello?
            </p>
          </header>

          <section className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6 space-y-4">
              <p className="text-foreground/90 leading-relaxed">
                Send me an email with your message, and I'll get back to you as
                soon as I can.
              </p>

              <div className="pt-4">
                <a
                  href="mailto:snehalp@gmail.com"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 active:scale-[0.99] transition-all"
                >
                  Email: snehalp@gmail.com
                </a>
              </div>

              <p className="text-sm text-muted-foreground pt-2">
                I typically respond within 24–48 hours.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl text-foreground">What can you help with?</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90 leading-relaxed">
              <li>Bug reports or technical issues</li>
              <li>Feature requests or ideas</li>
              <li>General feedback about the tool</li>
              <li>Partnerships or collaborations</li>
              <li>Just saying hello!</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl text-foreground">Privacy</h2>
            <p className="text-foreground/90 leading-relaxed">
              Your email is only used to respond to your message. We don't store
              it for marketing, don't share it with third parties, and don't use
              it for anything else.
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

export default Contact;
