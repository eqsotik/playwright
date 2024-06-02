import { test, expect } from '@playwright/test';
import { RozetkaPage } from '../pages/rozetkaPage';

test('open Rozetka website', async ({ page }) => {
  const rozetkaPage = new RozetkaPage(page);
  await rozetkaPage.navigate();
  await rozetkaPage.verifyUrl();
});
