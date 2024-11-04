var _a, _b, _c;
import { R as React } from "./index-aC1ZMUrs.js";
import { R as Row, C as Col } from "./Col-sbjB5dMm.js";
import { i as iconsList, I as Icon } from "./Icon-Bs2HTC1s.js";
const meta = {
  title: "Linee Guida/Utilità/Icone"
};
const ListaIcone = {
  render: () => {
    return /* @__PURE__ */ React.createElement(Row, null, iconsList.map((icon) => /* @__PURE__ */ React.createElement(Col, { md: {
      size: 6
    }, lg: {
      size: 4
    }, key: icon }, /* @__PURE__ */ React.createElement(Icon, { icon }), " ", icon)));
  }
};
ListaIcone.parameters = {
  ...ListaIcone.parameters,
  docs: {
    ...(_a = ListaIcone.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <Row>\n        {icons.map(icon => <Col md={{\n        size: 6\n      }} lg={{\n        size: 4\n      }} key={icon}>\n            <Icon icon={icon} />&nbsp;{icon}\n          </Col>)}\n      </Row>;\n  }\n}",
      ...(_c = (_b = ListaIcone.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["ListaIcone"];
const IconeStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ListaIcone,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  IconeStories as I,
  ListaIcone as L
};
