# 03 — Test Cases + Traceability — CSMS-001 Welcome New Customer (LINE)

- **Skill:** `/test-case-generator` (Spec-Kit 03) · **Date:** 2026-07-09 · **Iteration:** 1
- **Inputs:** `qa/01-requirement-review.md`, `qa/02-e2e-test-patterns.md`, `qa/00b-atom-inventory.md`, `spec.md`.
- **Status of every TC:** **Not Run** (design phase; no reachable app — see `06b`). Test data is **synthetic** (`06`).
- **Backend note:** this is a scheduled batch with no UI (except the out-of-scope Manual Fix screen). "Steps" = seed synthetic rows → trigger the batch (daily sim or Manual Batch) → assert on DB rows / emitted CSV / Inquiry+ESB mock call logs / sent email. Oracles are specific columns/values, not "works correctly".

## §0 Glossary (project-specific decode)
- **Inforce** = policy approved/active. **T-1** = day before the processing date. **DNC** = Do-Not-Contact list (`ili_policy_remark`).
- **BR-003 eligibility:** (1) no LINE & no Ocean Club → send; (2) no Ocean Club & LINE blocked → send; (3) LINE found(unblocked) OR Ocean Club → don't send.
- **Inquiry codes:** `E02`=customer not found (internal signal), `E13`=generic error (skip+log). **sent_status:** `S`=success, `F`=fail/skip.
- **Type map (DNC):** ORD→'O', IND→'I' or 'G', PA→'P'. **remark_code:** ORD='1', IND/PA='4'.
- **Tables:** `WELCOME_NEW_CUST_LINE` (this batch's history/audit, new), `CSMS_LOG` (system send log). **Config:** `cf_catalog` LINE_LINK.
- **Tags:** `[BLOCKED-RQ0x]` = expected behaviour awaits SA answer (not invented). `[ASSUMPTION]` = spec-author default, confirm.

## 1. Summary
- **Total TCs:** 65 (60 executable-design + 5 `[BLOCKED]` pending RQ).
- **Requirement coverage:** 21/21 FR (incl. sub-FRs) = **100%**.
- **Atom coverage:** 61/61 atoms ≥1 TC = **100%** (55 ✅ fully; 3 ❓ RQ + 3 🔒 as `[BLOCKED]`/`[ASSUMPTION]` TCs).
- **Scenario coverage:** all FLOW-001..006 positive/negative/edge/boundary represented.
- **Technique coverage (denominators):** Decision-table BR-003 → feasible SEND/NOT-SEND rows covered (TC-001,004,005,006); round-failure triggers 5/5 (TC-034,046,047,048 + service-down TC-024); BVA year 2/2 (TC-008,009), retry 3-pt (TC-023,024,025), Manual-Fix dates 4/4 (TC-056..059), T-1 (TC-053); State-transition record 9/9 valid + 3/3 invalid (TC-005/006/015.../055), round 5/5; EP inquiry 4/4 (E02/E13/out-of-cond/down).
- **Exit criteria:** Requirement=100%, no High-priority scenario uncovered. 5 `[BLOCKED]` TCs are RQ-gated, not gaps → loop-back not required for coverage (they cannot be closed by adding TCs, only by SA answers).
- **NFR flagged:** PII/Do-Not-Contact compliance `[NFR — route to security/compliance track]` (see `NFR-routing.md`).

## 2. Test Case Suite

### 🔹 Flow FLOW-001 — Daily pipeline: selection & send (positive)

### TC-001
- **REQ:** FR-001,002,004,006,014,015,016 · **E2E:** FLOW-001 · **Type:** E2E_FLOW_POSITIVE · **Priority:** High
- **Atoms/denominator:** ATOM-001,002,003,004,010 · BR-003 rule 1 (send)
- **Title:** ส่ง SMS ต้อนรับสำเร็จให้ลูกค้า ORD ที่เข้าเงื่อนไขครบ (กรมธรรม์อนุมัติเมื่อวาน ยังไม่ลงทะเบียน LINE)
- **Preconditions:** Seed 1 ORD policy, issue_date=T-1, Inforce, mobile `0845012341`, not in DNC; Inquiry mock returns no-LINE & no-Ocean-Club; active LINE_LINK exists. *(independent)*
- **Steps:** 1) Seed the row. 2) Run the daily batch for that processing date. 3) Inspect `WELCOME_NEW_CUST_LINE`, `CSMS_LOG`, and the ESB mock.
- **Expected:** ESB send called once to `0845012341`; `WELCOME_NEW_CUST_LINE` row with sent_status='S', sms_sent_date=run time; `CSMS_LOG` has refer_no+status. *(oracle: exactly 1 ESB call to that number; DB row S)*

### TC-002
- **REQ:** FR-002,006 · **E2E:** FLOW-001 · **Type:** E2E_FLOW_POSITIVE · **Priority:** High · **Atoms:** ATOM-002,009
- **Title:** ส่ง SMS สำเร็จให้ลูกค้าประเภท IND ที่เข้าเงื่อนไข
- **Preconditions:** Seed 1 IND policy (source type 'I'), T-1, Inforce, mobile present, not DNC, eligible.
- **Steps:** Seed → run batch → inspect DB/ESB.
- **Expected:** 1 SMS sent; row sent_status='S', policy_type recorded as IND. *(oracle: ESB called; S row)*

### TC-003
- **REQ:** FR-002,006 · **E2E:** FLOW-001 · **Type:** E2E_FLOW_POSITIVE · **Priority:** High · **Atoms:** ATOM-002,009
- **Title:** ส่ง SMS สำเร็จให้ลูกค้าประเภท PA ที่เข้าเงื่อนไข
- **Preconditions:** Seed 1 PA policy, T-1, Inforce, eligible, not DNC.
- **Steps:** Seed → run → inspect.
- **Expected:** 1 SMS sent; row S; policy_type=PA. *(oracle: ESB called; S row)*

