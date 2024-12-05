var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { e } from "./index-BehpJNG5.js";
import { T as Toggle } from "./Toggle-B0dg8eZd.js";
import { R as Row, C as Col } from "./Col-CBduUdZh.js";
import { F as Form } from "./Form-BUAm_fDY.js";
import { F as FormGroup } from "./FormGroup-D30_tvv_.js";
import { F as FormText } from "./FormText-DsMeXZ_s.js";
const meta = {
  title: "Documentazione/Form/Toggles",
  component: Toggle
};
const Toggles = {
  render: () => {
    return /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: "6" }, /* @__PURE__ */ e.createElement(FormGroup, { check: true }, /* @__PURE__ */ e.createElement(Toggle, { label: "Label dell'interruttore 1", disabled: false }))));
  }
};
const TogglesDisabilitate = {
  render: () => {
    return /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: "6" }, /* @__PURE__ */ e.createElement(FormGroup, { check: true }, /* @__PURE__ */ e.createElement(Toggle, { label: "Label dell'interruttore 1", disabled: true }))));
  }
};
const GruppiDiToggles = {
  render: () => {
    return /* @__PURE__ */ e.createElement(Row, { className: "m-5" }, /* @__PURE__ */ e.createElement(Col, { md: 5 }, /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("legend", null, "Gruppo di toggle"), /* @__PURE__ */ e.createElement(Form, null, /* @__PURE__ */ e.createElement(FormGroup, { check: true, className: "form-check-group" }, /* @__PURE__ */ e.createElement(Toggle, { defaultChecked: true, label: "Toggle acceso", id: "toggleEsempio3a" })), /* @__PURE__ */ e.createElement(FormGroup, { check: true, className: "form-check-group" }, /* @__PURE__ */ e.createElement(Toggle, { label: "Toggle spento", id: "toggleEsempio3b" })), /* @__PURE__ */ e.createElement(FormGroup, { check: true, className: "form-check-group" }, /* @__PURE__ */ e.createElement(Toggle, { disabled: true, label: "Toggle disabilitato", id: "toggleEsempio3c" }))))), /* @__PURE__ */ e.createElement(Col, { md: 2 }), /* @__PURE__ */ e.createElement(Col, { md: 5 }, /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("legend", null, "Gruppo di toggle"), /* @__PURE__ */ e.createElement(Form, null, /* @__PURE__ */ e.createElement(FormGroup, { check: true, className: "form-check-group" }, /* @__PURE__ */ e.createElement(Toggle, { defaultChecked: true, label: "Toggle acceso", id: "toggleEsempio3d" }), /* @__PURE__ */ e.createElement(FormText, { id: "toggleEsempio3dDescription", color: "muted" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero")), /* @__PURE__ */ e.createElement(FormGroup, { check: true, className: "form-check-group" }, /* @__PURE__ */ e.createElement(Toggle, { label: "Toggle spento", id: "toggleEsempio3e" }), /* @__PURE__ */ e.createElement(FormText, { id: "toggleEsempio3eDescription", color: "muted" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero")), /* @__PURE__ */ e.createElement(FormGroup, { check: true, className: "form-check-group" }, /* @__PURE__ */ e.createElement(Toggle, { disabled: true, label: "Toggle disabilitato", id: "toggleEsempio3f" }), /* @__PURE__ */ e.createElement(FormText, { id: "toggleEsempio3fDescription", color: "muted" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero"))))));
  }
};
Toggles.parameters = {
  ...Toggles.parameters,
  docs: {
    ...(_a = Toggles.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  render: () => {
    return <Row>
                <Col sm="6">
                    <FormGroup check>
                        <Toggle label="Label dell'interruttore 1" disabled={false} />
                    </FormGroup>
                </Col>
            </Row>;
  }
}`,
      ...(_c = (_b = Toggles.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
TogglesDisabilitate.parameters = {
  ...TogglesDisabilitate.parameters,
  docs: {
    ...(_d = TogglesDisabilitate.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: `{
  render: () => {
    return <Row>
                <Col sm="6">
                    <FormGroup check>
                        <Toggle label="Label dell'interruttore 1" disabled={true} />
                    </FormGroup>
                </Col>
            </Row>;
  }
}`,
      ...(_f = (_e = TogglesDisabilitate.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
GruppiDiToggles.parameters = {
  ...GruppiDiToggles.parameters,
  docs: {
    ...(_g = GruppiDiToggles.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <Row className="m-5">\n                <Col md={5}>\n                    <fieldset>\n                        <legend>Gruppo di toggle</legend>\n                        <Form>\n                            <FormGroup check className="form-check-group">\n                                <Toggle defaultChecked label="Toggle acceso" id="toggleEsempio3a" />\n                            </FormGroup>\n                            <FormGroup check className="form-check-group">\n                                <Toggle label="Toggle spento" id="toggleEsempio3b" />\n                            </FormGroup>\n                            <FormGroup check className="form-check-group">\n                                <Toggle disabled label="Toggle disabilitato" id="toggleEsempio3c" />\n                            </FormGroup>\n                        </Form>\n                    </fieldset>\n                </Col>\n                <Col md={2} />\n                <Col md={5}>\n                    <fieldset>\n                        <legend>Gruppo di toggle</legend>\n                        <Form>\n                            <FormGroup check className="form-check-group">\n                                <Toggle defaultChecked label="Toggle acceso" id="toggleEsempio3d" />\n                                <FormText id="toggleEsempio3dDescription" color="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>\n                            </FormGroup>\n                            <FormGroup check className="form-check-group">\n                                <Toggle label="Toggle spento" id="toggleEsempio3e" />\n                                <FormText id="toggleEsempio3eDescription" color="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>\n                            </FormGroup>\n                            <FormGroup check className="form-check-group">\n                                <Toggle disabled label="Toggle disabilitato" id="toggleEsempio3f" />\n                                <FormText id="toggleEsempio3fDescription" color="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>\n                            </FormGroup>\n                        </Form>\n                    </fieldset>\n                </Col>\n            </Row>;\n  }\n}',
      ...(_i = (_h = GruppiDiToggles.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["Toggles", "TogglesDisabilitate", "GruppiDiToggles"];
const TogglesStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GruppiDiToggles,
  Toggles,
  TogglesDisabilitate,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  GruppiDiToggles as G,
  TogglesStories as T,
  Toggles as a,
  TogglesDisabilitate as b
};