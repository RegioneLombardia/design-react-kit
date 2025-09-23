import { j as jsxRuntimeExports } from "./jsx-runtime-C4ss9V6n.js";
import { useMDXComponents } from "./index-CTczdr5H.js";
import { M as Meta, C as Canvas } from "./blocks-DHrHhaKn.js";
import { C as Callout, a as CalloutText } from "./CalloutText-Cj0eN6tv.js";
import { C as CalloutTitle } from "./CalloutTitle-BGZ0ygS0.js";
import "./track-focus-DbJ2CO43.js";
import { I as InputFieldsStories, a as InputSemplice, c as conIstruzioni, b as conIcone, P as PasswordField, d as PasswordConIcone, S as SearchField, e as InputNumerico, V as ValutaEPercentuale } from "./InputFields.stories-TpMgGRJa.js";
import "./iframe-BFNAXEkx.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-R64eW5Wq.js";
import "./index-CHcFYvVh.js";
import "./react-CATs6Xdx.js";
import "./Container-BxoeQkUV.js";
import "./utils-DyznEV42.js";
import "./Col-CkVB0JHd.js";
import "./Form-CBLa8v-u.js";
import "./FormGroup-DjVzIKNO.js";
import "./Icon-Be4XlCcy.js";
import "./Input-CY3diOEG.js";
import "./index-D88pASYH.js";
import "./utils-CwYUlCuU.js";
import "./Select-4lt7Evkq.js";
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: InputFieldsStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "input-fields",
      children: "Input-fields"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Gli ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Input fields"
      }), " sono le componenti dell’interfaccia dedicate all’inserimento di dati all’interno del sistema.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Negli esempi sottostanti, si mostrano varie casistiche di componenti per l’input di dati."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "input-semplice",
      children: "Input semplice"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: InputSemplice
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "con-istruzioni",
      children: "Con Istruzioni"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "È preferibile inserire istruzioni nei campi di testo, ad esempio quando all’utente si richiede l’inserimento di molteplici informazioni, per agevolare la comprensione e la chiarezza."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: conIstruzioni
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "con-icone",
      children: "Con Icone"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "È possibile aggiungere un’icona al campo di testo in vece delle istruzioni per la compilazione."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: conIcone
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "password-field",
      children: "Password field"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: PasswordField
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "validazione-password",
      children: "Validazione password"
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "danger",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Nota"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsx(_components.p, {
            children: 'Al momento Design React Kit Italia non ha ancora reso disponibile la funzionalità di "password strength".'
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "password-con-icone",
      children: "Password con icone"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: PasswordConIcone
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "search-field",
      children: "Search Field"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SearchField
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: `export const SearchField: Story = {
  render: () => {
    const multiOptions: { value: string, label: string }[] = [
        { value: "1", label: "Abruzzo" },
        { value: "2", label: "Basilicata" },
        { value: "3", label: "Calabria" },
        { value: "4", label: "Campania" },
        { value: "5", label: "Emilia Romagna" },
        { value: "6", label: "Friuli Venezia Giulia" },
        { value: "7", label: "Lazio" },
        { value: "8", label: "Liguria" },
        { value: "9", label: "Lombardia" },
        { value: "10", label: "Marche" },
        { value: "11", label: "Molise" },
        { value: "12", label: "Piemonte" },
        { value: "13", label: "Puglia" },
        { value: "14", label: "Sardegna" },
        { value: "15", label: "Sicilia" },
        { value: "16", label: "Toscana" },
        { value: "17", label: "Trentino Alto Adige" },
        { value: "18", label: "Umbria" },
        { value: "19", label: "Valle d'Aosta" },
        { value: "20", label: "Veneto" },
    ];
    const suggest = (query: string, populateResults: (data: string[]) => void ) => {
      const filteredResults = multiOptions.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));
      const data = filteredResults.map((item) => {
        return item.label;
      });
      populateResults(data);
    };

    return (
      <Form>
        <Container>
          <Row>
            <Col sm={4}>
              <div className="mb-4">Ricerca</div>
              <FormGroup>
                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-search" size="sm"/>}
                  id="exampleSearchField1" label="Testo da cercare" type="text"/>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Selezione</div>
              <FormGroup>
                <SelectClassicaHooks />
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Suggerimenti</div>
              <FormGroup className="select-wrapper">
                <label htmlFor="autocomplete">Regione</label>
                <Autocomplete
                    id="autocomplete"
                    source={suggest}
                    placeholder={"Testo da cercare"}
                    defaultValue={""}
                    displayMenu={"inline"}
                    tNoResults={() => "Nessun risultato"}
                />
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  },
};

`
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "inputnumerico",
      children: "InputNumerico"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: InputNumerico
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: 'const InputNumerico1Hook = () => {\n  const [value1, setValue1] = useState("0");\n  return (\n    <Input id="numerico1" type="number" label="Lorem ipsum" value={value1}\n      incrementLabel="Aumenta il valore di 1" decrementLabel="Diminuisci il valore di 1"\n      onChange={(ev) => {\n        setValue1(ev.target.value);\n      }}\n    />\n  );\n};\nconst InputNumerico2Hook = () => {\n  const [value2, setValue2] = useState("100");\n  return (\n    <Input id="numerico2" type="number" label="Lorem ipsum" value={value2}\n      incrementLabel="Aumenta il valore di 1" decrementLabel="Diminuisci il valore di 1"\n      onChange={(ev) => {\n        setValue2(ev.target.value);\n      }}\n    />\n  );\n};\nconst InputNumerico3Hook = () => {\n  const [value3, setValue3] = useState("100");\n  return (\n    <Input id="numerico3" type="number" label="Lorem ipsum" value={value3} disabled\n      incrementLabel="Aumenta il valore di 1" decrementLabel="Diminuisci il valore di 1"\n      onChange={(ev) => {\n        setValue3(ev.target.value);\n      }}\n    />\n  );\n};\n'
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ValutaEPercentuale
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: 'const InputValutaHooks = () => {\n  const [value, setValue] = useState("100");\n  return (\n    <Input id="example-currency" addonText="€" type="currency" label="Currency"\n      incrementLabel="Aumenta il valore di 1 euro" decrementLabel="Diminuisci il valore di 1 euro"\n      value={value} step="any" min={3.5} max={100}\n      onChange={(ev) => {\n          setValue(ev.target.value);\n      }}\n    />\n  );\n};\nconst InputPercentualeHooks = () => {\n  const [value, setValue] = useState("100");\n  return (\n    <Input id="example-percentage" addonText="%" type="percentage" label="Percentage"\n      incrementLabel="Aumenta il valore di 1" decrementLabel="Diminuisci il valore di 1"\n      value={value} min={0} max={100}\n      onChange={(ev) => {\n        setValue(ev.target.value);\n      }}\n    />\n  );\n};\n'
      })
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
