# MCMP — GrowthAi Spec: Gap Analysis & เพิ่มเติม Test Cases

> **Source:** `ตัวอย่างการ Set up Segment / Message / Campaign (GrowthAi) - Google Slides.pdf` (74 หน้า, สกัดข้อความ → `growthai_clean.txt`)
> **เทียบกับ:** `MCMP_Test_Design.md` (155 TC อิง BRD v0.1) + `BRD_Summary_Workflow.md`
> **วันที่:** 2026-06-30
> **ข้อสรุปหลัก:** GrowthAi คือ **เครื่องมือ marketing-automation จริง** ที่จะใช้ทำ Segment / Message / Campaign. Campaign ใน GrowthAi เป็น **visual flow builder (Decision / Condition / Action)** — ไม่ใช่โมเดล "สร้าง campaign + เลือกช่องทาง" แบบที่ test cases เดิมสมมติไว้. นี่คือ gap ที่กระทบ TS-06 มากที่สุด.

---

## ส่วนที่ 1 — Gap Analysis (GrowthAi เปิดเผยอะไรที่ test cases เดิมยังไม่ครอบคลุม)

### 1.1 Segment (เทียบ TS-04)
| รายละเอียดจาก GrowthAi (สไลด์ 2–32) | สถานะใน TC เดิม | Action |
|---|---|---|
| Set up ชื่อ, ค้นหา, ห้ามชื่อซ้ำ, เปิด/ปิด, Clone | ✅ TC-04-01..04 | คงไว้ |
| Metadata: Created by/on, Modified by, Last modified, ID (running no) | ✅ TC-04-09 (P3) | **ยกระดับ** + แยก "Modified by/Last modified อัปเดตหลัง edit" |
| Action bar: **edit / clone / refresh / delete** | ⚠️ ไม่มี `refresh`, `delete` | **เพิ่ม** TC-04-11, 04-12 |
| แสดง **number of customers in segment** (badge นับจำนวน) | ❌ ไม่มี | **เพิ่ม** TC-04-13 |
| **Customer 360** view (ดูโปรไฟล์ลูกค้าใน segment) | ❌ ไม่มี | **เพิ่ม** TC-04-14 |
| Filter ตามสถานะช่องทาง: "ยังไม่เป็น Ocean Connect", "มี Email แต่ไม่มี App", "มี LINE แต่ไม่มี App", "มี App แต่ไม่มี LINE" | ❌ TC-04-05/06 เป็น filter พื้นฐาน (gender/age/RFM) เท่านั้น | **เพิ่ม** TC-04-15 (channel-presence filter) |
| Filter ตาม **Health Score**, **CLV ≥ 100,000**, เบี้ย < 20,000, อายุ 41–50, behavior "เข้าหน้าบทความภาษี/ออมทรัพย์" | ⚠️ ครอบคลุมแค่ RFM/CLV ระดับกลุ่ม | **เพิ่ม** TC-04-16, 04-17 (numeric/behavioral filter) |

### 1.2 Message (เทียบ TS-07)
| รายละเอียดจาก GrowthAi (สไลด์ 33–39) | สถานะใน TC เดิม | Action |
|---|---|---|
| search, details, personalization variable, insert link, character+credit count, preview | ✅ TC-07-01..08 | คงไว้ |
| Action bar: **edit / clone / refresh / delete** | ⚠️ มีแค่ clone (TC-07-09) | **เพิ่ม** TC-07-10 (refresh/delete) |
| แสดง **Message ID** + **number of credit** (badge บนการ์ด) | ❌ ไม่มี | **เพิ่ม** TC-07-11 |

### 1.3 Campaign — ⭐ Gap ใหญ่ที่สุด (เทียบ TS-06)
GrowthAi Campaign = **automation flow** ประกอบด้วย node **Decision / Condition / Action** (สไลด์ 40–62). โมเดลนี้ไม่อยู่ใน test cases เดิมเลย.

