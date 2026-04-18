import AgeCalculator from "@/components/AgeCalculator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-5 py-16">
        <div className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl text-foreground leading-tight mb-3">
            What Is My Age?
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Enter your date of birth and find out exactly how long you've been around — down to the minute.
          </p>
        </div>
        <AgeCalculator />
      </main>
      <footer className="py-6 text-center text-xs text-muted-foreground/60">
        What Is My Age · simple age calculator
      </footer>
    </div>
  );
};

export default Index;
