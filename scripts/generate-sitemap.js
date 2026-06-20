import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your routes/anchors here. Easily expandable to actual page paths.
const BASE_URL = 'https://endrohex.com';
const routes = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/#about', changefreq: 'monthly', priority: 0.8 },
  { path: '/#services', changefreq: 'monthly', priority: 0.9 },
  { path: '/#kyd', changefreq: 'monthly', priority: 0.7 },
  { path: '/#pricing', changefreq: 'monthly', priority: 0.8 },
  { path: '/#projects', changefreq: 'weekly', priority: 0.9 },
  { path: '/#testimonials', changefreq: 'monthly', priority: 0.6 },
  { path: '/#faq', changefreq: 'monthly', priority: 0.5 },
  { path: '/#contact', changefreq: 'monthly', priority: 0.9 },
];

function generateSitemap() {
  const date = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  routes.forEach(route => {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${date}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority.toFixed(1)}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>\n`;

  // Path to save: in public/ (for dev/source control) and dist/ (for build output)
  const publicDir = path.resolve(__dirname, '../public');
  const distDir = path.resolve(__dirname, '../dist');

  const publicSitemapPath = path.join(publicDir, 'sitemap.xml');
  const distSitemapPath = path.join(distDir, 'sitemap.xml');

  // Write to public folder
  try {
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    fs.writeFileSync(publicSitemapPath, xml, 'utf8');
    console.log(`✅ Sitemap successfully written to: ${publicSitemapPath}`);
  } catch (err) {
    console.error(`❌ Error writing sitemap to public folder:`, err);
  }

  // Write to dist folder (only if dist folder exists from vite build)
  try {
    if (fs.existsSync(distDir)) {
      fs.writeFileSync(distSitemapPath, xml, 'utf8');
      console.log(`✅ Sitemap successfully copied to: ${distSitemapPath}`);
    }
  } catch (err) {
    console.error(`❌ Error writing sitemap to dist folder:`, err);
  }
}

generateSitemap();
