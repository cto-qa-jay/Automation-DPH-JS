const { LoginPage } = require('./LoginPage');
const { MyPostPage } = require('./My Posts Page/MyPostPage');
const { PostJobCreation } = require('./My Posts Page/PostJobCreation');
const { Providers } = require('./My Posts Page/Providers');
const { SideNavigationMenu } = require('./SideNavigationMenu');

class POManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.postJobCreation = new PostJobCreation(this.page);
    this.sideNavigationMenu = new SideNavigationMenu(this.page);
    this.myPostPage = new MyPostPage(this.page);
    this.providers = new Providers(this.page);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getPostJobCreation() {
    return this.postJobCreation;
  }

  getSideNavigationMenu() {
    return this.sideNavigationMenu;
  }

  getMyPostPage() {
    return this.myPostPage;
  }

  getProviders() {
    return this.providers;
  }
}

module.exports = { POManager };
