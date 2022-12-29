class ScheduledCourier {
  constructor(page) {
    this.page = page;
    this.titlePage = page.locator('');
    this.pickupDate = page.locator('');
    this.estimateDelivery = page.locator('');
    this.courierNextStep = page.locator('');
    this.courierPreviousStep = page.locator('');

    //  Prime Movers Total Logistics, Inc.
    this.PRIME_MOVERS = page.locator('');
    this.primePackageSize = page.locator('');
    this.primePackageWeight = page.locator('');
    this.primePackagePrice = page.locator('');
    this.primeCostCenter = page.locator('');
    this.primeUsername = '';
    this.primePassword = '';

    //  LIBCAP Super Express Corporation
    this.LIBCAP = page.locator('');
    this.libcapPackageSize = page.locator('');
    this.libcapPackageWeight = page.locator('');
    this.libcapPackagePrice = page.locator('');
    this.libcapDeliveryTransportMode = page.locator('');
    this.libcapDeliveryType = page.locator('');
    this.libcapDeliveryPostalCode = page.locator('');
    this.libcapUsername = '';
    this.libcapPassword = '';

    //  Ximex Delivery Express Inc.
    this.XDE = page.locator('');
    this.xdePackageSize = page.locator('');
    this.xdePackageWeight = page.locator('');
    this.xdePackagePrice = page.locator('');
    this.xdeWeight = page.locator('');
    this.xdeWidth = page.locator('');
    this.xdeHeight = page.locator('');
    this.xdeLength = page.locator('');
    this.xdeBusinessUnitCode = page.locator('');
    this.xdeDeliveryType = page.locator('');

    //  Sandbox XDE
    this.SANDBOX_XDE = page.locator('');
    this.xdeSandboxPackageSize = page.locator('');
    this.xdeSandboxPackageWeight = page.locator('');
    this.xdeSandboxPackagePrice = page.locator('');

    //  QuadX_Zone
    this.QUADX = page.locator('');
    this.quadxPackageSize = page.locator('');
    this.quadxPackageWeight = page.locator('');
    this.quadxPackagePrice = page.locator('');
    this.quadxPickupPostalCode = page.locator('');
    this.DeliveryPostalCode = page.locator('');

    //  Sandbox Quadx
    this.SANDBOX_QUADX = page.locator('');
    this.quadxSandboxPackageSize = page.locator('');
    this.quadxSandboxPackageWeight = page.locator('');
    this.quadxSandboxPackagePrice = page.locator('');

    //  NinjaVan
    this.NINJAVAN = page.locator.page('');
    this.ninjavanPackageSize = page.locator('');
    this.ninjavanPackageWeight = page.locator('');
    this.ninjavanPackagePrice = page.locator('');
    this.ninjavanPickupTimeSlot = page.locator(''); //  required
    this.ninjavanDeliveryTimeSlot = page.locator('');

    //  Sandbox Ninjavan
    this.SANDBOX_NINJAVAN = page.locator('');
    this.ninjavanSandboxPackageSize = page.locator('');
    this.ninjavanSandboxPackageWeight = page.locator('');
    this.ninjavanSandboxPackagePrice = page.locator('');

    //  Sandbox_Dev
    this.SANDBOX_DEV = page.locator('');
    this.devSandboxPackageSize = page.locator('');
    this.devSandboxPackageWeight = page.locator('');
    this.devSandboxPackagePrice = page.locator('');

    //  Worklink Services Inc
    this.WSI = page.locator('');
    this.wsiPackageSize = page.locator('');
    this.wsiPackageWeight = page.locator('');
    this.wsiPackagePrice = page.locator('');

    //  Entrego Express Globe
    this.ENTREGO_GLOBE = page.locator('');
    this.entregoGlobePackageSize = page.locator('');
    this.entregoGlobePackageWeight = page.locator('');
    this.entregoGlobePackagePrice = page.locator('');
    this.entregoBusinessCode = page.locator('');
    this.entregoPickupPostalCode = page.locator('');
    this.entregoDeliveryPostalCode = page.locator('');

    //  Entrego Express Corporation
    this.ENTREGO_CORP = page.locator('');
    this.entregoCorpPackageSize = page.locator('');
    this.entregoCorpPackageWeight = page.locator('');
    this.entregoCorpPackagePrice = page.locator('');

    //  Entrego Express Marketplace
    this.ENTREGO_MARKETPLACE = page.locator('');
    this.entregoMarketplacePackageSize = page.locator('');
    this.entregoMarketplacePackageWeight = page.locator('');
    this.entregoMarketplacePackagePrice = page.locator('');

    //  Nonpareil International Freight and Cargo Services
    this.NONPAREIL = page.locator('');
    this.nonpareilPackageSize = page.locator('');
    this.nonpareilPackageWeight = page.locator('');
    this.nonpareilPackagePrice = page.locator('');
    this.nonpareilCostCenter = page.locator(''); // required
    this.nonpareilRequestedBy = page.locator(''); //    required
    this.nonpareilModeOfShipment = page.locator(''); //  required
    this.nonpareilHandlingInstruction = page.locator('');
    this.nonpareilApprover = page.locator('');
    this.nonpareilIsPerishable = page.locator('');

    //  Sandbox J&T Express
    this.SANDBOX_JNT = page.locator('');
    this.jntSandboxPackageSize = page.locator('');
    this.jntSandboxPackageWeight = page.locator('');
    this.jntSandboxPackagePrice = page.locator('');

    //  Sandbox Provider
    this.SANDBOX_PROVIDER = page.locator('');
    this.providerSandboxPackageSize = page.locator('');
    this.providerSandboxPackageWeight = page.locator('');
    this.providerSandboxPackagePrice = page.locator('');

    //  Sandbox_DX
    this.SANDBOX_DX = page.locator('');
    this.dxSandboxPackageSize = page.locator('');
    this.dxSandboxPackageWeight = page.locator('');
    this.dxSandboxPackagePrice = page.locator('');

    //  Sandbox Business
    this.SANDBOX_BUSINESS = page.locator('');
    this.businessSandboxPackageSize = page.locator('');
    this.businessSandboxPackageWeight = page.locator('');
    this.businessSandboxPackagePrice = page.locator('');
  }
}

module.exports = { ScheduledCourier };
