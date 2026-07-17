// Walk the Confluence pagetree starting at root pageId, fetch every descendant.
// Auth via cookies in /tmp/cookies.txt (Netscape format from curl -c).
// Saves: tree.json (id→{title,parent,children}) and raw/<id>.html for every page.

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT_ID = '1086750787';
const HOST = 'wiki.thaisamut.co.th';
const OUT_DIR = path.resolve(__dirname);
const RAW_DIR = path.join(OUT_DIR, 'raw');
if (!fs.existsSync(RAW_DIR)) fs.mkdirSync(RAW_DIR, { recursive: true });

// Parse Netscape cookie file → "k=v; k=v" header
function loadCookies(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const jar = {};
  for (const line of raw.split(/\r?\n/)) {
    if (!line || line.startsWith('#')) {
      // keep HttpOnly lines (curl writes them with "#HttpOnly_" prefix)
      if (!line.startsWith('#HttpOnly_')) continue;
    }
    const stripped = line.replace(/^#HttpOnly_/, '');
    const parts = stripped.split('\t');
    if (parts.length < 7) continue;
    const [domain, , , , , name, value] = parts;
    if (domain.includes(HOST)) jar[name] = value;
  }
  return Object.entries(jar).map(([k, v]) => `${k}=${v}`).join('; ');
}

const COOKIE = loadCookies(path.join(__dirname, 'cookies.txt'));
console.error('cookies loaded:', COOKIE.slice(0, 60), '...');

function get(urlPath) {
  return new Promise((resolve, reject) => {
    const req = http.request({
      host: HOST, port: 80, path: urlPath, method: 'GET',
      headers: {
        Cookie: COOKIE,
        'User-Agent': 'Mozilla/5.0 wiki-dump',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    }, res => {
      const bufs = [];
      res.on('data', c => bufs.push(c));
      res.on('end', () => resolve({
        status: res.statusCode,
        headers: res.headers,
        body: Buffer.concat(bufs).toString('utf8'),
      }));
    });
    req.on('error', reject);
    req.end();
  });
}

// pagetree naturalchildren returns small HTML <ul><li><a href="...pageId=N">title</a></li>...</ul>
async function getChildren(pageId) {
  const url = `/plugins/pagetree/naturalchildren.action?excerpt=false&sort=position&reverse=false&disableLinks=false&expandCurrent=true&hasRoot=true&pageId=${pageId}&treeId=0&startDepth=0`;
  const r = await get(url);
  if (r.status !== 200) {
    console.error(`children ${pageId}: HTTP ${r.status}`);
    return [];
  }
  const out = [];
  const re = /pageId=(\d+)[^>]*>([^<]+)</g;
  let m;
  while ((m = re.exec(r.body)) !== null) {
    out.push({ id: m[1], title: m[2].replace(/&amp;/g, '&').trim() });
  }
  return out;
}

async function fetchPage(pageId) {
  const url = `/pages/viewpage.action?pageId=${pageId}`;
  const r = await get(url);
  return r;
}

function decodeNumericEntities(s) {
  return s.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(parseInt(n, 10)))
          .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ');
}

(async () => {
  const tree = {};               // id → {title, parent, children:[ids]}
  const queue = [{ id: ROOT_ID, parent: null, title: 'รายงาน R' }];
  const seen = new Set();

  // BFS via pagetree to enumerate all descendants
  while (queue.length) {
    const node = queue.shift();
    if (seen.has(node.id)) continue;
    seen.add(node.id);
    tree[node.id] = { title: node.title, parent: node.parent, children: [] };
    const kids = await getChildren(node.id);
    for (const k of kids) {
      tree[node.id].children.push(k.id);
      if (!seen.has(k.id)) queue.push({ id: k.id, parent: node.id, title: k.title });
    }
    console.error(`tree: ${node.id} "${node.title}" → ${kids.length} children`);
  }

  fs.writeFileSync(path.join(OUT_DIR, 'tree.json'), JSON.stringify(tree, null, 2), 'utf8');

  // Fetch HTML for every page
  const ids = Object.keys(tree);
  console.error(`\nfetching HTML for ${ids.length} pages...`);
  let i = 0;
  for (const id of ids) {
    i++;
    const r = await fetchPage(id);
    if (r.status !== 200) {
      console.error(`[${i}/${ids.length}] ${id}: HTTP ${r.status}`);
      continue;
    }
    fs.writeFileSync(path.join(RAW_DIR, `${id}.html`), r.body, 'utf8');
    // Also extract <title> for verification + update tree
    const tm = r.body.match(/<title[^>]*>([^<]+)<\/title>/);
    const pageTitle = tm ? decodeNumericEntities(tm[1]).replace(/\s*-\s*Quality Assurance.*$/, '').trim() : '';
    if (pageTitle && pageTitle !== tree[id].title) {
      tree[id].pageTitle = pageTitle;
    }
    console.error(`[${i}/${ids.length}] ${id}: ${(r.body.length/1024).toFixed(1)}KB  "${pageTitle || tree[id].title}"`);
  }

  fs.writeFileSync(path.join(OUT_DIR, 'tree.json'), JSON.stringify(tree, null, 2), 'utf8');
  console.error('\nDone. tree.json + raw/*.html written to', OUT_DIR);
})().catch(e => { console.error('FATAL', e); process.exit(1); });
