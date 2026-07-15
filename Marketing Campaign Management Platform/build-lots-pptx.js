// build-lots-pptx.js — สร้าง MCMP_Production_3Lots.pptx
// Roadmap การแบ่งขึ้น Production 3 Lot + ผลกระทบต่อแผน QA
// ที่มา: [In Progress] 20240278 Marketing Campaign Management Platform_v1.0.xlsx (export 2026-07-15)
//   - แท็บ "Development Effort" คอลัมน์ Release (1/2/3) = งาน -> Lot
//   - แท็บ "Project Timeline_New22.06.69" = Go Live + QA effort + Working Day
// รัน: node build-lots-pptx.js
const PptxGenJS = require("pptxgenjs");

const FONT = "Tahoma";
const NAVY = "0B2A4A", BLUE = "1565C0", TEAL = "00897B", AMBER = "F57C00",
      RED = "C62828", GREEN = "2E7D32", PURPLE = "6A1B9A", INK = "1A2330",
      MUTED = "5B6B7B", LINE = "D8E0E8", CARD = "FFFFFF";
const L1 = BLUE, L2 = GREEN, L3 = PURPLE;

const pptx = new PptxGenJS();
pptx.defineLayout({ name: "W", width: 13.333, height: 7.5 });
pptx.layout = "W";
pptx.author = "MCMP QA";
pptx.title = "MCMP — Production 3 Lot Roadmap";

pptx.defineSlideMaster({
  title: "BASE",
  background: { color: "EEF2F6" },
  objects: [
    { rect: { x: 0, y: 0, w: 0.18, h: 7.5, fill: { color: TEAL } } },
    { text: { text: "MCMP · Production 3 Lot · ผลกระทบต่อแผน QA", options: { x: 0.5, y: 7.05, w: 8, h: 0.35, fontFace: FONT, fontSize: 9, color: MUTED } } },
    { text: { text: "ที่มา: WBS v1.0 (.xlsx export 2026-07-15) — Development Effort [Release] + Project Timeline_New22.06.69", options: { x: 6.6, y: 7.05, w: 6.4, h: 0.35, align: "right", fontFace: FONT, fontSize: 8, color: MUTED } } },
  ],
});

function newSlide(tag, numLabel, heading, tagColor) {
  const s = pptx.addSlide({ masterName: "BASE" });
  s.addShape("rect", { x: 0.45, y: 0.35, w: 12.45, h: 6.5, fill: { color: CARD }, line: { color: LINE, width: 1 } });
  if (tag) s.addText(tag.toUpperCase(), { x: 0.75, y: 0.45, w: 11, h: 0.3, fontFace: FONT, fontSize: 11, bold: true, color: tagColor || TEAL, charSpacing: 2 });
  if (heading) {
    if (numLabel) s.addText(numLabel, { x: 0.75, y: 0.78, w: 0.55, h: 0.5, align: "center", valign: "middle", fontFace: FONT, fontSize: 16, bold: true, color: "FFFFFF", fill: { color: NAVY }, rectRadius: 0.05 });
    s.addText(heading, { x: numLabel ? 1.45 : 0.75, y: 0.78, w: 11, h: 0.55, fontFace: FONT, fontSize: 25, bold: true, color: NAVY });
  }
  return s;
}
function callout(s, text, y, kind, h) {
  const map = { amber: ["FFF8E1", AMBER], red: ["FDECEA", RED], blue: ["E8F0FB", BLUE], green: ["E8F5E9", GREEN], teal: ["E0F2F1", TEAL] };
  const [bg, bar] = map[kind] || map.amber;
  const H = h || 0.7;
  s.addShape("rect", { x: 0.75, y, w: 11.8, h: H, fill: { color: bg }, line: { type: "none" } });
  s.addShape("rect", { x: 0.75, y, w: 0.08, h: H, fill: { color: bar } });
  s.addText(text, { x: 0.98, y, w: 11.5, h: H, valign: "middle", fontFace: FONT, fontSize: 12.5, color: INK });
}
function table(s, rows, y, colW, opts = {}) {
  s.addTable(rows, {
    x: 0.75, y, w: 11.8, colW, fontFace: FONT, fontSize: opts.fontSize || 12,
    color: INK, border: { type: "solid", color: LINE, pt: 0.5 }, valign: "middle",
    rowH: opts.rowH || 0.4,
  });
}
const hcell = (t) => ({ text: t, options: { fill: { color: NAVY }, color: "FFFFFF", bold: true, fontFace: FONT, fontSize: 11.5 } });
const cell = (t, b, c) => ({ text: t, options: { fontFace: FONT, fontSize: 11.5, color: c || INK, bold: !!b } });
const lotCell = (n) => ({ text: "Lot " + n, options: { fontFace: FONT, fontSize: 11.5, bold: true, color: "FFFFFF", fill: { color: n === 1 ? L1 : n === 2 ? L2 : L3 }, align: "center" } });

