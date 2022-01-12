import EntryPage from "../pageobjects/mainPage.js";
import CamisetasPage from "../pageobjects/camisetasPage.js";
import HandleDataMethods from "../frameworks/handleDataMethods.js";

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
        global.index = index;
        let currentProduct = {};
        HandleDataMethods.retrieveProductName(currentProduct);
        HandleDataMethods.retrieveProductLink(currentProduct);
        HandleDataMethods.retireveProductCurrency(currentProduct);
        HandleDataMethods.retrieveProductPrice(currentProduct);
        result.detailsOfCamisetas.push(currentProduct);
      }
      CamisetasPage.siguienteBtn.click();
    }
    HandleDataMethods.loadInfoIntoAFile(result);
  });
});
