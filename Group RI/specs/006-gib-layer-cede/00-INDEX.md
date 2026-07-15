# QA Pipeline Ledger — 006-gib-layer-cede

**Feature:** GIB RI Premium Per-Layer Cede % · **Defect:** Redmine #75852

| Step | Mode | Artifact | Status | Iteration | Updated (YYYY-MM-DD) |
|------|------|----------|--------|-----------|----------------------|
| 01 design | design | test-scenarios_gib-layer-cede.md · test-cases_gib-layer-cede.csv | done | 1 | 2026-05-27 |
| 06 report | report | verify-sit-run_2026-05-27.md (baseline) | done | 1 | 2026-05-27 |
| 07 regression | regression | verify-regression-run_2026-07-07.md | done (CONDITIONAL-GO) | 1 | 2026-07-07 |

> Bootstrapped retroactively 2026-07-07 to run `speckit-qa regression` on the #75852 fix.
> Baseline (design + report) reconstructed from prior QA evidence (memory `defect-75852-gib-layer-collapse`,
> `redmine-note-75852.txt`). `crosscheck`/`risk`/`coverage`/`test-data` steps not run for this retrofit.