### TC-004
- **REQ:** FR-006 · **E2E:** FLOW-001 · **Type:** BUSINESS_RULE_TEST · **Priority:** High · **Atoms:** ATOM-011 · BR-003 rule 2
- **Title:** ส่ง SMS ให้ลูกค้าที่ไม่มี Ocean Club และถูกบล็อก LINE (เข้าเงื่อนไขข้อ 2)
- **Preconditions:** Eligible policy; Inquiry mock: no Ocean Club + LINE blocked.
- **Steps:** Seed → run → inspect.
- **Expected:** SMS sent (row S). *(oracle: ESB called — proves BR-003 cond 2 sends, not excluded)*

### TC-005
- **REQ:** FR-006 · **E2E:** FLOW-002 · **Type:** BUSINESS_RULE_TEST · **Priority:** High · **Atoms:** ATOM-012 · BR-003 rule 3a
- **Title:** ไม่ส่ง SMS ให้ลูกค้าที่พบ LINE และไม่ถูกบล็อก (ลงทะเบียนแล้ว)
- **Preconditions:** Policy otherwise eligible; Inquiry mock: LINE found, not blocked.
- **Steps:** Seed → run → inspect.
- **Expected:** No ESB send to that customer (ALT-001). *(oracle: 0 ESB calls for that number)*

### TC-006
- **REQ:** FR-006 · **E2E:** FLOW-002 · **Type:** BUSINESS_RULE_TEST · **Priority:** High · **Atoms:** ATOM-012 · BR-003 rule 3b
- **Title:** ไม่ส่ง SMS ให้ลูกค้าที่มี Ocean Club แล้ว
- **Preconditions:** Policy otherwise eligible; Inquiry mock: Ocean Club found.
- **Steps:** Seed → run → inspect.
- **Expected:** No ESB send to that customer. *(oracle: 0 ESB calls)*

### TC-007
- **REQ:** FR-007 · **E2E:** FLOW-001 · **Type:** BUSINESS_RULE_TEST · **Priority:** Medium · **Atoms:** ATOM-013
- **Title:** code=E02 (ไม่พบลูกค้า) ใช้เป็นสัญญาณ eligibility ภายใน โดยไม่แสดงข้อความต่อผู้ใช้
- **Preconditions:** Policy eligible; Inquiry mock returns E02 for both LINE and APP channels (interpreted as not-registered).
- **Steps:** Seed → run → inspect DB + any user-facing message channel.
- **Expected:** Treated per BR-003 (E02 = not found → send if cond 1/2); **no user-facing message emitted for E02**. *(oracle: no MSG shown; decision follows BR-003)*

### 🔹 FLOW-001/002 — Selection filters & boundaries (negative/boundary)

### TC-008
- **REQ:** FR-003 · **E2E:** FLOW-002 · **Type:** EDGE_CASE · **Priority:** High · **Atoms:** ATOM-005 · BVA year (max-side, below-Go-live)
- **Title:** กรมธรรม์ที่ออกก่อนปี 2026 (31/12/2025) ไม่ถูกดึงเข้ากลุ่มเป้าหมาย แม้ issue_date = เมื่อวาน
- **Preconditions:** Policy issued 2025-12-31 but issue_date=T-1 of the run, Inforce, otherwise eligible.
- **Steps:** Seed → run → inspect.
- **Expected:** Not selected; no SMS; no 'S'/'F' row generated for it. *(oracle: 0 ESB calls; row absent)*

### TC-009
- **REQ:** FR-003 · **E2E:** FLOW-001 · **Type:** EDGE_CASE · **Priority:** High · **Atoms:** ATOM-005 · BVA year (min included)
- **Title:** กรมธรรม์ที่ออกวันที่ 01/01/2026 ถูกดึงเข้ากลุ่มเป้าหมายตามปกติ
- **Preconditions:** Policy issued 2026-01-01, issue_date=T-1, Inforce, eligible.
- **Steps:** Seed → run → inspect.
- **Expected:** Selected and sent (row S). *(oracle: ESB called)*

### TC-010
- **REQ:** FR-002 · **E2E:** FLOW-002 · **Type:** VALIDATION_TEST · **Priority:** Medium · **Atoms:** ATOM-003
- **Title:** กรมธรรม์ที่ issue_date ไม่ใช่เมื่อวาน (T-2) ไม่ถูกดึงเข้ารอบนี้
- **Preconditions:** Policy issue_date = T-2, Inforce, eligible.
- **Steps:** Seed → run → inspect.
- **Expected:** Not selected. *(oracle: 0 ESB calls; row absent)*

### TC-011
- **REQ:** FR-002 · **E2E:** FLOW-002 · **Type:** VALIDATION_TEST · **Priority:** High · **Atoms:** ATOM-004
- **Title:** กรมธรรม์สถานะไม่ใช่ Inforce ไม่ถูกดึงเข้ากลุ่มเป้าหมาย
- **Preconditions:** Policy issue_date=T-1 but status ≠ Inforce (e.g. pending), eligible otherwise.
- **Steps:** Seed → run → inspect.
- **Expected:** Not selected. *(oracle: 0 ESB calls)*

### TC-012
- **REQ:** FR-004 · **E2E:** FLOW-002 · **Type:** VALIDATION_TEST · **Priority:** High · **Atoms:** ATOM-006 (NULL)
- **Title:** รายการที่เบอร์โทร (mobile_no) เป็น NULL ไม่ถูกดึงเข้ากลุ่มเป้าหมาย
- **Preconditions:** Eligible policy but mobile_no = NULL.
- **Steps:** Seed → run → inspect.
- **Expected:** Not selected; no send. *(oracle: 0 ESB calls; row absent)*

### TC-013
- **REQ:** FR-004 · **E2E:** FLOW-002 · **Type:** VALIDATION_TEST · **Priority:** High · **Atoms:** ATOM-006 (empty)
- **Title:** รายการที่เบอร์โทรเป็นค่าว่าง ("") ไม่ถูกดึงเข้ากลุ่มเป้าหมาย
- **Preconditions:** Eligible policy but mobile_no = "" (empty string).
- **Steps:** Seed → run → inspect.
- **Expected:** Not selected; no send. *(oracle: 0 ESB calls)*

