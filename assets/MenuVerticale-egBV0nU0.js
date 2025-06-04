import { j as jsxRuntimeExports } from "./jsx-runtime-85EhGj5b.js";
import { useMDXComponents } from "./index-P7YjaiZ-.js";
import { M as Meta, C as Canvas } from "./index-DoFZ2GT_.js";
import { M as MenuVerticaleStories, S as Semplice, I as Innestata } from "./MenuVerticale.stories-BOkGK_jc.js";
import "./index-CkHlViRq.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-CkfUY0Fy.js";
import "./index-CHqOcmVC.js";
import "./index-rIQx-mDE.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
import "./Collapse-DQ64-E85.js";
import "./index-xoeSAV6i.js";
import "./utils-o7gD2GSt.js";
import "./Transition-DlYKBBR1.js";
import "./Icon-F0eg8ks0.js";
import "./LinkListItem-BXSHz39N.js";
import "./Sidebar-CNq3ytfG.js";
import "./track-focus-DbJ2CO43.js";
import "./MenuVerticale-BYfr8qnJ.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: MenuVerticaleStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "menù-verticale",
      children: "Menù Verticale"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Menu verticale"
      }), " può incorporare ", jsxRuntimeExports.jsx(_components.em, {
        children: "liste semplici"
      }), " e ", jsxRuntimeExports.jsx(_components.em, {
        children: "liste innestate"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Si utilizza quando si ha l’esigenza di trattare in forma di lista le voci del menu, quindi all’interno di applicativi con ", jsxRuntimeExports.jsx(_components.strong, {
        children: "molte sezioni"
      }), " cui si deve dare accesso in qualsiasi punto della navigazione.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Lo si preferisce per garantire la leggibilità degli item nella lista, che potrà essere scrollata per una visualizzazione completa."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Questo tipo di menu è sempre ", jsxRuntimeExports.jsx(_components.strong, {
        children: "collocato a sinistra dello schermo"
      }), " per facilitare una lettura consequenziale delle informazioni."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Due esempi di utilizzo possono essere visti in:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: jsxRuntimeExports.jsx(_components.a, {
            href: "/docs/linee-guida-componenti-principali-header--documentazione#menu-verticale",
            children: "Header/Menu Principale/Menu Verticale"
          })
        }), "."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: jsxRuntimeExports.jsx(_components.a, {
            href: "/docs/linee-guida-componenti-principali-header--documentazione#menu-sidebar",
            children: "Header/Menu Principale/Menu Sidebar"
          })
        }), "."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "semplice",
      children: "Semplice"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Semplice
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "innestato",
      children: "Innestato"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Innestata
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: 'const _AnnidataWithHooks = () => {\n  const [collapseOpen1, toggleCollapse1] = useState(false);\n  const [collapseOpen2, toggleCollapse2] = useState(true);\n  const [collapseOpen3, toggleCollapse3] = useState(true);\n  const [collapseOpen4, toggleCollapse4] = useState(true);\n  const [collapseOpen5, toggleCollapse5] = useState(true);\n\n  return (\n    <MenuVerticale>\n      <Sidebar>\n        <LinkList>\n          <LinkListItem\n            large\n            bold\n            className="right-icon"\n            onClick={(e) => {\n              e.preventDefault();\n              toggleCollapse1(!collapseOpen1);\n            }}\n            aria-expanded={collapseOpen1}\n          >\n            <LinkListItem.TitleIconWrapper>\n              <span className="fw-bold">Lorem ipsum dolor</span>\n              <Icon className="right" icon="it-expand" color="primary" aria-hidden />\n            </LinkListItem.TitleIconWrapper>\n          </LinkListItem>\n          <Collapse isOpen={collapseOpen1}>\n            <LinkList sublist>\n              <LinkListItem>\n                <span>Lorem ipsum dolor</span>\n              </LinkListItem>\n              <LinkListItem>\n                <span>Lorem ipsum dolor</span>\n              </LinkListItem>\n              <LinkListItem>\n                <span>Lorem ipsum dolor</span>\n              </LinkListItem>\n            </LinkList>\n          </Collapse>\n          . . .\n          . . .\n        </LinkList>\n      </Sidebar>\n    </MenuVerticale>\n  );\n};\n'
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
