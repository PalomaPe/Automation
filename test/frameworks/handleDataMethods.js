import fs from "fs";
import Selectors from "../selectors/selectorsMercadoLibre.js";

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

  retrieveProductName(arrayToStore, listIndex) {
    let productNameSelector = Selectors.productName.replace("index", listIndex);
    let productName = $(productNameSelector);
    if (productName.isExisting()) {
      arrayToStore.name = productName.getText();
    }
  }

  retrieveProductLink(arrayToStore, listIndex) {
    let productLink = $(
      Selectors.productLink.replace("index", listIndex.toString())
    );
    if (productLink.isExisting()) {
      productLink.waitForClickable();
      arrayToStore.link = productLink.getAttribute("href");
    }
  }

  retireveProductCurrency(arrayToStore, listIndex) {
    let productCurrencySelector = Selectors.productCurrency.replace(
      "index",
      listIndex.toString()
    );
    let productCurrency = $(productCurrencySelector);
    if (productCurrency.isExisting()) {
      arrayToStore.currency = productCurrency.getText();
    }
  }

  retrieveProductPrice(arrayToStore, listIndex) {
    let productPriceSelector = Selectors.productPrice.replace(
      "index",
      listIndex.toString()
    );
    let productPrice = $(productPriceSelector);
    if (productPrice.isExisting()) {
      arrayToStore.price = productPrice.getText();
    }
  }

  productExists(listIndex) {
    let productSelector = Selectors.productName.replace(
      "index",
      listIndex.toString()
    );
    let exists = $(productSelector).isExisting();
    return exists;
  }
}

const usefulMethods = new Framework();

export default Object.freeze(usefulMethods);
