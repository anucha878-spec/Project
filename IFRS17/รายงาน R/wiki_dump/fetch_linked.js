// Second pass: scan downloaded HTML for pageId= links in the page body,
// add any new pages that look related to "รายงาน R", fetch them,
// then walk their pagetree children too. Bounded by a keyword filter on title
// so we don't suck in the whole wiki.

const http = require('http');
const fs = require('fs');
const path = require('path');

const HOST = 'wiki.thaisamut.co.th';
const OUT_DIR = __dirname;
const RAW_DIR = path.join(OUT_DIR, 'raw');
const TREE_FILE = path.join(OUT_DIR, 'tree.json');

// Pages with titles matching these keywords are considered in-scope.
// Anything else linked is skipped (avoid pulling EDW root, other unrelated sections).
const KEEP_KEYWORDS = [
  'รายงาน R', 'R0', 'R01', 'R02', 'R03', 'R04', 'R05',
  'Process การประมวลผล', 'ขั้นตอน', 'IFRS17', 'IFRS 17', 'คปภ', 'รายงานทางคณิตศาสตร์'
];

function loadCookies(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const jar = {};
  for (let line of raw.split(/\r?\n/)) {
    if (!line) continue;
    if (line.startsWith('#') && !line.startsWith('#HttpOnly_')) continue;
    line = line.replace(/^#HttpOnly_/, '');
    const parts = line.split('\t');
    if (parts.length < 7) continue;
    const [domain, , , , , name, value] = parts;
    if (domain.includes(HOST)) jar[name] = value;
  }
  return Object.entries(jar).map(([k, v]) => `${k}=${v}`).join('; ');
}
const COOKIE = loadCookies(path.join(__dirname, 'cookies.txt'));

function get(urlPath) {
  return new Promise((resolve, reject) => {
    const req = http.request({
      host: HOST, port: 80, path: urlPath, method: 'GET',
      headers: { Cookie: COOKIE, 'User-Agent': 'Mozilla/5.0 wiki-dump' },
    }, res => {
      const bufs = [];
      res.on('data', c => bufs.push(c));
      res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(bufs).toString('utf8') }));
    });
    req.on('error', reject);
    req.end();
  });
}

function extractTitle(html) {
  const m = html.match(/<title[^>]*>([^<]+)<\/title>/);
  if (!m) return '';
  return m[1].replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
             .replace(/&amp;/g, '&')
             .replace(/\s*-\s*Quality Assurance.*$/, '')
             .trim();
}

function inScope(title) {
  if (!title) return false;
  return KEEP_KEYWORDS.some(k => title.includes(k));
}

async function getChildren(pageId) {
  const url = `/plugins/pagetree/naturalchildren.action?excerpt=false&sort=position&reverse=false&disableLinks=false&expandCurrent=true&hasRoot=true&pageId=${pageId}&treeId=0&startDepth=0`;
  const r = await get(url);
  if (r.status !== 200) return [];
  const out = [];
  const re = /pageId=(\d+)[^>]*>([^<]+)</g;
  let m;
  while ((m = re.exec(r.body)) !== null) {
    out.push({ id: m[1], title: m[2].replace(/&amp;/g, '&').trim() });
  }
  return out;
}

(async () => {
  const tree = JSON.parse(fs.readFileSync(TREE_FILE, 'utf8'));

  // Step 1: harvest pageIds from raw bodies of every already-downloaded page,
  // but only those inside the main-content area (skip global nav links).
  const candidates = new Set();
  for (const id of Object.keys(tree)) {
    const html = fs.readFileSync(path.join(RAW_DIR, `${id}.html`), 'utf8');
    // Confluence main content is inside <div id="main-content"> ... </div>
    const m = html.match(/<div[^>]*id="main-content"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
    const region = m ? m[0] : html;
    const re = /pageId=(\d+)/g;
    let x;
    while ((x = re.exec(region)) !== null) {
      if (!tree[x[1]]) candidates.add(x[1]);
    }
  }
  console.error(`candidate linked pageIds: ${candidates.size}`);

  // Step 2: fetch each candidate, accept if title is in scope, else skip+log.
  const accepted = [];
  const rejected = [];
  for (const id of candidates) {
    const r = await get(`/pages/viewpage.action?pageId=${id}`);
    if (r.status !== 200) { rejected.push({ id, reason: `HTTP ${r.status}` }); continue; }
    const title = extractTitle(r.body);
    if (!inScope(title)) { rejected.push({ id, title, reason: 'out-of-scope' }); continue; }
    fs.writeFileSync(path.join(RAW_DIR, `${id}.html`), r.body, 'utf8');
    tree[id] = { title, parent: 'linked', children: [] };
    accepted.push({ id, title, size: r.body.length });
    console.error(`+ ${id} "${title}" (${(r.body.length/1024).toFixed(1)}KB)`);
  }
  console.error(`accepted: ${accepted.length}, rejected: ${rejected.length}`);

  // Step 3: for every accepted page, also walk its own pagetree children (in scope).
  const toExpand = accepted.map(a => a.id);
  while (toExpand.length) {
    const id = toExpand.shift();
    const kids = await getChildren(id);
    for (const k of kids) {
      if (tree[k.id]) continue;
      if (!inScope(k.title)) { rejected.push({ id: k.id, title: k.title, reason: 'kid-out-of-scope' }); continue; }
      const r = await get(`/pages/viewpage.action?pageId=${k.id}`);
      if (r.status !== 200) continue;
      fs.writeFileSync(path.join(RAW_DIR, `${k.id}.html`), r.body, 'utf8');
      tree[k.id] = { title: extractTitle(r.body) || k.title, parent: id, children: [] };
      tree[id].children.push(k.id);
      toExpand.push(k.id);
      console.error(`  + child ${k.id} "${k.title}"`);
    }
  }

  fs.writeFileSync(TREE_FILE, JSON.stringify(tree, null, 2), 'utf8');
  fs.writeFileSync(path.join(OUT_DIR, 'rejected.json'), JSON.stringify(rejected, null, 2), 'utf8');
  console.error(`\nfinal page count: ${Object.keys(tree).length}`);
})().catch(e => { console.error('FATAL', e); process.exit(1); });
