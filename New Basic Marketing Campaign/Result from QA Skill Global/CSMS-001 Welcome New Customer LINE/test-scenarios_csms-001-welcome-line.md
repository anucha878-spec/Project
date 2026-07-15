# Test Scenarios — CSMS-001 Welcome New Customer (LINE)

_Feature slug: `csms-001-welcome-line` · Spec: `spec.md` (Draft 2026-07-07) · Generated: 2026-07-09 · Iteration 1_

System under test: **Centralized SMS (CSMS) batch — Ocean Life Web Portal**, batch `BATCH-CSMS-WELCOME-LINE`,
Daily Scheduler 10:00. Integrations: DWConsole (`ili_policy_master`), Application ORD/IND/PA, Customer Data
Analytics, Do Not Contact (`ili_policy_remark`), Line Connect Inquiry API, `cf_catalog`, `SMS_CATEGORY`,
`sms_message_schedule`, ESB → SMS Gateway, `CSMS_LOG`, `WELCOME_NEW_CUST_LINE`.

> **No-fabrication note**: All Test Status = **Not Run**. There is no running CSMS/SIT environment in this
> workspace, so execution (steps 05–07) is deferred. Test data is **synthetic** (fabricated names / phones /
> card_no).

---

## Test Matrix Summary Table

| ID | Feature | Test Scenario Name | Test Dimension | Priority | Tags | Target Test Level |
|----|---------|--------------------|----------------|----------|------|-------------------|
| TC-001 | FR-001 | Daily scheduler fires batch at 10:00 | Positive | P1 | scheduler,smoke | Integration |
| TC-002 | FR-002 | Select ORD/IND/PA, issue_date=T-1, Inforce only | Positive | P1 | selection | Integration/DB |
| TC-003 | FR-002 | Exclude non-Inforce or wrong issue_date | Negative | P1 | selection | Integration/DB |
| TC-004 | FR-003 | Exclude policies issued before 2026 (boundary) | Edge | P1 | selection,boundary | DB |
| TC-005 | FR-004 | Exclude records with NULL/empty mobile_no | Negative | P1 | selection,EC-001 | DB |
| TC-006 | FR-005 | Exclude Do Not Contact — ORD remark_code='1' | Positive | P1 | exclusion,BR-002 | Integration/DB |
| TC-007 | FR-005 | Exclude Do Not Contact — IND/PA remark_code='4' + type mapping | Positive | P1 | exclusion,mapping,Q-001 | Integration/DB |
| TC-008 | FR-006 | Eligibility cond.1 — no LINE & no Ocean Club → send | Positive | P1 | eligibility,BR-003 | Integration |
| TC-009 | FR-006 | Eligibility cond.2 — no Club + LINE blocked → send | Positive | P1 | eligibility,BR-003 | Integration |
| TC-010 | FR-006 | Eligibility cond.3 — LINE(unblocked) or Club → not send | Negative | P1 | eligibility,ALT-001 | Integration |
| TC-011 | FR-007 | E02 (Customer not found) used internally, no user msg | Edge | P2 | eligibility,MSG-002 | Integration |
| TC-012 | FR-008 | E13 Generic Error → skip+log, continue round | Edge | P1 | resilience,ALT-004,SC-006 | Integration |
| TC-013 | FR-008a | Out-of-3-conditions reply → skip+log | Edge | P1 | resilience,EC-003 | Integration |
| TC-014 | FR-008b | Line Connect API down → retry×3 → stop round + email | Negative | P0 | resilience,EC-007 | Integration |
| TC-015 | FR-009 | Dedup within round by (fname,lname,mobile) MIN(issue_date) | Edge | P1 | dedup,BR-004,SC-003 | DB |
| TC-016 | FR-009 | Tie issue_date → deterministic MIN(policy_no) | Edge | P2 | dedup,EC-002,A-007 | DB |
| TC-017 | FR-010 | Cross-round history dedup — no resend | Positive | P0 | dedup,BR-005,SC-003 | DB |
| TC-018 | FR-011 | Template from sms_message_schedule; fallback SMS_CATEGORY | Positive | P2 | message,BR-006 | Integration |
| TC-019 | FR-011a | card_no has no customer name → skip+log, do not send | Edge | P1 | message,EC-005 | Integration |
| TC-020 | FR-012 | Variable substitution var1=name, var2=active link | Positive | P1 | message,link,SC-005 | Integration |
| TC-021 | FR-012 | Campaign link active-window boundary (begin/expire/active_flag) | Edge | P1 | link,boundary,SC-005 | DB |
| TC-022 | FR-012a | No active campaign link → stop round + email | Negative | P0 | link,EC-006,SC-005 | Integration |
| TC-023 | FR-013 | CSV file naming convention, UTF-8, พ.ศ. 2-digit year | Positive | P2 | file,BR-007,Q-007 | System |
| TC-024 | FR-013 | Filename/format & Thai (UTF-8) content integrity | Edge | P2 | file,encoding | System |
| TC-025 | FR-014 | Call ESB web service → SMS Gateway | Positive | P1 | delivery,POST-001 | Integration |
| TC-026 | FR-015 | Write CSMS_LOG with refer_no + returned status | Side-Effects | P2 | logging,POST-002 | DB |
| TC-027 | FR-016 | Write WELCOME_NEW_CUST_LINE all mandatory fields | Side-Effects | P1 | logging,POST-003 | DB |
| TC-028 | FR-016a | Record S vs F — sent_status & sms_sent_date semantics | Side-Effects | P0 | logging,reconcile,SC-007 | DB |
| TC-029 | FR-017 | credit_amount computed via existing CSMS logic | Positive | P3 | billing,Q-005 | Integration |
| TC-030 | FR-018 | Round-level failure → email IT+User w/ batch & failed step | Side-Effects | P0 | notification,BR-008,SC-004 | Integration |
| TC-031 | FR-019 | Manual Batch triggered from central Admin Dashboard | Positive | P2 | manualfix,Q-004 | System |
| TC-032 | FR-019 | Manual Fix date-range validation (start>today, end<start) | Negative | P2 | manualfix,validation,MSG-004 | System |
| TC-033 | FR-020 | Manual Batch idempotent — no resend of sent rows | Edge | P0 | manualfix,EC-004,SC-003 | DB |
| TC-034 | FR-020a | Repair date interpreted as round date → issue_date=T-1 | Edge | P1 | manualfix,semantics | DB |
| TC-035 | FR-020b | Daily round does NOT auto-retry 'F'; manual picks NULL only | Edge | P1 | manualfix,SC-003 | DB |
| TC-036 | FR-021 | Daily report counts + policy_type breakdown reconciles | Positive | P2 | report,Q-006,SC-007 | System/DB |
| TC-037 | FR-011/FR-005 | Injection/metachar in name & card_no (SQLi/XSS/control) | Security | P1 | security,injection | Integration |
| TC-038 | FR-016/FR-014 | PDPA — no PII leakage in logs/file; link integrity | Security | P1 | security,PDPA | Integration/DB |
| TC-039 | FR-020 | Concurrent daily + manual run on same date → no double send | Concurrency | P0 | concurrency,idempotency,SC-003 | Integration/DB |
| TC-040 | FR-019/FR-021 | Manual Fix validation messages + report empty/zero state | UX/Usability | P3 | ux,feedback | System |
| TC-041 | SC-003 | E2E — one customer ≤1 SMS across round/cross-round/manual | Side-Effects | P0 | e2e,dedup,SC-003 | System/E2E |

