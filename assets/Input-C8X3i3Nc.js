import { ae as jsxRuntimeExports, af as Meta, ag as Canvas, ah as ArgTypes } from "./index-CsuMtfLQ.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { I as InputStories, E as EsempiDiCampiDiInput, U as UtilizzoDiPlaceholderELabel, a as InputConIconaOBottoni, b as InputPassword, D as Disabilitato, R as Readonly, c as ReadonlyNormalizzato, _ as _InputAutocompleteConDatiAccessibile, d as InputHourpicker, e as InputDatepicker, A as AreaDiTesto, f as AreaDiTestoConSegnaposto } from "./Input.stories-DXjsruBq.js";
import { C as Callout, a as CalloutText } from "./CalloutText-Dq2-0GdE.js";
import { C as CalloutTitle } from "./CalloutTitle-CDZdaeIL.js";
import { I as Input } from "./Input-4psNN3l6.js";
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
import "./react-tEl8dXPf.js";
import "./Icon-DAq5ZiWt.js";
import "./index-xoeSAV6i.js";
import "./Button-C7R8X7iu.js";
import "./Button-BqturWaL.js";
import "./index-C6XlOQIa.js";
import "./utils-BToed_Um.js";
import "./FormGroup-Dgycp2JI.js";
import "./index-C2nrqh0v.js";
import "./utils-CwYUlCuU.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: InputStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "input",
      children: "Input"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "elementi-e-stili-per-la-creazione-di-input-accessibili-e-responsivi",
      children: "Elementi e stili per la creazione di input accessibili e responsivi."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "esempi-di-campi-di-input",
      children: "Esempi di campi di input"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per il corretto funzionamento degli elementi di tipo ", jsxRuntimeExports.jsx(_components.code, {
        children: "<input>"
      }), ", è di fondamentale importanza l’utilizzo uno degli appositi attributi type (ad esempio, ", jsxRuntimeExports.jsx(_components.code, {
        children: "email"
      }), " per l’inserimento di indirizzi email o ", jsxRuntimeExports.jsx(_components.code, {
        children: "number"
      }), " per informazioni numeriche), in modo da sfruttare i controlli di input più recenti come la verifica dell’email, l’utilizzo di metodo di input numerico e altro."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Per l’inserimento guidato di campi di tipo numerico si può anche utilizzare l’elemento dedicato che fornisce migliorie per la validazione e per l’esperienza complessiva, descritto alla pagina dedicata all’input numerico."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempiDiCampiDiInput
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "utilizzo-di-placeholder-e-label",
      children: "Utilizzo di placeholder e label"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Si può includere un’etichetta che si riposiziona automaticamente quando l’utente utilizza il campo di testo."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Si può abbinare all’etichetta un placeholder (testo di esempio) per ulteriore chiarezza."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["In caso di necessità, è anche possibile utilizzare un ulteriore contenuto testuale sotto il campo di testo, aggiungendo il testo nel modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "validationText"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "warning",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Associazione del testo di aiuto con gli elementi del modulo form"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsx(_components.p, {
            children: "Il testo di aiuto deve essere esplicitamente associato agli elementi del mudulo form a cui si riferisce\r\nutilizzando l’attributo aria-describedby. Ciò garantirà che le tecnologie assistive, come gli screenreader,\r\nleggano questo testo di aiuto quando l’utente avrà il focus sull’elemento."
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: UtilizzoDiPlaceholderELabel
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "input-con-icona-o-bottoni",
      children: "Input con icona o bottoni"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: InputConIconaOBottoni
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "input-password",
      children: "Input password"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Per rendere più semplice l’inserimento della password, l’elemento è stato dotato di un visualizzatore dei caratteri digitati."
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "important",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Componente PasswordInput rimosso"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Qualora si fosse usato in precedenza il componente ", jsxRuntimeExports.jsx("code", {
              children: "PasswordInput"
            }), " è possibile migrare all'esempio di\r\nseguito."]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: InputPassword
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "warning",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Nota"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsx(_components.p, {
            children: 'Al momento non è ancora disponibili la funzionalità di "password strength" in questo Design React Kit.'
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "disabilitato",
      children: "Disabilitato"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungi il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "disabled"
      }), " ad un componente Input per impedire la modifica del valore contenuto e non inviare i dati in esso contenuti."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Disabilitato
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "readonly",
      children: "Readonly"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungi il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "readOnly"
      }), " ad un input per impedire la modifica del valore contenuto."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Readonly
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "readonly-normalizzato",
      children: "Readonly normalizzato"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Se per qualche motivo vuoi avere i componenti ", jsxRuntimeExports.jsx(_components.code, {
        children: "<Input readOnly/>"
      }), " nella forma stilizzata come testo normale usa il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "normalized"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ReadonlyNormalizzato
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "input-con-risultato-ricerca-o-autocompletamento",
      children: "Input con risultato ricerca o autocompletamento"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "autocompletamento-accessibile-con-dati",
      children: "Autocompletamento Accessibile con dati"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Cerca una regione italiana per verificarne il comportamento."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il completamento automatico è un componente che aiuta gli utenti a scegliere le risposte da un elenco fornito."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per la creazione del componente, è stato utilizzato il plugin ", jsxRuntimeExports.jsx("a", {
        target: "_blank",
        href: "https://github.com/alphagov/accessible-autocomplete",
        children: "Accessible autocomplete"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per una corretta implementazione si consiglia di consultare la ", jsxRuntimeExports.jsx("a", {
        target: "_blank",
        href: "https://alphagov.github.io/accessible-autocomplete/",
        children: "documentazione"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _InputAutocompleteConDatiAccessibile
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const suggest = (query: any, populateResults: any) => {\r\n  const filteredResults = multiOptions.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));\r\n  let data = filteredResults.map((item) => {\r\n    return item.label;\r\n  });\r\n  populateResults(data);\r\n};\r\n\r\nreturn (\r\n  <FormGroup className='select-wrapper'>\r\n    <label htmlFor='autocomplete'>Provincia</label>\r\n    <Autocomplete\r\n      id='autocomplete'\r\n      source={suggest}\r\n      placeholder={'Testo da cercare'}\r\n      defaultValue={''}\r\n      displayMenu={'inline'}\r\n      tNoResults={() => 'Nessun risultato'}\r\n    />\r\n  </FormGroup>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "input-ora",
      children: "Input Ora"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "campo-per-la-selezione-di-un-orario",
      children: "Campo per la selezione di un orario."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il componente input time, o timepicker, è un componente dedicato alla selezione di un orario."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Clicca sull’icona a destra per visualizzare il timepicker."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: InputHourpicker
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-1",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [value, setValue] = useState('');\r\n\r\nreturn (\r\n  <Input\r\n    type='time'\r\n    label='Hourpicker'\r\n    className='active'\r\n    value={value}\r\n    onChange={(ev) => {\r\n      setValue(ev.target.value);\r\n    }}\r\n  />\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "input-calendario",
      children: "Input Calendario"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "datepicker",
      children: "Datepicker"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Campo di tipo calendario per la selezione di giorni dell’anno."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Clicca sull’icona a destra per visualizzare il datepicker."
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsx(Callout, {
        highlight: true,
        children: jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: jsxRuntimeExports.jsx(_components.p, {
              children: "Assicurarsi di aggiungere alla label la classe active per impedire la sovrapposizione della label al campo."
            })
          })
        })
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: InputDatepicker
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-2",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [value, setValue] = useState('');\r\n\r\nreturn (\r\n  <Input\r\n    type='date'\r\n    label='Datepicker'\r\n    className='active'\r\n    placeholder='22/12/2023'\r\n    value={value}\r\n    onChange={(ev) => {\r\n      setValue(ev.target.value);\r\n    }}\r\n  />\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "area-di-testo",
      children: "Area di testo"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per permettere agli utenti di inserire del testo (ad esempio per lasciare commenti o informazioni), è bene utilizzare un elemento di tipo ", jsxRuntimeExports.jsx(_components.code, {
        children: "<textarea>"
      }), " ridimensionabile."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Includendo l’elemento all’interno di un .form-group, la label assumerà lo stesso comportamento dinamico dei campi di input."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AreaDiTesto
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "con-placeholder",
      children: "Con placeholder"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AreaDiTestoConSegnaposto
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "input-1",
      children: "Input"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Input
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
