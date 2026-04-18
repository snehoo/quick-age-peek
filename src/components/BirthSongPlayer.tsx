import { useEffect, useState } from "react";
import { getBirthSong } from "@/lib/birthSongs";

interface BirthSongProps {
  year: number;
  month: number;
}

interface ITunesResult {
  artworkUrl100?: string;
  trackViewUrl?: string;
  previewUrl?: string;
  collectionName?: string;
}

const BirthSongPlayer = ({ year, month }: BirthSongProps) => {
  const song = getBirthSong(year, month);
  const [art, setArt] = useState<string | null>(null);
  const [album, setAlbum] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!song) return;
    setPreview(null);
    setArt(null);
    setAlbum(null);
    const ctrl = new AbortController();
    const q = encodeURIComponent(`${song.title} ${song.artist}`);
    fetch(`https://itunes.apple.com/search?term=${q}&media=music&limit=1`, { signal: ctrl.signal })
      .then((r) => r.json())
      .then((data) => {
        const r: ITunesResult | undefined = data?.results?.[0];
        if (r?.artworkUrl100) setArt(r.artworkUrl100.replace("100x100", "300x300"));
        if (r?.collectionName) setAlbum(r.collectionName);
        if (r?.previewUrl) setPreview(r.previewUrl);
      })
      .catch(() => {});
    return () => ctrl.abort();
  }, [song]);

  if (!song) return null;

  return (
    <div className="mt-8 rounded-xl border border-border bg-card p-6 animate-fade-in-up">
      <h2 className="font-display text-xl text-foreground mb-1">🎵 #1 song when you were born</h2>
      <p className="text-sm text-muted-foreground mb-5">
        The track topping the charts in {new Date(year, month - 1).toLocaleString("en", { month: "long" })} {year}
      </p>

      <div className="flex gap-4 items-center">
        <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden bg-muted/50 border border-border">
          {art ? (
            <img src={art} alt={`${song.title} album art`} className="w-full h-full object-cover" loading="lazy" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-3xl">🎶</div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-lg text-foreground truncate">{song.title}</p>
          <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
          {album && <p className="text-xs text-muted-foreground/70 truncate mt-0.5">{album}</p>}
        </div>
      </div>

      {preview && (
        <div className="mt-4">
          <audio controls preload="none" src={preview} className="w-full h-10">
            Your browser does not support audio playback.
          </audio>
          <p className="text-[11px] text-muted-foreground/70 mt-1">30-second preview · courtesy iTunes</p>
        </div>
      )}
    </div>
  );
};

export default BirthSongPlayer;
