# Test Scenarios — CSMS-002 Welcome New Customer รอบ 2 (Ocean Club App)

_Feature slug: `csms-002-welcome-round2` · Spec: Draft 2026-07-07 · Generated: 2026-07-09 · Mode: `design` (iteration 1)_

System under test: **Centralized SMS (CSMS) batch — Ocean Life Web Portal**. Daily scheduled job at 10:00 that
selects customers who received the CSMS-001 round-1 "Welcome (LINE)" SMS exactly N days ago (config `DATE_COUNT`,
default 20), are still Inforce, contactable, not Do-Not-Contact, and **registered on neither LINE Ocean Connect
nor Ocean Club App** (with the `isBlockLine` exception), then sends a round-2 SMS inviting Ocean Club App
registration — logging every record with a link back to the round-1 row.

> **No running application** is reachable in this workspace, so every `Test Status` below is **Not Run** and no
> result is fabricated. This artifact is the design-time test plan (matrix + BDD + 16-col checklist).

---

## 1. Test Matrix Summary

| ID | Feature | Test Scenario Name | Test Dimension | Priority | Tags | Target Test Level |
|----|---------|--------------------|----------------|----------|------|-------------------|
| TC-001 | FR-001, FR-002, FR-018.1 | Daily 10:00 run selects exactly-N-day cohort, sends round-2 SMS with round-1 linkage | Positive | P1 | @positive @smoke | E2E |
| TC-002 | FR-003 | Config `DATE_COUNT` changed (20→15) is applied to cohort selection without code change | Positive | P1 | @positive @smoke | Integration |
| TC-003 | FR-002 | Cohort day boundary — round-1 sent at N-1 and N+1 days is NOT selected | Edge | P2 | @edge_case | Integration |
| TC-004 | FR-002 | Reference round-1 day has no data → round ends normally (not a failure) | Edge | P3 | @edge_case | Integration |
| TC-005 | FR-004 | Inforce inclusion — IND status '2' and GOV status '3' are included | Positive | P1 | @positive | Integration |
| TC-006 | FR-004 | Lapsed policy (not Inforce) is excluded | Negative/Validation | P1 | @negative @smoke | Integration |
| TC-007 | FR-004 | Per-type status boundary — ORD status '2' is excluded (ORD allows only '1') | Edge | P2 | @edge_case @negative | Integration |
| TC-008 | FR-005 | Phone selection — mobile1 present → SMS sent to mobile1 | Positive | P1 | @positive | Integration |
| TC-009 | FR-005 | Phone fallback — mobile1 empty, mobile2 present → SMS sent to mobile2 | Edge | P2 | @edge_case | Integration |
| TC-010 | FR-005 | Both mobile1 and mobile2 empty → customer excluded | Negative/Validation | P1 | @negative | Integration |
| TC-011 | FR-005, FR-018 | Phone changed since round 1 → send to current policy phone, log the phone actually used | Edge | P2 | @edge_case @side_effect | Integration |
| TC-012 | FR-006 | Do-Not-Contact — ORD remark code '1' is excluded | Negative/Validation | P1 | @negative @smoke | Integration |
| TC-013 | FR-006 | Do-Not-Contact — IND/GOV/PA remark code '4' is excluded | Negative/Validation | P1 | @negative | Integration |
| TC-014 | FR-007, FR-018.2 | cardNo not found for policy → skip + `sent_status='F'`, round continues | Negative/Validation | P1 | @negative | Integration |
| TC-015 | FR-008, FR-009 | Send rule (a) — LINE=E02 AND APP=E02 (registered on neither) → SMS sent | Positive | P1 | @positive @smoke | Integration |
| TC-016 | FR-009 | Send rule (b) — LINE registered but `isBlockLine=true` AND APP=E02 → SMS sent | Positive | P1 | @positive @smoke | Integration |
| TC-017 | FR-010 | Exclude — Ocean Club App already registered → no SMS | Negative/Validation | P1 | @negative @smoke | Integration |
| TC-018 | FR-010 | Exclude — LINE registered and NOT blocked (`isBlockLine=false`) → no SMS | Negative/Validation | P1 | @negative | Integration |
| TC-019 | FR-010 | Registers App after filtering but before send → still sent (status checked at process time only) | Edge | P2 | @edge_case | Integration |
| TC-020 | FR-011 | Registration check returns `E13` (error) → skip that record + 'F', no retry, continue round | Negative/Validation | P1 | @negative | Integration |
| TC-021 | FR-011 | Registration result out-of-condition (empty channel / empty `isBlockLine`) → skip + 'F' | Edge | P2 | @edge_case @negative | Integration |
| TC-022 | FR-012, FR-019 | Registration service down system-wide → retry ≤3 spaced, then stop round + email | Negative/Validation | P1 | @negative @regression | Integration |
| TC-023 | FR-013 | Cross-round dedup — record with a successful round-2 send date is not re-sent | Negative/Validation | P1 | @negative @smoke | Integration |
| TC-024 | FR-013.1 | Same customer, multiple qualifying policies in one round → exactly 1 SMS, deterministic representative | Concurrency | P1 | @concurrency @smoke | Integration |
| TC-025 | FR-013, FR-018.2 | Prior 'F' record (sms_sent_date NULL) does NOT block a later resend | Edge | P2 | @edge_case | Integration |
| TC-026 | FR-014, FR-015 | Template '111' found + `${var1}/${var2}/${var3}` substituted with name/reward/link | Positive | P1 | @positive @smoke | Integration |
| TC-027 | FR-014 | Template '111' missing → fallback to main message-type table | Edge | P2 | @edge_case | Integration |
| TC-028 | FR-015.1 | Insured name (var1) empty → skip + 'F'; MUST NOT send a nameless message | Negative/Validation | P1 | @negative @smoke | Integration |
| TC-029 | FR-016, FR-019 | No Active campaign config (days/reward/link) on run day → stop whole round + email | Negative/Validation | P1 | @negative | Integration |
| TC-030 | FR-015, FR-017 | Name contains CSV/formula-injection payload → neutralized in CSV; no `${var}` leak; no formula exec | Security | P1 | @security @smoke | Integration |
| TC-031 | FR-015, FR-017 | Name with unicode/emoji/very-long value → rendered intact in SMS + CSV, no corruption/truncation break | Edge | P2 | @edge_case @security | Integration |
| TC-032 | FR-017 | CSV built UTF-8 with filename `MKT_CSMS_MKTWelcomeNewCustApp_[YYMMDDhhmmss]` (BE 2-digit year), sent via ESB→Gateway | Positive | P1 | @positive @smoke | Integration |
| TC-033 | FR-019 | CSV / file creation fails at round level → failure email sent | Negative/Validation | P2 | @negative @regression | Integration |
| TC-034 | FR-018 | Two-level log written (campaign + per-policy) with `refer_no` + send status; type map O→ORD/I→IND/G→GOV/P→PA | Positive | P1 | @positive | Integration |
| TC-035 | FR-018.1, SC-006 | Every sent round-2 record carries a reference ID back to its source round-1 (CSMS-001) row | Side-Effects | P1 | @side_effect @smoke | Integration |
| TC-036 | FR-018.2 | Status/date semantics — success → 'S' + sms_sent_date; skip/fail → 'F' + NULL date; dedup reads NOT NULL only | Side-Effects | P1 | @side_effect @smoke | Integration |
| TC-037 | FR-018.2 | SMS Gateway returns per-record failure → logged 'F' with NULL send date so Manual Fix can re-pick | Side-Effects | P2 | @side_effect | Integration |
| TC-038 | FR-019, SC-005 | Round-level failure → email to IT Dev + User naming batch + failed step, within 15 min | Positive | P1 | @positive @regression | Integration |
| TC-039 | FR-020 | Manual Fix re-runs a failed day → pending records processed, succeeded ones not re-sent | Positive | P1 | @positive @smoke | E2E |
| TC-040 | FR-020, FR-013 | Manual Fix over a range with mixed sent/pending → only pending re-sent (no duplicates) | Edge | P2 | @edge_case | Integration |
| TC-041 | FR-020.1 | Daily round MUST NOT auto-retry 'F' records — only Manual Fix picks them up | Negative/Validation | P2 | @negative | Integration |
| TC-042 | FR-020.2 | Manual Fix interprets selected date as the batch process date and uses current N config (target = date − N) | Edge | P2 | @edge_case | Integration |
| TC-043 | FR-013, FR-020, FR-013.1 | Manual Fix running concurrently with the daily batch over an overlapping cohort → no double send | Concurrency | P1 | @concurrency @regression | Integration |
| TC-044 | FR-020.2 (reporting) | Central daily reconcile report shows processed / 'S' / 'F' / excluded-by-reason + ORD/IND/GOV/PA breakdown | Side-Effects | P2 | @side_effect @regression | Integration |
| TC-045 | FR-003 | Config N changed mid-campaign causing skipped/double-counted cohorts → dedup blocks doubles, skips recoverable by Manual Fix | Edge | P2 | @edge_case | Integration |
| TC-046 | FR-019 | Failure email + reconcile report readability — correct recipients, batch name and failed step are clear/actionable | UX/Usability | P3 | @ux_usability | Integration |

