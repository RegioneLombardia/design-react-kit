import { j as jsxRuntimeExports } from "./jsx-runtime-BeHeGpne.js";
import { useMDXComponents } from "./index-COSitiYT.js";
import { M as Meta, C as Canvas, A as ArgTypes } from "./blocks-C3pkO_Ko.js";
import { V as VideoStories, B as Base, T as Trascription, a as Tracks, A as AutoplayAndControls, Y as YouTubeVideo, b as Video } from "./Video.stories-B_mMSxag.js";
import "./track-focus-DbJ2CO43.js";
import "./iframe-BdFmv8SM.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-D2R6h4pv.js";
import "./extends-BllNL3fH.js";
import "./Input-Bq_7me4w.js";
import "./index-D_YqDt74.js";
import "./index-CkVteFxl.js";
import "./Icon-BOZjw-AL.js";
import "./utils-CwYUlCuU.js";
import "./AccordionItem-DiwfIBry.js";
import "./Transition-Co8zp6LZ.js";
import "./DimmerButtons-706My5rL.js";
import "./Button-CPPKlX23.js";
import "./Button-Bci7-Cud.js";
import "./utils-I-sN1Vsl.js";
import "./FormGroup-Ce3ILOWp.js";
import "./Label-CgkLv0Y-.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: VideoStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "video",
      children: "VIDEO"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il componente Video utilizza la libreria video.js per implementare funzionalità\navanzate come il supporto a diversi formati video, la personalizzazione\ndell’interfaccia utente e l’integrazione con API esterne."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Fare riferimento alla ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://italia.github.io/bootstrap-italia/docs/componenti/video-player/",
        rel: "nofollow",
        children: "documentazione Bootstrap per il video"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "esempio-base",
      children: "Esempio base"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "In questo esempio vengono passati al compomente solamente la prorietà relativa\nall'array delle sorgenti, contente per ogni sorgente l'url della sorgente\ne sua tipologia."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Base
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "trascrizioni",
      children: "Trascrizioni"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "In questo esempio viene passato del testo relativo alla trascrizione video"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Trascription
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "tracce",
      children: "Tracce"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "In questo esempio vengono passate diverse tracce per i sottotitoli:\nin italiano (predefinito) , inglese e spagnolo"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Tracks
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "autoplay-e-controlli",
      children: "Autoplay e controlli"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "In questo esempio vengono impostati seguenti parametri:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "autoPlay: true"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "fluid: true"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "controls: true"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "loop: true"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AutoplayAndControls
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "video-youtube-con-accettazione",
      children: "Video YouTube con accettazione"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["In questo esempio viene passato nella prorietà ", jsxRuntimeExports.jsx(_components.code, {
        children: "youtubeUrl"
      }), " un url di un video\ndi YouTube."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: YouTubeVideo
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Video
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
