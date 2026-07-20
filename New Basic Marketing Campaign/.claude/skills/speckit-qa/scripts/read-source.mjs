// speckit-qa — upstream-source reader (bundled into mode `crosscheck`, SKILL.md §3.5.b).
//
// Converts a BRD/FRD/UR source document into plain-markdown text so `crosscheck` can ingest it
// without any external dependency. Self-contained: uses only Node built-ins (fs, zlib) — no npm.
//
// Supported inputs:
//   .xlsx  -> one markdown table per worksheet (shared strings + cached formula values resolved,
//             blank cells preserved for column alignment). Charts, styling, merged cells and
//             data-validation dropdowns are NOT reproduced (data-only, same caveat as genxlsx.js).
//   .docx  -> paragraph text (one blank line between paragraphs).
//   .csv / .md / .txt -> passed through unchanged (already text).
//
// Usage:  node scripts/read-source.mjs <input> [output.md]
//   If output is omitted, writes <input>.md next to the source and prints that path.
//
// Notes: a locked/open .xlsx (LibreOffice/Excel lock '.~lock..#') can still be read (we only read
//   bytes), but if parsing fails, ask the user for a CSV/MD export rather than fabricating
//   requirements (crosscheck no-fabrication rule).

import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

const IN = process.argv[2];
let OUT = process.argv[3];
if (!IN) { console.error('usage: node read-source.mjs <input> [output.md]'); process.exit(1); }
if (!fs.existsSync(IN)) { console.error('Source not found: ' + IN); process.exit(1); }
if (!OUT) OUT = IN + '.md';
const ext = path.extname(IN).toLowerCase();

// ---- minimal zip reader (central directory) --------------------------------
function readZipEntries(buf) {
  // locate End Of Central Directory
  let i = buf.length - 22;
  while (i >= 0 && buf.readUInt32LE(i) !== 0x06054b50) i--;
  if (i < 0) throw new Error('not a zip (no EOCD) — is this really an .xlsx/.docx?');
  const cdOff = buf.readUInt32LE(i + 16);
  const cdCount = buf.readUInt16LE(i + 10);
  const entries = new Map();
  let p = cdOff;
  for (let n = 0; n < cdCount; n++) {
    if (buf.readUInt32LE(p) !== 0x02014b50) break;
    const method = buf.readUInt16LE(p + 10);
    const compSize = buf.readUInt32LE(p + 20);
    const nameLen = buf.readUInt16LE(p + 28);
    const extraLen = buf.readUInt16LE(p + 30);
    const cmtLen = buf.readUInt16LE(p + 32);
    const localOff = buf.readUInt32LE(p + 42);
    const name = buf.toString('utf8', p + 46, p + 46 + nameLen);
    entries.set(name, { method, compSize, localOff });
    p += 46 + nameLen + extraLen + cmtLen;
  }
  return entries;
}
function extractEntry(buf, e) {
  // parse local header to find the actual data offset (name/extra lengths can differ from CD)
  const lh = e.localOff;
  if (buf.readUInt32LE(lh) !== 0x04034b50) throw new Error('bad local header');
  const nameLen = buf.readUInt16LE(lh + 26);
  const extraLen = buf.readUInt16LE(lh + 28);
  const dataStart = lh + 30 + nameLen + extraLen;
  const comp = buf.subarray(dataStart, dataStart + e.compSize);
  if (e.method === 0) return comp;                 // stored
  if (e.method === 8) return zlib.inflateRawSync(comp); // deflate
  throw new Error('unsupported compression method ' + e.method);
}
function readXml(buf, entries, name) {
  const e = entries.get(name);
  if (!e) return null;
  return extractEntry(buf, e).toString('utf8');
}

// ---- tiny XML helpers (pragmatic, namespace-agnostic) ----------------------
function decodeEntities(s) {
  return s
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&amp;/g, '&');
}
// concatenate text of every <t> (or <w:t>) inside a chunk
function tText(chunk) {
  const out = [];
  const re = /<(?:\w+:)?t[^>]*>([\s\S]*?)<\/(?:\w+:)?t>/g;
  let m; while ((m = re.exec(chunk)) !== null) out.push(m[1]);
  return decodeEntities(out.join(''));
}
function colRefToIndex(ref) {
  const letters = ref.replace(/[0-9]/g, '').toUpperCase();
  let idx = 0;
  for (const ch of letters) idx = idx * 26 + (ch.charCodeAt(0) - 64);
  return idx - 1;
}
const escCell = s => (s ?? '').replace(/\|/g, '\\|').replace(/\r?\n/g, ' ').trim();

