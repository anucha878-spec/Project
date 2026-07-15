# RTM — Reconciliation & Traceability Matrix (PARTIAL, design-side)

**Feature:** CSMS-003 — Grace Period 7 วัน · **Skill:** `/qa-reconcile` · **Date:** 2026-07-09
**Input:** `00b`, `03`, `04`, `05`, `06` (+ spec). **`07`/`09` = `[NOT PROVIDED]`** (execution ยังไม่เกิด — Leg A) → Result/Defect/Issue columns pending.

---

### 1. Reconciliation Verdict
- **PARTIAL PASS (design-side)** — ไม่มี orphan/dangling ในสาย `REQ → atom → TC → Data → Risk`. สาย `Result → Defect → Issue` = `[NOT PROVIDED]` (รอ execution).
- **นับจริง:** REQ (FR) = 14 · atom = 62 (✅48/❓8/🔒6) · TC = 41 · Test Data (TD) = 30 · Risk = 7 (CRITICAL 3 / HIGH 4) · Result = 0 (Not Run) · Defect = 0 (pending) · Issue = 0 (pending)

### 2. Orphan (forward gap — ต้นทางไม่มี downstream)
- **REQ → TC:** 14/14 FR มี ≥1 TC — ไม่มี orphan
- **atom → TC:** 48/48 ✅ atoms มี TC; 14 atoms ❓/🔒 → TC `[ASSUMPTION]` (ชี้ RQ, ไม่นับ orphan แต่เป็น blocker)
- **TC → Data:** TC ที่ต้องใช้ data มี TD ครบ (P0/P1). TC-001,002,017,018,034,036 = flow/integration ไม่มี inline data (BLOCKED env) → หมายเหตุ ไม่ใช่ NO-DATA gap
- **CRITICAL/HIGH risk → TC:** RISK-001..007 มี TC cover ครบ — ไม่มี high-risk uncovered
- **executed TC → result:** ⏳ `[NOT PROVIDED]` — ยังไม่ execute (06b BLOCKED)

### 3. Dangling (backward — อ้างของที่ไม่มี)
- **TC → REQ:** ทุก TC อ้าง FR-id ที่มีจริงใน spec — ไม่มี dangling
- **Data → TC:** ทุก TD อ้าง TC-id ที่มีจริง (TD-001..030 → TC-003..040) — ไม่มี dangling
- **Risk → REQ/TC:** RISK-001..007 อ้าง FR/TC ที่มีจริง — ไม่มี dangling
- **Defect/Issue → TC:** `[NOT PROVIDED]`

### 4. Count Mismatch
- `TC total (41) = automated 0 + fixme 41 + skip 0` ✅ (ทุก TC เป็น fixme — 06a scaffold)
- ตัวเลข coverage (04) / risk (05) / data (06) สอดคล้องกัน — ไม่มี mismatch
- `defect CRITICAL+HIGH = Redmine P0+P1` → ยังไม่มีทั้งสองฝั่ง (0=0) — n/a จน execution

### 5. RTM (Consolidated)

| REQ | Atom (ตัวอย่างหลัก) | TC | Test Data | Risk | Result | Defect/Issue |
|---|---|---|---|---|---|---|
| FR-001 | AT-001,002 | TC-001 | — | MEDIUM | Not Run | pending |
| FR-002 | AT-009 | TC-002 | — | MEDIUM | Not Run | pending |
| FR-003 | AT-003,004,005,006,007,008 | TC-003..008 | TD-001..004 | RISK-003 CRIT | Not Run | pending |
| FR-004 | AT-010,011 | TC-009,010 | TD-005,006 | RISK-003 | Not Run | pending |
| FR-004a | AT-012,013,014,015 | TC-011,012,013 | TD-007,008,009 | RISK-006 HIGH | Not Run | pending |
| FR-005 | AT-016,017,018 | TC-014,015,016 | TD-010,011,012 | RISK-004 HIGH | Not Run | pending |
| FR-006 | AT-019 | TC-017 | — | RISK-004 | Not Run | pending |
| FR-006a | AT-020,021 | TC-018,019 | TD-013 | RISK-006 | Not Run | pending |
| FR-007 | AT-022,023,024,025 | TC-020,021,022,023* | TD-014,015,016,017 | RISK-004 HIGH | Not Run | pending |
| FR-008 | AT-029,030,031,032,033,034,035 | TC-024,025,026,027,029* | TD-018..023 | RISK-001,002 CRIT | Not Run | pending |
| FR-009 | AT-036,037,038,039,040 | TC-031,032*,033* | TD-025,026 | RISK-005 HIGH | Not Run | pending |
| FR-010 | AT-041,042,043,044 | TC-030 | TD-024 | RISK-005 | Not Run | pending |
| FR-011 | AT-046,047 | TC-034 | — | MEDIUM | Not Run | pending |
| FR-012 | AT-048,049,050,051,055 | TC-035,036,037*,038 | TD-027,028,029 | RISK-006 HIGH | Not Run | pending |
| FR-013 | AT-056,057,058 | TC-039 | TD-030 | RISK-007 HIGH | Not Run | pending |
| FR-014 | AT-062,063,064 | TC-028,029* | TD-022,023 | RISK-001 CRIT | Not Run | pending |

`*` = TC `[ASSUMPTION]` (RQ-001/002/003/004/005 ยังไม่ตอบ)

### 6. Next Step
- **Design-side PASS** → เข้า 08 ได้ (ใช้ RTM เป็น Appendix). **แต่ยังไม่พร้อม release** — Result/Defect/Issue ว่าง (Not Run).
- ก่อน sign-off จริง: (1) ปิด RQ-001..RQ-005; (2) provision SIT env + mocks; (3) execute 06b → 07; (4) re-run `/qa-reconcile` หลัง 09 เพื่อปิดสาย Defect→Issue
