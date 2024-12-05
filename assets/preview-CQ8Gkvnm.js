import { c as bu } from "./index-D7280_ap.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
const theme = bu({
  base: "light",
  // Typography
  fontBase: '"Titillium web", sans-serif',
  colorPrimary: "#00C5CA",
  colorSecondary: "#297A38",
  // UI
  appBg: "#F3F3F5",
  appContentBg: "#FFF",
  appBorderColor: "grey",
  appBorderRadius: 4,
  brandTitle: "Design React Kit Lombardia",
  brandUrl: "https://github.com/RegioneLombardia/design-react-kit"
});
const preview = {
  parameters: {
    docs: {
      theme,
      toc: {
        headingSelector: "h1, h2, h3",
        title: "Indice"
      },
      source: {
        type: "dynamic"
      }
    },
    options: {
      storySort: {
        order: [
          "Linee Guida",
          ["Welcome", "Utilità", "Componenti Principali", "Navigazione", "Call to Action", "Informazioni", "Inserimento"],
          "Documentazione",
          ["Welcome", "Organizzare gli spazi", "Organizzare i contenuti", "Menu di navigazione", "Componenti", "Form", "Utilities"],
          "*"
        ]
      }
    }
  }
};
export {
  preview as default
};
