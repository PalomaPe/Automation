import Page from "./page.js";
import Selectors from "../selectors/selectorsMercadoLibre.js";

class camisetasPage extends Page {
  get numberOfPages() {
    return parseInt(
      $(".andes-pagination__page-count").getText().substring(3, 5)
    );
  }

  get siguienteBtn() {
    return $(Selectors.siguienteBtn);
  }
}

const CamisetasPage = new camisetasPage();

export default Object.freeze(CamisetasPage);
