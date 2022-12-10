// class OndemandProviders{
//     constructor(page){
//         this.page = page;

//         //Staging couriers
//         this.FLEET_PH_INTERNAL_PROVIDER_QA = page.locator('');
//         this.SANDBOX_ONDEMAND_PROVIDER = page.locator('');
//         this.LALAMOVE = page.locator('');
//         this.SANDBOX_TRANSFORTIFY = page.locator('');
//         this.MRSPEEDY = page.locator('');s
//         this.TRANSFORTIFY = page.locator('');
//         this.GRAB = page.locator('');
//         this.SANDBOX_FLEET_PROVIDER = page.locator('');
//         this.SANDBOX_MRSPEEDY = page.locator('');
//         this.FOOD_PANDA_PHILIPPINES = page.locator('');
//     }

//     async LalamoveMetafields(){
//         this.selectServiceType = page.locator('');
//         await this.selectServiceType.click();
//     }

//     async MrspeedyMetafields(){
//         this.selectVehicle = page.locator('');
//         this.selectIncludeMotobox = page.locator('');
//         await this.selectVehicle.click();
//         await this.selectIncludeMotobox.click();
//     }
// }
// module.exports = {OndemandProviders};

class Providers {
  constructor(page) {
    this.page = page;

    // Staging couriers
    this.PRIME_MOVERS_TOTAL_LOGISTICS = page.getByText('Prime Movers Total Logistics, Inc.');
    this.LIBCAP_SUPER_EXPRESS_CORP = page.getByText('LIBCAP Super Express Corporation');
    this.XIMEX_DELIVERY_EXPRESS_INC = page.locator('');
    this.SANDBOX_QUADX = page.locator('');
    this.SANDBOX_NINJAVAN = page.locator('');
    this.SANDBOX_XDE = page.locator('');
    this.SANDBOX_DEV = page.locator('');
    this.ENTREGO_EXPRESS_GLOBE = page.locator('');
    this.ENTREGO_EXPRESS_CORP = page.locator('');
    this.NONPAREIL_INTERNATIONAL = page.locator('');
    this.ENTREGO_EXPRESS_MARKET = page.locator('');
    this.SANDBOX_JNT_EXPRESS = page.locator('');
    this.SANDBOX_PROVIDER = page.locator('');
    this.NINJAVAN = page.locator('');
    this.SANDBOX_DX = page.locator('');
    this.QUADX_ZONE = page.locator('');
    this.SANDBOX_BUSINESS = page.locator('');
  }

  async clickPrimeMovers() {
    return this.PRIME_MOVERS_TOTAL_LOGISTICS.click();
  }
}
module.exports = { Providers };

// class ProvidersMetafields{
//     constructor(page){
//         this.page = page;
//     }
// }

// module.exports = {ProvidersMetafields};
