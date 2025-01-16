import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-FY3MUfvb.js";
import { C as Callout, a as CalloutText } from "./CalloutText-DuQn_Rtc.js";
import { C as CalloutTitle } from "./CalloutTitle-D5ep80ue.js";
import "./track-focus-DbJ2CO43.js";
import { T as TooltipStories, E as EsempioBase, P as Posizionamento } from "./Tooltip.stories-wjvGddVD.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-CyTa8lwL.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./index-D3ELxcOV.js";
import "./Container-DM0Kn0QD.js";
import "./utils-Cs0hNT-B.js";
import "./Col-CBduUdZh.js";
import "./UncontrolledTooltip-CelLEkV5.js";
import "./TooltipPopoverWrapper-DyKXCoBA.js";
import "./Popper-oXY5zJ3Q.js";
import "./Fade-GDu7ZWHd.js";
import "./Transition-D-QAwXWC.js";
import "./Icon-s99Pqyk9.js";
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
