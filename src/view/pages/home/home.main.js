import { onInitHomePage } from "./home.dom.service.js";
import { HomePage } from "./home.page.js";

/*
  FUNÇÃO DE INICIALIZAÇÃO DA PÁGINA
*/
function homeMain() {
  const page = HomePage();
  document.body.appendChild(page);

  onInitHomePage();
}

/*
  EVENTO DE INICIALIZAÇÃO
*/
document.addEventListener("DOMContentLoaded", homeMain);
