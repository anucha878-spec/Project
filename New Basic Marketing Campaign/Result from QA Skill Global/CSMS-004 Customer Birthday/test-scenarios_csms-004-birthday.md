# Test Scenarios — CSMS-004 Customer Birthday SMS Batch

_Feature slug: `csms-004-birthday` · Generated: 2026-07-09 · Source: `spec.md` (Draft 2026-07-07)_
_System: Centralized SMS (CSMS) — Ocean Life Web Portal · Batch: daily 09:00 · Statuses below = **Not Run** (no execution this pass)._

Covers **20 FRs** (FR-001, FR-002, FR-003, FR-003a, FR-004, FR-005, FR-006, FR-007, FR-008, FR-008b, FR-008c, FR-009, FR-009a, FR-010, FR-010a, FR-010b, FR-011, FR-012, FR-013, FR-014) and **8 SCs** (SC-001..SC-008) with **70 test cases (TC-001..TC-070)**.

> **Ambiguity finding (surfaced, per instruction).** **US5 acceptance-scenario numbering is scrambled: `1, 6, 7, 2, 3, 4, 5`** (`spec.md:L136–L144`). The `6` and `7` are out-of-sequence inserts (customer-level dedup and the Feb-29 leap-day rule) that duplicate content already in Edge Cases / FR-008c / FR-003a. This is an internal artifact inconsistency → routes to `/speckit-analyze`. **QA impact: none on coverage** — each of the 7 distinct US5 scenarios is still given its own dedicated TC (see mapping in the Coverage Summary). Flagged so the SA renumbers before sign-off.

---

## 1. Test Matrix Summary

