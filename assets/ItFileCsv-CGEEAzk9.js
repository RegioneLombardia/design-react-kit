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
    /* @__PURE__ */ reactExports.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M14.7 2H6.5A1.5 1.5 0 0 0 5 3.5V16h1V3.5a.5.5 0 0 1 .5-.5H14v2.5A1.5 1.5 0 0 0 15.5 7H18v13.5a.5.5 0 0 1-.5.5H16v1h1.5a1.5 1.5 0 0 0 1.5-1.5V6.3L14.7 2Zm.3 1.7L17.3 6h-1.8a.5.5 0 0 1-.5-.5V3.7ZM5.002 17c.338 0 .737.045 1.197.134l.24.048-.039.824a12.344 12.344 0 0 0-1.12-.077c-.486 0-.811.109-.977.326-.166.217-.25.626-.25 1.226s.08 1.015.24 1.245c.16.23.492.345.996.345l1.121-.077.029.834c-.645.114-1.13.172-1.456.172-.728 0-1.242-.195-1.542-.584C3.147 21.02 3 20.375 3 19.48c0-.894.156-1.53.47-1.906.312-.383.823-.575 1.532-.575Zm5.77 1.092c-.754-.102-1.3-.153-1.638-.153-.339 0-.575.041-.709.124-.128.077-.191.201-.191.374 0 .172.07.293.21.364.147.07.486.153 1.016.249.536.09.916.233 1.14.43.223.199.335.55.335 1.055 0 .504-.163.874-.489 1.11-.32.237-.788.355-1.408.355-.39 0-.881-.054-1.475-.163l-.297-.048.038-.871c.767.102 1.32.153 1.658.153.338 0 .577-.042.718-.125.147-.083.22-.22.22-.412 0-.191-.07-.322-.21-.392-.135-.077-.463-.157-.987-.24-.517-.09-.897-.226-1.14-.412-.243-.185-.364-.523-.364-1.015 0-.492.166-.859.498-1.101.339-.243.77-.364 1.293-.364.409 0 .91.05 1.504.153l.297.057-.02.872Zm1.752-.987h-1.092l1.235 4.79h1.859l1.245-4.79h-1.063l-.958 3.899h-.307l-.92-3.899Z"
      }
    )),
    /* @__PURE__ */ reactExports.createElement("defs", null, /* @__PURE__ */ reactExports.createElement("clipPath", { id: "a" }, /* @__PURE__ */ reactExports.createElement("path", { d: "M0 0h24v24H0z" })))
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
