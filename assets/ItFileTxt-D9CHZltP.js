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
        d: "M6.5 2h8.2L19 6.3v14.2a1.5 1.5 0 0 1-1.5 1.5H14v-1h3.5a.5.5 0 0 0 .5-.5V7h-2.5A1.5 1.5 0 0 1 14 5.5V3H6.5a.5.5 0 0 0-.5.5V16H5V3.5A1.5 1.5 0 0 1 6.5 2Zm10.8 4L15 3.7v1.8a.5.5 0 0 0 .5.5h1.8Z"
      }
    ),
    /* @__PURE__ */ reactExports.createElement("path", { d: "M3 17.897V17h3.525v.897H5.256V22h-.973v-4.103H3ZM7.761 17l.889 1.838L9.56 17h1.007l-1.381 2.552L10.567 22H9.49L8.6 20.272 7.691 22H6.683l1.382-2.397L6.683 17H7.76ZM10.725 17.897V17h3.525v.897h-1.269V22h-.973v-4.103h-1.283Z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
