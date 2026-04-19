import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Share2, Download } from "lucide-react";

interface ShareCardProps {
  name: string;
  years: number;
  totalDays: number;
  fullMoons: number;
  heartBeatsStr: string;
  moodLine: string;
  dobFormatted: string;
  nextBirthdayDays: number;
  generationName: string;
  generationTagline: string;
  famousName?: string | null;
}

const ShareCard = ({
  name,
  years,
  totalDays,
  fullMoons,
  heartBeatsStr,
  moodLine,
  dobFormatted,
  nextBirthdayDays,
  generationName,
  generationTagline,
  famousName,
}: ShareCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);
  const displayName = name.trim() || "Me";

  const generateImage = async (): Promise<{ blob: Blob; dataUrl: string } | null> => {
    if (!cardRef.current) return null;
    const dataUrl = await toPng(cardRef.current, {
      pixelRatio: 2,
      cacheBust: true,
      backgroundColor: "#3a1a0c",
    });
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    return { blob, dataUrl };
  };

  const handleShare = async () => {
    try {
      setBusy(true);
      const result = await generateImage();
      if (!result) return;
      const file = new File([result.blob], "my-age-card.png", { type: "image/png" });
      const shareText = `${displayName === "Me" ? "I'm" : displayName + " is"} ${years} years old — ${totalDays.toLocaleString()} days alive. What's your number?`;
      const shareUrl = typeof window !== "undefined" ? window.location.href : "";

      const nav = navigator as Navigator & {
        canShare?: (data: ShareData) => boolean;
      };

      if (nav.canShare && nav.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "My Age Card",
          text: shareText,
          url: shareUrl,
        });
      } else {
        const link = document.createElement("a");
        link.href = result.dataUrl;
        link.download = "my-age-card.png";
        link.click();
      }
    } catch (err) {
      console.error("Share failed", err);
    } finally {
      setBusy(false);
    }
  };

  const handleDownload = async () => {
    try {
      setBusy(true);
      const result = await generateImage();
      if (!result) return;
      const link = document.createElement("a");
      link.href = result.dataUrl;
      link.download = "my-age-card.png";
      link.click();
    } catch (err) {
      console.error("Download failed", err);
    } finally {
      setBusy(false);
    }
  };

  // Tile shared style
  const tileBase: React.CSSProperties = {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "14px",
    padding: "14px 16px",
  };

  const valueStyle: React.CSSProperties = {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "26px",
    lineHeight: 1.1,
    color: "#fdf6ec",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "10px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    opacity: 0.65,
    marginTop: "6px",
  };

  return (
    <div className="mt-10">
      <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
        <div
          ref={cardRef}
          style={{
            width: "100%",
            maxWidth: "440px",
            margin: "0 auto",
            background: "linear-gradient(165deg, #4a1d0a 0%, #7a2e10 45%, #c45a25 100%)",
            color: "#fdf6ec",
            padding: "32px 26px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {/* Header: name · dob */}
          <div>
            <div style={{ fontSize: "15px", fontWeight: 700, opacity: 0.9 }}>
              {displayName} · <span style={{ fontWeight: 400, opacity: 0.8 }}>{dobFormatted}</span>
            </div>
            <div
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "78px",
                lineHeight: 1,
                marginTop: "10px",
                color: "#fdf6ec",
              }}
            >
              {years}
            </div>
            <div
              style={{
                fontSize: "14px",
                opacity: 0.75,
                marginTop: "6px",
              }}
            >
              years on this planet
            </div>
          </div>

          {/* Quote */}
          <div
            style={{
              borderLeft: "3px solid #e8a464",
              paddingLeft: "12px",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontStyle: "italic",
                fontSize: "16px",
                color: "#e8a464",
                lineHeight: 1.4,
              }}
            >
              "{moodLine}"
            </div>
          </div>

          {/* 2x2 Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            <div style={tileBase}>
              <div style={valueStyle}>{heartBeatsStr}</div>
              <div style={labelStyle}>Heartbeats</div>
            </div>
            <div style={tileBase}>
              <div style={valueStyle}>{fullMoons.toLocaleString()}</div>
              <div style={labelStyle}>Full Moons</div>
            </div>
            <div style={tileBase}>
              <div style={valueStyle}>{totalDays.toLocaleString()}</div>
              <div style={labelStyle}>Days Alive</div>
            </div>
            <div style={tileBase}>
              <div style={valueStyle}>
                {nextBirthdayDays === 0 ? "🎂" : nextBirthdayDays}
              </div>
              <div style={labelStyle}>To Birthday</div>
            </div>
          </div>

          {/* Generation */}
          <div style={tileBase}>
            <div
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "20px",
                color: "#fdf6ec",
              }}
            >
              {generationName}
            </div>
            <div style={{ fontSize: "12px", opacity: 0.7, marginTop: "4px" }}>
              {generationTagline}
            </div>
          </div>

          {/* Famous birthday */}
          {famousName && (() => {
            const initials = famousName
              .split(/\s+/)
              .filter(Boolean)
              .slice(0, 2)
              .map((w) => w[0]?.toUpperCase() ?? "")
              .join("");
            return (
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "9999px",
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    color: "#fdf6ec",
                    flexShrink: 0,
                  }}
                >
                  {initials}
                </div>
                <div style={{ fontSize: "13px", lineHeight: 1.35 }}>
                  <div style={{ fontWeight: 700, color: "#fdf6ec" }}>{famousName}</div>
                  <div style={{ opacity: 0.7 }}>Born on the same day</div>
                </div>
              </div>
            );
          })()}

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background: "rgba(255,255,255,0.1)",
              margin: "2px 0",
            }}
          />

          {/* Curiosity hook */}
          <div>
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#e8a464",
                marginBottom: "10px",
              }}
            >
              Your Numbers?
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              <div style={tileBase}>
                <div
                  style={{
                    ...valueStyle,
                    color: "transparent",
                    textShadow: "0 0 14px rgba(253,246,236,0.65)",
                    userSelect: "none",
                  }}
                >
                  ████
                </div>
                <div style={labelStyle}>Heartbeats</div>
              </div>
              <div style={tileBase}>
                <div
                  style={{
                    ...valueStyle,
                    color: "transparent",
                    textShadow: "0 0 14px rgba(253,246,236,0.65)",
                    userSelect: "none",
                  }}
                >
                  ██████
                </div>
                <div style={labelStyle}>Full Moons</div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div style={{ marginTop: "4px", fontSize: "13px" }}>
            <span style={{ color: "#e8a464" }}>Find out →</span>{" "}
            <span style={{ fontWeight: 700, color: "#fdf6ec" }}>whatismyage.me</span>
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <button
          onClick={handleShare}
          disabled={busy}
          className="flex items-center justify-center gap-2 rounded-lg bg-primary py-3 font-semibold text-primary-foreground hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-60"
        >
          <Share2 className="h-4 w-4" />
          {busy ? "Preparing..." : "Share with friends"}
        </button>
        <button
          onClick={handleDownload}
          disabled={busy}
          className="flex items-center justify-center gap-2 rounded-lg border border-input bg-card py-3 font-semibold text-foreground hover:bg-secondary transition-all disabled:opacity-60"
        >
          <Download className="h-4 w-4" />
          Save card
        </button>
      </div>


      {/* Compare with a friend */}
      <div className="mt-8 rounded-xl border border-border bg-card/50 p-5 text-center">
        <div className="font-display text-lg text-foreground mb-1">
          Want to compare with a friend?
        </div>
        <button
          onClick={() => {
            const el = document.getElementById("dob");
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "center" });
              (el as HTMLInputElement).focus();
            }
          }}
          className="text-sm text-primary hover:underline"
        >
          Enter their birthday →
        </button>
      </div>

      {/* Return nudge */}
      <div className="mt-4 text-center text-sm text-muted-foreground">
        🎂 Come back on your birthday for your personalised year ahead.
      </div>

      {/* Privacy line */}
      <p className="mt-6 text-center text-xs text-muted-foreground/70">
        🔒 We don't store your name or date of birth.
      </p>
    </div>
  );
};

export default ShareCard;
