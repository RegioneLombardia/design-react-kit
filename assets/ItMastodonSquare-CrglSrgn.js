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
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.567 1.333h16.762a2.286 2.286 0 0 1 2.286 2.286v16.762a2.286 2.286 0 0 1-2.286 2.286H3.567a2.286 2.286 0 0 1-2.286-2.286V3.619a2.286 2.286 0 0 1 2.286-2.286Zm15.614 12.259c-.22 1.128-1.975 2.364-3.99 2.603-1.05.125-2.085.24-3.188.19a18.815 18.815 0 0 1-3.228-.43c0 .175.011.342.033.497.234 1.772 1.765 1.878 3.215 1.927a9.33 9.33 0 0 0 2.767-.359l.06 1.317s-1.024.547-2.847.647c-1.006.055-2.255-.025-3.709-.408-3.154-.83-3.697-4.176-3.78-7.57a68.707 68.707 0 0 1-.011-2.09l.002-.663c0-3.47 2.285-4.488 2.285-4.488 1.153-.527 3.13-.748 5.186-.765h.05c2.057.017 4.035.238 5.188.765 0 0 2.285 1.017 2.285 4.488 0 0 .03 2.56-.318 4.339Zm-4.051.133h1.673V9.522c0-.859-.22-1.541-.66-2.046-.456-.505-1.052-.764-1.793-.764-.856 0-1.504.328-1.933.983L12 8.39l-.417-.695c-.429-.655-1.077-.983-1.933-.983-.74 0-1.337.259-1.792.764-.442.505-.661 1.187-.661 2.046v4.203H8.87v-4.08c0-.859.364-1.295 1.09-1.295.805 0 1.208.517 1.208 1.541v2.233h1.664V9.89c0-1.024.403-1.541 1.207-1.541.727 0 1.091.436 1.091 1.296v4.079Z"
      }
    )
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
