// @ts-check
// =============================================================================
// CSMS-004 Customer Birthday — Playwright spec (Spec-Kit 06a, /qa-automation-script)
// GENERATED ONLY — NOT EXECUTED.
//
// A0 Pre-Generation Input Gate: NOT satisfied by design.
//   URL / credentials / entry-navigation are ABSENT — this feature is a
//   SCHEDULED BACKEND BATCH (no UI, no login, no screen). Per the run
//   instruction this spec is produced as a DESIGN-SIDE PLACEHOLDER only.
//   Every TC is test.fixme() with a reason; nothing is runnable until a
//   batch/API/DB execution harness (and stubs for cisappapi + ESB/SMS Gateway)
//   exists.
//
// A5 Pre-Execution Readiness Gate: ❌ BLOCKED
//   1. Environment up ............ ❌ no SIT batch/DWConsole/cisappapi/ESB
//   2. Credentials valid ......... N/A (batch job, no interactive login)
//   3. Test data provisioned ..... ❌ synthetic sets defined (qa/06) but not seeded
//   4. Dependencies/mocks ........ ❌ cisappapi + ESB/SMS Gateway stubs not built
//   5. BASE_URL / env var ........ ❌ none (no HTTP surface defined)
//   => DO NOT run. 06b = BLOCKED.
//
// Titles carry TC-IDs; evidence hooks (snap/afterEach) embedded per
// qa-shared/CONVENTIONS.md so that when a harness exists, capture-at-assertion
// evidence is already wired. Data source = qa/06-test-data.json (strict).
// =============================================================================

const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

const TD = require(path.join(__dirname, '..', '..', 'qa', '06-test-data.json'));
const EVIDENCE_DIR = path.join(__dirname, 'evidence');

// ---- guards (embedded convention: no timeout:0 hang) ------------------------
test.use({ actionTimeout: 15000, navigationTimeout: 30000 });
test.describe.configure({ retries: 2 });

// ---- evidence helper (capture-at-assertion, red-frame + caption) ------------
function ts() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
}
async function snap(page, tcId, verdict /* PASS|FINDING|FAIL */, caption) {
  if (!fs.existsSync(EVIDENCE_DIR)) fs.mkdirSync(EVIDENCE_DIR, { recursive: true });
  const file = path.join(EVIDENCE_DIR, `${tcId}_${verdict}_${ts()}.png`);
  // when a real UI/report surface exists: draw red frame around the result element
  // + caption banner BEFORE any cleanup, then screenshot. Placeholder no-op here.
  await page.screenshot({ path: file }).catch(() => {});
  return file;
}
test.afterEach(async ({ page }, testInfo) => {
  // skip-if-already-snapped; attach evidence for both PASS & FAIL
  if (testInfo.status === 'skipped') return;
  const verdict = testInfo.status === 'passed' ? 'PASS' : 'FAIL';
  const f = await snap(page, testInfo.title.split(' ')[0], verdict, testInfo.title);
  if (f) await testInfo.attach('evidence', { path: f, contentType: 'image/png' }).catch(() => {});
});

// helper: read a dataset by id (strict — throw if absent, no fabrication)
function ds(id) {
  const d = TD.datasets.find((x) => x.id === id);
  if (!d) throw new Error(`STRICT DATA: dataset ${id} not found in qa/06-test-data.json`);
  return d;
}

// -----------------------------------------------------------------------------
// FLOW-001..010 — one test() per TC, all fixme (no execution surface).
// Reason codes: NO-ENV (backend batch, no harness) | BLOCKED-RQxxx (spec gap)
// -----------------------------------------------------------------------------

test.describe('CSMS-004 FLOW-001 Birthday selection & match', () => {
  test.fixme('TC-001 birthday day/month = run date is selected [NO-ENV]', async () => { ds('TD-001'); });
  test.fixme('TC-002 different day/month excluded [NO-ENV]', async () => { ds('TD-002'); });
  test.fixme('TC-003 birth year ignored in match [NO-ENV]', async () => { ds('TD-003'); });
  test.fixme('TC-004 all four policy types inforce selected [NO-ENV]', async () => { ds('TD-004'); });
  test.fixme('TC-005 daily 09:00 trigger + filename 090000 [NO-ENV]', async () => { ds('TD-001'); });
  test.fixme('TC-006 no backdated send before Go Live [NO-ENV]', async () => { ds('TD-002'); });
});

test.describe('CSMS-004 FLOW-002 Leap-day resolution', () => {
  test.fixme('TC-007 Feb-29 non-leap sent on Feb-28 [NO-ENV]', async () => { ds('TD-005'); });
  test.fixme('TC-008 Feb-29 leap sent on Feb-29 [NO-ENV]', async () => { ds('TD-006'); });
  test.fixme('TC-009 Feb-29 not sent on wrong day [NO-ENV]', async () => { ds('TD-005'); });
});

test.describe('CSMS-004 FLOW-003 Inforce filter', () => {
  test.fixme('TC-010 ORD/PA inforce=1 only [NO-ENV]', async () => { ds('TD-008'); });
  test.fixme('TC-011 IND/GOV inforce in {1,2,3} [NO-ENV]', async () => { ds('TD-008'); });
  test.fixme('TC-012 PA inforce=1 only [NO-ENV]', async () => { ds('TD-008'); });
});

test.describe('CSMS-004 FLOW-004 DNC + agent-channel', () => {
  test.fixme('TC-013 ORD DNC remark=1 excluded [NO-ENV]', async () => { ds('TD-009'); });
  test.fixme('TC-014 IND/GOV/PA DNC remark=4 excluded [NO-ENV]', async () => { ds('TD-009'); });
  test.fixme('TC-015 ORD self-pay excluded [NO-ENV]', async () => { ds('TD-010'); });
  test.fixme('TC-016 Orphan position_code=99 excluded [NO-ENV]', async () => { ds('TD-010'); });
  test.fixme('TC-017 policy_org range endpoints [NO-ENV]', async () => { ds('TD-007'); });
  test.fixme('TC-018 non-DNC agent in-range kept [NO-ENV]', async () => { ds('TD-004'); });
});

