import { isString } from "../validators/primitive-types.validators.js";

/**
 * Recupera todos os elementos HTML que possuem determinada classe CSS.
 *
 * @param {string} className nome da classe CSS utilizada na busca
 *
 * @returns {HTMLCollectionOf<Element>} coleção de elementos encontrados
 *
 * @throws {TypeError} se {@code className} não for uma string
 * @throws {Error} se nenhum elemento for encontrado
 */
export function getHtmlElementsByClass(className) {
  if (!isString(className)) {
    throw new TypeError("O parâmetro 'className' deve ser uma string.");
  }

  if (className.trim() === "") {
    throw new Error("O parâmetro 'className' não pode ser vazio.");
  }

  const elements = document.getElementsByClassName(className);

  if (elements.length === 0) {
    throw new Error(
      `Falha ao recuperar elementos HTML: elementos HTML da classe '${className}' não encontrados.`,
    );
  }

  return elements;
}

/**
 * Solicita ao usuário a confirmação para recarregar a página.
 *
 * @param {string} message mensagem apresentada na caixa de confirmação
 *
 * @returns {void}
 *
 * @throws {TypeError} se {@code message} não for uma string
 */
export function restartLocalPage(message = "Deseja recarregar a página?") {
  if (!isString(message)) {
    throw new TypeError("O parâmetro 'message' deve ser uma string.");
  }

  const res = confirm(message);
  if (res) location.reload();
}
