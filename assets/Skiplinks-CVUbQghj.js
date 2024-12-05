import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-CqkeutgF.js";
import { S as SkiplinksStories, _ as _Esempi } from "./Skiplinks.stories-CjQS9bzs.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-CaWOas9z.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./index-D3ELxcOV.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: SkiplinksStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "skiplinks",
      children: "Skiplinks"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "gli-skiplink-sono-collegamento-interno-alla-pagina-che-consentono-agli-utenti-di-accedere-direttamente-al-contenuto-principale-della-pagina-saltando-il-menu-di-navigazione",
      children: "Gli Skiplink sono collegamento interno alla pagina che consentono agli utenti di accedere direttamente al contenuto principale della pagina saltando il menu di navigazione."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "È un componente particolarmente utile per coloro che accedono con screen reader e/o da tastiera."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Gli elementi ", jsxRuntimeExports.jsx(_components.code, {
        children: "SkiplinkItem"
      }), " sono contraddistinti dalle classi:"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "visually-hidden"
        }), ": renderizzati solo per gli screen reader. Sempre applicato."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "visually-hidden-focusable"
        }), ": renderizzati solo al focus. Controllato dall'attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: "focusable"
        }), "."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Per attivare la funzionalità si digita da tastiera il tasto: TAB."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _Esempi
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const containerRef = useRef(null);\r\nconst footerRef = useRef(null);\r\n\r\nuseEffect(() => {\r\n  // We focus the container here since it is hosted inside Storybook's iframe\r\n  // @ts-expect-error: with no types annotated, never is inferred here\r\n  containerRef.current?.focus();\r\n}, []);\r\n\r\nconst onClick = () => {\r\n  // @ts-expect-error: with no types annotated, never is inferred here\r\n  footerRef.current?.scrollIntoView();\r\n};\r\n\r\nreturn (\r\n  <section tabIndex={-1} ref={containerRef}>\r\n    <div id='#main' />\r\n    <div id='#footer' ref={footerRef} />\r\n\r\n    <Skiplink>\r\n      <SkiplinkItem href='#main'>Skip to main content</SkiplinkItem>\r\n      <SkiplinkItem onClick={onClick}>Skip to footer</SkiplinkItem>\r\n    </Skiplink>\r\n  </section>\r\n);\n"
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
