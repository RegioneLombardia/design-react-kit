import { j as jsxRuntimeExports } from "./jsx-runtime-BeHeGpne.js";
import { useMDXComponents } from "./index-COSitiYT.js";
import { M as Meta, C as Canvas } from "./blocks-C3pkO_Ko.js";
import { C as Callout, a as CalloutText } from "./CalloutText-B_y3CkZ3.js";
import { C as CalloutTitle } from "./CalloutTitle-BE_qPhhy.js";
import "./track-focus-DbJ2CO43.js";
import { C as CheckboxStories, a as CheckBox } from "./Checkbox.stories-CzomZvPM.js";
import "./iframe-BdFmv8SM.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-D2R6h4pv.js";
import "./index-CkVteFxl.js";
import "./Container-Bwlgv8oa.js";
import "./utils-I-sN1Vsl.js";
import "./Col-Cgzm-KfT.js";
import "./Form-B4YfklDM.js";
import "./FormGroup-Ce3ILOWp.js";
import "./Label-CgkLv0Y-.js";
import "./Input-Bq_7me4w.js";
import "./index-D_YqDt74.js";
import "./Icon-BOZjw-AL.js";
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
