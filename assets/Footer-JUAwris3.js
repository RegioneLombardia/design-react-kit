import { e } from "./iframe-CMMl7uns.js";
import { R as Row, C as Col } from "./Col-BB6YdyMy.js";
import "./track-focus-DbJ2CO43.js";
const Footer = ({
  logos = "",
  acronym = "",
  applicationName,
  children = "",
  links
}) => {
  return /* @__PURE__ */ e.createElement("footer", { className: "footer" }, /* @__PURE__ */ e.createElement("div", { className: "container-fluid" }, logos, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 12, className: "my-4 fw-bold title" }, acronym, " ", applicationName)), children, links && /* @__PURE__ */ e.createElement(HorLinkList, { links }), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 12, className: "my-3 copyright" }, /* @__PURE__ */ e.createElement("span", { className: "d-inline-block" }, "© Copyright Regione Lombardia"), /* @__PURE__ */ e.createElement("span", { className: "d-inline-block ms-1" }, "- tutti i diritti riservati"), /* @__PURE__ */ e.createElement("span", { className: "d-inline-block ms-1" }, "- C.F. 80050050154"), /* @__PURE__ */ e.createElement("span", { className: "d-inline-block ms-1" }, "- Piazza Città di Lombardia 1"), /* @__PURE__ */ e.createElement("span", { className: "d-inline-block ms-1" }, "- 20124 Milano")))));
};
const HorLinkList = ({ links }) => {
  let keyN = 0;
  const linkItems = links.map(
    (link) => /* @__PURE__ */ e.createElement("span", { className: "d-inline-block mt-3 me-2", key: ++keyN }, /* @__PURE__ */ e.createElement("a", { href: link.href }, link.content))
  );
  return /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 12, className: "mt-3" }, linkItems));
};
Footer.__docgenInfo = { "description": "", "methods": [], "displayName": "Footer", "props": { "logos": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Eventuali loghi in negaivo (massimo 4)", "defaultValue": { "value": '""', "computed": false } }, "acronym": { "required": false, "tsType": { "name": "string" }, "description": "Acronimo dell'applicativo", "defaultValue": { "value": '""', "computed": false } }, "applicationName": { "required": true, "tsType": { "name": "string" }, "description": "Nome dell'applicativo" }, "children": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Inserire righe nel container con contenuto personalizzato", "defaultValue": { "value": '""', "computed": false } }, "links": { "required": false, "tsType": { "name": "Array", "elements": [{ "name": "myLink" }], "raw": "myLink[]" }, "description": "Lista di link per Privacy, Contatti, ecc." } }, "composes": ["HTMLAttributes"] };
export {
  Footer as F
};
