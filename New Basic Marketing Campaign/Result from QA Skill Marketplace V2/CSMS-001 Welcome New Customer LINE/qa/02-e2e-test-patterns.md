# 02 — E2E Flow / Pattern Design — CSMS-001 Welcome New Customer (LINE)

- **Skill:** `/e2e-flow-designer` (Spec-Kit 02) · **Date:** 2026-07-09
- **Inputs read:** `qa/01-requirement-review.md`, `qa/00b-atom-inventory.md`, `spec.md` (full). No flow-diagram image exists in the feature folder (Glob confirmed only `spec.md`) — flows below are **[DERIVED]** from the FR text + acceptance scenarios, not from a diagram. Naming uses plain business language; internal codes in parentheses.

## 1. Summary
- **Flows:** 6 (1 primary daily pipeline, 1 recovery, 1 report, 3 error/exception paths embedded)
- **State machines:** 2 — (A) per-record outcome, (B) per-round outcome
- **Transitions:** record SM = 9 valid + 3 invalid; round SM = 5 valid
- **Scenario groups:** positive / negative / edge / boundary-trigger identified per flow
- **Coverage note:** all 21 FR + 61 atoms are reflected in a flow/state below. Flow defects / RQ flagged: RQ-002 (filename year) and RQ-004 (failure timeout) touch FLOW-001 step 6 and FLOW-004 respectively — marked `[ASSUMPTION]`/RQ, not closed here.

## 2. User Journeys

#### FLOW-001: Daily automatic Welcome-SMS pipeline (primary / happy path)
- **Actor:** `SYSTEM_BATCH` · **Trigger:** daily scheduler at 10:00 น. (ATOM-001) · **Pre-condition:** ≥1 active LINE_LINK config row; source systems reachable.
- **Steps (atomic):**
  1. Select policies: type∈{ORD,IND,PA}, issue_date=T-1, status=Inforce, issued-year ≥ 2026, mobile_no present (ATOM-002..006).
  2. Exclude Do-Not-Contact: map type (ORD='O', IND∈('I','G'), PA='P'), check remark_code ORD='1' / IND-PA='4' (ATOM-007..009).
  3. Check registration via Line Connect Inquiry → apply BR-003 3-condition eligibility (ATOM-010..013); handle E13 / out-of-condition per-record skip+log (ATOM-014,015); handle full service-down retry×3→stop (ATOM-016..018).
  4. Deduplicate in-round by (fname,lname,mobile_no)→MIN(issue_date) (ATOM-019,020, tie-break ATOM-021 `[ASSUMPTION RQ-001]`); exclude previously-sent history NOT NULL (ATOM-022,023).
  5. Resolve customer name by card_no (skip+log if missing, ATOM-025); build message: template schedule→category fallback (ATOM-024), substitute $(var1)=name/$(var2)=link, validate link active (ATOM-026..029); if no active link → stop round+email (ATOM-030) → FLOW-004.
  6. Generate CSV (name format ATOM-031..034 `[RQ-002 year format]`, UTF-8 ATOM-035) **before** send (ATOM-036).
  7. Send via ESB→SMS Gateway (ATOM-037); compute credit_amount (ATOM-044 `[ASSUMPTION RQ-003]`).
  8. Log: CSMS_LOG (refer_no+status ATOM-038); WELCOME_NEW_CUST_LINE all fields, success→sms_sent_date+status'S', skip/fail→NULL+status'F' (ATOM-039..043).
- **Expected end-state:** round COMPLETED; each in-scope record has an 'S' or 'F' row; eligible customers each received exactly one SMS.
- **Covers:** FR-001..FR-017 · ATOM-001..044.

#### FLOW-002: Record excluded before send (negative / filter paths)
- **Actor:** `SYSTEM_BATCH` · **Trigger:** within FLOW-001 steps 2–4.
- **Steps:** record matches an exclusion (DNC / already-registered / in-round dup loser / previously-sent) → not sent → (for dup/registered: no row or excluded per report reason; for skip: 'F' row + log).
- **Expected end-state:** no SMS to that record; report counts it under the correct exclusion reason (ATOM-057).
- **Covers:** FR-005,006,009,010 · ATOM-007..012,019..023.

