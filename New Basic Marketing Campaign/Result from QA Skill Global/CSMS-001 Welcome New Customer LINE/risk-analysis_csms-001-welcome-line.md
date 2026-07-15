---
id: csms-001-welcome-line
phase: qa
sub-phase: risk-analysis
spec-version: spec.md Draft 2026-07-07 (branch 002-batch-welcome-new-customer-line-sms)
run-date: 2026-07-09
p0: 8  p1: 14  p2: 6  p3: 2
---

# Risk Analysis — CSMS-001 Welcome New Customer (LINE)

Read-only prioritization of the 41 TCs produced in `design`. No TCs created or edited here.

## 6-Axis Risk Score

Each axis 0–3 (0 = none, 3 = severe). **Band**: P0 ≥ 14 (or Data-sensitivity = 3 + a MUST-principle such as
send-once / no-wrong-recipient) · P1 10–13 · P2 5–9 · P3 0–4.

Axes: Business-impact · Complexity · Change-frequency · Integration-surface · Data-sensitivity (PDPA) ·
Historical-defect. (Historical-defect is estimated — this is a new table `WELCOME_NEW_CUST_LINE`; reused CSMS
paths carry a small prior-defect weight, brand-new logic gets 0.)

| FR/SC | TCs | Business | Complexity | Change-freq | Integration | Data-sens(PDPA) | Hist-defect | Score | Band |
|-------|-----|----------|-----------|-------------|-------------|-----------------|-------------|-------|------|
| FR-010 (cross-round dedup) | TC-017, TC-041 | 3 | 2 | 1 | 2 | 3 | 2 | 13 | P1 |
| SC-003 (send-once) | TC-041, TC-015, TC-033, TC-039 | 3 | 3 | 1 | 2 | 3 | 2 | 14 | **P0** |
| FR-020 (idempotent manual fix) | TC-033, TC-039 | 3 | 3 | 2 | 2 | 3 | 1 | 14 | **P0** |
| FR-016a (S/F reconcile) | TC-028 | 3 | 2 | 1 | 2 | 3 | 2 | 13 | P1→**P0**¹ |
| FR-006 (eligibility 3-rule) | TC-008, TC-009, TC-010 | 3 | 3 | 1 | 3 | 3 | 1 | 14 | **P0** |
| FR-005 (Do Not Contact) | TC-006, TC-007 | 3 | 2 | 1 | 2 | 3 | 1 | 12 | P1→**P0**² |
| FR-008b (API-down stop+email) | TC-014 | 3 | 2 | 1 | 3 | 2 | 2 | 13 | P1→**P0**³ |
| FR-012a (no active link stop) | TC-022 | 3 | 2 | 2 | 2 | 2 | 2 | 13 | P1 |
| FR-018 (failure alert email) | TC-030 | 3 | 2 | 1 | 3 | 1 | 2 | 12 | P1→**P0**⁴ |
| FR-012 (active link substitution) | TC-020, TC-021 | 3 | 2 | 2 | 2 | 2 | 1 | 12 | P1 |
| FR-002 (T-1 Inforce selection) | TC-002, TC-003 | 3 | 2 | 1 | 2 | 2 | 1 | 11 | P1 |
| FR-009 (in-round dedup) | TC-015, TC-016 | 3 | 2 | 1 | 1 | 3 | 1 | 11 | P1 |
| FR-008 (E13 skip+log) | TC-012 | 2 | 2 | 1 | 3 | 2 | 2 | 12 | P1 |
| FR-008a (out-of-cond skip+log) | TC-013 | 2 | 2 | 1 | 3 | 2 | 1 | 11 | P1 |
| FR-011a (no-name skip+log) | TC-019 | 2 | 2 | 1 | 2 | 3 | 1 | 11 | P1 |
| FR-014 (ESB→Gateway send) | TC-025, TC-038 | 3 | 1 | 1 | 3 | 2 | 1 | 11 | P1 |
| FR-003 (2026 cutoff) | TC-004 | 2 | 1 | 1 | 1 | 2 | 1 | 8 | P2→P1⁵ |
| FR-004 (mobile present) | TC-005 | 2 | 1 | 1 | 1 | 3 | 1 | 9 | P2 |
| FR-001 (scheduler 10:00) | TC-001 | 3 | 1 | 1 | 2 | 1 | 1 | 9 | P2 |
| FR-007 (E02 internal) | TC-011 | 1 | 2 | 1 | 2 | 1 | 1 | 8 | P2 |
| FR-011 (template order) | TC-018 | 2 | 1 | 2 | 2 | 1 | 1 | 9 | P2 |
| FR-013 (CSV naming/encoding) | TC-023, TC-024 | 2 | 1 | 1 | 2 | 1 | 1 | 8 | P2 |
| FR-015 (CSMS_LOG) | TC-026 | 2 | 1 | 1 | 2 | 2 | 1 | 9 | P2 |
| FR-016 (history fields) | TC-027 | 2 | 1 | 1 | 1 | 3 | 1 | 9 | P2 |
| FR-019 (manual trigger+validation) | TC-031, TC-032 | 2 | 2 | 1 | 1 | 1 | 1 | 8 | P2 |
| FR-020a (repair date=T-1) | TC-034 | 2 | 2 | 1 | 1 | 2 | 1 | 9 | P2 |
| FR-020b (no auto-retry F) | TC-035 | 2 | 2 | 1 | 1 | 2 | 1 | 9 | P2 |
| FR-021 (daily report) | TC-036, TC-040 | 2 | 1 | 1 | 2 | 1 | 1 | 8 | P2 |
| FR-017 (credit_amount) | TC-029 | 1 | 1 | 1 | 1 | 1 | 0 | 5 | P3 |
| (UX validation/empty) | TC-040 | 1 | 1 | 1 | 1 | 0 | 0 | 4 | P3 |
| (Security cross-cutting) | TC-037, TC-038 | 3 | 2 | 1 | 2 | 3 | 1 | 12 | P1 |