// ============ 1 Title ============
const t1 = pptx.addSlide();
t1.background = { color: NAVY };
t1.addShape("rect", { x: 0, y: 0, w: 13.333, h: 7.5, fill: { type: "solid", color: NAVY } });
t1.addShape("rect", { x: 0, y: 5.35, w: 13.333, h: 0.12, fill: { color: TEAL } });
t1.addText("PROJECT 20240278 · RELEASE PLAN", { x: 0.9, y: 1.55, w: 11, h: 0.4, fontFace: FONT, fontSize: 14, bold: true, color: "80CBC4", charSpacing: 3 });
t1.addText("แบ่งขึ้น Production 3 Lot", { x: 0.9, y: 2.0, w: 11.5, h: 1.0, fontFace: FONT, fontSize: 42, bold: true, color: "FFFFFF" });
t1.addText("Segment (ต.ค. 2026)  →  Lead (ธ.ค. 2026)  →  Campaign (พ.ค. 2027)", { x: 0.9, y: 3.45, w: 11.5, h: 0.7, fontFace: FONT, fontSize: 22, bold: true, color: "B2DFDB" });
t1.addText("Marketing Campaign Management Platform — บมจ. ไทยสมุทรประกันชีวิต (Ocean Life Insurance)", { x: 0.9, y: 4.35, w: 11.5, h: 0.5, fontFace: FONT, fontSize: 15, color: "CFE1F2" });
t1.addText([
  { text: "ที่มา: WBS v1.0 (.xlsx export 2026-07-15) — แท็บ Development Effort [คอลัมน์ Release] + Project Timeline_New22.06.69", options: { breakLine: true } },
  { text: "แผนใหม่ 328 MD (เดิม 452.2 MD / 2 Lot)  ·  QA 98 MD  ·  180 Test Cases", options: {} },
], { x: 0.9, y: 5.7, w: 11.5, h: 1, fontFace: FONT, fontSize: 13, color: "BCD4EC", lineSpacingMultiple: 1.4 });

// ============ 2 ภาพรวม 3 Lot ============
const s2 = newSlide("Roadmap", "1", "3 Lot คืออะไร ขึ้นเมื่อไหร่");
table(s2, [
  [hcell("Lot"), hcell("ส่งมอบอะไร"), hcell("Go Live"), hcell("QA MD"), hcell("Test Cases")],
  [lotCell(1), cell("Campaign Part 1 — นำเข้า Customer/Policy/GA4/RFM → สร้าง Segment → Sync FB/Google Ads"), cell("19 ต.ค. 2026", true), cell("27.0", true), cell("26", true)],
  [lotCell(2), cell("Lead Management ทั้งหมด — นำเข้า Lead/Agent/Income, Auto Assign + SLA, LC Connect"), cell("1 ธ.ค. 2026", true), cell("27.5", true), cell("83", true)],
  [lotCell(3), cell("Campaign Part 2 — นำเข้า Line OA/FB Inbox/Ocean Club, สร้าง+ส่ง Campaign, Message, Tracking"), cell("6 พ.ค. 2027", true), cell("43.5", true), cell("71", true)],
  [cell("รวม", true), cell(""), cell(""), cell("98.0", true, TEAL), cell("180", true, TEAL)],
], 1.55, [1.0, 6.4, 1.7, 1.3, 1.4], { rowH: 0.62 });

callout(s2, "🔑 ลำดับ Lot ไม่ตรงกับ 3 core process ของ BRD — BRD เรียง 01 Ingestion → 02 Campaign → 03 Lead แต่ Lot เรียง Segment → Lead → Campaign\nงานนำเข้าข้อมูล (1.1.x) ถูกหั่นคร่อม Lot 1 กับ Lot 3 ตามว่า source ไหนป้อน feature ไหน", 4.5, "teal", 0.95);
callout(s2, "✅ Lot 2 (Lead) ไม่พึ่ง Lot 1 เลย — งาน 2.x อยู่ Lot 2 ก้อนเดียว ทดสอบขนานกับ Lot 1 ได้", 5.65, "green", 0.6);
s2.addText("เดิม: 2 Lot / 452.2 MD  →  ใหม่: 3 Lot / 328 MD (Dev ถูกตัด ~88 MD, QA แทบไม่ลด 100 → 98)", { x: 0.75, y: 6.4, w: 11.8, h: 0.35, fontFace: FONT, fontSize: 12, italic: true, color: MUTED });

