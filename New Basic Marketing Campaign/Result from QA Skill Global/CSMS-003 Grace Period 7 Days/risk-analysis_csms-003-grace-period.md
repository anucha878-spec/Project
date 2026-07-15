---
id: csms-003-grace-period
phase: qa
sub-phase: risk-analysis
spec-version: spec.md Draft 2026-07-07 (branch 004-gp7-sms-batch)
run-date: 2026-07-09
p0: 1  p1: 10  p2: 5  p3: 0
---

# Risk Analysis — CSMS-003 Grace Period 7 Days

Read-only prioritization of the existing 51 TCs (see `test-scenarios_csms-003-grace-period.md`). No TCs created or edited.

## 6-Axis Risk Score
Each axis 0–3 (0 = none, 3 = severe). Band: **P0 ≥14** (or Data-sensitivity=3 + MUST-principle) · **P1 10–13** · **P2 5–9** · **P3 0–4**.
Axes: Business-impact · Complexity · Change-frequency · Integration-surface · Data-sensitivity (PDPA/PII) · Historical-defect.

| FR/SC | TCs | Business | Complexity | Change-freq | Integration | Data-sens(PDPA) | Hist-defect | Score | Band |
|-------|-----|----------|-----------|-------------|-------------|-----------------|-------------|-------|------|
| FR-007 | TC-006,TC-019,TC-020,TC-023 | 3 | 3 | 1 | 3 | 2 | 2 | 14 | **P0** |
| FR-002 | TC-003 | 3 | 2 | 1 | 3 | 2 | 1 | 12 | P1 |
| FR-003 | TC-001,TC-012,TC-013,TC-014,TC-015,TC-025,TC-026 | 3 | 3 | 2 | 1 | 1 | 2 | 12 | P1 |
| FR-005 | TC-021,TC-022,TC-027,TC-037 | 3 | 2 | 1 | 1 | 3 | 2 | 12 | P1 |
| FR-008 | TC-029,TC-030,TC-031,TC-032,TC-034,TC-036 | 3 | 3 | 2 | 1 | 1 | 2 | 12 | P1 |
| FR-011 | TC-009,TC-024,TC-041,TC-045,TC-049 | 3 | 2 | 1 | 3 | 2 | 2 | 13 | P1 |
| FR-006 | TC-039 | 2 | 2 | 1 | 3 | 2 | 1 | 11 | P1 |
| FR-014 | TC-033,TC-035,TC-046,TC-051 | 3 | 3 | 1 | 1 | 1 | 2 | 11 | P1 |
| FR-004a | TC-004,TC-005,TC-017 | 2 | 2 | 1 | 1 | 3 | 1 | 10 | P1 |
| FR-006a | TC-018 | 2 | 2 | 1 | 2 | 2 | 1 | 10 | P1 |
| FR-012 | TC-010,TC-038,TC-040 | 3 | 1 | 1 | 1 | 3 | 1 | 10 | P1 |
| FR-001 | TC-002,TC-011,TC-035 | 3 | 1 | 1 | 2 | 1 | 1 | 9 | P2 |
| FR-009 | TC-007,TC-043 | 2 | 1 | 1 | 2 | 2 | 1 | 9 | P2 |
| FR-004 | TC-016 | 3 | 1 | 1 | 1 | 1 | 1 | 8 | P2 |
| FR-010 | TC-008,TC-028 | 2 | 1 | 1 | 1 | 2 | 1 | 8 | P2 |
| FR-013 | TC-042,TC-047,TC-050 | 2 | 1 | 1 | 2 | 1 | 1 | 8 | P2 |

**Band totals:** P0 = 1 (FR-007) · P1 = 10 · P2 = 5 · P3 = 0.

**Why FR-007 is P0:** it is the compound decision gate (E02 include / E00+false exclude / abnormal skip+F) sitting
on the highest-complexity + highest-integration surface (external LINE API) and drives whether a customer is
contacted at all. A defect here either mis-sends to registered/blocked customers (compliance breach, SC-007) or
silently drops eligible ones. Complexity=3, Integration=3, plus a sibling-batch history of per-item error-handling
bugs pushes it to the 14 threshold.

## Likelihood × Impact Heatmap

|            | Impact Low | Impact Med | Impact High |
|------------|-----------|-----------|-------------|
| **Likelihood High** |  | FR-003, FR-008 | **FR-007 (P0)**, FR-011 |
| **Likelihood Med**  | FR-010 | FR-002, FR-006, FR-006a, FR-005 (PDPA), FR-004a, FR-012, FR-014 | FR-005 |
| **Likelihood Low**  | FR-004, FR-013 | FR-001, FR-009 |  |

(FR-005 spans Med-likelihood/High-impact because a Do-Not-Contact miss is a direct compliance failure even if infrequent.)

## Test-First Order

1. **P0 — FR-007** (TC-006, TC-023, TC-019, TC-020): LINE decision matrix — include E02, exclude E00+false, skip+F on E13/empty. Run these first; a defect corrupts both target selection and compliance.
2. **P1 — FR-008** (TC-029, TC-030, TC-031, TC-032, TC-036): per-policy fan-out + dedup key `policy_no+due_date`; the core "no duplicate / correct multi-policy" guarantee (SC-003).
3. **P1 — FR-005** (TC-021, TC-022, TC-037): Do-Not-Contact exclusion + 100% preference adherence (SC-007, PDPA-adjacent).
4. **P1 — FR-003** (TC-001, TC-012, TC-013, TC-015): the exact 7/6/8-day boundary — the selection window everything else depends on.
5. **P1 — FR-011** (TC-009, TC-045, TC-049): Gateway integration + transient-failure handling + delivery rate.
6. **P1 — FR-014** (TC-033, TC-035): manual-fix idempotency + concurrency (no double send).
7. **P1 — FR-004a / FR-006a / FR-012 / FR-002 / FR-006**: mobile-selection skip+F, cardNo skip+F, full audit logging, data join, LINE call params.
8. **P2 — FR-001, FR-004, FR-009, FR-010, FR-013**: schedule, Inforce filter, CSV build, template, alert email.
9. **Cross-round safety — Assumptions**: TC-044 (LINE full-outage retry≤3 → stop+email) and TC-042/TC-043 (round-failure alerts) run alongside the P1 integration band.

## Cross-links

- **P0/P1 FRs with zero TC** (→ coverage gap): **none** — every P0/P1 FR has ≥1 TC.
- **P0/P1 TCs that must NOT be `Not Run` at report time**: TC-006, TC-019, TC-020, TC-023 (FR-007 P0); TC-029, TC-030, TC-031, TC-032 (FR-008); TC-021, TC-022, TC-037 (FR-005); TC-001, TC-012, TC-013, TC-015 (FR-003); TC-009 (FR-011); TC-033 (FR-014); TC-017 (FR-004a); TC-018 (FR-006a); TC-040 (FR-012); TC-044 (LINE outage).
- **Deterministic:** same spec + same TCs → same scores and bands.
