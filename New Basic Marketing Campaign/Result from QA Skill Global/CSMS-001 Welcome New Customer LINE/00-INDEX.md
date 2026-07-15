# QA Pipeline Index — csms-001-welcome-line

_Last updated: 2026-07-09_

Campaign: **CSMS-001 — Welcome New Customer (LINE), Daily 10:00** · Module CSMS · Ocean Life Web Portal
Spec: `Spec/Batch เพื่อส่ง SMS Welcome New Customer ตามเงื่อนไขกลุ่มเป้าหมาย/spec.md` (Draft, 2026-07-07)

| Step | Mode | Artifact | Status | Iteration | Updated |
|------|------|----------|--------|-----------|---------|
| 00 | crosscheck | crosscheck-brd-spec_csms-001-welcome-line.md | blocked | 1 | 2026-07-09 |
| 01 | design | test-scenarios_csms-001-welcome-line.md · test-cases_csms-001-welcome-line.csv | done | 1 | 2026-07-09 |
| 02 | risk | risk-analysis_csms-001-welcome-line.md | done | 1 | 2026-07-09 |
| 03 | coverage | coverage-review_csms-001-welcome-line.md | covered | 1 | 2026-07-09 |
| 04 | test-data | test-data_csms-001-welcome-line.json | done | 1 | 2026-07-09 |
| 05 | execute | test-cases_csms-001-welcome-line.csv (statuses) | blocked | — | 2026-07-09 |
| 06 | report | verify-sit-run_<date>.md · SIT-Test-Document_csms-001-welcome-line.md | blocked | — | 2026-07-09 |
| 07 | regression | verify-regression-run_<date>.md | blocked | — | 2026-07-09 |

## Status notes

- **00 crosscheck — `blocked`**: No upstream BRD/FRD/UR source document is present in the campaign folder. The
  spec references `SPEC_BATCH-CSMS-001_Welcome-New-Customer-LINE.md` v1.5 (wiki pageId 1337491540 / 1337491572)
  as its Source Requirement, but that file is not in the repository (paths point to another machine). Conformance
  and traceability cannot be verified until the source path is supplied. See the crosscheck stub. No source
  requirements were invented.
- **01 design — `done`**: 41 TCs (TC-001…TC-041) spanning all 7 test dimensions; every FR-### maps to ≥1 TC.
- **02 risk — `done`**: 6-axis scoring, P0–P3 bands, 3×3 heatmap, test-first order.
- **03 coverage — `covered`**: All 26 FRs + 7 SCs carry ≥1 TC; negative/edge classes present. No gaps.
- **04 test-data — `done`**: Six-category synthetic dataset bound to real TC/FR ids (SYNTHETIC PII only).
- **05 execute / 06 report / 07 regression — `blocked`**: No running application / SIT environment is available
  in this workspace. Test statuses remain **Not Run** (no fabrication). These steps run once a deployed CSMS
  environment and the SMS Gateway / Line Connect stubs are reachable.

- **Status legend**: `done` / `in-progress` / `blocked` / `gaps-found` / `covered` / `—` (not run yet).
- Iteration 1 for all executed steps (no coverage loop-back was required this invocation).
