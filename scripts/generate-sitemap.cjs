const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.doveleaf.co.ke';
const BLOG_DIR = path.join(__dirname, '..', 'src', 'content', 'blog');
const OUTPUT = path.join(__dirname, '..', 'public', 'sitemap.xml');

function parseFrontmatter(raw) {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) return {};
    const data = {};
    for (const line of match[1].split('\n')) {
        const colonIdx = line.indexOf(':');
        if (colonIdx === -1) continue;
        const key = line.slice(0, colonIdx).trim();
        let value = line.slice(colonIdx + 1).trim();
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }
        if (key) data[key] = value;
    }
    return data;
}

const corePages = [
    { loc: '/', changefreq: 'weekly', priority: '1.0' },
    { loc: '/about', changefreq: 'monthly', priority: '0.7' },
    { loc: '/services', changefreq: 'monthly', priority: '0.9' },
    { loc: '/contact', changefreq: 'monthly', priority: '0.6' },
    { loc: '/blog', changefreq: 'weekly', priority: '0.8' },
];

const mdFiles = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));

const blogPages = mdFiles.map(file => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
    const data = parseFrontmatter(raw);
    const slug = file.replace(/\.md$/, '');
    const lastmod = data.dateModified || data.date || new Date().toISOString().split('T')[0];

    return {
        loc: `/blog/${slug}`,
        lastmod,
        changefreq: 'monthly',
        priority: '0.7',
    };
});

const allPages = [...corePages, ...blogPages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(p => `  <url>
    <loc>${SITE_URL}${p.loc}</loc>
    ${p.lastmod ? `<lastmod>${p.lastmod}</lastmod>` : ''}
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(OUTPUT, xml, 'utf8');
console.log(`✅ Sitemap generated: ${allPages.length} URLs (5 core + ${blogPages.length} blog posts)`);
