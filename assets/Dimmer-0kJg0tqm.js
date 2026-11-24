import { j as jsxRuntimeExports } from "./jsx-runtime-BQvmpnS1.js";
import { useMDXComponents } from "./index-BdiD6C9B.js";
import { M as Meta, C as Canvas, a as Controls3, A as ArgTypes } from "./blocks-Dib3DQow.js";
import { D as Dimmer, a as DimmerButtons } from "./DimmerButtons-DOFkkQum.js";
import "./track-focus-DbJ2CO43.js";
import { D as DimmerStories, E as Esempi, a as DimmerConAzioni, b as DimmerConAzioniColorePrimario } from "./Dimmer.stories-BM1rAFVB.js";
import "./iframe-HXAWYzM9.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-Cm8uWDCx.js";
import "./index-CKghkky9.js";
import "./Icon-DZMKCTMd.js";
import "./Button-BXrQ-K-F.js";
import "./Button-B_NzN2-o.js";
import "./utils-BMtw1b3F.js";
import "./Card-DaWHrHIP.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: DimmerStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "dimmer",
      children: "Dimmer"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "un-componente-per-focalizzare-lattenzione-su-un-contenuto",
      children: "Un componente per focalizzare l’attenzione su un contenuto"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Un Dimmer occupa tutta l’altezza e la larghezza dell’elemento all’interno del quale è contenuto, l’elemento contenitore deve avere la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".dimmable"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "esempio-interattivo",
      children: "Esempio interattivo"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Dimmer"
      }), " può contenere del testo, può essere preceduto da un'icona e può avere diversi colori; puoi eseguire delle prove con i controlli sotto al canvas."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Esempi
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: Esempi
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "dimmer-con-azioni",
      children: "Dimmer con Azioni"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Un Dimmer può contenere tasti collegati ad azioni ed un titolo descrittivo."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: DimmerConAzioni
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "colore-primario-con-azioni",
      children: "Colore primario con azioni"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Impostando l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: 'color="primary"'
      }), " si ottiene una versione con sfondo di colore primario."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: DimmerConAzioniColorePrimario
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "dimmer-1",
      children: "Dimmer"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Dimmer
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "dimmerbutton",
      children: "DimmerButton"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: DimmerButtons
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
