const {test} = require('@playwright/test');

let webContext;

test.beforeAll( async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://beta.fleet.ph/');
    await page.locator('.login-username').fill('sandbox.jay@gmail.com');
    await page.locator('.login-password').type('P@ssw0rd');
    await page.click('.login-submit');
    await page.waitForLoadState('networkidle');
    await context.storageState({path: 'state.json'});
    webContext = await browser.newContext({storageState: 'state.json'});


});

test('Browser Context Test using JavaScript', async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();


})

test('Page Test using JavaScript', async()=>
{
    const page = await webContext.newPage();
    await page.goto('https://beta.fleet.ph/dashboard');
    await page.waitForLoadState('networkidle');
    await page.click('a[href*="report"]:visible')
    await page.pause();


})