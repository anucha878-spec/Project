// build-pptx.js — สร้าง MCMP_PreDev_Checkpoint.pptx จากเนื้อหาเดียวกับ MCMP_PreDev_Checkpoint.md/.html
// รัน: node build-pptx.js   (ต้องมี pptxgenjs ใน node_modules)
const PptxGenJS = require("pptxgenjs");

const FONT = "Tahoma"; // รองรับภาษาไทยบน Windows/PowerPoint
const NAVY = "0B2A4A", BLUE = "1565C0", TEAL = "00897B", AMBER = "F57C00",
      RED = "C62828", INK = "1A2330", MUTED = "5B6B7B", LINE = "D8E0E8",
      LIGHT = "F6F9FC", CARD = "FFFFFF";

const pptx = new PptxGenJS();
pptx.defineLayout({ name: "W", width: 13.333, height: 7.5 });
pptx.layout = "W";
pptx.author = "MCMP";
pptx.title = "MCMP — Pre-Dev Checkpoint";

// master พื้นหลัง + แถบสี
pptx.defineSlideMaster({
  title: "BASE",
  background: { color: "EEF2F6" },
  objects: [
    { rect: { x: 0, y: 0, w: 0.18, h: 7.5, fill: { color: BLUE } } },
    { text: { text: "MCMP Pre-Dev Checkpoint", options: { x: 0.5, y: 7.05, w: 6, h: 0.35, fontFace: FONT, fontSize: 9, color: MUTED } } },
  ],
});

function newSlide(tag, numLabel, heading) {
  const s = pptx.addSlide({ masterName: "BASE" });
  s.addShape("rect", { x: 0.45, y: 0.35, w: 12.45, h: 6.5, fill: { color: CARD }, line: { color: LINE, width: 1 } });
  if (tag) s.addText(tag.toUpperCase(), { x: 0.75, y: 0.45, w: 11, h: 0.3, fontFace: FONT, fontSize: 11, bold: true, color: BLUE, charSpacing: 2 });
  if (heading) {
    if (numLabel) s.addText(numLabel, { x: 0.75, y: 0.78, w: 0.55, h: 0.5, align: "center", valign: "middle", fontFace: FONT, fontSize: 16, bold: true, color: "FFFFFF", fill: { color: NAVY }, rectRadius: 0.05 });
    s.addText(heading, { x: numLabel ? 1.45 : 0.75, y: 0.78, w: 11, h: 0.55, fontFace: FONT, fontSize: 26, bold: true, color: NAVY });
  }
  return s;
}
const bullets = (arr) => arr.map(t => ({ text: t, options: { bullet: { code: "2022" }, fontFace: FONT, fontSize: 15, color: INK, paraSpaceAfter: 8, breakLine: true } }));
function callout(s, text, y, kind) {
  const map = { amber: ["FFF8E1", AMBER], red: ["FDECEA", RED], blue: ["E8F0FB", BLUE] };
  const [bg, bar] = map[kind] || map.amber;
  s.addShape("rect", { x: 0.75, y, w: 11.8, h: 0.7, fill: { color: bg }, line: { type: "none" } });
  s.addShape("rect", { x: 0.75, y, w: 0.08, h: 0.7, fill: { color: bar } });
  s.addText(text, { x: 0.95, y, w: 11.5, h: 0.7, valign: "middle", fontFace: FONT, fontSize: 13, color: INK });
}
function table(s, rows, y, colW, opts = {}) {
  s.addTable(rows, {
    x: 0.75, y, w: 11.8, colW, fontFace: FONT, fontSize: opts.fontSize || 12,
    color: INK, border: { type: "solid", color: LINE, pt: 0.5 }, valign: "middle",
    rowH: opts.rowH || 0.4,
  });
}
const hcell = (t) => ({ text: t, options: { fill: { color: NAVY }, color: "FFFFFF", bold: true, fontFace: FONT, fontSize: 12 } });
const cell = (t, b) => ({ text: t, options: { fontFace: FONT, fontSize: 12, color: INK, bold: !!b } });

