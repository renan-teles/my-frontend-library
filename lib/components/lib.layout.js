import { buildElement, TagName } from "./lib.build-element.js";

/**
 * Cria um elemento HTML {@code <div>} comum reutilizável para servir como
 * container de conteúdo.
 *
 * <p>Permite definir um identificador, classes CSS, atributos HTML,
 * eventos DOM e elementos filhos.</p>
 *
 * @param {Object} options configurações do container
 * @param {string} [options.id] identificador único do elemento
 * @param {string[]} [options.classes=[]] classes CSS do container
 * @param {Object.<string, string>} [options.attributes={}]
 * atributos HTML adicionais
 * @param {Object.<string, Function>} [options.events={}]
 * eventos DOM associados ao container
 * @param {Node[]} [options.children=[]] elementos filhos do container
 *
 * @returns {HTMLDivElement} elemento {@code <div>} criado
 */
export function Content({
  classes = [],
  children = [],
  id,
  attributes = {},
  events = {},
} = {}) {
  return buildElement(TagName.DIV, {
    id,
    classes,
    attributes,
    children,
    events,
  });
}

/**
 * Cria um elemento HTML {@code <div>} section reutilizável para servir como
 * container de conteúdo.
 *
 * <p>Permite definir um identificador, classes CSS, atributos HTML,
 * eventos DOM e elementos filhos.</p>
 *
 * @param {Object} options configurações do container
 * @param {string} [options.id] identificador único do elemento
 * @param {string[]} [options.classes=[]] classes CSS do container
 * @param {Object.<string, string>} [options.attributes={}]
 * atributos HTML adicionais
 * @param {Object.<string, Function>} [options.events={}]
 * eventos DOM associados ao container
 * @param {Node[]} [options.children=[]] elementos filhos do container
 *
 * @returns {HTMLDivElement} elemento {@code <div>} criado
 */
export function Section({
  classes = [],
  children = [],
  id,
  attributes = {},
  events = {},
}) {
  return buildElement(TagName.SECTION, {
    id,
    classes,
    attributes,
    children,
    events,
  });
}

/**
 * Cria um elemento HTML {@code <div>} header reutilizável para servir como
 * container de conteúdo.
 *
 * <p>Permite definir um identificador, classes CSS, atributos HTML,
 * eventos DOM e elementos filhos.</p>
 *
 * @param {Object} options configurações do container
 * @param {string} [options.id] identificador único do elemento
 * @param {string[]} [options.classes=[]] classes CSS do container
 * @param {Object.<string, string>} [options.attributes={}]
 * atributos HTML adicionais
 * @param {Object.<string, Function>} [options.events={}]
 * eventos DOM associados ao container
 * @param {Node[]} [options.children=[]] elementos filhos do container
 *
 * @returns {HTMLDivElement} elemento {@code <div>} criado
 */
export function Header({
  classes = [],
  children = [],
  id,
  attributes = {},
  events = {},
}) {
  return buildElement(TagName.HEADER, {
    id,
    classes,
    attributes,
    children,
    events,
  });
}

/**
 * Cria um elemento HTML {@code <div>} aside reutilizável para servir como
 * container de conteúdo.
 *
 * <p>Permite definir um identificador, classes CSS, atributos HTML,
 * eventos DOM e elementos filhos.</p>
 *
 * @param {Object} options configurações do container
 * @param {string} [options.id] identificador único do elemento
 * @param {string[]} [options.classes=[]] classes CSS do container
 * @param {Object.<string, string>} [options.attributes={}]
 * atributos HTML adicionais
 * @param {Object.<string, Function>} [options.events={}]
 * eventos DOM associados ao container
 * @param {Node[]} [options.children=[]] elementos filhos do container
 *
 * @returns {HTMLDivElement} elemento {@code <div>} criado
 */
export function Aside({
  classes = [],
  children = [],
  id,
  attributes = {},
  events = {},
}) {
  return buildElement(TagName.ASIDE, {
    id,
    classes,
    attributes,
    children,
    events,
  });
}

/**
 * Cria um elemento HTML {@code <div>} article reutilizável para servir como
 * container de conteúdo.
 *
 * <p>Permite definir um identificador, classes CSS, atributos HTML,
 * eventos DOM e elementos filhos.</p>
 *
 * @param {Object} options configurações do container
 * @param {string} [options.id] identificador único do elemento
 * @param {string[]} [options.classes=[]] classes CSS do container
 * @param {Object.<string, string>} [options.attributes={}]
 * atributos HTML adicionais
 * @param {Object.<string, Function>} [options.events={}]
 * eventos DOM associados ao container
 * @param {Node[]} [options.children=[]] elementos filhos do container
 *
 * @returns {HTMLDivElement} elemento {@code <div>} criado
 */
export function Article({
  classes = [],
  children = [],
  id,
  attributes = {},
  events = {},
}) {
  return buildElement(TagName.ARTICLE, {
    id,
    classes,
    attributes,
    children,
    events,
  });
}

/**
 * Cria um elemento HTML {@code <div>} main reutilizável para servir como
 * container de conteúdo.
 *
 * <p>Permite definir um identificador, classes CSS, atributos HTML,
 * eventos DOM e elementos filhos.</p>
 *
 * @param {Object} options configurações do container
 * @param {string} [options.id] identificador único do elemento
 * @param {string[]} [options.classes=[]] classes CSS do container
 * @param {Object.<string, string>} [options.attributes={}]
 * atributos HTML adicionais
 * @param {Object.<string, Function>} [options.events={}]
 * eventos DOM associados ao container
 * @param {Node[]} [options.children=[]] elementos filhos do container
 *
 * @returns {HTMLDivElement} elemento {@code <div>} criado
 */
export function MainContent({
  classes = [],
  children = [],
  id,
  attributes = {},
  events = {},
}) {
  return buildElement(TagName.MAIN, {
    id,
    classes,
    attributes,
    children,
    events,
  });
}
