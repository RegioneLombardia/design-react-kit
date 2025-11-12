import { j as jsxRuntimeExports } from "./jsx-runtime-CQi0FYWE.js";
import { useMDXComponents } from "./index-CHESMHRC.js";
import { M as Meta, C as Canvas } from "./blocks-BAsBN5ia.js";
import { C as Callout, a as CalloutText } from "./CalloutText-BCFQcaHg.js";
import { C as CalloutTitle } from "./CalloutTitle-1gMJN4Za.js";
import "./track-focus-DbJ2CO43.js";
import { T as ToggleStories, E as Esempio } from "./Toggle.stories-BPjORxQc.js";
import "./iframe-CCeCdQXR.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-cQORbDB_.js";
import "./index-DVlTO3qf.js";
import "./Container-DSg0hrw7.js";
import "./utils-CUz7Kjps.js";
import "./Col-BBB4ywWW.js";
import "./Form-CdWn9zr6.js";
import "./FormGroup-CWIK6v96.js";
import "./Toggle-DZCNJzsQ.js";
import "./Label-CsisIhL7.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: ToggleStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "toggle",
      children: "Toggle"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Un ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Toggle"
      }), " (o switch) è un controllo che permette all’utente di scegliere la modalità on/off di un singolo settaggio – rappresentando l’analogia dell’interruttore accesso/spento."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Esempio
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "info",
        highlight: true,
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Documentazione tecnica"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Per i dettagli tecnici sulla costruzione dei toggle si veda la  ", jsxRuntimeExports.jsx(_components.strong, {
              children: jsxRuntimeExports.jsx(_components.a, {
                href: "/docs/documentazione-form-toggles--documentazione#toggles",
                children: "relativa pagina"
              })
            })]
          })
        })]
      })
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
