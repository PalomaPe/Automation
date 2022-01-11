import Page from "./page.js";

class mainPage extends Page {
  // By the moment, has not been necessary to implement further
  // methods for the Mercado Libre's entry page that the ones which
  // extend from the base page 'page.js'.
}

const entryPage = new mainPage();

export default Object.freeze(entryPage);
