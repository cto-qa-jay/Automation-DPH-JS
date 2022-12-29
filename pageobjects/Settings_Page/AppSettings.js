class AppSettings {
  constructor(page) {
    this.page = page;
    this.titlePage = page.locator('//span[text()="App Settings"]');
    this.appSettings = page.locator('//span[@class="header"]');
  }
}

module.exports = { AppSettings };
