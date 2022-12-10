const { POManager } = require('../pageObjects/POManager');

const { test, expect } = require('@playwright/test');
const urls = JSON.parse(JSON.stringify(require('../utils/dphEnvironment.json')));
const cred = JSON.parse(JSON.stringify(require('../utils/dphLoginData.json')));

test.describe('LOGIN TEST SUITE', () => {
  let poManager;
  let loginPage;

  test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    loginPage = poManager.getLoginPage();
  });

  test('@WEB - Login Test Success', async ({ page }) => {
    await loginPage.goTo(urls.betaUrl);
    await loginPage.validLogin(cred.business, cred.busipass);
    expect(await page.locator('.logo').isVisible());
  });

  test('@WEB - Login Test Incorrect Password', async ({ page }) => {
    await loginPage.goTo(urls.betaUrl);
    await loginPage.validLogin(cred.business, cred.business);
    await page.locator('.Toastify__toast').hover();
    await expect(page.locator('.Toastify__toast')).toBeVisible();
    await page.screenshot({ path: 'screenshot1.png', fullPage: true });
  });

  test('@WEB - Login Test Incorrect Username', async ({ page }) => {
    await loginPage.goTo(urls.betaUrl);
    await loginPage.validLogin(cred.busipass, cred.busipass);
    await page.locator('.Toastify__toast').hover();
    await expect(page.locator('.Toastify__toast')).toBeVisible();
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
  });

  test('@WEB - Remember Me Test', async ({ page }) => {
    await loginPage.goTo(urls.betaUrl);
    await loginPage.clickRememberUsername();
    await loginPage.validLogin(cred.business, cred.busipass);
    await page.locator(`li:has-text("${cred.business}")`).click();
    await page.locator('.footer-logout .btn').click();
    await expect(page).toHaveURL(urls.betaUrl);
    await expect(loginPage.getUsername()).toContain(cred.business);
  });

  test('@WEB - Forgot Password Test', async ({ page }) => {
    await loginPage.goTo(urls.betaUrl);
    await loginPage.resetPassword(cred.business);
    await page.locator('.Toastify__toast').hover();
    await expect(page.locator('.toastify__progress--success')).toBeVisible();
  });

  test('@WEB - Forgot Password Page to Login Page Test', async ({ page }) => {
    await loginPage.goTo(urls.betaUrl);
    await loginPage.goToForgotPage();
    await loginPage.goToLoginPage();
    await expect(page).toHaveURL(urls.betaUrl);
  });
});
// toastify-content--success
// Toastify__toast--error
// toastify__progress--success
