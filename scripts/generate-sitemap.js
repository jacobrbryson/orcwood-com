/**
 * Generates src/sitemap.xml from the static route list + games.json.
 * Run with: node scripts/generate-sitemap.js
 * (Also invoked automatically via the prebuild npm script.)
 */
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://orcwood.com';
const games = require('../src/assets/data/games.json');

const today = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/games', priority: '0.9', changefreq: 'weekly' },
  { loc: '/team', priority: '0.7', changefreq: 'monthly' },
];

const gameRoutes = games.map((game) => ({
  loc: `/games/${game.key}`,
  priority: '0.8',
  changefreq: 'monthly',
}));

const urls = [...staticRoutes, ...gameRoutes]
  .map(
    ({ loc, priority, changefreq }) =>
      `  <url>\n` +
      `    <loc>${BASE_URL}${loc}</loc>\n` +
      `    <lastmod>${today}</lastmod>\n` +
      `    <changefreq>${changefreq}</changefreq>\n` +
      `    <priority>${priority}</priority>\n` +
      `  </url>`
  )
  .join('\n');

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  `${urls}\n` +
  `</urlset>\n`;

const allRoutes = [...staticRoutes, ...gameRoutes];

const outPath = path.join(__dirname, '..', 'src', 'sitemap.xml');
fs.writeFileSync(outPath, xml);
console.log(`Wrote ${outPath} with ${allRoutes.length} URLs.`);

// Routes file consumed by the Angular Universal prerender builder.
const routesPath = path.join(__dirname, '..', 'prerender-routes.txt');
fs.writeFileSync(routesPath, allRoutes.map((r) => r.loc).join('\n') + '\n');
console.log(`Wrote ${routesPath} with ${allRoutes.length} routes.`);
