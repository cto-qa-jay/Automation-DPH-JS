class MyPostPage {
  constructor(page) {
    this.page = page
    this.pageTitle = page.locator('text=My Posts')

    // Add Post button
    this.addNewPostButton = page.getByRole('button', { name: ' Add New Post' })

    // Filter section
    this.searchBy = page.locator('.search-input .block')
    this.searchByReferenceNo = page.locator('#react-select-2-option-0')
    this.searchByCustomerName = page.locator('#react-select-2-option-1')
    this.searchByPickupCity = page.locator('#react-select-2-option-2')
    this.searchByPostID = page.locator('#react-select-2-option-3')
    this.searchField = page.locator('[type="search"]')

    // Filter Hubs/Stores
    this.filterByAllHubs = page.locator(
      'div:nth-child(2) > div:nth-child(2) > .css-1pcexqc-container > .css-bg1rzq-control'
    )
    this.filterByFirstStore = page.locator('#react-select-3-option-1')
    this.filterBySecondStore = page.locator('#react-select-3-option-2')
    this.filterByThirdStore = page.locator('#react-select-3-option-3')

    // Filter All Status
    this.filterByAllStatus = page.getByText('All Status')
    this.filterByAssignedStatus = page.locator('.select-item-label').first()
    this.filterByAccepterStatus = page.locator('div:nth-child(2) > .select-item-label')
    this.filterByAssigningRiderStatus = page.locator('div:nth-child(3) > .select-item-label')
    this.filterByStartedStatus = page.locator('div:nth-child(4) > .select-item-label')
    this.filterByDonePickupStatus = page.locator('div:nth-child(5) > .select-item-label')
    this.filterByInTransitForReturnStatus = page.locator('div:nth-child(6) > .select-item-label')
    this.filterByFailedDeliveryStatus = page.locator('div:nth-child(7) > .select-item-label')
    this.filterByFailedPickupStatus = page.locator('div:nth-child(8) > .select-item-label')
    this.filterByFailedReturnStatus = page.locator('div:nth-child(9) > .select-item-label')

    // Filter All Preffered Partners
    this.filterByAllPrefferedPartners = page.locator(
      'div:nth-child(4) > div:nth-child(2) > .css-1pcexqc-container > .css-bg1rzq-control'
    )
    let locationNumbersOfPrefferedPartners
    this.filterByPartners = page.locator(
      `#react-select-4-option-${{ locationNumbersOfPrefferedPartners }}`
    )

    // Filter By Date
    this.filterByAsOfToday = page.getByRole('button', { name: ' As of Today ' })
    this.filterByToday = page.locator('text=Today')
    this.filterByYesterday = page.locator('text=Yesterday')
    this.filterByLast7Days = page.locator('text=Last 7 Days')
    this.filterByLast30Days = page.locator('text=Last 30 days')
    this.filterByThisMonth = page.locator('text=This Month')
    this.filterByLastMonth = page.locator('text=Last Month')

    // All Tabs
    this.allTabLink = page.locator('')
    this.refNoColumn = page.locator('')
    this.customerNameColumn = page.locator('')
    this.prefferedPartnerColumn = page.locator('')
    this.timeColumn = page.locator('')
    this.pickupCityColumn = page.locator('')
    this.deliveryCityColumn = page.locator('')
    this.tagsColumn = page.locator('')
    this.completionDateColumn = page.locator('')
    this.postsJobArrow = page.locator('')

    // Cancelled, Returned & Rejected
    this.cancelledReturnRejectedTab = page.locator('')
    this.countNotification = page.locator('')

    this.referenceNoResult = page.locator('.list-item')
    this.customerResult = page.locator('.list-item .customer')
    this.pickupCityResult = page.locator('.list-item .pickup-city')

    // Click top most job
    this.topMostJob = page.locator('.list-item-container >> nth=0')
    this.topMostJobStatus = page.locator('.status-icon >> nth=0')

    // Collapsed Job Buttons
    this.viewHistoryButton = page.locator('text=View History')
    this.printWaybillButton = page.locator('text=Print Waybill')
  }

  async searchReferenceNo(referenceno) {
    await this.searchField.click()
    await this.searchField.type(referenceno)
    await this.page.keyboard.press('Enter')
  }

  async referenceResult() {
    await this.referenceNoResult.hover()
    await this.referenceNoResult.allTextContents()
  }

  async clickAddNewPost() {
    await this.addNewPostButton.click()
  }

  async getLatestCreatedJobStatus() {
    const value = await this.topMostJobStatus.getAttribute('status')

    return value.toString()
  }

  async clickLatestCreatedJob() {
    await this.topMostJob.click()
  }

  async clickViewHistory() {
    await this.viewHistoryButton.click()
  }
}

module.exports = { MyPostPage }
