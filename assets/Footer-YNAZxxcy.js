import { j as jsxRuntimeExports } from "./jsx-runtime-85EhGj5b.js";
import { useMDXComponents } from "./index-P7YjaiZ-.js";
import { M as Meta, C as Canvas } from "./index-DoFZ2GT_.js";
import { F as FooterStories, a as FooterCompleto, b as FooterCompatto } from "./Footer.stories-Cw4v76h0.js";
import "./index-CkHlViRq.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-CkfUY0Fy.js";
import "./index-CHqOcmVC.js";
import "./index-rIQx-mDE.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
import "./Container-Dh47g2ou.js";
import "./utils-o7gD2GSt.js";
import "./index-xoeSAV6i.js";
import "./Col-BILKv079.js";
import "./Form-HwQfqogR.js";
import "./Label-BFRYMZ6g.js";
import "./Button-Bbm-EeTy.js";
import "./Button-BIZ5TMd_.js";
import "./Icon-F0eg8ks0.js";
import "./Input-DAMspaeT.js";
import "./index-C2nrqh0v.js";
import "./utils-CwYUlCuU.js";
import "./LinkListItem-BXSHz39N.js";
import "./track-focus-DbJ2CO43.js";
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: FooterStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "footer",
      children: "Footer"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il componente definisce un'area a piè di pagina per visualizzare contenuti secondari, una mappa di navigazione, informazioni sul sito e sulla PA titolare e i riferimenti obbligatori richiesti dalle norme"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "completo",
      children: "Completo"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: FooterCompleto
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "compatto",
      children: "Compatto"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: FooterCompatto
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
