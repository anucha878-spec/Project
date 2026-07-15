// build-testfocus-pptx.js — สร้าง MCMP_TestFocus_BRD_WBS.pptx
// สรุป Business + BRD↔WBS Cross-check + กลุ่ม Critical/Major ที่ต้องเน้นทดสอบ
// รัน: node build-testfocus-pptx.js   (ต้องมี pptxgenjs ใน node_modules)
const PptxGenJS = require("pptxgenjs");

const FONT = "Tahoma"; // รองรับภาษาไทยบน Windows/PowerPoint
const NAVY = "0B2A4A", BLUE = "1565C0", TEAL = "00897B", AMBER = "F57C00",
      RED = "C62828", GREEN = "2E7D32", INK = "1A2330", MUTED = "5B6B7B",
      LINE = "D8E0E8", LIGHT = "F6F9FC", CARD = "FFFFFF";

const pptx = new PptxGenJS();
pptx.defineLayout({ name: "W", width: 13.333, height: 7.5 });
pptx.layout = "W";
pptx.author = "MCMP QA";
pptx.title = "MCMP — Business & BRD↔WBS Test Focus";

pptx.defineSlideMaster({
  title: "BASE",
  background: { color: "EEF2F6" },
  objects: [
    { rect: { x: 0, y: 0, w: 0.18, h: 7.5, fill: { color: RED } } },
    { text: { text: "MCMP · Business & Cross-check · กลุ่มที่ต้องเน้นทดสอบ", options: { x: 0.5, y: 7.05, w: 8, h: 0.35, fontFace: FONT, fontSize: 9, color: MUTED } } },
  ],
});

function newSlide(tag, numLabel, heading, tagColor) {
  const s = pptx.addSlide({ masterName: "BASE" });
  s.addShape("rect", { x: 0.45, y: 0.35, w: 12.45, h: 6.5, fill: { color: CARD }, line: { color: LINE, width: 1 } });
  if (tag) s.addText(tag.toUpperCase(), { x: 0.75, y: 0.45, w: 11, h: 0.3, fontFace: FONT, fontSize: 11, bold: true, color: tagColor || BLUE, charSpacing: 2 });
  if (heading) {
    if (numLabel) s.addText(numLabel, { x: 0.75, y: 0.78, w: 0.55, h: 0.5, align: "center", valign: "middle", fontFace: FONT, fontSize: 16, bold: true, color: "FFFFFF", fill: { color: NAVY }, rectRadius: 0.05 });
    s.addText(heading, { x: numLabel ? 1.45 : 0.75, y: 0.78, w: 11, h: 0.55, fontFace: FONT, fontSize: 25, bold: true, color: NAVY });
  }
  return s;
}
const bullets = (arr) => arr.map(t => ({ text: t, options: { bullet: { code: "2022" }, fontFace: FONT, fontSize: 15, color: INK, paraSpaceAfter: 8, breakLine: true } }));
function callout(s, text, y, kind, h) {
  const map = { amber: ["FFF8E1", AMBER], red: ["FDECEA", RED], blue: ["E8F0FB", BLUE], green: ["E8F5E9", GREEN] };
  const [bg, bar] = map[kind] || map.amber;
  const H = h || 0.7;
  s.addShape("rect", { x: 0.75, y, w: 11.8, h: H, fill: { color: bg }, line: { type: "none" } });
  s.addShape("rect", { x: 0.75, y, w: 0.08, h: H, fill: { color: bar } });
  s.addText(text, { x: 0.98, y, w: 11.5, h: H, valign: "middle", fontFace: FONT, fontSize: 13, color: INK });
}
function table(s, rows, y, colW, opts = {}) {
  s.addTable(rows, {
    x: 0.75, y, w: 11.8, colW, fontFace: FONT, fontSize: opts.fontSize || 12,
    color: INK, border: { type: "solid", color: LINE, pt: 0.5 }, valign: "middle",
    rowH: opts.rowH || 0.4,
  });
}
const hcell = (t) => ({ text: t, options: { fill: { color: NAVY }, color: "FFFFFF", bold: true, fontFace: FONT, fontSize: 12 } });
const cell = (t, b, c) => ({ text: t, options: { fontFace: FONT, fontSize: 12, color: c || INK, bold: !!b } });

