import { ae as jsxRuntimeExports, af as Meta, ag as Canvas } from "./index-Bktid5GI.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { TopBarBase, TopBarAccesso, TopBarUserSettings } from "./TopBar.stories-rcPOjMTD.js";
import { BarraBase, BarraSearch, BottoneHamburger } from "./BarraIstituzionale.stories-sA_8OAis.js";
import "./iframe-B3mUzJfe.js";
import "../sb-preview/runtime.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-BUuRC3P_.js";
import "./index-DVdwlR73.js";
import "./index-DLlB04eo.js";
import "./inheritsLoose-DBHupcN5.js";
import "./index-CX5rBMF0.js";
import "./index-BdOSk9or.js";
import "./TopBar-B8Bwc2Q_.js";
import "./Container-BSU_5rqZ.js";
import "./index-C6XlOQIa.js";
import "./index-xoeSAV6i.js";
import "./utils-BToed_Um.js";
import "./Col-sbjB5dMm.js";
import "./Icon-egx6hrW4.js";
import "./LinkListItem-B69qYNZ5.js";
import "./DropdownToggle-CxU9U32Q.js";
import "./DropdownToggle-CpBYzZpr.js";
import "./Popper-BdfyK_V7.js";
import "./DropdownMenu-BVvApC7Y.js";
import "./Button-BqturWaL.js";
import "./Button-C7R8X7iu.js";
import "./MenuVerticale-CunI0Gwc.js";
import "./Footer-BiKzUMw3.js";
import "./Sidebar-Bu00DWDp.js";
import "./ResponsiveImage-BzmNYRQG.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Linee Guida/Componenti Principali/Header"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "header",
      children: "Header"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "L'Header – posto sempre nella testata del layout – si ottiene dall’unione di due componenti:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["\n", jsxRuntimeExports.jsxs(_components.p, {
          children: ["La ", jsxRuntimeExports.jsx(_components.strong, {
            children: "topbar"
          }), ", la barra soprastante, verrà sempre utilizzata come componente identitaria di Regione Lombardia e, anche nel caso non contenga alcuna funzionalità, essa sarà presente sotto forma di banda colorata. In alcuni casi tale componente può essere impiegata come toolbar di servizio per l’inserimento di link quali ", jsxRuntimeExports.jsx(_components.strong, {
            children: "login, cambio lingua, assistenza"
          }), ", ecc."]
        }), "\n"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["\n", jsxRuntimeExports.jsxs(_components.p, {
          children: ["La ", jsxRuntimeExports.jsx(_components.strong, {
            children: "barra istituzionale"
          }), " conterrà loghi e titolazioni dei servizi ed, eventualmente, un campo di ricerca."]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "N.B.: I link di servizio e informazioni di governance"
      }), " relative all’Ente ", jsxRuntimeExports.jsx(_components.strong, {
        children: "non sono mai presenti nell’header"
      }), ", ma sono contenute unicamente nel ", jsxRuntimeExports.jsx(_components.strong, {
        children: "footer"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "topbar-base",
      children: "TopBar Base"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TopBarBase
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "topbar-accesso",
      children: "TopBar Accesso"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "La topbar può accogliere informazioni o, ad esempio, il pulsante per l’accesso utente."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TopBarAccesso
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "topbar-accesso-effettuato",
      children: "TopBar Accesso Effettuato"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il menu dropdown può contenere informazioni utili per il login, il logout e la gestione del profilo utente e delle impostazioni. Queste info possono essere relative all’utente e all’operatore che sta utilizzando il servizio."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "La dimensione del menu dropdown può variare a seconda delle esigenze, come ad esempio per accogliere una maggiore lunghezza delle voci al suo interno."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TopBarUserSettings
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "barra-istituzionale-base",
      children: "Barra Istituzionale Base"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Contiene il logo di Regione Lombardia e il nome del servizio, preceduto dall'", jsxRuntimeExports.jsx(_components.strong, {
        children: "Acronimo"
      }), " (facoltativo)."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: BarraBase
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "barra-istituzionale-search",
      children: "Barra Istituzionale Search"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Nel caso in cui il servizio lo richieda, è possibile aggiungere un campo di ricerca generico all’interno della barra istituzionale nella parte destra."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: BarraSearch
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "bottone-hamburger",
      children: "Bottone Hamburger"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il bottone hamburger serve per aprire e chiudere il ", jsxRuntimeExports.jsx(_components.a, {
        href: "?path=/docs/linee-guida-componenti-principali-menuverticale--documentazione",
        children: "menu verticale"
      }), ".", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "Compare automaticamente sugli schermi di piccole dimensioni"
      }), " a sinistra nella barra istituzionale."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: BottoneHamburger
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