// ---- 1 Title ----
const t1 = pptx.addSlide();
t1.background = { color: NAVY };
t1.addShape("rect", { x: 0, y: 0, w: 13.333, h: 7.5, fill: { type: "solid", color: NAVY } });
t1.addShape("rect", { x: 0, y: 5.3, w: 13.333, h: 0.12, fill: { color: TEAL } });
t1.addText("PROJECT 20240278", { x: 0.9, y: 1.7, w: 11, h: 0.4, fontFace: FONT, fontSize: 14, bold: true, color: "9EC6EE", charSpacing: 3 });
t1.addText("Marketing Campaign Management Platform", { x: 0.9, y: 2.15, w: 11.5, h: 1.6, fontFace: FONT, fontSize: 40, bold: true, color: "FFFFFF" });
t1.addText("สรุปกระบวนการเพื่อคุย Checkpoint ก่อนเริ่มพัฒนา", { x: 0.9, y: 3.85, w: 11.5, h: 0.6, fontFace: FONT, fontSize: 19, color: "CFE1F2" });
t1.addText([
  { text: "Owner: ฝ่ายการตลาด — บมจ. ไทยสมุทรประกันชีวิต (Ocean Life Insurance)", options: { breakLine: true } },
  { text: "เอกสารต้นทาง: BRD v0.1 (42 หน้า) · WBS / Development Effort v1.0 (5 หน้า) · GrowthAi Slides (74 หน้า)", options: {} },
], { x: 0.9, y: 5.7, w: 11.5, h: 1, fontFace: FONT, fontSize: 13, color: "BCD4EC", lineSpacingMultiple: 1.4 });

// ---- 2 Overview ----
const s2 = newSlide("Overview", "1", "ระบบนี้ทำอะไร");
s2.addText("MCMP คือ แพลตฟอร์มกลางการตลาด ที่รวมข้อมูลลูกค้าจากหลายระบบ สร้างกลุ่มเป้าหมาย ส่งแคมเปญหลายช่องทาง และบริหาร Lead จนถึงตัวแทน",
  { x: 0.75, y: 1.55, w: 11.8, h: 0.8, fontFace: FONT, fontSize: 17, color: INK });
const ov = [
  ["①", "รวมข้อมูล → Single View"], ["②", "สร้าง Segment (RFM/CLV/Health)"], ["③", "ส่ง Campaign (SMS/Email/LINE/App)"],
  ["④", "Sync FB / Google Ads"], ["⑤", "บริหาร Lead → LC (SLA 24 ชม.)"],
];
ov.forEach(([n, l], i) => {
  const x = 0.75 + i * 2.36;
  s2.addShape("rect", { x, y: 2.6, w: 2.2, h: 1.5, fill: { color: LIGHT }, line: { color: LINE, width: 1 }, rectRadius: 0.08 });
  s2.addText(n, { x, y: 2.75, w: 2.2, h: 0.6, align: "center", fontFace: FONT, fontSize: 26, bold: true, color: NAVY });
  s2.addText(l, { x: x + 0.1, y: 3.35, w: 2.0, h: 0.7, align: "center", valign: "top", fontFace: FONT, fontSize: 11, color: MUTED });
});
callout(s2, "3 กระบวนการหลัก:  01 Data Ingestion  ·  02 Campaign Setting & Send  ·  03 Lead Management", 4.6, "blue");

