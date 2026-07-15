# 00b — Atom Inventory (QA-owned ledger) — CSMS-002 Welcome New Customer Round 2

**Feature:** `csms-002-welcome-round2` · **Skill:** `/requirement-review` (Leg A, source = `spec.md`) · **Date:** 2026-07-09
**Source read:** `spec.md` (full). No `data-model.md` / `contracts/` / mockup / `sources/` present in this feature folder (Leg A snapshot only). Upstream reference doc `0SPEC_BATCH-CSMS-002_Welcome-New-Customer-OceanClub.md` is on another machine (`C:\Users\akkarawat.le\...`) — **not available**, so all atoms are mined from `spec.md` only.

**Legend:** ✅ specified (in SA doc) · ❓ RQ (SA did not specify → ask, do NOT guess) · 🔒 assumption (exists elsewhere/code, unconfirmed → RQ)

## Batch is headless (no UI screens)
This is a **scheduled batch process** (roles `SYSTEM_BATCH`, `IT_ADMIN`). There are no data-entry screens except the shared central CSMS Admin Dashboard (Manual Fix — out of scope for new UI). Atoms are therefore **business-rule / data / branch atoms**, not UI-widget atoms.

| Atom ID | Component / Rule | Testable detail (verbatim-anchored) | FR / source | Status | RQ |
|---|---|---|---|---|---|
| A-01 | Schedule | Runs daily at exactly 10:00 น. | FR-001 | ✅ | |
| A-02 | Cohort day-count | Target where round-1 `sms_sent_date` + N = processing date (exact-day match) | FR-002; Assumptions "การนับวัน" | ✅ | |
| A-03 | Config N source | N read from config type `DATE_COUNT`, campaign `CSMS_SNC_NewCustApp`, status Active; default 20 | FR-003 | ✅ | |
| A-04 | Config N changeable | Changing N (no code change) applies to next round's selection | FR-003; US1 AS-6 | ✅ | |
| A-05 | Inforce ORD/PA | ORD & PA in-force = status code `'1'` | FR-004 | ✅ | |
| A-06 | Inforce IND/GOV | IND & GOV in-force = status ∈ `{'1','2','3'}` | FR-004 | ✅ | |
| A-07 | Policy-type scope | Exactly 4 types in scope: ORD, IND, GOV, PA | FR-004; Clarification | ✅ | |
| A-08 | Phone priority | Use mobile1 first; if empty use mobile2 | FR-005 | ✅ | |
| A-09 | Phone required | Exclude if both mobile1 & mobile2 empty | FR-005 | ✅ | |
| A-10 | Phone source | Phone = current `ili_policy_master`, NOT round-1 history phone | FR-005; Clarification | ✅ | |
| A-11 | Do Not Contact ORD | Exclude ORD with remark code `'1'` | FR-006 | ✅ | |
| A-12 | Do Not Contact IND/GOV/PA | Exclude IND/GOV/PA with remark code `'4'` | FR-006 | ✅ | |
| A-13 | cardNo conversion | Convert policy_no → cardNo via customer-check service | FR-007 | ✅ | |
| A-14 | cardNo not found | Not found → skip + `sent_status='F'`, do not stop round | FR-007; EC | ✅ | |
| A-15 | Dual-channel check | Check 2 channels per customer: LINE Ocean Connect + Ocean Club App | FR-008 | ✅ | |
| A-16 | E02 semantics | `E02` = "ไม่พบข้อมูล" (not-registered); same code both channels | Clarification | ✅ | |
| A-17 | Send rule (a) | Send when LINE=E02 AND APP=E02 | FR-009 | ✅ | |
| A-18 | Send rule (b) | Send when LINE registered (E00) + `isBlockLine=true` AND APP=E02 | FR-009; US1 AS-2 | ✅ | |
| A-19 | Exclude APP-registered | Exclude when APP already registered | FR-010; US1 AS-3 | ✅ | |
| A-20 | Exclude LINE-not-blocked | Exclude when LINE registered + `isBlockLine=false` | FR-010; US1 AS-3 | ✅ | |
| A-21 | E13 / out-of-condition | `E13` or empty channel/isBlockLine → skip immediately, no retry, no stop, `sent_status='F'` | FR-011; EC | ✅ | |
| A-22 | Whole-service retry | Service down system-wide → retry max 3, spaced | FR-012 | ✅ | |
| A-23 | Retry exhausted | Still failing after 3 → stop round + email (FR-019) | FR-012; US2 AS-2 | ✅ | |
| A-24 | Dedup key | No duplicate send if success history exists by policy_no + policy_type + phone | FR-013 | ✅ | |
| A-25 | Dedup guard field | Dedup checks only rows where `sms_sent_date IS NOT NULL` | FR-018.2 | ✅ | |
| A-26 | In-round grouping | Group by (name, surname, phone) → 1 message per customer per round | FR-013.1 | ✅ | |
| A-27 | Representative pick | Deterministic: oldest record; tie-break = smallest policy_no | FR-013.1 | ✅ | |
| A-28 | Non-selected logged | Duplicates not chosen in round are still logged (reconcile-complete) | FR-013.1 | ✅ | |
| A-29 | Lifetime cap | Customer receives ≤ 1 message across entire campaign lifetime | SC-002 | ✅ | |
| A-30 | Template source | Message pattern from message-type code `'111'` | FR-014 | ✅ | |
| A-31 | Template fallback | If `'111'` missing → fallback to main message-type table | FR-014 | ✅ | |
| A-32 | var1 | `${var1}` = insured name | FR-015 | ✅ | |
| A-33 | var2 | `${var2}` = rewards value from config type `REWARDS` (Active) | FR-015 | ✅ | |
| A-34 | var3 | `${var3}` = download link from config type `LINE_LINK` (Active) | FR-015 | ✅ | |
| A-35 | No-name skip | Missing name (var1 empty) → skip + `sent_status='F'`; MUST NOT send nameless | FR-015.1 | ✅ | |
| A-36 | No Active config | No Active campaign config (days/rewards/link) → stop whole round + email | FR-016; US2 AS-3 | ✅ | |
| A-37 | No placeholder leak | No leftover `${var}` reaches customer | SC-004 | ✅ | |
| A-38 | CSV encoding | Output file CSV, UTF-8 | FR-017 | ✅ | |
| A-39 | CSV filename | `MKT_CSMS_MKTWelcomeNewCustApp_[YYMMDDhhmmss].csv`, Buddhist-year 2-digit | FR-017 | ✅ | |
| A-40 | Delivery channel | Deliver file via ESB → SMS Gateway | FR-017 | ✅ | |
| A-41 | Campaign-level log | Log actual message, message-type abbrev, create time | FR-018(a) | ✅ | |
| A-42 | Per-policy log fields | policy_no, type, name-surname, cardNo, contract-start date, sent date, actual phone, actual message, credit_amount, creator/editor | FR-018(b) | ❓ | RQ-003 |
| A-43 | Delivery result fields | Record `refer_no` + send status returned from central channel | FR-018 | ✅ | |
| A-44 | Policy-type code map | Screening code → log value: 'O'→ORD, 'I'→IND, 'G'→GOV, 'P'→PA | FR-018; Clarification/Assumption | 🔒 | RQ-001 |
| A-45 | Round-1 linkage | Per-policy log carries ID ref back to originating CSMS-001 round-1 record | FR-018.1 | ✅ | RQ-009 |
| A-46 | Success status | Success → `sms_sent_date`=date, `sent_status='S'` | FR-018.2 | ✅ | |
| A-47 | Fail/skip status | Fail/skip → `sms_sent_date`=NULL, `sent_status='F'` | FR-018.2; FR-011; FR-015.1 | ✅ | |
| A-48 | New sent_status field | `WELCOME_NEW_CUST_APP` MUST add `sent_status` field (new table for this batch) | FR-018.2; Key Entities | ✅ | |
| A-49 | Actual phone recorded | Actual sent phone recorded even if differs from round-1 phone | FR-005; FR-018; EC | ✅ | |
| A-50 | Failure email recipients | Round failure → email to IT Development + Users immediately | FR-019; US2 AS-1 | ✅ | |
| A-51 | Email content | Email states batch name (e.g. `BATCH-CSMS-WELCOME-APP`) + failed step | FR-019 | ✅ | |
| A-52 | Failure SLA | "On-time" = standard CSMS monitoring timeout/SLA; SC-005 = within 15 min of detection | FR-019; SC-005 | ❓ | RQ-004 |
| A-53 | Manual Fix trigger | IT Admin triggers manual re-run selecting date range via central Dashboard | FR-020; US3 | ✅ | |
| A-54 | Manual Fix no-dup | Manual re-run MUST NOT resend to already-succeeded items (FR-013) | FR-020; US3 AS-2 | ✅ | |
| A-55 | 'F' resend path | 'F' rows resent via Manual Fix ONLY; daily round MUST NOT auto-retry 'F' | FR-020.1 | ✅ | |
| A-56 | Manual Fix selection | Manual Fix picks only `sms_sent_date IS NULL` within selected range | FR-020.1 | ✅ | |
| A-57 | Date-range semantics | Selected range = processing date of round to re-run; targets = round-1 sent_date = selected date − N | FR-020.2 | ✅ | |
| A-58 | Manual Fix N value | Uses current N from config at Manual-Fix time (no config history) | FR-020.2; Clarification | ✅ | |
| A-59 | Central daily report | Results appear in shared central CSMS daily report: total processed, 'S', 'F', excluded-by-reason (Do Not Contact / already registered / dup-in-round / already sent), breakdown by ORD/IND/GOV/PA | FR-020.2 (merged) | ❓ | RQ-002 |
| A-60 | No threshold alert | No separate threshold alert for high 'F' proportion (report is sole channel) | FR-020.2 | ✅ | |
| A-61 | Late-registration accept | Customer registers App after screening but before send → accepted (checked at processing time only) | EC | ✅ | |
| A-62 | Empty round-1 day | Round-1 of reference day empty → no targets = normal end, NOT a failure | EC; US1 boundary | ✅ | |
| A-63 | Gateway send failure | SMS Gateway send-fail → record fail without success date so Manual Fix can retry | EC; FR-018.2 | ✅ | |
| A-64 | Mid-flight N change | N changed (20→15) mid-campaign → dedup prevents double; skipped group repaired via Manual Fix | EC; US1 AS-6 | ✅ | |
| A-65 | credit_amount source | `credit_amount` uses existing CSMS logic (out of scope) but is a logged field | FR-018; Assumptions | 🔒 | RQ-007 |

