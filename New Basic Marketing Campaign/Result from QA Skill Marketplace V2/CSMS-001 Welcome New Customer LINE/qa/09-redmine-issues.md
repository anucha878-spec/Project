# 09 — Redmine Issues — CSMS-001 Welcome New Customer (LINE)

- **Status:** ⛔ **BLOCKED (partial) — NO tickets created** · **Date:** 2026-07-09
- **Skill:** `/redmine-logging` (Spec-Kit 09)

## Why blocked
`/redmine-logging` transforms **finalized QA findings** (from `08` + `07`) into Redmine issues. `07` (result-analysis) is BLOCKED (no execution) and `08` is design-phase NO-GO, so there are **no executed defects** to log yet. Also, per skill default and the task, this run is **generate-only — DO NOT create any Redmine tickets** (outward-facing). Nothing was POSTed to any Redmine.

> Below is what **would** be logged, drawn only from design-phase findings in `01`/`04`/`05` (requirement RQs + risks). These are **candidates**, not created tickets. Execution-time defects (from `07`) will be added after `06b` runs.

## Candidate issues (NOT created — for review only)

### 4. Test & Coverage Gaps  /  Requirement Clarifications (from 01/00b)
- **RM-CAND-01 · TEST/Clarification · P1** — RQ-002: CSV filename year format inconsistency (FR-013 "พ.ศ." vs example "26" CE). Blocks SC-005 file-convention assertion (TC-036). Linked: FR-013, ATOM-034, TC-036.
- **RM-CAND-02 · TEST/Clarification · P1** — RQ-004: batch-failure timeout/SLA value not in spec (FR-018). Blocks SC-004 alert-timing assertion (TC-050). Linked: FR-018, ATOM-048, TC-050.
- **RM-CAND-03 · TEST/Clarification · P2** — RQ-001: dedup tie-break when issue_date equal not confirmed (EC-002/A-007). Affects determinism/SC-003 (TC-027). Linked: FR-009, ATOM-021, TC-027.
- **RM-CAND-04 · TEST/Clarification · P3** — RQ-003: credit_amount expected value not specified (FR-017 reuse). Presence-only assertion (TC-044). Linked: FR-017, ATOM-044, TC-044.
- **RM-CAND-05 · TEST/Clarification · P3** — RQ-005: Manual Fix exact validation messages = central screen, not in spec (FR-019). (TC-060). Linked: FR-019, ATOM-052, TC-060.

### 5. Risk & Stability Tasks (from 05, high-risk but not yet failed)
- **RM-CAND-06 · SUPPORT/TASK · P1** — No SIT env / batch test harness provisioned → suite un-executable (blocks all P0/P1 verification). Linked: 06b, RISK (automation).
- **RM-CAND-07 · RISK · P2** — PII + Do-Not-Contact handling has no security/compliance track (see `NFR-routing.md`). Linked: FR-005/006, NFR-routing.
- **RM-CAND-08 · RISK · P2** — DNC freshness (A-004) and card_no→name uniqueness (A-003) are untested assumptions (wrong-match risk not covered by skip-if-missing TC-021).

## Notes
- No CRITICAL/HIGH **executed** defect exists yet (nothing ran) → the "Critical Bugs (P0)" and "High Priority (P1)" bug sections are **empty pending 07**.
- Dedup-before-create (B4) will apply if/when logging for real: query open issues by REQ/TC ref first, do not double-create.

## Unblock
After `06b`+`07` produce real defects, re-run this stage to add bug tickets and (only if the user explicitly authorizes) POST to Redmine.
