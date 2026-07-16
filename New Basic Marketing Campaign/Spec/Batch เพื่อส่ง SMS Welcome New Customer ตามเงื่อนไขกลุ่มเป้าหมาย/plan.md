# Implementation Plan: Batch ส่ง SMS "Welcome New Customer (LINE)" — โมดูล CSMS

**Branch**: `002-batch-welcome-new-customer-line-sms` | **Date**: 2026-07-09 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/002-batch-welcome-new-customer-line-sms/spec.md`

## Summary

Batch งานใหม่ในระบบ epirusapp (CSMS) ที่รันอัตโนมัติทุกวัน 10:00 น. — คัดกรองกรมธรรม์ ORD/IND/PA ที่ Inforce เมื่อวาน (T-1) จาก `ili_application_osp_*`/`ili_policy_master` (dwconsol ผ่าน ESB mirror), ตัด Do Not Contact (`ili_policy_remark`) และลูกค้าที่ลงทะเบียน LINE/Ocean Club แล้ว (ผ่าน `msa-custlookup`), dedup, render ข้อความจาก `SMS_CATEGORY`/`sms_message_schedule` + ลิงก์แคมเปญจาก `cf_catalog` (`CSMS_SNC_NewCustLine`), ส่งทีละรายการผ่าน **SMS Gateway V3 (Infobip)** ด้วย `mappedSystemName='CSMS_SNC_NewCust'`, บันทึกผลลง `CSMS_LOG` + ตารางใหม่ `WELCOME_NEW_CUST_LINE`, แจ้งเตือนทีม IT/User ผ่าน OMail เมื่อล้มเหลวระดับรอบ, รองรับ Manual Fix ผ่าน Admin Dashboard เดิม, และมีรายงานสรุปประจำวัน

**Technical approach**: เพิ่ม Camel-managed scheduled bean ใหม่ (ตาม pattern `Sms*CamelBean.java` ที่มีอยู่แล้ว เช่น `SmsLapseNoticeCamelBean`) ใน module `web` — reuse infra เดิมของ CSMS ทั้งหมด (ESB clients, Admin Dashboard, email pattern) ยกเว้น 2 จุดที่ต้องเขียนใหม่: (1) ขยาย/สร้าง client ตรวจสถานะ LINE ให้รองรับ E13-skip + isBlockLine ตาม contract จริง (2) เขียน logic ส่ง SMS แบบ loop ทีละราย + pre-render message เพราะ SMS Gateway V3 ไม่มี bulk/template mechanism แบบที่ batch อื่นใช้

## Technical Context

**Language/Version**: **Java 7** — ยืนยันแล้ว 2026-07-10 จาก `ear/wildfly-run/wildfly-8.0.0.Final/standalone/log/server.log` (รันจริงบนเครื่อง dev): `java.home = .../java-7-openjdk-amd64/jre`, `java.class.version = 51.0` (= Java 7 พอดี) — WildFly 8.0.0.Final รันบน Java 7 จริง สอดคล้องกับที่พบว่า `Comparator.nullsLast/naturalOrder` (Java 8-only API) compile ไม่ผ่านระหว่าง implement (ต้องเขียน null-safe comparator เองแทน)

**Primary Dependencies**:
- Spring 3.2.2.RELEASE, Apache Camel 2.11.1 (evidence: `epirusapp/pom.xml`)
- `thaisamut.smsgatewaywsclient:smsgatewaywsclient:0.9` → `SmsGatewayMessageV3ESBService` (Infobip)
- `thaisamut.omailwsclient:omailwsclient:0.6` → `OmailWsSendingV2ESBService`
- `thaisamut.msa.legacyclient` pattern (`MsaCustlookupClient`) — ต้องขยายหรือสร้างใหม่
- JPA/Hibernate (`javax.persistence`, entity pattern ตาม `SmsCategoryEntity`/`CsmsLogEntity`)
- Liquibase (`ejbweb/src/main/resources/dbchangelog/`) สำหรับ schema migration
- Gson (JSON mapping กับ `msa-custlookup`)

**Storage**:
- PostgreSQL (epirusapp DB หลัก) — table ใหม่ `WELCOME_NEW_CUST_LINE`, row ใหม่ใน `SMS_CATEGORY` (code `113`)
- dwconsol (ผ่าน ESB mirror บางส่วน) — อ่านจาก `ili_application_osp_ord/ind/pa`, `ili_policy_master`, `ili_customer_data_analytics`, `ili_policy_remark` (ทุกตารางยืนยันมีอยู่จริงแล้วโดย Aor — ดู Clarifications ใน spec.md)
- reuse `cf_catalog` (LINE_LINK, `CSMS_SNC_NewCustLine`), `sms_message_schedule`, `CSMS_LOG`

**Testing**: JUnit 4.10 (evidence: `web/pom.xml`) — ตาม convention เดิมของ epirusapp/esb-fnd-osgi coverage โดยรวมค่อนข้างบาง (~30% ของ bundle มี test ฝั่ง ESB) ไม่มี Mockito/PAX Exam ใช้งานจริง — [NEEDS CLARIFICATION: ต้องยกระดับ test coverage สำหรับ feature นี้ให้ตรงกับ constitution Gate G10 (≥80%) หรือไม่ — ดู Constitution Check]

**Target Platform**: JBoss/WildFly (epirusapp WAR) + Apache Karaf (esb-fnd-osgi, SMS Gateway V3/OMail bundles)

**Project Type**: Scheduled batch job ภายใน monolith เดิม (ไม่ใช่ service ใหม่/แยก deploy)

**Performance Goals**: ไม่ระบุใน spec — **ข้อกังวลสำคัญ**: SMS Gateway V3 ส่งได้ทีละ 1 รายการต่อ 1 HTTP call (ไม่มี bulk) ต่างจาก batch อื่นที่ส่งเป็นไฟล์ทีเดียว — ถ้าปริมาณลูกค้าใหม่ต่อวันสูง อาจกระทบเวลาประมวลผลของรอบ 10:00 น. [NEEDS CLARIFICATION: ปริมาณลูกค้าใหม่เฉลี่ย/สูงสุดต่อวัน และ SLA ที่ยอมรับได้]

**Constraints**:
- ต้อง reuse Manual Fix dashboard, `CSMS_LOG`, email notification pattern เดิม — ไม่ออกแบบ UI ใหม่ (Q-004 Closed)
- SMS Gateway V3 ไม่มี template/variable substitution ฝั่ง ESB — ต้อง render ข้อความให้เสร็จสมบูรณ์ฝั่ง epirusapp ก่อนเรียก
- ต้องขยาย client ตรวจสถานะ LINE ให้รองรับ `E13`-skip และ `isBlockLine` ตาม contract จริง (ไม่ reuse `MsaCustlookupClient.isRegisteredActive()` ตรงๆ)

**Scale/Scope**: Daily batch, กรมธรรม์ ORD/IND/PA ใหม่ที่ Inforce ของวันก่อนหน้า (T-1) — จำนวนไม่ระบุใน spec

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Constitution ปัจจุบัน (v1.0.0, "UR Basic Campaign — Marketing Campaign Management Platform") เขียนขึ้นสำหรับ**แพลตฟอร์มจัดการแคมเปญ SMS ที่มนุษย์เป็นผู้สร้าง/อนุมัติ** (Campaign Creator → Approver → Send) แต่ feature 002 เป็น **batch แจ้งเตือนอัตโนมัติของระบบเดิม (CSMS)** ที่ทำงานมาก่อนหน้านี้แล้วในรูปแบบเดียวกันหลาย batch (LapseNotice, AllPremNotice ฯลฯ) — เกิด**ช่องว่างเชิง scope** ระหว่าง constitution กับลักษณะงานจริงที่ต้อง flag ให้ Platform Owner ตัดสินใจ ไม่ใช่สิ่งที่ควรแก้เองในระดับ implementation:

| Principle | สถานะ | รายละเอียด |
|---|---|---|
| I. PDPA-First | ✅ **ปิดแล้ว (ตัดสินใจโดย Aor, 2026-07-09)** | ยืนยันว่า SMS นี้เป็น **marketing** → พิจารณาทางเลือก opt-out ที่เป็นไปได้ (ไม่มี inbound SMS reply รองรับ — ตัด "STOP" ออก) เหลือ 2 ทาง: (1) เพิ่มลิงก์ยกเลิกใหม่ + suppression table ใหม่ หรือ (2) ใช้เบอร์ Call Center `โทร.1503` ที่**มีอยู่ในข้อความ SMS อยู่แล้ว**เป็นช่องทาง opt-out — **Aor ตัดสินใจ: ไม่ต้องปรับอะไรเพิ่ม** (ยึดเบอร์ 1503 เดิมเป็น opt-out channel ตามที่มีอยู่ โดยไม่ผูก process ใหม่กับ Do Not Contact List อย่างเป็นทางการ) → ปิด gap นี้ ไม่ต้องเพิ่ม FR ใหม่ใน spec.md — ส่วน `WELCOME_NEW_CUST_LINE` เก็บ plain PII ยังเหลือเป็นข้อ IV |
| II. Secure SMS Delivery | ✅ ส่วนใหญ่ผ่าน / ⚠️ 2 ข้อ | ข้อความไม่มี policy_no/national ID/การเงิน (ผ่าน), idempotency มี FR-010/020 (ผ่าน) — **แต่**: (a) Infobip เป็น IT-Security-approved provider หรือไม่ ไม่ได้ verify ในรอบนี้ (b) ไม่มี rate-limiting/anomaly detection design สำหรับปริมาณส่งสูง (constitution ตั้ง threshold >10,000 ข้อความ) |
| III. RBAC / Separation of Duties | ✅ **ยกเว้นแล้ว (ตัดสินใจโดย Aor, 2026-07-09)** | ยืนยันชัดเจนว่า feature 002 ตั้งใจให้เป็น **batch auto ส่งตามเงื่อนไขที่เขียนไว้ใน spec — ไม่ต้องมีคนสร้างหรืออนุมัติก่อนส่ง** (ไม่ใช่ "แคมเปญ" ตามนิยามของ constitution แต่เป็น system-triggered transactional notification จาก business event "กรมธรรม์ Inforce") → Principle III ไม่บังคับใช้กับ feature นี้ — `SYSTEM_BATCH` (auto) + `IT_ADMIN` (re-run/Manual Fix เท่านั้น ไม่ใช่ approval gate) เป็น role model ที่ถูกต้องตามที่ตั้งใจ ไม่ใช่ gap ที่ต้องแก้ |
| IV. Audit Trail | ✅ **ยกเว้นแล้ว (ตัดสินใจโดย Aor, 2026-07-09)** | FR-015/016/016a มี structured logging ครบ (ผ่านในหลักการ) — constitution ระบุ "MUST NOT log sensitive fields: phone numbers, customer PII" ขณะที่ `WELCOME_NEW_CUST_LINE` (FR-016) ต้องเก็บ `mobile_no`, `fname`, `lname`, `card_no` ตรงๆ — เป็น pattern เดียวกับทุก batch CSMS ที่มีอยู่ก่อนแล้วทั้งระบบ (ไม่ใช่สิ่งที่ feature 002 introduce ใหม่) — **Aor ตัดสินใจ (ทางเลือกที่ 1): ยอมรับว่า pattern เดิมนี้ยกเว้นจาก constitution เพราะเป็น legacy architecture ทั้งระบบ ไม่ใช่จุดบกพร่องเฉพาะ feature นี้** เช่นเดียวกับข้อ III → ไม่ต้อง mask/tokenize เพิ่ม ไม่ต้องส่ง Platform Owner/DPO อีก |
| V. Secure-by-Default Dev | ➡️ **บังคับใช้ตอน implement ไม่ใช่ design-time blocker** | Gates G1–G17 (SAST 0 Blocker, DAST 0 Critical, coverage ≥80%, no hardcoded secrets ฯลฯ) ต้อง pass ก่อน merge/deploy ตามปกติ — ยังไม่ทราบว่า pipeline ปัจจุบันของ epirusapp บังคับ gate เหล่านี้จริงหรือไม่ (esb-fnd-osgi ที่ `/learn` ไว้ไม่มี coverage tooling เลย) |

**สรุป**: เดิมมี 3 จุด (I, III, IV) — **ปิดครบทั้ง 3 ข้อแล้ว โดย Aor (2026-07-09)**: III ยกเว้น (system-triggered batch ไม่ใช่ human-authored campaign), I ปิด (ใช้เบอร์ Call Center `1503` เดิมเป็น opt-out channel), IV ยกเว้น (ยอมรับ pattern เก็บ PII แบบ plain ทั้งระบบ เป็น legacy architecture ไม่ใช่จุดบกพร่องของ feature นี้)

**Gate decision**: ✅ **PASS** — ไม่มี Constitution gap เหลือให้ Platform Owner/DPO ตัดสินใจอีก พร้อมเข้า Phase 2 (`/tasks`) ได้เลย

**Re-check หลัง Phase 1 (Post-Design)**: `data-model.md`/`contracts/` สอดคล้องกับการตัดสินใจล่าสุดทั้ง 3 ข้อ — ไม่มีอะไรค้าง

## Project Structure

### Documentation (this feature)

```text
specs/002-batch-welcome-new-customer-line-sms/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (ทำไว้แล้วล่วงหน้าระหว่าง /clarify)
│   ├── api-msa-custlookup.md
│   ├── api-smsgateway.md
│   └── api-omail.md
└── tasks.md             # Phase 2 output (/speckit-tasks — ยังไม่สร้าง)
```

### Source Code (repository: epirusapp, `/home/yaowaresni/space/project/epirusapp`)

```text
web/src/main/java/thaisamut/epirusapp/
├── schedule/ (หรือ v2/v3/schedule/ ตาม convention ล่าสุด)
│   └── SmsWelcomeNewCustLineCamelBean.java       # NEW — main batch bean (pattern: SmsLapseNoticeCamelBean)
├── component/
│   ├── MsaCustlookupClient.java                  # EXTEND หรือสร้าง client ใหม่ (E13-skip + isBlockLine)
│   └── SmsFileGatewayWsClientFactory (existing)  # REUSE — เรียก getSmsGatewayMessageV3ESBService()
├── action/
│   └── (ผูก batch เข้า Manual Fix ของ Admin Dashboard เดิม — ต้องหาไฟล์ action ของ dashboard กลาง)
└── ejbweb/src/main/java/thaisamut/epirusapp/ejbweb/
    ├── model/
    │   ├── SmsCategoryEntity.java (existing)      # INSERT row ใหม่ (code 113) ผ่าน Liquibase ไม่ต้องแก้ entity
    │   └── WelcomeNewCustLineEntity.java          # NEW — entity คู่กับตาราง WELCOME_NEW_CUST_LINE
    └── impl/
        └── SmsSendingServiceImpl.java (existing)  # EXTEND — เพิ่ม method บันทึก/query สำหรับ batch นี้

