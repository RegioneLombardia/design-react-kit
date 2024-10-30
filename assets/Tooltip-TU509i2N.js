import { ae as jsxRuntimeExports, af as Meta, ag as Canvas } from "./index-CsuMtfLQ.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { T as TooltipStories, E as EsempioBase, P as Posizionamento } from "./Tooltip.stories-0y_McJc3.js";
import { C as Callout, a as CalloutText } from "./CalloutText-Dq2-0GdE.js";
import { C as CalloutTitle } from "./CalloutTitle-CDZdaeIL.js";
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
import "./Icon-DAq5ZiWt.js";
import "./index-xoeSAV6i.js";
import "./UncontrolledTooltip-CunqDPtd.js";
import "./index-C6XlOQIa.js";
import "./TooltipPopoverWrapper-0lmegcVF.js";
import "./Popper-BdfyK_V7.js";
import "./utils-BToed_Um.js";
import "./Fade-ZyZ8S0O7.js";
import "./Transition-BB1znAg7.js";
import "./Container-BSU_5rqZ.js";
import "./Col-sbjB5dMm.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: TooltipStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "tooltip",
      children: "Tooltip"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Tooltip"
      }), " è una componente che viene richiamata al passaggio del mouse (hover) per fornire informazioni su un determinato elemento o processo."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["I tooltip - così come i ", jsxRuntimeExports.jsx(_components.em, {
        children: "popover (vedere sotto)"
      }), " - possono essere inseriti all’interno di modali secondo necessità.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Quando le modali vengono chiuse, anche le descrizioni comandi e i popover all’interno vengono automaticamente ignorati."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Nello specifico, In base alla dimensione e alla composizione del testo un tooltip può essere composto da una o più righe.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Per la spiegazione di ", jsxRuntimeExports.jsx(_components.strong, {
        children: "processi"
      }), " si consiglia di utilizzare un tooltip con ", jsxRuntimeExports.jsx(_components.strong, {
        children: "area più ampia"
      }), " in modo da poter fornire tutte le informazioni necessarie."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "esempio-base",
      children: "Esempio base"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioBase
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: `const EsempioBaseHook = () => {
  const ref1 = useRef(null);

  return (
    < >
      <span ref={ref1} tabIndex={0}>Testo esempio base
        <sup>
          <Icon color="info" icon="it-info-circle" size="xs"/>
        </sup>
      </span>

      <UncontrolledTooltip placement='top' target={ref1}>
        Primo tooltip
      </UncontrolledTooltip>
    </ >
  );
};
`
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "posizionamento",
      children: "Posizionamento"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per il posizionamento è sufficiente impostare l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "placement"
      }), ":"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Posizionamento
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "info",
        highlight: true,
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Documentazione tecnica"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Per altri dettagli sull'uso di questa componente si veda la ", jsxRuntimeExports.jsx(_components.strong, {
              children: jsxRuntimeExports.jsx(_components.a, {
                href: "/docs/documentazione-componenti-tooltip--documentazione#documentazione-ed-esempi-per-aggiungere-tooltip-personalizzati",
                children: "relativa pagina"
              })
            })]
          })
        })]
      })
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
