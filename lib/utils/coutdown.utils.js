import {
  isFunction,
  isNumber,
} from "../validators/primitive-types.validators.js";

/**
 * Aguarda durante o período de tempo informado.
 *
 * @param {number} ms tempo de espera em milissegundos
 *
 * @returns {Promise<void>} promise resolvida após o período informado
 *
 * @throws {TypeError} se {@code ms} não for um número
 * @throws {RangeError} se {@code ms} for menor que zero
 */
export function waitFor(ms) {
  if (!isNumber(ms)) {
    throw new TypeError("O parâmetro 'ms' deve ser um número.");
  }

  if (ms < 0) {
    throw new RangeError("O parâmetro 'ms' não pode ser negativo.");
  }

  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

/**
 * Aguarda durante o período informado e executa uma função
 * a cada segundo informando o tempo restante.
 *
 * @param {number} ms tempo do contador em milissegundos
 * @param {Function} onTick função executada a cada atualização
 *
 * @returns {Promise<void>} promise resolvida quando a contagem termina
 *
 * @throws {TypeError} se {@code ms} não for um número
 * @throws {TypeError} se {@code onTick} não for uma função
 * @throws {RangeError} se {@code ms} for menor que zero
 */
export function waitCountdown(ms, onTick = () => {}) {
  if (!isNumber(ms)) {
    throw new TypeError("O parâmetro 'ms' deve ser um número.");
  }

  if (ms < 0) {
    throw new RangeError("O parâmetro 'ms' não pode ser negativo.");
  }

  if (!isFunction(onTick)) {
    throw new TypeError("O parâmetro 'onTick' deve ser uma função.");
  }

  return new Promise((resolve) => {
    const endTime = Date.now() + ms;

    onTick(Math.ceil(ms / 1000));

    const timer = setInterval(() => {
      const remaining = Math.max(0, endTime - Date.now());

      onTick(Math.ceil(remaining / 1000));

      if (remaining === 0) {
        clearInterval(timer);
        resolve();
      }
    }, 1000);
  });
}