| ID | Feature | Test Scenario Name | Test Dimension | Priority | Tags | Target Test Level |
|----|---------|--------------------|----------------|----------|------|-------------------|
| TC-001 | FR-001 | Batch runs automatically daily at 09:00 | Positive | P1 | @positive @smoke | Integration |
| TC-002 | FR-001 | Scheduler fires only at 09:00 (not other times) | Edge | P2 | @edge_case @regression | Integration |
| TC-003 | FR-002 | Customer whose day/month = process date is selected | Positive | P1 | @positive @smoke | Integration |
| TC-004 | FR-002 | Customer whose day/month ≠ process date is excluded | Negative | P1 | @negative | Integration |
| TC-005 | FR-002 | Same day/month, different birth year → still selected (year ignored) | Edge | P2 | @edge_case | Integration |
| TC-006 | FR-002 | NULL / invalid birthdate → skipped (not selected) | Negative | P2 | @negative @edge_case | Integration |
| TC-007 | FR-003 | Birthday before Go-Live → no backdated send | Negative | P1 | @negative @smoke | Integration |
| TC-008 | FR-003 | Process year < 2026 boundary → excluded | Edge | P2 | @edge_case | Integration |
| TC-009 | FR-003a | Feb-29 birthday, leap year, run 29-Feb → sent | Edge | P1 | @edge_case @smoke | Integration |
| TC-010 | FR-003a | Feb-29 birthday, NON-leap year, run 28-Feb → sent (KEY leap-day rule) | Edge | P1 | @edge_case @smoke | Integration |
| TC-011 | FR-003a | Feb-29 birthday, NON-leap year, run 27-Feb → NOT sent | Negative | P2 | @negative @edge_case | Integration |
| TC-012 | FR-004 | ORD/PA `policy_status='1'` (Inforce) → included | Positive | P1 | @positive @smoke | Integration |
| TC-013 | FR-004 | IND/GOV `policy_status` ∈ {1,2,3} → included | Positive | P1 | @positive | Integration |
| TC-014 | FR-004 | Non-Inforce policy → excluded regardless of birthday | Negative | P1 | @negative | Integration |
| TC-015 | FR-004 | IND status boundary: '3' included, '4' excluded | Edge | P2 | @edge_case | Integration |
| TC-016 | FR-005 | `mobile1` present → used as recipient | Positive | P1 | @positive @smoke | Integration |
| TC-017 | FR-005 | `mobile1` empty, `mobile2` present → coalesce to `mobile2` | Edge | P1 | @edge_case | Integration |
| TC-018 | FR-005 | Both mobiles empty/NULL → skip + record for Manual Fix (round continues) | Negative | P1 | @negative | Integration |
| TC-019 | FR-005 | Whitespace-only mobile → trimmed → treated as empty | Negative | P2 | @negative @edge_case | Integration |
| TC-020 | FR-006 | ORD `remark_code='1'` (Do-Not-Contact) → excluded | Negative | P1 | @negative @smoke | Integration |
| TC-021 | FR-006 | IND/GOV/PA `remark_code='4'` → excluded | Negative | P1 | @negative | Integration |
| TC-022 | FR-006 | No Do-Not-Contact remark → retained | Positive | P2 | @positive | Integration |
| TC-023 | FR-007 | ORD `title_desc='ชำระเอง'` → excluded (not agent channel) | Negative | P1 | @negative | Integration |
| TC-024 | FR-007 | IND/GOV/PA `position_code='99'` → excluded | Negative | P1 | @negative | Integration |
| TC-025 | FR-007 | `policy_org` outside 2070001–2079999 / 5070001–5079999 → excluded | Negative | P1 | @negative | Integration |
| TC-026 | FR-007 | `policy_org` boundary values (inclusive edges) | Edge | P2 | @edge_case | Integration |
| TC-027 | FR-007 | Valid agent-channel policy → retained | Positive | P2 | @positive | Integration |
| TC-028 | FR-008 | Map `policy_no`→`cardNo` via `cisappapi` succeeds | Positive | P1 | @positive @smoke | Integration |
| TC-029 | FR-008 | `cardNo` not found → skip + Manual Fix, round continues | Negative | P1 | @negative | Integration |
| TC-030 | FR-009 | LINE=E02 AND APP=E02 → SEND (no digital channel yet) | Positive | P1 | @positive @smoke | Integration |
| TC-031 | FR-009 | LINE=E00+isBlockLine=true AND APP=E02 → SEND (LINE blocked, no app) | Edge | P1 | @edge_case @smoke | Integration |
| TC-032 | FR-009 | LINE=E00+isBlockLine=false → EXCLUDE (active LINE) | Negative | P1 | @negative | Integration |
| TC-033 | FR-009 | APP=E00 → EXCLUDE (has Ocean Club App) | Negative | P1 | @negative | Integration |
| TC-034 | FR-009 | Full 2-channel decision matrix (Scenario Outline) | Edge | P2 | @edge_case @regression | Integration |
| TC-035 | FR-009a | Abnormal per-item response (E13/Exception) → skip + log fail, no per-item retry, round continues | Negative | P1 | @negative | Integration |
| TC-036 | FR-009a | `channel`/`isBlockLine` empty → skip + log fail | Negative | P2 | @negative @edge_case | Integration |
| TC-037 | FR-008b | `sms_sent_date` (current year) not null → excluded (dedup) | Negative | P1 | @negative @smoke | Integration |
| TC-038 | FR-008b | Re-run same day → zero re-sends | Edge | P1 | @edge_case @regression | Integration |
| TC-039 | FR-008b | Prior-year sent, this year null → sent again this year | Edge | P2 | @edge_case | Integration |
| TC-040 | FR-008c | One `cardNo`, two eligible policies → exactly 1 SMS (KEY customer-level dedup) | Edge | P1 | @edge_case @smoke | Integration |
| TC-041 | FR-010 | CSV is UTF-8 with filename `MKT_CSMS_MKTBirthday_[YYMMDDhhmmss].csv` | Positive | P1 | @positive @smoke | Integration |
| TC-042 | FR-010 | Category resolved from `SMS_CATEGORY` code '112' = `MKTBirthday` | Positive | P1 | @positive | Integration |
| TC-043 | FR-010a | Template pulled from `sms_message_schedule` when today ∈ begin–end | Positive | P1 | @positive | Integration |
| TC-044 | FR-010a | No schedule record → fallback to `sms_category` template | Edge | P1 | @edge_case | Integration |
| TC-045 | FR-010a | Variable substitution complete: var1=fname, var2=gift, var3=link | Positive | P1 | @positive @smoke | Integration |
| TC-046 | FR-010a | Missing `cf_catalog` REWARDS entry → skip + log + notify, no empty-var send (KEY) | Negative | P1 | @negative @smoke | Integration |
| TC-047 | FR-010a | `cf_catalog` entry inactive (`active<>'Y'`) → treated as missing → skip | Negative | P1 | @negative | Integration |
| TC-048 | FR-010a | Missing `cf_catalog` LINE_LINK entry → skip + notify | Negative | P1 | @negative | Integration |
| TC-049 | FR-010a | Neither schedule nor category template found → round-level failure + email | Negative | P1 | @negative | Integration |
| TC-050 | FR-010b | CSV column order: mobile, var1, var2, var3, seq_no, datetime | Positive | P1 | @positive | Integration |
| TC-051 | FR-010b | `seq_no` running number starts at 1 | Edge | P2 | @edge_case | Integration |
| TC-052 | FR-010b | `datetime` format `YYYY-MM-DD HH:MM`, Christian-era year | Edge | P2 | @edge_case | Integration |
| TC-053 | FR-011 | Submit CSV to SMS Gateway (ESB) → receive `refer_no` + per-item status | Positive | P1 | @positive @smoke | Integration |
| TC-054 | FR-011 | Gateway temporary failure → record fail, no `refer_no`, no auto-retry (Manual Fix) | Negative | P1 | @negative | Integration |
| TC-055 | FR-012 | Successful send logged to `CUSTOMER_BIRTHDAY` (all fields) + `CSMS_LOG` | Positive | P1 | @positive @smoke | Integration |
| TC-056 | FR-012 | Skipped/failed item logged with fail status, no `refer_no` | Negative | P1 | @negative | Integration |
| TC-057 | FR-012 | GOV policy is recorded (assumption re-confirm) | Edge | P2 | @edge_case | Integration |
| TC-058 | FR-013 | Round-level failure → email IT Dev + users immediately with details | Negative | P1 | @negative @smoke | Integration |
| TC-059 | FR-013 | CSV-creation failure within SLA window → email alert | Negative | P2 | @negative | Integration |
| TC-060 | FR-014 | Manual Batch by date range → idempotent, no re-send of succeeded items | Positive | P1 | @positive @smoke | Integration |
| TC-061 | FR-014 | Manual Batch uses specified date as birthday base (not click date) | Edge | P2 | @edge_case | Integration |
| TC-062 | FR-014 | Manual Batch restricted to `IT_ADMIN` role | Security | P1 | @security @smoke | Integration |
| TC-063 | FR-010a/SC-005 | Special/control chars in `fname` do not break SMS content or CSV | Security | P2 | @security @edge_case | Integration |
| TC-064 | FR-012/SC-004 | PII (`cardNo`, mobile) masked/protected in logs (PDPA) | Security | P2 | @security | Integration |
| TC-065 | FR-008b/FR-014 | Daily + Manual Batch same date concurrently → no double send | Concurrency | P1 | @concurrency | Integration |
| TC-066 | FR-008c | Two policies of same `cardNo` processed in parallel → single dedup | Concurrency | P2 | @concurrency | Integration |
| TC-067 | FR-009/Assump. | External API full outage → retry ≤3 then stop round + email | Side-Effects | P1 | @side_effect @smoke | Integration |
| TC-068 | SC-001 | Batch completes ≤5 min for 10,000-record target | Side-Effects | P2 | @side_effect @regression | Integration |
| TC-069 | FR-013/SC-006 | Failure-alert email content is readable with error detail | UX/Usability | P3 | @ux_usability | Integration |
| TC-070 | FR-014 | Admin Dashboard Manual-Fix date-range selection usability | UX/Usability | P3 | @ux_usability | E2E |

**Dimension coverage (all 7 present):** Positive (TC-001,003,012,013,016,022,027,028,030,041,042,043,045,050,053,055,060) · Negative/Validation (TC-004,006,011,014,018,019,020,021,023,024,025,029,032,033,035,036,037,046,047,048,049,054,056,058,059) · Edge (TC-002,005,008,009,010,015,017,026,031,034,038,039,040,044,051,052,057,061) · Concurrency (TC-065,066) · Security (TC-062,063,064) · Side-Effects (TC-055 write, TC-067,068) · UX/Usability (TC-069,070).

