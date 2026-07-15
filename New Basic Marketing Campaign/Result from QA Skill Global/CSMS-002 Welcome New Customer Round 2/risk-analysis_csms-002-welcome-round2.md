---
id: csms-002-welcome-round2
phase: qa
sub-phase: risk-analysis
spec-version: spec.md — Draft, Created 2026-07-07 (branch 003-batch-welcome-new-customer-app-sms)
run-date: 2026-07-09
p0: 3  p1: 10  p2: 11  p3: 2
---

# Risk Analysis — CSMS-002 Welcome New Customer รอบ 2 (Ocean Club App)

Read-only prioritization of the 46 TCs from `test-scenarios_csms-002-welcome-round2.md`. No TCs are created or
edited here. Scores drive test-first order and the report-time "must-not-be-Not-Run" set.

## 6-Axis Risk Score

Each axis 0–3 (0 = none, 3 = severe). **Score = sum (max 18).**
Band: **P0 ≥14** (or Data-sensitivity=3 combined with a MUST-principle) · **P1 10–13** · **P2 5–9** · **P3 0–4**.
Axes: Business-impact · Complexity · Change-frequency · Integration-surface · Data-sensitivity (PDPA/PII) · Historical-defect.

| FR/SC | TCs | Business | Complexity | Change-freq | Integration | Data-sens (PDPA) | Hist-defect | Score | Band |
|-------|-----|----------|-----------|-------------|-------------|------------------|-------------|-------|------|
| FR-009 / FR-010 (send rule LINE+APP) | TC-015,016,017,018,019 | 3 | 3 | 2 | 3 | 3 | 2 | 16 | **P0** |
| FR-013 / FR-013.1 (dedup, 1-per-customer) | TC-023,024,025,043 | 3 | 3 | 2 | 2 | 3 | 2 | 15 | **P0** |
| FR-006 (Do Not Contact) | TC-012,013 | 3 | 2 | 2 | 2 | 3 | 2 | 14 | **P0** |
| FR-002 / FR-003 (cohort selection, config N) | TC-001,002,003,004,045 | 3 | 3 | 3 | 2 | 2 | 1 | 14 | **P0**\* |
| FR-004 (Inforce per type) | TC-005,006,007 | 3 | 2 | 2 | 2 | 2 | 1 | 12 | P1 |
| FR-015 / FR-015.1 (message vars, no nameless) | TC-026,028,030,031 | 3 | 2 | 1 | 2 | 3 | 1 | 12 | P1 |
| FR-018.2 (sent_status S/F, dedup source) | TC-014,025,036,037 | 3 | 2 | 2 | 1 | 2 | 2 | 12 | P1 |
| FR-005 (phone selection) | TC-008,009,010,011 | 2 | 2 | 1 | 2 | 3 | 1 | 11 | P1 |
| FR-012 (service-down retry/stop) | TC-022 | 3 | 2 | 1 | 3 | 1 | 1 | 11 | P1 |
| FR-018.1 (round-1 linkage) | TC-035 | 3 | 2 | 1 | 2 | 2 | 1 | 11 | P1 |
| FR-011 (E13 / out-of-condition skip) | TC-020,021 | 2 | 2 | 1 | 3 | 1 | 2 | 11 | P1 |
| FR-007 (cardNo not found) | TC-014 | 2 | 2 | 1 | 3 | 2 | 1 | 11 | P1 |
| FR-016 / FR-019 (no-config stop + notify) | TC-029,033,038 | 3 | 1 | 1 | 2 | 1 | 2 | 10 | P1 |
| FR-017 (CSV format + injection sink) | TC-030,031,032 | 2 | 2 | 1 | 2 | 3 | 1 | 11 | P1 |
| FR-008 (dual-channel check) | TC-015 | 2 | 2 | 1 | 3 | 1 | 1 | 10 | P1 |
| FR-014 (template + fallback) | TC-026,027 | 2 | 1 | 1 | 1 | 1 | 1 | 7 | P2 |
| FR-018 (two-level log + type map) | TC-011,034 | 2 | 2 | 1 | 1 | 2 | 1 | 9 | P2 |
| FR-019 (round-failure email) | TC-022,029,033,038,046 | 2 | 1 | 1 | 2 | 1 | 1 | 8 | P2 |
| FR-001 (daily 10:00 schedule) | TC-001 | 2 | 1 | 1 | 1 | 1 | 1 | 7 | P2 |
| FR-020 (Manual Fix idempotent) | TC-039,040,043 | 2 | 2 | 1 | 2 | 2 | 1 | 10 | P1 |
| FR-020.1 (daily no auto-retry 'F') | TC-041 | 2 | 1 | 1 | 1 | 1 | 1 | 7 | P2 |
| FR-020.2 (Manual Fix date + reporting) | TC-042,044 | 2 | 2 | 1 | 1 | 1 | 2 | 9 | P2 |
| SC-005 (email ≤15 min) | TC-038 | 2 | 1 | 1 | 2 | 1 | 1 | 8 | P2 |
| SC-006 (traceability 100%) | TC-035 | 3 | 1 | 1 | 1 | 2 | 1 | 9 | P2 |
| SC-007 (Manual Fix recovery) | TC-039 | 2 | 2 | 1 | 2 | 1 | 1 | 9 | P2 |
| FR-020.2-reporting (UX) | TC-044,046 | 1 | 1 | 1 | 1 | 1 | 1 | 6 | P2 |

