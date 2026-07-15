// build-qa-onboarding-pptx.js — สร้าง MCMP_QA_Onboarding.pptx
// Deck สำหรับ "QA ที่จะมาทดสอบ" ให้เข้าใจระบบ + รู้ว่ามี test artifact อะไร อยู่ที่ไหน ทดสอบยังไง เริ่มตรงไหน
// รัน: node build-qa-onboarding-pptx.js   (ต้องมี pptxgenjs ใน node_modules)
const PptxGenJS = require("pptxgenjs");

const FONT = "Tahoma";
const NAVY = "0B2A4A", BLUE = "1565C0", TEAL = "00897B", AMBER = "F57C00",
      RED = "C62828", GREEN = "2E7D32", INK = "1A2330", MUTED = "5B6B7B",
      LINE = "D8E0E8", LIGHT = "F6F9FC", CARD = "FFFFFF";

const pptx = new PptxGenJS();
pptx.defineLayout({ name: "W", width: 13.333, height: 7.5 });
pptx.layout = "W";
pptx.author = "MCMP QA";
pptx.title = "MCMP — QA Test Onboarding";

pptx.defineSlideMaster({
  title: "BASE",
  background: { color: "EEF2F6" },
  objects: [
    { rect: { x: 0, y: 0, w: 0.18, h: 7.5, fill: { color: TEAL } } },
    { text: { text: "MCMP · QA Test Onboarding", options: { x: 0.5, y: 7.05, w: 7, h: 0.35, fontFace: FONT, fontSize: 9, color: MUTED } } },
  ],
});

let PAGE = 0;
function newSlide(tag, numLabel, heading) {
  PAGE++;
  const s = pptx.addSlide({ masterName: "BASE" });
  s.addShape("rect", { x: 0.45, y: 0.35, w: 12.45, h: 6.5, fill: { color: CARD }, line: { color: LINE, width: 1 } });
  s.addText(String(PAGE).padStart(2, "0"), { x: 12.2, y: 7.02, w: 0.7, h: 0.35, align: "right", fontFace: FONT, fontSize: 9, color: MUTED });
  if (tag) s.addText(tag.toUpperCase(), { x: 0.75, y: 0.45, w: 11, h: 0.3, fontFace: FONT, fontSize: 11, bold: true, color: TEAL, charSpacing: 2 });
  if (heading) {
    if (numLabel) s.addText(numLabel, { x: 0.75, y: 0.78, w: 0.55, h: 0.5, align: "center", valign: "middle", fontFace: FONT, fontSize: 16, bold: true, color: "FFFFFF", fill: { color: NAVY }, rectRadius: 0.05 });
    s.addText(heading, { x: numLabel ? 1.45 : 0.75, y: 0.78, w: 11, h: 0.55, fontFace: FONT, fontSize: 25, bold: true, color: NAVY });
  }
  return s;
}
const bullets = (arr) => arr.map(t => (typeof t === "string"
  ? { text: t, options: { bullet: { code: "2022" }, fontFace: FONT, fontSize: 15, color: INK, paraSpaceAfter: 8, breakLine: true } }
  : { text: t.text, options: { bullet: { code: "2022" }, fontFace: FONT, fontSize: t.size || 15, color: t.color || INK, bold: !!t.bold, paraSpaceAfter: 8, breakLine: true } }));
function callout(s, text, y, kind, h) {
  const map = { amber: ["FFF8E1", AMBER], red: ["FDECEA", RED], blue: ["E8F0FB", BLUE], green: ["E7F4E9", GREEN], teal: ["E2F2F0", TEAL] };
  const [bg, bar] = map[kind] || map.amber;
  const hh = h || 0.7;
  s.addShape("rect", { x: 0.75, y, w: 11.8, h: hh, fill: { color: bg }, line: { type: "none" } });
  s.addShape("rect", { x: 0.75, y, w: 0.08, h: hh, fill: { color: bar } });
  s.addText(text, { x: 0.98, y, w: 11.5, h: hh, valign: "middle", fontFace: FONT, fontSize: 13, color: INK });
}
function table(s, rows, y, colW, opts = {}) {
  s.addTable(rows, {
    x: 0.75, y, w: 11.8, colW, fontFace: FONT, fontSize: opts.fontSize || 12,
    color: INK, border: { type: "solid", color: LINE, pt: 0.5 }, valign: "middle",
    rowH: opts.rowH || 0.4, autoPage: false,
  });
}
const hcell = (t) => ({ text: t, options: { fill: { color: NAVY }, color: "FFFFFF", bold: true, fontFace: FONT, fontSize: 11.5, align: "left" } });
const cell = (t, b, c) => ({ text: t, options: { fontFace: FONT, fontSize: 11.5, color: c || INK, bold: !!b } });
const pill = (t) => {
  const m = { P1: RED, P2: AMBER, P3: GREEN };
  return { text: t, options: { fontFace: FONT, fontSize: 11.5, bold: true, color: m[t] || INK, align: "center" } };
};

