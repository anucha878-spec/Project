// CSMS-004 Customer Birthday — execution report generator (Spec-Kit 06a companion)
// PLACEHOLDER — not runnable this cycle. The HTML Test Execution Report is SKIPPED
// (see qa/00-INDEX.md) because 06b execution is BLOCKED (no batch/API/DB env).
//
// When an execution harness + evidence exist, wire this to the central template:
//
//   const path = require('path');
//   const { buildExecutionReport, PASS, FINDING, NX } = require('../../qa-shared/execution-report');
//   const TC = [ /* pull id/flow/req/pri/title/steps/expected from qa/03 + actual/status from run log */ ];
//   buildExecutionReport({
//     feature: 'CSMS-004 Customer Birthday',
//     subtitle: 'SIT / SYSTEM_BATCH / <date>',
//     verdict: { decision: 'NO-GO', text: 'Blocked pending SIT execution' },
//     tcs: TC,
//     evidenceDir: path.join(__dirname, 'evidence'),
//     datasetsPath: path.join(__dirname, '..', '..', 'qa', '06-test-data.json'),
//     outPath: path.join(__dirname, '..', '..', 'qa', 'test-execution-report.html'),
//   });
//
// Do NOT hand-write CSS/layout — the central template owns it.
module.exports = { note: 'not built — 06b execution BLOCKED (no environment)' };
