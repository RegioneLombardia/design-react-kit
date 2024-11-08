import { ae as jsxRuntimeExports, af as Meta, ag as Canvas } from "./index-Bktid5GI.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { T as TimelineStories, E as Esempi } from "./Timeline.stories-VhzKDqQ4.js";
import "./iframe-B3mUzJfe.js";
import "../sb-preview/runtime.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-BUuRC3P_.js";
import "./index-DVdwlR73.js";
import "./index-DLlB04eo.js";
import "./inheritsLoose-DBHupcN5.js";
import "./index-CX5rBMF0.js";
import "./index-BdOSk9or.js";
import "./index-xoeSAV6i.js";
import "./Col-sbjB5dMm.js";
import "./index-C6XlOQIa.js";
import "./utils-BToed_Um.js";
import "./Icon-egx6hrW4.js";
import "./Card-BYQjmvUn.js";
import "./CardText-DxxoM_fv.js";
import "./CardCategory-BZ5qfdQL.js";
import "./CardTitle-DxbL_VUn.js";
import "./CardSignature-iFNqyl1P.js";
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
