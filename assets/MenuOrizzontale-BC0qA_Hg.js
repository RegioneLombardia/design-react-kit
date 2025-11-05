import { j as jsxRuntimeExports } from "./jsx-runtime-CZvMP_Mb.js";
import { useMDXComponents } from "./index-8uiiSus7.js";
import { M as Meta, C as Canvas } from "./blocks-ViceaN0z.js";
import { M as MenuOrizzontaleStories, a as MenuOrizzontale } from "./MenuOrizzontale.stories-BKg8C0n3.js";
import "./iframe-bYA1CaqE.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-D0HQBa1B.js";
import "./Container-JFZX7WkN.js";
import "./utils-qr7fhAGw.js";
import "./index-DeYFl_vO.js";
import "./Col-Bw1MHWJi.js";
import "./Navbar-B4XXmI4t.js";
import "./NavLink-CxAcj8Ec.js";
import "./Collapse-ETdgWr9y.js";
import "./Transition-E_HabY2v.js";
import "./Icon-DeQEcrNU.js";
import "./DropdownToggle-CgpH25xi.js";
import "./DropdownToggle-Cg6JATyu.js";
import "./Popper-BxAG9zCt.js";
import "./DropdownMenu-BsXLOHK8.js";
import "./HeaderContext-nw0m8EP2.js";
import "./Button-YpRptLHt.js";
import "./LinkListItem-rUKnlsqr.js";
import "./MegamenuItem-Cv4Cv2is.js";
import "./Nav-ClP1hunq.js";
import "./track-focus-DbJ2CO43.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    em: "em",
    h1: "h1",
    p: "p",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: MenuOrizzontaleStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "menù-orizzontale",
      children: "Menù Orizzontale"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Menu orizzontale"
      }), " è il menu principale di navigazione. Esso può contenere, oltre a ", jsxRuntimeExports.jsx(_components.em, {
        children: "semplici link"
      }), ", il ", jsxRuntimeExports.jsx(_components.em, {
        children: "menu dropdown"
      }), " ed il ", jsxRuntimeExports.jsx(_components.em, {
        children: "megamenu"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Su ", jsxRuntimeExports.jsx(_components.strong, {
        children: "desktop"
      }), " il menu è sempre visualizzato e a scorrimento in basso e rimane posizionato fisso sotto la barra istituzionale.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Se la pagina scorre, il menu si sposta di conseguenza, rimanendo sotto la barra istituzionale.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Questa tipologia di menu viene preferita al ", jsxRuntimeExports.jsx(_components.em, {
        children: "menu verticale"
      }), " quando ", jsxRuntimeExports.jsx(_components.strong, {
        children: "le voci del menu sono al massimo 5 e le label sono brevi"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Su ", jsxRuntimeExports.jsx(_components.strong, {
        children: "smartphone"
      }), " la visualizzazione del menu orizzontale è comandata dal bottone hamburger nella barra istituzionale e le voci sono visualizzate in verticale per questioni di spazio. In questo caso il pannello comparirà con uno scorrimento laterale da sinistra ed oscuramento della pagina sottostante."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: MenuOrizzontale
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Un esempio completo di funzionamento può essere visto in ", jsxRuntimeExports.jsx(_components.strong, {
        children: jsxRuntimeExports.jsx(_components.a, {
          href: "/story/linee-guida-componenti-principali-header-menuprincipale--menu-orizzontale",
          children: "Header/Menu Principale/Menu Orizzontale"
        })
      }), "."]
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
