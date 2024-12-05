import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-CqkeutgF.js";
import { P as PagerStories, E as Esempi, S as StatoDisabilitatoEAttivo, A as Allineamento, R as Responsive, M as MoreComponent, a as PageChanger, J as JumpToPage, b as SimpleMode, L as LinkTestuali, T as TotalNumber } from "./Pager.stories-CiJP81nj.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-CaWOas9z.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./Pager-C0saeU55.js";
import "./utils-Cs0hNT-B.js";
import "./index-D3ELxcOV.js";
import "./Form-BUAm_fDY.js";
import "./FormGroup-D30_tvv_.js";
import "./Label-DqFgb-in.js";
import "./Icon-CwbcXiv7.js";
import "./DropdownToggle-DgLnc46H.js";
import "./DropdownToggle-BYY5Lm64.js";
import "./Popper-oXY5zJ3Q.js";
import "./DropdownMenu-DVqROqFZ.js";
import "./Button-DpaK6EQT.js";
import "./LinkListItem-E5PaFpui.js";
import "./Input-B6S2oA6v.js";
import "./index-DH28g3wf.js";
import "./utils-CwYUlCuU.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: PagerStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "paginazione",
      children: "Paginazione"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "esempio",
      children: "Esempio"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["A seguire il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Pager"
      }), ", utile per indicare una serie di contenuti correlati tra più pagine."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Esempi
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "stato-disabilitato-e-attivo",
      children: "Stato disabilitato e attivo"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["I link della paginazione assumonono uno stato disabilitato usando l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "disabled"
      }), " sul componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "<PagerItem>"
      }), ".\r\nPer indicare la pagina attiva corrente utilizzare l’attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: 'aria-current="page"'
      }), " sul componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "<PagerLink>"
      }), ", l’aspetto grafico cambierà di conseguenza."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: StatoDisabilitatoEAttivo
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "allineamento",
      children: "Allineamento"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per centrare la navigazione aggiungere la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: "justify-content-center"
      }), " al ", jsxRuntimeExports.jsx(_components.code, {
        children: "<Pager>"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Allineamento
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "responsive",
      children: "Responsive"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Con i dovuti accorgimenti precedentemente elencati e inserendo alcune classi delle utilità display si può trasformare la paginazione in base alla risoluzione del dispositivo in uso dell'utente."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Responsive
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "more",
      children: "More"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Quando è presente un grande numero di pagine è consigliabile visualizzare unicamente le pagine più prossime a quella corrente, inserendo delle ellissi (…) fra queste e la prima ed ultima pagina.\r\nNon essendo collegate a nessuna pagina le ellissi vanno inserite in un tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "<span>"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: MoreComponent
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "changer",
      children: "Changer"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Per velocizzare la navigazione è possibile inserire un menu “Page changer”."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: PageChanger
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "jump-to-page",
      children: "Jump To Page"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Con l’elemento aggiuntivo “Jump to page” l’utente può specificare un numero di pagina concreto."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: JumpToPage
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "simple-mode",
      children: "Simple Mode"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "La paginazione in versione “Simple mode” è ottimizzata per i dispositivi mobile.\r\nPuò essere utilizzata anche su tablet e desktop quando il numero di pagine è ridotto."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SimpleMode
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "link-testuali",
      children: "Link Testuali"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Le icone chevron utilizzate come link di navigazione possono essere sostituite da link testuali come “precedente” e “successiva”.\r\nIn tal caso al ", jsxRuntimeExports.jsx(_components.code, {
        children: "<PagerLink>"
      }), " contenente il testo dovrà essere aggiunta la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".text"
      }), ". Es: ", jsxRuntimeExports.jsx(_components.code, {
        children: '<PagerLink className="text">Precedente</PagerLink>'
      }), ". Notare come sia stato inserito il testo “Pagina” in un elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: '<span class="visually-hidden">'
      }), " invisibile su schermo ma enunciabile dagli screen reader per facilitare la comprensione agli utenti che utilizzano tecnologie assistive."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: LinkTestuali
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "total-number",
      children: "Total Number"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungendo la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".pagination-total"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "<Pager>"
      }), " che contiene la paginazione è possibile indicare il numero totale di pagine all’interno di un componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "<p>"
      }), " collocato prima della chiusura del ", jsxRuntimeExports.jsx(_components.code, {
        children: '<ul className="pagination">'
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TotalNumber
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