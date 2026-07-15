# 03 — Test Cases — CSMS-004 Customer Birthday

- **Skill:** `/test-case-generator` (Spec-Kit 03) · **Input:** `01`, `02`, `00b` · **Date:** 2026-07-09
- **Status convention:** every TC = **Not Run** (design-side; no execution env). SYNTHETIC data only. `[BLOCKED-RQxxx]` TCs keep expected = "pending SA answer" (no fabricated behavior).
- **03b Google Sheet upload = SKIPPED** (per run instruction).

## §0 Glossary (project-specific)
- **Inforce** = policy in force (ORD/PA `policy_status='1'`; IND/GOV `∈{'1','2','3'}`).
- **DNC** = Do Not Contact (`ili_policy_remark.remark_code`: ORD `'1'`, IND/GOV/PA `'4'`).
- **Agent channel** = not self-pay/Orphan (ORD `title_desc<>'ชำระเอง'`; IND/GOV/PA `position_code<>'99'`; `policy_org` ∈ 2070001–2079999 or 5070001–5079999).
- **cardNo** = national ID mapped from `policy_no` via `cisappapi`.
- **LINE / APP codes:** `E02`=not found (unused), `E00`=found (registered), `E13`=exception; `isBlockLine` true/false.
- **Dedup key** = `cardNo` + current birthday year (`CUSTOMER_BIRTHDAY.sms_sent_date`).

## 1. Summary
- **Total TCs:** 54 (TC-001…TC-054). Executable-design: 51; `[BLOCKED-RQ]`: 4 (TC-051..054, one shared with 051 crosscheck).
- **Requirement coverage:** 14/14 FR + all sub-FR = **100%** (every FR ≥1 TC).
- **Atom coverage:** 60/60 atoms → ≥1 TC = **100%** (🔒/❓ atoms mapped to `[ASSUMPTION]`/`[BLOCKED]` TCs).
- **Scenario coverage:** all US1-US5 acceptance scenarios (incl. scrambled US5 1,6,7,2,3,4,5 → 7 distinct TCs) + all Edge Cases = 100%.
- **Technique coverage:** Decision Table FR-009 8/8 feasible rules · BVA leap-day 3/3 + org-range 4/4 endpoints + seq_no 1/1 · EP policy_status 5/5 classes · State-transition 14/14 valid + 2/2 invalid · negative-per-branch 12/12 skip/exclude paths = **100%**.
- **Exit criteria:** Requirement coverage 100% + no High-priority technique gap → **no loop-back needed** (confirmed in 04).
- **Risk coverage:** High = FR-009 decision table, FR-008b/c dedup, FR-010a no-empty-variable, Feb-29 edge (all covered).

---

## 🔹 Flow FLOW-001: Birthday selection & match

### TC-001
- **Requirement ID:** FR-002 · **Pattern:** FLOW-001 · **Type:** E2E_FLOW_POSITIVE · **Priority:** High
- **Title:** Customer whose birth day/month equals the run date is selected
- **Technique/denominator:** date-match positive 1/1 · atom AT-003,005
- **Preconditions:** Synthetic customer with an inforce agent-channel policy, birthdate day/month = 16 May; batch run date = 2026-05-16.
- **Test Steps:** 1) Provision the customer. 2) Run the batch for 2026-05-16.
- **Expected Result:** Customer appears in the target group. *(oracle: row present in candidate set; policy_no in CSV/CUSTOMER_BIRTHDAY.)*
- **Status:** Not Run

### TC-002
- **Requirement ID:** FR-002 · **Pattern:** FLOW-001 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Title:** Customer whose birth day/month differs from run date is excluded
- **Technique/denominator:** date-match negative 1/1 · AT-003
- **Preconditions:** Customer birthdate day/month = 17 May; run date 2026-05-16.
- **Test Steps:** 1) Provision. 2) Run batch 2026-05-16.
- **Expected Result:** Customer NOT selected; no SMS, no CSV row. *(no side-effect)*
- **Status:** Not Run

### TC-003
- **Requirement ID:** FR-002 · **Pattern:** FLOW-001 · **Type:** BUSINESS_RULE_TEST · **Priority:** Medium
- **Title:** Match ignores birth year (same day/month, different year still selected)
- **Technique/denominator:** year-ignore rule · AT-004
- **Preconditions:** Two customers birth day/month = 16 May, birth years 1960 and 1995; run date 2026-05-16.
- **Test Steps:** 1) Provision both. 2) Run batch.
- **Expected Result:** Both selected (year not compared).
- **Status:** Not Run

