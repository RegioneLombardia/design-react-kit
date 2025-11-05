import { j as jsxRuntimeExports } from "./jsx-runtime-CZvMP_Mb.js";
import { useMDXComponents } from "./index-8uiiSus7.js";
import { M as Meta, C as Canvas } from "./blocks-ViceaN0z.js";
import { G as GestioneLoghiMultipliStories, a as GestioneLoghiMultipli, V as VersioneOttoLoghi } from "./GestioneLoghiMultipli.stories-BGIHMbu0.js";
import "./iframe-bYA1CaqE.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-D0HQBa1B.js";
import "./Container-JFZX7WkN.js";
import "./utils-qr7fhAGw.js";
import "./index-DeYFl_vO.js";
import "./Col-Bw1MHWJi.js";
import "./track-focus-DbJ2CO43.js";
import "./Footer-9t83a3UX.js";
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h1: "h1",
    p: "p",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: GestioneLoghiMultipliStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "gestione-loghi-multipli",
      children: "Gestione Loghi Multipli"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Nel caso in cui sia necessario inserire loghi di ", jsxRuntimeExports.jsx(_components.em, {
        children: "main sponsor o partner tecnici"
      }), ", essi possono essere posizionati ", jsxRuntimeExports.jsx(_components.strong, {
        children: "sotto forma di banner appena sopra il footer"
      }), ", come mostrato negli esempi di seguito.\nIn alternativa possono essere ", jsxRuntimeExports.jsx(_components.strong, {
        children: "accolti nel footer"
      }), " (si veda la sezione dedicata al Footer per esempi dedicati a questo caso)."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Nel caso del banner posto sopra il footer, i loghi devono essere ", jsxRuntimeExports.jsx(_components.strong, {
        children: "posizionati orizzontalmente"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Si consiglia di inserire un ", jsxRuntimeExports.jsx(_components.strong, {
        children: "massimo di 4 loghi per riga"
      }), ", e qualora il logo di Regione Lombardia fosse già stato inserito nell’header esso ", jsxRuntimeExports.jsx(_components.strong, {
        children: "non deve essere inserito nuovamente"
      }), " nel banner."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.em, {
        children: "Versione del banner con 4 loghi"
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: GestioneLoghiMultipli
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.em, {
        children: "Versione del banner con 8 loghi"
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: VersioneOttoLoghi
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
