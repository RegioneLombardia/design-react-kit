import { ae as jsxRuntimeExports, af as Meta, ag as Canvas } from "./index-DT2cdpOB.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { B as BottoniStories, D as Dimensioni, N as Nomenclatura, a as Distanziamento, b as BottoniConIcona, c as BottoniMini, T as TextButton, d as Tag } from "./Bottoni.stories-kXirHfbM.js";
import "./iframe-BiDC3_i4.js";
import "../sb-preview/runtime.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-BUuRC3P_.js";
import "./index-DVdwlR73.js";
import "./index-DLlB04eo.js";
import "./inheritsLoose-DBHupcN5.js";
import "./index-CX5rBMF0.js";
import "./index-BdOSk9or.js";
import "./Container-BSU_5rqZ.js";
import "./index-C6XlOQIa.js";
import "./index-xoeSAV6i.js";
import "./utils-BToed_Um.js";
import "./Col-sbjB5dMm.js";
import "./Button-C7R8X7iu.js";
import "./Button-BqturWaL.js";
import "./Icon-CMQf0osR.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: BottoniStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "call-to-action",
      children: "Call to action"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Call to action"
      }), " è un invito all’utente a compiere una determinata azione, identificabile come messaggio testuale univoco e veicolato attraverso un ", jsxRuntimeExports.jsx(_components.strong, {
        children: "bottone"
      }), ".", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Si tratta di un elemento fondamentale e deve essere chiaro e conciso."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Tutti i ", jsxRuntimeExports.jsx(_components.strong, {
        children: "bottoni primari e secondari"
      }), " hanno in comune: ", jsxRuntimeExports.jsx(_components.strong, {
        children: "colori, forma del container"
      }), " e le ", jsxRuntimeExports.jsx(_components.strong, {
        children: "diverse grandezze"
      }), " con relative ", jsxRuntimeExports.jsx(_components.strong, {
        children: "spaziature"
      }), ".", jsxRuntimeExports.jsx(_components.br, {}), "\n", "I bottoni disegnati hanno di default un container con ", jsxRuntimeExports.jsx(_components.strong, {
        children: "corner radius di 8 pixel"
      }), ".", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Il colore terziario viene utilizzato esclusivamente per i bottoni in alcuni contesti specifici che ne richiedono l’utilizzo, ", jsxRuntimeExports.jsx(_components.strong, {
        children: "non va utilizzato nei testi"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "bottoni",
      children: "Bottoni"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "La dimensione di un bottone va adeguata:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Al tipo di ", jsxRuntimeExports.jsx(_components.strong, {
          children: "schermo"
        }), " sul quale viene visualizzato", jsxRuntimeExports.jsx(_components.br, {}), "\n", "su uno smartphone non deve occupare troppo spazio ma nemmeno essere troppo piccolo da risultare difficile da cliccare utilizzando il pollice"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["All'", jsxRuntimeExports.jsx(_components.strong, {
          children: "importanza dell'azione"
        }), " che il bottone compie", jsxRuntimeExports.jsx(_components.br, {}), "\n", "maggiore dimensione per maggiore importanza."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Le ", jsxRuntimeExports.jsx(_components.em, {
        children: "Linee Guida"
      }), " prevedono ", jsxRuntimeExports.jsx(_components.strong, {
        children: "tre dimensioni principali"
      }), " di bottoni: ", jsxRuntimeExports.jsx(_components.strong, {
        children: "small"
      }), ", ", jsxRuntimeExports.jsx(_components.strong, {
        children: "medium"
      }), ", e ", jsxRuntimeExports.jsx(_components.strong, {
        children: "large"
      }), ".", jsxRuntimeExports.jsx(_components.br, {}), "\n", "La dimensione media è quella di default, per le altre due va specificato l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "size"
      }), " uguale a ", jsxRuntimeExports.jsx(_components.strong, {
        children: "sm"
      }), " o ", jsxRuntimeExports.jsx(_components.strong, {
        children: "lg"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il bottone di ", jsxRuntimeExports.jsx(_components.em, {
        children: "due righe"
      }), " mostrato è stato ottenuto fissandone la larghezza, cosa che però ne limita la reponsività."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il testo all'interno di un bottone va automaticamente su ", jsxRuntimeExports.jsx(_components.strong, {
        children: "più righe"
      }), " qualora non ci sia ", jsxRuntimeExports.jsx(_components.strong, {
        children: "abbastanza spazio orizzontale"
      }), ".", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Si raccomanda quindi di usare ", jsxRuntimeExports.jsx(_components.strong, {
        children: "diciture essenziali"
      }), " per i bottoni, ponendo all'esterno di essi il testo necessario a chiarire l'azione eseguita."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Dimensioni
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: `<Button color="primary" size="sm">Lorem ipsum</Button>
<Button color="primary" size="sm" outline>Lorem ipsum</Button>
<Button color="secondary" size="sm">Lorem ipsum</Button>

<Button color="primary">Lorem ipsum</Button>
<Button color="primary" outline>Lorem ipsum</Button>
<Button color="secondary">Lorem ipsum</Button>

<Button color="primary" size="lg">Lorem ipsum</Button>
<Button color="primary" size="lg" outline>Lorem ipsum</Button>
<Button color="secondary" size="lg">Lorem ipsum</Button>

<Button color="primary" size="lg" style={{'max-width': "160px"}}>Lorem ipsum dolor sit</Button>
<Button color="primary" size="lg" outline style={{'max-width': "160px"}}>Lorem ipsum dolor sit</Button>
<Button color="secondary" size="lg" style={{'max-width': "160px"}} >Lorem ipsum dolor sit</Button>
`
      })
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "sb-unstyled h4",
      children: "Nomeclatura e classi"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La ", jsxRuntimeExports.jsx(_components.strong, {
        children: "nomenclatura"
      }), " delle ", jsxRuntimeExports.jsx(_components.strong, {
        children: "classi di bootstrap"
      }), " è differente da quella delle Linee Guida di Regione Lombardia."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Nomenclatura
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "La corrispondenza è:"
    }), "\n", jsxRuntimeExports.jsx("div", {
      style: {
        width: "30%"
      },
      children: jsxRuntimeExports.jsxs("table", {
        className: "table table-bordered table-sm",
        children: [jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("th", {
            children: "Linee guida"
          }), jsxRuntimeExports.jsx("th", {
            children: "Bootstrap"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "Primario"
          }), jsxRuntimeExports.jsx("td", {
            children: "primary"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "Secondario"
          }), jsxRuntimeExports.jsx("td", {
            children: "outline-primary"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "Terziario"
          }), jsxRuntimeExports.jsx("td", {
            children: "secondary"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "Quaternario"
          }), jsxRuntimeExports.jsx("td", {
            children: "outline-secondary"
          })]
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "distanziamento",
      children: "Distanziamento"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Distanziamento
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: '<div>\n  <Button color="primary" size="sm" className="my-3">Lorem ipsum</Button>\n  <br />\n  <Button color="primary" size="sm" outline>Lorem ipsum</Button>\n</div>\n<div>\n  <Button color="primary" size="sm" className="me-3">Lorem ipsum</Button>\n  <Button color="primary" size="sm" outline>Lorem ipsum</Button>\n</div>\n'
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La distanza di 16px corrisponde al valore ", jsxRuntimeExports.jsx(_components.strong, {
        children: "3"
      }), " delle spaziature.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Nell'esempio:"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["la classe ", jsxRuntimeExports.jsx(_components.code, {
          children: "my-3"
        }), " imposta un ", jsxRuntimeExports.jsx(_components.em, {
          children: "margin"
        }), " sia ", jsxRuntimeExports.jsx(_components.em, {
          children: "top"
        }), " che ", jsxRuntimeExports.jsx(_components.em, {
          children: "bottom"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["la classe ", jsxRuntimeExports.jsx(_components.code, {
          children: "me-3"
        }), " imposta un ", jsxRuntimeExports.jsx(_components.em, {
          children: "margin-right"
        }), "."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per tutti i dettagli sulle ", jsxRuntimeExports.jsx(_components.strong, {
        children: jsxRuntimeExports.jsx(_components.a, {
          href: "https://regionelombardia.github.io/bootstrap-lombardia/docs/organizzare-gli-spazi/spaziature/",
          rel: "nofollow",
          children: "spaziature"
        })
      }), " si veda la Documentazione tecnica di Bootstrap Regione Lombardia."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "bottoni-con-icona",
      children: "Bottoni con icona"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Alcune call to action potrebbero prevedere un’icona accompagnata al testo per enfatizzare l’azione e renderla più chiara e di immediata comprensione per l’utente."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: BottoniConIcona
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: `<Button color="primary" size="sm" icon>
  <Icon
    color="white"
    icon="it-check-circle"
  />
  <span>Lorem ipsum</span>
</Button>
<Button color="primary" icon>
  <Icon
    color="white"
    icon="it-check-circle"
  />
  <span>Lorem ipsum</span>
</Button>
<Button color="primary" size="lg" icon>
  <Icon
    color="white"
    icon="it-check-circle"
  />
  <span>Lorem ipsum</span>
</Button>
<Button color="primary" size="lg" style={{'max-width': "200px"}} >
  <div className="d-flex justify-content-center">
    <Icon
      color="white"
      icon="it-check-circle"
      size="lg"
      className="me-1"
    />
    <span className="text-start">Lorem ipsum dolor sit</span>
  </div>
</Button>
`
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "bottoni-mini",
      children: "Bottoni mini"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["I ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Bottoni mini"
      }), " devono essere utilizzati esclusivamente per creare un linguaggio gerarchico delle azioni, in caso di azioni secondarie rispetto a quelle principali."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: BottoniMini
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "text-button",
      children: "Text button"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Alcune call to action possono essere costituite da solo testo, senza un contenitore.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Queste vengono applicate al menu orizzontale o in caso di hyperlink."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TextButton
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Nota: la ", jsxRuntimeExports.jsx(_components.strong, {
        children: "sottolineatura"
      }), " è legata alla keyword ", jsxRuntimeExports.jsx(_components.code, {
        children: "active"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "tag",
      children: "Tag"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Tag"
      }), " evidenzia una parola chiave o un termine associato ad un’informazione e lo classifica.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Deve essere adottato per la ricerca di informazioni basata su parole chiave."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Tag
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
