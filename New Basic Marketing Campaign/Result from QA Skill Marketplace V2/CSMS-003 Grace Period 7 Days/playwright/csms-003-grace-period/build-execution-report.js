// CSMS-003 — build-execution-report.js (generator ต่อ feature)
// ใช้ central template qa-shared/execution-report.js (ห้ามเขียน CSS/layout ใหม่).
// สถานะปัจจุบัน: NOT EXECUTED (06b BLOCKED) → ทุก TC verdict = NX (Not Run).
// require.main guard เพื่อให้ write-back (07b) require เป็น single-source ได้.

const path = require('path');
let tmpl;
try {
  tmpl = require('../../qa-shared/execution-report'); // provision จาก plugin bundle เมื่อพร้อม
} catch (_) {
  tmpl = null; // ยังไม่ provision qa-shared/ — HTML report จะสร้างเมื่อ execute จริง (ดู 00-INDEX)
}

const NX = (tmpl && tmpl.NX) || 'NOT_RUN';

// TC array — steps/expected จาก qa/03; actual/status จาก run log (ยังไม่มี → NX)
const TC = [
  { id: 'TC-001', flow: 'FLOW-001', req: 'FR-001', pri: 'High', title: 'batch รัน 10:00 หนึ่งรอบ', status: NX, reason: '06b BLOCKED: no env/scheduler' },
  { id: 'TC-003', flow: 'FLOW-001', req: 'FR-003', pri: 'High', title: 'diff=7 → คัดเข้า', status: NX, reason: '06b BLOCKED' },
  { id: 'TC-013', flow: 'FLOW-002', req: 'FR-004a', pri: 'High', title: 'mobile ว่างคู่ → skip+F', status: NX, reason: '06b BLOCKED' },
  { id: 'TC-024', flow: 'FLOW-006', req: 'FR-008', pri: 'High', title: '1 ลูกค้า 2 policy → 2 SMS', status: NX, reason: '06b BLOCKED' },
  { id: 'TC-026', flow: 'FLOW-003', req: 'FR-008', pri: 'High', title: 'dedup ใน-รอบ', status: NX, reason: '06b BLOCKED' },
  { id: 'TC-028', flow: 'FLOW-005', req: 'FR-014', pri: 'High', title: 'Manual Fix idempotent', status: NX, reason: '06b BLOCKED' },
  // … TC ที่เหลือ (รวม 41) เติมจาก qa/03 เมื่อ execute; ทั้งหมด NX จนกว่า 06b ผ่าน
];

const CFG = {
  feature: 'CSMS-003 Grace Period 7 Days',
  subtitle: 'SIT — NOT EXECUTED (Leg A design-side, 06b BLOCKED) — 2026-07-09',
  verdict: { decision: 'NO-GO', text: 'Design-side complete; execution pending SIT env + mocks + RQ-001..RQ-005.' },
  tcs: TC,
  evidenceDir: path.join(__dirname, 'evidence'),
  datasetsPath: path.join(__dirname, '..', '..', 'qa', '06-test-data.json'),
  outPath: path.join(__dirname, '..', '..', 'qa', 'test-execution-report.html'),
};

if (require.main === module) {
  if (!tmpl) {
    console.log('qa-shared/execution-report.js ยังไม่ provision — ข้ามการสร้าง HTML (จะสร้างตอน execute 06b).');
    process.exit(0);
  }
  tmpl.buildExecutionReport(CFG);
  console.log('Built:', CFG.outPath);
}

module.exports = { TC, CFG };
