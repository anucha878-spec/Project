# 03 — Test Cases — CSMS-002 Welcome New Customer Round 2

**Feature:** `csms-002-welcome-round2` · **Skill:** `/test-case-generator` (03) · **Date:** 2026-07-09 · **Iteration:** 1
**Input:** `qa/01-requirement-review.md`, `qa/02-e2e-test-patterns.md`, `qa/00b-atom-inventory.md`.
**All test statuses = Not Run** (design phase; no running system). Test data = SYNTHETIC (see 06). Blocked expecteds carry `[BLOCKED]`/RQ per Strict-Data-Policy — not invented.
**03b Google Sheet upload = SKIPPED** (per run instruction).

## §0 Glossary (project-specific decode)
- **'S' / 'F'** = `sent_status` Success / Fail-or-skip · **sms_sent_date NULL** = not successfully sent (Manual-Fix-eligible)
- **E02** = registration "not found" (not registered) · **E00** = registered · **E13** = error/exception from registration service
- **isBlockLine=true** = customer blocked the LINE OA (so LINE channel unusable) · **N** = day-count config (`DATE_COUNT`, default 20)
- **ORD** = สามัญ · **IND** = อุตสาหกรรม ปช. · **GOV** = อุตสาหกรรม ขพ. · **PA** = อุบัติเหตุส่วนบุคคล
- **Manual Fix** = IT Admin re-run of a past batch date via central CSMS Admin Dashboard · **round-1** = CSMS-001 Welcome (LINE) SMS

## 1. Summary
- **Total test cases:** 63 (TC-001..TC-063)
- **Coverage:** Requirement coverage = **26/26 FR = 100%** · Atom coverage = **65/65 atoms = 100%** (every ✅ atom ≥1 TC; RQ/assumption atoms carried as `[ASSUMPTION]`/`[BLOCKED]` TCs)
- **Scenario coverage:** all 6 flows, all 12 valid + 2 forbidden transitions, all decision-table rules represented.
- **Technique coverage (divisors):** Dual-channel decision table **12/12 rules** · Inforce-by-type DT **4 types + negative** · day-count BVA **N-1/N/N+1 = 3/3** · phone BVA (mobile1/mobile2/both-empty) 3/3 · state-transition 12 valid + 2 forbidden.
- **Exit criteria:** Requirement coverage 100% ✅, no High-priority technique divisor missing ✅ → **no loop-back needed from 03's own view** (04 confirms).
- **Blocked/assumption TCs (pending SA/env):** TC-029 (truth-table precedence RQ), TC-044/TC-048 (log/CSV layout RQ-003), TC-050 (policy-code RQ-001), TC-051 (linkage field RQ-009), TC-056 (SLA RQ-004), TC-062 (report FR# RQ-002).

## 2. Test Case Suite

### 🔹 Flow FLOW-001 — Schedule, Cohort selection, Filtering

**Entry-path (all FLOW-001 TCs):** round-1 (CSMS-001) history + policy master + config seeded → run batch one cycle → inspect selected set & logs.

---
### TC-001
- **Requirement ID:** FR-001 · **E2E:** FLOW-001 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** ระบบรันแบตช์รอบส่งอัตโนมัติทุกวัน เวลา 10:00 น.
- **Technique/denominator:** schedule check 1/1 · **Atoms:** A-01
- **Preconditions:** ตั้งเวลาระบบเป็น 10:00 น. ของวันทดสอบ; มีกลุ่มเป้าหมายอย่างน้อย 1 ราย
- **Steps:** 1) ปล่อยให้ตัวจับเวลาของระบบถึง 10:00 น. 2) สังเกตว่าแบตช์เริ่มทำงาน
- **Expected:** แบตช์เริ่มประมวลผลรอบใหม่ ณ 10:00 น. โดยอัตโนมัติ *(automation ref: scheduler trigger time = 10:00; batch run-log start timestamp)*

---
### TC-002
- **Requirement ID:** FR-002 · **E2E:** FLOW-001 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** เลือกลูกค้าที่รับ SMS รอบแรกครบ 20 วันพอดี (ณ วันประมวลผล)
- **Technique/denominator:** BVA day-count N=20 (on-point) 1/3 · **Atoms:** A-02
- **Preconditions:** ลูกค้ามีประวัติรอบแรก `sms_sent_date` = วันประมวลผล − 20 วัน; กรมธรรม์ Inforce; ไม่ลงทะเบียนทั้งสองช่องทาง
- **Steps:** 1) รันแบตช์ 2) ตรวจว่าลูกค้ารายนี้อยู่ในกลุ่มเป้าหมาย
- **Expected:** ลูกค้าถูกเลือกเข้ากลุ่มเป้าหมายและได้รับ SMS *(automation ref: target set contains policy_no; sms_sent_date+20 = run_date)*

---
### TC-003
- **Requirement ID:** FR-002 · **E2E:** FLOW-001 · **Type:** EDGE_CASE · **Priority:** Medium
- **Title:** ลูกค้าที่รับรอบแรกเพิ่ง 19 วัน (ยังไม่ครบ) ไม่ถูกเลือก
- **Technique/denominator:** BVA N-1 2/3 · **Atoms:** A-02
- **Preconditions:** `sms_sent_date` = วันประมวลผล − 19 วัน
- **Steps:** 1) รันแบตช์ 2) ตรวจกลุ่มเป้าหมาย
- **Expected:** ลูกค้าไม่ถูกเลือก (ยังไม่ครบกำหนด) *(automation ref: target set excludes policy_no)*

---
### TC-004
- **Requirement ID:** FR-002 · **E2E:** FLOW-001 · **Type:** EDGE_CASE · **Priority:** Medium
- **Title:** ลูกค้าที่รับรอบแรก 21 วัน (เกินกำหนด 1 วัน) ไม่ถูกเลือกในรอบนี้
- **Technique/denominator:** BVA N+1 3/3 · **Atoms:** A-02
- **Preconditions:** `sms_sent_date` = วันประมวลผล − 21 วัน (สมมติรอบ 20 วันก่อนพลาด)
- **Steps:** 1) รันแบตช์ 2) ตรวจกลุ่มเป้าหมาย
- **Expected:** ไม่ถูกเลือกในรอบ daily นี้ (เป็น cohort ตรงวัน); กลุ่มที่พลาดซ่อมผ่าน Manual Fix *(automation ref: target set excludes; see TC-060)*

---
### TC-005
- **Requirement ID:** FR-003 · **E2E:** FLOW-001 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** จำนวนวันครบกำหนดอ่านจากค่า config กลาง (ค่าเริ่มต้น 20 วัน)
- **Technique/denominator:** config-source 1/1 · **Atoms:** A-03
- **Preconditions:** config `DATE_COUNT` ของแคมเปญ `CSMS_SNC_NewCustApp` (Active) = 20
- **Steps:** 1) รันแบตช์ 2) ตรวจว่าเกณฑ์คัดเลือกใช้ค่า 20 จาก config
- **Expected:** ระบบใช้ค่า N=20 จาก config (ไม่ใช่ค่า hardcode) *(automation ref: cohort offset = config DATE_COUNT, campaign Active)*

