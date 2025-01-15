var _a, _b, _c, _d, _e, _f;
import { e, r as reactExports } from "./index-BehpJNG5.js";
import { C as Collapse } from "./Collapse--sLBEfCA.js";
import { I as Icon } from "./Icon-D_scqGwU.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-E5PaFpui.js";
import { S as Sidebar } from "./Sidebar-sTLe6AZz.js";
import "./track-focus-DbJ2CO43.js";
import { M as MenuVerticale } from "./MenuVerticale-DqCThYyv.js";
const meta = {
  title: "Linee Guida/Componenti Principali/MenuVerticale",
  component: MenuVerticale,
  args: {}
};
const Semplice = {
  render: () => /* @__PURE__ */ e.createElement(MenuVerticale, null, /* @__PURE__ */ e.createElement(Sidebar, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { active: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link Attivo")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { disabled: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Disabilitato")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")))))
};
const _AnnidataWithHooks = () => {
  const [collapseOpen1, toggleCollapse1] = reactExports.useState(false);
  const [collapseOpen2, toggleCollapse2] = reactExports.useState(true);
  const [collapseOpen3, toggleCollapse3] = reactExports.useState(true);
  const [collapseOpen4, toggleCollapse4] = reactExports.useState(true);
  const [collapseOpen5, toggleCollapse5] = reactExports.useState(true);
  return /* @__PURE__ */ e.createElement(MenuVerticale, null, /* @__PURE__ */ e.createElement(Sidebar, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { large: true, bold: true, className: "right-icon", onClick: (e2) => {
    e2.preventDefault();
    toggleCollapse1(!collapseOpen1);
  }, "aria-expanded": collapseOpen1 }, /* @__PURE__ */ e.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ e.createElement("span", { className: "fw-bold" }, "Lorem ipsum dolor"), /* @__PURE__ */ e.createElement(Icon, { className: "right", icon: "it-expand", color: "primary", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(Collapse, { isOpen: collapseOpen1 }, /* @__PURE__ */ e.createElement(LinkList, { sublist: true }, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")))), /* @__PURE__ */ e.createElement(LinkListItem, { large: true, bold: true, className: "right-icon", onClick: (e2) => {
    e2.preventDefault();
    toggleCollapse2(!collapseOpen2);
  }, "aria-expanded": collapseOpen2 }, /* @__PURE__ */ e.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ e.createElement("span", { className: "fw-bold" }, "Lorem ipsum dolor"), /* @__PURE__ */ e.createElement(Icon, { className: "right", icon: "it-expand", color: "primary", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(Collapse, { isOpen: collapseOpen2 }, /* @__PURE__ */ e.createElement(LinkList, { sublist: true }, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")))), /* @__PURE__ */ e.createElement(LinkListItem, { large: true, bold: true, className: "right-icon", onClick: (e2) => {
    e2.preventDefault();
    toggleCollapse3(!collapseOpen3);
  }, "aria-expanded": collapseOpen3 }, /* @__PURE__ */ e.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ e.createElement("span", { className: "fw-bold" }, "Lorem ipsum dolor"), /* @__PURE__ */ e.createElement(Icon, { className: "right", icon: "it-expand", color: "primary", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(Collapse, { isOpen: collapseOpen3 }, /* @__PURE__ */ e.createElement(LinkList, { sublist: true }, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")))), /* @__PURE__ */ e.createElement(LinkListItem, { large: true, bold: true, className: "right-icon", onClick: (e2) => {
    e2.preventDefault();
    toggleCollapse4(!collapseOpen4);
  }, "aria-expanded": collapseOpen4 }, /* @__PURE__ */ e.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ e.createElement("span", { className: "fw-bold" }, "Lorem ipsum dolor"), /* @__PURE__ */ e.createElement(Icon, { className: "right", icon: "it-expand", color: "primary", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(Collapse, { isOpen: collapseOpen4 }, /* @__PURE__ */ e.createElement(LinkList, { sublist: true }, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")))), /* @__PURE__ */ e.createElement(LinkListItem, { large: true, bold: true, className: "right-icon", onClick: (e2) => {
    e2.preventDefault();
    toggleCollapse5(!collapseOpen5);
  }, "aria-expanded": collapseOpen5 }, /* @__PURE__ */ e.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ e.createElement("span", { className: "fw-bold" }, "Lorem ipsum dolor"), /* @__PURE__ */ e.createElement(Icon, { className: "right", icon: "it-expand", color: "primary", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(Collapse, { isOpen: collapseOpen5 }, /* @__PURE__ */ e.createElement(LinkList, { sublist: true }, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")))))));
};
const Innestata = {
  render: () => /* @__PURE__ */ e.createElement(_AnnidataWithHooks, null)
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
