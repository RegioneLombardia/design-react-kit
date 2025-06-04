var _a, _b, _c, _d, _e, _f;
import { e } from "./index-CkHlViRq.js";
import { B as BarraIstituzionale } from "./BarraIstituzionale-BevsDI8e.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./Container-Dh47g2ou.js";
import "./utils-o7gD2GSt.js";
import "./index-xoeSAV6i.js";
import "./Col-BILKv079.js";
import "./Button-Bbm-EeTy.js";
import "./Button-BIZ5TMd_.js";
import "./Icon-F0eg8ks0.js";
import "./iframe-CkfUY0Fy.js";
import "./track-focus-DbJ2CO43.js";
import "./BottoneHamburger-BU8ylzdT.js";
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
