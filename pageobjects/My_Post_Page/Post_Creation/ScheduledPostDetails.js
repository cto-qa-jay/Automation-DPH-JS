class ScheduledPostDetails {
  constructor(page) {
    this.page = page;
    this.titlePage = page.locator('.title');
    this.addNewPostButton = page.locator('//button[@class="btn btn-newPost"]');

    //  schedule post
    //  Step 1
    this.ondemandDelivery = page.locator('text=On Demand DeliverySame-day pickup and delivery');
    this.scheduledDelivery = page.getByText('Scheduled DeliveryScheduled pickup and delivery');
    this.nextStep = page.getByRole('button', { name: 'Next Step ' });
  }

  async postTitlePage() {
    return this.titlePage;
  }

  async clickAddNewPost() {
    await this.addNewPostButton.click();
  }

  async clickOndemandDelivery() {
    await this.ondemandDelivery.click();
  }

  async clickScheduledDelivery() {
    await this.scheduledDelivery.click();
  }

  async clickNextStep() {
    await this.nextStep.click();
  }
}

module.exports = { ScheduledPostDetails };
