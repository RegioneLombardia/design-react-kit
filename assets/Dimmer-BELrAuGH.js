import { ae as jsxRuntimeExports, af as Meta, ag as Canvas, ai as Controls3, ah as ArgTypes } from "./index-fmwPoC3m.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { D as DimmerStories, E as Esempi, a as DimmerConAzioni, b as DimmerConAzioniColorePrimario, c as Dimmer, d as DimmerButtons } from "./Dimmer.stories-gX0zK2LL.js";
import "./iframe-ti0ZTjzm.js";
import "../sb-preview/runtime.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-BUuRC3P_.js";
import "./index-DVdwlR73.js";
import "./index-DLlB04eo.js";
import "./inheritsLoose-DBHupcN5.js";
import "./index-CX5rBMF0.js";
import "./index-BdOSk9or.js";
import "./index-xoeSAV6i.js";
import "./Icon-Bs2HTC1s.js";
import "./Card-BYQjmvUn.js";
import "./index-C6XlOQIa.js";
import "./utils-BToed_Um.js";
import "./CardText-DxxoM_fv.js";
import "./CardTitle-DxbL_VUn.js";
import "./Button-C7R8X7iu.js";
import "./Button-BqturWaL.js";
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
