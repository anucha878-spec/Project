// Convert rcc-pages.json (captured via Playwright, authenticated browser fetch of
// EDW-RCC-SD001 pageId=937132119 + all its hyperlinks & child pages) into
// raw HTML + markdown under wiki_dump/rcc_screen/. Reuses the html2md converter logic.

const fs = require('fs');
const path = require('path');

// Usage: node build_rcc_screen.js [sourceJson] [outSubdir]
//   defaults: rcc-pages.json -> rcc_screen
const ROOT = path.join(__dirname, '..');
const SRC_NAME = process.argv[2] || 'rcc-pages.json';
const OUT_SUB = process.argv[3] || 'rcc_screen';
const SRC = [path.join(ROOT, SRC_NAME), path.join(__dirname, SRC_NAME)].find(fs.existsSync) || path.join(ROOT, SRC_NAME);
const OUT = path.join(__dirname, OUT_SUB);
const RAW = path.join(OUT, 'raw');
const MD = path.join(OUT, 'md');
for (const d of [OUT, RAW, MD]) if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });

function decode(s) {
  return s.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
          .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
          .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#39;/g, "'");
}
function stripTags(s) { return s.replace(/<[^>]+>/g, ''); }
function inline(s) {
  s = s.replace(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, txt) => {
    const t = stripTags(txt).trim(); if (!t) return '';
    if (href.startsWith('/')) href = 'http://wiki.thaisamut.co.th' + href;
    return `[${t}](${href})`;
  });
  s = s.replace(/<img\b[^>]*src="([^"]+)"[^>]*alt="([^"]*)"[^>]*\/?>/gi,
                (_, src, alt) => `![${alt}](${src.startsWith('/') ? 'http://wiki.thaisamut.co.th' + src : src})`);
  s = s.replace(/<img\b[^>]*src="([^"]+)"[^>]*\/?>/gi,
                (_, src) => `![](${src.startsWith('/') ? 'http://wiki.thaisamut.co.th' + src : src})`);
  s = s.replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, t) => `**${stripTags(t)}**`);
  s = s.replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, t) => `*${stripTags(t)}*`);
  s = s.replace(/<code\b[^>]*>([\s\S]*?)<\/code>/gi, (_, t) => `\`${stripTags(t)}\``);
  s = s.replace(/<br\s*\/?>/gi, '  \n');
  return stripTags(s).replace(/\s+/g, ' ').trim();
}
function tableToMd(tableHtml) {
  const rows = [];
  const trRe = /<tr\b[^>]*>([\s\S]*?)<\/tr>/gi; let trm;
  while ((trm = trRe.exec(tableHtml)) !== null) {
    const cells = []; const cellRe = /<(th|td)\b[^>]*>([\s\S]*?)<\/\1>/gi; let cm;
    while ((cm = cellRe.exec(trm[1])) !== null) cells.push(decode(inline(cm[2])));
    if (cells.length) rows.push(cells);
  }
  if (!rows.length) return '';
  const width = Math.max(...rows.map(r => r.length));
  for (const r of rows) while (r.length < width) r.push('');
  const header = rows[0].map(c => c || ' ').join(' | ');
  const sep = Array(width).fill('---').join(' | ');
  const body = rows.slice(1).map(r => r.map(c => c.replace(/\|/g, '\\|') || ' ').join(' | ')).join('\n');
  return `\n| ${header} |\n| ${sep} |\n${body ? body.split('\n').map(l => `| ${l} |`).join('\n') : ''}\n`;
}
function listToMd(html, ordered) {
  const lines = []; const liRe = /<li\b[^>]*>([\s\S]*?)<\/li>/gi; let m, i = 0;
  while ((m = liRe.exec(html)) !== null) {
    i++; const inner = m[1];
    const nested = inner.match(/<(ul|ol)\b[\s\S]*<\/\1>/i);
    let main = inner, sub = '';
    if (nested) {
      main = inner.slice(0, nested.index);
      sub = '\n' + (nested[1].toLowerCase() === 'ol'
        ? listToMd(nested[0].replace(/^<ol[^>]*>|<\/ol>$/gi, ''), true)
        : listToMd(nested[0].replace(/^<ul[^>]*>|<\/ul>$/gi, ''), false));
      sub = sub.replace(/\n/g, '\n  ');
    }
    const bullet = ordered ? `${i}.` : '-';
    lines.push(`${bullet} ${decode(inline(main))}${sub}`);
  }
  return lines.join('\n');
}
function convert(s) {
  s = s.replace(/<style\b[\s\S]*?<\/style>/gi, '').replace(/<script\b[\s\S]*?<\/script>/gi, '');
  s = s.replace(/<div\s+class="[^"]*\b(panel|aui-message)\b[^"]*"[^>]*>/gi, '\n> ');
  s = s.replace(/<div\b[^>]*class="[^"]*table-wrap[^"]*"[^>]*>/gi, '');
  s = s.replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_, lvl, t) => `\n\n${'#'.repeat(+lvl)} ${decode(inline(t))}\n\n`);
  s = s.replace(/<table\b[\s\S]*?<\/table>/gi, m => tableToMd(m));
  s = s.replace(/<ol\b[^>]*>([\s\S]*?)<\/ol>/gi, (_, inner) => '\n' + listToMd(inner, true) + '\n');
  s = s.replace(/<ul\b[^>]*>([\s\S]*?)<\/ul>/gi, (_, inner) => '\n' + listToMd(inner, false) + '\n');
  s = s.replace(/<pre\b[^>]*>([\s\S]*?)<\/pre>/gi, (_, t) => `\n\n\`\`\`\n${decode(stripTags(t))}\n\`\`\`\n\n`);
  s = s.replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, (_, t) => `\n\n${decode(inline(t))}\n\n`);
  s = s.replace(/<\/?div[^>]*>/gi, '\n');
  s = inline(s); s = decode(s);
  return s.replace(/\r/g, '').replace(/\n{3,}/g, '\n\n').trim();
}

