import { ae as jsxRuntimeExports, af as Meta, ag as Canvas } from "./index-RASuBBme.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { F as FooterStories, S as Standard, M as Minimo, L as LoghiMultipli, a as MultiLink } from "./Footer.stories-BCL4RjVB.js";
import "./iframe-B3YgkPZF.js";
import "../sb-preview/runtime.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-BUuRC3P_.js";
import "./index-DVdwlR73.js";
import "./index-DLlB04eo.js";
import "./inheritsLoose-DBHupcN5.js";
import "./index-CX5rBMF0.js";
import "./index-BdOSk9or.js";
import "./Footer-BiKzUMw3.js";
import "./Col-sbjB5dMm.js";
import "./index-C6XlOQIa.js";
import "./index-xoeSAV6i.js";
import "./utils-BToed_Um.js";
import "./LinkListItem-B69qYNZ5.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: FooterStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "footer",
      children: "Footer"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il Footer è la componente base ideata per il fondo pagina."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Deve contenere come ultima riga il copyright e al di sopra il nome del servizio.\nIn mezzo è opportuno inserire i link di servizio e se i link in questione sono molti è meglio organizzarli su righe e colonne, lasciando che l’altezza del footer cresca di conseguenza."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "standard",
      children: "Standard"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Standard
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Nota:\nLa dicitura del copyright è strutturata in modo da andare a capo a blocchi a seconda della dimensione dello schermo."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "minimo",
      children: "Minimo"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Nel caso in cui serva un footer sottile, il minimo consentito è quello riportato di seguito."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Minimo
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "loghi-multipli",
      children: "Loghi Multipli"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La seconda casistica di gestione di loghi multipli contempla l’inserimento dei loghi partner ", jsxRuntimeExports.jsx(_components.strong, {
        children: "al negativo all’interno del footer, sempre in orizzontale e per un massimo di 4 loghi per riga"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Si specifica tuttavia che questa circostanza è strettamente vincolata alla disponibilità di loghi al negativo.\nQualora si disponesse soltanto della loro versione in positivo, essi devono essere posizionati esternamente, come mostrato nella sezione ", jsxRuntimeExports.jsx(_components.strong, {
        children: jsxRuntimeExports.jsx(_components.a, {
          href: "/docs/linee-guida-componenti-principali-gestione-loghi-multipli--documentazione",
          children: "gestione loghi multipli"
        })
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: LoghiMultipli
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: 'function Logos() {\n  return (\n    <>\n      <Row>\n        <Col sm={3}>\n          <div className="it25-footer-logo d-flex justify-content-center align-items-center">\n            <img src="img/logo-saf-lombardia.png"\n                  alt="logo scuola alta formazione lombardia" className="img-fluid"/>\n          </div>\n        </Col>\n        <Col sm={3}>\n          <div className="it25-footer-logo d-flex justify-content-center align-items-center">\n            <img src="img/logo-cna-lombardia-bianco.png"\n                  alt="logo scuola alta formazione lombardia" className="img-fluid"/>\n          </div>\n        </Col>\n        . . .\n      </Row>\n    </>\n  )\n};\n'
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "multilink",
      children: "MultiLink"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: MultiLink
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
