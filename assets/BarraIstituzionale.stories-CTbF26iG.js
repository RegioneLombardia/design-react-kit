var _a, _b, _c, _d, _e, _f;
import { e } from "./iframe-CywKGv0B.js";
import { B as BarraIstituzionale } from "./BarraIstituzionale-CyuUaUcl.js";
import "./preload-helper-CQrtv1eE.js";
import "./Container-CmXOe7U0.js";
import "./utils-BbqmM4jY.js";
import "./index-BAkpI1zY.js";
import "./Col-CzpBcQxN.js";
import "./Button-OS1IXdY8.js";
import "./Button-BxWlP0Fe.js";
import "./Icon-CfKGR1lx.js";
import "./track-focus-DbJ2CO43.js";
import "./BottoneHamburger-BYryeFgg.js";
const meta = {
  title: "Linee Guida/Componenti Principali/Header/BarraIstituzionale",
  component: BarraIstituzionale,
  args: {
    acronym: "ACCREDITAS",
    applicationName: "Sistema di accreditamento"
  }
};
const BarraBase = {
  render: ({
    acronym,
    applicationName
  }) => /* @__PURE__ */ e.createElement(BarraIstituzionale, { acronym, applicationName })
};
const BarraSearch = {
  render: ({
    applicationName
  }) => /* @__PURE__ */ e.createElement(BarraIstituzionale, { applicationName, search: true })
};
BarraBase.parameters = {
  ...BarraBase.parameters,
  docs: {
    ...(_a = BarraBase.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: ({\n    acronym,\n    applicationName\n  }) => <BarraIstituzionale acronym={acronym} applicationName={applicationName} />\n}",
      ...(_c = (_b = BarraBase.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
BarraSearch.parameters = {
  ...BarraSearch.parameters,
  docs: {
    ...(_d = BarraSearch.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: ({\n    applicationName\n  }) => <BarraIstituzionale applicationName={applicationName} search={true} />\n}",
      ...(_f = (_e = BarraSearch.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["BarraBase", "BarraSearch"];
export {
  BarraBase,
  BarraSearch,
  __namedExportsOrder,
  meta as default
};
