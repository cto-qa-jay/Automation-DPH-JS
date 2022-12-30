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
}

module.exports = { LoginHelper }
