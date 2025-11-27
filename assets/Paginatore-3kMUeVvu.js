import { j as jsxRuntimeExports } from "./jsx-runtime-BeHeGpne.js";
import { useMDXComponents } from "./index-COSitiYT.js";
import { M as Meta, C as Canvas } from "./blocks-C3pkO_Ko.js";
import { P as PaginatoreStories, D as Default, M as MoreComponent, J as JumpToPage, S as SimpleMode } from "./Paginatore.stories-D0Mf4O1t.js";
import "./iframe-BdFmv8SM.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-D2R6h4pv.js";
import "./Form-B4YfklDM.js";
import "./utils-I-sN1Vsl.js";
import "./FormGroup-Ce3ILOWp.js";
import "./index-CkVteFxl.js";
import "./Pager-DffhGZNW.js";
import "./track-focus-DbJ2CO43.js";
import "./Icon-BOZjw-AL.js";
import "./Input-Bq_7me4w.js";
import "./index-D_YqDt74.js";
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