// ---- 1 Title ----
const t1 = pptx.addSlide();
t1.background = { color: NAVY };
t1.addShape("rect", { x: 0, y: 0, w: 13.333, h: 7.5, fill: { type: "solid", color: NAVY } });
t1.addShape("rect", { x: 0, y: 5.35, w: 13.333, h: 0.12, fill: { color: RED } });
t1.addText("PROJECT 20240278 · QA TEST FOCUS", { x: 0.9, y: 1.65, w: 11, h: 0.4, fontFace: FONT, fontSize: 14, bold: true, color: "9EC6EE", charSpacing: 3 });
t1.addText("Business & BRD ↔ WBS Cross-check", { x: 0.9, y: 2.1, w: 11.5, h: 1.0, fontFace: FONT, fontSize: 40, bold: true, color: "FFFFFF" });
t1.addText("กลุ่ม Critical / Major ที่ต้องเน้นทดสอบ", { x: 0.9, y: 3.55, w: 11.5, h: 0.7, fontFace: FONT, fontSize: 24, bold: true, color: "FFD6C9" });
t1.addText("Marketing Campaign Management Platform — บมจ. ไทยสมุทรประกันชีวิต (Ocean Life Insurance)", { x: 0.9, y: 4.4, w: 11.5, h: 0.5, fontFace: FONT, fontSize: 16, color: "CFE1F2" });
t1.addText([
  { text: "อ้างอิง: BRD_Summary_Workflow.md  ·  MCMP_BRD_vs_WBS_Crosscheck.md", options: { breakLine: true } },
  { text: "เทียบ BRD v0.1 (42 หน้า)  ↔  WBS / Development Effort v1.0 (5 หน้า, In Progress)", options: {} },
], { x: 0.9, y: 5.75, w: 11.5, h: 1, fontFace: FONT, fontSize: 13, color: "BCD4EC", lineSpacingMultiple: 1.4 });

// ---- 2 Business Overview ----
const s2 = newSlide("Business", "1", "MCMP ทำอะไร (ภาพธุรกิจ)");
s2.addText("แพลตฟอร์มกลางของฝ่ายการตลาด — รวมข้อมูลลูกค้าจากหลายระบบให้เป็น Single View → สร้างกลุ่มเป้าหมาย → ยิงแคมเปญหลายช่องทาง → บริหาร Lead จนถึงมือตัวแทน (LC)",
  { x: 0.75, y: 1.5, w: 11.8, h: 0.7, fontFace: FONT, fontSize: 15, color: INK });
const ov = [
  ["①", "รวมข้อมูล\nSingle View"], ["②", "สร้าง Segment\nRFM / CLV"], ["③", "ส่ง Campaign\nSMS/Email/LINE/App"],
  ["④", "Sync\nFB / Google Ads"], ["⑤", "บริหาร Lead\nLC · SLA 24 ชม."],
];
ov.forEach(([n, l], i) => {
  const x = 0.75 + i * 2.36;
  s2.addShape("rect", { x, y: 2.4, w: 2.2, h: 1.55, fill: { color: LIGHT }, line: { color: LINE, width: 1 }, rectRadius: 0.08 });
  s2.addText(n, { x, y: 2.55, w: 2.2, h: 0.6, align: "center", fontFace: FONT, fontSize: 26, bold: true, color: NAVY });
  s2.addText(l, { x: x + 0.05, y: 3.15, w: 2.1, h: 0.75, align: "center", valign: "top", fontFace: FONT, fontSize: 11.5, color: MUTED });
});
const pHdr = ["Process หลัก", "สาระสำคัญ (Business)"].map(hcell);
const pRows = [
  ["01 Data Ingestion", "ดึง/อัปเดตข้อมูล Daily 23:00 + Realtime · Update-Insert ไม่ซ้ำ · Automail แจ้งผล"],
  ["02 Campaign Setting & Send", "สร้าง Segment → Campaign หลายช่องทาง → Maker/Checker อนุมัติ → ส่ง → เก็บผล"],
  ["03 Lead Management", "รับ Lead → Auto/Manual Assign → LC ติดต่อใน SLA 24 ชม. → บันทึกผล → รายงาน"],
].map(r => [cell(r[0], true), cell(r[1])]);
table(s2, [pHdr, ...pRows], 4.25, [3.4, 8.4], { rowH: 0.62 });

