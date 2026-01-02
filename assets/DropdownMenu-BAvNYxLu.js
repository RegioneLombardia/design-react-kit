import { j as jsxRuntimeExports } from "./jsx-runtime-CXYHfzc5.js";
import { useMDXComponents } from "./index-CvLaAZUv.js";
import { M as Meta, C as Canvas } from "./blocks-BNLORGWO.js";
import { D as DropdownMenuStories, _ as _Link, a as _Bottone, b as _Default, c as _BottomEnd, d as _HeaderEDivider } from "./DropdownMenu.stories-CWUuasJ0.js";
import "./iframe-CHwcEDm1.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-C581bQpe.js";
import "./DropdownToggle-CEw0lNTS.js";
import "./index-BhjGuW_H.js";
import "./DropdownToggle-Bz9MvRnP.js";
import "./utils-EKL-V6E8.js";
import "./Popper-DjdUY0jO.js";
import "./DropdownMenu-Cz5TdHwb.js";
import "./HeaderContext-HG8RVn3K.js";
import "./Button-lDcYqNTg.js";
import "./Icon-DoI8qbhT.js";
import "./LinkListItem-C2mmxi8z.js";
import "./track-focus-DbJ2CO43.js";
function _createMdxContent(props) {
  const _components = {
    br: "br",
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
      of: DropdownMenuStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "dropdown-menu",
      children: "Dropdown Menu"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il Dropdown menu (detto anche menù a tendina) attiva o disattiva overlay contestuali per visualizzare elenchi di link o contenuti di varia natura."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "bottoni-dropdown",
      children: "Bottoni dropdown"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il design di default dei dropdown richiede l’applicazione della classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".btn-dropdown"
      }), ".", jsxRuntimeExports.jsx(_components.br, {}), "\n", "I link o le voci all’interno del dropdown devono essere contenute in un elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: ".link-list"
      }), ".", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Per la variante bottone è necessario utilizzare la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".btn-primary"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "variante-menu",
      children: "Variante menu"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _Link
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "variante-bottone",
      children: "Variante bottone"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _Bottone
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "default",
      children: "Default"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _Default
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L'arrow di default è posto a sinistra.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Per spostarlo a destra è necessario utilizzare: ", jsxRuntimeExports.jsx(_components.code, {
        children: "data-popper-placement='bottom-end'"
      }), " nel ", jsxRuntimeExports.jsx("code", {
        children: "div"
      }), " contenente le voci del menu che viene aperto al click."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _BottomEnd
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "header--divider",
      children: "Header & divider"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _HeaderEDivider
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
