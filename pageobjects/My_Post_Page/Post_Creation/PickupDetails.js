class PickupDetails {
  constructor(page) {
    this.page = page;
    this.titlePage = page.locator('.title');
    //  Pickup Details
    //  Step 2
    this.useLastProfileButton = page.getByRole('button', { name: 'Use Last Profile' });
    this.referenceNumberTextfield = page.locator('input[name="refNo"]');
    this.senderNameTextfield = page.locator('input[name="customerName"]');
    this.mobileNumberTextfield = page.locator('input[name="contactNumber"]');
    this.emailAddressTextfield = page.locator('input[name="emailAddress"]');
    this.addressTextfield = page.locator('input[name="address"]');
    this.provinceDropdownfield = page.locator('.css-1hwfws3').first();
    this.cityDropdownfield = page
      .locator(
        'div:nth-child(2) > div:nth-child(2) > .css-1pcexqc-container > .css-bg1rzq-control > .css-1hwfws3'
      )
      .first();
    this.barangayDropdownfield = page.locator(
      'div:nth-child(4) > .form-control-input-select > div:nth-child(2) > .css-1pcexqc-container > .css-bg1rzq-control'
    );
    this.postalCodeTextfield = page.locator('input[name="postalCode"]');
    this.pickupDateAndTimePicker = page.locator('.form-control');
    // Date and time Picker
    this.pickupTimePicker = page.locator('//td[@class="rdtTimeToggle"]');
    this.pickupIncreaseHours = page.locator('(//span[@class="rdtBtn"])[1]');
    this.pickupDecreaseHours = page.locator('(//span[@class="rdtBtn"])[2]');
    this.pickupIncreaseMinutes = page.locator('(//span[@class="rdtBtn"])[3]');
    this.pickupDecreaseMinutes = page.locator('(//span[@class="rdtBtn"])[4]');
    this.pickupIncreaseRefTime = page.locator('(//span[@class="rdtBtn"])[5]');
    this.pickupDecreaseRefTime = page.locator('(//span[@class="rdtBtn"])[6]');

    this.hubDropdownfield = page.locator(
      'div:nth-child(2) > .form-control-input-select > div:nth-child(2) > .css-1pcexqc-container > .css-bg1rzq-control'
    );
    this.remarksTextfield = page.locator('textarea[name="remarks"]');
    this.tagsDropdownfield = page.locator(
      'div:nth-child(4) > div:nth-child(2) > .css-1pcexqc-container > .css-bg1rzq-control'
    );
    this.previousStep = page.getByRole('button', { name: ' Previous Step' });
    this.nextStep = page.getByRole('button', { name: 'Next Step ' });
  }

  async pickupTitlePage() {
    return this.titlePage;
  }

  async enterReferenceNumber(refNo) {
    await this.referenceNumberTextfield.fill(refNo);
  }

  async enterSenderName(name) {
    await this.senderNameTextfield.fill(name);
  }

  async enterMobileNumber(mobile) {
    await this.mobileNumberTextfield.fill(mobile);
  }

  async enterEmailAddress(email) {
    await this.emailAddressTextfield.fill(email);
  }

  async enterAddress(address) {
    await this.addressTextfield.fill(address);
  }

  async enterProvince(province) {
    await this.provinceDropdownfield.click();
    await this.provinceDropdownfield.fill(province);
    await this.page.keyboard.press('Enter');
  }

  async enterCity(city) {
    await this.cityDropdownfield.click();
    await this.cityDropdownfield.fill(city);
    await this.page.keyboard.press('Enter');
  }

  async enterBarangay(barangay) {
    await this.barangayDropdownfield.click();
    await this.barangayDropdownfield.fill(barangay);
    await this.page.keyboard.press('Enter');
  }

  async enterPostalCode(postal) {
    await this.postalCodeTextfield.fill(postal);
  }

  async enterHub(stores) {
    await this.hubDropdownfield.click();
    await this.hubDropdownfield.fill(stores);
    await this.page.keyboard.press('Enter');
  }

  // Date and Time Picker
  async clickPickupDateAndTimePicker() {
    await this.pickupDateAndTimePicker.click();
  }

  async clickPickupTimePicker() {
    await this.pickupTimePicker.click();
  }

  async clickPickupIncreaseMinutes() {
    // more than 15mins
    for (let i = 0; i <= 18; i += 1) {
      await this.pickupIncreaseMinutes.click();
    }
  }

  async enterRemarks(remark) {
    await this.remarksTextfield.fill(remark);
  }

  async clickPickupUseLastProfile() {
    await this.useLastProfileButton.click();
  }

  async clickPickupNextStep() {
    await this.nextStep.click();
  }

  async clickPickupPreviousStep() {
    await this.previousStep.click();
  }
}

module.exports = { PickupDetails };