**Dimension coverage**: all 7 present — Positive (14), Negative/Validation (6), Edge (12), Concurrency (1, TC-039),
Security (2, TC-037/038), Side-Effects (5, TC-026/027/028/030/041), UX/Usability (1, TC-040).
No dimension omitted. *(Concurrency limited to 1 TC because the batch is single-scheduler; the only real race is
daily-vs-manual on the same date — TC-039. UX limited to 1 TC because the spec explicitly reuses the existing
central Manual Fix screen with no new UI in scope — Q-004 Closed.)*

---

## BDD Gherkin Scenarios

# Covers: FR-001
```gherkin
Scenario: TC-001 Daily scheduler triggers the Welcome batch at 10:00
  Given the Daily Scheduler is configured for BATCH-CSMS-WELCOME-LINE at 10:00
    And eligible T-1 Inforce policies exist
  When the system clock reaches 10:00 on the processing day
  Then the batch starts automatically without manual intervention
    And a run record is created for that processing date
```

# Covers: FR-002
```gherkin
Scenario: TC-002 Select ORD/IND/PA issued T-1 with Inforce status
  Given policies of type ORD, IND and PA with issue_date = yesterday (T-1) and status Inforce
  When the batch selection step runs on the processing day
  Then all such policies enter the target set
    And no policy of another type or another issue_date is selected
```

# Covers: FR-002
```gherkin
Scenario: TC-003 Exclude policies that are not Inforce or not T-1
  Given a policy with issue_date = T-1 but status <> Inforce
    And a policy with status Inforce but issue_date <> T-1
  When the batch selection step runs
  Then neither policy enters the target set
```

# Covers: FR-003
```gherkin
Scenario Outline: TC-004 Exclude pre-2026 policies at the year boundary
  Given a policy issued on <issue_date> with Inforce status and a T-1 processing window that includes it
  When the batch selection step runs
  Then the policy is <result> the target set
  Examples:
    | issue_date  | result       |
    | 2025-12-31  | excluded from |
    | 2026-01-01  | included in   |
```

