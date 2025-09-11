var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
import { A as Autocomplete } from "./react-BfGtA0ao.js";
import { e, r as reactExports } from "./iframe-CywKGv0B.js";
import { C as Container } from "./Container-CmXOe7U0.js";
import { R as Row, C as Col } from "./Col-CzpBcQxN.js";
import { F as Form } from "./Form-CdAAJOLx.js";
import { F as FormGroup } from "./FormGroup-C9ur0u9a.js";
import { I as Icon } from "./Icon-CfKGR1lx.js";
import { I as Input } from "./Input-CuU17S6c.js";
import { S as Select } from "./Select-C8qc46wP.js";
import "./track-focus-DbJ2CO43.js";
const meta = {
  title: "Linee Guida/Inserimento/Input fields",
  component: Input
};
const InputSemplice = {
  render: () => {
    return /* @__PURE__ */ e.createElement(Form, null, /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Stato inattivo"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { type: "text", label: "Etichetta di esempio", id: "exampleInputText1" }))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Stato attivo"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { type: "text", className: "active", label: "Etichetta di esempio", id: "exampleInputText2", value: " " }))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Stato disabilitato"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { type: "text", className: "active", label: "Etichetta di esempio", id: "exampleInputText3", disabled: true, value: " " })))), /* @__PURE__ */ e.createElement(Row, { className: "mt-5" }, /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Input corretto"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { type: "text", className: "active", label: "Etichetta di esempio", id: "exampleInputText4", name: "exampleInputText4", value: "Testo immesso", valid: true }))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Attenzione"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { type: "text", className: "active warning", label: "Etichetta di esempio", id: "exampleInputText5", name: "exampleInputText5", value: "Testo immesso", valid: false }))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Errore"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { type: "text", className: "active", label: "Etichetta di esempio", id: "exampleInputText6", name: "exampleInputText6", value: "Testo immesso", valid: false }))))));
  }
};
const conIstruzioni = {
  render: () => {
    return /* @__PURE__ */ e.createElement(Form, null, /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Stato inattivo"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { type: "text", label: "Etichetta di esempio", id: "exampleInputText7", className: "active", placeholder: "Inserire dato...", infoText: "Ulteriore testo informativo" }))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Stato attivo"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { type: "text", className: "active", label: "Etichetta di esempio", id: "exampleInputText8", value: "Testo in inserim|", infoText: "Ulteriore testo informativo" }))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Stato disabilitato"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { type: "text", className: "active", label: "Etichetta di esempio", id: "exampleInputText9", disabled: true, value: "Testo non modificabile", infoText: "Dato derivante da anagrafica" })))), /* @__PURE__ */ e.createElement(Row, { className: "mt-5" }, /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Input corretto"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { type: "text", className: "active", label: "Etichetta di esempio", id: "exampleInputText7", name: "exampleInputText7", value: "Testo immesso", valid: true, validationText: "Validato!" }))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Attenzione"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { type: "text", label: "Etichetta di esempio", id: "exampleInputText8", name: "exampleInputText8", value: "Testo immesso", valid: false, className: "active warning", validationText: "Possibili problemi." }))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Errore"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { type: "text", className: "active", label: "Etichetta di esempio", id: "exampleInputText9", name: "exampleInputText9", value: "Testo immesso", valid: false, validationText: "Errore bloccante!" }))))));
  }
};
const conIcone = {
  render: () => {
    return /* @__PURE__ */ e.createElement(Form, null, /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Stato inattivo"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { hasIconLeft: true, iconLeft: /* @__PURE__ */ e.createElement(Icon, { "aria-hidden": true, icon: "it-mail", size: "sm" }), id: "exampleInputText10", label: "Etichetta di esempio", type: "text" }))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Stato attivo"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { hasIconLeft: true, iconLeft: /* @__PURE__ */ e.createElement(Icon, { "aria-hidden": true, icon: "it-mail", size: "sm" }), id: "exampleInputText11", label: "Etichetta di esempio", type: "text", className: "active", value: " " }))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Stato disabilitato"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { hasIconLeft: true, iconLeft: /* @__PURE__ */ e.createElement(Icon, { "aria-hidden": true, icon: "it-mail", size: "sm" }), id: "exampleInputText12", label: "Etichetta di esempio", type: "text", className: "active", value: " ", disabled: true })))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Stato inattivo"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { hasIconLeft: true, iconLeft: /* @__PURE__ */ e.createElement(Icon, { "aria-hidden": true, icon: "it-mail", size: "sm" }), id: "exampleInputText13", label: "Etichetta di esempio", type: "text", placeholder: "Inserire dato..." }))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Stato attivo"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { hasIconLeft: true, iconLeft: /* @__PURE__ */ e.createElement(Icon, { "aria-hidden": true, icon: "it-mail", size: "sm" }), id: "exampleInputText14", label: "Etichetta di esempio", type: "text", className: "active", value: "Testo in inserim| " }))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Stato disabilitato"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { hasIconLeft: true, iconLeft: /* @__PURE__ */ e.createElement(Icon, { "aria-hidden": true, icon: "it-mail", size: "sm" }), id: "exampleInputText15", label: "Etichetta di esempio", type: "text", className: "active", value: "Testo non modificabile", disabled: true })))), /* @__PURE__ */ e.createElement(Row, { className: "mt-5" }, /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Input corretto"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { hasIconLeft: true, iconLeft: /* @__PURE__ */ e.createElement(Icon, { "aria-hidden": true, icon: "it-mail", size: "sm" }), type: "text", className: "active", label: "Etichetta di esempio", id: "exampleInputText16", name: "exampleInputText7", value: "Testo immesso", valid: true }))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Attenzione"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { hasIconLeft: true, iconLeft: /* @__PURE__ */ e.createElement(Icon, { "aria-hidden": true, icon: "it-mail", size: "sm" }), type: "text", label: "Etichetta di esempio", id: "exampleInputText17", name: "exampleInputText8", value: "Testo immesso", valid: false, className: "active warning" }))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Errore"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { hasIconLeft: true, iconLeft: /* @__PURE__ */ e.createElement(Icon, { "aria-hidden": true, icon: "it-mail", size: "sm" }), type: "text", className: "active", label: "Etichetta di esempio", id: "exampleInputText18", name: "exampleInputText9", value: "Testo immesso", valid: false })))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Input corretto"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { hasIconLeft: true, iconLeft: /* @__PURE__ */ e.createElement(Icon, { "aria-hidden": true, icon: "it-mail", size: "sm" }), type: "text", className: "active", label: "Etichetta di esempio", id: "exampleInputText19", name: "exampleInputText7", value: "Testo immesso", valid: true, validationText: "Validato!" }))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Attenzione"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { hasIconLeft: true, iconLeft: /* @__PURE__ */ e.createElement(Icon, { "aria-hidden": true, icon: "it-mail", size: "sm" }), type: "text", label: "Etichetta di esempio", id: "exampleInputText20", name: "exampleInputText8", value: "Testo immesso", valid: false, className: "active warning", validationText: "Possibili problemi." }))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Errore"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { hasIconLeft: true, iconLeft: /* @__PURE__ */ e.createElement(Icon, { "aria-hidden": true, icon: "it-mail", size: "sm" }), type: "text", className: "active", label: "Etichetta di esempio", id: "exampleInputText21", name: "exampleInputText9", value: "Testo immesso", valid: false, validationText: "Errore bloccante!" }))))));
  }
};
const PasswordField = {
  render: () => {
    return /* @__PURE__ */ e.createElement(Form, null, /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Stato inattivo"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { id: "exampleInputPassword1", infoText: "Inserisci almeno 8 caratteri", label: "Password", type: "password" }))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Stato attivo"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { id: "exampleInputPassword2", infoText: "Inserisci almeno 8 caratteri", label: "Password", type: "password", className: "active", value: "abcdefg12" }))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Stato disabilitato"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { id: "exampleInputPassword3", infoText: "Inserisci almeno 8 caratteri", label: "Password", type: "password", className: "active", disabled: true, value: "abcdefg12" }))))));
  }
};
const PasswordConIcone = {
  render: () => {
    return /* @__PURE__ */ e.createElement(Form, null, /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Stato inattivo"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { hasIconLeft: true, iconLeft: /* @__PURE__ */ e.createElement(Icon, { "aria-hidden": true, icon: "it-key", size: "sm" }), id: "exampleInputPassword4", label: "Password", type: "password" }))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Stato attivo"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { hasIconLeft: true, iconLeft: /* @__PURE__ */ e.createElement(Icon, { "aria-hidden": true, icon: "it-key", size: "sm" }), id: "exampleInputPassword5", label: "Password", type: "password", className: "active", value: "abcdefg12" }))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Stato disabilitato"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { hasIconLeft: true, iconLeft: /* @__PURE__ */ e.createElement(Icon, { "aria-hidden": true, icon: "it-key", size: "sm" }), id: "exampleInputPassword6", label: "Password", type: "password", className: "active", disabled: true, value: "abcdefg12" }))))));
  }
};
const SearchField = {
  render: () => {
    const multiOptions = [{
      value: "1",
      label: "Abruzzo"
    }, {
      value: "2",
      label: "Basilicata"
    }, {
      value: "3",
      label: "Calabria"
    }, {
      value: "4",
      label: "Campania"
    }, {
      value: "5",
      label: "Emilia Romagna"
    }, {
      value: "6",
      label: "Friuli Venezia Giulia"
    }, {
      value: "7",
      label: "Lazio"
    }, {
      value: "8",
      label: "Liguria"
    }, {
      value: "9",
      label: "Lombardia"
    }, {
      value: "10",
      label: "Marche"
    }, {
      value: "11",
      label: "Molise"
    }, {
      value: "12",
      label: "Piemonte"
    }, {
      value: "13",
      label: "Puglia"
    }, {
      value: "14",
      label: "Sardegna"
    }, {
      value: "15",
      label: "Sicilia"
    }, {
      value: "16",
      label: "Toscana"
    }, {
      value: "17",
      label: "Trentino Alto Adige"
    }, {
      value: "18",
      label: "Umbria"
    }, {
      value: "19",
      label: "Valle d'Aosta"
    }, {
      value: "20",
      label: "Veneto"
    }];
    const suggest = (query, populateResults) => {
      const filteredResults = multiOptions.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));
      const data = filteredResults.map((item) => {
        return item.label;
      });
      populateResults(data);
    };
    return /* @__PURE__ */ e.createElement(Form, null, /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Ricerca"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { hasIconLeft: true, iconLeft: /* @__PURE__ */ e.createElement(Icon, { "aria-hidden": true, icon: "it-search", size: "sm" }), id: "exampleSearchField1", label: "Testo da cercare", type: "text" }))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Selezione"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(SelectClassicaHooks, null))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Suggerimenti"), /* @__PURE__ */ e.createElement(FormGroup, { className: "select-wrapper" }, /* @__PURE__ */ e.createElement("label", { htmlFor: "autocomplete" }, "Regione"), /* @__PURE__ */ e.createElement(Autocomplete, { id: "autocomplete", source: suggest, placeholder: "Testo da cercare", defaultValue: "", displayMenu: "inline", tNoResults: () => "Nessun risultato" }))))));
  },
  parameters: {
    docs: {
      story: {
        height: "350px"
      },
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const SelectClassicaHooks = () => {
  const [, setValue] = reactExports.useState();
  const handleChange = (selectedOption) => setValue(selectedOption);
  return /* @__PURE__ */ e.createElement(Select, { id: "example-reactstrap", label: "Etichetta di esempio", onChange: handleChange }, /* @__PURE__ */ e.createElement("option", { value: "" }, "Scegli un'opzione"), /* @__PURE__ */ e.createElement("option", { value: "Value 1" }, "Lorem ipsum dolor sit amet"), /* @__PURE__ */ e.createElement("option", { value: "Value 2" }, "Duis vestibulum eleifend libero"), /* @__PURE__ */ e.createElement("option", { value: "Value 3" }, "Phasellus pretium orci sed odio tempus"), /* @__PURE__ */ e.createElement("option", { value: "Value 4" }, "Vestibulum bibendum ex vel augue porttitor sodales"), /* @__PURE__ */ e.createElement("option", { value: "Value 5" }, "Praesent quis elementum turpis"));
};
const InputNumerico1Hook = () => {
  const [value1, setValue1] = reactExports.useState("0");
  return /* @__PURE__ */ e.createElement(Input, { id: "numerico1", type: "number", label: "Lorem ipsum", value: value1, incrementLabel: "Aumenta il valore di 1", decrementLabel: "Diminuisci il valore di 1", onChange: (ev) => {
    setValue1(ev.target.value);
  } });
};
const InputNumerico2Hook = () => {
  const [value2, setValue2] = reactExports.useState("100");
  return /* @__PURE__ */ e.createElement(Input, { id: "numerico2", type: "number", label: "Lorem ipsum", value: value2, incrementLabel: "Aumenta il valore di 1", decrementLabel: "Diminuisci il valore di 1", onChange: (ev) => {
    setValue2(ev.target.value);
  } });
};
const InputNumerico3Hook = () => {
  const [value3, setValue3] = reactExports.useState("100");
  return /* @__PURE__ */ e.createElement(Input, { id: "numerico3", type: "number", label: "Lorem ipsum", value: value3, disabled: true, incrementLabel: "Aumenta il valore di 1", decrementLabel: "Diminuisci il valore di 1", onChange: (ev) => {
    setValue3(ev.target.value);
  } });
};
const InputNumerico = {
  render: () => {
    return /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Stato inattivo"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(InputNumerico1Hook, null))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Stato attivo"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(InputNumerico2Hook, null))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Stato disabilitato"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(InputNumerico3Hook, null)))));
  }
};
const InputValutaHooks = () => {
  const [value, setValue] = reactExports.useState("100");
  return /* @__PURE__ */ e.createElement(Input, { id: "example-currency", addonText: "€", type: "currency", label: "Currency", incrementLabel: "Aumenta il valore di 1 euro", decrementLabel: "Diminuisci il valore di 1 euro", value, step: "any", min: 5, onChange: (ev) => {
    setValue(ev.target.value);
  } });
};
const InputPercentualeHooks = () => {
  const [value, setValue] = reactExports.useState("100");
  return /* @__PURE__ */ e.createElement(Input, { id: "example-percentage", addonText: "%", type: "percentage", label: "Percentage", incrementLabel: "Aumenta il valore di 1", decrementLabel: "Diminuisci il valore di 1", value, min: 0, max: 100, onChange: (ev) => {
    setValue(ev.target.value);
  } });
};
const ValutaEPercentuale = {
  render: () => {
    return /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Valuta"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(InputValutaHooks, null))), /* @__PURE__ */ e.createElement(Col, { sm: 4 }, /* @__PURE__ */ e.createElement("div", { className: "mb-4" }, "Percentuale"), /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(InputPercentualeHooks, null)))));
  }
};
InputSemplice.parameters = {
  ...InputSemplice.parameters,
  docs: {
    ...(_a = InputSemplice.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <Form>\n        <Container>\n          <Row>\n            <Col sm={4}>\n              <div className="mb-4">Stato inattivo</div>\n              <FormGroup>\n                <Input type="text" label="Etichetta di esempio" id="exampleInputText1" />\n              </FormGroup>\n            </Col>\n            <Col sm={4}>\n              <div className="mb-4">Stato attivo</div>\n              <FormGroup>\n                <Input type="text" className="active" label="Etichetta di esempio" id="exampleInputText2" value=" " />\n              </FormGroup>\n            </Col>\n            <Col sm={4}>\n              <div className="mb-4">Stato disabilitato</div>\n              <FormGroup>\n                <Input type="text" className="active" label="Etichetta di esempio" id="exampleInputText3" disabled value=" " />\n              </FormGroup>\n            </Col>\n          </Row>\n          <Row className="mt-5">\n            <Col sm={4}>\n              <div className="mb-4">Input corretto</div>\n              <FormGroup>\n                <Input type="text" className="active" label="Etichetta di esempio" id="exampleInputText4" name="exampleInputText4" value="Testo immesso" valid />\n              </FormGroup>\n            </Col>\n            <Col sm={4}>\n              <div className="mb-4">Attenzione</div>\n              <FormGroup>\n                <Input type="text" className="active warning" label="Etichetta di esempio" id="exampleInputText5" name="exampleInputText5" value="Testo immesso" valid={false} />\n              </FormGroup>\n            </Col>\n            <Col sm={4}>\n              <div className="mb-4">Errore</div>\n              <FormGroup>\n                <Input type="text" className="active" label="Etichetta di esempio" id="exampleInputText6" name="exampleInputText6" value="Testo immesso" valid={false} />\n              </FormGroup>\n            </Col>\n          </Row>\n        </Container>\n      </Form>;\n  }\n}',
      ...(_c = (_b = InputSemplice.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
conIstruzioni.parameters = {
  ...conIstruzioni.parameters,
  docs: {
    ...(_d = conIstruzioni.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <Form>\n        <Container>\n          <Row>\n            <Col sm={4}>\n              <div className="mb-4">Stato inattivo</div>\n              <FormGroup>\n                <Input type="text" label="Etichetta di esempio" id="exampleInputText7" className="active" placeholder="Inserire dato..." infoText="Ulteriore testo informativo" />\n              </FormGroup>\n            </Col>\n            <Col sm={4}>\n              <div className="mb-4">Stato attivo</div>\n              <FormGroup>\n                <Input type="text" className="active" label="Etichetta di esempio" id="exampleInputText8" value="Testo in inserim|" infoText="Ulteriore testo informativo" />\n              </FormGroup>\n            </Col>\n            <Col sm={4}>\n              <div className="mb-4">Stato disabilitato</div>\n              <FormGroup>\n                <Input type="text" className="active" label="Etichetta di esempio" id="exampleInputText9" disabled value="Testo non modificabile" infoText="Dato derivante da anagrafica" />\n              </FormGroup>\n            </Col>\n          </Row>\n          <Row className="mt-5">\n            <Col sm={4}>\n              <div className="mb-4">Input corretto</div>\n              <FormGroup>\n                <Input type="text" className="active" label="Etichetta di esempio" id="exampleInputText7" name="exampleInputText7" value="Testo immesso" valid validationText="Validato!" />\n              </FormGroup>\n            </Col>\n            <Col sm={4}>\n              <div className="mb-4">Attenzione</div>\n              <FormGroup>\n                <Input type="text" label="Etichetta di esempio" id="exampleInputText8" name="exampleInputText8" value="Testo immesso" valid={false} className="active warning" validationText="Possibili problemi." />\n              </FormGroup>\n            </Col>\n            <Col sm={4}>\n              <div className="mb-4">Errore</div>\n              <FormGroup>\n                <Input type="text" className="active" label="Etichetta di esempio" id="exampleInputText9" name="exampleInputText9" value="Testo immesso" valid={false} validationText="Errore bloccante!" />\n              </FormGroup>\n            </Col>\n          </Row>\n        </Container>\n      </Form>;\n  }\n}',
      ...(_f = (_e = conIstruzioni.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
conIcone.parameters = {
  ...conIcone.parameters,
  docs: {
    ...(_g = conIcone.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <Form>\n        <Container>\n          <Row>\n            <Col sm={4}>\n              <div className="mb-4">Stato inattivo</div>\n              <FormGroup>\n                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm" />} id="exampleInputText10" label="Etichetta di esempio" type="text" />\n              </FormGroup>\n            </Col>\n            <Col sm={4}>\n              <div className="mb-4">Stato attivo</div>\n              <FormGroup>\n                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm" />} id="exampleInputText11" label="Etichetta di esempio" type="text" className="active" value=" " />\n              </FormGroup>\n            </Col>\n            <Col sm={4}>\n              <div className="mb-4">Stato disabilitato</div>\n              <FormGroup>\n                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm" />} id="exampleInputText12" label="Etichetta di esempio" type="text" className="active" value=" " disabled />\n                </FormGroup>\n            </Col>\n          </Row>\n          <Row>\n            <Col sm={4}>\n              <div className="mb-4">Stato inattivo</div>\n              <FormGroup>\n                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm" />} id="exampleInputText13" label="Etichetta di esempio" type="text" placeholder="Inserire dato..." />\n              </FormGroup>\n            </Col>\n            <Col sm={4}>\n              <div className="mb-4">Stato attivo</div>\n              <FormGroup>\n                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm" />} id="exampleInputText14" label="Etichetta di esempio" type="text" className="active" value="Testo in inserim| " />\n              </FormGroup>\n            </Col>\n            <Col sm={4}>\n              <div className="mb-4">Stato disabilitato</div>\n              <FormGroup>\n                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm" />} id="exampleInputText15" label="Etichetta di esempio" type="text" className="active" value="Testo non modificabile" disabled />\n              </FormGroup>\n            </Col>\n          </Row>\n          <Row className="mt-5">\n            <Col sm={4}>\n              <div className="mb-4">Input corretto</div>\n              <FormGroup>\n                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm" />} type="text" className="active" label="Etichetta di esempio" id="exampleInputText16" name="exampleInputText7" value="Testo immesso" valid />\n              </FormGroup>\n            </Col>\n            <Col sm={4}>\n              <div className="mb-4">Attenzione</div>\n              <FormGroup>\n                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm" />} type="text" label="Etichetta di esempio" id="exampleInputText17" name="exampleInputText8" value="Testo immesso" valid={false} className="active warning" />\n              </FormGroup>\n            </Col>\n            <Col sm={4}>\n              <div className="mb-4">Errore</div>\n              <FormGroup>\n                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm" />} type="text" className="active" label="Etichetta di esempio" id="exampleInputText18" name="exampleInputText9" value="Testo immesso" valid={false} />\n              </FormGroup>\n            </Col>\n          </Row>\n          <Row>\n            <Col sm={4}>\n              <div className="mb-4">Input corretto</div>\n              <FormGroup>\n                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm" />} type="text" className="active" label="Etichetta di esempio" id="exampleInputText19" name="exampleInputText7" value="Testo immesso" valid validationText="Validato!" />\n              </FormGroup>\n            </Col>\n            <Col sm={4}>\n              <div className="mb-4">Attenzione</div>\n              <FormGroup>\n                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm" />} type="text" label="Etichetta di esempio" id="exampleInputText20" name="exampleInputText8" value="Testo immesso" valid={false} className="active warning" validationText="Possibili problemi." />\n              </FormGroup>\n            </Col>\n            <Col sm={4}>\n              <div className="mb-4">Errore</div>\n              <FormGroup>\n                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm" />} type="text" className="active" label="Etichetta di esempio" id="exampleInputText21" name="exampleInputText9" value="Testo immesso" valid={false} validationText="Errore bloccante!" />\n              </FormGroup>\n            </Col>\n          </Row>\n        </Container>\n      </Form>;\n  }\n}',
      ...(_i = (_h = conIcone.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
PasswordField.parameters = {
  ...PasswordField.parameters,
  docs: {
    ...(_j = PasswordField.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <Form>\n        <Container>\n          <Row>\n            <Col sm={4}>\n              <div className="mb-4">Stato inattivo</div>\n              <FormGroup>\n                <Input id="exampleInputPassword1" infoText="Inserisci almeno 8 caratteri" label="Password" type="password" />\n              </FormGroup>\n            </Col>\n            <Col sm={4}>\n              <div className="mb-4">Stato attivo</div>\n              <FormGroup>\n                <Input id="exampleInputPassword2" infoText="Inserisci almeno 8 caratteri" label="Password" type="password" className="active" value="abcdefg12" />\n              </FormGroup>\n            </Col>\n            <Col sm={4}>\n              <div className="mb-4">Stato disabilitato</div>\n              <FormGroup>\n                <Input id="exampleInputPassword3" infoText="Inserisci almeno 8 caratteri" label="Password" type="password" className="active" disabled value="abcdefg12" />\n              </FormGroup>\n            </Col>\n          </Row>\n        </Container>\n      </Form>;\n  }\n}',
      ...(_l = (_k = PasswordField.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
PasswordConIcone.parameters = {
  ...PasswordConIcone.parameters,
  docs: {
    ...(_m = PasswordConIcone.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <Form>\n        <Container>\n          <Row>\n            <Col sm={4}>\n              <div className="mb-4">Stato inattivo</div>\n              <FormGroup>\n                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-key" size="sm" />} id="exampleInputPassword4" label="Password" type="password" />\n              </FormGroup>\n            </Col>\n            <Col sm={4}>\n              <div className="mb-4">Stato attivo</div>\n              <FormGroup>\n                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-key" size="sm" />} id="exampleInputPassword5" label="Password" type="password" className="active" value="abcdefg12" />\n              </FormGroup>\n            </Col>\n            <Col sm={4}>\n              <div className="mb-4">Stato disabilitato</div>\n              <FormGroup>\n                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-key" size="sm" />} id="exampleInputPassword6" label="Password" type="password" className="active" disabled value="abcdefg12" />\n              </FormGroup>\n            </Col>\n          </Row>\n        </Container>\n      </Form>;\n  }\n}',
      ...(_o = (_n = PasswordConIcone.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
SearchField.parameters = {
  ...SearchField.parameters,
  docs: {
    ...(_p = SearchField.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: `{
  render: () => {
    const multiOptions: {
      value: string;
      label: string;
    }[] = [{
      value: "1",
      label: "Abruzzo"
    }, {
      value: "2",
      label: "Basilicata"
    }, {
      value: "3",
      label: "Calabria"
    }, {
      value: "4",
      label: "Campania"
    }, {
      value: "5",
      label: "Emilia Romagna"
    }, {
      value: "6",
      label: "Friuli Venezia Giulia"
    }, {
      value: "7",
      label: "Lazio"
    }, {
      value: "8",
      label: "Liguria"
    }, {
      value: "9",
      label: "Lombardia"
    }, {
      value: "10",
      label: "Marche"
    }, {
      value: "11",
      label: "Molise"
    }, {
      value: "12",
      label: "Piemonte"
    }, {
      value: "13",
      label: "Puglia"
    }, {
      value: "14",
      label: "Sardegna"
    }, {
      value: "15",
      label: "Sicilia"
    }, {
      value: "16",
      label: "Toscana"
    }, {
      value: "17",
      label: "Trentino Alto Adige"
    }, {
      value: "18",
      label: "Umbria"
    }, {
      value: "19",
      label: "Valle d'Aosta"
    }, {
      value: "20",
      label: "Veneto"
    }];
    const suggest = (query: string, populateResults: (data: string[]) => void) => {
      const filteredResults = multiOptions.filter(i => i.label.toLowerCase().includes(query.toLowerCase()));
      const data = filteredResults.map(item => {
        return item.label;
      });
      populateResults(data);
    };
    return <Form>
        <Container>
          <Row>
            <Col sm={4}>
              <div className="mb-4">Ricerca</div>
              <FormGroup>
                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-search" size="sm" />} id="exampleSearchField1" label="Testo da cercare" type="text" />
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
                <Autocomplete id="autocomplete" source={suggest} placeholder={"Testo da cercare"} defaultValue={""} displayMenu={"inline"} tNoResults={() => "Nessun risultato"} />
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Form>;
  },
  parameters: {
    docs: {
      story: {
        height: '350px'
      },
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,
      ...(_r = (_q = SearchField.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
InputNumerico.parameters = {
  ...InputNumerico.parameters,
  docs: {
    ...(_s = InputNumerico.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <Container>\n        <Row>\n          <Col sm={4}>\n            <div className="mb-4">Stato inattivo</div>\n            <FormGroup>\n              <InputNumerico1Hook />\n            </FormGroup>\n          </Col>\n          <Col sm={4}>\n            <div className="mb-4">Stato attivo</div>\n            <FormGroup>\n              <InputNumerico2Hook />\n            </FormGroup>\n          </Col>\n          <Col sm={4}>\n            <div className="mb-4">Stato disabilitato</div>\n            <FormGroup>\n              <InputNumerico3Hook />\n            </FormGroup>\n          </Col>\n        </Row>\n      </Container>;\n  }\n}',
      ...(_u = (_t = InputNumerico.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
ValutaEPercentuale.parameters = {
  ...ValutaEPercentuale.parameters,
  docs: {
    ...(_v = ValutaEPercentuale.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <Container>\n        <Row>\n          <Col sm={4}>\n            <div className="mb-4">Valuta</div>\n            <FormGroup>\n              <InputValutaHooks />\n            </FormGroup>\n          </Col>\n          <Col sm={4}>\n            <div className="mb-4">Percentuale</div>\n            <FormGroup>\n              <InputPercentualeHooks />\n            </FormGroup>\n          </Col>\n        </Row>\n      </Container>;\n  }\n}',
      ...(_x = (_w = ValutaEPercentuale.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
const __namedExportsOrder = ["InputSemplice", "conIstruzioni", "conIcone", "PasswordField", "PasswordConIcone", "SearchField", "InputNumerico", "ValutaEPercentuale"];
const InputFieldsStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  InputNumerico,
  InputSemplice,
  PasswordConIcone,
  PasswordField,
  SearchField,
  ValutaEPercentuale,
  __namedExportsOrder,
  conIcone,
  conIstruzioni,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  InputFieldsStories as I,
  PasswordField as P,
  SearchField as S,
  ValutaEPercentuale as V,
  InputSemplice as a,
  conIcone as b,
  conIstruzioni as c,
  PasswordConIcone as d,
  InputNumerico as e
};