**Test-dimension coverage:** all 7 dimensions are represented — Positive (TC-001/002/005/008/015/016/026/032/034/038/039),
Negative/Validation (TC-006/007/010/012/013/014/017/018/020/022/023/028/029/033/041), Edge (TC-003/004/009/011/019/021/025/027/031/040/042/045),
Concurrency (TC-024/043), Security (TC-030, TC-031), Side-Effects (TC-011/035/036/037/044), UX/Usability (TC-046).
No dimension is omitted. UX/Usability is deliberately narrow (TC-046 only): the feature is a **headless batch** with
no interactive UI in scope (the Admin/Manual-Fix screen and the reconcile report are explicitly *out of scope for UI
design* per spec Scope), so UX here is limited to the notification/report **feedback** surface (recipient correctness,
actionable failure-step text) rather than screen layout/responsive/WCAG — those sub-areas are justifiably excluded.

---

## 2. BDD Scenarios (Gherkin)

### Target selection & schedule

```gherkin
# Covers: FR-001, FR-002, FR-018.1, SC-001, SC-006
Scenario: TC-001 Daily 10:00 run sends round-2 SMS to an exactly-N-day cohort with round-1 linkage
  Given a customer received the CSMS-001 round-1 "Welcome (LINE)" SMS successfully exactly 20 days before today
  And their ORD policy is Inforce (status '1') with a valid mobile number
  And they are not on the Do Not Contact list
  And the registration check returns LINE=E02 and APP=E02 (registered on neither channel)
  When the batch runs at 10:00
  Then a round-2 SMS is sent to the customer's current policy phone
  And the message contains the insured name, the reward value and the download link (no ${var} placeholders remain)
  And a per-policy history row is written with sent_status='S' and sms_sent_date=today
  And that row carries a reference ID pointing back to the source round-1 (CSMS-001) record
```

