//const page = require("./pageObjects/page");

describe("Mercado Libre Web Application", () => {
  it("Login page title", () => {
    browser.url("https://www.mercadolibre.com.uy/");
    console.log(browser.getTitle());
    browser.pause(3000);
    //page.searchProduct();
  });
});
