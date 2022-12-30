const { ToastChecker } = require('./components/ToastChecker')
const { ViewHistory } = require('./components/ViewHistory')
const { LoginPage } = require('./LoginPage')
const { AddNewPostPage } = require('./MyPostsPage/AddNewPostPage/AddNewPostPage')
const { MyPostPage } = require('./MyPostsPage/MyPostPage')
const { PostJobCreation } = require('./MyPostsPage/PostJobCreation')
const { Providers } = require('./MyPostsPage/Providers')
const { MyPartnersPage } = require('./SettingsPage/MyPartnersPage')
const { SideNavigationMenu } = require('./SideNavigationMenu')

class POManager {
  constructor(page) {
    this.page = page
    this.loginPage = new LoginPage(this.page)
    this.postJobCreation = new PostJobCreation(this.page)
    this.sideNavigationMenu = new SideNavigationMenu(this.page)
    this.myPostPage = new MyPostPage(this.page)
    this.providers = new Providers(this.page)
    this.myPartnersPage = new MyPartnersPage(this.page)
    this.addNewPostPage = new AddNewPostPage(this.page)
    this.toastChecker = new ToastChecker(this.page)
    this.viewHistory = new ViewHistory(this.page)
  }

  getLoginPage() {
    return this.loginPage
  }

  getPostJobCreation() {
    return this.postJobCreation
  }

  getSideNavigationMenu() {
    return this.sideNavigationMenu
  }

  getMyPostPage() {
    return this.myPostPage
  }

  getAddNewPostPage() {
    return this.addNewPostPage
  }

  getProviders() {
    return this.providers
  }

  getMyPartnersPage() {
    return this.myPartnersPage
  }

  getToastChecker() {
    return this.toastChecker
  }

  getViewHistory() {
    return this.viewHistory
  }
}

module.exports = { POManager }
