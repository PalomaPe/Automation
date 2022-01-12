import EntryPage from "../pageobjects/mainPage.js";
import CamisetasPage from "../pageobjects/camisetasPage.js";
import HandleDataMethods from "../frameworks/handleDataMethods.js";
import handleDataMethods from "../frameworks/handleDataMethods.js";

let cookieAcceptanceButtonsSelector = "#newCookieDisclaimerButton";

describe("Mercado Libre", () => {
  it("Camisetas information", () => {
    browser.url("https://www.mercadolibre.com.uy/");
    browser.maximizeWindow();
    $(cookieAcceptanceButtonsSelector).waitForClickable();
    $(cookieAcceptanceButtonsSelector).click();
    EntryPage.searchProduct();
    EntryPage.searchBtn.click();
    let result = {};
    result.detailsOfCamisetas = [];
    for (let index = 0; index < 3; index++) {
      for (let index = 1; index < 56; index++) {
        let currentProduct = [];
        let productName = $(
          `.//ol[@class='ui-search-layout ui-search-layout--stack']/li[ ` +
            index +
            `]/div/div/div[@class='ui-search-result__content-wrapper']/div[@class="ui-search-item__group ui-search-item__group--title"]/a/h2`
        );
        productName.waitForClickable();
        currentProduct.name = productName.getText();
        let productLink = $(
          `//ol[@class='ui-search-layout ui-search-layout--stack']/li[` +
            index +
            `]/div/div/div[@class='ui-search-result__content-wrapper']//a`
        ).getAttribute("href");
        currentProduct.link = productLink;
        let productCurrency = $(
          `.//ol[@class='ui-search-layout ui-search-layout--stack']/li[` +
            index +
            `]//div[@class='ui-search-result__content-wrapper']/div[@class="ui-search-result__content-columns"]//span[@class="price-tag-symbol"]`
        ).getText();
        currentProduct.currency = productCurrency;
        let productPrice = $(
          `.//ol[@class='ui-search-layout ui-search-layout--stack']/li[` +
            index +
            `]//div[@class='ui-search-result__content-wrapper']/div[@class="ui-search-result__content-columns"]//span[@class="price-tag-fraction"]`
        ).getText();
        currentProduct.price = productPrice;
        result.detailsOfCamisetas.push(currentProduct);
        console.log(result);
      }
      CamisetasPage.siguienteBtn.click();
    }
    const jsonResult = HandleDataMethods.convertToJSON(result);
    handleDataMethods.loadInfoIntoAFile(jsonResult);
  });
});