// ---- 3 Cross-check method + coverage ----
const s3 = newSlide("Cross-check", "2", "วิธีเทียบ & ผลรวม BRD ↔ WBS");
s3.addText([
  { text: "WBS v1.0 คือเอกสาร ", options: {} },
  { text: "Development Effort / แตกงาน (ไม่ใช่ตัว BRD)", options: { bold: true } },
  { text: " — เทียบเพื่อตรวจว่า ทุก requirement ใน BRD ถูกแปลงเป็น Dev Task ครบหรือไม่", options: {} },
], { x: 0.75, y: 1.5, w: 11.8, h: 0.6, fontFace: FONT, fontSize: 14, color: INK });
const stat = [
  [GREEN, "✅ ~38", "ครอบคลุมชัดเจน", "โครงสร้างหลักครบดี"],
  [AMBER, "⚠️ ~12", "มีบางส่วน / ไม่ชัด", "ต้องยืนยันกับ BA/SA"],
  [RED, "❌ ~8", "ไม่พบ task ชัด", "เสี่ยงตกหล่นจริง"],
];
stat.forEach(([c, v, l, d], i) => {
  const x = 0.75 + i * 3.97;
  s3.addShape("rect", { x, y: 2.25, w: 3.75, h: 1.45, fill: { color: LIGHT }, line: { color: c, width: 1.5 }, rectRadius: 0.08 });
  s3.addText(v, { x, y: 2.38, w: 3.75, h: 0.6, align: "center", fontFace: FONT, fontSize: 28, bold: true, color: c });
  s3.addText(l, { x, y: 2.98, w: 3.75, h: 0.35, align: "center", fontFace: FONT, fontSize: 13, bold: true, color: INK });
  s3.addText(d, { x, y: 3.32, w: 3.75, h: 0.3, align: "center", fontFace: FONT, fontSize: 11, color: MUTED });
});
callout(s3, "รวม 19 จุดที่เป็น Gap → จัดกลุ่มความเสี่ยงเป็น  🔴 Critical 5  ·  🟠 Major 7  ·  🟡 Minor 7  (ดูสไลด์ถัดไป)", 4.0, "blue");
callout(s3, "ทำไม gap = เป้าทดสอบสำคัญ?  requirement มีใน BRD แต่ไม่ชัดใน WBS → เสี่ยง 2 ชั้น (อาจไม่ถูกสร้าง + อาจไม่ถูกเทสต์) จึงต้องตั้งใจตรวจ", 4.85, "amber");
s3.addText("หมายเหตุ: WBS ยังเป็น \"In Progress\" — บาง task อาจซ่อนในงานก้อนใหญ่ ควรใช้ตาราง cross-check เป็น checklist tick ยืนยันทีละข้อ",
  { x: 0.75, y: 5.75, w: 11.8, h: 0.5, fontFace: FONT, fontSize: 11.5, italic: true, color: MUTED });

