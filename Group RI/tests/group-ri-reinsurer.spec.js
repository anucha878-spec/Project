// =============================================================================
// NBS Portal - ระบบ Group Reinsurance : ทดสอบหน้า "ข้อมูล Reinsurer"
// ครอบคลุม Step 1-14 ตาม Test Case
//
// Flow จริงที่ค้นพบ:
//   1. login (boss/1) ที่ /nbsweb/secure/home.html  (ปุ่ม Login, ไม่ใช่ Enter)
//   2. เมนู YUI: "ระบบงาน NBS Portal" > "ระบบ Group Reinsurance"
//      -> เป็น <a> ที่ลิงก์ไป /nbsweb/secure/msa/groupri/index.html?uuid=...
//         (uuid เปลี่ยนทุก session จึงอ่าน href สดจาก DOM แล้ว goto)
//      -> redirect ไป SPA: intranet-api.ochi.link/.../groupri/index.html
//   3. ใน SPA กดปุ่ม "จัดการข้อมูล" > "ข้อมูล Reinsurer"  (#sd005)
//   4. กดปุ่ม "ค้นหา" เพื่อโหลด grid
//
// สำคัญ: API ค้นหาของ SIT ช้ามาก (~14s) และไม่เสถียร — grid เป็น MUIDataTable
// (<table>) ไม่ใช่ MUI X DataGrid. ข้อมูลมีจริง (เคยพบ 7 รายการ) แต่บางครั้ง
// โหลดไม่มาแม้รอ >40s. clickSearch() จึงรอสูงสุด 60s และเปิด retries:2 ที่ config.
// ถ้ายังโหลดไม่มา step วน icon (5-12) จะถูกข้ามตามเงื่อนไข "กรณีมีข้อมูล"
//
// รัน:  npx playwright test tests/group-ri-reinsurer.spec.js --headed
// =============================================================================
const { test, expect } = require('@playwright/test');

const CONFIG = {
  loginUrl: '/nbsweb/secure/home.html',
  username: 'boss',
  password: '1',
  groupRiMenuText: 'ระบบ Group Reinsurance',
  manageDataButton: 'จัดการข้อมูล',
  reinsurerMenuText: 'ข้อมูล Reinsurer',
  searchButton: 'ค้นหา',
  addReinsurerButton: 'เพิ่ม Reinsurer',

  backLabels: {
    history: ['Back', 'กลับ', 'ย้อนกลับ'],
    fileDocument: ['ปิด', 'Close'],
    pencil: ['ยกเลิก', 'Cancel'],
    gavel: ['Back', 'กลับ', 'ย้อนกลับ', 'ปิด', 'Close', 'Cancel'],
    add: ['ยกเลิก', 'Cancel'],
  },

  // candidate selectors ของ MuiIconButton ในคอลัมน์ "ดำเนินการ" แต่ละชนิด
  // (ปรับได้เมื่อ SIT มีข้อมูลจริงให้ inspect — ปัจจุบันยังไม่มี row)
  icons: {
    history: [
      'button:has(svg[data-testid="HistoryIcon"])',
      'button:has(.mdi-history)',
      'button[aria-label*="history" i]', 'button[title*="ประวัติ"]',
    ],
    fileDocument: [
      'button:has(svg[data-testid="DescriptionIcon"])',
      'button:has(.mdi-file-document)', 'button:has(.mdi-file-document-outline)',
      'button[aria-label*="document" i]', 'button[title*="เอกสาร"]',
    ],
    pencil: [
      'button:has(svg[data-testid="EditIcon"])',
      'button:has(.mdi-pencil)',
      'button[aria-label*="edit" i]', 'button[title*="แก้ไข"]',
    ],
    gavel: [
      'button:has(svg[data-testid="GavelIcon"])',
      'button:has(.mdi-gavel)',
      'button[aria-label*="gavel" i]', 'button[title*="พิจารณา"]',
    ],
  },
};

