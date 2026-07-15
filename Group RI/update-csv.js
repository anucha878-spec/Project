// Update TestCase_RIG-PS-01_Landing.csv with results
// Preserves original CSV structure (multi-line quoted fields)
const fs = require('fs');
const path = require('path');

const CSV_PATH = path.join(__dirname, 'TestCase_RIG-PS-01_Landing.csv');
const results = JSON.parse(fs.readFileSync(path.join(__dirname,'results.json')));
const byId = Object.fromEntries(results.map(r=>[r.id, r]));

const TESTER = 'anucha (auto-DB)';
const TODAY  = '2026-05-20';

// Robust CSV parser preserving structure
function parseCSV(text){
  const rows = [];
  let row = [], cur = '', inQ = false;
  for (let i=0; i<text.length; i++){
    const ch = text[i], nx = text[i+1];
    if (inQ){
      if (ch === '"' && nx === '"'){ cur += '"'; i++; }
      else if (ch === '"'){ inQ = false; }
      else { cur += ch; }
    } else {
      if (ch === '"'){ inQ = true; }
      else if (ch === ','){ row.push(cur); cur=''; }
      else if (ch === '\r'){ /* skip */ }
      else if (ch === '\n'){ row.push(cur); rows.push(row); row=[]; cur=''; }
      else { cur += ch; }
    }
  }
  if (cur.length>0 || row.length>0){ row.push(cur); rows.push(row); }
  return rows;
}

function csvCell(v){
  v = (v ?? '').toString();
  if (/[",\n\r]/.test(v)) return '"' + v.replace(/"/g,'""') + '"';
  return v;
}
function buildCSV(rows){
  return rows.map(r=>r.map(csvCell).join(',')).join('\r\n') + '\r\n';
}

const raw = fs.readFileSync(CSV_PATH, 'utf8');
const rows = parseCSV(raw);

const header = rows[0];
const colIdx = name => header.findIndex(h=>h.trim()===name);
const iId   = colIdx('Test Checklist ID');
const iStat = colIdx('Test Status');
const iBy   = colIdx('Tested By');
const iDate = colIdx('Tested Date(YYYY-MM-DD)');
const iRem  = colIdx('Remark');
const iRedm = colIdx('Redmine No.');

if (iId<0 || iStat<0) throw new Error('Header columns not found: '+JSON.stringify(header));

let updated=0, missing=[];
for (let i=1; i<rows.length; i++){
  const r = rows[i];
  if (!r || r.length < header.length){ continue; }
  const id = (r[iId]||'').trim();
  if (!id || !id.startsWith('TC-RIG-PS-01-')) continue;
  const res = byId[id];
  if (!res){ missing.push(id); continue; }
  r[iStat] = res.status;
  r[iBy]   = TESTER;
  r[iDate] = TODAY;
  if (iRedm>=0) r[iRedm] = ''; // leave blank
  // Append to existing remark text
  const oldRem = r[iRem] || '';
  r[iRem] = oldRem ? oldRem + ' || RESULT: ' + res.remark : res.remark;
  updated++;
}

fs.writeFileSync(CSV_PATH, buildCSV(rows));
console.log(`Updated ${updated} rows. Missing IDs: ${missing.length}`);
if (missing.length) console.log(missing);
