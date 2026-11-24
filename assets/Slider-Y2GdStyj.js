import { j as jsxRuntimeExports } from "./jsx-runtime-BQvmpnS1.js";
import { useMDXComponents } from "./index-BdiD6C9B.js";
import { M as Meta, C as Canvas } from "./blocks-Dib3DQow.js";
import "./track-focus-DbJ2CO43.js";
import { S as SliderStories, a as Slider } from "./Slider.stories-DE6vq1e3.js";
import "./iframe-HXAWYzM9.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-Cm8uWDCx.js";
import "./Form-D0DRmFJJ.js";
import "./utils-BMtw1b3F.js";
import "./FormGroup-DC9C9wib.js";
import "./index-CKghkky9.js";
import "./Input-DsTtd178.js";
import "./index-Cj8_wu9Z.js";
import "./Icon-DZMKCTMd.js";
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
