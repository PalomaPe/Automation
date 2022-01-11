import EntryPage from "../pageobjects/mainPage.js";
import CamisetasPage from "../pageobjects/camisetasPage.js";

describe("Retrieve camisetas information in Mercado Libre", () => {
  it("Login page title", () => {
    browser.url("https://www.mercadolibre.com.uy/");
    EntryPage.searchProduct();
    EntryPage.searchBtn.click();
    const result = [];
    for (let index = 0; index < CamisetasPage.numberOfPages - 1; index++) {
      let currentProduct;
      let productName;
      let currentProduct = [];
      for (let index = 1; index < 2; index++) {
        productName = $(
          `.//ol[@class='ui-search-layout ui-search-layout--stack']/li[ ` +
            index +
            `]/div/div/div[@class='ui-search-result__content-wrapper']/div[@class="ui-search-item__group ui-search-item__group--title"]/a/h2`
        );
        if (productName.isExisting()) {
          currentProduct.name = productName.getText();
        }
        result.push(currentProduct);
      }
      // CamisetasPage.siguienteBtn.click();
    }
    console.log(currentProduct);
    browser.pause(3000);
  });
});
