import { ae as jsxRuntimeExports, af as Meta, ag as Canvas, ai as Controls3, ah as ArgTypes } from "./index-CsuMtfLQ.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { CenterHeaderBasic, HeaderCenterNarrow } from "./CenterHeader.stories-BGxKgBSe.js";
import { C as CompleteHeaderStory, H as Headers } from "./CompleteHeader.stories-BO5Ghnr_.js";
import { NavHeader, NavHeaderSecondary } from "./NavHeader.stories-Bd45HU9O.js";
import { SlimHeader, SlimHeaderFullResponse } from "./SlimHeader.stories-DlAT8bz1.js";
import { H as Header, a as HeaderContent } from "./HeaderContent-CSEUZ_6Y.js";
import { H as HeaderBrand, a as HeaderRightZone } from "./HeaderRightZone-D5WK6Nuy.js";
import { H as HeaderToggler } from "./HeaderToggler-DBGe5SUa.js";
import { H as HeaderLinkZone } from "./HeaderLinkZone-BrVxzgyu.js";
import { a as HeaderSearch, H as HeaderSocialsZone } from "./HeaderSocialsZone-BI0vF1J6.js";
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
import "./Icon-DAq5ZiWt.js";
import "./index-xoeSAV6i.js";
import "./Container-BSU_5rqZ.js";
import "./index-C6XlOQIa.js";
import "./utils-BToed_Um.js";
import "./Col-sbjB5dMm.js";
import "./Navbar-CvHgj2bA.js";
import "./NavbarBrand-DqOLI5eZ.js";
import "./Collapse-DybBevio.js";
import "./Transition-BB1znAg7.js";
import "./Nav-BMxviE6H.js";
import "./NavLink-QW5V8UQQ.js";
import "./DropdownToggle-BFxFx-Wp.js";
import "./DropdownToggle-CpBYzZpr.js";
import "./Popper-BdfyK_V7.js";
import "./DropdownMenu-BVvApC7Y.js";
import "./Button-BqturWaL.js";
import "./LinkListItem-B69qYNZ5.js";
import "./MegamenuItem-Bi2z5SO9.js";
import "./MegamenuHighlightColumn-CE4seBY8.js";
import "./Button-C7R8X7iu.js";
import "./NavbarToggler-D2aV78Eb.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Documentazione/Menu di navigazione/Header"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "header",
      children: "Header"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "documentazione-ed-esempi-per-la-creazione-di-una-testata-di-navigazione",
      children: "Documentazione ed esempi per la creazione di una testata di navigazione."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "L’header di un sito della Pubblica Amministrazione è solitamente composto di 3 elementi principali:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Un cosiddetto “", jsxRuntimeExports.jsx(_components.em, {
          children: "Slim header"
        }), "”, una sottile fascia dello stesso colore o, preferibilmente, di colore lievemente più scuro rispetto al tema principale del sito, che mostra alcuni link funzionali con impatto globale o esterno al sito stesso."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Una parte centrale “", jsxRuntimeExports.jsx(_components.em, {
          children: "Center header"
        }), "“ che identifica in modo chiaro il sito attraverso logo, testo e social, e può contenere un link per effettuare ricerche sul sito."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Una parte dedicata alla navigazione “", jsxRuntimeExports.jsx(_components.em, {
          children: "Nav header"
        }), "“, visibile su schermi di grandi dimensioni ed accessibile attraverso il classico bottone di tipo “burger menu” per dispositivi mobili."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "slim-header",
      children: "Slim header"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Lo ", jsxRuntimeExports.jsx(_components.em, {
        children: "Slim header"
      }), " header mostra un’intestazione, solitamente con riferimento all’ente di appartenenza del progetto o riferimenti utili, oltre ad un eventuale menu per il cambio lingua e l’accesso ad area riservata. Il cambio lingua è gestito con il componente dropdown."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SlimHeader
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "right-action-con-bottone-full-responsive",
      children: "Right action con bottone full responsive"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per trasformare il bottone di action situato nella ", jsxRuntimeExports.jsx(_components.code, {
        children: "HeaderRightZone"
      }), " e renderlo full-responsive è sufficiente aggiungere la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: "btn-full"
      }), " alla prop ", jsxRuntimeExports.jsx(_components.code, {
        children: "classNames"
      }), " del bottone."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SlimHeaderFullResponse
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "versione-chiara",
      children: "Versione chiara"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per cambiare tema all’header slim è sufficiente aggiungere il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: 'theme="light"'
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Header"
      }), " di tipo ", jsxRuntimeExports.jsx(_components.code, {
        children: "slim"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: SlimHeader
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "header-centrale",
      children: "Header Centrale"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L'", jsxRuntimeExports.jsx(_components.em, {
        children: "Header centrale"
      }), ", per mostrare il logo dell’ente e la sua descrizione, dei link aggiuntivi ai social media, l’accesso al motore di ricerca, se presente."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CenterHeaderBasic
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "versione-stretta",
      children: "Versione stretta"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per utilizzare la versione più stretta dell’header centrale è sufficiente aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "small"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Header"
      }), " di tipo ", jsxRuntimeExports.jsx(_components.code, {
        children: "center"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeaderCenterNarrow
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "versione-chiara-1",
      children: "Versione chiara"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per cambiare tema all’header centrale è sufficiente aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: 'theme="light"'
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: CenterHeaderBasic
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "header-nav",
      children: "Header Nav"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.em, {
        children: "Header Nav"
      }), ", per elencare le voci di navigazione, siano esse semplici link, menu a tendina oppure un Megamenu a tutta larghezza."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: NavHeader
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L’", jsxRuntimeExports.jsx(_components.em, {
        children: "Header Nav"
      }), " ha due versioni, una chiara (“light”) e una scura (“dark”). Lo stile di default ha differenti caratteristiche colore a seconda della versione desktop e mobile:"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Su Desktop lo stile di default ha un background di colore primario e link bianchi. Gli elementi ", jsxRuntimeExports.jsx(_components.code, {
          children: "Dropdown"
        }), " e Megamenu hanno background bianco, testi neri e link di colore primario."]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Su Mobile lo stile di default ha un background bianco e testi e link di colore primario."
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "versione-chiara-2",
      children: "Versione chiara"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per modificare la versione dell’Header Nav è sufficiente utilizzare la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: "theme"
      }), " con i valori ", jsxRuntimeExports.jsx(_components.code, {
        children: '"dark"'
      }), " o ", jsxRuntimeExports.jsx(_components.code, {
        children: '"light"'
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: NavHeader
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "navigazione-secondaria",
      children: "Navigazione secondaria"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Al menù di navigazione principale può essere aggiunto anche un menù di navigazione secondario aggiungendo l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "secondary"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Nav"
      }), ", contenente una seconda lista e la stessa struttura dati della lista ", jsxRuntimeExports.jsx(_components.code, {
        children: "Nav"
      }), " principale."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: NavHeaderSecondary
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "header-completa",
      children: "Header Completa"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Combinando i tre header sopra descritti è possibile creare un ", jsxRuntimeExports.jsx(_components.em, {
        children: "Header completo"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CompleteHeaderStory
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "versione-chiara-3",
      children: "Versione chiara"
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: CompleteHeaderStory
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "header-sticky",
      children: "Header sticky"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Affinché la testata rimanga parzialmente visibile anche allo scorrere della pagina, è sufficiente utilizzare l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "sticky"
      }), " nel componente contenitore ", jsxRuntimeExports.jsx(_components.code, {
        children: "Headers"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "header-1",
      children: "Header"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Header
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "headers",
      children: "Headers"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Headers
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "headercontent",
      children: "HeaderContent"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeaderContent
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "headerbrand",
      children: "HeaderBrand"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeaderBrand
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "headertoggler",
      children: "HeaderToggler"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeaderToggler
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "headerlinkzone",
      children: "HeaderLinkZone"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeaderLinkZone
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "headerrightzone",
      children: "HeaderRightZone"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeaderRightZone
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "headersearch",
      children: "HeaderSearch"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeaderSearch
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "headersocialszone",
      children: "HeaderSocialsZone"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeaderSocialsZone
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
