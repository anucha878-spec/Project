# 01 — Requirement Review (QA) — CSMS-004 Customer Birthday

- **Skill:** `/requirement-review` (Spec-Kit 01) · **Leg:** A · **Date:** 2026-07-09
- **Read coverage (declared honestly):** `spec.md` read in full. No `data-model.md`, `contracts/`, `plan.md`, checklist, mockup, or diagram exists in the feature folder (batch backend feature). Cross-checks below are against `spec.md` only; no claim of checking files not opened.

## 1. Summary
- **Overall Quality Score:** 82 / 100
- **Overall Risk Level:** Medium
- The spec is unusually complete for a batch feature: FRs are enumerated with concrete table/column/code references, two Clarifications resolve dedup-level and Feb-29 handling, and Assumptions pre-empt several ambiguities (field naming, category code, GOV inclusion). Main defects are **traceability/consistency** (US5 scenario numbering scrambled), a **self-declared source deviation** (category code 112 vs 113) needing crosscheck, and several **unquantified thresholds** (Go Live date, CSV timeout SLA, retry interval, `credit_amount` semantics) that block exact-boundary testing.

## 2. Requirement Issues List

| ID | Type | Severity | Description | Impact | Suggestion |
|----|------|----------|-------------|--------|------------|
| RQ-001 | `INCOMPLETE_ACCEPTANCE_CRITERIA` | Major | **US5 Acceptance Scenarios are numbered out of sequence: 1, 6, 7, 2, 3, 4, 5** (spec lines 138–144). Scenarios "6" (per-customer dedup) and "7" (Feb-29 leap) are inserted between "1" and "2", so the list reads 1,6,7,2,3,4,5. | A reader/auditor may believe scenarios 2–5 are duplicated/misplaced or that 6–7 belong to another story; risks a TC being skipped during manual traceability. | Renumber US5 to 1–7 in document order. QA has **derived one TC per distinct scenario regardless** (7 scenarios → TC-031/34, TC-007, TC-045, TC-046, TC-048, TC-050). |
| RQ-002 | `CONFLICT_REQUIREMENT` | Major | **Category code 112 vs 113.** Spec resolves `SMS_CATEGORY_CODE='112'`=`MKTBirthday` (FR-010, Assumptions) but states source doc §5 uses `'113'`/`MKTWelcomeNewCust`, declared a copy-error from CSMS-001. | If the implemented batch reads `113`, the CSV Category + template lookup are wrong → wrong campaign message. Self-declared deviation must be verified against actual config, not assumed. | Crosscheck the deployed `SMS_CATEGORY`/`sms_message_schedule` config: confirm `112`=`MKTBirthday` is what the batch queries. TC-051 blocks on this. |
| RQ-003 | `DATA_DEFINITION_GAP` | Minor | `sms_sent_date` declared `DATE` but examples are timestamps; year-scoped dedup semantics ("this year not null") stated as assumption. | Off-by-one risk on dedup at year boundary if type/semantics differ in build. | SA confirm exact type + "current birthday year" comparison rule. |
| RQ-004 | `DATA_DEFINITION_GAP` | Minor | GOV inclusion is an assumption (example `CUSTOMER_BIRTHDAY` table omits GOV). | GOV customers may be silently dropped/not recorded. | SA confirm GOV is selected AND recorded. TC-047 covers. |
| RQ-005 | `NON_TESTABLE_REQUIREMENT` | Major | **Go Live exact date not given** — only "year ≥ 2026". FR-003 boundary (last-day-before vs first-day) cannot be tested precisely. | Cannot verify the exact "no backdated before Go Live" cut-over; boundary defect could ship. | SA provide exact Go Live date. TC-052 `[BLOCKED-RQ005]`. |
| RQ-006 | `DATA_DEFINITION_GAP` | Major | **`credit_amount`** required in `CUSTOMER_BIRTHDAY` (FR-012) but no rule defines its value/source for a birthday campaign (message references reward string var2, not a credit). | Field may be written wrong/NULL; audit incomplete. | SA define `credit_amount` source/meaning (or confirm it is N/A for this batch). TC-053 `[BLOCKED-RQ006]`. |
| RQ-007 | `NON_TESTABLE_REQUIREMENT` | Minor | "CSV not created **within the time limit**" (FR-013) — threshold unquantified ("inherits CSMS monitoring standard"). | Cannot test the timeout trigger boundary. | SA provide the numeric SLA/timeout. TC-054 `[BLOCKED-RQ007]`. |
| RQ-008 | `MISSING_REQUIREMENT` | Minor | Email distribution list + email content format not specified (only "IT Dev + user group"). | Cannot assert recipients/content. | SA provide recipient list + template. |
| RQ-009 | `INCOMPLETE_ACCEPTANCE_CRITERIA` | Minor | System-level API-outage retry "≤3 spaced" — interval/spacing unquantified. | Retry-timing boundary untestable. | SA provide retry interval. TC-049 tests count/stop-round behavior only. |
| RQ-010 | `AMBIGUOUS_REQUIREMENT` | Minor | Precedence when `LINE` abnormal (E13/empty) **and** `APP=E00`: FR-009a says skip+record; FR-009 says APP=E00→exclude. Which wins? | Ambiguous decision-table cell → wrong send/skip classification. | SA confirm precedence (QA assumes per-item abnormal → skip+record takes precedence; TC-029/030 note assumption). |
| RQ-011 | `DATA_DEFINITION_GAP` | Minor | Relationship between `rewards` (=var2 string, e.g. "500 เหรียญ") and numeric `credit_amount` unclear (linked to RQ-006). | Reward vs credit mismatch in audit. | SA clarify. |
| RQ-012 | `MISSING_EDGE_CASE` | Minor | Behavior when `cf_catalog` has **>1 active** REWARDS/LINE_LINK row for `CSMS_SBD_Birthday` (spec assumes single active config). | Non-deterministic var2/var3 if multiple active. | SA confirm uniqueness constraint or selection rule. |

## 3. Missing Test Scenarios (should-exist — not authored here)
- **Positive:** birthday match across all 4 policy types inforce; both send-eligible channel combinations; template fallback path; per-customer single-SMS with multi-policy.
- **Negative:** each exclusion/skip branch (non-inforce, DNC, non-agent, org-range, both-mobiles-empty, cardNo-not-found, LINE active, APP present, missing config); no-empty-variable enforcement.
- **Boundary:** Feb-28/29 leap vs non-leap; `seq_no` starts at 1; policy_org range endpoints (2070001/2079999/5070001/5079999); Go Live date (blocked RQ-005).
- **Integration:** cardNo mapping API, ESB/SMS Gateway refer_no, config lookups, idempotent Manual Fix re-run.

## 4. Questions for SA/BA
All captured as RQ-001…RQ-012 above. Highest priority to answer before execution: **RQ-002 (112 vs 113)**, **RQ-005 (Go Live date)**, **RQ-006 (`credit_amount`)**, **RQ-010 (decision-table precedence)**.

## 5. NFR presence
SC-001/002/006/007 are performance/SLA NFRs → **flagged and routed** in `NFR-routing.md` (out of functional track). No security/a11y/compat NFR present. Not silently dropped.

## 6. Testability Score
- **Testability:** 80 / 100
- **Reason:** Most rules are concrete (codes, columns, decision table) and directly testable. Deductions: 4 unquantified thresholds (RQ-005/007/009 + credit_amount RQ-006) block exact-boundary assertions, and US5 numbering (RQ-001) plus 112/113 (RQ-002) create traceability/consistency risk. No running environment further blocks actual verification (design-side only this run).