// ---- xlsx ------------------------------------------------------------------
function convertXlsx(buf) {
  const entries = readZipEntries(buf);
  // shared strings
  const shared = [];
  const ss = readXml(buf, entries, 'xl/sharedStrings.xml');
  if (ss) { const re = /<si[^>]*>([\s\S]*?)<\/si>/g; let m; while ((m = re.exec(ss)) !== null) shared.push(tText(m[1])); }
  // workbook sheet order + rIds
  const wb = readXml(buf, entries, 'xl/workbook.xml') || '';
  const rels = readXml(buf, entries, 'xl/_rels/workbook.xml.rels') || '';
  const ridToTarget = {};
  { const re = /<Relationship\b[^>]*\bId="([^"]+)"[^>]*\bTarget="([^"]+)"/g; let m; while ((m = re.exec(rels)) !== null) ridToTarget[m[1]] = m[2]; }
  const sheets = [];
  { const re = /<sheet\b([^>]*)\/?>/g; let m; while ((m = re.exec(wb)) !== null) {
      const attrs = m[1];
      const name = (attrs.match(/\bname="([^"]*)"/) || [])[1] || ('Sheet' + (sheets.length + 1));
      const rid = (attrs.match(/\br:id="([^"]*)"/) || attrs.match(/\bid="([^"]*)"/) || [])[1];
      const target = rid && ridToTarget[rid] ? ridToTarget[rid] : null;
      sheets.push({ name, target });
  } }

  let md = `# Source ingest — ${path.basename(IN)}\n\n`;
  md += 'Worksheets: ' + sheets.map(s => s.name).join(', ') + '\n\n';

  sheets.forEach((s, si) => {
    const entryName = s.target
      ? 'xl/' + s.target.replace(/^\/?xl\//, '').replace(/^\//, '')
      : `xl/worksheets/sheet${si + 1}.xml`;
    md += `## Sheet ${si + 1} — ${s.name}\n\n`;
    const ws = readXml(buf, entries, entryName);
    if (!ws) { md += `_(could not read ${entryName})_\n\n`; return; }

    const rows = [];
    let maxCol = 0;
    const rowRe = /<row\b[^>]*>([\s\S]*?)<\/row>/g; let rm;
    while ((rm = rowRe.exec(ws)) !== null) {
      const cells = {};
      const cellRe = /<c\b([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g; let cm;
      while ((cm = cellRe.exec(rm[1])) !== null) {
        const attrs = cm[1], inner = cm[2] || '';
        const ref = (attrs.match(/\br="([A-Z]+)\d+"/) || [])[1];
        const type = (attrs.match(/\bt="([^"]+)"/) || [])[1];
        const colIdx = ref ? colRefToIndex(ref) : 0;
        let val = '';
        if (type === 's') { const v = (inner.match(/<v>([\s\S]*?)<\/v>/) || [])[1]; const idx = parseInt(v, 10); if (idx >= 0 && idx < shared.length) val = shared[idx]; }
        else if (type === 'inlineStr') { val = tText(inner); }
        else { const v = (inner.match(/<v>([\s\S]*?)<\/v>/) || [])[1]; if (v != null) val = decodeEntities(v); }
        cells[colIdx] = val;
        if (colIdx > maxCol) maxCol = colIdx;
      }
      rows.push(cells);
    }
    if (rows.length === 0) { md += '_(empty sheet)_\n\n'; return; }

    let header = false;
    for (const cells of rows) {
      const line = [];
      for (let ci = 0; ci <= maxCol; ci++) line.push(escCell(cells[ci]));
      if (!line.join('')) continue; // skip fully-blank rows
      md += '| ' + line.join(' | ') + ' |\n';
      if (!header) { md += '| ' + Array(maxCol + 1).fill('---').join(' | ') + ' |\n'; header = true; }
    }
    md += '\n';
  });
  return md;
}

// ---- docx ------------------------------------------------------------------
function convertDocx(buf) {
  const entries = readZipEntries(buf);
  const doc = readXml(buf, entries, 'word/document.xml');
  if (!doc) throw new Error('word/document.xml not found');
  let md = `# Source ingest — ${path.basename(IN)}\n\n`;
  const re = /<w:p\b[^>]*>([\s\S]*?)<\/w:p>/g; let m;
  while ((m = re.exec(doc)) !== null) { const t = tText(m[1]).trim(); if (t) md += t + '\n\n'; }
  return md;
}

// ---- dispatch --------------------------------------------------------------
let content;
if (ext === '.xlsx') content = convertXlsx(fs.readFileSync(IN));
else if (ext === '.docx') content = convertDocx(fs.readFileSync(IN));
else if (['.csv', '.md', '.txt'].includes(ext)) content = fs.readFileSync(IN, 'utf8');
else { console.error(`Unsupported source type '${ext}'. Supported: .xlsx .docx .csv .md .txt`); process.exit(1); }

const outDir = path.dirname(OUT);
if (outDir && !fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(OUT, content, 'utf8');
console.log(OUT);
