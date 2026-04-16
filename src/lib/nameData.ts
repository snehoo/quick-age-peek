// Name meanings, origins, and popularity vibes
const nameMeanings: Record<string, { meaning: string; origin: string; vibe: string }> = {
  sarah: { meaning: "Princess", origin: "Hebrew", vibe: "Classic & regal — timeless across every culture" },
  james: { meaning: "Supplanter", origin: "Hebrew/English", vibe: "Strong, dependable — a name that never goes out of style" },
  emma: { meaning: "Whole, universal", origin: "Germanic", vibe: "Elegant simplicity — warm and effortlessly charming" },
  liam: { meaning: "Strong-willed warrior", origin: "Irish", vibe: "Modern and bold — peaked in the 2010s and still rising" },
  olivia: { meaning: "Olive tree", origin: "Latin", vibe: "Peaceful yet powerful — literary and graceful" },
  noah: { meaning: "Rest, comfort", origin: "Hebrew", vibe: "Calm strength — a millennial-era favourite" },
  ava: { meaning: "Life, bird", origin: "Latin/Hebrew", vibe: "Short, punchy, glamorous — Hollywood energy" },
  william: { meaning: "Resolute protector", origin: "Germanic", vibe: "Royal bloodline energy — dignified and enduring" },
  sophia: { meaning: "Wisdom", origin: "Greek", vibe: "Intellectual elegance — globally beloved" },
  benjamin: { meaning: "Son of the right hand", origin: "Hebrew", vibe: "Smart and distinguished — a founding-father classic" },
  isabella: { meaning: "Devoted to God", origin: "Hebrew/Spanish", vibe: "Romantic and regal — queen-level name" },
  alexander: { meaning: "Defender of the people", origin: "Greek", vibe: "Conqueror energy — grand and ambitious" },
  mia: { meaning: "Mine, beloved", origin: "Scandinavian/Latin", vibe: "Sweet and modern — effortlessly cool" },
  daniel: { meaning: "God is my judge", origin: "Hebrew", vibe: "Steady and trustworthy — a timeless pick" },
  charlotte: { meaning: "Free woman", origin: "French", vibe: "Refined and literary — a name with backbone" },
  henry: { meaning: "Ruler of the home", origin: "Germanic", vibe: "Old-money charm meets modern revival" },
  amelia: { meaning: "Industrious, striving", origin: "Germanic", vibe: "Adventurous spirit — think Earhart" },
  michael: { meaning: "Who is like God?", origin: "Hebrew", vibe: "Iconic boomer-era titan — reliable and strong" },
  david: { meaning: "Beloved", origin: "Hebrew", vibe: "Universal and warm — works in every language" },
  emily: { meaning: "Rival, industrious", origin: "Latin", vibe: "Sweet but determined — peak '90s–'00s energy" },
  john: { meaning: "God is gracious", origin: "Hebrew", vibe: "The foundation of Western names — simple power" },
  muhammad: { meaning: "Praised, praiseworthy", origin: "Arabic", vibe: "Globally dominant — carries deep reverence" },
  aisha: { meaning: "Living, prosperous", origin: "Arabic", vibe: "Radiant and beloved — a name with history" },
  chen: { meaning: "Morning, dawn", origin: "Chinese", vibe: "Fresh beginnings — one of the most common globally" },
  priya: { meaning: "Beloved", origin: "Sanskrit", vibe: "Warm and cherished — deeply South Asian" },
  raj: { meaning: "King, ruler", origin: "Sanskrit", vibe: "Short, regal, commanding" },
  yuki: { meaning: "Snow, happiness", origin: "Japanese", vibe: "Delicate beauty — serene and poetic" },
  lucas: { meaning: "Light, illumination", origin: "Greek/Latin", vibe: "Bright and modern — a global favourite" },
  fatima: { meaning: "Captivating, one who abstains", origin: "Arabic", vibe: "Deeply respected — spiritual and strong" },
  maria: { meaning: "Bitter, beloved", origin: "Hebrew/Latin", vibe: "The world's most universal name — eternal" },
  carlos: { meaning: "Free man", origin: "Spanish/Portuguese", vibe: "Warm, confident, Latin charm" },
  ana: { meaning: "Grace, favour", origin: "Hebrew/Spanish", vibe: "Minimal and elegant — works everywhere" },
  max: { meaning: "Greatest", origin: "Latin", vibe: "Bold and punchy — built for winners" },
  grace: { meaning: "Grace, elegance", origin: "Latin", vibe: "Virtue name with staying power — effortlessly beautiful" },
  jack: { meaning: "God is gracious", origin: "English", vibe: "Cheeky, confident, everyman hero energy" },
  oliver: { meaning: "Olive tree", origin: "Latin", vibe: "Literary and gentle — Dickensian charm" },
  leo: { meaning: "Lion", origin: "Latin", vibe: "Fierce in three letters — zodiac cool" },
  alice: { meaning: "Noble", origin: "Germanic", vibe: "Wonderland whimsy meets quiet strength" },
  ethan: { meaning: "Strong, firm", origin: "Hebrew", vibe: "Solid modern pick — reliable and cool" },
  chloe: { meaning: "Blooming", origin: "Greek", vibe: "Fresh and youthful — springtime energy" },
  ryan: { meaning: "Little king", origin: "Irish", vibe: "Easygoing confidence — peak '80s–'90s" },
  kevin: { meaning: "Gentle, handsome", origin: "Irish", vibe: "Lovable '80s hero — friendly and approachable" },
  jessica: { meaning: "God beholds", origin: "Hebrew", vibe: "Peak '90s queen — confident and memorable" },
  ashley: { meaning: "Ash tree meadow", origin: "English", vibe: "The definitive '90s name — upbeat and friendly" },
  mohammed: { meaning: "Praised, praiseworthy", origin: "Arabic", vibe: "Most popular name on Earth — deeply honoured" },
  wei: { meaning: "Greatness, power", origin: "Chinese", vibe: "Concise strength — massively popular in East Asia" },
  hiroshi: { meaning: "Generous, tolerant", origin: "Japanese", vibe: "Warm wisdom — classic Japanese masculinity" },
  anna: { meaning: "Grace", origin: "Hebrew", vibe: "Palindrome perfection — timeless across continents" },
  robert: { meaning: "Bright fame", origin: "Germanic", vibe: "Boardroom ready — classic authority" },
  thomas: { meaning: "Twin", origin: "Aramaic", vibe: "Intellectual and grounded — always in style" },
  elizabeth: { meaning: "Pledged to God", origin: "Hebrew", vibe: "Literally royal — the name of queens" },
  jennifer: { meaning: "White shadow, fair one", origin: "Welsh/Cornish", vibe: "The name that defined the '70s–'80s" },
  matthew: { meaning: "Gift of God", origin: "Hebrew", vibe: "Warm and dependable — biblical staying power" },
  christopher: { meaning: "Bearer of Christ", origin: "Greek", vibe: "Explorer energy — adventurous and strong" },
  jacob: { meaning: "Supplanter", origin: "Hebrew", vibe: "Biblical comeback king of the 2000s" },
  mason: { meaning: "Stone worker", origin: "English", vibe: "Blue-collar cool meets modern trend" },
  harper: { meaning: "Harp player", origin: "English", vibe: "Literary and musical — modern unisex cool" },
  evelyn: { meaning: "Wished-for child", origin: "English", vibe: "Vintage revival — grandma-chic at its finest" },
  luna: { meaning: "Moon", origin: "Latin", vibe: "Celestial and magical — peak Gen Alpha energy" },
  aiden: { meaning: "Little fire", origin: "Irish", vibe: "Sparked the -aiden trend — warm and spirited" },
  zara: { meaning: "Princess, flower", origin: "Arabic/Hebrew", vibe: "Chic and global — fashion-forward energy" },
  kai: { meaning: "Sea, ocean", origin: "Hawaiian/Japanese", vibe: "Free-spirited and worldly — effortlessly cool" },
};

