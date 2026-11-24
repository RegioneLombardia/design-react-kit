import { j as jsxRuntimeExports } from "./jsx-runtime-BQvmpnS1.js";
import { useMDXComponents } from "./index-BdiD6C9B.js";
import { M as Meta, C as Canvas } from "./blocks-Dib3DQow.js";
import { C as Callout, a as CalloutText } from "./CalloutText-DW2tIUk6.js";
import { C as CalloutTitle } from "./CalloutTitle-ejCIBb0h.js";
import "./track-focus-DbJ2CO43.js";
import { R as RadioButtonStories, a as RadioButton } from "./RadioButton.stories-CF5PHHS5.js";
import "./iframe-HXAWYzM9.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-Cm8uWDCx.js";
import "./index-CKghkky9.js";
import "./Container-CyxFT8RT.js";
import "./utils-BMtw1b3F.js";
import "./Col-BdsGQiBh.js";
import "./Form-D0DRmFJJ.js";
import "./FormGroup-DC9C9wib.js";
import "./Label-C9yve6sI.js";
import "./Input-DsTtd178.js";
import "./index-Cj8_wu9Z.js";
import "./Icon-DZMKCTMd.js";
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
