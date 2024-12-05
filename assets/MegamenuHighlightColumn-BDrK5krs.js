import { e } from "./index-BehpJNG5.js";
import { C as Col, R as Row } from "./Col-CBduUdZh.js";
import { c as classNames } from "./index-D3ELxcOV.js";
const MegamenuHighlightColumn = ({ description, className, children, ...attributes }) => {
  const classes = classNames(className, "it-vertical", {
    "it-description": description
  });
  return /* @__PURE__ */ e.createElement(Col, { ...attributes }, /* @__PURE__ */ e.createElement(Row, { className: "max-height-col" }, /* @__PURE__ */ e.createElement(Col, { className: classes }, description ? /* @__PURE__ */ e.createElement("div", { className: "description-content" }, children) : /* @__PURE__ */ e.createElement(e.Fragment, null, children))));
};
MegamenuHighlightColumn.__docgenInfo = { "description": "", "methods": [], "displayName": "MegamenuHighlightColumn", "props": { "description": { "required": false, "tsType": { "name": "boolean" }, "description": "Quanto abilitato gestisce il contenuto della colonna come una sezione che può contentere immagini, testo, ect." }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Megamenu Highlight Column" } }, "composes": ["ColProps"] };
export {
  MegamenuHighlightColumn as M
};