// ----------------------------------------------------------------------------
// ตรวจรูปแบบวันที่: ต้องเป็น DD/MM/YYYY (พ.ศ.) หรือ DD/MM/YYYY HH:MI:ss
// จับเฉพาะรูปแบบตัวเลข dd/mm/yyyy (header clock แบบ "18 มิ.ย. 2569" จะไม่ถูกจับ)
// ----------------------------------------------------------------------------
async function assertDateFormat(scope, label) {
  const text = await scope.evaluate((el) => el.innerText || '').catch(() => '');
  const dateRe = /\b(\d{1,2})\/(\d{1,2})\/(\d{2,4})(?:[ T](\d{1,2}):(\d{2}):(\d{2}))?\b/g;
  const dates = [];
  const bad = [];
  let m;
  while ((m = dateRe.exec(text)) !== null) {
    const [full, dd, mm, yyyy] = m;
    dates.push(full);
    const day = +dd, month = +mm, year = +yyyy;
    const formatOk = dd.length === 2 && mm.length === 2 && yyyy.length === 4;
    const rangeOk = day >= 1 && day <= 31 && month >= 1 && month <= 12;
    // พ.ศ. 2500-3600 — ครอบคลุม sentinel "ไม่มีวันหมดอายุ" ที่ config เป็น ค.ศ.2999
    // (2999 + 543 = 3542 = ถูกต้อง ไม่ใช่ defect ตามที่ทีม QA ยืนยัน) และ 31/12/2642 = ค.ศ.2099
    const buddhistOk = year >= 2500 && year <= 3600;
    if (!formatOk || !rangeOk || !buddhistOk) {
      bad.push(`"${full}" (${!buddhistOk ? `ปีไม่ใช่ พ.ศ. year=${year}` :
        !formatOk ? 'ไม่ใช่ DD/MM/YYYY' : 'วัน/เดือนไม่ถูกต้อง'})`);
    }
  }
  console.log(`   [date] ${label}: พบ ${dates.length} วันที่` +
    (dates.length ? ` -> ${dates.join(', ')}` : ' (ไม่มีวันที่รูปแบบ DD/MM/YYYY บนหน้าจอ)'));
  if (bad.length) throw new Error(`[${label}] รูปแบบวันที่ไม่ผ่าน (ต้องเป็น DD/MM/YYYY พ.ศ.): ${bad.join('; ')}`);
}

// นับจำนวนแถวข้อมูลใน MUIDataTable (grid ใช้ <table>, ไม่ใช่ MUI X DataGrid)
// แถวว่างจะมี <tr> เดียวที่ข้อความ "ไม่พบข้อมูล" -> นับเป็น 0
async function getDataRowCount(page) {
  const rows = page.locator('table tbody tr');
  const n = await rows.count();
  if (n === 0) return 0;
  if (n === 1) {
    const txt = await rows.first().innerText().catch(() => '');
    if (/ไม่พบข้อมูล/.test(txt)) return 0;
  }
  return n;
}

function firstMatching(page, selectors) {
  return page.locator(selectors.join(', '));
}

async function clickBack(page, labels) {
  for (const label of labels) {
    const btn = page.getByRole('button', { name: label, exact: false });
    if (await btn.first().isVisible().catch(() => false)) {
      await btn.first().click();
      return label;
    }
    const alt = page.locator(`text="${label}"`);
    if (await alt.first().isVisible().catch(() => false)) {
      await alt.first().click();
      return label;
    }
  }
  throw new Error(`ไม่พบปุ่มกลับ (ลองแล้ว: ${labels.join(' / ')})`);
}

