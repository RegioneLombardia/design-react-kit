import { j as jsxRuntimeExports } from "./jsx-runtime-BeHeGpne.js";
import { useMDXComponents } from "./index-COSitiYT.js";
import { M as Meta, C as Canvas } from "./blocks-C3pkO_Ko.js";
import { G as GoBackStories, E as Esempi, P as Pulsanti, a as PulsantiSoloIcona } from "./GoBack.stories-g3mmJmUv.js";
import "./iframe-BdFmv8SM.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-D2R6h4pv.js";
import "./index-CkVteFxl.js";
import "./Button-CPPKlX23.js";
import "./Button-Bci7-Cud.js";
import "./utils-I-sN1Vsl.js";
import "./Icon-BOZjw-AL.js";
import "./track-focus-DbJ2CO43.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: GoBackStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "torna-indietro",
      children: "Torna indietro"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "esempio-link",
      children: "Esempio link"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Per visualizzare il Back to top nella posizione corretta è necessario scrollare questa pagina. L'esempio del codice\r\nsottostante sarà visibile solo a scroll avvenuto."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Esempi
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "pulsanti",
      children: "Pulsanti"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungendo la prop ", jsxRuntimeExports.jsx(_components.code, {
        children: "up"
      }), " si ottiene l'icona che punta in alto."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Pulsanti
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "pulsanti-con-sola-icona",
      children: "Pulsanti con sola icona"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Non specificando il testo, il pulsante rimane con sola icona."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: PulsantiSoloIcona
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
