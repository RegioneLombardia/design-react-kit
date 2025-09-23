import { j as jsxRuntimeExports } from "./jsx-runtime-HAoMODvy.js";
import { useMDXComponents } from "./index-PmpccBvv.js";
import { M as Meta, C as Canvas } from "./blocks-B4rLg4Zw.js";
import "./track-focus-DbJ2CO43.js";
import { S as SliderStories, a as Slider } from "./Slider.stories-BjaZtF5t.js";
import "./iframe-CMMl7uns.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-tK7Z1sPi.js";
import "./Form-DpdCseBx.js";
import "./utils-C9kJvCLK.js";
import "./FormGroup-Cz7ZFUfS.js";
import "./index-DITDp3yo.js";
import "./Input-DuzUnKZk.js";
import "./index-DBau4ZCa.js";
import "./Icon-BqdlmApZ.js";
import "./utils-CwYUlCuU.js";
function _createMdxContent(props) {
  const _components = {
    br: "br",
    h1: "h1",
    p: "p",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: SliderStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "slider",
      children: "Slider"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Gli ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Slider"
      }), " offrono la possibilità di selezionare un valore da un intervallo posto lungo una barra in maniera visiva ed immediata, presentando l’intera gamma di scelte possibili per l’utente.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Queste componenti sono ideali per regolare impostazioni come volume e luminosità o per applicare filtri e possono utilizzare icone su entrambe le estremità della barra per rappresentare una scala numerica o relativa."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Slider
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
