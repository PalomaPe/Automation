/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */

import Selectors from "../selectors/selectorsMercadoLibre.js";

class page {
  open(path) {
    browser.url(path);
    browser.maximizeWindow();
  }
  get searchBoxInput() {
    return $(Selectors.searchBox);
  }

  get searchBtn() {
    return $(Selectors.searchBtn);
  }

  searchProduct(product) {
    this.searchBoxInput.setValue(product);
  }
}

export default Object.freeze(page);
