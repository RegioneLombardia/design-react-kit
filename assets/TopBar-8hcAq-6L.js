import { e } from "./iframe-BFNAXEkx.js";
import { C as Container } from "./Container-BxoeQkUV.js";
import { R as Row, C as Col } from "./Col-CkVB0JHd.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-C3RxkQUc.js";
import { D as DropdownMenu } from "./DropdownMenu-CEy5EV_9.js";
import { I as Icon } from "./Icon-Be4XlCcy.js";
import { a as LinkListItem, L as LinkList } from "./LinkListItem-DqRIkDYc.js";
import "./track-focus-DbJ2CO43.js";
const TopBar = ({
  access = false,
  user = "",
  links
}) => {
  return /* @__PURE__ */ e.createElement("div", { className: "it-header-slim-wrapper it25-top-bar" }, /* @__PURE__ */ e.createElement(Container, { fluid: true }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 12 }, /* @__PURE__ */ e.createElement("div", { className: "it-header-slim-wrapper-content" }, /* @__PURE__ */ e.createElement("a", { className: "navbar-brand", href: "#" }, /* @__PURE__ */ e.createElement("img", { src: "img/logo-rl-bianco.png", alt: "logo regione lombardia", className: "d-md-none" })), access && /* @__PURE__ */ e.createElement(AccessButton, null), user && /* @__PURE__ */ e.createElement(UserSettings, { user, links }))))));
};
const AccessButton = ({ access }) => {
  return /* @__PURE__ */ e.createElement("div", { className: "header-slim-right-zone" }, /* @__PURE__ */ e.createElement("a", { className: "btn btn-primary btn-icon btn-full", href: access, title: "Accedi all'area personale", "aria-label": "Accedi all'area personale" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-key", className: "icon-white" }), /* @__PURE__ */ e.createElement("span", { className: "d-none d-md-block" }, "Accedi")));
};
const UserSettings = ({ user, links }) => {
  if (links) {
    const linkItems = links.map(
      (link) => /* @__PURE__ */ e.createElement(LinkListItem, { href: link.href, inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, link.content))
    );
    return /* @__PURE__ */ e.createElement("div", { className: "header-slim-right-zone" }, /* @__PURE__ */ e.createElement(Dropdown, { inNavbar: true }, /* @__PURE__ */ e.createElement(DropdownToggle, { caret: true, inNavbar: true }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-user", size: "xs", className: "icon-white" }), user), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { size: "12" }, /* @__PURE__ */ e.createElement(LinkList, null, linkItems))))));
  } else {
    return /* @__PURE__ */ e.createElement("div", { className: "header-slim-right-zone" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-user", size: "xs", className: "icon-white" }), /* @__PURE__ */ e.createElement("span", { className: "text-white" }, user));
  }
};
TopBar.__docgenInfo = { "description": "", "methods": [], "displayName": "TopBar", "props": { "access": { "required": false, "tsType": { "name": "string" }, "description": "Bottone di Accesso (autenticazione)", "defaultValue": { "value": "false", "computed": false } }, "user": { "required": false, "tsType": { "name": "string" }, "description": "Dati utente autenticato (es. Nome, Ruolo)", "defaultValue": { "value": '""', "computed": false } }, "links": { "required": false, "tsType": { "name": "Array", "elements": [{ "name": "myLink" }], "raw": "myLink[]" }, "description": "Lista di link per dropdwon opzioni profilo" } }, "composes": ["HTMLAttributes"] };
export {
  TopBar as T
};