// ---- 3 Architecture ----
const s3 = newSlide("Architecture", "2", "สถาปัตยกรรม & ระบบที่เกี่ยวข้อง");
const arch =
`[ ต้นทาง ]            [ Data Platform ]              [ MCMP ]            [ ปลายทาง ]
CIS/OLI ─┐                                                              ┌─ ลูกค้า (SMS/Email/
AS400    │   DW → S3 → AWS Glue/Athena     01 Ingestion                 │   LINE/Ocean Club)
LineOA   ├ Upd/Ins ─► (lakecurated) ──► 02 Campaign ────────────────────┤─ FB / Google Ads (ESB)
GA4      │   → QuickSight (RFM/Dashboard)  03 Lead                       │─ LC Connect (ตัวแทน)
OSSS·NBS │                                                              └─ Digital Sale
Web·HR ──┘   Vendor: GrowthAi · Infobip`;
s3.addShape("rect", { x: 0.75, y: 1.5, w: 11.8, h: 2.55, fill: { color: NAVY }, rectRadius: 0.06 });
s3.addText(arch, { x: 0.95, y: 1.6, w: 11.4, h: 2.35, fontFace: "Consolas", fontSize: 11, color: "D7E6F5", valign: "top" });
s3.addText([
  { text: "CIS · AS/400 · LineOA · OSSS · NBS · GA4 · HR    ", options: { color: BLUE } },
  { text: "DW · S3 · Glue/Athena · QuickSight    ", options: { color: BLUE } },
  { text: "GrowthAi · Infobip (Vendor)", options: { color: AMBER, bold: true } },
], { x: 0.75, y: 4.25, w: 11.8, h: 0.5, fontFace: FONT, fontSize: 13 });
callout(s3, "Single Source of Truth: เจอข้อมูลซ้ำหลายแหล่ง → ยึด เบอร์/อีเมลจาก CIS เป็นหลัก", 4.95, "amber");

// ---- 4 Process 01 ----
const s4 = newSlide("Process 01", "3", "Data Ingestion");
s4.addText("ดึง/อัปเดต (Update-Insert ไม่ซ้ำ) เข้าระบบกลาง · Daily 23:00 และ Realtime · ตรวจ error → Automail แจ้งผล 08:00 / ไม่พบไฟล์ 09:00 · มี Maker/Checker อนุมัติการ Upload Campaign/Activity",
  { x: 0.75, y: 1.5, w: 11.8, h: 0.7, fontFace: FONT, fontSize: 13, color: MUTED });
const ingHdr = ["แหล่ง", "ต้นทาง", "ความถี่", "แหล่ง", "ต้นทาง", "ความถี่"].map(hcell);
const ingRows = [
  ["Customer", "CIS/OLI", "Daily", "UTM Behavior", "GA4", "ตามกำหนด"],
  ["Policy", "AS/400", "Daily", "Agent", "OSSS", "Daily/RT"],
  ["LINE Ocean Connect", "LineOA", "Daily", "RFM Model", "S3/Actuary", "Manual"],
  ["Campaign & Activity", "Upload UI", "Weekly", "Lead", "Web Corp.", "Realtime"],
  ["Contact Center / FB", "NBS", "Realtime", "Staff", "HR (+SHA-256)", "Manual"],
  ["Ocean Club App", "GrowthAi (Path)", "Daily", "", "", ""],
].map(r => r.map(c => cell(c)));
table(s4, [ingHdr, ...ingRows], 2.35, [2.4, 1.7, 1.4, 2.4, 1.7, 1.4], { rowH: 0.5 });

// ---- 5 Process 02 ----
const s5 = newSlide("Process 02", "4", "Campaign Setting & Send");
s5.addText(bullets([
  "วิเคราะห์ + Dashboard/Segment บน QuickSight → ดึง Customer+RFM เข้า MCMP (Manual)",
  "สร้าง Segment — Filter AND/OR, Active/Inactive, Clone, Export, exclude Consent=No & Do-not-contact",
  "Manual Sync Audience → FB / Google Ads (Customer Match)",
  "สร้าง Campaign — เลือก Segment, ช่องทาง, ตั้งเวลา 3 แบบ, Tag, Retarget, แสดง Sent/Open/Click",
  "สร้าง Message แยกช่องทาง — Personalization, Shorten Link (Infobip), Preview",
  "Maker/Checker อนุมัติส่ง → ระบบส่งตามเวลา (ยึด CIS) → ลูกค้าได้รับ",
  "เก็บผล Open/Click/Unique → Automail Monthly Summary (วันที่ 1 เดือนถัดไป 13:00)",
]), { x: 0.85, y: 1.6, w: 11.6, h: 5, valign: "top" });

