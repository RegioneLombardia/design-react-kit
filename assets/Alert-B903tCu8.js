import { ae as jsxRuntimeExports, af as Meta, ag as Canvas, ai as Controls3, m as mu, ah as ArgTypes } from "./index-fmwPoC3m.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { A as AlertStories, _ as _LinkEvidenziato, a as _ContenutoAggiuntivo, C as ChiusuraControllata } from "./Alert.stories-CLg5aJlW.js";
import { C as Callout, a as CalloutText } from "./CalloutText-Dq2-0GdE.js";
import { C as CalloutTitle } from "./CalloutTitle-CDZdaeIL.js";
import "./iframe-ti0ZTjzm.js";
import "../sb-preview/runtime.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-BUuRC3P_.js";
import "./index-DVdwlR73.js";
import "./index-DLlB04eo.js";
import "./inheritsLoose-DBHupcN5.js";
import "./index-CX5rBMF0.js";
import "./index-BdOSk9or.js";
import "./stories-helper-xr0oHPtf.js";
import "./Alert-BDkS9PAF.js";
import "./index-C6XlOQIa.js";
import "./index-xoeSAV6i.js";
import "./utils-BToed_Um.js";
import "./Fade-ZyZ8S0O7.js";
import "./Transition-BB1znAg7.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
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
      of: AlertStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "alert",
      children: "Alert"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Gli avvisi sono disponibili in quattro tipologie diverse e per qualsiasi lunghezza di testo. Inoltre possono prevedere un pulsante di chiusura"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "esempio-interattivo",
      children: "Esempio Interattivo"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {}), "\n", jsxRuntimeExports.jsx(Controls3, {}), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "success",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Trasmettere significato alle tecnologie assistive"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["L’uso del colore per aggiungere un significato fornisce solo un’indicazione visiva, che non sarà trasmesso agli utenti di tecnologie assistive –\r\ncome gli screen reader. Assicurati che le informazioni denotate dal colore siano rese disponibili anche dal contenuto stesso (es.: il testo\r\nvisibile), o siano incluse attraverso mezzi alternativi, come testo aggiuntivo nascosto con la classe\r\n", jsxRuntimeExports.jsx(mu, {
              children: ".visually-hidden"
            }), "."]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "link-evidenziato",
      children: "Link evidenziato"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Usa la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".alert-link"
      }), " per dare risalto ad un link all'interno dell'alert."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _LinkEvidenziato
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "contenuto-aggiuntivo",
      children: "Contenuto aggiuntivo"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "I messaggi di avviso possono avere del contenuto HTML aggiuntivo come degli heading, paragrafi e divisori."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _ContenutoAggiuntivo
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "chiusura",
      children: "Chiusura"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "È possibile eliminare qualsiasi avviso mediante un pulsante di chiusura:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Definisci una funzione che chiuda l'alert controllando la sua prop ", jsxRuntimeExports.jsx(_components.code, {
          children: "isOpen"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Passa la funzione alla prop ", jsxRuntimeExports.jsx(_components.code, {
          children: "toggle"
        }), " del componente"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Clicca sul pulsante di chiusura per vedere la funzionalità di rimozione altert in azione:"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ChiusuraControllata
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [open, setOpen] = useState(true);\r\n\r\nconst closeAlert = () => setOpen(false);\r\n\r\nreturn (\r\n    <div>\r\n        <Alert {...args} isOpen={open} toggle={closeAlert}>\r\n            <strong>Attenzione</strong>Alcuni campi inseriti sono da controllare.\r\n        </Alert>\r\n    </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {})]
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
