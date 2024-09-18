import { Preview } from "@storybook/react";
import "bootstrap-lombardia/dist/css/bootstrap-lombardia.min.css";
import "../assets/css/bl-fixes.css";
import "../assets/css/bi-fonts.scss";
import "../assets/css/storybook-fixes.css";
import "../assets/css/it25-custom-docs.css";
import theme from "./theme";

const preview: Preview = {
    parameters: {
        docs: {
            theme: theme,
            toc: {
                headingSelector: "h1, h2, h3",
                title: "Indice",
            },
            source: {
                type: "dynamic",
            },
        },
        options: {
            storySort: {
                order: [
                    "Linee Guida",
                    ["Welcome", "Utilità", "Componenti Principali", "Navigazione", "Call to Action", "Informazioni", "Inserimento"],
                    "Documentazione",
                    ["Welcome", "Organizzare gli spazi", "Organizzare i contenuti", "Menu di navigazione", "Componenti", "Form", "Utilities"],
                    "*",
                ],
            },
        },
    },
};

export default preview;
