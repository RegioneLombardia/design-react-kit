import { c as classNames } from "./index-xoeSAV6i.js";
import { R as React } from "./index-aC1ZMUrs.js";
import { I as Icon } from "./Icon-DAq5ZiWt.js";
const StepperHeader = ({ tag = "div", testId, className, children, ...attributes }) => {
  var _a;
  const Tag = tag;
  const wrapperClass = classNames("steppers-header", className);
  const isMobile = ((_a = children == null ? void 0 : children.props) == null ? void 0 : _a.variant) === "mobile";
  return /* @__PURE__ */ React.createElement(Tag, { ...attributes, className: wrapperClass, "data-testid": testId }, isMobile ? /* @__PURE__ */ React.createElement("span", null, children) : /* @__PURE__ */ React.createElement("ul", null, children));
};
StepperHeader.__docgenInfo = { "description": "", "methods": [], "displayName": "StepperHeader", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'div'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente StepperHeader" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const variants = {
  confirmed: "confirmed",
  active: "active",
  done: "done",
  mobile: "steppers-index",
  // @deprecated
  "steppers-index": "steppers-index"
};
const StepperHeaderElement = ({
  tag = "li",
  variant,
  appendIcon,
  prependIcon,
  icon,
  iconName,
  noLine,
  stepperNumber,
  testId,
  children,
  className,
  ...attributes
}) => {
  const Tag = tag;
  const wrapperClasses = classNames(variant ? variants[variant] : "", className, {
    "no-line": noLine
  });
  const iconClass = classNames("icon", "steppers-success");
  const spanClass = classNames("steppers-number");
  const iconToAppend = appendIcon || icon;
  const iconToPrepend = prependIcon || iconName;
  return /* @__PURE__ */ React.createElement(Tag, { ...attributes, className: wrapperClasses, "data-testid": testId }, iconToPrepend && /* @__PURE__ */ React.createElement(Icon, { icon: iconToPrepend }), stepperNumber && /* @__PURE__ */ React.createElement("span", { className: spanClass }, stepperNumber), children, iconToAppend && /* @__PURE__ */ React.createElement(Icon, { icon: iconToAppend, className: iconClass }));
};
StepperHeaderElement.__docgenInfo = { "description": "", "methods": [], "displayName": "StepperHeaderElement", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'li'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente StepperHeader" }, "variant": { "required": false, "tsType": { "name": "union", "raw": "keyof typeof variants", "elements": [{ "name": "literal", "value": "confirmed" }, { "name": "literal", "value": "active" }, { "name": "literal", "value": "done" }, { "name": "literal", "value": "mobile" }, { "name": "literal", "value": "'steppers-index'" }] }, "description": "Il tipo di step:\n* confirmed (confermato),\n* active (attivo - su mobile viene mostrato solo questo)\n* done (completato)\n* mobile (visibile solo su mobile, usato per mostrare lo stato attuale di progresso)\n* steppers-index (deprecato) usare mobile" }, "appendIcon": { "required": false, "tsType": { "name": "string" }, "description": "Icona da mostrare alla destra dell'etichetta dello step" }, "prependIcon": { "required": false, "tsType": { "name": "string" }, "description": "Icona da mostrare alla sinistra dell'etichetta dello step" }, "stepperNumber": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Utilizzare questo attributo per elementi aggiuntivi da mostrare su dispositivi mobile per lo step attivo" }, "noLine": { "required": false, "tsType": { "name": "boolean" }, "description": "Nasconde il bordo inferiore azzurro per lo step" }, "icon": { "required": false, "tsType": { "name": "string" }, "description": "@deprecated Usare `appendIcon`" }, "iconName": { "required": false, "tsType": { "name": "string" }, "description": "@deprecated Usare `prependIcon`" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  StepperHeader as S,
  StepperHeaderElement as a
};