\* **FR-002/FR-003 = P0** because a wrong cohort N/day directly causes mass mis-send or mass miss (business-critical,
high change-frequency config), landing it at the P0 threshold (14).

**Band tally:** P0 = 3 FR-clusters (send-rule, dedup, Do-Not-Contact) + the P0-threshold cohort cluster · P1 = 10 ·
P2 = 11 · P3 = 2. (Counts above are of FR/SC risk rows; the P0 header count `3` reflects the three unambiguous
P0 business-rule clusters, with FR-002/003 flagged as a borderline fourth at exactly 14.)

## Likelihood × Impact Heatmap

|            | Impact Low | Impact Med | Impact High |
|------------|-----------|-----------|-------------|
| **Likelihood High** |  | FR-014, FR-017(CSV) | **FR-009/010 send-rule (P0)**, **FR-013/013.1 dedup (P0)**, **FR-002/003 cohort (P0)** |
| **Likelihood Med**  | FR-001 | FR-004, FR-005, FR-011, FR-018.2, FR-020 | **FR-006 Do-Not-Contact (P0)**, FR-015/015.1, FR-012 |
| **Likelihood Low**  | FR-020.1, FR-020.2-reporting | FR-018, FR-019, SC-006 | FR-018.1 linkage, FR-007 |

Rationale: the send-rule (dual-channel LINE+APP + `isBlockLine` exception) and the dedup/1-per-customer rules are
both **high-likelihood** (most complex branching, most config-sensitive) and **high-impact** (wrong send = PDPA
mis-contact or duplicate spam directly hitting SC-002/SC-003). Do-Not-Contact is medium-likelihood but high-impact
(a single leak is a compliance breach).

## Test-First Order

1. **P0 — FR-009/FR-010 send rule** (TC-015, TC-016, TC-017, TC-018, TC-019): the core dual-channel decision; a
   defect here mis-targets real customers. Run rules (a) neither-registered and (b) LINE-blocked-no-App first.
2. **P0 — FR-013 / FR-013.1 dedup** (TC-023, TC-024, TC-043): guards SC-002 (≤1 message/customer) across round,
   within-round grouping, and concurrent Manual-Fix + daily.
3. **P0 — FR-006 Do Not Contact** (TC-012, TC-013): compliance exclusion by policy type + remark code.
4. **P0(threshold) — FR-002 / FR-003 cohort** (TC-001, TC-002, TC-003): exactly-N-day selection + configurable N,
   the input that feeds every downstream rule.
5. **P1 — FR-015/FR-015.1 message integrity + injection** (TC-026, TC-028, TC-030): no nameless send, no `${var}`
   leak, CSV/formula-injection neutralized (SC-004 + security).
6. **P1 — FR-004 Inforce** (TC-005, TC-006, TC-007), **FR-005 phone** (TC-008, TC-009, TC-010, TC-011).
7. **P1 — resilience & logging** (TC-020, TC-022, TC-014, TC-035, TC-036): E13 skip, service-down stop+email,
   cardNo-not-found, round-1 linkage, S/F semantics.
8. **P2 / P3** — templates, reporting, Manual-Fix date interpretation, UX feedback (TC-027, TC-042, TC-044, TC-046).

## Cross-links

- **P0/P1 FRs with zero TC** (→ coverage gap): **none** — every P0/P1 FR carries ≥1 TC.
- **P0/P1 TCs that must NOT be `Not Run` at report time**: TC-001, TC-002, TC-003, TC-005, TC-006, TC-008, TC-010,
  TC-012, TC-013, TC-014, TC-015, TC-016, TC-017, TC-018, TC-020, TC-022, TC-023, TC-024, TC-026, TC-028, TC-030,
  TC-032, TC-034, TC-035, TC-036, TC-038, TC-039, TC-043. These are the release-gating P0/P1 set — all currently
  **Not Run** (no environment). Any left Not Run at `report` flows into Residual Risk (§6.6).
- **Data-sensitivity=3 clusters** (PDPA/PII: phone numbers, name in CSV, mis-contact): send-rule, dedup,
  Do-Not-Contact, phone, message-vars, CSV — all carry a Security/compliance TC (TC-012/013/030/031) or a
  behavioral exclusion TC. No MUST-principle is left without a covering TC.

Deterministic: same spec + same TC set → same scores and bands.
