var _a, _b, _c;
import { e } from "./index-BehpJNG5.js";
import { F as Form } from "./Form-BUAm_fDY.js";
import { C as Container } from "./Container-DM0Kn0QD.js";
import { R as Row, C as Col } from "./Col-CBduUdZh.js";
import { F as FormGroup } from "./FormGroup-D30_tvv_.js";
import { L as Label } from "./Label-DqFgb-in.js";
import { I as Input } from "./Input-B6S2oA6v.js";
const meta = {
  title: "Linee Guida/Inserimento/Radio button"
};
const RadioButton = {
  render: () => {
    return /* @__PURE__ */ e.createElement(Form, null, /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, null, /* @__PURE__ */ e.createElement("div", null, "Default"), /* @__PURE__ */ e.createElement(FormGroup, { check: true, inline: true }, /* @__PURE__ */ e.createElement(Input, { name: "gruppo1", type: "radio", id: "radio1", defaultChecked: true }), /* @__PURE__ */ e.createElement(Label, { check: true, htmlFor: "radio1" }, "Selezionato")), /* @__PURE__ */ e.createElement(FormGroup, { check: true, inline: true }, /* @__PURE__ */ e.createElement(Input, { name: "gruppo1", type: "radio", id: "radio2" }), /* @__PURE__ */ e.createElement(Label, { check: true, htmlFor: "radio2" }, "Non Selezionato"))), /* @__PURE__ */ e.createElement(Col, null, /* @__PURE__ */ e.createElement("div", null, "Disabilitato"), /* @__PURE__ */ e.createElement(FormGroup, { check: true, inline: true }, /* @__PURE__ */ e.createElement(Input, { name: "gruppo2", type: "radio", id: "radio3", defaultChecked: true, disabled: true }), /* @__PURE__ */ e.createElement(Label, { check: true, htmlFor: "radio3" }, "Selezionato")), /* @__PURE__ */ e.createElement(FormGroup, { check: true, inline: true }, /* @__PURE__ */ e.createElement(Input, { name: "gruppo2", type: "radio", id: "radio4", disabled: true }), /* @__PURE__ */ e.createElement(Label, { check: true, htmlFor: "radio4" }, "Non Selezionato"))))));
  }
};
RadioButton.parameters = {
  ...RadioButton.parameters,
  docs: {
    ...(_a = RadioButton.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <Form>\n        <Container>\n          <Row>\n            <Col>\n              <div>Default</div>\n              <FormGroup check inline>\n                <Input name="gruppo1" type="radio" id="radio1" defaultChecked />\n                <Label check htmlFor="radio1">\n                    Selezionato\n                </Label>\n              </FormGroup>\n              <FormGroup check inline>\n                <Input name="gruppo1" type="radio" id="radio2" />\n                <Label check htmlFor="radio2">\n                    Non Selezionato\n                </Label>\n              </FormGroup>\n            </Col>\n            <Col>\n              <div>Disabilitato</div>\n              <FormGroup check inline>\n                <Input name="gruppo2" type="radio" id="radio3" defaultChecked disabled />\n                <Label check htmlFor="radio3">\n                    Selezionato\n                </Label>\n              </FormGroup>\n              <FormGroup check inline>\n                <Input name="gruppo2" type="radio" id="radio4" disabled />\n                <Label check htmlFor="radio4">\n                    Non Selezionato\n                </Label>\n              </FormGroup>\n            </Col>\n          </Row>\n        </Container>\n      </Form>;\n  }\n}',
      ...(_c = (_b = RadioButton.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["RadioButton"];
const RadioButtonStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RadioButton,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  RadioButtonStories as R,
  RadioButton as a
};