// ================= 1. TITLE =================
const t1 = pptx.addSlide();
t1.background = { color: NAVY };
t1.addShape("rect", { x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: NAVY } });
t1.addShape("rect", { x: 0, y: 5.15, w: 13.333, h: 0.12, fill: { color: TEAL } });
t1.addText("PROJECT 20240278  ·  QA ONBOARDING PACK", { x: 0.9, y: 1.5, w: 11.5, h: 0.4, fontFace: FONT, fontSize: 14, bold: true, color: "7FD4C9", charSpacing: 3 });
t1.addText("Marketing Campaign Management Platform", { x: 0.9, y: 1.95, w: 11.6, h: 1.5, fontFace: FONT, fontSize: 38, bold: true, color: "FFFFFF" });
t1.addText("คู่มือเริ่มต้นสำหรับทีม QA — เข้าใจระบบ รู้จัก Test Cases และเริ่มทดสอบได้ทันที", { x: 0.9, y: 3.5, w: 11.6, h: 0.6, fontFace: FONT, fontSize: 19, color: "CFE1F2" });
t1.addText([
  { text: "Owner: ฝ่ายการตลาด — บมจ. ไทยสมุทรประกันชีวิต (Ocean Life Insurance)", options: { breakLine: true } },
  { text: "อ้างอิง: BRD v0.1 · WBS v1.0 · GrowthAi Slides  |  Test Design 180 Test Cases (155 BRD + 25 GrowthAi)", options: {} },
], { x: 0.9, y: 5.55, w: 11.6, h: 1, fontFace: FONT, fontSize: 13, color: "BCD4EC", lineSpacingMultiple: 1.4 });

// ================= 2. อ่าน deck นี้เพื่ออะไร =================
const s2 = newSlide("Start Here", "1", "QA จะได้อะไรจาก deck นี้");
s2.addText("อ่านจบแล้วคุณจะ (1) เข้าใจว่าระบบทำอะไร (2) รู้ว่ามี Test Case อะไรบ้าง เก็บไว้ที่ไหน นำเข้าเครื่องมือยังไง (3) รู้จุดที่ต้องทดสอบหนัก + Business Rule (4) รู้ว่าต้องเตรียม Test Data อะไร (5) รู้คำถามที่ต้อง clarify ก่อนลงมือ",
  { x: 0.75, y: 1.55, w: 11.8, h: 0.9, fontFace: FONT, fontSize: 14, color: INK });
const road = [
  ["A", "รู้จักระบบ", "Overview · Architecture · 3 Process"],
  ["B", "รู้จัก Test Asset", "180 TC · RTM · ไฟล์ import Jira/TestRail/Xray"],
  ["C", "รู้จุดเสี่ยง", "Test Focus · Boundary · Business Rules · PDPA"],
  ["D", "ลงมือ + ส่งมอบ", "Test Data · QA1/QA2 · Entry/Exit · Defect flow"],
];
road.forEach(([n, t, d], i) => {
  const x = 0.75 + i * 2.96;
  s2.addShape("rect", { x, y: 2.7, w: 2.8, h: 2.2, fill: { color: LIGHT }, line: { color: LINE, width: 1 }, rectRadius: 0.08 });
  s2.addText(n, { x, y: 2.9, w: 2.8, h: 0.6, align: "center", fontFace: FONT, fontSize: 30, bold: true, color: TEAL });
  s2.addText(t, { x: x + 0.1, y: 3.55, w: 2.6, h: 0.4, align: "center", fontFace: FONT, fontSize: 14, bold: true, color: NAVY });
  s2.addText(d, { x: x + 0.15, y: 3.95, w: 2.5, h: 0.9, align: "center", valign: "top", fontFace: FONT, fontSize: 10.5, color: MUTED });
});
callout(s2, "เอกสารคู่มือฉบับเต็มอยู่ในโปรเจกต์: MCMP_Test_Design.md · MCMP_BRD_vs_WBS_Crosscheck.md · MCMP_GrowthAi_Gap_and_TestCases.md · MCMP_QA_Task_Assignment.md", 5.25, "teal");

// ================= 3. ระบบทำอะไร =================
const s3 = newSlide("The System", "2", "MCMP ทำอะไร — ใน 1 นาที");
s3.addText("แพลตฟอร์มกลางของฝ่ายการตลาด: รวมข้อมูลลูกค้าหลายระบบ → สร้างกลุ่มเป้าหมาย → ยิงแคมเปญหลายช่องทาง → เชื่อมโฆษณาออนไลน์ → บริหาร Lead จนถึงมือตัวแทน (LC)",
  { x: 0.75, y: 1.5, w: 11.8, h: 0.7, fontFace: FONT, fontSize: 15, color: INK });
