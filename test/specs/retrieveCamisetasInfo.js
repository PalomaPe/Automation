import EntryPage from "../pageobjects/mainPage.js";
import CamisetasPage from "../pageobjects/camisetasPage.js";
import HandleDataMethods from "../frameworks/handleDataMethods.js";
import Selectors from "../selectors/selectorsMercadoLibre.js";

describe("Mercado Libre", () => {
  it("Camisetas information", () => {
    EntryPage.open("https://www.mercadolibre.com.uy/");
    $(Selectors.cookieAcceptanceButton).waitForClickable();
    $(Selectors.cookieAcceptanceButton).click();
    EntryPage.searchProduct("camisetas");
    EntryPage.searchBtn.click();
    let result = {};
    result.detailsOfCamisetas = [];
    let listIndex = 1;
    let pageIndex = 1;
    while (pageIndex < 4 && pageIndex <= CamisetasPage.numberOfPages) {
      while (HandleDataMethods.productExists(listIndex)) {
        let currentProduct = {};
        HandleDataMethods.retrieveProductName(currentProduct, listIndex);
        HandleDataMethods.retrieveProductLink(currentProduct, listIndex);
        HandleDataMethods.retireveProductCurrency(currentProduct, listIndex);
        HandleDataMethods.retrieveProductPrice(currentProduct, listIndex);
        result.detailsOfCamisetas.push(currentProduct);
        listIndex++;
      }
      CamisetasPage.siguienteBtn.waitForClickable();
      CamisetasPage.siguienteBtn.click();
      listIndex = 1;
      pageIndex++;
    }
    HandleDataMethods.loadInfoIntoAFile(result);
  });
});