---
### TC-006
- **Requirement ID:** FR-003 · **E2E:** FLOW-001 · **Type:** BUSINESS_RULE_TEST · **Priority:** Medium
- **Title:** เปลี่ยนค่าจำนวนวันใน config แล้วรอบถัดไปใช้ค่าใหม่โดยไม่ต้องแก้ระบบ
- **Technique/denominator:** config-change 1/1 · **Atoms:** A-04
- **Preconditions:** เปลี่ยน `DATE_COUNT` จาก 20 → 15 ขณะแคมเปญ Active
- **Steps:** 1) รันแบตช์รอบถัดไป 2) ตรวจกลุ่มเป้าหมาย
- **Expected:** กลุ่มเป้าหมายใช้เกณฑ์ 15 วัน (ลูกค้าที่รับรอบแรกครบ 15 วันถูกเลือก) *(automation ref: cohort offset follows updated config, no deploy)*

---
### TC-007
- **Requirement ID:** FR-004 · **E2E:** FLOW-001 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** กรมธรรม์สามัญ (ORD) มีผลบังคับสถานะ '1' ถูกเลือก; สถานะอื่นถูกคัดออก
- **Technique/denominator:** Inforce DT ORD 1/4 (+negative) · **Atoms:** A-05
- **Preconditions:** ลูกค้า ORD 1 รายสถานะ '1'; อีกรายสถานะ ≠ '1'
- **Steps:** 1) รันแบตช์ 2) ตรวจกลุ่มเป้าหมาย
- **Expected:** รายสถานะ '1' ถูกเลือก; รายสถานะ ≠ '1' ถูกคัดออก *(automation ref: ORD included iff status='1')*

---
### TC-008
- **Requirement ID:** FR-004 · **E2E:** FLOW-001 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** กรมธรรม์อุบัติเหตุส่วนบุคคล (PA) มีผลบังคับสถานะ '1' ถูกเลือก
- **Technique/denominator:** Inforce DT PA 2/4 · **Atoms:** A-05
- **Preconditions:** ลูกค้า PA สถานะ '1'
- **Steps:** 1) รันแบตช์ 2) ตรวจกลุ่มเป้าหมาย
- **Expected:** ลูกค้า PA สถานะ '1' ถูกเลือก *(automation ref: PA included iff status='1')*

---
### TC-009
- **Requirement ID:** FR-004 · **E2E:** FLOW-001 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** กรมธรรม์อุตสาหกรรม ปช. (IND) สถานะ '2' ถือว่ามีผลบังคับ ถูกเลือก
- **Technique/denominator:** Inforce DT IND 3/4 · **Atoms:** A-06
- **Preconditions:** ลูกค้า IND สถานะ '2'
- **Steps:** 1) รันแบตช์ 2) ตรวจกลุ่มเป้าหมาย
- **Expected:** ลูกค้า IND สถานะ '2' ถูกเลือก (IND ยอมรับ '1','2','3') *(automation ref: IND included iff status∈{1,2,3})*

---
### TC-010
- **Requirement ID:** FR-004 · **E2E:** FLOW-001 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** กรมธรรม์อุตสาหกรรม ขพ. (GOV) สถานะ '3' ถือว่ามีผลบังคับ ถูกเลือก
- **Technique/denominator:** Inforce DT GOV 4/4 · **Atoms:** A-06, A-07 (GOV in scope)
- **Preconditions:** ลูกค้า GOV สถานะ '3'
- **Steps:** 1) รันแบตช์ 2) ตรวจกลุ่มเป้าหมาย
- **Expected:** ลูกค้า GOV สถานะ '3' ถูกเลือก (ยืนยันขอบเขตรวม GOV) *(automation ref: GOV included iff status∈{1,2,3})*

---
### TC-011
- **Requirement ID:** FR-004 · **E2E:** FLOW-001 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** Medium
- **Title:** กรมธรรม์ IND/GOV สถานะนอก {1,2,3} (พ้นสภาพ) ถูกคัดออก
- **Technique/denominator:** Inforce DT negative · **Atoms:** A-06
- **Preconditions:** IND สถานะ '4' (พ้นสภาพ)
- **Steps:** 1) รันแบตช์ 2) ตรวจกลุ่มเป้าหมาย
- **Expected:** ถูกคัดออก ไม่ส่ง SMS *(automation ref: excluded when status∉{1,2,3})*

---
### TC-012
- **Requirement ID:** FR-005 · **E2E:** FLOW-001 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** ใช้เบอร์ mobile1 เป็นหลักเมื่อมีค่า
- **Technique/denominator:** phone BVA 1/3 · **Atoms:** A-08
- **Preconditions:** mobile1 มีค่า, mobile2 มีค่า
- **Steps:** 1) รันแบตช์ 2) ตรวจเบอร์ที่ใช้ส่ง
- **Expected:** ส่งไปที่ mobile1 *(automation ref: sent_phone = mobile1)*

---
### TC-013
- **Requirement ID:** FR-005 · **E2E:** FLOW-001 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** ใช้เบอร์ mobile2 เมื่อ mobile1 ว่าง
- **Technique/denominator:** phone BVA 2/3 · **Atoms:** A-08
- **Preconditions:** mobile1 ว่าง, mobile2 มีค่า
- **Steps:** 1) รันแบตช์ 2) ตรวจเบอร์ที่ใช้ส่ง
- **Expected:** ส่งไปที่ mobile2 *(automation ref: sent_phone = mobile2 when mobile1 empty)*

---
### TC-014
- **Requirement ID:** FR-005 · **E2E:** FLOW-001 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Title:** ลูกค้าไม่มีเบอร์โทรทั้ง mobile1 และ mobile2 → คัดออก
- **Technique/denominator:** phone BVA 3/3 (both empty) · **Atoms:** A-09
- **Preconditions:** mobile1 ว่าง, mobile2 ว่าง
- **Steps:** 1) รันแบตช์ 2) ตรวจกลุ่มเป้าหมาย
- **Expected:** ลูกค้าถูกคัดออก ไม่ส่ง SMS *(automation ref: excluded when both phones empty)*

---
### TC-015
- **Requirement ID:** FR-005 · **E2E:** FLOW-001/006 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** ใช้เบอร์ปัจจุบันจากข้อมูลกรมธรรม์ ไม่ใช่เบอร์จากประวัติรอบแรก และบันทึกเบอร์ที่ส่งจริง
- **Technique/denominator:** source-of-truth 1/1 · **Atoms:** A-10, A-49
- **Preconditions:** เบอร์ในประวัติรอบแรก ≠ เบอร์ปัจจุบันใน policy master (ลูกค้าเปลี่ยนเบอร์)
- **Steps:** 1) รันแบตช์ 2) ตรวจเบอร์ที่ส่งจริง + ประวัติที่บันทึก
- **Expected:** ส่งไปเบอร์ปัจจุบันจาก policy master และประวัติบันทึกเบอร์ที่ส่งจริง *(automation ref: sent_phone = policy master mobile, logged value = sent_phone)*

