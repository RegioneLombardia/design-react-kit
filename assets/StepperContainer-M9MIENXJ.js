import { e } from "./iframe-CMMl7uns.js";
import { c as classNames } from "./index-DITDp3yo.js";
const StepperContainer = ({
  tag = "div",
  mobile,
  dark,
  testId,
  className,
  ...attributes
}) => {
  const Tag = tag;
  const wrapperClass = classNames("steppers", className, { "bg-dark": dark }, { "mobile-examples": mobile });
  return /* @__PURE__ */ e.createElement(Tag, { ...attributes, className: wrapperClass, "data-testid": testId });
};
StepperContainer.__docgenInfo = { "description": "", "methods": [], "displayName": "StepperContainer", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'div'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Badge" }, "dark": { "required": false, "tsType": { "name": "boolean" }, "description": "Abilita il tema scuro per il componente Stepper" }, "mobile": { "required": false, "tsType": { "name": "boolean" }, "description": "Abilita la navigazione per mobile" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  StepperContainer as S
};