### TC-004
- **Requirement ID:** FR-002/FR-004 · **Pattern:** FLOW-001/003 · **Type:** E2E_FLOW_POSITIVE · **Priority:** High
- **Title:** All four policy types (ORD/IND/GOV/PA) inforce and matching are selected
- **Technique/denominator:** US1-3 · AT-010,011
- **Preconditions:** 4 policies, one per type, all inforce, all birthday-matching, agent channel, not DNC.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** All four selected into target group.
- **Status:** Not Run

### TC-005
- **Requirement ID:** FR-001 · **Pattern:** FLOW-001 · **Type:** INTEGRATION_TEST · **Priority:** High
- **Title:** Batch triggers daily at 09:00 and filename carries 090000 time
- **Technique/denominator:** AT-001,002,036
- **Preconditions:** Scheduler configured; run date 2026-05-16 (BE 2569).
- **Test Steps:** 1) Let scheduler fire at 09:00. 2) Inspect generated CSV filename.
- **Expected Result:** Runs at 09:00; filename = `MKT_CSMS_MKTBirthday_690516090000.csv` (time part `090000`).
- **Status:** Not Run

### TC-006
- **Requirement ID:** FR-003 · **Pattern:** FLOW-001 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Title:** No backdated send before Go Live
- **Technique/denominator:** US1-5 · AT-006,007
- **Preconditions:** Customer birthday matches a date before Go Live.
- **Test Steps:** 1) Provision. 2) Run batch for a pre-Go-Live date.
- **Expected Result:** No SMS sent for pre-Go-Live dates; sending only from Go Live (≥2026) onward. *(Exact Go-Live-date boundary → TC-052 `[BLOCKED-RQ005]`.)*
- **Status:** Not Run

---

## 🔹 Flow FLOW-002: Leap-day resolution

### TC-007
- **Requirement ID:** FR-003a · **Pattern:** FLOW-002 · **Type:** EDGE_CASE · **Priority:** High
- **Title:** Feb-29 birthday in a non-leap year is sent on Feb-28
- **Technique/denominator:** BVA leap 1/3 · AT-008 · US5-7
- **Preconditions:** Customer birthdate = 29 Feb; run date = 2027-02-28 (2027 non-leap).
- **Test Steps:** 1) Provision. 2) Run batch 2027-02-28.
- **Expected Result:** Customer selected and receives SMS on 28 Feb.
- **Status:** Not Run

### TC-008
- **Requirement ID:** FR-003a · **Pattern:** FLOW-002 · **Type:** EDGE_CASE · **Priority:** Medium
- **Title:** Feb-29 birthday in a leap year is sent on Feb-29
- **Technique/denominator:** BVA leap 2/3 · AT-009
- **Preconditions:** Customer birthdate = 29 Feb; run date = 2028-02-29 (leap).
- **Test Steps:** 1) Provision. 2) Run batch 2028-02-29.
- **Expected Result:** Customer selected on 29 Feb.
- **Status:** Not Run

### TC-009
- **Requirement ID:** FR-003a · **Pattern:** FLOW-002 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** Medium
- **Title:** Feb-29 birthday NOT sent twice / not on wrong day in non-leap year
- **Technique/denominator:** BVA leap 3/3 (negative) · AT-008
- **Preconditions:** Customer birthdate = 29 Feb; non-leap year; run dates 27 Feb and 1 Mar.
- **Test Steps:** 1) Provision. 2) Run batch on 27 Feb and 1 Mar.
- **Expected Result:** No SMS on 27 Feb or 1 Mar; only 28 Feb triggers (per TC-007).
- **Status:** Not Run

---

## 🔹 Flow FLOW-003: Inforce status filter

### TC-010
- **Requirement ID:** FR-004 · **Pattern:** FLOW-003 · **Type:** VALIDATION_TEST · **Priority:** High
- **Title:** ORD/PA inforce (status='1') kept; other status excluded
- **Technique/denominator:** EP policy_status 2/5 (valid '1', invalid ≠'1') · AT-010,012 · US1-4
- **Preconditions:** ORD policy status='1' (matching) + ORD policy status='2' (matching).
- **Test Steps:** 1) Provision both. 2) Run batch.
- **Expected Result:** status='1' selected; status='2' excluded (ORD/PA rule).
- **Status:** Not Run

