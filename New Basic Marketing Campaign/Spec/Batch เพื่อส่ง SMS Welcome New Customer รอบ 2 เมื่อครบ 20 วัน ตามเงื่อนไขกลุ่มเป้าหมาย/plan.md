# Implementation Plan: Batch ส่ง SMS "Welcome New Customer (Ocean Club)" — โมดูล CSMS

**Branch**: `003-batch-welcome-new-customer-app-sms` | **Date**: 2026-07-11 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/003-batch-welcome-new-customer-app-sms/spec.md`

## Summary

Batch งานที่สองในระบบ epirusapp (CSMS) — follow-up ของ feature 002 (Welcome New Customer LINE) รันอัตโนมัติทุกวัน 10:00 น. — ดึงลูกค้าจากประวัติการส่งสำเร็จของ 002 (`WELCOME_NEW_CUST_LINE`) ที่ครบกำหนด N วัน (ค่าเริ่มต้น 20), ตรวจสถานะกรมธรรม์ปัจจุบัน (Inforce, ORD/IND/GOV/PA) และเบอร์โทรปัจจุบัน (mobile1/mobile2) จาก `ili_policy_master`, ตัด Do Not Contact (`ili_policy_remark`), ตรวจสถานะลงทะเบียน LINE Ocean Connect **และ** Ocean Club App (reuse client เดิมของ 002 ตรงๆ), dedup, render ข้อความ 3 ตัวแปร (ชื่อ/รางวัล/ลิงก์) จาก `SMS_CATEGORY` code `114` + `cf_catalog` (`CSMS_SNC_NewCustApp`), ส่งทีละรายการผ่าน **SMS Gateway V3 (Infobip)**, บันทึกผลลง `CSMS_LOG` + ตารางใหม่ `WELCOME_NEW_CUST_APP` (พร้อม FK อ้างอิงกลับ 002), แจ้งเตือนทีม IT/User ผ่าน OMail เมื่อล้มเหลวระดับรอบ, รองรับ Manual Fix ผ่าน Admin Dashboard เดิม

**Technical approach**: เพิ่ม Camel-managed scheduled bean ใหม่ `SmsWelcomeNewCustAppCamelBean` (ตาม pattern `SmsWelcomeNewCustLineCamelBean` ของ 002 ทุกประการ) ใน module `web` — **reuse โค้ดของ 002 ได้มากกว่าที่ 002 reuse จาก batch อื่น** เพราะเป็น batch พี่น้องที่ implement ไปแล้วในระบบเดียวกัน จุดที่ reuse ตรงๆ ได้: `MsaCustlookupClient.checkWelcomeEligibility()` + `WelcomeEligibilityRule` (รองรับ 2 channel อยู่แล้ว ไม่ต้องแก้), `WelcomeDedupUtil`, SMS Gateway V3 `sendSmsOtp` mechanism, OMail failure-email pattern, Manual Fix/Admin Dashboard wiring pattern จุดที่ต้องเขียนใหม่: (1) SQL ใหม่สองขั้น (query `WELCOME_NEW_CUST_LINE` แล้ว query `ili_policy_master`/`ili_policy_remark` ครอบคลุม 4 policy type รวม GOV ซึ่ง 002 ไม่เคย query) (2) ขยาย `WelcomeMessageRenderer` ให้ render 3 ตัวแปรแทน 2 (3) entity/table ใหม่ `WELCOME_NEW_CUST_APP` พร้อม FK กลับ `WELCOME_NEW_CUST_LINE`

## Technical Context

**Language/Version**: Java 7 — ยืนยันแล้วจาก feature 002 (WildFly 8.0.0.Final รันบน Java 7 จริง, `java.class.version = 51.0`) เหมือนกันทุกประการ (โมดูลเดียวกัน)

**Primary Dependencies**:
- Spring 3.2.2.RELEASE, Apache Camel 2.11.1 (เหมือน 002)
- `thaisamut.smsgatewaywsclient:smsgatewaywsclient:0.9` → `SmsGatewayMessageV3ESBService` (Infobip) — reuse ตรงๆ, **`mappedSystemName` reuse `CSMS_SNC_NewCust` เดิมของ 002 ตรงๆ** (ยืนยันแล้ว 2026-07-13 — ไม่ต้อง provision ใหม่, ข้อความ/เนื้อหาต่างกันได้ตามปกติผ่าน `message` param ไม่เกี่ยวกับ mappedSystemName)
- `thaisamut.omailwsclient:omailwsclient:0.6` → `OmailWsSendingV2ESBService` — reuse ตรงๆ
- `MsaCustlookupClient.checkWelcomeEligibility()` + `WelcomeEligibilityRule` (ของ 002) — **reuse โดยไม่แก้โค้ด** (ยืนยันจากโค้ดจริง รองรับ LINE+APP อยู่แล้ว — ดู research.md R-003)
- `WelcomeEligibilityRetry` (**เพิ่ม 2026-07-13** — แยกออกมาจาก 002 ตอนเพิ่ม test กรณี service-down/retry×3 ที่ค้างไว้) — pure retry loop (`ejbweb/.../impl/WelcomeEligibilityRetry.java`, unit test คลุมแล้ว 2 เทส) ใช้กับ FR-012 (เทียบเท่า FR-008b ของ 002) **reuse ตรงๆ ไม่ต้องเขียน retry logic ใหม่** — CamelBean ใหม่แค่ wire เรียกใช้ตาม pattern เดียวกับ `SmsWelcomeNewCustLineCamelBean.checkEligibilityWithRetry()`
- `WelcomeDedupUtil` (ของ 002) — reuse ตรงๆ ไม่ต้องแก้
- `WelcomeMessageRenderer` (ของ 002) — reuse `resolveActiveCampaignLink()` ตรงๆ, ต้องเพิ่ม overload `render()` รองรับ 3 ตัวแปร
- JPA/Hibernate (entity pattern ตาม `WelcomeNewCustLineEntity`), Liquibase, Gson

**Storage**:
- PostgreSQL (epirusapp DB หลัก) — table ใหม่ `WELCOME_NEW_CUST_APP` (FK → `WELCOME_NEW_CUST_LINE.ID`), row ใหม่ใน `SMS_CATEGORY` (code `114`), row ใหม่ใน `cf_catalog` (`DATE_COUNT`/`CSMS_SNC_NewCustApp`)
- dwconsol (raw JDBC ผ่าน `java:jboss/datasources/dwconsol`) — อ่านจาก `ili_policy_master`, `ili_policy_remark` **โดยตรง** (ต่างจาก 002 ที่อ่านจาก `ili_application_osp_*`) — ครอบคลุม 4 policy type (ORD/IND/GOV/PA) ซึ่งเป็น query ใหม่ทั้งหมด ไม่มี precedent จาก 002 สำหรับ GOV — [NEEDS DBA VERIFICATION: column/join จริงของ `ili_policy_master` สำหรับ GOV ก่อนขึ้น production]
- reuse `cf_catalog` (`LINE_LINK`/`REWARDS`/`TIME_SENT` ของ `CSMS_SNC_NewCustApp` — seed ไว้ล่วงหน้าแล้วใน `db-changelog-birthday-campaign-1.0.xml`), `sms_message_schedule`, `CSMS_LOG`, และ `WELCOME_NEW_CUST_LINE` (อ่านอย่างเดียว เป็นต้นทางกลุ่มเป้าหมาย)

**Testing**: JUnit 4.10 (เหมือน 002) — แยก pure logic ใหม่ (SQL-mapping POJO, render 3-var overload) เข้า `ejbweb/src/test` ตาม convention เดิม ส่วนที่ reuse ตรงๆ (`WelcomeEligibilityRule`, `WelcomeDedupUtil`) มี test เดิมของ 002 คลุมอยู่แล้ว ไม่ต้องเขียนซ้ำ — [NEEDS CLARIFICATION: เหมือน 002 — ต้องยกระดับ coverage ให้ตรง Gate G10 (≥80%) หรือไม่ ยังไม่มีคำตอบที่ผูกมัดจาก Platform Owner]

**Target Platform**: JBoss/WildFly (epirusapp WAR) + Apache Karaf (esb-fnd-osgi) — เหมือน 002

**Project Type**: Scheduled batch job ภายใน monolith เดิม (ไม่ใช่ service ใหม่/แยก deploy)

**Performance Goals**: ~1,000 รายต่อวัน (ยืนยันแล้วใน spec.md Clarifications) — เกณฑ์เดียวกับความกังวลของ 002: SMS Gateway V3 ส่งได้ทีละ 1 รายการต่อ 1 HTTP call synchronous — ปริมาณนี้เล็กกว่าที่กังวลใน 002 (ไม่ระบุตัวเลข) มาก แต่ยังไม่มีการวัด throughput จริงจาก 002 ที่จะใช้ประมาณการรอบเวลาของ 003 ได้ — [NEEDS CLARIFICATION ยังไม่ blocker: เก็บ metric จริงจาก 002 ใน production ก่อน ถ้ามี ให้ใช้ประมาณการรอบเวลาของ 003]

**Constraints**:
- ต้อง reuse Manual Fix dashboard, `CSMS_LOG`, email notification pattern เดิม — ไม่ออกแบบ UI ใหม่ (ยืนยันแล้ว — ดู spec.md Clarifications)
- ไม่สร้างไฟล์ CSV — ส่งทีละรายการผ่าน SMS Gateway V3 `sendSmsOtp` เหมือน 002 (FR-017 เดิมถูกตัดออกจาก spec.md แล้ว 2026-07-11 หลังตรวจโค้ดพบว่าไม่มี CSV infra ใดๆ ในระบบ)
- ~~ต้องขอ provision `mappedSystemName` ใหม่ฝั่ง ESB~~ — **ปิดแล้ว 2026-07-13**: reuse `CSMS_SNC_NewCust` เดิมของ 002 ตรงๆ ไม่ต้อง provision ใหม่
- Cron schedule ต้องตั้งใหม่ให้ตรง 10:00 น. จริง (`0 0 10 * * ?`) — **ห้าม copy cron string ของ 002** ซึ่งตรวจพบว่าเป็น `0 13 14 * * ?` (14:13 น.) ผิดจากที่ comment/JavaDoc ระบุไว้ (bug ที่ไม่เคยถูกแก้)

**Scale/Scope**: Daily batch, กรมธรรม์ ORD/IND/GOV/PA ที่ Inforce ปัจจุบัน ซึ่งเคยได้รับ SMS รอบแรกครบ N วัน — ~1,000 รายต่อวัน (ยืนยันแล้ว)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Constitution ปัจจุบัน (v1.0.0) เขียนขึ้นสำหรับแพลตฟอร์มจัดการแคมเปญ SMS ที่มนุษย์เป็นผู้สร้าง/อนุมัติ (Campaign Creator → Approver → Send) เช่นเดียวกับที่ feature 002 พบมาก่อน — feature 003 เป็น **batch แจ้งเตือนอัตโนมัติของระบบเดิม (CSMS)** แบบเดียวกับ 002 ทุกประการ (เป็น batch พี่น้องในโมดูลเดียวกัน) จึงยึด **precedent การตัดสินใจของ 002 ทั้งหมด** (ตัดสินใจโดย Aor, 2026-07-09, ดู `002-batch-welcome-new-customer-line-sms/plan.md` § Constitution Check) แทนที่จะเปิดประเด็นใหม่ซ้ำ — ยืนยันซ้ำผ่าน `/speckit-clarify` ของ feature นี้แล้ว (spec.md Clarifications Session 2026-07-11):

| Principle | สถานะ | รายละเอียด |
|---|---|---|
| I. PDPA-First | ✅ **ยึด precedent 002** | เช่นเดียวกับ 002: SMS นี้เป็น marketing, ไม่มี inbound SMS reply รองรับ — ใช้เบอร์ Call Center `1503` ที่มีอยู่ในข้อความเดิมเป็นช่องทาง opt-out โดยไม่ต้องเพิ่ม FR/table/process ใหม่ (เนื้อหาข้อความยังไม่ได้ร่างจริง — ต้องคง 1503 ไว้ในข้อความตอน implement) |
| II. Secure SMS Delivery | ✅ ส่วนใหญ่ผ่าน / ⚠️ 2 ข้อเหมือน 002 | ข้อความไม่มี policy_no/national ID/การเงิน (ผ่าน), idempotency มี FR-013/FR-020 (ผ่าน) — **แต่** (a) Infobip เป็น approved provider หรือไม่ ไม่ verify ซ้ำในรอบนี้ (ใช้ provider เดียวกับ 002 ที่ verify แล้ว) (b) ไม่มี rate-limiting/anomaly design แยก — ปริมาณ ~1,000/วัน ต่ำกว่า threshold 10,000 ของ constitution มาก ไม่ใช่ความเสี่ยงจริงในสเกลนี้ |
| III. RBAC / Separation of Duties | ✅ **ยกเว้นแล้ว (ยึด precedent 002 + ยืนยันซ้ำใน clarify 2026-07-11)** | feature นี้เป็น system-triggered batch อัตโนมัติจาก config ที่ Active อยู่แล้ว ไม่ใช่ "แคมเปญ" ที่มนุษย์สร้าง/อนุมัติทีละรอบตามนิยาม constitution — Creator→Approver gate (ถ้ามี) อยู่ในกระบวนการจัดการ config กลางของ CSMS ที่มีมาก่อนแล้ว นอก scope ของ feature นี้ — `SYSTEM_BATCH` (auto) + `IT_ADMIN` (re-run/Manual Fix เท่านั้น ไม่ใช่ approval gate) เป็น role model ที่ถูกต้อง |
| IV. Audit Trail | ✅ **ยกเว้นแล้ว (ยึด precedent 002 + ยืนยันซ้ำใน clarify 2026-07-11)** | `WELCOME_NEW_CUST_APP` (FR-018) เก็บ `mobile_no`/`fname`/`lname`/`card_no` เป็น **plain field** — ขัดกับ "MUST NOT log sensitive fields" ตรงๆ เหมือนที่ 002 เจอ — เป็น pattern เดียวกับทุกตาราง log ของ CSMS ที่มีอยู่ก่อนแล้วทั้งระบบ (ไม่ใช่สิ่งที่ feature นี้ introduce ใหม่) — ยอมรับว่ายกเว้นจาก constitution เพราะเป็น legacy architecture ทั้งระบบ ไม่ mask/tokenize เพิ่ม |
| V. Secure-by-Default Dev | ➡️ บังคับใช้ตอน implement | Gates G1–G17 ต้อง pass ก่อน merge/deploy ตามปกติ — สถานะ pipeline เดียวกับ 002 (ไม่มี coverage tooling ใน repo ปัจจุบัน) |

**สรุป**: ไม่มีจุดใหม่ที่ต้องเปิดขึ้นมาเอง — ทุกข้อ (I, III, IV) ยึด precedent ของ 002 ที่ Aor ตัดสินใจไปแล้ว และยืนยันซ้ำเฉพาะเจาะจงสำหรับ feature นี้ผ่าน `/speckit-clarify` (2026-07-11) แล้ว

**Gate decision**: ✅ **PASS** — ไม่มี Constitution gap เหลือให้ Platform Owner/DPO ตัดสินใจใหม่ พร้อมเข้า Phase 2 (`/speckit-tasks`) ได้

**Re-check หลัง Phase 1 (Post-Design)**: `data-model.md`/`contracts/reuse-notes.md` สอดคล้องกับการตัดสินใจทั้ง 3 ข้อ (I, III, IV) — ไม่มีอะไรค้างเพิ่มเติมจากที่ 002 เคยเปิดไว้

## Project Structure

### Documentation (this feature)

```text
specs/003-batch-welcome-new-customer-app-sms/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md         # Phase 1 output
├── quickstart.md         # Phase 1 output
├── contracts/            # Phase 1 output
│   └── reuse-notes.md    # อ้างอิง contracts ของ 002 (msa-custlookup, SMS Gateway V3, OMail — ไม่มี API ใหม่)
└── tasks.md              # Phase 2 output (/speckit-tasks — ยังไม่สร้าง)
```

### Source Code (repository: epirusapp, `/home/yaowaresni/space/project/epirusapp`)

```text
web/src/main/java/thaisamut/epirusapp/
├── schedule/
│   └── SmsWelcomeNewCustAppCamelBean.java        # NEW — main batch bean (pattern: SmsWelcomeNewCustLineCamelBean ของ 002)
├── component/
│   └── MsaCustlookupClient.java (existing)       # REUSE ตรงๆ — checkWelcomeEligibility() ไม่ต้องแก้
└── v4/action/
    └── SmsMonitorAction.java (existing)          # EXTEND — เพิ่ม inner class JobSmsWelcomeNewCustApp (pattern เดียวกับ JobSmsWelcomeNewCustLine)

