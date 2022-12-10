const { MyPostPage } = require('../MyPostPage');

class AddNewPostPage extends MyPostPage {
  constructor(page) {
    super(page);
    this.onDemandButton = page.locator('.onDemand-button');
    this.scheduledDeliveryButton = page.locator('.scheduled-button');
    this.referenceNumberField = page.locator('[name=refNo]');
    this.senderNameField = page.locator('[name=customerName]');
    this.mobileNumberField = page.locator('[name=contactNumber]');
    this.emailAddressField = page.locator('[name=emailAddress]');
    this.addressField = page.locator('[name=address]');
    this.provinceFieldAndDropDown = page.locator('.css-1hwfws3 >> nth=0');
    this.cityFieldAndDropDown = page.locator('.css-1hwfws3 >> nth=1');
    this.barangayFieldAndDropDown = page.locator('.css-1hwfws3 >> nth=2');
    this.postalCodeField = page.locator('[name=postalCode]');
    this.pickUpDateAndTimeCalendar = page.locator('.rdt');
    this.hubDropDown = page.locator('.css-1hwfws3 >> nth=3');
    this.remarksField = page.locator('[name=remarks]');
    this.tagsFieldAndDropDown = page.locator('.css-1hwfws3 >> nth=4');

    this.autoFillPickUpDetailsButton = page.locator('text=Auto-fill Pick-up Details');
    this.userLastProfileButton = page.locator('text=Use Last Profile');

    this.previousStepButton = page.locator('text=Previous Step');
    this.nextStepButton = page.locator('text=Next Step');
  }
}

module.exports = { AddNewPostPage };
