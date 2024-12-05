import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-CqkeutgF.js";
import { P as PopoverStories, a as Posizionamento } from "./Popover.stories-BIZ3JSIB.js";
import { C as Callout, a as CalloutText } from "./CalloutText-DuQn_Rtc.js";
import { C as CalloutTitle } from "./CalloutTitle-D5ep80ue.js";
import { I as Icon } from "./Icon-CwbcXiv7.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-CaWOas9z.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./PopoverBody-BzQQX2YP.js";
import "./index-D3ELxcOV.js";
import "./TooltipPopoverWrapper-DyKXCoBA.js";
import "./utils-Cs0hNT-B.js";
import "./Popper-oXY5zJ3Q.js";
import "./Fade-GDu7ZWHd.js";
import "./Transition-D-QAwXWC.js";
import "./Container-DM0Kn0QD.js";
import "./Col-CBduUdZh.js";
import "./Button-CSHA-nY_.js";
import "./Button-DpaK6EQT.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: PopoverStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "popover",
      children: "Popover"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Popover"
      }), " è una componente che viene richiamato al click e fornisce informazioni su un determinato elemento, comando o interazione."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "posizionamento",
      children: "Posizionamento"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Posizionamento
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
            children: "Posizione del Popover"
          })]
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Può essere ", jsxRuntimeExports.jsx(_components.strong, {
              children: "diversa"
            }), " da quella impostata con l'attributo ", jsxRuntimeExports.jsx(_components.code, {
              children: "placement"
            }), " qualora non ci sia ", jsxRuntimeExports.jsx(_components.strong, {
              children: "sufficiente spazio per disegnare il componente"
            }), ".", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Nell'esempio qui sopra infatti, se si preme il tasto ", jsxRuntimeExports.jsx(_components.em, {
              children: "Popover in alto"
            }), " e poi si fa scorrere la pagina verso il basso, si vedrà il popover spostarsi al di sotto del bottone."]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const PosizionamentoWithHooks = () => {\n  const [popoverOpenSx, setPopoverOpenSx] = useState(false);\n  const [popoverOpenDx, setPopoverOpenDx] = useState(false);\n  const [popoverOpenAlto, setPopoverOpenAlto] = useState(false);\n  const [popoverOpenBasso, setPopoverOpenBasso] = useState(false);\n\n  const targetRefSx = useRef(null);\n  const targetRefDx = useRef(null);\n  const targetRefAlto = useRef(null);\n  const targetRefBasso = useRef(null);\n\n  return (\n    <Container>\n      <Row>\n        <Col xs={12} md={{ size: 4, offset: 4 }}>\n          <span>\n            <Button className='me-1' color='secondary' innerRef={targetRefAlto}\n              onClick={() => {\n                setPopoverOpenAlto(!popoverOpenAlto);\n              }}\n            >\n              Popover {'in alto'}\n            </Button>\n            <Popover placement={'top'} isOpen={popoverOpenAlto} target={targetRefAlto}\n              toggle={() => {\n                setPopoverOpenAlto(!popoverOpenAlto);\n              }}\n            >\n              <PopoverHeader>Titolo del popover</PopoverHeader>\n              <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus\n                <a href='#' className='popover-inner-link'> altro ... </a>\n              </PopoverBody>\n            </Popover>\n          </span>\n        </Col>\n      </Row>\n      <Row>\n        <Col xs={12} md={4}>\n          <span>\n            <Button className='me-1' color='secondary' innerRef={targetRefDx}\n              onClick={() => {\n                setPopoverOpenDx(!popoverOpenDx);\n              }}\n            >\n              Popover {'a destra'}\n            </Button>\n            <Popover placement={'right'} isOpen={popoverOpenDx} target={targetRefDx}\n              toggle={() => {\n                setPopoverOpenDx(!popoverOpenDx);\n              }}\n            >\n              <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus</PopoverBody>\n            </Popover>\n          </span>\n        </Col>\n        <Col xs={12} md={{ size: 4, offset: 4 }}>\n          <span>\n            <Button className='me-1' color='secondary' innerRef={targetRefSx}\n              onClick={() => {\n                setPopoverOpenSx(!popoverOpenSx);\n              }}\n            >\n              Popover {'a sinistra'}\n            </Button>\n            <Popover placement={'left'} isOpen={popoverOpenSx} target={targetRefSx}\n              toggle={() => {\n                setPopoverOpenSx(!popoverOpenSx);\n              }}\n            >\n              <PopoverHeader>\n                <Icon icon='it-help-circle' aria-hidden />\n                Titolo con icona\n              </PopoverHeader>\n              <PopoverBody>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.\n                <a href='#' className='popover-inner-link'> altro ...\n                  <Icon icon='it-arrow-right' aria-hidden />\n                </a>\n              </PopoverBody>\n            </Popover>\n          </span>\n        </Col>\n      </Row>\n      <Row>\n        <Col xs={12} md={{ size: 4, offset: 4 }}>\n          <span>\n            <Button className='me-1' color='secondary' innerRef={targetRefBasso}\n              onClick={() => {\n                setPopoverOpenBasso(!popoverOpenBasso);\n              }}\n            >\n              Popover {'in basso'}\n            </Button>\n            <Popover placement={'bottom'} isOpen={popoverOpenBasso} target={targetRefBasso}\n              toggle={() => {\n                setPopoverOpenBasso(!popoverOpenBasso);\n              }}\n            >\n              <PopoverHeader>Titolo del popover</PopoverHeader>\n              <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus\n                <a href='#' className='popover-inner-link'> altro ... </a>\n              </PopoverBody>\n            </Popover>\n          </span>\n        </Col>\n      </Row>\n    </Container>\n  );\n}\n"
      })
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
            children: ["Per le altre modalità possibili sia di abilitazione dei popover sia di impostazione del tipo di comparsa e scomparsa di questi componenti, si veda la ", jsxRuntimeExports.jsx(_components.strong, {
              children: jsxRuntimeExports.jsx(_components.a, {
                href: "/docs/documentazione-componenti-popover--documentazione#documentazione-ed-esempi-per-aggiungere-popover-tooltip-informativi-a-qualsiasi-elemento-del-tuo-sito",
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