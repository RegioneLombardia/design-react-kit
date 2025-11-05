import { j as jsxRuntimeExports } from "./jsx-runtime-CZvMP_Mb.js";
import { useMDXComponents } from "./index-8uiiSus7.js";
import { M as Meta, C as Canvas } from "./blocks-ViceaN0z.js";
import { C as Callout, a as CalloutText } from "./CalloutText-3C50LiG8.js";
import { C as CalloutTitle } from "./CalloutTitle-iNhqs_Mp.js";
import "./track-focus-DbJ2CO43.js";
import { R as RadioButtonStories, a as RadioButton } from "./RadioButton.stories-2xBJRpwR.js";
import "./iframe-bYA1CaqE.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-D0HQBa1B.js";
import "./index-DeYFl_vO.js";
import "./Container-JFZX7WkN.js";
import "./utils-qr7fhAGw.js";
import "./Col-Bw1MHWJi.js";
import "./Form-CgPiSfoT.js";
import "./FormGroup-DM22xfTi.js";
import "./Label-Bic_h4oo.js";
import "./Input-CXUjzcOq.js";
import "./index-CIdfaX2c.js";
import "./Icon-DeQEcrNU.js";
import "./utils-CwYUlCuU.js";
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
      of: RadioButtonStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "radio-button",
      children: "Radio Button"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Un ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Radio button"
      }), " (o option button) è un controllo che permette all’utente di effettuare una scelta singola esclusiva nell’ambito di un insieme predefinito di opzioni o possibili scelte."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: RadioButton
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
            children: ["Per i dettagli tecnici sulla costruzione dei radio button si veda la ", jsxRuntimeExports.jsx(_components.strong, {
              children: jsxRuntimeExports.jsx(_components.a, {
                href: "/docs/documentazione-form-radio--documentazione#radio-button",
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
