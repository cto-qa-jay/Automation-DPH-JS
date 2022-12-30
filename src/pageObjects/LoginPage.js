// eslint-disable-next-line import/no-import-module-exports
import { logger } from '../utils/Helpers'

class LoginPage {
  constructor(page) {
    this.page = page
    this.username = page.locator('#dph-login-email')
    this.password = page.locator('#dph-login-pass')
    this.login = page.locator('.login-submit')
    this.rememberUserNameTickBox = page.locator('.checkmark')
    this.forgotLink = page.locator('.forgot-password')
    this.email = page.locator('[placeholder="EMAIL"]')
    this.resetPasswordButton = page.locator('text="Reset Password"')
    this.loginPage = page.locator('text="Login"')
    this.toastNotification = page.locator('.Toastify__toast')
  }

  async goTo(url) {
    await this.page.goto(url)
  }

  async validLogin(email, password) {
    await this.username.fill(email)
    await this.password.fill(password)
    await this.login.click()
  }

  async goToForgotPage() {
    await this.forgotLink.click()
  }

  async clickRememberUsername() {
    await this.rememberUserNameTickBox.click()
  }

  async goToLoginPage() {
    await this.loginPage.click()
  }

  async resetPassword(email) {
    await this.forgotLink.click()
    await this.email.type(email)
    await this.resetPasswordButton.click()
  }

  async checkErrorMessage() {
    logger.apply(this.toastNotification)
  }

  async getUsername() {
    await this.username.textContent()
  }
}

module.exports = { LoginPage }
