# 02 — E2E Flow Patterns — CSMS-004 Customer Birthday

- **Skill:** `/e2e-flow-designer` (Spec-Kit 02) · **Input:** `01-requirement-review.md`, `00b-atom-inventory.md`, `spec.md` · **Date:** 2026-07-09

## 1. Summary
- **Flows:** 10 (1 primary happy path + 9 filter/decision/error branches) · **State machine:** 1 (per-policy → per-customer processing lifecycle), 11 states, 14 transitions (12 valid / 2 invalid-guard) · **Scenario groups:** positive/negative/edge/boundary/decision-table across all flows.
- **Coverage note:** all FR-001…FR-014 + 60 atoms map to ≥1 flow. Flow defects/RQ: RQ-010 (decision-table precedence — `AMBIGUOUS_GUARD`), RQ-005 (Go Live date — `AMBIGUOUS_GUARD` on date boundary). Both flagged, not closed by QA.

## 2. User Journeys

#### FLOW-001: Daily birthday selection & match (primary/happy)
- Actor `SYSTEM_BATCH` · Trigger: scheduler fires 09:00 · Pre: DWConsole up.
- Steps: 1) read `ili_policy_master` 2) match `birthdate` day+month = run date (year ignored) 3) apply Go-Live gate (≥2026) 4) pass to inforce filter.
- End-state: candidate set of birthday-matching policies. Covers: FR-001,002,003 · AT-001..007.

#### FLOW-002: Leap-day resolution (edge)
- Steps: for `birthdate=29 Feb` → if run year non-leap, match on 28 Feb; if leap, match 29 Feb.
- End-state: Feb-29 customers included on correct day. Covers: FR-003a · AT-008,009.

#### FLOW-003: Inforce status filter (secondary)
- Steps: keep ORD/PA `policy_status='1'`; IND/GOV `∈{1,2,3}`; drop others.
- Covers: FR-004 · AT-010,011,012.

#### FLOW-004: DNC + agent-channel filter (secondary)
- Steps: drop ORD `remark_code='1'`, IND/GOV/PA `remark_code='4'`; keep agent-channel (`title_desc<>'ชำระเอง'` / `position_code<>'99'`) with `policy_org` in ranges.
- Covers: FR-006,007 · AT-015..019.

#### FLOW-005: Mobile selection (secondary/error)
- Steps: `coalesce(nullif(trim(mobile1)), nullif(trim(mobile2)))`; both empty → skip+record; round continues.
- Covers: FR-005 · AT-013,014.

#### FLOW-006: cardNo mapping + 2-channel digital-status decision (primary decision)
- Steps: map `policy_no→cardNo` (cisappapi); if not found → skip+record. Else call LINE + APP; apply decision table → SEND / EXCLUDE / SKIP+record.
- Covers: FR-008,009,009a · AT-020..028. **Cross-system + per-item error path.**

#### FLOW-007: Per-customer dedup (state)
- Steps: collapse multiple matching policies → 1 per `cardNo`; check `sms_sent_date` current year; if already sent → exclude.
- Covers: FR-008b,008c · AT-029..034.

#### FLOW-008: Template + config resolution & CSV build (primary)
- Steps: get template (`sms_message_schedule` 112 in date range → fallback `sms_category`); resolve var1=fname, var2=reward, var3=link from `cf_catalog`; if any config missing/inactive → skip+record+alert (no empty-variable SMS); build UTF-8 CSV (columns mobile,var1,var2,var3,seq_no,datetime; filename pattern).
- Covers: FR-010,010a,010b · AT-035..046,057.

#### FLOW-009: Submit to Gateway + audit record (primary)
- Steps: submit CSV via ESB→SMS Gateway; receive refer_no + per-item status; write `CUSTOMER_BIRTHDAY` (all fields) + `CSMS_LOG`.
- Covers: FR-011,012 · AT-047..051.

#### FLOW-010: Round-level failure email + Manual Fix (error/recovery)
- Steps: on round failure/exception/CSV-timeout/template-not-found/API-outage(retry≤3→stop) → email IT Dev+users immediately. IT Admin later runs Manual Batch by date range (idempotent, uses specified date).
- Covers: FR-013,014 · AT-052..058.

## 3. State Machine (per-policy → per-customer lifecycle)

