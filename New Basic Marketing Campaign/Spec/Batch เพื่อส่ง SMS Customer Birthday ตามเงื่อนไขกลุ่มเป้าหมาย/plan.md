# Implementation Plan: Batch ส่ง SMS "Customer Birthday" (อวยพรวันเกิด + เชิญลงทะเบียน LINE Ocean Connect) — โมดูล CSMS

**Branch**: `005-batch-birthday-sms` | **Date**: 2026-07-15 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/005-batch-birthday-sms/spec.md`

## Summary

Batch งานที่สี่ในระบบ epirusapp (CSMS) — batch พี่น้องของ 002/003/004 แต่รันเวลา **09:00 น.** (ต่างจากพี่น้องอื่นที่ 10:00 น.) — คัดกรองลูกค้าที่ `birthdate` วัน/เดือนตรงกับวันประมวลผล มีกรมธรรม์ ORD/IND/GOV/PA สถานะ Inforce, ตัด Do Not Contact (`ili_policy_remark`), คัดเฉพาะช่องทางตัวแทน, ดึง `cardNo` จากคอลัมน์ `id_no` ใน `ili_policy_master` โดยตรง (ไม่ใช่ Web Service แยก — ดู research.md R-004), ตรวจสถานะ **2 ช่องทางพร้อมกัน** (LINE Ocean Connect + Ocean Club App) ผ่าน `MsaCustlookupClient.checkWelcomeEligibility()`/`WelcomeEligibilityRule` ที่มีอยู่แล้ว (reuse ตรงๆ), กันส่งซ้ำ**ระดับลูกค้า (card_no)** ต่างจากพี่น้องอื่นที่กันซ้ำระดับกรมธรรม์, ส่งทีละรายการผ่าน **SMS Gateway V2M1** (`sendSmsOtp`, คนละ client กับ V3 ที่พี่น้องอื่นใช้, ไม่มี CSV), บันทึกผลลง `CSMS_LOG` (reuse) + ตารางใหม่ `CUSTOMER_BIRTHDAY`, ดึง `refer_no` แบบ async lookup จาก `csms_sms_sent_log`, แจ้งเตือนทีม IT/User เมื่อล้มเหลวระดับรอบ, รองรับ Manual Fix ผ่าน Admin Dashboard เดิม

**สถานการณ์พิเศษที่ต้องจัดการ**: มีความพยายามทำ batch นี้มาก่อน (`BirthdayCampaignCamelBean.java` + ตาราง `sms_birthday_content`/`sms_birthday_log`/`sms_shortlink_config`/`customer_digital_profile`/`contact_center_list`, สร้าง 2026-06-24, ก่อน spec นี้จะมีอยู่) ที่ไม่ผ่าน spec-kit และมี business logic ต่างจาก spec 005 หลายจุด (ขอบเขตกรมธรรม์แค่ O/I, DNC คนละกลไก, ตรวจช่องทางดิจิทัลผ่าน snapshot table ไม่ใช่ real-time API) **ผู้ใช้ยืนยันแล้ว (2026-07-15): spec 005 เป็นของจริง โค้ดเดิมต้องแก้ให้ตรง ไม่ใช่แก้ spec ตามโค้ด (แนวทางเดียวกับ feature 004/GRACE03)**

**Technical approach**: **เขียน Camel bean ใหม่** (ไม่ใช่ rewrite ในที่เดิมแบบ 004 เพราะ `BirthdayCampaignCamelBean` อยู่คนละ package/schema และมี business logic ต่างกันมาก — เขียนใหม่สะอาดกว่าการ rewrite ในที่เดิม) — reuse ได้ตรงๆ: `MsaCustlookupClient.checkWelcomeEligibility()`/`WelcomeEligibilityRule` (dual-channel eligibility, พิสูจน์แล้วใน 002/003), `SmsFileGatewayWsClientFactory.getSmsGatewayMessageV2M1ESBService().sendSmsOtp()` (คนละ client กับ V3 แต่ pattern การเรียกเหมือนกัน), `mappedSystemName="CSMS_SBD_Birthday"` (ค่าเดิมจาก `BirthdayCampaignCamelBean`, ไม่ต้อง provision ใหม่), `cf_catalog` LINE_LINK/REWARDS/TIME_SENT (seed ไว้แล้วจริง), Manual Fix wiring pattern (`JobExecutor` ใน `SmsMonitorAction`), OMail client — จุดที่ต้องเขียนใหม่ทั้งหมด: (1) SQL audience ใหม่ (birthday day/month match + Inforce ORD/IND/GOV/PA + DNC + agent-channel + Go-Live + Feb-29 handling) (2) ตารางบันทึกผลใหม่ `CUSTOMER_BIRTHDAY` พร้อม dedup ระดับ `card_no` (ไม่ใช่ policy_no) (3) async `refer_no` lookup จาก `csms_sms_sent_log` (pattern คัดลอกจาก `SmsBirthdayLogServiceImpl.findReferNo()` แต่ implement แยกให้ไม่ผูกกับ schema เดิมที่ out of scope) (4) `sms_category` แถวใหม่ code `115` (5) Manual Fix job class ใหม่ `JobSmsCustomerBirthday` (ต้องไม่ชนกับ `JobSmsBirthday` เดิม) (6) cron ใหม่ `0 0 9 * * ?`

## Technical Context

**Language/Version**: Java 7 — เหมือน 002/003/004 ทุกประการ (โมดูลเดียวกัน, ยืนยันแล้วจาก pom.xml/runtime log)

**Primary Dependencies**:
- Spring 3.2.2.RELEASE, Apache Camel 2.11.1 (เหมือน 002/003/004)
- `thaisamut.smsgatewaywsclient:smsgatewaywsclient:0.9` → `SmsGatewayMessageV2M1ESBService` (`sendSmsOtp`) — **คนละ client กับ V3** ที่ 002/003/004 ใช้ (ยืนยันโดยผู้ใช้ 2026-07-15 + verified จาก source jar) — reuse `mappedSystemName="CSMS_SBD_Birthday"` เดิมตรงๆ (ไม่ต้อง provision ใหม่)
- `thaisamut.omailwsclient:omailwsclient:0.6` → `OmailWsSendingV2ESBService` — reuse ตรงๆ
- `MsaCustlookupClient.checkWelcomeEligibility(cardNo)` + `WelcomeEligibilityRule.decide()` (มีอยู่แล้ว, ใช้ร่วมกับ 002/003) — reuse ตรงๆ ไม่ต้องแก้ (ต่างจาก 004 ที่ต้องเปิด method ใหม่เพราะเช็ค LINE-only)
- JPA/Hibernate, Liquibase, Gson — เหมือน 002/003/004

**Storage**:
- PostgreSQL (epirusapp DB หลัก) — ตารางใหม่ `CUSTOMER_BIRTHDAY` (ดู data-model.md), row ใหม่ใน `sms_category` (code `115` — ยืนยันแล้วโดยผู้ใช้), reuse `CSMS_LOG` (existing entity, เหมือน 002/003), reuse `cf_catalog` 3 แถว (`LINE_LINK`/`REWARDS`/`TIME_SENT` ของ `CSMS_SBD_Birthday` — seed ไว้แล้วจริงใน `db-changelog-birthday-campaign-1.0.xml`, ไม่ต้อง insert ใหม่)
- dwconsol — อ่านจาก `public.ili_policy_master` (birthdate, id_no/cardNo, mobile1/mobile2, title_desc, position_code, policy_org, policy_status, policy_type), `public.ili_policy_remark` (DNC), `public.ili_agent_master` — SQL ใหม่ทั้งหมด (combination เฉพาะของ batch นี้ ไม่ reuse ของพี่น้อง)
- `csms_sms_sent_log` (อ่านอย่างเดียว) — async `refer_no` lookup หลังส่งสำเร็จ (ดู research.md R-007)

**Testing**: JUnit 4.10 (เหมือน 002/003/004) — แยก pure logic (Feb-29 date matching, card_no-level dedup predicate, agent-channel filter predicate) เข้า `ejbweb/src/test` ตาม convention เดิม — [NEEDS CLARIFICATION: เหมือน 002/003/004 — ยกระดับ coverage ให้ตรง Gate G10 (≥80%) หรือไม่ ยังไม่มีคำตอบผูกมัดจาก Platform Owner]

**Target Platform**: JBoss/WildFly (epirusapp WAR) + Apache Karaf (esb-fnd-osgi) — เหมือน 002/003/004

**Project Type**: Scheduled batch job ภายใน monolith เดิม (Camel bean ใหม่ — ไม่ rewrite ในที่เดิมเหมือน 004 เพราะโค้ดเดิมอยู่คนละ package/schema ทั้งหมด)

**Performance Goals**: SC-001 — 5 นาที สำหรับกลุ่มเป้าหมายสูงสุด 10,000 รายการ/รอบ — เหมือน target เดียวกับ 002/003/004 ที่ยอมรับ per-record HTTP sequential แล้ว (ไม่มี concurrency requirement ใหม่)

**Constraints**:
- ไม่สร้างไฟล์ CSV — ส่งทีละรายการผ่าน SMS Gateway **V2M1** `sendSmsOtp` (ยืนยันโดยผู้ใช้ 2026-07-15, ดู research.md R-001) — คนละ client กับ V3
- `cardNo` มาจากคอลัมน์ `id_no` ใน `ili_policy_master` โดยตรง — **ไม่มี** Web Service `customerByPolicyNoNotWhereCustomerStatus` จริงในระบบ (แก้ไข spec.md แล้ว 2026-07-15, ดู research.md R-004)
- `sms_category_code` = `115` (ยืนยันแล้ว, ไม่ใช่ `112` ตามเอกสารต้นทาง) — `mappedSystemName` = `CSMS_SBD_Birthday` (reuse ค่าเดิมของ `BirthdayCampaignCamelBean` ตรงๆ)
- Cron ต้องตั้ง `0 0 9 * * ?` ตรง FR-001 — **09:00 น. ต่างจากพี่น้องอื่นที่ 10:00 น.** ห้าม copy ค่า cron ของ batch อื่น
- กันส่งซ้ำระดับ **card_no** (ไม่ใช่ policy_no เหมือนพี่น้องอื่น) — ต้องดึง cardNo ก่อนเสมอถึงจะกันส่งซ้ำได้ถูกต้อง
- Manual Fix job class ใหม่ **ต้องไม่ชื่อชนกับ `JobSmsBirthday` เดิม** (ผูกกับโค้ด legacy ที่กำลังจะถูกรื้อ) — ใช้ `JobSmsCustomerBirthday`
- `contact_center_list`/`customer_digital_profile` (ตารางจากโค้ด Birthday เดิม) อยู่นอกขอบเขต — ไม่ query/join ตารางเหล่านี้เลย (ยืนยันโดยผู้ใช้ 2026-07-15)

**Scale/Scope**: Daily batch, ลูกค้าที่ `birthdate` วัน/เดือนตรงวันประมวลผล มีกรมธรรม์ ORD/IND/GOV/PA สถานะ Inforce — สูงสุด 10,000 รายการ/รอบ (SC-001)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Constitution ปัจจุบัน (v1.0.0) เขียนขึ้นสำหรับแพลตฟอร์มจัดการแคมเปญ SMS ที่มนุษย์เป็นผู้สร้าง/อนุมัติ — feature 005 เป็น **batch แจ้งเตือนอัตโนมัติของระบบเดิม (CSMS)** แบบเดียวกับ 002/003/004 จึงยึด **precedent การตัดสินใจของ 002/003/004** สำหรับประเด็นร่วม:

| Principle | สถานะ | รายละเอียด |
|---|---|---|
| I. PDPA-First | ✅ **ปิดแล้ว (ยืนยันโดยผู้ใช้ 2026-07-15)** | ข้อความตัวอย่างของ 002 (`...สอบถามโทร.1503`) และ 004 (`...กรุณาติดต่อ 1503`) มีเบอร์ติดต่อ/opt-out reference ในตัวข้อความ แต่เนื้อหาจริงของ 005 (`sms_category` code `115`, ยืนยัน 2026-07-15 — ดู data-model.md) **ไม่มี** เบอร์ติดต่อ — ผู้ใช้ยืนยันชัดเจนว่า**ไม่ต้องมีเบอร์ติดต่อ**ในเนื้อความ (ต่างจากพี่น้องโดยเจตนา) — ถือเป็นข้อยุติปิด ไม่ใช่ gap ที่ต้องแก้ไขเพิ่ม |
| II. Secure SMS Delivery | ✅ **ผ่านโดยไม่ต้องมี masking ใหม่** | ข้อความระดับลูกค้า (ชื่อ+ของขวัญ+ลิงก์) **ไม่มี** policy_no/เลขบัตรประชาชน/จำนวนเงิน/ข้อมูลสุขภาพในเนื้อหา (ต่างจาก 004 ที่ต้อง mask policy_no) — ตรงตาม non-negotiable rule โดยไม่ต้องแก้ไขเพิ่ม — (a) Infobip/SMS Gateway เป็น approved provider เดียวกับพี่น้อง — ไม่ verify ซ้ำ (b) ปริมาณสูงสุด 10,000/รอบ ต่ำกว่า threshold >10,000 นอกเวลาทำการ และรันเวลา 09:00 (ในเวลาทำการ) — ไม่ trigger anomaly detection |
| III. RBAC / Separation of Duties | ✅ **ยกเว้นแล้ว (ยึด precedent 002/003/004)** | system-triggered batch อัตโนมัติจาก config Active — ไม่ใช่ human-authored campaign — role model `SYSTEM_BATCH`(auto)+`IT_ADMIN`(re-run เท่านั้น) ถูกต้องตามที่ตั้งใจ |
| IV. Audit Trail | ✅ **ยกเว้นแล้ว (ยึด precedent 002/003/004)** | `CUSTOMER_BIRTHDAY`/`CSMS_LOG` เก็บ `mobile_no`/`sms_message`/`card_no` เป็น plain field — เป็น pattern เดียวกับตาราง log อื่นของ CSMS ทั้งหมด — ยอมรับเป็น legacy architecture exception เหมือนพี่น้อง (memory: `csms_db_encryption`) |
| V. Secure-by-Default Dev | ➡️ บังคับใช้ตอน implement | Gates G1–G17 ต้อง pass ก่อน merge/deploy — สถานะ pipeline เดียวกับพี่น้อง (ไม่มี coverage tooling ในระบบปัจจุบัน) |

**สรุป**: ทั้ง 4 ข้อ (I, II, III, IV) ปิดแล้ว — I ปิดด้วยการยืนยันของผู้ใช้ (ไม่ต้องมีเบอร์ติดต่อ, 2026-07-15), II ผ่านโดยไม่ต้องแก้ไขเพิ่ม, III/IV ยึด precedent ของ 002/003/004 — ไม่มี Constitution gap เหลือให้ Platform Owner/DPO ตัดสินใจใหม่ พร้อมเข้า `/speckit-tasks` ได้เต็มรูปแบบ

**Gate decision**: ✅ **PASS** — ไม่มี Constitution gap เหลือให้ Platform Owner/DPO ตัดสินใจใหม่ พร้อมเข้า `/speckit-tasks` ได้

**Re-check หลัง Phase 1 (Post-Design)**: `data-model.md`/`contracts/reuse-notes.md` สอดคล้องกับทั้ง 4 ข้อที่ปิดแล้ว (I/II/III/IV) — ไม่มีอะไรค้าง

## Project Structure

### Documentation (this feature)

```text
specs/005-batch-birthday-sms/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md         # Phase 1 output
├── quickstart.md         # Phase 1 output
├── contracts/            # Phase 1 output
│   └── reuse-notes.md    # อ้างอิง contracts ของ 002/003 (msa-custlookup, dual-channel eligibility) + V2M1 (คนละตัวกับ V3 ของพี่น้อง)
└── tasks.md              # Phase 2 output (/speckit-tasks — ยังไม่สร้าง)
```

### Source Code (repository: epirusapp, `/home/yaowaresni/space/project/epirusapp`)

```text
web/src/main/java/thaisamut/epirusapp/
├── schedule/
│   └── SmsCustomerBirthdayCamelBean.java           # NEW — Camel bean ใหม่ทั้งหมด (audience query, dedup card_no, dual-channel eligibility, sendSmsOtp V2M1, refer_no async lookup, log)
├── component/
│   └── MsaCustlookupClient.java (existing)         # ไม่แก้ — reuse checkWelcomeEligibility() ตรงๆ
└── v4/action/
    └── SmsMonitorAction.java (existing)            # EXTEND — เพิ่ม inner class JobSmsCustomerBirthday (pattern: JobSmsWelcomeNewCustLine) — ระวังไม่ชนกับ JobSmsBirthday เดิม (ผูกกับโค้ด legacy ที่จะถูกรื้อ)