### TC-011
- **Requirement ID:** FR-004 · **Pattern:** FLOW-003 · **Type:** VALIDATION_TEST · **Priority:** High
- **Title:** IND/GOV inforce status in {1,2,3} kept; outside excluded
- **Technique/denominator:** EP policy_status 3/5 (valid {1,2,3}, invalid e.g. '4'/'0') · AT-011,012
- **Preconditions:** IND policies status 1,2,3 (kept) + status '4' (excluded); all matching.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** status 1/2/3 selected; status '4' excluded.
- **Status:** Not Run

### TC-012
- **Requirement ID:** FR-004 · **Pattern:** FLOW-003 · **Type:** VALIDATION_TEST · **Priority:** Medium
- **Title:** PA policy uses ORD rule (status='1' only)
- **Technique/denominator:** EP policy_status (PA) · AT-010
- **Preconditions:** PA policy status='1' (kept) + status='2' (excluded).
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** PA status='1' selected; status='2' excluded.
- **Status:** Not Run

---

## 🔹 Flow FLOW-004: DNC + agent-channel filter

### TC-013
- **Requirement ID:** FR-006 · **Pattern:** FLOW-004 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Title:** ORD on Do-Not-Contact (remark_code='1') excluded
- **Technique/denominator:** negative-branch · AT-015 · US2-1
- **Preconditions:** ORD (`policy_type='0'`) matching, `remark_code='1'`.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** Excluded from target group.
- **Status:** Not Run

### TC-014
- **Requirement ID:** FR-006 · **Pattern:** FLOW-004 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Title:** IND/GOV/PA on Do-Not-Contact (remark_code='4') excluded
- **Technique/denominator:** negative-branch · AT-016 · US2-2
- **Preconditions:** IND/GOV/PA matching, `remark_code='4'`.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** Excluded.
- **Status:** Not Run

### TC-015
- **Requirement ID:** FR-007 · **Pattern:** FLOW-004 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Title:** ORD self-pay (title_desc='ชำระเอง') excluded (non-agent)
- **Technique/denominator:** negative-branch · AT-017 · US2-3
- **Preconditions:** ORD matching, `title_desc='ชำระเอง'`.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** Excluded (not agent channel).
- **Status:** Not Run

### TC-016
- **Requirement ID:** FR-007 · **Pattern:** FLOW-004 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Title:** IND/GOV/PA Orphan (position_code='99') excluded
- **Technique/denominator:** negative-branch · AT-018 · US2-3
- **Preconditions:** IND/GOV/PA matching, `position_code='99'`.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** Excluded.
- **Status:** Not Run

### TC-017
- **Requirement ID:** FR-007 · **Pattern:** FLOW-004 · **Type:** VALIDATION_TEST · **Priority:** Medium
- **Title:** policy_org outside allowed ranges excluded (boundary)
- **Technique/denominator:** BVA org-range endpoints 4/4 (`2070000`/`2070001`, `2079999`/`2080000`, plus 5070001/5079999) · AT-019 · US2-4
- **Preconditions:** Policies with `policy_org` = 2070000 (out), 2070001 (in), 2079999 (in), 2080000 (out), 5070001 (in), 5079999 (in).
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** In-range kept; out-of-range (2070000, 2080000) excluded.
- **Status:** Not Run

### TC-018
- **Requirement ID:** FR-006/FR-007 · **Pattern:** FLOW-004 · **Type:** E2E_FLOW_POSITIVE · **Priority:** High
- **Title:** Non-DNC agent-channel in-range policy is kept
- **Technique/denominator:** positive-branch · AT-019 · US2-5
- **Preconditions:** Matching policy, not DNC, agent channel, `policy_org` in range.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** Retained in target group.
- **Status:** Not Run

---

## 🔹 Flow FLOW-005: Mobile selection

### TC-019
- **Requirement ID:** FR-005 · **Pattern:** FLOW-005 · **Type:** BUSINESS_RULE_TEST · **Priority:** Medium
- **Title:** mobile1 present → SMS uses mobile1
- **Technique/denominator:** coalesce case 1 · AT-013
- **Preconditions:** mobile1='0845012341', mobile2 empty.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** CSV `mobile` = 0845012341.
- **Status:** Not Run

