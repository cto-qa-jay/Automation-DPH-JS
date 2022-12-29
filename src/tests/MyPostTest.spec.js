/* eslint-disable no-loop-func */

const { POManager } = require('../pageObjects/POManager')
const { DateandTimeSetter } = require('../utils/DateandTimeSetter')
const { LoginHelper } = require('../utils/LoginHelper')

const { test, expect } = require('@playwright/test')

require('dotenv').config()

test.describe.serial.only('Manual advanced creation of posts ON Auto-Accept', () => {
  let poManager
  let myPostPage
  let loginHelper
  let sideNavigation
  let myPartnersPage
  let addNewPost
  let toast
  let viewHistory
  let time

  test.beforeEach(async ({ page }) => {
    poManager = new POManager(page)
    myPostPage = poManager.getMyPostPage()
    sideNavigation = poManager.getSideNavigationMenu()
    myPartnersPage = poManager.getMyPartnersPage()
    viewHistory = poManager.getViewHistory()
    toast = poManager.getToastChecker(page)
    loginHelper = new LoginHelper(page)
    addNewPost = poManager.getAddNewPostPage()
    time = new DateandTimeSetter(page)

    await loginHelper.goToURL(process.env.URL_BETA)
    await loginHelper.loginHelper(process.env.provider_username, process.env.dph_password)
    await sideNavigation.gotoSettings('My Partners')
    await myPartnersPage.toggleOnAutoAccept()
    await sideNavigation.logout()
    await loginHelper.loginHelper(process.env.business_username, process.env.dph_password)
  })

  test(`@WEB - Create advanced post/orders for more than 15mins as auto-accept is ON`, async ({
    page,
  }) => {
    await myPostPage.clickAddNewPost()
    await addNewPost.clickOnDemand()
    await addNewPost.clickNext()
    await expect(await addNewPost.pickUpPage()).toBeEnabled()
    await addNewPost.fillUpReferenceNo('1')
    await addNewPost.clickUseLastProfile()
    await time.setTime(17)
    await addNewPost.clickNext()
    await expect(await addNewPost.deliveryPage()).toBeEnabled()
    await addNewPost.clickUseLastProfile()
    await addNewPost.clickNext()
    await addNewPost.selectFleetRider()
    await addNewPost.clickNext()
    await addNewPost.clickNext()
    await addNewPost.clickSaveButton()
    await expect(await toast.posToast()).toContainText('success')
    await expect(await myPostPage.getLatestCreatedJobStatus()).toContain('QUEUED')
    await myPostPage.clickLatestCreatedJob()
    await myPostPage.clickViewHistory()
    await expect(await viewHistory.latestStatus()).toContain('queued')
  })

  test(`@WEB - Create advanced post/orders for more than 1hour as auto-accept is ON`, async ({
    page,
  }) => {
    await myPostPage.clickAddNewPost()
    await addNewPost.clickOnDemand()
    await addNewPost.clickNext()
    await expect(await addNewPost.pickUpPage()).toBeEnabled()
    await addNewPost.fillUpReferenceNo('1')
    await addNewPost.clickUseLastProfile()
    await time.setTime(60)
    await addNewPost.clickNext()
    await expect(await addNewPost.deliveryPage()).toBeEnabled()
    await addNewPost.clickUseLastProfile()
    await addNewPost.clickNext()
    await addNewPost.selectFleetRider()
    await addNewPost.clickNext()
    await addNewPost.clickNext()
    await addNewPost.clickSaveButton()
    await expect(await toast.posToast()).toContainText('success')
    await expect(await myPostPage.getLatestCreatedJobStatus()).toContain('QUEUED')
    await myPostPage.clickLatestCreatedJob()
    await myPostPage.clickViewHistory()
    await expect(await viewHistory.latestStatus()).toContain('queued')
  })

  test(`@WEB - Create advanced post/orders for more than a day as auto-accept is ON`, async ({
    page,
  }) => {
    await myPostPage.clickAddNewPost()
    await addNewPost.clickOnDemand()
    await addNewPost.clickNext()
    await expect(await addNewPost.pickUpPage()).toBeEnabled()
    await addNewPost.fillUpReferenceNo('1')
    await addNewPost.clickUseLastProfile()
    await time.selectNextDay()
    await addNewPost.clickNext()
    await expect(await addNewPost.deliveryPage()).toBeEnabled()
    await addNewPost.clickUseLastProfile()
    await time.selectNextDay()
    await addNewPost.clickNext()
    await addNewPost.selectFleetRider()
    await addNewPost.clickNext()
    await addNewPost.clickNext()
    await addNewPost.clickSaveButton()
    await expect(await toast.posToast()).toContainText('success')
    await expect(await myPostPage.getLatestCreatedJobStatus()).toContain('QUEUED')
    await myPostPage.clickLatestCreatedJob()
    await myPostPage.clickViewHistory()
    await expect(await viewHistory.latestStatus()).toContain('queued')
  })

  test(`@WEB - Create not an advanced post/orders for less than 15mins as auto-accept is ON`, async ({
    page,
  }) => {
    await myPostPage.clickAddNewPost()
    await addNewPost.clickOnDemand()
    await addNewPost.clickNext()
    await expect(await addNewPost.pickUpPage()).toBeEnabled()
    await addNewPost.fillUpReferenceNo('1')
    await addNewPost.clickUseLastProfile()
    await addNewPost.clickNext()
    await expect(await addNewPost.deliveryPage()).toBeEnabled()
    await addNewPost.clickUseLastProfile()
    await addNewPost.clickNext()
    await addNewPost.selectFleetRider()
    await addNewPost.clickNext()
    await addNewPost.clickNext()
    await addNewPost.clickSaveButton()
    await expect(await toast.posToast()).toContainText('success')
    await page.waitForTimeout(5000)
    await expect(await myPostPage.getLatestCreatedJobStatus()).toContain('ACCEPTED')
    await myPostPage.clickLatestCreatedJob()
    await myPostPage.clickViewHistory()
    await expect(await viewHistory.latestStatus()).toContain('updated')
  })

  test(`@WEB - Create non-motorcycles advanced post/orders for more than 15mins as auto-accept is ON`, async ({
    page,
  }) => {
    await myPostPage.clickAddNewPost()
    await addNewPost.clickOnDemand()
    await addNewPost.clickNext()
    await expect(await addNewPost.pickUpPage()).toBeEnabled()
    await addNewPost.fillUpReferenceNo('1')
    await addNewPost.clickUseLastProfile()
    await time.setTime(17)
    await addNewPost.clickNext()
    await expect(await addNewPost.deliveryPage()).toBeEnabled()
    await addNewPost.clickUseLastProfile()
    await addNewPost.clickNext()
    await addNewPost.selectDifferentVehicle()
    await addNewPost.selectFleetRider()
    await addNewPost.clickNext()
    await addNewPost.clickNext()
    await addNewPost.clickSaveButton()
    await expect(await toast.posToast()).toContainText('success')
    await expect(await myPostPage.getLatestCreatedJobStatus()).toContain('QUEUED')
    await myPostPage.clickLatestCreatedJob()
    await myPostPage.clickViewHistory()
    await expect(await viewHistory.latestStatus()).toContain('queued')
  })

  test(`@WEB - Create non-motorcycles advanced post/orders for more than 1hour as auto-accept is ON`, async ({
    page,
  }) => {
    await myPostPage.clickAddNewPost()
    await addNewPost.clickOnDemand()
    await addNewPost.clickNext()
    await expect(await addNewPost.pickUpPage()).toBeEnabled()
    await addNewPost.fillUpReferenceNo('1')
    await addNewPost.clickUseLastProfile()
    await time.setTime(60)
    await addNewPost.clickNext()
    await expect(await addNewPost.deliveryPage()).toBeEnabled()
    await addNewPost.clickUseLastProfile()
    await addNewPost.clickNext()
    await addNewPost.selectDifferentVehicle()
    await addNewPost.selectFleetRider()
    await addNewPost.clickNext()
    await addNewPost.clickNext()
    await addNewPost.clickSaveButton()
    await expect(await toast.posToast()).toContainText('success')
    await expect(await myPostPage.getLatestCreatedJobStatus()).toContain('QUEUED')
    await myPostPage.clickLatestCreatedJob()
    await myPostPage.clickViewHistory()
    await expect(await viewHistory.latestStatus()).toContain('queued')
  })

  test(`@WEB - Create non-motorcycles advanced post/orders for more than a day as auto-accept is ON`, async ({
    page,
  }) => {
    await myPostPage.clickAddNewPost()
    await addNewPost.clickOnDemand()
    await addNewPost.clickNext()
    await expect(await addNewPost.pickUpPage()).toBeEnabled()
    await addNewPost.fillUpReferenceNo('1')
    await addNewPost.clickUseLastProfile()
    await time.selectNextDay()
    await addNewPost.clickNext()
    await expect(await addNewPost.deliveryPage()).toBeEnabled()
    await addNewPost.clickUseLastProfile()
    await time.selectNextDay()
    await addNewPost.clickNext()
    await addNewPost.selectDifferentVehicle()
    await addNewPost.selectFleetRider()
    await addNewPost.clickNext()
    await addNewPost.clickNext()
    await addNewPost.clickSaveButton()
    await expect(await toast.posToast()).toContainText('success')
    await expect(await myPostPage.getLatestCreatedJobStatus()).toContain('QUEUED')
    await myPostPage.clickLatestCreatedJob()
    await myPostPage.clickViewHistory()
    await expect(await viewHistory.latestStatus()).toContain('queued')
  })

  test(`@WEB - Create non-motorcycles not an advanced post/orders for less than 15mins as auto-accept is ON`, async ({
    page,
  }) => {
    await myPostPage.clickAddNewPost()
    await addNewPost.clickOnDemand()
    await addNewPost.clickNext()
    await expect(await addNewPost.pickUpPage()).toBeEnabled()
    await addNewPost.fillUpReferenceNo('1')
    await addNewPost.clickUseLastProfile()
    await addNewPost.clickNext()
    await expect(await addNewPost.deliveryPage()).toBeEnabled()
    await addNewPost.clickUseLastProfile()
    await addNewPost.clickNext()
    await addNewPost.selectDifferentVehicle()
    await addNewPost.selectFleetRider()
    await addNewPost.clickNext()
    await addNewPost.clickNext()
    await addNewPost.clickSaveButton()
    await expect(await toast.posToast()).toContainText('success')
    await page.waitForTimeout(5000)
    await expect(await myPostPage.getLatestCreatedJobStatus()).toContain('ACCEPTED')
    await myPostPage.clickLatestCreatedJob()
    await myPostPage.clickViewHistory()
    await expect(await viewHistory.latestStatus()).toContain('updated')
  })

  test.afterAll(async ({ page }) => {
    await page.close()
  })
})