### TC-014
- **REQ:** FR-002 · **E2E:** FLOW-002 · **Type:** VALIDATION_TEST · **Priority:** Medium · **Atoms:** ATOM-002
- **Title:** กรมธรรม์ประเภทอื่นนอกเหนือ ORD/IND/PA ไม่ถูกดึงเข้ากลุ่มเป้าหมาย
- **Preconditions:** Policy of a type not in {ORD,IND,PA} (e.g. UL/Group), T-1, Inforce.
- **Steps:** Seed → run → inspect.
- **Expected:** Not selected. *(oracle: 0 ESB calls)*

### 🔹 FLOW-002 — Do-Not-Contact exclusion

### TC-015
- **REQ:** FR-005 · **E2E:** FLOW-002 · **Type:** BUSINESS_RULE_TEST · **Priority:** High · **Atoms:** ATOM-007,009
- **Title:** ลูกค้า ORD ที่อยู่ใน Do Not Contact (remark_code='1') ถูกตัดออก ไม่ได้รับ SMS
- **Preconditions:** Eligible ORD policy; DNC row policy_type='O', remark_code='1' for that policy_no.
- **Steps:** Seed → run → inspect.
- **Expected:** Excluded; no send; counted under DNC in report. *(oracle: 0 ESB calls; report DNC+1)*

### TC-016
- **REQ:** FR-005 · **E2E:** FLOW-002 · **Type:** BUSINESS_RULE_TEST · **Priority:** High · **Atoms:** ATOM-008,009
- **Title:** ลูกค้า IND ที่อยู่ใน Do Not Contact (remark_code='4') ถูกตัดออก
- **Preconditions:** Eligible IND policy (source 'I'); DNC row policy_type='I', remark_code='4'.
- **Steps:** Seed → run → inspect.
- **Expected:** Excluded; no send. *(oracle: 0 ESB calls)*

### TC-017
- **REQ:** FR-005 · **E2E:** FLOW-002 · **Type:** BUSINESS_RULE_TEST · **Priority:** Medium · **Atoms:** ATOM-008,009
- **Title:** ลูกค้า PA ที่อยู่ใน Do Not Contact (remark_code='4') ถูกตัดออก
- **Preconditions:** Eligible PA policy; DNC row policy_type='P', remark_code='4'.
- **Steps:** Seed → run → inspect.
- **Expected:** Excluded; no send. *(oracle: 0 ESB calls)*

### TC-018
- **REQ:** FR-005 · **E2E:** FLOW-002 · **Type:** BUSINESS_RULE_TEST · **Priority:** Medium · **Atoms:** ATOM-009 (IND 'G' variant)
- **Title:** IND ที่มีรหัสต้นทาง 'G' ถูก map เป็นกลุ่ม IND และตรวจ DNC ด้วย remark_code='4' ถูกต้อง
- **Preconditions:** IND policy source type 'G'; DNC row policy_type in ('I','G'), remark_code='4'.
- **Steps:** Seed → run → inspect.
- **Expected:** Mapped and excluded (proves IND IN ('I','G') mapping). *(oracle: 0 ESB calls)*

### 🔹 FLOW-003 — Per-record skip & log (round continues)

### TC-019
- **REQ:** FR-008 · **E2E:** FLOW-003 · **Type:** BUSINESS_RULE_TEST · **Priority:** High · **Atoms:** ATOM-014,042
- **Title:** Inquiry ตอบ code=E13 → ข้ามรายการนั้นทันทีโดยไม่ retry บันทึก log และบันทึกแถว sent_status='F'
- **Preconditions:** Eligible policy; Inquiry mock returns E13 for that cardNo.
- **Steps:** Seed → run → inspect Inquiry call count, log, DB.
- **Expected:** Inquiry called once (no retry); record skipped; separate skip-log written; `WELCOME_NEW_CUST_LINE` row sent_status='F', sms_sent_date NULL. *(oracle: 1 inquiry call; F row NULL date)*

### TC-020
- **REQ:** FR-008a · **E2E:** FLOW-003 · **Type:** EDGE_CASE · **Priority:** High · **Atoms:** ATOM-015
- **Title:** Inquiry ตอบผลนอกเหนือ 3 เงื่อนไข (channel=null / isBlockLine=null) → skip + log แยก โดยไม่หยุดรอบ
- **Preconditions:** Eligible policy; Inquiry mock returns an out-of-condition payload.
- **Steps:** Seed → run → inspect.
- **Expected:** Record skipped + separate log; 'F' row; round not stopped; other records continue. *(oracle: F row; round status Completed)*

### TC-021
- **REQ:** FR-011a · **E2E:** FLOW-003 · **Type:** EDGE_CASE · **Priority:** High · **Atoms:** ATOM-025
- **Title:** card_no ที่หาชื่อ-นามสกุลลูกค้าไม่พบ → ข้ามรายการ + log และต้องไม่ส่งข้อความที่ไม่มีชื่อลูกค้า
- **Preconditions:** Eligible policy; card_no has no match in customer data source.
- **Steps:** Seed → run → inspect.
- **Expected:** No SMS sent for it; skip-log written; 'F' row. **Must NOT send a nameless message.** *(oracle: 0 ESB calls for it; F row)*

### TC-022
- **REQ:** FR-008 · **E2E:** FLOW-003 · **Type:** INTEGRATION_TEST · **Priority:** High · **Atoms:** ATOM-014,018 · SC-006
- **Title:** ความผิดพลาดรายบุคคล (E13) ไม่ทำให้รอบหยุด — รายการอื่นในรอบถูกประมวลผลจนจบ
- **Preconditions:** Seed 3 eligible policies; the 2nd returns E13, 1st & 3rd normal.
- **Steps:** Seed → run → inspect all 3.
- **Expected:** 1st & 3rd sent (S); 2nd skipped (F); round Completed. *(oracle: 2 ESB calls; 1 F row)*

### 🔹 FLOW-004 — Service down / round-level failure

