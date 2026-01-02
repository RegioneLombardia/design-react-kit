import { j as jsxRuntimeExports } from "./jsx-runtime-CXYHfzc5.js";
import { useMDXComponents } from "./index-CvLaAZUv.js";
import { M as Meta, C as Canvas } from "./blocks-BNLORGWO.js";
import { M as MenuOrizzontaleStories, a as MenuOrizzontale } from "./MenuOrizzontale.stories-Od_vpI4v.js";
import "./iframe-CHwcEDm1.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-C581bQpe.js";
import "./Container-B9Jjl3EK.js";
import "./utils-EKL-V6E8.js";
import "./index-BhjGuW_H.js";
import "./Col-BjL_VQHj.js";
import "./Navbar-C6sPnTow.js";
import "./NavLink-fAVoF_3J.js";
import "./Collapse-BUYhj6-1.js";
import "./Transition-CxhyMBwm.js";
import "./Icon-DoI8qbhT.js";
import "./DropdownToggle-CEw0lNTS.js";
import "./DropdownToggle-Bz9MvRnP.js";
import "./Popper-DjdUY0jO.js";
import "./DropdownMenu-Cz5TdHwb.js";
import "./HeaderContext-HG8RVn3K.js";
import "./Button-lDcYqNTg.js";
import "./LinkListItem-C2mmxi8z.js";
import "./MegamenuItem-Bsu3Wr-W.js";
import "./Nav-D5ubZPdU.js";
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