# Covers: FR-004
```gherkin
Scenario Outline: TC-005 Exclude records with missing mobile number (EC-001)
  Given an otherwise-eligible policy whose mobile_no is <mobile>
  When the batch selection step runs
  Then the record does not enter the target set
  Examples:
    | mobile |
    | NULL   |
    | ""     |
    | "   "  |
```

# Covers: FR-005
```gherkin
Scenario: TC-006 Exclude Do Not Contact — ORD remark_code='1'
  Given an eligible ORD policy whose customer has ili_policy_remark remark_code='1' (policy_type 'O')
  When the exclusion step runs
  Then the record is removed from the target set and no SMS is sent to that customer
```

# Covers: FR-005
```gherkin
Scenario Outline: TC-007 Exclude Do Not Contact — IND/PA remark_code='4' with source→target type mapping
  Given an eligible <src> policy whose customer has ili_policy_remark remark_code='4' under mapped type <mapped>
  When the exclusion step runs
  Then the record is removed from the target set
  Examples:
    | src | mapped        |
    | IND | I             |
    | IND | G             |
    | PA  | P             |
  # And an ORD policy is checked as 'O' with remark_code='1' (control) — see TC-006
```

# Covers: FR-006
```gherkin
Scenario: TC-008 Eligibility condition 1 — neither LINE nor Ocean Club → send
  Given Line Connect Inquiry returns code="E02" for channel="LINE" and code="E02" for channel="APP" (Ocean Club)
  When eligibility is decided for the customer
  Then the customer is eligible and an SMS is queued
```

# Covers: FR-006
```gherkin
Scenario: TC-009 Eligibility condition 2 — no Ocean Club and LINE blocked → send
  Given Line Connect Inquiry shows no Ocean Club and LINE present with isBlockLine = true
  When eligibility is decided
  Then the customer is eligible and an SMS is queued (BR-003 condition 2)
```

# Covers: FR-006
```gherkin
Scenario Outline: TC-010 Eligibility condition 3 — already registered → do not send (ALT-001)
  Given the customer <state>
  When eligibility is decided
  Then the customer is NOT eligible and no SMS is sent
  Examples:
    | state                                        |
    | has LINE Ocean Connect and isBlockLine=false |
    | has an Ocean Club account                    |
```

# Covers: FR-007
```gherkin
Scenario: TC-011 E02 is an internal eligibility signal, not a user-facing error
  Given Line Connect Inquiry returns code="E02" (Customer not found)
  When eligibility is decided
  Then E02 is consumed internally per FR-006 condition logic
    And no error message is surfaced to any user
```

# Covers: FR-008
```gherkin
Scenario: TC-012 E13 Generic Error → skip the record, log it, continue the round (SC-006)
  Given a target set of 3 customers where the 2nd returns code="E13"
  When the batch processes the customers
  Then customer #2 is skipped immediately with no retry
    And a skip log entry is written for IT Admin / Manual Fix
    And customers #1 and #3 are processed to completion
    And the round does not stop
```

# Covers: FR-008a
```gherkin
Scenario Outline: TC-013 Out-of-3-conditions reply → skip + log (EC-003)
  Given Line Connect Inquiry returns an out-of-spec reply where <field> is null
  When the batch processes the record
  Then the record is skipped and a separate log entry is written for Manual Fix
    And the round continues
  Examples:
    | field       |
    | channel     |
    | isBlockLine |
```

# Covers: FR-008b
```gherkin
Scenario: TC-014 Line Connect API fully down → bounded retry then stop round + alert (EC-007)
  Given the Line Connect Inquiry service is down/timing-out/HTTP 5xx for every call
  When the batch attempts the eligibility step
  Then the system retries up to 3 times with a delay between attempts
    And after the 3rd failed attempt it stops the processing round
    And it sends the standard failure email to IT and User via the FR-018 channel naming the failed step
    And no partial SMS batch is sent
```

# Covers: FR-009
```gherkin
Scenario: TC-015 Dedup within a round → one SMS per customer using MIN(issue_date) (BR-004)
  Given the same customer (same fname, lname, mobile_no) has 2 eligible policies in one round
    And the policies have issue_date 2026-05-10 and 2026-05-13
  When deduplication runs
  Then exactly one transaction is produced for that customer referencing the 2026-05-10 policy
```

# Covers: FR-009
```gherkin
Scenario: TC-016 Dedup tie-break when issue_date is equal → MIN(policy_no) (EC-002 / A-007)
  Given the same customer has 2 eligible policies with the same issue_date, policy_no 2445901 and 2445055
  When deduplication runs
  Then the transaction references policy_no 2445055 (the smallest), deterministically on re-run
```

# Covers: FR-010
```gherkin
Scenario: TC-017 Cross-round history dedup — do not resend (ALT-002 / BR-005)
  Given WELCOME_NEW_CUST_LINE already has a row with matching policy_no + policy_type + fname + lname and sms_sent_date NOT NULL
  When the next round processes the same customer
  Then the record is removed from the target set and no duplicate SMS is sent
```

