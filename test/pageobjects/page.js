/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
/* module.exports = class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
/* open(path) {
    return browser.url(`https://the-internet.herokuapp.com/${path}`);
  }

  get searchBoxInput() {
    $(".nav-search-input");
  }

  searchProduct() {
    this.searchBoxInput.setValue("camisetas");
  }
};
*/
/*
export default class Page {
    constructor() {
        this.title = 'My Page'
    }

    async open (path) {
        await browser.url(path)
    }
}*/

class page {
  get searchBoxInput() {
    return $(".nav-search-input");
  }

  get searchBtn() {
    return $(".nav-search-btn");
  }

  searchProduct() {
    this.searchBoxInput.setValue("camisetas");
  }
}

export default Object.freeze(page);