// ============ 3 Lot 1 ส่ง Campaign ไม่ได้ ============
const s3 = newSlide("ข้อค้นพบสำคัญ", "2", "Lot 1 มี Segment แต่ “ส่ง Campaign ไม่ได้”", RED);
s3.addText("งานสร้าง/ส่ง Campaign (WBS 1.2.3–1.2.7) ถูกเลื่อนไป Lot 3 ทั้งหมด", { x: 0.75, y: 1.5, w: 11.8, h: 0.4, fontFace: FONT, fontSize: 15, bold: true, color: RED });
table(s3, [
  [hcell("Lot 1 ทำได้"), hcell("Lot 1 ทำไม่ได้ (ต้องรอ Lot 3)")],
  [cell("✅ นำเข้า Customer (1.1.1), Policy (1.1.2), GA4 (1.1.6), RFM (1.1.7)\n✅ ค้นหา Segment (1.2.1)\n✅ สร้าง Segment + เงื่อนไข (1.2.2)\n✅ Sync Audience → Facebook / Google Ads (1.2.8)\n✅ Monitoring & Support (1.1.10)"),
   cell("❌ สร้าง Campaign (1.2.3)\n❌ Tracking / Short Link (1.2.4)\n❌ ส่ง LINE (1.2.5) · SMS (1.2.6) · Ocean Club App (1.2.7)\n❌ Auto-tag (1.2.2.2.1 — อยู่ Lot 3 แม้ตาราง Tag จะทำใน Lot 1)\n❌ นำเข้า Line OA (1.1.3), FB Inbox (1.1.4), Ocean Club (1.1.5), Staff (1.1.9)", false, RED)],
], 2.0, [5.9, 5.9], { rowH: 1.5, fontSize: 12 });

callout(s3, "ผลต่อการทดสอบ: E2E “สร้าง Segment → ส่งหาลูกค้า → วัดผล” จะทดสอบได้ครั้งแรกตอน Lot 3 เท่านั้น\nLot 1 ต้อง verify Segment ด้วยวิธีอื่น — ตรวจ audience count / export raw data / ยืนยันปลายทางที่ Facebook–Google Ads Customer Match", 4.35, "red", 0.95);
callout(s3, "TC-04-15 (Filter channel-presence: มี Email / ไม่มี App / ยังไม่เป็น Ocean Connect) ต้องใช้ข้อมูล Line OA + Ocean Club App → ย้ายจาก Lot 1 ไป Lot 3 แล้ว", 5.5, "amber", 0.65);
s3.addText("คำถามถึงทีม: business value ของ Lot 1 คือการ sync audience ไป FB/Google Ads เท่านั้น ใช่หรือไม่", { x: 0.75, y: 6.35, w: 11.8, h: 0.35, fontFace: FONT, fontSize: 12.5, bold: true, italic: true, color: NAVY });

// ============ 4 Test window ============
const s4 = newSlide("Timeline", "3", "ช่วงเวลาทดสอบแต่ละ Lot");
table(s4, [
  [hcell("Lot"), hcell("ช่วงที่ QA ถูกจองใน Sheet"), hcell("Go Live"), hcell("ช่องว่างก่อนขึ้นระบบ")],
  [lotCell(1), cell("ก.ค. w5 – ก.ย. w4 2026"), cell("19 ต.ค. 2026", true), cell("~3 สัปดาห์สำหรับ UAT — สมเหตุสมผล", false, GREEN)],
  [lotCell(2), cell("ส.ค. w4 – ต.ค. w5 2026"), cell("1 ธ.ค. 2026", true), cell("~4 สัปดาห์สำหรับ UAT — สมเหตุสมผล", false, GREEN)],
  [lotCell(3), cell("ก.ย. w4 – ธ.ค. w5 2026"), cell("6 พ.ค. 2027", true), cell("ทิ้งช่วง ~4 เดือน — ผิดปกติ", true, RED)],
], 1.55, [1.0, 4.3, 2.2, 4.3], { rowH: 0.6 });