ejbweb/src/main/resources/dbchangelog/
└── db-changelog-epirus-0.30.0.xml (หรือเลขถัดไป)  # NEW — สร้างตาราง WELCOME_NEW_CUST_LINE + insert SMS_CATEGORY code 113
```

**Structure Decision**: Single-project extension ของ monolith เดิม (epirusapp) — ไม่มี frontend/backend แยก ไม่มี mobile component เพราะ feature เป็น backend batch job ล้วน UI ที่เกี่ยวข้อง (Manual Fix, รายงาน) ใช้หน้าที่มีอยู่แล้วของ Admin Dashboard กลาง CSMS (Q-004 Closed) — ไม่สร้าง UI ใหม่

## Complexity Tracking

> Fill ONLY if Constitution Check has violations that must be justified

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|---------------------------------------|
| ~~ไม่มี Creator/Approver separation (Principle III)~~ → **✅ ยกเว้นแล้ว (Aor, 2026-07-09)** | Feature เป็น system-triggered notification ต่อ business event (policy approved) ไม่ใช่ human-authored campaign ตามที่ตั้งใจไว้แต่แรก — ยืนยันชัดเจนแล้วว่าเป็น batch auto ล้วน ไม่ต้องมีคนสร้าง/อนุมัติก่อนส่ง | (ปิดแล้ว — ไม่ต้องหาทางออกอื่น) |
| ~~เก็บ PII (mobile_no/fname/lname) เป็น plain field ใน `WELCOME_NEW_CUST_LINE` (Principle IV)~~ → **✅ ยกเว้นแล้ว (Aor, 2026-07-09)** | ต้องใช้ field เหล่านี้ตรงๆเพื่อ dedup (FR-009), ป้องกันส่งซ้ำ (FR-010), และ reconcile รายงาน (FR-021) — เป็น schema pattern เดียวกับทุกตาราง log ของ CSMS ที่มีอยู่ก่อน (`CsmsLogEntity`, `LapseNoticeEntity` ฯลฯ) — Aor ยืนยันยอมรับ pattern เดิมทั้งระบบ ไม่ต้องแก้เฉพาะ feature นี้ | (ปิดแล้ว — ไม่ต้องหาทางออกอื่น) |

> **ปิดแล้ว** — opt-out mechanism (Principle I): SMS นี้เป็น marketing (ยืนยันโดย Aor) และไม่มี inbound SMS reply รองรับ — Aor ตัดสินใจใช้เบอร์ Call Center `1503` ที่มีอยู่ในข้อความ SMS เดิมเป็นช่องทาง opt-out โดยไม่ต้องเพิ่ม FR/table/process ใหม่ ("ไม่ต้องปรับอะไร", 2026-07-09) → ไม่มี action item เหลือสำหรับข้อนี้

**ข้อเสนอ**: ปิดครบทั้ง 3 ข้อแล้ว (I, III, IV ยกเว้น/ตัดสินใจโดย Aor ทั้งหมด) — **ไม่มี item เหลือให้ Platform Owner/DPO** — พร้อมเข้า `/tasks` ได้เลย