---

## 2. BDD Scenarios (Gherkin)

```gherkin
# Covers: FR-001, SC-001
Feature: Daily scheduled birthday SMS batch

  Scenario: TC-001 Batch runs automatically every day at 09:00
    Given the CSMS-004 scheduled job is enabled
    When the system clock reaches 09:00 on any calendar day from Go-Live onward
    Then the birthday batch starts a processing run for that date
    And it uses that calendar date as the birthday-match base

  Scenario: TC-002 Scheduler fires only at 09:00
    Given the scheduled job is configured for 09:00 daily
    When the clock is at 10:00 (the CSMS-001/003 time) or any non-09:00 time
    Then no CSMS-004 run is triggered by the scheduler
```

```gherkin
# Covers: FR-002
Feature: Birthday day/month matching (year-independent)

  Scenario: TC-003 Customer with matching day/month is selected
    Given a customer with an Inforce policy and birthdate day/month = "05-16"
    When the batch runs on 2026-05-16
    Then the customer is included in the target group

  Scenario: TC-004 Customer with non-matching day/month is excluded
    Given a customer whose birthdate day/month ≠ the process date
    When the batch runs
    Then the customer is excluded (day/month compared, birth year ignored)

  Scenario: TC-005 Different birth year, same day/month, still selected
    Given two customers born on 16 May in 1970 and 2001 respectively
    When the batch runs on 2026-05-16
    Then both are selected (birth year is not compared)

  Scenario: TC-006 NULL or invalid birthdate is skipped
    Given a policy record with birthdate NULL or non-date value
    When the batch runs
    Then that record is not selected and does not raise a round-level failure
```

```gherkin
# Covers: FR-003
Feature: Go-Live boundary (no backdated sends)

  Scenario: TC-007 No backdated send before Go-Live
    Given a customer whose birthday fell before the campaign Go-Live date
    When the batch runs
    Then the system does not send retroactively
    And only birthdays on/after Go-Live (year 2026 onward) are eligible

  Scenario: TC-008 Process year before 2026 is excluded
    Given a (manual) process date whose year < 2026
    When the batch runs for that date
    Then no birthday SMS is produced for that pre-2026 date
```

```gherkin
# Covers: FR-003a
Feature: 29-February leap-day handling

  Scenario Outline: TC-009/TC-010/TC-011 Feb-29 birthday routing
    Given a customer born on 29-February with an eligible Inforce policy
    When the batch runs on <run_date> in a <year_type> year
    Then the customer is <outcome>

    Examples:
      | run_date | year_type | outcome                    | tc     |
      | 29-Feb   | leap      | included and sent          | TC-009 |
      | 28-Feb   | non-leap  | included and sent          | TC-010 |
      | 27-Feb   | non-leap  | NOT sent (wrong send date) | TC-011 |
```

```gherkin
# Covers: FR-004
Feature: Inforce policy-status filter

  Scenario: TC-012 ORD/PA Inforce policy included
    Given an ORD or PA policy with policy_status = '1'
    And its customer matches today's birthday and passes other filters
    When the batch runs
    Then the policy is included

  Scenario: TC-013 IND/GOV Inforce statuses included
    Given an IND or GOV policy with policy_status in {'1','2','3'}
    When the batch runs
    Then the policy is included

  Scenario: TC-014 Non-Inforce policy excluded
    Given a policy whose status is Inforce-invalid (ORD/PA ≠ '1'; IND/GOV ∉ {1,2,3})
    When the batch runs
    Then the policy is excluded even if the birthday matches

  Scenario Outline: TC-015 IND status boundary
    Given an IND policy with policy_status = <status>
    When the batch runs
    Then the policy is <outcome>
    Examples:
      | status | outcome  |
      | 3      | included |
      | 4      | excluded |
```

```gherkin
# Covers: FR-005
Feature: Recipient mobile selection (coalesce)

  Scenario: TC-016 mobile1 used when present
    Given a target with non-empty mobile1
    When the CSV row is built
    Then mobile1 is the recipient number

  Scenario: TC-017 Coalesce to mobile2 when mobile1 empty
    Given a target with empty/NULL mobile1 and non-empty mobile2
    When the CSV row is built
    Then mobile2 is used (coalesce(nullif(trim(mobile1),''), nullif(trim(mobile2),'')))

  Scenario: TC-018 Both mobiles empty -> skip + Manual Fix
    Given a target with mobile1 and mobile2 both empty/NULL
    When the batch runs
    Then the item is skipped and recorded for Manual Fix
    And the round continues processing other items

  Scenario: TC-019 Whitespace-only mobile treated as empty
    Given mobile1 = "   " (spaces only) and mobile2 empty
    When the batch runs
    Then trim() makes it empty and the item is skipped like TC-018
```

```gherkin
# Covers: FR-006
Feature: Do-Not-Contact filter

  Scenario: TC-020 ORD Do-Not-Contact excluded
    Given an ORD policy (policy_type='0') with ili_policy_remark.remark_code='1'
    When the batch runs
    Then the policy is excluded from the target group

  Scenario: TC-021 IND/GOV/PA Do-Not-Contact excluded
    Given an IND/GOV/PA policy (type 'I'/'G'/'P') with remark_code='4'
    When the batch runs
    Then the policy is excluded

  Scenario: TC-022 No Do-Not-Contact remark retained
    Given a policy with no matching Do-Not-Contact remark
    When the batch runs
    Then the policy remains in the target group
```

```gherkin
# Covers: FR-007
Feature: Agent-channel-only filter

  Scenario: TC-023 ORD self-pay excluded
    Given an ORD policy with title_desc = 'ชำระเอง'
    When the batch runs
    Then the policy is excluded (not agent channel)

  Scenario: TC-024 IND/GOV/PA orphan excluded
    Given an IND/GOV/PA policy with position_code = '99'
    When the batch runs
    Then the policy is excluded

  Scenario: TC-025 policy_org outside allowed ranges excluded
    Given a policy whose policy_org ∉ [2070001..2079999] ∪ [5070001..5079999]
    When the batch runs
    Then the policy is excluded

  Scenario Outline: TC-026 policy_org boundary values
    Given a policy with policy_org = <org>
    When the batch runs
    Then the policy is <outcome>
    Examples:
      | org     | outcome  |
      | 2070001 | included |
      | 2079999 | included |
      | 5070001 | included |
      | 5079999 | included |
      | 2070000 | excluded |
      | 2080000 | excluded |

  Scenario: TC-027 Valid agent-channel policy retained
    Given an agent-channel policy passing all FR-007 conditions
    When the batch runs
    Then the policy is retained
```

