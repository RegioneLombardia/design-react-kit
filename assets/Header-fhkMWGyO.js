import { j as jsxRuntimeExports } from "./jsx-runtime-C4ss9V6n.js";
import { useMDXComponents } from "./index-CTczdr5H.js";
import { M as Meta, C as Canvas } from "./blocks-DHrHhaKn.js";
import { TopBarBase, TopBarAccesso, TopBarUserSettings } from "./TopBar.stories-C7npb6Qm.js";
import { BarraBase, BarraSearch } from "./BarraIstituzionale.stories-B4iWpENK.js";
import { BottoneHamburgerBase } from "./BottoneHamburger.stories-D8FX4ZW0.js";
import { MenuOrizzontale, MenuVerticaleComparsa, MenuSidebar } from "./MenuPrincipale.stories-Cwbxawbp.js";
import "./iframe-BFNAXEkx.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-R64eW5Wq.js";
import "./TopBar-8hcAq-6L.js";
import "./Container-BxoeQkUV.js";
import "./utils-DyznEV42.js";
import "./index-CHcFYvVh.js";
import "./Col-CkVB0JHd.js";
import "./DropdownToggle-C3RxkQUc.js";
import "./DropdownToggle-BIEYS7xk.js";
import "./Popper-DOzk8reh.js";
import "./DropdownMenu-CEy5EV_9.js";
import "./HeaderContext-DAtYf8xv.js";
import "./Button-DEAEXXjH.js";
import "./Icon-Be4XlCcy.js";
import "./LinkListItem-DqRIkDYc.js";
import "./track-focus-DbJ2CO43.js";
import "./BarraIstituzionale-BNfKDM33.js";
import "./Button-CPeRZpnQ.js";
import "./BottoneHamburger-BtedJFJH.js";
import "./MenuVerticale-Bks_3skJ.js";
import "./Footer-x1Jeq43b.js";
import "./Navbar-C9MC9uT7.js";
import "./NavLink-DHBXolkT.js";
import "./Collapse-CzgOO3RC.js";
import "./Transition-Hkr92Nga.js";
import "./MegamenuItem-De7TdvK2.js";
import "./Nav-C_BR_slr.js";
import "./ResponsiveImage-BTn01bsW.js";
import "./Sidebar-BLdY8ajy.js";
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
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
      children: "L'Header – posto sempre nella testata del layout – si ottiene dall’unione di più componenti:"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "topbar",
      children: "TopBar"
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
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "topbar-base",
      children: "TopBar Base"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TopBarBase
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "topbar-accesso",
      children: "TopBar Accesso"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "La topbar può accogliere informazioni o, ad esempio, il pulsante per l’accesso utente."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TopBarAccesso
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "topbar-accesso-effettuato",
      children: "TopBar Accesso Effettuato"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il menu dropdown può contenere informazioni utili per il login, il logout e la gestione del profilo utente e delle impostazioni. Queste info possono essere relative all’utente e all’operatore che sta utilizzando il servizio."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "La dimensione del menu dropdown può variare a seconda delle esigenze, come ad esempio per accogliere una maggiore lunghezza delle voci al suo interno."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TopBarUserSettings
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "barra-istituzionale",
      children: "Barra Istituzionale"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Contiene"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["il ", jsxRuntimeExports.jsx(_components.strong, {
          children: "logo"
        }), " di Regione Lombardia"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["il ", jsxRuntimeExports.jsx(_components.strong, {
          children: "nome del servizio"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["l'", jsxRuntimeExports.jsx(_components.strong, {
          children: "acronimo"
        }), " (facoltativo), che precede il nome del servizio."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["il ", jsxRuntimeExports.jsx(_components.strong, {
          children: "bottone hamburger"
        }), " (facoltativo), a sinistra del logo, per aprire/chiudere il menù principale di navigazione."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "barra-istituzionale-base",
      children: "Barra Istituzionale Base"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: BarraBase
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "barra-istituzionale-search",
      children: "Barra Istituzionale Search"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Nel caso in cui il servizio lo richieda, è possibile aggiungere un campo di ricerca generico all’interno della barra istituzionale nella parte destra."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: BarraSearch
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "bottone-hamburger",
      children: "Bottone Hamburger"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Normalmente la pagina di un applicativo ha un menù di navigazione principale, orizzontale o verticale."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Su schermi di piccole dimensioni tale menù scompare per ragioni di spazio.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Compare però un bottone hamburger per poter aprire e chiudere il menù."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il Bottone Hamburger è un componente React specifico per la Regione Lombardia da inserire (facoltativamente) nella Barra Istituzionale."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: BottoneHamburgerBase
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Vanno specificati"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "data-bs-target"
        }), " che deve corrsipondere all'", jsxRuntimeExports.jsx(_components.em, {
          children: "id"
        }), " del ", jsxRuntimeExports.jsx(_components.em, {
          children: "div"
        }), " contenitore del menù da aprire/chiudere"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "menuType"
        }), ": ", jsxRuntimeExports.jsx(_components.em, {
          children: "horizontal"
        }), ", ", jsxRuntimeExports.jsx(_components.em, {
          children: "vertical"
        }), " o ", jsxRuntimeExports.jsx(_components.em, {
          children: "sidebar"
        }), "."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "menu-principale-di-navigazione",
      children: "Menu Principale di navigazione"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Pur non essendo strettamente obbligatorio, quasi sempre ne serve uno.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Può essere ", jsxRuntimeExports.jsx(_components.strong, {
        children: "orizzontale"
      }), ", ", jsxRuntimeExports.jsx(_components.strong, {
        children: "verticale"
      }), " o ", jsxRuntimeExports.jsx(_components.strong, {
        children: "sidebar"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il tipo va scelto in base al ", jsxRuntimeExports.jsx(_components.strong, {
        children: "numero di voci"
      }), " che deve contenere e alla ", jsxRuntimeExports.jsx(_components.strong, {
        children: "quantità di informazioni da mostrare"
      }), " a video.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "I tre esempi che seguono servono a chiarire il concetto."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "menu-orizzontale",
      children: "Menu Orizzontale"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il menù orizzontale ", jsxRuntimeExports.jsx(_components.strong, {
        children: "occupa poco spazio"
      }), ", ma può contenere solo pochi link.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Con i dropdown o i megamenù è possibile aumentarli, ma l'utente deve cliccare per vederli."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il menù scompare automaticamente sugli schermi medio-piccoli e nella Barra Istituzionale appare il bottone hamburger."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: MenuOrizzontale
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: `const HorHeader = () => {
  const [isOpenSide, setIsOpenSide] = useState(false);
  const acronym = 'ACCREDITAS';
  const applicationName = 'Sistema di accreditamento';
  return (
    <header>
      <TopBar />
      <BarraIstituzionale acronym={acronym} applicationName={applicationName}
          hamburgerButton={true} menuType="horizontal" data_bs_target="#nav1"
          isOpenSide={isOpenSide} toggleMenu={setIsOpenSide}>
        <div className="it-header-navbar-wrapper theme-light-desk it25-menu-orizzontale">
          <Navbar expand="lg" className='has-megamenu'>
            <Collapse navbar header megamenu id="nav1"
              isOpen={isOpenSide}
              onOverlayClick={() => {
                setIsOpenSide(!isOpenSide);
              }}
            >
              <Nav navbar>
                <_navItems/>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </BarraIstituzionale>
    </header>
  );
};
`
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "menu-verticale",
      children: "Menu Verticale"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il menù verticale a comparsa è utile se le ", jsxRuntimeExports.jsx(_components.strong, {
        children: "voci di menù"
      }), " sono ", jsxRuntimeExports.jsx(_components.strong, {
        children: "molto numerose"
      }), ".", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "Non occupa spazio"
      }), ", quindi è adatto se anche le informazioni da mostrare a video sono molte, ma l'utente deve aprirlo e chiuderlo manualmente."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "In questo caso il BottoneHamburger è sempre presente nella Barra Istituzionale"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: MenuVerticaleComparsa
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "menu-sidebar",
      children: "Menu Sidebar"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La sidebar permette di visualizzare ", jsxRuntimeExports.jsx(_components.strong, {
        children: "molte voci di menù immediatamente"
      }), ", ma occupa spazio.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Quindi è opportuno utilizzarlo solo se la quantità di informazioni da mostrare contemporaneamente a video lo consente."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La sidebar scompare automaticamente sugli schermi piccoli e nella Barra Istituzionale appare il bottone hamburger.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Quando viene riaperta si espande dall'alto verso il basso, appena sotto la Barra Istituzionale."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: MenuSidebar
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: `const SideHeader = () => {
  const [isOpenSide, setIsOpenSide] = useState(false);
  const acronym = 'ACCREDITAS';
  const applicationName = 'Sistema di accreditamento';
  return (
    <header>
      <TopBar />
      <BarraIstituzionale acronym={acronym} applicationName={applicationName}
        hamburgerButton={true} menuType="sidebar" data_bs_target="#nav1"
        isOpenSide={isOpenSide} toggleMenu={setIsOpenSide}>
        <div className="it-header-navbar-wrapper theme-light-desk">
          <Collapse id="nav1"
            isOpen={isOpenSide}
            onOverlayClick={() => {
              setIsOpenSide(!isOpenSide);
            }}
          >
            <MenuVerticale>
              <_sidebar/>
            </MenuVerticale>
          </Collapse>
        </div>
      </BarraIstituzionale>
    </header>
  );
};
`
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
