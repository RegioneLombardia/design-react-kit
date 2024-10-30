import { c as classNames } from "./index-xoeSAV6i.js";
import { R as React } from "./index-aC1ZMUrs.js";
import { D as Dropdown$1, a as DropdownToggle$1 } from "./DropdownToggle-CpBYzZpr.js";
import { I as Icon } from "./Icon-DAq5ZiWt.js";
const Dropdown = ({
  className,
  testId,
  children,
  inNavbar,
  textCenter,
  theme,
  ...attributes
}) => {
  const classes = classNames(className, {
    dropdown: true,
    "text-center": textCenter,
    "nav-item": inNavbar
  });
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return /* @__PURE__ */ React.createElement(
    Dropdown$1,
    {
      menuRole: "menu",
      color: theme,
      isOpen,
      toggle,
      className: classes,
      "data-testid": testId,
      ...attributes,
      inNavbar,
      nav: inNavbar
    },
    children
  );
};
Dropdown.__docgenInfo = { "description": "", "methods": [], "displayName": "Dropdown", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "" }, "inNavbar": { "required": false, "tsType": { "name": "boolean" }, "description": "" }, "textCenter": { "required": false, "tsType": { "name": "boolean" }, "description": "" }, "theme": { "required": false, "tsType": { "name": "string" }, "description": "" }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Button" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const DropdownToggle = ({
  className,
  testId,
  children,
  caret,
  inNavbar,
  color = "",
  tag = "button"
}) => {
  const Tag = tag === "a" || inNavbar ? "a" : "button";
  const classes = classNames(className, {
    "btn-dropdown": Tag === "a" && !inNavbar,
    "dropdown-toggle": true,
    "nav-link": inNavbar,
    btn: tag === "button"
  });
  let colorClass = "";
  if (tag === "button" && color) {
    colorClass = `btn-${color}`;
  }
  const iconClasses = classNames({
    "icon-expand": true,
    "icon-sm": !inNavbar,
    "icon-xs": inNavbar,
    "ms-1": inNavbar,
    "icon-light": Tag.valueOf() !== "a" ? true : false,
    color: color ? "white" : "primary"
  });
  return /* @__PURE__ */ React.createElement(
    DropdownToggle$1,
    {
      tag: Tag,
      "data-testid": testId,
      role: Tag.valueOf() === "a" ? "button" : "link",
      className: `${classes} ${colorClass}`,
      nav: inNavbar
    },
    children,
    caret === true ? /* @__PURE__ */ React.createElement(Icon, { icon: "it-expand", className: iconClasses }) : null
  );
};
DropdownToggle.__docgenInfo = { "description": "", "methods": [], "displayName": "DropdownToggle", "props": { "caret": { "required": false, "tsType": { "name": "boolean" }, "description": "" }, "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "", "defaultValue": { "value": "'button'", "computed": false } }, "inNavbar": { "required": false, "tsType": { "name": "boolean" }, "description": "" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" }, "color": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Button", "defaultValue": { "value": "''", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "" }, "outline": { "required": false, "tsType": { "name": "boolean" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  Dropdown as D,
  DropdownToggle as a
};
