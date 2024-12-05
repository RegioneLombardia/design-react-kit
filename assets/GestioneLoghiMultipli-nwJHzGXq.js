import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-CqkeutgF.js";
import { G as GestioneLoghiMultipliStories, a as GestioneLoghiMultipli, V as VersioneOttoLoghi } from "./GestioneLoghiMultipli.stories-B8ZKQQ75.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-CaWOas9z.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./Footer-CTbKndUw.js";
import "./Col-CBduUdZh.js";
import "./utils-Cs0hNT-B.js";
import "./index-D3ELxcOV.js";
import "./Container-DM0Kn0QD.js";
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
