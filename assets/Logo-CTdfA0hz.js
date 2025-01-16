import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-FY3MUfvb.js";
import { L as LogoStories, a as Logo } from "./Logo.stories-vwNnFSg0.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-CyTa8lwL.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: LogoStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "logo",
      children: "Logo"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Di seguito è rappresentata la versione del ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Logo di Regione Lombardia"
      }), " utilizzata per le interfacce web."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L’", jsxRuntimeExports.jsx(_components.strong, {
        children: "area di rispetto"
      }), " è la distanza minima da considerare in fase di abbinamento del logo ad altri elementi e/o marchi.\nNel caso delle interfacce di Regione Lombardia, il logo deve essere inserito ", jsxRuntimeExports.jsx(_components.strong, {
        children: "nell’header all’interno della barra istituzionale in posizione sinistra"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il logo non deve mai essere alterato e si consiglia di utilizzare sempre lo stesso nella sua forma originale.\nLo spazio che intercorre tra il logo ed eventuali altri elementi nella barra istituzionale ", jsxRuntimeExports.jsx(_components.strong, {
        children: "deve essere di almeno 24 pixel"
      }), ".\nIl marchio e la sua costituzione ed applicazione sono regolati dal Brandbook emesso da Regione Lombardia."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Logo
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
