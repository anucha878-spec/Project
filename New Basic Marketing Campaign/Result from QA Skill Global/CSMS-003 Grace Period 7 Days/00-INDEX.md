# QA Pipeline Index — csms-003-grace-period

_Last updated: 2026-07-09_

Feature: **CSMS-003 — Batch ส่ง SMS "Grace Period 7 วันก่อนหมดระยะเวลาผ่อนผัน"**
Spec: `004-gp7-sms-batch` / `spec.md` (Draft, created 2026-07-07)

| Step | Mode | Artifact | Status | Iteration | Updated |
|------|------|----------|--------|-----------|---------|
| 00 | crosscheck | crosscheck-brd-spec_csms-003-grace-period.md | blocked | 1 | 2026-07-09 |
| 01 | design | test-scenarios_csms-003-grace-period.md · test-cases_csms-003-grace-period.csv | done | 1 | 2026-07-09 |
| 02 | risk | risk-analysis_csms-003-grace-period.md | done | 1 | 2026-07-09 |
| 03 | coverage | coverage-review_csms-003-grace-period.md | done | 1 | 2026-07-09 |
| 04 | test-data | test-data_csms-003-grace-period.json | done | 1 | 2026-07-09 |
| 05 | execute | test-cases_csms-003-grace-period.csv (statuses) | blocked | — | 2026-07-09 |
| 06 | report | verify-sit-run_<date>.md · SIT-Test-Document_csms-003-grace-period.md | blocked | — | 2026-07-09 |
| 07 | regression | verify-regression-run_<date>.md | blocked | — | 2026-07-09 |

## Status legend
- `done` — artifact produced this iteration.
- `blocked` — cannot run: crosscheck has **no upstream BRD/FRD/UR** in scope; execute/report/regression have **no running application** reachable from this environment (hard wall per skill scope).
- `—` — not run yet.

## Notes
- **crosscheck = blocked**: `spec.md` cites a Process Specification `SPEC_BATCH-CSMS-003_GracePeriod7Day.md` (UR20260070) as its source, but that document is **not present** in this workspace. Per skill rule (no fabrication), the conformance gate cannot invent source requirements — it is stubbed as `blocked` pending the real source file.
- **design/risk/coverage/test-data = done**: produced from `spec.md` alone (16 FR incl. FR-004a/FR-006a, 7 SC, Assumptions, Edge Cases).
- **execute/report/regression = blocked**: no application is deployed/reachable; all TC statuses remain `Not Run`. No results fabricated.
- Coverage verdict: **covered** — every FR-### and buildable SC-### maps to ≥1 TC (see `coverage-review`).
