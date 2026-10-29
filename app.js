/* =========================================================
   AGI Intelligence Dashboard — 7 Columns Logic
   ========================================================= */

const $ = (s) => document.querySelector(s);

// ---------- COL 2 : MARKET ----------
const STARTUPS = [
  { name: "OpenAI",    val: "$157B" },
  { name: "Anthropic", val: "$60B"  },
  { name: "xAI",       val: "$50B"  },
  { name: "Perplexity",val: "$9B"   },
  { name: "Mistral",   val: "$6B"   },
  { name: "Cohere",    val: "$5.5B" },
];

const FUNDING = [
  { c: "OpenAI",     a: "$6.6B", r: "Series F" },
  { c: "Anthropic",  a: "$4B",   r: "Series E" },
  { c: "xAI",        a: "$6B",   r: "Series C" },
  { c: "Mistral",    a: "$640M", r: "Series B" },
  { c: "Sarvam AI",  a: "$41M",  r: "Series A" },
];

const BIG_TECH = [
  { name: "Nvidia",    val: "$3.4T" },
  { name: "Microsoft", val: "$3.1T" },
  { name: "Apple",     val: "$3.5T" },
  { name: "Google",    val: "$2.4T" },
  { name: "Meta",      val: "$1.6T" },
];

const INDIAN = [
  { name: "Krutrim",   val: "$1B" },
  { name: "Sarvam AI", val: "$300M+" },
  { name: "Glance AI", val: "$2B" },
  { name: "Haptik",    val: "$250M" },
];

// ---------- COL 3 : BUILDERS ----------
const BUILDERS = [
  { name: "Pieter Levels", prod: "PhotoAI",    rev: "$200K/mo", stack: ["PHP", "JS", "SQLite"] },
  { name: "Marc Lou",      prod: "ShipFast",   rev: "$100K/mo", stack: ["Next.js", "Supabase"] },
  { name: "Tony Dinh",     prod: "TypingMind", rev: "$40K/mo",  stack: ["React", "Firebase"] },
  { name: "Damon Chen",    prod: "PDF.ai",     rev: "$50K/mo",  stack: ["Next.js", "GPT-4"] },
  { name: "Yuki",          prod: "Pic Copilot",rev: "$30K/mo",  stack: ["Vue", "Claude"] },
];

// ---------- COL 4 : MODELS ----------
const MODELS = [
  { name: "GPT-4o-mini",      in: "$0.15", out: "$0.60", best: "Coding" },
  { name: "Claude 3.5 Haiku", in: "$0.25", out: "$1.25", best: "Writing" },
  { name: "Gemini 1.5 Flash", in: "$0.075",out: "$0.30", best: "Bulk · Speed" },
  { name: "Llama 3.1 8B",     in: "Free*", out: "Free*", best: "Self-host" },
  { name: "DeepSeek V2",      in: "$0.14", out: "$0.28", best: "Reasoning" },
];

// ---------- COL 5 : CHINA ----------
const CHINA_PLAYERS = [
  { name: "DeepSeek",    note: "V3/R1 models rival GPT-4 at 1/10 cost" },
  { name: "Alibaba (Qwen)", note: "Qwen 2.5 — top open-weight family" },
  { name: "ByteDance (Doubao)", note: "Cheapest LLM API in market" },
  { name: "Baidu (Ernie)", note: "Ernie 4.0 — enterprise push" },
  { name: "Moonshot AI (Kimi)", note: "$1.3B raised, long-context king" },
  { name: "Zhipu AI (GLM)", note: "GLM-4 — strong multilingual" },
];

const CHINA_MODELS = [
  { name: "DeepSeek V3",  note: "671B MoE — GPT-4o level" },
  { name: "Qwen 2.5-Max", note: "Open weights, top MMLU" },
  { name: "Doubao 1.5 Pro", note: "Cheapest at scale" },
  { name: "GLM-4-Plus",    note: "Strong reasoning" },
];

