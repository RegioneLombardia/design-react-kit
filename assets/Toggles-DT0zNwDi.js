import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas, ag as ArgTypes } from "./index-CqkeutgF.js";
import { T as TogglesStories, a as Toggles, b as TogglesDisabilitate, G as GruppiDiToggles } from "./Toggles.stories-B0To3DBK.js";
import { T as Toggle } from "./Toggle-B0dg8eZd.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-CaWOas9z.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./Col-CBduUdZh.js";
import "./utils-Cs0hNT-B.js";
import "./index-D3ELxcOV.js";
import "./Form-BUAm_fDY.js";
import "./FormGroup-D30_tvv_.js";
import "./FormText-DsMeXZ_s.js";
import "./Label-DqFgb-in.js";
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
      of: TogglesStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "toggles",
      children: "Toggles"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "campi-di-tipo-interruttore",
      children: "Campi di tipo “interruttore”"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "toggles-1",
      children: "Toggles"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per ottenere un interruttore con levetta basterà usare il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Toggle"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Toggles
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "disabilitato",
      children: "Disabilitato"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Affinchè l’interruttore risulti disabilitato occorrerà aggiungere la ", jsxRuntimeExports.jsx(_components.em, {
        children: "prop"
      }), " ", jsxRuntimeExports.jsx(_components.code, {
        children: "disabled"
      }), " al checkbox."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TogglesDisabilitate
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "gruppi",
      children: "Gruppi"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per poter raggruppare gli elementi toggle occorrerà aggiungere al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "FormGroup"
      }), " la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".form-check-group"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: GruppiDiToggles
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Toggle
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