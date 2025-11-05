var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua;
import { e } from "./iframe-bYA1CaqE.js";
import { R as Row, C as Col } from "./Col-Bw1MHWJi.js";
import { I as Icon } from "./Icon-DeQEcrNU.js";
import { T as TabNav, a as TabContainer, b as TabNavItem, c as TabNavLink, d as TabContent, e as TabPane } from "./TabNavLink-COegz7yK.js";
import "./track-focus-DbJ2CO43.js";
const meta = {
  title: "Documentazione/Componenti/Tab",
  component: TabNav
};
const TestualeFull = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, { className: "auto" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Attivo")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Disattivo"))))
};
const IconaFull = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, { className: "auto" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1"))))))
};
const IconaGrandeFull = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, { className: "nav-tabs-icon-lg auto" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-link", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-calendar", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-comment", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-close", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1"))))))
};
const TestoIconaFull = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, { className: "auto" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }), "Tab 1")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }), "Tab 2")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }), "Tab 3")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), "Tab 4"))))
};
const Testuale = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, null, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Attivo")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Disattivo"))))
};
const Icona = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, null, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1"))))))
};
const IconaGrande = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, { className: "nav-tabs-icon-lg" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-link", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-calendar", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-comment", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-close", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1"))))))
};
const TestoIcona = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, null, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }), "Tab 1")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }), "Tab 2")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }), "Tab 3")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), "Tab 4"))))
};
const Hidescroll = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "nav-tabs-hidescroll hidescroll-ico" }, /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, { className: "auto" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Attivo")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "5" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "6" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "7" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "8" }, "Link")))))
};
const TestualePannel = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, null, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Attivo")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Disattivo"))), /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))
};
const IconaPannel = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, null, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1"))))), /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))
};
const IconaGrandePannel = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, { className: "nav-tabs-icon-lg" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-link", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-calendar", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-comment", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-close", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1"))))), /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))
};
const TestoIconaPannel = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, null, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }), "Tab 1")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }), "Tab 2")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }), "Tab 3")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), "Tab 4"))), /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))
};
const TestualePannelVertical = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 3 }, /* @__PURE__ */ e.createElement(TabNav, { vertical: true }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Attivo")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Disattivo")))), /* @__PURE__ */ e.createElement(Col, { sm: 9 }, /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))))
};
const TestualePannelVerticalBackground = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 3 }, /* @__PURE__ */ e.createElement(TabNav, { vertical: true, className: "nav-tabs-vertical-background" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Attivo")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Disattivo")))), /* @__PURE__ */ e.createElement(Col, { sm: 9 }, /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))))
};
const TestoIconaPannelVertical = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 3 }, /* @__PURE__ */ e.createElement(TabNav, { vertical: true }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Tab 1", /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Tab 2", /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Tab 3", /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Tab 4", /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }))))), /* @__PURE__ */ e.createElement(Col, { sm: 9 }, /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))))
};
const TestoPannelVertical = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 3 }, /* @__PURE__ */ e.createElement(TabNav, { vertical: true }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1", className: "justify-content-end" }, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab 1"), /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2", className: "justify-content-end" }, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab 2"), /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3", className: "justify-content-end" }, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab 3"), /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", className: "justify-content-end", disabled: true }, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab 4"), /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }))))), /* @__PURE__ */ e.createElement(Col, { sm: 9 }, /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))))
};
const TestualePannelReverseBottom = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement("div", { className: "d-flex flex-column-reverse" }, /* @__PURE__ */ e.createElement(TabNav, null, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Attivo")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Disattivo"))), /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4"))))
};
const TestualePannelReverseRight = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(Row, { className: "flex-row-reverse" }, /* @__PURE__ */ e.createElement(Col, { xs: "6", md: "4", lg: "3" }, /* @__PURE__ */ e.createElement(TabNav, { vertical: true }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Attivo")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Disattivo")))), /* @__PURE__ */ e.createElement(Col, { xs: "6", md: "8", lg: "9" }, /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))))
};
const TestualeFullDark = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, { dark: true, className: "auto" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Attivo")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Disattivo"))))
};
const TestoIconaFullDark = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, { dark: true, className: "auto" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }), "Tab 1")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }), "Tab 2")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }), "Tab 3")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), "Tab 4"))))
};
const TestoIconaPannelVerticalDark = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 3 }, /* @__PURE__ */ e.createElement(TabNav, { vertical: true, dark: true }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Tab 1", /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Tab 2", /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Tab 3", /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Tab 4", /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }))))), /* @__PURE__ */ e.createElement(Col, { sm: 9 }, /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))))
};
const TestualePannelReverseRightDark = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(Row, { className: "flex-row-reverse" }, /* @__PURE__ */ e.createElement(Col, { xs: "6", md: "4", lg: "3" }, /* @__PURE__ */ e.createElement(TabNav, { vertical: true, dark: true }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }), "Tab 1")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }), "Tab 2")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }), "Tab 3")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), "Tab 4")))), /* @__PURE__ */ e.createElement(Col, { xs: "6", md: "8", lg: "9" }, /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))))
};
const TestualePannelCard = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, { card: true }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Attivo")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Disattivo"))), /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))
};
const TestualePannelCardEditable = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement("div", { className: "nav-tabs-wrapper" }, /* @__PURE__ */ e.createElement(TabNav, { card: true, className: "nav-tabs-editable" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Tab 1"), /* @__PURE__ */ e.createElement("div", { className: "nav-link-close" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, " Chiudi tab 1"))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Tab 2"), /* @__PURE__ */ e.createElement("div", { className: "nav-link-close" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, " Chiudi tab 2"))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Tab 3"), /* @__PURE__ */ e.createElement("div", { className: "nav-link-close" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, " Chiudi tab 3"))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Disattivo"), /* @__PURE__ */ e.createElement("div", { className: "nav-link-close disabled" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, " Chiudi tab 4"))), /* @__PURE__ */ e.createElement("li", { className: "nav-item-filler" }), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement("a", { className: "nav-tab-add" }, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, " Aggiungi un tab"))))), /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))
};
TestualeFull.parameters = {
  ...TestualeFull.parameters,
  docs: {
    ...(_a = TestualeFull.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav className='auto'>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>Attivo</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>Link</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>Link</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            Disattivo\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n    </TabContainer>\n}",
      ...(_c = (_b = TestualeFull.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
IconaFull.parameters = {
  ...IconaFull.parameters,
  docs: {
    ...(_d = IconaFull.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav className='auto'>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>\n            <span>\n              <Icon icon='it-link' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>\n            <span>\n              <Icon icon='it-calendar' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>\n            <span>\n              <Icon icon='it-comment' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            <span>\n              <Icon icon='it-close' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n    </TabContainer>\n}",
      ...(_f = (_e = IconaFull.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
IconaGrandeFull.parameters = {
  ...IconaGrandeFull.parameters,
  docs: {
    ...(_g = IconaGrandeFull.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav className='nav-tabs-icon-lg auto'>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>\n            <span>\n              <Icon className='icon-lg' icon='it-link' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>\n            <span>\n              <Icon className='icon-lg' icon='it-calendar' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>\n            <span>\n              <Icon className='icon-lg' icon='it-comment' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            <span>\n              <Icon className='icon-lg' icon='it-close' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n    </TabContainer>\n}",
      ...(_i = (_h = IconaGrandeFull.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
TestoIconaFull.parameters = {
  ...TestoIconaFull.parameters,
  docs: {
    ...(_j = TestoIconaFull.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav className='auto'>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>\n            <Icon icon='it-link' aria-hidden />\n            Tab 1\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>\n            <Icon icon='it-calendar' aria-hidden />\n            Tab 2\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>\n            <Icon icon='it-comment' aria-hidden />\n            Tab 3\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            <Icon icon='it-close' aria-hidden />\n            Tab 4\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n    </TabContainer>\n}",
      ...(_l = (_k = TestoIconaFull.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Testuale.parameters = {
  ...Testuale.parameters,
  docs: {
    ...(_m = Testuale.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>Attivo</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>Link</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>Link</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            Disattivo\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n    </TabContainer>\n}",
      ...(_o = (_n = Testuale.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
Icona.parameters = {
  ...Icona.parameters,
  docs: {
    ...(_p = Icona.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>\n            <span>\n              <Icon icon='it-link' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>\n            <span>\n              <Icon icon='it-calendar' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>\n            <span>\n              <Icon icon='it-comment' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            <span>\n              <Icon icon='it-close' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n    </TabContainer>\n}",
      ...(_r = (_q = Icona.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
IconaGrande.parameters = {
  ...IconaGrande.parameters,
  docs: {
    ...(_s = IconaGrande.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav className='nav-tabs-icon-lg'>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>\n            <span>\n              <Icon className='icon-lg' icon='it-link' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>\n            <span>\n              <Icon className='icon-lg' icon='it-calendar' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>\n            <span>\n              <Icon className='icon-lg' icon='it-comment' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            <span>\n              <Icon className='icon-lg' icon='it-close' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n    </TabContainer>\n}",
      ...(_u = (_t = IconaGrande.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
TestoIcona.parameters = {
  ...TestoIcona.parameters,
  docs: {
    ...(_v = TestoIcona.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>\n            <Icon icon='it-link' aria-hidden />\n            Tab 1\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>\n            <Icon icon='it-calendar' aria-hidden />\n            Tab 2\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>\n            <Icon icon='it-comment' aria-hidden />\n            Tab 3\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            <Icon icon='it-close' aria-hidden />\n            Tab 4\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n    </TabContainer>\n}",
      ...(_x = (_w = TestoIcona.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
Hidescroll.parameters = {
  ...Hidescroll.parameters,
  docs: {
    ...(_y = Hidescroll.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  render: () => <div className='nav-tabs-hidescroll hidescroll-ico'>\n      <TabContainer defaultActiveKey='1'>\n        <TabNav className='auto'>\n          <TabNavItem>\n            <TabNavLink eventKey='1'>Attivo</TabNavLink>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='2'>Link</TabNavLink>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='3'>Link</TabNavLink>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='4'>Link</TabNavLink>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='5'>Link</TabNavLink>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='6'>Link</TabNavLink>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='7'>Link</TabNavLink>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='8'>Link</TabNavLink>\n          </TabNavItem>\n        </TabNav>\n      </TabContainer>\n    </div>\n}",
      ...(_A = (_z = Hidescroll.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
TestualePannel.parameters = {
  ...TestualePannel.parameters,
  docs: {
    ...(_B = TestualePannel.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>Attivo</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>Link</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>Link</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            Disattivo\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n      <TabContent>\n        <TabPane eventKey='1' className='p-4'>\n          Contenuto 1\n        </TabPane>\n        <TabPane eventKey='2' className='p-4'>\n          Contenuto 2\n        </TabPane>\n        <TabPane eventKey='3' className='p-4'>\n          Contenuto 3\n        </TabPane>\n        <TabPane eventKey='4' className='p-4'>\n          Contenuto 4\n        </TabPane>\n      </TabContent>\n    </TabContainer>\n}",
      ...(_D = (_C = TestualePannel.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
IconaPannel.parameters = {
  ...IconaPannel.parameters,
  docs: {
    ...(_E = IconaPannel.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>\n            <span>\n              <Icon icon='it-link' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>\n            <span>\n              <Icon icon='it-calendar' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>\n            <span>\n              <Icon icon='it-comment' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            <span>\n              <Icon icon='it-close' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n      <TabContent>\n        <TabPane eventKey='1' className='p-4'>\n          Contenuto 1\n        </TabPane>\n        <TabPane eventKey='2' className='p-4'>\n          Contenuto 2\n        </TabPane>\n        <TabPane eventKey='3' className='p-4'>\n          Contenuto 3\n        </TabPane>\n        <TabPane eventKey='4' className='p-4'>\n          Contenuto 4\n        </TabPane>\n      </TabContent>\n    </TabContainer>\n}",
      ...(_G = (_F = IconaPannel.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
IconaGrandePannel.parameters = {
  ...IconaGrandePannel.parameters,
  docs: {
    ...(_H = IconaGrandePannel.parameters) == null ? void 0 : _H.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav className='nav-tabs-icon-lg'>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>\n            <span>\n              <Icon className='icon-lg' icon='it-link' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>\n            <span>\n              <Icon className='icon-lg' icon='it-calendar' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>\n            <span>\n              <Icon className='icon-lg' icon='it-comment' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            <span>\n              <Icon className='icon-lg' icon='it-close' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n      <TabContent>\n        <TabPane eventKey='1' className='p-4'>\n          Contenuto 1\n        </TabPane>\n        <TabPane eventKey='2' className='p-4'>\n          Contenuto 2\n        </TabPane>\n        <TabPane eventKey='3' className='p-4'>\n          Contenuto 3\n        </TabPane>\n        <TabPane eventKey='4' className='p-4'>\n          Contenuto 4\n        </TabPane>\n      </TabContent>\n    </TabContainer>\n}",
      ...(_J = (_I = IconaGrandePannel.parameters) == null ? void 0 : _I.docs) == null ? void 0 : _J.source
    }
  }
};
TestoIconaPannel.parameters = {
  ...TestoIconaPannel.parameters,
  docs: {
    ...(_K = TestoIconaPannel.parameters) == null ? void 0 : _K.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>\n            <Icon icon='it-link' aria-hidden />\n            Tab 1\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>\n            <Icon icon='it-calendar' aria-hidden />\n            Tab 2\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>\n            <Icon icon='it-comment' aria-hidden />\n            Tab 3\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            <Icon icon='it-close' aria-hidden />\n            Tab 4\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n      <TabContent>\n        <TabPane eventKey='1' className='p-4'>\n          Contenuto 1\n        </TabPane>\n        <TabPane eventKey='2' className='p-4'>\n          Contenuto 2\n        </TabPane>\n        <TabPane eventKey='3' className='p-4'>\n          Contenuto 3\n        </TabPane>\n        <TabPane eventKey='4' className='p-4'>\n          Contenuto 4\n        </TabPane>\n      </TabContent>\n    </TabContainer>\n}",
      ...(_M = (_L = TestoIconaPannel.parameters) == null ? void 0 : _L.docs) == null ? void 0 : _M.source
    }
  }
};
TestualePannelVertical.parameters = {
  ...TestualePannelVertical.parameters,
  docs: {
    ...(_N = TestualePannelVertical.parameters) == null ? void 0 : _N.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <Row>\n        <Col sm={3}>\n          <TabNav vertical>\n            <TabNavItem>\n              <TabNavLink eventKey='1'>Attivo</TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='2'>Link</TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='3'>Link</TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='4' disabled>\n                Disattivo\n              </TabNavLink>\n            </TabNavItem>\n          </TabNav>\n        </Col>\n        <Col sm={9}>\n          <TabContent>\n            <TabPane eventKey='1' className='p-4'>\n              Contenuto 1\n            </TabPane>\n            <TabPane eventKey='2' className='p-4'>\n              Contenuto 2\n            </TabPane>\n            <TabPane eventKey='3' className='p-4'>\n              Contenuto 3\n            </TabPane>\n            <TabPane eventKey='4' className='p-4'>\n              Contenuto 4\n            </TabPane>\n          </TabContent>\n        </Col>\n      </Row>\n    </TabContainer>\n}",
      ...(_P = (_O = TestualePannelVertical.parameters) == null ? void 0 : _O.docs) == null ? void 0 : _P.source
    }
  }
};
TestualePannelVerticalBackground.parameters = {
  ...TestualePannelVerticalBackground.parameters,
  docs: {
    ...(_Q = TestualePannelVerticalBackground.parameters) == null ? void 0 : _Q.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <Row>\n        <Col sm={3}>\n          <TabNav vertical className='nav-tabs-vertical-background'>\n            <TabNavItem>\n              <TabNavLink eventKey='1'>Attivo</TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='2'>Link</TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='3'>Link</TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='4' disabled>\n                Disattivo\n              </TabNavLink>\n            </TabNavItem>\n          </TabNav>\n        </Col>\n        <Col sm={9}>\n          <TabContent>\n            <TabPane eventKey='1' className='p-4'>\n              Contenuto 1\n            </TabPane>\n            <TabPane eventKey='2' className='p-4'>\n              Contenuto 2\n            </TabPane>\n            <TabPane eventKey='3' className='p-4'>\n              Contenuto 3\n            </TabPane>\n            <TabPane eventKey='4' className='p-4'>\n              Contenuto 4\n            </TabPane>\n          </TabContent>\n        </Col>\n      </Row>\n    </TabContainer>\n}",
      ...(_S = (_R = TestualePannelVerticalBackground.parameters) == null ? void 0 : _R.docs) == null ? void 0 : _S.source
    }
  }
};
TestoIconaPannelVertical.parameters = {
  ...TestoIconaPannelVertical.parameters,
  docs: {
    ...(_T = TestoIconaPannelVertical.parameters) == null ? void 0 : _T.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <Row>\n        <Col sm={3}>\n          <TabNav vertical>\n            <TabNavItem>\n              <TabNavLink eventKey='1'>\n                Tab 1\n                <Icon icon='it-link' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='2'>\n                Tab 2\n                <Icon icon='it-calendar' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='3'>\n                Tab 3\n                <Icon icon='it-comment' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='4' disabled>\n                Tab 4\n                <Icon icon='it-close' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n          </TabNav>\n        </Col>\n        <Col sm={9}>\n          <TabContent>\n            <TabPane eventKey='1' className='p-4'>\n              Contenuto 1\n            </TabPane>\n            <TabPane eventKey='2' className='p-4'>\n              Contenuto 2\n            </TabPane>\n            <TabPane eventKey='3' className='p-4'>\n              Contenuto 3\n            </TabPane>\n            <TabPane eventKey='4' className='p-4'>\n              Contenuto 4\n            </TabPane>\n          </TabContent>\n        </Col>\n      </Row>\n    </TabContainer>\n}",
      ...(_V = (_U = TestoIconaPannelVertical.parameters) == null ? void 0 : _U.docs) == null ? void 0 : _V.source
    }
  }
};
TestoPannelVertical.parameters = {
  ...TestoPannelVertical.parameters,
  docs: {
    ...(_W = TestoPannelVertical.parameters) == null ? void 0 : _W.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <Row>\n        <Col sm={3}>\n          <TabNav vertical>\n            <TabNavItem>\n              <TabNavLink eventKey='1' className='justify-content-end'>\n                <span className='visually-hidden'>Tab 1</span>\n                <Icon icon='it-link' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='2' className='justify-content-end'>\n                <span className='visually-hidden'>Tab 2</span>\n                <Icon icon='it-calendar' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='3' className='justify-content-end'>\n                <span className='visually-hidden'>Tab 3</span>\n                <Icon icon='it-comment' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='4' className='justify-content-end' disabled>\n                <span className='visually-hidden'>Tab 4</span>\n                <Icon icon='it-close' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n          </TabNav>\n        </Col>\n        <Col sm={9}>\n          <TabContent>\n            <TabPane eventKey='1' className='p-4'>\n              Contenuto 1\n            </TabPane>\n            <TabPane eventKey='2' className='p-4'>\n              Contenuto 2\n            </TabPane>\n            <TabPane eventKey='3' className='p-4'>\n              Contenuto 3\n            </TabPane>\n            <TabPane eventKey='4' className='p-4'>\n              Contenuto 4\n            </TabPane>\n          </TabContent>\n        </Col>\n      </Row>\n    </TabContainer>\n}",
      ...(_Y = (_X = TestoPannelVertical.parameters) == null ? void 0 : _X.docs) == null ? void 0 : _Y.source
    }
  }
};
TestualePannelReverseBottom.parameters = {
  ...TestualePannelReverseBottom.parameters,
  docs: {
    ...(_Z = TestualePannelReverseBottom.parameters) == null ? void 0 : _Z.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <div className='d-flex flex-column-reverse'>\n        <TabNav>\n          <TabNavItem>\n            <TabNavLink eventKey='1'>Attivo</TabNavLink>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='2'>Link</TabNavLink>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='3'>Link</TabNavLink>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='4' disabled>\n              Disattivo\n            </TabNavLink>\n          </TabNavItem>\n        </TabNav>\n        <TabContent>\n          <TabPane eventKey='1' className='p-4'>\n            Contenuto 1\n          </TabPane>\n          <TabPane eventKey='2' className='p-4'>\n            Contenuto 2\n          </TabPane>\n          <TabPane eventKey='3' className='p-4'>\n            Contenuto 3\n          </TabPane>\n          <TabPane eventKey='4' className='p-4'>\n            Contenuto 4\n          </TabPane>\n        </TabContent>\n      </div>\n    </TabContainer>\n}",
      ...(_$ = (__ = TestualePannelReverseBottom.parameters) == null ? void 0 : __.docs) == null ? void 0 : _$.source
    }
  }
};
TestualePannelReverseRight.parameters = {
  ...TestualePannelReverseRight.parameters,
  docs: {
    ...(_aa = TestualePannelReverseRight.parameters) == null ? void 0 : _aa.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <Row className='flex-row-reverse'>\n        <Col xs='6' md='4' lg='3'>\n          <TabNav vertical>\n            <TabNavItem>\n              <TabNavLink eventKey='1'>Attivo</TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='2'>Link</TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='3'>Link</TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='4' disabled>\n                Disattivo\n              </TabNavLink>\n            </TabNavItem>\n          </TabNav>\n        </Col>\n        <Col xs='6' md='8' lg='9'>\n          <TabContent>\n            <TabPane eventKey='1' className='p-4'>\n              Contenuto 1\n            </TabPane>\n            <TabPane eventKey='2' className='p-4'>\n              Contenuto 2\n            </TabPane>\n            <TabPane eventKey='3' className='p-4'>\n              Contenuto 3\n            </TabPane>\n            <TabPane eventKey='4' className='p-4'>\n              Contenuto 4\n            </TabPane>\n          </TabContent>\n        </Col>\n      </Row>\n    </TabContainer>\n}",
      ...(_ca = (_ba = TestualePannelReverseRight.parameters) == null ? void 0 : _ba.docs) == null ? void 0 : _ca.source
    }
  }
};
TestualeFullDark.parameters = {
  ...TestualeFullDark.parameters,
  docs: {
    ...(_da = TestualeFullDark.parameters) == null ? void 0 : _da.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav dark className='auto'>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>Attivo</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>Link</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>Link</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            Disattivo\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n    </TabContainer>\n}",
      ...(_fa = (_ea = TestualeFullDark.parameters) == null ? void 0 : _ea.docs) == null ? void 0 : _fa.source
    }
  }
};
TestoIconaFullDark.parameters = {
  ...TestoIconaFullDark.parameters,
  docs: {
    ...(_ga = TestoIconaFullDark.parameters) == null ? void 0 : _ga.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav dark className='auto'>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>\n            <Icon icon='it-link' aria-hidden />\n            Tab 1\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>\n            <Icon icon='it-calendar' aria-hidden />\n            Tab 2\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>\n            <Icon icon='it-comment' aria-hidden />\n            Tab 3\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            <Icon icon='it-close' aria-hidden />\n            Tab 4\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n    </TabContainer>\n}",
      ...(_ia = (_ha = TestoIconaFullDark.parameters) == null ? void 0 : _ha.docs) == null ? void 0 : _ia.source
    }
  }
};
TestoIconaPannelVerticalDark.parameters = {
  ...TestoIconaPannelVerticalDark.parameters,
  docs: {
    ...(_ja = TestoIconaPannelVerticalDark.parameters) == null ? void 0 : _ja.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <Row>\n        <Col sm={3}>\n          <TabNav vertical dark>\n            <TabNavItem>\n              <TabNavLink eventKey='1'>\n                Tab 1\n                <Icon icon='it-link' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='2'>\n                Tab 2\n                <Icon icon='it-calendar' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='3'>\n                Tab 3\n                <Icon icon='it-comment' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='4' disabled>\n                Tab 4\n                <Icon icon='it-close' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n          </TabNav>\n        </Col>\n        <Col sm={9}>\n          <TabContent>\n            <TabPane eventKey='1' className='p-4'>\n              Contenuto 1\n            </TabPane>\n            <TabPane eventKey='2' className='p-4'>\n              Contenuto 2\n            </TabPane>\n            <TabPane eventKey='3' className='p-4'>\n              Contenuto 3\n            </TabPane>\n            <TabPane eventKey='4' className='p-4'>\n              Contenuto 4\n            </TabPane>\n          </TabContent>\n        </Col>\n      </Row>\n    </TabContainer>\n}",
      ...(_la = (_ka = TestoIconaPannelVerticalDark.parameters) == null ? void 0 : _ka.docs) == null ? void 0 : _la.source
    }
  }
};
TestualePannelReverseRightDark.parameters = {
  ...TestualePannelReverseRightDark.parameters,
  docs: {
    ...(_ma = TestualePannelReverseRightDark.parameters) == null ? void 0 : _ma.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <Row className='flex-row-reverse'>\n        <Col xs='6' md='4' lg='3'>\n          <TabNav vertical dark>\n            <TabNavItem>\n              <TabNavLink eventKey='1'>\n                <Icon icon='it-link' aria-hidden />\n                Tab 1\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='2'>\n                <Icon icon='it-calendar' aria-hidden />\n                Tab 2\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='3'>\n                <Icon icon='it-comment' aria-hidden />\n                Tab 3\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='4' disabled>\n                <Icon icon='it-close' aria-hidden />\n                Tab 4\n              </TabNavLink>\n            </TabNavItem>\n          </TabNav>\n        </Col>\n        <Col xs='6' md='8' lg='9'>\n          <TabContent>\n            <TabPane eventKey='1' className='p-4'>\n              Contenuto 1\n            </TabPane>\n            <TabPane eventKey='2' className='p-4'>\n              Contenuto 2\n            </TabPane>\n            <TabPane eventKey='3' className='p-4'>\n              Contenuto 3\n            </TabPane>\n            <TabPane eventKey='4' className='p-4'>\n              Contenuto 4\n            </TabPane>\n          </TabContent>\n        </Col>\n      </Row>\n    </TabContainer>\n}",
      ...(_oa = (_na = TestualePannelReverseRightDark.parameters) == null ? void 0 : _na.docs) == null ? void 0 : _oa.source
    }
  }
};
TestualePannelCard.parameters = {
  ...TestualePannelCard.parameters,
  docs: {
    ...(_pa = TestualePannelCard.parameters) == null ? void 0 : _pa.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav card>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>Attivo</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>Link</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>Link</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            Disattivo\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n      <TabContent>\n        <TabPane eventKey='1' className='p-4'>\n          Contenuto 1\n        </TabPane>\n        <TabPane eventKey='2' className='p-4'>\n          Contenuto 2\n        </TabPane>\n        <TabPane eventKey='3' className='p-4'>\n          Contenuto 3\n        </TabPane>\n        <TabPane eventKey='4' className='p-4'>\n          Contenuto 4\n        </TabPane>\n      </TabContent>\n    </TabContainer>\n}",
      ...(_ra = (_qa = TestualePannelCard.parameters) == null ? void 0 : _qa.docs) == null ? void 0 : _ra.source
    }
  }
};
TestualePannelCardEditable.parameters = {
  ...TestualePannelCardEditable.parameters,
  docs: {
    ...(_sa = TestualePannelCardEditable.parameters) == null ? void 0 : _sa.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <div className='nav-tabs-wrapper'>\n        <TabNav card className='nav-tabs-editable'>\n          <TabNavItem>\n            <TabNavLink eventKey='1'>Tab 1</TabNavLink>\n            <div className='nav-link-close'>\n              <Icon icon='it-close' aria-hidden />\n              <span className='visually-hidden'> Chiudi tab 1</span>\n            </div>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='2'>Tab 2</TabNavLink>\n            <div className='nav-link-close'>\n              <Icon icon='it-close' aria-hidden />\n              <span className='visually-hidden'> Chiudi tab 2</span>\n            </div>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='3'>Tab 3</TabNavLink>\n            <div className='nav-link-close'>\n              <Icon icon='it-close' aria-hidden />\n              <span className='visually-hidden'> Chiudi tab 3</span>\n            </div>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='4' disabled>\n              Disattivo\n            </TabNavLink>\n            <div className='nav-link-close disabled'>\n              <Icon icon='it-close' aria-hidden />\n              <span className='visually-hidden'> Chiudi tab 4</span>\n            </div>\n          </TabNavItem>\n          <li className='nav-item-filler'></li>\n          <TabNavItem>\n            <a className='nav-tab-add'>\n              <span className='visually-hidden'> Aggiungi un tab</span>\n            </a>\n          </TabNavItem>\n        </TabNav>\n      </div>\n      <TabContent>\n        <TabPane eventKey='1' className='p-4'>\n          Contenuto 1\n        </TabPane>\n        <TabPane eventKey='2' className='p-4'>\n          Contenuto 2\n        </TabPane>\n        <TabPane eventKey='3' className='p-4'>\n          Contenuto 3\n        </TabPane>\n        <TabPane eventKey='4' className='p-4'>\n          Contenuto 4\n        </TabPane>\n      </TabContent>\n    </TabContainer>\n}",
      ...(_ua = (_ta = TestualePannelCardEditable.parameters) == null ? void 0 : _ta.docs) == null ? void 0 : _ua.source
    }
  }
};
const __namedExportsOrder = ["TestualeFull", "IconaFull", "IconaGrandeFull", "TestoIconaFull", "Testuale", "Icona", "IconaGrande", "TestoIcona", "Hidescroll", "TestualePannel", "IconaPannel", "IconaGrandePannel", "TestoIconaPannel", "TestualePannelVertical", "TestualePannelVerticalBackground", "TestoIconaPannelVertical", "TestoPannelVertical", "TestualePannelReverseBottom", "TestualePannelReverseRight", "TestualeFullDark", "TestoIconaFullDark", "TestoIconaPannelVerticalDark", "TestualePannelReverseRightDark", "TestualePannelCard", "TestualePannelCardEditable"];
const TabStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Hidescroll,
  Icona,
  IconaFull,
  IconaGrande,
  IconaGrandeFull,
  IconaGrandePannel,
  IconaPannel,
  TestoIcona,
  TestoIconaFull,
  TestoIconaFullDark,
  TestoIconaPannel,
  TestoIconaPannelVertical,
  TestoIconaPannelVerticalDark,
  TestoPannelVertical,
  Testuale,
  TestualeFull,
  TestualeFullDark,
  TestualePannel,
  TestualePannelCard,
  TestualePannelCardEditable,
  TestualePannelReverseBottom,
  TestualePannelReverseRight,
  TestualePannelReverseRightDark,
  TestualePannelVertical,
  TestualePannelVerticalBackground,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Hidescroll as H,
  IconaFull as I,
  TabStories as T,
  TestualeFull as a,
  IconaGrandeFull as b,
  TestoIconaFull as c,
  Testuale as d,
  Icona as e,
  IconaGrande as f,
  TestoIcona as g,
  TestualePannel as h,
  IconaPannel as i,
  IconaGrandePannel as j,
  TestoIconaPannel as k,
  TestualePannelVertical as l,
  TestualePannelVerticalBackground as m,
  TestoIconaPannelVertical as n,
  TestoPannelVertical as o,
  TestualePannelReverseBottom as p,
  TestualePannelReverseRight as q,
  TestualeFullDark as r,
  TestoIconaFullDark as s,
  TestoIconaPannelVerticalDark as t,
  TestualePannelReverseRightDark as u,
  TestualePannelCard as v,
  TestualePannelCardEditable as w
};
