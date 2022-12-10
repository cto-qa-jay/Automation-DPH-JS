const { LoginPage } = require('./LoginPage');
const { SideNavigationMenu } = require('./SideNavigationMenu');
const { MyPostPage } = require('./MyPostsPage/MyPostPage');
const { PostJobCreation } = require('./MyPostsPage/PostJobCreation');
const { Providers } = require('./MyPostsPage/Providers');

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
