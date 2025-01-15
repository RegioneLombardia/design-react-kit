import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-BqxpwL9E.js";
import { D as DropdownMenuStories, _ as _Link, a as _Bottone, b as _Default, c as _BottomEnd, d as _HeaderEDivider } from "./DropdownMenu.stories-jF3A5Dr9.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-Y7LDblFf.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./DropdownToggle-LNqCZlb7.js";
import "./index-D3ELxcOV.js";
import "./DropdownToggle-DteEosLs.js";
import "./utils-Cs0hNT-B.js";
import "./Popper-oXY5zJ3Q.js";
import "./DropdownMenu-ByvFgIJX.js";
import "./HeaderContext-Dzs8nqu1.js";
import "./Button-DpaK6EQT.js";
import "./Icon-D_scqGwU.js";
import "./LinkListItem-E5PaFpui.js";
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
