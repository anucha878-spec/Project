# Implementation Plan: Batch ส่ง SMS "Grace Period 7 วันก่อนหมดระยะเวลาผ่อนผัน" — โมดูล CSMS

**Branch**: `004-batch-gp7-sms` | **Date**: 2026-07-11 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/004-batch-gp7-sms/spec.md`

## Summary

Batch งานที่สามในระบบ epirusapp (CSMS) — batch พี่น้องของ 002/003 รันอัตโนมัติทุกวัน 10:00 น. — คัดกรองกรมธรรม์ ORD/IND/PA สถานะ Inforce ที่เหลือ 7 วันปฏิทินก่อน `grace_end_date` จาก `ili_policy_master`/`ili_notification_letter` (DWConsole), ตัด Do Not Contact (`ili_policy_remark`), ตรวจสถานะลงทะเบียน LINE Ocean Connect **เฉพาะ channel เดียว** (ต่างจาก 003 ที่เช็คคู่ LINE+APP) ผ่าน `msa-custlookup`, กันส่งซ้ำด้วย key `policy_no`+`due_date` (ต่างจาก 002/003 ที่กันซ้ำรายลูกค้า), ส่งทีละรายการผ่าน SMS Gateway V3 (`sendSmsOtp`, ไม่มี CSV), บันทึกผลลงตารางใหม่ `SMS_GRACE_PERIOD_LOG`, แจ้งเตือนทีม IT/User ผ่าน OMail เมื่อล้มเหลวระดับรอบ, รองรับ Manual Fix ผ่าน Admin Dashboard เดิม

**สถานการณ์พิเศษที่ต้องจัดการ**: มี implementation เดิม (`SmsGracePeriodCamelBean.java`, GRACE03, Task #73589 เดียวกัน) เขียนไว้แล้วตั้งแต่ 2026-06-22/29 ก่อน spec นี้จะมีอยู่ — wire เข้า cron จริงทุก environment แต่ `autoStart=false` ทุกที่ (ยังไม่ทำงานจริง) และแตกต่างจาก spec 004 หลายจุด (ดู research.md R-002) **ผู้ใช้ยืนยันแล้ว (2026-07-11): spec 004 เป็นของจริง โค้ดเดิมต้องแก้ให้ตรง ไม่ใช่แก้ spec ตามโค้ด**

**Technical approach**: **แก้ไข `SmsGracePeriodCamelBean.java` ที่มีอยู่แล้วในที่เดิม** (ไม่สร้างไฟล์ใหม่แยก) ให้ตรงกับ spec 004 ทุกข้อ — reuse ได้ตรงๆ: Camel/Quartz wiring pattern, `SmsFileGatewayWsClientFactory.sendSmsOtp`, batch test guard (T23), `MsaCustlookupClient.queryChannelStatus()` (เปิดเป็น public, เรียกเฉพาะ channel LINE), `resolveActiveCampaignLink()`-style `cf_catalog LINE_LINK` lookup (ของเดิมมีอยู่แล้วสำหรับ var5 — **ยังใช้ได้ตรงๆ** หลังยืนยันข้อความจริงมี 5 ตัวแปรรวมลิงก์) จุดที่ต้องเขียนใหม่/รื้อ: (1) SQL audience ใหม่ที่รวม Do Not Contact filter (ของเดิมไม่มี) + ดึงจำนวนเบี้ยที่ต้องชำระเพิ่ม (2) ตารางบันทึกผลใหม่ `SMS_GRACE_PERIOD_LOG` แทนที่ `all_sms_sent`/`csms_log` เดิม (3) dedup key เปลี่ยนจาก policy_no+category เป็น policy_no+due_date (4) `var4` เปลี่ยนความหมายจาก `due_end_date` (ของเดิม) เป็น `grace_end_date` (ยืนยันแล้ว) — ตัวแปรอื่น (var1/var2/var3/var5) ใกล้เคียงโครงเดิมมาก (5) เพิ่ม mobile1/mobile2 skip+log ที่ของเดิมไม่มี (6) แก้ cron เป็น `0 0 10 * * ?` (7) เพิ่ม Manual Fix wiring ใน `SmsMonitorAction` ที่ของเดิมไม่มีเลย

## Technical Context

**Language/Version**: Java 7 — เหมือน 002/003 ทุกประการ (โมดูลเดียวกัน, ยืนยันแล้วจาก 002 runtime log)

**Primary Dependencies**:
- Spring 3.2.2.RELEASE, Apache Camel 2.11.1 (เหมือน 002/003)
- `thaisamut.smsgatewaywsclient:smsgatewaywsclient:0.9` → `SmsGatewayMessageV3ESBService` (`sendSmsOtp`) — reuse ตรงๆ, ต้อง provision `mappedSystemName` ใหม่ (research.md R-006)
- `thaisamut.omailwsclient:omailwsclient:0.6` → `OmailWsSendingV2ESBService` — reuse ตรงๆ
- `MsaCustlookupClient` (มีอยู่แล้ว, ใช้ร่วมกับ 002/003/GRACE03 เดิม) — ต้องเปิด `queryChannelStatus()` เป็น public หรือเพิ่ม wrapper LINE-only (research.md R-003, contracts/reuse-notes.md)
- JPA/Hibernate, Liquibase, Gson — เหมือน 002/003

**Storage**:
- PostgreSQL (epirusapp DB หลัก) — ตารางใหม่ `SMS_GRACE_PERIOD_LOG` (ดู data-model.md), row ใหม่ใน `sms_category` (code `116`, `MKTGracePeriod` — ยืนยันแล้วโดยผู้ใช้ 2026-07-11, แทนที่ข้อเสนอ `115` เดิม), `cf_catalog` เกี่ยวข้อง 3 config_type (`config_value1='CSMS_SGP_GracePeriod'` เดียวกันทั้งหมด) แต่**ต้อง insert ใหม่แค่ 1 แถว**: `DATE_COUNT` (convention เดียวกับ 002/003, FR-003, ค่า `7`) — `LINE_LINK` (ลิงก์ QR Code ชำระเบี้ย `${var5}`, FR-010a) และ `TIME_SENT` (`11:00`) **seed ไว้แล้วจริง** ใน `db-changelog-birthday-campaign-1.0.xml` ตรวจยืนยันจาก repo จริงแล้ว (2026-07-14) ไม่ต้อง insert ซ้ำ
- dwconsol — อ่านจาก `public.ili_policy_master`, `public.ili_notification_letter`, `public.ili_policy_remark` (SQL ใหม่ทั้งหมด ต่างจาก 002/003/GRACE03 เดิมเพราะเงื่อนไขวันต่างกัน — grace_end_date - 7 วันปฏิทิน) **รวมถึงต้องดึงชื่อผู้เอาประกันภัยและจำนวนเบี้ยที่ต้องชำระ** (`${var2}`/`${var3}`) เพิ่มจากที่ query เดิม

**Testing**: JUnit 4.10 (เหมือน 002/003) — แยก pure logic (dedup predicate, LINE-only eligibility decision, mobile1/mobile2 fallback) เข้า `ejbweb/src/test` ตาม convention เดิม — [NEEDS CLARIFICATION: เหมือน 002/003 — ยกระดับ coverage ให้ตรง Gate G10 (≥80%) หรือไม่ ยังไม่มีคำตอบผูกมัดจาก Platform Owner]

**Target Platform**: JBoss/WildFly (epirusapp WAR) + Apache Karaf (esb-fnd-osgi) — เหมือน 002/003

**Project Type**: Scheduled batch job ภายใน monolith เดิม (แก้ไข bean ที่มีอยู่แล้ว ไม่ใช่ service ใหม่/แยก deploy)

**Performance Goals**: SC-001 — 5 นาที สำหรับกรมธรรม์สูงสุด 10,000 รายการ/รอบ — **ความเสี่ยง**: SMS Gateway V3 ส่งได้ทีละ 1 รายการต่อ 1 HTTP call synchronous (ไม่มี bulk) เหมือนที่ 002/003 กังวลไว้ — ยังไม่มี throughput จริงจาก production ของ 002/003 มาประมาณการได้ — [NEEDS CLARIFICATION ไม่ใช่ blocker: วัด throughput จริงจาก 002/003 ก่อน implement 004 ถ้าเป็นไปได้ เพื่อประเมินว่า 10,000 รายการ/5 นาทีเป็นไปได้จริงหรือต้องปรับ SC-001]

**Constraints**:
- ไม่สร้างไฟล์ CSV — ส่งทีละรายการผ่าน SMS Gateway V3 `sendSmsOtp` (Clarification 2026-07-11, ตัดจาก spec เดิมที่อ้างอิงเอกสารต้นทาง V2/file-based)
- ต้อง**รื้อ**โค้ดเดิม GRACE03 ที่ผูกกับ `all_sms_sent`/`csms_log` ออกทั้งหมด แทนด้วย `SMS_GRACE_PERIOD_LOG` — ห้ามเหลือ dual-write หรือโค้ดตายค้าง
- `sms_category_code` = `116` ยืนยันแล้ว (`115` จองไว้ให้ 005-batch-birthday-sms แยกต่างหาก, R-005) — `mappedSystemName` ยืนยันแล้ว = `CSMS_SGP_GracePeriod` (reuse ค่าเดิมของ GRACE03 ตรงๆ, R-006, ปิด 2026-07-14) — เกณฑ์ `E00`+`isBlockLine=true` ยืนยันแล้วโดย SA = **SEND** (ต้องส่ง SMS เพราะลูกค้าบล็อก LINE OA รับแจ้งเตือนผ่าน LINE ไม่ได้, R-004, ปิด 2026-07-14)
- Cron ต้องตั้ง `0 0 10 * * ?` ตรง FR-001 — ห้าม copy ค่า `0 0 11 * * ?` ของโค้ดเดิม (บทเรียนเดียวกับ cron bug ของ 002 ที่ 003 เจอ)

**Scale/Scope**: Daily batch, กรมธรรม์ ORD/IND/PA สถานะ Inforce ที่เหลือ 7 วันปฏิทินก่อน `grace_end_date` — สูงสุด 10,000 รายการ/รอบ (SC-001)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Constitution ปัจจุบัน (v1.0.0) เขียนขึ้นสำหรับแพลตฟอร์มจัดการแคมเปญ SMS ที่มนุษย์เป็นผู้สร้าง/อนุมัติ (Campaign Creator → Approver → Send) เช่นเดียวกับที่ 002/003 พบมาก่อน — feature 004 เป็น **batch แจ้งเตือนอัตโนมัติของระบบเดิม (CSMS)** แบบเดียวกับ 002/003 ทุกประการ (batch พี่น้องในโมดูลเดียวกัน) จึงยึด **precedent การตัดสินใจของ 002/003 ทั้งหมด** (ตัดสินใจโดย Aor, 2026-07-09, ยืนยันซ้ำใน 003 2026-07-11) แทนที่จะเปิดประเด็นใหม่ซ้ำ:

| Principle | สถานะ | รายละเอียด |
|---|---|---|
| I. PDPA-First | ✅ **ยึด precedent 002/003** | SMS นี้เป็น marketing แจ้งเตือนชำระเบี้ยฯ, ไม่มี inbound SMS reply รองรับ — ใช้เบอร์ Call Center `1503` ที่มีอยู่ในข้อความ SMS ตัวอย่างแล้ว (spec.md User Story 1) เป็นช่องทาง opt-out โดยไม่ต้องเพิ่ม FR/table/process ใหม่ |
| II. Secure SMS Delivery | ✅ **ปิดแล้ว (2026-07-11)** / ⚠️ 1 ข้อเหมือน 002/003 | ข้อความมี `policy_no` ใน SMS body (`${var1}`) — เดิมเป็น gap ใหม่ที่ 002/003 ไม่เคยเจอ (ข้อความของเขาไม่มี policy_no) แต่**ปิดแล้ว**: FR-010c บังคับให้ `policy_no` ต้องผ่านการ marking (masking บางส่วนตามประเภทกรมธรรม์) ก่อนใส่ในข้อความเสมอ — ใช้มาตรฐาน Common Validation ที่มีอยู่แล้วในระบบ (`formatPolicyNoMarking`, พบใน `cisapp/.../SendSmsCustomerAge20YearComponent.java` — มี precedent ตรงสำหรับเหตุผลนี้พอดี ครอบคลุม ORD/IND/PA/GOV) จึงไม่ใช่ "เลขกรมธรรม์เต็ม" ในเนื้อความอีกต่อไป ตรงตาม non-negotiable rule — (a) Infobip เป็น approved provider — ไม่ verify ซ้ำ (ใช้ provider เดียวกับ 002/003) (b) ปริมาณสูงสุด 10,000/รอบ ต่ำกว่า threshold constitution (>10,000 นอกเวลาทำการ) แต่ใกล้เคียงมากกว่า 002/003 (~1,000/วัน) — ควรมี monitoring แจ้งเตือนถ้าปริมาณผิดปกติ (ยังเป็น minor gap ที่เหลือ ไม่ blocking) |
| III. RBAC / Separation of Duties | ✅ **ยกเว้นแล้ว (ยึด precedent 002/003)** | system-triggered batch อัตโนมัติจาก config Active — ไม่ใช่ human-authored campaign — role model `SYSTEM_BATCH`(auto)+`IT_ADMIN`(re-run เท่านั้น) ถูกต้องตามที่ตั้งใจ |
| IV. Audit Trail | ✅ **ยกเว้นแล้ว (ยึด precedent 002/003)** | `SMS_GRACE_PERIOD_LOG` เก็บ `mobile_no`/`sms_message` (มี policy_no ในเนื้อความ) เป็น plain field — เป็น pattern เดียวกับตาราง log อื่นของ CSMS ทั้งหมด — ยอมรับเป็น legacy architecture exception เหมือน 002/003 |
| V. Secure-by-Default Dev | ➡️ บังคับใช้ตอน implement | Gates G1–G17 ต้อง pass ก่อน merge/deploy — สถานะ pipeline เดียวกับ 002/003 (ไม่มี coverage tooling ในระบบปัจจุบัน) |

**สรุป**: ทั้ง 4 ข้อ (I, II, III, IV) ปิดแล้ว — I/III/IV ยึด precedent ของ 002/003; II ปิดด้วยการเพิ่ม FR-010c (marking policy_no ตามมาตรฐาน Common Validation ที่มีอยู่แล้วในระบบ, 2026-07-11) แทนที่จะเปิดเป็น gap ให้ Platform Owner ตัดสินใจ

**Gate decision**: ✅ **PASS** — ไม่มี Constitution gap เหลือให้ Platform Owner/DPO ตัดสินใจใหม่ พร้อมเข้า Phase 2 (`/speckit-tasks`) ได้ — เหลือเพียง monitoring/anomaly-detection (Principle II ข้อ b) เป็น minor recommendation ไม่ blocking

**Re-check หลัง Phase 1 (Post-Design)**: `data-model.md`/`contracts/reuse-notes.md` สอดคล้องกับทั้ง 4 ข้อที่ปิดแล้ว — ไม่มีอะไรค้าง

## Project Structure

### Documentation (this feature)

```text
specs/004-batch-gp7-sms/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md         # Phase 1 output
├── quickstart.md         # Phase 1 output
├── contracts/            # Phase 1 output
│   └── reuse-notes.md    # อ้างอิง contracts ของ 002/003 (msa-custlookup, SMS Gateway V3, OMail) — ไม่มี API ใหม่
└── tasks.md              # Phase 2 output (/speckit-tasks — ยังไม่สร้าง)
```

### Source Code (repository: epirusapp, `/home/yaowaresni/space/project/epirusapp`)

```text
web/src/main/java/thaisamut/epirusapp/
├── schedule/
│   └── SmsGracePeriodCamelBean.java               # REWRITE ในที่เดิม — audience query, dedup, log, message vars ใหม่ทั้งหมด (คง Camel/Quartz wiring + T23 test guard เดิม)
├── component/
│   └── MsaCustlookupClient.java (existing)        # EXTEND — เปิด queryChannelStatus() เป็น public หรือเพิ่ม wrapper LINE-only
├── action/
│   └── ReportSmsGracePeriodAction.java (existing) # EXTEND/แก้ query ให้อ่านจาก SMS_GRACE_PERIOD_LOG แทน all_sms_sent
└── v4/action/
    └── SmsMonitorAction.java (existing)           # EXTEND — เพิ่ม inner class JobSmsGracePeriod (pattern: JobSmsWelcomeNewCustLine ของ 002) — ของเดิม GRACE03 ไม่มีส่วนนี้เลย

