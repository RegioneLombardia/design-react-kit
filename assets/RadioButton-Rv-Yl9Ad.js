import { j as jsxRuntimeExports } from "./jsx-runtime-85EhGj5b.js";
import { useMDXComponents } from "./index-P7YjaiZ-.js";
import { M as Meta, C as Canvas } from "./index-DoFZ2GT_.js";
import { C as Callout, a as CalloutText } from "./CalloutText-CqvVpDfb.js";
import { C as CalloutTitle } from "./CalloutTitle-gFNWIXdJ.js";
import "./track-focus-DbJ2CO43.js";
import { R as RadioButtonStories, a as RadioButton } from "./RadioButton.stories-CY6MOnEf.js";
import "./index-CkHlViRq.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-CkfUY0Fy.js";
import "./index-CHqOcmVC.js";
import "./index-rIQx-mDE.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
import "./index-xoeSAV6i.js";
import "./Container-Dh47g2ou.js";
import "./utils-o7gD2GSt.js";
import "./Col-BILKv079.js";
import "./Form-HwQfqogR.js";
import "./FormGroup-i-FNyjZv.js";
import "./Label-BFRYMZ6g.js";
import "./Input-DAMspaeT.js";
import "./index-C2nrqh0v.js";
import "./Icon-F0eg8ks0.js";
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
