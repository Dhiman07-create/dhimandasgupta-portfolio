// GitHub Pages is static hosting with no server-side rewrites, but this app
// uses react-router's BrowserRouter with clean URLs (e.g.
// /projects/playwright-automation). Without this step, a direct visit or a
// search-engine crawl of that URL 404s, since there is no physical file at
// that path - only client-side routing from within an already-loaded page
// can reach it.
//
// Fix: duplicate the built index.html into a real directory for each known
// route, so GitHub Pages serves it with a normal 200 status. The same React
// app boots there and react-router renders the matching page from the URL.
// A generic 404.html (same content) is also added as a catch-all for any
// other/unknown path, so at least the app shell renders instead of GitHub's
// default 404 page.

import { cpSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");
const indexPath = join(distDir, "index.html");

const routes = [
  "projects/playwright-automation",
  "projects/flipkart-automation",
  "projects/ecommerce-api-automation",
];

for (const route of routes) {
  const outDir = join(distDir, route);
  mkdirSync(outDir, { recursive: true });
  cpSync(indexPath, join(outDir, "index.html"));
}

cpSync(indexPath, join(distDir, "404.html"));

console.log(
  `postbuild: created static entry points for ${routes.length} route(s) + 404.html fallback`
);