### TC-020
- **Requirement ID:** FR-005 · **Pattern:** FLOW-005 · **Type:** BUSINESS_RULE_TEST · **Priority:** Medium
- **Title:** mobile1 empty/blank → falls back to mobile2 (trim/nullif)
- **Technique/denominator:** coalesce case 2 · AT-013
- **Preconditions:** mobile1='  ' (spaces), mobile2='0812345678'.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** CSV `mobile` = 0812345678.
- **Status:** Not Run

### TC-021
- **Requirement ID:** FR-005 · **Pattern:** FLOW-005 · **Type:** EDGE_CASE · **Priority:** High
- **Title:** Both mobiles empty → skip + record for Manual Fix, round continues
- **Technique/denominator:** negative-branch · AT-014
- **Preconditions:** mobile1 and mobile2 both empty/NULL; other customers valid in same round.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** This customer skipped, recorded as unsuccessful (no refer_no) for Manual Fix; other customers still processed (round not halted).
- **Status:** Not Run

---

## 🔹 Flow FLOW-006: cardNo mapping + 2-channel digital-status decision table

### TC-022
- **Requirement ID:** FR-008 · **Pattern:** FLOW-006 · **Type:** INTEGRATION_TEST · **Priority:** High
- **Title:** policy_no maps to cardNo via cisappapi
- **Technique/denominator:** AT-020
- **Preconditions:** Valid policy; cisappapi returns cardNo.
- **Test Steps:** 1) Provision. 2) Run batch (mock/stub cisappapi returning cardNo).
- **Expected Result:** cardNo resolved; proceeds to channel check.
- **Status:** Not Run

### TC-023
- **Requirement ID:** FR-008 · **Pattern:** FLOW-006 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Title:** cardNo not found → skip + record, round continues
- **Technique/denominator:** negative-branch · AT-021 · US3-2
- **Preconditions:** cisappapi returns no cardNo for the policy.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** Policy skipped, recorded unsuccessful for Manual Fix; round keeps running.
- **Status:** Not Run

### TC-024
- **Requirement ID:** FR-009 · **Pattern:** FLOW-006 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** LINE=E02 AND APP=E02 → SEND
- **Technique/denominator:** Decision table rule 1/8 · AT-022 · US3-1a
- **Preconditions:** cisappapi LINE=E02, APP=E02.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** Customer sent (uses neither channel).
- **Status:** Not Run

### TC-025
- **Requirement ID:** FR-009 · **Pattern:** FLOW-006 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** LINE=E00 + isBlockLine=true AND APP=E02 → SEND
- **Technique/denominator:** Decision table rule 2/8 · AT-023 · US3-1b
- **Preconditions:** LINE=E00, isBlockLine=true, APP=E02.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** Customer sent (LINE blocked + no app).
- **Status:** Not Run

### TC-026
- **Requirement ID:** FR-009 · **Pattern:** FLOW-006 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Title:** LINE=E00 + isBlockLine=false → EXCLUDE
- **Technique/denominator:** Decision table rule 3/8 · AT-024 · US3-1c
- **Preconditions:** LINE=E00, isBlockLine=false (LINE active).
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** Customer excluded (active LINE user).
- **Status:** Not Run

### TC-027
- **Requirement ID:** FR-009 · **Pattern:** FLOW-006 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Title:** APP=E00 (any LINE) → EXCLUDE
- **Technique/denominator:** Decision table rule 4/8 · AT-025 · US3-1c
- **Preconditions:** APP=E00 (has app); LINE=E02.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** Customer excluded (already has app).
- **Status:** Not Run

### TC-028
- **Requirement ID:** FR-009 · **Pattern:** FLOW-006 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** LINE=E00 + isBlockLine=true AND APP=E00 → EXCLUDE (app dominates)
- **Technique/denominator:** Decision table rule 5/8 · AT-025
- **Preconditions:** LINE=E00 blockLine=true, APP=E00.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** Excluded (APP=E00 takes precedence → has app).
- **Status:** Not Run

### TC-029
- **Requirement ID:** FR-009a · **Pattern:** FLOW-006 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Title:** E13/Exception response → skip + record, no per-item retry, round continues
- **Technique/denominator:** Decision table rule 6/8 · AT-026,028 · US3-3
- **Preconditions:** cisappapi returns E13/Exception for the item; other items valid.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** Item skipped + recorded unsuccessful; not retried per-item; round continues. *(RQ-010: precedence when APP=E00 also abnormal — assumption noted.)*
- **Status:** Not Run

