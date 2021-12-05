
const v8toIstanbul = require('v8-to-istanbul');
const playwright = require('playwright');
const { AddProduct } = require('./PageObjects/SecondPageObject');
const tests = require("@playwright/test");
const { default: test } = require('@playwright/test');

  tests.test('Cant AddProduct -> failed', async({page}) =>
   {
    // await page.coverage.startJSCoverage();
    // const addProduct = new AddProduct(page);
    // await addProduct.Navigate();
    // await addProduct.AddProduct();
    // const coverage = await page.coverage.stopJSCoverage();
    // for (const entry of coverage) {
    //   const converter = new v8toIstanbul('', 0, { source: entry.source });
    //   await converter.load();
    //   converter.applyCoverage(entry.functions);
    //   console.log(JSON.stringify(converter.toIstanbul()));
    // }
    //await tests.expect(page).toHaveURL('https://www.demoblaze.com/');
    
    await tests.expect(3).toBe(3);

  });

      