const pages = JSON.parse(fs.readFileSync(SRC, 'utf8'));
const idx = [
  `# ${OUT_SUB} — wiki dump (via Playwright)`,
  '',
  `> ดึงจาก wiki.thaisamut.co.th ผ่าน browser ที่ login แล้ว — source: \`${SRC_NAME}\``,
  `> อัปเดต: ${new Date().toISOString().slice(0,10)} · รวม ${pages.length} หน้า`,
  '',
  '| Tag | pageId | Title | Tables | md |',
  '| --- | --- | --- | --- | --- |',
];
const tree = {};
for (const p of pages) {
  if (p.error) { console.error('SKIP', p.tag, p.error); continue; }
  const wrapped = `<div id="main-content">${p.html}</div>`;
  fs.writeFileSync(path.join(RAW, `${p.id}.html`), wrapped, 'utf8');
  const md = convert(p.html);
  const safe = `${p.tag}__${(p.title||'').replace(/[\\/:*?"<>|]/g, '_')}`.slice(0, 90);
  const fname = `${p.id}__${safe}.md`;
  const front = [
    `# ${p.title}`, '',
    `- tag: **${p.tag}**`,
    `- pageId: \`${p.id}\``,
    `- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=${p.id}`,
    `- tables: ${p.tables}`,
    '', '---', '',
  ].join('\n');
  fs.writeFileSync(path.join(MD, fname), front + md, 'utf8');
  tree[p.id] = { tag: p.tag, title: p.title, tables: p.tables, md: `md/${fname}` };
  idx.push(`| ${p.tag} | ${p.id} | ${p.title} | ${p.tables} | [md](md/${fname}) |`);
  console.error(`ok ${p.tag} -> ${fname} (${(md.length/1024).toFixed(1)}KB)`);
}
fs.writeFileSync(path.join(OUT, 'tree.json'), JSON.stringify(tree, null, 2), 'utf8');
fs.writeFileSync(path.join(OUT, 'INDEX.md'), idx.join('\n'), 'utf8');
console.error(`\nwrote ${Object.keys(tree).length} pages -> ${OUT}`);
