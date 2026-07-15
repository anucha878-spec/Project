# 00 — Test Plan / Strategy

**Feature:** CSMS-003 — Batch ส่ง SMS "Grace Period 7 วันก่อนหมดระยะเวลาผ่อนผัน"
**Slug:** `csms-003-grace-period` · **Skill:** `/test-plan` (Leg A, source=spec.md) · **Date:** 2026-07-09

## 1. Summary
Feature = batch เบื้องหลัง (scheduled job) คัดกรมธรรม์ ORD/IND/PA สถานะ Inforce ที่เหลือ 7 วันก่อนหมดผ่อนผัน + ยังไม่ลงทะเบียน LINE → ส่ง SMS ราย policy ผ่าน ESB→SMS Gateway + บันทึก log + แจ้งเตือน/Manual Fix.
**Plan verdict: ติด dependency (env-level)** — feature เป็น backend batch ไม่มี UI ทดสอบตรง (ยกเว้นหน้า Manual Fix กลาง), ยังไม่มี SIT env/DB/creds/mock LINE+Gateway → ออกแบบเต็ม (design-side) ได้ แต่ **execute ไม่ได้ในรอบนี้** (Leg A / hard wall ที่ execute).

## 2. Scope
**In-scope (functional/integration):**
- FR-001..FR-014 ทั้งหมด (date-window 7 วัน, Inforce filter, mobile1/2 fallback, DNC filter, cardNo map, LINE E02/E00 branch, dedup policy_no+due_date, per-policy fan-out, CSV gen, template var replace, Gateway submit, log S/F, email fail, Manual Fix idempotent)
- Data/logic verification ที่ระดับ dataset + expected outcome (คัดเข้า/คัดออก/skip+F)

**Out-of-scope:**
- การออกแบบ UI/Field ใหม่ของ Admin Dashboard (ใช้หน้า Manual Fix กลางที่มีอยู่ — ตาม spec นอก scope)
- logic คำนวณ credit เดิมของ CSMS, การเปลี่ยนแปลง batch CSMS-001/002
- ระบบภายนอกจริง (LINE `cisappapi`, ESB, SMS Gateway) — ทดสอบผ่าน mock/stub เท่านั้น ไม่ยิงของจริง
- Pentest/security exploit track

**NFR scope:** SC-001 (perf ≤5 นาที/10k), SC-002 (99% refer_no), SC-005 (email ≤15 นาที), SC-006 (Manual Fix ≤1 ชม.) = **route ไป perf/reliability track** (นอก functional รอบนี้ — ดู `NFR-routing` ใน 03). SC-007 (เคารพ DNC/LINE 100%) คลุมโดย functional TC.

## 3. Test Levels & Types
- **Integration / batch E2E (หลัก):** dataset → รัน batch 1 รอบ → ตรวจ target selection + CSV + log + dedup. QA รอบนี้เน้นระดับนี้.
- **Business-rule / decision-table:** date-window, Inforce, DNC, LINE branch, mobile fallback, dedup.
- **State/idempotency:** re-run + Manual Fix ไม่ส่งซ้ำ.
- **Negative/skip-path:** cardNo not found, mobile ว่างทั้งคู่, LINE abnormal, refer_no malformed, CSV fail, API down.
- Functional เป็นหลัก; non-functional (perf/reliability) แยก track.

## 4. Test Environment & Data
- **Target env:** SIT (ยังไม่ระบุ host/creds — RQ ต่อทีม infra). Manual Fix ผ่าน Admin Dashboard กลาง CSMS.
- **DB:** DWConsole (`ili_policy_master`, `ili_notification_letter`, `ili_policy_remark`, `cf_catalog`) + `SMS_GRACE_PERIOD_LOG` (ต้องสร้างใหม่).
- **External:** LINE `cisappapi@11.100.8.44`, ESB, SMS Gateway → **mock/stub** (กำหนด response E02/E00/E13/empty/refer_no ได้).
- **Test data strategy:** **synthetic เท่านั้น** (ห้าม PII จริง) — เตรียมใน `06-test-data.json`, เน้น boundary รอบหน้าต่าง 7 วัน. อ้าง `06`.
- **Dependency/readiness:** env up + creds + LINE/Gateway mock + seed data + SMS_GRACE_PERIOD_LOG พร้อม = ผูกกับ readiness gate 06a/A5.

## 5. Entry / Exit / Suspension Criteria (machine-checkable)
**Entry:** spec approved + RQ-001..RQ-010 มีคำตอบ (โดยเฉพาะ RQ-002 dedup-status & RQ-003 CSV schema เป็น blocker ของ automation) · SIT env up · seed data + mocks พร้อม · TC (03) ready.
**Exit (ผูกกับ 08):**
- Open P0 (CRITICAL) defect = 0
- Open P1 (HIGH) defect = 0 (หรือ accepted-risk ที่ระบุ)
- Requirement coverage = 100% (ทุก FR + atom มี ≥1 TC ที่รันแล้ว)
- CRITICAL/HIGH risk validated ครบ
- Reconciliation (`/qa-reconcile`) = PASS
**Suspension/Resume:** หยุดเมื่อ SIT DB/mocks ล่ม, หรือ P0 blocker (เช่น dedup ส่งซ้ำ/ส่งผิดกลุ่ม DNC) → กลับมาเมื่อ env คืน + hotfix.

## 6. Approach & Risk Focus
- เทคนิคหลัก (ให้ 03 ทำจริง): **BVA** (หน้าต่างวัน 6/7/8 + วันหยุด), **Decision Table** (Inforce × DNC × LINE-result × dedup × mobile), **State/idempotency** (re-run, Manual Fix), **EP/negative-per-branch** (skip paths).
- Focus ก่อน (business-critical → ชี้ให้ 05): (1) date-window 7 วันแม่นยำ, (2) per-policy fan-out ไม่ dedup รายคน, (3) dedup ไม่ส่งซ้ำ/Manual Fix idempotent, (4) เคารพ DNC/LINE (ไม่ส่งผิดกลุ่ม).
- Automation vs manual: batch/data-driven → automation (Playwright ขับหน้า Manual Fix + ตรวจ log/CSV) เท่าที่มี UI; logic-only branch = manual/DB assertion. รอบนี้ **generate spec เท่านั้น ไม่รัน**.

## 7. Assumptions / Dependencies / Plan Risks
- **Assumption:** สืบทอดข้อยุติ CSMS-001/002 (retry ≤3, log 'F', email, Manual Fix กลาง). DWConsole/LINE/Gateway/template พร้อมตาม Assumptions ใน spec.
- **Dependencies:** infra ให้ SIT host+creds; mock LINE/Gateway; สร้าง `SMS_GRACE_PERIOD_LOG`; ตอบ RQ.
- **Plan risks:** (a) ไม่มี env → execute ไม่ได้ (รอบนี้ design-only); (b) RQ-002/RQ-003 ไม่ตอบ → automation ของ dedup/CSV ทำได้ไม่ครบ; (c) ระบบภายนอก 3 ตัว (LINE/ESB/Gateway) mock ไม่ครบ → integration coverage ไม่จริง.

## 8. Open Questions (RQ) — ให้ SA/PM/infra ตอบ
- RQ-001..RQ-010 (ดู `00b-atom-inventory.md` / `01-requirement-review.md`). Blocker ต่อ execution: **RQ-002 (dedup ตรวจ status ใด), RQ-003 (CSV schema)**.
- Env: SIT host/URL, creds ราย role, entry navigation ของหน้า Manual Fix, endpoint mock LINE/Gateway. (env-level — คาดว่าต้องถามตอน 06a A0 gate.)
