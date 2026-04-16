// #1 songs by birth month & year (Spotify track IDs for embed)
// Format: "YYYY-MM" → { title, artist, spotifyId }

interface BirthSong {
  title: string;
  artist: string;
  spotifyId: string;
}

const songsByMonthYear: Record<string, BirthSong> = {
  // 1980
  "1980-01": { title: "Rock with You", artist: "Michael Jackson", spotifyId: "5VjhdsiGnBNsRpGQo9bkgZ" },
  "1980-06": { title: "Funkytown", artist: "Lipps Inc.", spotifyId: "2jvohEqTbLAnOUFfyOBtzB" },
  "1980-09": { title: "Upside Down", artist: "Diana Ross", spotifyId: "5nBpPBJhNycCGn3NO0OIJA" },
  "1980-12": { title: "Lady", artist: "Kenny Rogers", spotifyId: "31k56BwgyyVBhOGKbIW0pC" },
  // 1985
  "1985-01": { title: "Like a Virgin", artist: "Madonna", spotifyId: "1ZPlNanZsIaGKDMGSGldDR" },
  "1985-07": { title: "Everytime You Go Away", artist: "Paul Young", spotifyId: "0awSrBqjJVVB7nsc2MFzKa" },
  "1985-12": { title: "Say You, Say Me", artist: "Lionel Richie", spotifyId: "6ms7grkMIkMPDMFQfl2RxQ" },
  // 1990
  "1990-01": { title: "Another Day in Paradise", artist: "Phil Collins", spotifyId: "3YyGRcLfKJEiRiAzFkEzhy" },
  "1990-04": { title: "Nothing Compares 2 U", artist: "Sinéad O'Connor", spotifyId: "6cRQJuRbVFnHFeOPdvRnSE" },
  "1990-07": { title: "Step by Step", artist: "New Kids on the Block", spotifyId: "1k4BqEVe7ljcqFMvDjHTid" },
  "1990-10": { title: "Close to You", artist: "Maxi Priest", spotifyId: "1qvSm2r9cExIzLJvDSbKjt" },
  // 1991
  "1991-01": { title: "Love Will Never Do (Without You)", artist: "Janet Jackson", spotifyId: "4CuIabn8RWzqJikn6x8PW4" },
  "1991-06": { title: "Rush Rush", artist: "Paula Abdul", spotifyId: "2TdLJfpPYlu3wGYKPdNqnz" },
  "1991-10": { title: "Emotions", artist: "Mariah Carey", spotifyId: "757DI1TXmmxnJfqFQ4dv6v" },
  // 1992
  "1992-01": { title: "Black or White", artist: "Michael Jackson", spotifyId: "1OKYMei9Oy1GwYkpYBjkth" },
  "1992-06": { title: "Jump", artist: "Kris Kross", spotifyId: "7wdzLiOFTkOgRU0e5vVPnE" },
  "1992-08": { title: "End of the Road", artist: "Boyz II Men", spotifyId: "7qbtOaziRIXjnseGOF52xi" },
  "1992-12": { title: "I Will Always Love You", artist: "Whitney Houston", spotifyId: "4eHbdreAnSOrDDsFfc4Fpm" },
  // 1993
  "1993-03": { title: "Informer", artist: "Snow", spotifyId: "2DPJMGCbP7YjAfJKtaJEHJ" },
  "1993-06": { title: "That's the Way Love Goes", artist: "Janet Jackson", spotifyId: "1VN4VgzfHKylXDibSqhbjE" },
  // 1994
  "1994-02": { title: "The Power of Love", artist: "Céline Dion", spotifyId: "0hJkBqkYBiHqjyMpBZpSlS" },
  "1994-06": { title: "I Swear", artist: "All-4-One", spotifyId: "3HKnbNVCuWf2rf84xVJsap" },
  "1994-10": { title: "I'll Make Love to You", artist: "Boyz II Men", spotifyId: "42zCdHRvNJQRBgCZm6WAGE" },
  // 1995
  "1995-01": { title: "Creep", artist: "TLC", spotifyId: "5Oc2JkLG43JMEiSCGU2dPH" },
  "1995-06": { title: "Have You Ever Really Loved a Woman?", artist: "Bryan Adams", spotifyId: "0k8O7b6OcJm7dBlJFGJg4l" },
  "1995-09": { title: "Gangsta's Paradise", artist: "Coolio", spotifyId: "1DIXPcTDzTj8ZMHt3PDt8p" },
  "1995-12": { title: "One Sweet Day", artist: "Mariah Carey & Boyz II Men", spotifyId: "4CJkXCbNh47BOxGBBXgByG" },
  // 1996
  "1996-02": { title: "One Sweet Day", artist: "Mariah Carey & Boyz II Men", spotifyId: "4CJkXCbNh47BOxGBBXgByG" },
  "1996-06": { title: "Tha Crossroads", artist: "Bone Thugs-N-Harmony", spotifyId: "7L0LjRVTXjSfrFXi0TFaoI" },
  "1996-12": { title: "Un-Break My Heart", artist: "Toni Braxton", spotifyId: "4e8fJNDIOEjM6Lk2eE5mPF" },
  // 1997
  "1997-01": { title: "Un-Break My Heart", artist: "Toni Braxton", spotifyId: "4e8fJNDIOEjM6Lk2eE5mPF" },
  "1997-06": { title: "MMMBop", artist: "Hanson", spotifyId: "0gUFHD1GiVEfJJNvwAERi7" },
  "1997-10": { title: "Candle in the Wind 1997", artist: "Elton John", spotifyId: "2Zlt1jYMTclkVEpIj9WUPM" },
  // 1998
  "1998-01": { title: "Together Again", artist: "Janet Jackson", spotifyId: "5h23wBNRhM8DyXboGr0RYR" },
  "1998-06": { title: "The Boy Is Mine", artist: "Brandy & Monica", spotifyId: "63mMf2hHfbTJNiebfaaBIi" },
  "1998-12": { title: "I'm Your Angel", artist: "R. Kelly & Céline Dion", spotifyId: "3cNaWEBq4VEVkpFBuEG5F3" },
  // 1999
  "1999-01": { title: "...Baby One More Time", artist: "Britney Spears", spotifyId: "3MjUtNVVq3C8Fn0MP3zhXa" },
  "1999-06": { title: "If You Had My Love", artist: "Jennifer Lopez", spotifyId: "5Y2k4V7Bl8MsumZAHJGEMM" },
  "1999-10": { title: "Smooth", artist: "Santana ft. Rob Thomas", spotifyId: "22gzRFRygWE0JSpSfWOmkC" },
  // 2000
  "2000-01": { title: "Smooth", artist: "Santana ft. Rob Thomas", spotifyId: "22gzRFRygWE0JSpSfWOmkC" },
  "2000-03": { title: "Say My Name", artist: "Destiny's Child", spotifyId: "5UTnvMvpmbcoIQKbFMIlyW" },
  "2000-06": { title: "Be with You", artist: "Enrique Iglesias", spotifyId: "5Wl7VS5yMFhgITi1PGIiT2" },
  "2000-09": { title: "Music", artist: "Madonna", spotifyId: "2sHwMYTCzEfa9gd05d4bkm" },
  "2000-12": { title: "Independent Women Part I", artist: "Destiny's Child", spotifyId: "23TPP1eeElFfvYVznskwCY" },
  // 2001
  "2001-03": { title: "Hanging by a Moment", artist: "Lifehouse", spotifyId: "17t3Gl5eqjCmMM7Gk2MRsZ" },
  "2001-06": { title: "Lady Marmalade", artist: "Christina Aguilera, Lil' Kim, Mýa & P!nk", spotifyId: "3ImhsjMBCmFd8FkGiOrAHl" },
  "2001-10": { title: "Fallin'", artist: "Alicia Keys", spotifyId: "3JFpDqmTWBIibImrRcFFdF" },
  // 2002
  "2002-02": { title: "Always on Time", artist: "Ja Rule ft. Ashanti", spotifyId: "6pLT25HQDn3jac6NKnk9Jh" },
  "2002-06": { title: "Foolish", artist: "Ashanti", spotifyId: "4GWFwQiDqSmVnsMBGGotEh" },
  "2002-10": { title: "Lose Yourself", artist: "Eminem", spotifyId: "1v7L65Lzy0j0vdpRjJewt1" },
  // 2003
  "2003-03": { title: "In Da Club", artist: "50 Cent", spotifyId: "7iL6o9tox1zgHpKUfh9vuC" },
  "2003-06": { title: "21 Questions", artist: "50 Cent ft. Nate Dogg", spotifyId: "25z6kpmIgiMdEMbBMe5SjA" },
  "2003-10": { title: "Baby Boy", artist: "Beyoncé ft. Sean Paul", spotifyId: "07ABMMAfikmUuaifOt4WWE" },
  // 2004
  "2004-02": { title: "Hey Ya!", artist: "Outkast", spotifyId: "2PpruBYCo4H7WOBJ7Q2EwM" },
  "2004-06": { title: "Burn", artist: "Usher", spotifyId: "3xKGBwJv4lmhRjBMliXvjD" },
  "2004-10": { title: "Goodies", artist: "Ciara ft. Petey Pablo", spotifyId: "7mfp12MxL7FicFH99Gnbfn" },
  // 2005
  "2005-01": { title: "Let Me Love You", artist: "Mario", spotifyId: "4Em4SqPEmWP8H7bKACq5S6" },
  "2005-04": { title: "Candy Shop", artist: "50 Cent ft. Olivia", spotifyId: "2iOaigdEMJIjfSwKhbVLkn" },
  "2005-07": { title: "We Belong Together", artist: "Mariah Carey", spotifyId: "1MHFoRQ9KrdJwqTWue8fbm" },
  "2005-10": { title: "Gold Digger", artist: "Kanye West ft. Jamie Foxx", spotifyId: "1PS1QMdUqOal0ai3Gt7sDQ" },
  // 2006
  "2006-03": { title: "You're Beautiful", artist: "James Blunt", spotifyId: "0vg9wRAmUqIBjCIAbdwRk4" },
  "2006-06": { title: "Hips Don't Lie", artist: "Shakira ft. Wyclef Jean", spotifyId: "3ZFTkvIE7kyPt6Nu3PEa7V" },
  "2006-10": { title: "SexyBack", artist: "Justin Timberlake", spotifyId: "4kKdWRiYFezRzAsUw9lBOi" },
  // 2007
  "2007-02": { title: "Irreplaceable", artist: "Beyoncé", spotifyId: "6mt0FMPu6xjC12sqXREAiE" },
  "2007-06": { title: "Umbrella", artist: "Rihanna ft. Jay-Z", spotifyId: "2RttW7RAu5nOAfq6YFvApB" },
  "2007-10": { title: "Crank That", artist: "Soulja Boy Tell'em", spotifyId: "2BqJYo8gBMQBIFnD27eD6u" },
  // 2008
  "2008-03": { title: "Love in This Club", artist: "Usher ft. Young Jeezy", spotifyId: "2YjUBFNIj0JbqaN26j1XDw" },
  "2008-06": { title: "Lollipop", artist: "Lil Wayne", spotifyId: "30dPHINKNDIBJuiku8xHLO" },
  "2008-10": { title: "Live Your Life", artist: "T.I. ft. Rihanna", spotifyId: "51FRFEqYYPOVbkf5OjpT1Q" },
  // 2009
  "2009-01": { title: "Single Ladies", artist: "Beyoncé", spotifyId: "5R3hRJpBbiTB3Vrp2LuLWo" },
  "2009-06": { title: "Boom Boom Pow", artist: "Black Eyed Peas", spotifyId: "3gICiEjFxkAN45TyEZNVhx" },
  "2009-10": { title: "I Gotta Feeling", artist: "Black Eyed Peas", spotifyId: "2H1aeHmfGsMB6TVKGWMjCd" },
  // 2010
  "2010-01": { title: "TiK ToK", artist: "Kesha", spotifyId: "0HPD5WQqrq7wPWR7P7Dw1i" },
  "2010-04": { title: "Rude Boy", artist: "Rihanna", spotifyId: "3UOUjBNW5N9YkVGS6m6Pw4" },
  "2010-07": { title: "California Gurls", artist: "Katy Perry ft. Snoop Dogg", spotifyId: "18bXPVkVHdpOzHIUbg20cg" },
  "2010-10": { title: "Just the Way You Are", artist: "Bruno Mars", spotifyId: "7BqBn9nzAq8spo5e7cZ0dJ" },
  // 2011
  "2011-01": { title: "Firework", artist: "Katy Perry", spotifyId: "3vkQ5DAB1qQMYO4Mr9zJN6" },
  "2011-05": { title: "Rolling in the Deep", artist: "Adele", spotifyId: "7MXVkk9YMctZqd1Srtv4MB" },
  "2011-08": { title: "Party Rock Anthem", artist: "LMFAO", spotifyId: "3JvKfv6T31zO0ini8iNItO" },
  "2011-12": { title: "We Found Love", artist: "Rihanna ft. Calvin Harris", spotifyId: "6qn9YLKt13AGvpq9jfO8py" },
  // 2012
  "2012-02": { title: "Set Fire to the Rain", artist: "Adele", spotifyId: "73CMRj62VK8nUS4ezD3wga" },
  "2012-06": { title: "Somebody That I Used to Know", artist: "Gotye ft. Kimbra", spotifyId: "4wCmqSrbyCgxEXROQE6vtV" },
  "2012-09": { title: "We Are Never Getting Back Together", artist: "Taylor Swift", spotifyId: "5YqltLsjdqKtvMwTHCMGMu" },
  // 2013
  "2013-02": { title: "Thrift Shop", artist: "Macklemore & Ryan Lewis", spotifyId: "2MuWTIM3b0YEAskbeeFE1i" },
  "2013-06": { title: "Blurred Lines", artist: "Robin Thicke ft. T.I. & Pharrell", spotifyId: "0n4bITAu0VA1V4Qqpf0TVm" },
  "2013-10": { title: "Royals", artist: "Lorde", spotifyId: "2dLLR6qlu5UJ5gk0dKz0h3" },
  // 2014
  "2014-01": { title: "Timber", artist: "Pitbull ft. Kesha", spotifyId: "3cHyrEgdyYRjgJKSOiOxeS" },
  "2014-06": { title: "Fancy", artist: "Iggy Azalea ft. Charli XCX", spotifyId: "5F37Kve3mWFq6EjrmNZsNo" },
  "2014-09": { title: "Shake It Off", artist: "Taylor Swift", spotifyId: "0cqRj7pUJDkTCEsJkx8snD" },
  // 2015
  "2015-01": { title: "Blank Space", artist: "Taylor Swift", spotifyId: "1p80LdxRV74UKvRBJuRGUP" },
  "2015-05": { title: "See You Again", artist: "Wiz Khalifa ft. Charlie Puth", spotifyId: "2JzZzZUQj3Qff7wapcbKjc" },
  "2015-08": { title: "Can't Feel My Face", artist: "The Weeknd", spotifyId: "22VdIZQfgXHwRNriFwgB2P" },
  "2015-11": { title: "Hello", artist: "Adele", spotifyId: "4sPmO7WMQUAf45kwMOtONw" },
  // 2016
  "2016-02": { title: "Love Yourself", artist: "Justin Bieber", spotifyId: "50kpGBCsNaLl1gOaJNSfHy" },
  "2016-05": { title: "One Dance", artist: "Drake ft. Wizkid & Kyla", spotifyId: "1zi7xx7UVEFkmKfv06H8x0" },
  "2016-09": { title: "Closer", artist: "The Chainsmokers ft. Halsey", spotifyId: "7BKLCZ1jbUBVqRi2FVlTVw" },
  // 2017
  "2017-01": { title: "Starboy", artist: "The Weeknd ft. Daft Punk", spotifyId: "7MXVkk9YMctZqd1Srtv4MB" },
  "2017-05": { title: "That's What I Like", artist: "Bruno Mars", spotifyId: "0KKkJNfGyhkQ5aFogxQAPU" },
  "2017-07": { title: "Despacito", artist: "Luis Fonsi & Daddy Yankee ft. Justin Bieber", spotifyId: "6habFhsOp2NvshLv26DqMb" },
  "2017-10": { title: "Rockstar", artist: "Post Malone ft. 21 Savage", spotifyId: "0e7ipj03S05BNilyu5bRzt" },
  // 2018
  "2018-02": { title: "God's Plan", artist: "Drake", spotifyId: "6DCZcSspjsKoFjzjrWoCdn" },
  "2018-07": { title: "Nice for What", artist: "Drake", spotifyId: "3CA9pLiwRIGtUBiMjbZmRw" },
  "2018-10": { title: "Girls Like You", artist: "Maroon 5 ft. Cardi B", spotifyId: "53XhwfbYqKCa1cC15pYq2q" },
  // 2019
  "2019-01": { title: "Thank U, Next", artist: "Ariana Grande", spotifyId: "3e9HZxeyfWwjeyPAMmEAmR" },
  "2019-04": { title: "Old Town Road", artist: "Lil Nas X ft. Billy Ray Cyrus", spotifyId: "2YpeDb67231RjR0MgVLzsG" },
  "2019-08": { title: "Truth Hurts", artist: "Lizzo", spotifyId: "3HWzoMvoF3KeDB1SqXuBQj" },
  // 2020
  "2020-01": { title: "Circles", artist: "Post Malone", spotifyId: "21jGcNKet2qwijlDFuPiPb" },
  "2020-04": { title: "Blinding Lights", artist: "The Weeknd", spotifyId: "0VjIjW4GlUZAMYd2vXMi3b" },
  "2020-08": { title: "WAP", artist: "Cardi B ft. Megan Thee Stallion", spotifyId: "4Oun2ylbjFKMPTiaSbbCih" },
  "2020-11": { title: "Positions", artist: "Ariana Grande", spotifyId: "35mvY5S1H3J2QZyna3TFe0" },
  // 2021
  "2021-01": { title: "Drivers License", artist: "Olivia Rodrigo", spotifyId: "5QO79kh1waicV47BqGRL3g" },
  "2021-05": { title: "Peaches", artist: "Justin Bieber ft. Daniel Caesar & Giveon", spotifyId: "4iJyoBOLtHEmRGeTiIafUZ" },
  "2021-09": { title: "Stay", artist: "The Kid LAROI & Justin Bieber", spotifyId: "5PjdY0CKGZdEuoNab3yDmX" },
  // 2022
  "2022-01": { title: "Easy on Me", artist: "Adele", spotifyId: "46s57QULU02Voy0Kup6UEb" },
  "2022-06": { title: "As It Was", artist: "Harry Styles", spotifyId: "4Dvkj6JhhA12EX05fT7y2e" },
  "2022-10": { title: "Unholy", artist: "Sam Smith & Kim Petras", spotifyId: "3nqQXoyQOWXiESFLlDf3FG" },
  // 2023
  "2023-01": { title: "Flowers", artist: "Miley Cyrus", spotifyId: "7DSAEUvxU8FajXtRloy8M0" },
  "2023-05": { title: "Last Night", artist: "Morgan Wallen", spotifyId: "7K3BhSpAxZBznislvUMVtn" },
  "2023-10": { title: "Paint the Town Red", artist: "Doja Cat", spotifyId: "2IGMVunIBsBLtEiVuLEBKR" },
  // 2024
  "2024-01": { title: "Lovin on Me", artist: "Jack Harlow", spotifyId: "4lGGEOqnMoAPHJOHsEPKuJ" },
  "2024-04": { title: "We Can't Be Friends", artist: "Ariana Grande", spotifyId: "49BRCNV7E94s7Q2FUhhJ3p" },
  "2024-07": { title: "Not Like Us", artist: "Kendrick Lamar", spotifyId: "6AI3ezQ4o3HUoP6Dhudph3" },
  "2024-10": { title: "Die with a Smile", artist: "Lady Gaga & Bruno Mars", spotifyId: "2plbrEY59IikOBgBGLjaOE" },
};

export function getBirthSong(year: number, month: number): BirthSong | null {
  const key = `${year}-${String(month).padStart(2, "0")}`;
  if (songsByMonthYear[key]) return songsByMonthYear[key];

  // Try to find closest month in the same year
  for (let m = month; m >= 1; m--) {
    const k = `${year}-${String(m).padStart(2, "0")}`;
    if (songsByMonthYear[k]) return songsByMonthYear[k];
  }
  for (let m = month; m <= 12; m++) {
    const k = `${year}-${String(m).padStart(2, "0")}`;
    if (songsByMonthYear[k]) return songsByMonthYear[k];
  }

  // Try closest year
  for (let offset = 1; offset <= 5; offset++) {
    for (const dir of [1, -1]) {
      const y = year + offset * dir;
      const k = `${y}-${String(month).padStart(2, "0")}`;
      if (songsByMonthYear[k]) return songsByMonthYear[k];
    }
  }

  return null;
}
