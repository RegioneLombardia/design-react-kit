import { j as jsxRuntimeExports } from "./jsx-runtime-CXYHfzc5.js";
import { useMDXComponents } from "./index-CvLaAZUv.js";
import { M as Meta, C as Canvas } from "./blocks-BNLORGWO.js";
import { T as TimelineStories, E as Esempi } from "./Timeline.stories-DhECmW5A.js";
import "./iframe-CHwcEDm1.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-C581bQpe.js";
import "./Col-BjL_VQHj.js";
import "./utils-EKL-V6E8.js";
import "./index-BhjGuW_H.js";
import "./Card-2fn_x09B.js";
import "./Icon-DoI8qbhT.js";
import "./track-focus-DbJ2CO43.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: TimelineStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "timeline",
      children: "Timeline"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "componente-per-la-visualizzazione-cronologica-di-eventi",
      children: "Componente per la visualizzazione cronologica di eventi."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Esempio"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Timeline"
      }), " contiene un elenco di ", jsxRuntimeExports.jsx(_components.code, {
        children: "TimelinePin"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Ogni ", jsxRuntimeExports.jsx(_components.code, {
        children: "TimelinePin"
      }), " contiene un icona, ed una label indicante la data dell’evento."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il ", jsxRuntimeExports.jsx(_components.code, {
        children: "TimelinePin"
      }), " ha tre varianti indicati da attributi:"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "past"
        }), " : per indicare nella timeline eventi del passato (colore blu scuro)"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "now"
        }), " : per indicare nella timeline eventi collocati nel presente (azzurro)"]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Nessun attributo aggiuntivo: per collocare gli eventi nel futuro. (azzurro chiaro)"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Esempi
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
