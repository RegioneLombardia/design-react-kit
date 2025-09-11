import { j as jsxRuntimeExports } from "./jsx-runtime-BdP592-V.js";
import { useMDXComponents } from "./index-B98xVB7q.js";
import { M as Meta, C as Canvas } from "./blocks-C8t04eRj.js";
import { C as Callout, a as CalloutText } from "./CalloutText-SqRq_wfz.js";
import { C as CalloutTitle } from "./CalloutTitle-3TWQ0WNM.js";
import "./track-focus-DbJ2CO43.js";
import { I as IconeStories, L as ListaIcone } from "./Icone.stories-BUC4C5G7.js";
import "./iframe-CywKGv0B.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-zaF9E960.js";
import "./index-BAkpI1zY.js";
import "./Col-CzpBcQxN.js";
import "./utils-BbqmM4jY.js";
import "./Icon-CfKGR1lx.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    p: "p",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: IconeStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "icone",
      children: "Icone"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Le Icone proposte di seguito sono quelle proposte da AgID.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Sono contenutte tutte all'interno uno sprite SVG, presente nella libreria alla cartella ", jsxRuntimeExports.jsx(_components.code, {
        children: "dist/svg"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["In alternativa, nel caso si necessiti di altre icone oltre a quelle fornite è ammesso l’utilizzo dell’icon pack ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Icomoon"
      }), ", scaricabile all’indirizzo ", jsxRuntimeExports.jsx(_components.strong, {
        children: jsxRuntimeExports.jsx(_components.a, {
          href: "https://icomoon.io/",
          rel: "nofollow",
          children: "https://icomoon.io/"
        })
      }), ".", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Si consiglia di utilizzare icone appartenenti allo stesso ecosistema, ed in generale di mantenere coerenza nell’utilizzo di esse."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ListaIcone
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
            children: ["Per l’utilizzo delle icone e il loro dimensionamento e colorazione, si consulti la: ", jsxRuntimeExports.jsx(_components.strong, {
              children: jsxRuntimeExports.jsx(_components.a, {
                href: "/docs/documentazione-utilities-icon--documentazione#icone",
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
