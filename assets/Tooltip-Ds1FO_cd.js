import { j as jsxRuntimeExports } from "./jsx-runtime-BdP592-V.js";
import { useMDXComponents } from "./index-B98xVB7q.js";
import { M as Meta, C as Canvas } from "./blocks-C8t04eRj.js";
import { C as Callout, a as CalloutText } from "./CalloutText-SqRq_wfz.js";
import { C as CalloutTitle } from "./CalloutTitle-3TWQ0WNM.js";
import "./track-focus-DbJ2CO43.js";
import { T as TooltipStories, E as EsempioBase, P as Posizionamento } from "./Tooltip.stories-D-GUn2JA.js";
import "./iframe-CywKGv0B.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-zaF9E960.js";
import "./index-BAkpI1zY.js";
import "./Container-CmXOe7U0.js";
import "./utils-BbqmM4jY.js";
import "./Col-CzpBcQxN.js";
import "./UncontrolledTooltip-glCPvBI8.js";
import "./TooltipPopoverWrapper-93V5NKSt.js";
import "./Popper-B-eD_B_5.js";
import "./Fade-dJbgTJRr.js";
import "./Transition-BTiC56gs.js";
import "./Icon-CfKGR1lx.js";
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
