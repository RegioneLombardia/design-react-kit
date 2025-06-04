import { j as jsxRuntimeExports } from "./jsx-runtime-85EhGj5b.js";
import { useMDXComponents } from "./index-P7YjaiZ-.js";
import { M as Meta, C as Canvas } from "./index-DoFZ2GT_.js";
import { P as PaginatoreStories, D as Default, M as MoreComponent, J as JumpToPage, S as SimpleMode } from "./Paginatore.stories-BtbglPpj.js";
import "./index-CkHlViRq.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-CkfUY0Fy.js";
import "./index-CHqOcmVC.js";
import "./index-rIQx-mDE.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
import "./Form-HwQfqogR.js";
import "./utils-o7gD2GSt.js";
import "./FormGroup-i-FNyjZv.js";
import "./index-xoeSAV6i.js";
import "./Pager-BBRSCtb2.js";
import "./Icon-F0eg8ks0.js";
import "./Input-DAMspaeT.js";
import "./index-C2nrqh0v.js";
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
