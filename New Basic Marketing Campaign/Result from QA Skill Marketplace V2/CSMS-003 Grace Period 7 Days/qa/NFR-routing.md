# NFR Routing — CSMS-003 Grace Period 7 วัน

**Date:** 2026-07-09 · **Producer:** `/test-case-generator` (B2 NFR routing) · audit โดย `/coverage-review` + `/qa-reconcile`

| REQ-id | ชนิด | รายละเอียด | ปลายทาง | สถานะ |
|---|---|---|---|---|
| SC-001 | perf | batch เสร็จ ≤5 นาที ต่อ ≤10,000 รายการ/รอบ | perf/load track (ยังไม่มี track — TODO) | pending |
| SC-002 | reliability | ≥99% ของกรมธรรม์ที่คัดได้รับ refer_no | perf/reliability track (TODO) | pending |
| SC-005 | perf/ops | email แจ้งความล้มเหลว ≤15 นาที นับจากเวลาประมวลผล | ops/monitoring track (TODO) | pending |
| SC-006 | perf/ops | Manual Fix ให้กลุ่มค้างครบ ≤1 ชั่วโมง | ops track (TODO) | pending |

> SC-003/SC-004/SC-007 = functional (คลุมด้วย TC dedup/log/DNC-LINE ใน `03-test-cases.md`) — ไม่ route ออก.
> security/a11y = N/A (batch backend, ไม่มี UI สาธารณะ ยกเว้นหน้า Manual Fix กลางที่อยู่นอก scope การออกแบบ).