const ov = [
  ["①", "รวมข้อมูล", "Single View"],
  ["②", "Segment", "RFM / CLV / Health"],
  ["③", "Campaign", "SMS/Email/LINE/App"],
  ["④", "Ads Sync", "FB / Google"],
  ["⑤", "Lead → LC", "SLA 24 ชม."],
];
ov.forEach(([n, l, d], i) => {
  const x = 0.75 + i * 2.36;
  s3.addShape("rect", { x, y: 2.5, w: 2.2, h: 1.7, fill: { color: LIGHT }, line: { color: LINE, width: 1 }, rectRadius: 0.08 });
  s3.addText(n, { x, y: 2.62, w: 2.2, h: 0.6, align: "center", fontFace: FONT, fontSize: 26, bold: true, color: NAVY });
  s3.addText(l, { x: x + 0.05, y: 3.22, w: 2.1, h: 0.4, align: "center", fontFace: FONT, fontSize: 13, bold: true, color: NAVY });
  s3.addText(d, { x: x + 0.05, y: 3.62, w: 2.1, h: 0.5, align: "center", valign: "top", fontFace: FONT, fontSize: 10.5, color: MUTED });
});
callout(s3, "3 กระบวนการที่ QA ต้องครอบคลุม:  01 Data Ingestion   ·   02 Campaign Setting & Send   ·   03 Lead Management", 4.55, "blue");
s3.addText("Segmentation model ที่ต้องรู้: RFM Group (11) · CLV Group (6) · Customer Segment (6) · Age Group · Health",
  { x: 0.75, y: 5.5, w: 11.8, h: 0.5, fontFace: FONT, fontSize: 12, color: MUTED });

// ================= 4. Architecture / seams =================
const s4 = newSlide("Architecture", "3", "จุดเชื่อมต่อที่ต้องทดสอบ (Seams)");
const arch =
`[ ต้นทาง ]              [ Data Platform ]            [ MCMP ]           [ ปลายทาง ]
CIS/OLI ─┐                                                             ┌─ ลูกค้า (SMS/Email/
AS400    │  DW → S3 → AWS Glue/Athena     01 Ingestion                 │   LINE/Ocean Club)
LineOA   ├ Upd/Ins ─► (lakecurated) ──► 02 Campaign ───────────────────┤─ FB / Google Ads (ESB)
GA4      │  → QuickSight (RFM/Dashboard)  03 Lead                       │─ LC Connect (ตัวแทน)
OSSS·NBS │                                                             └─ Digital Sale
Web·HR ──┘  Vendor: GrowthAi · Infobip`;
s4.addShape("rect", { x: 0.75, y: 1.5, w: 11.8, h: 2.4, fill: { color: NAVY }, rectRadius: 0.06 });
s4.addText(arch, { x: 0.95, y: 1.6, w: 11.4, h: 2.2, fontFace: "Consolas", fontSize: 10.5, color: "D7E6F5", valign: "top" });
callout(s4, "Integration ที่ต้องเตรียม stub/บัญชีทดสอบ: FB/Google Ads API · Infobip (SMS+Shortlink) · OSSS · UW · NBS · QuickSight/S3 · GrowthAi", 4.1, "amber");
callout(s4, "Single Source of Truth: เจอข้อมูลซ้ำหลายแหล่ง → ระบบต้องยึด เบอร์/อีเมลจาก CIS เสมอ (verify ทุกจุด dedup)", 5.0, "blue");

// ================= 5. Process 01 test map =================
const s5 = newSlide("Test Map · Process 01", "4", "Data Ingestion — ทดสอบอะไร");
const p1h = ["Scenario", "โฟกัสการทดสอบ", "TC", "Pri"].map(hcell);
const p1r = [
  ["TS-01 ดึงข้อมูล + แจ้งผล", "Update-Insert ไม่ซ้ำ · จับ error · Automail 08:00 / ไม่พบไฟล์ 09:00", "TC-01-01..09", "P1"],
  ["TS-02 Upload + Validate ไฟล์", "csv ≤5MB (boundary 5.00/5.01) · column ผิด · ซ้ำ · ว่าง · ไทย UTF-8", "TC-02-01..09", "P1"],
  ["TS-03 Maker/Checker นำเข้า", "Approve→เข้า CIS · Reject+เหตุผล · Maker อนุมัติงานตัวเองไม่ได้", "TC-03-01..05", "P1"],
];
table(s5, [p1h, ...p1r.map(r => [cell(r[0], true), cell(r[1]), cell(r[2]), pill(r[3])])], 1.6, [3.3, 6.3, 1.6, 0.6], { rowH: 0.85 });
callout(s5, "จุดพลาดบ่อย: boundary ขนาดไฟล์ (=5MB ยอมรับ / >5MB ปฏิเสธ) และ encoding ภาษาไทยต้องไม่เพี้ยน", 5.1, "amber");

