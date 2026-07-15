/**
 * qa-shared/execution-report.js — CENTRAL TEMPLATE (design system) สำหรับ QA Test Execution Report
 * ───────────────────────────────────────────────────────────────────────────────
 * ใช้ได้กับ **ทุก spec-kit feature** (ไม่ผูกกับ feature ใด feature หนึ่ง)
 *
 * รายงาน HTML self-contained: ราย TC แสดง REQ/Priority → Steps → Expected → Actual →
 * สถานะ → Test Data (จาก qa/06) → **ฝังภาพหลักฐาน base64 หลายภาพต่อ TC (gallery)**
 *
 * วิธีใช้ (ต่อ feature สร้าง generator สั้น ๆ แล้วเรียก buildExecutionReport):
 *   const { buildExecutionReport } = require('<path>/qa-shared/execution-report');
 *   buildExecutionReport({
 *     feature: 'ชื่อ feature',
 *     subtitle: 'meta การรัน (env/user/วันที่)',
 *     verdict: { decision: 'NO-GO', text: 'สรุป verdict สั้น ๆ' },   // optional
 *     tcs: [ { id, flow, req, pri, title, steps, expected, actual, status, reason, flaky, note } ],
 *     smoke: { id, title, note },                                      // optional
 *     evidenceDir: '<abs path>/evidence',
 *     datasetsPath: '<abs path>/qa/06-test-data.json',                 // optional
 *     outPath: '<abs path>/qa/test-execution-report.html',
 *   });
 *
 * status: 'PASS' | 'FINDING' | 'NOT_EXECUTED'
 * ───────────────────────────────────────────────────────────────────────────────
 * 📸 หลักการภาพหลักฐาน (สำคัญ):
 *   1) แคป "ณ จังหวะ assertion (ก่อน cleanup)" + กรอบแดงรอบ element ผล + caption banner
 *   2) **1 TC มีได้หลายภาพ** เพื่อเล่าเรื่องครบ input→result ให้ตรงกับ Expected เช่น
 *      Create = (1) ฟอร์มที่กรอกข้อมูล (2) success toast (3) แถวผลลัพธ์ในตาราง
 *   3) template นี้ render **ทุกภาพ** ที่ชื่อขึ้นต้นด้วย <TC-ID>_ เรียงตามลำดับแคป (seq/timestamp)
 *   4) caption ต่อภาพอ่านจาก `evidence/captions.json` (map: filename → caption) ถ้ามี
 *      ไม่มี captions.json → ใช้ชื่อไฟล์เป็น caption (backward-compatible)
 *   ดู helper `snap()`/`shot()` ใน playwright/content-maintenance/content-maintenance.spec.js
 */
const fs = require('fs');
const path = require('path');

const PASS = 'PASS', FINDING = 'FINDING', NX = 'NOT_EXECUTED';
const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// ดึง timestamp เป็นตัวเลขล้วน — รองรับทั้ง YYYYMMDD-HHmmss และ YYYYMMDDHHMMSS (ไม่มี hyphen)
function _ts(f) {
  const m = f.match(/(\d{8})-?(\d{6})/);
  return m ? m[1] + m[2] : '';
}
function _dateOf(f) { return _ts(f).slice(0, 8); } // YYYYMMDD ของ run

// sort key: timestamp แล้วตามด้วย seq (NN) → เรียงตามลำดับแคปจริง
function _sortKey(f) {
  const seq = (f.match(/_(\d{2})_\d{8}-?\d{6}/) || ['', '00'])[1];
  return _ts(f) + '_' + seq;
}

