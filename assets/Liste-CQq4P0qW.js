import { ae as jsxRuntimeExports, af as Meta, ag as Canvas } from "./index-BBhyCMAt.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { L as ListeStories, D as Default, S as SenzaDivider, C as ConHeader, N as Nested } from "./Liste.stories-C-tY1pDi.js";
import "./iframe-B3SUZ60o.js";
import "../sb-preview/runtime.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-BUuRC3P_.js";
import "./index-DVdwlR73.js";
import "./index-DLlB04eo.js";
import "./inheritsLoose-DBHupcN5.js";
import "./index-CX5rBMF0.js";
import "./index-BdOSk9or.js";
import "./LinkListItem-B69qYNZ5.js";
import "./index-xoeSAV6i.js";
import "./Icon-Djhnk6Va.js";
import "./Collapse-DybBevio.js";
import "./index-C6XlOQIa.js";
import "./utils-BToed_Um.js";
import "./Transition-BB1znAg7.js";
function _createMdxContent(props) {
  const _components = {
    br: "br",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: ListeStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "liste",
      children: "Liste"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Le Liste sono composte da voci attraverso le quali è possibile effettuare sessioni di navigazione all’interno di un’interfaccia.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Troviamo spesso questo elemento all’interno dei menu verticali, ma possono essere presenti in diverse modalità, come ad esempio all’interno di menu fissi laterali."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "base",
      children: "Base"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "default",
      children: "Default"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Default
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "senza-divider",
      children: "Senza divider"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SenzaDivider
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "con-header",
      children: "Con Header"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ConHeader
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "nested",
      children: "Nested"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Nested
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
