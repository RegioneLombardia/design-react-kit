var _a, _b, _c;
import { R as React } from "./index-aC1ZMUrs.js";
import { F as Form } from "./Form-94CbFQsc.js";
import { C as Container } from "./Container-BSU_5rqZ.js";
import { R as Row, C as Col } from "./Col-sbjB5dMm.js";
import { F as FormGroup } from "./FormGroup-Dgycp2JI.js";
import { T as Toggle } from "./Toggle-DLuNjq6c.js";
const meta = {
  title: "Linee Guida/Inserimento/Toggle"
};
const Esempio = {
  render: () => {
    return /* @__PURE__ */ React.createElement(Form, null, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Row, { className: "row justify-content-between" }, /* @__PURE__ */ React.createElement(Col, { sm: 3 }, /* @__PURE__ */ React.createElement("div", null, "Default"), /* @__PURE__ */ React.createElement(FormGroup, { check: true }, /* @__PURE__ */ React.createElement(Toggle, { label: "Selezionato", defaultChecked: true, disabled: false })), /* @__PURE__ */ React.createElement(FormGroup, { check: true }, /* @__PURE__ */ React.createElement(Toggle, { label: "Non Selezionato", disabled: false }))), /* @__PURE__ */ React.createElement(Col, { sm: 3 }, /* @__PURE__ */ React.createElement("div", null, "Disabilitato"), /* @__PURE__ */ React.createElement(FormGroup, { check: true }, /* @__PURE__ */ React.createElement(Toggle, { label: "Selezionato", defaultChecked: true, disabled: true })), /* @__PURE__ */ React.createElement(FormGroup, { check: true }, /* @__PURE__ */ React.createElement(Toggle, { label: "Non Selezionato", disabled: true }))))));
  }
};
Esempio.parameters = {
  ...Esempio.parameters,
  docs: {
    ...(_a = Esempio.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <Form>\n        <Container>\n          <Row className="row justify-content-between">\n            <Col sm={3}>\n              <div>Default</div>\n              <FormGroup check>\n                <Toggle label="Selezionato" defaultChecked disabled={false} />\n              </FormGroup>\n              <FormGroup check>\n                <Toggle label="Non Selezionato" disabled={false} />\n              </FormGroup>\n            </Col>\n            <Col sm={3}>\n              <div>Disabilitato</div>\n              <FormGroup check>\n                <Toggle label="Selezionato" defaultChecked disabled={true} />\n              </FormGroup>\n              <FormGroup check>\n                <Toggle label="Non Selezionato" disabled={true} />\n              </FormGroup>\n            </Col>\n          </Row>\n        </Container>\n      </Form>;\n  }\n}',
      ...(_c = (_b = Esempio.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["Esempio"];
const ToggleStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Esempio,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Esempio as E,
  ToggleStories as T
};
