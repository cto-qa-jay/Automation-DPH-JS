require('dotenv').config()

class LoginHelper {
  constructor(page) {
    this.page = page
  }

  async goToURL(url) {
    await this.page.goto(url)
  }

  async loginHelper(username, password) {
    await this.page.locator('#dph-login-email').fill(username)
    await this.page.locator('#dph-login-pass').fill(password)
    await this.page.click('.login-submit')
  }

  async stagingLoginHelper() {
    await this.page.goto(process.env.URL_STAGING, { waitUntil: 'networkidle' })
    await this.page.locator('#dph-login-email').fill('rm@qa.fleet.ph')
    await this.page.locator('#dph-login-pass').fill('LMI@2020')
    await this.page.click('.login-submit')
  }

  async prodLoginHelper() {
    await this.page.goto(process.env.URL_PROD)
    await this.page.locator('.login-username').fill(process.env.USERNAME)
    await this.page.locator('.login-password').fill(process.env.PASSWORD)
    await this.page.click('.login-submit')
  }
}

module.exports = { LoginHelper }
