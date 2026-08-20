import { buildElement, TagName } from "./lib.build-element.js";

/**
 * Tipos de botão suportados pelo componente {@link Button}.
 *
 * @readonly
 * @enum {string}
 */
export const ButtonType = {
  /** Botão comum, sem comportamento de submissão de formulário. */
  BUTTON: "button",

  /** Botão destinado à submissão de um formulário. */
  SUBMIT: "submit",
};

/**
 * Cria um elemento HTML {@code <button>} reutilizável.
 *
 * <p>Este componente fornece uma interface simplificada para a criação
 * de botões, permitindo definir seu identificador, tipo, classes CSS,
 * conteúdo e comportamento de clique.</p>
 *
 * @param {Object} options configurações do botão
 * @param {string} [options.id] identificador único do elemento
 * @param {string} [options.disabled] Status do botão
 * @param {string} [options.type=ButtonType.BUTTON] tipo do botão
 * @param {string[]} [options.classes=[]] classes CSS do elemento
 * @param {Node[]} [options.children=[]] elementos filhos do botão
 * @param {Function} [options.onClick] função executada quando o botão
 * é clicado
 *
 * @returns {HTMLButtonElement} elemento {@code <button>} criado
 */
export function Button({
  id,
  type = ButtonType.BUTTON,
  classes = [],
  children = [],
  disabled = false,
  onClick,
}) {
  const status = disabled ? { disabled } : { enable: "true" };

  return buildElement(TagName.BUTTON, {
    id,
    classes,
    children,
    attributes: {
      type,
      ...status,
    },
    events: {
      click: onClick,
    },
  });
}

/**
 * Cria um elemento HTML {@code <button>} com suporte a atributos
 * HTML personalizados.
 *
 * <p>Este componente possui a mesma funcionalidade do {@link Button},
 * mas permite adicionar atributos HTML adicionais, sendo apropriado
 * para botões que necessitam de configurações específicas, como
 * atributos do Bootstrap.</p>
 *
 * <p>Exemplo:</p>
 *
 * <pre>{@code
 * CustomButton({
 *   classes: ["btn", "btn-success"],
 *   attributes: {
 *     "data-bs-toggle": "modal",
 *     "data-bs-target": "#createStructureModal"
 *   },
 *   onClick: () => {
 *     console.log("Modal aberto.");
 *   }
 * });
 * }</pre>
 *
 * @param {Object} options configurações do botão
 * @param {string} [options.id] identificador único do elemento
 * @param {string} [options.type=ButtonType.BUTTON] tipo do botão
 * @param {Object.<string, string>} [options.attributes={}]
 * atributos HTML adicionais do elemento
 * @param {string[]} [options.classes=[]] classes CSS do elemento
 * @param {Node[]} [options.children=[]] elementos filhos do botão
 * @param {Function} [options.onClick] função executada quando o botão
 * é clicado
 *
 * @returns {HTMLButtonElement} elemento {@code <button>} criado
 */
export function CustomButton({
  id,
  type = ButtonType.BUTTON,
  attributes = {},
  classes = [],
  children = [],
  onClick,
}) {
  return buildElement(TagName.BUTTON, {
    id,
    classes,
    children,
    attributes: {
      ...attributes,
      type,
    },
    events: {
      click: onClick,
    },
  });
}

/**
 * Cria um elemento HTML {@code <a>} reutilizável.
 *
 * @param {Object} options configurações do link
 * @param {string} [options.href] endereço de destino do link
 * @param {string} [options.id] identificador único do elemento
 * @param {string[]} [options.classes=[]] classes CSS do link
 * @param {Object.<string, string>} [options.attributes={}]
 * atributos HTML adicionais
 * @param {Node[]} [options.children=[]] elementos filhos do link
 *
 * @returns {HTMLAnchorElement} elemento {@code <a>} criado
 */
export function Link({
  href,
  id,
  classes = [],
  attributes = {},
  children = [],
}) {
  return buildElement(TagName.A, {
    id,
    classes,
    attributes: {
      ...attributes,
      ...(href ? { href } : {}),
    },
    children,
  });
}
