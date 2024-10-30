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
    /* @__PURE__ */ reactExports.createElement("path", { d: "M20 4c-.6-.6-1.5-1-2.4-1H6.4c-.9 0-1.8.4-2.4 1-.6.6-1 1.5-1 2.4v11.3c0 .9.4 1.8 1 2.4.6.6 1.5 1 2.4 1h11.2c1.9 0 3.4-1.5 3.4-3.4V6.4c0-.9-.4-1.8-1-2.4zm-9.6 9.8c-1 1-2.5 1-3.5 0s-1-2.5 0-3.5 2.5-1 3.5 0c1 .9 1 2.5 0 3.5zm6.6 0c-.7.7-1.8.9-2.7.5-.9-.4-1.5-1.3-1.5-2.3 0-1 .6-1.9 1.5-2.3.9-.4 2-.2 2.7.5 1 1 1 2.6 0 3.6z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
