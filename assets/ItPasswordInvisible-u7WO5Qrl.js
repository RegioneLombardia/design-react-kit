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
    /* @__PURE__ */ reactExports.createElement("path", { d: "M15 12c0-.7-.3-1.4-.7-1.9l.4-1.1c.8.8 1.3 1.9 1.3 3 0 2.2-1.7 3.9-3.9 4l.4-1.1c1.4-.2 2.5-1.4 2.5-2.9zM3.1 12C4.8 8.6 8.2 6.5 12 6.5h.4l.4-.9H12c-4.1 0-7.9 2.3-9.8 6L2 12l.2.5c1.3 2.5 3.5 4.4 6.1 5.3l.3-.9C6.2 16 4.2 14.3 3.1 12zm18.7-.5c-1.3-2.5-3.5-4.4-6.1-5.3l-.3.9c2.4.9 4.4 2.6 5.5 4.9a9.88 9.88 0 0 1-8.9 5.5h-.4l-.4.9h.8c4.1 0 7.9-2.3 9.8-6l.2-.4-.2-.5zM11.5 9.1l.4-1.1C9.7 8.1 8 9.8 8 12c0 1.1.5 2.2 1.3 3l.4-1.1c-.4-.5-.7-1.2-.7-1.9 0-1.5 1.1-2.7 2.5-2.9zm3.1-5.7L8.5 20.3l.9.3 6.1-16.9-.9-.3z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