# Covers: FR-011
```gherkin
Scenario Outline: TC-018 Message template resolution order (BR-006)
  Given <schedule_state> in sms_message_schedule for this category
  When the message is built
  Then the message uses <source>
  Examples:
    | schedule_state          | source                          |
    | an active template row  | the sms_message_schedule text   |
    | no matching template    | the SMS_CATEGORY default msg_text |
```

# Covers: FR-011a
```gherkin
Scenario: TC-019 Missing customer name → skip + log, never send a nameless message (EC-005)
  Given an eligible record whose card_no has no matching name in Customer Data Analytics
  When the message-build step runs
  Then the record is skipped and a log entry is written for Manual Fix
    And no SMS is sent
    And the record is stored with sent_status='F' and sms_sent_date=NULL
```

# Covers: FR-012
```gherkin
Scenario: TC-020 Variable substitution with the active campaign link
  Given cf_catalog holds config_type='LINE_LINK', config_value1='CSMS_SNC_NewCust', active_flag='Y', within begin/expire window
    And the customer name is "สมชาย"
  When the message is built from the template
  Then $(var1) is replaced with "สมชาย" and $(var2) with the active campaign link (e.g. https://lin.ee/xd7mW2g)
```

# Covers: FR-012
```gherkin
Scenario Outline: TC-021 Campaign link active-window boundary
  Given cf_catalog LINE_LINK row with begin_date <begin>, expire_date <expire>, active_flag <flag> on processing day 2026-05-14
  When the link is resolved
  Then the row is <result> as the active link
  Examples:
    | begin       | expire      | flag | result       |
    | 2026-05-14  | 2026-05-14  | Y    | selected     |
    | 2026-05-01  | 2026-05-13  | Y    | not selected |
    | 2026-05-01  | 2026-12-31  | N    | not selected |
```

# Covers: FR-012a
```gherkin
Scenario: TC-022 No active campaign link → stop the whole round + alert (EC-006)
  Given no cf_catalog LINE_LINK row is active on the processing day (all expired or active_flag<>'Y')
  When the batch reaches message build
  Then no SMS is sent for the entire round
    And a failure email is sent to IT and User via the FR-018 channel
    And the run is recoverable via Manual Fix after config is fixed
```

# Covers: FR-013
```gherkin
Scenario: TC-023 CSV interface file naming and encoding (BR-007 / Q-007)
  Given a completed target set for processing datetime 2026-05-16 10:00:00
  When the interface file is generated before the send service is called
  Then the file is UTF-8 encoded
    And named [MKT]_[CSMS]_[MKTWelcomeNewCust]_[YYMMDDhhmmss].csv using Buddhist-era 2-digit year
    And matches the example MKT_CSMS_MKTWelcomeNewCust_260516100000.csv
```

# Covers: FR-013
```gherkin
Scenario: TC-024 Thai content integrity and filename format in the CSV
  Given target records containing Thai names and the Thai SMS body
  When the CSV is generated
  Then Thai characters render correctly (no mojibake) when read as UTF-8
    And the filename segments are exactly Department, SystemCode, Category, timestamp with no extra separators
```

# Covers: FR-014
```gherkin
Scenario: TC-025 Send via central ESB → SMS Gateway
  Given an eligible customer with a built message and generated file
  When the delivery step runs
  Then the system calls the central ESB web service which forwards to the SMS Gateway
    And the returned send status is captured for logging
```

# Covers: FR-015
```gherkin
Scenario: TC-026 CSMS_LOG records refer_no and returned status (POST-002)
  Given a send attempt returns a status and refer_no from the web service
  When logging runs
  Then a CSMS_LOG row is written with refer_no, create_date, sms_category_name_abbr and sms_message
```

# Covers: FR-016
```gherkin
Scenario: TC-027 WELCOME_NEW_CUST_LINE persists all mandatory fields (POST-003)
  Given a processed send record
  When it is written to WELCOME_NEW_CUST_LINE
  Then all fields are present: policy_no, policy_type, title_name, fname, lname, card_no, issue_date,
       sms_sent_date, mobile_no, sms_message, credit_amount, sent_status, created_by='SYSTEM_BATCH', created_date
```

# Covers: FR-016a
```gherkin
Scenario Outline: TC-028 sent_status semantics for reconcile (SC-007)
  Given a record whose outcome is <outcome>
  When it is written to WELCOME_NEW_CUST_LINE
  Then sent_status=<status> and sms_sent_date is <ts>
  Examples:
    | outcome                         | status | ts        |
    | sent successfully               | S      | send time |
    | skipped or failed (E13/EC/name) | F      | NULL      |
```

# Covers: FR-017
```gherkin
Scenario: TC-029 credit_amount uses existing CSMS credit logic (Q-005)
  Given a Thai template message of ~140 characters (~2 credits UCS-2)
  When the record is written
  Then credit_amount is computed by the reused CSMS credit logic (not a new formula)
```

