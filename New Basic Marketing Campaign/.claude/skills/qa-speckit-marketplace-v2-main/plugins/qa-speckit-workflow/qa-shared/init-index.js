// init-index.js — writes the canonical QA Artifact Index (qa/00-INDEX.md) for a
// feature, so EVERY machine produces the identical, COMPLETE manifest instead of
// an LLM-improvised partial table (wrong column names / missing rows).
//
// Single source of truth for the INDEX skeleton lives here in code — keep it in
// sync with the "`00-INDEX.md` template" section of CONVENTIONS.md.
//
// Usage (project-relative, env-free — provision copies this into <project>/qa-shared/):
//   node qa-shared/init-index.js <qa-dir> [feature-title]
//     <qa-dir>        e.g. spec-kit/003-newloan-fs002-repayment/qa
//     feature-title   e.g. "FS-002 Loan Repayment (New Loan Pjoy)"
//
//   or as a module:  require('.../init-index.js').write(qaDir, title)
//
// NEVER clobbers an existing 00-INDEX.md — safe to call repeatedly. If it already
// exists, prints "exists" and leaves it untouched (the calling skill then only
// flips ITS OWN row to ✅ via a targeted edit).
const fs = require('fs');
const path = require('path');

// Rows exactly as CONVENTIONS.md → "00-INDEX.md template". Column order is fixed:
// ลำดับ | ไฟล์ | Skill | สถานะ | รอบ | วันที่ | Input ที่ใช้
const ROWS = [
  ['00-pre', 'sources/ (ขา B เท่านั้น)', '/source-ingest', '⏳', '1', '', 'wiki/เอกสาร generic → crawl ครบ→sources/'],
  ['00', '00-test-plan.md (optional)', '/test-plan', '⏳', '1', '', 'ขา A: spec.md · ขา B: sources/'],
  ['00b', '00b-atom-inventory.md', '/requirement-review (A) หรือ /requirement-review-generic (B)', '⏳', '1', '', 'ขา A: spec+contracts+data-model+mockup · ขา B: sources/'],
  ['01', '01-requirement-review.md', '/requirement-review (A) หรือ /requirement-review-generic (B)', '⏳', '1', '', 'ขา A: spec.md · ขา B: sources/'],
  ['02', '02-e2e-test-patterns.md', '/e2e-flow-designer', '⏳', '1', '', '01,00b'],
  ['03', '03-test-cases.md', '/test-case-generator', '⏳', '1', '', '01,02'],
  ['03b', 'Google Sheet upload (tab POC-xxx)', '/test-case-generator Step 03b', '⏳', '1', '', '03'],
  ['04', '04-coverage-review.md', '/coverage-review', '⏳', '1', '', '01,02,03'],
  ['05', '05-risk-analysis.md', '/risk-analysis', '⏳', '1', '', '01,02,03,04'],
  ['06', '06-test-data.json', '/test-data-generator', '⏳', '1', '', '01,02,03,04,05'],
  ['06a', 'playwright/<feature>/*.spec.js', '/qa-automation-script', '⏳', '1', '', '03,06,02'],
  ['06b', 'execute → playwright-report/', 'npx playwright test', '⏳', '1', '', '06a'],
  ['07', '07-result-analysis.md', '/result-analysis', '⏳', '1', '', '01,03,05,06,06b(exec-logs)'],
  ['08', '08-qa-report.md', '/qa-report-generator', '⏳', '1', '', '01-07'],
  ['07b', 'Google Sheet results write-back (M/N/O/Q, reuse tab 03b)', '/test-case-generator Step 07b', '⏳', '1', '', '07,06b'],
  ['RTM', 'RTM.md (reconcile+traceability, ก่อน 08)', '/qa-reconcile', '⏳', '1', '', '00b,03-07,09'],
  ['09', '09-redmine-issues.md', '/redmine-logging', '⏳', '1', '', '03,05,07,08'],
  ['10', '10-retest-YYYY-MM-DD.md (ปิดวง)', '/qa-retest', '⏳', '1', '', '09,07,08,03'],
];

function render(feature) {
  const header = '| ลำดับ | ไฟล์ | Skill | สถานะ | รอบ | วันที่ | Input ที่ใช้ |';
  const sep = '|------|------|-------|-------|-----|--------|-------------|';
  const body = ROWS.map((r) => '| ' + r.join(' | ') + ' |').join('\n');
  return [
    '# QA Artifact Index — ' + feature,
    header,
    sep,
    body,
    'สถานะ: `⏳` ยังไม่ทำ · `✅` เสร็จ · `—` ข้าม/ไม่เกี่ยว',
    '**รอบ (iteration):** เริ่มที่ `1`; ทุกครั้งที่ loop-back (04/05 เจอ gap → กลับไปแก้ 03 แล้ว re-run) ให้ `+1` เฉพาะแถว **03/04/05** ที่รันซ้ำ.',
    '',
  ].join('\n');
}

function write(qaDir, featureTitle) {
  const feature = featureTitle || path.basename(path.dirname(path.resolve(qaDir))) || '<feature>';
  fs.mkdirSync(qaDir, { recursive: true });
  const dst = path.join(qaDir, '00-INDEX.md');
  if (fs.existsSync(dst)) return { created: false, path: dst };
  fs.writeFileSync(dst, render(feature), 'utf8');
  return { created: true, path: dst };
}

module.exports = { write, render, ROWS };

if (require.main === module) {
  const qaDir = process.argv[2];
  const title = process.argv[3];
  if (!qaDir) {
    console.error('usage: node qa-shared/init-index.js <qa-dir> [feature-title]');
    process.exit(1);
  }
  const r = write(qaDir, title);
  console.log(r.created ? ('[qa-speckit] wrote canonical ' + r.path) : ('[qa-speckit] exists (kept): ' + r.path));
}
