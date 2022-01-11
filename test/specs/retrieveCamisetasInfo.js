import EntryPage from "../pageobjects/mainPage.js";
import CamisetasPage from "../pageobjects/camisetasPage.js";
import UsefulMethods from "../frameworks/handleDataMethods.js";

describe("Mercado Libre", () => {
  it("Camisetas information", () => {
    browser.url("https://www.mercadolibre.com.uy/");
    browser.maximizeWindow();
    $("#newCookieDisclaimerButton").waitForClickable();
    $("#newCookieDisclaimerButton").click();
    EntryPage.searchProduct();
    EntryPage.searchBtn.click();
    const result = [];
    for (let index = 0; index < 3; index++) {
      for (let index = 1; index < 56; index++) {
        let currentProduct = [];
        global.currentProduct = currentProduct;
        let productName;
        let productCurrency;
        let productPrice;
        let productLink;
        productName = $(
          `.//ol[@class='ui-search-layout ui-search-layout--stack']/li[ ` +
            index +
            `]/div/div/div[@class='ui-search-result__content-wrapper']/div[@class="ui-search-item__group ui-search-item__group--title"]/a/h2`
        );
        productName.waitForClickable();
        currentProduct.name = productName.getText();
        productLink = $(
          `//ol[@class='ui-search-layout ui-search-layout--stack']/li[` +
            index +
            `]/div/div/div[@class='ui-search-result__content-wrapper']//a`
        ).getAttribute("href");
        currentProduct.link = productLink;
        productCurrency = $(
          `.//ol[@class='ui-search-layout ui-search-layout--stack']/li[` +
            index +
            `]//div[@class='ui-search-result__content-wrapper']/div[@class="ui-search-result__content-columns"]//span[@class="price-tag-symbol"]`
        ).getText();
        currentProduct.currency = productCurrency;
        productPrice = $(
          `.//ol[@class='ui-search-layout ui-search-layout--stack']/li[` +
            index +
            `]//div[@class='ui-search-result__content-wrapper']/div[@class="ui-search-result__content-columns"]//span[@class="price-tag-fraction"]`
        ).getText();
        currentProduct.price = productPrice;
        result.push(currentProduct);
        console.log(result);
      }
      CamisetasPage.siguienteBtn.click();
    }
    //console.log(result);
    //console.log(result.length);
    //console.log(result[0], result[56], result[112]);
    browser.pause(3000);
  });
});