// ---- 4 Severity map ----
const s4 = newSlide("Priority Map", "3", "จัดระดับความสำคัญของ Gap → เป้าทดสอบ", RED);
const sevHdr = ["ระดับ", "จำนวน", "นิยาม / เกณฑ์", "ท่าทีการทดสอบ"].map(hcell);
const sevRows = [
  ["🔴 Critical", "5", "Compliance / PDPA / Business rule หลัก — ผิดแล้วกระทบกฎหมายหรือ core operation", "ต้องเทสต์ + ยืนยันก่อน Dev เริ่ม"],
  ["🟠 Major", "7", "Feature ที่ระบุใน BRD แต่ไม่พบใน WBS — กระทบการใช้งาน/รายงานจริง", "เทสต์เต็ม + ขอ confirm scope"],
  ["🟡 Minor", "7", "รายละเอียด/เงื่อนไข/เวลา ที่ควรระบุให้ชัด", "ตรวจเชิงยืนยัน (spot-check)"],
];
const rowColors = [RED, AMBER, "C9A100"];
table(s4, [sevHdr, ...sevRows.map((r, i) => r.map((c, j) => cell(c, j === 0, j === 0 ? rowColors[i] : INK)))], 1.65, [1.9, 1.1, 5.6, 3.2], { rowH: 0.78 });
callout(s4, "โฟกัสของ deck นี้ = 🔴 Critical (5) + 🟠 Major (7) รวม 12 จุด ที่ QA ต้องเน้นทดสอบเป็นพิเศษ", 4.85, "red");
const byProc = [["Process 01", "1"], ["Process 02", "6"], ["Process 03", "5"]];
byProc.forEach(([l, v], i) => {
  const x = 0.75 + i * 3.97;
  s4.addShape("rect", { x, y: 5.75, w: 3.75, h: 0.75, fill: { color: LIGHT }, line: { color: LINE, width: 1 }, rectRadius: 0.06 });
  s4.addText([{ text: v + "  ", options: { bold: true, color: RED, fontSize: 16 } }, { text: "gap (Critical+Major) — " + l, options: { color: MUTED, fontSize: 11 } }],
    { x: x + 0.1, y: 5.75, w: 3.55, h: 0.75, valign: "middle", fontFace: FONT });
});

// ---- 5 Critical group ----
const s5 = newSlide("🔴 Critical", "4", "กลุ่ม Critical — ต้องปิด/ต้องเทสต์ก่อน", RED);
s5.addText("อยู่ใน BRD แต่ไม่พบ task ชัดใน WBS v1.0 — เป็น core business rule / compliance", { x: 0.75, y: 1.5, w: 11.8, h: 0.35, fontFace: FONT, fontSize: 13, color: MUTED });
const cHdr = ["#", "Gap ที่ต้องเน้นทดสอบ", "Process", "ทำไมถึง Critical"].map(hcell);
const cRows = [
  ["C1", "Do-not-contact list (import + exclude ตอนส่ง)", "01 / 02", "Compliance — ส่งผิดคนมีผลทางกฎหมาย"],
  ["C2", "Exclude Consent = No ตอนสร้าง Segment / ส่ง", "02", "PDPA — ยินยอมก่อนสื่อสาร"],
  ["C3", "Maker/Checker workflow อนุมัติส่ง Campaign (02-7)", "02", "Governance — มีแค่ 'สถานะ' ยังไม่มี task จริง"],
  ["C4", "Manual Assign Lead (03-09)", "03", "Business continuity — กรณี auto assign ไม่ได้"],
  ["C5", "ระงับ LC x วัน (5/10/15/20/ถาวร) (03-12.3)", "03", "Business rule — ยังไม่พบ config/task"],
].map(r => r.map((c, i) => cell(c, i === 0, i === 0 ? RED : INK)));
table(s5, [cHdr, ...cRows], 1.95, [0.7, 5.9, 1.2, 4.0], { rowH: 0.62 });
callout(s5, "ทดสอบเน้น: ทั้งกรณีปกติ + กรณีขอบ (บล็อกได้จริงไหม, exclude ครบไหม, อนุมัติ 2 ชั้นบังคับไหม, ระงับแล้วรับ Lead ไม่ได้จริงไหม) → มอบให้ QA1 (Senior)", 5.65, "red", 0.85);

