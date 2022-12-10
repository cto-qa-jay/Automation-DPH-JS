const { POManager } = require('../pageObjects/POManager');

const { test } = require('@playwright/test');
const urls = JSON.parse(JSON.stringify(require('../utils/dphEnvironment.json')));
const cred = JSON.parse(JSON.stringify(require('../utils/dphLoginData.json')));

test.describe.only('LOGIN TEST SUITE', () => {
  let poManager;
  let loginPage;
  let myPostPage;
  let postJobCreation;

  test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    loginPage = poManager.getLoginPage();
    myPostPage = poManager.getMyPostPage();
    postJobCreation = poManager.getPostJobCreation();
  });

  test('@WEB - Search By Reference No Test', async ({ page }) => {
    await loginPage.goTo(urls.betaUrl);
    await loginPage.validLogin(cred.business, cred.busipass);
    await page.locator('.logo').hover();
    await myPostPage.searchRefer;
    await page.locator('.list-item .ref-no').allInnerTexts();
  });

  test('@WEB - Create New Post test', async () => {
    await loginPage.goTo(urls.betaUrl);
    await loginPage.validLogin(cred.business, cred.busipass);
    await postJobCreation.clickAddNewPost();
    await postJobCreation.selectOndemandDelivery();
  });
});
