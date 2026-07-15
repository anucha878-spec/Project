# QA Pipeline Index — csms-002-welcome-round2

_Last updated: 2026-07-09_

Campaign: **CSMS-002 — Welcome New Customer รอบ 2 (Ocean Club App), Daily 10:00** · Module CSMS · Ocean Life Web Portal
Spec: `Spec/Batch เพื่อส่ง SMS Welcome New Customer รอบ 2 เมื่อครบ 20 วัน ตามเงื่อนไขกลุ่มเป้าหมาย/spec.md` (Draft, 2026-07-07)
Feature slug: `csms-002-welcome-round2`

| Step | Mode | Artifact | Status | Iteration | Updated |
|------|------|----------|--------|-----------|---------|
| 00 | crosscheck | crosscheck-brd-spec_csms-002-welcome-round2.md | blocked | 1 | 2026-07-09 |
| 01 | design | test-scenarios_csms-002-welcome-round2.md · test-cases_csms-002-welcome-round2.csv | done | 1 | 2026-07-09 |
| 02 | risk | risk-analysis_csms-002-welcome-round2.md | done | 1 | 2026-07-09 |
| 03 | coverage | coverage-review_csms-002-welcome-round2.md | gaps-found | 1 | 2026-07-09 |
| 04 | test-data | test-data_csms-002-welcome-round2.json | done | 1 | 2026-07-09 |
| 05 | execute | test-cases_csms-002-welcome-round2.csv (statuses) | blocked | — | 2026-07-09 |
| 06 | report | verify-sit-run_<date>.md · SIT-Test-Document_csms-002-welcome-round2.md | blocked | — | 2026-07-09 |
| 07 | regression | verify-regression-run_<date>.md | blocked | — | 2026-07-09 |

## Status notes

- **00 crosscheck — `blocked`**: No upstream BRD/FRD/UR source document is present in the campaign folder. The
  spec references `0SPEC_BATCH-CSMS-002_Welcome-New-Customer-OceanClub.md` (UR20260070 Basic Campaign / MCMP)
  as its Source Requirement, but that file is not in the repository (the path points to another machine,
  `C:\Users\akkarawat.le\...`). Conformance and traceability cannot be verified until the source is supplied.
  See the crosscheck stub. No source requirements were invented.
- **01 design — `done`**: 46 TCs (TC-001…TC-046) spanning all 7 test dimensions; every FR-### and every
  buildable SC-### maps to ≥1 TC. Dedicated TCs for the round-1 linkage (TC-035, TC-001) and the LINE+App
  dual-channel check (TC-015…TC-019).
- **02 risk — `done`**: 6-axis scoring, P0–P3 bands, 3×3 Likelihood×Impact heatmap, test-first order.
- **03 coverage — `gaps-found`**: No FR/SC is left with **zero** TC (mapping is complete), but Pass 3 raises a
  **structural ambiguity gap**: the daily reconcile-report requirement is buried inside **FR-020.2** with **no
  FR number of its own** (merged with the Manual-Fix date-range rule). Verdict is `gaps-found` to force that
  spec-structure fix upstream (route to `/speckit-checklist`) even though behavior coverage is complete via
  TC-044. See the coverage review for the full finding + two minor overlap notes.
- **04 test-data — `done`**: Six-category synthetic dataset bound to real TC/FR ids (SYNTHETIC PII only;
  negative/boundary values drawn from the adversarial input catalog).
- **05 execute / 06 report / 07 regression — `blocked`**: No running application / SIT environment is available
  in this workspace. All test statuses remain **Not Run** (no fabrication). These steps run once a deployed
  CSMS environment and the SMS Gateway / registration-status (LINE/APP) service stubs are reachable.

- **Status legend**: `done` / `in-progress` / `blocked` / `gaps-found` / `covered` / `—` (not run yet).
- Iteration 1 for all executed steps. The `gaps-found` verdict at step 03 is a **structural/ambiguity** gap
  (spec numbering), not a missing-TC gap — no design loop-back is required to add TCs; the fix is upstream in
  the spec. Should the SA renumber the reporting requirement (e.g. `FR-021`), re-run `design` + `coverage`
  (iteration → 2) to retag TC-044.
