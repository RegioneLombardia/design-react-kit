import { r as reactExports } from "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
const component = ({ title, titleId, ...props }) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      xmlSpace: "preserve",
      enableBackground: "new 0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ reactExports.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ reactExports.createElement("path", { d: "m12.7 12 6.7 6.6-.8.8-6.6-6.7-6.6 6.7-.8-.8 6.7-6.6-6.7-6.6.8-.8 6.6 6.7 6.6-6.7.8.8-6.7 6.6z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
