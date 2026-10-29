const FEEDS = [
  { url: "https://openai.com/news/rss.xml",              source: "OpenAI" },
  { url: "https://deepmind.google/blog/rss.xml",          source: "DeepMind" },
  { url: "https://export.arxiv.org/rss/cs.AI",            source: "ArXiv" },
  { url: "https://www.anthropic.com/rss.xml",             source: "Anthropic" },
];

function parseRSS(xml, source) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];
    const title = extractTag(block, "title");
    const link = extractTag(block, "link");
    const pubDate = extractTag(block, "pubDate");
    if (title) {
      items.push({
        title: decodeEntities(stripCDATA(title)),
        link: link ? stripCDATA(link).trim() : "",
        pubDate: pubDate || "",
        source,
        time: pubDate ? new Date(pubDate).toLocaleString("en-IN", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }) : "Recently",
      });
    }
  }
  return items;
}

function extractTag(block, tag) {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const m = block.match(re);
  return m ? m[1] : "";
}
function stripCDATA(s) { return s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim(); }
function decodeEntities(s) {
  return s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/<[^>]+>/g, "");
}

exports.handler = async () => {
  try {
    const results = await Promise.allSettled(
      FEEDS.map(async (f) => {
        const res = await fetch(f.url, { headers: { "User-Agent": "AGI-Dashboard/1.0" } });
        if (!res.ok) throw new Error(`${f.source} failed`);
        return parseRSS(await res.text(), f.source);
      })
    );
    let items = [];
    results.forEach(r => { if (r.status === "fulfilled") items = items.concat(r.value); });
    items.sort((a, b) => new Date(b.pubDate || 0) - new Date(a.pubDate || 0));
    
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=21600" },
      body: JSON.stringify({ items: items.slice(0, 15), updated: Date.now() }),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message, items: [] }) };
  }
};