// รวบ **ทุกภาพ** ของ TC (ไม่ใช่ภาพเดียว) เรียงตามลำดับแคป + แนบ caption จาก manifest
//  - evidence/ สะสมข้ามรอบ (ไม่เคยล้าง) → เก็บเฉพาะ **run วันล่าสุด** ก่อน (ตัดภาพรอบเก่าที่ถูก supersede)
//    ภายใน run เดียว (วันเดียว) เก็บครบทุกภาพ = multi-image gallery input→result
//  - แล้วถ้ามีภาพ PASS/FINDING → ตัดภาพ FAIL (leftover จาก retry ในวันเดียวกัน) ทิ้ง; ไม่มีเลยค่อยใช้ FAIL (หลักฐาน fail จริง)
function imgsForTC(files, dir, id, captions) {
  let matches = files.filter(x => x.startsWith(id + '_'));
  if (!matches.length) return [];
  // 1) เหลือเฉพาะ run ล่าสุด (วันที่ล่าสุด) — กันภาพข้ามรอบปนกัน
  const dated = matches.filter(x => _dateOf(x));
  if (dated.length) {
    const maxDate = dated.reduce((mx, x) => (_dateOf(x) > mx ? _dateOf(x) : mx), '');
    matches = matches.filter(x => _dateOf(x) === maxDate);
  }
  // 2) ภายใน run ล่าสุด: PASS/FINDING ชนะ FAIL (retry leftover)
  const good = matches.filter(x => x.includes('_PASS_') || x.includes('_FINDING_'));
  if (good.length) matches = good;
  matches.sort((a, b) => _sortKey(a).localeCompare(_sortKey(b)));
  return matches.map(f => ({
    name: f,
    cap: captions[f] || '',
    uri: 'data:image/png;base64,' + fs.readFileSync(path.join(dir, f)).toString('base64'),
  }));
}

