//  const { LoginPage } = require('../pageobjects/LoginPage');
const { POManager } = require('../pageobjects/POManager');

const { test, expect } = require('@playwright/test');

test.describe('LOGIN TEST SUITE', () => {
  let poManager;
  let loginPage;

  test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    loginPage = poManager.getLoginPage();
  });

  test('@WEB - Login Test Success', async ({ page }) => {
    await loginPage.stagingLogin();
    expect(await page.locator('.logo').isVisible());
  });
});