# Covers: FR-018
```gherkin
Scenario Outline: TC-030 Round-level failure sends the standard alert email (BR-008 / SC-004)
  Given the round fails at step <step>
  When the failure is detected against the standard CSMS monitoring timeout/SLA
  Then a standard-format email is sent to IT and User naming batch=BATCH-CSMS-WELCOME-LINE and the failed step
  Examples:
    | step                              |
    | cannot generate the file in time  |
    | cannot call ESB/SMS Gateway       |
    | source fetch / DB write error     |
    | Line Connect API down (FR-008b)   |
    | no active campaign link (FR-012a) |
```

# Covers: FR-019
```gherkin
Scenario: TC-031 IT Admin triggers Manual Batch from the central dashboard (Q-004)
  Given BATCH-CSMS-WELCOME-LINE is listed on the existing central Manual Fix screen
  When IT Admin selects repair range 2026-05-15 to 2026-05-15 and clicks Manual Batch
  Then the system processes only the selected range using the standard screen (no new UI)
```

# Covers: FR-019
```gherkin
Scenario Outline: TC-032 Manual Fix date-range validation (MSG-004)
  Given IT Admin enters start=<start>, end=<end> on 2026-07-09
  When Manual Batch is clicked
  Then the system shows the standard validation message and does not start processing
  Examples:
    | start       | end         | reason                     |
    | 2026-07-10  | 2026-07-10  | start after current date   |
    | 2026-05-15  | 2026-05-14  | end before start           |
```

# Covers: FR-020
```gherkin
Scenario: TC-033 Manual Batch is idempotent — never resend already-sent rows (EC-004)
  Given the selected repair range was partially run and some rows have sms_sent_date NOT NULL
  When IT Admin re-runs Manual Batch for that range
  Then rows with sms_sent_date NOT NULL are not resent
    And only rows with sms_sent_date IS NULL are (re)processed
```

# Covers: FR-020a
```gherkin
Scenario: TC-034 Repair date is a round date → pull issue_date = T-1 of each day
  Given IT Admin selects repair date 2026-05-15
  When Manual Batch runs
  Then the system pulls policies with issue_date = 2026-05-14 (T-1), reproducing the missed round exactly
```

# Covers: FR-020b
```gherkin
Scenario: TC-035 Daily round never auto-retries 'F'; only Manual Fix reprocesses NULL rows
  Given rows exist with sent_status='F' and sms_sent_date IS NULL from a prior round
  When the normal daily round runs
  Then it does NOT pull those 'F' rows for automatic retry
    And a subsequent Manual Fix over the range picks only rows with sms_sent_date IS NULL
```

# Covers: FR-021
```gherkin
Scenario: TC-036 Daily report reconciles counts with breakdown by policy_type (Q-006 / SC-007)
  Given a completed round with sent, failed/skipped and excluded records
  When the daily report is generated from WELCOME_NEW_CUST_LINE
  Then it shows total processed, sent (S), failed/skipped (F), and excluded-by-reason
       (Do Not Contact / registered / in-round dup / already sent) broken down by ORD/IND/PA
    And the totals reconcile 100% with the stored history
```

# Covers: FR-011, FR-005
```gherkin
Scenario Outline: TC-037 Adversarial input in name and card_no is neutralised (Security)
  Given a customer record where <field> contains <payload>
  When the message is built and the card_no list is sent to Line Connect Inquiry and written to the file/DB
  Then the value is treated as a literal (parameterized queries; no SQL executed; no script rendered/executed)
    And no batch crash or data corruption occurs
  Examples:
    | field   | payload                    |
    | fname   | '; DROP TABLE x--          |
    | fname   | <script>alert(1)</script>  |
    | fname   | control/NULL byte U+0000   |
    | card_no | 12345%25 _ (LIKE metachars)|
```

# Covers: FR-016, FR-014
```gherkin
Scenario: TC-038 PDPA — no PII leakage and link integrity (Security)
  Given a successful send with synthetic PII (name, mobile_no, card_no)
  When logs (CSMS_LOG), the CSV file, and any alert email are produced
  Then no raw card_no or full PII is exposed beyond what the design requires
    And the campaign link in the sent message exactly matches the active cf_catalog link (no tampering/redirect)
```

# Covers: FR-020
```gherkin
Scenario: TC-039 Concurrent daily + manual run on the same date do not double-send (Concurrency)
  Given the daily round and a Manual Batch for the same repair date start close together
  When both attempt to process the same customer
  Then the send-once guarantee holds via the sms_sent_date NOT NULL check (and/or a run lock)
    And the customer receives exactly one SMS
```

# Covers: FR-019, FR-021
```gherkin
Scenario: TC-040 Validation feedback and zero/empty report states (UX/Usability)
  Given an invalid Manual Fix range and, separately, a day with zero eligible customers
  When the screen validates the range and the report renders the empty day
  Then the standard validation message appears and blocks submit
    And the report renders a clear zero/empty state (totals=0) without error
```