test.describe('CSMS-004 FLOW-005 Mobile selection', () => {
  test.fixme('TC-019 mobile1 used [NO-ENV]', async () => { ds('TD-012'); });
  test.fixme('TC-020 mobile2 fallback [NO-ENV]', async () => { ds('TD-012'); });
  test.fixme('TC-021 both empty skip + record [NO-ENV]', async () => { ds('TD-011'); });
});

test.describe('CSMS-004 FLOW-006 cardNo + 2-channel decision table', () => {
  test.fixme('TC-022 cardNo mapped [NO-ENV]', async () => { ds('TD-013'); });
  test.fixme('TC-023 cardNo not found skip + record [NO-ENV]', async () => { ds('TD-014'); });
  test.fixme('TC-024 LINE=E02 & APP=E02 SEND [NO-ENV]', async () => { ds('TD-013'); });
  test.fixme('TC-025 LINE=E00 block=true & APP=E02 SEND [NO-ENV]', async () => { ds('TD-015'); });
  test.fixme('TC-026 LINE=E00 block=false EXCLUDE [NO-ENV]', async () => { ds('TD-015'); });
  test.fixme('TC-027 APP=E00 EXCLUDE [NO-ENV]', async () => { ds('TD-015'); });
  test.fixme('TC-028 LINE block=true & APP=E00 EXCLUDE [NO-ENV]', async () => { ds('TD-015'); });
  test.fixme('TC-029 E13/exception skip no per-item retry [NO-ENV]', async () => { ds('TD-016'); });
  test.fixme('TC-030 empty channel/isBlockLine skip [NO-ENV]', async () => { ds('TD-016'); });
});

test.describe('CSMS-004 FLOW-007 Per-customer dedup', () => {
  test.fixme('TC-031 already-sent this year excluded [NO-ENV]', async () => { ds('TD-020'); });
  test.fixme('TC-032 re-run same day 0 duplicates [NO-ENV]', async () => { ds('TD-020'); });
  test.fixme('TC-033 next year sends again [ASSUMPTION-RQ003]', async () => { ds('TD-020'); });
  test.fixme('TC-034 one customer 2 policies => 1 SMS [NO-ENV]', async () => { ds('TD-021'); });
  test.fixme('TC-035 record references 1 representative policy [NO-ENV]', async () => { ds('TD-021'); });
});

test.describe('CSMS-004 FLOW-008 Template + config + CSV', () => {
  test.fixme('TC-036 template from schedule (112) in range [NO-ENV]', async () => { ds('TD-018'); });
  test.fixme('TC-037 fallback to sms_category [NO-ENV]', async () => { ds('TD-018'); });
  test.fixme('TC-038 vars var1/var2/var3 all filled [NO-ENV]', async () => { ds('TD-001'); });
  test.fixme('TC-039 missing REWARDS config skip, no empty-var SMS [NO-ENV]', async () => { ds('TD-023'); });
  test.fixme('TC-040 missing LINE_LINK config skip, no empty-var SMS [NO-ENV]', async () => { ds('TD-023'); });
  test.fixme('TC-041 no template anywhere round-level failure + email [NO-ENV]', async () => { ds('TD-018'); });
  test.fixme('TC-042 CSV columns + seq_no=1 + datetime format [NO-ENV]', async () => { ds('TD-017'); });
  test.fixme('TC-043 CSV filename + MKTBirthday + UTF-8 [NO-ENV]', async () => { ds('TD-018'); });
});

test.describe('CSMS-004 FLOW-009 Submit + audit record', () => {
  test.fixme('TC-044 gateway refer_no + per-item status [NO-ENV]', async () => { ds('TD-019'); });
  test.fixme('TC-045 success recorded all fields + CSMS_LOG [NO-ENV]', async () => { ds('TD-019'); });
  test.fixme('TC-046 fail/skip recorded no refer_no [NO-ENV]', async () => { ds('TD-014'); });
  test.fixme('TC-047 GOV recorded [ASSUMPTION-RQ004]', async () => { ds('TD-004'); });
});

test.describe('CSMS-004 FLOW-010 Failure email + Manual Fix', () => {
  test.fixme('TC-048 round failure/CSV-timeout email IT+user [NO-ENV]', async () => { ds('TD-019'); });
  test.fixme('TC-049 API outage retry<=3 stop round + email [ASSUMPTION-RQ009]', async () => { ds('TD-014'); });
  test.fixme('TC-050 Manual Fix idempotent no resend [NO-ENV]', async () => { ds('TD-022'); });
});

test.describe('CSMS-004 Blocked (RQ-pending)', () => {
  test.fixme('TC-051 category code 112 vs 113 crosscheck [BLOCKED-RQ002]', async () => { ds('TD-024'); });
  test.fixme('TC-052 exact Go-Live-date boundary [BLOCKED-RQ005]', async () => { ds('TD-024'); });
  test.fixme('TC-053 credit_amount semantics [BLOCKED-RQ006]', async () => { ds('TD-024'); });
  test.fixme('TC-054 CSV timeout threshold [BLOCKED-RQ007]', async () => { ds('TD-024'); });
});

// Run command (only after a harness + stubs exist; NOT now):
//   npx playwright test csms-004-birthday.spec.js --headed --workers=1
// Requires: BASE_URL/API harness for the batch, cisappapi stub, ESB/SMS Gateway stub,
//   seeded synthetic data from qa/06-test-data.json.