callout(s4, "🔴 Lot 3 test window ไม่สมเหตุสมผล — ช่อง week ของ QA อยู่ ก.ย.–ธ.ค. 2026 ทั้งหมด แต่ Go Live คือ พ.ค. 2027\nหลักฐานว่าเป็นข้อมูลค้าง: ช่องแยกปีของ Sheet เองบอกว่า Lot 3 มี 29.25 MD อยู่ปี 2027 แต่ช่อง week กลับไม่มีอะไรอยู่ปี 2027 เลย (สองค่ารวมได้ 34.5 เท่ากัน)\nน่าจะเกิดจากตอนทำเวอร์ชัน _New22.06.69 มีการเลื่อน week cells มาซ้ายแล้วไม่ได้อัปเดตช่องแยกปี → ต้อง confirm กับ PM ก่อนจองคน", 3.75, "red", 1.35);
callout(s4, "⚠️ Lot 1: ป้าย UAT ค้าง — Sheet เขียน End of UAT 30/10/2569 แต่ Go Live 19/10/2569 (UAT จบหลังขึ้นระบบ 11 วัน)\nยืนยันแล้วว่า Go Live 19 ต.ค. ถูก ป้าย UAT ค้างจากเวอร์ชันก่อน → UAT Lot 1 ต้องจบก่อน 19 ต.ค. 2026 (ช่วงเทสต์สั้นลงจริง 11 วัน)", 5.3, "amber", 1.0);

// ============ 5 Resource risk ============
const s5 = newSlide("ความเสี่ยง", "4", "คนเดียวรับ 77% ของงาน QA ทั้งโปรเจกต์", RED);
table(s5, [
  [hcell("บทบาท"), hcell("ชื่อ"), hcell("Lot 1"), hcell("Lot 2"), hcell("Lot 3"), hcell("รวม"), hcell("%")],
  [cell("QA Lead MCMP"), cell("อนุชา พิมสร้อย", true), cell("Lead"), cell("Lead"), cell("Lead"), cell("0", true, RED), cell("—")],
  [cell("QA MCMP 1"), cell("ชุติมา สมพันธ์แพ", true), cell("23.0"), cell("18.25"), cell("34.5"), cell("75.75", true, RED), cell("77%", true, RED)],
  [cell("QA Data Platform / LC Connect"), cell("เนตรชนก สักกามาตร"), cell("4.0"), cell("6.0"), cell("—"), cell("10.0"), cell("10%")],
  [cell("QA Line OA"), cell("ธัญทิพย์ หนักทอง"), cell("—"), cell("—"), cell("5.0"), cell("5.0"), cell("5%")],
  [cell("QA CIS"), cell("เอกภพ อึ้งพยัคฆ์เดช"), cell("—"), cell("—"), cell("4.0"), cell("4.0"), cell("4%")],
  [cell("QA Corporate Web"), cell("กันต์กมล คล้ายสุวรรณ"), cell("—"), cell("3.25"), cell("—"), cell("3.25"), cell("3%")],
  [cell("รวม", true), cell(""), cell("27.0", true), cell("27.5", true), cell("43.5", true), cell("98.0", true, TEAL), cell("100%")],
], 1.5, [3.1, 2.7, 1.3, 1.3, 1.3, 1.2, 0.9], { rowH: 0.38, fontSize: 11 });

callout(s5, "ปัญหา 3 ชั้นซ้อนกันที่ชุติมา — (1) จองเกินวันที่มีจริง 9 MD ใน 3 สัปดาห์ หนักสุดคือ 30 พ.ย. 2026 ที่มีวันทำงานแค่ 1 วัน แต่จองไว้ 5 MD\n(2) Utilization 96% (75.75 MD / 79 วัน) — ไม่เหลือ buffer ให้ retest หรือ defect เด้งกลับเลย\n(3) Sheet เองเขียนว่า “IFRS17 Closing+Prod Issue 25% อาจจะมีแทรกด่วน” → capacity จริง ≈ 59 วัน แต่ต้องทำ 75.75 MD ขาด ~17 วัน", 4.65, "red", 1.25);
callout(s5, "ทางเลือก: (1) เกลี่ยงาน 9 MD ที่ล้นไปสัปดาห์ที่ว่าง — แก้ได้แค่อาการ · (2) เพิ่มคนช่วย Lot 3 (34.5 MD, มีเวลาเตรียมถึง พ.ค. 2027) · (3) ให้ QA Lead ลงมือ แต่ต้องขอ MD เพิ่ม", 6.05, "blue", 0.7);