web/src/main/resources/
├── spring-camel-smsSending.xml (existing)         # EXTEND — แก้ cron route smsGracePeriodScheduler เป็น 0 0 10 * * ?
├── spring-camel-context.xml (existing)            # existing property smsGracePeriodAutoStart ใช้ต่อได้
└── webapp/WEB-INF/pages/epirusapp/v4/sms-monitor.ftl (existing)  # EXTEND — dropdown entry ใหม่
    + scripts/epirusapp/v4/sms-monitor-graceperiod.js             # NEW — คู่กับ dropdown

ejbweb/src/main/java/thaisamut/epirusapp/ejbweb/
├── model/
│   ├── SmsCategoryEntity.java (existing)          # INSERT row ใหม่ (code 116 — ยืนยันแล้ว) ผ่าน Liquibase
│   └── SmsGracePeriodLogEntity.java               # NEW — entity คู่กับตาราง SMS_GRACE_PERIOD_LOG (ดู data-model.md)
└── impl/
    ├── GracePeriodEligibilityRule.java            # NEW — pure decision logic LINE-only (E02/E00/E13) แยกจาก WelcomeEligibilityRule (dual-channel ไม่ตรงกับ 004)
    ├── GracePeriodDedupUtil.java                  # NEW — dedup predicate (policy_no+due_date) ต่างจาก WelcomeDedupUtil (รายลูกค้า)
    ├── PolicyNoMaskUtil.java                      # NEW — port มาตรฐาน Common Validation (`formatPolicyNoMarking` ของ cisapp) เข้า epirusapp เป็น shared utility ตัวแรก (FR-010c) — logic เดียวกันทุกประการ (ORD/IND/PA/GOV, ไม่ copy-paste เหมือน CSMS-275 เดิม)
    └── SmsSendingServiceImpl.java (existing)       # EXTEND — เพิ่ม method query/persist SMS_GRACE_PERIOD_LOG