```gherkin
# Covers: FR-008
Feature: Map policy_no to cardNo

  Scenario: TC-028 cardNo mapping succeeds
    Given a policy_no resolvable via cisappapi customerByPolicyNoNotWhereCustomerStatus
    When the batch maps it
    Then a valid cardNo (national ID) is returned and used for channel checks

  Scenario: TC-029 cardNo not found -> skip + Manual Fix
    Given a policy_no whose cardNo cannot be resolved
    When the batch maps it
    Then the item is skipped and recorded (not successful) for Manual Fix
    And the round continues
```

```gherkin
# Covers: FR-009, SC-008
Feature: Two-channel (LINE + APP) subscription decision

  Scenario: TC-030 Neither channel used -> SEND
    Given cardNo has LINE=E02 and APP=E02
    When the batch evaluates the decision table
    Then the customer is marked SEND

  Scenario: TC-031 LINE blocked + no app -> SEND
    Given cardNo has LINE=E00 with isBlockLine=true and APP=E02
    When the batch evaluates
    Then the customer is marked SEND

  Scenario: TC-032 Active LINE -> EXCLUDE
    Given cardNo has LINE=E00 with isBlockLine=false
    When the batch evaluates
    Then the customer is EXCLUDED

  Scenario: TC-033 Has app -> EXCLUDE
    Given cardNo has APP=E00
    When the batch evaluates
    Then the customer is EXCLUDED

  Scenario Outline: TC-034 Two-channel decision matrix
    Given LINE=<line> isBlockLine=<block> and APP=<app>
    When the batch evaluates the decision table
    Then the customer is <decision>
    Examples:
      | line | block | app | decision |
      | E02  | -     | E02 | SEND     |
      | E00  | true  | E02 | SEND     |
      | E00  | false | E02 | EXCLUDE  |
      | E02  | -     | E00 | EXCLUDE  |
      | E00  | true  | E00 | EXCLUDE  |
```

```gherkin
# Covers: FR-009a
Feature: Abnormal per-item channel response handling

  Scenario: TC-035 E13/Exception -> skip + log, no per-item retry
    Given the channel check returns E13 or an Exception for one item
    When the batch processes it
    Then the item is skipped and recorded as not-successful
    And it is NOT retried per-item
    And the round keeps processing remaining items

  Scenario: TC-036 Empty channel/isBlockLine -> skip + log
    Given the response has empty channel or empty isBlockLine
    When the batch processes it
    Then the item is skipped and recorded as not-successful
```

```gherkin
# Covers: FR-008b, FR-008c, SC-003 — US5 scenarios (renumbered from scrambled 1,6,7)
Feature: Duplicate-send prevention (customer-level, cardNo)

  Scenario: TC-037 Already-sent this year excluded  # US5 scenario "1"
    Given a customer whose CUSTOMER_BIRTHDAY.sms_sent_date for the current year is not null
    When the batch runs again
    Then the customer is excluded (no re-send)

  Scenario: TC-038 Re-run same day -> zero re-sends
    Given a batch already ran and sent for today
    When the batch runs a second time for the same date
    Then the number of duplicate sends is 0

  Scenario: TC-039 Prior-year send does not block this year
    Given a customer sent last year (sms_sent_date prior-year) with this year null
    When the batch runs on this year's birthday
    Then the customer is selected and sent

  Scenario: TC-040 One customer, two eligible policies -> 1 SMS  # US5 scenario "6"
    Given a single cardNo with two policies both matching today's birthday and all filters
    When the batch runs
    Then exactly ONE SMS is produced for that customer
    And CUSTOMER_BIRTHDAY records one representative policy for the customer/round
```

```gherkin
# Covers: FR-010, FR-010a, FR-010b, SC-005
Feature: CSV file build and message templating

  Scenario: TC-041 CSV file naming and encoding
    Given a filtered target group at 09:00 on 2026-05-16
    When the CSV is generated
    Then it is UTF-8 and named MKT_CSMS_MKTBirthday_690516090000.csv

  Scenario: TC-042 Category from SMS_CATEGORY code 112
    Given SMS_CATEGORY has code '112' = MKTBirthday
    When the CSV filename category segment is resolved
    Then it equals MKTBirthday (NOT 113/MKTWelcomeNewCust)

  Scenario: TC-043 Template from sms_message_schedule in date window
    Given sms_message_schedule has sms_category_code='112' with today between begin_date and end_date
    When the batch selects a template
    Then that scheduled template is used

  Scenario: TC-044 Fallback to sms_category
    Given no matching sms_message_schedule record for today
    When the batch selects a template
    Then it falls back to the sms_category template

  Scenario: TC-045 Variable substitution complete
    Given a template with $(var1),$(var2),$(var3)
    When the CSV row is built
    Then var1=fname, var2=gift value from cf_catalog REWARDS(CSMS_SBD_Birthday, active 'Y'),
      var3=link from cf_catalog LINE_LINK(CSMS_SBD_Birthday, active 'Y')
    And no placeholder token remains unresolved

  Scenario: TC-046 Missing REWARDS config -> skip + notify (no empty-var send)  # KEY
    Given no active cf_catalog REWARDS entry for CSMS_SBD_Birthday
    When the batch builds the message
    Then the item is skipped and recorded, an alert is raised
    And no SMS with an empty $(var2) is sent

  Scenario: TC-047 Inactive config treated as missing
    Given a cf_catalog REWARDS entry with active <> 'Y'
    When the batch builds the message
    Then it is treated as missing and the item is skipped (as TC-046)

  Scenario: TC-048 Missing LINE_LINK config -> skip + notify
    Given no active cf_catalog LINE_LINK entry for CSMS_SBD_Birthday
    When the batch builds the message
    Then the item is skipped and an alert is raised (no empty $(var3) sent)

  Scenario: TC-049 No template anywhere -> round failure + email
    Given neither sms_message_schedule nor sms_category has a usable template
    When the batch runs
    Then it is treated as a round-level failure and an email alert is sent

  Scenario: TC-050 CSV column order
    Given generated CSV rows
    Then each row columns are: mobile, var1, var2, var3, seq_no, datetime (in that order)

  Scenario: TC-051 seq_no running number
    Given a CSV with N rows
    Then seq_no starts at 1 and increments by 1

  Scenario: TC-052 datetime format
    Given a CSV row
    Then datetime is "YYYY-MM-DD HH:MM" using the Christian-era year
```

