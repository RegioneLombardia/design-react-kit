import { ae as jsxRuntimeExports, af as Meta, ag as Canvas } from "./index-CsuMtfLQ.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { S as SectionStories, E as Esempio, a as SfondoTenue, b as SfondoPrimario, c as SfondoNeutrale, I as ImmagineDiSfondo, d as SectionConCard } from "./Section.stories-C-cOAa9H.js";
import "./iframe-BvyWEA8u.js";
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
import "./utils-CwYUlCuU.js";
import "./Container-BSU_5rqZ.js";
import "./index-C6XlOQIa.js";
import "./utils-BToed_Um.js";
import "./Col-sbjB5dMm.js";
import "./Card-BYQjmvUn.js";
import "./CardText-DxxoM_fv.js";
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
      of: SectionStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "sections",
      children: "Sections"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "per-creare-sezioni-di-layout-orizzontale-con-differenti-sfondi",
      children: "Per creare sezioni di layout orizzontale con differenti sfondi"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per suddividere una pagina in blocchi orizzontali con sfondi differenti utilizzare più elementi ", jsxRuntimeExports.jsx(_components.code, {
        children: "Section"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "esempio",
      children: "Esempio"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il componente Section ha un padding verticale ed orizzontale predefinito ed uno sfondo trasparente."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Esempio
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "colori-di-sfondo",
      children: "Colori di sfondo"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il componente Section ha, per default, uno sfondo trasparente. Aggiungendo le classi sottoelencate è possbile aggiungere colori di sfondo."
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "sfondo-tenue",
      children: "Sfondo Tenue"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Al componente Section può essere applicato uno sfondo di colore tenue utilizzando l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: 'color="muted"'
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SfondoTenue
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "sfondo-primario",
      children: "Sfondo Primario"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungendo invece l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: 'color="primary"'
      }), " si otterrà un sfondo del colore primario."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Si consiglia di applicare la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".white-color"
      }), " al ", jsxRuntimeExports.jsx(_components.code, {
        children: "Container"
      }), " (come da esempio) per garantire la leggibilità dei testi contenuti."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SfondoPrimario
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "sfondo-neutrale",
      children: "Sfondo Neutrale"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungendo invece l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: 'color="neutral"'
      }), " si otterrà un sfondo di colore corrispondente al primo dei colori neutrali."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Si consiglia di applicare la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".white-color"
      }), " al ", jsxRuntimeExports.jsx(_components.code, {
        children: "Container"
      }), " (come da esempio) per garantire la leggibilità dei testi contenuti."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SfondoNeutrale
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "immagine-di-sfondo",
      children: "Immagine di sfondo"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungendo l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "image"
      }), " e indicando l’URL dell’immagine da utilizzare la ", jsxRuntimeExports.jsx(_components.code, {
        children: "Section"
      }), " utilizzerà l’immagine indicata come sfondo, adattandone automaticamente le dimensioni per coprire l’intera Section."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Si consiglia di applicare la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".white-color"
      }), " al ", jsxRuntimeExports.jsx(_components.code, {
        children: "Container"
      }), " (come da esempio) per garantire la leggibilità dei testi contenuti."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ImmagineDiSfondo
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "section-con-card",
      children: "Section con Card"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aggiungere una serie di card all’interno di una ", jsxRuntimeExports.jsx(_components.code, {
        children: "Section "
      }), " il sistema a griglia Bootstrap con i componenti ", jsxRuntimeExports.jsx(_components.code, {
        children: "Column"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: "Row"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SectionConCard
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
