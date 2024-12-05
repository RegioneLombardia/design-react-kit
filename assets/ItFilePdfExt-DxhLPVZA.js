import { r as reactExports } from "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
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
        d: "M6.5 2h8.2L19 6.3v14.2a1.5 1.5 0 0 1-1.5 1.5H16v-1h1.5a.5.5 0 0 0 .5-.5V7h-2.5A1.5 1.5 0 0 1 14 5.5V3H6.5a.5.5 0 0 0-.5.5V16H5V3.5A1.5 1.5 0 0 1 6.5 2Zm10.8 4L15 3.7v1.8a.5.5 0 0 0 .5.5h1.8Z"
      }
    ),
    /* @__PURE__ */ reactExports.createElement("path", { d: "M4.957 20.544H4.08V22H3v-5h1.957c1.263 0 1.895.578 1.895 1.735 0 .584-.162 1.032-.486 1.346-.318.309-.788.463-1.409.463Zm-.877-.867h.87c.537 0 .806-.314.806-.942 0-.308-.066-.53-.196-.662-.13-.137-.334-.205-.61-.205h-.87v1.809ZM9.403 22H7.61v-5h1.793c.46 0 .838.047 1.135.14.297.088.527.238.689.448.167.206.282.451.344.735.063.28.094.645.094 1.096 0 .451-.028.826-.086 1.125a2.092 2.092 0 0 1-.329.794c-.156.23-.386.4-.688.508-.303.102-.69.154-1.16.154Zm1.135-1.985c.01-.157.016-.373.016-.647 0-.28-.01-.503-.032-.67a1.216 1.216 0 0 0-.148-.455.595.595 0 0 0-.353-.28 1.902 1.902 0 0 0-.618-.08H8.69v3.235h.713c.391 0 .676-.093.853-.28.152-.152.245-.426.282-.823ZM12.602 22v-5H16v.882h-2.317v1.47h1.894v.883h-1.894V22h-1.08Z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};