### TC-030
- **Requirement ID:** FR-009a · **Pattern:** FLOW-006 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Title:** Empty channel/isBlockLine → skip + record
- **Technique/denominator:** Decision table rule 7-8/8 · AT-027
- **Preconditions:** Response has empty `channel` or empty `isBlockLine`.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** Item skipped + recorded unsuccessful; round continues.
- **Status:** Not Run

---

## 🔹 Flow FLOW-007: Per-customer dedup

### TC-031
- **Requirement ID:** FR-008b · **Pattern:** FLOW-007 · **Type:** STATE_TRANSITION_TEST · **Priority:** High
- **Title:** Already-sent this birthday year → excluded on re-run
- **Technique/denominator:** transition SENDABLE→DROPPED · AT-029 · US5-1
- **Preconditions:** `CUSTOMER_BIRTHDAY.sms_sent_date` of current year is not null for the customer.
- **Test Steps:** 1) Provision (prior send exists). 2) Run batch same year.
- **Expected Result:** Customer excluded; no duplicate SMS.
- **Status:** Not Run

### TC-032
- **Requirement ID:** FR-008b · **Pattern:** FLOW-007 · **Type:** STATE_TRANSITION_TEST · **Priority:** High
- **Title:** Re-run same day sends zero duplicates (SC-003)
- **Technique/denominator:** invalid transition SENT→resend · AT-030
- **Preconditions:** Batch already ran and sent today.
- **Test Steps:** 1) Run batch again same day.
- **Expected Result:** 0 duplicate SMS for any already-sent customer.
- **Status:** Not Run

### TC-033
- **Requirement ID:** FR-008b · **Pattern:** FLOW-007 · **Type:** EDGE_CASE · **Priority:** Medium
- **Title:** Next-year same birthday can send again `[ASSUMPTION-RQ003]`
- **Technique/denominator:** year-scope · AT-031 (🔒)
- **Preconditions:** Prior send existed last year; run next year same birthday.
- **Test Steps:** 1) Provision. 2) Run batch next year.
- **Expected Result:** Sends again (year-scoped dedup). *Pending SA confirm of `sms_sent_date` year semantics (RQ-003).*
- **Status:** Not Run

### TC-034
- **Requirement ID:** FR-008c · **Pattern:** FLOW-007 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** One customer with 2 matching policies gets exactly 1 SMS
- **Technique/denominator:** dedup per cardNo · AT-032,033 · US5-6
- **Preconditions:** Single cardNo with 2 inforce eligible matching policies.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** Exactly 1 SMS to the customer.
- **Status:** Not Run

### TC-035
- **Requirement ID:** FR-008c · **Pattern:** FLOW-007 · **Type:** BUSINESS_RULE_TEST · **Priority:** Medium
- **Title:** Dedup record references one representative policy
- **Technique/denominator:** AT-034
- **Preconditions:** Same as TC-034.
- **Test Steps:** 1) Provision. 2) Run batch. 3) Inspect CUSTOMER_BIRTHDAY.
- **Expected Result:** One record per customer referencing a single representative policy_no.
- **Status:** Not Run

---

## 🔹 Flow FLOW-008: Template + config + CSV

### TC-036
- **Requirement ID:** FR-010a · **Pattern:** FLOW-008 · **Type:** INTEGRATION_TEST · **Priority:** High
- **Title:** Template from sms_message_schedule (code 112) within date range
- **Technique/denominator:** AT-038 · US4-2
- **Preconditions:** `sms_message_schedule` has `sms_category_code='112'`, today between begin/end.
- **Test Steps:** 1) Provision config. 2) Run batch.
- **Expected Result:** Template pulled from schedule record.
- **Status:** Not Run

### TC-037
- **Requirement ID:** FR-010a · **Pattern:** FLOW-008 · **Type:** INTEGRATION_TEST · **Priority:** Medium
- **Title:** Fallback to sms_category when no schedule record
- **Technique/denominator:** AT-039 · US4-2
- **Preconditions:** No matching `sms_message_schedule` record; `sms_category` has the template.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** Template pulled from `sms_category`.
- **Status:** Not Run