# Covers: SC-003
```gherkin
Scenario: TC-041 End-to-end — one customer receives at most one SMS across all paths
  Given a customer eligible in a round, appearing again next round, and included in a Manual Fix range
  When the daily round, the next daily round, and a Manual Batch all run
  Then the customer receives exactly one Welcome SMS in total (in-round dedup + cross-round history + idempotent manual fix)
    And WELCOME_NEW_CUST_LINE shows a single sms_sent_date NOT NULL row for that customer
```

---

## Test Checklist

_System = `Centralized SMS (CSMS) batch / Ocean Life Web Portal` for all rows. Test Status = Not Run; Tested By /
Tested Date blank; Redmine No. = `-` until a ticket exists._

| Test Checklist ID | System | Feature | Screen | Sub Category | Test Objective | Test Condition | Test Step | Expected Result | Test Data | Priority | Test Status | Tested By | Tested Date | Redmine No. | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-001 | CSMS batch | FR-001 Daily scheduler | SMS Job | Scheduler | Batch auto-fires 10:00 | Scheduler enabled; eligible T-1 data | Wait for 10:00 trigger | Batch starts, run record created | T-1 Inforce policy set | P1 | Not Run |  |  | - | scheduler smoke |
| TC-002 | CSMS batch | FR-002 Selection | SMS Job | Selection | Select ORD/IND/PA T-1 Inforce | Policies T-1 Inforce all 3 types | Run selection | Only matching policies selected | ORD/IND/PA T-1 Inforce | P1 | Not Run |  |  | - |  |
| TC-003 | CSMS batch | FR-002 Selection | SMS Job | Selection | Reject non-Inforce/non-T-1 | Mixed statuses/dates | Run selection | Non-matching excluded | non-Inforce + wrong date | P1 | Not Run |  |  | - |  |
| TC-004 | CSMS batch | FR-003 Selection | SMS Job | Selection | Pre-2026 excluded | issue_date 2025-12-31 vs 2026-01-01 | Run selection | 2025 excluded, 2026 included | boundary dates | P1 | Not Run |  |  | - | year boundary |
| TC-005 | CSMS batch | FR-004 Selection | SMS Job | Selection | Missing mobile excluded | mobile NULL/empty/spaces | Run selection | Records excluded | mobile NULL/""/"  " | P1 | Not Run |  |  | - | EC-001 |
| TC-006 | CSMS batch | FR-005 Exclusion | SMS Job | Exclusion | DNC ORD remark_code='1' | ORD in DNC | Run exclusion | Excluded, no SMS | ORD remark_code='1' | P1 | Not Run |  |  | - | BR-002 |
| TC-007 | CSMS batch | FR-005 Exclusion | SMS Job | Exclusion | DNC IND/PA remark_code='4'+mapping | IND/PA in DNC | Run exclusion | Excluded via mapped type | IND(I/G), PA(P) code='4' | P1 | Not Run |  |  | - | Q-001 mapping |
| TC-008 | CSMS batch | FR-006 Eligibility | SMS Job | Eligibility | Cond1 no LINE/no Club → send | E02 LINE + E02 APP | Decide eligibility | Eligible, SMS queued | E02/E02 | P1 | Not Run |  |  | - | BR-003(1) |
| TC-009 | CSMS batch | FR-006 Eligibility | SMS Job | Eligibility | Cond2 blocked LINE, no Club → send | isBlockLine=true, no Club | Decide eligibility | Eligible, SMS queued | blockLine=true | P1 | Not Run |  |  | - | BR-003(2) |
| TC-010 | CSMS batch | FR-006 Eligibility | SMS Job | Eligibility | Cond3 registered → not send | LINE unblocked or Club | Decide eligibility | Not eligible, no SMS | LINE ok / has Club | P1 | Not Run |  |  | - | ALT-001 |
| TC-011 | CSMS batch | FR-007 Eligibility | SMS Job | Eligibility | E02 internal only | E02 returned | Decide eligibility | No user-facing msg | code=E02 | P2 | Not Run |  |  | - | MSG-002 |
| TC-012 | CSMS batch | FR-008 Resilience | SMS Job | Resilience | E13 skip+log continue | 3 recs, #2=E13 | Process batch | #2 skipped+logged, #1/#3 done | E13 mid-list | P1 | Not Run |  |  | - | ALT-004/SC-006 |
| TC-013 | CSMS batch | FR-008a Resilience | SMS Job | Resilience | Out-of-cond reply skip+log | channel/isBlockLine null | Process record | Skipped+logged, round continues | null fields | P1 | Not Run |  |  | - | EC-003 |
| TC-014 | CSMS batch | FR-008b Resilience | SMS Job | Resilience | API down retry×3 stop+email | service down all calls | Process eligibility | 3 retries, stop round, email | forced 5xx/timeout | P0 | Not Run |  |  | - | EC-007 |
| TC-015 | CSMS batch | FR-009 Dedup | SMS Job | Dedup | In-round dedup MIN(issue_date) | 2 policies same customer | Run dedup | 1 txn, oldest issue_date | dup customer 2 dates | P1 | Not Run |  |  | - | BR-004 |
| TC-016 | CSMS batch | FR-009 Dedup | SMS Job | Dedup | Tie → MIN(policy_no) | same issue_date, 2 policy_no | Run dedup | picks smallest policy_no | tie 2445901/2445055 | P2 | Not Run |  |  | - | EC-002/A-007 |
| TC-017 | CSMS batch | FR-010 Dedup | SMS Job | Dedup | Cross-round no resend | history sms_sent_date NOT NULL | Run next round | Excluded, no resend | prior sent row | P0 | Not Run |  |  | - | ALT-002/BR-005 |
| TC-018 | CSMS batch | FR-011 Message | SMS Job | Message | Template order schedule→default | with/without schedule row | Build message | Correct source used | schedule present/absent | P2 | Not Run |  |  | - | BR-006 |
| TC-019 | CSMS batch | FR-011a Message | SMS Job | Message | No name skip+log | card_no no name | Build message | Skipped+logged, no send, 'F' | card_no unmatched | P1 | Not Run |  |  | - | EC-005 |
| TC-020 | CSMS batch | FR-012 Message | SMS Job | Message | var1/var2 substitution | active link + name | Build message | name & active link inserted | สมชาย + lin.ee link | P1 | Not Run |  |  | - | SC-005 |
| TC-021 | CSMS batch | FR-012 Message | SMS Job | Message | Link active-window boundary | begin/expire/active_flag combos | Resolve link | correct row selected/rejected | boundary rows | P1 | Not Run |  |  | - | SC-005 |
| TC-022 | CSMS batch | FR-012a Message | SMS Job | Message | No active link stop+email | all links expired/inactive | Reach build | Round stopped, email sent | no active LINE_LINK | P0 | Not Run |  |  | - | EC-006 |
| TC-023 | CSMS batch | FR-013 File | SMS Job | File | CSV naming/encoding | completed target set | Generate file | UTF-8, correct name, พ.ศ. year | dt 2026-05-16 10:00 | P2 | Not Run |  |  | - | Q-007 |
| TC-024 | CSMS batch | FR-013 File | SMS Job | File | Thai content integrity | Thai names/body | Generate & read file | No mojibake, exact segments | Thai payload | P2 | Not Run |  |  | - | encoding |
| TC-025 | CSMS batch | FR-014 Delivery | SMS Job | Delivery | ESB→Gateway send | built message+file | Run delivery | ESB called, status captured | eligible customer | P1 | Not Run |  |  | - | POST-001 |
| TC-026 | CSMS batch | FR-015 Audit | SMS Job | Logging | CSMS_LOG refer_no+status | send returns status | Run logging | Row w/ refer_no+status | send response | P2 | Not Run |  |  | - | POST-002 |
| TC-027 | CSMS batch | FR-016 Audit | SMS Job | Side-Effect | All fields persisted | processed record | Write history | All mandatory fields present | full record | P1 | Not Run |  |  | - | POST-003 |
| TC-028 | CSMS batch | FR-016a Audit | SMS Job | Side-Effect | S vs F semantics | sent & skipped records | Write history | S+ts / F+NULL as defined | S and F outcomes | P0 | Not Run |  |  | - | SC-007 |
| TC-029 | CSMS batch | FR-017 Billing | SMS Job | Side-Effect | credit_amount via reuse | ~140-char Thai msg | Write history | credit via existing logic | ~2 credit msg | P3 | Not Run |  |  | - | Q-005 |
| TC-030 | CSMS batch | FR-018 Notification | SMS Job | Notification | Round failure email | each round-level failure step | Trigger failure | Standard email IT+User+step | 5 failure steps | P0 | Not Run |  |  | - | BR-008/SC-004 |
| TC-031 | CSMS batch | FR-019 Manual Fix | Admin Dashboard | Manual Fix | Manual Batch trigger | batch in list | Select range + Manual Batch | Processes selected range | 2026-05-15 range | P2 | Not Run |  |  | - | Q-004 |
| TC-032 | CSMS batch | FR-019 Manual Fix | Admin Dashboard | Validation | Date-range validation | invalid ranges | Click Manual Batch | Standard validation, no run | start>today; end<start | P2 | Not Run |  |  | - | MSG-004 |
| TC-033 | CSMS batch | FR-020 Manual Fix | Admin Dashboard | Manual Fix | Idempotent no resend | partly-sent range | Re-run Manual Batch | sent rows not resent | sms_sent_date NOT NULL | P0 | Not Run |  |  | - | EC-004 |
| TC-034 | CSMS batch | FR-020a Manual Fix | Admin Dashboard | Manual Fix | Repair date → T-1 pull | repair date 2026-05-15 | Run Manual Batch | Pulls issue_date 2026-05-14 | date 2026-05-15 | P1 | Not Run |  |  | - | semantics |
| TC-035 | CSMS batch | FR-020b Manual Fix | SMS Job | Manual Fix | No auto-retry of F | 'F' rows sms_sent_date NULL | Run daily then manual | daily skips F; manual picks NULL | F/NULL rows | P1 | Not Run |  |  | - | SC-003 |
| TC-036 | CSMS batch | FR-021 Report | Report | Report | Reconcile+breakdown | completed round | Generate report | Counts reconcile by policy_type | mixed outcomes | P2 | Not Run |  |  | - | Q-006/SC-007 |
| TC-037 | CSMS batch | FR-011/FR-005 Security | SMS Job | Security | Injection neutralised | adversarial name/card_no | Build+query+write | Literal handling, no exec/crash | SQLi/XSS/ctrl/metachar | P1 | Not Run |  |  | - | parameterized |
| TC-038 | CSMS batch | FR-016/FR-014 Security | SMS Job | Security | PDPA + link integrity | successful send | Inspect log/file/email | No PII leak; link matches config | synthetic PII | P1 | Not Run |  |  | - | PDPA |
| TC-039 | CSMS batch | FR-020 Concurrency | SMS Job | Concurrency | Concurrent daily+manual | same date both runs | Run concurrently | Exactly one SMS (guard/lock) | overlap same customer | P0 | Not Run |  |  | - | idempotency race |
| TC-040 | CSMS batch | FR-019/FR-021 UX | Admin Dashboard | UX/Usability | Validation msg + empty state | invalid range; zero-day | Validate + render report | Clear message; clean empty state | invalid + zero data | P3 | Not Run |  |  | - | feedback |
| TC-041 | CSMS batch | SC-003 E2E | SMS Job | Side-Effect | ≤1 SMS across all paths | round+next+manual | Run all paths | Exactly one SMS total | recurring customer | P0 | Not Run |  |  | - | dedup e2e |

