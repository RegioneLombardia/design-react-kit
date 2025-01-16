import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-FY3MUfvb.js";
import { F as FooterStories, S as Standard, M as Minimo, L as LoghiMultipli, a as MultiLink } from "./Footer.stories-Ue6hmzOA.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-CyTa8lwL.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./Col-CBduUdZh.js";
import "./utils-Cs0hNT-B.js";
import "./index-D3ELxcOV.js";
import "./LinkListItem-E5PaFpui.js";
import "./track-focus-DbJ2CO43.js";
import "./Footer-BJG0d9qW.js";
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
