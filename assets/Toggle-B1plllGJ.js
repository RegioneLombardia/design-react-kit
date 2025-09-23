import { j as jsxRuntimeExports } from "./jsx-runtime-C4ss9V6n.js";
import { useMDXComponents } from "./index-CTczdr5H.js";
import { M as Meta, C as Canvas } from "./blocks-DHrHhaKn.js";
import { C as Callout, a as CalloutText } from "./CalloutText-Cj0eN6tv.js";
import { C as CalloutTitle } from "./CalloutTitle-BGZ0ygS0.js";
import "./track-focus-DbJ2CO43.js";
import { T as ToggleStories, E as Esempio } from "./Toggle.stories-CZ2QGH0b.js";
import "./iframe-BFNAXEkx.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-R64eW5Wq.js";
import "./index-CHcFYvVh.js";
import "./Container-BxoeQkUV.js";
import "./utils-DyznEV42.js";
import "./Col-CkVB0JHd.js";
import "./Form-CBLa8v-u.js";
import "./FormGroup-DjVzIKNO.js";
import "./Toggle-CKIYobUG.js";
import "./Label-4cwt9iwY.js";
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