---
### TC-016
- **Requirement ID:** FR-006 · **E2E:** FLOW-001 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** กรมธรรม์ ORD ที่ติด Do Not Contact (remark '1') ถูกคัดออก
- **Technique/denominator:** Do-Not-Contact DT ORD · **Atoms:** A-11
- **Preconditions:** ORD Inforce แต่มี remark code '1'
- **Steps:** 1) รันแบตช์ 2) ตรวจกลุ่มเป้าหมาย
- **Expected:** คัดออก ไม่ส่ง SMS *(automation ref: ORD excluded when remark='1')*

---
### TC-017
- **Requirement ID:** FR-006 · **E2E:** FLOW-001 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** กรมธรรม์ IND/GOV/PA ที่ติด Do Not Contact (remark '4') ถูกคัดออก
- **Technique/denominator:** Do-Not-Contact DT IND/GOV/PA · **Atoms:** A-12
- **Preconditions:** IND (และ GOV, PA) Inforce แต่มี remark code '4'
- **Steps:** 1) รันแบตช์ 2) ตรวจกลุ่มเป้าหมาย
- **Expected:** คัดออกทั้ง IND/GOV/PA ที่ remark '4' *(automation ref: IND/GOV/PA excluded when remark='4')*

---
### TC-018
- **Requirement ID:** FR-007 · **E2E:** FLOW-001 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Title:** แปลงเลขกรมธรรม์เป็นหมายเลขลูกค้า (cardNo) ไม่พบ → ข้ามรายการ + บันทึก 'F' ไม่หยุดรอบ
- **Technique/denominator:** negative-branch cardNo · **Atoms:** A-13, A-14
- **Preconditions:** ลูกค้าที่บริการตรวจข้อมูลคืน "ไม่พบ cardNo"
- **Steps:** 1) รันแบตช์ 2) ตรวจสถานะรายการนี้และการทำงานต่อ
- **Expected:** รายการถูก skip, บันทึก `sent_status='F'` (sms_sent_date NULL), รอบไม่หยุด รายการถัดไปทำต่อ *(automation ref: row status='F', run continues)*

---

### 🔹 Flow FLOW-002 — Dual-channel LINE + App send/exclude truth table (DEDICATED)

> **Decision table divisor = 12 feasible rules** (LINE state {E02, E00-blocked, E00-notblocked, E13/empty} × APP state {E02, registered, E13/empty}). Send only for rules (a) TC-019 and (b) TC-022.

---
### TC-019  ⭐ DEDICATED (rule a)
- **Requirement ID:** FR-008, FR-009 · **E2E:** FLOW-002 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** ไม่พบการลงทะเบียนทั้ง LINE และ App (E02+E02) → ส่ง SMS
- **Technique/denominator:** DT rule 1/12 · **Atoms:** A-15, A-16, A-17
- **Preconditions:** LINE=E02 (ไม่พบ), App=E02 (ไม่พบ)
- **Steps:** 1) รันแบตช์ 2) ตรวจผลการส่ง
- **Expected:** ส่ง SMS ให้ลูกค้ารายนี้ *(automation ref: decision=SEND when LINE=E02 & APP=E02)*

---
### TC-020
- **Requirement ID:** FR-010 · **E2E:** FLOW-002 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** ไม่พบ LINE แต่ลงทะเบียน App แล้ว (E02 + registered) → คัดออก
- **Technique/denominator:** DT rule 2/12 · **Atoms:** A-19
- **Preconditions:** LINE=E02, App=registered
- **Steps:** 1) รันแบตช์ 2) ตรวจผล
- **Expected:** คัดออก ไม่ส่ง SMS (มีแอปแล้ว) *(automation ref: decision=EXCLUDE when APP registered)*

---
### TC-021
- **Requirement ID:** FR-011 · **E2E:** FLOW-002 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** Medium
- **Title:** ไม่พบ LINE แต่ผลตรวจ App เป็น Error (E02 + E13) → ข้าม + 'F'
- **Technique/denominator:** DT rule 3/12 · **Atoms:** A-21
- **Preconditions:** LINE=E02, App=E13
- **Steps:** 1) รันแบตช์ 2) ตรวจสถานะ
- **Expected:** skip ทันที ไม่ retry, บันทึก 'F', ทำรายการถัดไปต่อ *(automation ref: decision=SKIP 'F' on E13)*

---
### TC-022  ⭐ DEDICATED (rule b)
- **Requirement ID:** FR-009 · **E2E:** FLOW-002 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** ลงทะเบียน LINE แต่บล็อก LINE OA และยังไม่มี App (E00+block + E02) → ส่ง SMS
- **Technique/denominator:** DT rule 4/12 · **Atoms:** A-18
- **Preconditions:** LINE=E00 & isBlockLine=true, App=E02
- **Steps:** 1) รันแบตช์ 2) ตรวจผล
- **Expected:** ส่ง SMS (ช่องทาง LINE ใช้ไม่ได้จริงและยังไม่มีแอป) *(automation ref: decision=SEND when LINE blocked & APP=E02)*

---
### TC-023
- **Requirement ID:** FR-010 · **E2E:** FLOW-002 · **Type:** BUSINESS_RULE_TEST · **Priority:** Medium
- **Title:** LINE บล็อก แต่ลงทะเบียน App แล้ว (E00+block + registered) → คัดออก
- **Technique/denominator:** DT rule 5/12 · **Atoms:** A-19
- **Preconditions:** LINE=E00 & isBlockLine=true, App=registered
- **Steps:** 1) รันแบตช์ 2) ตรวจผล
- **Expected:** คัดออก (มีแอปแล้ว) *(automation ref: EXCLUDE, APP registered dominates)*

---
### TC-024
- **Requirement ID:** FR-011 · **E2E:** FLOW-002 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** Medium
- **Title:** LINE บล็อก แต่ผลตรวจ App Error (E00+block + E13) → ข้าม + 'F'
- **Technique/denominator:** DT rule 6/12 · **Atoms:** A-21
- **Preconditions:** LINE=E00 & isBlockLine=true, App=E13
- **Steps:** 1) รันแบตช์ 2) ตรวจสถานะ
- **Expected:** skip + 'F' *(automation ref: SKIP 'F' on E13)*

---
### TC-025
- **Requirement ID:** FR-010 · **E2E:** FLOW-002 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** ลงทะเบียน LINE โดยไม่บล็อก และยังไม่มี App (E00+notblock + E02) → คัดออก
- **Technique/denominator:** DT rule 7/12 · **Atoms:** A-20
- **Preconditions:** LINE=E00 & isBlockLine=false, App=E02
- **Steps:** 1) รันแบตช์ 2) ตรวจผล
- **Expected:** คัดออก (LINE ใช้งานได้อยู่แล้ว) *(automation ref: EXCLUDE when LINE not blocked)*

