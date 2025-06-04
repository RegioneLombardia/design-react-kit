var _a, _b, _c;
import { e } from "./index-CkHlViRq.js";
import { C as Container } from "./Container-Dh47g2ou.js";
import { R as Row, C as Col } from "./Col-BILKv079.js";
import { F as Form } from "./Form-HwQfqogR.js";
import { F as FormGroup } from "./FormGroup-i-FNyjZv.js";
import { L as Label } from "./Label-BFRYMZ6g.js";
import { I as Input } from "./Input-DAMspaeT.js";
import "./track-focus-DbJ2CO43.js";
const meta = {
  title: "Linee Guida/Inserimento/Check box"
};
const CheckBox = {
  render: () => {
    return /* @__PURE__ */ e.createElement(Form, null, /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, null, "Default"), /* @__PURE__ */ e.createElement(Col, null, "Disabilitato")), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, null, /* @__PURE__ */ e.createElement(FormGroup, { check: true }, /* @__PURE__ */ e.createElement(Input, { id: "check1", type: "checkbox", defaultChecked: true }), /* @__PURE__ */ e.createElement(Label, { for: "check1", check: true }, "Selezionato"))), /* @__PURE__ */ e.createElement(Col, null, /* @__PURE__ */ e.createElement(FormGroup, { check: true }, /* @__PURE__ */ e.createElement(Input, { id: "check2", type: "checkbox", defaultChecked: true, disabled: true }), /* @__PURE__ */ e.createElement(Label, { for: "check2", check: true }, "Selezionato")))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, null, /* @__PURE__ */ e.createElement(FormGroup, { check: true }, /* @__PURE__ */ e.createElement("input", { type: "checkbox", className: "semi-checked form-control", id: "check3", value: "" }), /* @__PURE__ */ e.createElement(Label, { for: "check3", check: true }, "Mixed"))), /* @__PURE__ */ e.createElement(Col, null, /* @__PURE__ */ e.createElement(FormGroup, { check: true }, /* @__PURE__ */ e.createElement("input", { type: "checkbox", className: "semi-checked form-control", id: "check4", value: "", disabled: true }), /* @__PURE__ */ e.createElement(Label, { for: "check4", check: true }, "Mixed")))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, null, /* @__PURE__ */ e.createElement(FormGroup, { check: true }, /* @__PURE__ */ e.createElement(Input, { id: "check5", type: "checkbox" }), /* @__PURE__ */ e.createElement(Label, { for: "check5", check: true }, "Non Selezionato"))), /* @__PURE__ */ e.createElement(Col, null, /* @__PURE__ */ e.createElement(FormGroup, { check: true }, /* @__PURE__ */ e.createElement(Input, { id: "check6", type: "checkbox", disabled: true }), /* @__PURE__ */ e.createElement(Label, { for: "check6", check: true }, "Non Selezionato"))))));
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
