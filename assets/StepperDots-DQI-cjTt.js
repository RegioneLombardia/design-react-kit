import { R as React } from "./index-aC1ZMUrs.js";
import { c as classNames } from "./index-xoeSAV6i.js";
const StepperDots = ({ tag = "ul", className, testId, ...attributes }) => {
  const Tag = tag;
  const wrapperClass = classNames("steppers-dots", className);
  return /* @__PURE__ */ React.createElement(Tag, { ...attributes, className: wrapperClass, "data-testid": testId });
};
StepperDots.__docgenInfo = { "description": "", "methods": [], "displayName": "StepperDots", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'ul'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Badge" }, "dark": { "required": false, "tsType": { "name": "boolean" }, "description": "Abilita il tema scuro per il componente StepperDots" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  StepperDots as S
};
