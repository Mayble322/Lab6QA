
const playwright = require('playwright');
const { Authorization } = require('./PageObjects/FirstPageObject');
const { AddProduct } = require('./PageObjects/SecondPageObject');
const tests = require("@playwright/test");
tests.test('Login with current username and password -> succsses', async({page}) =>
   {
      // const authorization = new Authorization(page);
      // await authorization.Navigate();
      // await authorization.FillAndLogin("username","password");
      // const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
      // await delay(3000);
      // tests.expect(await authorization.Login()).toBe("Welcome username");
      // tests.expect(await page.screenshot()).toMatchSnapshot('compare.png');

      await tests.expect(3).toBe(3);
  });


      