```gherkin
# Covers: FR-011, SC-002
Feature: SMS Gateway submission

  Scenario: TC-053 Submit and receive refer_no
    Given a completed CSV
    When it is submitted to the SMS Gateway via ESB Web Service
    Then a response with refer_no and per-item send status is received

  Scenario: TC-054 Gateway temporary failure
    Given the gateway is temporarily unavailable for an item
    When submission is attempted
    Then the item is recorded as not-successful with no refer_no
    And it is not auto-retried in the daily round (Manual Fix path)
```

```gherkin
# Covers: FR-012, SC-004
Feature: Audit logging

  Scenario: TC-055 Successful send fully logged
    Given a successfully sent item
    Then CUSTOMER_BIRTHDAY records all fields including sms_sent_date, rewards,
      sms_message, credit_amount and refer_no
    And CSMS_LOG records the run summary

  Scenario: TC-056 Skipped/failed item logged
    Given an item that was skipped or failed
    Then it is recorded with a not-successful status and no refer_no

  Scenario: TC-057 GOV policy recorded
    Given a GOV policy in the target group
    When it is processed
    Then it is recorded in CUSTOMER_BIRTHDAY (not silently dropped)
```

```gherkin
# Covers: FR-013, SC-006
Feature: Failure alerting

  Scenario: TC-058 Round failure emails IT + users
    Given a round-level failure or Exception
    When detected
    Then an email is sent immediately to IT Development and the user group with error detail

  Scenario: TC-059 CSV creation failure within SLA -> email
    Given the CSV cannot be created within the configured time window
    When detected
    Then a failure email alert is sent
```

```gherkin
# Covers: FR-014, SC-007
Feature: Manual Fix (idempotent re-run)

  Scenario: TC-060 Manual Batch is idempotent
    Given items partly sent for date D
    When IT_ADMIN triggers a Manual Batch for date D via the Admin Dashboard
    Then only unsent/failed items are processed and succeeded items are not re-sent

  Scenario: TC-061 Manual Batch uses specified date as birthday base
    Given IT_ADMIN specifies a past date D
    When the Manual Batch runs (clicked on a later day)
    Then D (not the click date) is used as the birthday comparison base
```

```gherkin
# Covers: FR-014 (RBAC), FR-010a/SC-005 (content safety), FR-012/SC-004 (PDPA)
Feature: Security & compliance

  Scenario: TC-062 Manual Batch restricted to IT_ADMIN
    Given a non IT_ADMIN user
    When they attempt to trigger a Manual Batch
    Then the action is denied

  Scenario: TC-063 Special/control chars in fname are safe
    Given fname contains control chars, commas, quotes, emoji or a very long value
    When the CSV row is built
    Then the CSV is not broken (delimiter/quote-safe) and no injection occurs
    And the field is a literal value, not an executable/format break

  Scenario: TC-064 PII protected in logs
    Given cardNo (national ID) and mobile are processed
    Then they are masked/protected per PDPA in application logs (no plain full PII leak)
```

```gherkin
# Covers: FR-008b/FR-014 concurrency, FR-008c concurrency, Assumptions
Feature: Concurrency and resilience

  Scenario: TC-065 Daily + Manual same-date concurrent runs do not double send
    Given the daily run and a Manual Batch for the same date overlap
    When both process the same customer
    Then the customer receives at most one SMS (dedup holds under concurrency)

  Scenario: TC-066 Parallel processing of same cardNo dedups to one
    Given two policies of the same cardNo are processed in parallel
    Then only one SMS is produced (no race duplicate)

  Scenario: TC-067 External API full outage -> retry <=3 then stop + email
    Given cisappapi / Ocean Club App API is fully down
    When the batch calls it
    Then it retries at most 3 times with backoff, then stops the round and emails the alert
```

```gherkin
# Covers: SC-001 performance, FR-013/SC-006 UX, FR-014 UX
Feature: Non-functional (performance & usability)

  Scenario: TC-068 Performance target
    Given a target group of up to 10,000 records
    When the batch runs
    Then it completes within 5 minutes

  Scenario: TC-069 Alert email readability
    Given a failure alert email is generated
    Then it clearly states the failure point and error detail for the recipient

  Scenario: TC-070 Manual-Fix date-range usability
    Given IT_ADMIN opens the central Manual-Fix dashboard
    When selecting a date range for CSMS-004
    Then the control is clear, validates the range, and shows run feedback
```

---

## 3. Test Checklist (16-column execution format)

_System and Feature are constant per row group. `Test Status = Not Run`; columns 13–14 blank (no run). Redmine No. = `-`._

