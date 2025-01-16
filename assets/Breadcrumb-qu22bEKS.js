import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-FY3MUfvb.js";
import "./track-focus-DbJ2CO43.js";
import { B as BreadcrumbStories, H as HomeSenza, D as DueLivelliSenza, T as TreLivelliSenza, a as HomeConIcone, b as DueLivelliCon, c as TreLivelliCon } from "./Breadcrumb.stories-CuleOhjN.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-CyTa8lwL.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./Breadcrumb-D1W-g0Il.js";
import "./utils-Cs0hNT-B.js";
import "./index-D3ELxcOV.js";
import "./Icon-s99Pqyk9.js";
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
      of: BreadcrumbStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "breadcrumbs",
      children: "Breadcrumbs"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Le ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Breadcrumbs"
      }), " sono un modello di navigazione secondario che aiuta l’utente a ", jsxRuntimeExports.jsx(_components.strong, {
        children: "comprendere la gerarchia tra i livelli e tornare indietro\nattraverso di essi"
      }), ".", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Esse forniscono all’utente un ", jsxRuntimeExports.jsx(_components.strong, {
        children: "feedback relativo sia alla pagina che al percorso di navigazione"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Le Linee Guida per il design digitale di Regione Lombardia prevedono breadcrumbs con e senza icone."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "senza-icone",
      children: "Senza Icone"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.em, {
        children: "Home"
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HomeSenza
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.em, {
        children: "Secondo livello"
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: DueLivelliSenza
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.em, {
        children: "Terzo livello"
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TreLivelliSenza
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "con-icone",
      children: "Con Icone"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HomeConIcone
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.em, {
        children: "Secondo livello"
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: DueLivelliCon
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.em, {
        children: "Terzo livello"
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TreLivelliCon
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