// ---- 6 Process 03 ----
const s6 = newSlide("Process 03", "5", "Lead Management");
s6.addText(bullets([
  "Import LC จาก OSSS (≤10 รายชื่อ/จังหวัด, ≤10 จังหวัด/ครั้ง, อัปเดตอัตโนมัติ)",
  "บันทึก Lead: Website (auto) · Facebook (manual) · Contact Center (VPN/VDI ถ้า WFH) · CRM Event (Import Excel/CSV) — ตรวจซ้ำ",
  "ซื้อ Online → Digital Sale (Google Sheet + Email) / ผ่านตัวแทน → เกณฑ์ Assign",
  "Auto Assign: จังหวัดตรง → ผลงานทุกงวด → ผลงานบางงวด → Round Robin + Lead Scoring (มีเวลานัด=Hot / ไม่มี=Warm)",
  "Manual Assign เมื่อระบบเลือกไม่ได้ → แจ้ง New Lead ผ่าน LC Connect → LC ติดต่อ",
  "SLA 24 ชม. เกิน → ดึงคืน Re-assign + ระงับ LC (5/10/15/20 วัน/ถาวร) + Email การตลาด 09:00",
  "บันทึกผล (สูงสุด 3 ครั้ง → ปิดเคส; ปิดไม่ได้เก็บ 3 เดือน → ลบ) → Daily Report 09:00 + Export",
]), { x: 0.85, y: 1.6, w: 11.6, h: 5, valign: "top" });

// ---- 7 Business Rules ----
const s7 = newSlide("Business Rules", "6", "Business Rules ที่ต้องตอกย้ำ");
const brHdr = ["#", "Rule", "กระทบ"].map(hcell);
const brRows = [
  ["BR-1", "ยึดเบอร์/อีเมลจาก CIS เป็นหลักเมื่อข้อมูลซ้ำ", "Dedup ทุก channel"],
  ["BR-2", "Exclude Consent=No + Do-not-contact ก่อนส่ง", "PDPA / Compliance"],
  ["BR-3", "Maker/Checker ทั้ง import (01-0-4) และส่ง campaign (02-7)", "Governance"],
  ["BR-4", "SLA Lead 24 ชม. เกิน → ดึงคืน + ระงับ LC", "ผลงานตัวแทน"],
  ["BR-5", "Lead Scoring Hot (มีเวลานัด) / Warm (ไม่มี)", "คิว Assign"],
  ["BR-6", "Data Retention Lead ปิดไม่ได้ 3 เดือน → ลบ", "Storage / PDPA"],
  ["BR-7", "Segmentation: RFM(11) · CLV(6) · Customer Segment(6) · Age · Health", "Data model"],
].map(r => r.map((c, i) => cell(c, i === 0)));
table(s7, [brHdr, ...brRows], 1.55, [1.0, 7.6, 3.2], { rowH: 0.55 });

// ---- 8 GrowthAi ----
const s8 = newSlide("⭐ KEY FINDING", "7", "GrowthAi เปลี่ยนภาพ Campaign");
s8.addText([
  { text: "GrowthAi คือ ", options: {} }, { text: "เครื่องมือ marketing-automation จริง", options: { bold: true } },
  { text: " — Campaign ", options: {} }, { text: "ไม่ใช่ ", options: { bold: true, color: RED } },
  { text: "\"สร้าง + เลือกช่องทาง\" แต่เป็น ", options: {} }, { text: "Visual Flow Builder", options: { bold: true } },
], { x: 0.75, y: 1.5, w: 11.8, h: 0.6, fontFace: FONT, fontSize: 16, color: INK });
const flow =
`[Segment / Contact source] → [Decision] → [Condition (ตาม tag)] → [Action]
                            yes/no       branch              ├─ Send email (drag-drop builder)
                                                             ├─ Send text message
                                                             ├─ Mobile app push
                                                             ├─ Send webhook
                                                             └─ per-step delay / schedule`;
