const { POManager } = require('../pageObjects/POManager');
const { LoginHelper } = require('../utils/LoginHelper');

const { test } = require('@playwright/test');

let poManager;
let loginHelper;
let loginPage;
let postJobCreation;
let providers;

test.describe.only('LOGIN TEST SUITES', () => {
  test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    loginHelper = new LoginHelper(page);
    loginPage = poManager.getLoginPage();
    postJobCreation = poManager.getPostJobCreation();
    providers = poManager.getProviders();
  });

  test('@Web - Create New Post Test', async () => {
    await loginHelper.stagingLoginHelper();
    await loginPage.checkErrorMessage();
    await postJobCreation.clickAddNewPost();
    await postJobCreation.selectOndemandDelivery();
    await postJobCreation.inputReferenceNumber('test-automation-1');
    await postJobCreation.clickNextStep();
    await postJobCreation.clickUseLastProfile();
    await postJobCreation.clickNextStep();
    await postJobCreation.clickUseLastProfile();
    await postJobCreation.clickNextStep();
    await providers.clickPrimeMovers();
  });
});
