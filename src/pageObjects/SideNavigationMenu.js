class SideNavigationMenu {
  constructor(page) {
    this.page = page
    this.myPostsIcon = page.locator('.sideNav-header .nav-options span >> nth=0')
    this.myOpportunitiesIcon = page.locator('.sideNav-header .nav-options span >> nth=1')
    this.myDraftsIcon = page.locator('.sideNav-header .nav-options span >> nth=2')
    this.myReportsIcon = page.locator('.sideNav-header .nav-options span >> nth=3')
    this.notificationIcon = page.locator('.sideNav-footer .fa-bell')
    this.settingsGearIcon = page.locator('.fa-cog')
    this.appSettings = page.locator('text=App Settings')
    this.providerSetup = page.locator('text=Provider Setup')
    this.businessHourAndCapacity = page.locator('text=Business Hours & Capacity')
    this.myPartners = page.locator('text=My Partners')
    this.autoReAttempt = page.locator('text=Auto Re-attemp')
    this.triggers = page.locator('text=Triggers')
    this.metaConfiguration = page.locator('text=Meta Configuration')
    this.printSetup = page.locator('text=Print Setup')
    this.closeToolTip = page.locator('.settings-container .tooltip-close')
    this.userIcon = page.locator('.fa-user')
    this.logoutButton = page.locator('text=Logout')
  }

  async gotoSettings(settingsName) {
    switch (settingsName) {
      case 'App Settings':
        await this.settingsGearIcon.click()
        await this.appSettings.click()
        break
      case 'Provider Setup':
        await this.settingsGearIcon.click()
        await this.providerSetup.click()
        await this.closeToolTip.click()
        break
      case 'Business Hours & Capacity':
        await this.settingsGearIcon.click()
        await this.businessHourAndCapacity.click()
        await this.closeToolTip.click()
        break
      case 'My Partners':
        await this.settingsGearIcon.click()
        await this.myPartners.click()
        await this.closeToolTip.click()
        break
      case 'Auto Re-attemp':
        await this.settingsGearIcon.click()
        await this.autoReAttempt.click()
        await this.closeToolTip.click()
        break
      case 'Triggers':
        await this.settingsGearIcon.click()
        await this.triggers.click()
        await this.closeToolTip.click()
        break
      case 'Meta Configuration':
        await this.settingsGearIcon.click()
        await this.metaConfiguration.click()
        break
      case 'Print Setup':
        await this.settingsGearIcon.click()
        await this.printSetup.click()
        break
      default:
        throw new Error('Settings page does not exist..')
    }
  }

  async pageNavigation(selectedIcon) {
    switch (selectedIcon) {
      case 'My Post':
        await this.myPostsIcon.click()
        break
      case 'My Opportunities':
        await this.myOpportunitiesIcon.click()
        break
      case 'Drafts':
        await this.myDraftsIcon.click()
        break
      case 'Reports':
        await this.myReportsIcon.click()
        break
      default:
        throw new Error('Page not found..')
    }
  }

  async logout() {
    await this.userIcon.click()
    await this.logoutButton.click()
  }
}

module.exports = { SideNavigationMenu }
