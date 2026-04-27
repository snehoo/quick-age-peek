// Post-build step: generates static HTML for each route by copying dist/index.html
// and injecting per-route canonical/OG/Twitter/JSON-LD tags into <head>.
// This is intentionally lightweight (no SSR Vite build) to stay within build time limits.
// React still hydrates client-side and renders the actual content.
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { injectRouteMeta } from "./route-meta.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const distDir = resolve(root, "dist");

const ROUTES = [
  "/",
  "/blog",
  "/blog/how-many-heartbeats-in-a-lifetime",
  "/blog/how-many-full-moons-in-a-lifetime",
  "/blog/what-generation-am-i",
  "/blog/how-to-calculate-age-in-days",
  "/blog/what-is-a-life-clock",
  "/blog/what-day-of-the-week-was-i-born",
  "/blog/how-many-seconds-old-am-i",
  "/blog/birthday-twins-famous-people-born-on-your-birthday",
  "/blog/how-to-find-your-zodiac-sign-by-birth-date",
  "/blog/what-does-days-to-birthday-mean",
  "/privacy",
];

function run() {
  if (!existsSync(distDir)) {
    console.error("[prerender] dist/ not found — run vite build first");
    process.exit(1);
  }

  const template = readFileSync(resolve(distDir, "index.html"), "utf-8");

  for (const route of ROUTES) {
    const html = injectRouteMeta(template, route);

    const outPath =
      route === "/"
        ? resolve(distDir, "index.html")
        : resolve(distDir, route.replace(/^\//, ""), "index.html");

    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, "utf-8");
    console.log(`[prerender] ✓ ${route}`);
  }

  console.log("[prerender] Done.");
}

try {
  run();
} catch (err) {
  console.error("[prerender] Fatal:", err);
  process.exit(1);
}