#### FLOW-003: Record skipped-and-logged (exception, round continues)
- **Actor:** `SYSTEM_BATCH` · **Trigger:** Inquiry returns E13, or out-of-3-condition, or card_no name missing.
- **Steps:** skip the record immediately (no retry for E13), write separate log for IT Admin, write 'F' row (sms_sent_date NULL), continue next record to end (ATOM-014,015,025,042).
- **Expected end-state:** round still COMPLETED; skipped record auditable; other records unaffected (SC-006).
- **Covers:** FR-008,008a,011a · ATOM-014,015,025.

#### FLOW-004: Round-level failure → stop + alert (error path)
- **Actor:** `SYSTEM_BATCH` → email to IT+User.
- **Trigger:** any of {file-generate fail, ESB/Gateway unreachable, source/DB error, Line Connect fully down after retry×3, no active LINE_LINK} (ATOM-045).
- **Steps:** stop the round; send standard CSMS failure email stating batch="BATCH-CSMS-WELCOME-LINE" + failed step (ATOM-046,047); no partial/nameless/expired-link sends. Failure declared per existing monitoring SLA/timeout (ATOM-048 `[RQ-004]`).
- **Expected end-state:** round STOPPED-ALERTED; nothing sent for that round; recovered later via FLOW-005.
- **Covers:** FR-008b,012a,018 · ATOM-016,017,030,045..048.

#### FLOW-005: IT-Admin Manual Fix re-run (recovery / secondary)
- **Actor:** `IT_ADMIN` on central Admin Dashboard Manual Fix screen.
- **Trigger:** a prior round failed (email received). · **Pre-condition:** config fixed if the failure was link/config.
- **Steps:** select batch="BATCH-CSMS-WELCOME-LINE", enter date range (start≤today ATOM-050, end≥start ATOM-051; invalid→central validation message ATOM-052 `[RQ-005]`), press Manual Batch → system interprets each selected date as a failed processing date and pulls issue_date=T-1 of each (ATOM-054), runs FLOW-001 idempotently: only rows sms_sent_date IS NULL processed, NOT-NULL never resent (ATOM-053,056); 'F' rows resent only here, never by daily (ATOM-055).
- **Expected end-state:** missing customers sent; previously-successful never double-sent (SC-003).
- **Covers:** FR-019,020,020a,020b · ATOM-049..056.

#### FLOW-006: Daily reconcile report (secondary / P3)
- **Actor:** business user / admin · **Trigger:** after a round completes.
- **Steps:** read WELCOME_NEW_CUST_LINE for the day → show total processed, success('S'), fail/skip('F'), excluded-by-reason, breakdown by policy_type (ATOM-057); no extra threshold alert (ATOM-058).
- **Expected end-state:** report totals reconcile 100% with stored rows (SC-007).
- **Covers:** FR-021 · ATOM-057,058.

## 3. State Machine

### (A) Per-record outcome
| From | Event | To | Guard/Condition | Actor | Valid? |
|------|-------|-----|-----------------|-------|--------|
| Selected | passes filters | Screened | type/date/status/year/mobile ok | SYSTEM | ✅ |
| Screened | in DNC | Excluded-DNC | remark '1'/'4' by mapped type | SYSTEM | ✅ |
| Screened | already registered | Excluded-Registered | LINE found / Ocean Club found | SYSTEM | ✅ |
| Screened | eligible | Eligible | BR-003 cond 1 or 2 | SYSTEM | ✅ |
| Eligible | in-round dup loser | Excluded-Dup | not MIN(issue_date) | SYSTEM | ✅ |
| Eligible | previously sent | Excluded-History | history sms_sent_date NOT NULL | SYSTEM | ✅ |
| Eligible | E13 / out-of-condition / name missing | Skipped-Logged ('F') | per-record exception | SYSTEM | ✅ |
| Eligible | sent ok | Sent ('S') | ESB returns success | SYSTEM | ✅ |
| Eligible | send fail (record) | Skipped-Logged ('F') | gateway per-record fail | SYSTEM | ✅ |
| Sent ('S') | daily re-run pulls 'F' | (blocked) | daily must NOT retry 'F' | SYSTEM | ❌ invalid (ATOM-055) |
| Excluded-History | resend | (blocked) | must not resend NOT-NULL | SYSTEM | ❌ invalid (ATOM-053) |
| Skipped-Logged('F') | daily auto-retry | (blocked) | 'F' only via Manual Fix | SYSTEM | ❌ invalid (ATOM-055) |

