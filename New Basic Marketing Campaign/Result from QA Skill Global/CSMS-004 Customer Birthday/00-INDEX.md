# QA Pipeline Index — csms-004-birthday

_Last updated: 2026-07-09_

Feature: **CSMS-004 — Batch ส่ง SMS "Customer Birthday"** (อวยพรวันเกิด + เชิญลงทะเบียน LINE Ocean Connect)
Spec: `Spec/Batch เพื่อส่ง SMS Customer Birthday ตามเงื่อนไขกลุ่มเป้าหมาย/spec.md` (Feature branch `005-batch-birthday-sms`, Draft, 2026-07-07)

| Step | Mode | Artifact | Status | Iteration | Updated |
|------|------|----------|--------|-----------|---------|
| 00 | crosscheck | crosscheck-brd-spec_csms-004-birthday.md | blocked | 1 | 2026-07-09 |
| 01 | design | test-scenarios_csms-004-birthday.md · test-cases_csms-004-birthday.csv | done | 1 | 2026-07-09 |
| 02 | risk | risk-analysis_csms-004-birthday.md | done | 1 | 2026-07-09 |
| 03 | coverage | coverage-review_csms-004-birthday.md | done | 1 | 2026-07-09 |
| 04 | test-data | test-data_csms-004-birthday.json | done | 1 | 2026-07-09 |
| 05 | execute | test-cases_csms-004-birthday.csv (statuses) | blocked | — | 2026-07-09 |
| 06 | report | verify-sit-run_<date>.md · SIT-Test-Document_csms-004-birthday.md | blocked | — | 2026-07-09 |
| 07 | regression | verify-regression-run_<date>.md | blocked | — | 2026-07-09 |

## Status legend
- `done` — artifact produced this iteration.
- `blocked` — cannot run: **crosscheck** has no upstream BRD/FRD/UR file available (only referenced by name in the spec); **execute/report/regression** require a running application / SIT environment which is out of scope for this pass.
- `gaps-found` — coverage loop-back pending (not the case here; coverage = `covered`).

## Notes
- Iteration 1. No loop-back required — `coverage` verdict is `covered` (all 20 FRs mapped to ≥1 TC; negatives/edges present).
- Test statuses are **Not Run** (no execution performed). Test data is **SYNTHETIC** only (PDPA gate satisfied).
- Deterministic IDs: TC-001…TC-070; TD-001… bound to real `tc_id` + `req_id`.
- Known review issue carried into design: **US5 acceptance-scenario numbering is scrambled (1,6,7,2,3,4,5)** — surfaced as an ambiguity/coverage finding; each distinct scenario still has a dedicated TC.
