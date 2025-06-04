import { j as jsxRuntimeExports } from "./jsx-runtime-85EhGj5b.js";
import { useMDXComponents } from "./index-P7YjaiZ-.js";
import { M as Meta, C as Canvas, A as ArgTypes } from "./index-DoFZ2GT_.js";
import { R as RadioStories, a as RadioBase, b as RadioInline, c as RadioDisabilitato, d as RadioGruppi } from "./Radio.stories-IplwZADv.js";
import "./index-CkHlViRq.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-CkfUY0Fy.js";
import "./index-CHqOcmVC.js";
import "./index-rIQx-mDE.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
import "./Col-BILKv079.js";
import "./utils-o7gD2GSt.js";
import "./index-xoeSAV6i.js";
import "./Form-HwQfqogR.js";
import "./FormGroup-i-FNyjZv.js";
import "./FormText--yDIuika.js";
import "./Label-BFRYMZ6g.js";
import "./Input-DAMspaeT.js";
import "./index-C2nrqh0v.js";
import "./Icon-F0eg8ks0.js";
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
      of: RadioStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "radio-button",
      children: "Radio Button"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "elementi-e-stili-per-la-creazione-di-radio-button-accessibili",
      children: "Elementi e stili per la creazione di radio button accessibili"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: RadioBase
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "inline",
      children: "Inline"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per allineare orizzontalmente i campi radio basterà aggiungere la ", jsxRuntimeExports.jsx(_components.em, {
        children: "prop"
      }), " ", jsxRuntimeExports.jsx(_components.code, {
        children: "inline"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "FormGroup"
      }), " padre."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: RadioInline
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "disabilitato",
      children: "Disabilitato"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Affinchè i campi radio risultino disabilitati occorrerà aggiungere la ", jsxRuntimeExports.jsx(_components.em, {
        children: "prop"
      }), " ", jsxRuntimeExports.jsx(_components.code, {
        children: "disabled"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Input"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: RadioDisabilitato
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "gruppi",
      children: "Gruppi"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per poter raggruppare gli elementi radio occorrerà aggiungere al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "FormGroup"
      }), " la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".form-check-group"
      }), ". L’elemento grafico di spunta verrà allineato alla destra del contenuto testuale."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: RadioGruppi
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: RadioStories
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