*Total record transitions: 9 valid + 3 invalid = 12 (denominator for 03/04).*

### (B) Per-round outcome
| From | Event | To | Guard | Actor | Valid? |
|------|-------|-----|-------|-------|--------|
| Idle | scheduler 10:00 | Running | daily | SYSTEM | ✅ |
| Idle | Manual Batch pressed | Running (manual) | valid date range | IT_ADMIN | ✅ |
| Running | all records processed | Completed | no round-level fault | SYSTEM | ✅ |
| Running | round-level fault | Stopped-Alerted | any ATOM-045 trigger | SYSTEM | ✅ |
| Stopped-Alerted | Manual Fix re-run | Running (manual) | config fixed | IT_ADMIN | ✅ |

*Total round transitions: 5 valid (denominator for 03/04).*

## 4. Scenario Groups (per flow)
| Flow | Positive | Negative | Edge | Boundary-trigger | Role-variant |
|------|----------|----------|------|------------------|--------------|
| FLOW-001 | eligible ORD/IND/PA send; schedule/category template | — | cond-2 (blocked LINE, no club) | year 2026 boundary; T-1 arithmetic | SYSTEM only |
| FLOW-002 | — | DNC excl; registered excl; dup loser; history excl | mobile NULL vs empty; pre-2026 | — | SYSTEM |
| FLOW-003 | — | E13 skip; out-of-condition skip; name-missing skip | out-of-condition (channel=null) | — | SYSTEM |
| FLOW-004 | — | file/ESB/DB fail; no active link | Line down retry×3 | retry 2 vs 3 vs >3 | SYSTEM→email |
| FLOW-005 | manual re-run sends missing | invalid date range | idempotent partial re-run | start=today/today+1; end=start/start-1 | IT_ADMIN |
| FLOW-006 | report reconciles | — | high-'F' round (no extra alert) | — | business user |

## 5. Cross-System / Async Dependency Map
| Flow step | External/Service | Sync/Async | Race/Timing risk | External-fail behavior |
|-----------|------------------|-----------|------------------|------------------------|
| 001.1 | MasterPolicy / Application ORD-IND-PA / Customer Analytics DB | Sync read | DNC list freshness (A-004) — stale list may send to opted-out | source/DB error → stop round + email (FLOW-004) |
| 001.3 | Line Connect Inquiry API (batch list cardNo) | Sync (batch) | rate-limit / partial response (A-002) | per-record E13/out-of-condition→skip; whole-system down→retry×3→stop |
| 001.5 | Config catalog (LINE_LINK) | Sync read | link expiring mid-run vs at-start check | no active link→stop round+email |
| 001.7 | ESB → SMS Gateway | Sync call | send-success vs log-write ordering (ATOM-036 CSV-before-send) | ESB/gateway unreachable→stop round+email |
| 001.8 | DB write (CSMS_LOG + WELCOME_NEW_CUST_LINE) | Sync write | crash between send and log → duplicate risk on re-run (idempotency guard = sms_sent_date) | DB error→stop round+email |
| 004 | Email/notification channel | Async | alert must fire within monitoring SLA (RQ-004 unknown) | — |

## 6. Handoff Notes → 03
- Apply **Decision Table** to BR-003 eligibility (3 conditions → feasible SEND/NOT-SEND rows incl. cond-2) and to round-failure triggers (ATOM-045: 5 triggers).
- Apply **BVA** to: year boundary (ATOM-005), retry count (ATOM-016), Manual-Fix date validation (ATOM-050,051), T-1 arithmetic (ATOM-054).
- Apply **State-transition**: cover all 9 valid + 3 invalid record transitions + 5 round transitions.
- Apply **EP** to inquiry codes (E02 / E13 / out-of-condition / service-down).
- `[ASSUMPTION]`/RQ carried: RQ-001 (tie-break), RQ-002 (filename year), RQ-003 (credit value), RQ-004 (timeout), RQ-005 (central messages) → become `[BLOCKED]` TCs, behavior not invented.
