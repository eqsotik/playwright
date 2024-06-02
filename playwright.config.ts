import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 20000,
  use: {
    headless: false, 
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
