import { ae as jsxRuntimeExports, af as Meta, ag as Canvas } from "./index-DT2cdpOB.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { D as DropdownMenuStories, _ as _Link, a as _Bottone, b as _Default, c as _BottomEnd, d as _HeaderEDivider } from "./DropdownMenu.stories-Cbfr3Sav.js";
import "./iframe-BiDC3_i4.js";
import "../sb-preview/runtime.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-BUuRC3P_.js";
import "./index-DVdwlR73.js";
import "./index-DLlB04eo.js";
import "./inheritsLoose-DBHupcN5.js";
import "./index-CX5rBMF0.js";
import "./index-BdOSk9or.js";
import "./DropdownMenu-BVvApC7Y.js";
import "./index-xoeSAV6i.js";
import "./index-C6XlOQIa.js";
import "./Popper-BdfyK_V7.js";
import "./utils-BToed_Um.js";
import "./DropdownToggle-DjfptCRZ.js";
import "./DropdownToggle-CpBYzZpr.js";
import "./Button-BqturWaL.js";
import "./Icon-CMQf0osR.js";
import "./LinkListItem-B69qYNZ5.js";
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
