var _a, _b, _c, _d, _e, _f;
import { R as React, r as reactExports } from "./index-aC1ZMUrs.js";
import { I as Icon } from "./Icon-DAq5ZiWt.js";
import { U as UncontrolledTooltip } from "./UncontrolledTooltip-CunqDPtd.js";
import { C as Container } from "./Container-BSU_5rqZ.js";
import { R as Row, C as Col } from "./Col-sbjB5dMm.js";
const meta = {
  title: "Linee Guida/Inserimento/Tooltip"
};
const EsempioBase = {
  render: () => {
    return /* @__PURE__ */ React.createElement(EsempioBaseHook, null);
  }
};
const EsempioBaseHook = () => {
  const ref1 = reactExports.useRef(null);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { ref: ref1, tabIndex: 0 }, "Testo esempio base", /* @__PURE__ */ React.createElement("sup", null, /* @__PURE__ */ React.createElement(Icon, { color: "info", icon: "it-info-circle", size: "xs" }))), /* @__PURE__ */ React.createElement(UncontrolledTooltip, { placement: "top", target: ref1 }, "Primo tooltip"));
};
const PosizionamentoHooks = () => {
  const ref1 = reactExports.useRef(null);
  const ref2 = reactExports.useRef(null);
  const ref3 = reactExports.useRef(null);
  const ref4 = reactExports.useRef(null);
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, { sm: 4 }, /* @__PURE__ */ React.createElement("span", { ref: ref1, tabIndex: 0 }, "Tooltip in alto", /* @__PURE__ */ React.createElement("sup", null, /* @__PURE__ */ React.createElement(Icon, { color: "info", icon: "it-info-circle", size: "xs" })))), /* @__PURE__ */ React.createElement(Col, { sm: 4 }, /* @__PURE__ */ React.createElement("span", { ref: ref2, tabIndex: 0 }, "Tooltip a destra", /* @__PURE__ */ React.createElement("sup", null, /* @__PURE__ */ React.createElement(Icon, { color: "info", icon: "it-info-circle", size: "xs" }))))), /* @__PURE__ */ React.createElement(Row, { className: "mt-4" }, /* @__PURE__ */ React.createElement(Col, { sm: 4 }, /* @__PURE__ */ React.createElement("span", { ref: ref3, tabIndex: 0 }, "Tooltip in basso", /* @__PURE__ */ React.createElement("sup", null, /* @__PURE__ */ React.createElement(Icon, { color: "info", icon: "it-info-circle", size: "xs" })))), /* @__PURE__ */ React.createElement(Col, { sm: 4 }, /* @__PURE__ */ React.createElement("span", { ref: ref4, tabIndex: 0 }, "Tooltip a sinistra", /* @__PURE__ */ React.createElement("sup", null, /* @__PURE__ */ React.createElement(Icon, { color: "info", icon: "it-info-circle", size: "xs" }))))), /* @__PURE__ */ React.createElement(UncontrolledTooltip, { placement: "top", target: ref1 }, "Tooltip on top"), /* @__PURE__ */ React.createElement(UncontrolledTooltip, { placement: "right", target: ref2 }, "Tooltip on right"), /* @__PURE__ */ React.createElement(UncontrolledTooltip, { placement: "bottom", target: ref3 }, "Tooltip on bottom"), /* @__PURE__ */ React.createElement(UncontrolledTooltip, { placement: "left", target: ref4 }, "Tooltip on left"));
};
const Posizionamento = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  },
  render: () => /* @__PURE__ */ React.createElement(PosizionamentoHooks, null)
};
EsempioBase.parameters = {
  ...EsempioBase.parameters,
  docs: {
    ...(_a = EsempioBase.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <EsempioBaseHook />;\n  }\n}",
      ...(_c = (_b = EsempioBase.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Posizionamento.parameters = {
  ...Posizionamento.parameters,
  docs: {
    ...(_d = Posizionamento.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  },\n  render: () => <PosizionamentoHooks />\n}',
      ...(_f = (_e = Posizionamento.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["EsempioBase", "Posizionamento"];
const TooltipStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EsempioBase,
  Posizionamento,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  EsempioBase as E,
  Posizionamento as P,
  TooltipStories as T
};
