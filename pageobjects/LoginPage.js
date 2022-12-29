const credentials = JSON.parse(JSON.stringify(require('../utils/DphLoginData.json')));

class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#dph-login-email');
    this.password = page.locator('#dph-login-pass');
    this.login = page.locator('.login-submit');
    this.rememberUserNameTickBox = page.locator('.checkmark');
    this.forgotLink = page.locator('.forgot-password');
    this.email = page.locator('[placeholder="EMAIL"]');
    this.resetPasswordButton = page.locator('text="Reset Password"');
    this.loginPage = page.locator('#dph-login-submit-btn');
    this.toastNotification = page.locator('.Toastify__toast');
  }

  getLoginPage() {
    return this.loginPage;
  }

  async betaLogin() {
    await this.page.goto('https://beta.deliveries.ph', { waitUntil: 'networkidle' });
    await this.username.fill(credentials.sandbo_qa);
    await this.password.fill(credentials.qa_pass);
    await this.loginPage.click();
  }

  async stagingLogin(user, pass) {
    await this.page.goto('https://staging.deliveries.ph', { waitUntil: 'networkidle' });
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginPage.click();
  }

  async prodLogin() {
    await this.page.goto('https://app.deliveries.ph', { waitUntil: 'networkidle' });
    await this.username.fill(credentials.sandbo_qa);
    await this.password.fill(credentials.qa_pass);
    await this.loginPage.click();
  }

  async goToForgotPage() {
    await this.forgotLink.click();
  }

  async clickRememberUsername() {
    await this.rememberUserNameTickBox.click();
  }

  async goToLoginPage() {
    await this.loginPage.click();
  }

  async resetPassword(email) {
    await this.forgotLink.click();
    await this.email.type(email);
    await this.resetPasswordButton.click();
  }
  // async checkErrorMessage(){
  //     console.log(this.toastNotification);
  // }

  async getUsername() {
    await this.username.textContent();
  }
}

module.exports = { LoginPage };
