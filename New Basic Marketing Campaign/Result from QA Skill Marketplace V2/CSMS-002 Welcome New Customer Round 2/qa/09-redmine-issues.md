# 09 — Redmine Issues (would-be list, NOT created) — CSMS-002 Welcome New Customer Round 2

**Stage:** 09 `/redmine-logging` · **Date:** 2026-07-09 · **Mode:** GENERATE-ONLY — **DO NOT create tickets** (per run instruction). No `POST /issues.json`.

## Status & scope note
`/redmine-logging` transforms **finalized QA findings** into Redmine-ready records; it must NOT invent defects. Since **06b/07 are BLOCKED** (no execution), there are **no executed BUG defects** to log. What *can* be transformed are the **design-phase findings** from `01` (RQs), `04`/`05` (coverage/risk), and `08` (release blockers) — as TEST / TASK / RISK trackers (clarifications & readiness), plus **placeholders** for BUG tickets that will only exist after execution.

> ⚠️ These are **would-be issues** for review. None created. Before any real `POST`, dedup against existing Redmine (query by subject/REQ-TC ref).

---
# 1. Critical Bugs (P0)
- **None yet** — no execution defects. `[PENDING SIT execution]`. RISK-001 (wrong-group send) & RISK-002 (policy-code) will become P0 BUGs only if execution fails.

# 2. High Priority Issues (P1)
- **None yet** (execution). `[PENDING]`.

# 3. Medium/Low Issues (P2–P3)
- **None yet** (execution). `[PENDING]`.

# 4. Test & Coverage Gaps  →  Clarification requests (TEST tracker)

### RM-001 (would-be) — TEST / P1
- **Subject:** [CSMS-002] FR-020.2 merges two requirements — daily report has no FR number
- **Description:** FR-020.2 clause bundles the Manual-Fix date rule AND the daily central-report definition; the report has no FR of its own → risk of scope drop (RISK-007).
- **Linked:** REQ FR-020.2 · TC-062 · RISK-007 · RQ-002
- **Business Impact:** Report is the sole channel to watch abnormal 'F' proportion (no threshold alert); dropping it loses operational monitoring.
- **Suggested fix:** Split into FR-020.2 (Manual-Fix) + new FR-021 (daily report).
- **Acceptance:** Report requirement has its own FR + frozen exclusion-reason taxonomy.

### RM-002 (would-be) — TEST / P1
- **Subject:** [CSMS-002] Policy-type code character unconfirmed ('O/I/G/P' vs '0/1')
- **Linked:** FR-004/006/018 · TC-007..011/016/017/050 · RISK-002 · RQ-001
- **Impact:** Wrong code → wrong Inforce/Do-Not-Contact/report keys → wrong-group send (SC-003).
- **Suggested fix:** Confirm actual char in real source; freeze map.
- **Acceptance:** Code char verified against `ili_policy_master`/screening feed.

### RM-003 (would-be) — TEST / P2
- **Subject:** [CSMS-002] Per-policy log field list/order + CSV column layout unspecified (field #7 gap)
- **Linked:** FR-017/018 · TC-044/048 · RQ-003
- **Acceptance:** Layout enumerated vs `WELCOME_NEW_CUST_LINE`; field #7 resolved.

### RM-004 (would-be) — TEST / P2
- **Subject:** [CSMS-002] Round-1 linkage field name/mechanism unspecified (FR-018.1)
- **Linked:** FR-018.1 · TC-051 · RISK-004 · RQ-009
- **Acceptance:** Linkage FK named; SC-006 back-trace assertable.

# 5. Risk & Stability Tasks

### RM-005 (would-be) — TASK / P2
- **Subject:** [CSMS-002] Failure-notification SLA ambiguous (FR-019 "standard" vs SC-005 "15 min")
- **Linked:** FR-019 · TC-056 · RISK-006 · RQ-004
- **Acceptance:** Single machine-checkable SLA agreed.

### RM-006 (would-be) — RISK / P1
- **Subject:** [CSMS-002] No security/PII NFR (name/phone in SMS, CSV, logs)
- **Linked:** RQ-005 · NFR-routing.md
- **Impact:** PII exposure / compliance gap; unowned.
- **Suggested fix:** Add security/PII NFR; route to pentest track.
- **Acceptance:** NFR authored + routed.

### RM-007 (would-be) — TASK / P2
- **Subject:** [CSMS-002] Build batch/DB test harness (Playwright UI insufficient for batch rules)
- **Linked:** 05 §7 · 06b-execution-note
- **Acceptance:** Harness seeds round-1/policy/config, runs batch, asserts `WELCOME_NEW_CUST_APP`.

---
**Summary:** 0 BUG tickets (no execution). 7 would-be TEST/TASK/RISK records for review. **None created.** Bug logging resumes after 06b/07.