ejbweb/src/main/resources/thaisamut/epirusapp/ejbweb/impl/DWSmsGrace03Notice.sql (existing) # REWRITE — ของเดิมเป็น POC quality ตาม header comment ของมันเอง (อ้างอิง "spec 001" คนละเอกสาร): grace_days ผันตาม policy_type/payment_mode (30/60 วัน) ไม่ใช่ 7 วันคงที่ตาม grace_end_date แบบ spec 004, กรอง agent_code IS NOT NULL (orphan exclude — ไม่มีใน spec 004), ใช้ mock consent table (csms_consent_optout_mock, ไม่ใช่ ili_policy_remark ตาม FR-005) — ต้องเขียนเงื่อนไข WHERE ใหม่ทั้งหมดให้ตรง FR-002/003/005 แต่ SELECT list (title_name/fname/lname/total_premium_amount/card_no/mobile1) reuse โครงได้

ejbweb/src/main/resources/dbchangelog/
├── db-changelog-epirus-0.31.0.xml (หรือเลขถัดไปจริงตอน implement)  # NEW — CREATE TABLE SMS_GRACE_PERIOD_LOG
│                                                                     #       + insert sms_category (code ที่ยืนยันแล้ว)
│                                                                     #       + insert cf_catalog DATE_COUNT (config_value1='CSMS_SGP_GracePeriod') — LINE_LINK/TIME_SENT seed ไว้แล้วจริง ไม่ต้อง insert ซ้ำ
└── dbchangelog.xml (existing)                                       # EXTEND — เพิ่ม <include> ใหม่ (ห้ามลืม — บทเรียนจาก 002 T004)