// ================= 6. Process 02 test map =================
const s6 = newSlide("Test Map · Process 02", "5", "Campaign Setting & Send — ทดสอบอะไร");
const p2h = ["Scenario", "โฟกัสการทดสอบ", "TC", "Pri"].map(hcell);
const p2r = [
  ["TS-04 Segment", "Filter AND/OR · RFM · Clone · Exclude Consent=No · Exclude Do-not-contact", "TC-04-01..17", "P1"],
  ["TS-05 Ads Sync", "Sync audience → FB / Google (Customer Match)", "TC-05-01..03", "P2"],
  ["TS-06 Campaign", "Flow builder · เวลา 3 แบบ · Retarget · นับ Sent/Open/Unique Click", "TC-06-01..23", "P1"],
  ["TS-07 Message", "แยกช่องทาง · Personalization · Shortlink Infobip · SMS credit ไทย", "TC-07-01..11", "P1"],
  ["TS-08 Maker/Checker ส่ง", "Approve→ส่ง · Reject→ไม่ส่ง · แก้หลังอนุมัติ (lock?)", "TC-08-01..05", "P1"],
  ["TS-09 Send", "ส่งตรงเวลา · ยึด CIS · do-not-contact ไม่ได้รับ · สรุปรายที่ fail", "TC-09-01..06", "P1"],
  ["TS-10 Tracking", "Sent/Open/Click/Unique · Export raw · Monthly Report (วันที่1 13:00)", "TC-10-01..10", "P1"],
];
table(s6, [p2h, ...p2r.map(r => [cell(r[0], true), cell(r[1]), cell(r[2]), pill(r[3])])], 1.55, [2.9, 6.5, 1.8, 0.6], { rowH: 0.5, fontSize: 11 });
callout(s6, "GrowthAi: Campaign = Visual Flow Builder (Decision/Condition/Action) → ต้องทดสอบ combinatorial path (ดูสไลด์ถัดไป)", 5.35, "red");

// ================= 7. Process 03 test map =================
const s7 = newSlide("Test Map · Process 03", "6", "Lead Management — ทดสอบอะไร");
const p3h = ["Scenario", "โฟกัสการทดสอบ", "TC", "Pri"].map(hcell);
const p3r = [
  ["TS-11 Import LC (OSSS)", "boundary ≤10 ชื่อ/จังหวัด · ≤10 จังหวัด/ครั้ง · auto update", "TC-11-01..07", "P1"],
  ["TS-12 บันทึก Lead + Dedup", "Web/FB/Contact(VPN)/CRM · dedup 1 & 2 ช่องทาง · แบบประกันเหมือน/ต่าง", "TC-12-01..12", "P1"],
  ["TS-13 Online vs ตัวแทน", "Online→Digital Sale (Sheet+Email) / ตัวแทน→เกณฑ์ Assign", "TC-13-01..04", "P2"],
  ["TS-14 Auto Assign + Scoring", "จังหวัด→ผลงาน→Round Robin · tie-break · Hot/Warm · no candidate", "TC-14-01..14", "P1"],
  ["TS-15 Manual Assign", "รายการ Lead ไร้ LC · assign + audit (ใคร/เมื่อไร)", "TC-15-01..05", "P2"],
  ["TS-16 LC Connect UI", "My Lead · Notification · Status · ปุ่มโทร · mockup", "TC-16-01..06", "P2"],
  ["TS-17 SLA 24 ชม. + ระงับ LC", "Hot/Warm timer · boundary 07/18/19:00 · เกิน→ดึงคืน · ระงับ 5–ถาวร", "TC-17-01..14", "P1"],
  ["TS-18 Contact + UW + 3 ครั้ง", "UW lookup 3 กรณี · กฎ 3 ครั้งปิดเคส · ติดตาม ≤7 วัน · retention 3 เดือน", "TC-18-01..16", "P1"],
  ["TS-19 Report", "Automail Daily 09:00 · Export CSV/Excel", "TC-19-01..04", "P2"],
];
table(s7, [p3h, ...p3r.map(r => [cell(r[0], true), cell(r[1]), cell(r[2]), pill(r[3])])], 1.5, [3.0, 6.4, 1.8, 0.6], { rowH: 0.44, fontSize: 10.5 });
callout(s7, "TS-17 (SLA) = จุดต้องทดสอบ Boundary หนักที่สุด — เวลาเริ่มนับ Hot vs Warm ต่างกัน + ขอบ 07/18/19:00", 5.55, "red");

// ================= 8. Test artifacts / where =================
const s8 = newSlide("Test Assets", "7", "Test Cases อยู่ที่ไหน — นำเข้ายังไง");
const kpi = [["180", "Test Cases รวม"], ["155", "จาก BRD"], ["25", "จาก GrowthAi"], ["19", "Test Scenarios"]];
kpi.forEach(([v, l], i) => {
  const x = 0.75 + i * 3.0;
  s8.addShape("rect", { x, y: 1.5, w: 2.8, h: 1.15, fill: { color: LIGHT }, line: { color: LINE, width: 1 }, rectRadius: 0.08 });
  s8.addText(v, { x, y: 1.6, w: 2.8, h: 0.6, align: "center", fontFace: FONT, fontSize: 28, bold: true, color: TEAL });
  s8.addText(l, { x, y: 2.22, w: 2.8, h: 0.4, align: "center", fontFace: FONT, fontSize: 12, color: MUTED });
});
const fh = ["ไฟล์ / ที่อยู่", "ใช้ทำอะไร"].map(hcell);
const fr = [
  ["MCMP_Test_Design.md", "อ่านทำความเข้าใจ TC ทั้งหมด (RTM · steps · expected · test data · open issues)"],
  ["export\\MCMP_Test_Artifacts.xlsx", "Master 13 sheets — ใช้ track/รีวิว offline"],
  ["export\\TestCases_Jira.csv", "Import เข้า Jira (UTF-8 BOM)"],
  ["export\\TestCases_TestRail.csv", "Import เข้า TestRail"],
  ["export\\TestCases_Xray_Steps.csv", "Import เข้า Xray (แยก step)"],
  ["export\\data.js → build-excel.js/build-csv.js", "แหล่งความจริงเดียว — แก้ TC ที่นี่แล้ว regenerate ทุกไฟล์"],
];
table(s8, [fh, ...fr.map(r => [cell(r[0], true, BLUE), cell(r[1])])], 2.85, [4.6, 7.2], { rowH: 0.5, fontSize: 11 });

