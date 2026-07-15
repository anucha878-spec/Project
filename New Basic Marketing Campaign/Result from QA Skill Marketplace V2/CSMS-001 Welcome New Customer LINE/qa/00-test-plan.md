# 00 — Test Plan / Strategy — CSMS-001 Welcome New Customer (LINE)

- **Skill:** `/test-plan` (Spec-Kit 00, optional) · **Leg A** (source = `spec.md`)
- **Feature slug:** `csms-001-welcome-line` · **Batch:** `BATCH-CSMS-WELCOME-LINE`
- **Date:** 2026-07-09 · **Source read:** `spec.md` (full); no plan.md/contracts/diagram in feature folder.

## 1. Summary
Daily backend batch that selects newly-inforced 2026+ policyholders (ORD/IND/PA) not yet on LINE Ocean Connect, filters them, dedups, builds an SMS + CSV, sends via central ESB→SMS Gateway, logs, and alerts on round-level failure; plus an IT-Admin Manual Fix recovery path and a daily report. **Plan verdict: proceed to design (01→06) now; execution is BLOCKED** — this is a scheduled backend batch with no reachable UI/API endpoint provided, so SIT execution cannot be earned in this pass.

## 2. Scope
**In-scope (functional/integration):**
- Data selection & filtering: FR-001..FR-004 (schedule, T-1, Inforce, 2026+, mobile present)
- Exclusion & eligibility: FR-005..FR-008b (DNC mapping, BR-003 3-condition eligibility, E02/E13/out-of-condition/service-down)
- Deduplication: FR-009, FR-010 (in-round + cross-round history)
- Message & file build: FR-011..FR-013 (template order, name-missing skip, variable subst, config link validity, CSV filename/encoding/ordering)
- Delivery & logging: FR-014..FR-017 (ESB send, CSMS_LOG, WELCOME_NEW_CUST_LINE, S/F, credit_amount)
- Notification & recovery: FR-018..FR-020b (email alert, Manual Fix, idempotency, date semantics, 'F' policy)
- Reporting: FR-021 (daily reconcile report)

**Out-of-scope:**
- UI/field design of the central Admin Dashboard Manual Fix screen (spec §Scope: reuse existing screen; only add this batch to its list). Exact validation-message text = RQ-005.
- Exact `credit_amount` calculation logic (reuse existing CSMS logic — Q-005/RQ-003).
- Backfill before UR Go-live (A-006 — business accepts no historical send).

**NFR scope:** No explicit perf/security/a11y/compat requirement in spec. PII handling (customer name, mobile, card_no) and Do-Not-Contact compliance are implicit data-protection concerns → see `NFR-routing` note in `03`/`04` (route to security/compliance track, not functional TCs here).

## 3. Test Levels & Types
- **Integration (primary):** batch ↔ MasterPolicy / Application ORD-IND-PA / Customer Analytics / Do-Not-Contact / Line Connect Inquiry API / Config catalog / ESB→Gateway / DB writes. This feature is integration-heavy; most behaviour is at service boundaries.
- **Functional / business-rule:** decision-table eligibility (BR-003), DNC mapping, dedup, filename format, S/F logging.
- **State/flow:** per-record outcome states (SENT / EXCLUDED / SKIPPED-logged) + round states (COMPLETED / STOPPED-alerted) + Manual-Fix re-run.
- **Regression:** idempotency across daily + Manual Fix re-runs.
- Automation split: batch has **no UI** → automation is DB/service-assertion oriented (or harness-driven). Manual Fix screen is the only UI (out-of-scope design). See execution-blocker below.

## 4. Environment & Data
- **Target env:** SIT (then UAT) of Ocean Life Web Portal / CSMS batch runner. **No host/URL/credentials/trigger endpoint provided to QA** in the spec → recorded as execution blocker (06b).
- **Test data:** synthetic only (see `06-test-data.json`) — no production PII. Requires seeding of policy master + application rows + DNC rows + config link rows + prior-send history rows, plus a stub/mocked Line Connect Inquiry returning controlled codes (E02/E13/valid/out-of-condition/down).
- **Dependencies that must be up for execution:** Line Connect Inquiry (or mock), ESB/SMS Gateway (or mock), config catalog with an active LINE_LINK row, DB schema incl. new `WELCOME_NEW_CUST_LINE` table.

## 5. Entry / Exit / Suspension Criteria
**Entry (design phase — met):** spec approved (Pre-Check 18/18, Q-001..Q-007 closed), atom inventory built, REQ IDs stable.
**Entry (execution phase — NOT met):** SIT env up + batch trigger/Manual-Fix reachable + Line Connect/ESB mock or live + seed data provisioned + credentials.
**Exit (release):**
- 0 open P0 (CRITICAL) defects; 0 open P1 (HIGH) or documented accepted-risk.
- Requirement coverage = 100% (every FR ≥1 TC); atom coverage = 100% of ✅ atoms.
- CRITICAL/HIGH risks validated by execution (07).
- Reconciliation (`RTM`) = PASS (no orphan/dangling).
- Open RQ-001..RQ-005 resolved (or explicitly risk-accepted).
**Suspension/Resume:** suspend if SIT env or Line Connect/ESB mock is down (per content-maintenance lesson — do not run against a dead backend); resume when the readiness gate (06a §A5) passes.

## 6. Approach & Risk Focus
- Techniques: **Decision Table** (BR-003 eligibility, DNC by type, round-failure triggers), **BVA** (year 2026 boundary, retry=3, date-range validation, T-1 arithmetic), **State-transition** (per-record + round outcomes), **EP** (inquiry codes E02/E13/out-of-condition/down).
- Focus first (business-critical): correct SEND/NOT-SEND decision (SC-002 no wrong-group send), no-duplicate (SC-003), stop-round + alert on failure (SC-004), no expired-link send (SC-005). These drive P0/P1 in `05`.
- Automation vs manual: backend → assertion on DB rows + emitted CSV + inquiry/ESB mock call logs; Manual Fix screen validation = manual (out-of-scope UI).

## 7. Assumptions / Dependencies / Plan Risks
- Assumes A-001..A-006 from spec (ESB/Gateway exist, Inquiry stable + batch-capable, card_no→name mapping clean, DNC fresh, mapping confirmed, no-backfill accepted).
- Plan risk: **no running app / no trigger endpoint** → execution not achievable this pass (leg A design-only). Alert-timing (RQ-004) and filename year (RQ-002) unresolved could invalidate SC-004/SC-005 assertions.

## 8. Open Questions (RQ) — for SA/PM
Carried from `00b`: **RQ-001** (dedup tie-break), **RQ-002** (CSV filename BE vs CE year), **RQ-003** (credit_amount expected value), **RQ-004** (batch-failure timeout/SLA value), **RQ-005** (Manual Fix exact validation messages). Do not guess — resolve before execution sign-off.
