// build-execution-report.js — CSMS-002 Welcome New Customer Round 2 (06a helper)
// GENERATE ONLY. All TCs Not Run (no app / no execution). This generator feeds
// the central template qa-shared/execution-report.js when real results exist.
// It intentionally does NOT fabricate pass/fail — every TC status = NX (not run).
//
// NOTE: qa-shared/execution-report.js is not present in this result folder (no
// provisioning done — no running system). This file records the intended TC
// array + verdict as a single source for later write-back (Step 07b) and guards
// require.main so it can be `require`d without executing.

const path = require('path');

const VERDICT = {
  decision: 'NO-GO', // pending SIT execution
  text: 'Design-phase only. No system to execute against (project has only spec.md). '
      + 'All 63 TCs = Not Run. Verdict blocked pending SIT execution + closure of RQ-001/002/003/004/009.',
};

// Every TC status = NX (Not Run). actual/reason reflect why (no exec).
const NX = 'NX';
const TC = [
  'TC-001','TC-002','TC-003','TC-004','TC-005','TC-006','TC-007','TC-008','TC-009','TC-010',
  'TC-011','TC-012','TC-013','TC-014','TC-015','TC-016','TC-017','TC-018','TC-019','TC-020',
  'TC-021','TC-022','TC-023','TC-024','TC-025','TC-026','TC-027','TC-028','TC-029','TC-030',
  'TC-031','TC-032','TC-033','TC-034','TC-035','TC-036','TC-037','TC-038','TC-039','TC-040',
  'TC-041','TC-042','TC-043','TC-044','TC-045','TC-046','TC-047','TC-048','TC-049','TC-050',
  'TC-051','TC-052','TC-053','TC-054','TC-055','TC-056','TC-057','TC-058','TC-059','TC-060',
  'TC-061','TC-062','TC-063',
].map((id) => ({ id, status: NX, reason: 'Not executed — no reachable system (design phase).' }));

function build() {
  // When qa-shared/execution-report.js is provisioned and real runs exist:
  //   const { buildExecutionReport } = require('../../qa-shared/execution-report');
  //   buildExecutionReport({ feature:'CSMS-002 Welcome New Customer Round 2',
  //     subtitle:'design phase — Not Run', verdict:VERDICT, tcs:TC,
  //     evidenceDir: path.join(__dirname,'evidence'),
  //     datasetsPath: path.join(__dirname,'..','..','qa','06-test-data.json'),
  //     outPath: path.join(__dirname,'..','..','qa','test-execution-report.html') });
  // SKIPPED here: no real evidence to embed (see 00-INDEX note).
  return { verdict: VERDICT, tcs: TC };
}

module.exports = { VERDICT, TC, build };

if (require.main === module) {
  const r = build();
  console.log(`CSMS-002: ${r.tcs.length} TCs, all Not Run. Verdict: ${r.verdict.decision}.`);
}
