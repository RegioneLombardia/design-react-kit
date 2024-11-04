import { ae as jsxRuntimeExports, af as Meta, ag as Canvas } from "./index-BBhyCMAt.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { D as DivisoriStories, a as Divisori } from "./Divisori.stories-w1ZuT_6g.js";
import "./iframe-B3SUZ60o.js";
import "../sb-preview/runtime.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-BUuRC3P_.js";
import "./index-DVdwlR73.js";
import "./index-DLlB04eo.js";
import "./inheritsLoose-DBHupcN5.js";
import "./index-CX5rBMF0.js";
import "./index-BdOSk9or.js";
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
      of: DivisoriStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "divisori",
      children: "Divisori"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["I ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Divisori"
      }), " sono elementi grafici che permettono di ", jsxRuntimeExports.jsx(_components.strong, {
        children: "separare in maniera concettuale più contenuti"
      }), " e di ", jsxRuntimeExports.jsx(_components.strong, {
        children: "organizzare essi in gruppi"
      }), ".", jsxRuntimeExports.jsx(_components.br, {}), "\n", "I divisori devono essere evidenti in un layout, ma non predominanti e dovrebbero essere utilizzati solo se gli elementi necessitano di una separazione aggiuntiva o alternativa allo spazio vuoto (o bianco) che si impiega di default."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Divisori
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
