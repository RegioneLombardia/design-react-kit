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
    /* @__PURE__ */ reactExports.createElement("path", { d: "M18 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c.1.5-.3.9-.8 1H18zm-1-6c-2 0-3.8 1.2-4.6 3H3.3l-2 2 3 3H7v-1h.3l1 1H11v-1h1.4c.8 1.8 2.6 3 4.6 3 2.8 0 5-2.2 5-5s-2.2-5-5-5zm0 9c-1.7 0-3.2-1.1-3.8-2.7V13H10v1H8.7l-1-1H6v1H4.7l-2-2 1-1h9.4v-.3C13.7 9.1 15.3 8 17 8c2.2 0 4 1.8 4 4s-1.8 4-4 4z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