web/src/main/resources/
├── spring-camel-smsSending.xml (existing)          # EXTEND — เพิ่ม route ใหม่ smsCustomerBirthdayScheduler, cron = 0 0 9 * * ?
└── webapp/WEB-INF/pages/epirusapp/v4/sms-monitor.ftl (existing)  # EXTEND — dropdown entry ใหม่
    + scripts/epirusapp/v4/sms-monitor-customerbirthday.js        # NEW — คู่กับ dropdown

ejbweb/src/main/java/thaisamut/epirusapp/ejbweb/
├── model/
│   ├── SmsCategoryEntity.java (existing)           # INSERT row ใหม่ (code 115 — ยืนยันแล้ว) ผ่าน Liquibase
│   └── CustomerBirthdayEntity.java                 # NEW — entity คู่กับตาราง CUSTOMER_BIRTHDAY (ดู data-model.md)
└── impl/
    ├── CustomerBirthdayDedupUtil.java               # NEW — dedup predicate ระดับ card_no (ต่างจาก WelcomeDedupUtil รายกรมธรรม์)
    ├── BirthdayDateMatchUtil.java                   # NEW — pure logic เทียบวัน/เดือนเกิด + Feb-29 handling (FR-003a)
    ├── AgentChannelFilterUtil.java                  # NEW — pure logic คัดกรองช่องทางตัวแทน (FR-007: title_desc/position_code/policy_org)
    └── SmsSendingServiceImpl.java (existing)        # EXTEND — เพิ่ม method query/persist CUSTOMER_BIRTHDAY + query async refer_no จาก csms_sms_sent_log

