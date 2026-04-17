// Celebrity "Name-Twins" — icons & characters tied to a specific name + birth year
// Optionally localised by country. Returns null if no match (UI shows nothing).

export interface NameTwin {
  label: string; // e.g. "The Real-World Twin"
  name: string;
  blurb: string;
}

export interface NameTwinSet {
  name: string;
  year: number;
  country?: string;
  twins: NameTwin[];
}

// Keyed by `${nameLower}|${year}` and optionally `|${countryLower}`
const twinDb: Record<string, NameTwin[]> = {
  // Liam — global
  "liam|2010": [
    {
      label: "The Real-World Twin",
      name: "Liam Hemsworth",
      blurb: "His breakout role in The Last Song (2010) helped catapult the name Liam to the top of the charts.",
    },
    {
      label: "The Fictional Twin",
      name: "Liam Court",
      blurb: "A lead character on 90210, which was at peak popularity when you were a baby.",
    },
    {
      label: "The Name-Sake Legend",
      name: "Liam Neeson",
      blurb: "In 2010, Unknown and Clash of the Titans made 'Liam' synonymous with 'Action Hero'.",
    },
  ],
  "liam|2011": [
    { label: "The Real-World Twin", name: "Liam Payne", blurb: "One Direction formed in 2010 and exploded globally in 2011 — your name went stratospheric." },
    { label: "The Name-Sake Legend", name: "Liam Neeson", blurb: "Taken 2 was greenlit and Liam Neeson became the defining action star of the era." },
  ],
  // Emma
  "emma|2010": [
    { label: "The Real-World Twin", name: "Emma Stone", blurb: "Easy A (2010) launched her into A-list territory the year you were born." },
    { label: "The Name-Sake Legend", name: "Emma Watson", blurb: "Harry Potter and the Deathly Hallows Part 1 dominated cinemas in 2010." },
    { label: "The Fictional Twin", name: "Emma Swan", blurb: "Once Upon a Time was being developed — Emma became the modern fairy-tale heroine name." },
  ],
  "emma|2008": [
    { label: "The Real-World Twin", name: "Emma Watson", blurb: "Harry Potter mania was at its peak — Emma became the defining girls' name of the era." },
  ],
  // Olivia
  "olivia|2003": [
    { label: "The Fictional Twin", name: "Olivia Benson", blurb: "Law & Order: SVU made the name synonymous with strength and justice." },
    { label: "The Name-Sake Legend", name: "Olivia Newton-John", blurb: "Grease re-releases kept the name glamorous through your birth year." },
  ],
  "olivia|2021": [
    { label: "The Real-World Twin", name: "Olivia Rodrigo", blurb: "Drivers License (Jan 2021) made Olivia the name of the year — and the decade so far." },
  ],
  // Noah
  "noah|2014": [
    { label: "The Real-World Twin", name: "Noah Centineo", blurb: "Was rising on Disney; Noah was the #1 boys' name in the US the year you were born." },
    { label: "The Name-Sake Legend", name: "Noah (film)", blurb: "Darren Aronofsky's epic 'Noah' starring Russell Crowe hit theatres in 2014." },
  ],
  // Sophia
  "sophia|2011": [
    { label: "The Fictional Twin", name: "Sofía Vergara as Gloria", blurb: "Modern Family was the biggest comedy on TV — Sofía/Sophia hit #1 in baby names." },
    { label: "The Name-Sake Legend", name: "Sophia Loren", blurb: "Hollywood royalty whose name has graced the top charts for decades." },
  ],
  // Aiden
  "aiden|2008": [
    { label: "The Fictional Twin", name: "Aidan Shaw", blurb: "Sex and the City: The Movie (2008) brought Aidan back into the cultural spotlight." },
  ],
  // Mia
  "mia|2010": [
    { label: "The Name-Sake Legend", name: "Mia Wasikowska", blurb: "Starred as Alice in Tim Burton's Alice in Wonderland (2010) — the year your name peaked." },
  ],
  // Isabella — Twilight era
  "isabella|2009": [
    { label: "The Fictional Twin", name: "Isabella 'Bella' Swan", blurb: "Twilight: New Moon (2009) made Bella/Isabella the most romantic name of the year." },
  ],
  "isabella|2010": [
    { label: "The Fictional Twin", name: "Isabella 'Bella' Swan", blurb: "Eclipse (2010) was the cultural event — and Isabella was the #1 girls' name in the US." },
  ],
  // Ava
  "ava|2011": [
    { label: "The Name-Sake Legend", name: "Ava Gardner", blurb: "Old Hollywood glamour was in full revival — Ava entered the top 5 baby names." },
  ],
  // Charlotte
  "charlotte|2015": [
    { label: "The Real-World Twin", name: "Princess Charlotte", blurb: "Princess Charlotte of Cambridge was born in May 2015 — your name's royal moment." },
  ],
  // James
  "james|2014": [
    { label: "The Real-World Twin", name: "James Corden", blurb: "Took over The Late Late Show — James was making a major comeback in baby names." },
  ],
  // Taylor
  "taylor|2014": [
    { label: "The Real-World Twin", name: "Taylor Swift", blurb: "1989 dropped in October 2014 — the year Taylor became a one-name global superstar." },
  ],
  // Ariana
  "ariana|2014": [
    { label: "The Real-World Twin", name: "Ariana Grande", blurb: "Problem and Bang Bang made 2014 the year Ariana became a household name." },
  ],
};

