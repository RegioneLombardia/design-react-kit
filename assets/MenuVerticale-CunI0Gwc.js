import { R as React } from "./index-aC1ZMUrs.js";
import { c as classNames } from "./index-xoeSAV6i.js";
const MenuVerticale = ({
  className = "",
  collapse = false,
  children = ""
}) => {
  const wrapperClasses = classNames("it25-vertical-menu", className, {
    "collapse": collapse
  });
  return /* @__PURE__ */ React.createElement("div", { className: "it25-sidebar" }, /* @__PURE__ */ React.createElement("nav", { className: wrapperClasses, id: "it25-main-nav" }, /* @__PURE__ */ React.createElement("div", { className: "sidebar-wrapper" }, children)));
};
MenuVerticale.__docgenInfo = { "description": "", "methods": [], "displayName": "MenuVerticale", "props": { "children": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Inserire la Sidebar che deve comparire automaticamente su schermi ampi o premendo il bottone hamburger nella barra ist. su quelli piccoli", "defaultValue": { "value": '""', "computed": false } }, "collapse": { "required": false, "tsType": { "name": "boolean" }, "description": 'Stato iniziale del "collapse" del componente *', "defaultValue": { "value": "false", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Sidebar", "defaultValue": { "value": '""', "computed": false } } }, "composes": ["HTMLAttributes"] };
export {
  MenuVerticale as M
};
