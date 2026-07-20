# Template: `risk-analysis_<feature>.md` (mode `risk`)

Read-only prioritization of existing TCs. Never creates/edits TCs. See SKILL.md §4.5.

```markdown
---
id: <feature-id>
phase: qa
sub-phase: risk-analysis
spec-version: <hash/date of spec.md>
run-date: <YYYY-MM-DD>
p0: <n>  p1: <n>  p2: <n>  p3: <n>
---

## 6-Axis Risk Score
Each axis 0–3 (0 = none, 3 = severe). Band: P0 ≥14 (or Data-sensitivity=3 + MUST-principle) · P1 10–13 · P2 5–9 · P3 0–4.

| FR/SC | TCs | Business | Complexity | Change-freq | Integration | Data-sens(PDPA) | Hist-defect | Score | Band |
|-------|-----|----------|-----------|-------------|-------------|-----------------|-------------|-------|------|
| FR-001 | TC-001,TC-014 | 3 | 2 | 1 | 2 | 3 | 1 | 12 | P1 |

## Likelihood × Impact Heatmap
|            | Impact Low | Impact Med | Impact High |
|------------|-----------|-----------|-------------|
| **Likelihood High** |  | FR-00x | **FR-001 (P0/P1)** |
| **Likelihood Med**  |  | FR-00y |  |
| **Likelihood Low**  | FR-00z |  |  |

## Test-First Order
1. P0: FR-… (TC-…) — why
2. P1: …

## Cross-links
- P0/P1 FRs with **zero** TC (→ coverage gap, route to `coverage`/`design`): FR-…
- P0/P1 that must not be `Not Run` at report time: TC-…
```

Deterministic: same spec + same TCs → same scores and bands.
