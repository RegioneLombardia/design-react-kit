import { R as React } from "./index-aC1ZMUrs.js";
import { C as Container } from "./Container-BSU_5rqZ.js";
import { R as Row, C as Col } from "./Col-sbjB5dMm.js";
import { I as Icon } from "./Icon-Bs2HTC1s.js";
import { a as LinkListItem, L as LinkList } from "./LinkListItem-B69qYNZ5.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-BBGYI-jw.js";
import { D as DropdownMenu } from "./DropdownMenu-BVvApC7Y.js";
const TopBar = ({
  access = false,
  user = "",
  links
}) => {
  return /* @__PURE__ */ React.createElement("div", { className: "it-header-slim-wrapper it25-top-bar" }, /* @__PURE__ */ React.createElement(Container, { fluid: true }, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, { sm: 12 }, /* @__PURE__ */ React.createElement("div", { className: "it-header-slim-wrapper-content" }, /* @__PURE__ */ React.createElement("a", { className: "navbar-brand", href: "#" }, /* @__PURE__ */ React.createElement("img", { src: "../static/img/logo-rl-bianco.png", alt: "logo regione lombardia", className: "d-md-none" })), access && /* @__PURE__ */ React.createElement(AccessButton, null), user && /* @__PURE__ */ React.createElement(UserSettings, { user, links }))))));
};
const AccessButton = ({ access }) => {
  return /* @__PURE__ */ React.createElement("div", { className: "header-slim-right-zone" }, /* @__PURE__ */ React.createElement("a", { className: "btn btn-primary btn-icon btn-full", href: access, title: "Accedi all'area personale", "aria-label": "Accedi all'area personale" }, /* @__PURE__ */ React.createElement(Icon, { icon: "it-key", className: "icon-white" }), /* @__PURE__ */ React.createElement("span", { className: "d-none d-md-block" }, "Accedi")));
};
const UserSettings = ({ user, links }) => {
  if (links) {
    const linkItems = links.map(
      (link) => /* @__PURE__ */ React.createElement(LinkListItem, { href: link.href, inDropdown: true }, /* @__PURE__ */ React.createElement("span", null, link.content))
    );
    return /* @__PURE__ */ React.createElement("div", { className: "header-slim-right-zone" }, /* @__PURE__ */ React.createElement(Dropdown, { inNavbar: true }, /* @__PURE__ */ React.createElement(DropdownToggle, { caret: true, inNavbar: true }, /* @__PURE__ */ React.createElement(Icon, { icon: "it-user", size: "xs", className: "icon-white" }), user), /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, { size: "12" }, /* @__PURE__ */ React.createElement(LinkList, null, linkItems))))));
  } else {
    return /* @__PURE__ */ React.createElement("div", { className: "header-slim-right-zone" }, /* @__PURE__ */ React.createElement(Icon, { icon: "it-user", size: "xs", className: "icon-white" }), /* @__PURE__ */ React.createElement("span", { className: "text-white" }, user));
  }
};
TopBar.__docgenInfo = { "description": "", "methods": [], "displayName": "TopBar", "props": { "access": { "required": false, "tsType": { "name": "string" }, "description": "Bottone di Accesso (autenticazione)", "defaultValue": { "value": "false", "computed": false } }, "user": { "required": false, "tsType": { "name": "string" }, "description": "Dati utente autenticato (es. Nome, Ruolo)", "defaultValue": { "value": '""', "computed": false } }, "links": { "required": false, "tsType": { "name": "Array", "elements": [{ "name": "myLink" }], "raw": "myLink[]" }, "description": "Lista di link per dropdwon opzioni profilo" } }, "composes": ["HTMLAttributes"] };
export {
  TopBar as T
};
