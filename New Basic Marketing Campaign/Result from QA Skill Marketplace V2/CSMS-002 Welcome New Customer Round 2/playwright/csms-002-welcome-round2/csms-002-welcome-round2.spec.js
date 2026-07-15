// @ts-check
// ============================================================================
// CSMS-002 Welcome New Customer Round 2 (Ocean Club App) — Playwright spec
// Skill: /qa-automation-script (06a) — GENERATE ONLY, NOT EXECUTED.
// ----------------------------------------------------------------------------
// A0 Pre-Generation Input Gate: URL / credentials / entry-menu are NOT provided
//   and there is NO running system (project has only spec.md). Per the run
//   instruction this spec is generated as a design artifact and every test is
//   test.fixme() (not executed). 06b execution = BLOCKED.
//
// A5 Readiness Gate: FAIL — (1) no SIT host, (2) no creds, (3) no seed data,
//   (4) external registration/ESB services absent, (5) no BASE_URL.
//
// NOTE ON SHAPE: CSMS-002 is a scheduled BATCH (roles SYSTEM_BATCH / IT_ADMIN),
//   not a UI flow. True verification is DB/service-level (seed round-1 history +
//   policy master + config, run batch, assert WELCOME_NEW_CUST_APP rows). These
//   Playwright cases document the intended assertions/oracles for the ONLY UI
//   surface (central Manual-Fix Dashboard) plus batch-outcome checks to be wired
//   to a DB/API harness later. Titles carry TC-IDs from qa/03-test-cases.md.
//
// Statuses: ALL Not Run. Test data: SYNTHETIC (qa/06-test-data.json).
// ============================================================================

const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

// ---- Central conventions (embedded per qa-shared/CONVENTIONS.md) ----------
test.describe.configure({ retries: 2 });               // single retry layer
const EVIDENCE_DIR = path.join(__dirname, 'evidence');
const DATA = require(path.join('..', '..', 'qa', '06-test-data.json'));

test.use({ actionTimeout: 15000, navigationTimeout: 30000 }); // guard timeout:0 hang

test.beforeEach(async () => {
  test.setTimeout(180000);
  if (!fs.existsSync(EVIDENCE_DIR)) fs.mkdirSync(EVIDENCE_DIR, { recursive: true });
});

// Evidence helper — capture AT assertion, red frame + caption, before cleanup.
// (Wired for when a real target exists; unused while tests are fixme.)
async function snap(page, tcId, verdict /* PASS|FINDING|FAIL */, caption) {
  const ts = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14);
  const file = path.join(EVIDENCE_DIR, `${tcId}_${verdict}_${ts}.png`);
  try { await page.screenshot({ path: file }); } catch (_) {}
  return file;
}

// Strict-data accessor — throw if a dataset/field is missing (no fallback).
function td(id) {
  const d = DATA.datasets.find((x) => x.id === id);
  if (!d) throw new Error(`Strict data: dataset ${id} not found in 06-test-data.json`);
  return d;
}

// ---------------------------------------------------------------------------
// FLOW-002 — Dual-channel LINE+App send/exclude truth table (DEDICATED, P0)
// ---------------------------------------------------------------------------
test.describe('FLOW-002 dual-channel send/exclude truth table', () => {
  test.fixme('TC-019 not-registered-both (E02+E02) -> SEND', async ({ page }) => {
    // BLOCKED: no reachable batch/DB. Oracle: decision=SEND, row sent_status="S".
    // Data: TD-001. Assert against WELCOME_NEW_CUST_APP once a harness exists.
    const d = td('TD-001'); expect(d).toBeTruthy();
  });
  test.fixme('TC-020 E02+App-registered -> EXCLUDE', async () => {/* TD-003 case TC-020 */});
  test.fixme('TC-021 E02+App-E13 -> skip F', async () => {/* TD-004 */});
  test.fixme('TC-022 LINE-blocked+App-E02 -> SEND (rule b)', async () => {/* TD-002 */});
  test.fixme('TC-023 LINE-blocked+App-registered -> EXCLUDE', async () => {/* TD-003 */});
  test.fixme('TC-024 LINE-blocked+App-E13 -> skip F', async () => {/* TD-004 */});
  test.fixme('TC-025 LINE-notblocked+App-E02 -> EXCLUDE', async () => {/* TD-003 */});
  test.fixme('TC-026 LINE-notblocked+App-registered -> EXCLUDE', async () => {/* TD-003 */});
  test.fixme('TC-027 LINE-notblocked+App-E13 -> skip F', async () => {/* TD-004 */});
  test.fixme('TC-028 LINE-E13+App-E02 -> skip F', async () => {/* TD-004 */});
  test.fixme('TC-029 LINE-E13+App-registered -> [BLOCKED RQ-006 precedence]', async () => {/* TD-005 */});
  test.fixme('TC-030 LINE-E13+App-E13 -> skip F', async () => {/* TD-004 */});
  test.fixme('TC-031 whole registration service down -> retry<=3 then stop+email', async () => {/* TD-011 */});
  test.fixme('TC-032 late App registration before send -> accepted', async () => {/* TD-024 */});
});

