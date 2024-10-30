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
    /* @__PURE__ */ reactExports.createElement("path", { d: "M12 4.6c-2.4.1-2.6.1-3.6.1-.6 0-1.2.1-1.7.3-.4.2-.7.4-1 .7-.3.3-.5.6-.7 1-.2.5-.3 1.1-.3 1.7v7.2c0 .6.1 1.1.3 1.7.2.4.4.7.7 1 .3.3.6.5 1 .7.5.2 1.1.3 1.7.3 1 .1 1.2.1 3.6.1s2.6-.1 3.6-.1c.6 0 1.1-.1 1.7-.3.8-.3 1.4-.9 1.7-1.7.2-.5.3-1.1.3-1.7.1-.9.1-1.2.1-3.6s-.1-2.6-.1-3.6c0-.6-.1-1.1-.3-1.7-.2-.4-.4-.7-.7-1-.3-.3-.6-.5-1-.7-.5-.2-1.1-.3-1.7-.4H12zM12 3h3.7c.7 0 1.5.2 2.2.4 1.2.5 2.2 1.4 2.7 2.6.2.8.4 1.5.4 2.3v7.4c0 .8-.2 1.5-.5 2.2-.5 1.2-1.4 2.2-2.6 2.6-.7.3-1.4.4-2.2.4H8.3c-.8 0-1.5-.2-2.2-.5-1.2-.5-2.2-1.4-2.6-2.6-.3-.7-.4-1.4-.4-2.2V8.2c0-.7.2-1.5.4-2.2.5-1.2 1.4-2.2 2.6-2.7.7-.1 1.4-.3 2.2-.3H12zm0 4.4c1.2 0 2.4.5 3.3 1.4s1.4 2 1.4 3.3c0 2.6-2.1 4.6-4.6 4.6S7.4 14.6 7.4 12s2-4.6 4.6-4.6zm0 7.6c.8 0 1.6-.3 2.1-.9.6-.6.9-1.3.9-2.1 0-1.7-1.3-3-3-3s-3 1.3-3 3 1.3 3 3 3zm4.8-6.7c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
