# 01 — QA Requirement Review — CSMS-002 Welcome New Customer Round 2

**Feature:** `csms-002-welcome-round2` · **Skill:** `/requirement-review` (Leg A, source = `spec.md`) · **Date:** 2026-07-09

**Read coverage (declared truthfully):** `spec.md` read **in full** (Business Context, Roles, Scope, 10 Clarifications, US1–US3 + acceptance scenarios, 8 Edge Cases, FR-001..FR-020.2 (26 FRs), 7 Key Entities, SC-001..SC-007, Assumptions). **No** `data-model.md`, `contracts/`, mockup, or `sources/` exist in this feature folder — so NOT cross-checked against them (they are absent, not skipped). Upstream reference `0SPEC_BATCH-CSMS-002_...md` lives on another machine and is **unavailable** — field-level ground truth could not be verified (drives RQ-003).

## 1. Summary
- **Overall Quality Score:** 82 / 100
- **Overall Risk Level:** Medium
- The spec is unusually complete for a batch: 10 clarifications resolved, edge cases enumerated, and it explicitly inherits CSMS-001 rulings. Business rules (send/exclude truth table, Inforce-by-type, dedup) are precise and testable. Remaining defects are concentrated in **traceability packaging** (FR-020.2 merges two requirements), **data-level detail** (policy-type code char, log/CSV field layout), and a **missing security/PII NFR**. None block test design; several must be answered before test **expected results** can be frozen.

## 2. Requirement Issues List

