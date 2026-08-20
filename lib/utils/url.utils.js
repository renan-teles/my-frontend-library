import { isString } from "../validators/primitive-types.validators.js";

/**
 * Recupera o valor de um parâmetro presente na URL da página.
 *
 * @param {string} param nome do parâmetro que será recuperado
 *
 * @returns {string} valor associado ao parâmetro
 *
 * @throws {TypeError} se {@code param} não for uma string
 * @throws {Error} se {@code param} estiver vazio
 * @throws {Error} se o parâmetro não existir na URL
 */
export function getUrlParamValue(param) {
  if (!isString(param)) {
    throw new TypeError("O parâmetro 'param' deve ser uma string.");
  }

  if (param.trim() === "") {
    throw new Error("O parâmetro 'param' não pode ser vazio.");
  }

  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);

  if (!params.has(param)) {
    throw new Error(`Parâmetro '${param}' não encontrado na URL.`);
  }

  return params.get(param);
}

/**
 * Redireciona a página atual para uma nova URL.
 *
 * @param {string} url endereço ou caminho para o qual a página será redirecionada
 *
 * @returns {void}
 *
 * @throws {TypeError} se {@code url} não for uma string
 * @throws {Error} se {@code url} estiver vazia
 */
export function redirectTo(url) {
  if (!isString(url)) {
    throw new TypeError("O parâmetro 'url' deve ser uma string.");
  }

  if (url.trim() === "") {
    throw new Error("O parâmetro 'url' não pode ser vazio.");
  }

  window.location.href = url;
}
