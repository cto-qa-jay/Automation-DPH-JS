const { LoginPage } = require('./LoginPage');
const { MyPostPage } = require('./My_Post_Page/MyPostPage');
const { DeliveryDetails } = require('./My_Post_Page/Post_Creation/DeliveryDetails');
// const { OndemandCourier } = require('./My_Post_Page/Post_Creation/OndemandCourier');
const { PickupDetails } = require('./My_Post_Page/Post_Creation/PickupDetails');
//  const { ScheduledCourier } = require('./My_Post_Page/Post_Creation/ScheduledCourier');
const { ScheduledPostDetails } = require('./My_Post_Page/Post_Creation/ScheduledPostDetails');
const { SummaryDetails } = require('./My_Post_Page/Post_Creation/SummaryDetails');
const { AppSettings } = require('./Settings_Page/AppSettings');
const { MyPartners } = require('./Settings_Page/MyPartners');

class POManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    // this.ondemandCourier = new OndemandCourier(this.page);
    this.scheduledPostDetails = new ScheduledPostDetails(this.page);
    this.pickupDetails = new PickupDetails(this.page);
    this.deliveryDetails = new DeliveryDetails(this.page);
    this.myPostpage = new MyPostPage(this.page);
    this.summaryDetails = new SummaryDetails(this.page);
    this.myPartners = new MyPartners(this.page);
    this.appSettings = new AppSettings(this.page);
  }

  getAppSettings() {
    return this.appSettings;
  }

  getMyPartners() {
    return this.myPartners;
  }

  getLoginPage() {
    return this.loginPage;
  }

  getMyPostPage() {
    return this.MyPostPage;
  }

  getPostJobCreation() {
    return this.postJobCreation;
  }

  getOndemandCourier() {
    return this.ondemandCourier;
  }

  getSideNavigationMenu() {
    return this.sideNavigationMenu;
  }

  getScheduledPostDetails() {
    return this.scheduledPostDetails;
  }

  getPickupDetails() {
    return this.pickupDetails;
  }

  getDeliveryDetails() {
    return this.deliveryDetails;
  }

  getScheduledCourier() {
    return this.scheduledCourier;
  }

  getSummaryDetails() {
    return this.summaryDetails;
  }
}

module.exports = { POManager };
