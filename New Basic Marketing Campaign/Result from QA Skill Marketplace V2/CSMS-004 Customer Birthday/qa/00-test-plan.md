# 00 — Test Plan — CSMS-004 Customer Birthday (`csms-004-birthday`)

- **Skill:** `/test-plan` (Spec-Kit 00) · **Leg:** A · **Date:** 2026-07-09
- **Source read:** `spec.md` (full); no other files present in feature folder.

## 1. Summary
Daily batch (09:00) that selects customers whose birth day/month matches the run date, filters to agent-channel inforce policies not on Do-Not-Contact, verifies **both** LINE Ocean Connect + Ocean Club App are unused, dedups per `cardNo`, resolves gift/link from `cf_catalog`, builds a UTF-8 CSV, and dispatches SMS via ESB → SMS Gateway with full audit logging + failure email + Manual Fix.
**Plan verdict:** Design-side artifacts can be produced fully from `spec.md`. **Execution is BLOCKED** — no running batch/app/DB/API environment available (per project scope: hard wall at `execute`). All statuses remain **Not Run**.

## 2. Scope
**In-scope (functional/integration, design-side):** FR-001…FR-014 (incl. FR-003a, FR-008b, FR-008c, FR-009a, FR-010a, FR-010b) — birthday match incl. Feb-29 leap handling, inforce filter, DNC filter, agent-channel filter, mobile selection, cardNo mapping, 2-channel digital-status decision table, per-customer dedup, template+config resolution (no empty-variable SMS), CSV format, gateway submission, audit logging, failure email, Manual Fix idempotency.
**Out-of-scope:** Admin Dashboard UI/field design (reuses existing central CSMS Manual Fix page); CSMS credit-calculation logic; gift/campaign value definition (marketing-owned via `cf_catalog`); changes to sibling batches CSMS-001/002/003; backdated sending before Go Live.
**NFR scope:** Performance/SLA (SC-001 5min/10k, SC-002 99% delivery, SC-006 email ≤15min, SC-007 Manual Fix ≤1h) are **out of functional track** → routed in `NFR-routing.md` (perf/monitoring track). Security/a11y: none stated.

## 3. Test Levels & Types
- **Integration** (primary): DB filter chain, `cisappapi` calls, ESB/SMS Gateway, config lookups.
- **Business-rule / decision-table**: 2-channel send criteria (FR-009).
- **State/idempotency**: dedup + Manual Fix re-run.
- functional vs non-functional: functional here; NFR routed out.
- Automation: batch has no UI — Playwright specs are **generated as design-side placeholders** (`test.fixme`, not executable without a driven interface/API harness).

## 4. Environment & Data
- Target env: SIT (batch job + DWConsole + `cisappapi` + ESB/SMS Gateway) — **not available this run**.
- Test data strategy: **SYNTHETIC only** (see `06-test-data.json`); no production PII. 6 categories incl. Feb-29 birthdays + missing `cf_catalog` entry.
- Dependencies that must be up before execution: DWConsole tables, `cisappapi@11.100.8.44`, ESB→SMS Gateway, `cf_catalog`/`sms_message_schedule`/`sms_category`/`SMS_CATEGORY` config.

## 5. Entry / Exit / Suspension Criteria
- **Entry:** spec approved; SIT env up; `03-test-cases.md` ready; synthetic data provisioned; RQ-001..012 answered (or accepted-risk noted).
- **Exit:** Requirement coverage = 100%; 0 open P0/P1 defect; all CRITICAL/HIGH risks validated; reconcile (RTM) = PASS. **Not met this run** (execution pending).
- **Suspension:** SIT down, `cisappapi` unreachable, or SMS Gateway unavailable → suspend; resume when restored.

## 6. Approach & Risk Focus
- Techniques: **Decision Table** (FR-009 2-channel), **BVA/date boundary** (Feb-28/29 leap, Go Live year), **EP** (policy_status classes), **negative-per-branch** (each skip/exclude path), **state/idempotency** (dedup, Manual Fix).
- Focus first: FR-009 decision table + FR-008b/c dedup + FR-010a no-empty-variable (SC-005) + Feb-29 edge — highest business/compliance impact.

## 7. Assumptions / Dependencies / Plan Risks
- Inherits CSMS-001/002/003 conventions for error/log/Manual Fix (SA assumption).
- Category code resolved to `112` (source §5 `113` treated as copy error) — **crosscheck RQ-002**.
- Plan risk: no execution env → verdict will be **NO-GO / blocked pending SIT execution**.

## 8. Open Questions (RQ)
See `01-requirement-review.md` §4 — RQ-001 (US5 numbering), RQ-002 (112 vs 113), RQ-005 (Go Live exact date), RQ-006 (`credit_amount`), RQ-007 (CSV timeout SLA value), RQ-009 (retry interval), etc.