### TC-038
- **Requirement ID:** FR-010a · **Pattern:** FLOW-008 · **Type:** E2E_FLOW_POSITIVE · **Priority:** High
- **Title:** Variables var1/var2/var3 substituted fully (name/gift/link)
- **Technique/denominator:** AT-040,041,042 · US4-3 · US1 example
- **Preconditions:** fname='สมชัย'; cf_catalog REWARDS active='Y' → '500 เหรียญ'; LINE_LINK active='Y' → 'https://lin.ee/JianZUe'.
- **Test Steps:** 1) Provision. 2) Run batch. 3) Inspect message.
- **Expected Result:** Message = `สุขสันต์วันเกิดคุณ สมชัย OCEAN LIFE ไทยสมุทร ขอมอบของขวัญวันเกิด 500 เหรียญ ... คลิก https://lin.ee/JianZUe ...` — all vars filled.
- **Status:** Not Run

### TC-039
- **Requirement ID:** FR-010a · **Pattern:** FLOW-008 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Title:** Missing/inactive REWARDS config → skip + record + alert, NO empty-variable SMS
- **Technique/denominator:** negative-branch · AT-043 · SC-005 · Edge line 153
- **Preconditions:** No active `cf_catalog` REWARDS row for `CSMS_SBD_Birthday`.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** Item skipped + recorded + alert; **no SMS with empty var2 is sent**.
- **Status:** Not Run

### TC-040
- **Requirement ID:** FR-010a · **Pattern:** FLOW-008 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Title:** Missing/inactive LINE_LINK config → skip + record + alert, NO empty-variable SMS
- **Technique/denominator:** negative-branch · AT-043 · SC-005
- **Preconditions:** No active `cf_catalog` LINE_LINK row for `CSMS_SBD_Birthday`.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** Item skipped + recorded + alert; no SMS with empty var3 sent.
- **Status:** Not Run

### TC-041
- **Requirement ID:** FR-010a/FR-013 · **Pattern:** FLOW-008/010 · **Type:** EDGE_CASE · **Priority:** Medium
- **Title:** Neither schedule nor category template found → round-level failure + email
- **Technique/denominator:** AT-057 · Edge line 154
- **Preconditions:** No template in either `sms_message_schedule` or `sms_category`.
- **Test Steps:** 1) Provision. 2) Run batch.
- **Expected Result:** Treated as round-level failure; email alert fired.
- **Status:** Not Run

### TC-042
- **Requirement ID:** FR-010b · **Pattern:** FLOW-008 · **Type:** VALIDATION_TEST · **Priority:** High
- **Title:** CSV column order + seq_no starts at 1 + datetime format
- **Technique/denominator:** BVA seq_no 1/1 · AT-044,045,046 · US4-4
- **Preconditions:** ≥2 eligible customers.
- **Test Steps:** 1) Run batch. 2) Inspect CSV rows.
- **Expected Result:** Columns in order `mobile,var1,var2,var3,seq_no,datetime`; first row seq_no=1 (increment); datetime `YYYY-MM-DD HH:MM` CE year.
- **Status:** Not Run

### TC-043
- **Requirement ID:** FR-010 · **Pattern:** FLOW-008 · **Type:** VALIDATION_TEST · **Priority:** High
- **Title:** CSV filename pattern + Category MKTBirthday + UTF-8
- **Technique/denominator:** AT-035,036,037 · US4-1
- **Preconditions:** SMS_CATEGORY code '112'=MKTBirthday; run 2026-05-16 09:00.
- **Test Steps:** 1) Run batch. 2) Inspect filename + encoding.
- **Expected Result:** `MKT_CSMS_MKTBirthday_690516090000.csv`, UTF-8. *(112 vs 113 crosscheck → TC-051.)*
- **Status:** Not Run

---

## 🔹 Flow FLOW-009: Submit to Gateway + audit record

### TC-044
- **Requirement ID:** FR-011 · **Pattern:** FLOW-009 · **Type:** INTEGRATION_TEST · **Priority:** High
- **Title:** Submit CSV to SMS Gateway (ESB) → receive refer_no + per-item status
- **Technique/denominator:** AT-047,048 · US4-5
- **Preconditions:** CSV built; ESB/Gateway stub returns refer_no + status.
- **Test Steps:** 1) Run batch. 2) Inspect gateway response handling.
- **Expected Result:** Response with `refer_no` + per-item send status received.
- **Status:** Not Run