// ================= 9. RTM summary =================
const s9 = newSlide("Coverage", "8", "RTM — Requirement → Test Cases");
s9.addText("ทุก Test Case trace กลับไป Process Step ID ของ BRD ได้ (เช่น TC-17-02 → 03-12). ใช้ตารางนี้วางแผน sprint และเช็ค coverage",
  { x: 0.75, y: 1.5, w: 11.8, h: 0.5, fontFace: FONT, fontSize: 13, color: MUTED });
const rh = ["Process", "Scenarios", "TC (BRD)", "จุดเน้น P1", "โฟกัสความเสี่ยง"].map(hcell);
const rr = [
  ["01 Ingestion", "TS-01..03", "~23", "Upload validate · Maker/Checker", "boundary ไฟล์ · error handling"],
  ["02 Campaign", "TS-04..10", "~55", "Segment · Send · Tracking · Approval", "PDPA exclude · flow builder · CIS dedup"],
  ["03 Lead", "TS-11..19", "~77", "Assign · SLA · Contact result", "SLA timer boundary · dedup · retention"],
  ["GrowthAi (+)", "Segment/Msg/Campaign/Track", "+25", "Flow node · Tracking columns", "combinatorial path · webhook"],
];
table(s9, [rh, ...rr.map(r => [cell(r[0], true), cell(r[1]), cell(r[2]), cell(r[3]), cell(r[4])])], 2.15, [2.0, 2.7, 1.3, 3.0, 2.8], { rowH: 0.75, fontSize: 10.5 });
callout(s9, "Priority: P1=Critical · P2=High · P3=Medium — เริ่มรัน P1 ของ Process ที่ตัวเองรับผิดชอบก่อนเสมอ", 5.5, "green");

// ================= 10. Test focus / boundary =================
const s10 = newSlide("⭐ Test Focus", "9", "จุดต้องทดสอบหนัก (Critical / Boundary)");
s10.addText(bullets([
  { text: "SLA Timer (TS-17): Hot นับจาก 'เวลานัด' · Warm นับจาก 'เวลา assign' ในช่วง 9–18 น. → ทดสอบขอบ 07:00 (เริ่ม 9:00), 18:00 (พอดี), 19:00 (เริ่ม 9:00 วันถัดไป), ครบ 24 ชม.พอดี", bold: true, color: RED },
  "Dedup (TS-12/09): 1 ช่องทาง vs 2 ช่องทาง · แบบประกันเหมือน/ต่าง · ยึด CIS เป็นหลัก · Lead ซ้ำ → LC คนเดิม",
  "PDPA/Compliance (TS-04/09): Consent=No และ Do-not-contact ต้องถูก exclude ทั้งตอนสร้าง Segment และตอนส่งจริง",
  "Maker/Checker (TS-03/08): แยกบทบาท — Maker อนุมัติงานตัวเองไม่ได้ · Reject ต้องมีเหตุผล",
  "File Upload (TS-02): boundary 5.00MB ยอมรับ / 5.01MB ปฏิเสธ · column ผิด · ไฟล์ว่าง · ไทย UTF-8",
  "Counter (TS-06/10): Sent=สำเร็จเท่านั้น · Unique Click ไม่นับซ้ำ · Open แยกจาก Click",
  "Import LC (TS-11): boundary ≤10 ชื่อ/จังหวัด และ ≤10 จังหวัด/ครั้ง (10 ยอมรับ / 11 ปฏิเสธ)",
]), { x: 0.85, y: 1.55, w: 11.6, h: 5.2, valign: "top" });

// ================= 11. Business Rules =================
const s11 = newSlide("Business Rules", "10", "Business Rule ที่ต้อง verify ทุก path");
const brh = ["#", "Rule", "ทดสอบที่ scenario"].map(hcell);
const brr = [
  ["BR-1", "ยึดเบอร์/อีเมลจาก CIS เป็นหลักเมื่อข้อมูลซ้ำ", "TS-09, TS-12"],
  ["BR-2", "Exclude Consent=No + Do-not-contact ก่อนส่ง (PDPA)", "TS-04, TS-09"],
  ["BR-3", "Maker/Checker ทั้ง import (01-0-4) และส่ง campaign (02-7)", "TS-03, TS-08"],
  ["BR-4", "SLA Lead 24 ชม. เกิน → ดึงคืน + ระงับ LC (5/10/15/20/ถาวร)", "TS-17"],
  ["BR-5", "Lead Scoring: มีเวลานัด=Hot / ไม่มี=Warm", "TS-14, TS-17"],
  ["BR-6", "Retention: Lead ปิดไม่ได้ 3 เดือน → ลบอัตโนมัติ", "TS-18"],
  ["BR-7", "กฎติดต่อสูงสุด 3 ครั้ง → ปิดเคส", "TS-18"],
];
table(s11, [brh, ...brr.map(r => [cell(r[0], true), cell(r[1]), cell(r[2], false, BLUE)])], 1.6, [0.9, 8.0, 2.9], { rowH: 0.62 });
callout(s11, "BR-2 (PDPA) และ BR-3 (Maker/Checker) เป็นความเสี่ยงเชิงกฎหมาย/governance — ถ้าเทสต์ตกมีผลร้ายแรง จัดเป็น P1 เสมอ", 5.65, "red");

