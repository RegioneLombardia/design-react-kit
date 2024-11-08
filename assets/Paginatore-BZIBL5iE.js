import { ae as jsxRuntimeExports, af as Meta, ag as Canvas } from "./index-Bktid5GI.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { P as PaginatoreStories, D as Default, M as MoreComponent, J as JumpToPage, S as SimpleMode } from "./Paginatore.stories-CVrA0YE1.js";
import "./iframe-B3mUzJfe.js";
import "../sb-preview/runtime.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-BUuRC3P_.js";
import "./index-DVdwlR73.js";
import "./index-DLlB04eo.js";
import "./inheritsLoose-DBHupcN5.js";
import "./index-CX5rBMF0.js";
import "./index-BdOSk9or.js";
import "./Pager-CSJgg-IQ.js";
import "./index-C6XlOQIa.js";
import "./index-xoeSAV6i.js";
import "./utils-BToed_Um.js";
import "./Form-94CbFQsc.js";
import "./FormGroup-Dgycp2JI.js";
import "./Icon-egx6hrW4.js";
import "./Input-Bvr5a3Fa.js";
import "./index-C2nrqh0v.js";
import "./utils-CwYUlCuU.js";
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
      of: PaginatoreStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "paginatore",
      children: "Paginatore"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Paginatore"
      }), " è una componente utile per indicare una serie di contenuti correlati tra ", jsxRuntimeExports.jsx(_components.strong, {
        children: "più pagine"
      }), ".", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Tendenzialmente si trova nella parte in ", jsxRuntimeExports.jsx(_components.strong, {
        children: "basso a destra o al centro"
      }), " della pagina."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "default",
      children: "Default"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Default
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "variante-con-more",
      children: 'Variante con "more"'
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: MoreComponent
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "variante-con-jump-page",
      children: "Variante con jump page"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: JumpToPage
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "variante-semplificata",
      children: "Variante semplificata"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SimpleMode
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
