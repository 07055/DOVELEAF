const markdownModules = import.meta.glob('../content/blog/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
});

function calculateReadingTime(text) {
    const wordsPerMinute = 200;
    const wordCount = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
}

function slugFromPath(path) {
    const fileName = path.split('/').pop();
    return fileName.replace(/\.md$/, '');
}

function parseFrontmatter(raw) {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (!match) return { data: {}, content: raw };

    const yamlLines = match[1].split('\n');
    const data = {};

    for (const line of yamlLines) {
        const colonIdx = line.indexOf(':');
        if (colonIdx === -1) continue;

        const key = line.slice(0, colonIdx).trim();
        let value = line.slice(colonIdx + 1).trim();

        if (
            (value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))
        ) {
            value = value.slice(1, -1);
        }

        if (key) data[key] = value;
    }

    return { data, content: match[2] };
}

function parsePost(path, rawContent) {
    const slug = slugFromPath(path);

    const { data, content } = parseFrontmatter(rawContent);

    const body = content.trim();
    const wordCount = body.split(/\s+/).length;

    return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        dateModified: data.dateModified || data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        coverImage: data.coverImage || '',
        author: data.author || 'Garment Care Team',
        readingTime: data.readingTime || calculateReadingTime(body),
        wordCount,
        body,
    };
}

const parsedPosts = Object.entries(markdownModules).map(([path, content]) =>
    parsePost(path, content)
);

const sortedPosts = parsedPosts.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
);

const slugMap = new Map(sortedPosts.map((post) => [post.slug, post]));

export function getAllPosts() {
    return sortedPosts;
}

export function getPostBySlug(slug) {
    return slugMap.get(slug) || null;
}

export function getAllSlugs() {
    return sortedPosts.map((post) => post.slug);
}