```gherkin
# Covers: FR-003
Scenario: TC-002 Changed DATE_COUNT config is applied without a code change
  Given the active campaign config DATE_COUNT is changed from 20 to 15
  And a customer received the round-1 SMS successfully exactly 15 days ago
  When the batch runs
  Then the customer is selected into the cohort using N=15
  And no code deployment was required for the change to take effect
```

```gherkin
# Covers: FR-002
Scenario Outline: TC-003 Cohort day boundary excludes off-by-one days
  Given a customer received the round-1 SMS successfully "<offset>" days ago
  And the active DATE_COUNT is 20
  When the batch runs
  Then the customer is "<result>" the cohort
  Examples:
    | offset | result       |
    | 19     | excluded from |
    | 20     | included in   |
    | 21     | excluded from |
```

```gherkin
# Covers: FR-002
Scenario: TC-004 Empty reference round-1 day ends the round normally
  Given no round-1 records exist with a successful send date of (today − N)
  When the batch runs
  Then the round produces zero targets
  And the round completes as a normal (successful) run — no failure email is sent
```

### Eligibility filters — Inforce, phone, Do Not Contact

```gherkin
# Covers: FR-004
Scenario Outline: TC-005 Inforce status is included per policy type
  Given a qualifying customer with a "<type>" policy in status "<status>"
  When the batch evaluates Inforce eligibility
  Then the policy is included
  Examples:
    | type | status |
    | IND  | 2      |
    | GOV  | 3      |
```

```gherkin
# Covers: FR-004, SC-003
Scenario: TC-006 Lapsed policy is excluded
  Given a customer whose policy is no longer Inforce
  When the batch evaluates eligibility
  Then the customer is excluded and no SMS is sent
```

```gherkin
# Covers: FR-004
Scenario: TC-007 ORD status boundary — only '1' qualifies
  Given a qualifying customer with an ORD policy in status '2'
  When the batch evaluates Inforce eligibility
  Then the policy is excluded (ORD Inforce is status '1' only; '2'/'3' apply to IND/GOV, not ORD)
```

```gherkin
# Covers: FR-005
Scenario Outline: TC-008 / TC-009 Phone selection prefers mobile1 then mobile2
  Given a qualifying customer with mobile1="<m1>" and mobile2="<m2>"
  When the batch selects the send number
  Then the SMS is sent to "<used>"
  Examples:
    | m1         | m2         | used       |
    | 0810000001 | 0820000002 | 0810000001 |  # TC-008
    |            | 0820000002 | 0820000002 |  # TC-009
```

```gherkin
# Covers: FR-005
Scenario: TC-010 Customer with no usable phone is excluded
  Given a qualifying customer whose mobile1 and mobile2 are both empty
  When the batch selects the send number
  Then the customer is excluded and no SMS is sent
```

```gherkin
# Covers: FR-005, FR-018
Scenario: TC-011 Phone changed since round 1 uses the current policy number and logs it
  Given a qualifying customer whose round-1 history phone differs from the current policy mobile1
  When the batch sends the round-2 SMS
  Then the SMS is delivered to the current policy mobile1 (not the round-1 phone)
  And the per-policy history records the phone number actually used
```

```gherkin
# Covers: FR-006, SC-003
Scenario Outline: TC-012 / TC-013 Do Not Contact excludes by policy type + remark code
  Given a qualifying customer with a "<type>" policy carrying remark code "<remark>"
  When the batch applies the Do Not Contact filter
  Then the customer is excluded and no SMS is sent
  Examples:
    | type | remark |
    | ORD  | 1      |  # TC-012
    | IND  | 4      |  # TC-013
    | GOV  | 4      |  # TC-013
    | PA   | 4      |  # TC-013
```

### cardNo mapping & registration-status check (LINE + App)

```gherkin
# Covers: FR-007, FR-018.2
Scenario: TC-014 cardNo not found is skipped and logged 'F', round continues
  Given a qualifying policy whose number cannot be mapped to a cardNo
  When the batch calls the customer-info service
  Then that record is skipped (no SMS)
  And a per-policy row is written with sent_status='F' and sms_sent_date NULL
  And the batch continues processing the remaining records
```

```gherkin
# Covers: FR-008, FR-009, SC-001
Scenario: TC-015 Registered on neither channel → SMS sent (send rule a)
  Given a qualifying customer whose registration check returns LINE=E02 and APP=E02
  When the batch evaluates the send rule
  Then the customer is sent the round-2 SMS
```

```gherkin
# Covers: FR-009
Scenario: TC-016 LINE registered but blocked + no App → SMS sent (send rule b)
  Given a qualifying customer registered on LINE with isBlockLine=true
  And whose APP registration check returns E02 (no Ocean Club App)
  When the batch evaluates the send rule
  Then the customer is sent the round-2 SMS (the LINE channel is effectively unusable and there is no App)
```

