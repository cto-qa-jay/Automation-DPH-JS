class DraftsPage {
  constructor(page) {
    this.page = page;
    this.titlePage = page.locator('');

    this.searchTextfield = page.locator('');

    this.allTabLink = page.locator('');
    this.importTabLink = page.locator('');
    this.shopifyTabLink = page.locator('');

    this.finalizePostButton = page.locator('');
    this.discardButton = page.locator('');
  }
}

module.exports = { DraftsPage };
