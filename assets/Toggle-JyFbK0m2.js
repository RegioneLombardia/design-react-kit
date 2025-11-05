import { j as jsxRuntimeExports } from "./jsx-runtime-CZvMP_Mb.js";
import { useMDXComponents } from "./index-8uiiSus7.js";
import { M as Meta, C as Canvas } from "./blocks-ViceaN0z.js";
import { C as Callout, a as CalloutText } from "./CalloutText-3C50LiG8.js";
import { C as CalloutTitle } from "./CalloutTitle-iNhqs_Mp.js";
import "./track-focus-DbJ2CO43.js";
import { T as ToggleStories, E as Esempio } from "./Toggle.stories-BqUtMfVK.js";
import "./iframe-bYA1CaqE.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-D0HQBa1B.js";
import "./index-DeYFl_vO.js";
import "./Container-JFZX7WkN.js";
import "./utils-qr7fhAGw.js";
import "./Col-Bw1MHWJi.js";
import "./Form-CgPiSfoT.js";
import "./FormGroup-DM22xfTi.js";
import "./Toggle-smlsDxb7.js";
import "./Label-Bic_h4oo.js";
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