## Atom summary
- **Total atoms:** 65
- **✅ specified:** 59
- **❓ RQ (unspecified):** 4 — A-42, A-52, A-59, (plus A-39 note tie to RQ-003)
- **🔒 assumption (unconfirmed):** 3 — A-44, A-65, and linkage detail A-45 (RQ-009)

## RQ list (emitted to SA — see 01 §4)
- **RQ-001** (A-44) — Policy-type code character in source system: `'O'/'I'/'G'/'P'` vs `'0'/'1'`. Spec assumes letters (per 002 A-005) but calls the source doc's `'0'/'1'` a PDF-conversion error. **Unconfirmed against real data structure** → confirm in plan.
- **RQ-002** (A-59) — **FR-020.2 merges TWO requirements**: the Manual-Fix date-range rule AND the daily reconcile-report definition. The reporting requirement has **no FR number of its own** → it is easy to lose in traceability. Reporting content also depends on the exclusion-reason taxonomy being frozen.
- **RQ-003** (A-42, A-39) — Per-policy log **exact field list / order** and CSV **column layout** not enumerated in `spec.md`; Assumptions note source table skips field **#7** (suspected PDF drop). Confirm against real `WELCOME_NEW_CUST_LINE` (CSMS-001) structure.
- **RQ-004** (A-52) — Failure-notification **exact SLA** ambiguous: FR-019 says "standard CSMS SLA", SC-005 says "within 15 minutes". Confirm single machine-checkable threshold.
- **RQ-005** (NFR) — **No security / PII NFR**: SMS carries customer name + phone; CSV UTF-8 file transits ESB→Gateway. No requirement on PII masking, file retention, access control, or log-data protection. → `MISSING_REQUIREMENT (NFR)`.
- **RQ-006** — External registration-service response schema (`channel`, `isBlockLine`, code set `E00/E02/E13`) not fully defined in spec (only referenced). Confirm contract for negative/boundary data design.
- **RQ-007** (A-65) — `credit_amount` value source for THIS batch is "existing CSMS logic (out of scope)" yet it is a logged field — confirm whether a value is expected per row in SIT.
- **RQ-008** (A-22) — Retry "spaced" interval for FR-012 not quantified (count = 3 given, gap = ?).
- **RQ-009** (A-45) — Round-1 **linkage mechanism / field name** (the "ID ref" to CSMS-001) not named in spec.