// Approximate US popularity by decade (rank out of top names)
const popularityByDecade: Record<string, Record<string, number>> = {
  "1950": { james: 1, michael: 2, robert: 3, john: 4, david: 5, william: 8, thomas: 11, mary: 1, linda: 2, patricia: 3, susan: 5, jessica: 200, sarah: 90 },
  "1960": { michael: 1, david: 2, james: 3, john: 4, robert: 5, william: 9, christopher: 10, lisa: 1, mary: 2, jennifer: 20, jessica: 200, sarah: 80 },
  "1970": { michael: 1, christopher: 2, jason: 3, david: 4, james: 5, jennifer: 1, amy: 2, jessica: 5, sarah: 15, heather: 3 },
  "1980": { michael: 1, christopher: 2, matthew: 3, joshua: 4, david: 5, jessica: 1, jennifer: 2, ashley: 3, amanda: 4, sarah: 5 },
  "1990": { michael: 1, christopher: 2, matthew: 3, joshua: 4, jacob: 5, jessica: 1, ashley: 2, emily: 5, sarah: 4, samantha: 3 },
  "2000": { jacob: 1, michael: 2, matthew: 3, joshua: 4, ethan: 5, emily: 1, emma: 2, madison: 3, olivia: 5, hannah: 4 },
  "2010": { liam: 1, noah: 2, mason: 3, jacob: 4, william: 5, emma: 1, olivia: 2, sophia: 3, ava: 4, isabella: 5 },
  "2020": { liam: 1, noah: 2, oliver: 3, james: 4, elijah: 5, olivia: 1, emma: 2, charlotte: 3, amelia: 4, ava: 5 },
};

export function getNameInfo(name: string, birthYear: number) {
  const key = name.toLowerCase().trim();
  const info = nameMeanings[key];
  
  const decade = `${Math.floor(birthYear / 10) * 10}`;
  const decadeData = popularityByDecade[decade] || popularityByDecade["2000"];
  const rank = decadeData[key];

  let popularityText: string;
  if (rank && rank <= 5) {
    popularityText = `#${rank} most popular name in the ${decade}s — a true chart-topper of that era.`;
  } else if (rank && rank <= 20) {
    popularityText = `Top 20 in the ${decade}s — widely loved and recognisable.`;
  } else if (rank && rank <= 100) {
    popularityText = `In the top 100 during the ${decade}s — popular but not overplayed.`;
  } else if (info) {
    popularityText = `A well-known name globally, though not among the top picks of the ${decade}s — distinctive.`;
  } else {
    popularityText = `A unique name for the ${decade}s — you probably didn't share it with many classmates.`;
  }

  return {
    meaning: info?.meaning || null,
    origin: info?.origin || null,
    vibe: info?.vibe || `A unique and distinctive name — not everyone has it, and that's the point.`,
    popularity: popularityText,
  };
}
