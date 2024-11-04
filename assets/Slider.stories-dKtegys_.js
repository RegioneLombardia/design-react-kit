var _a, _b, _c;
import { R as React } from "./index-aC1ZMUrs.js";
import { F as Form } from "./Form-94CbFQsc.js";
import { F as FormGroup } from "./FormGroup-Dgycp2JI.js";
import { I as Input } from "./Input-CZz2SKjT.js";
const meta = {
  title: "Linee Guida/Call to action/Slider"
};
const Slider = {
  render: () => {
    return /* @__PURE__ */ React.createElement(Form, null, /* @__PURE__ */ React.createElement(FormGroup, null, /* @__PURE__ */ React.createElement(Input, { id: "exampleRange", name: "range", type: "range", className: "form-range" })));
  }
};
Slider.parameters = {
  ...Slider.parameters,
  docs: {
    ...(_a = Slider.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <Form>\n        <FormGroup>\n          <Input id="exampleRange" name="range" type="range" className="form-range" />\n        </FormGroup>\n      </Form>;\n  }\n}',
      ...(_c = (_b = Slider.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["Slider"];
const SliderStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Slider,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  SliderStories as S,
  Slider as a
};
