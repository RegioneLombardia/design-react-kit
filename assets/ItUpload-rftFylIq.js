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
    /* @__PURE__ */ reactExports.createElement("path", { d: "m8.4 7.3-.7-.7L12 2.3l4.3 4.3-.7.7-3.1-3.1v9.3h-1V4.2L8.4 7.3zM19 12v7.5c0 .3-.2.5-.5.5h-13c-.3 0-.5-.2-.5-.5V12H4v7.5c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5V12h-1z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