s8.addShape("rect", { x: 0.75, y: 2.2, w: 11.8, h: 1.85, fill: { color: NAVY }, rectRadius: 0.06 });
s8.addText(flow, { x: 0.95, y: 2.3, w: 11.4, h: 1.65, fontFace: "Consolas", fontSize: 11, color: "D7E6F5", valign: "top" });
callout(s8, "Tracking ตายตัวต่อ campaign: Total User · Total Send · Total Credit · Total Fail · Total Click · Unique Click (+ drill-down รายคน)", 4.25, "amber");
callout(s8, "ผลกระทบ: scope Campaign หนักกว่าที่ WBS ประเมิน (1.2.3 = 12 MD) เพราะมี combinatorial path ของ flow", 5.15, "red");

// ---- 9 Gap High ----
const s9 = newSlide("🔴 MUST CLOSE", "8", "Gap ระดับ High ที่ต้องปิดก่อน Dev");
s9.addText("อยู่ใน BRD แต่ไม่พบใน WBS v1.0 — ต้องยืนยันว่าใครทำ + เพิ่ม effort", { x: 0.75, y: 1.5, w: 11.8, h: 0.35, fontFace: FONT, fontSize: 13, color: MUTED });
const gHdr = ["#", "Gap", "เหตุผล"].map(hcell);
const gRows = [
  ["1", "Do-not-contact list (import + exclude ตอนส่ง)", "Compliance"],
  ["2", "Exclude Consent=No ตอนสร้าง Segment / ส่ง", "PDPA"],
  ["3", "Maker/Checker workflow อนุมัติส่ง Campaign", "มีแค่สถานะ ยังไม่มี task จริง"],
  ["4", "Manual Assign Lead", "กรณี auto assign ไม่ได้"],
  ["5", "ระงับ LC x วัน (5/10/15/20/ถาวร)", "ยังไม่พบ config/task"],
].map(r => r.map((c, i) => cell(c, i === 0)));
table(s9, [gHdr, ...gRows], 1.95, [0.8, 7.4, 3.6], { rowH: 0.45 });
callout(s9, "ทั้ง 5 เป็น core business rule/compliance → ควรเป็นงาน QA1 (Senior) + ขอ effort เพิ่ม ~5–8 MD", 4.7, "red");
s9.addText("Medium: Open tracking (email) · Campaign Monthly Report · Lead Daily Report · Lead Import Excel/CSV · Message object แยก",
  { x: 0.75, y: 5.55, w: 11.8, h: 0.5, fontFace: FONT, fontSize: 12, color: MUTED });

// ---- 10 Clarify ----
const s10 = newSlide("❓ CLARIFY", "9", "คำถามต้องตอบก่อน Finalize Scope");
s10.addText([
  { text: "1. GrowthAi เป็น COTS/SaaS หรือ custom build? ", options: { bold: true, breakLine: false } },
  { text: "— กระทบกลยุทธ์ (config vs functional) + effort (+4 MD ถ้า config / +6–8 MD ถ้า custom)", options: { breakLine: true } },
  { text: "2. Decision vs Condition node ต่างกันเชิง business อย่างไร", options: { bold: true, breakLine: true } },
  { text: "3. Send webhook ยิงไประบบไหน (MCMP internal / LC Connect / UW?) — ยังไม่อยู่ใน BRD", options: { bold: true, breakLine: true } },
  { text: "4. Total Credit / Total Fail สูตรตรงกับ Infobip billing หรือไม่ (reconciliation)", options: { bold: true, breakLine: true } },
  { text: "5. Channel-presence filter (\"เป็น Ocean Connect แล้ว/ยัง\") field มาจาก source ใด refresh บ่อยแค่ไหน", options: { bold: true, breakLine: true } },
  { text: "6. LINE Ocean Connect หายจาก GrowthAi actions (email/text/app/webhook) — LINE ส่งผ่าน action ใด", options: { bold: true, breakLine: true } },
], { x: 0.85, y: 1.65, w: 11.6, h: 5, fontFace: FONT, fontSize: 15, color: INK, paraSpaceAfter: 12, lineSpacingMultiple: 1.1 });

