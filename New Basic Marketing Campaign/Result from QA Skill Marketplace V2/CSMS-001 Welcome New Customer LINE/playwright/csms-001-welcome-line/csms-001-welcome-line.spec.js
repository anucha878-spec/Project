// ============================================================================
// CSMS-001 Welcome New Customer (LINE) — Playwright spec  (Spec-Kit 06a)
// Skill: /qa-automation-script  |  Generated: 2026-07-09  |  Iteration: 1
// ----------------------------------------------------------------------------
// GENERATE-ONLY. This suite is NOT executed and NOT executable in this pass.
//
// Readiness gate (06a §A5) = NOT MET:
//   - A0 inputs missing: no BASE_URL / credentials / entry-navigation were
//     provided by the user or found in artifacts 00–06 (env-level data).
//   - This feature is a *scheduled backend batch* with NO UI (except the
//     out-of-scope central "Manual Fix" screen). Faithful verification needs a
//     BATCH TEST HARNESS, not browser UI: seed DB rows (policy master /
//     application ORD-IND-PA / customer analytics / DNC / cf_catalog / history),
//     a controllable Line Connect Inquiry mock (E02/E13/out-of-condition/down),
//     ESB + email sinks, and a batch/Manual-Fix trigger. None exist here.
//
// Therefore EVERY test() below is marked test.fixme(<TC-ID> — <title>, reason).
// Titles start with the TC-ID (traceable to qa/03-test-cases.md). Nothing is
// deleted; each TC is preserved with its blocker reason.  Do NOT declare "ready
// to run" until the harness + env exist and the gate passes.
//
// Embedded central conventions (per qa-shared/CONVENTIONS.md, kept for when a
// harness is wired):
//   * actionTimeout/navigationTimeout guards (anti timeout:0 hang)
//   * evidence snap() at assertion-time before cleanup (red box + caption)
//   * strict data: every value comes from qa/06-test-data.json — no fallback
//   * single retry layer; foreground --headed --workers=1
// ============================================================================

const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

// --- anti timeout:0 hang (convention #1) ------------------------------------
test.use({ actionTimeout: 15000, navigationTimeout: 30000 });
test.describe.configure({ retries: 2 }); // single retry layer (convention #6)

// --- strict-data load (convention #9): values ONLY from qa/06 --------------
const DATA_PATH = path.join(__dirname, '..', '..', 'qa', '06-test-data.json');
function loadData() {
  if (!fs.existsSync(DATA_PATH)) {
    throw new Error(`STRICT-DATA: ${DATA_PATH} not found — refuse to fabricate test data`);
  }
  return JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
}

// --- env / readiness (06a §A5) ---------------------------------------------
const QA_BASE_URL = process.env.QA_BASE_URL || null; // NOT provided → gate fails
const HARNESS_READY = false; // batch harness (DB seed + Inquiry/ESB/email mocks + trigger) not provisioned

// --- evidence helper (convention #7) — capture at assertion, red box + caption
const EVIDENCE_DIR = path.join(__dirname, 'evidence');
async function snap(page, tcId, verdict /* PASS|FINDING|FAIL */, caption) {
  try {
    if (!fs.existsSync(EVIDENCE_DIR)) fs.mkdirSync(EVIDENCE_DIR, { recursive: true });
    const ts = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 15);
    const file = path.join(EVIDENCE_DIR, `${tcId}_${verdict}_${ts}.png`);
    await page.screenshot({ path: file });
    return file;
  } catch (_) { return null; }
}

