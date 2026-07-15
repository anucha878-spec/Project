# 09 — Redmine Issues (would-be) — CSMS-004 Customer Birthday

- **Skill:** `/redmine-logging` (Spec-Kit 09) · **Date:** 2026-07-09
- **Mode:** GENERATE-ONLY — **DO NOT create tickets.** No execution defects exist yet (06b/07 blocked). Issues below are **requirement-clarification (TEST/RISK)** derived from `01`/`04`/`05`/`RTM`. Dedup against existing Redmine required before any real `POST /issues.json`.

> No BUG (P0/P1) issues — none can be raised without execution results. All items are clarifications/coverage/risk tasks.

---

# 1. Critical Bugs (P0)
- None (no execution → no confirmed defect).

# 2. High Priority Issues (P1)

### 🟧 RM-001
- **Subject:** Confirm SMS category code — 112 (MKTBirthday) vs source-doc 113 (MKTWelcomeNewCust)
- **Tracker:** TEST · **Priority:** P1
- **Description:** Spec resolves `SMS_CATEGORY_CODE='112'` but source §5 shows `113` (declared copy-error). Wrong code → wrong CSV Category + template.
- **Steps:** Inspect deployed `SMS_CATEGORY`/`sms_message_schedule` config the batch queries.
- **Environment:** SIT config store.
- **Linked:** FR-010 · TC-051 · RQ-002 · RISK-005
- **Business Impact:** Wrong campaign content sent to customers.
- **Suggested Fix:** Verify/lock `112`=`MKTBirthday` in config + spec.
- **Acceptance:** Config confirmed = 112; TC-051 unblocked.

### 🟧 RM-002
- **Subject:** Provide exact Go Live date for FR-003 boundary
- **Tracker:** TEST · **Priority:** P1
- **Description:** Only "year ≥ 2026" given; exact cut-over date needed to test no-backdated boundary.
- **Linked:** FR-003 · TC-052 · RQ-005
- **Business Impact:** Backdated-send boundary defect could ship unverified.
- **Acceptance:** Exact date provided; TC-052 unblocked.

### 🟧 RM-003
- **Subject:** Define `credit_amount` source/value in CUSTOMER_BIRTHDAY for birthday batch
- **Tracker:** TASK · **Priority:** P1
- **Description:** FR-012 requires `credit_amount` but no rule defines its value/relationship to `rewards` (var2 string).
- **Linked:** FR-012 · TC-053 · RQ-006/RQ-011 · RISK-007
- **Business Impact:** Incomplete/incorrect audit field; SC-004 partial.
- **Acceptance:** `credit_amount` defined (or confirmed N/A); TC-053 unblocked.

### 🟧 RM-004
- **Subject:** Confirm 2-channel decision-table precedence for abnormal + APP=E00
- **Tracker:** TASK · **Priority:** P1
- **Description:** FR-009 (APP=E00→exclude) vs FR-009a (E13/empty→skip+record) — precedence when both apply is ambiguous.
- **Linked:** FR-009/009a · TC-029,030 · RQ-010 · RISK-001
- **Business Impact:** Mis-classification of send/skip in CRITICAL decision logic.
- **Acceptance:** Precedence rule confirmed; TC-029/030 assumption removed.

# 3. Medium/Low Issues (P2–P3)

### 🟨 RM-005
- **Subject:** Fix US5 Acceptance Scenario numbering (1,6,7,2,3,4,5 → 1–7)
- **Tracker:** TEST · **Priority:** P2
- **Description:** US5 scenarios out of order; traceability risk.
- **Linked:** US5 · RQ-001
- **Acceptance:** Renumbered sequentially in spec.

### 🟨 RM-006
- **Subject:** Quantify CSV-creation timeout SLA (FR-013) + email distribution list/content
- **Tracker:** TASK · **Priority:** P2
- **Linked:** FR-013 · TC-054 · RQ-007/RQ-008
- **Acceptance:** Numeric SLA + recipients/template provided; TC-054 unblocked.

### 🟦 RM-007
- **Subject:** Confirm GOV inclusion + recording; `sms_sent_date` type/year semantics; retry interval; multiple-active cf_catalog rule
- **Tracker:** TASK · **Priority:** P3
- **Linked:** RQ-004 (GOV), RQ-003 (sms_sent_date), RQ-009 (retry interval), RQ-012 (cf_catalog uniqueness)
- **Acceptance:** Each confirmed; assumptions (TC-033,047,049) closed.

# 4. Test & Coverage Gaps
- None in design (100% coverage). Real coverage gaps can only surface after 06b execution.

# 5. Risk & Stability Tasks

### 🟥 RM-008
- **Subject:** Provision SIT batch + cisappapi/ESB stubs to enable execution (unblock 06b/07)
- **Tracker:** SUPPORT · **Priority:** P1
- **Description:** No environment → CRITICAL/HIGH risks (RISK-001..008) cannot be validated; release NO-GO.
- **Linked:** 06b · 07 · RISK-001..008
- **Acceptance:** Env + stubs available; TC-001..050 executable.

---
**Dedup note:** before creating any of the above, query `GET /issues.json?project_id=<X>&status_id=open` and match by subject/REQ-TC ref; update existing rather than duplicate. project_id/tracker_id mapping must be confirmed with user before real logging.