### TC-023
- **REQ:** FR-008b · **E2E:** FLOW-004 · **Type:** STATE_TRANSITION_TEST · **Priority:** High · **Atoms:** ATOM-016 · BVA retry
- **Title:** Line Connect API ล่มทั้งระบบ → ระบบ retry สูงสุด 3 ครั้งแบบเว้นช่วง
- **Preconditions:** Inquiry mock always fails (timeout/5xx).
- **Steps:** Seed eligible policies → run → count Inquiry attempts.
- **Expected:** Exactly 3 retry attempts (with interval), not more. *(oracle: attempt count = 3)*

### TC-024
- **REQ:** FR-008b,018 · **E2E:** FLOW-004 · **Type:** STATE_TRANSITION_TEST · **Priority:** High · **Atoms:** ATOM-017,047
- **Title:** หลัง retry ครบ 3 ครั้งยังล้มเหลว → หยุดรอบ + ส่ง email แจ้งเตือน
- **Preconditions:** Inquiry mock fails all attempts.
- **Steps:** Seed → run → inspect round status + email sink.
- **Expected:** Round Stopped-Alerted; failure email sent stating batch=BATCH-CSMS-WELCOME-LINE + failed step (Line Connect down); no SMS sent that round. *(oracle: round Stopped; 1 email; 0 ESB)*

### TC-025
- **REQ:** FR-008b · **E2E:** FLOW-004 · **Type:** EDGE_CASE · **Priority:** Medium · **Atoms:** ATOM-016 · BVA retry (success ≤3)
- **Title:** Line Connect ล่มชั่วคราวแล้วกลับมา (สำเร็จในครั้งที่ ≤ 3) → รอบดำเนินต่อได้ปกติ
- **Preconditions:** Inquiry mock fails attempt 1, succeeds attempt 2.
- **Steps:** Seed → run → inspect.
- **Expected:** Round continues; eligible sent; no failure email. *(oracle: ESB called; 0 email)*

### 🔹 FLOW-001 — Deduplication

### TC-026
- **REQ:** FR-009 · **E2E:** FLOW-001 · **Type:** BUSINESS_RULE_TEST · **Priority:** High · **Atoms:** ATOM-019,020
- **Title:** ลูกค้ารายเดียว (ชื่อ-นามสกุล-เบอร์ตรงกัน) มี 2 กรมธรรม์ในรอบเดียว → ได้รับ SMS 1 ข้อความ อ้างกรมธรรม์ issue_date เก่าสุด
- **Preconditions:** Seed 2 eligible policies same (fname,lname,mobile_no), issue_date A<B.
- **Steps:** Seed → run → inspect.
- **Expected:** Exactly 1 SMS; the logged/sent record references the MIN(issue_date)=A policy. *(oracle: 1 ESB call; row references A)*

### TC-027 `[BLOCKED-RQ01]`
- **REQ:** FR-009 (EC-002) · **E2E:** FLOW-001 · **Type:** EDGE_CASE · **Priority:** Medium · **Atoms:** ATOM-021 `[ASSUMPTION]`
- **Title:** Dedup เมื่อ issue_date เท่ากันทุกฉบับ → เลือกแบบ deterministic
- **Preconditions:** 2 eligible policies same customer, **same** issue_date, different policy_no.
- **Steps:** Seed → run → inspect which policy_no is chosen.
- **Expected:** `[BLOCKED — awaiting RQ-001]` Spec proposes smallest policy_no (A-007) but not confirmed. **Do not assert a specific policy_no until SA confirms.** Test can only verify "exactly 1 SMS" now. *(partial oracle: 1 ESB call)*

### TC-028
- **REQ:** FR-010 · **E2E:** FLOW-001 · **Type:** BUSINESS_RULE_TEST · **Priority:** High · **Atoms:** ATOM-022
- **Title:** ลูกค้าที่เคยได้รับ SMS แล้ว (ประวัติ policy_no+type+fname+lname ตรง และ sms_sent_date ไม่ว่าง) ไม่ได้รับซ้ำ
- **Preconditions:** Seed a prior `WELCOME_NEW_CUST_LINE` row (sent_status='S', sms_sent_date NOT NULL) matching the policy; seed the same policy again eligible.
- **Steps:** Seed → run → inspect.
- **Expected:** Excluded; no resend (ALT-002). *(oracle: 0 new ESB calls)*

### TC-029
- **REQ:** FR-010,016a · **E2E:** FLOW-001 · **Type:** EDGE_CASE · **Priority:** High · **Atoms:** ATOM-023
- **Title:** ประวัติเดิมที่ sms_sent_date เป็น NULL (สถานะ 'F') ต้องไม่บล็อกการส่งที่ถูกต้องในรอบถัดไป
- **Preconditions:** Seed prior row sent_status='F', sms_sent_date NULL for the policy; seed same policy eligible now (e.g. Manual-Fix path or next legit round).
- **Steps:** Seed → run → inspect.
- **Expected:** Record is NOT blocked by the 'F' row (dedup only checks NOT NULL); it is sent. *(oracle: ESB called; new S row)*

### 🔹 FLOW-001 — Message & file build

### TC-030
- **REQ:** FR-011 · **E2E:** FLOW-001 · **Type:** BUSINESS_RULE_TEST · **Priority:** Medium · **Atoms:** ATOM-024
- **Title:** ใช้ template จากตารางกำหนดการข้อความ (sms_message_schedule) ก่อนเป็นอันดับแรก
- **Preconditions:** A matching sms_message_schedule template exists for the category.
- **Steps:** Seed → run → inspect the sms_message written/sent.
- **Expected:** Message body matches the schedule template (not the category default). *(oracle: sms_message == schedule text)*

### TC-031
- **REQ:** FR-011 · **E2E:** FLOW-001 · **Type:** BUSINESS_RULE_TEST · **Priority:** Medium · **Atoms:** ATOM-024
- **Title:** fallback ไปใช้ข้อความ default ของหมวด SMS เมื่อไม่พบ template ใน schedule
- **Preconditions:** No sms_message_schedule template; SMS_CATEGORY.msg_text present.
- **Steps:** Seed → run → inspect.
- **Expected:** Message body = SMS_CATEGORY default text. *(oracle: sms_message == category msg_text)*

