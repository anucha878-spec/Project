# Test Scenarios — CSMS-003 Grace Period 7 Days (SMS Batch)

Feature: `004-gp7-sms-batch` — Batch ส่ง SMS "Grace Period 7 วันก่อนหมดระยะเวลาผ่อนผัน" (โมดูล CSMS)
System: Centralized SMS (CSMS) batch · DWConsole (`public.ili_*`) · LINE Ocean Connect API (`cisappapi`) · ESB → SMS Gateway
Source: `spec.md` (Draft 2026-07-07). Test statuses = **Not Run** (no app reachable; no fabrication).

TC IDs are stable and globally incrementing (`TC-001`…`TC-051`). Every scenario header carries the requirement(s) it covers.

---

## 1. Test Matrix Summary

| ID | Feature | Test Scenario Name | Test Dimension | Priority | Tags | Target Test Level |
|----|---------|--------------------|----------------|----------|------|-------------------|
| TC-001 | FR-003/FR-004 | Inforce policy exactly 7 calendar days before grace_end is selected | Positive | P1 | @positive @smoke | Integration |
| TC-002 | FR-001 | Batch auto-runs daily at 10:00 | Positive | P1 | @positive @smoke | Integration |
| TC-003 | FR-002 | Data joined from ili_policy_master + ili_notification_letter; grace_end computed | Positive | P2 | @positive @regression | Integration |
| TC-004 | FR-004a | mobile1 present → SMS sent to mobile1 | Positive | P1 | @positive @smoke | Integration |
| TC-005 | FR-004a | mobile1 empty → fallback to mobile2 | Positive | P2 | @positive @regression | Integration |
| TC-006 | FR-007 | LINE result E02 (not registered) → included | Positive | P1 | @positive @smoke | Integration |
| TC-007 | FR-009 | CSV file created, UTF-8, standard name pattern | Positive | P1 | @positive @smoke | Integration |
| TC-008 | FR-010 | Template variables var1/var2/var3 substituted with policy data | Positive | P1 | @positive @smoke | Integration |
| TC-009 | FR-011 | CSV delivered to SMS Gateway; refer_no + per-item status returned | Positive | P1 | @positive @smoke | Integration |
| TC-010 | FR-012 | Success logged to SMS_GRACE_PERIOD_LOG with status 'S' + refer_no | Positive | P1 | @positive @smoke | Integration |
| TC-011 | FR-001/FR-003 | ORD, IND, PA policies all selected when they qualify | Positive | P1 | @positive @regression | Integration |
| TC-012 | FR-003 | Boundary: grace_end − current = 6 → excluded | Edge | P1 | @edge_case @smoke | Integration |
| TC-013 | FR-003 | Boundary: grace_end − current = 8 → excluded | Edge | P1 | @edge_case @smoke | Integration |
| TC-014 | FR-003 | cf_catalog REMINDER_DAYS missing → default 7 days | Edge | P2 | @edge_case @regression | Integration |
| TC-015 | FR-003 | Exactly 7 calendar days, current day excluded, time-of-day ignored | Edge | P1 | @edge_case @smoke | Integration |
| TC-016 | FR-004 | Non-Inforce policy excluded regardless of grace_end | Negative | P1 | @negative @smoke | Integration |
| TC-017 | FR-004a | mobile1 AND mobile2 both empty/NULL → skip + log 'F' | Negative | P1 | @negative @smoke | Integration |
| TC-018 | FR-006a | cardNo not found for policy → skip + log 'F', round continues | Negative | P1 | @negative @smoke | Integration |
| TC-019 | FR-007 | LINE result E13 (abnormal) → skip + log 'F', no retry, round continues | Negative | P1 | @negative @smoke | Integration |
| TC-020 | FR-007 | LINE channel/isBlockLine empty → skip + log 'F' | Negative | P2 | @negative @regression | Integration |
| TC-021 | FR-005 | ORD policy remark_code='1' (Do Not Contact) → excluded | Negative | P1 | @negative @smoke | Integration |
| TC-022 | FR-005 | IND/PA policy remark_code='4' (Do Not Contact) → excluded | Negative | P1 | @negative @smoke | Integration |
| TC-023 | FR-007 | LINE E00 + isBlockLine=false (registered) → excluded | Negative | P1 | @negative @smoke | Integration |
| TC-024 | FR-011 | SMS Gateway returns malformed refer_no → log 'F' | Negative | P2 | @negative @regression | Integration |
| TC-025 | FR-003 | grace_end changed after send → uses result at process time | Edge | P3 | @edge_case @regression | Integration |
| TC-026 | FR-003 | grace_end falls on a non-scheduled day (holiday) → missed group, manual fix | Edge | P3 | @edge_case @regression | Integration |
| TC-027 | FR-005 | remark_code type-mismatch (ORD='4') is NOT a Do-Not-Contact exclusion | Edge | P2 | @edge_case @regression | Integration |
| TC-028 | FR-010 | due_date / grace_end rendered as DD/MM/YYYY in message | Edge | P2 | @edge_case @regression | Integration |
| TC-029 | FR-008/SC-003 | One customer, 2 qualifying policies → 2 SMS (fan-out) | Positive | P1 | @positive @smoke | Integration |
| TC-030 | FR-008 | MUST NOT dedup per-customer — per-policy fan-out enforced | Edge | P1 | @edge_case @smoke | Integration |
| TC-031 | FR-008/SC-003 | Policy already notified same due_date → excluded (dup suppression) | Negative | P1 | @negative @smoke | Integration |
| TC-032 | FR-008/SC-003 | Next-day re-run, same due_date → not re-selected | Negative | P1 | @negative @smoke | Integration |
| TC-033 | FR-014 | Manual re-run idempotent — successful items not resent | Positive | P1 | @positive @smoke | E2E |
| TC-034 | FR-008 | Same policy, different due_date → treated as new cycle, sent | Edge | P2 | @edge_case @regression | Integration |
| TC-035 | FR-001/FR-014 | Manual fix run overlaps daily batch → no double send | Concurrency | P2 | @concurrency @regression | Integration |
| TC-036 | FR-008 | Two batch instances process same policy → exactly one SMS | Concurrency | P2 | @concurrency @regression | Integration |
| TC-037 | FR-005/SC-007 | Contact preferences respected 100% — no wrong-group send | Security | P1 | @security @smoke | Integration |
| TC-038 | FR-012 | Skipped items logged 'F' for audit trail, not silently dropped | Security | P2 | @security @regression | Integration |
| TC-039 | FR-006 | LINE API called with channels='LINE'; cardNo passed correctly | Security | P2 | @security @regression | Integration |
| TC-040 | FR-012/SC-004 | 100% of sent/skipped items logged with status + refer_no | Side-Effects | P1 | @side_effect @smoke | Integration |
| TC-041 | FR-011 | refer_no persisted to log on successful send | Side-Effects | P2 | @side_effect @regression | Integration |
| TC-042 | FR-013 | Batch-level failure → email to IT Dev + user group | Side-Effects | P1 | @side_effect @smoke | Integration |
| TC-043 | FR-009/FR-013 | CSV creation failure → round failure email + manual fix | Side-Effects | P2 | @side_effect @regression | Integration |
| TC-044 | Assumptions | LINE API full outage → retry ≤3 then stop round + email | Side-Effects | P1 | @side_effect @smoke | Integration |
| TC-045 | FR-011 | SMS Gateway temp failure (timeout/5xx) → log 'F', no auto-retry | Side-Effects | P2 | @side_effect @regression | Integration |
| TC-046 | FR-014 | IT Admin triggers manual fix for a chosen date via Admin Dashboard | UX/Usability | P2 | @ux_usability @regression | E2E |
| TC-047 | FR-013 | Failure email includes error detail + log summary | UX/Usability | P3 | @ux_usability @regression | Integration |
| TC-048 | SC-001 | Batch completes ≤5 min for 10,000 policies | Performance | P2 | @performance @regression | Integration |
| TC-049 | SC-002 | ≥99% of selected policies get refer_no confirmation | Performance | P2 | @performance @regression | Integration |
| TC-050 | SC-005 | Round-failure email delivered within 15 min | Side-Effects | P2 | @side_effect @regression | Integration |
| TC-051 | SC-006 | Manual fix completes ≤1 hr with no duplicate send | Side-Effects | P3 | @side_effect @regression | E2E |

