import { j as jsxRuntimeExports } from "./jsx-runtime-85EhGj5b.js";
import { useMDXComponents } from "./index-P7YjaiZ-.js";
import { M as Meta, C as Canvas } from "./index-DoFZ2GT_.js";
import { M as MenuOrizzontaleStories, a as MenuOrizzontale } from "./MenuOrizzontale.stories-C_KH7LCZ.js";
import "./index-CkHlViRq.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-CkfUY0Fy.js";
import "./index-CHqOcmVC.js";
import "./index-rIQx-mDE.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
import "./Container-Dh47g2ou.js";
import "./utils-o7gD2GSt.js";
import "./index-xoeSAV6i.js";
import "./Col-BILKv079.js";
import "./Navbar-D4bkcWi4.js";
import "./NavLink-DzvVMxEd.js";
import "./Collapse-DQ64-E85.js";
import "./Transition-DlYKBBR1.js";
import "./Icon-F0eg8ks0.js";
import "./DropdownToggle-CLFH1mQx.js";
import "./DropdownToggle-1z-m1r3w.js";
import "./Popper-CviNA3nW.js";
import "./DropdownMenu-ByvbSN40.js";
import "./HeaderContext-B6sEmMfd.js";
import "./Button-BIZ5TMd_.js";
import "./LinkListItem-BXSHz39N.js";
import "./MegamenuItem-DJ9YuNqc.js";
import "./Nav-Dnp0c3Au.js";
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
