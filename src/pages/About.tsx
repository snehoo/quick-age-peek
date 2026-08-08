import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About — What Is My Age?";
    const meta = document.querySelector('meta[name="description"]');
    const desc =
      "Learn about What Is My Age — the story behind the calculator, who built it, and why it exists.";
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
              About <span className="text-primary">What Is My Age?</span>
            </h1>
          </header>

          <section className="space-y-4">
            <h2 className="text-xl text-foreground">Who built this?</h2>
            <p className="text-foreground/90 leading-relaxed">
              Hi, I'm <strong>Snehal Patel</strong>, a developer based in{" "}
              <strong>Mumbai, India</strong>. I built What Is My Age out of a
              simple curiosity: <em>What does your age really mean?</em>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl text-foreground">Why does this site exist?</h2>
            <p className="text-foreground/90 leading-relaxed">
              There were already sites that told you your age. But they just gave
              you a number. What was missing was perspective.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              I built What Is My Age to answer questions like:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90 leading-relaxed">
              <li>How many heartbeats have you lived through?</li>
              <li>How many full moons have you seen?</li>
              <li>What generation do you belong to?</li>
              <li>How many days have you actually been alive?</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed">
              Beyond just calculating, the site lets you save your age breakdown
              as a shareable card — something you can brag about, share with
              friends, or just keep as a memento.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl text-foreground">The purpose</h2>
            <p className="text-foreground/90 leading-relaxed">
              What Is My Age exists to help you see your age differently. Whether
              you need it for a form, school admissions, medical records, or just
              pure curiosity — the goal is to give you something more meaningful
              than just a year.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              It's a tool built with care, and it's completely free. No hidden
              agenda. Just numbers that matter.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl text-foreground">Privacy first</h2>
            <p className="text-foreground/90 leading-relaxed">
              Your date of birth is processed entirely in your browser. We don't
              store it, track it, or sell it. See our{" "}
              <Link to="/privacy/" className="text-primary underline">
                privacy policy
              </Link>{" "}
              for more details.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl text-foreground">Questions?</h2>
            <p className="text-foreground/90 leading-relaxed">
              Have feedback, found a bug, or just want to say hi? Feel free to{" "}
              <Link to="/contact/" className="text-primary underline">
                get in touch
              </Link>
              .
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

export default About;
