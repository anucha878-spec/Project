// qa-shared/evidence.js
// -----------------------------------------------------------------------------
// Reusable ANNOTATED-EVIDENCE engine for QA Spec-Kit Playwright specs.
//
// ทำไมต้องมีไฟล์นี้: qa-shared/execution-report.js (ตัว render รายงาน) ต้องการภาพ
// หลักฐานใน evidence/ + captions.json + actual-data.json แต่ "ตัวแคปภาพจริง"
// (snap/snapOk/snapError + hooks) เดิมฝังอยู่ใน spec ตัวอย่างเครื่อง maintainer
// เท่านั้น → เครื่องอื่นไม่มี engine → generate spec ออกมาแล้วไม่มีภาพ → report ว่าง.
// ไฟล์นี้ = engine กลาง ที่ provision copy ไปทุกโปรเจกต์ (คู่กับ execution-report.js).
//
// วิธีใช้ (ใน playwright/<feature>/<feature>.spec.js):
//   const { test, expect } = require('@playwright/test');
//   const path = require('path');
//   const ev = require('../../qa-shared/evidence').create({
//     test, expect,
//     dir: path.join(__dirname, 'evidence'),
//     // credGate: () => !process.env.NBS_USER,   // (optional) test.skip เมื่อ env ไม่พร้อม
//   });
//
//   test('TC-001 เปิดหน้า → header ครบ', async ({ page }) => {
//     await page.goto(BASE_URL);
//     await expect(page.locator('.header')).toBeVisible();
//     await ev.snapOk(page, 'TC-001 เปิดหน้า → header 7 คอลัมน์ครบ', '.header');  // แคป ณ จังหวะ assertion
//   });
//
//   test('TC-018 ค่าว่าง → error', async ({ page }) => {
//     await save(page);
//     await ev.snapError(page, '#form-error', 'กรุณากรอก', 'TC-018 ปฏิเสธค่าว่าง'); // assert + แคป
//   });
//
//   // ถ้าอยาก record ค่าจริงที่กรอก (runtime) ให้ report โชว์ตรงกับภาพ:
//   ev.recField('ชื่อรางวัล', name);
//
// Contract กับ execution-report.js (ห้ามเปลี่ยนรูปแบบไฟล์):
//   evidence/<TC-ID>_<PASS|FINDING|FAIL>_<NN>_<YYYYMMDD-HHmmss>.png   ← snap()
//   evidence/<TC-ID>_<PASS|FAIL>_<YYYYMMDD-HHmmss>.png                ← afterEach fallback
//   evidence/captions.json     { "<filename>.png": "<caption>" }
//   evidence/actual-data.json  { "<TC-ID>": { "<label>": "<value>" } }
//
// หมายเหตุ design: รับ test/expect แบบ inject (ไม่ require '@playwright/test' เอง)
// เพราะไฟล์นี้อยู่ที่ <project>/qa-shared/ แต่ node_modules อยู่ใต้ playwright/ →
// require ข้าม tree จะ resolve ไม่เจอ. spec เป็นคนมี test/expect อยู่แล้ว ส่งเข้ามา.
// -----------------------------------------------------------------------------

const fs = require('fs');
const path = require('path');

function _stamp(d) {
  const p = (x) => String(x).padStart(2, '0');
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
}

/**
 * สร้าง evidence recorder + ติดตั้ง beforeEach/afterEach hooks บน `test` ที่ส่งเข้ามา.
 * @param {object} opts
 * @param {import('@playwright/test').TestType} opts.test   - test object จาก @playwright/test (บังคับ)
 * @param {Function} [opts.expect]      - expect จาก @playwright/test (ต้องมีถ้าจะใช้ snapError)
 * @param {string}   [opts.dir]         - โฟลเดอร์ evidence (default <cwd>/evidence) — ควรส่ง path.join(__dirname,'evidence')
 * @param {RegExp}   [opts.tcPattern]   - regex ดึง TC-ID จาก test title (default /TC-[\w.]+/)
 * @param {Function} [opts.credGate]    - () => boolean : true = test.skip (env ไม่พร้อม)
 * @param {string}   [opts.credReason]  - ข้อความ skip
 * @param {boolean}  [opts.autoAfterEach] - true(default): module ติดตั้ง afterEach fallback capture เอง.
 *                                          ตั้ง false ถ้า spec มี cleanup ที่ navigate ทิ้งหน้า →
 *                                          ให้ spec เรียก `await ev.finalize(page, testInfo)` ที่ต้น afterEach ของตัวเองก่อน cleanup.
 * @returns {object} recorder { snap, shot, snapOk, snapError, recField, recNote, finalize, curTc, dir }
 */
