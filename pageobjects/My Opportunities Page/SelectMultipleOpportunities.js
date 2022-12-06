class SelectMultipleOpportunities{

    constructor(page){
        this.page = page;
        this.titlePage = page.locator('');

        this.threeDotsOption = page.locator('');
        this.selectMultipleOpportunitiesButton = page.locator('');
        this.selectFirst20CheckBox = page.locator('');
        this.opportunitiesCheckBox = page.locator('');
        this.printDefaultWaybillIcon = page.locator('');
        this.acceptIcon = page.locator('');
        this.rejectIcon = page.locator('');
        this.returnToSenderIcon = page.locator('');
        this.closeIcon = page.locator('');
    }
}

module.exports = {SelectMultipleOpportunities};