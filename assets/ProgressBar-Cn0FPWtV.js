import { j as jsxRuntimeExports } from "./jsx-runtime-CZvMP_Mb.js";
import { useMDXComponents } from "./index-8uiiSus7.js";
import { M as Meta, C as Canvas } from "./blocks-ViceaN0z.js";
import { C as Callout, a as CalloutText } from "./CalloutText-3C50LiG8.js";
import { C as CalloutTitle } from "./CalloutTitle-iNhqs_Mp.js";
import { I as Icon } from "./Icon-DeQEcrNU.js";
import "./track-focus-DbJ2CO43.js";
import { P as ProgressBarStories, E as Esempio } from "./ProgressBar.stories-r2tLqcdz.js";
import "./iframe-bYA1CaqE.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-D0HQBa1B.js";
import "./index-DeYFl_vO.js";
import "./utils-qr7fhAGw.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: ProgressBarStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "progress-bar",
      children: "Progress Bar"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Progress bar"
      }), " è una componente utile per stabilire la percentuale di completamento di un task all’interno di una pagina.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Questo elemento può essere utilizzato per indicarne la percentuale di completamento, oppure come elemento aggiuntivo della componente wizard, come indicatore di una procedura."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Esempio
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "warning",
        highlight: true,
        children: [jsxRuntimeExports.jsxs(CalloutTitle, {
          children: [jsxRuntimeExports.jsx(Icon, {
            "aria-hidden": true,
            icon: "it-warning-circle",
            size: "lg"
          }), jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Importazione Progress da reactstrap"
          })]
        }), jsxRuntimeExports.jsxs(CalloutText, {
          children: [jsxRuntimeExports.jsxs(_components.p, {
            children: ["L'implementazione della Progress Bar da parte del design-react-kit italia non consente di regolare lo spessore della stessa.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Per questo l'esempio fornito in questa pagina è stato costruito importando il componente ", jsxRuntimeExports.jsx(_components.strong, {
              children: "direttamente da reactstrap"
            }), ":"]
          }), jsxRuntimeExports.jsx(_components.pre, {
            children: jsxRuntimeExports.jsx(_components.code, {
              className: "language-tsx",
              children: 'import {Progress} from "reactstrap"\n'
            })
          })]
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: " "
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
            children: ["Per i dettagli tecnici sulla costruzione delle progress bar si veda la ", jsxRuntimeExports.jsx(_components.strong, {
              children: jsxRuntimeExports.jsx(_components.a, {
                href: "https://reactstrap.github.io/?path=/docs/components-progress--progress",
                rel: "nofollow",
                children: "documentazione di reactstrap"
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
