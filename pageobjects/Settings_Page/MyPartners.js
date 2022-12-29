class MyPartners {
  constructor(page) {
    this.page = page;
    this.titlePage = page.locator('//div[normalize-space()="My Partners"]');
    this.myPartners = page.locator('//span[text()="My Partners"]');
    this.autoAcceptOn = page.locator('//div[@class="react-switch-handle"]');
    this.autoAcceptOff = page.locator('//div[@class="react-switch-handle"]');
    this.autoAcceptOnIndicator = page.locator('//div[@class="react-switch-bg"]');
    this.autoAcceptOffIndicator = page.locator('//div[@class="react-switch-bg"]');
  }

  async clickMyPartners() {
    await this.myPartners.click();
  }

  async clickAutoAcceptOn() {
    await this.autoAcceptOn.click();
  }
}

module.exports = { MyPartners };
