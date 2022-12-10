class PostJob {
  constructor(page) {
    this.page = page;

    this.postsJobArrow = page.locator('');
    this.viewHistoryButton = page.locator('');
    this.printWaybillButton = page.locator('');
    this.unpostButton = page.locator('');

    this.assignedStatus = page.locator('');
    this.acceptedStatus = page.locator('');
    this.assigningRiderStatus = page.locator('');
    this.startedStatus = page.locator('');
    this.donePickupStatus = page.locator('');
    this.inTransitForReturnStatus = page.locator('');
    this.failedDeliveryStatus = page.locator('');
    this.failedPickupStatus = page.locator('');
    this.failedReturnStatus = page.locator('');
  }
}
