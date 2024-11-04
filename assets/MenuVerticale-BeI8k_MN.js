import { ae as jsxRuntimeExports, af as Meta, ag as Canvas } from "./index-BBhyCMAt.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { M as MenuVerticaleStories, S as Semplice, I as Innestata } from "./MenuVerticale.stories-Cu131OjV.js";
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
import "./MenuVerticale-CunI0Gwc.js";
import "./index-xoeSAV6i.js";
import "./Sidebar-Bu00DWDp.js";
import "./LinkListItem-B69qYNZ5.js";
import "./Icon-Djhnk6Va.js";
import "./Collapse-DybBevio.js";
import "./index-C6XlOQIa.js";
import "./utils-BToed_Um.js";
import "./Transition-BB1znAg7.js";
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