**Dimension coverage:** all 7 dimensions present — Positive (11), Negative (9), Edge (9), Concurrency (2),
Security (3), Side-Effects (8), UX/Usability (2), plus Performance (2) mapped to SCs.
No dimension is blanket-excluded. *WCAG AA / mobile-responsive sub-areas are out of scope* — this is a
headless backend batch with only a thin IT-Admin Dashboard entry point (manual-fix), so UX is scoped to the
admin-trigger flow and email readability only (one-line justification per SKILL §4).

---

## 2. BDD Scenarios (Gherkin)

### TC-001 — Inforce policy exactly 7 days before grace_end is selected
```gherkin
# Covers: FR-003, FR-004
Scenario: Policy exactly 7 calendar days before grace_end is targeted
  Given an Inforce policy "3556782" (ORD) with grace_end_date "2026-05-26"
    And the batch processing date is "2026-05-19"
    And REMINDER_DAYS config CSMS_GP_7Days = 7
  When the daily batch runs
  Then the policy is included in the target group
    And grace_end_date - current_date equals 7 calendar days (current day not counted)
```

### TC-002 — Batch auto-runs daily at 10:00
```gherkin
# Covers: FR-001
Scenario: Scheduled daily execution
  Given the batch is scheduled for 10:00 daily
  When the clock reaches 10:00
  Then the Grace Period screening and send process starts automatically
    And no manual trigger is required
```

