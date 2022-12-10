const { MyPostPage } = require('../MyPostPage');

class AddNewPostPage extends MyPostPage {
  constructor(page) {
    super(page);
    this.onDemandButton = page.locator('.onDemand-button');
    this.scheduledDeliveryButton = page.locator('.scheduled-button');
    this.referenceNumberField = page.locator('');
    this.senderNameField = page.locator('');
    this.mobileNumberField = page.locator('');
    this.emailAddressField = page.locator('');
    this.addressField = page.locator('');
    this.provinceFieldAndDropDown = page.locator('');
    this.cityFieldAndDropDown = page.locator('');
    this.barangayFieldAndDropDown = page.locator('');
    this.postalCodeField = page.locator('');
    this.pickUpDateAndTimeCalendar = page.locator('');
    this.hubDropDown = page.locator('');
    this.remarksField = page.locator('');
    this.tagsFieldAndDropDown = page.locator('');

    this.autoFillPickUpDetailsButton = page.locator('');
    this.userLastProfileButton = page.locator('');

    this.previousStepButton = page.locator('');
    this.nextStepButton = page.locator('text=Next Step');
  }
}

module.exports = { AddNewPostPage };