// ---------------------------------------------------------------------------
// TC registry — mirrors qa/03-test-cases.md (65 TCs). status drives fixme reason.
// backend  = needs batch harness (no UI)
// ui       = central Manual Fix screen (out-of-scope UI design)
// blocked  = RQ-gated expected value (do not author oracle)
// ---------------------------------------------------------------------------
const TCS = [
  { id: 'TC-001', pri: 'High', kind: 'backend', title: 'ส่ง SMS สำเร็จให้ ORD ที่เข้าเงื่อนไขครบ' },
  { id: 'TC-002', pri: 'High', kind: 'backend', title: 'ส่ง SMS สำเร็จให้ลูกค้าประเภท IND' },
  { id: 'TC-003', pri: 'High', kind: 'backend', title: 'ส่ง SMS สำเร็จให้ลูกค้าประเภท PA' },
  { id: 'TC-004', pri: 'High', kind: 'backend', title: 'BR-003 เงื่อนไข 2: ไม่มี Ocean Club + บล็อก LINE → ส่ง' },
  { id: 'TC-005', pri: 'High', kind: 'backend', title: 'BR-003 เงื่อนไข 3a: พบ LINE ไม่บล็อก → ไม่ส่ง' },
  { id: 'TC-006', pri: 'High', kind: 'backend', title: 'BR-003 เงื่อนไข 3b: มี Ocean Club → ไม่ส่ง' },
  { id: 'TC-007', pri: 'Medium', kind: 'backend', title: 'code=E02 ใช้เป็นสัญญาณ eligibility ภายใน ไม่แสดงข้อความ' },
  { id: 'TC-008', pri: 'High', kind: 'backend', title: 'กรมธรรม์ออกก่อนปี 2026 ไม่ถูกดึง (boundary 2025-12-31)' },
  { id: 'TC-009', pri: 'High', kind: 'backend', title: 'กรมธรรม์ออก 2026-01-01 ถูกดึงตามปกติ (boundary)' },
  { id: 'TC-010', pri: 'Medium', kind: 'backend', title: 'issue_date ไม่ใช่ T-1 (T-2) ไม่ถูกดึง' },
  { id: 'TC-011', pri: 'High', kind: 'backend', title: 'สถานะไม่ใช่ Inforce ไม่ถูกดึง' },
  { id: 'TC-012', pri: 'High', kind: 'backend', title: 'mobile_no NULL ไม่ถูกดึง' },
  { id: 'TC-013', pri: 'High', kind: 'backend', title: 'mobile_no ค่าว่าง ไม่ถูกดึง' },
  { id: 'TC-014', pri: 'Medium', kind: 'backend', title: 'ประเภทนอก ORD/IND/PA ไม่ถูกดึง' },
  { id: 'TC-015', pri: 'High', kind: 'backend', title: 'ORD ใน DNC (remark_code=1) ถูกตัดออก' },
  { id: 'TC-016', pri: 'High', kind: 'backend', title: 'IND ใน DNC (remark_code=4) ถูกตัดออก' },
  { id: 'TC-017', pri: 'Medium', kind: 'backend', title: 'PA ใน DNC (remark_code=4) ถูกตัดออก' },
  { id: 'TC-018', pri: 'Medium', kind: 'backend', title: 'IND รหัส G map เป็นกลุ่ม IND และตรวจ DNC ถูกต้อง' },
  { id: 'TC-019', pri: 'High', kind: 'backend', title: 'E13 → skip ทันทีไม่ retry + log + แถว F' },
  { id: 'TC-020', pri: 'High', kind: 'backend', title: 'ผลนอก 3 เงื่อนไข → skip + log ไม่หยุดรอบ' },
  { id: 'TC-021', pri: 'High', kind: 'backend', title: 'card_no หาชื่อไม่พบ → skip + log ไม่ส่งข้อความไร้ชื่อ' },
  { id: 'TC-022', pri: 'High', kind: 'backend', title: 'E13 รายเดียวไม่หยุดรอบ รายอื่นประมวลผลจนจบ (SC-006)' },
  { id: 'TC-023', pri: 'High', kind: 'backend', title: 'Line Connect ล่ม → retry สูงสุด 3 ครั้ง' },
  { id: 'TC-024', pri: 'High', kind: 'backend', title: 'retry ครบ 3 ยังล้มเหลว → หยุดรอบ + email' },
  { id: 'TC-025', pri: 'Medium', kind: 'backend', title: 'Line Connect ล่มชั่วคราวแล้วสำเร็จ ≤3 → รอบดำเนินต่อ' },
  { id: 'TC-026', pri: 'High', kind: 'backend', title: 'dedup ในรอบ → 1 SMS อ้าง MIN(issue_date)' },
  { id: 'TC-027', pri: 'Medium', kind: 'blocked', title: 'dedup tie-break issue_date เท่ากัน [BLOCKED-RQ01]' },
  { id: 'TC-028', pri: 'High', kind: 'backend', title: 'ประวัติเคยส่ง (NOT NULL) → ไม่ส่งซ้ำ' },
  { id: 'TC-029', pri: 'High', kind: 'backend', title: "ประวัติ 'F' (NULL) ไม่บล็อกการส่งที่ถูกต้อง" },
  { id: 'TC-030', pri: 'Medium', kind: 'backend', title: 'ใช้ template จาก sms_message_schedule ก่อน' },
  { id: 'TC-031', pri: 'Medium', kind: 'backend', title: 'fallback ไป SMS_CATEGORY default เมื่อไม่พบ schedule' },
  { id: 'TC-032', pri: 'High', kind: 'backend', title: 'แทนค่า $(var1)=ชื่อ, $(var2)=ลิงก์' },
  { id: 'TC-033', pri: 'High', kind: 'backend', title: 'ลิงก์จาก config LINE_LINK active_flag=Y ในช่วง begin/expire' },
  { id: 'TC-034', pri: 'High', kind: 'backend', title: 'ไม่มีลิงก์ active → หยุดรอบ + email (ไม่ส่งลิงก์หมดอายุ)' },
  { id: 'TC-035', pri: 'Medium', kind: 'backend', title: 'ชื่อไฟล์ CSV MKT_CSMS_<abbr>_<YYMMDDhhmmss>.csv' },
  { id: 'TC-036', pri: 'High', kind: 'blocked', title: 'ปีในชื่อไฟล์ CSV พ.ศ. vs ค.ศ. [BLOCKED-RQ02]' },
  { id: 'TC-037', pri: 'Low', kind: 'backend', title: 'ไฟล์ CSV เป็น UTF-8' },
  { id: 'TC-038', pri: 'Medium', kind: 'backend', title: 'CSV ถูกสร้างก่อนเรียกบริการส่ง' },
  { id: 'TC-039', pri: 'High', kind: 'backend', title: 'ส่งผ่าน ESB → SMS Gateway' },
  { id: 'TC-040', pri: 'Medium', kind: 'backend', title: 'CSMS_LOG มี refer_no + สถานะที่ได้กลับ' },
  { id: 'TC-041', pri: 'High', kind: 'backend', title: 'WELCOME_NEW_CUST_LINE ครบทุกฟิลด์ + created_by=SYSTEM_BATCH' },
  { id: 'TC-042', pri: 'High', kind: 'backend', title: "สำเร็จ → sms_sent_date set, sent_status='S'" },
  { id: 'TC-043', pri: 'High', kind: 'backend', title: "skip/fail → sms_sent_date=NULL, sent_status='F'" },
  { id: 'TC-044', pri: 'Low', kind: 'blocked', title: 'credit_amount คำนวณด้วย logic เดิม [BLOCKED-RQ03]' },
  { id: 'TC-045', pri: 'Low', kind: 'backend', title: "sent_status รับเฉพาะ {'S','F'}" },
  { id: 'TC-046', pri: 'High', kind: 'backend', title: 'generate CSV ไม่ได้ → หยุดรอบ + email ระบุขั้นตอน' },
  { id: 'TC-047', pri: 'High', kind: 'backend', title: 'ESB/Gateway ไม่ได้ → หยุดรอบ + email' },
  { id: 'TC-048', pri: 'High', kind: 'backend', title: 'ดึงข้อมูล/DB error → หยุดรอบ + email' },
  { id: 'TC-049', pri: 'Medium', kind: 'backend', title: 'email ระบุ batch BATCH-CSMS-WELCOME-LINE + ขั้นตอนล้มเหลว' },
  { id: 'TC-050', pri: 'High', kind: 'blocked', title: 'เกณฑ์เวลา timeout ตัดสิน batch ล้มเหลว [BLOCKED-RQ04]' },
  { id: 'TC-051', pri: 'Medium', kind: 'backend', title: 'email ถึงทั้งทีม IT และ User' },
  { id: 'TC-052', pri: 'High', kind: 'ui', title: 'Manual Batch วันที่ล้มเหลว → ส่งรายการตกหล่น ไม่ส่งซ้ำ' },
  { id: 'TC-053', pri: 'High', kind: 'ui', title: 'ช่วงวันที่ = วันประมวลผล → ดึง issue_date=T-1' },
  { id: 'TC-054', pri: 'High', kind: 'ui', title: 'Manual Batch idempotent — เฉพาะ sms_sent_date IS NULL' },
  { id: 'TC-055', pri: 'High', kind: 'backend', title: "'F' ส่งซ้ำผ่าน Manual Fix เท่านั้น — daily ไม่ retry อัตโนมัติ" },
  { id: 'TC-056', pri: 'Medium', kind: 'ui', title: 'วันเริ่มต้น > วันปัจจุบัน → validation บล็อก' },
  { id: 'TC-057', pri: 'Low', kind: 'ui', title: 'วันเริ่มต้น = วันปัจจุบัน → ผ่าน' },
  { id: 'TC-058', pri: 'Medium', kind: 'ui', title: 'วันสิ้นสุด < วันเริ่มต้น → validation บล็อก' },
  { id: 'TC-059', pri: 'Low', kind: 'ui', title: 'วันสิ้นสุด = วันเริ่มต้น → ผ่าน' },
  { id: 'TC-060', pri: 'Low', kind: 'blocked', title: 'ข้อความ validation หน้า Manual Fix [BLOCKED-RQ05]' },
  { id: 'TC-061', pri: 'Medium', kind: 'backend', title: 'รายงานประจำวัน: total/S/F/excluded + breakdown policy_type' },
  { id: 'TC-062', pri: 'Medium', kind: 'backend', title: 'ยอดรายงาน reconcile กับ DB 100% (SC-007)' },
  { id: 'TC-063', pri: 'Low', kind: 'backend', title: "รอบ 'F' สูงผิดปกติ → ไม่มี alert เพิ่ม" },
  { id: 'TC-064', pri: 'Low', kind: 'backend', title: 'ไม่จำกัดจำนวนตัวอักษร ~140 char ส่งได้' },
  { id: 'TC-065', pri: 'Low', kind: 'backend', title: 'ใช้ sms_category 113 / MKTWelcomeNewCust' },
];

