import { isNode } from "../validators/html-elements.validators.js";
import {
  isArray,
  isFunction,
  isObject,
  isString,
} from "../validators/primitive-types.validators.js";

/**
 * Cria um elemento HTML e configura suas propriedades, atributos,
 * eventos, conteúdo e elementos filhos.
 *
 * <p>Este é o principal utilitário da camada de componentes e serve
 * como uma abstração sobre {@link Document#createElement}.</p>
 *
 * <p>O elemento pode ser configurado através de:</p>
 *
 * <ul>
 *   <li>identificador HTML;</li>
 *   <li>classes CSS;</li>
 *   <li>atributos HTML;</li>
 *   <li>eventos DOM;</li>
 *   <li>conteúdo textual;</li>
 *   <li>elementos filhos.</li>
 * </ul>
 *
 * @param {string} tagName nome da tag HTML que será criada
 * @param {Object} [options={}] configurações do elemento
 * @param {string} [options.id] identificador do elemento
 * @param {string[]} [options.classes=[]] classes CSS do elemento
 * @param {Object.<string, string>} [options.attributes={}]
 * atributos HTML que serão adicionados ao elemento
 * @param {Object.<string, Function>} [options.events={}]
 * eventos DOM associados ao elemento
 * @param {string} [options.textContent] conteúdo textual do elemento
 * @param {Node[]} [options.children=[]] elementos filhos
 *
 * @returns {HTMLElement} elemento HTML criado
 *
 * @throws {TypeError} se algum parâmetro possuir tipo inválido
 * @throws {Error} se algum parâmetro obrigatório estiver vazio
 */
export function buildElement(
  tagName,
  {
    id,
    classes = [],
    attributes = {},
    events = {},
    textContent,
    children = [],
  } = {},
) {
  /*
   * ==============================
   * Validação do nome da tag
   * ==============================
   */
  if (!isString(tagName)) {
    throw new TypeError("O parâmetro 'tagName' deve ser uma string.");
  }

  if (tagName.trim() === "") {
    throw new Error("O parâmetro 'tagName' não pode ser vazio.");
  }

  /*
   * ==============================
   * Validação do ID
   * ==============================
   */
  if (id !== undefined && !isString(id)) {
    throw new TypeError("O parâmetro 'id' deve ser uma string.");
  }

  /*
   * ==============================
   * Validação das classes
   * ==============================
   */
  if (!isArray(classes)) {
    throw new TypeError("O parâmetro 'classes' deve ser um array.");
  }

  for (const className of classes) {
    if (!isString(className)) {
      throw new TypeError("Todos os elementos de 'classes' devem ser strings.");
    }

    if (className.trim() === "") {
      throw new Error("Os nomes das classes não podem ser vazios.");
    }
  }

  /*
   * ==============================
   * Validação dos atributos
   * ==============================
   */
  if (!isObject(attributes)) {
    throw new TypeError("O parâmetro 'attributes' deve ser um objeto.");
  }

  for (const [name, value] of Object.entries(attributes)) {
    if (!isString(name)) {
      throw new TypeError("Os nomes dos atributos devem ser strings.");
    }

    if (!isString(value)) {
      throw new TypeError(`O valor do atributo '${name}' deve ser uma string.`);
    }
  }

  /*
   * ==============================
   * Validação dos eventos
   * ==============================
   */
  if (!isObject(events)) {
    throw new TypeError("O parâmetro 'events' deve ser um objeto.");
  }

  for (const [eventName, handler] of Object.entries(events)) {
    if (!isString(eventName)) {
      throw new TypeError("Os nomes dos eventos devem ser strings.");
    }

    if (!isFunction(handler)) {
      throw new TypeError(
        `O manipulador do evento '${eventName}' deve ser uma função.`,
      );
    }
  }

  /*
   * ==============================
   * Validação do conteúdo textual
   * ==============================
   */
  if (textContent !== undefined && !isString(textContent)) {
    throw new TypeError("O parâmetro 'textContent' deve ser uma string.");
  }

  /*
   * ==============================
   * Validação dos elementos filhos
   * ==============================
   */
  if (!isArray(children)) {
    throw new TypeError("O parâmetro 'children' deve ser um array.");
  }

  for (const child of children) {
    if (!isNode(child)) {
      throw new TypeError(
        "Todos os elementos de 'children' devem ser nós do DOM.",
      );
    }
  }

  /*
   * ==============================
   * Criação do elemento
   * ==============================
   */

  const element = document.createElement(tagName);

  /*
   * ==============================
   * Aplicação do ID
   * ==============================
   */
  if (id !== undefined) {
    element.id = id;
  }

  /*
   * ==============================
   * Aplicação das classes
   * ==============================
   */
  if (classes.length > 0) {
    element.classList.add(...classes);
  }

  /*
   * ==============================
   * Aplicação dos atributos
   * ==============================
   */
  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });

  /*
   * ==============================
   * Registro dos eventos
   * ==============================
   */
  Object.entries(events).forEach(([eventName, handler]) => {
    element.addEventListener(eventName, handler);
  });

  /*
   * ==============================
   * Conteúdo do elemento
   * ==============================
   */
  if (textContent !== undefined) {
    element.textContent = textContent;
  } else {
    children.forEach((child) => {
      element.appendChild(child);
    });
  }

  return element;
}

/**
 * Nomes das principais tags HTML utilizadas pelos componentes
 * da aplicação.
 *
 * <p>Este objeto funciona como um enum para evitar a utilização
 * direta de strings com nomes de tags durante a criação dos
 * componentes.</p>
 *
 * <p>Os valores correspondem aos nomes oficiais das respectivas
 * tags HTML.</p>
 *
 * @readonly
 * @enum {string}
 */
export const TagName = {
  /** Elementos de estrutura e conteúdo. */
  DIV: "div",
  SPAN: "span",
  P: "p",
  SMALL: "small",
  STRONG: "strong",

  /** Títulos de diferentes níveis hierárquicos. */
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",

  /** Elementos de estrutura semântica da página. */
  HEADER: "header",
  FOOTER: "footer",
  MAIN: "main",
  SECTION: "section",
  ARTICLE: "article",
  ASIDE: "aside",
  NAV: "nav",

  /** Elementos relacionados a formulários. */
  FORM: "form",
  LABEL: "label",
  INPUT: "input",
  TEXTAREA: "textarea",
  SELECT: "select",
  OPTION: "option",
  BUTTON: "button",

  /** Elementos para listas. */
  UL: "ul",
  OL: "ol",
  LI: "li",

  /** Elementos relacionados a tabelas. */
  TABLE: "table",
  THEAD: "thead",
  TBODY: "tbody",
  TFOOT: "tfoot",
  TR: "tr",
  TH: "th",
  TD: "td",

  /** Elementos para links, imagens e elementos auxiliares. */
  A: "a",
  IMG: "img",
  I: "i",
  HR: "hr",
  BR: "br",

  /** Elementos relacionados a conteúdo multimídia. */
  VIDEO: "video",
  AUDIO: "audio",
  SOURCE: "source",

  /** Elementos relacionados a desenho e representação de código. */
  CANVAS: "canvas",
  CODE: "code",
};
