// Post-build SSR prerender:
// 1. Bundles src/entry-server.tsx into a single ESM file with esbuild (fast, in-process).
// 2. For each route, runs render(url) to produce article HTML.
// 3. Writes static dist/<route>/index.html with content baked into <div id="root">…</div>
//    plus per-route <head> meta (canonical / OG / Twitter / JSON-LD).
//
// React still hydrates client-side, so interactivity works exactly as before —
// but crawlers and static fetchers now see the full article text immediately.
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, resolve } from "path";
import { existsSync, mkdirSync, readFileSync, writeFileSync, rmSync } from "fs";
import { build } from "esbuild";
import { injectRouteMeta } from "./route-meta.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const distDir = resolve(root, "dist");
const ssrOut = resolve(root, ".ssr-tmp/entry-server.mjs");

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

async function bundleSSR() {
  console.log("[prerender] Bundling SSR entry with esbuild…");
  await build({
    entryPoints: [resolve(root, "src/entry-server.tsx")],
    bundle: true,
    outfile: ssrOut,
    platform: "node",
    format: "esm",
    target: "node18",
    jsx: "automatic",
    logLevel: "warning",
    // Stub out asset imports that would fail under Node
    loader: {
      ".css": "empty",
      ".png": "empty",
      ".jpg": "empty",
      ".jpeg": "empty",
      ".webp": "empty",
      ".svg": "empty",
      ".gif": "empty",
    },
    alias: {
      "@": resolve(root, "src"),
    },
    // Mark nothing as external — bundle everything for a self-contained SSR module
    define: {
      "process.env.NODE_ENV": JSON.stringify("production"),
      "import.meta.env.DEV": "false",
      "import.meta.env.PROD": "true",
      "import.meta.env.MODE": JSON.stringify("production"),
      "import.meta.env.VITE_SUPABASE_URL": JSON.stringify(process.env.VITE_SUPABASE_URL || ""),
      "import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY": JSON.stringify(process.env.VITE_SUPABASE_PUBLISHABLE_KEY || ""),
      "import.meta.env.VITE_SUPABASE_PROJECT_ID": JSON.stringify(process.env.VITE_SUPABASE_PROJECT_ID || ""),
    },
  });
}

async function run() {
  if (!existsSync(distDir)) {
    console.error("[prerender] dist/ not found — run vite build first");
    process.exit(1);
  }

  await bundleSSR();
  const { render } = await import(pathToFileURL(ssrOut).href);

  const template = readFileSync(resolve(distDir, "index.html"), "utf-8");

  for (const route of ROUTES) {
    let body = "";
    try {
      body = render(route);
    } catch (err) {
      console.warn(`[prerender] ! render failed for ${route}: ${err?.message || err}`);
      body = "";
    }

    let html = injectRouteMeta(template, route);

    // Inject SSR HTML into the root div so crawlers see the full article.
    html = html.replace(
      /<div\s+id=["']root["']\s*><\/div>/i,
      `<div id="root">${body}</div>`,
    );

    const outPath =
      route === "/"
        ? resolve(distDir, "index.html")
        : resolve(distDir, route.replace(/^\//, ""), "index.html");

    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, "utf-8");
    console.log(`[prerender] ✓ ${route}  (${(body.length / 1024).toFixed(1)} KB)`);
  }

  // Clean up SSR temp dir
  try {
    rmSync(resolve(root, ".ssr-tmp"), { recursive: true, force: true });
  } catch {}

  console.log("[prerender] Done.");
}

run().catch((err) => {
  console.error("[prerender] Fatal:", err);
  process.exit(1);
});
