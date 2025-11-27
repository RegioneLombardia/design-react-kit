import { j as jsxRuntimeExports } from "./jsx-runtime-BeHeGpne.js";
import { useMDXComponents } from "./index-COSitiYT.js";
import { M as Meta, C as Canvas } from "./blocks-C3pkO_Ko.js";
import { M as MenuOrizzontaleStories, a as MenuOrizzontale } from "./MenuOrizzontale.stories-DOX_LC9v.js";
import "./iframe-BdFmv8SM.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-D2R6h4pv.js";
import "./Container-Bwlgv8oa.js";
import "./utils-I-sN1Vsl.js";
import "./index-CkVteFxl.js";
import "./Col-Cgzm-KfT.js";
import "./Navbar-D8J2UkqA.js";
import "./NavLink-CtE72Hec.js";
import "./Collapse-CPmUrbY6.js";
import "./Transition-Co8zp6LZ.js";
import "./Icon-BOZjw-AL.js";
import "./DropdownToggle-DaNh76XJ.js";
import "./DropdownToggle-CfiQxFlB.js";
import "./Popper-BFzd-jOD.js";
import "./DropdownMenu-WdlcMIRN.js";
import "./HeaderContext-DQxdJr8m.js";
import "./Button-Bci7-Cud.js";
import "./LinkListItem-ZtDH8DDC.js";
import "./MegamenuItem-BlNQlSGW.js";
import "./Nav-BIzbiDmo.js";
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
