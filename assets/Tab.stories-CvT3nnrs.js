var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { e, r as reactExports } from "./index-BehpJNG5.js";
import { N as Nav } from "./Nav-NOEIohim.js";
import { N as NavItem, a as NavLink } from "./NavLink-_42ff20l.js";
import { C as Container } from "./Container-DM0Kn0QD.js";
import { R as Row, C as Col } from "./Col-CBduUdZh.js";
import { T as TabContent, a as TabPane } from "./TabPane-6eVwlaUT.js";
import { I as Icon } from "./Icon-CwbcXiv7.js";
const meta = {
  title: "Documentazione/Componenti/Tab",
  component: Nav
};
const Esempi = {
  render: () => /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Nav, { tabs: true, className: "mb-3" }, /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: true }, "Link Attivo")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, "Link")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, "Link")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", disabled: true }, "Link disabilitato"))), /* @__PURE__ */ e.createElement(Nav, { tabs: true, className: "nav-dark" }, /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: true }, "Link Attivo")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, "Link")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, "Link")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", disabled: true }, "Link disabilitato"))))
};
const TestoWithHooks = () => {
  const [activeTab, toggleTab] = reactExports.useState("1");
  return /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Nav, { tabs: true, className: "mb-3" }, /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "1", onClick: () => {
    if (activeTab !== "1") {
      toggleTab("1");
    }
  } }, /* @__PURE__ */ e.createElement("span", null, "Tab titolo 1"))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "2", onClick: () => {
    if (activeTab !== "2") {
      toggleTab("2");
    }
  } }, /* @__PURE__ */ e.createElement("span", null, "Tab titolo 2"))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "3", onClick: () => {
    if (activeTab !== "3") {
      toggleTab("3");
    }
  } }, /* @__PURE__ */ e.createElement("span", null, "Tab titolo 3")))), /* @__PURE__ */ e.createElement(TabContent, { activeTab }, /* @__PURE__ */ e.createElement(TabPane, { tabId: "1", className: "p-3" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), /* @__PURE__ */ e.createElement(TabPane, { tabId: "2", className: "p-3" }, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), /* @__PURE__ */ e.createElement(TabPane, { tabId: "3", className: "p-3" }, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")));
};
const Testo = {
  render: () => /* @__PURE__ */ e.createElement(TestoWithHooks, null),
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const IconaWithHooks = () => {
  const [activeTab, toggleTab] = reactExports.useState("1");
  return /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Nav, { tabs: true, className: "mb-3" }, /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "1", onClick: () => {
    if (activeTab !== "1") {
      toggleTab("1");
    }
  } }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { color: "primary", icon: "it-link", "aria-hidden": true }), /* @__PURE__ */ e.createElement("i", { className: "it-ico-lg it-file d-block text-center", "aria-label": "Tab titolo 1" })))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "2", onClick: () => {
    if (activeTab !== "2") {
      toggleTab("2");
    }
  } }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { color: "primary", icon: "it-calendar", "aria-hidden": true }), /* @__PURE__ */ e.createElement("i", { className: "it-ico-lg it-calendar d-block text-center", "aria-label": "Tab titolo 2" })))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "3", onClick: () => {
    if (activeTab !== "3") {
      toggleTab("3");
    }
  } }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { color: "primary", icon: "it-comment", "aria-hidden": true }), /* @__PURE__ */ e.createElement("i", { className: "it-ico-lg it-comment d-block text-center", "aria-label": "Tab titolo 3" }))))), /* @__PURE__ */ e.createElement(TabContent, { activeTab }, /* @__PURE__ */ e.createElement(TabPane, { tabId: "1", className: "p-3" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), /* @__PURE__ */ e.createElement(TabPane, { tabId: "2", className: "p-3" }, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), /* @__PURE__ */ e.createElement(TabPane, { tabId: "3", className: "p-3" }, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")));
};
const Icona = {
  render: () => /* @__PURE__ */ e.createElement(IconaWithHooks, null),
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const TestoIconaWithHooks = () => {
  const [activeTab, toggleTab] = reactExports.useState("1");
  return /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Nav, { tabs: true, className: "mb-3" }, /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "1", onClick: () => {
    if (activeTab !== "1") {
      toggleTab("1");
    }
  } }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { color: "primary", icon: "it-link", "aria-hidden": true }), /* @__PURE__ */ e.createElement("i", { className: "it-ico-lg it-file d-block text-center", "aria-label": "Tab titolo 1" })), /* @__PURE__ */ e.createElement("span", null, "Tab titolo 1"))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "2", onClick: () => {
    if (activeTab !== "2") {
      toggleTab("2");
    }
  } }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { color: "primary", icon: "it-calendar", "aria-hidden": true }), /* @__PURE__ */ e.createElement("i", { className: "it-ico-lg it-calendar d-block text-center", "aria-label": "Tab titolo 2" })), /* @__PURE__ */ e.createElement("span", null, "Tab titolo 2"))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "3", onClick: () => {
    if (activeTab !== "3") {
      toggleTab("3");
    }
  } }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { color: "primary", icon: "it-comment", "aria-hidden": true }), /* @__PURE__ */ e.createElement("i", { className: "it-ico-lg it-comment d-block text-center", "aria-label": "Tab titolo 3" })), /* @__PURE__ */ e.createElement("span", null, "Tab titolo 3")))), /* @__PURE__ */ e.createElement(TabContent, { activeTab }, /* @__PURE__ */ e.createElement(TabPane, { tabId: "1", className: "p-3" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), /* @__PURE__ */ e.createElement(TabPane, { tabId: "2", className: "p-3" }, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), /* @__PURE__ */ e.createElement(TabPane, { tabId: "3", className: "p-3" }, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")));
};
const TestoIcona = {
  render: () => /* @__PURE__ */ e.createElement(TestoIconaWithHooks, null),
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const BottoneWithHooks = () => {
  const [activeTab, toggleTab] = reactExports.useState("1");
  return /* @__PURE__ */ e.createElement(Container, { className: "m-3" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: "12" }, /* @__PURE__ */ e.createElement(Nav, { pills: true, className: "mb-3" }, /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "1", onClick: (e2) => {
    e2.preventDefault();
    toggleTab("1");
  } }, "Tab 1")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "2", onClick: (e2) => {
    e2.preventDefault();
    toggleTab("2");
  } }, "Tab 2")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "3", onClick: (e2) => {
    e2.preventDefault();
    toggleTab("3");
  } }, "Tab 3")))), /* @__PURE__ */ e.createElement(Col, { sm: "12" }, /* @__PURE__ */ e.createElement(TabContent, { activeTab }, /* @__PURE__ */ e.createElement(TabPane, { tabId: "1", className: "p-3" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), /* @__PURE__ */ e.createElement(TabPane, { tabId: "2", className: "p-3" }, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), /* @__PURE__ */ e.createElement(TabPane, { tabId: "3", className: "p-3" }, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))));
};
const Bottone = {
  render: () => /* @__PURE__ */ e.createElement(BottoneWithHooks, null),
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const VerticaleWithHooks = () => {
  const [activeTab, toggleTab] = reactExports.useState("1");
  return /* @__PURE__ */ e.createElement(Container, { className: "m-3" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: "3" }, /* @__PURE__ */ e.createElement(Nav, { pills: true, className: "mb-3", vertical: true }, /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "1", onClick: (e2) => {
    e2.preventDefault();
    toggleTab("1");
  } }, "Tab 1")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "2", onClick: (e2) => {
    e2.preventDefault();
    toggleTab("2");
  } }, "Tab 2")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "3", onClick: (e2) => {
    e2.preventDefault();
    toggleTab("3");
  } }, "Tab 3")))), /* @__PURE__ */ e.createElement(Col, { sm: "9" }, /* @__PURE__ */ e.createElement(TabContent, { activeTab }, /* @__PURE__ */ e.createElement(TabPane, { tabId: "1", className: "p-3" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), /* @__PURE__ */ e.createElement(TabPane, { tabId: "2", className: "p-3" }, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), /* @__PURE__ */ e.createElement(TabPane, { tabId: "3", className: "p-3" }, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))));
};
const Verticale = {
  render: () => /* @__PURE__ */ e.createElement(VerticaleWithHooks, null),
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
Esempi.parameters = {
  ...Esempi.parameters,
  docs: {
    ...(_a = Esempi.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => <div>\n      <Nav tabs className="mb-3">\n        <NavItem>\n          <NavLink href="#" active>\n            Link Attivo\n          </NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink href="#">Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink href="#">Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink href="#" disabled>\n            Link disabilitato\n          </NavLink>\n        </NavItem>\n      </Nav>\n\n      <Nav tabs className="nav-dark">\n        <NavItem>\n          <NavLink href="#" active>\n            Link Attivo\n          </NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink href="#">Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink href="#">Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink href="#" disabled>\n            Link disabilitato\n          </NavLink>\n        </NavItem>\n      </Nav>\n    </div>\n}',
      ...(_c = (_b = Esempi.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Testo.parameters = {
  ...Testo.parameters,
  docs: {
    ...(_d = Testo.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => <TestoWithHooks />,\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_f = (_e = Testo.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Icona.parameters = {
  ...Icona.parameters,
  docs: {
    ...(_g = Icona.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: () => <IconaWithHooks />,\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_i = (_h = Icona.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
TestoIcona.parameters = {
  ...TestoIcona.parameters,
  docs: {
    ...(_j = TestoIcona.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  render: () => <TestoIconaWithHooks />,\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_l = (_k = TestoIcona.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Bottone.parameters = {
  ...Bottone.parameters,
  docs: {
    ...(_m = Bottone.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '{\n  render: () => <BottoneWithHooks />,\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_o = (_n = Bottone.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
Verticale.parameters = {
  ...Verticale.parameters,
  docs: {
    ...(_p = Verticale.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: '{\n  render: () => <VerticaleWithHooks />,\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_r = (_q = Verticale.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
const __namedExportsOrder = ["Esempi", "Testo", "Icona", "TestoIcona", "Bottone", "Verticale"];
const TabStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Bottone,
  Esempi,
  Icona,
  Testo,
  TestoIcona,
  Verticale,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Bottone as B,
  Esempi as E,
  Icona as I,
  TabStories as T,
  Verticale as V,
  Testo as a,
  TestoIcona as b
};
