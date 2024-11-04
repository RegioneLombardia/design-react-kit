var _a, _b, _c;
import { R as React } from "./index-aC1ZMUrs.js";
import { F as Form } from "./Form-94CbFQsc.js";
import { C as Container } from "./Container-BSU_5rqZ.js";
import { R as Row, C as Col } from "./Col-sbjB5dMm.js";
import { F as FormGroup } from "./FormGroup-Dgycp2JI.js";
import { L as Label } from "./Label-5MRzqQ-o.js";
import { I as Input } from "./Input-CZz2SKjT.js";
const meta = {
  title: "Linee Guida/Inserimento/Radio button"
};
const RadioButton = {
  render: () => {
    return /* @__PURE__ */ React.createElement(Form, null, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("div", null, "Default"), /* @__PURE__ */ React.createElement(FormGroup, { check: true, inline: true }, /* @__PURE__ */ React.createElement(Input, { name: "gruppo1", type: "radio", id: "radio1", defaultChecked: true }), /* @__PURE__ */ React.createElement(Label, { check: true, htmlFor: "radio1" }, "Selezionato")), /* @__PURE__ */ React.createElement(FormGroup, { check: true, inline: true }, /* @__PURE__ */ React.createElement(Input, { name: "gruppo1", type: "radio", id: "radio2" }), /* @__PURE__ */ React.createElement(Label, { check: true, htmlFor: "radio2" }, "Non Selezionato"))), /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("div", null, "Disabilitato"), /* @__PURE__ */ React.createElement(FormGroup, { check: true, inline: true }, /* @__PURE__ */ React.createElement(Input, { name: "gruppo2", type: "radio", id: "radio3", defaultChecked: true, disabled: true }), /* @__PURE__ */ React.createElement(Label, { check: true, htmlFor: "radio3" }, "Selezionato")), /* @__PURE__ */ React.createElement(FormGroup, { check: true, inline: true }, /* @__PURE__ */ React.createElement(Input, { name: "gruppo2", type: "radio", id: "radio4", disabled: true }), /* @__PURE__ */ React.createElement(Label, { check: true, htmlFor: "radio4" }, "Non Selezionato"))))));
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