const CHINA_NOTES = [
  { name: "Open-source dominance", note: "60%+ of global open-weight models" },
  { name: "Govt backing", note: "$150B+ state AI fund" },
  { name: "Compute push", note: "Huawei Ascend chips replacing Nvidia" },
  { name: "Data advantage", note: "Massive mobile/social datasets" },
];

// ---------- COL 6 : INDIA ----------
const INDIA_PLAYERS = [
  { name: "Krutrim (Ola)",  note: "$1B unicorn — first Indian LLM" },
  { name: "Sarvam AI",      note: "$41M raised — Indic LLMs" },
  { name: "BharatGPT",      note: "Multilingual chatbot" },
  { name: "Glance AI",      note: "$2B — AI-powered lockscreen" },
  { name: "Observe.AI",     note: "$500M+ AI for contact centers" },
];

const INDIA_GOVT = [
  { name: "IndiaAI Mission", note: "₹10,372 Cr — compute & startups" },
  { name: "AIKosh",          note: "Open dataset platform" },
  { name: "Bhashini",        note: "22 Indian languages translation" },
  { name: "Semiconductor Mission", note: "₹76,000 Cr for chip fabs" },
];

const INDIA_NOTES = [
  { name: "Talent", note: "#3 in global AI talent pool" },
  { name: "Funding gap", note: "Only $1.2B AI funding in 2024" },
  { name: "Model gap", note: "No true frontier model yet" },
  { name: "Momentum", note: "Fastest-growing dev community" },
];

// ---------- COL 7 : USA ----------
const USA_PLAYERS = [
  { name: "OpenAI",    note: "GPT-4o, o1, Sora — market leader" },
  { name: "Anthropic", note: "Claude 3.5 — top safety + reasoning" },
  { name: "Google DeepMind", note: "Gemini 1.5/2.0" },
  { name: "Meta AI",   note: "Llama 3.1 — open-source leader" },
  { name: "xAI",       note: "Grok 2 — fastest iteration" },
];

const USA_BIGTECH = [
  { name: "Nvidia",    note: "$3.4T — 80% AI chip market" },
  { name: "Microsoft", note: "$3.1T — Azure + OpenAI bet" },
  { name: "Apple",     note: "$3.5T — Apple Intelligence" },
  { name: "Google",    note: "$2.4T — TPU + Gemini" },
  { name: "Meta",      note: "$1.6T — Llama + infra" },
];

const USA_NOTES = [
  { name: "Frontier lead", note: "~12-18 months ahead of China" },
  { name: "Capital", note: "$67B private AI funding in 2024" },
  { name: "Compute", note: "Owns ~70% of global AI chips" },
  { name: "Talent", note: "Top universities + immigration" },
];

// ---------- RENDER FUNCTIONS ----------
function renderMarket() {
  $("#valuationList").innerHTML = STARTUPS.map(s => `<li><span>${s.name}</span><span class="val">${s.val}</span></li>`).join("");
  $("#fundingList").innerHTML = FUNDING.map(f => `<li><b>${f.c}</b> — <span class="amt">${f.a}</span> <small style="color:var(--muted)">${f.r}</small></li>`).join("");
  $("#capList").innerHTML = BIG_TECH.map(c => `<li><span>${c.name}</span><span class="val">${c.val}</span></li>`).join("");
  $("#indianList").innerHTML = INDIAN.map(i => `<li><span>${i.name}</span><span class="val">${i.val}</span></li>`).join("");
}

function renderBuilders() {
  $("#buildersGrid").innerHTML = BUILDERS.map(b => `
    <div class="builder-card">
      <div class="name">${b.name}</div>
      <div class="product">${b.prod}</div>
      <span class="revenue">💸 ${b.rev}</span>
      <div class="stack">${b.stack.map(t => `<span>${t}</span>`).join("")}</div>
    </div>
  `).join("");
}

