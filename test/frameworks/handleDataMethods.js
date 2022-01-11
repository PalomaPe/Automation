class Framework {
  retrieveDetailsAboutProduct(feature) {
    if (feature.isExisting()) {
      currentProduct.name = feature.getText();
    }
  }
}

const usefulMethods = new Framework();

export default Object.freeze(usefulMethods);
