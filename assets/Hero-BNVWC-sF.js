import { ae as jsxRuntimeExports, af as Meta, ag as Canvas, ah as ArgTypes } from "./index-fmwPoC3m.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { H as HeroStories, a as HeroConSfondo, b as HeroConSfondoSmall, c as HeroConTesto, d as HeroConTestoCentrato, e as HeroConTestoSuSfondo, f as HeroConTestoSuSfondoOverlayPrimario, g as HeroConSfondoOverlayFiltro, h as HeroConSfondoMargineNegativo, i as Hero, j as HeroBackground, k as HeroBody, l as HeroButton, m as HeroCategory, n as HeroTitle } from "./Hero.stories-Xqgc6SNZ.js";
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
import "./Container-BSU_5rqZ.js";
import "./index-C6XlOQIa.js";
import "./utils-BToed_Um.js";
import "./Col-sbjB5dMm.js";
import "./Button-C7R8X7iu.js";
import "./Button-BqturWaL.js";
import "./Card-BYQjmvUn.js";
import "./CardText-DxxoM_fv.js";
import "./CardTitle-DxbL_VUn.js";
import "./CardSignature-9cgByaRV.js";
import "./Icon-Bs2HTC1s.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: HeroStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "hero",
      children: "Hero"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "lo-hero-ciò-che-bootstrap-definisce-jumbotron-è-un-componente-per-la-presentazione-di-contenuti-in-evidenza",
      children: "Lo Hero (ciò che Bootstrap definisce “Jumbotron”) è un componente per la presentazione di contenuti in evidenza."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il cosiddetto ", jsxRuntimeExports.jsx(_components.code, {
        children: "Hero"
      }), " è un componente leggero e flessibile che può facoltativamente estendere l’intera finestra per mostrare i messaggi in evidenza sul tuo sito. Di seguito una serie di esempi con la descrizione degli elementi e delle classi applicabili."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Hero"
      }), " può contenere"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Sub head - ", jsxRuntimeExports.jsx(_components.code, {
          children: "HeroCategory"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Heading (titolo) - ", jsxRuntimeExports.jsx(_components.code, {
          children: "HeroTitle"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Paragrafo - ", jsxRuntimeExports.jsx(_components.code, {
          children: "HeroBody"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Call to action - ", jsxRuntimeExports.jsx(_components.code, {
          children: "HeroButton"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Immagine di background - ", jsxRuntimeExports.jsx(_components.code, {
          children: "HeroBackground"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "con-immagine",
      children: "Con immagine"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeroConSfondo
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "versione-small",
      children: "Versione small"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per ottenere il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Hero"
      }), " nella sua versione più piccola utilizzare l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "small"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeroConSfondoSmall
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "con-contenuti-testuali",
      children: "Con contenuti testuali"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Esempio di Hero con tutti i componenti testuali"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeroConTesto
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "con-contenuti-testuali-centrati",
      children: "Con contenuti testuali centrati"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per ottenere il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Hero"
      }), " centrando i testi orizzontalmente aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "centered"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeroConTestoCentrato
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "con-testi-ed-immagine-di-sfondo",
      children: "Con testi ed immagine di sfondo"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per visualizzare i testi in overlay sulle immagini, viene creato un div scuro in opacità per migliorare la leggibilità del testo in caso di immagini dai toni chiari. Aggiungere al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Hero"
      }), " l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "overlay"
      }), " con il colore desiderato (tra ", jsxRuntimeExports.jsx(_components.code, {
        children: "dark"
      }), ", ", jsxRuntimeExports.jsx(_components.code, {
        children: "primary"
      }), " o ", jsxRuntimeExports.jsx(_components.code, {
        children: "filter"
      }), "). Di seguito l'esempio con ", jsxRuntimeExports.jsx(_components.code, {
        children: "overlay='dark'"
      }), ":"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeroConTestoSuSfondo
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "con-overlay-di-colore-primario",
      children: "Con overlay di colore primario"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per un div opaco di colore primario utilizzare ", jsxRuntimeExports.jsx(_components.code, {
        children: "overlay='primary'"
      }), ":"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeroConTestoSuSfondoOverlayPrimario
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "con-overlay-e-filtro-di-colore-primario",
      children: "Con overlay e filtro di colore primario"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aggiungere un filtro di tipo “screen” utilizzare ", jsxRuntimeExports.jsx(_components.code, {
        children: 'overlay="filter"'
      }), ":"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeroConSfondoOverlayFiltro
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "con-immagine-e-margine-negativo-per-contenuti-sovrapposti",
      children: "Con immagine e margine negativo per contenuti sovrapposti"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["In alcuni casi, il contenuto che seguirà la card può sovrapporsi al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Hero"
      }), ". Aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "overlap"
      }), " per far si che il contenuto seguente si sovrapponga al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Hero"
      }), " (in questo caso il componente seguente è una card):"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeroConSfondoMargineNegativo
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "hero-1",
      children: "Hero"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Hero
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "herobackground",
      children: "HeroBackground"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeroBackground
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "herobody",
      children: "HeroBody"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeroBody
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "herobutton",
      children: "HeroButton"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeroButton
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "herocategory",
      children: "HeroCategory"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeroCategory
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "herotitle",
      children: "HeroTitle"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeroTitle
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
