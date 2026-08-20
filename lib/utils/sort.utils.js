import {
  isArray,
  isFunction,
} from "../validators/primitive-types.validators.js";

/**
 * Cria uma nova lista ordenada alfabeticamente a partir
 * dos elementos de uma lista existente.
 *
 * <p>A lista original não é modificada.</p>
 *
 * @param {Array} array lista que será ordenada
 * @param {Function} callback função responsável por obter
 * o valor textual utilizado na ordenação
 *
 * @returns {Array} nova lista ordenada alfabeticamente
 *
 * @throws {TypeError} se {@code array} não for um array
 * @throws {TypeError} se {@code callback} não for uma função
 */
export function sortAlphabetically(array, callback) {
  if (!isArray(array)) {
    throw new TypeError("O parâmetro 'array' deve ser um array.");
  }

  if (!isFunction(callback)) {
    throw new TypeError("O parâmetro 'callback' deve ser uma função.");
  }

  return [...array].sort((a, b) => {
    const valueA = callback(a);
    const valueB = callback(b);

    if (!isString(valueA) || !isString(valueB)) {
      throw new TypeError("O callback deve retornar uma string.");
    }

    return valueA.localeCompare(valueB, "pt-BR");
  });
}
