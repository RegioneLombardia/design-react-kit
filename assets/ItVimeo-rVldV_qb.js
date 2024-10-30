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
    /* @__PURE__ */ reactExports.createElement("path", { d: "M20.991 7.73c-.08 1.75-1.303 4.147-3.67 7.191-2.447 3.183-4.518 4.774-6.212 4.774-1.05 0-1.938-.969-2.663-2.906l-1.453-5.326c-.54-1.937-1.118-2.906-1.735-2.906-.133 0-.604.285-1.411.85L3 8.314c.888-.78 1.764-1.561 2.626-2.342C6.81 4.951 7.7 4.412 8.295 4.356c1.399-.138 2.26.82 2.586 2.873.349 2.214.59 3.589.726 4.124.406 1.835.85 2.752 1.335 2.75.375 0 .94-.595 1.696-1.785.755-1.19 1.16-2.095 1.212-2.717.108-1.026-.296-1.54-1.212-1.542a3.4 3.4 0 0 0-1.333.295c.887-2.895 2.578-4.303 5.071-4.226 1.85.057 2.722 1.257 2.615 3.601Z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