```gherkin
# Covers: FR-010, SC-003
Scenario Outline: TC-017 / TC-018 Already-reachable customers are excluded
  Given a qualifying customer whose registration check returns "<line>" / "<app>" with isBlockLine="<block>"
  When the batch evaluates the send rule
  Then the customer is excluded and no SMS is sent
  Examples:
    | line       | app        | block | note                          |
    | (any)      | registered | (any) | App already registered (TC-017) |
    | registered | E02        | false | LINE registered, not blocked (TC-018) |
```

```gherkin
# Covers: FR-010
Scenario: TC-019 App registered between filtering and send is still sent
  Given a customer who passed the send-rule filter (LINE=E02, APP=E02)
  And who registers the Ocean Club App after filtering but before the actual send
  When the batch sends
  Then the SMS is still sent — status is evaluated at process time only, and this is acceptable per spec
```

```gherkin
# Covers: FR-011
Scenario Outline: TC-020 / TC-021 Registration error / out-of-condition result is skipped + 'F'
  Given a qualifying customer whose registration check returns "<result>"
  When the batch evaluates that record
  Then the record is skipped with sent_status='F' and NULL send date, no retry
  And the batch continues with the next record
  Examples:
    | result                                  |
    | E13 (error/exception)                   |  # TC-020
    | empty channel or empty isBlockLine value|  # TC-021
```

```gherkin
# Covers: FR-012, FR-019, SC-005
Scenario: TC-022 Registration service fully down → bounded retry then stop round + email
  Given the registration-status service is unreachable for the whole system
  When the batch attempts the check
  Then it retries at most 3 times with spacing
  And on continued failure it stops the round
  And it sends the standard round-failure email to IT Dev and Users naming the failed step
```

### Duplicate prevention

```gherkin
# Covers: FR-013, SC-002
Scenario: TC-023 Cross-round dedup — a successful prior round-2 send is not repeated
  Given a customer already has a round-2 history row (policy_no + policy_type + phone) with a successful send date
  When a later batch round runs and the customer would otherwise qualify
  Then no duplicate SMS is sent
```

```gherkin
# Covers: FR-013.1, SC-002
Scenario: TC-024 One SMS per customer when multiple policies qualify in a round
  Given one customer (same name, surname, phone) has three qualifying policies in the same round
  When the batch groups and selects a representative
  Then exactly one SMS is sent
  And the representative is chosen deterministically (oldest record; tie-break by smallest policy_no)
  And the non-selected policies are still written to history for reconciliation
```

```gherkin
# Covers: FR-013, FR-018.2
Scenario: TC-025 A prior 'F' record does not block a later resend
  Given a customer has a round-2 history row with sent_status='F' and sms_sent_date NULL
  When a later qualifying round runs
  Then the dedup check (which only counts rows where sms_sent_date IS NOT NULL) does not block the send
  And the customer is sent the SMS
```

### Message, template & interface file

```gherkin
# Covers: FR-014, FR-015, SC-004
Scenario: TC-026 Template '111' with full variable substitution
  Given the message-schedule table has a template for message type '111'
  And the active campaign config provides the reward value and download link
  When the batch composes the message for a customer named "Somchai Testphon"
  Then the sent text substitutes ${var1}=name, ${var2}=reward value, ${var3}=download link
  And no literal ${var} placeholder remains in the sent text
```

```gherkin
# Covers: FR-014
Scenario: TC-027 Template '111' missing falls back to the main message-type table
  Given no template exists for message type '111'
  When the batch composes the message
  Then it uses the format from the main message-type table (fallback) and still substitutes all variables
```

```gherkin
# Covers: FR-015.1, SC-004
Scenario: TC-028 Empty insured name is skipped, never sent nameless
  Given a qualifying record whose insured name (source of ${var1}) is empty
  When the batch composes the message
  Then the record is skipped with sent_status='F'
  And no message is sent (a nameless message MUST NOT be delivered)
```

```gherkin
# Covers: FR-016, FR-019
Scenario: TC-029 No Active campaign config stops the whole round + email
  Given the run day has no Active campaign config (missing days / reward / link)
  When the batch starts
  Then the entire round is stopped
  And the standard round-failure email is sent to IT Dev and Users
```

```gherkin
# Covers: FR-015, FR-017 — Security (adversarial input catalog: text/CSV injection sink)
Scenario Outline: TC-030 Name with injection payload is neutralized in the CSV
  Given a qualifying customer whose insured name is "<payload>"
  When the batch renders the name into the message and the interface CSV
  Then the CSV field is safe — a leading formula char is neutralized (e.g. prefixed) so spreadsheets do not execute it
  And embedded commas / quotes / newlines are properly quoted/escaped so columns do not shift
  And no ${var} placeholder leaks and no injected content changes the SMS command/structure
  Examples:
    | payload                    |
    | =1+1                       |
    | +CMD()                     |
    | @SUM(A1)                   |
    | Som,chai "the" tester      |
    | Line1\nLine2               |
```

```gherkin
# Covers: FR-015, FR-017 — Edge/Security (unicode/length rendering)
Scenario Outline: TC-031 Unicode / emoji / long name renders intact
  Given a qualifying customer whose insured name is "<payload>"
  When the batch renders the message and CSV (UTF-8)
  Then the value is preserved without mojibake, and length handling does not corrupt the row or split the CSV
  Examples:
    | payload                          |
    | ณัฐพลป้องเกียรติ์ (Thai combining) |
    | 王小明😀 (CJK + emoji)            |
    | <256-char name>                  |
```

