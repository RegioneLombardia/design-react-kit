import { j as jsxRuntimeExports } from "./jsx-runtime-HAoMODvy.js";
import { useMDXComponents } from "./index-PmpccBvv.js";
import { M as Meta, C as Canvas } from "./blocks-B4rLg4Zw.js";
import { C as Callout, a as CalloutText } from "./CalloutText-BfVOVq0O.js";
import { C as CalloutTitle } from "./CalloutTitle-ul3G2NV9.js";
import "./track-focus-DbJ2CO43.js";
import { C as CheckboxStories, a as CheckBox } from "./Checkbox.stories-BdxotR6O.js";
import "./iframe-CMMl7uns.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-tK7Z1sPi.js";
import "./index-DITDp3yo.js";
import "./Container-BHfV2rkV.js";
import "./utils-C9kJvCLK.js";
import "./Col-BB6YdyMy.js";
import "./Form-DpdCseBx.js";
import "./FormGroup-Cz7ZFUfS.js";
import "./Label-DRk1_I2d.js";
import "./Input-DuzUnKZk.js";
import "./index-DBau4ZCa.js";
import "./Icon-BqdlmApZ.js";
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
