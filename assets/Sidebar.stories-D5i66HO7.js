var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { e, r as reactExports } from "./index-BehpJNG5.js";
import { S as Sidebar } from "./Sidebar-sTLe6AZz.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-E5PaFpui.js";
import { I as Icon } from "./Icon-CwbcXiv7.js";
import { C as Collapse } from "./Collapse-JUs9UIql.js";
const meta = {
  title: "Documentazione/Componenti/Sidebar",
  component: Sidebar
};
const BasicSidebar = {
  render: () => /* @__PURE__ */ e.createElement(Sidebar, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { header: true }, "HEADER"), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true, active: true }, /* @__PURE__ */ e.createElement("span", null, "Link list active")), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true, disabled: true }, /* @__PURE__ */ e.createElement("span", null, "Link list disabled")), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true }, /* @__PURE__ */ e.createElement("span", null, "Link list")), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true }, /* @__PURE__ */ e.createElement("span", null, "Link list"))), /* @__PURE__ */ e.createElement(Sidebar, { secondary: true }), /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Secondary item")), /* @__PURE__ */ e.createElement(LinkListItem, { active: true }, /* @__PURE__ */ e.createElement("span", null, "Secondary item active")), /* @__PURE__ */ e.createElement(LinkListItem, { disabled: true }, /* @__PURE__ */ e.createElement("span", null, "Secondary item disabled"))))
};
const _ConIcona = {
  render: () => /* @__PURE__ */ e.createElement(Sidebar, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { header: true }, "HEADER"), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true, active: true, className: "left-icon" }, /* @__PURE__ */ e.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-star-outline", color: "primary", "aria-hidden": true, size: "sm" }), /* @__PURE__ */ e.createElement("span", null, "Link list active"))), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true, disabled: true, className: "left-icon" }, /* @__PURE__ */ e.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-star-outline", color: "primary", "aria-hidden": true, size: "sm" }), /* @__PURE__ */ e.createElement("span", null, "Link list disabled"))), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true, className: "left-icon" }, /* @__PURE__ */ e.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-star-outline", color: "primary", "aria-hidden": true, size: "sm" }), /* @__PURE__ */ e.createElement("span", null, "Link list"))), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true, className: "left-icon" }, /* @__PURE__ */ e.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-star-outline", color: "primary", "aria-hidden": true, size: "sm" }), /* @__PURE__ */ e.createElement("span", null, "Link list")))), /* @__PURE__ */ e.createElement(Sidebar, { secondary: true }), /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Secondary item")), /* @__PURE__ */ e.createElement(LinkListItem, { active: true }, /* @__PURE__ */ e.createElement("span", null, "Secondary item active")), /* @__PURE__ */ e.createElement(LinkListItem, { disabled: true }, /* @__PURE__ */ e.createElement("span", null, "Secondary item disabled"))))
};
const ConLineaADestra = {
  render: () => /* @__PURE__ */ e.createElement(Sidebar, { right: true }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { header: true }, "HEADER"), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true, active: true }, /* @__PURE__ */ e.createElement("span", null, "Link list active")), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true, disabled: true }, /* @__PURE__ */ e.createElement("span", null, "Link list disabled")), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true }, /* @__PURE__ */ e.createElement("span", null, "Link list")), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true }, /* @__PURE__ */ e.createElement("span", null, "Link list"))), /* @__PURE__ */ e.createElement(Sidebar, { secondary: true }), /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Secondary item")), /* @__PURE__ */ e.createElement(LinkListItem, { active: true }, /* @__PURE__ */ e.createElement("span", null, "Secondary item active")), /* @__PURE__ */ e.createElement(LinkListItem, { disabled: true }, /* @__PURE__ */ e.createElement("span", null, "Secondary item disabled"))))
};
const ConLineaASinistra = {
  render: () => /* @__PURE__ */ e.createElement(Sidebar, { left: true }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { header: true }, "HEADER"), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true, active: true }, /* @__PURE__ */ e.createElement("span", null, "Link list active")), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true, disabled: true }, /* @__PURE__ */ e.createElement("span", null, "Link list disabled")), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true }, /* @__PURE__ */ e.createElement("span", null, "Link list")), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true }, /* @__PURE__ */ e.createElement("span", null, "Link list"))), /* @__PURE__ */ e.createElement(Sidebar, { secondary: true }), /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Secondary item")), /* @__PURE__ */ e.createElement(LinkListItem, { active: true }, /* @__PURE__ */ e.createElement("span", null, "Secondary item active")), /* @__PURE__ */ e.createElement(LinkListItem, { disabled: true }, /* @__PURE__ */ e.createElement("span", null, "Secondary item disabled"))))
};
const SidebarVersioneScura = {
  render: () => /* @__PURE__ */ e.createElement(Sidebar, { dark: true }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { header: true }, "HEADER"), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true, active: true }, /* @__PURE__ */ e.createElement("span", null, "Link list active")), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true, disabled: true }, /* @__PURE__ */ e.createElement("span", null, "Link list disabled")), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true }, /* @__PURE__ */ e.createElement("span", null, "Link list")), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true }, /* @__PURE__ */ e.createElement("span", null, "Link list"))), /* @__PURE__ */ e.createElement(Sidebar, { secondary: true }), /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Secondary item")), /* @__PURE__ */ e.createElement(LinkListItem, { active: true }, /* @__PURE__ */ e.createElement("span", null, "Secondary item active")), /* @__PURE__ */ e.createElement(LinkListItem, { disabled: true }, /* @__PURE__ */ e.createElement("span", null, "Secondary item disabled"))))
};
const _AnnidataWithHooks = () => {
  const [collapseOpen1, toggleCollapse1] = reactExports.useState(false);
  const [collapseOpen2, toggleCollapse2] = reactExports.useState(false);
  const [collapseOpen3, toggleCollapse3] = reactExports.useState(false);
  return /* @__PURE__ */ e.createElement(Sidebar, { left: true }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { large: true, bold: true, className: "right-icon", onClick: (e2) => {
    e2.preventDefault();
    toggleCollapse1(!collapseOpen1);
  }, "aria-expanded": collapseOpen1 }, /* @__PURE__ */ e.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ e.createElement("span", null, "Link list 1 "), /* @__PURE__ */ e.createElement(Icon, { className: "right", icon: "it-expand", color: "primary", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(Collapse, { isOpen: collapseOpen1 }, /* @__PURE__ */ e.createElement(LinkList, { sublist: true }, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Link list 4 ")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Link list 5 ")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Link list 6 ")))), /* @__PURE__ */ e.createElement(LinkListItem, { large: true, bold: true, className: "right-icon", onClick: (e2) => {
    e2.preventDefault();
    toggleCollapse2(!collapseOpen2);
  }, "aria-expanded": collapseOpen2 }, /* @__PURE__ */ e.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ e.createElement("span", null, "Link list 2 "), /* @__PURE__ */ e.createElement(Icon, { className: "right", icon: "it-expand", color: "primary", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(Collapse, { isOpen: collapseOpen2 }, /* @__PURE__ */ e.createElement(LinkList, { sublist: true }, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Link list 7 ")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Link list 8 ")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Link list 9 ")))), /* @__PURE__ */ e.createElement(LinkListItem, { large: true, bold: true, className: "right-icon", onClick: (e2) => {
    e2.preventDefault();
    toggleCollapse3(!collapseOpen3);
  }, "aria-expanded": collapseOpen3 }, /* @__PURE__ */ e.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ e.createElement("span", null, "Link list 3 "), /* @__PURE__ */ e.createElement(Icon, { className: "right", icon: "it-expand", color: "primary", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(Collapse, { isOpen: collapseOpen3 }, /* @__PURE__ */ e.createElement(LinkList, { sublist: true }, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Link list 10 ")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Link list 11 ")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Link list 12 ")))), /* @__PURE__ */ e.createElement(Sidebar, { secondary: true }), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Secondary item")), /* @__PURE__ */ e.createElement(LinkListItem, { active: true }, /* @__PURE__ */ e.createElement("span", null, "Secondary item active")), /* @__PURE__ */ e.createElement(LinkListItem, { disabled: true }, /* @__PURE__ */ e.createElement("span", null, "Secondary item disabled"))));
};
const _Annidata = {
  render: () => /* @__PURE__ */ e.createElement(_AnnidataWithHooks, null)
};
BasicSidebar.parameters = {
  ...BasicSidebar.parameters,
  docs: {
    ...(_a = BasicSidebar.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <Sidebar>\n      <LinkList>\n        <LinkListItem header>HEADER</LinkListItem>\n        <LinkListItem bold active>\n          <span>Link list active</span>\n        </LinkListItem>\n        <LinkListItem bold disabled>\n          <span>Link list disabled</span>\n        </LinkListItem>\n        <LinkListItem bold>\n          <span>Link list</span>\n        </LinkListItem>\n        <LinkListItem bold>\n          <span>Link list</span>\n        </LinkListItem>\n      </LinkList>\n      <Sidebar secondary />\n      <LinkList>\n        <LinkListItem>\n          <span>Secondary item</span>\n        </LinkListItem>\n        <LinkListItem active>\n          <span>Secondary item active</span>\n        </LinkListItem>\n        <LinkListItem disabled>\n          <span>Secondary item disabled</span>\n        </LinkListItem>\n      </LinkList>\n    </Sidebar>\n}",
      ...(_c = (_b = BasicSidebar.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
_ConIcona.parameters = {
  ..._ConIcona.parameters,
  docs: {
    ...(_d = _ConIcona.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => <Sidebar>\n      <LinkList>\n        <LinkListItem header>HEADER</LinkListItem>\n        <LinkListItem bold active className="left-icon">\n          <LinkListItem.TitleIconWrapper>\n            <Icon icon="it-star-outline" color="primary" aria-hidden size="sm" />\n            <span>Link list active</span>\n          </LinkListItem.TitleIconWrapper>\n        </LinkListItem>\n        <LinkListItem bold disabled className="left-icon">\n          <LinkListItem.TitleIconWrapper>\n            <Icon icon="it-star-outline" color="primary" aria-hidden size="sm" />\n            <span>Link list disabled</span>\n          </LinkListItem.TitleIconWrapper>\n        </LinkListItem>\n        <LinkListItem bold className="left-icon">\n          <LinkListItem.TitleIconWrapper>\n            <Icon icon="it-star-outline" color="primary" aria-hidden size="sm" />\n            <span>Link list</span>\n          </LinkListItem.TitleIconWrapper>\n        </LinkListItem>\n        <LinkListItem bold className="left-icon">\n          <LinkListItem.TitleIconWrapper>\n            <Icon icon="it-star-outline" color="primary" aria-hidden size="sm" />\n            <span>Link list</span>\n          </LinkListItem.TitleIconWrapper>\n        </LinkListItem>\n      </LinkList>\n      <Sidebar secondary />\n      <LinkList>\n        <LinkListItem>\n          <span>Secondary item</span>\n        </LinkListItem>\n        <LinkListItem active>\n          <span>Secondary item active</span>\n        </LinkListItem>\n        <LinkListItem disabled>\n          <span>Secondary item disabled</span>\n        </LinkListItem>\n      </LinkList>\n    </Sidebar>\n}',
      ...(_f = (_e = _ConIcona.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
ConLineaADestra.parameters = {
  ...ConLineaADestra.parameters,
  docs: {
    ...(_g = ConLineaADestra.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <Sidebar right>\n      <LinkList>\n        <LinkListItem header>HEADER</LinkListItem>\n        <LinkListItem bold active>\n          <span>Link list active</span>\n        </LinkListItem>\n        <LinkListItem bold disabled>\n          <span>Link list disabled</span>\n        </LinkListItem>\n        <LinkListItem bold>\n          <span>Link list</span>\n        </LinkListItem>\n        <LinkListItem bold>\n          <span>Link list</span>\n        </LinkListItem>\n      </LinkList>\n      <Sidebar secondary />\n      <LinkList>\n        <LinkListItem>\n          <span>Secondary item</span>\n        </LinkListItem>\n        <LinkListItem active>\n          <span>Secondary item active</span>\n        </LinkListItem>\n        <LinkListItem disabled>\n          <span>Secondary item disabled</span>\n        </LinkListItem>\n      </LinkList>\n    </Sidebar>\n}",
      ...(_i = (_h = ConLineaADestra.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
ConLineaASinistra.parameters = {
  ...ConLineaASinistra.parameters,
  docs: {
    ...(_j = ConLineaASinistra.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <Sidebar left>\n      <LinkList>\n        <LinkListItem header>HEADER</LinkListItem>\n        <LinkListItem bold active>\n          <span>Link list active</span>\n        </LinkListItem>\n        <LinkListItem bold disabled>\n          <span>Link list disabled</span>\n        </LinkListItem>\n        <LinkListItem bold>\n          <span>Link list</span>\n        </LinkListItem>\n        <LinkListItem bold>\n          <span>Link list</span>\n        </LinkListItem>\n      </LinkList>\n      <Sidebar secondary />\n      <LinkList>\n        <LinkListItem>\n          <span>Secondary item</span>\n        </LinkListItem>\n        <LinkListItem active>\n          <span>Secondary item active</span>\n        </LinkListItem>\n        <LinkListItem disabled>\n          <span>Secondary item disabled</span>\n        </LinkListItem>\n      </LinkList>\n    </Sidebar>\n}",
      ...(_l = (_k = ConLineaASinistra.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
SidebarVersioneScura.parameters = {
  ...SidebarVersioneScura.parameters,
  docs: {
    ...(_m = SidebarVersioneScura.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: () => <Sidebar dark>\n      <LinkList>\n        <LinkListItem header>HEADER</LinkListItem>\n        <LinkListItem bold active>\n          <span>Link list active</span>\n        </LinkListItem>\n        <LinkListItem bold disabled>\n          <span>Link list disabled</span>\n        </LinkListItem>\n        <LinkListItem bold>\n          <span>Link list</span>\n        </LinkListItem>\n        <LinkListItem bold>\n          <span>Link list</span>\n        </LinkListItem>\n      </LinkList>\n      <Sidebar secondary />\n      <LinkList>\n        <LinkListItem>\n          <span>Secondary item</span>\n        </LinkListItem>\n        <LinkListItem active>\n          <span>Secondary item active</span>\n        </LinkListItem>\n        <LinkListItem disabled>\n          <span>Secondary item disabled</span>\n        </LinkListItem>\n      </LinkList>\n    </Sidebar>\n}",
      ...(_o = (_n = SidebarVersioneScura.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
_Annidata.parameters = {
  ..._Annidata.parameters,
  docs: {
    ...(_p = _Annidata.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  render: () => <_AnnidataWithHooks />\n}",
      ...(_r = (_q = _Annidata.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
const __namedExportsOrder = ["BasicSidebar", "_ConIcona", "ConLineaADestra", "ConLineaASinistra", "SidebarVersioneScura", "_Annidata"];
const SidebarStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BasicSidebar,
  ConLineaADestra,
  ConLineaASinistra,
  SidebarVersioneScura,
  _Annidata,
  _ConIcona,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  BasicSidebar as B,
  ConLineaADestra as C,
  SidebarStories as S,
  _ConIcona as _,
  ConLineaASinistra as a,
  _Annidata as b,
  SidebarVersioneScura as c
};