```gherkin
# Covers: FR-017
Scenario: TC-032 Interface CSV format, filename convention and delivery channel
  Given a round with at least one sendable record
  When the batch produces the interface file
  Then the file is UTF-8 CSV
  And its name matches MKT_CSMS_MKTWelcomeNewCustApp_[YYMMDDhhmmss] with a 2-digit Buddhist-era year
  And it is delivered through the central channel (ESB → SMS Gateway)
```

```gherkin
# Covers: FR-019
Scenario: TC-033 File-creation failure raises the round-failure email
  Given the interface CSV cannot be created at the scheduled time
  When the batch detects the failure
  Then the standard round-failure email is sent to IT Dev and Users naming the failed step
```

### Logging, linkage & status semantics

```gherkin
# Covers: FR-018
Scenario: TC-034 Two-level logging with refer_no and correct type mapping
  Given a completed send for an IND policy
  When the batch writes history
  Then a campaign-level row records the actual message text, message-type short name and creation time
  And a per-policy row records policy_no, type, name, cardNo, contract start, send date, phone used, message, credit, actor
  And the delivery result (refer_no + send status) from the central channel is recorded
  And the policy type is mapped character-for-character: O→ORD, I→IND, G→GOV, P→PA
```

```gherkin
# Covers: FR-018.1, SC-006
Scenario: TC-035 Every sent record traces back to its round-1 source row
  Given a batch round that sends to 10 customers
  When history is written
  Then each of the 10 round-2 per-policy rows contains a reference ID to its originating round-1 (CSMS-001) row
  And 100% of sent records are traceable back to round 1
```

```gherkin
# Covers: FR-018.2
Scenario Outline: TC-036 sent_status / send-date semantics and dedup source
  Given a record whose processing outcome is "<outcome>"
  When the batch writes its per-policy row
  Then sent_status="<status>" and sms_sent_date is "<date>"
  And the FR-013 dedup check considers only rows where sms_sent_date IS NOT NULL
  Examples:
    | outcome            | status | date  |
    | sent successfully  | S      | today |
    | skipped / failed   | F      | NULL  |
```

```gherkin
# Covers: FR-018.2
Scenario: TC-037 SMS Gateway per-record failure is logged 'F' with NULL date
  Given the SMS Gateway returns a failure for one record
  When the batch records the result
  Then that row has sent_status='F' and sms_sent_date NULL
  And a subsequent Manual Fix can re-pick the record because its send date is NULL
```

### Notification & Manual Fix

```gherkin
# Covers: FR-019, SC-005
Scenario: TC-038 Round failure notifies IT + Users within 15 minutes
  Given a round-level failure is detected (extraction / file / channel / service / no-config)
  When the batch handles the failure
  Then an email is sent to the IT Development team and the User group
  And it names the batch (per convention, e.g. BATCH-CSMS-WELCOME-APP) and the step that failed
  And it is sent within 15 minutes of detection
```

```gherkin
# Covers: FR-020, SC-007
Scenario: TC-039 Manual Fix reprocesses a failed day without re-sending successes
  Given a whole daily round previously failed
  When IT Admin selects that date range and triggers Manual Fix
  Then the cohort for that day is reprocessed
  And SMS is sent only to records that were never successfully sent
```

```gherkin
# Covers: FR-020, FR-013, SC-007
Scenario: TC-040 Manual Fix over a mixed range only sends the pending records
  Given a selected date range containing both successfully-sent and pending records
  When Manual Fix runs
  Then only the pending records are sent — no duplicate to the already-successful ones
```

```gherkin
# Covers: FR-020.1
Scenario: TC-041 Daily round never auto-retries 'F' records
  Given prior 'F' (failed/skipped) records exist within the daily selection window
  When the normal daily batch runs
  Then those 'F' records are NOT automatically retried
  And they remain available only to Manual Fix (records with sms_sent_date IS NULL in the chosen range)
```

```gherkin
# Covers: FR-020.2
Scenario: TC-042 Manual Fix date interpretation uses current N config
  Given the current config N is 20
  And IT Admin selects process date D for Manual Fix
  When Manual Fix builds the cohort
  Then it selects round-1 records whose successful send date = D − 20 (current N at fix time; no config history kept)
```

```gherkin
# Covers: FR-013, FR-020, FR-013.1 — Concurrency
Scenario: TC-043 Concurrent Manual Fix and daily batch over an overlapping cohort do not double-send
  Given a Manual Fix run and the daily batch process an overlapping cohort at nearly the same time
  When both attempt to send to the same customer
  Then the dedup mechanism (successful-send guard + within-round grouping) ensures the customer receives at most one SMS
```

### Reporting (FR-020.2 merged requirement — see coverage finding)

```gherkin
# Covers: FR-020.2 (the reporting clause merged into FR-020.2 — has no FR number of its own)
Scenario: TC-044 Central daily reconcile report reflects this campaign
  Given a completed batch round for CSMS-002
  When the shared central CSMS daily reconcile report is generated
  Then this campaign appears as a line with: total processed, sent (S), failed/skipped (F),
       and excluded counts by reason (Do Not Contact / already registered / duplicate-in-round / already sent)
  And each count carries a breakdown by policy type (ORD / IND / GOV / PA)
  And there is no separate threshold alert — this report is the sole channel to watch an abnormal 'F' ratio
```

