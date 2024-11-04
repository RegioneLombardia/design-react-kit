import { ae as jsxRuntimeExports, af as Meta, ag as Canvas } from "./index-DT2cdpOB.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { I as InputFieldsStories, a as InputSemplice, c as conIstruzioni, b as conIcone, P as PasswordField, d as PasswordConIcone, S as SearchField, e as InputNumerico, V as ValutaEPercentuale } from "./InputFields.stories-yO0B5zb9.js";
import { C as Callout, a as CalloutText } from "./CalloutText-Dq2-0GdE.js";
import { C as CalloutTitle } from "./CalloutTitle-CDZdaeIL.js";
import "./iframe-BiDC3_i4.js";
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
import "./Input-CZz2SKjT.js";
import "./index-C2nrqh0v.js";
import "./index-xoeSAV6i.js";
import "./Icon-CMQf0osR.js";
import "./utils-CwYUlCuU.js";
import "./Form-94CbFQsc.js";
import "./index-C6XlOQIa.js";
import "./utils-BToed_Um.js";
import "./Container-BSU_5rqZ.js";
import "./Col-sbjB5dMm.js";
import "./FormGroup-Dgycp2JI.js";
import "./Select-BnV-Xzy6.js";
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
      children: "È possibile aggiungere un’icona al campo di testo come istruzione per la compilazione."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: conIcone
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "con-icone-1",
      children: "Con Icone"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "È possibile aggiungere un’icona al campo di testo come istruzione per la compilazione."
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
            children: 'Al momento Designe React Kit Italia non ha ancora reso disponibile la funzionalità di "password strength".'
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
