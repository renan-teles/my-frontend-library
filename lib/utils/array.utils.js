import { isArray } from "../validators/primitive-types.validators.js";

/**
 * Cria uma nova lista contendo os elementos de um array
 * em uma ordem aleatória.
 *
 * <p>O array original não é modificado. A ordenação aleatória
 * é realizada utilizando o algoritmo de Fisher-Yates.</p>
 *
 * @param {Array} array array que será embaralhado
 *
 * @returns {Array} novo array com os elementos embaralhados
 *
 * @throws {TypeError} se {@code array} não for um array
 */
export function shuffleArray(array) {
  if (!isArray(array)) {
    throw new TypeError("O parâmetro 'array' deve ser um array.");
  }

  const arr = [...array];
  let currIndex = arr.length;

  while (currIndex > 0) {
    const randomIndex = Math.floor(Math.random() * currIndex);

    currIndex--;

    [arr[currIndex], arr[randomIndex]] = [arr[randomIndex], arr[currIndex]];
  }

  return arr;
}
