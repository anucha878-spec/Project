import { defineConfig, devices } from '@playwright/test';
import * as path from 'node:path';

// QA_FEATURE_DIR points at specs/<feature>/ ; specs live there and evidence is written there.
const featureDir = process.env.QA_FEATURE_DIR ?? process.cwd();

export default defineConfig({
  testDir: path.join(featureDir, 'e2e', 'tests'),
  outputDir: path.join(featureDir, 'e2e', '.artifacts'),
  timeout: 60_000,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: [
    ['list'],
    ['html', { outputFolder: path.join(featureDir, 'e2e', '.report'), open: 'never' }],
    ['json', { outputFile: path.join(featureDir, 'e2e', '.artifacts', 'results.json') }],
  ],
  use: {
    baseURL: process.env.QA_BASE_URL,
    screenshot: 'on',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    locale: 'th-TH',
    timezoneId: 'Asia/Bangkok',
    actionTimeout: 15_000,
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