const THEME_CSS = `
:root{--pass:#1a7f37;--find:#b35900;--nx:#6c757d;--navy:#1f3a5f;--bg:#f6f8fa;--card:#fff;--line:#e1e4e8;}
*{box-sizing:border-box}
body{font-family:"Segoe UI","Sarabun",Tahoma,sans-serif;margin:0;background:var(--bg);color:#222;line-height:1.55}
header{background:linear-gradient(135deg,#1f3a5f,#2d5a8f);color:#fff;padding:28px 32px}
header h1{margin:0 0 6px;font-size:22px}
header .sub{opacity:.9;font-size:13px}
.wrap{max-width:1080px;margin:0 auto;padding:24px 20px 64px}
.cards{display:flex;gap:12px;flex-wrap:wrap;margin:-24px 0 24px;position:relative;z-index:2}
.card{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:14px 18px;flex:1;min-width:120px;box-shadow:0 1px 3px rgba(0,0,0,.06)}
.card .n{font-size:26px;font-weight:700}
.card .l{font-size:12px;color:#666}
.card.pass .n{color:var(--pass)} .card.find .n{color:var(--find)} .card.nx .n{color:var(--nx)}
.verdict{background:#fff3cd;border:1px solid #ffe08a;border-radius:10px;padding:14px 18px;margin-bottom:8px;font-size:14px}
.verdict b{color:#b35900}
.note{font-size:12.5px;color:#555;background:#eef3f8;border-left:3px solid #2d5a8f;padding:10px 14px;border-radius:0 8px 8px 0;margin:14px 0 28px}
.flow{margin-bottom:34px}
.flow>h2{font-size:16px;border-bottom:2px solid var(--navy);padding-bottom:6px;color:var(--navy);display:flex;justify-content:space-between;align-items:baseline}
.flow-stat{font-size:11.5px;font-weight:400;color:#777}
.tc{background:var(--card);border:1px solid var(--line);border-left:4px solid var(--nx);border-radius:8px;padding:14px 16px;margin:14px 0}
.tc.PASS{border-left-color:var(--pass)} .tc.FINDING{border-left-color:var(--find)} .tc.NOT_EXECUTED{border-left-color:var(--nx);opacity:.92}
.tc-h{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px}
.tc-id{font-weight:700;font-family:monospace;font-size:14px}
.tc-title{font-size:14px}
.b{font-size:11px;font-weight:700;padding:2px 9px;border-radius:20px;color:#fff}
.b-pass{background:var(--pass)} .b-find{background:var(--find)} .b-nx{background:var(--nx)}
.tag-flaky{font-size:10.5px;color:#8a6d00;background:#fff3cd;border:1px solid #ffe08a;padding:1px 7px;border-radius:20px}
.tc-t{width:100%;border-collapse:collapse;font-size:13px}
.tc-t td{padding:5px 8px;vertical-align:top;border-top:1px solid #f0f0f0}
.tc-t .k{width:130px;color:#666;font-weight:600;white-space:nowrap}
.pri{color:#888;font-size:12px}
.reason{color:#7a4a00;background:#fff8ee}
.act-find{color:#b35900;font-weight:600}
.evid{margin-top:14px}
.evid-cap{font-size:12px;font-weight:600;color:#444;margin-bottom:8px}
.gallery{display:flex;flex-direction:column;gap:16px}
.shot{margin:0;border:1px solid var(--line);border-radius:8px;overflow:hidden;background:#fbfcfd}
.shot .idx{display:inline-block;font-size:11px;font-weight:700;color:#fff;background:var(--navy);border-radius:0 0 8px 0;padding:2px 10px}
.shot img{max-width:100%;display:block}
.shot figcaption{font-size:12px;color:#33506e;padding:8px 12px;border-top:1px solid var(--line);background:#f4f8fc}
.noimg{margin-top:10px;font-size:12.5px;color:#888;background:#fafafa;border:1px dashed #ddd;border-radius:6px;padding:10px 12px}
.noimg code{background:#eee;padding:1px 5px;border-radius:4px}
.td{margin-top:12px;border:1px solid #d6e4f0;border-radius:8px;background:#f4f9ff;padding:10px 12px}
.td-h{font-size:12.5px;font-weight:700;color:#1f3a5f;margin-bottom:8px}
.td-item{border-top:1px solid #dde9f5;padding:8px 0}
.td-item:first-of-type{border-top:none;padding-top:0}
.td-meta{font-size:12px;color:#33506e}
.td-pri{background:#1f3a5f;color:#fff;padding:0 6px;border-radius:10px;font-size:10.5px}
.td-risk{color:#b35900}
.td-desc{font-size:12.5px;margin:3px 0}
.td-data{background:#0f1f33;color:#cfe3ff;font-size:11.5px;border-radius:6px;padding:8px 10px;overflow-x:auto;white-space:pre;margin:6px 0;line-height:1.4}
.td-row{font-size:12px;margin:2px 0}
.td-k{font-weight:600;color:#555}
.ad{margin-top:10px;border:1px solid #cfe0cf;border-radius:8px;background:#f2faf2;padding:10px 12px}
.ad-h{font-size:12.5px;font-weight:700;color:#1a7f37;margin-bottom:6px}
.ad-row{display:flex;gap:10px;font-size:12.5px;padding:3px 0;border-top:1px solid #e0efe0}
.ad-row:first-of-type{border-top:none}
.ad-k{flex:0 0 200px;color:#33506e;font-weight:600}
.ad-v{flex:1;font-family:"Segoe UI","Sarabun",monospace;color:#123;word-break:break-word}
footer{text-align:center;font-size:12px;color:#888;padding:24px;border-top:1px solid var(--line)}
a{color:#2d5a8f}`;

// render gallery ของภาพหลายรูปต่อ TC (input→result) — caption ต่อรูปจาก manifest
function galleryBlock(imgs, id) {
  if (!imgs || !imgs.length) return '';
  const figs = imgs.map((im, i) => `
      <figure class="shot">
        <span class="idx">ภาพ ${i + 1}/${imgs.length}</span>
        <a href="${im.uri}" target="_blank"><img loading="lazy" src="${im.uri}" alt="${esc(id)}-${i + 1}"></a>
        <figcaption>${im.cap ? esc(im.cap) : esc(im.name)}</figcaption>
      </figure>`).join('');
  return `<div class="evid"><div class="evid-cap">📸 หลักฐาน (${imgs.length} ภาพ) — เล่าเรื่อง input → result ให้ตรงกับ Expected:</div><div class="gallery">${figs}</div></div>`;
}

