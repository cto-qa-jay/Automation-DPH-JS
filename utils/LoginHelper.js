const credentials = JSON.parse(JSON.stringify(require('./DphLoginData.json')));

class LoginHelper {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#dph-login-email');
    this.password = page.locator('#dph-login-pass');
    this.login = page.locator('.login-submit');
  }

  async inputUsername(user) {
    await this.username.fill(user);
  }

  async inputPassword(pass) {
    await this.password.fill(pass);
  }

  async clickLoginButton() {
    await this.login.click();
  }

  async gotoBeta() {
    await this.page.goto('https://beta.deliveries.ph', { waitUntil: 'networkidle' });
  }

  async gotoStaging() {
    await this.page.goto('https://staging.deliveries.ph', { waitUntil: 'networkidle' });
  }

  // ,{waitUntil: 'networkidle'} **/*.css',route => route.abort()
  async betaLoginHelper() {
    // await this.page.route('');
    await this.page.goto('https://beta.deliveries.ph', { waitUntil: 'networkidle' });
    await this.page.locator('#dph-login-email').fill(credentials.business);
    await this.page.locator('#dph-login-pass').fill(credentials.busipass);
    await this.page.click('.login-submit');
  }

  async stagingLoginHelper(user, pass) {
    await this.page.goto('https://staging.deliveries.ph', { waitUntil: 'networkidle' });
    await this.page.locator('#dph-login-email').fill(user);
    await this.page.locator('#dph-login-pass').fill(pass);
    await this.page.click('.login-submit');
    await this.page.locator('text=Add New Post');
  }

  async prodLoginHelper() {
    await this.page.goto('https://app.deliveries.ph');
    await this.page.locator('.login-username').fill(credentials.email);
    await this.page.locator('.login-password').fill(credentials.password);
    await this.page.click('.login-submit');
  }
}

module.exports = { LoginHelper };
