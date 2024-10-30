import { ae as jsxRuntimeExports, af as Meta, ag as Canvas } from "./index-CsuMtfLQ.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { B as BreadcrumbStories, H as HomeSenza, D as DueLivelliSenza, T as TreLivelliSenza, a as HomeConIcone, b as DueLivelliCon, c as TreLivelliCon } from "./Breadcrumb.stories-pqXYXIx9.js";
import "./iframe-BvyWEA8u.js";
import "../sb-preview/runtime.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-BUuRC3P_.js";
import "./index-DVdwlR73.js";
import "./index-DLlB04eo.js";
import "./inheritsLoose-DBHupcN5.js";
import "./index-CX5rBMF0.js";
import "./index-BdOSk9or.js";
import "./Breadcrumb-B-fJ6a2h.js";
import "./index-C6XlOQIa.js";
import "./index-xoeSAV6i.js";
import "./utils-BToed_Um.js";
import "./Icon-DAq5ZiWt.js";
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