### TC-003 — Data joined and grace_end computed
```gherkin
# Covers: FR-002
Scenario: Source join produces grace_end_date
  Given policy rows in public.ili_policy_master
    And notification rows in public.ili_notification_letter
  When the batch loads candidate data
  Then grace_end_date is computed from the joined records
    And only records resolvable in both sources are considered
```

### TC-004 / TC-005 — Mobile number selection
```gherkin
# Covers: FR-004a
Scenario Outline: Choose send number by mobile1/mobile2 availability
  Given a qualifying policy with mobile1 "<m1>" and mobile2 "<m2>"
  When the batch selects the send number
  Then the SMS is sent to "<used>"
    And mobile_no logged equals "<used>"

  Examples:
    | m1          | m2          | used        | note        |
    | 0810000001  | 0820000002  | 0810000001  | TC-004 m1   |
    |             | 0820000002  | 0820000002  | TC-005 m2   |
```

### TC-006 — LINE E02 included
```gherkin
# Covers: FR-007
Scenario: Not-registered LINE customer is included
  Given a qualifying policy mapped to cardNo "C0001"
  When LINE Ocean Connect API is called with channels='LINE'
    And the API returns code "E02"
  Then the policy remains in the target group (not yet registered)
```

### TC-007 — CSV file creation
```gherkin
# Covers: FR-009
Scenario: Interface CSV generated with standard name
  Given a screened target group at 2026-05-19 10:00
  When the batch builds the interface file
  Then a UTF-8 CSV named like "MKT_CSMS_MKTGracePeriod7Days_690519100000.csv" is created
    And it follows [department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv
```

### TC-008 — Template variable substitution
```gherkin
# Covers: FR-010
Scenario: Message template variables replaced
  Given policy_no "3556782", due_date "2026-04-12", grace_end_date "2026-05-26"
  When the batch renders the SMS from the Grace-Period-7-day template
  Then ${var1} = "3556782"
    And ${var2} = "12/04/2026"
    And ${var3} = "26/05/2026"
```

### TC-009 — Gateway delivery returns refer_no
```gherkin
# Covers: FR-011
Scenario: CSV posted to SMS Gateway via ESB
  Given a valid interface CSV
  When it is delivered to the SMS Gateway web service
  Then the response contains refer_no and per-item send status
```

### TC-010 — Success logging
```gherkin
# Covers: FR-012
Scenario: Successful send recorded
  Given the Gateway returns success for policy "3556782" with refer_no "R123"
  When the result is processed
  Then SMS_GRACE_PERIOD_LOG has a row with sms_sent_status='S' and refer_no='R123'
```

### TC-011 — All policy types selected
```gherkin
# Covers: FR-001, FR-003
Scenario Outline: ORD / IND / PA all eligible
  Given an Inforce "<type>" policy 7 days before grace_end
  When the batch runs
  Then the "<type>" policy is included

  Examples:
    | type |
    | ORD  |
    | IND  |
    | PA   |
```

### TC-012 / TC-013 / TC-015 — Date-window boundaries
```gherkin
# Covers: FR-003
Scenario Outline: 7-day window boundary (exactly 7, 6, 8 days)
  Given an Inforce policy with grace_end_date "<grace_end>"
    And the batch processing date is "<run_date>"
  When the batch screens the target group
  Then the policy selection is "<selected>"
    And the day count treats calendar days only, excluding the current day and time-of-day

  Examples:
    | run_date   | grace_end   | days | selected | tc     |
    | 2026-05-19 | 2026-05-26  | 7    | included | TC-015 |
    | 2026-05-20 | 2026-05-26  | 6    | excluded | TC-012 |
    | 2026-05-18 | 2026-05-26  | 8    | excluded | TC-013 |
```

### TC-014 — Config default fallback
```gherkin
# Covers: FR-003
Scenario: Missing REMINDER_DAYS config defaults to 7
  Given cf_catalog has no row for config_type='REMINDER_DAYS' config_value1='CSMS_GP_7Days'
  When the batch reads the reminder-days config
  Then it defaults to 7 days
    And screening uses grace_end_date - current_date = 7
```

### TC-016 — Non-Inforce excluded
```gherkin
# Covers: FR-004
Scenario: Only Inforce policies are eligible
  Given a policy with grace_end_date exactly 7 days out
    And its status is NOT Inforce (e.g. Lapsed/Surrendered)
  When the batch runs
  Then the policy is excluded regardless of grace_end_date
```

### TC-017 — Both mobiles empty → skip + F
```gherkin
# Covers: FR-004a
Scenario: No usable mobile number
  Given a qualifying policy with mobile1 NULL and mobile2 NULL
  When the batch selects the send number
  Then the item is skipped (no SMS sent)
    And SMS_GRACE_PERIOD_LOG records sms_sent_status='F' with no refer_no
    And the round continues to the next item
```