web/src/main/resources/
├── spring-camel-smsSending.xml (existing)        # EXTEND — เพิ่ม route smsWelcomeNewCustAppScheduler, cron 0 0 10 * * ?
├── spring-camel-context.xml (existing)           # EXTEND — เพิ่ม property smsWelcomeNewCustAppAutoStart
└── webapp/WEB-INF/pages/epirusapp/v4/sms-monitor.ftl (existing)  # EXTEND — dropdown entry ใหม่
    + scripts/epirusapp/v4/sms-monitor-welcomenewcustapp.js       # NEW — คู่กับ dropdown

ejbweb/src/main/java/thaisamut/epirusapp/ejbweb/
├── model/
│   ├── SmsCategoryEntity.java (existing)         # INSERT row ใหม่ (code 114) ผ่าน Liquibase ไม่ต้องแก้ entity
│   └── WelcomeNewCustAppEntity.java              # NEW — entity คู่กับตาราง WELCOME_NEW_CUST_APP (FK → WelcomeNewCustLineEntity)
└── impl/
    ├── WelcomeEligibilityRule.java (existing)    # REUSE ตรงๆ ไม่แก้
    ├── WelcomeEligibilityRetry.java (existing, เพิ่ม 2026-07-13) # REUSE ตรงๆ ไม่แก้ — retry×3 (FR-012)
    ├── WelcomeDedupUtil.java (existing)           # REUSE ตรงๆ ไม่แก้
    ├── WelcomeMessageRenderer.java (existing)     # EXTEND — เพิ่ม overload render(template, var1, var2, var3)
    └── SmsSendingServiceImpl.java (existing)      # EXTEND — เพิ่ม method query/persist สำหรับ batch นี้ (2-step query)

