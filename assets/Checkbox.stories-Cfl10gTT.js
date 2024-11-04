var _a, _b, _c;
import { R as React } from "./index-aC1ZMUrs.js";
import { F as Form } from "./Form-94CbFQsc.js";
import { C as Container } from "./Container-BSU_5rqZ.js";
import { R as Row, C as Col } from "./Col-sbjB5dMm.js";
import { F as FormGroup } from "./FormGroup-Dgycp2JI.js";
import { L as Label } from "./Label-5MRzqQ-o.js";
import { I as Input } from "./Input-CZz2SKjT.js";
const meta = {
  title: "Linee Guida/Inserimento/Check box"
};
const CheckBox = {
  render: () => {
    return /* @__PURE__ */ React.createElement(Form, null, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, null, "Default"), /* @__PURE__ */ React.createElement(Col, null, "Disabilitato")), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(FormGroup, { check: true }, /* @__PURE__ */ React.createElement(Input, { id: "check1", type: "checkbox", defaultChecked: true }), /* @__PURE__ */ React.createElement(Label, { for: "check1", check: true }, "Selezionato"))), /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(FormGroup, { check: true }, /* @__PURE__ */ React.createElement(Input, { id: "check2", type: "checkbox", defaultChecked: true, disabled: true }), /* @__PURE__ */ React.createElement(Label, { for: "check2", check: true }, "Selezionato")))), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(FormGroup, { check: true }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", className: "semi-checked form-control", id: "check3", value: "" }), /* @__PURE__ */ React.createElement(Label, { for: "check3", check: true }, "Mixed"))), /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(FormGroup, { check: true }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", className: "semi-checked form-control", id: "check4", value: "", disabled: true }), /* @__PURE__ */ React.createElement(Label, { for: "check4", check: true }, "Mixed")))), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(FormGroup, { check: true }, /* @__PURE__ */ React.createElement(Input, { id: "check5", type: "checkbox" }), /* @__PURE__ */ React.createElement(Label, { for: "check5", check: true }, "Non Selezionato"))), /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(FormGroup, { check: true }, /* @__PURE__ */ React.createElement(Input, { id: "check6", type: "checkbox", disabled: true }), /* @__PURE__ */ React.createElement(Label, { for: "check6", check: true }, "Non Selezionato"))))));
  }
};
CheckBox.parameters = {
  ...CheckBox.parameters,
  docs: {
    ...(_a = CheckBox.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <Form>\n        <Container>\n          <Row>\n            <Col>Default</Col>\n            <Col>Disabilitato</Col>\n          </Row>\n          <Row>\n            <Col>\n              <FormGroup check>\n                <Input id="check1" type="checkbox" defaultChecked />\n                <Label for="check1" check>Selezionato</Label>\n              </FormGroup>\n            </Col>\n            <Col>\n              <FormGroup check>\n                <Input id="check2" type="checkbox" defaultChecked disabled />\n                <Label for="check2" check>Selezionato</Label>\n              </FormGroup>\n            </Col>\n          </Row>\n          <Row>\n            <Col>\n              <FormGroup check>\n              <input type="checkbox" className="semi-checked form-control" id="check3" value="" />\n              <Label for="check3" check>Mixed</Label>\n              </FormGroup>\n            </Col>\n            <Col>\n              <FormGroup check>\n                <input type="checkbox" className="semi-checked form-control" id="check4" value="" disabled />\n                <Label for="check4" check>Mixed</Label>\n              </FormGroup>\n            </Col>\n          </Row>\n          <Row>\n            <Col>\n              <FormGroup check>\n              <Input id="check5" type="checkbox" />\n              <Label for="check5" check>Non Selezionato</Label>\n              </FormGroup>\n            </Col>\n            <Col>\n              <FormGroup check>\n                <Input id="check6" type="checkbox" disabled />\n                <Label for="check6" check>Non Selezionato</Label>\n              </FormGroup>\n            </Col>\n          </Row>\n        </Container>\n      </Form>;\n  }\n}',
      ...(_c = (_b = CheckBox.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["CheckBox"];
const CheckboxStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CheckBox,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  CheckboxStories as C,
  CheckBox as a
};
