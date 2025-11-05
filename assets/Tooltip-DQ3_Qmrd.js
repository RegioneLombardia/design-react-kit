import { j as jsxRuntimeExports } from "./jsx-runtime-CZvMP_Mb.js";
import { useMDXComponents } from "./index-8uiiSus7.js";
import { M as Meta, i as ii, C as Canvas, a as Controls3 } from "./blocks-ViceaN0z.js";
import { C as Callout, a as CalloutText } from "./CalloutText-3C50LiG8.js";
import { C as CalloutTitle } from "./CalloutTitle-iNhqs_Mp.js";
import "./track-focus-DbJ2CO43.js";
import { T as TooltipStories, E as EsempiInterattivi, a as Esempi, b as EsempiConControllo, P as Posizioni } from "./Tooltip.stories-BHYUj1wZ.js";
import "./iframe-bYA1CaqE.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-D0HQBa1B.js";
import "./index-DeYFl_vO.js";
import "./UncontrolledTooltip-B_ITeLKk.js";
import "./utils-qr7fhAGw.js";
import "./TooltipPopoverWrapper-ClkXAL-o.js";
import "./Popper-BxAG9zCt.js";
import "./Fade-DZ_E0o0U.js";
import "./Transition-E_HabY2v.js";
import "./Button-C2LtZvzM.js";
import "./Button-YpRptLHt.js";
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
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Accessibilità"
          })
        }), jsxRuntimeExports.jsxs(CalloutText, {
          children: [jsxRuntimeExports.jsx(_components.p, {
            children: "I tooltip funzionano sia con la tastiera che per gli utenti dotati di tecnologia assistiva.\nÈ importante aggiungere tooltip solo ad elementi HTML che sono tradizionalmente attivabili da tastiera e\ninterattivi (link, bottoni, o elementi di form)."
          }), jsxRuntimeExports.jsxs(_components.p, {
            children: ["Sebbene arbitrariamente gli elementi HTML (come ", jsxRuntimeExports.jsx(ii, {
              children: "<span>"
            }), ") possano essere resi attivabili tramite\nl’attributo\n", jsxRuntimeExports.jsx(ii, {
              children: 'tabindex="0"'
            }), ", ciò aggiungerà interruzioni di tabulazioni potenzialmente dannose per gli utenti che usano\nla tastiera per navigare. Inoltre, la maggior parte delle tecnologie assistive in questa situazione non annuncia il\ntooltip come ci si potrebbe invece attendere."]
          }), jsxRuntimeExports.jsx(_components.p, {
            children: "Infine, non fare affidamento esclusivamente sull’evento “mouse over” come innesco del tooltip, in quanto ciò\nrenderà impossibile l’attivazione per gli utenti che usano la tastiera per navigare."
          })]
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "esempio-interattivo",
      children: "Esempio interattivo"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempiInterattivi
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