### TC-032
- **REQ:** FR-012 · **E2E:** FLOW-001 · **Type:** BUSINESS_RULE_TEST · **Priority:** High · **Atoms:** ATOM-026,027,059
- **Title:** แทนค่าตัวแปรในข้อความ: $(var1)=ชื่อลูกค้า, $(var2)=ลิงก์แคมเปญ
- **Preconditions:** Customer name resolvable; active link present.
- **Steps:** Seed → run → inspect final message.
- **Expected:** Final message contains the customer's name (var1) and the active campaign link (var2); no literal `$(var1)`/`$(var2)` remaining. *(oracle: message contains name + link; no placeholder tokens)*

### TC-033
- **REQ:** FR-012 · **E2E:** FLOW-001 · **Type:** BUSINESS_RULE_TEST · **Priority:** High · **Atoms:** ATOM-028,029
- **Title:** ลิงก์แคมเปญถูกดึงจาก config (LINE_LINK, CSMS_SNC_NewCust) ที่ active_flag='Y' และอยู่ในช่วง begin/expire
- **Preconditions:** cf_catalog LINE_LINK row config_value1='CSMS_SNC_NewCust', active_flag='Y', begin≤today≤expire.
- **Steps:** Seed → run → inspect link used.
- **Expected:** var2 equals that config link. *(oracle: message link == config_value)*

### TC-034
- **REQ:** FR-012a,018 · **E2E:** FLOW-004 · **Type:** BUSINESS_RULE_TEST · **Priority:** High · **Atoms:** ATOM-030
- **Title:** ไม่มีลิงก์แคมเปญ active ณ วันประมวลผล → หยุดส่งทั้งรอบ + email แจ้งเตือน (ไม่ส่งลิงก์หมดอายุ)
- **Preconditions:** LINE_LINK row expired OR active_flag≠'Y'; eligible policies present.
- **Steps:** Seed → run → inspect.
- **Expected:** No SMS that round; round Stopped-Alerted; failure email (step=no active link). *(oracle: 0 ESB; 1 email)*

### TC-035
- **REQ:** FR-013 · **E2E:** FLOW-001 · **Type:** VALIDATION_TEST · **Priority:** Medium · **Atoms:** ATOM-031,032,033
- **Title:** ไฟล์ CSV ตั้งชื่อตามรูปแบบ MKT_CSMS_<ชื่อย่อหมวด>_<YYMMDDhhmmss>.csv
- **Preconditions:** At least 1 sendable record; sms_category_name_abbr known.
- **Steps:** Run → inspect emitted CSV filename.
- **Expected:** Filename matches `MKT_CSMS_<abbr>_<12 digits>.csv` (Department=MKT, SystemCode=CSMS, Category=abbr). *(oracle: regex on filename)*

### TC-036 `[BLOCKED-RQ02]`
- **REQ:** FR-013 · **E2E:** FLOW-001 · **Type:** VALIDATION_TEST · **Priority:** High · **Atoms:** ATOM-034 `[RQ]`
- **Title:** ส่วนปี ในชื่อไฟล์ CSV — พ.ศ. 2 หลัก vs ค.ศ. 2 หลัก
- **Preconditions:** Known run date (e.g. 2026-05-16).
- **Steps:** Run → read the year token in the filename.
- **Expected:** `[BLOCKED — awaiting RQ-002]` FR-013 says Buddhist "69" but example shows CE "26". **Do not assert either until SA confirms.** *(no oracle until resolved)*

### TC-037
- **REQ:** FR-013 · **E2E:** FLOW-001 · **Type:** VALIDATION_TEST · **Priority:** Low · **Atoms:** ATOM-035
- **Title:** ไฟล์ CSV เป็น encoding UTF-8
- **Preconditions:** Records with Thai names (multibyte).
- **Steps:** Run → open CSV bytes.
- **Expected:** File is valid UTF-8; Thai characters intact. *(oracle: byte-order/decoding check)*

### TC-038
- **REQ:** FR-013 · **E2E:** FLOW-001 · **Type:** INTEGRATION_TEST · **Priority:** Medium · **Atoms:** ATOM-036
- **Title:** ไฟล์ CSV ต้องถูกสร้างก่อนเรียกบริการส่ง
- **Preconditions:** Sendable records; instrument ordering of file-create vs ESB call.
- **Steps:** Run → inspect ordered event log.
- **Expected:** CSV file exists before the first ESB send call. *(oracle: file-create timestamp < ESB call timestamp)*

### 🔹 FLOW-001 — Delivery & logging

### TC-039
- **REQ:** FR-014 · **E2E:** FLOW-001 · **Type:** INTEGRATION_TEST · **Priority:** High · **Atoms:** ATOM-037
- **Title:** ส่ง SMS ผ่าน Web Service กลาง (ESB) → SMS Gateway
- **Preconditions:** 1 sendable record; ESB mock reachable.
- **Steps:** Run → inspect ESB mock.
- **Expected:** ESB send endpoint invoked with correct number + message. *(oracle: ESB called once, payload matches)*

### TC-040
- **REQ:** FR-015 · **E2E:** FLOW-001 · **Type:** INTEGRATION_TEST · **Priority:** Medium · **Atoms:** ATOM-038
- **Title:** บันทึก CSMS_LOG พร้อม refer_no และสถานะที่ได้กลับจาก Web Service
- **Preconditions:** 1 send with ESB returning a status + refer_no.
- **Steps:** Run → inspect CSMS_LOG.
- **Expected:** CSMS_LOG row with refer_no and the returned status. *(oracle: row present, fields set)*