---

## Coverage Summary

- **Functional Requirements total**: 26 (FR-001, 002, 003, 004, 005, 006, 007, 008, 008a, 008b, 009, 010, 011,
  011a, 012, 012a, 013, 014, 015, 016, 016a, 017, 018, 019, 020, 020a, 020b, 021 — note 008/008a/008b, 011/011a,
  012/012a, 016/016a, 020/020a/020b counted as distinct sub-requirements → **28 FR items**).
- **FR items with ≥1 TC**: 28 / 28 → **100%**.
- **Success Criteria**: SC-001…SC-007 all traced (SC-001→TC-002/025/041; SC-002→TC-006/007/010; SC-003→TC-015/017/033/039/041;
  SC-004→TC-014/030/033; SC-005→TC-020/021/022; SC-006→TC-012/013/028; SC-007→TC-028/036).
- **Edge Cases**: EC-001→TC-005, EC-002→TC-016, EC-003→TC-013, EC-004→TC-033, EC-005→TC-019, EC-006→TC-022,
  EC-007→TC-014. All 7 covered.
- **TC count per dimension**: Positive 14 · Negative/Validation 6 · Edge 12 · Concurrency 1 · Security 2 ·
  Side-Effects 5 · UX/Usability 1 (some TCs are Scenario Outlines spanning multiple example rows).
