# 00b — Atom Inventory (QA-owned atom ledger) — CSMS-001 Welcome New Customer (LINE)

- **Feature slug:** `csms-001-welcome-line`
- **Skill:** `/requirement-review` (Leg A, source = `spec.md`)
- **Source read:** `Spec\Batch เพื่อส่ง SMS Welcome New Customer ตามเงื่อนไขกลุ่มเป้าหมาย\spec.md` (full). No `data-model.md` / `contracts/` / mockup / diagram present in the feature folder (Glob `**/*` → only `spec.md`). This is a **backend batch** feature — no UI screens except the central Manual Fix screen (declared out-of-scope UI in spec §Scope).
- **Date:** 2026-07-09
- **Legend:** ✅ specified (in SA doc) · ❓ RQ (SA did not specify → question back to SA, do NOT guess) · 🔒 assumption (stated but value/behavior deferred/reused → confirm)

> Coverage note: This spec is written at FR-level but is unusually detailed (exact codes, mappings, filename format, boundary dates). Atoms below are mined so `03` can produce ≥1 TC per atom and `04` can audit atom→TC (not just FR→TC).

## Atom Ledger

| Atom ID | Component / Rule | Detail (testable) | FR / Ref | Status | RQ |
|---------|------------------|-------------------|----------|--------|----|
| ATOM-001 | Scheduler | Batch runs daily at **exactly 10:00 น.** | FR-001, BR-001 | ✅ | |
| ATOM-002 | Data selection | Policy types included = **exactly {ORD, IND, PA}** (other types excluded) | FR-002 | ✅ | |
| ATOM-003 | Data selection | issue_date = **T-1** (yesterday relative to processing date) | FR-002, FR-020a | ✅ | |
| ATOM-004 | Data selection | Status filter = **Inforce only** | FR-002 | ✅ | |
| ATOM-005 | Data selection | Year boundary — include policies issued **from 2026 onward**; issued before 2026 excluded even if issue_date=T-1 | FR-003, A-006, US1 scen.8 | ✅ | |
| ATOM-006 | Data selection | mobile_no = **NULL or empty string** → excluded at selection stage (two sub-conditions) | FR-004, EC-001 | ✅ | |
| ATOM-007 | Do Not Contact | ORD checked via **remark_code='1'** | FR-005, BR-002 | ✅ | |
| ATOM-008 | Do Not Contact | IND/PA checked via **remark_code='4'** | FR-005, BR-002 | ✅ | |
| ATOM-009 | Do Not Contact | policy_type mapping BEFORE DNC check: **ORD='O', IND IN ('I','G'), PA='P'** | FR-005, Q-001, A-005 | ✅ | |
| ATOM-010 | Eligibility (BR-003) | Condition 1: **no LINE AND no Ocean Club → SEND** | FR-006, US1 scen.1 | ✅ | |
| ATOM-011 | Eligibility (BR-003) | Condition 2: **no Ocean Club AND LINE blocked → SEND** | FR-006, US1 scen.4 | ✅ | |
| ATOM-012 | Eligibility (BR-003) | Condition 3: **LINE found (not blocked) OR Ocean Club found → DO NOT send** | FR-006, ALT-001, US1 scen.3 | ✅ | |
| ATOM-013 | Inquiry code | **code=E02** (Customer not found) → used as internal eligibility signal, **no user-facing message** | FR-007, MSG-002 | ✅ | |
| ATOM-014 | Inquiry code | **code=E13** (Generic Error) → **skip record immediately, NO retry**, log for Manual Fix, continue next | FR-008, MSG-003, ALT-004, US1 scen.7 | ✅ | |
| ATOM-015 | Inquiry code | Response **outside the 3 conditions** (e.g. channel=null, isBlockLine=null) → skip + separate log, do NOT stop round | FR-008a, EC-003 | ✅ | |
| ATOM-016 | Inquiry service down | Service fully down/timeout/system 5xx → **retry max 3 times with interval** (boundary=3) | FR-008b, EC-007 | ✅ | |
| ATOM-017 | Inquiry service down | After 3 failed retries → **stop the round + email** IT/User | FR-008b | ✅ | |
| ATOM-018 | Asymmetry | **Per-record E13 (skip)** vs **whole-system down (retry→stop round)** — different handling, must not conflate | FR-008 vs FR-008b | ✅ | |
| ATOM-019 | Dedup (in-round) | Grouping key = **(fname, lname, mobile_no)** within same processing round | FR-009, BR-004 | ✅ | |
| ATOM-020 | Dedup (in-round) | Selected record = **MIN(issue_date)** among the group | FR-009, US1 scen.5 | ✅ | |
| ATOM-021 | Dedup tie-break | When issue_date equal for all in group → choose **smallest policy_no** (deterministic) | EC-002, A-007 | 🔒 | RQ-001 |
| ATOM-022 | Dedup (cross-round) | History match key = **policy_no + policy_type + fname + lname AND sms_sent_date NOT NULL** → exclude (no resend) | FR-010, BR-005, US1 scen.6 | ✅ | |
| ATOM-023 | Dedup (cross-round) | History check considers **only sms_sent_date IS NOT NULL** (so 'F' rows with NULL do NOT block a future legitimate send) | FR-010, FR-016a | ✅ | |
| ATOM-024 | Message build | Template resolution order = **sms_message_schedule first**, fallback **SMS_CATEGORY.msg_text** | FR-011, BR-006 | ✅ | |
| ATOM-025 | Message build | card_no with **no matching customer name** → skip + log, **MUST NOT send message without name** | FR-011a, EC-005 | ✅ | |
| ATOM-026 | Variable subst. | **$(var1) = customer name** | FR-012 | ✅ | |
| ATOM-027 | Variable subst. | **$(var2) = campaign link** | FR-012 | ✅ | |
| ATOM-028 | Config source | Link config = **config_type='LINE_LINK', config_value1='CSMS_SNC_NewCust'** | FR-012 | ✅ | |
| ATOM-029 | Config validity | Link valid = **begin_date/expire_date range covers processing date AND active_flag='Y'** | FR-012, SC-005 | ✅ | |
| ATOM-030 | No active link | No active link at processing date → **stop whole round + email**; do NOT send expired/missing link | FR-012a, EC-006 | ✅ | |
| ATOM-031 | CSV filename | Format = **`[Department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv`** | FR-013, BR-007 | ✅ | |
| ATOM-032 | CSV filename | Fixed parts: **Department="MKT", SystemCode="CSMS"** | FR-013 | ✅ | |
| ATOM-033 | CSV filename | Category part = **sms_category_name_abbr** | FR-013 | ✅ | |
| ATOM-034 | CSV filename | **Date part year format INCONSISTENCY:** FR-013 text says "ปี พ.ศ. 2 หลัก" (Buddhist year 2-digit → 2026 CE = "69") but the example filename `MKT_CSMS_MKTWelcomeNewCust_260516100000.csv` uses **"26"** (CE 2-digit). Which is authoritative? | FR-013, Q-007, US1 example | ❓ | RQ-002 |
| ATOM-035 | CSV encoding | Encoding = **UTF-8** | FR-013 | ✅ | |
| ATOM-036 | Ordering | CSV file **must be created BEFORE** calling the send service | FR-013 | ✅ | |
| ATOM-037 | Delivery | Send via **central ESB → SMS Gateway** web service | FR-014, POST-001 | ✅ | |
| ATOM-038 | Logging (CSMS_LOG) | Record includes **refer_no + returned send status** | FR-015, POST-002 | ✅ | |
| ATOM-039 | Logging (WELCOME_NEW_CUST_LINE) | All fields written: **policy_no, policy_type, title_name, fname, lname, card_no, issue_date, sms_sent_date, mobile_no, sms_message, credit_amount, sent_status, created_by, created_date** | FR-016, POST-003 | ✅ | |
| ATOM-040 | Logging | **created_by = "SYSTEM_BATCH"** constant (daily run) | FR-016 | ✅ | |
| ATOM-041 | Logging outcome | Success row → **sms_sent_date = send time, sent_status='S'** | FR-016a | ✅ | |
| ATOM-042 | Logging outcome | Fail/skip row → **sms_sent_date = NULL, sent_status='F'** | FR-016a | ✅ | |
| ATOM-043 | Enum | **sent_status enum = {'S','F'} only** ('S'=success, 'F'=fail/skip) | FR-016a, Key Entities | ✅ | |
| ATOM-044 | credit_amount | Computed with **existing CSMS credit logic (reuse)** — exact formula/expected value NOT in this spec | FR-017, Q-005, A-011 | 🔒 | RQ-003 |
| ATOM-045 | Round-level failure set | Triggers = {file generate fail, ESB/gateway unreachable, source pull/DB error, Inquiry service down (FR-008b), no active link (FR-012a)} | FR-018 | ✅ | |
| ATOM-046 | Email notify | Recipients = **IT team + User** (conceptual); exact addresses per existing convention | FR-018, BR-008, MSG-001 | ✅ | |
| ATOM-047 | Email notify | Email MUST state **batch name = "BATCH-CSMS-WELCOME-LINE"** + **the failed step** | FR-018, Q-002 | ✅ | |
| ATOM-048 | Timeout criterion | "ตามเวลาที่กำหนด" for declaring failure = **existing CSMS batch monitoring SLA/timeout** — actual value NOT in this spec (deferred to plan) | FR-018 | ❓ | RQ-004 |
| ATOM-049 | Manual Fix entry | IT Admin selects **batch=BATCH-CSMS-WELCOME-LINE** + a date range, presses Manual Batch | FR-019, US2 | ✅ | |
| ATOM-050 | Manual Fix validation | Start date boundary: **start ≤ current date** (start>today invalid) | FR-019, US2 scen.3 | ✅ | |
| ATOM-051 | Manual Fix validation | End date boundary: **end ≥ start** (end<start invalid) | FR-019, US2 scen.3 | ✅ | |
| ATOM-052 | Manual Fix messages | Validation + error messages = **central Admin Dashboard standard** — exact text NOT in this spec (out-of-scope UI) | FR-019, MSG-004 | ❓ | RQ-005 |
| ATOM-053 | Manual Fix idempotent | Rows with **sms_sent_date NOT NULL are not resent** | FR-020, EC-004, US2 scen.4 | ✅ | |
| ATOM-054 | Manual Fix date semantics | Selected date = **processing date of the failed round**; system pulls issue_date = **T-1 of each day** in range (e.g. select 2026-05-15 → pull issue_date 2026-05-14) | FR-020a | ✅ | |
| ATOM-055 | 'F' resend policy | 'F' rows resent **only via Manual Fix**; daily round **MUST NOT** auto-retry 'F' | FR-020b | ✅ | |
| ATOM-056 | Manual Fix scope | Manual Fix picks **only rows sms_sent_date IS NULL** in the selected range | FR-020b | ✅ | |
| ATOM-057 | Report content | Daily report shows: total processed, success ('S'), fail/skip ('F'), excluded-by-reason (DNC / already-registered / in-round dup / previously-sent), **breakdown by policy_type (ORD/IND/PA)** | FR-021, Q-006, US3 scen.1 | ✅ | |
| ATOM-058 | Report scope | **No separate threshold alert** for abnormally high 'F' — monitored via daily report only | FR-021 (clarified) | ✅ | |
| ATOM-059 | SMS text (example) | Example message text with $(var1)/$(var2) placeholders (US1). Actual text is runtime from schedule/category — **example-only, not a fixed oracle** | US1 example, FR-011 | 🔒 | (example) |
| ATOM-060 | SMS category | sms_category_code='113', sms_category_name='MKTWelcomeNewCust', sms_category = 'CSMS_SNC_NewCust' | US1 example, Key Entities | ✅ | |
| ATOM-061 | Char limit | Requirement **does not impose a character limit**; template ~140 chars ≈ 2 credits (UCS-2 Thai) — no boundary to enforce, cost via existing logic | A-011 | ✅ | |