// ---- 11 Effort ----
const s11 = newSlide("Effort (WBS v1.0)", "10", "ขอบเขต Effort");
const kpis = [["451.70", "Total MD"], ["313.45", "Marketing Campaign"], ["127.75", "Lead Management"], ["10.50", "อื่นๆ"]];
kpis.forEach(([v, l], i) => {
  const x = 0.75 + i * 3.0;
  s11.addShape("rect", { x, y: 1.6, w: 2.8, h: 1.2, fill: { color: LIGHT }, line: { color: LINE, width: 1 }, rectRadius: 0.08 });
  s11.addText(v, { x, y: 1.7, w: 2.8, h: 0.6, align: "center", fontFace: FONT, fontSize: 28, bold: true, color: NAVY });
  s11.addText(l, { x, y: 2.32, w: 2.8, h: 0.4, align: "center", fontFace: FONT, fontSize: 12, color: MUTED });
});
const roles = [["BA 2", "Business Analyst"], ["SA 140", "System Analyst"], ["Dev 211", "Developer"], ["QA 98", "Quality Assurance"]];
roles.forEach(([v, l], i) => {
  const x = 0.75 + i * 3.0;
  s11.addShape("rect", { x, y: 3.0, w: 2.8, h: 1.1, fill: { color: LIGHT }, line: { color: LINE, width: 1 }, rectRadius: 0.08 });
  s11.addText(v, { x, y: 3.1, w: 2.8, h: 0.55, align: "center", fontFace: FONT, fontSize: 24, bold: true, color: NAVY });
  s11.addText(l, { x, y: 3.65, w: 2.8, h: 0.4, align: "center", fontFace: FONT, fontSize: 11, color: MUTED });
});
callout(s11, "QA (เลขทางการ): baseline 98.0 + GrowthAi +4.0 = ≈102.0 MD — QA1 Senior (core + GrowthAi) · QA2 Junior (ingestion + UI) · 8 paired chains  [รายการแตกละเอียด = 103.0, ±1 MD slack]", 4.35, "blue");
s11.addText("WBS เพิ่มของดีนอก BRD: Hash SHA-256 · Penetration Test · Tag System ขั้นสูง · House Keeping · Monitoring · Impact EDW/IFRS17",
  { x: 0.75, y: 5.25, w: 11.8, h: 0.5, fontFace: FONT, fontSize: 12, color: MUTED });

// ---- 12 Agenda ----
const s12 = newSlide("Next Step", "11", "Agenda ประชุม Checkpoint");
s12.addText([
  { text: "1.  ยืนยันภาพรวม 3 process + สถาปัตยกรรม — ตรงกับที่ทีม dev เข้าใจไหม", options: { breakLine: true } },
  { text: "2.  ล็อก Business Rules — โดยเฉพาะ BR-2 PDPA และ BR-3 Maker/Checker", options: { breakLine: true } },
  { text: "3.  ตัดสินใจเรื่อง GrowthAi (COTS หรือ custom?) — blocker ใหญ่สุดของการประเมิน scope", options: { breakLine: true, color: RED, bold: true } },
  { text: "4.  ไล่ปิด 5 Gap High — ใครรับผิดชอบ + เพิ่ม MD เท่าไร", options: { breakLine: true } },
  { text: "5.  สรุป effort ที่ revise แล้ว + ลำดับ sprint / priority", options: { breakLine: true } },
], { x: 0.95, y: 1.7, w: 11.4, h: 3.6, fontFace: FONT, fontSize: 17, color: INK, paraSpaceAfter: 16 });
callout(s12, "เอกสารอ้างอิง: BRD_Summary_Workflow · MCMP_BRD_vs_WBS_Crosscheck · MCMP_GrowthAi_Gap_and_TestCases · MCMP_QA_Task_Assignment", 5.6, "amber");

pptx.writeFile({ fileName: "MCMP_PreDev_Checkpoint.pptx" }).then(f => console.log("✅ created:", f));
