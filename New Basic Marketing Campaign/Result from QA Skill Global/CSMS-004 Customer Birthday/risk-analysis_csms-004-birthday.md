---
id: csms-004-birthday
phase: qa
sub-phase: risk-analysis
spec-version: spec.md Draft 2026-07-07 (branch 005-batch-birthday-sms)
run-date: 2026-07-09
p0: 3  p1: 11  p2: 6  p3: 0
---

# Risk Analysis — CSMS-004 Customer Birthday SMS Batch

Read-only prioritization of the 70 TCs from `test-scenarios_csms-004-birthday.md`. Never edits TCs.
Counts above are **per-FR bands** (20 FRs scored). PII note: this batch resolves and processes **`cardNo` (national ID)** and mobile numbers, so any FR that is the primary PII sink carries Data-sensitivity = 3 (PDPA MUST-principle applies).

## 6-Axis Risk Score
Each axis 0–3 (0 = none, 3 = severe). Band: **P0 ≥14** (or Data-sensitivity=3 + a MUST-principle) · **P1 10–13** · **P2 5–9** · **P3 0–4**.

| FR/SC | TCs | Business | Complexity | Change-freq | Integration | Data-sens(PDPA) | Hist-defect | Score | Band |
|-------|-----|----------|-----------|-------------|-------------|-----------------|-------------|-------|------|
| FR-009 | TC-030,031,032,033,034 | 3 | 3 | 1 | 3 | 3 | 1 | 14 | **P0** |
| FR-008 | TC-028,029 | 3 | 2 | 1 | 3 | 3 | 1 | 13 | **P0** (Data-sens=3 + PDPA MUST) |
| FR-012 | TC-055,056,057,064 | 3 | 2 | 1 | 2 | 3 | 1 | 12 | **P0** (Data-sens=3 + audit MUST) |
| FR-010a | TC-043,044,045,046,047,048,049,063 | 3 | 3 | 2 | 2 | 1 | 2 | 13 | P1 |
| FR-005 | TC-016,017,018,019 | 3 | 2 | 1 | 2 | 3 | 1 | 12 | P1 |
| FR-011 | TC-053,054 | 3 | 2 | 1 | 3 | 2 | 1 | 12 | P1 |
| FR-002 | TC-003,004,005,006 | 3 | 2 | 1 | 2 | 2 | 1 | 11 | P1 |
| FR-003a | TC-009,010,011 | 2 | 3 | 1 | 1 | 1 | 2 | 10 | P1 |
| FR-004 | TC-012,013,014,015 | 3 | 2 | 1 | 2 | 1 | 1 | 10 | P1 |
| FR-006 | TC-020,021,022 | 3 | 1 | 1 | 2 | 2 | 1 | 10 | P1 |
| FR-007 | TC-023,024,025,026,027 | 3 | 2 | 1 | 2 | 1 | 1 | 10 | P1 |
| FR-008b | TC-037,038,039,065 | 3 | 2 | 1 | 1 | 2 | 1 | 10 | P1 |
| FR-008c | TC-040,066 | 3 | 2 | 1 | 1 | 2 | 1 | 10 | P1 |
| FR-014 | TC-060,061,062,065,070 | 2 | 2 | 1 | 2 | 2 | 1 | 10 | P1 |
| FR-009a | TC-035,036 | 2 | 2 | 1 | 3 | 1 | 1 | 10 | P1 |
| FR-001 | TC-001,002 | 3 | 1 | 1 | 2 | 1 | 1 | 9 | P2 |
| FR-013 | TC-058,059,069 | 2 | 1 | 1 | 2 | 1 | 1 | 8 | P2 |
| FR-010 | TC-041,042 | 2 | 1 | 1 | 1 | 1 | 1 | 7 | P2 |
| FR-003 | TC-007,008 | 2 | 1 | 1 | 1 | 1 | 1 | 7 | P2 |
| FR-010b | TC-050,051,052 | 2 | 1 | 1 | 1 | 1 | 1 | 7 | P2 |
| SC-001 (perf) | TC-068 | 2 | 1 | 1 | 1 | 1 | 1 | 7 | P2 |

**Band totals:** P0 = 3 FRs · P1 = 11 FRs · P2 = 6 FRs (incl. SC-001) · P3 = 0.

## Likelihood × Impact Heatmap

|                        | Impact Low | Impact Med | Impact High |
|------------------------|-----------|-----------|-------------|
| **Likelihood High**    | FR-010b | FR-010, FR-002 | **FR-009 (P0)**, **FR-010a**, FR-003a |
| **Likelihood Med**     | FR-003 | FR-001, FR-013, FR-009a | **FR-008 (P0)**, **FR-012 (P0)**, FR-005, FR-011, FR-008b, FR-008c |
| **Likelihood Low**     | — | SC-001 (perf) | FR-004, FR-006, FR-007, FR-014 |

_Rationale for High-likelihood/High-impact: FR-009 (2-channel decision) and FR-010a (config-driven content) are the most logic-dense, config-dependent paths — a wrong decision or missing `cf_catalog` row directly mis-targets or blanks a customer SMS. FR-003a leap-day math is a classic defect magnet._

## Test-First Order
1. **P0 — FR-009** (TC-030,031,032,033,034): the 2-channel SEND/EXCLUDE table is the campaign's core targeting rule (SC-008). Wrong logic spams active users or misses the target group. External integration + national-ID PII.
2. **P0 — FR-008** (TC-028,029): `policy_no→cardNo` mapping gates every downstream step and handles national ID. Failure/misroute here poisons dedup, channel check, and logging.
3. **P0 — FR-012** (TC-055,056,057,064): audit trail + PDPA. Every send/skip must be recorded; PII must be protected (constitution MUST → TC-064 is mandatory).
4. **P1 — FR-010a** (TC-045,046,047,048,049): message build + config guards. TC-046/047/048 (missing/inactive `cf_catalog`) enforce SC-005 "no empty-variable SMS."
5. **P1 — FR-005 / FR-011** (TC-016,017,018 / TC-053,054): recipient selection (PII) and gateway submission (SC-002 `refer_no`).
6. **P1 — FR-002 / FR-003a** (TC-003..006 / TC-009,010,011): birthday matching incl. the KEY leap-day edge (TC-010).
7. **P1 — FR-004/006/007** (targeting filters), **FR-008b/008c** dedup (TC-037,038,040 — KEY customer dedup), **FR-009a** abnormal-response handling, **FR-014** Manual Fix incl. RBAC (TC-062).
8. **P2 — FR-001, FR-003, FR-010, FR-010b, FR-013, SC-001** last (schedule, boundaries, file format, alerting, performance).

## Cross-links
- **P0/P1 FRs with zero TC (coverage gaps):** none — all P0/P1 FRs have ≥1 TC (see FR→TC map in `test-scenarios`).
- **P0/P1 TCs that MUST NOT be `Not Run` at report time:** TC-028, TC-029, TC-030, TC-031, TC-032, TC-033, TC-035, TC-037, TC-040, TC-045, TC-046, TC-047, TC-048, TC-049, TC-053, TC-055, TC-056, TC-062 (RBAC), TC-064 (PDPA), TC-067 (outage resilience), TC-009, TC-010 (leap-day). Leaving any of these unverified feeds Residual Risk at `report`.
- **Constitution/PDPA MUST anchors:** TC-064 (PII masking, FR-012) and TC-062 (RBAC on Manual Batch, FR-014) — a missing or failing result on either caps the release verdict at NO-GO regardless of pass rate.

_Deterministic: same spec + same TCs → same scores and bands._
