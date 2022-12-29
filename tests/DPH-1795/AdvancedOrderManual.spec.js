// const { LoginPage } = require('../../pageobjects/LoginPage');
// const { DeliveryDetails } = require('../../pageobjects/My_Post_Page/Post_Creation/DeliveryDetails');
// const { PickupDetails } = require('../../pageobjects/My_Post_Page/Post_Creation/PickupDetails');
// const {
//   ScheduledCourier,
// } = require('../../pageobjects/My_Post_Page/Post_Creation/ScheduledCourier');
// const {
//   ScheduledPostDetails,
// } = require('../../pageobjects/My_Post_Page/Post_Creation/ScheduledPostDetails');
// const { SummaryDetails } = require('../../pageobjects/My_Post_Page/Post_Creation/SummaryDetails');
import {
  mrspeedyUsername,
  mrspeedyPassword,
} from '../../pageobjects/My_Post_Page/Post_Creation/OndemandCourier';

const { POManager } = require('../../pageobjects/POManager');

const { test } = require('@playwright/test');

const date = new Date().toJSON();
const features = 'DPH-1795';
let poManager;
let loginPage;
let myPostPage;
let scheduledPostDetails;
let pickupDetails;
let deliveryDetails;
let ondemandCourier;
// let scheduledCourier;
let summaryDetails;
let myPartners;

test.describe.only('ADVANCED ORDER QUEUING TEST SUITES', () => {
  test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    loginPage = poManager.getLoginPage();
    myPostPage = poManager.getMyPostPage();
    scheduledPostDetails = poManager.getScheduledPostDetails();
    pickupDetails = poManager.getPickupDetails();
    deliveryDetails = poManager.getDeliveryDetails();
    ondemandCourier = poManager.getOndemandCourier();
    myPartners = poManager.getMyPartners();
    summaryDetails = poManager.getSummaryDetails();
  });

  test('@TC 1 - Create advanced posts/orders for more than 15mins as auto-accept is ON', async () => {
    await loginPage.stagingLogin(mrspeedyUsername, mrspeedyPassword);
    await myPostPage.clickSettings();
    await myPartners.clickMyPartners();
    await myPartners.clickAutoAcceptOn();
    await loginPage.stagingLogin('rm@qa.fleet.ph', 'LMI@2020');
    await scheduledPostDetails.clickAddNewPost();
    await scheduledPostDetails.clickOndemandDelivery();
    await scheduledPostDetails.clickNextStep();
    await pickupDetails.enterReferenceNumber(features + date);
    await pickupDetails.clickPickupDateAndTimePicker();
    await pickupDetails.clickPickupTimePicker();
    await pickupDetails.clickPickupIncreaseMinutes();
    await pickupDetails.clickPickupUseLastProfile();
    await pickupDetails.clickPickupNextStep();
    await deliveryDetails.clickDeliveryUseLastProfile();
    await pickupDetails.clickDeliveryNextStep();
    await ondemandCourier.clickMrSpeedy();
    await ondemandCourier.clickCourierPreviousStep();
    await ondemandCourier.clickMetafieldNextStep();
    await summaryDetails.clickSaveButton();
  });
});