ejbweb/src/main/resources/thaisamut/epirusapp/ejbweb/impl/DWSmsCustomerBirthday.sql  # NEW — SQL ใหม่ทั้งหมด (birthday match + Inforce ORD/IND/GOV/PA + DNC + agent-channel + Go-Live ≥2026) — ไม่อ้างอิง/แก้ไข DWBirthdayCampaign.sql เดิม (โหลดโดย BirthdayCampaignServiceImpl ซึ่งนอกขอบเขตทั้งชุด — คนละไฟล์ คนละ service layer)

ejbweb/src/main/resources/dbchangelog/
├── db-changelog-epirus-0.33.0.xml (NEW — ยืนยันโดยผู้ใช้ 2026-07-15: แยกไฟล์จาก db-changelog-birthday-campaign-1.0.xml โดยเจตนา เพราะไฟล์นั้นเป็นของโค้ด BirthdayCampaignCamelBean เดิมที่นอกขอบเขต ไม่ควรผูก schema จริงของ 005 ไว้ด้วยกัน — ตรงกับ convention ของ 002/003/004 ที่แยกไฟล์ใหม่เสมอ)
│    #       CREATE TABLE CUSTOMER_BIRTHDAY + insert sms_category (code 115) + insert tqp_ms_email_template (id 5, template_code TQP_NOTIFICATION_ERROR_05 — ยืนยันแล้ว)
│    #       + <include> ใหม่ใน dbchangelog.xml
└── db-changelog-birthday-campaign-1.0.xml (existing — ไม่แก้ไข)   # อ่านอย่างเดียว — cf_catalog LINE_LINK/REWARDS/TIME_SENT ของ CSMS_SBD_Birthday seed ไว้แล้วจริงในไฟล์นี้ (reuse ไม่ insert ซ้ำ)