### TC-041
- **REQ:** FR-016 · **E2E:** FLOW-001 · **Type:** VALIDATION_TEST · **Priority:** High · **Atoms:** ATOM-039,040
- **Title:** บันทึก WELCOME_NEW_CUST_LINE ครบทุกฟิลด์ และ created_by='SYSTEM_BATCH'
- **Preconditions:** 1 successful send (daily run).
- **Steps:** Run → inspect the row.
- **Expected:** All fields populated (policy_no, policy_type, title_name, fname, lname, card_no, issue_date, sms_sent_date, mobile_no, sms_message, credit_amount, sent_status, created_by, created_date); created_by='SYSTEM_BATCH'. *(oracle: no required field null except sms_sent_date only when 'F')*

### TC-042
- **REQ:** FR-016a · **E2E:** FLOW-001 · **Type:** VALIDATION_TEST · **Priority:** High · **Atoms:** ATOM-041
- **Title:** รายการส่งสำเร็จ → sms_sent_date = เวลาที่ส่ง และ sent_status='S'
- **Preconditions:** 1 successful send.
- **Steps:** Run → inspect row.
- **Expected:** sms_sent_date set to send time; sent_status='S'. *(oracle: S row, non-null date)*

### TC-043
- **REQ:** FR-016a · **E2E:** FLOW-003 · **Type:** VALIDATION_TEST · **Priority:** High · **Atoms:** ATOM-042
- **Title:** รายการส่งไม่สำเร็จ/ถูก skip → sms_sent_date=NULL และ sent_status='F'
- **Preconditions:** 1 skipped record (e.g. E13 from TC-019 setup).
- **Steps:** Run → inspect row.
- **Expected:** sms_sent_date NULL; sent_status='F'. *(oracle: F row, null date)*

### TC-044 `[BLOCKED-RQ03]`
- **REQ:** FR-017 · **E2E:** FLOW-001 · **Type:** VALIDATION_TEST · **Priority:** Low · **Atoms:** ATOM-044 `[ASSUMPTION]`
- **Title:** credit_amount คำนวณด้วย logic เดิมของ CSMS
- **Preconditions:** 1 successful send.
- **Steps:** Run → inspect credit_amount.
- **Expected:** `[BLOCKED — awaiting RQ-003]` Exact expected value not in spec (reuse existing logic). Assert **presence + numeric type** only; **do not invent the expected number.** *(partial oracle: credit_amount is a non-null number)*

### TC-045
- **REQ:** FR-016a · **E2E:** FLOW-001 · **Type:** VALIDATION_TEST · **Priority:** Low · **Atoms:** ATOM-043
- **Title:** sent_status รับได้เฉพาะค่า 'S' หรือ 'F' เท่านั้น
- **Preconditions:** A run producing both success and skip rows.
- **Steps:** Run → query distinct sent_status.
- **Expected:** Distinct sent_status ⊆ {'S','F'}; no third value ever written. *(oracle: set membership)*

### 🔹 FLOW-004 — Round-level failure triggers (decision table)

### TC-046
- **REQ:** FR-018 · **E2E:** FLOW-004 · **Type:** INTEGRATION_TEST · **Priority:** High · **Atoms:** ATOM-045,047
- **Title:** สร้างไฟล์ CSV ไม่ได้ตามเวลาที่กำหนด → หยุดรอบ + email ระบุขั้นตอนที่ล้มเหลว
- **Preconditions:** Force CSV generation to fail (e.g. write path unavailable).
- **Steps:** Run → inspect round status + email.
- **Expected:** Round Stopped-Alerted; email step="generate file". *(oracle: 1 email; 0 ESB)*

### TC-047
- **REQ:** FR-018 · **E2E:** FLOW-004 · **Type:** INTEGRATION_TEST · **Priority:** High · **Atoms:** ATOM-045,047
- **Title:** เรียก ESB/SMS Gateway ไม่ได้ → หยุดรอบ + email
- **Preconditions:** ESB mock unreachable.
- **Steps:** Run → inspect.
- **Expected:** Round Stopped-Alerted; email step="ESB/SMS Gateway". *(oracle: 1 email)*

### TC-048
- **REQ:** FR-018 · **E2E:** FLOW-004 · **Type:** INTEGRATION_TEST · **Priority:** High · **Atoms:** ATOM-045,047
- **Title:** ดึงข้อมูลต้นทาง/บันทึกฐานข้อมูลล้มเหลว → หยุดรอบ + email
- **Preconditions:** Force a source/DB error during the run.
- **Steps:** Run → inspect.
- **Expected:** Round Stopped-Alerted; email step names the DB/data step. *(oracle: 1 email)*

### TC-049
- **REQ:** FR-018 · **E2E:** FLOW-004 · **Type:** VALIDATION_TEST · **Priority:** Medium · **Atoms:** ATOM-047
- **Title:** อีเมลแจ้งเตือนระบุชื่อ batch = "BATCH-CSMS-WELCOME-LINE" และขั้นตอนที่ล้มเหลว
- **Preconditions:** Any round-level failure (reuse TC-047).
- **Steps:** Trigger failure → read email content.
- **Expected:** Email body/subject contains batch name and the failing step. *(oracle: string contains batch name + step)*

### TC-050 `[BLOCKED-RQ04]`
- **REQ:** FR-018 · **E2E:** FLOW-004 · **Type:** INTEGRATION_TEST · **Priority:** High · **Atoms:** ATOM-048 `[RQ]`
- **Title:** เกณฑ์ "ตามเวลาที่กำหนด" ที่ใช้ตัดสินว่า batch ล้มเหลว
- **Preconditions:** N/A — needs the monitoring SLA/timeout value.
- **Steps:** —
- **Expected:** `[BLOCKED — awaiting RQ-004]` The timeout/SLA threshold is not in spec. Cannot assert "failed in time" (SC-004) without it. Resolve before execution. *(no oracle)*

### TC-051
- **REQ:** FR-018 · **E2E:** FLOW-004 · **Type:** VALIDATION_TEST · **Priority:** Medium · **Atoms:** ATOM-046
- **Title:** อีเมลแจ้งเตือนส่งถึงทั้งทีม IT และ User
- **Preconditions:** Any round-level failure; email sink capturing recipients.
- **Steps:** Trigger failure → inspect recipients.
- **Expected:** Recipients include both IT team and User groups (per standard convention). *(oracle: recipient set covers IT + User)*

