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
    /* @__PURE__ */ reactExports.createElement("path", { d: "M20 9c0 2.5-1.3 4.8-3.5 6l-2 1.1c-.9.6-1.5 1.6-1.5 2.7 0 1.8-1.4 3.2-3.2 3.2h-.6c-1.3-.1-2.5-.9-3-2.1l.9-.5c.3.9 1.1 1.6 2.1 1.6h.6c.6 0 1.2-.2 1.6-.7.4-.4.6-.9.6-1.5 0-1.4.8-2.8 2-3.5l2-1.2c1.8-1 3-3 3-5.1 0-3.3-2.7-6-6-6-1.9 0-3.7.9-4.8 2.4l-.8-.6C8.7 3 10.8 2 13 2c3.9 0 7 3.1 7 7zM7.5 12C7.5 9 5 6.5 2 6.5v1c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5v1c3 0 5.5-2.5 5.5-5.5zM5 12c.1-1.6-1.2-2.9-2.8-3H2v1c1.1 0 2 .9 2 2s-.9 2-2 2v1c1.6.1 2.9-1.2 3-2.8V12zm5 0c0-4.4-3.6-8-8-8v1c3.9 0 7 3.1 7 7s-3.1 7-7 7v1c4.4 0 8-3.6 8-8zm5.9.3c.8-.9 1.2-2 1.2-3.2 0-1.2-.4-2.3-1.2-3.2-.8-.9-2-1.4-3.2-1.4-1.2.1-2.4.6-3.2 1.5l-.3.3.2.3c.6.9 1.1 1.9 1.3 3v.4h.4c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5v1c1.4 0 2.5-1.1 2.5-2.5 0-1.2-.8-2.2-2-2.5-.2-.9-.6-1.8-1.1-2.6.6-.5 1.4-.8 2.2-.9.9 0 1.8.4 2.4 1 .7.7 1 1.6 1 2.6s-.3 1.9-1 2.6l.8.6z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