| รายละเอียดจาก GrowthAi | สถานะใน TC เดิม | Action |
|---|---|---|
| Campaign: Name & Description, search, edit/clone/delete, Campaign ID | ✅ TC-06-01/02/08 | คงไว้ |
| **Add contact source** = ผูก Segment ที่สร้างไว้เข้า campaign | ⚠️ implicit | **เพิ่ม** TC-06-13 |
| **Decision node** (แตกเส้นทาง yes/no) | ❌ ไม่มี | **เพิ่ม** TC-06-14 |
| **Condition node** — branch ตาม **Contact tags** | ❌ ไม่มี | **เพิ่ม** TC-06-15 |
| **Action: Send email** + **new email builder** (drag-drop) | ⚠️ TC-07-03 แค่รูปแบบ message | **เพิ่ม** TC-06-16 |
| **Action: Send text message** (เลือก Message เดิม / สร้างใหม่) | ⚠️ implicit | **เพิ่ม** TC-06-17 |
| **Action: Mobile app message** (push) | ⚠️ BRD มี Ocean Club push | **เพิ่ม** TC-06-18 |
| **Action: Send a webhook** | ❌ ไม่มีเลย | **เพิ่ม** TC-06-19 |
| **Action: การตั้งเวลาส่ง** (delay/schedule ราย action ในflow) | ⚠️ TC-06-05 เป็น schedule ระดับ campaign | **เพิ่ม** TC-06-20 (per-step timing) |
| **Upload segment → Facebook Custom Audience (Lookalike)** | ⚠️ TC-05-xx/TC-06-09 ระดับ sync | **เพิ่ม** TC-06-21 (จาก segment โดยตรง) |
| **Upload segment → Google Customer Match** | ⚠️ คล้ายกัน | **เพิ่ม** TC-06-22 |

### 1.4 Campaign Tracking — เมตริกที่ GrowthAi ระบุชัด (เทียบ TS-10)
GrowthAi (สไลด์ 65–69) กำหนดคอลัมน์ SUMMARY ต่อ campaign แน่นอน:
**Total User · Total Send · Total Credit · Total Fail · Total Click · Unique Click** + drill-down + วัน-เวลาเปิดอ่านรายคน

| เมตริก | สถานะใน TC เดิม | Action |
|---|---|---|
| Total Send / Open / Unique Click | ✅ TC-06-10/11/12, TC-10-01 | คงไว้ |
| **Total User** (จำนวนคนทั้งหมดใน campaign ≠ Total Send) | ❌ ไม่แยก | **เพิ่ม** TC-10-06 |
| **Total Credit** (เครดิต SMS ที่ใช้ต่อ campaign) | ❌ ไม่มี | **เพิ่ม** TC-10-07 |
| **Total Fail** (ส่งไม่ถึง ต่อ campaign) | ⚠️ TC-09-03 ระดับ list | **เพิ่ม** TC-10-08-b (รวมยอดใน summary) |
| Drill-down: คลิกเข้า campaign ดูรายคลิก | ❌ ไม่มี | **เพิ่ม** TC-10-09 |
| วัน-เวลาเปิดอ่านรายคน | ✅ TC-10-02 | คงไว้ |

---

## ส่วนที่ 2 — Test Cases เพิ่มเติม (พร้อมนำไปใช้)

> Priority: P1=Critical, P2=High, P3=Medium · Type: Pos/Neg/Bnd

### TS-04 (เพิ่ม) — Segment ตาม GrowthAi
| TC ID | Title | Trace | Type | Steps | Expected Result | Pri |
|---|---|---|---|---|---|---|
| TC-04-11 | Refresh segment คำนวณสมาชิกใหม่ | GAi-Seg | Pos | กด refresh บน segment ที่มี filter | จำนวนสมาชิกถูก recompute ตามข้อมูลล่าสุด | P2 |
| TC-04-12 | Delete segment | GAi-Seg | Pos | กด delete + ยืนยัน | segment ถูกลบ; ถ้าผูกกับ campaign ที่ active → เตือน/บล็อก | P1 |
| TC-04-13 | แสดงจำนวนลูกค้าใน segment (count badge) | GAi-Seg | Pos | เปิด segment ที่มี filter | badge แสดงจำนวนตรงกับผล filter จริง | P1 |
| TC-04-14 | Customer 360 จากใน segment | GAi-Seg | Pos | คลิกลูกค้า 1 ราย | แสดงโปรไฟล์ 360 (ช่องทาง, กรมธรรม์, activity) ถูกต้อง | P2 |
| TC-04-15 | Filter channel-presence (มี Email ไม่มี App / มี LINE ไม่มี App / ยังไม่เป็น Ocean Connect) | GAi-Seg | Pos | สร้าง segment "มี Email และยังไม่มี Ocean Club App" | ได้เฉพาะลูกค้าที่ตรงเงื่อนไขช่องทาง (มี email = true AND app = false) | P1 |
| TC-04-16 | Filter numeric/behavioral (Health Score, CLV≥100k, เบี้ย<20k) | GAi-Seg | Pos | สร้าง segment "App=No, CLV≥100,000" | ได้เฉพาะลูกค้าที่ค่าตรงตามตัวเลข | P1 |
| TC-04-17 | Filter behavioral — เข้าหน้าบทความภาษี/ออมทรัพย์ | GAi-Seg | Bnd | filter จาก web-visit behavior | เฉพาะลูกค้าที่มี event เข้าหน้าบทความนั้น (ตรวจ data source GA4) | P2 |

