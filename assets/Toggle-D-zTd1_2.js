import { j as jsxRuntimeExports } from "./jsx-runtime-HAoMODvy.js";
import { useMDXComponents } from "./index-PmpccBvv.js";
import { M as Meta, C as Canvas } from "./blocks-B4rLg4Zw.js";
import { C as Callout, a as CalloutText } from "./CalloutText-BfVOVq0O.js";
import { C as CalloutTitle } from "./CalloutTitle-ul3G2NV9.js";
import "./track-focus-DbJ2CO43.js";
import { T as ToggleStories, E as Esempio } from "./Toggle.stories-D6ZcCm9B.js";
import "./iframe-CMMl7uns.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-tK7Z1sPi.js";
import "./index-DITDp3yo.js";
import "./Container-BHfV2rkV.js";
import "./utils-C9kJvCLK.js";
import "./Col-BB6YdyMy.js";
import "./Form-DpdCseBx.js";
import "./FormGroup-Cz7ZFUfS.js";
import "./Toggle-zDPMNnI7.js";
import "./Label-DRk1_I2d.js";
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
