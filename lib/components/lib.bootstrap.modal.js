import { isString } from "../validators/primitive-types.validators.js";
import { CustomButton } from "./lib.buttons.js";
import { Icon, Text, Title, TitleLevel } from "./lib.display.js";
import { Content } from "./lib.layout.js";

/**
 * Cria um modal compatível com o Bootstrap.
 *
 * <p>O componente encapsula a estrutura básica de um modal do Bootstrap,
 * incluindo o container principal, o diálogo, o conteúdo e o cabeçalho.</p>
 *
 * @param {Object} options configurações do modal
 * @param {string} [options.id] identificador único do modal
 * @param {string} [options.titleId] identificador do título do modal
 * @param {string} [options.title=""] título exibido no cabeçalho
 * @param {string[]} [options.classes=[]] classes CSS adicionais do modal
 * @param {Node[]} [options.children=[]] elementos filhos do conteúdo
 * @param {string} [options.icon] classe CSS do ícone
 * @param {Object.<string, string>} [options.attributes={}]
 * atributos HTML adicionais
 *
 * @returns {HTMLDivElement} elemento {@code <div>} principal do modal
 */
export function BootstrapModal({
  id,
  titleId,
  icon,
  title = "",
  classes = [],
  children = [],
  attributes = {},
}) {
  return Content({
    id,
    classes: ["modal", "fade", ...classes],
    attributes: {
      tabindex: "-1",
      "aria-labelledby": titleId,
      "aria-hidden": "true",
      ...attributes,
    },
    children: [
      Content({
        classes: ["modal-dialog", "modal-dialog-centered"],
        children: [
          Content({
            classes: ["modal-content"],
            children: [
              BootstrapModalHeader({
                titleId,
                title,
                icon,
              }),
              ...children,
            ],
          }),
        ],
      }),
    ],
  });
}

/**
 * Cria o cabeçalho de um modal do Bootstrap.
 *
 * <p>O cabeçalho contém o título, um ícone opcional, o botão de fechamento
 * e elementos adicionais fornecidos pelo componente.</p>
 *
 * @param {Object} options configurações do cabeçalho
 * @param {string} [options.titleId] identificador do título
 * @param {string} [options.title=""] conteúdo textual do título
 * @param {string} [options.icon] classe CSS do ícone
 * @param {Node[]} [options.children=[]] elementos adicionais do cabeçalho
 *
 * @returns {HTMLDivElement} elemento {@code <div>} do cabeçalho
 */
export function BootstrapModalHeader({
  titleId,
  title = "",
  icon,
  children = [],
}) {
  return Content({
    classes: ["modal-header"],
    children: [
      Title({
        id: titleId,
        titleLevel: TitleLevel.H1,
        classes: ["modal-title", "fs-5"],
        children: [
          ...(icon
            ? [
                Icon({
                  classes: [icon, "me-2"],
                }),
              ]
            : []),
          Text(title),
        ],
      }),
      BootstrapModalCloseButton(),
      ...children,
    ],
  });
}

/**
 * Cria o botão de fechamento de um modal do Bootstrap.
 *
 * <p>O botão utiliza os atributos {@code data-bs-dismiss} e
 * {@code aria-label} necessários para o comportamento e acessibilidade
 * do componente.</p>
 *
 * @returns {HTMLButtonElement} botão de fechamento criado
 */
export function BootstrapModalCloseButton() {
  return CustomButton({
    classes: ["btn-close"],
    attributes: {
      "data-bs-dismiss": "modal",
      "aria-label": "Close",
    },
  });
}

/**
 * Cria o corpo de um modal do Bootstrap.
 *
 * @param {Object} options configurações do corpo
 * @param {Node[]} [options.children=[]] elementos filhos do corpo
 * @param {string[]} [options.classes=[]] classes CSS adicionais
 *
 * @returns {HTMLDivElement} elemento {@code <div>} do corpo
 */
export function BootstrapModalBody({ children = [], classes = [] }) {
  return Content({
    classes: ["modal-body", ...classes],
    children,
  });
}

/**
 * Cria o rodapé de um modal do Bootstrap.
 *
 * @param {Object} options configurações do rodapé
 * @param {Node[]} [options.children=[]] elementos filhos do rodapé
 * @param {string[]} [options.classes=[]] classes CSS adicionais
 *
 * @returns {HTMLDivElement} elemento {@code <div>} do rodapé
 */
export function BootstrapModalFooter({ children = [], classes = [] }) {
  return Content({
    classes: ["modal-footer", ...classes],
    children,
  });
}

/**
 * Fecha um modal do Bootstrap.
 *
 * @param {string} modalId identificador do elemento HTML do modal
 *
 * @returns {void}
 *
 * @throws {TypeError} se {@code modalId} não for uma string
 * @throws {Error} se {@code modalId} estiver vazio
 * @throws {Error} se nenhum elemento com o identificador informado for encontrado
 */
export function closeBootstrapModal(modalId) {
  if (!isString(modalId)) {
    throw new TypeError("O parâmetro 'modalId' deve ser uma string.");
  }

  if (modalId.trim() === "") {
    throw new Error("O parâmetro 'modalId' não pode ser vazio.");
  }

  const modalElement = document.getElementById(modalId);
  if (!modalElement) {
    throw new Error(`Modal com o ID '${modalId}' não encontrado.`);
  }

  const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
  modal.hide();
}
