interface FamousPerson {
  name: string;
  tag: string; // e.g. "Actor", "Musician", "Athlete", "Founder", "Leader"
  born: string; // "MM-DD"
}

// Large dataset of famous people by birthday (month-day)
const famousPeople: FamousPerson[] = [
  // January
  { name: "Martin Luther King Jr.", tag: "Leader", born: "01-15" },
  { name: "Muhammad Ali", tag: "Athlete", born: "01-17" },
  { name: "Jeff Bezos", tag: "Founder", born: "01-12" },
  { name: "Ellen DeGeneres", tag: "TV Host", born: "01-26" },
  { name: "Oprah Winfrey", tag: "Media Mogul", born: "01-29" },
  { name: "Justin Timberlake", tag: "Musician", born: "01-31" },
  { name: "Bradley Cooper", tag: "Actor", born: "01-05" },
  { name: "Jim Carrey", tag: "Actor", born: "01-17" },
  { name: "Kate Middleton", tag: "Royalty", born: "01-09" },
  { name: "Elvis Presley", tag: "Musician", born: "01-08" },
  { name: "David Bowie", tag: "Musician", born: "01-08" },
  { name: "Stephen Hawking", tag: "Scientist", born: "01-08" },
  { name: "Isaac Newton", tag: "Scientist", born: "01-04" },
  { name: "Hayao Miyazaki", tag: "Director", born: "01-05" },
  { name: "LeBron James", tag: "Athlete", born: "12-30" },
  // February
  { name: "Cristiano Ronaldo", tag: "Athlete", born: "02-05" },
  { name: "Bob Marley", tag: "Musician", born: "02-06" },
  { name: "Thomas Edison", tag: "Inventor", born: "02-11" },
  { name: "Abraham Lincoln", tag: "Leader", born: "02-12" },
  { name: "Rihanna", tag: "Musician", born: "02-20" },
  { name: "Steve Jobs", tag: "Founder", born: "02-24" },
  { name: "Michael Jordan", tag: "Athlete", born: "02-17" },
  { name: "Jennifer Aniston", tag: "Actor", born: "02-11" },
  { name: "Shakira", tag: "Musician", born: "02-02" },
  { name: "Ed Sheeran", tag: "Musician", born: "02-17" },
  { name: "George Washington", tag: "Leader", born: "02-22" },
  // March
  { name: "Albert Einstein", tag: "Scientist", born: "03-14" },
  { name: "Lady Gaga", tag: "Musician", born: "03-28" },
  { name: "Justin Bieber", tag: "Musician", born: "03-01" },
  { name: "Bruce Willis", tag: "Actor", born: "03-19" },
  { name: "Eva Longoria", tag: "Actor", born: "03-15" },
  { name: "Shaquille O'Neal", tag: "Athlete", born: "03-06" },
  { name: "Alexander Graham Bell", tag: "Inventor", born: "03-03" },
  { name: "Stephen Curry", tag: "Athlete", born: "03-14" },
  // April
  { name: "Leonardo da Vinci", tag: "Artist", born: "04-15" },
  { name: "Charlie Chaplin", tag: "Actor", born: "04-16" },
  { name: "William Shakespeare", tag: "Writer", born: "04-23" },
  { name: "Queen Elizabeth II", tag: "Royalty", born: "04-21" },
  { name: "Robert Downey Jr.", tag: "Actor", born: "04-04" },
  { name: "Emma Watson", tag: "Actor", born: "04-15" },
  { name: "Pharrell Williams", tag: "Musician", born: "04-05" },
  { name: "Jackie Chan", tag: "Actor", born: "04-07" },
  { name: "Kofi Annan", tag: "Leader", born: "04-08" },
  // May
  { name: "Adele", tag: "Musician", born: "05-05" },
  { name: "David Beckham", tag: "Athlete", born: "05-02" },
  { name: "Dwayne Johnson", tag: "Actor", born: "05-02" },
  { name: "Mark Zuckerberg", tag: "Founder", born: "05-14" },
  { name: "John F. Kennedy", tag: "Leader", born: "05-29" },
  { name: "Audrey Hepburn", tag: "Actor", born: "05-04" },
  { name: "Henry Cavill", tag: "Actor", born: "05-05" },
  { name: "Sachin Tendulkar", tag: "Athlete", born: "04-24" },
  // June
  { name: "Lionel Messi", tag: "Athlete", born: "06-24" },
  { name: "Elon Musk", tag: "Founder", born: "06-28" },
  { name: "Kanye West", tag: "Musician", born: "06-08" },
  { name: "Natalie Portman", tag: "Actor", born: "06-09" },
  { name: "Tupac Shakur", tag: "Musician", born: "06-16" },
  { name: "Venus Williams", tag: "Athlete", born: "06-17" },
  { name: "Paul McCartney", tag: "Musician", born: "06-18" },
  { name: "Nicole Kidman", tag: "Actor", born: "06-20" },
  { name: "Meryl Streep", tag: "Actor", born: "06-22" },
  { name: "Ariana Grande", tag: "Musician", born: "06-26" },
  // July
  { name: "Malala Yousafzai", tag: "Activist", born: "07-12" },
  { name: "Nelson Mandela", tag: "Leader", born: "07-18" },
  { name: "Tom Hanks", tag: "Actor", born: "07-09" },
  { name: "Nikola Tesla", tag: "Inventor", born: "07-10" },
  { name: "Kevin Hart", tag: "Actor", born: "07-06" },
  { name: "Tom Cruise", tag: "Actor", born: "07-03" },
  { name: "Selena Gomez", tag: "Musician", born: "07-22" },
  { name: "Sandra Bullock", tag: "Actor", born: "07-26" },
  { name: "J.K. Rowling", tag: "Writer", born: "07-31" },
  { name: "Arnold Schwarzenegger", tag: "Actor", born: "07-30" },
  // August
  { name: "Barack Obama", tag: "Leader", born: "08-04" },
  { name: "Roger Federer", tag: "Athlete", born: "08-08" },
  { name: "Whitney Houston", tag: "Musician", born: "08-09" },
  { name: "Madonna", tag: "Musician", born: "08-16" },
  { name: "Usain Bolt", tag: "Athlete", born: "08-21" },
  { name: "Kobe Bryant", tag: "Athlete", born: "08-23" },
  { name: "Michael Jackson", tag: "Musician", born: "08-29" },
  { name: "Warren Buffett", tag: "Billionaire", born: "08-30" },
  { name: "Chris Hemsworth", tag: "Actor", born: "08-11" },
  // September
  { name: "Beyoncé", tag: "Musician", born: "09-04" },
  { name: "Bill Murray", tag: "Actor", born: "09-21" },
  { name: "Will Smith", tag: "Actor", born: "09-25" },
  { name: "Freddie Mercury", tag: "Musician", born: "09-05" },
  { name: "Serena Williams", tag: "Athlete", born: "09-26" },
  { name: "Jimmy Fallon", tag: "TV Host", born: "09-19" },
  { name: "Adam Sandler", tag: "Actor", born: "09-09" },
  { name: "Jack Ma", tag: "Founder", born: "09-10" },
  { name: "Narendra Modi", tag: "Leader", born: "09-17" },
  // October
  { name: "Mahatma Gandhi", tag: "Leader", born: "10-02" },
  { name: "Kim Kardashian", tag: "Media", born: "10-21" },
  { name: "Bill Gates", tag: "Founder", born: "10-28" },
  { name: "Drake", tag: "Musician", born: "10-24" },
  { name: "Ryan Reynolds", tag: "Actor", born: "10-23" },
  { name: "Matt Damon", tag: "Actor", born: "10-08" },
  { name: "Hugh Jackman", tag: "Actor", born: "10-12" },
  { name: "Eminem", tag: "Musician", born: "10-17" },
  { name: "Pelé", tag: "Athlete", born: "10-23" },
  { name: "Katy Perry", tag: "Musician", born: "10-25" },
  // November
  { name: "Leonardo DiCaprio", tag: "Actor", born: "11-11" },
  { name: "Scarlett Johansson", tag: "Actor", born: "11-22" },
  { name: "Bill Nye", tag: "Scientist", born: "11-27" },
  { name: "Mark Twain", tag: "Writer", born: "11-30" },
  { name: "Marie Curie", tag: "Scientist", born: "11-07" },
  { name: "Virat Kohli", tag: "Athlete", born: "11-05" },
  { name: "Ryan Gosling", tag: "Actor", born: "11-12" },
  { name: "Miley Cyrus", tag: "Musician", born: "11-23" },
  { name: "Bruce Lee", tag: "Actor", born: "11-27" },
  // December
  { name: "Taylor Swift", tag: "Musician", born: "12-13" },
  { name: "Jay-Z", tag: "Musician", born: "12-04" },
  { name: "Brad Pitt", tag: "Actor", born: "12-18" },
  { name: "LeBron James", tag: "Athlete", born: "12-30" },
  { name: "Billie Eilish", tag: "Musician", born: "12-18" },
  { name: "Steven Spielberg", tag: "Director", born: "12-18" },
  { name: "Nicki Minaj", tag: "Musician", born: "12-08" },
  { name: "Samuel L. Jackson", tag: "Actor", born: "12-21" },
  { name: "Walt Disney", tag: "Founder", born: "12-05" },
  { name: "Frank Sinatra", tag: "Musician", born: "12-12" },
];

export function getFamousBirthdays(month: number, day: number): FamousPerson[] {
  const key = `${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const exact = famousPeople.filter((p) => p.born === key);
  
  // If we have exact matches, great
  if (exact.length >= 2) {
    // Deduplicate by name
    const seen = new Set<string>();
    return exact.filter((p) => {
      if (seen.has(p.name)) return false;
      seen.add(p.name);
      return true;
    });
  }

  // Otherwise, find people born in the same month for a broader match
  const monthKey = String(month).padStart(2, "0");
  const sameMonth = famousPeople.filter((p) => p.born.startsWith(monthKey));
  const seen = new Set<string>();
  const deduped = sameMonth.filter((p) => {
    if (seen.has(p.name)) return false;
    seen.add(p.name);
    return true;
  });
  
  // Sort by closest day
  deduped.sort((a, b) => {
    const aDiff = Math.abs(parseInt(a.born.split("-")[1]) - day);
    const bDiff = Math.abs(parseInt(b.born.split("-")[1]) - day);
    return aDiff - bDiff;
  });

  return deduped.slice(0, 6);
}
