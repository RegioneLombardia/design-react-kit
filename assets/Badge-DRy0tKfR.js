import { ae as jsxRuntimeExports, af as Meta, ag as Canvas, ai as Controls3, m as mu, ah as ArgTypes } from "./index-CsuMtfLQ.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { B as BadgeStories, D as DiffenteGrandezza, C as Contatore, a as ContatoreTestoAggiuntivo, V as Variazioni, b as BordiArrotondati, c as ConLink } from "./Badge.stories-Kj9mlMnm.js";
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
import "./stories-helper-xr0oHPtf.js";
import "./index-C6XlOQIa.js";
import "./index-xoeSAV6i.js";
import "./utils-BToed_Um.js";
import "./Button-C7R8X7iu.js";
import "./Button-BqturWaL.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: BadgeStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "badge",
      children: "Badge"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "esempio-interattivo",
      children: "Esempio interattivo"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {}), "\n", jsxRuntimeExports.jsx(Controls3, {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "documentazione-e-esempi-del-componente-badge-utile-per-piccoli-contatori-e-etichette",
      children: "Documentazione e esempi del componente badge, utile per piccoli contatori e etichette."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La grandezza di ogni badge si adatta come dimensione a quella del font (misurato in unità ", jsxRuntimeExports.jsx(_components.code, {
        children: "em"
      }), ") dell’elemento in cui è contenuto."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: DiffenteGrandezza
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "I badge possono essere utilizzati come parte di link o pulsanti per fornire un contatore."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Contatore
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "A seconda di come i badge vengono utilizzati, questi potrebbero confondere gli utenti che usano lo screen reader e tecnologie assistive simili. Mentre lo stile dei badge fornisce un indizio visivo sul loro scopo, a questi utenti saranno semplicemente presentati come semplice contenuto. A seconda della situazione specifica, questi badge possono sembrare parole o numeri aggiuntivi casuali alla fine di una frase, un collegamento o un pulsante."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "A meno che il contesto non sia chiaro (come con l’esempio “Notifiche”, dove si capisce che il “4” è il numero di notifiche), considera l’eventualità di includere un testo aggiuntivo nascosto."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ContatoreTestoAggiuntivo
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "variazioni-contestuali",
      children: "Variazioni contestuali"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Utilizzare l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "color"
      }), " sul componente per modificare l’aspetto di un badge."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Variazioni
    }), "\n", jsxRuntimeExports.jsx("div", {
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
      id: "badges-arrotondati",
      children: "Badges arrotondati"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per rendere i badge arrotondati puoi usare l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "pill"
      }), " sul componente."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: BordiArrotondati
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "link",
      children: "Link"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per associare un Badge ad una navigazione, è possible inserire componenti di navigazione al suo interno, oppure sfruttare l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "href"
      }), ":"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ConLink
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "badge-1",
      children: "Badge"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: BadgeStories
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