### TC-018 — cardNo not found → skip + F
```gherkin
# Covers: FR-006a
Scenario: Policy cannot be mapped to cardNo
  Given a qualifying policy whose policy_no cannot be mapped to a cardNo
  When the batch prepares the LINE registration check
  Then the item is skipped and logged sms_sent_status='F' (data-anomaly signal)
    And the round continues (no silent drop)
```

### TC-019 — LINE E13 abnormal → skip + F
```gherkin
# Covers: FR-007
Scenario: Per-item abnormal LINE code
  Given a qualifying policy mapped to cardNo "C0009"
  When LINE API returns code "E13"
  Then the item is skipped and logged sms_sent_status='F'
    And no per-item retry is attempted
    And the round continues (distinct from a full-system outage)
```

### TC-020 — LINE empty channel/isBlockLine → skip + F
```gherkin
# Covers: FR-007
Scenario: Malformed LINE response fields
  Given a qualifying policy mapped to cardNo "C0010"
  When LINE API returns channel = "" or isBlockLine = "" (empty)
  Then the item is skipped and logged sms_sent_status='F'
    And the round continues
```

### TC-021 / TC-022 / TC-027 — Do Not Contact rules
```gherkin
# Covers: FR-005
Scenario Outline: Do-Not-Contact exclusion by policy type + remark_code
  Given a qualifying "<type>" policy with ili_policy_remark.remark_code "<code>"
  When the batch applies the Do-Not-Contact filter
  Then the policy is "<result>"

  Examples:
    | type | code | result   | tc     |
    | ORD  | 1    | excluded | TC-021 |
    | IND  | 4    | excluded | TC-022 |
    | PA   | 4    | excluded | TC-022 |
    | ORD  | 4    | kept     | TC-027 |
    | IND  | 1    | kept     | TC-027 |
```

### TC-023 — Registered LINE excluded
```gherkin
# Covers: FR-007
Scenario: Already-registered LINE customer is excluded
  Given a qualifying policy mapped to cardNo "C0002"
  When LINE API returns code "E00" and isBlockLine = false
  Then the policy is excluded (already registered — avoid cross-channel duplicate)
```

### TC-024 — Malformed refer_no → F
```gherkin
# Covers: FR-011
Scenario: Gateway returns malformed refer_no
  Given the SMS Gateway returns a refer_no in an invalid format
  When the result is processed
  Then the item is logged sms_sent_status='F' for manual fix
```

### TC-025 — grace_end changed after send
```gherkin
# Covers: FR-003
Scenario: grace_end adjusted post-send
  Given a policy already notified in this round
  When grace_end_date is later extended or shortened
  Then the batch honors the screening result at the original process time
    And does not retroactively re-evaluate the sent item
```

### TC-026 — grace_end on non-scheduled day
```gherkin
# Covers: FR-003
Scenario: Target day is a non-run day
  Given a policy whose 7-days-before date falls on a day the batch is not scheduled (holiday)
  When the daily batch does not run that day
  Then that group is missed for the automated round
    And it can be recovered via IT-Admin Manual Fix for that date
```

### TC-028 — Date rendering format
```gherkin
# Covers: FR-010
Scenario: Dates rendered DD/MM/YYYY
  Given due_date 2026-04-12 and grace_end_date 2026-05-26
  When the message is rendered
  Then ${var2} shows "12/04/2026" and ${var3} shows "26/05/2026"
```

### TC-029 / TC-030 — Per-policy fan-out
```gherkin
# Covers: FR-008, SC-003
Scenario: One customer with multiple qualifying policies
  Given customer with mobile1 "0810000001"
    And two Inforce policies "P100" (due 2026-04-12) and "P200" (due 2026-04-15)
    And both are exactly 7 days before their grace_end
  When the batch runs
  Then 2 SMS are sent — one per policy — each referencing its own policy_no/due_date/grace_end_date
    And the system does NOT dedup by customer/mobile
    And SMS_GRACE_PERIOD_LOG has 2 rows keyed by policy_no+due_date
```

### TC-031 / TC-032 — Dedup suppression
```gherkin
# Covers: FR-008, SC-003
Scenario Outline: Same policy_no + due_date not sent twice in the same Due cycle
  Given policy "P100" with due_date "2026-04-12" already has a SMS_GRACE_PERIOD_LOG row for that due_date
  When the batch runs on "<run_context>"
  Then policy "P100" for due_date "2026-04-12" is excluded (no duplicate)

  Examples:
    | run_context                 | tc     |
    | same round re-evaluation    | TC-031 |
    | next day, same due_date     | TC-032 |
```

### TC-033 — Manual re-run idempotency
```gherkin
# Covers: FR-014
Scenario: IT-Admin manual backfill does not resend successful items
  Given a partially-failed round where P100 sent 'S' and P200 logged 'F'
  When IT Admin re-runs the Manual Batch for that date
  Then P100 is NOT resent (dedup by policy_no+due_date via FR-008)
    And only P200 is reprocessed
```

