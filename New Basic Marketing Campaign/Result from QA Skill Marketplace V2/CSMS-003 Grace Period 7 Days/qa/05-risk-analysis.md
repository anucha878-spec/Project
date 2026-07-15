# 05 — Risk Analysis (analysis-only gate)

**Feature:** CSMS-003 — Grace Period 7 วัน · **Skill:** `/risk-analysis` · **Date:** 2026-07-09
**Input:** `01`, `02`, `03`, `04`

---

### 1. Executive Risk Summary
- **Overall System Risk Level: HIGH**
- **Top 3 risk areas:**
  1. **การส่งผิดกลุ่ม / dedup ผิดพลาด** — ส่งซ้ำ, ส่งให้ DNC, ส่งให้คนลงทะเบียน LINE แล้ว หรือ dedup รวมรายลูกค้าผิด (ควรราย policy) → กระทบ compliance + ค่าใช้จ่าย + ความรำคาญลูกค้า
  2. **หน้าต่างวัน 7 วันคลาดเคลื่อน** — off-by-one จากการนับ inclusive/exclusive หรือ timezone → ส่งผิดวัน/พลาดกลุ่ม (แก่นธุรกิจ)
  3. **Requirement gap ที่ block ได้ (RQ-002 dedup-status, RQ-003 CSV schema, RQ-001 LINE branch)** — พฤติกรรมไม่นิยาม → เสี่ยง dev เดา + ส่ง Gateway ผิด format
- **Key concern:** feature พึ่ง external 3 ระบบ + audit log ที่ต้อง 100% ถูกต้อง; ความล้มเหลวเงียบ (skip ไม่ log / dedup กัน 'F') อันตรายสุด

### 2. Critical Risk Areas (CRITICAL / HIGH)

**RISK-001 — dedup ตรวจสถานะผิด กัน 'F' ไม่ให้ซ่อม** · Type: Business/Technical · REQ: FR-008,FR-014 · TC: TC-029 · **Severity: CRITICAL · Likelihood: Medium**
- ถ้า dedup นับรวม 'F' → รายการที่ skip จะซ่อมผ่าน Manual Fix ไม่ได้ (ขัด FR-014 idempotent-แต่-ซ่อมได้) → ลูกค้าไม่ได้รับแจ้งเตือน ขาดความคุ้มครอง. **รอ RQ-002**

**RISK-002 — per-policy fan-out ถูก dedup รวมรายลูกค้า** · Type: Business · REQ: FR-008 · TC: TC-024,025 · **Severity: CRITICAL · Likelihood: Medium**
- CSMS-003 ต่างจาก CSMS-001/002 (ที่ dedup รายคน) — ถ้า dev นำ logic เดิมมาใช้ ลูกค้าหลายกรมธรรม์จะได้ SMS เดียว → พลาดแจ้งเตือนบางกรมธรรม์ที่ใกล้ขาดผ่อนผัน

**RISK-003 — หน้าต่างวัน off-by-one / timezone** · Type: Business/Technical · REQ: FR-003 · TC: TC-003..006 · **Severity: CRITICAL · Likelihood: Medium**
- นับ inclusive แทน exclusive หรือ timezone เพี้ยน → คัดกลุ่มผิดวัน (ส่งเร็ว/ช้าไป 1 วัน) กระทบทั้ง batch. RQ-009 (timezone) เพิ่มความเสี่ยง

**RISK-004 — ส่งให้กลุ่มห้ามติดต่อ / ลงทะเบียน LINE แล้ว** · Type: Business/Compliance · REQ: FR-005,FR-007 · TC: TC-014,015,021 · **Severity: HIGH · Likelihood: Low-Medium**
- ผิด SC-007 (เคารพ 100%). LINE branch `E00&isBlockLine=true` ไม่นิยาม (RQ-001) → เสี่ยงส่งผิด

**RISK-005 — CSV schema/era ไม่นิยาม → Gateway ประมวลผลผิด** · Type: Technical/Integration · REQ: FR-009 · TC: TC-031,032,033 · **Severity: HIGH · Likelihood: Medium**
- RQ-003 (คอลัมน์) + RQ-004 (พ.ศ./ค.ศ. ในชื่อไฟล์) — ไฟล์ผิด format → Gateway อ่านไม่ได้/ส่งพลาด, monitoring จับไฟล์ผิด

**RISK-006 — silent skip ไม่ถูก log 'F'** · Type: Technical/Audit · REQ: FR-004a,006a,007,012 · TC: TC-013,019,022,036 · **Severity: HIGH · Likelihood: Low**
- ถ้า skip แต่ไม่ log 'F' → audit trail ขาด, ซ่อม Manual Fix ไม่ครบ (ขัด SC-004 100% logged)