---
### TC-026
- **Requirement ID:** FR-010 · **E2E:** FLOW-002 · **Type:** BUSINESS_RULE_TEST · **Priority:** Low
- **Title:** LINE ไม่บล็อก และมี App แล้ว (E00+notblock + registered) → คัดออก
- **Technique/denominator:** DT rule 8/12 · **Atoms:** A-19, A-20
- **Preconditions:** LINE=E00 & isBlockLine=false, App=registered
- **Steps:** 1) รันแบตช์ 2) ตรวจผล
- **Expected:** คัดออก *(automation ref: EXCLUDE)*

---
### TC-027
- **Requirement ID:** FR-011 · **E2E:** FLOW-002 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** Low
- **Title:** LINE ไม่บล็อก แต่ผลตรวจ App Error (E00+notblock + E13) → ข้าม + 'F'
- **Technique/denominator:** DT rule 9/12 · **Atoms:** A-21
- **Preconditions:** LINE=E00 & isBlockLine=false, App=E13
- **Steps:** 1) รันแบตช์ 2) ตรวจสถานะ
- **Expected:** skip + 'F' *(automation ref: SKIP 'F')*

---
### TC-028
- **Requirement ID:** FR-011 · **E2E:** FLOW-002 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** Medium
- **Title:** ผลตรวจ LINE Error และไม่พบ App (E13 + E02) → ข้าม + 'F'
- **Technique/denominator:** DT rule 10/12 · **Atoms:** A-21
- **Preconditions:** LINE=E13, App=E02
- **Steps:** 1) รันแบตช์ 2) ตรวจสถานะ
- **Expected:** skip + 'F' (มีช่องทางใดตอบ Error = ข้าม) *(automation ref: SKIP 'F' on any E13)*

---
### TC-029  ⚠️ [ASSUMPTION — RQ]
- **Requirement ID:** FR-010, FR-011 · **E2E:** FLOW-002 · **Type:** EDGE_CASE · **Priority:** Low
- **Title:** ผลตรวจ LINE Error แต่ App ลงทะเบียนแล้ว (E13 + registered) — ลำดับความสำคัญ exclude vs skip
- **Technique/denominator:** DT rule 11/12 · **Atoms:** A-19, A-21
- **Preconditions:** LINE=E13, App=registered
- **Steps:** 1) รันแบตช์ 2) ตรวจสถานะ
- **Expected:** `[BLOCKED — RQ-006/precedence]` spec ไม่ระบุชัดว่าเมื่อ App registered (คัดออกปกติ) แต่ LINE=E13 (ต้อง skip+'F') อันไหนชนะ — ไม่ส่งแน่นอน แต่สถานะบันทึก (Exclude vs 'F') รอ SA ยืนยัน ห้ามเดา

---
### TC-030
- **Requirement ID:** FR-011 · **E2E:** FLOW-002 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** Low
- **Title:** ผลตรวจ Error ทั้งสองช่องทาง (E13 + E13) → ข้าม + 'F'
- **Technique/denominator:** DT rule 12/12 · **Atoms:** A-21
- **Preconditions:** LINE=E13, App=E13
- **Steps:** 1) รันแบตช์ 2) ตรวจสถานะ
- **Expected:** skip + 'F' *(automation ref: SKIP 'F')*

---
### TC-031
- **Requirement ID:** FR-012 · **E2E:** FLOW-002/004 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Title:** บริการตรวจสถานะล่มทั้งระบบ → retry สูงสุด 3 ครั้ง แล้วหยุดรอบ + แจ้งเตือน
- **Technique/denominator:** service-down retry 1/1 · **Atoms:** A-22, A-23
- **Preconditions:** บริการตรวจ LINE/APP ไม่ตอบสนองทั้งระบบ
- **Steps:** 1) รันแบตช์ 2) สังเกต retry 3) ตรวจการหยุดรอบ + email
- **Expected:** retry ≤3 ครั้งเว้นช่วง; ยังล้มเหลว → หยุดรอบ + ส่ง email แจ้งเตือน (ดู TC-055) *(automation ref: retry_count≤3 then round halt + email; interval per RQ-008)*

---
### TC-032
- **Requirement ID:** FR-009 · **E2E:** FLOW-002 · **Type:** EDGE_CASE · **Priority:** Low
- **Title:** ลูกค้าลงทะเบียน App หลังคัดกรองแต่ก่อนส่งจริง → ยอมรับได้ (ตรวจ ณ เวลาประมวลผล)
- **Technique/denominator:** timing edge · **Atoms:** A-61
- **Preconditions:** App=E02 ณ เวลาคัดกรอง; ลงทะเบียนภายหลังก่อนส่ง
- **Steps:** 1) รันแบตช์ 2) ตรวจผล
- **Expected:** ยอมรับการส่ง (เกณฑ์ตรวจ ณ เวลาประมวลผลเท่านั้น ไม่ถือเป็น defect) *(automation ref: decision fixed at screening time)*

---

### 🔹 Flow FLOW-003 — Dedup (in-round + cross-round)

---
### TC-033
- **Requirement ID:** FR-013 · **E2E:** FLOW-003 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** ลูกค้าที่เคยได้รับ SMS รอบสองสำเร็จแล้ว ไม่ถูกส่งซ้ำ
- **Technique/denominator:** cross-round dedup · **Atoms:** A-24, A-25
- **Preconditions:** มีประวัติ 'S' (policy_no+type+phone ตรง, sms_sent_date ไม่ว่าง)
- **Steps:** 1) รันแบตช์รอบถัดไป 2) ตรวจการส่ง
- **Expected:** ไม่ส่งซ้ำ *(automation ref: excluded when prior sms_sent_date IS NOT NULL match)*

---
### TC-034
- **Requirement ID:** FR-018.2 · **E2E:** FLOW-003 · **Type:** STATE_TRANSITION_TEST · **Priority:** High
- **Title:** กลไกกันส่งซ้ำนับเฉพาะรายการที่ส่งสำเร็จ (sms_sent_date ไม่ว่าง) — รายการ 'F' ไม่ถือว่าส่งแล้ว
- **Technique/denominator:** dedup guard · **Atoms:** A-25
- **Preconditions:** ลูกค้ามีประวัติ 'F' (sms_sent_date NULL) จากรอบก่อน
- **Steps:** 1) รันแบตช์ 2) ตรวจว่ารายการ 'F' ยังถูกพิจารณาส่งได้ (ไม่ถูกกันเพราะ 'F')
- **Expected:** รายการ 'F' ไม่ถูกนับเป็น "ส่งแล้ว"; ยังเข้าเกณฑ์ส่งได้ (แต่รอบ daily ไม่หยิบ 'F' อัตโนมัติ — ดู TC-059) *(automation ref: dedup filter = sms_sent_date IS NOT NULL only)*