| Test Checklist ID | System | Feature | Screen | Sub Category | Test Objective | Test Condition | Test Step | Expected Result | Test Data | Priority | Test Status | Tested By | Tested Date | Redmine No. | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-001 | CSMS (Ocean Life Web Portal) | FR-001 Daily 09:00 batch | SMS Job | Schedule | Job auto-starts at 09:00 | Scheduler enabled | Advance clock to 09:00 | Run starts for that date | date=2026-05-16 | P1 | Not Run |  |  | - | KEY: 09:00 (not 10:00) |
| TC-002 | CSMS | FR-001 Daily 09:00 batch | SMS Job | Schedule | No fire at non-09:00 | Scheduler config | Clock=10:00 | No CSMS-004 trigger | time=10:00 | P2 | Not Run |  |  | - |  |
| TC-003 | CSMS | FR-002 Birthday match | SMS Job | Selection | Match day/month | Inforce policy, bday 05-16 | Run on 05-16 | Included | bday=1980-05-16 | P1 | Not Run |  |  | - |  |
| TC-004 | CSMS | FR-002 Birthday match | SMS Job | Selection | Non-match excluded | bday≠today | Run | Excluded | bday=1980-05-17 | P1 | Not Run |  |  | - |  |
| TC-005 | CSMS | FR-002 Birthday match | SMS Job | Selection | Year ignored | Two years same MMDD | Run on 05-16 | Both selected | 1970/2001-05-16 | P2 | Not Run |  |  | - |  |
| TC-006 | CSMS | FR-002 Birthday match | SMS Job | Selection | NULL/invalid bday | bday NULL | Run | Skipped, no crash | bday=NULL | P2 | Not Run |  |  | - |  |
| TC-007 | CSMS | FR-003 Go-Live boundary | SMS Job | Selection | No backdated send | bday before Go-Live | Run | Not sent retroactively | year<GoLive | P1 | Not Run |  |  | - |  |
| TC-008 | CSMS | FR-003 Go-Live boundary | SMS Job | Selection | Year<2026 excluded | manual date year<2026 | Run | No send | date=2025-05-16 | P2 | Not Run |  |  | - |  |
| TC-009 | CSMS | FR-003a Feb-29 rule | SMS Job | Selection | Leap year send on 29-Feb | bday=02-29, leap yr | Run on 02-29 | Sent | 2028-02-29 run | P1 | Not Run |  |  | - |  |
| TC-010 | CSMS | FR-003a Feb-29 rule | SMS Job | Selection | Non-leap send on 28-Feb | bday=02-29, non-leap | Run on 02-28 | Sent | 2026-02-28 run | P1 | Not Run |  |  | - | KEY leap-day edge |
| TC-011 | CSMS | FR-003a Feb-29 rule | SMS Job | Selection | Non-leap not on 27-Feb | bday=02-29, non-leap | Run on 02-27 | Not sent | 2026-02-27 run | P2 | Not Run |  |  | - |  |
| TC-012 | CSMS | FR-004 Inforce filter | SMS Job | Selection | ORD/PA status 1 | ORD status='1' | Run | Included | policy_status='1' | P1 | Not Run |  |  | - |  |
| TC-013 | CSMS | FR-004 Inforce filter | SMS Job | Selection | IND/GOV 1/2/3 | IND status='2' | Run | Included | policy_status='2' | P1 | Not Run |  |  | - |  |
| TC-014 | CSMS | FR-004 Inforce filter | SMS Job | Selection | Non-Inforce excluded | ORD status='4' | Run | Excluded | policy_status='4' | P1 | Not Run |  |  | - |  |
| TC-015 | CSMS | FR-004 Inforce filter | SMS Job | Selection | IND boundary 3/4 | IND status 3 then 4 | Run | 3 in, 4 out | status∈{3,4} | P2 | Not Run |  |  | - |  |
| TC-016 | CSMS | FR-005 Mobile select | SMS Job | Data Prep | mobile1 used | mobile1 set | Build row | mobile1 recipient | mobile1=0845012341 | P1 | Not Run |  |  | - |  |
| TC-017 | CSMS | FR-005 Mobile select | SMS Job | Data Prep | Coalesce mobile2 | mobile1 empty | Build row | mobile2 used | mobile2=0812345678 | P1 | Not Run |  |  | - |  |
| TC-018 | CSMS | FR-005 Mobile select | SMS Job | Data Prep | Both empty skip | both empty | Run | Skip + Manual Fix | mobile1='' mobile2='' | P1 | Not Run |  |  | - | round continues |
| TC-019 | CSMS | FR-005 Mobile select | SMS Job | Validation | Whitespace mobile | mobile1='   ' | Run | Trimmed→empty→skip | mobile1='   ' | P2 | Not Run |  |  | - | adversarial |
| TC-020 | CSMS | FR-006 Do-Not-Contact | SMS Job | Filter | ORD remark 1 | ORD remark_code='1' | Run | Excluded | remark_code='1' | P1 | Not Run |  |  | - |  |
| TC-021 | CSMS | FR-006 Do-Not-Contact | SMS Job | Filter | IND/GOV/PA remark 4 | remark_code='4' | Run | Excluded | remark_code='4' | P1 | Not Run |  |  | - |  |
| TC-022 | CSMS | FR-006 Do-Not-Contact | SMS Job | Filter | No DNC retained | no remark | Run | Retained | remark none | P2 | Not Run |  |  | - |  |
| TC-023 | CSMS | FR-007 Agent channel | SMS Job | Filter | ORD self-pay out | title_desc='ชำระเอง' | Run | Excluded | title_desc='ชำระเอง' | P1 | Not Run |  |  | - |  |
| TC-024 | CSMS | FR-007 Agent channel | SMS Job | Filter | Orphan out | position_code='99' | Run | Excluded | position_code='99' | P1 | Not Run |  |  | - |  |
| TC-025 | CSMS | FR-007 Agent channel | SMS Job | Filter | org out of range | policy_org out | Run | Excluded | policy_org=1000000 | P1 | Not Run |  |  | - |  |
| TC-026 | CSMS | FR-007 Agent channel | SMS Job | Filter | org boundaries | edge org values | Run | edges in, ±1 out | 2070001/2079999/2080000 | P2 | Not Run |  |  | - |  |
| TC-027 | CSMS | FR-007 Agent channel | SMS Job | Filter | Valid agent kept | all FR-007 pass | Run | Retained | org=2070500 | P2 | Not Run |  |  | - |  |
| TC-028 | CSMS | FR-008 cardNo map | SMS Job | Integration | Map success | valid policy_no | Call cisappapi | cardNo returned | policy_no=ORD00001 | P1 | Not Run |  |  | - |  |
| TC-029 | CSMS | FR-008 cardNo map | SMS Job | Integration | cardNo not found | unmappable policy | Call cisappapi | Skip + Manual Fix | policy_no=ORD99999 | P1 | Not Run |  |  | - | round continues |
| TC-030 | CSMS | FR-009 2-channel decision | SMS Job | Integration | Send both E02 | LINE=E02,APP=E02 | Evaluate | SEND | E02/E02 | P1 | Not Run |  |  | - |  |
| TC-031 | CSMS | FR-009 2-channel decision | SMS Job | Integration | Send blocked+noapp | E00 block=true,E02 | Evaluate | SEND | E00T/E02 | P1 | Not Run |  |  | - |  |
| TC-032 | CSMS | FR-009 2-channel decision | SMS Job | Integration | Active LINE out | E00 block=false | Evaluate | EXCLUDE | E00F | P1 | Not Run |  |  | - |  |
| TC-033 | CSMS | FR-009 2-channel decision | SMS Job | Integration | Has app out | APP=E00 | Evaluate | EXCLUDE | APP=E00 | P1 | Not Run |  |  | - |  |
| TC-034 | CSMS | FR-009 2-channel decision | SMS Job | Integration | Full matrix | all combos | Evaluate | per table | matrix | P2 | Not Run |  |  | - |  |
| TC-035 | CSMS | FR-009a Abnormal resp | SMS Job | Error Handling | E13/Exception skip | resp=E13 | Process | Skip+log,no retry,continue | resp=E13 | P1 | Not Run |  |  | - |  |
| TC-036 | CSMS | FR-009a Abnormal resp | SMS Job | Error Handling | Empty fields skip | isBlockLine='' | Process | Skip+log | isBlockLine='' | P2 | Not Run |  |  | - |  |
| TC-037 | CSMS | FR-008b Dedup | SMS Job | Dedup | Sent this year out | sms_sent_date=curr yr | Re-run | Excluded | sms_sent_date=2026-05-16 | P1 | Not Run |  |  | - |  |
| TC-038 | CSMS | FR-008b Dedup | SMS Job | Dedup | Same-day re-run 0 | already ran today | Run twice | 0 duplicate | run x2 | P1 | Not Run |  |  | - |  |
| TC-039 | CSMS | FR-008b Dedup | SMS Job | Dedup | Prior year resend | sms_sent_date=prev yr | Run | Sent again | 2025-05-16 prior | P2 | Not Run |  |  | - |  |
| TC-040 | CSMS | FR-008c Customer dedup | SMS Job | Dedup | 2 policies 1 SMS | 1 cardNo, 2 policies | Run | Exactly 1 SMS | cardNo x2 policies | P1 | Not Run |  |  | - | KEY customer dedup |
| TC-041 | CSMS | FR-010 CSV build | SMS Job | File | Filename/encoding | target group ready | Generate CSV | UTF-8, MKT_CSMS_MKTBirthday_690516090000.csv | 2026-05-16 09:00 | P1 | Not Run |  |  | - |  |
| TC-042 | CSMS | FR-010 CSV build | SMS Job | File | Category 112 | SMS_CATEGORY 112 | Resolve category | =MKTBirthday | code='112' | P1 | Not Run |  |  | - | not 113 |
| TC-043 | CSMS | FR-010a Template | SMS Job | Content | Schedule template | schedule in window | Select template | scheduled one used | code=112 in range | P1 | Not Run |  |  | - |  |
| TC-044 | CSMS | FR-010a Template | SMS Job | Content | Fallback category | no schedule row | Select template | fallback sms_category | no schedule | P1 | Not Run |  |  | - |  |
| TC-045 | CSMS | FR-010a Template | SMS Job | Content | Var substitution | active cf_catalog | Build message | var1/2/3 filled | fname/gift/link | P1 | Not Run |  |  | - |  |
| TC-046 | CSMS | FR-010a Template | SMS Job | Error Handling | Missing REWARDS | no active REWARDS | Build message | Skip+notify,no empty send | REWARDS absent | P1 | Not Run |  |  | - | KEY negative config |
| TC-047 | CSMS | FR-010a Template | SMS Job | Error Handling | Inactive config | active='N' | Build message | Treated missing, skip | active='N' | P1 | Not Run |  |  | - |  |
| TC-048 | CSMS | FR-010a Template | SMS Job | Error Handling | Missing LINE_LINK | no active LINE_LINK | Build message | Skip+notify | LINE_LINK absent | P1 | Not Run |  |  | - |  |
| TC-049 | CSMS | FR-010a Template | SMS Job | Error Handling | No template | schedule+category none | Run | Round failure+email | both absent | P1 | Not Run |  |  | - |  |
| TC-050 | CSMS | FR-010b CSV format | SMS Job | File | Column order | rows built | Inspect CSV | mobile,var1,var2,var3,seq_no,datetime | sample row | P1 | Not Run |  |  | - |  |
| TC-051 | CSMS | FR-010b CSV format | SMS Job | File | seq_no start 1 | N rows | Inspect | 1..N | N=3 | P2 | Not Run |  |  | - |  |
| TC-052 | CSMS | FR-010b CSV format | SMS Job | File | datetime format | row built | Inspect | YYYY-MM-DD HH:MM CE | 2026-05-16 09:00 | P2 | Not Run |  |  | - |  |
| TC-053 | CSMS | FR-011 Gateway submit | SMS Job | Integration | Submit+refer_no | CSV ready | Submit ESB | refer_no+status returned | csv | P1 | Not Run |  |  | - |  |
| TC-054 | CSMS | FR-011 Gateway submit | SMS Job | Error Handling | Temp failure | gateway down (item) | Submit | fail,no refer_no,no auto-retry | gw 503 | P1 | Not Run |  |  | - |  |
| TC-055 | CSMS | FR-012 Audit log | SMS Job | Side-Effect | Success logged | item sent | Check tables | CUSTOMER_BIRTHDAY+CSMS_LOG full | sent item | P1 | Not Run |  |  | - |  |
| TC-056 | CSMS | FR-012 Audit log | SMS Job | Side-Effect | Fail logged | item skipped/failed | Check tables | fail status,no refer_no | skipped item | P1 | Not Run |  |  | - |  |
| TC-057 | CSMS | FR-012 Audit log | SMS Job | Side-Effect | GOV recorded | GOV in group | Run | GOV row present | GOV policy | P2 | Not Run |  |  | - | assumption |
| TC-058 | CSMS | FR-013 Alerting | SMS Job | Alerting | Round fail email | round failure | Trigger fail | email IT+users, detail | forced fail | P1 | Not Run |  |  | - |  |
| TC-059 | CSMS | FR-013 Alerting | SMS Job | Alerting | CSV fail email | CSV timeout | Trigger | email alert | timeout | P2 | Not Run |  |  | - |  |
| TC-060 | CSMS | FR-014 Manual Fix | Admin Dashboard | Manual Batch | Idempotent re-run | partly sent date D | Trigger manual | only unsent processed | date=D | P1 | Not Run |  |  | - |  |
| TC-061 | CSMS | FR-014 Manual Fix | Admin Dashboard | Manual Batch | Date base | past date D | Trigger later | D is birthday base | D past | P2 | Not Run |  |  | - |  |
| TC-062 | CSMS | FR-014 Manual Fix | Admin Dashboard | Security | RBAC IT_ADMIN | non-admin user | Attempt trigger | Denied | role=user | P1 | Not Run |  |  | - | constitution: RBAC |
| TC-063 | CSMS | FR-010a Content safety | SMS Job | Security | Special chars fname | fname has ,"/ctrl/emoji | Build CSV | CSV not broken,literal | fname edge set | P2 | Not Run |  |  | - | adversarial text |
| TC-064 | CSMS | FR-012 PDPA | SMS Job | Security | PII in logs | cardNo/mobile | Check logs | masked/protected | national ID | P2 | Not Run |  |  | - | PDPA gate |
| TC-065 | CSMS | FR-008b/014 Concurrency | SMS Job | Concurrency | Daily+manual same date | overlap runs | Run concurrently | ≤1 SMS/customer | same date | P1 | Not Run |  |  | - |  |
| TC-066 | CSMS | FR-008c Concurrency | SMS Job | Concurrency | Parallel same cardNo | 2 policies parallel | Run | 1 SMS (no race) | cardNo x2 | P2 | Not Run |  |  | - |  |
| TC-067 | CSMS | FR-009 Resilience | SMS Job | Error Handling | API full outage | cisappapi down | Run | retry≤3 then stop+email | API 000 | P1 | Not Run |  |  | - |  |
| TC-068 | CSMS | SC-001 Performance | SMS Job | Performance | 10k in ≤5 min | 10,000 records | Run | ≤5 minutes | 10000 rows | P2 | Not Run |  |  | - |  |
| TC-069 | CSMS | FR-013 Alert UX | Email | UX | Email readability | failure email | Inspect email | clear failure detail | alert body | P3 | Not Run |  |  | - |  |
| TC-070 | CSMS | FR-014 Manual UX | Admin Dashboard | UX | Date-range usability | admin opens dash | Select range | clear, validated, feedback | range picker | P3 | Not Run |  |  | - |  |

