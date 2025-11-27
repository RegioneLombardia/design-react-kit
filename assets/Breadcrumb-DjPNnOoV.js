import { j as jsxRuntimeExports } from "./jsx-runtime-BeHeGpne.js";
import { useMDXComponents } from "./index-COSitiYT.js";
import { M as Meta, C as Canvas } from "./blocks-C3pkO_Ko.js";
import "./track-focus-DbJ2CO43.js";
import { B as BreadcrumbStories, H as HomeSenza, D as DueLivelliSenza, T as TreLivelliSenza, a as HomeConIcone, b as DueLivelliCon, c as TreLivelliCon } from "./Breadcrumb.stories-sCOOqRuh.js";
import "./iframe-BdFmv8SM.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-D2R6h4pv.js";
import "./Breadcrumb-CMcJymz6.js";
import "./utils-I-sN1Vsl.js";
import "./index-CkVteFxl.js";
import "./Icon-BOZjw-AL.js";
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
