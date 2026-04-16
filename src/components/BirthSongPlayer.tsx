import { getBirthSong } from "@/lib/birthSongs";

interface BirthSongProps {
  year: number;
  month: number;
}

const BirthSongPlayer = ({ year, month }: BirthSongProps) => {
  const song = getBirthSong(year, month);

  if (!song) return null;

  return (
    <div className="mt-8 rounded-xl border border-border bg-card p-6 animate-fade-in-up">
      <h2 className="text-xl text-foreground mb-1">🎵 #1 song when you were born</h2>
      <p className="text-sm text-muted-foreground mb-4">
        <span className="font-medium text-foreground">{song.title}</span> by {song.artist}
      </p>
      <div className="rounded-xl overflow-hidden">
        <iframe
          src={`https://open.spotify.com/embed/track/${song.spotifyId}?utm_source=generator&theme=0`}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl"
          title={`${song.title} by ${song.artist}`}
        />
      </div>
    </div>
  );
};

export default BirthSongPlayer;
