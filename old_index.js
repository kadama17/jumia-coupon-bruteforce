const puppeteer = require('puppeteer');
const fs = require('fs');
var voucher_codes = require('voucher-code-generator');

(async () => {

const browser = await puppeteer.launch({ headless: false })

const page = await browser.newPage()
const navigationPromise = page.waitForNavigation()
page.goto('https://www.jumia.ma/customer/account/login/')

await page.setViewport({width:0, height:0});


const voucher=voucher_codes.generate({
  length: 3,
  count: 1000,
  prefix: "JUMIA",

  charset: voucher_codes.charset("numbers")

});

await page.waitForSelector('#fi-email')
await page.click('#fi-email')

await page.type('#fi-email', 'qjfxf@hi2.in')
await page.waitForSelector('#fi-password')
await page.click('#fi-password')
await page.type('#fi-password', 'Kada17m@')



await page.waitForSelector('.col8 > #authForm > .-fg1 > .fi-w > button')
await page.click('.col8 > #authForm > .-fg1 > .fi-w > button')





await page.waitForSelector('.row > .col8 > #authForm > ._prim > span')
await page.click('.row > .col8 > #authForm > ._prim > span')

await navigationPromise

function delay(time) {
      return new Promise(function(resolve) { 
          setTimeout(resolve, time)
      });
   }
   await delay(15000);

await page.waitForSelector('.header > .wrapper > .row > .col > .-df')
await page.click('.header > .wrapper > .row > .col > .-df')

await navigationPromise

await page.waitForSelector('.col4 > .__ps-to-header > .card > .-bt > .btn')
await page.click('.col4 > .__ps-to-header > .card > .-bt > .btn')

await navigationPromise

await page.waitForSelector('.l-full-hd')
await page.click('.l-full-hd')


await page.waitForSelector('.bg-white > .sum > .prod_sum > .col-s > .lazy')
await page.click('.bg-white > .sum > .prod_sum > .col-s > .lazy')

await page.waitForSelector('.l-full-hd > main > .-fs-14 > .-pbxl')
await page.click('.l-full-hd > main > .-fs-14 > .-pbxl')

await page.waitForSelector('.l-full-hd > main > .-fs-14 > .-pbxl')
await page.click('.l-full-hd > main > .-fs-14 > .-pbxl')

await page.waitForSelector('#osh-opc-btn-save')
await page.click('#osh-opc-btn-save')

await navigationPromise

await page.waitForSelector('#opc-cart-promocode')
await page.click('#opc-cart-promocode')

await page.waitForSelector('#opc-cart-promocode')
await page.click('#opc-cart-promocode')

await page.waitForSelector('#osh-opc-paymentForm > .-pbxxl > .vch_box > .osh-btn > .label')
await page.click('#osh-opc-paymentForm > .-pbxxl > .vch_box > .osh-btn > .label')


// await page.waitForSelector('.-bg-wt > .row > .col8 > #authForm > ._prim')
// await page.click('.-bg-wt > .row > .col8 > #authForm > ._prim')
// function delay(time) {
//     return new Promise(function(resolve) { 
//         setTimeout(resolve, time)
//     });
//  }
//  await delay(15000);

// await navigationPromise

// await page.waitForSelector('#jm > .header > .wrapper > .row > .col')
// await page.click('#jm > .header > .wrapper > .row > .col')

// await navigationPromise

// page.goto('https://www.jumia.ma/onepagecheckout/payment/index/')

// await delay(5000);

// await page.waitForSelector('#opc-cart-promocode')
// await page.click('#opc-cart-promocode')

// const generateRandomString = (myLength) => {
//     const chars1 =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

//     const chars =
//     "0123456789";
//     const randomArray = Array.from(
//       { length: myLength },
//       (v, k) => chars[Math.floor(Math.random() * chars.length)]
//     );
  
//     const randomString = randomArray.join("");
//         return randomString
//   };




// for (let i = 0; i < voucher.length; i++) {
//     console.log("Test N°:", i)

//     let code =await generateRandomString(3);
//     await page.type('#opc-cart-promocode', voucher[i]
//     )
//     voucher[i]
// await page.waitForSelector('#osh-opc-paymentForm > .-pbxxl > .vch_box > .osh-btn > .label')
// await page.click('#osh-opc-paymentForm > .-pbxxl > .vch_box > .osh-btn > .label')

// await navigationPromise

// await page.waitForSelector('.cont > #osh-opc-paymentForm > .-pbxxl > .msg > .text')
// await page.click('.cont > #osh-opc-paymentForm > .-pbxxl > .msg > .text')
// await delay(2000);

// let element = await page.$('.cont > #osh-opc-paymentForm > .-pbxxl > .msg > .text')
// let value = await page.evaluate(el => el.textContent, element)

// if (value!=="Impossible d'ajouter votre coupon de réduction. Merci de réessayer."){
//     console.log("code is", voucher[i])

//     fs.appendFile('code_coupon.txt',voucher[i] + "\n", 'utf8',
//     function(err) {     
//         if (err) throw err;
//         // if no error
// });


// }
// }








})();
