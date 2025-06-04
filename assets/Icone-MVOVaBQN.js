import { j as jsxRuntimeExports } from "./jsx-runtime-85EhGj5b.js";
import { useMDXComponents } from "./index-P7YjaiZ-.js";
import { M as Meta, C as Canvas } from "./index-DoFZ2GT_.js";
import { C as Callout, a as CalloutText } from "./CalloutText-CqvVpDfb.js";
import { C as CalloutTitle } from "./CalloutTitle-gFNWIXdJ.js";
import "./track-focus-DbJ2CO43.js";
import { I as IconeStories, L as ListaIcone } from "./Icone.stories-Bp31RhmD.js";
import "./index-CkHlViRq.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-CkfUY0Fy.js";
import "./index-CHqOcmVC.js";
import "./index-rIQx-mDE.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
import "./index-xoeSAV6i.js";
import "./Col-BILKv079.js";
import "./utils-o7gD2GSt.js";
import "./Icon-F0eg8ks0.js";
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
