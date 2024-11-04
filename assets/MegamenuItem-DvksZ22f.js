import { R as React } from "./index-aC1ZMUrs.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-qEzyw4-F.js";
import { D as DropdownMenu } from "./DropdownMenu-BVvApC7Y.js";
import { c as classNames } from "./index-xoeSAV6i.js";
const MegamenuItem = ({ itemName, className, children, ...attributes }) => {
  const classes = classNames(className, "megamenu");
  const toggleClasses = classNames("px-lg-2", "px-xl-3");
  return /* @__PURE__ */ React.createElement(Dropdown, { className: classes, inNavbar: true, ...attributes }, /* @__PURE__ */ React.createElement(DropdownToggle, { inNavbar: true, caret: true, className: toggleClasses }, /* @__PURE__ */ React.createElement("span", null, itemName)), /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement("div", { className: "megamenu pb-5 pt-3 py-lg-0" }, children)));
};
MegamenuItem.__docgenInfo = { "description": "", "methods": [], "displayName": "MegamenuItem", "props": { "itemName": { "required": true, "tsType": { "name": "string" }, "description": "Etichetta del megamenu visibile all'interno della barra di navigazione" }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Dropdown" } }, "composes": ["HTMLAttributes"] };
export {
  MegamenuItem as M
};
