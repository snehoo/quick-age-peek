import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Share2, Download } from "lucide-react";

interface ShareCardProps {
  name: string;
  years: number;
  totalDays: number;
  lifeTimeStr: string;
  heartBeatsStr: string;
  nextBirthdayDays: number;
}

const ShareCard = ({
  name,
  years,
  totalDays,
  lifeTimeStr,
  heartBeatsStr,
  nextBirthdayDays,
}: ShareCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);
  const displayName = name.trim() || "I";

  const generateImage = async (): Promise<{ blob: Blob; dataUrl: string } | null> => {
    if (!cardRef.current) return null;
    const dataUrl = await toPng(cardRef.current, {
      pixelRatio: 2,
      cacheBust: true,
      backgroundColor: "#1a1410",
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
      const shareText = `${displayName === "I" ? "I'm" : displayName + " is"} ${years} years old — that's ${totalDays.toLocaleString()} days alive! What's your age? `;
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
        // Fallback: download
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

  return (
    <div className="mt-10">
      {/* Hidden-ish render target — kept on-screen but visually contained */}
      <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
        <div
          ref={cardRef}
          style={{
            width: "100%",
            aspectRatio: "9 / 16",
            maxWidth: "420px",
            margin: "0 auto",
            background:
              "linear-gradient(160deg, #2a1810 0%, #4a1f15 45%, #c8552b 100%)",
            color: "#fdf6ec",
            padding: "36px 28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            fontFamily: "'DM Sans', sans-serif",
            position: "relative",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                opacity: 0.7,
              }}
            >
              What Is My Age
            </div>
            <div
              style={{
                marginTop: "20px",
                fontFamily: "'DM Serif Display', serif",
                fontSize: "26px",
                lineHeight: 1.2,
              }}
            >
              {displayName === "I" ? "My life," : `${displayName}'s life,`}
              <br />
              in numbers.
            </div>
          </div>

          <div style={{ textAlign: "center", margin: "12px 0" }}>
            <div
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "120px",
                lineHeight: 1,
                color: "#fdf6ec",
                textShadow: "0 4px 30px rgba(0,0,0,0.3)",
              }}
            >
              {years}
            </div>
            <div
              style={{
                fontSize: "14px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                opacity: 0.85,
                marginTop: "4px",
              }}
            >
              Years Alive
            </div>
          </div>

          <div
            style={{
              background: "rgba(0,0,0,0.25)",
              borderRadius: "16px",
              padding: "18px 20px",
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "16px",
                lineHeight: 1.4,
                textAlign: "center",
              }}
            >
              If my life were a 24-hour day,
              <br />
              it's currently{" "}
              <span style={{ color: "#ffd9a8" }}>{lifeTimeStr}</span>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "12px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "22px",
                }}
              >
                {totalDays.toLocaleString()}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  opacity: 0.75,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginTop: "2px",
                }}
              >
                Days Alive
              </div>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "12px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "22px",
                }}
              >
                {heartBeatsStr}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  opacity: 0.75,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginTop: "2px",
                }}
              >
                Heartbeats
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "16px",
              fontSize: "11px",
              opacity: 0.6,
              textAlign: "center",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            whatismyage · find yours
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
          {busy ? "Preparing..." : "Share My Age Card"}
        </button>
        <button
          onClick={handleDownload}
          disabled={busy}
          className="flex items-center justify-center gap-2 rounded-lg border border-input bg-card py-3 font-semibold text-foreground hover:bg-secondary transition-all disabled:opacity-60"
        >
          <Download className="h-4 w-4" />
          Download
        </button>
      </div>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        Share on WhatsApp, Twitter, Instagram — wherever your friends are.
      </p>
    </div>
  );
};

export default ShareCard;