function create(opts) {
  const o = opts || {};
  const test = o.test;
  const expect = o.expect;
  if (!test || typeof test.beforeEach !== 'function') {
    throw new Error("evidence.create: ต้องส่ง { test } ที่ import จาก '@playwright/test'");
  }
  const EVIDENCE_DIR = o.dir || path.join(process.cwd(), 'evidence');
  const tcPattern = o.tcPattern || /TC-[\w.]+/;
  const autoAfterEach = o.autoAfterEach !== false;

  const CAP_MANIFEST = path.join(EVIDENCE_DIR, 'captions.json');
  const ACTUAL_MANIFEST = path.join(EVIDENCE_DIR, 'actual-data.json');

  let _curTc = 'TC';            // set ใน beforeEach จาก test title
  const _snapped = new Set();   // tcId ที่แคปด้วย snap แล้ว → afterEach ข้าม (กันภาพ post-cleanup ทับ)
  const _seq = {};              // tcId → seq counter (reset ต่อ attempt ใน beforeEach)
  const _actual = {};           // tcId → { label: value }

  function _writeCaption(file, caption) {
    try {
      let m = {};
      try { m = JSON.parse(fs.readFileSync(CAP_MANIFEST, 'utf8')); } catch {}
      m[file] = caption;
      fs.writeFileSync(CAP_MANIFEST, JSON.stringify(m, null, 2));
    } catch (e) { console.log(`📝 caption manifest เขียนไม่ได้: ${e.message}`); }
  }

  function _flushActual() {
    // merge กับไฟล์บนดิสก์ (แต่ละ batch = process แยก → ต้องสะสม ไม่ overwrite ทับ batch ก่อน)
    try {
      fs.mkdirSync(EVIDENCE_DIR, { recursive: true });
      let disk = {};
      try { disk = JSON.parse(fs.readFileSync(ACTUAL_MANIFEST, 'utf8')); } catch {}
      Object.assign(disk, _actual);
      fs.writeFileSync(ACTUAL_MANIFEST, JSON.stringify(disk, null, 2));
    } catch (e) { console.log(`📝 actual-data เขียนไม่ได้: ${e.message}`); }
  }

  function _disp(v) { v = String(v); return v.length > 50 ? v.slice(0, 40) + `… (${v.length} ตัว)` : v; }
  function recField(label, value) { (_actual[_curTc] = _actual[_curTc] || {})[label] = _disp(value); _flushActual(); }
  function recNote(label, note) { (_actual[_curTc] = _actual[_curTc] || {})[label] = note; _flushActual(); }

  function _normSels(h) { return h == null ? [] : Array.isArray(h) ? h : [h]; }

  // ── annotated capture: กรอบแดงรอบ element ผล + caption banner, viewport shot (ไม่ fullPage) ──
  //    1 TC เรียก snap ได้หลายครั้ง → seq _NN_ → เล่าเรื่อง input→result หลายภาพ
  async function snap(page, verdict, caption, highlightSel) {
    const tcId = _curTc;
    try {
      _seq[tcId] = (_seq[tcId] || 0) + 1;
      const n = String(_seq[tcId]).padStart(2, '0');
      await page.evaluate(({ cap, sels }) => {
        document.getElementById('__capBanner')?.remove();
        document.querySelectorAll('.__capBox').forEach(e => e.remove());
        const b = document.createElement('div'); b.id = '__capBanner'; b.textContent = cap;
        b.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:2147483647;background:#1f3a5f;color:#fff;font:bold 13px sans-serif;padding:8px 14px;text-align:center;box-shadow:0 2px 6px rgba(0,0,0,.4)';
        document.body.appendChild(b);
        const findByText = (t) => {           // element เล็กสุดที่ข้อความ (trim) รวม t และ visible
          let best = null, bestLen = 1e9;
          for (const el of document.querySelectorAll('body *')) {
            const txt = (el.innerText || '').trim();
            if (!txt.includes(t)) continue;
            const r = el.getBoundingClientRect();
            if (r.width === 0 || r.height === 0) continue;
            if (txt.length < bestLen) { best = el; bestLen = txt.length; }
          }
          return best;
        };
        // 1) resolve ทุก target ก่อน (ยังไม่วาด) — กัน scroll ระหว่าง loop ทำพิกัดเพี้ยน
        const els = [];
        for (const s of sels) {
          let el = null;
          if (typeof s === 'string') el = document.querySelector(s);
          else if (s && s.text) el = findByText(s.text);
          if (el) { const r0 = el.getBoundingClientRect(); if (r0.width > 0 || r0.height > 0) els.push(el); }
        }
        // 2) scroll "ครั้งเดียว" ให้ target แรกเข้าจอ แล้วค่อยวัด+วาดทั้งหมด
        try { (document.scrollingElement || document.documentElement).scrollTop = 0; } catch {}
        window.scrollTo(0, 0);
        if (els[0]) els[0].scrollIntoView({ block: 'nearest', inline: 'nearest' });
        // 3) วัด rect หลัง scroll เสร็จ แล้ววาดกล่อง fixed จากพิกัด viewport ปัจจุบัน — ห้าม scroll เพิ่มหลังจากนี้
        const vh = window.innerHeight;
        for (const el of els) {
          const r = el.getBoundingClientRect();
          if (r.width === 0 && r.height === 0) continue;
          const top = Math.max(r.top, 34); // ไม่ให้กล่องซ้อนใต้ caption banner (สูง ~30px)
          const bottom = Math.min(r.bottom, vh - 4);
          const boxH = Math.max(bottom - top, 8);
          const o2 = document.createElement('div'); o2.className = '__capBox';
          o2.style.cssText = `position:fixed;left:${r.left - 5}px;top:${top - 5}px;width:${r.width + 10}px;height:${boxH + 10}px;border:3px solid #e53935;border-radius:4px;z-index:2147483646;pointer-events:none;box-shadow:0 0 0 3px rgba(229,57,53,.25)`;
          document.body.appendChild(o2);
        }
      }, { cap: caption, sels: _normSels(highlightSel) });
      await page.waitForTimeout(250);
      fs.mkdirSync(EVIDENCE_DIR, { recursive: true });
      const file = `${tcId}_${verdict}_${n}_${_stamp(new Date())}.png`;
      await page.screenshot({ path: path.join(EVIDENCE_DIR, file), fullPage: false, timeout: 15000 });
      _snapped.add(tcId);
      _writeCaption(file, caption);
      console.log(`📸 snap: ${file}`);
      await page.evaluate(() => { document.getElementById('__capBanner')?.remove(); document.querySelectorAll('.__capBox').forEach(e => e.remove()); });
    } catch (e) { console.log(`📸 snap ${tcId} ไม่ได้: ${e.message}`); }
  }

  // shot(): PASS verdict สั้น ๆ
  async function shot(page, caption, highlightSel, verdict = 'PASS') { return snap(page, verdict, caption, highlightSel); }
  // snapOk(): แคปหลัง assertion สำเร็จ (ไฮไลต์ element ผล เช่น badge/dialog)
  async function snapOk(page, caption, highlightSel) { return snap(page, 'PASS', caption, highlightSel || null); }
  // snapError(): assert element ผล contains text แล้วแคป (negative TC ที่ผ่านเพราะเจอ error ถูกต้อง)
  async function snapError(page, selector, text, caption, verdict = 'PASS') {
    if (!expect) throw new Error('evidence.snapError: ต้องส่ง { expect } ตอน create()');
    await expect(page.locator(selector)).toContainText(text, { timeout: 10000 });
    await snap(page, verdict, caption || `${_curTc} → ${text}`, selector);
  }

  // finalize(): fallback capture (fullPage) เมื่อ TC นี้ยังไม่เคย snap. เรียกเองได้ก่อน cleanup
  // (autoAfterEach:false) หรือปล่อยให้ module เรียกใน afterEach (autoAfterEach:true).
  async function finalize(page, testInfo) {
    if (testInfo && testInfo.status === 'skipped') return;
    const tc = (String((testInfo && testInfo.title) || _curTc).match(tcPattern) || [_curTc])[0].replace(/[^\w.-]/g, '');
    if (_snapped.has(tc)) {
      _snapped.delete(tc); // แคปด้วย snap (annotated ณ จังหวะผล) แล้ว → ไม่แคปทับด้วยภาพ post-cleanup
      console.log(`📸 evidence: ${tc} ใช้ snap ที่แคปไว้แล้ว (ข้าม fallback capture)`);
      return;
    }
    const verdict = testInfo && testInfo.status === 'passed' ? 'PASS' : 'FAIL';
    try {
      fs.mkdirSync(EVIDENCE_DIR, { recursive: true });
      const file = path.join(EVIDENCE_DIR, `${tc}_${verdict}_${_stamp(new Date())}.png`);
      await page.screenshot({ path: file, fullPage: true, timeout: 15000 });
      if (testInfo) await testInfo.attach(`${tc}_${verdict}`, { path: file, contentType: 'image/png' }).catch(() => {});
      console.log(`📸 evidence: ${path.basename(file)}`);
    } catch (e) {
      console.log(`📸 แคป screenshot ไม่ได้ (${tc}/${verdict}) — ${e.message}`);
    }
  }

  // ── ติดตั้ง hooks ──────────────────────────────────────────────────────────
  test.beforeEach(({}, testInfo) => {
    _curTc = (testInfo.title.match(tcPattern) || ['TC'])[0];
    _seq[_curTc] = 0;               // reset seq ต่อ attempt (retry เริ่มนับใหม่)
    delete _actual[_curTc];         // reset actual-data ต่อ attempt
    // ลบภาพ attempt ก่อนของ TC นี้ทิ้ง → retry เก็บชุดใหม่ล้วน (ไม่ปนภาพ attempt เก่า)
    try {
      for (const f of fs.readdirSync(EVIDENCE_DIR))
        if (f.startsWith(_curTc + '_') && f.endsWith('.png')) fs.unlinkSync(path.join(EVIDENCE_DIR, f));
    } catch {}
    if (typeof o.credGate === 'function') {
      test.skip(o.credGate(), o.credReason || 'environment/credential ไม่พร้อม');
    }
  });

  if (autoAfterEach) {
    test.afterEach(async ({ page }, testInfo) => { await finalize(page, testInfo); });
  }

  return {
    snap, shot, snapOk, snapError, recField, recNote, finalize,
    get curTc() { return _curTc; },
    dir: EVIDENCE_DIR,
  };
}

module.exports = { create };
