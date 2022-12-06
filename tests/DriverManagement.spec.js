// const {test, expect} = require('@playwright/test');
// const {POManager} = require('../pageobject/POManager');
// const {LoginHelper} = require('../utils/LoginHelper');
// const {randomSelector} = require('../utils/randomizer')
// const data = JSON.parse(JSON.stringify(require('../utils/miscellaneousData.json')));

// let poManager;
// let loginHelper;
// let sideBar;
// let driverManagement;
// let randomNumber;

// let newActiveCount;
// let finalActiveCount;
// let newDeactivatedCount;
// let finalDeactivatedCount;
// let newFlaggedCount;
// let finalFlaggedCount;
// test.describe.serial.only('Driver Management TEST' , ()=>{

//     test.beforeEach( async({page})=>{
//         poManager = new POManager(page);
//         sideBar = poManager.getSideNavigationPane();
//         loginHelper = new LoginHelper(page);
//         driverManagement = poManager.getDriverManagementPage();
//     })

//     test('@WEB - Success Search Driver Test', async({page})=>{

//         await loginHelper.stagingLoginHelper();
//         await sideBar.gotoSettings('Driver Management');
//         await driverManagement.searchDriver(data.validSearch);
//         const driver = await driverManagement.countOfActiveDrivers();
//         await expect(driver).toBeGreaterThan(0);
//     })

//     test('@WEB - Failed Search Driver Test', async({page})=>{
//         await loginHelper.stagingLoginHelper();
//         await sideBar.gotoSettings('Driver Management');
//         await driverManagement.searchDriver(data.invalidSearch);
//         await expect(await driverManagement.countOfActiveDrivers()).toEqual(0);
//     })

//     test('@WEB - Deactivate Driver with History Test', async({page})=>{
//         await loginHelper.prodLoginHelper();
//         await sideBar.gotoSettings('Driver Management');
//         newDeactivatedCount = await driverManagement.countOfDeactivatedDrivers();
//         newActiveCount = await driverManagement.countOfActiveDrivers();
//         randomNumber = await randomSelector(newActiveCount);
//         await driverManagement.deactivateDriver(randomNumber);
//         finalActiveCount = await driverManagement.countOfActiveDrivers();
//         finalDeactivatedCount = await driverManagement.countOfDeactivatedDrivers();
//         await expect(finalActiveCount).not.toEqual(newActiveCount);
//         await expect(newDeactivatedCount).not.toEqual(finalDeactivatedCount);
//     })

//     test('@WEB - Deactive and Flag Driver with History Test', async({page})=>{
//         await loginHelper.prodLoginHelper();
//         await sideBar.gotoSettings('Driver Management');
//         newFlaggedCount = await driverManagement.countOfFlaggedDrivers(); // 0
//         newActiveCount = await driverManagement.countOfActiveDrivers(); // 1
//         randomNumber = await randomSelector(newActiveCount);
//         await driverManagement.deactivateAndFlagDriver(randomNumber, data.remarks);
//         finalActiveCount = await driverManagement.countOfActiveDrivers();
//         finalFlaggedCount = await driverManagement.countOfFlaggedDrivers();
//         await expect(finalActiveCount).not.toEqual(newActiveCount); // 0
//         await expect(newFlaggedCount).not.toEqual(finalFlaggedCount); // 1
//     })

//     test('@WEB - Activate Deactivated Driver Test', async({page})=>{
//         await loginHelper.prodLoginHelper();
//         await sideBar.gotoSettings('Driver Management');
//         newActiveCount = await driverManagement.countOfActiveDrivers();
//         newDeactivatedCount = await driverManagement.countOfDeactivatedDrivers();
//         randomNumber = await randomSelector(newActiveCount);
//         await driverManagement.activateDriver(randomNumber);
//         finalDeactivatedCount = await driverManagement.countOfDeactivatedDrivers();
//         finalActiveCount = await driverManagement.countOfActiveDrivers();
//         await expect(finalActiveCount).not.toEqual(newActiveCount);
//         await expect(newDeactivatedCount).not.toEqual(finalDeactivatedCount);
//     })

//     test('@WEB - Flag Deactivated Driver Test', async({page})=>{
//         await loginHelper.prodLoginHelper();
//         await sideBar.gotoSettings('Driver Management');
//         newFlaggedCount = await driverManagement.countOfFlaggedDrivers(); //0
//         newDeactivatedCount = await driverManagement.countOfDeactivatedDrivers(); //1
//         randomNumber = await randomSelector(deactnewDeactivatedCountivatedDriverCount);
//         await driverManagement.flagDriver(randomNumber, data.remarks);
//         finalDeactivatedCount = await driverManagement.countOfDeactivatedDrivers(); // 0
//         finalFlaggedCount = await driverManagement.countOfFlaggedDrivers(); //1
//         await expect(newDeactivatedCount).not.toEqual(finalDeactivatedCount);
//         await expect(newFlaggedCount).not.toEqual(finalFlaggedCount);
//     })

//    //test('@WEB - Flag Driver from')
// })