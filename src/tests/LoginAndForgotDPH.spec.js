const { POManager } = require('../pageObjects/POManager')

const { test, expect } = require('@playwright/test')

require('dotenv').config()

test.describe('LOGIN TEST SUITE', () => {
  let poManager
  let loginPage

  test.beforeEach(async ({ page }) => {
    poManager = new POManager(page)
    loginPage = poManager.getLoginPage()
  })

  test('@WEB - Login Test Success', async ({ page }) => {
    await loginPage.goTo(process.env.URL_BETA)
    await loginPage.validLogin(process.env.USERNAME, process.env.PASSWORD)
    expect(await page.locator('.logo').isVisible())
  })

  test('@WEB - Login Test Incorrect Password', async ({ page }) => {
    await loginPage.goTo(process.env.URL_BETA)
    await loginPage.validLogin(process.env.USERNAME, process.env.PASSWORD)
    await page.locator('.Toastify__toast').hover()
    await expect(page.locator('.Toastify__toast')).toBeVisible()
    await page.screenshot({ path: 'screenshot1.png', fullPage: true })
  })

  test('@WEB - Login Test Incorrect Username', async ({ page }) => {
    await loginPage.goTo(process.env.URL_BETA)
    await loginPage.validLogin(process.env.USERNAME, process.env.PASSWORD)
    await page.locator('.Toastify__toast').hover()
    await expect(page.locator('.Toastify__toast')).toBeVisible()
    await page.screenshot({ path: 'screenshot.png', fullPage: true })
  })

  test('@WEB - Remember Me Test', async ({ page }) => {
    await loginPage.goTo(process.env.URL_BETA)
    await loginPage.clickRememberUsername()
    await loginPage.validLogin(process.env.USERNAME, process.env.PASSWORD)
    await page.locator(`li:has-text("${process.env.USERNAME}")`).click()
    await page.locator('.footer-logout .btn').click()
    await expect(page).toHaveURL(process.env.URL_BETA)
    await expect(loginPage.getUsername()).toContain(process.env.USERNAME)
  })

  test('@WEB - Forgot Password Test', async ({ page }) => {
    await loginPage.goTo(process.env.URL_BETA)
    await loginPage.resetPassword(process.env.USERNAME)
    await page.locator('.Toastify__toast').hover()
    await expect(page.locator('.toastify__progress--success')).toBeVisible()
  })

  test('@WEB - Forgot Password Page to Login Page Test', async ({ page }) => {
    await loginPage.goTo(process.env.URL_BETA)
    await loginPage.goToForgotPage()
    await loginPage.goToLoginPage()
    await expect(page).toHaveURL(process.env.URL_BETA)
  })
})
// toastify-content--success
// Toastify__toast--error
// toastify__progress--success
