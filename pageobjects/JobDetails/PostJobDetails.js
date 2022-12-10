class PostJobDetails {
  constructor(page) {
    this.page = page;
    this.titlePage = page;

    //Pickup Details
    this.pickupSenderName = page.locator('');
    this.pickupAddress = page.locator('');
    this.pickupProvince = page.locator('');
    this.pickupCity = page.locator('');
    this.pickupBarangay = page.locator('');
    this.pickupPostalCode = page.locator('');
    this.pickupReferenceNumber = page.locator('');
    this.pickupRemarks = page.locator('');
    this.pickupDateAndTime = page.locator('');
    this.pickupContactNumber = page.locator('');
    this.pickupTrackingNumber = page.locator('');
    this.pickupTrackingUrl = page.locator('');

    //Delivery Details
    this.deliveryRecipientName = page.locator('');
    this.deliveryAddress = page.locator('');
    this.deliveryProvince = page.locator('');
    this.deliveryCity = page.locator('');
    this.deliveryBarangay = page.locator('');
    this.deliveryPostalCode = page.locator('');
    this.deliveryReferenceNumber = page.locator('');
    this.deliveryQuantity = page.locator('');
    this.deliveryItemDescription = page.locator('');
    this.lenghtDimensions = page.locator('');
    this.widthDimensions = page.locator('');
    this.heightDimensions = page.locator('');
    this.packageSize = page.locator('');
    this.deliveryWeight = page.locator('');
    this.deliveryDeclaredValue = page.locator('');
    this.billableShippingFee = page.locator('');
    this.deliveryCodAmount = page.locator('');
    this.deliveryRemarks = page.locator('');
    this.deliveryDateAndTime = page.locator('');
    this.deliveryContactNumber = page.locator('');
    this.deliveryTrackingNumber = page.locator('');
    this.deliveryTrackingUrl = page.locator('');
  }
}

module.exports = { PostJobDetails };
