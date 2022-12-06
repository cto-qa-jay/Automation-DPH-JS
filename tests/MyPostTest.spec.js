const {test, expect, request} = require('@playwright/test');
const { MyPostPage } = require('../pageobjects/MyPostPage');
const {PostJobCreation} = require('../pageobjects/PostJobCreation');
const {POManager} = require('../pageobjects/POManager');
const urls = JSON.parse(JSON.stringify(require("../utils/dphEnvironment.json")));
const cred = JSON.parse(JSON.stringify(require('../utils/dphLoginData.json')));

const refno = 'TEST-XDE-YOMMY';

test.describe.only('LOGIN TEST SUITE', ()=>{
        let poManager
        let loginPage
        let myPostPage
        let postJobCreation 

        test.beforeEach( async({page})=>{
            poManager = new POManager(page);
            loginPage = poManager.getLoginPage();
            myPostPage = poManager.getMyPostPage();
            postJobCreation = poManager.getPostJobCreation();
        })

        test('@WEB - Search By Reference No Test', async({page})=>{
            await loginPage.goTo(urls.betaUrl);
            await loginPage.validLogin(cred.business,cred.busipass);
            await page.locator('.logo').hover();
            await myPostPage.searchReferenceNo(refno);
            await console.log('test');
            const allresult = await page.locator('.list-item .ref-no').allInnerTexts();
            console.log(allresult);
            // console.log(myPostPage.referenceResult().first().locator('.ref-no').innerText());
        })

        test('@WEB - Create New Post test', async({page})=>{
            await loginPage.goTo(urls.betaUrl);
            await loginPage.validLogin(cred.business,cred.busipass);
            await postJobCreation.clickAddNewPost();
            await postJobCreation.selectOndemandDelivery();
        })



        
    })