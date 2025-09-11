import { j as jsxRuntimeExports } from "./jsx-runtime-BdP592-V.js";
import { useMDXComponents } from "./index-B98xVB7q.js";
import { M as Meta, C as Canvas, a as Controls3, A as ArgTypes } from "./blocks-C8t04eRj.js";
import { D as Dimmer, a as DimmerButtons } from "./DimmerButtons-Czf5vISe.js";
import "./track-focus-DbJ2CO43.js";
import { D as DimmerStories, E as Esempi, a as DimmerConAzioni, b as DimmerConAzioniColorePrimario } from "./Dimmer.stories-mnNCBML1.js";
import "./iframe-CywKGv0B.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-zaF9E960.js";
import "./index-BAkpI1zY.js";
import "./Icon-CfKGR1lx.js";
import "./Button-OS1IXdY8.js";
import "./Button-BxWlP0Fe.js";
import "./utils-BbqmM4jY.js";
import "./Card-BnUfGAI8.js";
import "./CardText-BYl7cM5A.js";
import "./CardTitle-cUNrE8qz.js";
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
