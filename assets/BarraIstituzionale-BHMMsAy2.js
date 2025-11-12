import { e } from "./iframe-CCeCdQXR.js";
import { C as Container } from "./Container-DSg0hrw7.js";
import { R as Row, C as Col } from "./Col-BBB4ywWW.js";
import { B as Button } from "./Button-Cf5fvUWk.js";
import { I as Icon } from "./Icon-BE80VWGZ.js";
import "./track-focus-DbJ2CO43.js";
import { B as BottoneHamburger } from "./BottoneHamburger-CpwXgtBE.js";
const BarraIstituzionale = ({
  acronym = "",
  applicationName,
  search = false,
  hamburgerButton = false,
  data_bs_target,
  isOpenSide = false,
  toggleMenu,
  menuType,
  children = ""
}) => {
  if (acronym == "") {
    acronym = applicationName;
    applicationName = "";
  }
  let HamburgerButton;
  if (hamburgerButton) {
    HamburgerButton = /* @__PURE__ */ e.createElement(
      BottoneHamburger,
      {
        menuType,
        data_bs_target,
        isOpenSide,
        toggleMenu
      }
    );
  }
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "it-header-center-wrapper it25-barra-ist" }, /* @__PURE__ */ e.createElement(Container, { fluid: true }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 12 }, /* @__PURE__ */ e.createElement("div", { className: "it-header-center-content-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "it-brand-wrapper" }, HamburgerButton, /* @__PURE__ */ e.createElement("a", { href: "#" }, /* @__PURE__ */ e.createElement("img", { src: "img/logo-rl.png", alt: "logo regione lombardia", className: "it25-header-logo d-none d-md-block" }), /* @__PURE__ */ e.createElement("div", { className: "it-brand-text" }, acronym, " ", /* @__PURE__ */ e.createElement("span", { className: "d-none d-md-inline" }, applicationName)))), search && /* @__PURE__ */ e.createElement(Search, null)))))), children);
};
const Search = () => {
  return /* @__PURE__ */ e.createElement("div", { className: "it-right-zone" }, /* @__PURE__ */ e.createElement("form", null, /* @__PURE__ */ e.createElement("div", { className: "it-search-wrapper" }, /* @__PURE__ */ e.createElement("input", { id: "search-input99", className: "form-control d-none d-lg-flex mr-sm-2 ml-auto", type: "search", placeholder: "Cerca...", "aria-label": "Testo per ricerca" }), /* @__PURE__ */ e.createElement(Button, { className: "btn p-0 m-1", type: "submit", "aria-label": "Esegui ricerca" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-search" })))));
};
BarraIstituzionale.__docgenInfo = { "description": "", "methods": [], "displayName": "BarraIstituzionale", "props": { "acronym": { "required": false, "tsType": { "name": "string" }, "description": "Acronimo dell'applicativo", "defaultValue": { "value": '""', "computed": false } }, "applicationName": { "required": true, "tsType": { "name": "string" }, "description": "Nome dell'applicativo" }, "search": { "required": false, "tsType": { "name": "boolean" }, "description": "Campo di recerca", "defaultValue": { "value": "false", "computed": false } }, "hamburgerButton": { "required": false, "tsType": { "name": "boolean" }, "description": "Bottone apertura/chiusura menù verticale *", "defaultValue": { "value": "false", "computed": false } }, "data_bs_target": { "required": false, "tsType": { "name": "string" }, "description": "id del data-bs-target*" }, "isOpenSide": { "required": false, "tsType": { "name": "boolean" }, "description": "Stato del menu a comparsa *", "defaultValue": { "value": "false", "computed": false } }, "toggleMenu": { "required": false, "tsType": { "name": "CallableFunction" }, "description": "Funzione per il menu a comparsa *" }, "menuType": { "required": false, "tsType": { "name": "union", "raw": '"horizontal" | "vertical" | "sidebar"', "elements": [{ "name": "literal", "value": '"horizontal"' }, { "name": "literal", "value": '"vertical"' }, { "name": "literal", "value": '"sidebar"' }] }, "description": "Tipo di menu che il bottone dve aprire *" }, "children": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Nodo per il menù verticale", "defaultValue": { "value": '""', "computed": false } } }, "composes": ["HTMLAttributes"] };
export {
  BarraIstituzionale as B
};
