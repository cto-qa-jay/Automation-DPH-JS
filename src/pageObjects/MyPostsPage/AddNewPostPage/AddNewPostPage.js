class AddNewPostPage {
  constructor(page) {
    this.page = page
    this.onDemandButton = page.locator('.onDemand-button')
    this.scheduledDeliveryButton = page.locator('.scheduled-button')
    this.referenceNumberField = page.locator('[name=refNo]')
    this.senderNameField = page.locator('[name=customerName]')
    this.mobileNumberField = page.locator('[name=contactNumber]')
    this.emailAddressField = page.locator('[name=emailAddress]')
    this.addressField = page.locator('[name=address]')
    this.provinceFieldAndDropDown = page.locator('.css-1hwfws3 >> nth=0')
    this.cityFieldAndDropDown = page.locator('.css-1hwfws3 >> nth=1')
    this.barangayFieldAndDropDown = page.locator('.css-1hwfws3 >> nth=2')
    this.postalCodeField = page.locator('[name=postalCode]')
    this.pickUpDateAndTimeCalendar = page.locator('.rdt')
    this.hubDropDown = page.locator('.css-1hwfws3 >> nth=3')
    this.remarksField = page.locator('[name=remarks]')
    this.tagsFieldAndDropDown = page.locator('.css-1hwfws3 >> nth=4')

    this.autoFillPickUpDetailsButton = page.locator('text=Auto-fill Pick-up Details')
    this.userLastProfileButton = page.locator('text=Use Last Profile')

    this.previousStepButton = page.locator('text=Previous Step')
    this.nextStepButton = page.locator('text=Next Step')

    this.fleetRider = page.locator('text=Sandbox Provider >> nth=1')
    this.saveButton = page.locator('text=Save')

    this.schedulePostPage = page.locator('li>span >> nth=0')
    this.pickUpDetailsPage = page.locator('li>span >> nth=1')
    this.deliveryDetailsPage = page.locator('li>span >> nth=2')
    this.selectCourierPage = page.locator('li>span >> nth=3')
    this.additionalDetailsPage = page.locator('li>span >> nth=4')
    this.summaryDetailsPage = page.locator('li>span >> nth=5')

    // Page 4
    this.vehicleTypeDropdown = page.locator('.css-19bqh2r')
    this.vehicleTypeOptions = page.locator('.css-fk865s-option')
  }

  async selectDifferentVehicle() {
    await this.vehicleTypeDropdown.click()
    await this.vehicleTypeOptions.nth(1).click()
  }

  async clickOnDemand() {
    await this.onDemandButton.click()
  }

  async fillUpReferenceNo(refernceNo) {
    await this.referenceNumberField.type(refernceNo)
  }

  async clickNext() {
    await this.nextStepButton.click()
  }

  async selectFleetRider() {
    await this.page.waitForTimeout(1000)
    await this.fleetRider.click()
  }

  async clickSaveButton() {
    await this.saveButton.click()
  }

  async pickUpPage() {
    return this.pickUpDetailsPage
  }

  async deliveryPage() {
    return this.deliveryDetailsPage
  }

  async clickUseLastProfile() {
    return this.userLastProfileButton.click()
  }
}

module.exports = { AddNewPostPage }
