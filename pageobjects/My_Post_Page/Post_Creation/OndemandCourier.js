class OndemandCourier {
  constructor(page) {
    this.page = page;
    this.titlePage = page.locator('//div[@class="title tw-pt-2"]');
    this.courierNextStep = page.locator('button', { name: ' Previous Step' });
    this.courierPreviousStep = page.locator('button', { name: 'Next Step ' });
    this.metafieldNextStep = page.locator('button', { name: ' Previous Step' });
    this.metafieldPreviousStep = page.locator('button', { name: 'Next Step ' });

    //  FLEET PH INTERNAL PROVIDER QA
    this.FLEET_PROVIDER_QA = page.locator('(//div[@class="indicator-content"])[1]');
    this.fleetDeliveryDate = page.locator(
      '(//div[@class="courier_date"]//i[@class="fas fa-calendar-alt"])[1]'
    );
    this.fleetDeliveryTime = page.locator(
      '(//div[@class="courier_date"]//i[@class="fas fa-calendar-check"])[1]'
    );
    this.fleetQuotePrice = page.locator('(//div[@class="rate"])[1]');
    this.FleetUsername = '';
    this.FleetPassword = '';

    //  Sandbox OnDemand Provider
    this.SANDBOX_ONDEMAND_PROVIDER = page.locator('(//div[@class="indicator-content"])[2]');
    this.sandboxOndemandDeliveryDate = page.locator(
      '(//div[@class="courier_date"]//i[@class="fas fa-calendar-alt"])[2]'
    );
    this.sandboxOndemandDeliveryTime = page.locator(
      '(//div[@class="courier_date"]//i[@class="fas fa-calendar-check"])[2]'
    );
    this.sandboxOndemandUsername = '';
    this.sandboxOndemandPassword = '';

    //  Lalamove
    this.LALAMOVE = page.locator('(//div[@class="indicator-content"])[3]');
    this.lalamoveDeliveryDate = page.locator(
      '(//div[@class="courier_date"]//i[@class="fas fa-calendar-alt"])[3]'
    );
    this.lalamoveDeliveryTime = page.locator(
      '(//div[@class="courier_date"]//i[@class="fas fa-calendar-check"])[3]'
    );
    this.lalamoveUsername = '';
    this.lalamovePassword = '';

    //  Sandbox Transportify
    this.SANDBOX_TRANSPORTIFY = page.locator('(//div[@class="indicator-content"])[4]');
    this.sandboxTransportifyDeliveryDate = page.locator(
      '(//div[@class="courier_date"]//i[@class="fas fa-calendar-alt"])[4]'
    );
    this.sandboxTransportifyDeliveryTime = page.locator(
      '(//div[@class="courier_date"]//i[@class="fas fa-calendar-check"])[4]'
    );
    this.sandboxTransportifyUsername = '';
    this.sandboxTransportifyPassword = '';

    //  Mr Speedy
    this.MRSPEEDY = page.locator('(//div[@class="indicator-content"])[5]');
    this.mrspeedyDeliveryDate = page.locator(
      '(//div[@class="courier_date"]//i[@class="fas fa-calendar-alt"])[5]'
    );
    this.mrspeedyDeliveryTime = page.locator(
      '(//div[@class="courier_date"]//i[@class="fas fa-calendar-check"])[5]'
    );

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

  async clickMrSpeedy() {
    await this.MRSPEEDY.click();
  }

  async clickCourierNextStep() {
    await this.courierNextStep.click();
  }

  async clickMetafieldNextStep() {
    await this.metafieldNextStep.click();
  }
}
const mrspeedyUsername = 'admin@mrspeedy.ph';
const mrspeedyPassword = 'fsteb869h';
module.exports = { OndemandCourier };
module.exports = { mrspeedyUsername, mrspeedyPassword };