function buildExecutionReport(cfg) {
  const {
    feature = 'QA Test Execution Report', subtitle = '', verdict = null,
    tcs = [], smoke = null, evidenceDir, datasetsPath, outPath,
  } = cfg;
  if (!outPath) throw new Error('buildExecutionReport: ต้องระบุ outPath');

  // ── test data (qa/06-test-data.json) → map related_tc → [datasets] ──
  const TD_BY_TC = {}; let TD_TOTAL = 0;
  if (datasetsPath && fs.existsSync(datasetsPath)) {
    try {
      const j = JSON.parse(fs.readFileSync(datasetsPath, 'utf8'));
      (j.datasets || []).forEach(d => {
        TD_TOTAL++;
        (String(d.related_tc || '').match(/TC-[\w.]+/g) || []).forEach(id => { (TD_BY_TC[id] = TD_BY_TC[id] || []).push(d); });
      });
    } catch (e) { console.log('⚠️ อ่าน datasets ไม่ได้:', e.message); }
  }

  // ── evidence images + captions manifest ──
  const files = (evidenceDir && fs.existsSync(evidenceDir)) ? fs.readdirSync(evidenceDir).filter(f => f.endsWith('.png')) : [];
  let captions = {}, actualData = {};
  if (evidenceDir) {
    const capPath = path.join(evidenceDir, 'captions.json');
    if (fs.existsSync(capPath)) { try { captions = JSON.parse(fs.readFileSync(capPath, 'utf8')); } catch (e) { console.log('⚠️ อ่าน captions.json ไม่ได้:', e.message); } }
    // ข้อมูลที่กรอกจริง (runtime) ต่อ TC — ให้ report ตรงกับภาพ (spec สุ่ม name/วันที่ จึงไม่ตรง qa/06 designed)
    const actPath = path.join(evidenceDir, 'actual-data.json');
    if (fs.existsSync(actPath)) { try { actualData = JSON.parse(fs.readFileSync(actPath, 'utf8')); } catch (e) { console.log('⚠️ อ่าน actual-data.json ไม่ได้:', e.message); } }
  }
  tcs.forEach(t => { t.imgs = (t.status === PASS || t.status === FINDING) ? imgsForTC(files, evidenceDir, t.id, captions) : []; });
  const smokeImgs = smoke ? imgsForTC(files, evidenceDir, smoke.id, captions) : [];

  const nPass = tcs.filter(t => t.status === PASS).length;
  const nFind = tcs.filter(t => t.status === FINDING).length;
  const nNX = tcs.filter(t => t.status === NX).length;
  const nFlaky = tcs.filter(t => t.flaky).length;
  const total = tcs.length;
  const nImg = tcs.reduce((s, t) => s + (t.imgs ? t.imgs.length : 0), 0) + smokeImgs.length;
  const nTcWithImg = tcs.filter(t => t.imgs && t.imgs.length).length + (smokeImgs.length ? 1 : 0);

  const badge = s => s === PASS ? '<span class="b b-pass">PASS</span>'
    : s === FINDING ? '<span class="b b-find">FINDING</span>'
    : '<span class="b b-nx">NOT EXECUTED</span>';

  const tdBlock = id => {
    const list = TD_BY_TC[id]; if (!list || !list.length) return '';
    const items = list.map(d => `
      <div class="td-item">
        <div class="td-meta"><b>${esc(d.td_id)}</b>${d.category ? ` · ${esc(d.category)}` : ''}${d.priority ? ` · <span class="td-pri">${esc(d.priority)}</span>` : ''}${d.risk ? ` · <span class="td-risk">${esc(d.risk)}</span>` : ''}</div>
        ${d.description ? `<div class="td-desc">${esc(d.description)}</div>` : ''}
        ${d.data ? `<pre class="td-data">${esc(JSON.stringify(d.data, null, 2))}</pre>` : ''}
        ${d.expected ? `<div class="td-row"><span class="td-k">Expected:</span> ${esc(d.expected)}</div>` : ''}
        ${d.setup ? `<div class="td-row"><span class="td-k">Setup:</span> ${esc(d.setup)}</div>` : ''}
        ${d.notes ? `<div class="td-row"><span class="td-k">Notes:</span> ${esc(d.notes)}</div>` : ''}
      </div>`).join('');
    return `<div class="td"><div class="td-h">🧪 Test Data (แผน/designed — qa/06, ${list.length})</div>${items}</div>`;
  };

  // ข้อมูลที่กรอกจริง (runtime) — ตรงกับภาพหลักฐาน (spec สุ่ม name/วันที่ จึงต่างจาก designed ข้างบน)
  const actualBlock = id => {
    const d = actualData[id]; if (!d || !Object.keys(d).length) return '';
    const rows = Object.entries(d).map(([k, v]) => `<div class="ad-row"><span class="ad-k">${esc(k)}</span><span class="ad-v">${esc(v)}</span></div>`).join('');
    return `<div class="ad"><div class="ad-h">🖊️ ข้อมูลที่กรอกจริง (Actual input — ตรงกับภาพหลักฐานด้านล่าง)</div>${rows}</div>`;
  };

  const tcCard = t => {
    const flakyTag = t.flaky ? ' <span class="tag-flaky">flaky→ผ่าน retry</span>' : '';
    const actual = t.status === PASS ? 'ตรงกับ Expected — ผ่าน (ดูภาพหลักฐานด้านล่าง)'
      : t.status === FINDING ? esc(t.actual)
      : '— (ไม่ได้ execute)';
    const reasonRow = t.reason ? `<tr><td class="k">เหตุผล/หมายเหตุ</td><td class="reason">${esc(t.reason)}</td></tr>` : '';
    const imgBlock = (t.imgs && t.imgs.length)
      ? galleryBlock(t.imgs, t.id)
      : `<div class="noimg">${t.note ? '⚠️ ' + esc(t.note) : 'ไม่มีภาพ — TC ยังไม่ได้รันบน browser'}</div>`;
    return `
    <div class="tc ${t.status}" id="${t.id}">
      <div class="tc-h"><span class="tc-id">${esc(t.id)}</span> ${badge(t.status)}${flakyTag} <span class="tc-title">${esc(t.title)}</span></div>
      <table class="tc-t">
        <tr><td class="k">REQ</td><td>${esc(t.req)} · <span class="pri">Priority: ${esc(t.pri)}</span></td></tr>
        <tr><td class="k">Steps</td><td>${esc(t.steps)}</td></tr>
        <tr><td class="k">Expected Result</td><td>${esc(t.expected)}</td></tr>
        <tr><td class="k">Actual Result</td><td class="${t.status === FINDING ? 'act-find' : ''}">${actual}</td></tr>
        ${reasonRow}
      </table>
      ${tdBlock(t.id)}
      ${actualBlock(t.id)}
      ${imgBlock}
    </div>`;
  };

  const flows = []; tcs.forEach(t => { if (!flows.includes(t.flow)) flows.push(t.flow); });
  const sections = flows.map(f => {
    const items = tcs.filter(t => t.flow === f);
    const p = items.filter(t => t.status === PASS).length, fd = items.filter(t => t.status === FINDING).length, nx = items.filter(t => t.status === NX).length;
    return `<section class="flow"><h2>${esc(f)} <span class="flow-stat">${p} PASS · ${fd} FINDING · ${nx} NOT EXEC</span></h2>${items.map(tcCard).join('')}</section>`;
  }).join('');
  const smokeSection = smoke ? `<section class="flow"><h2>Smoke Test <span class="flow-stat">นอก logical TC</span></h2>
    <div class="tc PASS"><div class="tc-h"><span class="tc-id">${esc(smoke.id)}</span> <span class="b b-pass">PASS</span> <span class="tc-title">${esc(smoke.title)}</span></div>
    ${smoke.note ? `<table class="tc-t"><tr><td class="k">หมายเหตุ</td><td>${esc(smoke.note)}</td></tr></table>` : ''}
    ${galleryBlock(smokeImgs, smoke.id)}
    </div></section>` : '';

  const verdictBlock = verdict
    ? `<div class="verdict"><b>Release Verdict: ${esc(verdict.decision)}</b> — ${esc(verdict.text)}</div>` : '';

  const html = `<!DOCTYPE html>
<html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Test Execution Report — ${esc(feature)}</title>
<style>${THEME_CSS}</style></head>
<body>
<header><h1>Test Execution Report — Detailed</h1><div class="sub">${esc(subtitle)}</div></header>
<div class="wrap">
  <div class="cards">
    <div class="card"><div class="n">${total}</div><div class="l">Total TC</div></div>
    <div class="card pass"><div class="n">${nPass}</div><div class="l">PASS</div></div>
    <div class="card find"><div class="n">${nFind}</div><div class="l">FINDING</div></div>
    <div class="card nx"><div class="n">${nNX}</div><div class="l">NOT EXECUTED</div></div>
    <div class="card"><div class="n">${nFlaky}</div><div class="l">Flaky→ผ่าน retry</div></div>
    <div class="card"><div class="n">${nImg}</div><div class="l">ภาพหลักฐาน (${nTcWithImg} TC)</div></div>
    ${TD_TOTAL ? `<div class="card"><div class="n">${TD_TOTAL}</div><div class="l">Test Data sets</div></div>` : ''}
  </div>
  ${verdictBlock}
  <div class="note">
    <b>วิธีอ่าน:</b> แต่ละ TC แสดง <b>Steps → Expected → Actual → ${TD_TOTAL ? 'Test Data → ' : ''}สถานะ</b> + ฝังภาพหลักฐาน annotated (กรอบแดงรอบ element ผล + caption).
    <b>1 TC มีได้หลายภาพ</b> เพื่อเล่าเรื่องครบ input → result ให้ตรงกับ Expected (เช่น Create = ฟอร์มที่กรอก → success toast → แถวผลลัพธ์).
    รวม <b>${nImg} ภาพ</b> ใน ${nTcWithImg} TC.
    <b>Test Data 2 ส่วน:</b> 🧪 <b>แผน/designed (qa/06)</b> = ค่าที่ออกแบบไว้ · 🖊️ <b>ข้อมูลที่กรอกจริง (runtime)</b> = <b>ตรงกับภาพ</b> (spec สุ่ม name/วันที่ต่อรันเพื่อกันชนใน SIT จึงต่างจาก designed โดยตั้งใจ).
    <b>NOT EXECUTED ${nNX} TC</b> = blocked-RQ / integration / assumption (รันบน E2E browser ไม่ได้) — ระบุเหตุผลรายตัว.
  </div>
  ${sections}
  ${smokeSection}
</div>
<footer>Generated by qa-shared/execution-report.js (central template) · ${esc(feature)} · synthesize only — ไม่แต่งผล</footer>
</body></html>`;

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html, 'utf8');
  const stats = { total, nPass, nFind, nNX, nFlaky, nImg, nTcWithImg, TD_TOTAL };
  console.log(`✅ wrote ${outPath}`);
  console.log(`   TC ${total} | PASS ${nPass} | FINDING ${nFind} | NOT_EXEC ${nNX} | flaky ${nFlaky} | images ${nImg} (${nTcWithImg} TC) | TD ${TD_TOTAL}`);
  return { outPath, stats };
}

module.exports = { buildExecutionReport, THEME_CSS, esc, imgsForTC, PASS, FINDING, NX };
