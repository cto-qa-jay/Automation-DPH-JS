class ShareableLink {
  constructor(page) {
    this.page = page;
    this.titlePage = page;

    this.shareableLink = page.locator('');
    this.shareableUrl = page.locator('');
  }
}

module.exports = { ShareableLink };
