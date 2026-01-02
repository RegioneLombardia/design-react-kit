import { j as jsxRuntimeExports } from "./jsx-runtime-CXYHfzc5.js";
import { useMDXComponents } from "./index-CvLaAZUv.js";
import { M as Meta, C as Canvas } from "./blocks-BNLORGWO.js";
import { C as Container } from "./Container-B9Jjl3EK.js";
import { R as Row, C as Col } from "./Col-BjL_VQHj.js";
import { C as Callout, a as CalloutText } from "./CalloutText-CcEMtJ_A.js";
import { C as CalloutTitle } from "./CalloutTitle-C1_Og4RE.js";
import "./track-focus-DbJ2CO43.js";
import { T as TipografiaStories, a as TitilliumWeb, R as RobotoMono } from "./Tipografia.stories-DuiHr16H.js";
import "./iframe-CHwcEDm1.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-C581bQpe.js";
import "./utils-EKL-V6E8.js";
import "./index-BhjGuW_H.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: TipografiaStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "tipografia",
      children: "Tipografia"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "font",
      children: "Font"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Le ", jsxRuntimeExports.jsx(_components.em, {
        children: "Linee Guida"
      }), " per il design degli applicativi di Regione Lombardia prevedono ", jsxRuntimeExports.jsx(_components.strong, {
        children: "solo due"
      }), " famiglie di caratteri:"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["il font senza grazie, o ", jsxRuntimeExports.jsx(_components.em, {
          children: "sans serif"
        }), ", ", jsxRuntimeExports.jsx(_components.strong, {
          children: "Titillium Web"
        }), "."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["il font ", jsxRuntimeExports.jsx(_components.em, {
          children: "monospace"
        }), " con dimensioni di caratteri normalizzate ", jsxRuntimeExports.jsx(_components.strong, {
          children: jsxRuntimeExports.jsx("span", {
            class: "font-monospace",
            children: "Roboto Mono"
          })
        }), "."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "titillium-web",
      children: "Titillium Web"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TitilliumWeb
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "roboto",
      children: "Roboto"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: RobotoMono
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "success",
        highlight: true,
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Accessibilità"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(Container, {
            children: [jsxRuntimeExports.jsxs(Row, {
              className: "mt-4",
              children: [jsxRuntimeExports.jsx(Col, {
                sm: 6,
                children: jsxRuntimeExports.jsxs(_components.p, {
                  children: [jsxRuntimeExports.jsx("div", {
                    className: "h6",
                    children: "Lunghezza"
                  }), "\nUna riga di testo che permette una lettura confortevole non supera i 75\ncaratteri.", jsxRuntimeExports.jsx("br", {}), "\nIn caso di colonne multiple la lunghezza è compresa tra 40 e 50 caratteri.", jsxRuntimeExports.jsx("br", {}), "\nPer i testi a margine, la lunghezza non è mai inferiore ai 12-15 caratteri."]
                })
              }), jsxRuntimeExports.jsx(Col, {
                sm: 6,
                children: jsxRuntimeExports.jsxs(_components.p, {
                  children: [jsxRuntimeExports.jsx("div", {
                    className: "h6",
                    children: "Allineamento"
                  }), "\nIl testo deve essere allineato a sinistra, salvo eccezioni come ad esempio i testi a margine.", jsxRuntimeExports.jsx("br", {}), "\nL’allineamento giustificato e senza sillabazione è sempre da evitare per l’incongrua spaziatura delle parole e la minore leggibilità che comporta."]
                })
              })]
            }), jsxRuntimeExports.jsxs(Row, {
              className: "mt-4",
              children: [jsxRuntimeExports.jsx(Col, {
                sm: 6,
                children: jsxRuntimeExports.jsxs(_components.p, {
                  children: [jsxRuntimeExports.jsx("div", {
                    className: "h6",
                    children: "Definizione"
                  }), "\nI paragrafi possono essere distinti o applicando uno spazio tra di essi o in alternativa usando una indentatura di misura pari a quella del leading."]
                })
              }), jsxRuntimeExports.jsx(Col, {
                sm: 6,
                children: jsxRuntimeExports.jsxs(_components.p, {
                  children: [jsxRuntimeExports.jsx("div", {
                    className: "h6",
                    children: "Link"
                  }), "\nPer distinguere i link dal testo canonico si usa la ", jsxRuntimeExports.jsx("u", {
                    children: "sottolineatura"
                  }), " per i link all’interno di un testo, oppure il ", jsxRuntimeExports.jsx("strong", {
                    children: "peso bold"
                  }), " per i link isolati."]
                })
              })]
            })]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx("div", {
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
            children: ["Per l'utilizzo delle classi di formattazione tipografica si consulti la ", jsxRuntimeExports.jsx(_components.strong, {
              children: jsxRuntimeExports.jsx(_components.a, {
                href: "/docs/documentazione-organizzare-i-contenuti-tipografia--documentazione#tipografia",
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
