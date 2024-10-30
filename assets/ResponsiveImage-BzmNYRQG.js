import { R as React } from "./index-aC1ZMUrs.js";
const ResponsiveImage = ({ alt, testId, ...attributes }) => {
  return /* @__PURE__ */ React.createElement("div", { className: "img-responsive-wrapper", "data-testid": testId }, /* @__PURE__ */ React.createElement("div", { className: "img-responsive" }, /* @__PURE__ */ React.createElement("div", { className: "img-wrapper" }, /* @__PURE__ */ React.createElement("img", { ...attributes, alt }))));
};
ResponsiveImage.__docgenInfo = { "description": "", "methods": [], "displayName": "ResponsiveImage", "props": { "alt": { "required": true, "tsType": { "name": "string" }, "description": "Un testo alternativo per descrivere l'immagine mostrata" }, "src": { "required": true, "tsType": { "name": "string" }, "description": "L'URI dell'immagine da mostrare" }, "title": { "required": false, "tsType": { "name": "string" }, "description": "Il titolo dell'immagine" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  ResponsiveImage as R
};
