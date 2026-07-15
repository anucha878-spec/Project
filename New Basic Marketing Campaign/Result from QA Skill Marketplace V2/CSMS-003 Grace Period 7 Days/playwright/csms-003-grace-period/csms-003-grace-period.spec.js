// @ts-check
// CSMS-003 — Batch SMS "Grace Period 7 วันก่อนหมดระยะเวลาผ่อนผัน"
// Skill: /qa-automation-script (Spec-Kit 06a) — GENERATE ONLY (not executed).
//
// ┌─ READINESS GATE (A0/A5) ─────────────────────────────────────────────┐
// │ 06a = SCAFFOLD · 06b = ❌ BLOCKED                                      │
// │ A0 (pre-generation inputs) MISSING in all artifacts (01–06):          │
// │   1. BASE_URL (SIT/UAT) ของ Admin Dashboard กลาง CSMS — ไม่มี         │
// │   2. Credentials (IT_ADMIN user/pass) — ไม่มี                          │
// │   3. Entry navigation path (login → เมนู Manual Fix) — ไม่มี           │
// │ A5 (pre-execution): env down, mocks (LINE/ESB/Gateway) ยังไม่ตั้ง,      │
// │   SMS_GRACE_PERIOD_LOG/DWConsole seed ยังไม่ provision.                 │
// │ Feature = backend batch — ไม่มี UI ตรง (ยกเว้นหน้า Manual Fix กลาง).    │
// │ ทุก test = test.fixme() + เหตุผล. ห้ามประกาศว่าพร้อมรัน.               │
// │ ต้องถาม user 3 ข้อ (URL/creds/เมนู) + endpoint mock ก่อน unfixme.       │
// └───────────────────────────────────────────────────────────────────────┘
//
// Data source (strict): qa/06-test-data.json (SYNTHETIC only). ห้าม fallback/แต่งค่า.

const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

// ── Convention กลาง (ฝังตาม qa-automation-script §Convention 1–10) ──
test.use({ actionTimeout: 15000, navigationTimeout: 30000 }); // กัน timeout:0 hang
test.describe.configure({ retries: 2, mode: 'serial' });       // retry layer เดียว

const DATA = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', '..', 'qa', '06-test-data.json'), 'utf8')
);
const td = (id) => {
  const d = DATA.datasets.find((x) => x.td_id === id);
  if (!d) throw new Error(`STRICT DATA: dataset ${id} not found in 06-test-data.json`); // ห้าม fallback
  return d;
};

const EVID = path.join(__dirname, 'evidence');
fs.mkdirSync(EVID, { recursive: true });
const ts = () => new Date().toISOString().replace(/[-:T]/g, '').slice(0, 15);

// snap() — แคป ณ จังหวะ assertion ก่อน cleanup + กรอบแดง + caption (เมื่อมี env จริง)
async function snap(page, tcId, verdict /* PASS|FINDING|FAIL */, caption) {
  try {
    const file = path.join(EVID, `${tcId}_${verdict}_${ts()}.png`);
    if (page) {
      await page.evaluate((cap) => {
        const b = document.createElement('div');
        b.textContent = cap;
        b.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;background:#b00;color:#fff;padding:6px;font:14px sans-serif';
        document.body.appendChild(b);
      }, caption || tcId).catch(() => {});
      await page.screenshot({ path: file });
    }
    return file;
  } catch (_) { return null; }
}

test.beforeEach(async () => {
  test.setTimeout(180000);
  // TODO(unfixme): login(BASE_URL, IT_ADMIN) + navigate → Admin Dashboard กลาง CSMS → เมนู Manual Fix
});

test.afterEach(async ({ page }, testInfo) => {
  // เก็บหลักฐานทุก test (PASS & FAIL) — skip เฉพาะ skipped/fixme
  if (testInfo.status === 'skipped') return;
  const v = testInfo.status === 'passed' ? 'PASS' : 'FAIL';
  const f = await snap(page, testInfo.title.split(' ')[0], v, testInfo.title);
  if (f && fs.existsSync(f)) await testInfo.attach('evidence', { path: f, contentType: 'image/png' });
});

