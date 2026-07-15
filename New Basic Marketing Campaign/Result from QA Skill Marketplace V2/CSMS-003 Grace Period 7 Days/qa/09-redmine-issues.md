# 09 — Redmine Issues (would-be only — NO tickets created)

**Feature:** CSMS-003 — Grace Period 7 วัน · **Skill:** `/redmine-logging` · **Date:** 2026-07-09

## Status: ⏳ BLOCKED / DRY-RUN — ไม่สร้าง ticket จริง (no fabrication, no project_id)

execution defects ยังไม่มี (07 = Not Run). รายการด้านล่างเป็น **would-be issues จาก requirement gaps (01)** ที่ควร log เมื่อได้ project_id + ยืนยันกับ SA — **ยังไม่สร้างตั๋ว**.

| Would-be ID | Source | Priority | Subject | Type |
|---|---|---|---|---|
| (RQ-002) | 01 / RISK-001 | High (P1) | นิยาม dedup ตรวจ `sms_sent_status` ใด (เฉพาะ 'S'?) — กัน 'F' ไม่ให้ Manual Fix ซ่อม | Requirement clarification |
| (RQ-003) | 01 / RISK-005 | High (P1) | กำหนด CSV column schema/ลำดับ/header/delimiter | Requirement / Data definition |
| (RQ-001) | 01 / RISK-004 | High (P1) | นิยามพฤติกรรม LINE `E00 & isBlockLine=true` | Requirement clarification |
| (RQ-004) | 01 | Normal (P2) | ยืนยัน era ของ `YYMMDDhhmmss` (พ.ศ. vs ค.ศ.) + ความไม่สมมาตรกับข้อความ | Requirement clarification |
| (RQ-005) | 01 | Normal (P2) | นิยามรูปแบบ `refer_no` ที่ถือว่า "ผิดรูปแบบ" | Requirement clarification |
| (RQ-006..010) | 01 | Low (P3) | SLA/timeout, retry backoff, created_by, timezone, ค่าคงที่ dept/system/category | Requirement clarification |

## เงื่อนไขสร้างจริง
- **ต้องถาม project_id ก่อน** (redmine-logging ask-first) — ยังไม่มี → ไม่สร้าง
- execution defects (จาก 07) จะเพิ่มเข้ามาเมื่อ execute 06b เสร็จ; CRITICAL/HIGH execution defect ทุกตัวต้องมี issue (ตรวจซ้ำที่ RTM re-run)
