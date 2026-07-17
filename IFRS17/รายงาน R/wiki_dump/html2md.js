// Convert each raw/<id>.html to md/<id>.md, keeping headings, lists, tables, links.
// Confluence main content lives in <div id="main-content">...
// Tables, attachment links, and embedded images are preserved.

const fs = require('fs');
const path = require('path');

const OUT_DIR = __dirname;
const RAW_DIR = path.join(OUT_DIR, 'raw');
const MD_DIR = path.join(OUT_DIR, 'md');
if (!fs.existsSync(MD_DIR)) fs.mkdirSync(MD_DIR, { recursive: true });

const tree = JSON.parse(fs.readFileSync(path.join(OUT_DIR, 'tree.json'), 'utf8'));

function decode(s) {
  return s.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
          .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
          .replace(/&nbsp;/g, ' ')
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .replace(/&apos;/g, "'")
          .replace(/&#39;/g, "'");
}

// Slice out the main-content div by tracking nested <div> depth from the opener.
function extractMain(html) {
  const start = html.search(/<div[^>]*id="main-content"[^>]*>/i);
  if (start < 0) return html;
  const opener = html.match(/<div[^>]*id="main-content"[^>]*>/i)[0];
  let i = start + opener.length;
  let depth = 1;
  const divOpen = /<div\b[^>]*>/gi;
  const divClose = /<\/div\s*>/gi;
  while (depth > 0 && i < html.length) {
    divOpen.lastIndex = i; divClose.lastIndex = i;
    const o = divOpen.exec(html);
    const c = divClose.exec(html);
    if (!c) break;
    if (o && o.index < c.index) { depth++; i = o.index + o[0].length; }
    else { depth--; i = c.index + c[0].length; }
  }
  return html.slice(start + opener.length, i - 6); // drop the final </div>
}

// Inline tag stripper used inside table cells / list items.
function inline(s) {
  s = s.replace(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, txt) => {
    const t = stripTags(txt).trim();
    if (!t) return '';
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

function stripTags(s) { return s.replace(/<[^>]+>/g, ''); }

function tableToMd(tableHtml) {
  // Collect rows. Confluence wraps rows in <tr>...</tr>; cells <th>/<td>.
  const rows = [];
  const trRe = /<tr\b[^>]*>([\s\S]*?)<\/tr>/gi;
  let trm;
  while ((trm = trRe.exec(tableHtml)) !== null) {
    const cells = [];
    const cellRe = /<(th|td)\b[^>]*>([\s\S]*?)<\/\1>/gi;
    let cm;
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
  const lines = [];
  const liRe = /<li\b[^>]*>([\s\S]*?)<\/li>/gi;
  let m, i = 0;
  while ((m = liRe.exec(html)) !== null) {
    i++;
    // Recursively render any nested ul/ol inside the li
    const inner = m[1];
    const nested = inner.match(/<(ul|ol)\b[\s\S]*<\/\1>/i);
    let main = inner, sub = '';
    if (nested) {
      main = inner.slice(0, nested.index);
      sub = '\n' + (nested[1].toLowerCase() === 'ol'
        ? listToMd(nested[0].replace(/^<ol[^>]*>|<\/ol>$/gi, ''), true)
        : listToMd(nested[0].replace(/^<ul[^>]*>|<\/ul>$/gi, ''), false));
      sub = sub.replace(/\n/g, '\n  '); // indent
    }
    const bullet = ordered ? `${i}.` : '-';
    lines.push(`${bullet} ${decode(inline(main))}${sub}`);
  }
  return lines.join('\n');
}

function convert(html) {
  let s = extractMain(html);

  // Drop unsupported macros' chrome but keep their inner content
  s = s.replace(/<style\b[\s\S]*?<\/style>/gi, '');
  s = s.replace(/<script\b[\s\S]*?<\/script>/gi, '');
  // Confluence info/note/warning panels
  s = s.replace(/<div\s+class="[^"]*\b(panel|aui-message)\b[^"]*"[^>]*>/gi, '\n> ');
  s = s.replace(/<div\b[^>]*class="[^"]*table-wrap[^"]*"[^>]*>/gi, '');

  // Headings (block)
  s = s.replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi,
                (_, lvl, t) => `\n\n${'#'.repeat(+lvl)} ${decode(inline(t))}\n\n`);

  // Tables — convert one at a time
  s = s.replace(/<table\b[\s\S]*?<\/table>/gi, m => tableToMd(m));

  // Ordered & unordered lists
  s = s.replace(/<ol\b[^>]*>([\s\S]*?)<\/ol>/gi, (_, inner) => '\n' + listToMd(inner, true) + '\n');
  s = s.replace(/<ul\b[^>]*>([\s\S]*?)<\/ul>/gi, (_, inner) => '\n' + listToMd(inner, false) + '\n');

  // Preformatted code
  s = s.replace(/<pre\b[^>]*>([\s\S]*?)<\/pre>/gi,
                (_, t) => `\n\n\`\`\`\n${decode(stripTags(t))}\n\`\`\`\n\n`);

  // Paragraphs
  s = s.replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, (_, t) => `\n\n${decode(inline(t))}\n\n`);

  // Block divs → newline
  s = s.replace(/<\/?div[^>]*>/gi, '\n');

  // Inline survivors (links/images outside of paragraphs)
  s = inline(s);

  // Tidy whitespace
  s = decode(s);
  s = s.replace(/\r/g, '').replace(/\n{3,}/g, '\n\n').trim();
  return s;
}

// === run ===
const ids = Object.keys(tree);
const indexLines = ['# รายงาน R — wiki dump index', ''];

for (const id of ids) {
  const html = fs.readFileSync(path.join(RAW_DIR, `${id}.html`), 'utf8');
  const md = convert(html);
  const title = (tree[id].pageTitle || tree[id].title || `page-${id}`).trim();
  const safe = title.replace(/[\\/:*?"<>|]/g, '_').slice(0, 80);
  const filename = `${id}__${safe}.md`;
  const front = [
    `# ${title}`,
    '',
    `- pageId: \`${id}\``,
    `- parent: ${tree[id].parent || '-'}`,
    `- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=${id}`,
    '',
    '---',
    '',
  ].join('\n');
  fs.writeFileSync(path.join(MD_DIR, filename), front + md, 'utf8');
  indexLines.push(`- [${title}](md/${filename}) (id=${id})`);
  console.error(`md: ${filename}  (${(md.length/1024).toFixed(1)}KB)`);
}
fs.writeFileSync(path.join(OUT_DIR, 'INDEX.md'), indexLines.join('\n'), 'utf8');
console.error(`\nwrote ${ids.length} markdown files and INDEX.md`);
