import { j as jsxRuntimeExports } from "./jsx-runtime-CQi0FYWE.js";
import { useMDXComponents } from "./index-CHESMHRC.js";
import { M as Meta, C as Canvas } from "./blocks-BAsBN5ia.js";
import { L as ListeStories, D as Default, S as SenzaDivider, C as ConHeader, N as Nested } from "./Liste.stories-Cdmy3gNI.js";
import "./iframe-CCeCdQXR.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-cQORbDB_.js";
import "./Collapse-CShDFyTU.js";
import "./index-DVlTO3qf.js";
import "./utils-CUz7Kjps.js";
import "./Transition-DK9SRxDb.js";
import "./Icon-BE80VWGZ.js";
import "./LinkListItem-DHARikHd.js";
import "./track-focus-DbJ2CO43.js";
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