### TC-034 — Different due_date is a new cycle
```gherkin
# Covers: FR-008
Scenario: Same policy new Due cycle
  Given policy "P100" was notified for due_date "2026-04-12"
    And policy "P100" now qualifies again for a different due_date "2026-05-12"
  When the batch runs
  Then P100 is sent again for due_date "2026-05-12" (distinct Due cycle)
```

### TC-035 / TC-036 — Concurrency
```gherkin
# Covers: FR-001, FR-014, FR-008
Scenario: Overlapping/parallel processing does not duplicate sends
  Given a manual-fix run and the daily batch (or two batch instances) touch policy "P100"/due "2026-04-12" concurrently
  When both attempt to send
  Then exactly one SMS is sent for that policy_no+due_date
    And the dedup check remains consistent under concurrency
```

### TC-037 — Contact preferences respected
```gherkin
# Covers: FR-005, SC-007
Scenario: No wrong-group send
  Given a mixed dataset of do-not-contact, registered-LINE, and eligible policies
  When the batch runs
  Then 0 SMS are sent to do-not-contact or registered-LINE policies
    And only eligible policies receive SMS (100% preference adherence)
```

### TC-038 — Audit trail for skips
```gherkin
# Covers: FR-012
Scenario: Skipped items are auditable
  Given items skipped for empty-mobile, missing-cardNo, or abnormal-LINE reasons
  When the round ends
  Then each skipped item has an SMS_GRACE_PERIOD_LOG row with sms_sent_status='F'
    And none is silently dropped
```

### TC-039 — LINE API call parameters
```gherkin
# Covers: FR-006
Scenario: Correct LINE API invocation
  Given a policy mapped to cardNo "C0001"
  When the batch calls cisappapi at 11.100.8.44
  Then the request uses channels='LINE' and the correct cardNo
```

### TC-040 — Full logging
```gherkin
# Covers: FR-012, SC-004
Scenario: Every processed item is logged
  Given N policies enter the send/skip step
  When the round completes
  Then 100% of them have an SMS_GRACE_PERIOD_LOG row with sms_sent_status and (for 'S') refer_no
```

### TC-041 — refer_no persisted
```gherkin
# Covers: FR-011
Scenario: refer_no stored on success
  Given a successful Gateway response with refer_no "R555"
  When logging occurs
  Then SMS_GRACE_PERIOD_LOG.refer_no = "R555" for that policy row
```

### TC-042 / TC-043 — Round-failure email
```gherkin
# Covers: FR-013, FR-009
Scenario Outline: Round-level failure triggers alert email
  Given the round fails at step "<step>"
  When the failure is detected
  Then an email is sent to IT Development and the user group
    And the email states the failing step and error detail
    And the data can be recovered via Manual Fix

  Examples:
    | step                | tc     |
    | generic round abort | TC-042 |
    | CSV creation fails  | TC-043 |
```

### TC-044 — LINE full outage retry policy
```gherkin
# Covers: Assumptions (LINE Ocean Connect API outage)
Scenario: System-wide LINE outage stops the round
  Given the LINE API is unreachable/not responding (not a per-item error)
  When the batch calls it
  Then the batch retries up to 3 times with backoff
    And if still failing it STOPS the round and emails IT + users
    And this is distinct from per-item E13 handling (TC-019)
```

### TC-045 — Gateway temp failure
```gherkin
# Covers: FR-011 (Assumptions — SMS Gateway temporary failure)
Scenario: Transient Gateway error
  Given the SMS Gateway returns timeout or 5xx for an item
  When the result is processed
  Then that item is logged sms_sent_status='F'
    And it is NOT auto-retried in the daily round (recovered via Manual Fix only)
```

### TC-046 — Manual fix via dashboard
```gherkin
# Covers: FR-014
Scenario: IT Admin triggers a backdated manual batch
  Given IT Admin is authenticated on the central CSMS Admin Dashboard
  When they select a target date and trigger Manual Batch for CSMS-003
  Then the system re-processes that date's data
    And an audit record of the manual run is created
```

### TC-047 — Email content readability
```gherkin
# Covers: FR-013
Scenario: Failure email is actionable
  Given a round-level failure email is generated
  When IT reads it
  Then it contains the error detail and a log summary sufficient to locate the failure
```

### TC-048 / TC-049 — Performance / delivery rate
```gherkin
# Covers: SC-001, SC-002
Scenario Outline: Throughput and confirmation rate
  Given a target set of "<count>" policies
  When the batch runs
  Then it completes within "<sla>"
    And at least "<confirm>" receive a refer_no

  Examples:
    | count  | sla    | confirm | tc     |
    | 10000  | 5 min  | n/a     | TC-048 |
    | any    | n/a    | 99%     | TC-049 |
```

