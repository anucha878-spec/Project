# Template: `FEATURE_DIR/00-INDEX.md` (pipeline ledger)

Single ledger every mode upserts its row into. See SKILL.md §1.1. Never fabricate a `done` for an unrun step.

```markdown
# QA Pipeline Index — <feature-slug>

_Last updated: YYYY-MM-DD_

| Step | Mode | Artifact | Status | Iteration | Updated |
|------|------|----------|--------|-----------|---------|
| 00 | crosscheck | crosscheck-brd-spec_<feature>.md | done | 1 | YYYY-MM-DD |
| 01 | design | test-scenarios_<feature>.md · test-cases_<feature>.csv | done | 1 | YYYY-MM-DD |
| 02 | risk | risk-analysis_<feature>.md | done | 1 | YYYY-MM-DD |
| 03 | coverage | coverage-review_<feature>.md | gaps-found | 2 | YYYY-MM-DD |
| 04 | test-data | test-data_<feature>.json | — | — | — |
| 05 | execute | test-cases_<feature>.csv (statuses) | — | — | — |
| 06 | report | verify-sit-run_<date>.md · SIT-Test-Document_<feature>.md | — | — | — |
| 07 | regression | verify-regression-run_<date>.md | — | — | — |
```

- **Status**: `done` / `in-progress` / `blocked` / `gaps-found` / `—` (not run yet).
- **Iteration**: starts at 1; the `coverage` loop-back bumps `design`/`risk`/`coverage` each round so re-work is visible.
- Deterministic: same inputs → same rows; only update rows for steps actually run this invocation.