function reasonFor(kind) {
  switch (kind) {
    case 'blocked': return 'BLOCKED on RQ — expected oracle not authored (Strict Data Policy); resolve RQ with SA before automating.';
    case 'ui': return 'Central Manual Fix screen is out-of-scope UI + no BASE_URL/creds/entry-nav provided; needs env + central screen spec.';
    default: return 'No reachable app + no BASE_URL/creds; backend batch requires a test harness (DB seed + Inquiry/ESB/email mocks + trigger). Readiness gate 06a §A5 NOT met.';
  }
}

test.describe('CSMS-001 Welcome New Customer (LINE) — design suite (NOT executed)', () => {
  // Guard: if this ever runs without readiness, fail loudly instead of faking a pass.
  test.beforeAll(() => {
    if (QA_BASE_URL && HARNESS_READY) return; // would proceed only when truly ready
    // otherwise every test is fixme below — nothing executes.
  });

  for (const tc of TCS) {
    // 1 TC -> 1 test(); title starts with TC-ID (traceable). All fixme (not run).
    test.fixme(`${tc.id} — [${tc.pri}] ${tc.title}`, async ({ page }) => {
      // Intentionally unreachable until readiness gate passes.
      const data = loadData(); // strict-data (would throw if 06 missing)
      expect(data).toBeTruthy();
      // Real body (when harness exists) would: seed rows -> trigger batch/Manual Fix ->
      // assert DB rows / emitted CSV / Inquiry+ESB call logs / email sink, then snap()
      // at assertion time. Left unimplemented on purpose (generate-only).
      await snap(page, tc.id, 'FINDING', reasonFor(tc.kind));
    });
  }
});