---
### TC-035
- **Requirement ID:** FR-013.1 · **E2E:** FLOW-003 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** ลูกค้าคนเดียวมีหลายกรมธรรม์เข้าเงื่อนไขในรอบเดียว → ส่งเพียง 1 ข้อความ
- **Technique/denominator:** in-round group · **Atoms:** A-26
- **Preconditions:** ชื่อ-นามสกุล-เบอร์เดียวกัน มี 3 กรมธรรม์เข้าเงื่อนไข
- **Steps:** 1) รันแบตช์ 2) นับจำนวนข้อความที่ส่งให้ลูกค้ารายนี้
- **Expected:** ส่ง 1 ข้อความ *(automation ref: message_count per (name,surname,phone) = 1)*

---
### TC-036
- **Requirement ID:** FR-013.1 · **E2E:** FLOW-003 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** การเลือกกรมธรรม์ตัวแทนเป็นแบบกำหนดผลได้ (รายการเก่าสุด, เสมอ = เลขกรมธรรม์น้อยสุด)
- **Technique/denominator:** deterministic pick · **Atoms:** A-27
- **Preconditions:** ลูกค้ามีหลายกรมธรรม์ วันเริ่มสัญญาต่างกัน + กรณีเสมอ
- **Steps:** 1) รันแบตช์ 2) ตรวจว่ากรมธรรม์ใดเป็นตัวแทนที่ส่ง
- **Expected:** เลือกรายการเก่าสุด; ถ้าเสมอเลือก policy_no น้อยสุด *(automation ref: representative = min(contract_start) then min(policy_no))*

---
### TC-037
- **Requirement ID:** FR-013.1 · **E2E:** FLOW-003 · **Type:** BUSINESS_RULE_TEST · **Priority:** Medium
- **Title:** กรมธรรม์ที่ไม่ถูกเลือกเป็นตัวแทน ยังถูกบันทึกประวัติ (เพื่อ reconcile)
- **Technique/denominator:** non-selected log · **Atoms:** A-28
- **Preconditions:** ลูกค้าหลายกรมธรรม์ 1 ตัวแทน + n รายการที่เหลือ
- **Steps:** 1) รันแบตช์ 2) ตรวจประวัติของรายการที่ไม่ถูกเลือก
- **Expected:** รายการที่ไม่ถูกเลือกถูกบันทึกประวัติ (ตามแนว CSMS-001) ให้ reconcile ครบ *(automation ref: non-selected rows present in log)*

---
### TC-038
- **Requirement ID:** FR-013, FR-013.1 · **E2E:** FLOW-003 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** ลูกค้า 1 รายได้รับ SMS แคมเปญนี้ไม่เกิน 1 ข้อความตลอดแคมเปญ (รวมข้ามรอบ + Manual Fix)
- **Technique/denominator:** lifetime cap · **Atoms:** A-29 (SC-002)
- **Preconditions:** ลูกค้าเคยได้รับสำเร็จ แล้วมีกรมธรรม์ใหม่เข้าเงื่อนไขอีก + มี Manual Fix ทับช่วง
- **Steps:** 1) รันหลายรอบ + Manual Fix 2) นับข้อความรวม
- **Expected:** รวมได้ ≤ 1 ข้อความตลอดแคมเปญ (การส่งซ้ำ = 0) *(automation ref: lifetime message_count ≤ 1)*

---

### 🔹 Flow FLOW-001/006 — Message, variables, delivery file

---
### TC-039
- **Requirement ID:** FR-014 · **E2E:** FLOW-006 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** ดึงรูปแบบข้อความจากตารางกำหนดการข้อความ (รหัส '111')
- **Technique/denominator:** template source · **Atoms:** A-30
- **Preconditions:** มี template รหัส '111'
- **Steps:** 1) รันแบตช์ 2) ตรวจ template ที่ใช้
- **Expected:** ใช้ข้อความจากรหัส '111' *(automation ref: template_id used = '111')*

---
### TC-040
- **Requirement ID:** FR-014 · **E2E:** FLOW-006 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** Medium
- **Title:** ไม่พบข้อความรหัส '111' → ใช้รูปแบบจากตารางประเภทข้อความหลัก (fallback)
- **Technique/denominator:** template fallback · **Atoms:** A-31
- **Preconditions:** ไม่มี template รหัส '111'
- **Steps:** 1) รันแบตช์ 2) ตรวจ template ที่ใช้
- **Expected:** ใช้ fallback จากตารางประเภทข้อความหลัก *(automation ref: falls back to main message-type table)*

---
### TC-041
- **Requirement ID:** FR-015 · **E2E:** FLOW-006 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** แทนค่าตัวแปรครบ: ชื่อลูกค้า, มูลค่ารางวัล, ลิงก์ดาวน์โหลด — ไม่มี ${var} หลุด
- **Technique/denominator:** var substitution · **Atoms:** A-32, A-33, A-34, A-37 (SC-004)
- **Preconditions:** config REWARDS + LINE_LINK (Active) มีค่า; ลูกค้ามีชื่อ
- **Steps:** 1) รันแบตช์ 2) ตรวจข้อความจริงที่ส่ง
- **Expected:** ข้อความมีชื่อลูกค้า (var1), มูลค่ารางวัล (var2), ลิงก์ (var3) ครบ ไม่มีรูปแบบ `${var}` ค้าง *(automation ref: message contains no literal '${' ; var1/2/3 populated from Active config)*

---
### TC-042
- **Requirement ID:** FR-015.1 · **E2E:** FLOW-006 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Title:** ไม่พบชื่อผู้เอาประกัน (var1 ว่าง) → ข้ามรายการ + 'F', ไม่ส่งข้อความไร้ชื่อ
- **Technique/denominator:** negative-branch no-name · **Atoms:** A-35
- **Preconditions:** ลูกค้าไม่มีชื่อในข้อมูล
- **Steps:** 1) รันแบตช์ 2) ตรวจสถานะ + การส่ง
- **Expected:** skip + `sent_status='F'`, ไม่มีการส่งข้อความที่ไม่มีชื่อ *(automation ref: no send, row='F' when var1 empty)*

---
### TC-043
- **Requirement ID:** FR-016 · **E2E:** FLOW-001/004 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Title:** วันประมวลผลไม่มีค่า config แคมเปญที่ Active → หยุดทั้งรอบ + แจ้งเตือน
- **Technique/denominator:** no-config stop · **Atoms:** A-36
- **Preconditions:** ไม่มี config Active (จำนวนวัน/รางวัล/ลิงก์)
- **Steps:** 1) รันแบตช์ 2) ตรวจการหยุดรอบ + email
- **Expected:** หยุดทั้งรอบ + ส่ง email แจ้งเตือน (ดู TC-055) *(automation ref: round halt + email when no Active config)*

