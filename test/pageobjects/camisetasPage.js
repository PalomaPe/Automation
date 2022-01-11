import Page from "./page.js";

class camisetasPage extends Page {
  get numberOfPages() {
    return parseInt(
      $(".andes-pagination__page-count").getText().substring(3, 5)
    );
  }

  get siguienteBtn() {
    return $(".andes-pagination__arrow-title");
  }
}

const CamisetasPage = new camisetasPage();

export default Object.freeze(CamisetasPage);
