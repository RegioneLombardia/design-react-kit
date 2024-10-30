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
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M6.5 2h8.2L19 6.3v14.2a1.5 1.5 0 0 1-1.5 1.5H17v-1h.5a.5.5 0 0 0 .5-.5V7h-2.5A1.5 1.5 0 0 1 14 5.5V3H6.5a.5.5 0 0 0-.5.5V16H5V3.5A1.5 1.5 0 0 1 6.5 2Zm10.8 4L15 3.7v1.8a.5.5 0 0 0 .5.5h1.8Z"
      }
    ),
    /* @__PURE__ */ reactExports.createElement("path", { d: "m3.12 17 .92 1.838L4.985 17H6.03l-1.433 2.552L6.03 22H4.911l-.921-1.728L3.046 22H2l1.434-2.397L2 17h1.12ZM6.64 22v-5h1.72l.877 3.647.878-3.647h1.719v5h-1.01v-3.868h-.11l-.972 3.647h-1.01l-.973-3.647h-.11V22H6.64ZM15.75 22h-2.83v-5h1.009v4.103h1.821V22Z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
