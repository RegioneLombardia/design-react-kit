import { ae as jsxRuntimeExports, af as Meta, ag as Canvas } from "./index-DT2cdpOB.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { L as LogoStories, a as Logo } from "./Logo.stories-ojCtNQCG.js";
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
