// Build a compact digest: for each R0X page, print:
//   - Objective
//   - First 50 lines of content after frontmatter (real body lines)
//   - All "cf_rXX_*" master-table mentions (Confluence "Re: cf_..." patterns)
//   - All Account Codes (40xxxxxx / 50xxxxxx etc) referenced
//   - All ms_rcc_group_type group_type_code references
//   - All tx_adw_* / tx_rcc_* tables referenced
//   - All "Business Line" / business_line_code values

const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'summaries.md');
const content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');

// Find all section starts
const sections = [];
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(/^## (Process การประมวลผลข้อมูลออกรายงาน (R\d+))/);
  if (m) sections.push({ start: i, code: m[2], title: m[1] });
}
for (let s = 0; s < sections.length; s++) {
  sections[s].end = s + 1 < sections.length ? sections[s + 1].start : lines.length;
}

const out = ['# รายงาน R — Digest (per-report distinctive content)', ''];

for (const sec of sections) {
  const body = lines.slice(sec.start + 5, sec.end - 1).join('\n'); // skip url/total/blank/```
  const bodyLines = body.split('\n').filter(l => l.trim().length);

  // Distinctive parts
  const objective = (bodyLines.find(l => /^Objective\s*:/i.test(l)) || '').trim();
  const cfTables = [...new Set([...body.matchAll(/cf_r\d+_[a-z0-9_]+/gi)].map(m => m[0]))];
  const txTables = [...new Set([...body.matchAll(/\b(tx|ms)_(adw|rcc)_[a-z0-9_]+/gi)].map(m => m[0]))];
  const glCodes = [...new Set([...body.matchAll(/\b[345]\d{7}\b/g)].map(m => m[0]))].sort();
  const blCodes = [...new Set([...body.matchAll(/\bbusiness[_ ]?line[_ ]?code\b[^\n]*?(\d{2})/gi)].map(m => m[1]))];

  out.push(`## ${sec.code} — ${sec.title}`);
  out.push('');
  out.push(`**Objective:** ${objective.replace(/^Objective\s*:\s*/i, '')}`);
  out.push('');
  out.push(`**ตาราง master/config:** ${cfTables.join(', ') || '-'}`);
  out.push(`**ตาราง EDW (tx_*/ms_*):** ${txTables.slice(0, 25).join(', ')}${txTables.length > 25 ? ', …' : ''}`);
  out.push(`**Account Codes (จำนวน ${glCodes.length}):** ${glCodes.slice(0, 30).join(', ')}${glCodes.length > 30 ? ', …' : ''}`);
  out.push('');
  out.push('**First content lines:**');
  out.push('```');
  out.push(bodyLines.slice(0, 40).join('\n'));
  out.push('```');
  out.push('');
}

fs.writeFileSync(path.join(__dirname, 'digest.md'), out.join('\n'), 'utf8');
console.error('wrote digest.md', (fs.statSync(path.join(__dirname, 'digest.md')).size/1024).toFixed(1), 'KB');
