class MyOpportunitiesPage{

    constructor(page){
        this.page = page;
        this.pageTitle = page.locator('');

        this.cancelButton = page.locator('');
        this.viewHistoryButton = page.locator('');
        this.printWaybillButton = page.locator('');
        this.acceptButton = page.locator('');
        this.rejectbutton = page.locator('');
        this.returnTosenderButton = page.locator('');

        // Add/Edit Tracking Number
        this.addTrackingButton = page.locator('');
        this.trackingNumberTextfield = page.locator('');
        this.trackingUrlTextfield = page.locator('');
        this.saveButton = page.locator('');
        this.closeButton = page.locator('');

    }
}

module.exports = {MyOpportunitiesPage};