---
### TC-044  ⚠️ [BLOCKED partial — RQ-003]
- **Requirement ID:** FR-017 · **E2E:** FLOW-006 · **Type:** INTEGRATION_TEST · **Priority:** Medium
- **Title:** สร้างไฟล์ CSV UTF-8 ตามรูปแบบชื่อไฟล์มาตรฐาน (ปีพุทธ 2 หลัก)
- **Technique/denominator:** file format · **Atoms:** A-38, A-39
- **Preconditions:** มีกลุ่มเป้าหมายที่ส่ง
- **Steps:** 1) รันแบตช์ 2) ตรวจไฟล์ที่สร้าง
- **Expected:** ไฟล์ CSV เข้ารหัส UTF-8, ชื่อ `MKT_CSMS_MKTWelcomeNewCustApp_[YYMMDDhhmmss].csv` (YY = ปีพุทธ 2 หลัก). **[BLOCKED — RQ-003]** โครงคอลัมน์ภายในไฟล์ยังไม่ระบุใน spec → ตรวจได้เฉพาะชื่อ+encoding, layout รอ SA *(automation ref: filename regex + BOM/UTF-8 check)*

---
### TC-045
- **Requirement ID:** FR-017 · **E2E:** FLOW-006 · **Type:** INTEGRATION_TEST · **Priority:** Medium
- **Title:** นำส่งไฟล์ผ่านช่องทางกลาง (ESB → SMS Gateway)
- **Technique/denominator:** delivery channel · **Atoms:** A-40
- **Preconditions:** ไฟล์ CSV สร้างสำเร็จ
- **Steps:** 1) รันแบตช์ 2) ตรวจการนำส่ง
- **Expected:** ไฟล์ถูกส่งเข้า ESB → SMS Gateway *(automation ref: ESB handoff logged)*

---
### TC-046
- **Requirement ID:** FR-018.2 · **E2E:** FLOW-001 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Title:** ส่งไม่สำเร็จจาก SMS Gateway → บันทึกไม่สำเร็จ (ไม่มีวันที่ส่งสำเร็จ) เพื่อ Manual Fix
- **Technique/denominator:** gateway-fail · **Atoms:** A-63
- **Preconditions:** SMS Gateway ตอบส่งไม่สำเร็จ
- **Steps:** 1) รันแบตช์ 2) ตรวจสถานะ
- **Expected:** บันทึก `sent_status='F'`, sms_sent_date NULL → Manual Fix หยิบใหม่ได้ *(automation ref: row='F', sent_date NULL on gateway fail)*

---

### 🔹 Flow FLOW-006 — Logging & round-1 linkage

---
### TC-047
- **Requirement ID:** FR-018 · **E2E:** FLOW-006 · **Type:** INTEGRATION_TEST · **Priority:** Medium
- **Title:** บันทึกประวัติภาพรวมของรอบ (ข้อความจริง, ชื่อย่อประเภทข้อความ, เวลาสร้าง)
- **Technique/denominator:** campaign log · **Atoms:** A-41
- **Preconditions:** รอบส่งสำเร็จ
- **Steps:** 1) รันแบตช์ 2) ตรวจประวัติภาพรวม
- **Expected:** มีบันทึกข้อความจริง + ชื่อย่อประเภท + เวลาสร้าง *(automation ref: campaign-log row fields)*

---
### TC-048  ⚠️ [BLOCKED partial — RQ-003, RQ-007]
- **Requirement ID:** FR-018 · **E2E:** FLOW-006 · **Type:** INTEGRATION_TEST · **Priority:** Medium
- **Title:** บันทึกประวัติรายกรมธรรม์ครบทุกฟิลด์
- **Technique/denominator:** per-policy log · **Atoms:** A-42, A-65
- **Preconditions:** รายการส่งสำเร็จ
- **Steps:** 1) รันแบตช์ 2) ตรวจประวัติรายกรมธรรม์
- **Expected:** มีฟิลด์ เลขกรมธรรม์/ประเภท/ชื่อ-นามสกุล/cardNo/วันเริ่มสัญญา/วันที่ส่ง/เบอร์ที่ส่งจริง/ข้อความจริง/credit_amount/ผู้สร้าง-แก้ไข. **[BLOCKED — RQ-003]** ลำดับ/รายชื่อฟิลด์เป๊ะ (+field #7 ที่หาย) รอ SA; **[BLOCKED — RQ-007]** ค่า credit_amount รอยืนยัน

---
### TC-049
- **Requirement ID:** FR-018 · **E2E:** FLOW-006 · **Type:** INTEGRATION_TEST · **Priority:** Medium
- **Title:** บันทึกผลตอบกลับจากช่องทางกลาง (refer_no + สถานะการส่ง)
- **Technique/denominator:** delivery-result log · **Atoms:** A-43
- **Preconditions:** ช่องทางกลางตอบกลับ refer_no
- **Steps:** 1) รันแบตช์ 2) ตรวจประวัติ
- **Expected:** บันทึก refer_no + สถานะการส่ง *(automation ref: refer_no + status persisted)*

---
### TC-050  ⚠️ [ASSUMPTION — RQ-001]
- **Requirement ID:** FR-018 · **E2E:** FLOW-006 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** map รหัสประเภทกรมธรรม์ในประวัติครบ 4 ประเภท ('O'→ORD, 'I'→IND, 'G'→GOV, 'P'→PA)
- **Technique/denominator:** code-map 4/4 · **Atoms:** A-44
- **Preconditions:** รายการแต่ละประเภท
- **Steps:** 1) รันแบตช์ 2) ตรวจค่าประเภทในประวัติ
- **Expected:** ประเภทถูก map ตรงตัวครบ 4. **[ASSUMPTION — RQ-001]** ตัวอักขระรหัสจริงในระบบต้นทาง ('O/I/G/P' หรือ '0/1') ยังไม่ยืนยัน — ห้ามเดา, ยืนยันในขั้น plan

---
### TC-051  ⭐ DEDICATED ⚠️ [BLOCKED partial — RQ-009]
- **Requirement ID:** FR-018.1 · **E2E:** FLOW-006 · **Type:** INTEGRATION_TEST · **Priority:** High
- **Title:** ประวัติรอบสองมี ID เชื่อมโยงกลับรายการรอบแรก (CSMS-001) ที่เป็นต้นทาง
- **Technique/denominator:** round-1 linkage · **Atoms:** A-45 (SC-006)
- **Preconditions:** รายการมาจากประวัติรอบแรกที่ระบุได้
- **Steps:** 1) รันแบตช์ 2) ตรวจ ID อ้างอิงในประวัติรอบสอง
- **Expected:** ประวัติรอบสองมี ID ชี้กลับรายการรอบแรกถูกต้อง 100% (ตรวจย้อนกลับได้). **[BLOCKED — RQ-009]** ชื่อฟิลด์/กลไก linkage ยังไม่ระบุ — ตรวจการมี+ความถูกต้อง, field name รอ SA *(automation ref: round2 row has non-null FK matching a round-1 record)*

---
### TC-052
- **Requirement ID:** FR-018.2 · **E2E:** FLOW-006 · **Type:** STATE_TRANSITION_TEST · **Priority:** High
- **Title:** รายการส่งสำเร็จ → บันทึก sms_sent_date = วันที่ส่ง และ sent_status = 'S'
- **Technique/denominator:** state SENT · **Atoms:** A-46
- **Preconditions:** รายการส่งสำเร็จ
- **Steps:** 1) รันแบตช์ 2) ตรวจสถานะแถว
- **Expected:** sms_sent_date มีค่า, sent_status='S' *(automation ref: row S with sent_date)*

