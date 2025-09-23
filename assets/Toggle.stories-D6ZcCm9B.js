var _a, _b, _c;
import { e } from "./iframe-CMMl7uns.js";
import { C as Container } from "./Container-BHfV2rkV.js";
import { R as Row, C as Col } from "./Col-BB6YdyMy.js";
import { F as Form } from "./Form-DpdCseBx.js";
import { F as FormGroup } from "./FormGroup-Cz7ZFUfS.js";
import { T as Toggle } from "./Toggle-zDPMNnI7.js";
import "./track-focus-DbJ2CO43.js";
const meta = {
  title: "Linee Guida/Inserimento/Toggle"
};
const Esempio = {
  render: () => {
    return /* @__PURE__ */ e.createElement(Form, null, /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, { className: "row justify-content-between" }, /* @__PURE__ */ e.createElement(Col, { sm: 3 }, /* @__PURE__ */ e.createElement("div", null, "Default"), /* @__PURE__ */ e.createElement(FormGroup, { check: true }, /* @__PURE__ */ e.createElement(Toggle, { label: "Selezionato", defaultChecked: true, disabled: false })), /* @__PURE__ */ e.createElement(FormGroup, { check: true }, /* @__PURE__ */ e.createElement(Toggle, { label: "Non Selezionato", disabled: false }))), /* @__PURE__ */ e.createElement(Col, { sm: 3 }, /* @__PURE__ */ e.createElement("div", null, "Disabilitato"), /* @__PURE__ */ e.createElement(FormGroup, { check: true }, /* @__PURE__ */ e.createElement(Toggle, { label: "Selezionato", defaultChecked: true, disabled: true })), /* @__PURE__ */ e.createElement(FormGroup, { check: true }, /* @__PURE__ */ e.createElement(Toggle, { label: "Non Selezionato", disabled: true }))))));
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
