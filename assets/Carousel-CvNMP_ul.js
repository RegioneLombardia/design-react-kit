import { j as jsxRuntimeExports } from "./jsx-runtime-BdP592-V.js";
import { useMDXComponents } from "./index-B98xVB7q.js";
import { M as Meta, C as Canvas } from "./blocks-C8t04eRj.js";
import { C as CarouselStories, B as Base, E as EvidenceImage, H as HighImage, F as FullscreenImage, a as FullscreenStandardImage } from "./Carousel.stories-OB10qXqi.js";
import "./iframe-CywKGv0B.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-zaF9E960.js";
import "./Container-CmXOe7U0.js";
import "./utils-BbqmM4jY.js";
import "./index-BAkpI1zY.js";
import "./Card-BnUfGAI8.js";
import "./CardText-BYl7cM5A.js";
import "./CardCategory-sa8YM79w.js";
import "./Icon-CfKGR1lx.js";
import "./CardSignature-mfIRmJlR.js";
import "./CardTitle-cUNrE8qz.js";
import "./ResponsiveImage-BoH2j_un.js";
import "./track-focus-DbJ2CO43.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: CarouselStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "carousel",
      children: "Carousel"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il componente Carousel permette di scorrere una serie di contenuti ed è\nrealizzato attraverso il componente ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://splidejs.com/integration/react-splide/",
        rel: "nofollow",
        children: "Splide"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Può essere utilizzato con una serie di immagini, testo o codice personalizzato.\nInclude anche il supporto per i controlli e gli indicatori precedente/successivo\ned i dots di indicazione posizione."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il carousel può contenere vari tipi di componenti, solitamente cards o immagini."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L'implementazione corrente riprende le varie tipologie di Carousel che possono\nessere trovate in ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://italia.github.io/bootstrap-italia/docs/componenti/carousel/",
        rel: "nofollow",
        children: "Bootstrap Italia"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "È possibile utilizzare le stesse proprietà del componente Splide nel Carousel\ndi questo kit."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "base",
      children: "Base"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Esempio di carousel con card articolo."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Base
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "con-immagine-in-evidenza",
      children: "Con immagine in evidenza"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Esempio di carousel contenente un’immagine associata ad una card “articolo”."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EvidenceImage
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "con-immagine-in-alto",
      children: "Con immagine in alto"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HighImage
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "fullscreen-di-immagini",
      children: "Fullscreen di immagini"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: FullscreenImage
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "fullscreen-di-immagini-dimensione-tandard",
      children: "Fullscreen di immagini (dimensione tandard)"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: FullscreenStandardImage
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