**RISK-007 — ความล้มเหลวระดับรอบไม่แจ้งเตือน/ไม่หยุด** · Type: Technical/Ops · REQ: FR-013, Edge · TC: TC-039,040 · **Severity: HIGH · Likelihood: Low**
- LINE ล่มทั้งระบบไม่หยุด+ไม่ email, หรือ CSV fail เงียบ → กลุ่มค้างไม่ถูกซ่อม. SLA/backoff numeric ไม่ระบุ (RQ-006/007)

### 3. Risk Heatmap
- 🔴 **High Business Risk:** dedup/fan-out (RISK-001,002), date-window (RISK-003), DNC/LINE (RISK-004)
- 🟠 **High Technical Complexity:** integration 3 ระบบ + CSV/era (RISK-005), round-failure handling (RISK-007)
- 🟡 **Weak Coverage (requirement gap):** RQ-001..005 → 4 TC assumption (ยังปิดไม่ได้)
- 🔵 **Automation Risk:** ต้อง mock LINE/ESB/Gateway/Email + assert DB log/CSV; ไม่มี UI ตรง (ยกเว้น Manual Fix) → automation ยาก, flaky จาก timing external

### 4. Missing Risk Signals
- **High business impact + coverage อ่อน:** dedup-status (RQ-002) — CRITICAL แต่ TC ปิดไม่ได้จนตอบ RQ
- **flows ที่ E2E ไม่ครบ:** guard `E00&isBlockLine=true` (undefined transition)
- **validation depth อ่อน:** refer_no "ผิดรูปแบบ" (RQ-005) ไม่มี oracle เป๊ะ
- **silent failure:** skip-path ต้อง assert **ทั้ง** "ไม่ส่ง" **และ** "log 'F'" — ถ้า assert แค่อย่างเดียวจะพลาด (ระบุใน TC-013/019/022/036 แล้ว)

### 5. Test Execution Priority Ranking
- **P0 (ต้องรันก่อน):** TC-003,004,005 (date-window) · TC-024 (fan-out) · TC-026,027,028 (dedup/idempotency) · TC-013,019,022,036 (skip+log 'F') · TC-014,015,021 (DNC/LINE คัดออก) — RISK-001..004,006
- **P1:** TC-001,002,010,011,012,020,030,031,034,035,039,040 (แก่น flow + round-failure) — RISK-005,007
- **P2:** TC-006,007,009,016,017,018,025,038,041 (boundary รอง, integration รอง)
- **P3:** TC-008,033 (default config, era edge — low freq) + `[ASSUMPTION]` TC-023,029,032,037 (blocked จน RQ ตอบ)

### 6. Risk Coverage Matrix

| FR | Coverage Quality | Risk Level | Notes |
|---|---|---|---|
| FR-003 (date) | High | CRITICAL | boundary ครบ; timezone RQ-009 |
| FR-008 (dedup/fan-out) | Medium | CRITICAL | RQ-002 blocks idempotency oracle |
| FR-005/007 (DNC/LINE) | Medium-High | HIGH | RQ-001 (E00&block=true) |
| FR-009 (CSV) | Low-Medium | HIGH | RQ-003/004 schema/era |
| FR-004a/006a (skip) | High | HIGH | ต้อง assert log 'F' |
| FR-012 (log) | High | HIGH | SC-004 100% |
| FR-013 (email) | Medium | HIGH | RQ-006 SLA |
| FR-001/002/010/011 | High | MEDIUM | ตรงไปตรงมา |

### 7. Recommendations (QA Strategy)
- **ปิด RQ ก่อน execute:** RQ-002 (dedup-status) + RQ-003 (CSV schema) = blocker ของ automation ที่มีคุณค่า; RQ-001/004/005 ตามมา
- **Mock harness:** สร้าง stub LINE (E02/E00-false/E00-true/E13/empty), Gateway (success+refer_no/timeout/5xx/malformed), Email capture, CSV file assert — ก่อน 06a
- **DB-level assertion:** ผล selection/dedup/log ตรวจที่ `SMS_GRACE_PERIOD_LOG` + CSV (ไม่มี UI) → automation ต้องเข้าถึง DB/ไฟล์
- **Manual จุดที่ automate ยาก:** Manual Fix บน Admin Dashboard กลาง (UI นอก scope) — driver ผ่าน UI + ตรวจ log
- **Regression กับ CSMS-001/002:** ยืนยัน fan-out ราย policy ไม่ถูก logic dedup-รายคนของพี่น้อง batch มาปน

### Next Step: Loop-back
- **No loop-back needed** — ทุก CRITICAL/HIGH risk มี TC cover แล้ว (RISK-001..007 → TC ครบ). ที่ค้างเป็น **requirement RQ** ไม่ใช่ TC gap → ไม่ bump iteration. เดินหน้าไป 06
