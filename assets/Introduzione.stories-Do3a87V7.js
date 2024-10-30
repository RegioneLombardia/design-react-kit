var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { R as React } from "./index-aC1ZMUrs.js";
import { I as Input } from "./Input-4psNN3l6.js";
import { R as Row, C as Col } from "./Col-sbjB5dMm.js";
import { L as Label } from "./Label-5MRzqQ-o.js";
import { S as Select } from "./Select-BnV-Xzy6.js";
import { T as Toggle } from "./Toggle-C9Afq_Wk.js";
import { B as Button } from "./Button-C7R8X7iu.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-C2nrqh0v.js";
import "./index-xoeSAV6i.js";
import "./Icon-DAq5ZiWt.js";
import "./iframe-BvyWEA8u.js";
import "../sb-preview/runtime.js";
import "./utils-CwYUlCuU.js";
import "./index-C6XlOQIa.js";
import "./utils-BToed_Um.js";
import "./Button-BqturWaL.js";
const meta = {
  title: "Documentazione/Form",
  component: Input
};
const DimensionamentoColonneBase = {
  render: () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Input, { type: "text", label: "Nome", id: "formNome", wrapperClassName: "col col-md-6" }), /* @__PURE__ */ React.createElement(Input, { type: "text", label: "Cognome", id: "formCognome", wrapperClassName: "col col-md-6" })), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Input, { type: "text", label: "Città", id: "Citta", wrapperClassName: "col col-7" }), /* @__PURE__ */ React.createElement(Input, { type: "text", label: "Comune", id: "Comune", wrapperClassName: "col" }), /* @__PURE__ */ React.createElement(Input, { type: "text", label: "CAP", id: "CAP", wrapperClassName: "col" })))
};
const DimensionamentoColonneComplesso = {
  render: () => {
    const options = [{
      value: "Value 1",
      label: "Opzione 1"
    }, {
      value: "Value 2",
      label: "Opzione 2"
    }, {
      value: "Value 3",
      label: "Opzione 3"
    }, {
      value: "Value 4",
      label: "Opzione 4"
    }, {
      value: "Value 5",
      label: "Opzione 5"
    }];
    const handleChange = () => {
    };
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Input, { type: "email", label: "Nome", id: "inputEmail4", placeholder: "inserisci il tuo indirizzo email", wrapperClassName: "col col-md-6" }), /* @__PURE__ */ React.createElement(Input, { type: "password", label: "Password", id: "exampleInputPassword", placeholder: "Inserisci la tua password", wrapperClassName: "col col-md-6" })), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Input, { type: "text", label: "Indirizzo", id: "inputAddress", placeholder: "Via Roma, 1", wrapperClassName: "col" })), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Input, { type: "text", label: "Comune", id: "inputCity", wrapperClassName: "col col-md-6" }), /* @__PURE__ */ React.createElement(Input, { type: "text", label: "CAP", id: "inputCAP", wrapperClassName: "col col-md-2" }), /* @__PURE__ */ React.createElement(Col, { md: "4" }, /* @__PURE__ */ React.createElement(Select, { id: "selectExampleClassic", label: "Provincia", onChange: handleChange }, options.map((opt, i) => /* @__PURE__ */ React.createElement("option", { label: opt.label, key: i }, opt.value))))), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, { md: "6", className: "form-group" }, /* @__PURE__ */ React.createElement(Toggle, { label: "Label dell'interruttore 1", disabled: false, id: "toggleEsempio1a" }))), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, { sm: "auto" }, /* @__PURE__ */ React.createElement(Button, { color: "primary", outline: true }, "Annulla")), /* @__PURE__ */ React.createElement(Col, { sm: "auto" }, /* @__PURE__ */ React.createElement(Button, { type: "submit", color: "primary" }, "Conferma"))));
  }
};
const AutoDimensionamento = {
  render: () => /* @__PURE__ */ React.createElement(Row, { className: "align-items-center" }, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("label", { className: "visually-hidden", htmlFor: "inlineFormInput" }, "Nome"), /* @__PURE__ */ React.createElement("input", { type: "text", className: "form-control", id: "inlineFormInput", placeholder: "Mario Rossi" })), /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("label", { className: "visually-hidden", htmlFor: "inlineFormInputGroup" }, "Username"), /* @__PURE__ */ React.createElement("div", { className: "input-group" }, /* @__PURE__ */ React.createElement("span", { className: "input-group-text" }, "@"), /* @__PURE__ */ React.createElement("input", { type: "text", className: "form-control", id: "inlineFormInputGroup", placeholder: "Username" }))), /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("div", { className: "form-check m-0" }, /* @__PURE__ */ React.createElement("input", { className: "form-check-input", type: "checkbox", id: "autoSizingCheck" }), /* @__PURE__ */ React.createElement("label", { className: "form-check-label", htmlFor: "autoSizingCheck" }, "Ricordami"))), /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(Button, { type: "submit", color: "primary" }, "Invia")))
};
const FormDisabilitato = {
  render: () => {
    const options = [{
      value: "Value 1",
      label: "Opzione 1"
    }, {
      value: "Value 2",
      label: "Opzione 2"
    }, {
      value: "Value 3",
      label: "Opzione 3"
    }, {
      value: "Value 4",
      label: "Opzione 4"
    }, {
      value: "Value 5",
      label: "Opzione 5"
    }];
    const handleChange = () => {
    };
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("fieldset", { disabled: true, "aria-label": "Form disabilitato" }, /* @__PURE__ */ React.createElement("legend", null, "Esempio di form disabilitato"), /* @__PURE__ */ React.createElement("div", { className: "form-group" }, /* @__PURE__ */ React.createElement(Input, { type: "text", label: "Input", id: "disabledTextInput", placeholder: "input disabilitato", disabled: true })), /* @__PURE__ */ React.createElement("div", { className: "form-group" }, /* @__PURE__ */ React.createElement(Select, { id: "selectExampleClassic", label: "Field Label", onChange: handleChange }, options.map((opt, i) => /* @__PURE__ */ React.createElement("option", { label: opt.label, key: i }, opt.value)))), /* @__PURE__ */ React.createElement("div", { className: "form-check" }, /* @__PURE__ */ React.createElement(Input, { id: "checkbox1", type: "checkbox", disabled: true }), /* @__PURE__ */ React.createElement(Label, { for: "checkbox1", check: true }, "Check disabilitato")), /* @__PURE__ */ React.createElement(Button, { type: "submit", color: "primary", className: "mt-3" }, "Submit")));
  }
};
DimensionamentoColonneBase.parameters = {
  ...DimensionamentoColonneBase.parameters,
  docs: {
    ...(_a = DimensionamentoColonneBase.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => <div>\n            <Row>\n                <Input type="text" label="Nome" id="formNome" wrapperClassName="col col-md-6" />\n                <Input type="text" label="Cognome" id="formCognome" wrapperClassName="col col-md-6" />\n            </Row>\n            <Row>\n                <Input type="text" label="Città" id="Citta" wrapperClassName="col col-7" />\n                <Input type="text" label="Comune" id="Comune" wrapperClassName="col" />\n                <Input type="text" label="CAP" id="CAP" wrapperClassName="col" />\n            </Row>\n        </div>\n}',
      ...(_c = (_b = DimensionamentoColonneBase.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
DimensionamentoColonneComplesso.parameters = {
  ...DimensionamentoColonneComplesso.parameters,
  docs: {
    ...(_d = DimensionamentoColonneComplesso.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: `{
  render: () => {
    const options = [{
      value: "Value 1",
      label: "Opzione 1"
    }, {
      value: "Value 2",
      label: "Opzione 2"
    }, {
      value: "Value 3",
      label: "Opzione 3"
    }, {
      value: "Value 4",
      label: "Opzione 4"
    }, {
      value: "Value 5",
      label: "Opzione 5"
    }];
    const handleChange = () => {};
    return <div>
                <Row>
                    <Input type="email" label="Nome" id="inputEmail4" placeholder="inserisci il tuo indirizzo email" wrapperClassName="col col-md-6" />
                    <Input type="password" label="Password" id="exampleInputPassword" placeholder="Inserisci la tua password" wrapperClassName="col col-md-6" />
                </Row>
                <Row>
                    <Input type="text" label="Indirizzo" id="inputAddress" placeholder="Via Roma, 1" wrapperClassName="col" />
                </Row>
                <Row>
                    <Input type="text" label="Comune" id="inputCity" wrapperClassName="col col-md-6" />
                    <Input type="text" label="CAP" id="inputCAP" wrapperClassName="col col-md-2" />
                    <Col md="4">
                        <Select id="selectExampleClassic" label="Provincia" onChange={handleChange}>
                            {options.map((opt, i) => <option label={opt.label} key={i}>
                                    {opt.value}
                                </option>)}
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <Col md="6" className="form-group">
                        <Toggle label="Label dell'interruttore 1" disabled={false} id="toggleEsempio1a" />
                    </Col>
                </Row>
                <Row>
                    <Col sm="auto">
                        <Button color="primary" outline>
                            Annulla
                        </Button>
                    </Col>
                    <Col sm="auto">
                        <Button type="submit" color="primary">
                            Conferma
                        </Button>
                    </Col>
                </Row>
            </div>;
  }
}`,
      ...(_f = (_e = DimensionamentoColonneComplesso.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
AutoDimensionamento.parameters = {
  ...AutoDimensionamento.parameters,
  docs: {
    ...(_g = AutoDimensionamento.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: () => <Row className="align-items-center">\n            <Col>\n                <label className="visually-hidden" htmlFor="inlineFormInput">\n                    Nome\n                </label>\n                <input type="text" className="form-control" id="inlineFormInput" placeholder="Mario Rossi" />\n            </Col>\n            <Col>\n                <label className="visually-hidden" htmlFor="inlineFormInputGroup">\n                    Username\n                </label>\n                <div className="input-group">\n                    <span className="input-group-text">@</span>\n                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" />\n                </div>\n            </Col>\n            <Col>\n                <div className="form-check m-0">\n                    <input className="form-check-input" type="checkbox" id="autoSizingCheck" />\n                    <label className="form-check-label" htmlFor="autoSizingCheck">\n                        Ricordami\n                    </label>\n                </div>\n            </Col>\n            <Col>\n                <Button type="submit" color="primary">\n                    Invia\n                </Button>\n            </Col>\n        </Row>\n}',
      ...(_i = (_h = AutoDimensionamento.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
FormDisabilitato.parameters = {
  ...FormDisabilitato.parameters,
  docs: {
    ...(_j = FormDisabilitato.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  render: () => {\n    const options = [{\n      value: "Value 1",\n      label: "Opzione 1"\n    }, {\n      value: "Value 2",\n      label: "Opzione 2"\n    }, {\n      value: "Value 3",\n      label: "Opzione 3"\n    }, {\n      value: "Value 4",\n      label: "Opzione 4"\n    }, {\n      value: "Value 5",\n      label: "Opzione 5"\n    }];\n    const handleChange = () => {};\n    return <div>\n                <fieldset disabled aria-label="Form disabilitato">\n                    <legend>Esempio di form disabilitato</legend>\n                    <div className="form-group">\n                        <Input type="text" label="Input" id="disabledTextInput" placeholder="input disabilitato" disabled />\n                    </div>\n                    <div className="form-group">\n                        <Select id="selectExampleClassic" label="Field Label" onChange={handleChange}>\n                            {options.map((opt, i) => <option label={opt.label} key={i}>\n                                    {opt.value}\n                                </option>)}\n                        </Select>\n                    </div>\n                    <div className="form-check">\n                        <Input id="checkbox1" type="checkbox" disabled />\n                        <Label for="checkbox1" check>\n                            Check disabilitato\n                        </Label>\n                    </div>\n                    <Button type="submit" color="primary" className="mt-3">\n                        Submit\n                    </Button>\n                </fieldset>\n            </div>;\n  }\n}',
      ...(_l = (_k = FormDisabilitato.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["DimensionamentoColonneBase", "DimensionamentoColonneComplesso", "AutoDimensionamento", "FormDisabilitato"];
export {
  AutoDimensionamento,
  DimensionamentoColonneBase,
  DimensionamentoColonneComplesso,
  FormDisabilitato,
  __namedExportsOrder,
  meta as default
};
