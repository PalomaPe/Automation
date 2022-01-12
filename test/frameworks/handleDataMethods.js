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
}

const usefulMethods = new Framework();

export default Object.freeze(usefulMethods);
