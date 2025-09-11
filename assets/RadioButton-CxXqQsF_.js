import { j as jsxRuntimeExports } from "./jsx-runtime-BdP592-V.js";
import { useMDXComponents } from "./index-B98xVB7q.js";
import { M as Meta, C as Canvas } from "./blocks-C8t04eRj.js";
import { C as Callout, a as CalloutText } from "./CalloutText-SqRq_wfz.js";
import { C as CalloutTitle } from "./CalloutTitle-3TWQ0WNM.js";
import "./track-focus-DbJ2CO43.js";
import { R as RadioButtonStories, a as RadioButton } from "./RadioButton.stories-1ezg_QNA.js";
import "./iframe-CywKGv0B.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-zaF9E960.js";
import "./index-BAkpI1zY.js";
import "./Container-CmXOe7U0.js";
import "./utils-BbqmM4jY.js";
import "./Col-CzpBcQxN.js";
import "./Form-CdAAJOLx.js";
import "./FormGroup-C9ur0u9a.js";
import "./Label-SKb2Z-vW.js";
import "./Input-CuU17S6c.js";
import "./index-BO1greU8.js";
import "./Icon-CfKGR1lx.js";
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
