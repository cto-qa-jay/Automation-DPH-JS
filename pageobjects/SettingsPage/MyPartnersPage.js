class MyPartnersPage {
  constructor(page) {
    this.page = page;
    this.autoAcceptToggle = page.locator('.react-switch-bg');
    this.fleetLogo = page.locator('.fleet-logo');
  }
}

module.exports = { MyPartnersPage };