test.describe.serial('Manual advanced creation of posts ON Auto-Accept', () => {
  let poManager
  let myPostPage
  let loginHelper
  let sideNavigation
  let myPartnersPage
  let addNewPost
  let toast
  let viewHistory
  let time

  test.beforeEach(async ({ page }) => {
    poManager = new POManager(page)
    myPostPage = poManager.getMyPostPage()
    sideNavigation = poManager.getSideNavigationMenu()
    myPartnersPage = poManager.getMyPartnersPage()
    viewHistory = poManager.getViewHistory()
    toast = poManager.getToastChecker(page)
    loginHelper = new LoginHelper(page)
    addNewPost = poManager.getAddNewPostPage()
    time = new DateandTimeSetter(page)

    loginHelper.betaProviderLoginHelper()
    await sideNavigation.gotoSettings('My Partners')
    await myPartnersPage.toggleOffAutoAccept()
    await sideNavigation.logout()
    loginHelper.betaBusinessLoginHelper()
  })

  // OFF

  test(`@WEB - Create advanced post/orders for more than 15mins as auto-accept is OFF`, async ({
    page,
  }) => {
    await myPostPage.clickAddNewPost()
    await addNewPost.clickOnDemand()
    await addNewPost.clickNext()
    await expect(await addNewPost.pickUpPage()).toBeEnabled()
    await addNewPost.fillUpReferenceNo('1')
    await addNewPost.clickUseLastProfile()
    await time.setTime(17)
    await addNewPost.clickNext()
    await expect(await addNewPost.deliveryPage()).toBeEnabled()
    await addNewPost.clickUseLastProfile()
    await addNewPost.clickNext()
    await addNewPost.selectFleetRider()
    await addNewPost.clickNext()
    await addNewPost.clickNext()
    await addNewPost.clickSaveButton()
    await expect(await toast.posToast()).toContainText('success')
    await expect(await myPostPage.getLatestCreatedJobStatus()).toContain('ASSIGNED')
    await myPostPage.clickLatestCreatedJob()
    await myPostPage.clickViewHistory()
    await expect(await viewHistory.latestStatus()).toContain('queued')
  })

  test(`@WEB - Create advanced post/orders for more than 1hour as auto-accept is OFF`, async ({
    page,
  }) => {
    await myPostPage.clickAddNewPost()
    await addNewPost.clickOnDemand()
    await addNewPost.clickNext()
    await expect(await addNewPost.pickUpPage()).toBeEnabled()
    await addNewPost.fillUpReferenceNo('1')
    await addNewPost.clickUseLastProfile()
    await time.setTime(60)
    await addNewPost.clickNext()
    await expect(await addNewPost.deliveryPage()).toBeEnabled()
    await addNewPost.clickUseLastProfile()
    await addNewPost.clickNext()
    await addNewPost.selectFleetRider()
    await addNewPost.clickNext()
    await addNewPost.clickNext()
    await addNewPost.clickSaveButton()
    await expect(await toast.posToast()).toContainText('success')
    await expect(await myPostPage.getLatestCreatedJobStatus()).toContain('ASSIGNED')
    await myPostPage.clickLatestCreatedJob()
    await myPostPage.clickViewHistory()
    await expect(await viewHistory.latestStatus()).toContain('queued')
  })

  test(`@WEB - Create advanced post/orders for more than a day as auto-accept is OFF`, async ({
    page,
  }) => {
    await myPostPage.clickAddNewPost()
    await addNewPost.clickOnDemand()
    await addNewPost.clickNext()
    await expect(await addNewPost.pickUpPage()).toBeEnabled()
    await addNewPost.fillUpReferenceNo('1')
    await addNewPost.clickUseLastProfile()
    await time.selectNextDay()
    await addNewPost.clickNext()
    await expect(await addNewPost.deliveryPage()).toBeEnabled()
    await addNewPost.clickUseLastProfile()
    await time.selectNextDay()
    await addNewPost.clickNext()
    await addNewPost.selectFleetRider()
    await addNewPost.clickNext()
    await addNewPost.clickNext()
    await addNewPost.clickSaveButton()
    await expect(await toast.posToast()).toContainText('success')
    await expect(await myPostPage.getLatestCreatedJobStatus()).toContain('ASSIGNED')
    await myPostPage.clickLatestCreatedJob()
    await myPostPage.clickViewHistory()
    await expect(await viewHistory.latestStatus()).toContain('queued')
  })

  test(`@WEB - Create not an advanced post/orders for less than 15mins as auto-accept is OFF`, async ({
    page,
  }) => {
    await myPostPage.clickAddNewPost()
    await addNewPost.clickOnDemand()
    await addNewPost.clickNext()
    await expect(await addNewPost.pickUpPage()).toBeEnabled()
    await addNewPost.fillUpReferenceNo('1')
    await addNewPost.clickUseLastProfile()
    await addNewPost.clickNext()
    await expect(await addNewPost.deliveryPage()).toBeEnabled()
    await addNewPost.clickUseLastProfile()
    await addNewPost.clickNext()
    await addNewPost.selectFleetRider()
    await addNewPost.clickNext()
    await addNewPost.clickNext()
    await addNewPost.clickSaveButton()
    await expect(await toast.posToast()).toContainText('success')
    await expect(await myPostPage.getLatestCreatedJobStatus()).toContain('ASSIGNED')
    await myPostPage.clickLatestCreatedJob()
    await myPostPage.clickViewHistory()
    await expect(await viewHistory.latestStatus()).toContain('queued')
  })

  test(`@WEB - Create non-motorcycles advanced post/orders for more than 15mins as auto-accept is OFF`, async ({
    page,
  }) => {
    await myPostPage.clickAddNewPost()
    await addNewPost.clickOnDemand()
    await addNewPost.clickNext()
    await expect(await addNewPost.pickUpPage()).toBeEnabled()
    await addNewPost.fillUpReferenceNo('1')
    await addNewPost.clickUseLastProfile()
    await time.setTime(17)
    await addNewPost.clickNext()
    await expect(await addNewPost.deliveryPage()).toBeEnabled()
    await addNewPost.clickUseLastProfile()
    await addNewPost.clickNext()
    await addNewPost.selectDifferentVehicle()
    await addNewPost.selectFleetRider()
    await addNewPost.clickNext()
    await addNewPost.clickNext()
    await addNewPost.clickSaveButton()
    await expect(await toast.posToast()).toContainText('success')
    await expect(await myPostPage.getLatestCreatedJobStatus()).toContain('ASSIGNED')
    await myPostPage.clickLatestCreatedJob()
    await myPostPage.clickViewHistory()
    await expect(await viewHistory.latestStatus()).toContain('queued')
  })

  test(`@WEB - Create non-motorcycles advanced post/orders for more than 1hour as auto-accept is OFF`, async ({
    page,
  }) => {
    await myPostPage.clickAddNewPost()
    await addNewPost.clickOnDemand()
    await addNewPost.clickNext()
    await expect(await addNewPost.pickUpPage()).toBeEnabled()
    await addNewPost.fillUpReferenceNo('1')
    await addNewPost.clickUseLastProfile()
    await time.setTime(60)
    await addNewPost.clickNext()
    await expect(await addNewPost.deliveryPage()).toBeEnabled()
    await addNewPost.clickUseLastProfile()
    await addNewPost.clickNext()
    await addNewPost.selectDifferentVehicle()
    await addNewPost.selectFleetRider()
    await addNewPost.clickNext()
    await addNewPost.clickNext()
    await addNewPost.clickSaveButton()
    await expect(await toast.posToast()).toContainText('success')
    await expect(await myPostPage.getLatestCreatedJobStatus()).toContain('ASSIGNED')
    await myPostPage.clickLatestCreatedJob()
    await myPostPage.clickViewHistory()
    await expect(await viewHistory.latestStatus()).toContain('queued')
  })

  test(`@WEB - Create non-motorcycles advanced post/orders for more than a day as auto-accept is OFF`, async ({
    page,
  }) => {
    await myPostPage.clickAddNewPost()
    await addNewPost.clickOnDemand()
    await addNewPost.clickNext()
    await expect(await addNewPost.pickUpPage()).toBeEnabled()
    await addNewPost.fillUpReferenceNo('1')
    await addNewPost.clickUseLastProfile()
    await time.selectNextDay()
    await addNewPost.clickNext()
    await expect(await addNewPost.deliveryPage()).toBeEnabled()
    await addNewPost.clickUseLastProfile()
    await time.selectNextDay()
    await addNewPost.clickNext()
    await addNewPost.selectDifferentVehicle()
    await addNewPost.selectFleetRider()
    await addNewPost.clickNext()
    await addNewPost.clickNext()
    await addNewPost.clickSaveButton()
    await expect(await toast.posToast()).toContainText('success')
    await expect(await myPostPage.getLatestCreatedJobStatus()).toContain('ASSIGNED')
    await myPostPage.clickLatestCreatedJob()
    await myPostPage.clickViewHistory()
    await expect(await viewHistory.latestStatus()).toContain('queued')
  })

  test(`@WEB - Create non-motorcycles not an advanced post/orders for less than 15mins as auto-accept is OFF`, async ({
    page,
  }) => {
    await myPostPage.clickAddNewPost()
    await addNewPost.clickOnDemand()
    await addNewPost.clickNext()
    await expect(await addNewPost.pickUpPage()).toBeEnabled()
    await addNewPost.fillUpReferenceNo('1')
    await addNewPost.clickUseLastProfile()
    await addNewPost.clickNext()
    await expect(await addNewPost.deliveryPage()).toBeEnabled()
    await addNewPost.clickUseLastProfile()
    await addNewPost.clickNext()
    await addNewPost.selectDifferentVehicle()
    await addNewPost.selectFleetRider()
    await addNewPost.clickNext()
    await addNewPost.clickNext()
    await addNewPost.clickSaveButton()
    await expect(await toast.posToast()).toContainText('success')
    await expect(await myPostPage.getLatestCreatedJobStatus()).toContain('ASSIGNED')
    await myPostPage.clickLatestCreatedJob()
    await myPostPage.clickViewHistory()
    await expect(await viewHistory.latestStatus()).toContain('queued')
  })

  test.afterAll(async ({ page }) => {
    await page.close()
  })
})
