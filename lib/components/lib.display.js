import { Content } from "./lib.layout.js";
import { buildElement, TagName } from "./lib.build-element.js";

/**
 * Níveis de título HTML suportados pelo componente {@link Title}.
 *
 * @readonly
 * @enum {string}
 */
export const TitleLevel = {
  /** Título de nível 1. */
  H1: "h1",

  /** Título de nível 2. */
  H2: "h2",

  /** Título de nível 3. */
  H3: "h3",

  /** Título de nível 4. */
  H4: "h4",

  /** Título de nível 5. */
  H5: "h5",

  /** Título de nível 6. */
  H6: "h6",
};

/**
 * Cria um elemento de título HTML.
 *
 * <p>O nível do título é definido através de {@link TitleLevel},
 * permitindo criar elementos {@code <h1>} até {@code <h6>} sem a
 * necessidade de utilizar diretamente o nome da tag.</p>
 *
 * @param {Object} options configurações do título
 * @param {string[]} [options.classes=[]] classes CSS do elemento
 * @param {string} [options.id] identificador único do elemento
 * @param {Node[]} [options.children=[]] elementos filhos do título
 * @param {string} [options.titleLevel=TitleLevel.H1] nível do título
 *
 * @returns {HTMLHeadingElement} elemento de título criado
 */
export function Title({
  classes = [],
  id,
  children = [],
  titleLevel = TitleLevel.H1,
}) {
  return buildElement(titleLevel, {
    id,
    classes,
    children,
  });
}

/**
 * Cria um elemento HTML {@code <i>} utilizado para representar um ícone.
 *
 * <p>Normalmente é utilizado em conjunto com bibliotecas de ícones,
 * como Bootstrap Icons, através das classes CSS fornecidas.</p>
 *
 * @param {Object} options configurações do ícone
 * @param {string[]} [options.classes=[]] classes CSS do ícone
 *
 * @returns {HTMLElement} elemento {@code <i>} criado
 */
export function Icon({ classes = [] }) {
  return buildElement(TagName.I, {
    classes,
  });
}

/**
 * Cria um elemento HTML {@code <strong>} para destacar semanticamente
 * um conteúdo textual.
 *
 * @param {Object} options configurações do elemento
 * @param {Node[]} [options.children=[]] elementos filhos
 * @param {string} [options.id] identificador único do elemento
 *
 * @returns {HTMLElement} elemento {@code <strong>} criado
 */
export function Strong({ children = [], id }) {
  return buildElement(TagName.STRONG, {
    id,
    children,
  });
}

/**
 * Cria um elemento HTML {@code <p>} para representar um parágrafo.
 *
 * <p>Permite definir conteúdo textual, classes CSS e elementos filhos.</p>
 *
 * @param {Object} options configurações do parágrafo
 * @param {string[]} [options.classes=[]] classes CSS do elemento
 * @param {Node[]} [options.children=[]] elementos filhos
 * @param {string} [options.id] identificador único do elemento
 *
 * @returns {HTMLParagraphElement} elemento {@code <p>} criado
 */
export function Paragraph({ classes = [], children = [], id }) {
  return buildElement(TagName.P, {
    id,
    classes,
    children,
  });
}

/**
 * Cria um elemento HTML {@code <small>} para representar um conteúdo
 * textual de menor destaque.
 *
 * @param {Object} options configurações do elemento
 * @param {string} [options.textContent=""] conteúdo textual do elemento
 * @param {string[]} [options.classes=[]] classes CSS do elemento
 *
 * @returns {HTMLElement} elemento {@code <small>} criado
 */
export function Small({ classes = [], children = [] }) {
  return buildElement(TagName.SMALL, {
    classes,
    children,
  });
}

/**
 * Cria um elemento HTML {@code <span>} para representar conteúdo
 * textual ou conteúdo de destaque em linha.
 *
 * @param {Object} options configurações do elemento
 * @param {string} [options.id] identificador único do elemento
 * @param {string[]} [options.classes=[]] classes CSS do elemento
 *
 * @returns {HTMLSpanElement} elemento {@code <span>} criado
 */
export function Span({ id, classes = [], children = [] }) {
  return buildElement(TagName.SPAN, {
    id,
    classes,
    children,
  });
}

/**
 * Cria um elemento HTML {@code <hr>} para representar uma divisão
 * temática entre conteúdos.
 *
 * @param {Object} options configurações do elemento
 * @param {string[]} [options.classes=[]] classes CSS do elemento
 *
 * @returns {HTMLHRElement} elemento {@code <hr>} criado
 */
export function Line({ classes = [] } = {}) {
  return buildElement(TagName.HR, {
    classes,
  });
}

/**
 * Cria um nó de texto DOM.
 *
 * <p>Diferentemente dos demais componentes, este método não cria um
 * elemento HTML. Ele cria diretamente um {@link Text} node, permitindo
 * adicionar texto como filho de outros elementos sem utilizar
 * {@code innerHTML}.</p>
 *
 * @param {string} [text=""] conteúdo textual
 *
 * @returns {Text} nó de texto criado
 */
export function Text(text) {
  return document.createTextNode(text);
}

/**
 * Cria um elemento de conteúdo HTML a partir de uma string.
 *
 * <p>O conteúdo informado é inserido diretamente no elemento por meio
 * da propriedade {@code innerHTML}.</p>
 *
 * @param {string} textHtml conteúdo HTML que será inserido no elemento
 *
 * @returns {HTMLElement} elemento contendo o HTML informado
 *
 */
export function TextHtml(textHtml) {
  const element = Content();

  element.innerHTML = textHtml;

  return element;
}
