// speckit-qa — SIT Test Document .xlsx generator (bundled into `report`, §6 step 7).
// Self-contained: no npm. Parses a Spec-Kit SIT Test Document markdown into an .xlsx workbook
// (one worksheet per "## Sheet N — Name" section; markdown tables become rows).
// Usage:  node scripts/genxlsx.js <input.md> <output.xlsx>
// Notes:  data-only (values + all sheets/cells). Does NOT reproduce charts, dropdown data-validation,
//         cell styling/merge, or column widths from the company template — add those separately if needed.
const fs = require('fs');
const zlib = require('zlib');

const MD = process.argv[2];
const OUT = process.argv[3];
if (!MD || !OUT) { console.error('usage: node genxlsx.js <input.md> <output.xlsx>'); process.exit(1); }
const md = fs.readFileSync(MD, 'utf8');

// ---- parse markdown into sheets ----
const lines = md.split(/\r?\n/);
const sheets = [];
let cur = null, started = false;
const sanitize = s => s.replace(/[\\\/\?\*\[\]:]/g, '').trim().slice(0, 31);
const stripInline = s => s.replace(/\*\*/g, '').replace(/`/g, '').trim();
for (let line of lines) {
  const m = line.match(/^##\s+Sheet\s+\d+\s*[—-]\s*(.+)$/);
  if (m) { cur = { name: sanitize(m[1]), rows: [] }; sheets.push(cur); started = true; continue; }
  if (!started) continue;
  const t = line.trim();
  if (t === '') continue;
  if (/^-{3,}$/.test(t)) continue;                       // hr
  if (t.startsWith('|')) {
    if (/^\|[\s:|-]*\|?$/.test(t) && t.includes('-') && !/[A-Za-zก-๙0-9]/.test(t)) continue; // separator row
    const cells = t.replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => stripInline(c));
    cur.rows.push(cells);
  } else {
    if (/^##\s+/.test(t)) { const h = stripInline(t.replace(/^#+\s*/, '')); cur = { name: sanitize(h) || 'Note', rows: [] }; sheets.push(cur); continue; }
    cur.rows.push([stripInline(t.replace(/^#+\s*/, ''))]);
  }
}
// de-dup worksheet names
const seen = {};
sheets.forEach(s => { let n = s.name || 'Sheet'; let i = 1; while (seen[n.toLowerCase()]) { n = (s.name.slice(0, 28) + '_' + (++i)); } seen[n.toLowerCase()] = 1; s.name = n; });

// ---- XML helpers ----
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const colLetter = i => { let s = ''; i++; while (i) { let r = (i - 1) % 26; s = String.fromCharCode(65 + r) + s; i = (i - r - 1) / 26; } return s; };

function sheetXml(rows) {
  let body = '';
  rows.forEach((r, ri) => {
    let cells = '';
    for (let ci = 0; ci < r.length; ci++) {
      const v = r[ci];
      if (v === undefined || v === '') continue;
      const ref = colLetter(ci) + (ri + 1);
      cells += `<c r="${ref}" t="inlineStr"><is><t xml:space="preserve">${esc(v)}</t></is></c>`;
    }
    body += `<row r="${ri + 1}">${cells}</row>`;
  });
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>${body}</sheetData></worksheet>`;
}

// ---- assemble parts ----
const parts = {};
parts['[Content_Types].xml'] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>${sheets.map((s, i) => `<Override PartName="/xl/worksheets/sheet${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join('')}<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>`;
parts['_rels/.rels'] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`;
parts['xl/workbook.xml'] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>${sheets.map((s, i) => `<sheet name="${esc(s.name)}" sheetId="${i + 1}" r:id="rId${i + 1}"/>`).join('')}</sheets></workbook>`;
parts['xl/_rels/workbook.xml.rels'] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${sheets.map((s, i) => `<Relationship Id="rId${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${i + 1}.xml"/>`).join('')}<Relationship Id="rId${sheets.length + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`;
parts['xl/styles.xml'] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="1"><font><sz val="11"/><name val="Calibri"/></font></fonts><fills count="1"><fill><patternFill patternType="none"/></fill></fills><borders count="1"><border/></borders><cellStyleXfs count="1"><xf/></cellStyleXfs><cellXfs count="1"><xf/></cellXfs></styleSheet>`;
sheets.forEach((s, i) => { parts[`xl/worksheets/sheet${i + 1}.xml`] = sheetXml(s.rows); });

// ---- ZIP writer (deflate) ----
const CRC = (() => { const t = []; for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
function crc32(buf) { let c = 0xFFFFFFFF; for (let i = 0; i < buf.length; i++) c = CRC[(c ^ buf[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
function zip(files) {
  const chunks = []; const central = []; let offset = 0;
  for (const name of Object.keys(files)) {
    const data = Buffer.from(files[name], 'utf8');
    const comp = zlib.deflateRawSync(data);
    const crc = crc32(data);
    const nameB = Buffer.from(name, 'utf8');
    const lh = Buffer.alloc(30);
    lh.writeUInt32LE(0x04034b50, 0); lh.writeUInt16LE(20, 4); lh.writeUInt16LE(0, 6); lh.writeUInt16LE(8, 8);
    lh.writeUInt16LE(0, 10); lh.writeUInt16LE(0, 12); lh.writeUInt32LE(crc, 14);
    lh.writeUInt32LE(comp.length, 18); lh.writeUInt32LE(data.length, 22); lh.writeUInt16LE(nameB.length, 26); lh.writeUInt16LE(0, 28);
    chunks.push(lh, nameB, comp);
    const ch = Buffer.alloc(46);
    ch.writeUInt32LE(0x02014b50, 0); ch.writeUInt16LE(20, 4); ch.writeUInt16LE(20, 6); ch.writeUInt16LE(0, 8); ch.writeUInt16LE(8, 10);
    ch.writeUInt16LE(0, 12); ch.writeUInt16LE(0, 14); ch.writeUInt32LE(crc, 16); ch.writeUInt32LE(comp.length, 20); ch.writeUInt32LE(data.length, 24);
    ch.writeUInt16LE(nameB.length, 28); ch.writeUInt16LE(0, 30); ch.writeUInt16LE(0, 32); ch.writeUInt16LE(0, 34); ch.writeUInt16LE(0, 36);
    ch.writeUInt32LE(0, 38); ch.writeUInt32LE(offset, 42);
    central.push(Buffer.concat([ch, nameB]));
    offset += lh.length + nameB.length + comp.length;
  }
  const cd = Buffer.concat(central);
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0); eocd.writeUInt16LE(0, 4); eocd.writeUInt16LE(0, 6);
  eocd.writeUInt16LE(central.length, 8); eocd.writeUInt16LE(central.length, 10);
  eocd.writeUInt32LE(cd.length, 12); eocd.writeUInt32LE(offset, 16); eocd.writeUInt16LE(0, 20);
  return Buffer.concat([...chunks, cd, eocd]);
}

fs.writeFileSync(OUT, zip(parts));
console.log('WROTE', OUT);
console.log('Sheets:', sheets.map((s, i) => `${i + 1}."${s.name}"(${s.rows.length}r)`).join('  '));