---
### TC-053
- **Requirement ID:** FR-018.2 · **E2E:** FLOW-006 · **Type:** STATE_TRANSITION_TEST · **Priority:** High
- **Title:** รายการไม่สำเร็จ/ถูก skip → sms_sent_date = NULL และ sent_status = 'F'
- **Technique/denominator:** state SKIPPED · **Atoms:** A-47
- **Preconditions:** รายการ skip (เช่น E13/ไม่มีชื่อ/gateway fail)
- **Steps:** 1) รันแบตช์ 2) ตรวจสถานะแถว
- **Expected:** sms_sent_date NULL, sent_status='F' *(automation ref: row F, sent_date NULL)*

---
### TC-054
- **Requirement ID:** FR-018.2 · **E2E:** FLOW-006 · **Type:** INTEGRATION_TEST · **Priority:** Medium
- **Title:** ตาราง WELCOME_NEW_CUST_APP มีฟิลด์ sent_status (เพิ่มใหม่เฉพาะ batch นี้)
- **Technique/denominator:** schema field · **Atoms:** A-48
- **Preconditions:** ตารางถูกสร้าง/ปรับสำหรับ batch นี้
- **Steps:** 1) ตรวจโครงตาราง
- **Expected:** มีคอลัมน์ sent_status ('S'/'F') *(automation ref: column exists)*

---

### 🔹 Flow FLOW-004 — Round-failure notification

---
### TC-055
- **Requirement ID:** FR-019 · **E2E:** FLOW-004 · **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Title:** ความล้มเหลวระดับรอบ (สกัดข้อมูล/สร้างไฟล์ไม่ได้) → email แจ้ง IT + User ทันที ระบุ batch + ขั้นตอนที่ล้ม
- **Technique/denominator:** failure-notify · **Atoms:** A-50, A-51
- **Preconditions:** จำลองความล้มเหลวระดับรอบ
- **Steps:** 1) รันแบตช์ 2) ตรวจ email ที่ส่ง
- **Expected:** email ถึงทีม IT Development + กลุ่มผู้ใช้ ทันที ระบุชื่อ batch (เช่น BATCH-CSMS-WELCOME-APP) + ขั้นตอนที่ล้มเหลว *(automation ref: email recipients + subject/body contain batch name + failed step)*

---
### TC-056  ⚠️ [BLOCKED partial — RQ-004]
- **Requirement ID:** FR-019 (SC-005) · **E2E:** FLOW-004 · **Type:** BUSINESS_RULE_TEST · **Priority:** Medium
- **Title:** email แจ้งเตือนความล้มเหลวถูกส่งภายใน 15 นาทีนับจากตรวจพบ
- **Technique/denominator:** SLA timing · **Atoms:** A-52, A-53
- **Preconditions:** เกิดความล้มเหลวระดับรอบ ณ เวลา T
- **Steps:** 1) จับเวลา T→เวลาส่ง email
- **Expected:** email ภายใน 15 นาที (SC-005). **[BLOCKED — RQ-004]** FR-019 ระบุเพียง "ตาม SLA มาตรฐาน" ขัดกับ SC-005 15 นาที — เกณฑ์เวลาเป๊ะรอ SA ยืนยัน

---

### 🔹 Flow FLOW-005 — Manual Fix + central daily report (merged FR-020.2)

---
### TC-057  ⭐ DEDICATED (merged FR-020.2 — Manual-Fix behavior)
- **Requirement ID:** FR-020, FR-020.1 · **E2E:** FLOW-005 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** Manual Fix ประมวลผลเฉพาะรายการค้าง (sms_sent_date ว่าง) ในช่วงวันที่ที่เลือก
- **Technique/denominator:** Manual-Fix scope · **Atoms:** A-53, A-56
- **Preconditions:** ช่วงวันที่มีทั้งรายการ 'S' และรายการค้าง (sent_date NULL)
- **Steps:** 1) IT Admin เลือกช่วงวันที่บน Dashboard กลาง 2) สั่ง Manual Fix 3) ตรวจการส่ง
- **Expected:** ส่งเฉพาะรายการค้าง (sms_sent_date IS NULL) *(automation ref: Manual Fix picks only NULL sent_date rows)*

---
### TC-058
- **Requirement ID:** FR-020 · **E2E:** FLOW-005 · **Type:** STATE_TRANSITION_TEST · **Priority:** High
- **Title:** Manual Fix ต้องไม่ส่งซ้ำรายการที่สำเร็จแล้ว (สถานะ 'S')  [invalid transition #14]
- **Technique/denominator:** forbidden transition 1/2 · **Atoms:** A-54 (SC-007)
- **Preconditions:** ช่วงวันที่มีรายการ 'S'
- **Steps:** 1) สั่ง Manual Fix ทับช่วงนั้น 2) ตรวจการส่ง
- **Expected:** ไม่ส่งซ้ำรายการ 'S' *(automation ref: no resend where sms_sent_date IS NOT NULL)*

---
### TC-059
- **Requirement ID:** FR-020.1 · **E2E:** FLOW-005 · **Type:** STATE_TRANSITION_TEST · **Priority:** High
- **Title:** รายการ 'F' ซ่อมผ่าน Manual Fix เท่านั้น — รอบ daily ต้องไม่ดึง 'F' มา retry อัตโนมัติ  [invalid transition #13]
- **Technique/denominator:** forbidden transition 2/2 · **Atoms:** A-55
- **Preconditions:** มีรายการ 'F' ค้างจากรอบก่อน
- **Steps:** 1) รันรอบ daily ปกติ 2) ตรวจว่ารายการ 'F' เก่าไม่ถูกดึงมา retry
- **Expected:** รอบ daily ไม่ retry 'F' อัตโนมัติ (คงไว้เพื่อ audit); ซ่อมได้เฉพาะ Manual Fix *(automation ref: daily run does not pick prior 'F' rows)*

---
### TC-060  ⭐ DEDICATED (merged FR-020.2 — date-range semantics)
- **Requirement ID:** FR-020.2 · **E2E:** FLOW-005 · **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Title:** ช่วงวันที่ Manual Fix = วันประมวลผลของรอบที่ re-run → หากลุ่มจากรอบแรกที่ส่งสำเร็จ = วันที่เลือก − N (ใช้ค่า N ปัจจุบัน)
- **Technique/denominator:** date-range semantics · **Atoms:** A-57, A-58
- **Preconditions:** เลือกวันประมวลผล D; config N ปัจจุบัน = 20
- **Steps:** 1) เลือกวันที่ D 2) สั่ง Manual Fix 3) ตรวจกลุ่มเป้าหมายที่ดึง
- **Expected:** กลุ่มเป้าหมาย = ประวัติรอบแรกที่ sms_sent_date = D − 20 (ใช้ค่า N ปัจจุบันจาก config, ไม่เก็บประวัติ N) *(automation ref: target cohort sent_date = selected_date − current N)*