---

## 4. Coverage Summary

- **Total FRs:** 20 · **FRs with ≥1 TC:** 20 · **FR coverage: 100%**
- **Total SCs (measurable):** 8 · **SCs with ≥1 TC:** 8 (SC-001→TC-068, SC-002→TC-053, SC-003→TC-037/038/040, SC-004→TC-055/056/064, SC-005→TC-045/046/063, SC-006→TC-058/069, SC-007→TC-060, SC-008→TC-030/032/033/020/021/023)
- **Total TCs:** 70 (TC-001..TC-070) · all **Status = Not Run**
- **Per-dimension count:** Positive 17 · Negative/Validation 25 · Edge 18 · Concurrency 2 · Security 3 · Side-Effects 3 · UX/Usability 2

### FR → TC map (every FR ≥1 TC — no uncovered FR)
| FR | TCs | FR | TCs |
|----|-----|----|-----|
| FR-001 | TC-001,002 | FR-009 | TC-030,031,032,033,034 |
| FR-002 | TC-003,004,005,006 | FR-009a | TC-035,036 |
| FR-003 | TC-007,008 | FR-010 | TC-041,042 |
| FR-003a | TC-009,010,011 | FR-010a | TC-043,044,045,046,047,048,049,063 |
| FR-004 | TC-012,013,014,015 | FR-010b | TC-050,051,052 |
| FR-005 | TC-016,017,018,019 | FR-011 | TC-053,054 |
| FR-006 | TC-020,021,022 | FR-012 | TC-055,056,057,064 |
| FR-007 | TC-023,024,025,026,027 | FR-013 | TC-058,059,069 |
| FR-008 | TC-028,029 | FR-014 | TC-060,061,062,070,065 |
| FR-008b | TC-037,038,039,065 | FR-008c | TC-040,066 |