### 🔹 FLOW-005 — Manual Fix recovery

### TC-052
- **REQ:** FR-019,020 · **E2E:** FLOW-005 · **Type:** E2E_FLOW_POSITIVE · **Priority:** High · **Atoms:** ATOM-049,053
- **Title:** IT Admin สั่ง Manual Batch สำหรับวันที่ล้มเหลว → รายการที่ตกหล่นถูกส่ง โดยไม่ส่งซ้ำรายการที่เคยสำเร็จ
- **Preconditions:** A failed round on 2026-05-15 (some records never sent); some other records already 'S'.
- **Steps:** On Manual Fix screen: select batch=BATCH-CSMS-WELCOME-LINE, range 2026-05-15..2026-05-15 → Manual Batch → inspect.
- **Expected:** Missing records sent; previously-'S' records not resent (checked via sms_sent_date NOT NULL). *(oracle: only NULL-date records get sent)*

### TC-053
- **REQ:** FR-020a · **E2E:** FLOW-005 · **Type:** EDGE_CASE · **Priority:** High · **Atoms:** ATOM-054 · BVA (T-1 arithmetic)
- **Title:** ช่วงวันที่ที่เลือก = วันประมวลผล; ระบบดึงกรมธรรม์ issue_date = T-1 ของแต่ละวัน
- **Preconditions:** Policies with issue_date=2026-05-14 exist; select processing date 2026-05-15.
- **Steps:** Manual Batch range 2026-05-15 → inspect which issue_date is pulled.
- **Expected:** System pulls issue_date=2026-05-14 (T-1 of 05-15). *(oracle: selected rows have issue_date 05-14)*

### TC-054
- **REQ:** FR-020,020b · **E2E:** FLOW-005 · **Type:** BUSINESS_RULE_TEST · **Priority:** High · **Atoms:** ATOM-053,056
- **Title:** Manual Batch idempotent — ประมวลผลเฉพาะรายการ sms_sent_date IS NULL ในช่วงที่เลือก
- **Preconditions:** Range with a mix of 'S' (NOT NULL) and 'F'/unsent (NULL) rows.
- **Steps:** Manual Batch → inspect which rows are processed.
- **Expected:** Only NULL-date rows processed; NOT-NULL never resent (EC-004). *(oracle: NOT-NULL rows unchanged)*

### TC-055
- **REQ:** FR-020b · **E2E:** FLOW-001/005 · **Type:** BUSINESS_RULE_TEST · **Priority:** High · **Atoms:** ATOM-055
- **Title:** รายการ 'F' ส่งซ้ำได้ผ่าน Manual Fix เท่านั้น — รอบ daily ต้องไม่ดึง 'F' มา retry อัตโนมัติ
- **Preconditions:** Existing 'F' rows from a prior day.
- **Steps:** Run the **daily** batch (not Manual) → inspect whether 'F' rows are retried.
- **Expected:** Daily run does NOT pick up prior 'F' rows for auto-retry. *(oracle: 0 ESB calls for old 'F' rows in daily run)*

### TC-056
- **REQ:** FR-019 · **E2E:** FLOW-005 · **Type:** VALIDATION_TEST · **Priority:** Medium · **Atoms:** ATOM-050 · BVA (start>today)
- **Title:** วันที่เริ่มต้นเกินวันปัจจุบัน → validation ไม่ให้เริ่มประมวลผล
- **Preconditions:** Manual Fix screen; start date = today+1.
- **Steps:** Enter range start=today+1 → Manual Batch.
- **Expected:** Validation blocks; no processing starts. *(oracle: batch not started; validation shown — exact text see TC-060)*

### TC-057
- **REQ:** FR-019 · **E2E:** FLOW-005 · **Type:** VALIDATION_TEST · **Priority:** Low · **Atoms:** ATOM-050 · BVA (start=today)
- **Title:** วันที่เริ่มต้น = วันปัจจุบัน → ผ่าน validation
- **Preconditions:** Manual Fix; start=today, end=today.
- **Steps:** Enter → Manual Batch.
- **Expected:** Accepted; processing proceeds (pulls T-1 of today). *(oracle: batch starts)*

### TC-058
- **REQ:** FR-019 · **E2E:** FLOW-005 · **Type:** VALIDATION_TEST · **Priority:** Medium · **Atoms:** ATOM-051 · BVA (end<start)
- **Title:** วันที่สิ้นสุดน้อยกว่าวันที่เริ่มต้น → validation ไม่ให้เริ่มประมวลผล
- **Preconditions:** Manual Fix; end = start−1.
- **Steps:** Enter → Manual Batch.
- **Expected:** Validation blocks; no processing. *(oracle: batch not started)*

### TC-059
- **REQ:** FR-019 · **E2E:** FLOW-005 · **Type:** VALIDATION_TEST · **Priority:** Low · **Atoms:** ATOM-051 · BVA (end=start)
- **Title:** วันที่สิ้นสุด = วันที่เริ่มต้น (ช่วงวันเดียว) → ผ่าน validation
- **Preconditions:** Manual Fix; start=end=a past date.
- **Steps:** Enter → Manual Batch.
- **Expected:** Accepted; single-day processing. *(oracle: batch starts)*

### TC-060 `[BLOCKED-RQ05]`
- **REQ:** FR-019 · **E2E:** FLOW-005 · **Type:** VALIDATION_TEST · **Priority:** Low · **Atoms:** ATOM-052 `[RQ]`
- **Title:** ข้อความ validation/error ของหน้า Manual Fix (มาตรฐานหน้าจอกลาง)
- **Preconditions:** Invalid date range (reuse TC-056/058).
- **Steps:** Trigger invalid input → read the message.
- **Expected:** `[BLOCKED — awaiting RQ-005]` Exact message text = central Admin Dashboard standard, not in this spec (out-of-scope UI). Assert "a validation message appears + no processing" only; **do not invent the wording.** *(partial oracle: message present)*

### 🔹 FLOW-006 — Daily report