| ID | Type | Severity | Description (anchored) | Impact | Suggestion |
|---|---|---|---|---|---|
| **RQ-002** | `BUSINESS_RULE_INCONSISTENCY` / structural | **Major** | **FR-020.2 merges two distinct requirements** into one clause: (1) Manual-Fix date-range semantics (targets = selected date − N, current N) AND (2) the **daily reconcile-report** definition (total/'S'/'F'/excluded-by-reason + ORD/IND/GOV/PA breakdown). The reporting requirement therefore has **no FR number of its own**. | Reporting scope can be silently dropped in dev/traceability; RTM cannot cleanly map "report" to a requirement. Two unrelated behaviors share one test anchor. | Split into FR-020.2 (Manual-Fix date rule) and a new **FR-021 (daily central report)** mirroring 002:FR-021. Until then QA tracks reporting as **atom A-59** and this RQ. |
| **RQ-001** | `DATA_DEFINITION_GAP` | **Major** | Policy-type screening code character unresolved: Clarification/Assumptions assert letters `'O'/'I'/'G'/'P'` (per 002 A-005) but state the source doc shows `'0'/'1'` for ORD/IND and calls it a PDF-conversion error (FR-018, Assumptions). Real source-system char **unconfirmed**. | If codes are actually numeric, the Inforce/Do-Not-Contact/log mapping and the report breakdown all key off the wrong value → wrong-group sends (violates SC-003). | Confirm actual character in real `ili_policy_master` / screening feed during plan; freeze map before TC expected results. |
| **RQ-003** | `DATA_DEFINITION_GAP` | **Major** | Per-policy log **field list/order** (FR-018b) and CSV **column layout** (FR-017) not enumerated in `spec.md`; Assumptions flag source table **skips field #7** (suspected PDF drop). | Cannot assert exact CSV/log schema; automation of file-format checks is blind. | Enumerate against real `WELCOME_NEW_CUST_LINE` (CSMS-001) in plan; resolve field #7. |
| **RQ-005** | `MISSING_REQUIREMENT` (NFR) | **Major** | **No security/PII NFR.** SMS carries insured name + phone; CSV UTF-8 file transits ESB→SMS Gateway; logs store name/phone/cardNo. No requirement on PII masking, file retention/cleanup, access control on Manual Fix, or log protection. | PII exposure risk; audit/compliance gap for a banking/insurance batch. | Add security/PII NFR; route to pentest track (`NFR-routing.md`). Out of functional test scope but must not be silent. |
| **RQ-004** | `AMBIGUOUS_REQUIREMENT` | **Minor** | Failure-notify timing ambiguous: FR-019 = "standard CSMS SLA"; SC-005 = "within 15 minutes of detection". | Two different "on-time" oracles → non-deterministic pass/fail on notification timing. | Pick one machine-checkable threshold (recommend SC-005's 15 min). |
| **RQ-006** | `DATA_DEFINITION_GAP` | **Minor** | External registration-service response schema (`channel`, `isBlockLine`, codes `E00/E02/E13`) referenced but not defined in `spec.md`. | Negative/boundary data for the send truth table is under-specified. | Attach service contract in plan. |
| **RQ-007** | `DATA_DEFINITION_GAP` | **Minor** | `credit_amount` is a logged field but its value logic is "existing CSMS, out of scope" (Assumptions). | Unclear whether a value is expected per row in SIT log assertions. | Confirm expected `credit_amount` presence/source for this batch. |
| **RQ-008** | `INCOMPLETE_ACCEPTANCE_CRITERIA` | **Minor** | FR-012 retry "max 3, spaced" — interval unquantified. | Retry-timing test has no exact oracle. | Specify spacing interval. |
| **RQ-009** | `DATA_DEFINITION_GAP` | **Minor** | FR-018.1 "ID ref back to round-1" — linkage field name/mechanism unnamed. | Cannot assert the exact linkage column (SC-006 traceability). | Name the FK/ref field in plan. |

> **Consistency check (passed):** The send truth table (FR-009/FR-010) is internally consistent with US1 AS-1/2/3 and Clarification on E02. The "(หรือ channel='LINE')" ambiguity in the source doc was explicitly resolved in Clarifications (E02 = not-found, same code both channels) — no defect remains there. GOV inclusion resolved (4 types). No CONFLICT_REQUIREMENT found among FRs.

## 3. Missing Test Scenarios (should-exist — not written here)
- **Positive:** send rule (a) all-not-registered; send rule (b) LINE-blocked+no-APP; N-configurable takes effect next round; Manual Fix reprocesses only NULL-sent-date rows.
- **Negative:** cardNo not found; E13 exception; empty channel/isBlockLine; no insured name; no Active config; service-down retry-exhausted; SMS Gateway send failure.
- **Boundary:** day-count N-1 / N / N+1 (cohort exact-day); mobile1 empty→mobile2; both phones empty; round-1 day with zero targets; N changed 20→15 mid-campaign.
- **Integration:** round-1 linkage ID present & correct; dual-channel service call batching (~1,000/day); central daily report breakdown by 4 policy types; deliver via ESB→Gateway.
- **Dedup:** cross-round (already 'S'); in-round grouping (same name/surname/phone, multiple policies) → 1 message + deterministic pick + non-selected logged.

## 4. Questions for SA/BA (RQ — do NOT guess; carry to plan)
1. **RQ-001** — Confirm policy-type code character in the real source: `'O'/'I'/'G'/'P'` or `'0'/'1'`?
2. **RQ-002** — Split FR-020.2: give the **daily central report** its own FR number (proposed FR-021)? Confirm exclusion-reason taxonomy is frozen.
3. **RQ-003** — Provide exact per-policy log field list/order + CSV column layout; resolve missing field #7.
4. **RQ-004** — Single failure-notification SLA: FR-019 "standard" vs SC-005 "15 min"?
5. **RQ-005** — Add security/PII NFR (masking, retention/cleanup of CSV, access control, log protection)?
6. **RQ-006** — Provide registration-service response contract (`channel`/`isBlockLine`/`E00/E02/E13`).
7. **RQ-007** — Is a `credit_amount` value expected per row for this batch in SIT?
8. **RQ-008** — Retry spacing interval for FR-012?
9. **RQ-009** — Name the round-1 linkage field/mechanism (FR-018.1).

## 5. Testability Score
- **Testability:** 84 / 100
- **Reason:** Nearly all rules are expressed as concrete, verifiable conditions (status codes, remark codes, E02/E13, deterministic tie-break, exact filename pattern, sent_status values). Points deducted for: unfrozen policy-type code char (RQ-001) and log/CSV layout (RQ-003) which block exact schema assertions; dual SLA (RQ-004); and reporting requirement lacking its own FR (RQ-002). These are answerable in plan and do not block TC design (blocked expecteds carried as `[BLOCKED]`/RQ per Strict-Data-Policy).

## NFR routing
See `qa/NFR-routing.md` — RQ-005 (security/PII) routed to pentest track (pending); ~1,000/day volume → perf track (pending env). Neither validated in this functional run.
