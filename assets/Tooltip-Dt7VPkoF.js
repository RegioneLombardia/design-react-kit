import { ae as jsxRuntimeExports, af as Meta, m as mu, ai as Controls3, ag as Canvas } from "./index-BBhyCMAt.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { T as TooltipStories, E as EsempiInterattivi, a as Esempi, b as EsempiConControllo, P as Posizioni } from "./Tooltip.stories-fbvK0ST4.js";
import { C as Callout, a as CalloutText } from "./CalloutText-Dq2-0GdE.js";
import { C as CalloutTitle } from "./CalloutTitle-CDZdaeIL.js";
import "./iframe-B3SUZ60o.js";
import "../sb-preview/runtime.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-BUuRC3P_.js";
import "./index-DVdwlR73.js";
import "./index-DLlB04eo.js";
import "./inheritsLoose-DBHupcN5.js";
import "./index-CX5rBMF0.js";
import "./index-BdOSk9or.js";
import "./UncontrolledTooltip-CunqDPtd.js";
import "./index-C6XlOQIa.js";
import "./index-xoeSAV6i.js";
import "./TooltipPopoverWrapper-0lmegcVF.js";
import "./Popper-BdfyK_V7.js";
import "./utils-BToed_Um.js";
import "./Fade-ZyZ8S0O7.js";
import "./Transition-BB1znAg7.js";
import "./Button-C7R8X7iu.js";
import "./Button-BqturWaL.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: TooltipStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "tooltip",
      children: "Tooltip"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "documentazione-ed-esempi-per-aggiungere-tooltip-personalizzati",
      children: "Documentazione ed esempi per aggiungere tooltip personalizzati"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["I Tooltip di reactstrap con CSS e JavaScript utilizzano CSS3 per animazioni e la libreria ", jsxRuntimeExports.jsx(_components.code, {
        children: "Popper.js"
      }), " per il corretto posizionamento."]
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "success",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx(_components.p, {
            children: "Accessibiltà: I tooltip funzionano sia con la tastiera che per gli utenti dotati di tecnologia assistiva."
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsx(_components.p, {
            children: "È importante aggiungere tooltip solo ad elementi HTML che sono tradizionalmente attivabili da tastiera e\ninterattivi (link, bottoni, o elementi di form)."
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Sebbene arbitrariamente gli elementi HTML (come ", jsxRuntimeExports.jsx(mu, {
              children: "<span>"
            }), ") possano essere resi attivabili tramite\nl’attributo\n", jsxRuntimeExports.jsx(mu, {
              children: 'tabindex="0"'
            }), ", ciò aggiungerà interruzioni di tabulazioni potenzialmente dannose per gli utenti che usano\nla tastiera per navigare. Inoltre, la maggior parte delle tecnologie assistive in questa situazione non annuncia il\ntooltip come ci si potrebbe invece attendere."]
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsx(_components.p, {
            children: "Infine, non fare affidamento esclusivamente sull’evento “mouse over” come innesco del tooltip, in quanto ciò\nrenderà impossibile l’attivazione per gli utenti che usano la tastiera per navigare."
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "esempio-interattivo",
      children: "Esempio interattivo"
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: EsempiInterattivi
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "source",
      children: "Source"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const ref = useRef(null);\nreturn (\n  <div>\n    <Button innerRef={ref} className='m-3'>\n      Tooltip\n    </Button>\n\n    <UncontrolledTooltip placement={x.placement} target={ref}>\n      {x.text}\n    </UncontrolledTooltip>\n  </div>\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Cose da sapere quando usi il plugin tooltip:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["I tooltip si basano sulla libreria di terze parti ", jsxRuntimeExports.jsx(_components.code, {
          children: "Popper.js"
        }), "."]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "I tooltip con titoli vuoti non saranno mai visualizzati."
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Attivare i tooltip su elementi nascosti non funzionerà."
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["I tooltip per gli elementi ", jsxRuntimeExports.jsx(_components.code, {
          children: ".disabled"
        }), " o ", jsxRuntimeExports.jsx(_components.code, {
          children: "disabled"
        }), " devono essere attivati da un elemento contenitore."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Quando attivati da collegamenti ipertestuali che si estendono su più righe, i tooltip verranno centrati. Usa ", jsxRuntimeExports.jsx(_components.code, {
          children: "white-space: nowrap;"
        }), " sui tuoi ", jsxRuntimeExports.jsx(_components.code, {
          children: "<a/>"
        }), " per evitare questo comportamento."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il kit fornisce due tipologie di componenti per mostrare tooltip, ereditandoli da ", jsxRuntimeExports.jsx(_components.code, {
        children: "reactstrap"
      }), ": ", jsxRuntimeExports.jsx(_components.code, {
        children: "Tooltip"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: "UncontrolledTooltip"
      }), ".\nPer la maggior parte dei casi ", jsxRuntimeExports.jsx(_components.code, {
        children: "UncontrolledTooltip"
      }), " fornisce tutte le funzionalità richieste senza dove controllare esplicitamente lo stato del componente. Per situazioni più sofisticate dove è richiesta la gestione dello stato utilizzare il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Tooltip"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Passa il mouse sopra i link sottostanti per visualizzare i tooltip (con ", jsxRuntimeExports.jsx(_components.code, {
        children: "UncontrolledTooltip"
      }), "):"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Esempi
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "source-1",
      children: "Source"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const ref1 = useRef(null);\nconst ref2 = useRef(null);\nconst ref3 = useRef(null);\n\nreturn (\n  <div className='bd-example tooltip-demo'>\n    <p className='muted'>\n      Ecco un{' '}\n      <a href='#' ref={ref1}>\n        bianco scenario\n      </a>\n      <br />\n      per tratteggiarvi l’accompagnamento\n      <br />\n      degli oggetti di sfondo che pur vivono.\n      <br />\n      Non ne sarò{' '}\n      <a href='#' ref={ref2}>\n        l’artefice\n      </a>{' '}\n      impaziente.\n      <br />\n      Berrò alle coppe della nostalgia,\n      <br />\n      avrò preteso d’ozio nelle lacrime...\n      <br />\n      perché non mi ribello alla natura:\n      <br />\n      la mia lentezza li esaspera...\n      <br />\n      La mia lentezza? No, la mia fiducia.\n      <br />\n      Per adesso è deserto.\n      <br />\n      <a href='#' ref={ref3}>\n        Il mondo può rifarsi senza me\n      </a>\n      ,\n      <br />E intanto gli altri mi denigreranno\n    </p>\n    <p>\n      <em>La città nuova, Alda Merini</em>\n    </p>\n\n    <UncontrolledTooltip placement='top' target={ref1}>\n      Primo tooltip\n    </UncontrolledTooltip>\n    <UncontrolledTooltip placement='top' target={ref2}>\n      Secondo tooltip\n    </UncontrolledTooltip>\n    <UncontrolledTooltip placement='top' target={ref3}>\n      Terzo tooltip\n    </UncontrolledTooltip>\n  </div>\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Qui trovi lo stesso esempio utilizzando il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Tooltip"
      }), " con la gestione esplicita dello stato:"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempiConControllo
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "source-2",
      children: "Source"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [openOne, toggleOne] = useState(false);\nconst [openTwo, toggleTwo] = useState(false);\nconst [openThree, toggleThree] = useState(false);\n\nconst ref1 = useRef(null);\nconst ref2 = useRef(null);\nconst ref3 = useRef(null);\n\nreturn (\n  <div className='bd-example tooltip-demo'>\n    <p className='muted'>\n      Ecco un{' '}\n      <a href='#' ref={ref1}>\n        bianco scenario\n      </a>\n      <br />\n      per tratteggiarvi l’accompagnamento\n      <br />\n      degli oggetti di sfondo che pur vivono.\n      <br />\n      Non ne sarò{' '}\n      <a href='#' ref={ref2}>\n        l’artefice\n      </a>{' '}\n      impaziente.\n      <br />\n      Berrò alle coppe della nostalgia,\n      <br />\n      avrò preteso d’ozio nelle lacrime...\n      <br />\n      perché non mi ribello alla natura:\n      <br />\n      la mia lentezza li esaspera...\n      <br />\n      La mia lentezza? No, la mia fiducia.\n      <br />\n      Per adesso è deserto.\n      <br />\n      <a href='#' ref={ref3}>\n        Il mondo può rifarsi senza me\n      </a>\n      ,\n      <br />E intanto gli altri mi denigreranno\n    </p>\n    <p>\n      <em>La città nuova, Alda Merini</em>\n    </p>\n\n    <Tooltip placement='top' target={ref1} isOpen={openOne} toggle={() => toggleOne(!openOne)}>\n      Primo tooltip\n    </Tooltip>\n    <Tooltip placement='top' target={ref2} isOpen={openTwo} toggle={() => toggleTwo(!openTwo)}>\n      Secondo tooltip\n    </Tooltip>\n    <Tooltip placement='top' target={ref3} isOpen={openThree} toggle={() => toggleThree(!openThree)}>\n      Terzo tooltip\n    </Tooltip>\n  </div>\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Passa il mouse sopra i bottoni sottostanti per vedere le quattro direzioni dei tooltip: sopra, destra, sotto, e sinistra."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Posizioni
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "source-3",
      children: "Source"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const ref1 = useRef(null);\nconst ref2 = useRef(null);\nconst ref3 = useRef(null);\nconst ref4 = useRef(null);\nconst ref5 = useRef(null);\n\nreturn (\n  <div style={{ padding: 100 }}>\n    <Button innerRef={ref1} className='m-3'>\n      Tooltip in alto\n    </Button>\n    <Button innerRef={ref2} className='m-3'>\n      Tooltip a destra\n    </Button>\n    <Button innerRef={ref3} className='m-3'>\n      Tooltip in basso\n    </Button>\n    <Button innerRef={ref4} className='m-3'>\n      Tooltip a sinistra\n    </Button>\n    <Button innerRef={ref5} className='m-3'>\n      Tooltip con HTML\n    </Button>\n\n    <UncontrolledTooltip placement='top' target={ref1}>\n      Tooltip on top\n    </UncontrolledTooltip>\n    <UncontrolledTooltip placement='right' target={ref2}>\n      Tooltip on right\n    </UncontrolledTooltip>\n    <UncontrolledTooltip placement='bottom' target={ref3}>\n      Tooltip on bottom\n    </UncontrolledTooltip>\n    <UncontrolledTooltip placement='left' target={ref4}>\n      Tooltip on left\n    </UncontrolledTooltip>\n    <UncontrolledTooltip placement='top' target={ref5}>\n      <em>Tooltip</em> <u>with</u> <b>HTML</b>\n    </UncontrolledTooltip>\n  </div>\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Fare riferimento alla documentazione reactstrap (v9) per maggiori dettagli sui componenti ", jsxRuntimeExports.jsx(_components.code, {
        children: "Tooltip"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: "UncontrolledTooltip"
      }), ": ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://reactstrap.github.io/?path=/docs/components-tooltip--tooltip",
        rel: "nofollow",
        children: "Tooltip"
      })]
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
