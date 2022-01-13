class SelectorsMercadoLibre {
  get cookieAcceptanceButton() {
    return "#newCookieDisclaimerButton";
  }
  get searchBox() {
    return ".nav-search-input";
  }

  get searchBtn() {
    return ".nav-search-btn";
  }

  get siguienteBtn() {
    return `[title="Siguiente"]`;
  }

  get productName() {
    let productNameSelector = `.//ol[@class='ui-search-layout ui-search-layout--stack']/li[
      index]/div/div/div[@class='ui-search-result__content-wrapper']/div[@class="ui-search-item__group ui-search-item__group--title"]/a/h2`;
    return productNameSelector;
  }

  get productLink() {
    let productLinkSelector = `//ol[@class='ui-search-layout ui-search-layout--stack']/li[index]/div/div/div[@class='ui-search-result__content-wrapper']//a`;
    return productLinkSelector;
  }
  get productCurrency() {
    return `.//ol[@class='ui-search-layout ui-search-layout--stack']/li[index]//div[@class='ui-search-result__content-wrapper']/div[@class="ui-search-result__content-columns"]//span[@class="price-tag-symbol"]`;
  }

  get productPrice() {
    let productPriceSelector = `.//ol[@class='ui-search-layout ui-search-layout--stack']/li[index]//div[@class='ui-search-result__content-wrapper']/div[@class="ui-search-result__content-columns"]//span[@class="price-tag-fraction"]`;
    return productPriceSelector;
  }
}

let Selectors = new SelectorsMercadoLibre();
export default Object.freeze(Selectors);
