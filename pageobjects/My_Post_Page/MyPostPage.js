class MyPostPage {
  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator('text=My Posts');

    //  Add Post button
    this.addNewPostButton = page.getByRole('button', { name: ' Add New Post' });

    //  Filter section
    this.searchBy = page.locator('.search-input .block');
    this.searchByReferenceNo = page.locator('#react-select-2-option-0');
    this.searchByCustomerName = page.locator('#react-select-2-option-1');
    this.searchByPickupCity = page.locator('#react-select-2-option-2');
    this.searchByPostID = page.locator('#react-select-2-option-3');
    this.searchField = page.locator('[type="search"]');

    //  Filter Hubs/Stores
    this.filterByAllHubs = page.locator(
      'div:nth-child(2) > div:nth-child(2) > .css-1pcexqc-container > .css-bg1rzq-control'
    );
    this.filterByFirstStore = page.locator('#react-select-3-option-1');
    this.filterBySecondStore = page.locator('#react-select-3-option-2');
    this.filterByThirdStore = page.locator('#react-select-3-option-3');

    //  Filter All Status
    this.filterByAllStatus = page.getByText('All Status');
    this.filterByAssignedStatus = page.locator('.select-item-label').first();
    this.filterByAccepterStatus = page.locator('div:nth-child(2) > .select-item-label');
    this.filterByAssigningRiderStatus = page.locator('div:nth-child(3) > .select-item-label');
    this.filterByStartedStatus = page.locator('div:nth-child(4) > .select-item-label');
    this.filterByDonePickupStatus = page.locator('div:nth-child(5) > .select-item-label');
    this.filterByInTransitForReturnStatus = page.locator('div:nth-child(6) > .select-item-label');
    this.filterByFailedDeliveryStatus = page.locator('div:nth-child(7) > .select-item-label');
    this.filterByFailedPickupStatus = page.locator('div:nth-child(8) > .select-item-label');
    this.filterByFailedReturnStatus = page.locator('div:nth-child(9) > .select-item-label');

    //  Filter All Preffered Partners
    this.filterByAllPrefferedPartners = page.locator(
      'div:nth-child(4) > div:nth-child(2) > .css-1pcexqc-container > .css-bg1rzq-control'
    );
    let locationNumbersOfPrefferedPartners;
    this.filterByPartners = page.locator(
      `#react-select-4-option-${{ locationNumbersOfPrefferedPartners }}`
    );

    //  Filter By Date
    this.filterByAsOfToday = page.getByRole('button', { name: ' As of Today ' });
    this.filterByToday = page.locator('text=Today');
    this.filterByYesterday = page.locator('text=Yesterday');
    this.filterByLast7Days = page.locator('text=Last 7 Days');
    this.filterByLast30Days = page.locator('text=Last 30 days');
    this.filterByThisMonth = page.locator('text=This Month');
    this.filterByLastMonth = page.locator('text=Last Month');

    // All Tabs
    this.allTabLink = page.locator('');
    this.refNoColumn = page.locator('');
    this.customerNameColumn = page.locator('');
    this.prefferedPartnerColumn = page.locator('');
    this.timeColumn = page.locator('');
    this.pickupCityColumn = page.locator('');
    this.deliveryCityColumn = page.locator('');
    this.tagsColumn = page.locator('');
    this.completionDateColumn = page.locator('');
    this.postsJobArrow = page.locator('');

    // Pagination
    this.nextPage = page.locator('');
    this.previousPage = page.locator('');

    // Cancelled, Returned & Rejected
    this.cancelledReturnRejectedTab = page.locator('');
    this.countNotification = page.locator('');

    // Search Posts Result
    this.referenceNoResult = page.locator('.list-item');
    this.customerResult = page.locator('.list-item .customer');
    this.pickupCityResult = page.locator('.list-item .pickup-city');
    this.postIdResult = page.locator('');

    // All hubs Result
    this.hubsResult = page.locator('');

    // Status result
    this.statusResult = page.locator('');

    // Provider Result
    this.providersResult = page.locator('');

    // Settings
    this.settings = page.locator(
      '(//div[@class="logo-container d-flex justify-content-center align-items-center"]//i[@class="fa fa-cog glow-blue"])[1]'
    );

    // Account Profile
    this.logout = page.locator('//button[@class="btn btn-switch lg-margin-left logout"]');
  }

  async clickSettings() {
    await this.settings.click();
  }

  async clickLogout() {
    await this.logout.click();
  }

  async searchReferenceNo(referenceno) {
    await this.searchField.click();
    await this.searchField.type(referenceno);
    await this.page.keyboard.press('Enter');
  }

  async referenceResult() {
    await this.referenceNoResult.hover();
    await this.referenceNoResult.allTextContents();
  }
}

module.exports = { MyPostPage };
