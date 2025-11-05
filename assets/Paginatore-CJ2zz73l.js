import { j as jsxRuntimeExports } from "./jsx-runtime-CZvMP_Mb.js";
import { useMDXComponents } from "./index-8uiiSus7.js";
import { M as Meta, C as Canvas } from "./blocks-ViceaN0z.js";
import { P as PaginatoreStories, D as Default, M as MoreComponent, J as JumpToPage, S as SimpleMode } from "./Paginatore.stories-CpZkuVsw.js";
import "./iframe-bYA1CaqE.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-D0HQBa1B.js";
import "./Form-CgPiSfoT.js";
import "./utils-qr7fhAGw.js";
import "./FormGroup-DM22xfTi.js";
import "./index-DeYFl_vO.js";
import "./Pager-C8P83cXg.js";
import "./Icon-DeQEcrNU.js";
import "./Input-CXUjzcOq.js";
import "./index-CIdfaX2c.js";
import "./utils-CwYUlCuU.js";
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
