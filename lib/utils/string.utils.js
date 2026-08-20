import { isString } from "../validators/primitive-types.validators.js";

/**
 * Converte a primeira letra de cada palavra para maiúscula
 * e todas as demais letras para minúsculas.
 *
 * @param {string} value texto que será formatado
 * @returns {string} texto com as palavras capitalizadas
 *
 * @throws {TypeError} se {@code value} não for uma string
 */
export function capitalizeWords(value) {
  if (!isString(value)) {
    throw new TypeError("O valor deve ser uma string.");
  }

  return value
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (!word) return word;

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