| From | Event | To | Guard | Actor | Valid? |
|------|-------|-----|-------|-------|--------|
| START | read master | BIRTHDAY_MATCHED | day+month = run date (leap-adjusted) | SYSTEM | ✅ |
| BIRTHDAY_MATCHED | go-live gate | GATED_OK | year ≥ 2026 | SYSTEM | ✅ |
| BIRTHDAY_MATCHED | go-live gate | DROPPED | before Go Live | SYSTEM | ✅ |
| GATED_OK | inforce check | INFORCE_OK | status rule per type | SYSTEM | ✅ |
| GATED_OK | inforce check | DROPPED | non-inforce | SYSTEM | ✅ |
| INFORCE_OK | DNC/channel filter | ELIGIBLE_POLICY | not DNC + agent + org-range | SYSTEM | ✅ |
| INFORCE_OK | DNC/channel filter | DROPPED | DNC / non-agent / org out-of-range | SYSTEM | ✅ |
| ELIGIBLE_POLICY | mobile select | HAS_MOBILE | mobile1 or mobile2 non-empty | SYSTEM | ✅ |
| ELIGIBLE_POLICY | mobile select | SKIPPED_RECORDED | both empty | SYSTEM | ✅ |
| HAS_MOBILE | cardNo + channel check | SENDABLE | cardNo found + decision=SEND | SYSTEM | ✅ |
| HAS_MOBILE | cardNo + channel check | DROPPED | decision=EXCLUDE (LINE active / APP present) | SYSTEM | ✅ |
| HAS_MOBILE | cardNo + channel check | SKIPPED_RECORDED | cardNo not found / E13 / empty | SYSTEM | ✅ |
| SENDABLE | dedup collapse | SENT | 1 per cardNo, sms_sent_date NULL this year → build+submit+record | SYSTEM | ✅ |
| SENDABLE | dedup collapse | DROPPED | already sent this year (idempotent) | SYSTEM | ✅ |
| SENT | resend attempt | (blocked) | already SENT this year | SYSTEM | ❌ invalid — must not resend |
| DROPPED/SKIPPED | resend attempt | (blocked) | not eligible | SYSTEM | ❌ invalid |

**Total transitions:** 14 valid + 2 invalid-guard = denominators for 03 state-transition/negative TCs.

## 4. Scenario Groups (per flow)

| Flow | Positive | Negative | Edge | Boundary-trigger | Decision-table |
|------|----------|----------|------|------------------|----------------|
| 001 | match selected | non-match dropped | year-diff still matches | run-date vs birthdate | — |
| 002 | leap send | wrong-day not sent | Feb-29 non-leap→28 | Feb-28/29 | — |
| 003 | inforce kept | non-inforce dropped | IND/GOV multi-status | status classes | EP on policy_status |
| 004 | eligible kept | DNC/non-agent dropped | — | org_org range endpoints | — |
| 005 | mobile1/mobile2 | both empty skip | trim/nullif whitespace | — | coalesce |
| 006 | 2 SEND combos | EXCLUDE/SKIP combos | E13/empty | — | **full decision table** |
| 007 | single SMS | already-sent excluded | multi-policy 1 SMS | year boundary | — |
| 008 | vars filled | missing-config skip | template fallback | seq_no=1 | — |
| 009 | refer_no recorded | fail recorded no refer_no | GOV recorded | — | — |
| 010 | email fired / manual fix | — | API outage retry≤3 | retry count 3 | — |

## 5. Cross-System / Async Dependency Map

| Flow step | External/Service | Sync/Async | Race/Timing risk | External-fail behavior |
|-----------|------------------|-----------|------------------|------------------------|
| FLOW-006 cardNo | `cisappapi@11.100.8.44` | Sync (≤5s) | per-item not-found vs system outage | not-found→skip+record; system outage→retry≤3→stop+email |
| FLOW-006 LINE/APP | `cisappapi` channels LINE/APP | Sync | abnormal (E13/empty) per item | skip+record, round continues |
| FLOW-008 config | DWConsole `cf_catalog`/`sms_message_schedule`/`sms_category` | Sync | missing/inactive config | skip+record+alert (no empty-variable SMS) |
| FLOW-009 submit | ESB → SMS Gateway | Sync (≤30s) | temporary gateway failure | record failed status, no auto-retry in daily (Manual Fix) |
| FLOW-010 email | mail distribution | Async | delivery not guaranteed | log attempt |

## 6. Handoff Notes → 03
- **Decision Table** (FLOW-006, FR-009): enumerate all feasible LINE×isBlockLine×APP rules → 1 TC/rule (incl. abnormal RQ-010 precedence, marked assumption).
- **BVA/date** (FLOW-002 Feb-28/29; FLOW-008 seq_no=1; FLOW-004 org_org endpoints).
- **EP** (FLOW-003 policy_status classes per type).
- **State-transition** (FLOW-007 dedup; FLOW-010 Manual Fix idempotency); **invalid transition** SENT→resend → negative TC.
- `[ASSUMPTION]`/RQ to resolve before finalize: RQ-005 (Go Live date boundary), RQ-010 (decision precedence), RQ-002 (112/113), RQ-006 (`credit_amount`).