### TC-045
- **Requirement ID:** FR-012 · **Pattern:** FLOW-009 · **Type:** E2E_FLOW_POSITIVE · **Priority:** High
- **Title:** Successful send recorded in CUSTOMER_BIRTHDAY (all fields) + CSMS_LOG
- **Technique/denominator:** AT-049,050 · US5-2
- **Preconditions:** Successful gateway send.
- **Test Steps:** 1) Run batch. 2) Inspect CUSTOMER_BIRTHDAY + CSMS_LOG.
- **Expected Result:** Row with `sms_sent_date`, `rewards`, `sms_message`, `refer_no`/status (and `credit_amount` per RQ-006); CSMS_LOG overview with `sms_category_name_abbr='MKTBirthday'`.
- **Status:** Not Run

### TC-046
- **Requirement ID:** FR-012 · **Pattern:** FLOW-009 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Title:** Failed/skipped item recorded without refer_no for Manual Fix
- **Technique/denominator:** AT-049 · US5-3
- **Preconditions:** Gateway returns failure OR item skipped upstream.
- **Test Steps:** 1) Run batch. 2) Inspect record.
- **Expected Result:** Recorded with unsuccessful status, no `refer_no`.
- **Status:** Not Run

### TC-047
- **Requirement ID:** FR-012 · **Pattern:** FLOW-009 · **Type:** EDGE_CASE · **Priority:** Medium
- **Title:** GOV policy is recorded in CUSTOMER_BIRTHDAY `[ASSUMPTION-RQ004]`
- **Technique/denominator:** AT-051 (🔒)
- **Preconditions:** Eligible GOV customer sent.
- **Test Steps:** 1) Run batch. 2) Inspect record.
- **Expected Result:** GOV row present. *Pending SA confirm GOV inclusion (RQ-004).*
- **Status:** Not Run

---

## 🔹 Flow FLOW-010: Failure email + Manual Fix

### TC-048
- **Requirement ID:** FR-013 · **Pattern:** FLOW-010 · **Type:** INTEGRATION_TEST · **Priority:** High
- **Title:** Round-level failure/exception/CSV-timeout → email IT Dev + user immediately
- **Technique/denominator:** AT-052,053 · US5-4
- **Preconditions:** Force a round-level exception or CSV-creation failure.
- **Test Steps:** 1) Trigger failure. 2) Observe email.
- **Expected Result:** Email with error detail sent to IT Dev + user group. *(Recipient list + exact timeout → RQ-007/RQ-008; TC-054 for timeout threshold.)*
- **Status:** Not Run

### TC-049
- **Requirement ID:** Assumptions/Edge · **Pattern:** FLOW-010 · **Type:** INTEGRATION_TEST · **Priority:** High
- **Title:** External API full outage → retry ≤3 then stop round + email `[ASSUMPTION-RQ009]`
- **Technique/denominator:** BVA retry count 3 · AT-058 (🔒) · Edge line 155
- **Preconditions:** cisappapi/App API unavailable system-wide.
- **Test Steps:** 1) Simulate outage. 2) Run batch.
- **Expected Result:** Retries ≤3 spaced, then stops round + email. *Retry interval unspecified (RQ-009).*
- **Status:** Not Run

### TC-050
- **Requirement ID:** FR-014 · **Pattern:** FLOW-010 · **Type:** STATE_TRANSITION_TEST · **Priority:** High
- **Title:** Manual Batch backdated by date range is idempotent (no resend, uses specified date)
- **Technique/denominator:** transition idempotent re-run · AT-054,055,056 · US5-5
- **Preconditions:** A prior round partly sent for date D; some items still unsent.
- **Test Steps:** 1) IT Admin runs Manual Batch for date range covering D. 2) Inspect results.
- **Expected Result:** Only previously-unsent items processed; already-successful items NOT resent; birthday compared against specified date D (not click date).
- **Status:** Not Run

---

## 🔹 Blocked TCs (RQ-pending — no fabricated expected)

