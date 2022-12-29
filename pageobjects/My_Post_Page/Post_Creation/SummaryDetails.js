class SummaryDetails {
  constructor(page) {
    this.page = page;
    this.titlePage = page.locator('');

    this.referenceNumberValue = page.locator('');
    // Pickup Details
    // Customer
    this.pickupCustomerNameValue = page.locator('');
    this.pickupMobileNumberValue = page.locator('');
    this.pickupEmailAddressValue = page.locator('');
    this.completionPickupDateAndTimeValue = page.locator('');
    //  Location Details
    this.pickupAddressValue = page.locator('');
    this.pickupBarangayValue = page.locator('');
    this.pickupCityValue = page.locator('');
    this.pickupProvinceValue = page.locator('');
    this.pickupPostalValue = page.locator('');
    //  Post Details
    this.pickupRemarksValue = page.locator('');
    this.pickupTagsValue = page.locator('');

    //  Delivery Details
    //  Customer
    this.deliveryCustomerNameValue = page.locator('');
    this.deliveryMobileNumberValue = page.locator('');
    this.deliveryEmailAddressValue = page.locator('');
    this.completionDeliveryDateAndTime = page.locator('');
    //  Location Details
    this.deliveryAddressvalue = page.locator('');
    this.deliveryBarangayValue = page.locator('');
    this.deliveryCityValue = page.locator('');
    this.deliveryProvince = page.locator('');
    this.deliveryPostalValue = page.locator('');

    //  Package
    this.quantityValue = page.locator('');
    this.dimensionHeightValue = page.locator('');
    this.dimensionLengthValue = page.locator('');
    this.dimensionWidthVaue = page.locator('');
    this.dimensionDepthValue = page.locator('');
    this.weightValue = page.locator('');
    this.packageSize = page.locator('');

    //  Pricing
    this.codAmountValue = page.locator('');
    this.declaredValue = page.locator('');
    this.approxShippingFeeValue = page.locator('');
    this.finalShippingFeeValue = page.locator('');
    this.insuredAmountValue = page.locator('');

    //  Post Details
    //  List of Items
    this.haveItemDisplay = page.locator('');
    this.noValue = page.locator('');
    this.itemNameValue = page.locator('');
    this.itemQuantityValue = page.locator('');
    this.itemUnitPriceValue = page.locator('');
    this.itemLengthValue = page.locator('');
    this.itemWidthValue = page.locator('');
    this.itemHeightValue = page.locator('');
    this.itemBreadthValue = page.locator('');
    this.itemDepthValue = page.locator('');
    this.itemWeightValue = page.locator('');
    this.itemDeclaredvalue = page.locator('');

    this.itemDescriptionValue = page.locator('');
    this.deliveryRemarksValue = page.locator('');
    this.deliveryTagsValue = page.locator('');

    //  Courier Partner
    //  Scheduled
    this.courierNameValue = page.locator('');
    this.courierTypeValue = page.locator('');

    //  Additional Details
    //  Metafields

    this.previosPageButton = page.locator('');
    this.saveButton = page.locator('');
  }

  async clickSaveButton() {
    await this.saveButton.click();
  }
}

module.exports = { SummaryDetails };
