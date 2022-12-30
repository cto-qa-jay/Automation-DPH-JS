class FillUpForms {
  constructor(page) {
    this.page = page
    this.name = page.locator('input[name="customerName"]')
    this.mobileNumber = page.locator('input[name="contactNumber"]')
    this.emailAddress = page.locator('input[name="emailAddress"]')
    this.address = page.locator('input[name="address"]')
    this.province = page.locator('.css-1hwfws3 >> nth=0')
    this.city = page.locator('.css-1hwfws3 >> nth=1')
    this.barangay = page.locator('.css-1hwfws3 >> nth=2')
    this.postalCode = page.locator('input[name="postalCode"]')
    this.pinButton = page.locator('.fa-map-marker-alt')

    // This is Locate Address Modal
    this.locateAddressField = page.locator('.autocomplete__input-location')
    this.closeModal = page.locator('.modal__locate-address .tooltip-close')
    this.removePinButton = page.locator('text=Remove Pin')
    this.savePinButton = page.locator('text=Save Pin')
  }

  async clickSavePin() {
    await this.pinButton.click()
    await this.page.waitForTimeout(1000)
    await this.savePinButton.click()
  }

  async commonFields({
    name,
    mobileNumber,
    emailAddress,
    address,
    province,
    city,
    barangay,
    postalCode,
  }) {
    await this.name.fill(name)
    await this.mobileNumber.fill(mobileNumber)
    await this.emailAddress.fill(emailAddress)
    await this.address.fill(address)
    await this.clickSavePin()
    await this.province.click()
    await this.province.type(province)
    await this.page.keyboard.press('Enter')

    await this.city.click()
    await this.city.type(city)
    await this.page.keyboard.press('Enter')

    await this.barangay.click()
    await this.barangay.type(barangay)
    await this.page.keyboard.press('Enter')

    await this.postalCode.fill(postalCode)
  }
}

module.exports = { FillUpForms }
