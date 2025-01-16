import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-FY3MUfvb.js";
import { TopBarBase, TopBarAccesso, TopBarUserSettings } from "./TopBar.stories-Bj9vIrEh.js";
import { BarraBase, BarraSearch, BottoneHamburger } from "./BarraIstituzionale.stories-CBXlh5n0.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-CyTa8lwL.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./TopBar-trNo6JMW.js";
import "./Container-DM0Kn0QD.js";
import "./utils-Cs0hNT-B.js";
import "./index-D3ELxcOV.js";
import "./Col-CBduUdZh.js";
import "./DropdownToggle-Drh8mRjS.js";
import "./DropdownToggle-DteEosLs.js";
import "./Popper-oXY5zJ3Q.js";
import "./DropdownMenu-ByvFgIJX.js";
import "./HeaderContext-Dzs8nqu1.js";
import "./Button-DpaK6EQT.js";
import "./Icon-s99Pqyk9.js";
import "./LinkListItem-E5PaFpui.js";
import "./track-focus-DbJ2CO43.js";
import "./Button-CSHA-nY_.js";
import "./MenuVerticale-DqCThYyv.js";
import "./Footer-BJG0d9qW.js";
import "./ResponsiveImage-VamWQThR.js";
import "./Sidebar-sTLe6AZz.js";
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
