import { e } from "./iframe-CywKGv0B.js";
import { c as classNames } from "./index-BAkpI1zY.js";
const Sidebar = ({
  className,
  testId,
  tag = "div",
  secondary = false,
  left = false,
  right = false,
  dark = false,
  ...attributes
}) => {
  const Tag = tag;
  const wrapperClasses = classNames("sidebar-wrapper", className, {
    "it-line-left-side": left,
    "it-line-right-side": right,
    "theme-dark": dark
  });
  const wrapperClassesLinkList = classNames("sidebar-linklist-wrapper", {
    "linklist-secondary": secondary
  });
  if (secondary) {
    return /* @__PURE__ */ e.createElement(Tag, { ...attributes, className: wrapperClassesLinkList, "data-testid": testId });
  }
  return /* @__PURE__ */ e.createElement(Tag, { className: wrapperClasses, "data-testid": testId }, /* @__PURE__ */ e.createElement(Tag, { ...attributes, className: wrapperClassesLinkList }));
};
Sidebar.__docgenInfo = { "description": "", "methods": [], "displayName": "Sidebar", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'div'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Sidebar" }, "secondary": { "required": false, "tsType": { "name": "boolean" }, "description": "Indica se il componente Sideebar corrente è di tipo annidato o no", "defaultValue": { "value": "false", "computed": false } }, "left": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando attivo aggiunge una linea separatrice a sinistra", "defaultValue": { "value": "false", "computed": false } }, "right": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando attivo aggiunge una linea separatrice a destra", "defaultValue": { "value": "false", "computed": false } }, "dark": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando attivo cambia il tema del componente Sidebar rendendola scura", "defaultValue": { "value": "false", "computed": false } }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  Sidebar as S
};