// ---- 6 Major group ----
const s6 = newSlide("🟠 Major", "5", "กลุ่ม Major — เทสต์เต็ม + ยืนยัน scope", AMBER);
const mHdr = ["#", "Gap ที่ต้องเน้นทดสอบ", "Process", "ประเด็น"].map(hcell);
const mRows = [
  ["M1", "Open tracking (การเปิดอ่าน โดยเฉพาะ Email)", "02", "WBS มีแค่ Click tracking"],
  ["M2", "Campaign Monthly Summary Report (Automail วันที่1 13:00)", "02", "ไม่พบ task"],
  ["M3", "Lead Daily Report Automail 09:00 + Export CSV/Excel", "03", "มีแค่ SLA email 09:00"],
  ["M4", "Lead Import Excel/CSV (CRM Event 03-05.4)", "03", "ไม่พบ task รองรับ import file"],
  ["M5", "Message เป็น object แยก (สร้าง/แก้/Clone/Active)", "02", "WBS รวมไว้ใน Campaign builder"],
  ["M6", "Preview ข้อความก่อนส่ง (02-6)", "02", "ไม่พบ"],
  ["M7", "กฎติดต่อ 3 ครั้ง → ปิดเคส (03-13)", "03", "ไม่พบ logic ชัด"],
].map(r => r.map((c, i) => cell(c, i === 0, i === 0 ? AMBER : INK)));
table(s6, [mHdr, ...mRows], 1.55, [0.7, 6.0, 1.1, 4.0], { rowH: 0.53 });
callout(s6, "เทสต์เพื่อยืนยัน: feature เหล่านี้ 'มีจริงในระบบไหม' ก่อน แล้วจึงตรวจความถูกต้อง — ถ้าทีม dev ตอบว่าไม่ทำ ต้องเป็น decision ที่ record ไว้", 5.5, "amber", 0.85);

// ---- 7 Test focus recommendation ----
const s7 = newSlide("Test Focus", "6", "สรุป: เน้นทดสอบตรงไหน & ใครรับ", RED);
s7.addText(bullets([
  "🔴 Critical 5 จุด = งาน QA1 (Senior) → ทดสอบเชิงลึก + ยืนยัน requirement ก่อน Dev lock scope (เพิ่ม ~5–8 MD)",
  "🟠 Major 7 จุด = เทสต์เต็มรูปแบบ แต่เริ่มด้วยการ confirm ว่า 'มี/ไม่มี' ในระบบ",
  "Process 02 (Campaign) มี gap หนาสุด (6/12) — เป็นจุดที่ต้องลงแรงทดสอบมากที่สุด",
  "จับคู่ chain: ต้นน้ำ (Segment/Consent/Do-not-contact) → ปลายน้ำ (ส่งจริง/Tracking/Report) ให้ทดสอบต่อเนื่อง",
  "🟡 Minor 7 จุด = spot-check เชิงยืนยัน (เวลา automail, popup validation, limit, ≤7 วัน ฯลฯ)",
]), { x: 0.85, y: 1.6, w: 11.6, h: 3.4, valign: "top" });
callout(s7, "Deliverable ที่รองรับ: MCMP_Test_Design.md (180 TC) · export/ (Jira/TestRail/Xray) · MCMP_QA_Task_Assignment.md (QA1/QA2)", 5.05, "blue");
callout(s7, "Next step: ประชุม tick ยืนยัน 12 จุด Critical+Major กับ BA/SA/PM → lock scope + effort ก่อนเริ่ม Dev", 5.9, "green");

pptx.writeFile({ fileName: "MCMP_TestFocus_BRD_WBS.pptx" }).then(f => console.log("✅ created:", f));
