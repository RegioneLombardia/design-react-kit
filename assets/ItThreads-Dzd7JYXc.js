import { r as reactExports } from "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
const component = ({ title, titleId, ...props }) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ reactExports.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ reactExports.createElement("path", { d: "M12.1 21.1C9.4 21.1 7.3 20.2 5.9 18.4C4.7 16.9 4 14.7 4 12C4 9.3 4.7 7.1 5.9 5.6C7.3 3.8 9.4 3 12.1 2.9C14.2 2.9 15.9 3.5 17.3 4.5C18.6 5.5 19.5 6.9 20 8.7L18.5 9.1C17.7 6.1 15.5 4.6 12.2 4.5C10 4.5 8.3 5.2 7.2 6.6C6.2 7.9 5.7 9.7 5.6 12C5.6 14.3 6.1 16.2 7.2 17.4C8.3 18.8 10 19.4 12.2 19.5C14.2 19.5 15.5 19 16.6 17.9C17.9 16.7 17.8 15.2 17.4 14.3C17.2 13.8 16.7 13.3 16.2 13C16.1 14 15.7 14.9 15.2 15.5C14.5 16.3 13.6 16.8 12.4 16.9C11.5 16.9 10.6 16.7 9.9 16.3C9 15.7 8.6 14.9 8.5 14C8.5 13.1 8.8 12.3 9.5 11.7C10.2 11.1 11.1 10.8 12.2 10.7C13 10.7 13.8 10.7 14.5 10.8C14.4 10.2 14.2 9.8 13.9 9.5C13.5 9.1 12.9 8.8 12.1 8.8C11.5 8.8 10.6 9 10 9.8L8.8 8.8C9.5 7.7 10.8 7.1 12.2 7.1C14.6 7.1 16.1 8.6 16.2 11.2C16.3 11.2 16.4 11.3 16.4 11.3C17.5 11.8 18.4 12.6 18.8 13.6C19.4 15 19.5 17.2 17.6 19C16.3 20.5 14.6 21.1 12.1 21.1ZM12.9 12.2C12.7 12.2 12.5 12.2 12.3 12.2C10.9 12.3 10 12.9 10.1 13.8C10.2 14.8 11.2 15.2 12.2 15.1C13.1 15.1 14.3 14.7 14.5 12.3C14.1 12.3 13.5 12.2 12.9 12.2Z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
