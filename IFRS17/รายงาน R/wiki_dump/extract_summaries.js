// For every R0X page: extract a clean, text-only summary from the raw HTML by
// dropping images/attachments, decoding entities, and trimming to the first
// ~3000 chars of content from <div id="main-content">.
// Output: summaries.md — one section per page.

const fs = require('fs');
const path = require('path');

const OUT_DIR = __dirname;
const RAW_DIR = path.join(OUT_DIR, 'raw');
const tree = JSON.parse(fs.readFileSync(path.join(OUT_DIR, 'tree.json'), 'utf8'));

function decode(s) {
  return s.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
          .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
          .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'")
          .replace(/&#39;/g, "'");
}

function extractMain(html) {
  const m = html.match(/<div[^>]*id="main-content"[^>]*>([\s\S]*)/i);
  if (!m) return html;
  // crude: cut at the trailing breadcrumbs/footer
  let s = m[1];
  const end = s.search(/<div[^>]*id="footer"|<div[^>]*class="page-metadata"/i);
  if (end > 0) s = s.slice(0, end);
  return s;
}

// Navigation chrome lines we never want to see in a content digest.
const NOISE = new Set([
  'Linked ApplicationsLoading…', 'Linked ApplicationsLoading&hellip;',
  'Spaces','People','Browse','Pages','Blog','Labels','Space Operations','Create',
  'Quick Search','Help','Online Help','Keyboard Shortcuts','Feed Builder',
  "What's new","What’s new",'Available Gadgets','About Confluence','Update Status…',
  'Add Personal Space…','Recently Viewed','Profile','Settings','Network','Status Updates',
  'Favourites','Watches','Drafts','Atlassian Marketplace','Log Out',
  'Edit','Watch','Share','Add','Page','Page from template','Blog Post','Comment','Attachment',
  'Tools','Page History','Restrictions','Favourite','Page Information','Link to this Page…',
  'View in Hierarchy','View Source','Export to PDF','Export to Word','Import Word Document',
  'Copy','Move','Home','Current Version','No labels','Edit Labels','Loading the Editor',
  'Write a comment…','Add Comment','Overview','Content Tools','Permalink','Reply',
  'Skip to end of metadata','Go to start of metadata','…',
]);
function htmlToText(html) {
  // Drop images, scripts, styles, attachments macros entirely
  html = html.replace(/<img\b[^>]*>/gi, '');
  html = html.replace(/<script\b[\s\S]*?<\/script>/gi, '');
  html = html.replace(/<style\b[\s\S]*?<\/style>/gi, '');
  html = html.replace(/<div\s+class="[^"]*plugin_attachments[^"]*"[^>]*>[\s\S]*?<\/div>/gi, '');
  // Block-level → newline
  html = html.replace(/<\/(p|div|tr|li|h[1-6]|td|th|br)>/gi, '\n');
  html = html.replace(/<br\s*\/?>/gi, '\n');
  html = html.replace(/<(td|th)\b[^>]*>/gi, ' | ');
  html = html.replace(/<[^>]+>/g, '');
  html = decode(html);
  html = html.replace(/\r/g, '').replace(/[ \t]+/g, ' ').replace(/^\s+|\s+$/g, '');
  let lines = html.split('\n').map(l => l.trim()).filter(l => l.length);
  // Strip everything up to "Added by ..." (real content start in Confluence)
  const startIdx = lines.findIndex(l => /^Added by\s/.test(l));
  if (startIdx > 0) lines = lines.slice(startIdx + 1); // drop "Added by..." too
  // Stop at the comments / labels footer
  const endIdx = lines.findIndex(l => /^(No labels|Loading the Editor|Write a comment)/i.test(l));
  if (endIdx > 0) lines = lines.slice(0, endIdx);
  // Drop chrome / nav single-word noise
  lines = lines.filter(l => !NOISE.has(l));
  // Drop standalone "(view change)" timestamps left over
  lines = lines.filter(l => !/^\(view change\)$/i.test(l));
  return lines.join('\n');
}

const order = [
  '1086750787',                                              // main
  '1259799764', '1264025812', '1306854092',                  // sub-categories
];
// R01..R20 sorted by R-number from titles
const rPages = Object.entries(tree)
  .filter(([, v]) => /R\d{2}/.test(v.title))
  .map(([id, v]) => {
    const m = v.title.match(/R(\d{2})/);
    return { id, n: m ? +m[1] : 99, title: v.title };
  })
  .sort((a, b) => a.n - b.n);
for (const r of rPages) order.push(r.id);

const out = ['# รายงาน R — สรุปเนื้อหาแต่ละหน้า', ''];
for (const id of order) {
  if (!tree[id]) continue;
  const title = (tree[id].pageTitle || tree[id].title).replace(/ - โครงการ Accounting Data Warehouse.*$/, '').replace(/ - Quality Assurance.*$/, '').trim();
  const html = fs.readFileSync(path.join(RAW_DIR, `${id}.html`), 'utf8');
  const text = htmlToText(extractMain(html));
  // Trim each page's content to <= 6000 chars for the digest
  const snippet = text.length > 6000 ? text.slice(0, 6000) + '\n…(truncated)' : text;
  out.push(`## ${title}`);
  out.push('');
  out.push(`- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=${id}`);
  out.push(`- total_chars: ${text.length}`);
  out.push('');
  out.push('```');
  out.push(snippet);
  out.push('```');
  out.push('');
}
fs.writeFileSync(path.join(OUT_DIR, 'summaries.md'), out.join('\n'), 'utf8');
console.error('wrote summaries.md', (fs.statSync(path.join(OUT_DIR, 'summaries.md')).size/1024).toFixed(1), 'KB');
