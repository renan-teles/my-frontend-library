import { Button } from "../../../../lib/components/lib.interaction.js";
import {
  Icon,
  Paragraph,
  Text,
  Title,
  TitleLevel,
} from "../../../../lib/components/lib.display.js";
import {
  Content,
  MainContent,
  Section,
} from "../../../../lib/components/lib.layout.js";
import { decrement, increment } from "./home.dom.service.js";

/*
  ELEMENTOS HTML DA PÁGINA
*/
export const HomePageElements = {
  paragraphs: {
    count: () => document.querySelector("#p-count"),
  },
};

/*
  PÁGINA
*/
export function HomePage() {
  return Content({
    // Container da Página
    classes: ["w-100", "h-100", "bg-gray"],
    children: [
      Content({
        // Container Principal
        classes: ["container-md"],
        children: [
          MainContent({
            // Conteúdo Principal
            classes: [
              "row",
              "min-vh-100",
              "justify-content-center",
              "align-items-center",
            ],
            children: [
              Section({
                // Seção Principal
                classes: [
                  "col-8",
                  "text-center",
                  "card",
                  "p-5",
                  "bg-white",
                  "shadow",
                ],
                children: [
                  Content({
                    // Textos
                    children: [
                      Title({
                        classes: ["mb-5"],
                        children: [Text("My Frontend Library")],
                        titleLevel: TitleLevel.H2,
                      }),
                      Title({
                        children: [Text("Contador")],
                        titleLevel: TitleLevel.H3,
                      }),
                      Paragraph({
                        id: "p-count",
                        children: [Text("0")],
                        classes: ["mb-4"],
                      }),
                    ],
                  }),

                  Content({
                    // Botões de Ação
                    classes: ["d-flex", "flex-column", "gap-2"],
                    children: [
                      Content({
                        classes: ["col"],
                        children: [
                          Button({
                            id: "btn-increase",
                            classes: [
                              "btn",
                              "btn-success",
                              "btn-grow-on-hover",
                            ],
                            children: [
                              Icon({ classes: ["bi-caret-up-fill", "me-2"] }),
                              Text("Incrementar"),
                            ],
                            onClick: increment,
                          }),
                        ],
                      }),
                      Content({
                        classes: ["col"],
                        children: [
                          Button({
                            id: "btn-decrease",
                            classes: ["btn", "btn-danger", "btn-grow-on-hover"],
                            children: [
                              Icon({ classes: ["bi-caret-down-fill", "me-2"] }),
                              Text("Decrementar"),
                            ],
                            onClick: decrement,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
