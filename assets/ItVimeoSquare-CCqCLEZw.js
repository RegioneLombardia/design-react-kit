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
        d: "M3.567 1.333h16.762a2.286 2.286 0 0 1 2.286 2.286v16.762a2.286 2.286 0 0 1-2.286 2.286H3.567a2.286 2.286 0 0 1-2.286-2.286V3.619a2.286 2.286 0 0 1 2.286-2.286ZM16.73 14.597c2.104-2.706 3.19-4.837 3.262-6.393.095-2.084-.68-3.15-2.324-3.201-2.217-.07-3.72 1.183-4.508 3.756a3.022 3.022 0 0 1 1.185-.262c.814.001 1.173.458 1.077 1.37-.046.553-.406 1.358-1.077 2.416-.672 1.058-1.174 1.587-1.508 1.587-.43 0-.825-.814-1.186-2.445-.12-.476-.336-1.698-.646-3.666-.289-1.825-1.055-2.676-2.298-2.553-.528.049-1.319.528-2.373 1.437A209.56 209.56 0 0 1 4 8.724l.753.97c.717-.501 1.136-.754 1.254-.754.549 0 1.063.86 1.543 2.583l1.291 4.734c.645 1.722 1.434 2.583 2.367 2.583 1.506 0 3.347-1.415 5.522-4.243Z"
      }
    )
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