// ================= 12. GrowthAi reality =================
const s12 = newSlide("⭐ Heads-up", "11", "GrowthAi เปลี่ยนวิธีทดสอบ Campaign");
s12.addText([
  { text: "GrowthAi คือเครื่องมือ marketing-automation จริง — Campaign ", options: {} },
  { text: "ไม่ใช่ ", options: { bold: true, color: RED } },
  { text: "\"สร้าง+เลือกช่องทาง\" แต่เป็น ", options: {} },
  { text: "Visual Flow Builder", options: { bold: true } },
], { x: 0.75, y: 1.5, w: 11.8, h: 0.5, fontFace: FONT, fontSize: 15, color: INK });
const flow =
`[Segment / Contact] → [Decision] → [Condition ตาม tag] → [Action]
                     yes/no       branch               ├─ Send email (drag-drop builder)
                                                        ├─ Send text message
                                                        ├─ Mobile app push
                                                        ├─ Send webhook
                                                        └─ per-step delay / schedule`;
s12.addShape("rect", { x: 0.75, y: 2.15, w: 11.8, h: 1.8, fill: { color: NAVY }, rectRadius: 0.06 });
s12.addText(flow, { x: 0.95, y: 2.25, w: 11.4, h: 1.6, fontFace: "Consolas", fontSize: 10.5, color: "D7E6F5", valign: "top" });
callout(s12, "ต้องทดสอบ: แต่ละ node แยก + ทั้ง flow แบบ E2E + combinatorial path (yes/no × branch × action) + per-step delay", 4.15, "amber");
callout(s12, "Tracking ตายตัวต่อ campaign: Total User · Total Send · Total Credit · Total Fail · Total Click · Unique Click (+ drill-down รายคน)", 5.05, "blue");

// ================= 13. Test data =================
const s13 = newSlide("Prepare", "12", "Test Data ที่ต้องเตรียมก่อนเทสต์");
const dh = ["ชุดข้อมูล", "รายละเอียด", "ใช้กับ"].map(hcell);
const dr = [
  ["Customer ปกติ", "มีเบอร์+อีเมล · Consent=Y · Inforce", "TS-04, TS-09"],
  ["Customer Consent=No", "ต้องถูก exclude", "TC-04-07, 09-06"],
  ["Customer ใน Do-not-contact", "เบอร์ตรง do-not-contact list", "TC-04-08, 09-06"],
  ["Customer หลายแหล่ง", "เบอร์/อีเมลต่างกัน CIS vs อื่น", "TC-09-02"],
  ["ไฟล์ csv หลายแบบ", "ถูก / >5MB / =5MB / column ผิด / ซ้ำ / ว่าง / ไทย", "TS-02"],
  ["LC หลายผลงาน", "ทุกงวด / บางงวด / จังหวัดต่าง / กรมธรรม์เท่ากัน", "TS-14"],
  ["Lead Hot / Warm", "มีช่วงเวลา / ไม่มีช่วงเวลา", "TS-14, TS-17"],
  ["Lead ซ้ำ", "1 ช่องทาง / 2 ช่องทาง / แบบประกันเหมือน-ต่าง", "TS-12"],
  ["เลขใบคำขอ/กรมธรรม์", "พบทั้งคู่ / พบใบคำขอไม่พบกรมธรรม์ / ไม่พบ", "TC-18-03..05"],
  ["เวลา Assign", "07:00 / 10:00 / 18:00 / 19:00", "TS-17"],
];
table(s13, [dh, ...dr.map(r => [cell(r[0], true), cell(r[1]), cell(r[2], false, BLUE)])], 1.5, [2.8, 6.4, 2.6], { rowH: 0.44, fontSize: 10.5 });