---
### TC-061
- **Requirement ID:** FR-020.2, FR-013 · **E2E:** FLOW-005 · **Type:** EDGE_CASE · **Priority:** Medium
- **Title:** ค่าจำนวนวันถูกเปลี่ยน (20→15) ระหว่างแคมเปญ → กันส่งซ้ำยังทำงาน; กลุ่มที่ถูกข้ามซ่อมผ่าน Manual Fix
- **Technique/denominator:** config-change edge · **Atoms:** A-64
- **Preconditions:** เปลี่ยน N กลางคัน ทำให้บางกลุ่มถูกข้าม/นับซ้ำ
- **Steps:** 1) รันรอบหลังเปลี่ยน N 2) ใช้ Manual Fix ซ่อมกลุ่มที่ถูกข้าม 3) ตรวจการส่งซ้ำ
- **Expected:** ไม่มีการส่งซ้ำ (กลไกกันส่งซ้ำป้องกัน); กลุ่มที่ถูกข้ามได้รับครบผ่าน Manual Fix *(automation ref: 0 duplicates, skipped group covered)*

---
### TC-062  ⭐ DEDICATED (merged FR-020.2 — central daily report) ⚠️ [BLOCKED partial — RQ-002]
- **Requirement ID:** FR-020.2 (report) · **E2E:** FLOW-006 · **Type:** INTEGRATION_TEST · **Priority:** High
- **Title:** ผลของแคมเปญปรากฏในรายงานสรุปประจำวันกลางของ CSMS: ยอดรวม/สำเร็จ/ไม่สำเร็จ/ตัดออกตามเหตุผล + breakdown ตามประเภท (ORD/IND/GOV/PA)
- **Technique/denominator:** report breakdown · **Atoms:** A-59, A-60
- **Preconditions:** รันรอบที่มีทุกกรณี (ส่ง/skip/ตัดออกหลายเหตุ)
- **Steps:** 1) รันแบตช์ 2) เปิดรายงานกลางประจำวัน 3) ตรวจตัวเลข
- **Expected:** รายงานแสดง: จำนวนประมวลผลทั้งหมด, ส่งสำเร็จ ('S'), ไม่สำเร็จ/skip ('F'), ตัดออกแยกเหตุผล (Do Not Contact / ลงทะเบียนแล้ว / ซ้ำในรอบ / เคยส่งแล้ว) พร้อม breakdown ORD/IND/GOV/PA; ไม่มี threshold alert แยก. **[BLOCKED — RQ-002]** requirement รายงานถูกรวมใน FR-020.2 ไม่มี FR เป็นของตัวเอง → ยืนยันขอบเขต/รูปแบบรายงานกับ SA *(automation ref: report row for campaign with 4-type breakdown)*

---

### 🔹 Flow FLOW-001 — Boundary/edge

---
### TC-063
- **Requirement ID:** FR-002 (EC) · **E2E:** FLOW-001 · **Type:** EDGE_CASE · **Priority:** Medium
- **Title:** วันอ้างอิงรอบแรกไม่มีข้อมูลเลย (รอบแรกล้มเหลวเมื่อ N วันก่อน) → รอบนี้ไม่มีเป้าหมาย ถือว่าจบปกติ
- **Technique/denominator:** empty-cohort edge · **Atoms:** A-62
- **Preconditions:** ไม่มีประวัติรอบแรกที่ sms_sent_date = วันประมวลผล − N
- **Steps:** 1) รันแบตช์ 2) ตรวจผลรอบ
- **Expected:** ไม่มีกลุ่มเป้าหมาย, รอบจบตามปกติ (ไม่ส่ง email แจ้งล้มเหลว) *(automation ref: 0 targets, no failure email)*

---

## 3. Coverage Analysis
- **Covered flows:** FLOW-001..006 all covered.
- **Partially covered flows:** none (all have ≥1 positive + ≥1 negative where a fail-path exists).
- **Not covered flows:** none.
- **Missing edge cases:** none identified vs spec Edge Cases (all 8 mapped: E13→TC-021/24/27/28/30, cardNo→TC-018, mobile→TC-012/13, phone-change→TC-015, late-App→TC-032, multi-policy→TC-035, gateway-fail→TC-046, N-change→TC-061, empty-round-1→TC-063).
- **Missing negative scenarios:** none (each fail branch has a negative TC).
- **Technique coverage (divisors):** Dual-channel DT **12/12** · Inforce-by-type DT **ORD/IND/GOV/PA + negative = complete** · day-count BVA **3/3** · phone BVA **3/3** · state-transition **12 valid + 2 forbidden = complete**.
- **NFR flagged (out of scope):** RQ-005 security/PII → `[NFR — route to pentest track]` (see NFR-routing.md). Volume ~1,000/day → perf track.

## 4. Traceability Matrix (FR → TC)
| FR | TC |
|---|---|
| FR-001 | TC-001 |
| FR-002 | TC-002, TC-003, TC-004, TC-063 |
| FR-003 | TC-005, TC-006 |
| FR-004 | TC-007, TC-008, TC-009, TC-010, TC-011 |
| FR-005 | TC-012, TC-013, TC-014, TC-015 |
| FR-006 | TC-016, TC-017 |
| FR-007 | TC-018 |
| FR-008 | TC-019 |
| FR-009 | TC-019, TC-022, TC-032 |
| FR-010 | TC-020, TC-023, TC-025, TC-026 |
| FR-011 | TC-021, TC-024, TC-027, TC-028, TC-029, TC-030 |
| FR-012 | TC-031 |
| FR-013 | TC-033, TC-038, TC-061 |
| FR-013.1 | TC-035, TC-036, TC-037, TC-038 |
| FR-014 | TC-039, TC-040 |
| FR-015 | TC-041 |
| FR-015.1 | TC-042 |
| FR-016 | TC-043 |
| FR-017 | TC-044, TC-045 |
| FR-018 | TC-047, TC-048, TC-049, TC-050 |
| FR-018.1 | TC-051 |
| FR-018.2 | TC-034, TC-046, TC-052, TC-053, TC-054 |
| FR-019 | TC-055, TC-056 |
| FR-020 | TC-057, TC-058 |
| FR-020.1 | TC-057, TC-059 |
| FR-020.2 | TC-060, TC-061, TC-062 |

## 5. Risk Highlights (for 05)
- **High-risk business gaps:** send/exclude truth table (SC-003 wrong-group=0) — TC-019..030; lifetime dedup (SC-002 =0) — TC-033/38; round-1 linkage (SC-006 100%) — TC-051; var substitution (SC-004) — TC-041.
- **Blocked expecteds needing SA before execution:** TC-029 (precedence), TC-044/048 (layout RQ-003), TC-050 (code RQ-001), TC-051 (linkage field RQ-009), TC-056 (SLA RQ-004), TC-062 (report FR# RQ-002).
- **Integration-heavy:** dual-channel service (~1,000/day) TC-031; ESB→Gateway TC-045; central report TC-062.
