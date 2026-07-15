// Playwright config สำหรับทดสอบ NBS Portal - ระบบ Group Reinsurance (SIT)
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 90 * 1000,            // 90s ต่อ test (แอปโหลดช้าได้)
  expect: { timeout: 15 * 1000 },
  fullyParallel: false,         // ทดสอบทีละ step ตามลำดับ
  retries: 2,                   // หน้า login/SPA โหลดช้าไม่สม่ำเสมอ -> auto-retry กัน flaky
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
  ],
  use: {
    baseURL: 'https://sitnbs.thaisamut.co.th',
    headless: false,            // ครั้งแรกให้ดูภาพ; เปลี่ยนเป็น true เมื่อ selector นิ่งแล้ว
    ignoreHTTPSErrors: true,    // SIT มักใช้ cert ที่ไม่ผ่าน
    viewport: { width: 1500, height: 900 },
    actionTimeout: 20 * 1000,
    navigationTimeout: 40 * 1000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    locale: 'th-TH',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
