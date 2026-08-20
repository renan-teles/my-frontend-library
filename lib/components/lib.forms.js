import { buildElement, TagName } from "./lib.build-element.js";

/**
 * Cria um elemento HTML {@code <form>} reutilizável.
 *
 * <p>Permite definir o identificador, nome, classes CSS, atributos,
 * eventos e elementos filhos do formulário.</p>
 *
 * @param {Object} options configurações do formulário
 * @param {string} [options.id] identificador único do formulário
 * @param {string} [options.name] nome do formulário
 * @param {string[]} [options.classes=[]] classes CSS do formulário
 * @param {Object.<string, string>} [options.attributes={}]
 * atributos HTML adicionais
 * @param {Object.<string, Function>} [options.onSubmit={}]
 * evento disparado após a submissão do formulário
 * @param {Node[]} [options.children=[]] elementos filhos do formulário
 *
 * @returns {HTMLFormElement} elemento {@code <form>} criado
 */
export function Form({
  id,
  name,
  classes = [],
  attributes = {},
  children = [],
  onSubmit,
}) {
  return buildElement(TagName.FORM, {
    id,
    classes,
    attributes: {
      ...attributes,
      ...(name ? { name } : {}),
    },
    events: {
      submit: onSubmit,
    },
    children,
  });
}

/**
 * Tipos de entrada suportados pelo componente {@link Input}.
 *
 * @readonly
 * @enum {string}
 */
export const InputType = {
  TEXT: "text",
  NUMBER: "number",
  PASSWORD: "password",
  EMAIL: "email",
  TEL: "tel",
  URL: "url",
  SEARCH: "search",
  DATE: "date",
  TIME: "time",
  DATETIME_LOCAL: "datetime-local",
  MONTH: "month",
  WEEK: "week",
  CHECKBOX: "checkbox",
  RADIO: "radio",
  FILE: "file",
  COLOR: "color",
  RANGE: "range",
  HIDDEN: "hidden",
  BUTTON: "button",
  SUBMIT: "submit",
  RESET: "reset",
};

/**
 * Cria um elemento HTML {@code <input>} reutilizável.
 *
 * @param {Object} options configurações do elemento
 * @param {string} [options.id] identificador único do elemento
 * @param {string} [options.name] nome do campo
 * @param {string} [options.type=InputType.TEXT] tipo do campo
 * @param {string[]} [options.classes=[]] classes CSS
 * @param {Object.<string, string>} [options.attributes={}]
 * atributos HTML adicionais
 * @param {Function} [options.onChange] função executada quando o valor
 * do campo é alterado
 *
 * @returns {HTMLInputElement} elemento {@code <input>} criado
 */
export function Input({
  id,
  name,
  type = InputType.TEXT,
  classes = [],
  attributes = {},
  onChange,
}) {
  return buildElement(TagName.INPUT, {
    id,
    classes,
    attributes: {
      ...attributes,
      ...(name ? { name } : {}),
      type,
    },
    events: {
      change: onChange,
    },
  });
}

/**
 * Cria um elemento HTML {@code <select>} reutilizável.
 *
 * <p>Permite definir identificador, nome, classes CSS, opções filhas
 * e uma função executada quando o valor selecionado é alterado.</p>
 *
 * @param {Object} options configurações do elemento
 * @param {string} [options.id] identificador único do elemento
 * @param {string} [options.name] nome do campo do formulário
 * @param {string[]} [options.classes=[]] classes CSS do elemento
 * @param {Node[]} [options.children=[]] elementos filhos, normalmente {@code <option>}
 * @param {Function} [options.onChange] função executada quando o valor
 * selecionado é alterado
 *
 * @returns {HTMLSelectElement} elemento {@code <select>} criado
 */
export function Select({
  id,
  name,
  attributes = {},
  classes = [],
  children = [],
  onChange,
}) {
  return buildElement(TagName.SELECT, {
    id,
    classes,
    children,
    attributes: {
      ...attributes,
      ...(name !== undefined ? { name } : {}),
    },
    events: {
      change: onChange,
    },
  });
}

/**
 * Cria um elemento HTML {@code <label>} associado a um campo de formulário.
 *
 * <p>O atributo {@code for} é definido através do parâmetro {@code htmlFor},
 * permitindo associar o rótulo ao elemento que possui o mesmo identificador.</p>
 *
 * @param {Object} options configurações do elemento
 * @param {string} [options.htmlFor] identificador do elemento ao qual o
 * rótulo está associado
 * @param {string[]} [options.classes=[]] classes CSS do elemento
 *
 * @returns {HTMLLabelElement} elemento {@code <label>} criado
 */
export function Label({ htmlFor, classes = [], children = [] }) {
  return buildElement(TagName.LABEL, {
    classes,
    children,
    attributes: {
      for: htmlFor,
    },
  });
}

/**
 * Cria um elemento HTML {@code <option>} para utilização em um
 * elemento {@code <select>}.
 *
 * <p>Permite definir o valor da opção, seu conteúdo textual e os estados
 * {@code selected} e {@code disabled}.</p>
 *
 * @param {Object} options configurações da opção
 * @param {string} [options.value=""] valor associado à opção
 * ao usuário
 * @param {boolean} [options.selected=false] define se a opção deve
 * ser selecionada inicialmente
 * @param {boolean} [options.disabled=false] define se a opção deve
 * ser desabilitada
 * @param {Node[]} [options.children=[]] elementos filhos
 *
 * @returns {HTMLOptionElement} elemento {@code <option>} criado
 */
export function Option({
  value = "",
  children = [],
  selected = false,
  disabled = false,
}) {
  return buildElement(TagName.OPTION, {
    children,
    attributes: {
      value,
      ...(selected && { selected: "" }),
      ...(disabled && { disabled: "" }),
    },
  });
}