### Config-change edge & feedback usability

```gherkin
# Covers: FR-003
Scenario: TC-045 Mid-campaign N change — dedup blocks doubles, skips recoverable
  Given config N is changed mid-campaign (e.g. 20 → 15) causing some cohorts to be skipped or overlap
  When subsequent daily rounds run
  Then the duplicate-prevention guard prevents any double send for overlapping cohorts
  And any skipped cohort can be recovered later via Manual Fix
```

```gherkin
# Covers: FR-019 — UX/Usability (notification feedback surface)
Scenario: TC-046 Failure email and reconcile report are clear and actionable
  Given a round-failure email and the daily reconcile report are produced
  When a recipient reads them
  Then the email reaches the correct IT Dev + User recipients (no missing/incorrect addressee)
  And the failed step is stated in plain, actionable language identifying the batch
  And the reconcile report's counts are legible and unambiguous for follow-up
```

---

## 3. Test Checklist (16-column execution format)

_System and Feature are constant down the table. `Test Status` = **Not Run** for every row (no run has occurred);
`Tested By` / `Tested Date` are intentionally blank; `Redmine No.` = `-` until a ticket exists._

| Test Checklist ID | System | Feature | Screen | Sub Category | Test Objective | Test Condition | Test Step | Expected Result | Test Data | Priority | Test Status | Tested By | Tested Date (YYYY-MM-DD) | Redmine No. | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-001 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Target/Send | Send round-2 SMS to exactly-N-day cohort + link round-1 | Round-1 sent 20d ago, ORD Inforce, phone, not DNC, LINE=E02 & APP=E02 | Run batch 10:00 | SMS sent to current phone; msg has name/reward/link; row 'S' with round-1 ref | TD-001 | P1 | Not Run |  |  | - | core happy path |
| TC-002 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Config | Changed DATE_COUNT applied without code | Config N set 20→15; round-1 sent 15d ago | Run batch | Customer selected using N=15 | TD-002 | P1 | Not Run |  |  | - | configurable N |
| TC-003 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Target/Send | Cohort day boundary excludes off-by-one | round-1 at N-1 / N / N+1; N=20 | Run batch | Only N=20 included; N-1 and N+1 excluded | TD-020 | P2 | Not Run |  |  | - | boundary |
| TC-004 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Target/Send | Empty reference day ends round normally | No round-1 rows at (today−N) | Run batch | Zero targets; normal completion; no failure email | TD-021 | P3 | Not Run |  |  | - | empty cohort |
| TC-005 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Filter/Inforce | Inforce inclusion IND '2' / GOV '3' | Qualifying IND status '2', GOV status '3' | Run batch | Both included | TD-003 | P1 | Not Run |  |  | - | per-type inforce |
| TC-006 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Filter/Inforce | Lapsed policy excluded | Policy not Inforce | Run batch | Excluded, no SMS | TD-022 | P1 | Not Run |  |  | - | negative |
| TC-007 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Filter/Inforce | ORD status boundary '2' excluded | ORD status '2' | Run batch | Excluded (ORD only '1') | TD-023 | P2 | Not Run |  |  | - | type/status boundary |
| TC-008 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Filter/Phone | mobile1 used as primary | mobile1 & mobile2 present | Run batch | SMS to mobile1 | TD-004 | P1 | Not Run |  |  | - | phone primary |
| TC-009 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Filter/Phone | mobile2 fallback | mobile1 empty, mobile2 present | Run batch | SMS to mobile2 | TD-024 | P2 | Not Run |  |  | - | phone fallback |
| TC-010 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Filter/Phone | No usable phone excluded | mobile1 & mobile2 empty | Run batch | Excluded, no SMS | TD-025 | P1 | Not Run |  |  | - | negative |
| TC-011 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Filter/Phone | Phone changed → use current, log actual | round-1 phone ≠ current mobile1 | Run batch | Send to current; log phone used | TD-026 | P2 | Not Run |  |  | - | side-effect log |
| TC-012 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Filter/DNC | DNC ORD remark '1' excluded | ORD remark code '1' | Run batch | Excluded, no SMS | TD-027 | P1 | Not Run |  |  | - | compliance |
| TC-013 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Filter/DNC | DNC IND/GOV/PA remark '4' excluded | IND/GOV/PA remark code '4' | Run batch | Excluded, no SMS | TD-028 | P1 | Not Run |  |  | - | compliance |
| TC-014 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | cardNo | cardNo not found → skip 'F' | policy has no cardNo mapping | Run batch | Skip + 'F' NULL date; round continues | TD-029 | P1 | Not Run |  |  | - | negative |
| TC-015 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Registration | Send rule a — neither channel | LINE=E02 & APP=E02 | Run batch | SMS sent | TD-005 | P1 | Not Run |  |  | - | dual-channel |
| TC-016 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Registration | Send rule b — LINE blocked + no App | LINE registered isBlockLine=true, APP=E02 | Run batch | SMS sent | TD-006 | P1 | Not Run |  |  | - | dual-channel |
| TC-017 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Registration | Exclude — App registered | APP registered | Run batch | No SMS | TD-030 | P1 | Not Run |  |  | - | dual-channel |
| TC-018 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Registration | Exclude — LINE not blocked | LINE registered isBlockLine=false | Run batch | No SMS | TD-031 | P1 | Not Run |  |  | - | dual-channel |
| TC-019 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Registration | App registered after filter still sent | passes filter, registers before send | Run batch | Still sent (process-time check) | TD-032 | P2 | Not Run |  |  | - | timing edge |
| TC-020 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Registration | E13 error → skip 'F' continue | check returns E13 | Run batch | Skip + 'F'; no retry; continue | TD-033 | P1 | Not Run |  |  | - | negative |
| TC-021 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Registration | Out-of-condition value → skip 'F' | empty channel/isBlockLine | Run batch | Skip + 'F' | TD-034 | P2 | Not Run |  |  | - | edge |
| TC-022 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Registration/Notify | Service down → retry ≤3 stop + email | service unreachable system-wide | Run batch | Retry ≤3; stop round; failure email | TD-035 | P1 | Not Run |  |  | - | resilience |
| TC-023 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Dedup | Cross-round dedup no resend | prior successful round-2 send exists | Run batch | No duplicate SMS | TD-036 | P1 | Not Run |  |  | - | SC-002 |
| TC-024 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Dedup | 1 SMS per customer, deterministic pick | same customer 3 qualifying policies | Run batch | 1 SMS; oldest/min policy_no; others logged | TD-007 | P1 | Not Run |  |  | - | concurrency/grouping |
| TC-025 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Dedup | Prior 'F' does not block resend | 'F' row NULL date exists | Run batch | Send proceeds (dedup counts NOT NULL) | TD-037 | P2 | Not Run |  |  | - | edge |
| TC-026 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Message | Template 111 + var substitution | template 111 exists; config active | Run batch | var1/var2/var3 filled; no ${var} left | TD-008 | P1 | Not Run |  |  | - | SC-004 |
| TC-027 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Message | Template 111 missing → fallback | no 111 template | Run batch | Uses main-type table format | TD-038 | P2 | Not Run |  |  | - | fallback |
| TC-028 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Message | Empty name → skip 'F' | insured name empty | Run batch | Skip + 'F'; never send nameless | TD-039 | P1 | Not Run |  |  | - | SC-004 |
| TC-029 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Config/Notify | No active config → stop round + email | no active config on run day | Run batch | Whole round stopped; failure email | TD-040 | P1 | Not Run |  |  | - | resilience |
| TC-030 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Security | CSV/formula injection neutralized | name = =1+1 / +CMD / @SUM / commas | Run batch | CSV-safe; no formula exec; no ${var} leak | TD-041 | P1 | Not Run |  |  | - | injection sink |
| TC-031 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Security/Edge | Unicode/emoji/long name renders intact | Thai/CJK+emoji/256-char name | Run batch | No mojibake; no row corruption | TD-042 | P2 | Not Run |  |  | - | encoding |
| TC-032 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Interface File | CSV UTF-8 + filename + ESB delivery | ≥1 sendable record | Run batch | UTF-8; name matches pattern (BE year); via ESB→Gateway | TD-009 | P1 | Not Run |  |  | - | interface |
| TC-033 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Interface/Notify | File-creation failure → email | CSV cannot be created | Run batch | Failure email naming step | TD-043 | P2 | Not Run |  |  | - | resilience |
| TC-034 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Logging | Two-level log + refer_no + type map | completed IND send | Run batch | campaign + per-policy rows; refer_no; O/I/G/P map | TD-010 | P1 | Not Run |  |  | - | audit |
| TC-035 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Logging/Linkage | Round-1 linkage on every sent row | round sends 10 customers | Run batch | Each row has round-1 reference ID | TD-011 | P1 | Not Run |  |  | - | SC-006 |
| TC-036 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Logging | S/F + date semantics; dedup source | success vs skip/fail | Run batch | 'S'+date / 'F'+NULL; dedup reads NOT NULL | TD-012 | P1 | Not Run |  |  | - | side-effect |
| TC-037 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Logging | Gateway failure logged 'F' NULL | gateway returns failure | Run batch | 'F' NULL date; Manual Fix can re-pick | TD-044 | P2 | Not Run |  |  | - | side-effect |
| TC-038 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Notify | Failure email IT+User ≤15 min | round-level failure detected | Run batch | Email to IT+User; batch+step named; ≤15 min | TD-013 | P1 | Not Run |  |  | - | SC-005 |
| TC-039 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | Admin/Manual Fix | Manual Fix | Re-run failed day, no resend of success | day previously failed | Trigger Manual Fix on date | Pending sent; successes untouched | TD-014 | P1 | Not Run |  |  | - | SC-007 |
| TC-040 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | Admin/Manual Fix | Manual Fix | Mixed range sends only pending | range has sent + pending | Trigger Manual Fix | Only pending sent; no duplicate | TD-045 | P2 | Not Run |  |  | - | idempotent |
| TC-041 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Manual Fix | Daily never auto-retries 'F' | 'F' rows in window | Run daily batch | 'F' not auto-retried | TD-046 | P2 | Not Run |  |  | - | negative |
| TC-042 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | Admin/Manual Fix | Manual Fix | Date interpretation uses current N | N=20; select process date D | Trigger Manual Fix | cohort = round-1 sent date D−20 | TD-047 | P2 | Not Run |  |  | - | edge |
| TC-043 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Concurrency | Concurrent Manual Fix + daily no double | overlapping cohort, both run | Run both | ≤1 SMS per customer | TD-048 | P1 | Not Run |  |  | - | SC-002 |
| TC-044 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | Central Report | Reporting | Reconcile report counts + type breakdown | completed round | Generate central report | processed/S/F/excluded + ORD/IND/GOV/PA breakdown | TD-049 | P2 | Not Run |  |  | - | FR-020.2 merged (see coverage) |
| TC-045 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | SMS Batch Job | Config | Mid-campaign N change handled | N changed 20→15 mid-run | Run rounds | dedup blocks doubles; skips recoverable | TD-050 | P2 | Not Run |  |  | - | edge |
| TC-046 | CSMS (Ocean Life Web Portal) | CSMS-002 Welcome New Customer รอบ 2 | Notify/Report | UX/Usability | Email + report clear/actionable | failure email + report produced | Review outputs | correct recipients; failed step clear; counts legible | TD-051 | P3 | Not Run |  |  | - | feedback surface |

