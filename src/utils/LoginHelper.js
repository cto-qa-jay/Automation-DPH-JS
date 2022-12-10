const credentials = JSON.parse(JSON.stringify(require('./dphLoginData.json')));

class LoginHelper {
  constructor(page) {
    this.page = page;
  }

  // ,{waitUntil: 'networkidle'} **/*.css',route => route.abort()
  async betaLoginHelper() {
    // await this.page.route('');
    await this.page.goto('https://beta.deliveries.ph', { waitUntil: 'networkidle' });
    await this.page.locator('#dph-login-email').fill(credentials.business);
    await this.page.locator('#dph-login-pass').fill(credentials.busipass);
    await this.page.click('.login-submit');
  }

  async stagingLoginHelper() {
    await this.page.goto('https://staging.deliveries.ph', { waitUntil: 'networkidle' });
    await this.page.locator('#dph-login-email').fill('rm@qa.fleet.ph');
    await this.page.locator('#dph-login-pass').fill('LMI@2020');
    await this.page.click('.login-submit');
  }

  async prodLoginHelper() {
    await this.page.goto('https://app.deliveries.ph');
    await this.page.locator('.login-username').fill(credentials.email);
    await this.page.locator('.login-password').fill(credentials.password);
    await this.page.click('.login-submit');
  }
}

module.exports = { LoginHelper };
