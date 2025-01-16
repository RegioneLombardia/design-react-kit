import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-FY3MUfvb.js";
import { D as DivisoriStories, a as Divisori } from "./Divisori.stories-CKAfWR0v.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-CyTa8lwL.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
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
