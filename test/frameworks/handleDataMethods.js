import fs from "fs";

class Framework {
  loadInfoIntoAFile(dataCamisasInJSON) {
    let jsonCamisetas = JSON.stringify(dataCamisasInJSON);
    let filename = "detailsOfCamisetas.json";
    fs.writeFile(
      filename,
      jsonCamisetas,
      {
        flags: "a",
      },
      (err) => {
        if (err) throw err;
        console.log(
          `A file with the results named ${filename} has been created`
        );
      }
    );
  }

  retrieveProductName(arrayToStore) {
    let productName = $(
      `.//ol[@class='ui-search-layout ui-search-layout--stack']/li[ ` +
        index +
        `]/div/div/div[@class='ui-search-result__content-wrapper']/div[@class="ui-search-item__group ui-search-item__group--title"]/a/h2`
    );
    if (productName.isExisting) {
      productName.waitForClickable();
      arrayToStore.name = productName.getText();
    }
  }

  retrieveProductLink(arrayToStore) {
    let productLink = $(
      `//ol[@class='ui-search-layout ui-search-layout--stack']/li[` +
        index +
        `]/div/div/div[@class='ui-search-result__content-wrapper']//a`
    );
    if (productLink.isExisting()) {
      arrayToStore.link = productLink.getAttribute("href");
    }
  }

  retireveProductCurrency(arrayToStore) {
    let productCurrency = $(
      `.//ol[@class='ui-search-layout ui-search-layout--stack']/li[` +
        index +
        `]//div[@class='ui-search-result__content-wrapper']/div[@class="ui-search-result__content-columns"]//span[@class="price-tag-symbol"]`
    );
    if (productCurrency.isExisting()) {
      arrayToStore.currency = productCurrency.getText();
    }
  }

  retrieveProductPrice(arrayToStore) {
    let productPrice = $(
      `.//ol[@class='ui-search-layout ui-search-layout--stack']/li[` +
        index +
        `]//div[@class='ui-search-result__content-wrapper']/div[@class="ui-search-result__content-columns"]//span[@class="price-tag-fraction"]`
    );
    if (productPrice.isExisting()) {
      arrayToStore.price = productPrice.getText();
    }
  }
}

const usefulMethods = new Framework();

export default Object.freeze(usefulMethods);
