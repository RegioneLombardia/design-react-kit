import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-CqkeutgF.js";
import { L as ListeStories, D as Default, S as SenzaDivider, C as ConHeader, N as Nested } from "./Liste.stories-G32NBfcX.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-CaWOas9z.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./LinkListItem-E5PaFpui.js";
import "./index-D3ELxcOV.js";
import "./Icon-CwbcXiv7.js";
import "./Collapse-JUs9UIql.js";
import "./utils-Cs0hNT-B.js";
import "./Transition-D-QAwXWC.js";
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