### TS-07 (เพิ่ม) — Message ตาม GrowthAi
| TC ID | Title | Trace | Type | Steps | Expected Result | Pri |
|---|---|---|---|---|---|---|
| TC-07-10 | Refresh / Delete message | GAi-Msg | Pos | กด refresh แล้ว delete | refresh โหลดค่าใหม่; delete ลบได้ (เตือนถ้าถูกใช้ใน campaign) | P2 |
| TC-07-11 | แสดง Message ID + จำนวน credit บนการ์ด | GAi-Msg | Pos | เปิดรายการ message | แสดง Message ID (running no) + credit ที่ message จะใช้ ถูกต้อง | P2 |

### TS-06 (เพิ่ม) — Campaign Flow Builder ตาม GrowthAi
| TC ID | Title | Trace | Type | Steps | Expected Result | Pri |
|---|---|---|---|---|---|---|
| TC-06-13 | Add contact source = เลือก Segment | GAi-Cmp | Pos | ในcampaign กด Add contact source → เลือก segment ที่สร้างไว้ | สมาชิกของ segment เข้าสู่ flow เป็น contact ของ campaign | P1 |
| TC-06-14 | Decision node แตกเส้นทาง | GAi-Cmp | Pos | วาง Decision (เช่น "เปิดอ่าน email?") | contact ถูกแยกเข้า branch yes/no ถูกต้อง | P1 |
| TC-06-15 | Condition node ตาม Contact tags | GAi-Cmp | Pos | ตั้ง condition tag = "VIP" | เฉพาะ contact ที่มี tag ผ่านเข้า branch นั้น | P1 |
| TC-06-16 | Action: Send email + email builder | GAi-Cmp | Pos | เพิ่ม action Send email → ออกแบบใน builder | อีเมลถูกสร้าง/ส่งตามที่ออกแบบ (รูป+ข้อความ+ลิงก์) | P1 |
| TC-06-17 | Action: Send text message (เลือก Message เดิม) | GAi-Cmp | Pos | เพิ่ม action → Select Message ที่มีอยู่ | ผูก message เดิมเข้า action ได้ ส่งถูกช่องทาง | P1 |
| TC-06-18 | Action: Mobile app message (push) | GAi-Cmp | Pos | เพิ่ม action mobile app message | push เข้า Ocean Club App ของ contact ที่มี app | P2 |
| TC-06-19 | Action: Send a webhook | GAi-Cmp | Pos | ตั้ง webhook URL ใน action | ระบบยิง HTTP request พร้อม payload contact เมื่อ contact ถึง node | P2 |
| TC-06-20 | Action timing / delay ราย step | GAi-Cmp | Bnd | ตั้ง delay 2 วัน ก่อน action ถัดไป | action ถัดไปทำงานหลังครบ delay ไม่ใช่ทันที | P2 |
| TC-06-21 | Upload segment → Facebook Custom Audience (Lookalike) | GAi-Cmp | Pos | จาก segment กด upload → FB | audience ถูกสร้างใน FB Ads (custom + lookalike base) | P2 |
| TC-06-22 | Upload segment → Google Customer Match | GAi-Cmp | Pos | จาก segment กด upload → Google | customer match list ถูกสร้างใน Google Ads | P2 |
| TC-06-23 | Flow ทั้งเส้น: Segment → Decision → Condition → multi Action | GAi-Cmp | Pos | ประกอบ flow ครบ แล้ว publish | contact ไหลผ่านทุก node และได้รับ message ตาม branch ถูกต้อง (E2E) | P1 |