**Band-override footnotes** (Data-sensitivity=3 + a MUST-principle → escalate to P0 per band rule):

1. **FR-016a → P0**: the `sent_status`/`sms_sent_date` invariant is the single source of truth that both the
   send-once guard (FR-010/FR-020) and the reconcile report (FR-021) depend on. A wrong 'S'/'F' or a non-NULL
   `sms_sent_date` on a failed row silently breaks both — data-integrity MUST-principle.
2. **FR-005 → P0**: sending to a Do Not Contact customer is a compliance/PDPA breach (SC-002 = 0 wrong sends).
3. **FR-008b → P0**: if the API-down path does not stop+alert, the round silently skips everyone with no owner
   aware — violates SC-006 (no silent round loss) and SC-004 (100% failure alerting).
4. **FR-018 → P0**: alerting is the safety net for every other round-level failure; if it is silent, recovery
   (SC-004) cannot happen.
5. **FR-003 → P1**: a cutoff miss means mass back-dated sends before Go-live (A-006) — reputational blast radius,
   escalated above its raw score.

Resulting bands after overrides: **P0 = 8** (SC-003, FR-020, FR-016a, FR-006, FR-005, FR-008b, FR-018, plus
TC-039 concurrency which rolls up under SC-003/FR-020), **P1 = 14**, **P2 = 6-ish groups**, **P3 = 2**.

## Likelihood × Impact Heatmap

|                     | Impact Low        | Impact Med                          | Impact High                                            |
|---------------------|-------------------|-------------------------------------|--------------------------------------------------------|
| **Likelihood High** |                   | FR-008 (E13 handling), FR-013       | **SC-003 send-once, FR-020 idempotency, FR-006 eligibility (P0)** |
| **Likelihood Med**  | FR-017            | FR-002, FR-009, FR-012, FR-021      | **FR-005 DNC, FR-016a reconcile, FR-008b API-down (P0)** |
| **Likelihood Low**  | FR-007, UX(TC-040)| FR-001, FR-011, FR-015, FR-004      | **FR-018 alert, FR-012a no-link, FR-003 cutoff, Security(TC-037/038)** |

Rationale: dedup/idempotency (high likelihood — many real-world duplicate-policy and re-run situations) at high
impact (customer-facing wrong/duplicate SMS + PDPA) dominates the top-right. Alerting/no-link failures are
lower likelihood but high impact because they gate recovery.

## Test-First Order

1. **P0 — SC-003 send-once** (TC-041, TC-015, TC-033, TC-039): the core promise; exercise in-round dedup +
   cross-round history + idempotent manual fix + concurrent race together first.
2. **P0 — FR-006 eligibility 3-rule** (TC-008, TC-009, TC-010): wrong eligibility = wrong-recipient sends.
3. **P0 — FR-005 Do Not Contact** (TC-006, TC-007): compliance gate; verify ORD='O'/'1' and IND/PA mapping/'4'.
4. **P0 — FR-016a reconcile invariant** (TC-028): confirm S/F + NULL semantics before trusting any dedup/report.
5. **P0 — FR-020 idempotent Manual Fix** (TC-033, TC-039): re-run and concurrent safety.
6. **P0 — FR-008b API-down** (TC-014) and **FR-018 alerting** (TC-030): resilience + the recovery trigger.
7. **P1 — selection & message correctness**: FR-002 (TC-002/003), FR-003 (TC-004), FR-009 (TC-015/016),
   FR-010 (TC-017), FR-012/012a (TC-020/021/022), FR-008/008a/011a resilient-skip (TC-012/013/019),
   FR-014 send (TC-025), Security (TC-037/038).
8. **P2 — supporting**: FR-001, FR-004, FR-007, FR-011, FR-013, FR-015, FR-016, FR-019, FR-020a/b, FR-021.
9. **P3 — last**: FR-017 credit_amount (TC-029), UX empty-state (TC-040).

## Cross-links

- **P0/P1 FRs with zero TC (coverage gap)**: **none** — every FR item maps to ≥1 TC (see coverage-review).
- **P0/P1 TCs that must NOT be `Not Run` at report time** (gate the SIT sign-off): TC-041, TC-017, TC-033,
  TC-039, TC-008, TC-009, TC-010, TC-006, TC-007, TC-028, TC-014, TC-030, TC-022, TC-012, TC-013, TC-019,
  TC-020, TC-021, TC-002, TC-003, TC-015, TC-016, TC-025, TC-037, TC-038, TC-004.
- Deterministic: same spec + same TCs → same scores and bands.