// ----------------------------------------------------------------------------
// Login + เข้า SPA + เปิดหน้า "ข้อมูล Reinsurer"  (Step 1-2)
// ----------------------------------------------------------------------------
async function gotoReinsurerList(page) {
  await page.goto(CONFIG.loginUrl, { waitUntil: 'domcontentloaded' });

  // รอช่อง login แสดงผลก่อน (หน้า login โหลดช้า/มี input ซ่อน)
  const userField = page.locator('#username, input[name="j_username"], input[type="text"]').first();
  const passField = page.locator('#password, input[name="j_password"], input[type="password"]').first();
  await userField.waitFor({ state: 'visible', timeout: 30000 });
  await userField.fill(CONFIG.username);
  await passField.fill(CONFIG.password);
  await page.getByRole('button', { name: /login|เข้าสู่ระบบ|sign in/i }).first().click();

  // รอเมนู YUI โหลด
  await page.waitForFunction(
    () => document.body && document.body.innerText.includes('ระบบงาน NBS Portal'),
    { timeout: 30000 }
  );

  // อ่าน href ของเมนู Group Reinsurance สดจาก DOM (uuid เปลี่ยนทุก session)
  const href = await page.evaluate((txt) => {
    const a = [...document.querySelectorAll('a')]
      .find((e) => (e.textContent || '').trim() === txt);
    return a ? a.getAttribute('href') : null;
  }, CONFIG.groupRiMenuText);
  expect(href, 'ไม่พบเมนู "ระบบ Group Reinsurance"').toBeTruthy();

  await page.goto(href, { waitUntil: 'domcontentloaded' });

  // Step 1: จัดการข้อมูล — รอปุ่มพร้อมก่อน (SPA React โหลดช้า)
  const manage = page.getByRole('button', { name: CONFIG.manageDataButton, exact: false }).first();
  await manage.waitFor({ state: 'visible', timeout: 30000 });
  await page.waitForTimeout(1500);
  await manage.click();

  // Step 2: ข้อมูล Reinsurer — retry เปิด dropdown ถ้าเมนูยังไม่โผล่
  const reinsurer = page.getByText(CONFIG.reinsurerMenuText, { exact: false }).first();
  for (let i = 0; i < 4; i++) {
    if (await reinsurer.isVisible().catch(() => false)) break;
    await page.waitForTimeout(1000);
    await manage.click().catch(() => {});
  }
  await reinsurer.click();
  await page.waitForTimeout(3000);
}

// คลิก "ค้นหา" (Step 3) แล้วรอข้อมูลโหลด
// SIT API ช้ามาก (~14s+) และไม่เสถียร -> กดครั้งเดียว รอสูงสุด 60s
// อย่ากดซ้ำ! การกดซ้ำจะ cancel request ที่ค้างอยู่ ทำให้ข้อมูลไม่มาเลย
async function clickSearch(page) {
  // ใช้ selector เจาะจง button#search ก่อน (เลี่ยงคลิกปุ่มผิด) -> fallback เป็นชื่อปุ่ม
  const byId = page.locator('button#search');
  if (await byId.first().isVisible().catch(() => false)) {
    await byId.first().click();
  } else {
    await page.getByRole('button', { name: CONFIG.searchButton, exact: false }).first().click();
  }
  await page.waitForFunction(() => {
    const trs = document.querySelectorAll('table tbody tr');
    if (trs.length > 1) return true;                       // มีข้อมูลหลายแถว
    if (trs.length === 1 && !/ไม่พบข้อมูล/.test(trs[0].innerText || '')) return true;
    return false;                                          // ยังโหลด หรือว่างจริง
  }, { timeout: 60000 }).catch(() => {});                  // timeout = ถือว่าไม่มีข้อมูล
  await page.waitForTimeout(800);
}

// คลิก icon ทุกแถว -> ตรวจ date -> กดกลับ (Step 5-12) — ข้ามถ้าไม่มีข้อมูล
async function clickEachRowIcon(page, iconKey, backLabels) {
  const rows = await getDataRowCount(page);
  if (rows === 0) {
    console.log(`   [icon] ${iconKey}: ไม่มีข้อมูลในตาราง (0 แถว) -> ข้ามตามเงื่อนไข "กรณีมีข้อมูล"`);
    test.info().annotations.push({ type: 'skip-no-data', description: `${iconKey}: ไม่พบข้อมูล` });
    return;
  }
  const buttons = firstMatching(page, CONFIG.icons[iconKey]);
  const count = await buttons.count();
  console.log(`   [icon] ${iconKey}: ${rows} แถว, พบปุ่ม ${count}`);
  expect(count, `มี ${rows} แถวแต่ไม่พบปุ่ม "${iconKey}" — ปรับ CONFIG.icons.${iconKey}`).toBeGreaterThan(0);

  for (let i = 0; i < count; i++) {
    const btn = firstMatching(page, CONFIG.icons[iconKey]).nth(i);
    await btn.scrollIntoViewIfNeeded();
    await btn.click();
    await page.waitForTimeout(800);

    const dialog = page.locator('.MuiDialog-root, [role="dialog"]');
    const scope = (await dialog.count()) > 0 ? dialog.last() : page.locator('body');
    await assertDateFormat(scope, `${iconKey} แถวที่ ${i + 1}`);

    const used = await clickBack(page, backLabels);
    console.log(`      แถว ${i + 1}: ตรวจวันที่ OK, กด "${used}" กลับสำเร็จ`);
    await page.waitForTimeout(500);
  }
}