ejbweb/src/main/resources/dbchangelog/
├── db-changelog-epirus-0.31.0.xml (หรือเลขถัดไปจริงตอน implement)  # NEW — CREATE TABLE WELCOME_NEW_CUST_APP (รวม commencement_date)
│                                                                     #       + insert sms_category code 114
│                                                                     #       + insert cf_catalog DATE_COUNT/CSMS_SNC_NewCustApp
│                                                                     #       + insert tqp_ms_email_template TQP_NOTIFICATION_ERROR_03
└── dbchangelog.xml (existing)                                       # EXTEND — เพิ่ม <include> ใหม่ (ห้ามลืม — บทเรียนจาก 002 T004)

web/src/test/java/... — ไม่มี unit test สำหรับ Camel bean เอง (ตาม convention เดิม)
ejbweb/src/test/java/thaisamut/epirusapp/ejbweb/impl/
├── WelcomeMessageRendererTest.java (existing)     # EXTEND — เพิ่ม test สำหรับ overload 3-var ใหม่
└── (SQL-mapping POJO ใหม่)Test.java               # NEW — ถ้ามี pure logic แยกจาก 2-step query ที่ควรทดสอบ
```

**Structure Decision**: Single-project extension ของ monolith เดิม (epirusapp) — ไม่มี frontend/backend แยก ไม่มี mobile component เพราะ feature เป็น backend batch job ล้วน UI ที่เกี่ยวข้อง (Manual Fix, รายงาน) ใช้หน้าที่มีอยู่แล้วของ Admin Dashboard กลาง CSMS — ไม่สร้าง UI ใหม่ เหมือน 002 ทุกประการ

## Complexity Tracking

> Fill ONLY if Constitution Check has violations that must be justified

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|---------------------------------------|
| ~~ไม่มี Creator/Approver separation (Principle III)~~ → **✅ ยกเว้นแล้ว (ยึด precedent 002, ยืนยันซ้ำ 2026-07-11)** | Feature เป็น system-triggered batch อัตโนมัติจาก config ที่ Active อยู่แล้ว ไม่ใช่ human-authored campaign — เหมือน 002 ทุกประการ | (ปิดแล้ว — ไม่ต้องหาทางออกอื่น เพราะ precedent มีอยู่แล้วในระบบเดียวกัน) |
| ~~เก็บ PII (mobile_no/fname/lname/card_no) เป็น plain field ใน `WELCOME_NEW_CUST_APP` (Principle IV)~~ → **✅ ยกเว้นแล้ว (ยึด precedent 002, ยืนยันซ้ำ 2026-07-11)** | ต้องใช้ field เหล่านี้ตรงๆ เพื่อ dedup (FR-013), ป้องกันส่งซ้ำ, และ reconcile รายงาน — เป็น schema pattern เดียวกับ `WELCOME_NEW_CUST_LINE` และตาราง log อื่นของ CSMS ที่มีอยู่ก่อน | (ปิดแล้ว — ไม่ต้องหาทางออกอื่น) |

**ข้อเสนอ**: ปิดครบทั้ง 2 ข้อ (III, IV) โดยยึด precedent ของ 002 ที่ Aor ตัดสินใจไปแล้ว ไม่มี item เหลือให้ Platform Owner/DPO — พร้อมเข้า `/speckit-tasks` ได้เลย