// ================= 14. Open issues to clarify =================
const s14 = newSlide("❓ Clarify First", "13", "ต้องถามให้ชัดก่อนเขียน Expected");
s14.addText(bullets([
  { text: "SLA 'ครบ 24 ชม.พอดี' นับ inclusive/exclusive? และ นับข้ามวันหยุด (เสาร์-อาทิตย์) หรือนับ 24 ชม.ต่อเนื่อง? (TC-17-03/07/13)", bold: true },
  "GrowthAi เป็น COTS/SaaS หรือ custom build? — กระทบระดับการทดสอบ (config vs functional) + effort",
  "Send webhook ยิงไประบบไหน (MCMP internal / LC Connect / UW?) — ยังไม่อยู่ใน BRD",
  "Decision vs Condition node ต่างกันเชิง business อย่างไร · LINE Ocean Connect ส่งผ่าน action ใด (หายจาก GrowthAi)",
  "Total Credit / Total Fail สูตรตรงกับ Infobip billing หรือไม่ (reconciliation)",
  "การแก้ Campaign หลังอนุมัติ — ล็อก หรือ ต้องขออนุมัติใหม่? (TC-08-05)",
  "Raw Data Lead Source แสดงหลายช่องทางด้วย comma หรือไม่ (Issue #105 Recheck) · frequency sync RFM (daily vs monthly)",
]), { x: 0.85, y: 1.55, w: 11.6, h: 4.4, valign: "top" });
callout(s14, "ข้อที่ค้างคำตอบ → ทำ TC เป็น 'Blocked/Draft' ไว้ก่อน อย่าเดา Expected — ถาม BA/SA (piraya.ph) ให้จบก่อนรัน", 6.05, "amber");

// ================= 15. QA1/QA2 split =================
const s15 = newSlide("Team Split", "14", "แบ่งงาน QA1 (Senior) / QA2 (Junior)");
s15.addText("จับคู่เป็น 8 workflow chain — QA2 ทำ 'ต้นน้ำ (data/UI)' ป้อนให้ QA1 ทดสอบ 'core logic' ปลายน้ำ ลด false positive",
  { x: 0.75, y: 1.5, w: 11.8, h: 0.5, fontFace: FONT, fontSize: 13, color: MUTED });
const qh = ["บทบาท", "รับผิดชอบหลัก", "MD"].map(hcell);
const qr = [
  ["QA1 Senior", "Segment+Tag+RFM · Campaign+Maker/Checker · Auto-Assign+SLA · LC API/Batch · GrowthAi · Test Plan", "≈63.75"],
  ["QA2 Junior", "Data ingestion (LineOA/BZB/GA4/Staff) · SMS+Ads · Lead intake · LC Connect Screens", "≈39.25"],
];
table(s15, [qh, ...qr.map(r => [cell(r[0], true, r[0].includes("QA1") ? RED : BLUE), cell(r[1]), cell(r[2], true)])], 2.1, [2.0, 8.6, 1.2], { rowH: 1.0, fontSize: 11.5 });
callout(s15, "QA รวม (ทางการ) ≈102.0 MD = baseline 98.0 + GrowthAi +4.0 · Gap High 5 ข้อ (ดูสไลด์ถัดไป) ควรเป็นงาน QA1 + ขอเพิ่ม ~5–8 MD", 4.55, "blue");
s15.addText("8 chains: Segment · Campaign+Activity · Tracking · LINE · Push/App · SMS+Ads · Lead→Auto-Assign · LC Connect",
  { x: 0.75, y: 5.5, w: 11.8, h: 0.5, fontFace: FONT, fontSize: 12, color: MUTED });

// ================= 16. Gaps (test risk) =================
const s16 = newSlide("🔴 Coverage Risk", "15", "Gap: อยู่ใน BRD แต่ไม่พบใน WBS");
s16.addText("ฟีเจอร์เหล่านี้มี Test Case เขียนไว้แล้วตาม BRD แต่ยังไม่พบ dev task ใน WBS — เสี่ยงว่า 'ไม่มีของให้เทสต์' ต้องยืนยันกับ PM ก่อน",
  { x: 0.75, y: 1.5, w: 11.8, h: 0.6, fontFace: FONT, fontSize: 13, color: MUTED });
const gh = ["#", "Gap", "TC ที่รอ", "ระดับ"].map(hcell);
const gr = [
  ["1", "Do-not-contact list (import + exclude)", "TC-04-08, 09-06", "High"],
  ["2", "Exclude Consent=No (PDPA)", "TC-04-07", "High"],
  ["3", "Maker/Checker workflow อนุมัติส่ง Campaign", "TS-08", "High"],
  ["4", "Manual Assign Lead", "TS-15", "High"],
  ["5", "ระงับ LC x วัน (5/10/15/20/ถาวร)", "TC-17-10/11", "High"],
];
table(s16, [gh, ...gr.map(r => [cell(r[0], true), cell(r[1]), cell(r[2], false, BLUE), cell(r[3], true, RED)])], 2.15, [0.7, 6.6, 3.0, 1.5], { rowH: 0.5 });
callout(s16, "Medium ที่รอยืนยันเช่นกัน: Open tracking (email) · Campaign Monthly Report · Lead Daily Report · Lead Import Excel/CSV · Message object แยก · Preview", 5.15, "amber", 0.9);

