import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-BqxpwL9E.js";
import { M as MenuVerticaleStories, S as Semplice, I as Innestata } from "./MenuVerticale.stories-CAjVkBSW.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-Y7LDblFf.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./Collapse--sLBEfCA.js";
import "./index-D3ELxcOV.js";
import "./utils-Cs0hNT-B.js";
import "./Transition-D-QAwXWC.js";
import "./Icon-D_scqGwU.js";
import "./LinkListItem-E5PaFpui.js";
import "./Sidebar-sTLe6AZz.js";
import "./track-focus-DbJ2CO43.js";
import "./MenuVerticale-DqCThYyv.js";
function _createMdxContent(props) {
  const _components = {
    br: "br",
    em: "em",
    h1: "h1",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: MenuVerticaleStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "menù-verticale",
      children: "Menù Verticale"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Menu verticale"
      }), " può incorporare ", jsxRuntimeExports.jsx(_components.em, {
        children: "liste semplici"
      }), " e ", jsxRuntimeExports.jsx(_components.em, {
        children: "liste innestate"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Si utilizza quando si ha l’esigenza di trattare in forma di lista le voci del menu, quindi all’interno di applicativi con ", jsxRuntimeExports.jsx(_components.strong, {
        children: "molte sezioni"
      }), " cui si deve dare accesso in qualsiasi punto della navigazione.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Lo si preferisce per garantire la leggibilità degli item nella lista, che potrà essere scrollata per una visualizzazione completa."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Questo tipo di menu è sempre ", jsxRuntimeExports.jsx(_components.strong, {
        children: "collocato a sinistra dello schermo"
      }), " per facilitare una lettura consequenziale delle informazioni."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "semplice",
      children: "Semplice"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Semplice
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "innestata",
      children: "Innestata"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Innestata
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
