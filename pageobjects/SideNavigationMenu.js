class SideNavigationMenu{

    constructor(page){
        this.page = page;
        this.myPostsIcon = page.locator('');
        this.myOpportunitiesIcon = page.locator('');
        this.myDraftsIcon = page.locator('');
        this.myReportsIcon = page.locator('');
        this.notificationIcon = page.locator('');
        this.settingsGearIcon = page.locator('');
        this.appSettings = page.locator('');
        this.providerSetup = page.locator('');
        this.businessHourAndCapacity = page.locator('');
        this.myPartners = page.locator('');
        this.autoReAttempt = page.locator('');
        this.triggers = page.locator('');
        this.metaConfiguration = page.locator('');
        this.printSetup = page.locator('')
    }


}

module.exports = {SideNavigationMenu};