# RDSGRI Wiki — Local Dump & Summary (New Group RI)

Dumped 2026-07-02 from **http://wiki.thaisamut.co.th/display/RDSGRI/Home** (Confluence space "New Group RI", 874 child pages) via authenticated Playwright session (login: anucha.pi).

Open any page: `http://wiki.thaisamut.co.th/pages/viewpage.action?pageId={id}`

## อ่านตรงไหนก่อน — SUMMARY (สังเคราะห์แล้ว, อ่านง่าย)
| File | เนื้อหา | ใช้เมื่อ |
|---|---|---|
| **SUMMARY-1-calc-engine.md** | PS-06 Estimate / PS-07 Actual / PS-09 Profit Commission calc + RI Status — สูตรครบพร้อม {VAR} + table.column | ตรวจ RI Premium/Claim/Commission/PC (เช่น defect #75852 GIB layer) |
| **SUMMARY-2-business-design.md** | BD-EP/BD-AP business design + BD-PS 15 data modules + edge case checklist | เข้าใจ business rule รายเทรที่ (GIB layer split, Thaire SR, Exp Refund, Alteration) |
| **SUMMARY-3-data-pipeline.md** | Landing→Snapshot→Staging→Prevalidate→EDW/MPS (PS-01..05, 08, 10-12 + WS) | ตรวจ data flow, R61 selection, staging conditions |
| **SUMMARY-4-tables-reports.md** | Table catalog (cf_/ms_/tx_) + Source views RIG_View_* + Reports RP-001..023 | หา table/column/join key + report mapping |
| **SUMMARY-5-config-screens.md** | Master Config Maker/Checker (BD-CF) + process screens + SRS | **BRD-PS-08 UI test (31 cases ยังไม่ test)** |

## Raw dump (ข้อความเต็มทุกหน้า, ใช้ Grep หา)
- `00-INDEX.md` — สารบัญ 874 หน้า (breadcrumb + page id)
- `10-business-rules` · `20-ps06`..`26-ps02-05` (Functional Spec: process)
- `30-persistence-tables` · `31-ui-reports-screens` · `32-ws-external-services`
- `40-bd-ps-module` · `41-bd-ep-estimate` · `42-bd-ap-actual` · `43-bd-cf-config` · `44-bd-other` · `45-srs-other` (Business Design/SRS)
- `50-appendix` · `90-cancelled` (หน้ายกเลิก) · `99-misc`

## Refreshed pages (per-page updates หลัง full dump)
| File | Page | pageId | Refreshed |
|---|---|---|---|
| `refresh-2026-07-08-ps07-actual-gib.md` | RIG-PS-07 › 3. ประมวลผล Actual - **GIB_Grp_Direct_EB** (สูตร Premium/Commission/Claim/Exp Refund ครบ, 11 ตาราง) | 1316553451 | 2026-07-08 |
| `refresh-2026-07-08-ps04-est005-r01-inforce.md` | RIG-PS-04 › Batch EST-005 › Process **(R01) List of inforce by member (Estimate)** — source tables + field mapping → `tx_stg_est_inforce_member` | 1299022576 | 2026-07-08 |

> เนื้อหาเวอร์ชัน 2026-07-08 นี้ทันสมัยกว่าที่ฝังใน raw dump เดิม (`21-ps07-actual-calc.md`, `26-ps02-05-snap-staging.md`) — อ้างไฟล์ refresh-* ก่อนสำหรับ 2 หน้านี้

## Refresh
รัน Playwright ไปที่ Home (login ก่อน) → `browser_evaluate` fetch `/plugins/pagetree/naturalchildren.action?...&pageId=1289389353&startDepth=99` เพื่อดึง tree ทั้งหมด แล้ว fetch `/pages/viewpage.action?pageId={id}` ทีละหน้า (Home page id = **1289389353**). แปลง HTML→MD ด้วย in-page converter (heading/table/list) แล้ว save ผ่าน `browser_evaluate` filename.