## RQ List (emitted back to SA — do NOT guess; carried into 01)

| RQ ID | Atom | Question to SA | Severity |
|-------|------|----------------|----------|
| RQ-001 | ATOM-021 | EC-002 tie-break: when a customer's grouped policies all share the same issue_date, the spec (A-007) *proposes* "smallest policy_no" but marks it as a spec-author default, still open for confirm. Confirm the deterministic tie-break rule. | Major (affects idempotency/determinism SC-003) |
| RQ-002 | ATOM-034 | FR-013 says the date segment of the CSV filename is Buddhist year 2-digit ("ปี พ.ศ. 2 หลัก") but the example `..._260516100000.csv` uses "26" (Gregorian 2-digit; BE would be "69"). Which is authoritative — the rule text or the example? | Major (wrong filename → interface handoff failure, SC-005 file convention) |
| RQ-003 | ATOM-044 | FR-017 reuses existing CSMS credit logic; the exact formula and the expected credit_amount for a given message are not in this spec. Provide the reference/expected value so credit_amount can be asserted. | Minor (audit field, not send-blocking) |
| RQ-004 | ATOM-048 | FR-018 defines batch failure by "ตามเวลาที่กำหนด" = existing CSMS monitoring SLA/timeout; the concrete threshold is deferred to plan. Provide the value so the failure/alert timing can be tested. | Major (SC-004 alert-on-failure not verifiable without threshold) |
| RQ-005 | ATOM-052 | FR-019 Manual Fix validation/error messages follow the central Admin Dashboard standard; exact text/behavior is not in this spec (out-of-scope UI). Provide the standard messages (or confirm QA references the central screen spec). | Minor (out-of-scope UI; needed only for exact-message assertion) |

**Atom totals:** 61 atoms — ✅ specified: 55 · ❓ RQ: 3 (ATOM-034, 048, 052) · 🔒 assumption: 3 (ATOM-021, 044, 059).
> Every ✅ atom must get ≥1 TC in `03`. ❓/🔒 atoms get a `[BLOCKED]`/`[ASSUMPTION]` TC that points to the RQ (behavior not invented).
