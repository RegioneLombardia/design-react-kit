import { j as jsxRuntimeExports } from "./jsx-runtime-BdP592-V.js";
import { useMDXComponents } from "./index-B98xVB7q.js";
import { M as Meta, C as Canvas } from "./blocks-C8t04eRj.js";
import { L as ListeStories, D as Default, S as SenzaDivider, C as ConHeader, N as Nested } from "./Liste.stories-D2wwdGu1.js";
import "./iframe-CywKGv0B.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-zaF9E960.js";
import "./Collapse-3Zo-PQRf.js";
import "./index-BAkpI1zY.js";
import "./utils-BbqmM4jY.js";
import "./Transition-BTiC56gs.js";
import "./Icon-CfKGR1lx.js";
import "./LinkListItem-CiA4spH6.js";
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