// ─────────────────────────────────────────────────────────────────────────
// FLOW-001 — คัดกรอง & ส่ง SMS ราย policy (happy)
// ─────────────────────────────────────────────────────────────────────────
test.fixme('TC-001 batch รันอัตโนมัติทุกวันเวลา 10:00 น. หนึ่งรอบ', async ({ page }) => {
  // BLOCKED: ต้อง trigger scheduler + สังเกต job log start=10:00 (timezone RQ-009). ไม่มี env/scheduler access.
});

test.fixme('TC-002 ดึงข้อมูลสองตารางต้นทางและคำนวณ grace_end_date', async ({ page }) => {
  // BLOCKED: ต้อง query DWConsole (ili_policy_master + ili_notification_letter). ไม่มี DB access.
});

test.fixme('TC-003 คัดเข้าเมื่อ diff = 7 พอดี (BVA 3/5)', async ({ page }) => {
  const d = td('TD-001'); // grace_end 26/05/2026, run 2026-05-19
  // Expected: policy_no ปรากฏใน target set/CSV. Oracle: SMS_GRACE_PERIOD_LOG row มี policy_no.
  // await snap(page,'TC-003','PASS',`diff=7 → คัดเข้า ${d.data.policy_no}`);
});

test.fixme('TC-004 คัดออกเมื่อ diff = 6 (BVA 2/5)', async ({ page }) => { td('TD-002'); /* target set ต้องไม่มี policy */ });
test.fixme('TC-005 คัดออกเมื่อ diff = 8 (BVA 4/5)', async ({ page }) => { td('TD-003'); });
test.fixme('TC-006 คัดออกเมื่อ diff = 5 และ 9 (ยืนยัน =7 เท่านั้น)', async ({ page }) => { td('TD-004'); });
test.fixme('TC-007 ใช้จำนวนวันแจ้งเตือนจาก cf_catalog', async ({ page }) => { /* BLOCKED: cf_catalog config read */ });
test.fixme('TC-008 [ASSUMPTION] config ไม่พบ → default 7 (RQ-config)', async ({ page }) => { /* assumption */ });
test.fixme('TC-009 คัดออกเมื่อ status != Inforce', async ({ page }) => { td('TD-005'); });
test.fixme('TC-010 คัดเข้าครบ ORD/IND/PA (EP 3/3)', async ({ page }) => { td('TD-006'); });
test.fixme('TC-011 ใช้เบอร์หลัก mobile1', async ({ page }) => { td('TD-007'); /* log.mobile_no = mobile1 */ });
test.fixme('TC-012 ใช้เบอร์สำรอง mobile2 เมื่อ mobile1 ว่าง', async ({ page }) => { td('TD-008'); });
test.fixme('TC-013 mobile1&2 ว่างทั้งคู่ → skip + log F', async ({ page }) => {
  td('TD-009'); // Oracle: log row status='F' AND ไม่ส่ง AND รอบไม่หยุด (assert ทั้งสาม — กัน silent skip)
});

// FLOW-003 — DNC & LINE filter
test.fixme('TC-014 คัดออก ORD remark_code=1 (DNC)', async ({ page }) => { td('TD-010'); });
test.fixme('TC-015 คัดออก IND/PA remark_code=4 (DNC)', async ({ page }) => { td('TD-011'); });
test.fixme('TC-016 remark ไม่ตรงประเภท → ไม่คัดออก', async ({ page }) => { td('TD-012'); });
test.fixme('TC-017 เรียก LINE ด้วย channels=LINE', async ({ page }) => { /* BLOCKED: assert mock request param */ });
test.fixme('TC-018 map policy_no → cardNo ก่อนเรียก LINE', async ({ page }) => { /* BLOCKED */ });
test.fixme('TC-019 cardNo ไม่พบ → skip + log F', async ({ page }) => { td('TD-013'); });
test.fixme('TC-020 LINE E02 → คัดเข้า', async ({ page }) => { td('TD-014'); });
test.fixme('TC-021 LINE E00 & isBlockLine=false → คัดออก', async ({ page }) => { td('TD-015'); });
test.fixme('TC-022 LINE ผิดปกติ (E13/ว่าง) → skip + log F ไม่ retry', async ({ page }) => { td('TD-016'); });
test.fixme('TC-023 [ASSUMPTION RQ-001] LINE E00 & isBlockLine=true — undefined', async ({ page }) => {
  td('TD-017'); // ห้ามแต่ง expected — บันทึกพฤติกรรมจริง รอ RQ-001
});