ejbweb/src/test/java/thaisamut/epirusapp/ejbweb/impl/
├── GracePeriodEligibilityRuleTest.java             # NEW
├── GracePeriodDedupUtilTest.java                   # NEW
├── PolicyNoMaskUtilTest.java                       # NEW — เทียบผลลัพธ์กับ formatPolicyNoMarking ของ cisapp ให้ตรงกันทุก policyType/ความยาว
└── (mobile1/mobile2 fallback logic test ถ้าแยกเป็น pure function)
```

**Structure Decision**: Single-project extension ของ monolith เดิม (epirusapp) — ไม่มี frontend/backend แยก ไม่มี mobile component — **แก้ไข (rewrite) bean ที่มีอยู่แล้วในที่เดิมแทนการสร้างใหม่แยก** เพราะ `SmsGracePeriodCamelBean` สำหรับ requirement นี้มีอยู่แล้ว (ดู research.md R-002) — UI ที่เกี่ยวข้อง (Manual Fix, รายงาน) ใช้หน้าที่มีอยู่แล้วของ Admin Dashboard กลาง CSMS โดยต้องเพิ่มการ wire Manual Fix ที่ของเดิมขาดอยู่

## Complexity Tracking

> Fill ONLY if Constitution Check has violations that must be justified

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|---------------------------------------|
| ~~ไม่มี Creator/Approver separation (Principle III)~~ → **✅ ยกเว้นแล้ว (ยึด precedent 002/003)** | system-triggered batch อัตโนมัติ ไม่ใช่ human-authored campaign — เหมือน 002/003 ทุกประการ | (ปิดแล้ว) |
| ~~เก็บ PII (mobile_no/sms_message) เป็น plain field ใน `SMS_GRACE_PERIOD_LOG` (Principle IV)~~ → **✅ ยกเว้นแล้ว (ยึด precedent 002/003)** | ต้องใช้ field เหล่านี้ตรงๆ เพื่อกันส่งซ้ำ (FR-008) และ audit/reconcile — schema pattern เดียวกับตาราง log อื่นของ CSMS | (ปิดแล้ว) |
| ~~`policy_no` ปรากฏตรงๆ ใน SMS body (Principle II)~~ → **✅ ปิดแล้ว (2026-07-11)** | ข้อความต้องระบุกรมธรรม์ที่ใกล้ขาดผ่อนผัน — ลูกค้าที่มีหลายกรมธรรม์ต้องแยกแยะได้ว่าฉบับไหน | ตัดเลขกรมธรรม์ออกจากข้อความทั้งหมด — ไม่จำเป็น เพราะมีทางออกที่ดีกว่า: mask บางส่วนตามมาตรฐาน Common Validation ที่ใช้อยู่แล้วในระบบ (FR-010c) — ลูกค้ายังแยกแยะกรมธรรม์ได้บางส่วน (เช่น `35xxx82`) โดยไม่เปิดเผยเลขเต็ม ตรงตาม constitution |

**ข้อเสนอ**: ทั้ง 3 ข้อ (II, III, IV) ปิดแล้ว — II ปิดด้วย FR-010c (marking), III/IV ยึด precedent ของ 002/003 — ไม่มี item เหลือให้ Platform Owner/DPO พร้อมเข้า `/speckit-tasks` ได้เลย
