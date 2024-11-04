import { ae as jsxRuntimeExports, af as Meta, ag as Canvas } from "./index-DT2cdpOB.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { C as CheckboxStories, a as CheckBox } from "./Checkbox.stories-Cfl10gTT.js";
import { C as Callout, a as CalloutText } from "./CalloutText-Dq2-0GdE.js";
import { C as CalloutTitle } from "./CalloutTitle-CDZdaeIL.js";
import "./iframe-BiDC3_i4.js";
import "../sb-preview/runtime.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-BUuRC3P_.js";
import "./index-DVdwlR73.js";
import "./index-DLlB04eo.js";
import "./inheritsLoose-DBHupcN5.js";
import "./index-CX5rBMF0.js";
import "./index-BdOSk9or.js";
import "./Form-94CbFQsc.js";
import "./index-C6XlOQIa.js";
import "./utils-BToed_Um.js";
import "./Container-BSU_5rqZ.js";
import "./index-xoeSAV6i.js";
import "./Col-sbjB5dMm.js";
import "./FormGroup-Dgycp2JI.js";
import "./Label-5MRzqQ-o.js";
import "./Input-CZz2SKjT.js";
import "./index-C2nrqh0v.js";
import "./Icon-CMQf0osR.js";
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
      of: CheckboxStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "check-box",
      children: "Check Box"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Una ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Checkbox"
      }), " (o tickbox) è un controllo che permette all’utente di selezionare scelte multiple in un insieme predefinito di opzioni o possibili scelte."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CheckBox
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
            children: ["Per i dettagli tecnici sulla costruzione delle checkbox si veda la ", jsxRuntimeExports.jsx(_components.strong, {
              children: jsxRuntimeExports.jsx(_components.a, {
                href: "/docs/documentazione-form-checkbox--documentazione#checkbox",
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
