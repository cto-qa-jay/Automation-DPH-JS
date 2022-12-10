class CustomRangePostpage {
  constructor(page) {
    this.page = page;

    this.customRange = page.locator('text=Custom Range');
    this.applyButton = page.getByRole('button', { name: 'Apply' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    this.dateStartTo = page.locator('input[name="daterangepicker_start"]');
    this.dateEndFrom = page.locator('input[name="daterangepicker_end"]');
    this.month = page.locator('.month');
  }
}

module.exports = { CustomRangePostpage };
