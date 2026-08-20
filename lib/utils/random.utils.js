import { isFiniteNumber } from "../validators/primitive-types.validators.js";

/**
 * Gera um número inteiro aleatório dentro de um intervalo inclusivo.
 *
 * <p>Os valores de {@code min} e {@code max} fazem parte do intervalo,
 * portanto ambos podem ser retornados.</p>
 *
 * @param {number} min menor valor possível
 * @param {number} max maior valor possível
 *
 * @returns {number} número inteiro aleatório entre {@code min} e {@code max}
 *
 * @throws {TypeError} se {@code min} ou {@code max} não forem números válidos
 * @throws {RangeError} se {@code min} for maior que {@code max}
 */
export function nextRandomNumber(min, max) {
  if (!isFiniteNumber(min) || !isFiniteNumber(max)) {
    throw new TypeError(
      "Os parâmetros 'min' e 'max' devem ser números finitos.",
    );
  }

  if (min > max) {
    throw new RangeError("O parâmetro 'min' não pode ser maior que 'max'.");
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