---

## 4. Coverage Summary

- **Functional Requirements total:** 25 (FR-001, FR-002, FR-003, FR-004, FR-005, FR-006, FR-007, FR-008,
  FR-009, FR-010, FR-011, FR-012, FR-013, FR-013.1, FR-014, FR-015, FR-015.1, FR-016, FR-017, FR-018, FR-018.1,
  FR-018.2, FR-019, FR-020, FR-020.1, FR-020.2 — counting the FR-013.1/FR-015.1/FR-018.1/FR-018.2/FR-020.1/
  FR-020.2 sub-requirements as distinct = **26 requirement clauses**).
- **FRs with ≥1 TC:** all — **coverage 100%** of FR clauses.
- **Success Criteria (buildable):** SC-001→TC-001/015, SC-002→TC-023/024/043, SC-003→TC-006/012/017/018,
  SC-004→TC-026/028/030, SC-005→TC-038, SC-006→TC-035, SC-007→TC-039/040 — **all 7 SC covered**.
- **Total test cases:** **46** (TC-001…TC-046).
- **Priority mix:** P1 = 24 · P2 = 20 · P3 = 2.
- **Per-dimension count:** Positive 11 · Negative/Validation 15 · Edge 12 · Concurrency 2 · Security 2 ·
  Side-Effects 5 · UX/Usability 1. (Some TCs carry a secondary tag; primary dimension counted once.)

