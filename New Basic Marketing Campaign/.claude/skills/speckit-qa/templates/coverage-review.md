# Template: `coverage-review_<feature>.md` (mode `coverage`)

Audit-only gate. Never writes/edits TCs — gaps loop back to `design`. See SKILL.md §4.6.

```markdown
---
id: <feature-id>
phase: qa
sub-phase: coverage-review
run-date: <YYYY-MM-DD>
iteration: <n>            # bumped each loop-back from design
verdict: <covered | gaps-found>
---

## Pass 1 — Gap (FR/SC with zero TC)
| FR/SC | Requirement (short) | Mapped TC | Severity | Note |
|-------|--------------------|-----------|----------|------|
| FR-007 | … | — (none) | CRITICAL | core business rule / MUST-principle |

Severity: CRITICAL if core business rule / permission / data-integrity / constitution MUST; else HIGH.

## Pass 2 — Overlap (redundant TCs)
| TCs | Same condition asserted | Recommendation |
|-----|------------------------|----------------|
| TC-003, TC-011 | … | merge / mark redundant (never auto-delete) |

## Pass 3 — Missing Negative/Edge
| FR/Field | Field type | Missing adversarial rows (from negative-input-catalog) | Missing dimension |
|----------|-----------|--------------------------------------------------------|-------------------|
| FR-004 search | free-text | LIKE `%`/`_`, metacharacter-as-literal | Negative/Validation |

## Verdict
- **gaps-found** → list TCs to add, run `/speckit-qa design`, then re-run `coverage` (iteration +1).
- **covered** → no Gap, negatives present → proceed to `/speckit-qa test-data`.

## Coverage Summary
Total FR/SC: <n> · with ≥1 TC: <n> · coverage %: <p> · CRITICAL gaps: <n>
```
