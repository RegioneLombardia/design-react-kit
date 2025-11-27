import { j as jsxRuntimeExports } from "./jsx-runtime-BeHeGpne.js";
import { useMDXComponents } from "./index-COSitiYT.js";
import { M as Meta, C as Canvas } from "./blocks-C3pkO_Ko.js";
import { C as Callout, a as CalloutText } from "./CalloutText-B_y3CkZ3.js";
import { C as CalloutTitle } from "./CalloutTitle-BE_qPhhy.js";
import "./track-focus-DbJ2CO43.js";
import { T as TabBarStories, a as TabBar, S as SoloTesto, b as SoloIcone, c as TestoEIcona } from "./TabBar.stories-CFi7b63Q.js";
import "./iframe-BdFmv8SM.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-D2R6h4pv.js";
import "./index-CkVteFxl.js";
import "./UncontrolledTooltip-jx2Sy0R5.js";
import "./utils-I-sN1Vsl.js";
import "./TooltipPopoverWrapper-mrz1Uhxq.js";
import "./Popper-BFzd-jOD.js";
import "./Fade-BH3dQAID.js";
import "./Transition-Co8zp6LZ.js";
import "./Icon-BOZjw-AL.js";
import "./Nav-BIzbiDmo.js";
import "./TabNavLink-Dyq4oWdm.js";
import "./extends-BllNL3fH.js";
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
                href: "/docs/linee-guida-inserimento-tooltip--documentazione#tooltip",
                children: "tooltip"
              })
            }), " per aiutare la comprensione."]
          }), jsxRuntimeExports.jsx(_components.pre, {
            children: jsxRuntimeExports.jsx(_components.code, {
              className: "language-tsx",
              children: "const ref1 = useRef(null);\n. . .\n<TabNavItem>\n  <TabNavLink eventKey='1'>\n    <span ref={ref1}>\n      <Icon icon='it-link' aria-hidden />\n      <span className='visually-hidden'>Descrizione per non vedenti Tab 1</span>\n    </span>\n  </TabNavLink>\n</TabNavItem>\n. . .\n  </TabContent>\n  <UncontrolledTooltip placement='top' target={ref1}>\n    Spiegazione icona 1 (per tutti)\n  </UncontrolledTooltip>\n. . .\n</TabContainer>\n"
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