// FLOW-006 — per-policy fan-out (CRITICAL)
test.fixme('TC-024 1 ลูกค้า 2 กรมธรรม์ → 2 SMS (ห้าม dedup รายคน)', async ({ page }) => {
  const d = td('TD-018'); // Oracle: 2 log rows, policy_no distinct, 2 SMS
  expect(d.data.policies.length).toBe(2); // sanity on dataset shape
});
test.fixme('TC-025 1 ลูกค้า 2 กรมธรรม์ ต่าง due_date → ส่งทั้งคู่', async ({ page }) => { td('TD-019'); });

// FLOW-001/005 — dedup & idempotency
test.fixme('TC-026 dedup ใน-รอบ: policy_no+due_date เดิม (S) → คัดออก', async ({ page }) => { td('TD-020'); });
test.fixme('TC-027 รันวันถัดไป due_date เดิม → ไม่เลือกซ้ำ', async ({ page }) => { td('TD-021'); });
test.fixme('TC-028 Manual Fix idempotent — ไม่ส่งซ้ำรายการ S', async ({ page }) => {
  td('TD-022'); // BLOCKED: ต้อง drive หน้า Manual Fix (Admin Dashboard) — ไม่มี URL/creds/เมนู
});
test.fixme('TC-029 [ASSUMPTION RQ-002] dedup นับ status ใด (F ต้องซ่อมได้)', async ({ page }) => { td('TD-023'); });

// FLOW-001 — message & CSV
test.fixme('TC-030 แทนค่า var1-3 ในข้อความตรง template', async ({ page }) => {
  const d = td('TD-024');
  // Oracle (data-level assert แม้ไม่มี UI): string ที่ generate == expected_message
  expect(d.data.expected_message).toContain(d.data.policy_no);
});
test.fixme('TC-031 CSV UTF-8 + ชื่อไฟล์รูปแบบมาตรฐาน', async ({ page }) => {
  const d = td('TD-025');
  expect(d.data.expected_filename).toMatch(/^MKT_CSMS_MKTGracePeriod7Days_\d{12}\.csv$/);
});
test.fixme('TC-032 [ASSUMPTION RQ-003] CSV column schema', async ({ page }) => { td('TD-026'); });
test.fixme('TC-033 [ASSUMPTION RQ-004/010] era ชื่อไฟล์ (พ.ศ. vs ค.ศ.) + ค่าคงที่', async ({ page }) => { /* รอ RQ */ });

// FLOW-001 — submit & log
test.fixme('TC-034 นำส่ง Gateway รับ refer_no + สถานะรายรายการ', async ({ page }) => { /* BLOCKED: mock ESB/Gateway */ });
test.fixme('TC-035 ส่งสำเร็จ → log ครบ field + S + refer_no', async ({ page }) => {
  td('TD-027'); // created_by ASSUMPTION RQ-008
});
test.fixme('TC-036 ส่งไม่สำเร็จ/skip → log F ไม่มี refer_no', async ({ page }) => { /* union of skip TCs */ });
test.fixme('TC-037 [ASSUMPTION RQ-005] refer_no ผิดรูปแบบ → F', async ({ page }) => { td('TD-028'); });
test.fixme('TC-038 Gateway timeout/5xx → F ไม่ retry auto', async ({ page }) => { td('TD-029'); });

// FLOW-004 — round failure
test.fixme('TC-039 ความล้มเหลวระดับรอบ → email IT + User (≤15 นาที)', async ({ page }) => { td('TD-030'); });
test.fixme('TC-040 LINE ล่มทั้งระบบ retry≤3→หยุด+email; CSV fail→รอบล้มเหลว', async ({ page }) => { td('TD-030'); });
test.fixme('TC-041 edge: grace_end วันหยุด (Manual Fix) + grace_end ถูกปรับหลังส่ง', async ({ page }) => { /* Manual Fix + as-of processing */ });
