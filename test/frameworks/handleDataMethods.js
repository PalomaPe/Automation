import fs from "fs";

class Framework {
  retrieveDetailsAboutProduct(feature) {
    if (feature.isExisting()) {
      currentProduct.name = feature.getText();
    }
  }
  convertToJSON(data) {
    let jsonData = JSON.stringify(data);
    let slash = jsonData.replace(/\\/g, "");
    console.log(slash);
    return slash;
  }

  loadInfoIntoAFile(dataCamisasInJSON) {
    let json = JSON.stringify(dataCamisasInJSON);
    fs.writeFile(
      "detailsOfCamisetas.json",
      json,
      {
        flags: "a",
      },
      (err) => {
        if (err) throw err;
        console.log("A file with the results has been created");
      }
    );
  }
}

const usefulMethods = new Framework();

export default Object.freeze(usefulMethods);
