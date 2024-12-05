import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-CqkeutgF.js";
import { O as OmbreEAngoliStories, A as Angoli, a as Ombre } from "./OmbreEAngoli.stories-Cvs1jHKF.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-CaWOas9z.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: OmbreEAngoliStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "ombre-e-angoli",
      children: "Ombre e Angoli"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Le ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Ombre"
      }), " e gli ", jsxRuntimeExports.jsx(_components.strong, {
        children: "angoli"
      }), " sono elementi utili per sottolineare i contenuti e dare loro maggiore evidenza.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Si specifica che per tutti gli elementi che presentano un raggio di curvatura, quest’ultimo deve essere di ", jsxRuntimeExports.jsx(_components.strong, {
        children: "8 pixel"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "angoli",
      children: "Angoli"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["I bordi arrotondati si ottengono tramite la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: "rounded-3"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Angoli
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "ombre",
      children: "Ombre"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["I due tipi di ombra si ottengono tramite le classi ", jsxRuntimeExports.jsx(_components.code, {
        children: "shadow-sm"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: "shadow"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Ombre
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
