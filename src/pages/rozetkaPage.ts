import { Page } from '@playwright/test';

export class RozetkaPage {
  readonly page: Page;
  readonly url: string;

  constructor(page: Page) {
    this.page = page;
    this.url = 'https://rozetka.com.ua/ua/';
  }

  async navigate() {
    console.log('Navigating to:', this.url);
    await this.page.goto(this.url);
  }

  async verifyUrl() {
    console.log('Verifying URL');
    await this.page.waitForLoadState('load');
    await this.page.waitForURL(this.url, { timeout: 20000 });
    const currentUrl = this.page.url();
    if (currentUrl !== this.url) {
      throw new Error(`URL mismatch: expected ${this.url}, but got ${currentUrl}`);
    }
  }
}