- **Uncovered FR/SC/EC**: **none**.

### FR → TC traceability

| FR item | TC(s) |
|---------|-------|
| FR-001 | TC-001 |
| FR-002 | TC-002, TC-003 |
| FR-003 | TC-004 |
| FR-004 | TC-005 |
| FR-005 | TC-006, TC-007, TC-037 |
| FR-006 | TC-008, TC-009, TC-010 |
| FR-007 | TC-011 |
| FR-008 | TC-012 |
| FR-008a | TC-013 |
| FR-008b | TC-014 |
| FR-009 | TC-015, TC-016 |
| FR-010 | TC-017 |
| FR-011 | TC-018, TC-037 |
| FR-011a | TC-019 |
| FR-012 | TC-020, TC-021 |
| FR-012a | TC-022 |
| FR-013 | TC-023, TC-024 |
| FR-014 | TC-025, TC-038 |
| FR-015 | TC-026 |
| FR-016 | TC-027, TC-038 |
| FR-016a | TC-028 |
| FR-017 | TC-029 |
| FR-018 | TC-030 |
| FR-019 | TC-031, TC-032, TC-040 |
| FR-020 | TC-033, TC-039 |
| FR-020a | TC-034 |
| FR-020b | TC-035 |
| FR-021 | TC-036, TC-040 |