// Localised twins keyed by `${nameLower}|${year}|${countryLower}`
const localisedDb: Record<string, NameTwin[]> = {
  // India
  "arjun|2010|india": [
    { label: "The Real-World Twin", name: "Arjun Kapoor", blurb: "Made his Bollywood debut around this time — Arjun stayed a top-tier name in India." },
    { label: "The Name-Sake Legend", name: "Arjun (Mahabharata)", blurb: "The eternal warrior prince — your name carries millennia of legend." },
  ],
  "aryan|2010|india": [
    { label: "The Fictional Twin", name: "Aryan Khan (KKKG)", blurb: "Shah Rukh Khan named his son Aryan, sparking a generation of Aryans across India." },
  ],
  // UK
  "harry|2011|united kingdom": [
    { label: "The Real-World Twin", name: "Prince Harry", blurb: "His engagement era and royal duties kept Harry firmly in the UK top 10." },
    { label: "The Fictional Twin", name: "Harry Potter", blurb: "Deathly Hallows Part 2 (2011) was the cinematic event of your birth year." },
  ],
  // Nigeria
  "chioma|2015|nigeria": [
    { label: "The Real-World Twin", name: "Chioma Avril Rowland", blurb: "Davido's 'Assurance' moment was years away, but Chioma was already a beloved Igbo name." },
  ],
  // Brazil
  "gabriel|2010|brazil": [
    { label: "The Real-World Twin", name: "Gabriel Medina", blurb: "Brazil's surfing prodigy was rising — Gabriel topped boys' name charts." },
  ],
  // Japan
  "yuki|2010|japan": [
    { label: "The Fictional Twin", name: "Yuki Cross (Vampire Knight)", blurb: "Anime culture made Yuki one of the most beloved names of the 2010s." },
  ],
};

export function getNameTwins(
  name: string,
  year: number,
  country?: string | null,
): NameTwinSet | null {
  const n = name.trim().toLowerCase();
  if (!n) return null;

  const localKey = country ? `${n}|${year}|${country.toLowerCase()}` : null;
  const globalKey = `${n}|${year}`;

  const local = localKey ? localisedDb[localKey] : undefined;
  const global = twinDb[globalKey];

  // Try ±1 year fallback for global if no exact match
  let globalMatch = global;
  if (!globalMatch) {
    for (const off of [-1, 1, -2, 2]) {
      const k = `${n}|${year + off}`;
      if (twinDb[k]) {
        globalMatch = twinDb[k];
        break;
      }
    }
  }

  const twins = [...(local || []), ...(globalMatch || [])];
  if (twins.length === 0) return null;

  // Dedupe by name
  const seen = new Set<string>();
  const deduped = twins.filter((t) => {
    if (seen.has(t.name)) return false;
    seen.add(t.name);
    return true;
  });

  return {
    name: name.trim(),
    year,
    country: country || undefined,
    twins: deduped.slice(0, 4),
  };
}