### US5 scrambled-numbering resolution (each distinct scenario → dedicated TC)
| US5 printed # | Actual scenario | TC |
|---------------|-----------------|----|
| 1 | Dedup by `sms_sent_date` current year | TC-037 |
| 6 (misplaced) | 1 cardNo, 2 policies → 1 SMS | TC-040 |
| 7 (misplaced) | Feb-29 non-leap → send 28-Feb | TC-010 |
| 2 | Success logged (`CUSTOMER_BIRTHDAY`+`CSMS_LOG`) | TC-055 |
| 3 | Skip/fail logged, no `refer_no` | TC-056 |
| 4 | Round failure → email | TC-058 |
| 5 | Manual Fix idempotent | TC-060 |

### Dimension omissions (justified)
- **No dedicated WCAG/mobile-responsive TCs** — CSMS-004 is a headless daily batch; the only UI surface is the shared central Manual-Fix dashboard (out of scope for new UI per spec §Scope). UX/Usability is covered at the reachable surfaces only (TC-069 email, TC-070 dashboard date-range). Full accessibility audit belongs to the shared dashboard's own feature, not this batch.
- **Load/stress beyond the stated 10k target** not separately tested — spec bounds the target at 10,000 records/run (SC-001, TC-068); higher volumes are out of stated scope.

### Notes / handoffs
- **US5 numbering (1,6,7,2,3,4,5)** → `/speckit-analyze` (artifact consistency). Coverage unaffected.
- **Category code `112` vs source `113`**, GOV-inclusion, `birthdate`/`birthday`, table-name and `sms_sent_date`-type deviations → verify via `/speckit-qa crosscheck` once the upstream `SPEC_BATCH-CSMS-004_BirthDay.md` is supplied (see `crosscheck-brd-spec_csms-004-birthday.md`).
- Whether the FR-003a "send on 28-Feb" boundary is inclusive of the whole day, and whether the FR-004 IND/GOV `{1,2,3}` set is the final Inforce definition, are **requirement-quality** questions → `/speckit-checklist`.
