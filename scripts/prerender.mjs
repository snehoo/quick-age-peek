// Post-build prerender: generates static HTML for each blog route so the page
// source contains real content + outgoing links (important for SEO crawlers).
import { build } from "vite";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, resolve } from "path";
import { existsSync, mkdirSync, readFileSync, writeFileSync, rmSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const distDir = resolve(root, "dist");
const ssrOutDir = resolve(root, "dist-ssr");

const ROUTES = [
  "/",
  "/blog",
  "/blog/how-many-heartbeats-in-a-lifetime",
  "/blog/how-many-full-moons-in-a-lifetime",
  "/blog/what-generation-am-i",
  "/blog/how-to-calculate-age-in-days",
  "/blog/what-is-a-life-clock",
  "/privacy",
];

async function run() {
  if (!existsSync(distDir)) {
    console.error("[prerender] dist/ not found — run vite build first");
    process.exit(1);
  }

  console.log("[prerender] Building SSR bundle...");
  await build({
    root,
    logLevel: "warn",
    build: {
      ssr: "src/entry-server.tsx",
      outDir: "dist-ssr",
      emptyOutDir: true,
      rollupOptions: {
        input: resolve(root, "src/entry-server.tsx"),
      },
    },
  });

  const ssrEntry = resolve(ssrOutDir, "entry-server.js");
  if (!existsSync(ssrEntry)) {
    console.error("[prerender] SSR entry not found at", ssrEntry);
    process.exit(1);
  }

  const { render } = await import(pathToFileURL(ssrEntry).href);
  const template = readFileSync(resolve(distDir, "index.html"), "utf-8");

  for (const route of ROUTES) {
    let appHtml = "";
    try {
      appHtml = render(route);
    } catch (err) {
      console.error(`[prerender] Failed to render ${route}:`, err);
      continue;
    }

    const html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`,
    );

    const outPath =
      route === "/"
        ? resolve(distDir, "index.html")
        : resolve(distDir, route.replace(/^\//, ""), "index.html");

    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, "utf-8");
    console.log(`[prerender] ✓ ${route} → ${outPath.replace(distDir, "dist")}`);
  }

  // Cleanup SSR build output
  rmSync(ssrOutDir, { recursive: true, force: true });
  console.log("[prerender] Done.");
}

run().catch((err) => {
  console.error("[prerender] Fatal:", err);
  process.exit(1);
});
