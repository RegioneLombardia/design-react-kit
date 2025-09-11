import { j as jsxRuntimeExports } from "./jsx-runtime-BdP592-V.js";
import { useMDXComponents } from "./index-B98xVB7q.js";
import { M as Meta, C as Canvas } from "./blocks-C8t04eRj.js";
import { C as CheckboxStories, a as CheckboxBase, b as CheckboxInline, c as CheckboxDisabilitato, d as CheckboxGruppi, e as CheckboxMixedButton } from "./Checkbox.stories-DKeagwMB.js";
import "./iframe-CywKGv0B.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-zaF9E960.js";
import "./Col-CzpBcQxN.js";
import "./utils-BbqmM4jY.js";
import "./index-BAkpI1zY.js";
import "./Form-CdAAJOLx.js";
import "./FormGroup-C9ur0u9a.js";
import "./FormText-DN_vHbr4.js";
import "./Label-SKb2Z-vW.js";
import "./Input-CuU17S6c.js";
import "./index-BO1greU8.js";
import "./Icon-CfKGR1lx.js";
import "./utils-CwYUlCuU.js";
import "./track-focus-DbJ2CO43.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: CheckboxStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "checkbox",
      children: "Checkbox"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "elementi-e-stili-per-la-creazione-di-checkbox-accessibili",
      children: "Elementi e stili per la creazione di checkbox accessibili."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CheckboxBase
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "inline",
      children: "Inline"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per allineare orizzontalmente le checkbox basterà aggiungere la ", jsxRuntimeExports.jsx(_components.em, {
        children: "prop"
      }), " ", jsxRuntimeExports.jsx(_components.code, {
        children: "inline"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "FormGroup"
      }), " padre."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CheckboxInline
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "disabilitato",
      children: "Disabilitato"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Affinchè i campi checkbox risultino disabilitati occorrerà aggiungere la ", jsxRuntimeExports.jsx(_components.em, {
        children: "prop"
      }), " ", jsxRuntimeExports.jsx(_components.code, {
        children: "disabled"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Input"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CheckboxDisabilitato
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "gruppi",
      children: "Gruppi"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per poter raggruppare gli elementi checkbox occorrerà aggiungere al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "FormGroup"
      }), " la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".form-check-group"
      }), ". L’elemento grafico di spunta verrà allineato alla destra del contenuto testuale."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CheckboxGruppi
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "mixed-button",
      children: "Mixed Button"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per ottenere uno stato di tipo Mixed basterà aggiungere la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".semi-checked"
      }), " al componente Input."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CheckboxMixedButton
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