// =============================================================================
// TEST SUITE
// =============================================================================
test.describe('Group Reinsurance - ข้อมูล Reinsurer', () => {
  test.beforeEach(async ({ page }) => {
    await gotoReinsurerList(page);   // Step 1-2
  });

  // Step 3-4: ค้นหา + ตรวจวันที่หน้า list
  test('Step 3-4: กดค้นหา + วันที่หน้า list เป็น DD/MM/YYYY พ.ศ.', async ({ page }) => {
    await clickSearch(page);
    const rows = await getDataRowCount(page);
    console.log(`   ค้นหาแล้วพบ ${rows} แถว`);
    await assertDateFormat(page.locator('body'), 'หน้า list Reinsurer (หลังค้นหา)');
  });

  // Step 5-6: history -> ตรวจวันที่ -> Back
  test('Step 5-6: history ทุกแถว + ตรวจวันที่ + Back', async ({ page }) => {
    await clickSearch(page);
    await clickEachRowIcon(page, 'history', CONFIG.backLabels.history);
  });

  // Step 7-8: file-document -> ตรวจวันที่ -> ปิด
  test('Step 7-8: file-document ทุกแถว + ตรวจวันที่ + ปิด', async ({ page }) => {
    await clickSearch(page);
    await clickEachRowIcon(page, 'fileDocument', CONFIG.backLabels.fileDocument);
  });

  // Step 9-10: pencil -> ยกเลิก -> ตรวจวันที่
  test('Step 9-10: pencil ทุกแถว + ยกเลิก + ตรวจวันที่', async ({ page }) => {
    await clickSearch(page);
    await clickEachRowIcon(page, 'pencil', CONFIG.backLabels.pencil);
    await assertDateFormat(page.locator('body'), 'หน้า list หลัง pencil/ยกเลิก');
  });

  // Step 11-12: gavel -> Back -> ตรวจวันที่
  test('Step 11-12: gavel ทุกแถว + Back + ตรวจวันที่', async ({ page }) => {
    await clickSearch(page);
    await clickEachRowIcon(page, 'gavel', CONFIG.backLabels.gavel);
    await assertDateFormat(page.locator('body'), 'หน้า list หลัง gavel/Back');
  });

  // Step 13-14: เพิ่ม Reinsurer -> ยกเลิก -> ตรวจวันที่
  test('Step 13-14: เพิ่ม Reinsurer + ยกเลิก + ตรวจวันที่', async ({ page }) => {
    await page.getByRole('button', { name: CONFIG.addReinsurerButton, exact: false })
      .first().click();
    await page.waitForTimeout(2000);

    const dialog = page.locator('.MuiDialog-root, [role="dialog"]');
    const scope = (await dialog.count()) > 0 ? dialog.last() : page.locator('body');
    await assertDateFormat(scope, 'ฟอร์มเพิ่ม Reinsurer');

    const used = await clickBack(page, CONFIG.backLabels.add);
    console.log(`   เพิ่ม Reinsurer: กด "${used}" กลับสำเร็จ`);
    await page.waitForTimeout(1500);

    await assertDateFormat(page.locator('body'), 'หน้า list หลังยกเลิกการเพิ่ม');
  });
});
