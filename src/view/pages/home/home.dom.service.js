import { HomePageElements as Elements } from "./home.page.js";

/*
  VARIÁVEIS
*/
let count = 5;

/*
  FUNÇÃO DE INICIALIZAÇÃO 
*/
export function onInitHomePage() {
  renderCount();
}

/*
  FUNÇÕES PÚBLICAS (Disparadas após eventos na página)
*/
export function increment() {
  count += 1;
  renderCount();
}

export function decrement() {
  count -= 1;
  renderCount();
}

/*
  FUNÇÕES PRIVADAS
*/
function renderCount() {
  Elements.paragraphs.count().textContent = count;
}