function renderModels() {
  const tb = $("#modelTable tbody");
  tb.innerHTML = MODELS.map((m, i) => `
    <tr>
      <td class="model-name">${m.name}</td>
      <td class="price">${m.in}</td>
      <td class="price">${m.out}</td>
      <td class="best">${m.best}</td>
      <td><button class="copy-btn" data-i="${i}">Copy</button></td>
    </tr>
  `).join("");

  tb.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const m = MODELS[e.target.dataset.i];
      const text = `${m.name} — In: ${m.in}, Out: ${m.out}`;
      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = "✓"; btn.classList.add("copied");
        setTimeout(() => { btn.textContent = "Copy"; btn.classList.remove("copied"); }, 1500);
      });
    });
  });
}

function renderCountryList(id, data, useNote = false) {
  const el = $(id);
  if (!el) return;
  el.innerHTML = data.map(d => 
    useNote ? `<li><b>${d.name}</b><small>${d.note}</small></li>` : `<li><span>${d.name}</span><span class="val">${d.val}</span></li>`
  ).join("");
}

function renderCountries() {
  renderCountryList("#chinaPlayers", CHINA_PLAYERS, true);
  renderCountryList("#chinaModels", CHINA_MODELS, true);
  renderCountryList("#chinaNotes", CHINA_NOTES, true);
  
  renderCountryList("#indiaPlayers", INDIA_PLAYERS, true);
  renderCountryList("#indiaGovt", INDIA_GOVT, true);
  renderCountryList("#indiaNotes", INDIA_NOTES, true);
  
  renderCountryList("#usaPlayers", USA_PLAYERS, true);
  renderCountryList("#usaBigTech", USA_BIGTECH, true);
  renderCountryList("#usaNotes", USA_NOTES, true);
}

// ---------- COL 1 : NEWS ----------
const FALLBACK_NEWS = [
  { source: "OpenAI",         title: "OpenAI releases new reasoning model", time: "Today" },
  { source: "Google DeepMind", title: "Gemini 2.0 Flash brings multimodal reasoning", time: "Today" },
  { source: "Anthropic",       title: "Claude 3.5 family gets extended context", time: "Yesterday" },
  { source: "Meta AI",         title: "Llama 3.2 released with vision", time: "2 days ago" },
  { source: "ArXiv",           title: "New paper: Scaling laws for multimodal models", time: "2 days ago" },
];

function renderNewsItem(n) {
  const time = n.time || new Date().toLocaleString();
  return `
    <div class="news-item" data-searchable="${(n.title + ' ' + n.source).toLowerCase()}">
      <div class="src">${n.source || "AI News"}</div>
      <div class="title">${n.title}</div>
      <div class="time">🕒 ${time}</div>
    </div>
  `;
}

async function fetchNews() {
  const feed = $("#newsFeed");
  feed.innerHTML = `<div class="loader">Fetching news…</div>`;
  try {
    const res = await fetch("/.netlify/functions/news");
    if (!res.ok) throw new Error("API failed");
    const data = await res.json();
    if (!data.items || !data.items.length) throw new Error("Empty");
    feed.innerHTML = data.items.map(renderNewsItem).join("");
    setLastUpdated(data.updated || Date.now());
  } catch (err) {
    feed.innerHTML = FALLBACK_NEWS.map(renderNewsItem).join("");
    setLastUpdated(Date.now());
  }
}

function setLastUpdated(ts) {
  const text = new Date(ts).toLocaleString("en-IN", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
  $("#lastUpdated").textContent = `Updated: ${text}`;
  $("#footerUpdate").textContent = `Last sync: ${text}`;
}

// ---------- SEARCH & INIT ----------
function initSearch() {
  $("#searchInput").addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase().trim();
    document.querySelectorAll(".news-item, .builder-card, .country-list li, #modelTable tbody tr").forEach((el) => {
      const text = el.textContent.toLowerCase() + (el.dataset.searchable || "");
      el.classList.toggle("hidden", !text.includes(q));
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderMarket();
  renderBuilders();
  renderModels();
  renderCountries();
  fetchNews();
  initSearch();
  
  // Refresh button
  document.querySelector(".refresh-btn").addEventListener("click", fetchNews);
  
  // 6-hour auto refresh
  setInterval(fetchNews, 6 * 60 * 60 * 1000);
});
