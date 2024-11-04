var _a, _b, _c, _d, _e, _f;
import { R as React, r as reactExports } from "./index-aC1ZMUrs.js";
import { M as MenuVerticale } from "./MenuVerticale-CunI0Gwc.js";
import { S as Sidebar } from "./Sidebar-Bu00DWDp.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-B69qYNZ5.js";
import { I as Icon } from "./Icon-CMQf0osR.js";
import { C as Collapse } from "./Collapse-DybBevio.js";
const meta = {
  title: "Linee Guida/Componenti Principali/MenuVerticale",
  component: MenuVerticale,
  args: {}
};
const Semplice = {
  render: () => /* @__PURE__ */ React.createElement(MenuVerticale, null, /* @__PURE__ */ React.createElement(Sidebar, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ React.createElement(LinkListItem, { active: true, href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Link Attivo")), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ React.createElement(LinkListItem, { disabled: true, href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Disabilitato")), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")))))
};
const _AnnidataWithHooks = () => {
  const [collapseOpen1, toggleCollapse1] = reactExports.useState(false);
  const [collapseOpen2, toggleCollapse2] = reactExports.useState(true);
  const [collapseOpen3, toggleCollapse3] = reactExports.useState(true);
  const [collapseOpen4, toggleCollapse4] = reactExports.useState(true);
  const [collapseOpen5, toggleCollapse5] = reactExports.useState(true);
  return /* @__PURE__ */ React.createElement(MenuVerticale, null, /* @__PURE__ */ React.createElement(Sidebar, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, { large: true, bold: true, className: "right-icon", onClick: (e) => {
    e.preventDefault();
    toggleCollapse1(!collapseOpen1);
  }, "aria-expanded": collapseOpen1 }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement("span", { className: "fw-bold" }, "Lorem ipsum dolor"), /* @__PURE__ */ React.createElement(Icon, { className: "right", icon: "it-expand", color: "primary", "aria-hidden": true }))), /* @__PURE__ */ React.createElement(Collapse, { isOpen: collapseOpen1 }, /* @__PURE__ */ React.createElement(LinkList, { sublist: true }, /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")))), /* @__PURE__ */ React.createElement(LinkListItem, { large: true, bold: true, className: "right-icon", onClick: (e) => {
    e.preventDefault();
    toggleCollapse2(!collapseOpen2);
  }, "aria-expanded": collapseOpen2 }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement("span", { className: "fw-bold" }, "Lorem ipsum dolor"), /* @__PURE__ */ React.createElement(Icon, { className: "right", icon: "it-expand", color: "primary", "aria-hidden": true }))), /* @__PURE__ */ React.createElement(Collapse, { isOpen: collapseOpen2 }, /* @__PURE__ */ React.createElement(LinkList, { sublist: true }, /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")))), /* @__PURE__ */ React.createElement(LinkListItem, { large: true, bold: true, className: "right-icon", onClick: (e) => {
    e.preventDefault();
    toggleCollapse3(!collapseOpen3);
  }, "aria-expanded": collapseOpen3 }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement("span", { className: "fw-bold" }, "Lorem ipsum dolor"), /* @__PURE__ */ React.createElement(Icon, { className: "right", icon: "it-expand", color: "primary", "aria-hidden": true }))), /* @__PURE__ */ React.createElement(Collapse, { isOpen: collapseOpen3 }, /* @__PURE__ */ React.createElement(LinkList, { sublist: true }, /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")))), /* @__PURE__ */ React.createElement(LinkListItem, { large: true, bold: true, className: "right-icon", onClick: (e) => {
    e.preventDefault();
    toggleCollapse4(!collapseOpen4);
  }, "aria-expanded": collapseOpen4 }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement("span", { className: "fw-bold" }, "Lorem ipsum dolor"), /* @__PURE__ */ React.createElement(Icon, { className: "right", icon: "it-expand", color: "primary", "aria-hidden": true }))), /* @__PURE__ */ React.createElement(Collapse, { isOpen: collapseOpen4 }, /* @__PURE__ */ React.createElement(LinkList, { sublist: true }, /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")))), /* @__PURE__ */ React.createElement(LinkListItem, { large: true, bold: true, className: "right-icon", onClick: (e) => {
    e.preventDefault();
    toggleCollapse5(!collapseOpen5);
  }, "aria-expanded": collapseOpen5 }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement("span", { className: "fw-bold" }, "Lorem ipsum dolor"), /* @__PURE__ */ React.createElement(Icon, { className: "right", icon: "it-expand", color: "primary", "aria-hidden": true }))), /* @__PURE__ */ React.createElement(Collapse, { isOpen: collapseOpen5 }, /* @__PURE__ */ React.createElement(LinkList, { sublist: true }, /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")))))));
};
const Innestata = {
  render: () => /* @__PURE__ */ React.createElement(_AnnidataWithHooks, null)
};
Semplice.parameters = {
  ...Semplice.parameters,
  docs: {
    ...(_a = Semplice.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => <MenuVerticale>\n      <Sidebar>\n        <LinkList>\n          <LinkListItem href="#">\n            <span>Lorem ipsum dolor</span>\n          </LinkListItem>\n          <LinkListItem active href="#">\n            <span>Link Attivo</span>\n          </LinkListItem>\n          <LinkListItem href="#">\n            <span>Lorem ipsum dolor</span>\n          </LinkListItem>\n          <LinkListItem disabled href="#">\n            <span>Disabilitato</span>\n          </LinkListItem>\n          <LinkListItem href="#">\n            <span>Lorem ipsum dolor</span>\n          </LinkListItem>\n          <LinkListItem href="#">\n            <span>Lorem ipsum dolor</span>\n          </LinkListItem>\n          <LinkListItem href="#">\n            <span>Lorem ipsum dolor</span>\n          </LinkListItem>\n          <LinkListItem href="#">\n            <span>Lorem ipsum dolor</span>\n          </LinkListItem>\n        </LinkList>\n      </Sidebar>\n    </MenuVerticale>\n}',
      ...(_c = (_b = Semplice.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Innestata.parameters = {
  ...Innestata.parameters,
  docs: {
    ...(_d = Innestata.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <_AnnidataWithHooks />\n}",
      ...(_f = (_e = Innestata.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Semplice", "Innestata"];
const MenuVerticaleStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Innestata,
  Semplice,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Innestata as I,
  MenuVerticaleStories as M,
  Semplice as S
};