### FR → TC traceability map

| FR clause | TC(s) |
|-----------|-------|
| FR-001 | TC-001 |
| FR-002 | TC-001, TC-003, TC-004 |
| FR-003 | TC-002, TC-045 |
| FR-004 | TC-005, TC-006, TC-007 |
| FR-005 | TC-008, TC-009, TC-010, TC-011 |
| FR-006 | TC-012, TC-013 |
| FR-007 | TC-014 |
| FR-008 | TC-015 |
| FR-009 | TC-015, TC-016 |
| FR-010 | TC-017, TC-018, TC-019 |
| FR-011 | TC-020, TC-021 |
| FR-012 | TC-022 |
| FR-013 | TC-023, TC-025, TC-040, TC-043 |
| FR-013.1 | TC-024, TC-043 |
| FR-014 | TC-026, TC-027 |
| FR-015 | TC-026, TC-030, TC-031 |
| FR-015.1 | TC-028 |
| FR-016 | TC-029 |
| FR-017 | TC-030, TC-031, TC-032 |
| FR-018 | TC-011, TC-034 |
| FR-018.1 | TC-035 |
| FR-018.2 | TC-014, TC-025, TC-036, TC-037 |
| FR-019 | TC-022, TC-029, TC-033, TC-038, TC-046 |
| FR-020 | TC-039, TC-040, TC-043 |
| FR-020.1 | TC-041 |
| FR-020.2 | TC-042, TC-044 |

**Uncovered requirements:** none (every FR clause and SC has ≥1 TC).

### Ambiguity / coverage flags surfaced to upstream (not TC gaps)

1. **FR-020.2 merges two requirements** — the Manual-Fix date-range interpretation *and* the daily
   reconcile-report content/breakdown are packed into one numbered requirement, so the **reporting
   requirement has no FR number of its own**. TC-044 covers the reporting behavior, but the spec structure is
   ambiguous (reporting could be missed by any reader scanning FR titles). **Route to `/speckit-checklist`**
   to split it (e.g. keep FR-020.2 = Manual-Fix date rule; mint **FR-021** = daily reconcile report). Captured
   as a Pass-3 finding in `coverage-review_csms-002-welcome-round2.md` → verdict `gaps-found`.
2. **Policy-type code characters** (`spec.md` Clarifications + Assumptions): the source shows filter codes as
   digits `0`/`1` for ORD/IND while the log map uses letters `O`/`I`/`G`/`P`. Spec assumes letters (inherited
   from CSMS-001). **TC-034 asserts the letter map**; if the real system uses digits, TC-034's expected value
   must be reconciled in `plan`. Routed as an assumption to confirm, not a test gap.
3. **GOV coverage** is confirmed in scope by Clarifications, but the source Pre-event only listed ORD/IND/PA.
   TC-005/TC-013 explicitly include GOV so any upstream narrowing is caught.