// ---------------------------------------------------------------------------
// FLOW-001 — Schedule / cohort / filter
// ---------------------------------------------------------------------------
test.describe('FLOW-001 schedule, cohort, filter', () => {
  test.fixme('TC-001 daily run at 10:00', async () => {/* TD-024 */});
  test.fixme('TC-002 cohort N=20 selected', async () => {/* TD-006 */});
  test.fixme('TC-003 cohort N-1 not selected', async () => {/* TD-006 */});
  test.fixme('TC-004 cohort N+1 not selected (daily)', async () => {/* TD-006 */});
  test.fixme('TC-005 N from config default 20', async () => {/* TD-024 */});
  test.fixme('TC-006 N changed applies next round', async () => {/* TD-024 */});
  test.fixme('TC-007 Inforce ORD status 1', async () => {/* TD-007 */});
  test.fixme('TC-008 Inforce PA status 1', async () => {/* TD-007 */});
  test.fixme('TC-009 Inforce IND status 2', async () => {/* TD-007 */});
  test.fixme('TC-010 Inforce GOV status 3', async () => {/* TD-007 */});
  test.fixme('TC-011 IND/GOV out of {1,2,3} excluded', async () => {/* TD-007 */});
  test.fixme('TC-012 phone mobile1 used', async () => {/* TD-009 */});
  test.fixme('TC-013 phone mobile2 fallback', async () => {/* TD-009 */});
  test.fixme('TC-014 both phones empty excluded', async () => {/* TD-009 */});
  test.fixme('TC-015 current phone from policy master, logged', async () => {/* TD-009 */});
  test.fixme('TC-016 Do Not Contact ORD remark 1 excluded', async () => {/* TD-008 */});
  test.fixme('TC-017 Do Not Contact IND/GOV/PA remark 4 excluded', async () => {/* TD-008 */});
  test.fixme('TC-018 cardNo not found -> skip F, continue', async () => {/* TD-010 */});
  test.fixme('TC-063 empty round-1 day -> normal end, no failure email', async () => {/* TD-024 */});
});

// ---------------------------------------------------------------------------
// FLOW-003 — Dedup
// ---------------------------------------------------------------------------
test.describe('FLOW-003 dedup', () => {
  test.fixme('TC-033 cross-round prior success not resent', async () => {/* TD-012 */});
  test.fixme('TC-034 dedup guard counts only sms_sent_date NOT NULL', async () => {/* TD-012 */});
  test.fixme('TC-035 multi-policy same customer -> 1 message', async () => {/* TD-013 */});
  test.fixme('TC-036 deterministic representative (oldest, min policy_no)', async () => {/* TD-013 */});
  test.fixme('TC-037 non-selected duplicates still logged', async () => {/* TD-013 */});
  test.fixme('TC-038 lifetime <=1 message (SC-002)', async () => {/* TD-012 */});
});

// ---------------------------------------------------------------------------
// FLOW-006 — Message / file / logging / linkage
// ---------------------------------------------------------------------------
test.describe('FLOW-006 message, file, logging, linkage', () => {
  test.fixme('TC-039 template code 111', async () => {/* TD-014 */});
  test.fixme('TC-040 fallback template when 111 missing', async () => {/* TD-014 */});
  test.fixme('TC-041 var1/2/3 substituted, no ${var} leak', async () => {/* TD-014 */});
  test.fixme('TC-042 no name -> skip F, no nameless send', async () => {/* TD-014 */});
  test.fixme('TC-043 no Active config -> stop round + email', async () => {/* TD-015 */});
  test.fixme('TC-044 CSV UTF-8 + filename [BLOCKED RQ-003 layout]', async () => {/* TD-016 */});
  test.fixme('TC-045 deliver via ESB->SMS Gateway', async () => {/* TD-016 */});
  test.fixme('TC-046 gateway send-fail -> F, sent_date NULL', async () => {/* TD-017 */});
  test.fixme('TC-047 campaign-level log', async () => {/* TD-018 */});
  test.fixme('TC-048 per-policy log fields [BLOCKED RQ-003/007]', async () => {/* TD-018 */});
  test.fixme('TC-049 refer_no + status logged', async () => {/* TD-018 */});
  test.fixme('TC-050 policy-type map O/I/G/P [ASSUMPTION RQ-001]', async () => {/* TD-018 */});
  test.fixme('TC-051 round-1 linkage ID present [BLOCKED RQ-009 field]', async () => {/* TD-019 */});
  test.fixme('TC-052 success -> sent_date + S', async () => {/* TD-020 */});
  test.fixme('TC-053 skip/fail -> sent_date NULL + F', async () => {/* TD-020 */});
  test.fixme('TC-054 sent_status column exists', async () => {/* TD-020 */});
});

// ---------------------------------------------------------------------------
// FLOW-004 — Notification
// ---------------------------------------------------------------------------
test.describe('FLOW-004 round-failure notification', () => {
  test.fixme('TC-055 round failure -> email IT+User, batch+step', async () => {/* TD-021 */});
  test.fixme('TC-056 failure email within 15 min [BLOCKED RQ-004 SLA]', async () => {/* TD-021 */});
});

// ---------------------------------------------------------------------------
// FLOW-005 — Manual Fix + central daily report (merged FR-020.2)
// (Manual-Fix Dashboard IS a UI — real Playwright target once URL/creds exist)
// ---------------------------------------------------------------------------
test.describe('FLOW-005 Manual Fix + report', () => {
  test.fixme('TC-057 Manual Fix reprocess only NULL sent_date', async () => {/* TD-022 */});
  test.fixme('TC-058 Manual Fix never resends S (SC-007)', async () => {/* TD-022 */});
  test.fixme('TC-059 daily round does not auto-retry F', async () => {/* TD-022 */});
  test.fixme('TC-060 date-range = selected date - current N', async () => {/* TD-022 */});
  test.fixme('TC-061 mid-flight N change -> no duplicates, skipped via Manual Fix', async () => {/* TD-022 */});
  test.fixme('TC-062 central daily report breakdown [BLOCKED RQ-002 FR#]', async () => {/* TD-023 */});
});