### TS-10 (เพิ่ม) — Campaign Tracking ตามคอลัมน์ GrowthAi
| TC ID | Title | Trace | Type | Steps / Data | Expected Result | Pri |
|---|---|---|---|---|---|---|
| TC-10-06 | Total User ≠ Total Send | GAi-Trk | Bnd | campaign 1,000 contact ส่งจริง 980 | Total User=1,000, Total Send=980 (แยกชัด) | P1 |
| TC-10-07 | Total Credit ต่อ campaign | GAi-Trk | Pos | ส่ง SMS ไทยยาว (multi-part) 980 ราย | Total Credit = ผลรวม credit ทุก segment ของทุกข้อความ ถูกต้อง | P1 |
| TC-10-08-b | Total Fail สรุปใน summary | GAi-Trk | Pos | ส่ง fail 20 ราย | Total Fail=20 และ Total Send+Total Fail = Total User | P1 |
| TC-10-09 | Drill-down รายคลิกต่อ campaign | GAi-Trk | Pos | คลิกเข้า campaign 1 ใน SUMMARY | แสดงรายชื่อ/จำนวนคลิก + Unique Click ของ campaign นั้น | P2 |
| TC-10-10 | SUMMARY header ครบทุกคอลัมน์ | GAi-Trk | Pos | เปิดหน้า SUMMARY | มีครบ: Campaign ID, Name, Total User, Total Send, Total Credit, Total Fail, Total Click, Unique Click | P2 |

---

## ส่วนที่ 3 — ผลกระทบ & คำถามที่ต้อง clarify

### 3.1 ผลกระทบต่อ Test Effort (QA)
- **Campaign flow builder (TC-06-13..23)** เป็น scope ที่หนักกว่าที่ประเมินใน WBS (1.2.3 Campaign = 12 MD). การทดสอบ Decision/Condition/Action + webhook + per-step timing เพิ่ม combinatorial paths → ควรประเมินเพิ่ม **~3–5 MD** และจัดเป็นงาน **QA1 (Senior)**.
- รวม TC เพิ่มทั้งสิ้น: **Segment +7, Message +2, Campaign +11, Tracking +5 = +25 TC** (จาก 155 → ~180).

### 3.2 คำถามต้อง clarify กับ BA/SA (เพิ่มจาก Open Issues เดิม)
1. **GrowthAi คือ COTS หรือ custom?** ถ้าเป็น SaaS (เช่น Customer.io/ActiveCampaign) — ขอบเขตทดสอบควรเป็น **configuration testing** ไม่ใช่ functional ของ engine. กระทบกลยุทธ์ทั้งหมด.
2. **Decision vs Condition** ต่างกันอย่างไรในเชิง business (GrowthAi แยก 2 node)? ต้องการ definition เพื่อเขียน expected ให้ชัด.
3. **Send a webhook** ยิงไปที่ระบบไหน (MCMP internal? LC Connect? UW)? — ยังไม่อยู่ใน BRD เลย ต้องยืนยัน integration target.
4. **Total Credit / Total Fail** — สูตรนับ credit ตรงกับ Infobip billing หรือไม่ (สำคัญต่อ reconciliation).
5. **Channel-presence filter** (มี Email ไม่มี App ฯลฯ) — field ที่ใช้ระบุ "เป็น Ocean Connect แล้ว/ยัง" มาจาก source ใด และ refresh บ่อยแค่ไหน.
6. **Mapping GrowthAi ↔ BRD channels:** GrowthAi action มี email/text/mobile app/webhook — ขาด **LINE Ocean Connect** ที่ BRD เน้น. LINE ส่งผ่าน action ใด (webhook?) ต้องยืนยัน.

---
*จัดทำจาก GrowthAi slides — ใช้คู่กับ `MCMP_Test_Design.md` (TC เดิม 155 ข้อ) และ `MCMP_BRD_vs_WBS_Crosscheck.md` (gap BRD↔WBS)*
