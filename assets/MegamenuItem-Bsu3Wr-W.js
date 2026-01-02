import { e } from "./iframe-CHwcEDm1.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-CEw0lNTS.js";
import { D as DropdownMenu } from "./DropdownMenu-Cz5TdHwb.js";
import { c as classNames } from "./index-BhjGuW_H.js";
const MegamenuItem = ({ itemName, className, children, ...attributes }) => {
  const classes = classNames(className, "megamenu");
  const [dropdownOpen, setDropdownOpen] = e.useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggleClasses = classNames("px-lg-2", "px-xl-3", dropdownOpen ? "show" : "");
  return /* @__PURE__ */ e.createElement(Dropdown, { className: classes, inNavbar: true, ...attributes, isOpen: dropdownOpen, toggle }, /* @__PURE__ */ e.createElement(DropdownToggle, { inNavbar: true, caret: true, className: toggleClasses }, /* @__PURE__ */ e.createElement("span", null, itemName)), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement("div", { className: "megamenu pb-5 pt-3 py-lg-0" }, children)));
};
MegamenuItem.__docgenInfo = { "description": "", "methods": [], "displayName": "MegamenuItem", "props": { "itemName": { "required": true, "tsType": { "name": "string" }, "description": "Etichetta del megamenu visibile all'interno della barra di navigazione" }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Dropdown" } }, "composes": ["HTMLAttributes"] };
export {
  MegamenuItem as M
};