### TC-050 / TC-051 — SLA on alerts / manual fix
```gherkin
# Covers: SC-005, SC-006
Scenario Outline: Operational SLAs
  Given "<trigger>"
  When it occurs
  Then "<outcome>" within "<sla>"

  Examples:
    | trigger                  | outcome                              | sla     | tc     |
    | round-level failure      | alert email delivered                | 15 min  | TC-050 |
    | manual fix of failed set | pending group fully sent, no resend  | 1 hour  | TC-051 |
```

---

## 3. Test Checklist (16-column execution format)

System = `Centralized SMS (CSMS) batch — 004-gp7-sms-batch`. Feature column carries the primary FR per row.
`Test Status = Not Run` for all rows (no execution performed; no fabrication). Columns 13–14 blank until a real run.

| Test Checklist ID | System | Feature | Screen | Sub Category | Test Objective | Test Condition | Test Step | Expected Result | Test Data | Priority | Test Status | Tested By | Tested Date (YYYY-MM-DD) | Redmine No. | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-001 | CSMS batch | FR-003 Grace-period screening | SMS Job | Selection | 7-day window selects | Inforce, grace_end=run+7 | Run batch on 2026-05-19 | Policy included | grace_end 2026-05-26 | P1 | Not Run |  |  | - | boundary=7 |
| TC-002 | CSMS batch | FR-001 Daily schedule | SMS Job | Schedule | Auto-run at 10:00 | Scheduler configured | Advance clock to 10:00 | Process starts, no manual trigger | 10:00 daily | P1 | Not Run |  |  | - |  |
| TC-003 | CSMS batch | FR-002 Data source | SMS Job | Data | Join + compute grace_end | Rows in both tables | Load candidates | grace_end computed | master+letter | P2 | Not Run |  |  | - |  |
| TC-004 | CSMS batch | FR-004a Mobile select | SMS Job | Send | Use mobile1 | mobile1 present | Select number | SMS to mobile1; mobile_no=mobile1 | m1 0810000001 | P1 | Not Run |  |  | - |  |
| TC-005 | CSMS batch | FR-004a Mobile select | SMS Job | Send | Fallback mobile2 | mobile1 empty | Select number | SMS to mobile2 | m2 0820000002 | P2 | Not Run |  |  | - |  |
| TC-006 | CSMS batch | FR-007 LINE check | SMS Job | Filter | E02 included | cardNo C0001 | Call LINE API | Kept (not registered) | E02 | P1 | Not Run |  |  | - |  |
| TC-007 | CSMS batch | FR-009 CSV build | SMS Job | File | CSV name/UTF-8 | screened group | Build interface file | UTF-8 CSV, standard name | MKT_CSMS_...csv | P1 | Not Run |  |  | - |  |
| TC-008 | CSMS batch | FR-010 Template | SMS Job | Message | var substitution | template present | Render message | var1/2/3 substituted | 3556782 | P1 | Not Run |  |  | - |  |
| TC-009 | CSMS batch | FR-011 Gateway send | SMS Job | Integration | Deliver + refer_no | valid CSV | POST to Gateway | refer_no + status returned | R123 | P1 | Not Run |  |  | - |  |
| TC-010 | CSMS batch | FR-012 Logging | SMS Job | Audit | Success logged 'S' | Gateway success | Process result | log 'S' + refer_no | R123 | P1 | Not Run |  |  | - |  |
| TC-011 | CSMS batch | FR-003 Policy types | SMS Job | Selection | ORD/IND/PA eligible | 3 types qualify | Run batch | all 3 included | ORD,IND,PA | P1 | Not Run |  |  | - |  |
| TC-012 | CSMS batch | FR-003 Boundary | SMS Job | Selection | 6 days excluded | grace_end=run+6 | Run batch | excluded | 6 days | P1 | Not Run |  |  | - | boundary=6 |
| TC-013 | CSMS batch | FR-003 Boundary | SMS Job | Selection | 8 days excluded | grace_end=run+8 | Run batch | excluded | 8 days | P1 | Not Run |  |  | - | boundary=8 |
| TC-014 | CSMS batch | FR-003 Config | SMS Job | Config | Default 7 | cf_catalog missing | Read config | default 7 used | no config | P2 | Not Run |  |  | - |  |
| TC-015 | CSMS batch | FR-003 Day-count | SMS Job | Selection | calendar-day, excl. current | grace_end=run+7 | Run at 10:00 | included; time ignored | 7 days | P1 | Not Run |  |  | - |  |
| TC-016 | CSMS batch | FR-004 Inforce | SMS Job | Filter | Non-Inforce excluded | Lapsed policy | Run batch | excluded | Lapsed | P1 | Not Run |  |  | - |  |
| TC-017 | CSMS batch | FR-004a No mobile | SMS Job | Send | Both empty skip+F | m1,m2 NULL | Select number | skip + log 'F', continue | NULL/NULL | P1 | Not Run |  |  | - |  |
| TC-018 | CSMS batch | FR-006a cardNo map | SMS Job | Filter | cardNo missing skip+F | no cardNo | Map cardNo | skip + log 'F', continue | no map | P1 | Not Run |  |  | - |  |
| TC-019 | CSMS batch | FR-007 LINE err | SMS Job | Filter | E13 skip+F | cardNo C0009 | Call LINE API | skip + log 'F', no retry | E13 | P1 | Not Run |  |  | - |  |
| TC-020 | CSMS batch | FR-007 LINE err | SMS Job | Filter | empty fields skip+F | cardNo C0010 | Call LINE API | skip + log 'F' | channel="" | P2 | Not Run |  |  | - |  |
| TC-021 | CSMS batch | FR-005 DNC | SMS Job | Filter | ORD remark 1 excluded | ORD remark_code=1 | Apply filter | excluded | ORD/1 | P1 | Not Run |  |  | - |  |
| TC-022 | CSMS batch | FR-005 DNC | SMS Job | Filter | IND/PA remark 4 excluded | IND remark_code=4 | Apply filter | excluded | IND/4 | P1 | Not Run |  |  | - |  |
| TC-023 | CSMS batch | FR-007 LINE reg | SMS Job | Filter | E00+false excluded | cardNo C0002 | Call LINE API | excluded (registered) | E00,false | P1 | Not Run |  |  | - |  |
| TC-024 | CSMS batch | FR-011 refer_no | SMS Job | Integration | malformed refer_no F | bad format | Process result | log 'F' | bad refer | P2 | Not Run |  |  | - |  |
| TC-025 | CSMS batch | FR-003 Post-change | SMS Job | Selection | process-time result | grace_end changed later | Run then change | honors process-time | changed | P3 | Not Run |  |  | - |  |
| TC-026 | CSMS batch | FR-003 Holiday | SMS Job | Selection | non-run day missed | target on holiday | No run that day | missed → manual fix | holiday | P3 | Not Run |  |  | - |  |
| TC-027 | CSMS batch | FR-005 DNC mismatch | SMS Job | Filter | type-mismatch kept | ORD remark_code=4 | Apply filter | kept (not excluded) | ORD/4 | P2 | Not Run |  |  | - |  |
| TC-028 | CSMS batch | FR-010 Date fmt | SMS Job | Message | DD/MM/YYYY | due/grace dates | Render message | 12/04/2026, 26/05/2026 | dates | P2 | Not Run |  |  | - |  |
| TC-029 | CSMS batch | FR-008 Fan-out | SMS Job | Dedup | 2 policies → 2 SMS | 1 cust 2 policies | Run batch | 2 SMS, 2 log rows | P100,P200 | P1 | Not Run |  |  | - |  |
| TC-030 | CSMS batch | FR-008 No cust-dedup | SMS Job | Dedup | per-policy not per-cust | same mobile 2 pol | Run batch | not deduped by customer | same mobile | P1 | Not Run |  |  | - |  |
| TC-031 | CSMS batch | FR-008 Dedup | SMS Job | Dedup | same key excluded | log exists | Run batch | excluded | P100+due | P1 | Not Run |  |  | - |  |
| TC-032 | CSMS batch | FR-008 Dedup | SMS Job | Dedup | next-day no resend | log exists | Run next day | not reselected | P100+due | P1 | Not Run |  |  | - |  |
| TC-033 | CSMS batch | FR-014 Idempotent | Admin Dashboard | Manual Fix | no resend of 'S' | mixed S/F round | Re-run manual | only 'F' reprocessed | S=P100,F=P200 | P1 | Not Run |  |  | - |  |
| TC-034 | CSMS batch | FR-008 New cycle | SMS Job | Dedup | diff due_date sent | new due_date | Run batch | sent again | P100 new due | P2 | Not Run |  |  | - |  |
| TC-035 | CSMS batch | FR-014 Concurrency | SMS Job | Concurrency | manual+daily no dup | overlap runs | Run concurrently | one SMS | P100+due | P2 | Not Run |  |  | - |  |
| TC-036 | CSMS batch | FR-008 Concurrency | SMS Job | Concurrency | 2 instances one SMS | parallel instances | Run parallel | exactly one SMS | P100+due | P2 | Not Run |  |  | - |  |
| TC-037 | CSMS batch | FR-005 Compliance | SMS Job | Security | 100% pref adherence | mixed dataset | Run batch | 0 wrong-group sends | mixed | P1 | Not Run |  |  | - |  |
| TC-038 | CSMS batch | FR-012 Audit | SMS Job | Security | skips logged F | skipped items | Run batch | all 'F' logged | skips | P2 | Not Run |  |  | - |  |
| TC-039 | CSMS batch | FR-006 LINE call | SMS Job | Security | channels='LINE' | cardNo C0001 | Call API | correct params | LINE param | P2 | Not Run |  |  | - |  |
| TC-040 | CSMS batch | FR-012 Full log | SMS Job | Side-Effect | 100% logged | N processed | Run batch | 100% have log rows | N items | P1 | Not Run |  |  | - |  |
| TC-041 | CSMS batch | FR-011 refer_no | SMS Job | Side-Effect | refer_no persisted | success resp | Log result | refer_no stored | R555 | P2 | Not Run |  |  | - |  |
| TC-042 | CSMS batch | FR-013 Alert | SMS Job | Side-Effect | round-fail email | generic abort | Trigger fail | email IT+users | fail | P1 | Not Run |  |  | - |  |
| TC-043 | CSMS batch | FR-009 CSV fail | SMS Job | Side-Effect | CSV fail → email | disk/perm error | Trigger fail | email + manual fix | disk full | P2 | Not Run |  |  | - |  |
| TC-044 | CSMS batch | Assumptions LINE | SMS Job | Side-Effect | outage retry≤3 stop | API down | Call API | retry≤3, stop, email | outage | P1 | Not Run |  |  | - |  |
| TC-045 | CSMS batch | FR-011 GW temp fail | SMS Job | Side-Effect | timeout/5xx → F | transient error | Process | log 'F', no auto-retry | 5xx | P2 | Not Run |  |  | - |  |
| TC-046 | CSMS batch | FR-014 Manual trig | Admin Dashboard | UX | admin triggers date | authed admin | Select date+run | reprocess + audit | date pick | P2 | Not Run |  |  | - |  |
| TC-047 | CSMS batch | FR-013 Email body | SMS Job | UX | actionable email | fail email | Read email | error+log summary | email body | P3 | Not Run |  |  | - |  |
| TC-048 | CSMS batch | SC-001 Perf | SMS Job | Performance | ≤5 min/10k | 10,000 policies | Run batch | completes ≤5 min | 10k set | P2 | Not Run |  |  | - |  |
| TC-049 | CSMS batch | SC-002 Delivery | SMS Job | Performance | ≥99% refer_no | selected set | Run batch | ≥99% confirmed | set | P2 | Not Run |  |  | - |  |
| TC-050 | CSMS batch | SC-005 Alert SLA | SMS Job | Side-Effect | email ≤15 min | round fail | Trigger fail | email ≤15 min | fail | P2 | Not Run |  |  | - |  |
| TC-051 | CSMS batch | SC-006 Fix SLA | Admin Dashboard | Side-Effect | fix ≤1hr no resend | failed set | Manual fix | completes ≤1hr, no dup | failed set | P3 | Not Run |  |  | - |  |

