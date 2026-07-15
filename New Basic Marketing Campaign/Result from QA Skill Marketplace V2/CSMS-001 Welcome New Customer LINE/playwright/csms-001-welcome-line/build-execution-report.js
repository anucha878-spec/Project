// ============================================================================
// CSMS-001 Welcome New Customer (LINE) — execution-report generator (06a hook)
// Generated: 2026-07-09  |  Skill: /qa-automation-script
// ----------------------------------------------------------------------------
// NOTE: The HTML Test Execution Report is intentionally NOT built in this pass
// (recorded as "SKIP" in qa/00-INDEX.md) because there is NO real execution
// evidence — the suite is generate-only and un-executed (no reachable app /
// no batch harness). Producing an HTML report now would be a fake "success"
// page with an empty evidence gallery, which the conventions forbid.
//
// This file is kept as the per-feature generator scaffold so that, once the
// harness + env exist and the suite runs (06b), only the TC[] status/actual
// fields need updating and the central template does the rendering — no CSS.
// ============================================================================

const path = require('path');

// Central template — must be provisioned into <project>/qa-shared/ first.
// (Left required lazily; do NOT run this file until qa-shared + real results exist.)
function build() {
  const { buildExecutionReport, PASS, FINDING, NX } = require('../../qa-shared/execution-report');

  // TC[] — status is NX (not executed) for every entry until 06b runs.
  const TC = [
    // Example shape (fill status/actual from run log after 06b):
    // { id:'TC-001', flow:'FLOW-001', req:'FR-001', pri:'High',
    //   title:'ส่ง SMS สำเร็จ ORD', steps:'seed→run→assert DB/ESB',
    //   expected:"row S + ESB called", status:NX, reason:'not executed — no harness' },
  ];

  buildExecutionReport({
    feature: 'CSMS-001 Welcome New Customer (LINE)',
    subtitle: 'SIT — not executed — 2026-07-09',
    verdict: { decision: 'NO-GO', text: 'Blocked pending SIT execution — no reachable app / no batch harness. Design-phase only.' },
    tcs: TC,
    evidenceDir: path.join(__dirname, 'evidence'),
    datasetsPath: path.join(__dirname, '..', '..', 'qa', '06-test-data.json'),
    outPath: path.join(__dirname, '..', '..', 'qa', 'test-execution-report.html'),
  });
}

// Guard: never auto-run. Requires qa-shared/execution-report.js + real results.
if (require.main === module) {
  throw new Error('Report generation is BLOCKED: no execution evidence yet (06b not run). See qa/00-INDEX.md.');
}

module.exports = { build };
