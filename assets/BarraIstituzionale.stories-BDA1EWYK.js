var _a, _b, _c, _d, _e, _f;
import { e } from "./iframe-CMMl7uns.js";
import { B as BarraIstituzionale } from "./BarraIstituzionale-ffEi1vyr.js";
import "./preload-helper-CQrtv1eE.js";
import "./Container-BHfV2rkV.js";
import "./utils-C9kJvCLK.js";
import "./index-DITDp3yo.js";
import "./Col-BB6YdyMy.js";
import "./Button-LCwCZgef.js";
import "./Button-DfA0kbTZ.js";
import "./Icon-BqdlmApZ.js";
import "./track-focus-DbJ2CO43.js";
import "./BottoneHamburger-ChgcLpAh.js";
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
