import { ae as jsxRuntimeExports, af as Meta, ag as Canvas } from "./index-CsuMtfLQ.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { T as TabBarStories, a as TabBar, S as SoloTesto, b as SoloIcone, c as TestoEIcona } from "./TabBar.stories-CjCRtTLN.js";
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
import "./Nav-BMxviE6H.js";
import "./index-C6XlOQIa.js";
import "./index-xoeSAV6i.js";
import "./utils-BToed_Um.js";
import "./NavLink-QW5V8UQQ.js";
import "./TabPane-VUPSz3DZ.js";
import "./UncontrolledTooltip-CunqDPtd.js";
import "./TooltipPopoverWrapper-0lmegcVF.js";
import "./Popper-BdfyK_V7.js";
import "./Fade-ZyZ8S0O7.js";
import "./Transition-BB1znAg7.js";
import "./Icon-DAq5ZiWt.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
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
      of: TabBarStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "tab-bar",
      children: "Tab Bar"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Tab bar"
      }), " organizza e permette la navigazione tra gruppi di contenuti che sono tra loro correlati ed allo ", jsxRuntimeExports.jsx(_components.strong, {
        children: "stesso livello di gerarchia"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Ogni tab dovrebbe mostrare un contenuto ", jsxRuntimeExports.jsx(_components.strong, {
        children: "distinto dalle altre"
      }), ". A tal proposito, le tab ", jsxRuntimeExports.jsx(_components.strong, {
        children: "non devono essere usate per spezzare un contenuto"
      }), " che ha bisogno di essere letto in un dato ordine."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Le label delle tab devono essere ", jsxRuntimeExports.jsx(_components.strong, {
        children: "corte e non abbreviate"
      }), ", a meno che non sia strettamente necessario.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Le tab con solo testo, con icona e con testo e icona non vanno mai mescolate.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Ogni bar deve contenere tab ", jsxRuntimeExports.jsx(_components.strong, {
        children: "dello stesso tipo"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TabBar
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "solo-testo",
      children: "Solo testo"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SoloTesto
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "solo-icone",
      children: "Solo icone"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SoloIcone
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "success",
        highlight: true,
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Accessibilità"
          })
        }), jsxRuntimeExports.jsxs(CalloutText, {
          children: [jsxRuntimeExports.jsxs(_components.p, {
            children: ["Nel caso di di Tab bar con solo icone è ", jsxRuntimeExports.jsx(_components.strong, {
              children: "obbligatorio fornire una descrizione"
            }), " con un testo alternativo, in modo che possa essere utilizzato anche da i non vedenti.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Inoltre, poichè il significato dell'icona non sempre risulta chiaro per gli utenti anche per gli utenti normodotati, è fortemente consigliato aggiungere un ", jsxRuntimeExports.jsx(_components.strong, {
              children: jsxRuntimeExports.jsx(_components.a, {
                href: "/docs/documentazione-inserimento-tooltip--documentazione#tooltip",
                children: "tooltip"
              })
            }), " per aiutare la comprensione."]
          }), jsxRuntimeExports.jsx(_components.pre, {
            children: jsxRuntimeExports.jsx(_components.code, {
              className: "language-tsx",
              children: `const ref1 = useRef(null);
. . .
<span ref={ref1}>
  <Icon icon="it-link" aria-hidden title=""/>
  <i className="it-ico-lg it-link d-block text-center" aria-label="Descrizione per non vedenti" />
</span>
. . .
<UncontrolledTooltip placement='top' target={ref1}>
  Spiegazione icona 1 (per tutti)
</UncontrolledTooltip>
`
            })
          }), jsxRuntimeExports.jsx(_components.p, {
            children: "(estratto del codice dell'esempio sopra)"
          })]
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "testo-e-icona",
      children: "Testo e icona"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TestoEIcona
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
