# 00 — Test Plan — CSMS-002 Welcome New Customer Round 2 (Ocean Club App)

**Feature:** `csms-002-welcome-round2` · **Skill:** `/test-plan` (Leg A) · **Date:** 2026-07-09
**Source read:** `spec.md` (full). Leg A only — no plan.md/contracts/mockup present.

## 1. Summary
Follow-up SMS batch (round 2) that finds customers who received the CSMS-001 Welcome (LINE) SMS exactly N days ago (default 20), whose policy is Inforce, who are NOT registered on LINE Ocean Connect or Ocean Club App, and sends a one-time SMS inviting Ocean Club App registration — with a back-link to the round-1 record.
**Plan verdict:** Design-phase QA can run **fully** (atoms → TC → coverage → risk → synthetic data → automation scaffold). **Execution is BLOCKED** — no implemented app / no reachable SIT host / no code exists (only `spec.md`). Verdict pending SIT execution.

## 2. Scope
**In-scope (functional/integration, design-side):**
- Target selection & filtering: FR-001..FR-006 (schedule, cohort day-count, config N, Inforce by type, phone rule, Do Not Contact)
- Registration check & send decision: FR-007..FR-012 (cardNo, dual-channel LINE+APP, send/exclude truth table, E13/service-down handling)
- Dedup: FR-013, FR-013.1 (cross-round + in-round grouping)
- Message & file: FR-014..FR-017 (template + fallback, variable substitution, no-config stop, CSV/ESB)
- Logging & linkage: FR-018, FR-018.1, FR-018.2 (2-level log, round-1 linkage, sent_status)
- Notification & Manual Fix: FR-019, FR-020, FR-020.1, FR-020.2 (email, manual re-run, 'F'-only-via-Manual-Fix, date-range semantics + **central daily report**)

**Out-of-scope:**
- New UI/field design of Admin Dashboard (reuse existing central Manual Fix page)
- New report design (reuse shared central CSMS daily report)
- `credit_amount` calculation logic (existing CSMS, RQ-007)
- Any change to CSMS-001 (round 1)
- **Live execution / defect confirmation** — no running system (hard wall at execute)

**NFR scope:** Volume ~1,000/day (perf design base, not load-tested here). **Security/PII NFR = MISSING** (RQ-005) → route to security/pentest track (`NFR-routing.md`); performance load test → perf track (pending env). Neither is validated in this functional design run.

## 3. Test Levels & Types
- **Integration / batch E2E** (primary): end-to-end batch flow selection→send→log, driven by synthetic seed data.
- **Business-rule / decision-table** tests: send/exclude truth table, Inforce-by-type, Do Not Contact-by-type.
- **State/branch** tests: 'S'/'F' status, dedup guard, Manual Fix idempotency.
- **Negative / edge**: E13, service-down, no-name, no-config, cardNo-not-found, empty round-1 day, N-change.
- Functional only. Non-functional (security/perf/a11y) routed out.
- Automation: Playwright specs are **generated as design artifacts, not executed** (no app). Batch logic is normally DB/service-level; Playwright here documents intended assertions and is marked not-executed.

## 4. Environment & Data
- **Target env:** SIT (then UAT) — **not available this run** (no deployed batch, no `QA_BASE_URL`, no DB).
- **Test data:** SYNTHETIC only (06-test-data.json) — no production PII. Names/phones/policy_no fabricated; policy-type codes from spec enum.
- **Dependencies that must be up for execution (currently unmet):** batch scheduler, `ili_policy_master`, Do-Not-Contact source, cardNo customer-check service, LINE/APP registration service (`cisappapi`), message-type table, campaign config table, ESB→SMS Gateway, `WELCOME_NEW_CUST_LINE` (round-1 history), new `WELCOME_NEW_CUST_APP` table.

## 5. Entry / Exit / Suspension Criteria (machine-checkable)
- **Entry (design phase):** `spec.md` approved snapshot present ✅. → satisfied.
- **Entry (execution phase):** SIT deployed + creds valid + seed data provisioned + external services reachable/mocked. → **NOT satisfied** (blocks 06b/07).
- **Exit:** 0 open P0/P1 defects; Requirement coverage = 100% (every FR ≥1 TC); every ✅ atom ≥1 TC; all CRITICAL/HIGH risks validated; reconciliation (RTM) = PASS. Execution-side exit deferred.
- **Suspension:** SIT down / P0 blocker / unresolved RQ that changes a truth table (e.g. RQ-001 policy-code) → suspend affected TCs until SA answers; resume on answer + env up.

## 6. Approach & Risk Focus
- **Techniques:** decision-table (send/exclude, Inforce-by-type, Do-Not-Contact), EP/BVA (day-count N boundary), state-transition ('S'/'F', dedup guard), negative-per-branch (E13/no-name/no-config/no-cardNo).
- **Focus first (business-critical):** send/exclude truth table (SC-003 wrong-group=0), lifetime dedup (SC-002 =0 duplicates), round-1 linkage (SC-006 100% traceable), variable substitution (SC-004 no placeholder leak). These drive P0 in `/risk-analysis`.
- **Automation vs manual:** batch rules are best verified at DB/service layer; UI automation limited to Manual Fix Dashboard. This run generates specs only.

## 7. Assumptions / Dependencies / Plan Risks
- Inherits CSMS-001 rulings (error/log/Manual-Fix) — assumed stable.
- Day-count is exact-day cohort.
- **Plan risks:** (1) no running system → execution deferred; (2) upstream reference doc absent → some field-level detail (RQ-003) unconfirmable; (3) open RQs (esp. RQ-001, RQ-002) can shift TC expected results.

## 8. Open Questions (RQ) — for SA/PM
See 01 §4 / 00b RQ list: **RQ-001** policy-type code char · **RQ-002** FR-020.2 merged (reporting has no FR#) · **RQ-003** log/CSV field layout + field #7 · **RQ-004** failure SLA exact minutes · **RQ-005** missing security/PII NFR · RQ-006 external service schema · RQ-007 credit_amount · RQ-008 retry interval · RQ-009 linkage field name.