### TC-061
- **REQ:** FR-021 · **E2E:** FLOW-006 · **Type:** BUSINESS_RULE_TEST · **Priority:** Medium · **Atoms:** ATOM-057
- **Title:** รายงานประจำวันแสดงยอด: ประมวลผลทั้งหมด / สำเร็จ / ไม่สำเร็จ-ถูก skip / ถูกตัดออกตามเหตุผล พร้อม breakdown ตาม policy_type
- **Preconditions:** A completed round with a mix of S, F, and excluded records across ORD/IND/PA.
- **Steps:** Run → open the daily report.
- **Expected:** Report shows total, success('S'), fail/skip('F'), excluded-by-reason (DNC/registered/in-round dup/previously sent), and a per-policy_type breakdown. *(oracle: each count present + typed)*

### TC-062
- **REQ:** FR-021 · **E2E:** FLOW-006 · **Type:** INTEGRATION_TEST · **Priority:** Medium · **Atoms:** ATOM-057 · SC-007
- **Title:** ยอดในรายงานตรงกับข้อมูลจริงใน WELCOME_NEW_CUST_LINE 100% (reconcile)
- **Preconditions:** Same completed round.
- **Steps:** Compare report totals vs direct DB counts.
- **Expected:** Report success/fail/excluded counts equal the DB row counts exactly. *(oracle: report == DB counts)*

### TC-063
- **REQ:** FR-021 · **E2E:** FLOW-006 · **Type:** EDGE_CASE · **Priority:** Low · **Atoms:** ATOM-058
- **Title:** รอบที่มีสัดส่วน 'F' สูงผิดปกติ → ไม่มีการแจ้งเตือนเพิ่ม (ติดตามผ่านรายงานเท่านั้น)
- **Preconditions:** A completed round where most records are 'F' (e.g. many E13).
- **Steps:** Run → inspect whether any extra threshold alert fires.
- **Expected:** No additional threshold alert email; the high-'F' is only visible in the daily report. *(oracle: 0 extra alert email; report reflects F count)*

### 🔹 Cross-cutting

### TC-064
- **REQ:** FR-011 (A-011) · **E2E:** FLOW-001 · **Type:** EDGE_CASE · **Priority:** Low · **Atoms:** ATOM-061
- **Title:** ไม่มีการจำกัดจำนวนตัวอักษรของข้อความ — ข้อความ ~140 ตัวอักษร (≈2 credits) ส่งได้ปกติ
- **Preconditions:** Template ~140 Thai chars.
- **Steps:** Run → inspect message sent.
- **Expected:** Full message sent untruncated; no length-based rejection. *(oracle: sent length == template length)*

### TC-065
- **REQ:** FR-011/016 · **E2E:** FLOW-001 · **Type:** VALIDATION_TEST · **Priority:** Low · **Atoms:** ATOM-060
- **Title:** การส่งใช้หมวด SMS ที่ถูกต้อง (sms_category_code='113', name='MKTWelcomeNewCust')
- **Preconditions:** Standard eligible send.
- **Steps:** Run → inspect category used in send/log.
- **Expected:** Category code 113 / name MKTWelcomeNewCust applied. *(oracle: category fields match)*

## 3. Coverage Analysis
- **Covered flows:** FLOW-001..006 all covered (positive + negative + edge + boundary).
- **Partially covered:** dedup tie-break (TC-027), filename year (TC-036), credit value (TC-044), failure timeout (TC-050), Manual-Fix message (TC-060) — all `[BLOCKED]` on RQ-001..005 (behavior not invented, not a design gap).
- **Missing negative scenarios:** none identified for ✅ atoms.
- **Technique coverage:** BVA year 2/2, retry 3-pt 3/3, Manual-Fix dates 4/4, T-1 1/1; Decision-table BR-003 send/not-send rows + 5/5 round-failure triggers; State-transition record 9 valid + 3 invalid, round 5/5; EP inquiry 4/4. → **100% of mandated denominators** (blocked oracles excepted).
- **NFR flagged:** PII + Do-Not-Contact compliance → `[NFR — route to security/compliance track]` (see `NFR-routing.md`).

## 4. Traceability Matrix (FR → TC)
| FR | Test Cases |
|----|-----------|
| FR-001 | TC-001 |
| FR-002 | TC-001,002,003,010,011,014 |
| FR-003 | TC-008,009 |
| FR-004 | TC-012,013 |
| FR-005 | TC-015,016,017,018 |
| FR-006 | TC-001,004,005,006 |
| FR-007 | TC-007 |
| FR-008 | TC-019,022 |
| FR-008a | TC-020 |
| FR-008b | TC-023,024,025 |
| FR-009 | TC-026,027 |
| FR-010 | TC-028,029 |
| FR-011 | TC-030,031,064,065 |
| FR-011a | TC-021 |
| FR-012 | TC-032,033 |
| FR-012a | TC-034 |
| FR-013 | TC-035,036,037,038 |
| FR-014 | TC-039 |
| FR-015 | TC-040 |
| FR-016 | TC-041,065 |
| FR-016a | TC-042,043,045,029 |
| FR-017 | TC-044 |
| FR-018 | TC-024,046,047,048,049,050,051 |
| FR-019 | TC-052,056,057,058,059,060 |
| FR-020 | TC-052,054 |
| FR-020a | TC-053 |
| FR-020b | TC-054,055 |
| FR-021 | TC-061,062,063 |

## 5. Risk Highlights
- **High-risk business-critical:** BR-003 eligibility (wrong SEND/NOT-SEND → SC-002 breach) — TC-001,004,005,006; dedup/no-resend (SC-003) — TC-026,028,052,054; stop-round + alert on failure (SC-004) — TC-024,034,046,047,048; no expired-link send (SC-005) — TC-034.
- **Integration-heavy:** Inquiry API (E13 vs down asymmetry), ESB, DB write ordering — TC-019..025,038..048.
- **RQ-gated (cannot close by adding TCs):** TC-036 (RQ-002 filename year) & TC-050 (RQ-004 timeout) are High priority and block SC-005/SC-004 assertion respectively → escalate to SA.