ejbweb/src/test/java/thaisamut/epirusapp/ejbweb/impl/
├── CustomerBirthdayDedupUtilTest.java               # NEW
├── BirthdayDateMatchUtilTest.java                   # NEW — ต้อง cover Feb-29 edge case ทั้งปีอธิกสุรทิน/ไม่อธิกสุรทิน
└── AgentChannelFilterUtilTest.java                  # NEW
```

**Structure Decision**: Single-project extension ของ monolith เดิม (epirusapp) — ไม่มี frontend/backend แยก ไม่มี mobile component — **เขียน Camel bean ใหม่แยกจากโค้ด Birthday เดิมทั้งหมด** (ต่างจาก 004 ที่ rewrite ในที่เดิม) เพราะ `BirthdayCampaignCamelBean` อยู่คนละ package (`v2/schedule` vs `schedule`), ผูกกับ schema/service คนละชุด (`sms_birthday_*`/`customer_digital_profile`/`contact_center_list` ที่ out of scope ทั้งหมด) — การเขียนใหม่สะอาดกว่าการพยายามรื้อโครงเดิมที่ต่างกันมาก — UI ที่เกี่ยวข้อง (Manual Fix) ใช้หน้าที่มีอยู่แล้วของ Admin Dashboard กลาง CSMS โดยต้องเพิ่ม job class ใหม่ที่ไม่ชนกับ `JobSmsBirthday` เดิม

## Complexity Tracking

> Fill ONLY if Constitution Check has violations that must be justified

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|---------------------------------------|
| ~~ไม่มี Creator/Approver separation (Principle III)~~ → **✅ ยกเว้นแล้ว (ยึด precedent 002/003/004)** | system-triggered batch อัตโนมัติ ไม่ใช่ human-authored campaign | (ปิดแล้ว) |
| ~~เก็บ PII (mobile_no/sms_message/card_no) เป็น plain field ใน `CUSTOMER_BIRTHDAY` (Principle IV)~~ → **✅ ยกเว้นแล้ว (ยึด precedent 002/003/004)** | ต้องใช้ field เหล่านี้ตรงๆ เพื่อกันส่งซ้ำระดับลูกค้า (FR-008b) และ audit/reconcile — schema pattern เดียวกับตาราง log อื่นของ CSMS | (ปิดแล้ว) |
| ~~ไม่มี opt-out reference (เบอร์ติดต่อ) ในเนื้อความ SMS (Principle I)~~ → **✅ ปิดแล้ว (ยืนยันโดยผู้ใช้ 2026-07-15)** | ข้อความอวยพรวันเกิดเน้นความรู้สึกส่วนตัว (ชื่อ+ของขวัญ+ลิงก์) — ต่างจากพี่น้องที่เป็นข้อความแจ้งเตือนเชิงธุรกรรม (transactional) ที่มักมีเบอร์ติดต่อ | ผู้ใช้ยืนยันชัดเจนว่าไม่ต้องมีเบอร์ติดต่อในเนื้อความ — ไม่ใช่ gap ที่ต้องแก้ไข |

**ข้อเสนอ**: ทั้ง 3 ข้อ (I, III, IV) ปิดแล้ว — ไม่มี item เหลือให้ Platform Owner/DPO ตัดสินใจใหม่ พร้อมเข้า `/speckit-tasks` ได้เต็มรูปแบบ
