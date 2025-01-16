import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-FY3MUfvb.js";
import { W as WizardStories, S as Semplice, D as Dettagliato } from "./Wizard.stories-BcQRmhJY.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-CyTa8lwL.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./StepperContainer-CYxeGZAB.js";
import "./index-D3ELxcOV.js";
import "./StepperHeaderElement-CkQ8HoB5.js";
import "./Icon-s99Pqyk9.js";
import "./track-focus-DbJ2CO43.js";
function _createMdxContent(props) {
  const _components = {
    br: "br",
    h1: "h1",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: WizardStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "wizard",
      children: "Wizard"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La componente ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Wizard"
      }), " è utile per demarcare gli step all’interno di un processo."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Non esiste un modo univoco di disegnare questa componente. Il suo utilizzo e la sua applicazione variano a seconda del servizio e il suo design spesso è il frutto di una valutazione preliminare sulla natura del servizio."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "wizard-semplice",
      children: "Wizard semplice"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Un primo esempio di wizard può essere applicato in modali dove viene proposta una serie limitata di step progressivi al termine dei quali segue una call to action conclusiva."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Quello che caratterizza questa tipologia è la semplificazione degli elementi del wizard in sole icone.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "In genere il wizard si trova tra il titolo e la parte di contenuto della componente."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Semplice
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "wizard-dettagliato",
      children: "Wizard dettagliato"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La seconda tipologia di Wizard consiste in una pagina dedicata dove l’utente necessita di svolgere un task per fasi progressive.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Questo si traduce in una versione di Wizard più dettagliata, ricca di elementi e contenuti testuali e quindi di maggiori interazioni per step."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Dettagliato
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
export {
  MDXContent as default
};