// ================= 17. Non-functional =================
const s17 = newSlide("Beyond Functional", "16", "Non-Functional ที่ต้องครอบคลุม");
const nh = ["ด้าน", "สิ่งที่ต้องทดสอบ"].map(hcell);
const nr = [
  ["Performance", "Batch Daily 23:00 ต้องเสร็จก่อน 08:00 (ก่อน Automail) · ส่ง Campaign ปริมาณมาก · Load Test"],
  ["Security", "แยกสิทธิ์ Maker/Checker · Lead เข้าถึงเฉพาะ LC เจ้าของ · VPN/VDI สำหรับ WFH · Pentest public link"],
  ["Integration", "FB/Google Ads API · Infobip SMS · OSSS · UW · NBS · QuickSight/S3 · GrowthAi"],
  ["Data Integrity", "Update vs Insert ไม่ duplicate · ยึด CIS เป็น primary · Hash SHA-256 (Staff)"],
  ["Scheduling", "Automail ตรงเวลา (08:00/09:00/13:00) · SLA timer · Retention 3 เดือน"],
  ["Compatibility", "LC Connect บนมือถือ · การแสดง Email/LINE รูปภาพ · encoding ภาษาไทย"],
];
table(s17, [nh, ...nr.map(r => [cell(r[0], true, TEAL), cell(r[1])])], 1.55, [2.4, 9.4], { rowH: 0.7, fontSize: 11.5 });

// ================= 18. Workflow + entry/exit =================
const s18 = newSlide("Execution", "17", "Test Execution Workflow & Defect Flow");
const flow2 =
`เตรียม ─► Import TC ─► รัน P1 ก่อน ─► บันทึกผล ─► เจอ Defect ─► แจ้ง Dev ─► Retest ─► ปิด
(Test Data) (Jira/Xray)  (ตาม chain)  (Pass/Fail)  (ระบุ TC+step) (severity)  (verify)  (closed)`;
s18.addShape("rect", { x: 0.75, y: 1.5, w: 11.8, h: 1.15, fill: { color: NAVY }, rectRadius: 0.06 });
s18.addText(flow2, { x: 0.9, y: 1.6, w: 11.5, h: 0.95, fontFace: "Consolas", fontSize: 11, color: "D7E6F5", valign: "middle" });
s18.addText([{ text: "Entry Criteria (เริ่มเทสต์ได้เมื่อ):", options: { bold: true, color: GREEN, breakLine: true } },
  { text: "build พร้อม · test data เตรียมครบ · integration/stub เชื่อมได้ · Open Issue High ได้คำตอบ", options: { breakLine: true } },
], { x: 0.85, y: 2.9, w: 11.6, h: 0.9, fontFace: FONT, fontSize: 13, color: INK, paraSpaceAfter: 4 });
s18.addText([{ text: "Exit Criteria (จบรอบได้เมื่อ):", options: { bold: true, color: RED, breakLine: true } },
  { text: "P1 ทั้งหมดรัน 100% + ผ่าน · ไม่มี Critical/Blocker ค้าง · defect P2 มีแผนปิด · trace RTM ครบทุก requirement", options: { breakLine: true } },
], { x: 0.85, y: 3.95, w: 11.6, h: 0.9, fontFace: FONT, fontSize: 13, color: INK, paraSpaceAfter: 4 });
callout(s18, "Defect report ต้องอ้าง TC ID + step + expected/actual + severity + test data ที่ใช้ เพื่อให้ dev reproduce ได้ทันที", 5.15, "blue");

// ================= 19. Day-1 checklist =================
const s19 = newSlide("Get Started", "18", "Checklist วันแรกของ QA");
s19.addText([
  { text: "☐ 1.  อ่าน MCMP_Test_Design.md ทั้งไฟล์ (RTM + TC + test data + open issues)", options: { breakLine: true } },
  { text: "☐ 2.  เปิด export\\MCMP_Test_Artifacts.xlsx ดู 13 sheets ให้เห็นภาพรวม TC", options: { breakLine: true } },
  { text: "☐ 3.  Import TestCases_Jira.csv (หรือ Xray/TestRail) เข้าเครื่องมือทีม", options: { breakLine: true } },
  { text: "☐ 4.  รับ scope ตาม QA1/QA2 + 8 workflow chain ของตัวเอง", options: { breakLine: true } },
  { text: "☐ 5.  เตรียม Test Data ตามตาราง (Consent=No, do-not-contact, csv boundary, Lead Hot/Warm)", options: { breakLine: true } },
  { text: "☐ 6.  รวบรวม 7 Open Issues → ถาม BA/SA ให้ได้คำตอบก่อนเขียน Expected", options: { breakLine: true, bold: true, color: RED } },
  { text: "☐ 7.  ยืนยัน 5 Gap High กับ PM ว่า 'มีของให้เทสต์' ไหม", options: { breakLine: true } },
  { text: "☐ 8.  เริ่มรัน P1 ของ Process ที่รับผิดชอบ → บันทึกผล → แจ้ง defect", options: { breakLine: true } },
], { x: 0.95, y: 1.6, w: 11.5, h: 4.6, fontFace: FONT, fontSize: 15, color: INK, paraSpaceAfter: 11 });
callout(s19, "ติดปัญหา/ต้องการรายละเอียด TC เพิ่ม: ดูเอกสารในโปรเจกต์ หรือถาม QA Lead — ขอให้ทดสอบสนุกครับ 🚀", 6.15, "green");

pptx.writeFile({ fileName: "MCMP_QA_Onboarding.pptx" }).then(f => console.log("✅ created:", f, "· slides:", PAGE + 1));
