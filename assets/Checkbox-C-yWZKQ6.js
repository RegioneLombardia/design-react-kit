import { j as jsxRuntimeExports } from "./jsx-runtime-CXYHfzc5.js";
import { useMDXComponents } from "./index-CvLaAZUv.js";
import { M as Meta, C as Canvas } from "./blocks-BNLORGWO.js";
import { C as Callout, a as CalloutText } from "./CalloutText-CcEMtJ_A.js";
import { C as CalloutTitle } from "./CalloutTitle-C1_Og4RE.js";
import "./track-focus-DbJ2CO43.js";
import { C as CheckboxStories, a as CheckBox } from "./Checkbox.stories-BFjzJrps.js";
import "./iframe-CHwcEDm1.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-C581bQpe.js";
import "./index-BhjGuW_H.js";
import "./Container-B9Jjl3EK.js";
import "./utils-EKL-V6E8.js";
import "./Col-BjL_VQHj.js";
import "./Form-yLq-j0IK.js";
import "./FormGroup-Cn6TniWo.js";
import "./Label-B_2EYfpW.js";
import "./Input-CjgGT0ux.js";
import "./index-DkbMyfdW.js";
import "./Icon-DoI8qbhT.js";
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
