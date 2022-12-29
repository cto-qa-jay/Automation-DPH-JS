class DeliveryDetails {
  constructor(page) {
    this.page = page;
    this.titlePage = page.locator('');
    //  Delivery Details
    //  Step 3
    this.deliveryAutofillDetails = page.locator('');
    this.useProfileDelivery = page.locator('//button[normalize-space()="Use Last Profile"]');
    this.recipientName = page.locator('');
    this.mobileNumber = page.locator('');
    this.emailAddress = page.locator('');
    this.deliveryAddress = page.locator('');
    this.deliveryProvince = page.locator('');
    this.deliveryCity = page.locator('');
    this.deliveryBarangay = page.locator('');
    this.deliveryPostalCode = page.locator('');
    this.delvieryDateAndTime = page.locator('');
    //  Pricing Details
    this.quantityTextfield = page.getByPlaceholder('1');
    this.codAmountTextfield = page.locator('input[name="codAmount"]');
    this.declaredValueTextfield = page.locator('input[name="itemPrice"]');
    this.lengthTextfield = page.locator('input[name="length"]');
    this.widthTextfield = page.locator('input[name="width"]');
    this.heightTextfield = page.locator('input[name="height"]');
    this.weightTextfield = page.locator('input[name="weight"]');
    this.depthTextField = page.locator('input[name="depth"]');
    this.itemDescription = page.locator('textarea[name="details"]');
    this.deliveryRemarks = page.locator('');
    this.deliveryTags = page.locator('');
    //  List of items
    //  this.addListButton = page.locator('.add-new-items');
    this.selectListOfItemsDropdownfield = page.locator('div:nth-child(2) > .css-bg1rzq-control');
    this.viewItemsEyeIcon = page.locator('.view__items > .fas');
    this.nextStep = page.getByRole('button', { name: 'Next Step ' });
  }

  async deliveryTitlePage() {
    return this.titlePage;
  }

  async enterRecipientName(name) {
    await this.recipientName.fill(name);
  }

  async clickDeliveryUseLastProfile() {
    await this.useProfileDelivery.click();
  }

  async clickDeliveryNextStep() {
    await this.nextStep.click();
  }
}

module.exports = { DeliveryDetails };
