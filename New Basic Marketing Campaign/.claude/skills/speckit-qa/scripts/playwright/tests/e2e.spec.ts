/**
 * speckit-qa execute — Playwright E2E spec template.
 *
 * CONTRACT: every test() title MUST start with its TC ID (e.g. "TC-001 ...").
 * sync-results.mjs reads that ID to map Playwright status -> test-cases_<feature>.csv.
 *
 * Copy to specs/<feature>/e2e/tests/<feature>.e2e.spec.ts and replace the TODO
 * selectors/steps with the real ones. Keep one test() per E2E TC.
 */
import { test, expect, Page } from '@playwright/test';
import * as path from 'node:path';

const EVIDENCE_DIR =
  process.env.QA_EVIDENCE_DIR ??
  path.join(process.env.QA_FEATURE_DIR ?? process.cwd(), 'evidence');

/** Save a screenshot named <TC-ID>-<step>.png into the feature evidence/ folder. */
async function evidence(page: Page, tc: string, step: string) {
  await page.screenshot({ path: path.join(EVIDENCE_DIR, `${tc}-${step}.png`), fullPage: true });
}

/** Optional login helper — wire to your app's auth form. */
async function login(page: Page, user = process.env.QA_USER, pass = process.env.QA_PASS) {
  if (!user) return; // app may already be authenticated / behind SSO
  await page.goto('/login');
  await page.fill('#username', user);        // TODO: real selector
  await page.fill('#password', pass ?? '');   // TODO: real selector
  await page.click('button[type=submit]');    // TODO: real selector
}

// Path of the feature screen under test (relative to baseURL).
const SCREEN = '/secure/remoteaction/epirusapp/v4/sms-birthday-content-maintenance';

test.describe('SMS Birthday Content Maintenance — E2E', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('TC-001 List default load — start_date DESC + badge @positive @smoke', async ({ page }) => {
    await page.goto(SCREEN);
    await expect(page.locator('table tbody tr').first()).toBeVisible(); // TODO: assert DESC order
    await evidence(page, 'TC-001', 'list');
  });

  test('TC-009 Create success — INSERT Active + SUC-001 @positive @smoke', async ({ page }) => {
    await page.goto(SCREEN);
    // TODO: click "เพิ่มรายการใหม่", fill form, submit
    await evidence(page, 'TC-009', 'create');
    // await expect(page.locator('.success')).toContainText('บันทึกข้อมูลสำเร็จ');
    await evidence(page, 'TC-009', 'create-success');
  });

  test('TC-028 Cancel with confirm — Inactive + SUC-002 @positive @smoke', async ({ page }) => {
    await page.goto(SCREEN);
    // TODO: click ยกเลิก on an Active row -> confirm dialog -> ยืนยัน
    await evidence(page, 'TC-028', 'cancel-dialog');
    // await expect(page.locator('.success')).toContainText('ยกเลิกรายการสำเร็จ');
    await evidence(page, 'TC-028', 'cancel-result');
  });

  test('TC-039 Non-Marketing 403 @security @smoke', async ({ page }) => {
    const resp = await page.goto(SCREEN); // hit action directly without Marketing role
    expect([401, 403]).toContain(resp?.status() ?? 0);
    await evidence(page, 'TC-039', 'no-auth');
  });

  // Add remaining E2E TCs (TC-003, TC-007, TC-020, TC-021, TC-022, TC-024, TC-025,
  // TC-029, TC-030, TC-035, TC-043, TC-045, TC-048) following the same pattern.
});
