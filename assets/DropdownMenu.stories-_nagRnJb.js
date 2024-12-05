var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
import { e } from "./index-BehpJNG5.js";
import { D as DropdownMenu } from "./DropdownMenu-DVqROqFZ.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-E5PaFpui.js";
import { I as Icon } from "./Icon-CwbcXiv7.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./utils-Cs0hNT-B.js";
import "./index-DmVNLg0t.js";
import "./index-D3ELxcOV.js";
import "./Popper-oXY5zJ3Q.js";
import "./iframe-CaWOas9z.js";
import "../sb-preview/runtime.js";
const meta = {
  title: "Documentazione/Componenti/Dropdown",
  component: DropdownMenu
};
const _MenuVociAttive = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "docs-show-dropdown-open" }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { active: true, inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 1", /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, " attivo"))), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 3")))))
};
const _MenuVociDisabilitate = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "docs-show-dropdown-open" }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 1")), /* @__PURE__ */ e.createElement(LinkListItem, { disabled: true, "aria-disabled": "true", inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 3")))))
};
const MenuHeadersESeparatori = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "docs-show-dropdown-open" }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { header: true, inDropdown: true }, "Header"), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Azione 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 3")), /* @__PURE__ */ e.createElement(LinkListItem, { divider: true }), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 4")))))
};
const MenuConVociLarge = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "docs-show-dropdown-open" }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { large: true, inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 1")), /* @__PURE__ */ e.createElement(LinkListItem, { large: true, inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 2")), /* @__PURE__ */ e.createElement(LinkListItem, { large: true, inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 3")))))
};
const MenuFullWidth = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "docs-show-dropdown-open" }, /* @__PURE__ */ e.createElement(DropdownMenu, { className: "full-width" }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { large: true, inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 1")), /* @__PURE__ */ e.createElement(LinkListItem, { large: true, inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 2")), /* @__PURE__ */ e.createElement(LinkListItem, { large: true, inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 3")), /* @__PURE__ */ e.createElement(LinkListItem, { large: true, inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 4")), /* @__PURE__ */ e.createElement(LinkListItem, { large: true, inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 5")))))
};
const MenuIconaADestra = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "docs-show-dropdown-open" }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { className: "right-icon", inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 1"), /* @__PURE__ */ e.createElement(Icon, { className: "right", color: "primary", icon: "it-info-circle", "aria-hidden": true, size: "sm" })), /* @__PURE__ */ e.createElement(LinkListItem, { className: "right-icon", inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 2"), /* @__PURE__ */ e.createElement(Icon, { className: "right", color: "primary", icon: "it-info-circle", "aria-hidden": true, size: "sm" })), /* @__PURE__ */ e.createElement(LinkListItem, { className: "right-icon", inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 3"), /* @__PURE__ */ e.createElement(Icon, { className: "right", color: "primary", icon: "it-info-circle", "aria-hidden": true, size: "sm" })))))
};
const MenuIconaASinistra = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "docs-show-dropdown-open" }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { className: "left-icon", inDropdown: true }, /* @__PURE__ */ e.createElement(Icon, { className: "left", color: "primary", icon: "it-info-circle", "aria-hidden": true, size: "sm" }), /* @__PURE__ */ e.createElement("span", null, "Azione 1")), /* @__PURE__ */ e.createElement(LinkListItem, { className: "left-icon", inDropdown: true }, /* @__PURE__ */ e.createElement(Icon, { className: "left", color: "primary", icon: "it-info-circle", "aria-hidden": true, size: "sm" }), /* @__PURE__ */ e.createElement("span", null, "Azione 2")), /* @__PURE__ */ e.createElement(LinkListItem, { className: "left-icon", inDropdown: true }, /* @__PURE__ */ e.createElement(Icon, { className: "left", color: "primary", icon: "it-info-circle", "aria-hidden": true, size: "sm" }), /* @__PURE__ */ e.createElement("span", null, "Azione 3")))))
};
const _MenuDark = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "docs-show-dropdown-open" }, /* @__PURE__ */ e.createElement(DropdownMenu, { className: "dark" }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { header: true }, "Header"), /* @__PURE__ */ e.createElement(LinkListItem, { active: true, className: "right-icon", inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 1 (attivo)"), /* @__PURE__ */ e.createElement(Icon, { className: "right", color: "light", icon: "it-info-circle", "aria-hidden": true, size: "sm" })), /* @__PURE__ */ e.createElement(LinkListItem, { className: "right-icon", inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 2"), /* @__PURE__ */ e.createElement(Icon, { className: "right", color: "light", icon: "it-info-circle", "aria-hidden": true, size: "sm" })), /* @__PURE__ */ e.createElement(LinkListItem, { className: "right-icon", inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 3"), /* @__PURE__ */ e.createElement(Icon, { className: "right", color: "light", icon: "it-info-circle", "aria-hidden": true, size: "sm" })), /* @__PURE__ */ e.createElement(LinkListItem, { divider: true }), /* @__PURE__ */ e.createElement(LinkListItem, { className: "right-icon", inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 4"), /* @__PURE__ */ e.createElement(Icon, { className: "right", color: "light", icon: "it-info-circle", "aria-hidden": true, size: "sm" })), /* @__PURE__ */ e.createElement(LinkListItem, { disabled: true, className: "right-icon", inDropdown: true }, /* @__PURE__ */ e.createElement("span", null, "Azione 5 (disabilitato)"), /* @__PURE__ */ e.createElement(Icon, { className: "right", color: "light", icon: "it-info-circle", "aria-hidden": true, size: "sm" })))))
};
_MenuVociAttive.parameters = {
  ..._MenuVociAttive.parameters,
  docs: {
    ...(_a = _MenuVociAttive.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <div className='docs-show-dropdown-open'>\n      <DropdownMenu>\n        <LinkList>\n          <LinkListItem active inDropdown>\n            <span>\n              Azione 1<span className='visually-hidden'> attivo</span>\n            </span>\n          </LinkListItem>\n          <LinkListItem inDropdown>\n            <span>Azione 2</span>\n          </LinkListItem>\n          <LinkListItem inDropdown>\n            <span>Azione 3</span>\n          </LinkListItem>\n        </LinkList>\n      </DropdownMenu>\n    </div>\n}",
      ...(_c = (_b = _MenuVociAttive.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
_MenuVociDisabilitate.parameters = {
  ..._MenuVociDisabilitate.parameters,
  docs: {
    ...(_d = _MenuVociDisabilitate.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <div className='docs-show-dropdown-open'>\n      <DropdownMenu>\n        <LinkList>\n          <LinkListItem inDropdown>\n            <span>Azione 1</span>\n          </LinkListItem>\n          <LinkListItem disabled aria-disabled='true' inDropdown>\n            <span>Azione 2</span>\n          </LinkListItem>\n          <LinkListItem inDropdown>\n            <span>Azione 3</span>\n          </LinkListItem>\n        </LinkList>\n      </DropdownMenu>\n    </div>\n}",
      ...(_f = (_e = _MenuVociDisabilitate.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
MenuHeadersESeparatori.parameters = {
  ...MenuHeadersESeparatori.parameters,
  docs: {
    ...(_g = MenuHeadersESeparatori.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <div className='docs-show-dropdown-open'>\n      <DropdownMenu>\n        <LinkList>\n          <LinkListItem header inDropdown>\n            Header\n          </LinkListItem>\n          <LinkListItem>\n            <span>Azione 1</span>\n          </LinkListItem>\n          <LinkListItem inDropdown>\n            <span>Azione 2</span>\n          </LinkListItem>\n          <LinkListItem inDropdown>\n            <span>Azione 3</span>\n          </LinkListItem>\n          <LinkListItem divider />\n          <LinkListItem inDropdown>\n            <span>Azione 4</span>\n          </LinkListItem>\n        </LinkList>\n      </DropdownMenu>\n    </div>\n}",
      ...(_i = (_h = MenuHeadersESeparatori.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
MenuConVociLarge.parameters = {
  ...MenuConVociLarge.parameters,
  docs: {
    ...(_j = MenuConVociLarge.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <div className='docs-show-dropdown-open'>\n      <DropdownMenu>\n        <LinkList>\n          <LinkListItem large inDropdown>\n            <span>Azione 1</span>\n          </LinkListItem>\n          <LinkListItem large inDropdown>\n            <span>Azione 2</span>\n          </LinkListItem>\n          <LinkListItem large inDropdown>\n            <span>Azione 3</span>\n          </LinkListItem>\n        </LinkList>\n      </DropdownMenu>\n    </div>\n}",
      ...(_l = (_k = MenuConVociLarge.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
MenuFullWidth.parameters = {
  ...MenuFullWidth.parameters,
  docs: {
    ...(_m = MenuFullWidth.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: () => <div className='docs-show-dropdown-open'>\n      <DropdownMenu className='full-width'>\n        <LinkList>\n          <LinkListItem large inDropdown>\n            <span>Azione 1</span>\n          </LinkListItem>\n          <LinkListItem large inDropdown>\n            <span>Azione 2</span>\n          </LinkListItem>\n          <LinkListItem large inDropdown>\n            <span>Azione 3</span>\n          </LinkListItem>\n          <LinkListItem large inDropdown>\n            <span>Azione 4</span>\n          </LinkListItem>\n          <LinkListItem large inDropdown>\n            <span>Azione 5</span>\n          </LinkListItem>\n        </LinkList>\n      </DropdownMenu>\n    </div>\n}",
      ...(_o = (_n = MenuFullWidth.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
MenuIconaADestra.parameters = {
  ...MenuIconaADestra.parameters,
  docs: {
    ...(_p = MenuIconaADestra.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  render: () => <div className='docs-show-dropdown-open'>\n      <DropdownMenu>\n        <LinkList>\n          <LinkListItem className='right-icon' inDropdown>\n            <span>Azione 1</span>\n            <Icon className='right' color='primary' icon='it-info-circle' aria-hidden size='sm' />\n          </LinkListItem>\n          <LinkListItem className='right-icon' inDropdown>\n            <span>Azione 2</span>\n            <Icon className='right' color='primary' icon='it-info-circle' aria-hidden size='sm' />\n          </LinkListItem>\n          <LinkListItem className='right-icon' inDropdown>\n            <span>Azione 3</span>\n            <Icon className='right' color='primary' icon='it-info-circle' aria-hidden size='sm' />\n          </LinkListItem>\n        </LinkList>\n      </DropdownMenu>\n    </div>\n}",
      ...(_r = (_q = MenuIconaADestra.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
MenuIconaASinistra.parameters = {
  ...MenuIconaASinistra.parameters,
  docs: {
    ...(_s = MenuIconaASinistra.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  render: () => <div className='docs-show-dropdown-open'>\n      <DropdownMenu>\n        <LinkList>\n          <LinkListItem className='left-icon' inDropdown>\n            <Icon className='left' color='primary' icon='it-info-circle' aria-hidden size='sm' />\n            <span>Azione 1</span>\n          </LinkListItem>\n          <LinkListItem className='left-icon' inDropdown>\n            <Icon className='left' color='primary' icon='it-info-circle' aria-hidden size='sm' />\n            <span>Azione 2</span>\n          </LinkListItem>\n          <LinkListItem className='left-icon' inDropdown>\n            <Icon className='left' color='primary' icon='it-info-circle' aria-hidden size='sm' />\n            <span>Azione 3</span>\n          </LinkListItem>\n        </LinkList>\n      </DropdownMenu>\n    </div>\n}",
      ...(_u = (_t = MenuIconaASinistra.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
_MenuDark.parameters = {
  ..._MenuDark.parameters,
  docs: {
    ...(_v = _MenuDark.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  render: () => <div className='docs-show-dropdown-open'>\n      <DropdownMenu className='dark'>\n        <LinkList>\n          <LinkListItem header>Header</LinkListItem>\n          <LinkListItem active className='right-icon' inDropdown>\n            <span>Azione 1 (attivo)</span>\n            <Icon className='right' color='light' icon='it-info-circle' aria-hidden size='sm' />\n          </LinkListItem>\n          <LinkListItem className='right-icon' inDropdown>\n            <span>Azione 2</span>\n            <Icon className='right' color='light' icon='it-info-circle' aria-hidden size='sm' />\n          </LinkListItem>\n          <LinkListItem className='right-icon' inDropdown>\n            <span>Azione 3</span>\n            <Icon className='right' color='light' icon='it-info-circle' aria-hidden size='sm' />\n          </LinkListItem>\n          <LinkListItem divider />\n          <LinkListItem className='right-icon' inDropdown>\n            <span>Azione 4</span>\n            <Icon className='right' color='light' icon='it-info-circle' aria-hidden size='sm' />\n          </LinkListItem>\n          <LinkListItem disabled className='right-icon' inDropdown>\n            <span>Azione 5 (disabilitato)</span>\n            <Icon className='right' color='light' icon='it-info-circle' aria-hidden size='sm' />\n          </LinkListItem>\n        </LinkList>\n      </DropdownMenu>\n    </div>\n}",
      ...(_x = (_w = _MenuDark.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
const __namedExportsOrder = ["_MenuVociAttive", "_MenuVociDisabilitate", "MenuHeadersESeparatori", "MenuConVociLarge", "MenuFullWidth", "MenuIconaADestra", "MenuIconaASinistra", "_MenuDark"];
export {
  MenuConVociLarge,
  MenuFullWidth,
  MenuHeadersESeparatori,
  MenuIconaADestra,
  MenuIconaASinistra,
  _MenuDark,
  _MenuVociAttive,
  _MenuVociDisabilitate,
  __namedExportsOrder,
  meta as default
};