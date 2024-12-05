import { e } from "./index-BehpJNG5.js";
import { c as classNames } from "./index-D3ELxcOV.js";
const contentStyleLight = {
  height: "400px",
  border: "2px dashed #eee",
  background: "#fafafa",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#333"
};
const contentStyleDark = {
  height: "400px",
  border: "2px dashed #eee",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#EEE",
  borderColor: "#aaa",
  background: "#17324d",
  opacity: 0.5
};
const StepperContent = ({ tag = "div", className, dark, ...attributes }) => {
  const Tag = tag;
  const classes = classNames("steppers-content", className);
  return /* @__PURE__ */ e.createElement(
    Tag,
    {
      ...attributes,
      className: classes,
      style: dark && contentStyleDark || contentStyleLight,
      "aria-live": "polite"
    }
  );
};
StepperContent.__docgenInfo = { "description": "", "methods": [], "displayName": "StepperContent", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'div'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Badge" }, "dark": { "required": false, "tsType": { "name": "boolean" }, "description": "Abilita il tema scuro per il componente StepperContent" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const StepperNav = ({ tag = "nav", testId, className, ...attributes }) => {
  const Tag = tag;
  const wrapperClass = classNames("steppers-nav", className);
  return /* @__PURE__ */ e.createElement(Tag, { ...attributes, className: wrapperClass, "data-testid": testId });
};
StepperNav.__docgenInfo = { "description": "", "methods": [], "displayName": "StepperNav", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'nav'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Badge" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  StepperContent as S,
  StepperNav as a
};