// Inspect structure of BDR xlsx files: sheet names, dimensions, header rows.
const XLSX = require('xlsx');
const path = require('path');
const files = process.argv.slice(2);
for (const f of files) {
  console.log('\n#################### ' + path.basename(f) + ' ####################');
  const wb = XLSX.readFile(f);
  for (const sn of wb.SheetNames) {
    const ws = wb.Sheets[sn];
    const ref = ws['!ref'] || 'EMPTY';
    const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null, blankrows: false });
    console.log('\n=== Sheet: "' + sn + '"  range=' + ref + '  rows=' + rows.length + ' ===');
    rows.slice(0, 6).forEach((r, i) => {
      const cells = (r || []).map(c => c === null ? '' : String(c)).slice(0, 30);
      console.log('  R' + i + ': ' + JSON.stringify(cells));
    });
  }
}