// ============ 6 Gap ต่อ Lot ============
const s6 = newSlide("Gap", "5", "Gap ที่ยังไม่มีใน WBS — ตกอยู่ Lot ไหน", RED);
table(s6, [
  [hcell("Lot"), hcell("Gap High ที่ยังไม่มี task ใน WBS"), hcell("Go Live"), hcell("ความเร่งด่วน")],
  [lotCell(1), cell("① Do-not-contact list\n② Exclude Consent = No (PDPA)", true, RED), cell("19 ต.ค. 2026", true), cell("🚨 สูงสุด — Compliance/PDPA + ขึ้นเร็วที่สุด", true, RED)],
  [lotCell(2), cell("④ Manual Assign Lead\n⑤ ระงับ LC x วัน (5/10/15/20/ถาวร)"), cell("1 ธ.ค. 2026", true), cell("กลาง — มี TC รอแล้ว (TS-15, TS-17)")],
  [lotCell(3), cell("③ Maker/Checker อนุมัติส่ง Campaign\n+ Medium อีก 4 ข้อ (Open tracking, Monthly report, Message object, Preview)"), cell("6 พ.ค. 2027", true), cell("ต่ำ — มีเวลาแก้ ~10 เดือน")],
], 1.5, [1.0, 5.6, 1.8, 3.4], { rowH: 0.95, fontSize: 11.5 });

callout(s6, "🚨 ทำไม Lot 1 ถึงเร่งที่สุด — Lot 1 มี Sync Audience ไป Facebook/Google Ads (1.2.8) อยู่ในขอบเขต\nถ้ายังไม่มี logic exclude Do-not-contact / Consent=No แปลว่าข้อมูลลูกค้าที่ไม่ยินยอมอาจถูกส่งออกนอกองค์กรตั้งแต่ Lot แรก\nTest case มีรออยู่แล้ว (TC-04-07 Exclude Consent, TC-04-08 Exclude Do-not-contact) แต่ยังไม่มี task ใน WBS ให้ Dev ทำ", 4.85, "red", 1.15);
callout(s6, "ถ้า gap เหล่านี้ถูกเพิ่มเข้า scope ต้องขอ QA เพิ่มประมาณ 5–8 MD ซึ่งยังไม่อยู่ใน 98 MD", 6.15, "amber", 0.6);

// ============ 7 สิ่งที่ต้องคุยกับ PM ============
const s7 = newSlide("Action", "6", "สิ่งที่ต้อง confirm กับ PM", AMBER);
table(s7, [
  [hcell("#"), hcell("ประเด็น"), hcell("ทำไมถึงสำคัญ")],
  [cell("1", true), cell("Do-not-contact + Consent ต้องอยู่ Lot 1", true, RED), cell("Compliance/PDPA — Lot 1 sync ข้อมูลออก FB/Google Ads แต่ยังไม่มี task exclude ใน WBS")],
  [cell("2", true), cell("ชุติมารับ 77% + จองเกิน 9 MD + IFRS17 กิน 25%", true, RED), cell("ขาด capacity จริง ~17 วัน — ต้องเกลี่ยงาน เพิ่มคน หรือเลื่อน")],
  [cell("3", true), cell("Lot 3 test window ทิ้งช่วง 4 เดือน", true), cell("ถ้าเป็นข้อมูลค้าง ต้องแก้ให้ตรง เพราะกระทบการจองคนทั้งแผน")],
  [cell("4", true), cell("Lot 2: 83 TC แต่ได้แค่ 27.5 MD", true), cell("น้อยสุดต่อ TC (~2.6 ชม./TC เทียบกับ Lot 1 ที่ได้ ~8 ชม.) — ขอดูฐานการประมาณ")],
  [cell("5", true), cell("QA Lead ไม่มี MD ใน Sheet"), cell("งาน test design / review / defect triage ไม่มี budget รองรับ")],
  [cell("6", true), cell("Dev ตัด 88 MD แต่ QA ลดแค่ 2 MD"), cell("scope ที่หายไปจาก Dev คืออะไร ทำไม QA ไม่ลดตาม")],
  [cell("7", true), cell("GrowthAi เป็น COTS หรือ custom build"), cell("ต่างกัน 4 MD vs 6–8 MD และกองที่ Lot 3 ซึ่งหนักอยู่แล้ว")],
], 1.5, [0.6, 4.4, 6.8], { rowH: 0.6, fontSize: 11.5 });

callout(s7, "เอกสารฉบับเต็ม: MCMP_QA_Task_Assignment.md (แผน QA 3 Lot) · MCMP_BRD_vs_WBS_Crosscheck.md (gap ต่อ Lot) · export/MCMP_Test_Artifacts.xlsx (180 TC พร้อมคอลัมน์ Lot)", 6.15, "teal", 0.6);

pptx.writeFile({ fileName: "MCMP_Production_3Lots.pptx" })
  .then(f => console.log("PPTX written:", f, "| slides:", pptx.slides.length));
