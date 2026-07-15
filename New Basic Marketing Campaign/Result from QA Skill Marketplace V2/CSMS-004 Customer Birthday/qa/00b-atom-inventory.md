# 00b — Atom Inventory (QA-owned ledger) — CSMS-004 Customer Birthday

- **Feature slug:** `csms-004-birthday`
- **Skill:** `/requirement-review` (Spec-Kit 01 companion) · **Leg:** A (Spec-Kit `spec.md`)
- **Date:** 2026-07-09
- **Source read:** `spec.md` (full). No `data-model.md` / `contracts/` / mockup / image present in feature folder (batch backend feature — no UI screens). Read coverage = spec only; declared honestly.
- **Status legend:** ✅ specified (in SA doc) · ❓ RQ (SA silent → must ask) · 🔒 assumption (stated by SA as assumption / carried from sibling — treat as RQ for cross-check)

> This is a **batch/backend** feature (scheduled job → DB filters → external API → CSV → SMS Gateway → audit log). No screen/component sweep applies; atoms are mined from **rule branches / boundary / decision-table combinations / status codes / field-format** instead of UI components.

## Atom ledger

| Atom | FR / source | Testable detail | Status | RQ |
|------|-------------|-----------------|--------|----|
| AT-001 | FR-001 | Batch runs automatically **daily at 09:00** | ✅ | |
| AT-002 | FR-001 / US1 example | Filename time component reflects run time `090000` (`...690516090000.csv`) | ✅ | |
| AT-003 | FR-002 / US1-2 | Match by **day + month** of `birthdate` = processing date | ✅ | |
| AT-004 | FR-002 / US1-2 | Birth **year is NOT compared** | ✅ | |
| AT-005 | FR-002 | Source table `public.ili_policy_master` (DWConsole) | ✅ | |
| AT-006 | FR-003 | Send only from Go Live onward (year **≥ 2026**) | ✅ | |
| AT-007 | FR-003 / US1-5 | MUST NOT send backdated before Go Live | ✅ | |
| AT-008 | FR-003a / US5-7 | Feb-29 birth, **non-leap** year → send **Feb-28** | ✅ | |
| AT-009 | FR-003a | Feb-29 birth, **leap** year → send **Feb-29** normally | ✅ | |
| AT-010 | FR-004 / US1-4 | ORD/PA inforce = `policy_status = '1'` | ✅ | |
| AT-011 | FR-004 | IND/GOV inforce = `policy_status ∈ {'1','2','3'}` | ✅ | |
| AT-012 | FR-004 / US1-4 | Non-inforce policy excluded regardless of birthday match | ✅ | |
| AT-013 | FR-005 | Mobile = `coalesce(nullif(trim(mobile1),''), nullif(trim(mobile2),''))` | ✅ | |
| AT-014 | FR-005 / edge | Both mobiles empty/NULL → skip + record for Manual Fix; round continues | ✅ | |
| AT-015 | FR-006 / US2-1 | ORD (`policy_type='0'`) DNC when `remark_code='1'` → exclude | ✅ | |
| AT-016 | FR-006 / US2-2 | IND/GOV/PA (`'I'/'G'/'P'`) DNC when `remark_code='4'` → exclude | ✅ | |
| AT-017 | FR-007 / US2-3 | ORD agent channel = `title_desc <> 'ชำระเอง'` | ✅ | |
| AT-018 | FR-007 / US2-3 | IND/GOV/PA agent channel = `position_code <> '99'` | ✅ | |
| AT-019 | FR-007 / US2-4 | `policy_org` ∈ `2070001–2079999` OR `5070001–5079999`; else exclude | ✅ | |
| AT-020 | FR-008 | Map `policy_no → cardNo` via `cisappapi` (`11.100.8.44`, op `customerByPolicyNoNotWhereCustomerStatus`) | ✅ | |
| AT-021 | FR-008 / US3-2 | cardNo not found → skip + record for Manual Fix; round continues | ✅ | |
| AT-022 | FR-009 / US3-1 | `LINE=E02` **AND** `APP=E02` → **SEND** (decision-table rule 1) | ✅ | |
| AT-023 | FR-009 / US3-1 | `LINE=E00 + isBlockLine=true` **AND** `APP=E02` → **SEND** (rule 2) | ✅ | |
| AT-024 | FR-009 / US3-1 | `LINE=E00 + isBlockLine=false` → **EXCLUDE** (rule 3) | ✅ | |
| AT-025 | FR-009 / US3-1 | `APP=E00` (any LINE) → **EXCLUDE** (rule 4) | ✅ | |
| AT-026 | FR-009a / US3-3 | `E13`/Exception → skip + record failed; **no per-item retry**; round continues (rule 6) | ✅ | |
| AT-027 | FR-009a / US3-3 | `channel`/`isBlockLine` empty → skip + record failed (rule 7) | ✅ | |
| AT-028 | FR-009a | Round MUST keep running after per-item skip | ✅ | |
| AT-029 | FR-008b / US5-1 | `CUSTOMER_BIRTHDAY.sms_sent_date` of current year `is not null` → exclude | ✅ | |
| AT-030 | FR-008b / SC-003 | Duplicate send within same birthday year MUST = 0 | ✅ | |
| AT-031 | Assumption (sms_sent_date) | Next year same birthday can send again (year-scoped) | 🔒 | RQ-003 |
| AT-032 | FR-008c / US5-6 | Dedup + count is **per customer (cardNo)** | ✅ | |
| AT-033 | FR-008c / US5-6 | 1 customer with ≥2 matching policies → **exactly 1 SMS** | ✅ | |
| AT-034 | FR-008c | Record in `CUSTOMER_BIRTHDAY` references **1 representative policy** | ✅ | |
| AT-035 | FR-010 | Interface file = **CSV, UTF-8** | ✅ | |
| AT-036 | FR-010 / US4-1 | Filename `[department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv` = `MKT_CSMS_MKTBirthday_690516090000.csv` | ✅ | |
| AT-037 | FR-010 / US4-1 | Category from `SMS_CATEGORY` where `SMS_CATEGORY_CODE='112'` = `MKTBirthday` | ✅ | RQ-002 |
| AT-038 | FR-010a / US4-2 | Template from `sms_message_schedule` (`sms_category_code='112'`, today ∈ `begin_date`–`end_date`) | ✅ | |
| AT-039 | FR-010a / US4-2 | Fallback to `sms_category` if schedule record not found | ✅ | |
| AT-040 | FR-010a / US4-3 | `$(var1)` = `fname` | ✅ | |
| AT-041 | FR-010a / US4-3 | `$(var2)` = reward value from `cf_catalog` (`config_type='REWARDS'`, `config_value1='CSMS_SBD_Birthday'`, active `'Y'`) | ✅ | |
| AT-042 | FR-010a / US4-3 | `$(var3)` = link from `cf_catalog` (`config_type='LINE_LINK'`, `config_value1='CSMS_SBD_Birthday'`, active `'Y'`) | ✅ | |
| AT-043 | FR-010a / edge / SC-005 | Any required config missing/not active → skip + record + alert; **MUST NOT send SMS with empty variable** | ✅ | |
| AT-044 | FR-010b / US4-4 | CSV column order: `mobile, var1, var2, var3, seq_no, datetime` | ✅ | |
| AT-045 | FR-010b / US4-4 | `seq_no` = running number starting at **1** | ✅ | |
| AT-046 | FR-010b / US4-4 | `datetime` format `YYYY-MM-DD HH:MM` in **CE year** | ✅ | |
| AT-047 | FR-011 / US4-5 | Submit CSV to SMS Gateway via ESB Web Service | ✅ | |
| AT-048 | FR-011 / US4-5 | Response contains `refer_no` + per-item send status | ✅ | |
| AT-049 | FR-012 / US5-2/3 | Record every sent/skipped row to `CUSTOMER_BIRTHDAY` (all fields incl. `sms_sent_date`, `rewards`, `sms_message`, `credit_amount`, `refer_no`/status) | ✅ | |
| AT-050 | FR-012 | Write overview to `CSMS_LOG` (`ID`, `create_date`, `sms_category_name_abbr='MKTBirthday'`, `sms_message`) | ✅ | |
| AT-051 | Assumption (GOV) | GOV policies MUST also be recorded (example table shows only ORD/IND/PA) | 🔒 | RQ-004 |
| AT-052 | FR-013 / US5-4 | Round-level failure/exception → email IT Dev + user group **immediately** with error detail | ✅ | |
| AT-053 | FR-013 | CSV creation failure within time limit → email alert | ✅ | RQ-007 |
| AT-054 | FR-014 / US5-5 | IT Admin Manual Batch by **date range** via central Admin Dashboard | ✅ | |
| AT-055 | FR-014 / SC-007 | Manual Batch **idempotent** — no resend of already-successful items (via FR-008b) | ✅ | |
| AT-056 | FR-014 / edge | Uses the **specified date** as birthday-compare base, not the run/click date | ✅ | |
| AT-057 | Edge (line 154) | Neither `sms_message_schedule` nor `sms_category` template found → round-level failure + email | ✅ | |
| AT-058 | Edge (line 155) / Assumption | Ocean Club App API full outage → retry **≤3** spaced, then stop round + email | 🔒 | RQ-009 |
| AT-059 | FR-012 / Key Entities | `credit_amount` field meaning/source undefined for birthday campaign | ❓ | RQ-006 |
| AT-060 | US5 numbering | US5 Acceptance Scenarios numbered out of order (1,6,7,2,3,4,5) — traceability ambiguity | ❓ | RQ-001 |

## Atom summary
- **Total atoms:** 60
- ✅ specified: 54 · 🔒 assumption (RQ): 4 (AT-031, AT-051, AT-058, AT-037 note) · ❓ RQ: 2 (AT-059, AT-060) + AT-053 SLA value
- **RQ emitted:** RQ-001..RQ-012 (see `01-requirement-review.md`)
- **Handoff:** every ✅ atom → ≥1 TC in `03-test-cases.md`; every 🔒/❓ atom → `[BLOCKED]`/`[ASSUMPTION]` TC pointing to its RQ.