---

## 4. Coverage Summary

- **Functional Requirements:** 16 (FR-001, FR-002, FR-003, FR-004, FR-004a, FR-005, FR-006, FR-006a, FR-007, FR-008, FR-009, FR-010, FR-011, FR-012, FR-013, FR-014) — **all 16 have ≥1 TC.**
- **Success Criteria:** 7 (SC-001…SC-007) — all mapped (SC-003→TC-029/031/032, SC-007→TC-037, others 1:1). SC-004→TC-040.
- **Assumptions/Edge:** LINE full-outage retry policy → TC-044; Gateway transient failure → TC-045; grace_end post-change → TC-025; holiday miss → TC-026.
- **Total TCs:** 51 · **FR coverage:** 16/16 = **100%** · **SC coverage:** 7/7 = **100%**.
- **Uncovered requirements:** none.
- **FR → TC map:**
  - FR-001 → TC-002, TC-011, TC-035
  - FR-002 → TC-003
  - FR-003 → TC-001, TC-012, TC-013, TC-014, TC-015, TC-025, TC-026
  - FR-004 → TC-001, TC-016
  - FR-004a → TC-004, TC-005, TC-017
  - FR-005 → TC-021, TC-022, TC-027, TC-037
  - FR-006 → TC-039
  - FR-006a → TC-018
  - FR-007 → TC-006, TC-019, TC-020, TC-023
  - FR-008 → TC-029, TC-030, TC-031, TC-032, TC-034, TC-036
  - FR-009 → TC-007, TC-043
  - FR-010 → TC-008, TC-028
  - FR-011 → TC-009, TC-024, TC-041, TC-045, TC-049
  - FR-012 → TC-010, TC-038, TC-040
  - FR-013 → TC-042, TC-047, TC-050
  - FR-014 → TC-033, TC-035, TC-046, TC-051
- **Dimension counts:** Positive 11 · Negative 9 · Edge 9 · Concurrency 2 · Security 3 · Side-Effects 8 · UX/Usability 2 · Performance 2.
- **Dimension omission justifications:** WCAG-AA and mobile-responsive sub-areas of UX excluded — the feature is a headless batch; its only UI is the shared IT-Admin manual-fix trigger (covered by TC-046) and the alert email (TC-047). No end-customer UI exists to test for accessibility/responsiveness.
