// Merge results-est-snapshot.json into TestCase_RIG-PS-02_Estimate_Snapshot.csv
// Preserves original CSV structure (multi-line quoted fields).
const fs = require('fs');
const path = require('path');

const CSV_PATH = path.join(__dirname, 'TestCase_RIG-PS-02_Estimate_Snapshot.csv');
const RESULTS  = path.join(__dirname, 'results-est-snapshot.json');
const BAK      = CSV_PATH + '.bak';

const TESTER = 'Boss (DB-validated)';
const TODAY  = '2026-05-21';

const results = JSON.parse(fs.readFileSync(RESULTS, 'utf8'));

function parseCSV(text){
  const rows = [];
  let row=[], cur='', inQ=false;
  for (let i=0;i<text.length;i++){
    const ch=text[i], nx=text[i+1];
    if (inQ){
      if (ch==='"' && nx==='"'){ cur+='"'; i++; }
      else if (ch==='"'){ inQ=false; }
      else cur+=ch;
    } else {
      if (ch==='"') inQ=true;
      else if (ch===',') { row.push(cur); cur=''; }
      else if (ch==='\r') {}
      else if (ch==='\n') { row.push(cur); rows.push(row); row=[]; cur=''; }
      else cur+=ch;
    }
  }
  if (cur.length>0 || row.length>0){ row.push(cur); rows.push(row); }
  return rows;
}
function csvCell(v){
  v=(v??'').toString();
  if (/[",\n\r]/.test(v)) return '"' + v.replace(/"/g,'""') + '"';
  return v;
}
function buildCSV(rows){ return rows.map(r=>r.map(csvCell).join(',')).join('\r\n') + '\r\n'; }

const raw = fs.readFileSync(CSV_PATH, 'utf8');
const rows = parseCSV(raw);

// Strip BOM from first cell of header if present
if (rows[0] && rows[0][0]?.charCodeAt(0) === 0xFEFF){
  rows[0][0] = rows[0][0].slice(1);
}

const header = rows[0];
const colIdx = name => header.findIndex(h => h.trim() === name);
const iId   = colIdx('Test Checklist ID');
const iStat = colIdx('Test Status');
const iBy   = colIdx('Tested By');
const iDate = colIdx('Tested Date(YYYY-MM-DD)');
const iRedm = colIdx('Redmine No.');
const iRem  = colIdx('Remark');

if (iId<0 || iStat<0) throw new Error('Header columns not found: '+JSON.stringify(header));

if (!fs.existsSync(BAK)){
  fs.copyFileSync(CSV_PATH, BAK);
  console.log(`Backup created: ${BAK}`);
}

let updated = 0, missing = [];
for (let i=1; i<rows.length; i++){
  const r = rows[i];
  if (!r || r.length < header.length) continue;
  const id = (r[iId]||'').trim();
  if (!id.startsWith('TC-RIG-PS-02-')) continue;
  const res = results[id];
  if (!res){ missing.push(id); continue; }
  r[iStat] = res.status;
  r[iBy]   = TESTER;
  r[iDate] = TODAY;
  // Don't clobber existing Redmine if any; leave blank if empty
  if (iRem >= 0){
    const existing = r[iRem] || '';
    // Preserve existing free-text tag (last cell typically has a short label) by appending
    r[iRem] = existing ? `${existing} || RESULT: ${res.remark}` : res.remark;
  }
  updated++;
}

// Re-add BOM to first header cell
if (header[0] && header[0].charCodeAt(0) !== 0xFEFF){
  header[0] = '﻿' + header[0];
}

fs.writeFileSync(CSV_PATH, buildCSV(rows));
console.log(`Updated ${updated} rows. Missing IDs: ${missing.length}`);
if (missing.length) console.log(missing.slice(0,20));