### TC-051
- **Requirement ID:** FR-010 · **Pattern:** FLOW-008 · **Type:** VALIDATION_TEST · **Priority:** High
- **Title:** `[BLOCKED-RQ002]` Crosscheck category code 112 vs source-doc 113
- **Preconditions:** Deployed `SMS_CATEGORY`/`sms_message_schedule` config.
- **Test Steps:** 1) Inspect the code the batch actually queries.
- **Expected Result:** *Pending SA/config confirmation that `112`=`MKTBirthday` (not `113`/`MKTWelcomeNewCust`) is used. No behavior fabricated.*
- **Status:** Not Run — BLOCKED (RQ-002)

### TC-052
- **Requirement ID:** FR-003 · **Pattern:** FLOW-001 · **Type:** EDGE_CASE · **Priority:** Medium
- **Title:** `[BLOCKED-RQ005]` Exact Go-Live-date boundary (last-day-before vs first-day)
- **Expected Result:** *Pending exact Go Live date from SA. Cannot assert the precise cut-over boundary.*
- **Status:** Not Run — BLOCKED (RQ-005)

### TC-053
- **Requirement ID:** FR-012 · **Pattern:** FLOW-009 · **Type:** VALIDATION_TEST · **Priority:** Medium
- **Title:** `[BLOCKED-RQ006]` `credit_amount` value/semantics in CUSTOMER_BIRTHDAY
- **Expected Result:** *Pending SA definition of `credit_amount` source/value for birthday batch (relationship to `rewards`, RQ-011). No value asserted.*
- **Status:** Not Run — BLOCKED (RQ-006)

### TC-054
- **Requirement ID:** FR-013 · **Pattern:** FLOW-010 · **Type:** VALIDATION_TEST · **Priority:** Low
- **Title:** `[BLOCKED-RQ007]` CSV-creation timeout threshold trigger
- **Expected Result:** *Pending quantified SLA/timeout value from SA. Cannot test the timeout boundary.*
- **Status:** Not Run — BLOCKED (RQ-007)

---

## 3. Coverage Analysis
- **Covered flows:** FLOW-001…010 all covered.
- **Partially covered:** none functionally; boundary precision limited by RQ-005/007 (blocked TCs authored, not skipped).
- **Missing edge cases:** none identified beyond RQ-012 (multiple active cf_catalog rows — raised as RQ, not a TC gap).
- **Missing negative scenarios:** none — every skip/exclude branch has a negative TC.
- **Technique coverage:** Decision Table 8/8 · BVA leap 3/3 + org-range 4/4 + seq_no 1/1 + retry 1/1 · EP policy_status 5/5 · State-transition 14 valid + 2 invalid covered · negative-per-branch 12/12.
- **NFR flagged (out of scope):** SC-001/002/006/007 → `NFR-routing.md`.

## 4. Traceability Matrix (FR → TC)

| FR | TCs |
|----|-----|
| FR-001 | TC-005 |
| FR-002 | TC-001, TC-002, TC-003, TC-004 |
| FR-003 | TC-006, TC-052 |
| FR-003a | TC-007, TC-008, TC-009 |
| FR-004 | TC-004, TC-010, TC-011, TC-012 |
| FR-005 | TC-019, TC-020, TC-021 |
| FR-006 | TC-013, TC-014, TC-018 |
| FR-007 | TC-015, TC-016, TC-017, TC-018 |
| FR-008 | TC-022, TC-023 |
| FR-009 | TC-024, TC-025, TC-026, TC-027, TC-028 |
| FR-009a | TC-029, TC-030 |
| FR-008b | TC-031, TC-032, TC-033 |
| FR-008c | TC-034, TC-035 |
| FR-010 | TC-043, TC-051 |
| FR-010a | TC-036, TC-037, TC-038, TC-039, TC-040, TC-041 |
| FR-010b | TC-042 |
| FR-011 | TC-044 |
| FR-012 | TC-045, TC-046, TC-047, TC-053 |
| FR-013 | TC-041, TC-048, TC-054 |
| FR-014 | TC-050 |
| Assumptions/Edge | TC-049 |

## 5. Risk Highlights
- **FR-009 decision table** (FLOW-006) — highest logic-complexity; RQ-010 precedence assumption.
- **FR-010a no-empty-variable** (SC-005) — compliance/brand risk; TC-039/040 negative critical.
- **FR-008b/c dedup** (SC-003) — cost/UX; TC-031/032/034 critical.
- **Feb-29 edge** — rare but visible; TC-007 critical.
- **Manual Fix idempotency** (FR-014) — resend risk; TC-050.
