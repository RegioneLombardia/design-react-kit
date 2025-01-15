var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { e, r as reactExports } from "./index-BehpJNG5.js";
import { N as NavItem, a as NavLink } from "./NavLink-_42ff20l.js";
import { T as TabContent, a as TabPane } from "./TabPane-6eVwlaUT.js";
import { U as UncontrolledTooltip } from "./UncontrolledTooltip-CelLEkV5.js";
import { I as Icon } from "./Icon-D_scqGwU.js";
import { N as Nav } from "./Nav-NOEIohim.js";
import "./track-focus-DbJ2CO43.js";
const meta = {
  title: "Linee Guida/Call to action/Tab Bar"
};
const TabBar = {
  render: () => {
    return /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Nav, { tabs: true }, /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, "Label")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: true }, "Label")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, "Label")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", disabled: true }, "Label"))));
  }
};
const SoloTesto = {
  render: () => {
    const [activeTab, toggleTab] = reactExports.useState("2");
    return /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Nav, { tabs: true, className: "mb-3" }, /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "1", onClick: () => {
      if (activeTab !== "1") {
        toggleTab("1");
      }
    } }, /* @__PURE__ */ e.createElement("span", null, "Label"))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "2", onClick: () => {
      if (activeTab !== "2") {
        toggleTab("2");
      }
    } }, /* @__PURE__ */ e.createElement("span", null, "Label"))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "3", onClick: () => {
      if (activeTab !== "3") {
        toggleTab("3");
      }
    } }, /* @__PURE__ */ e.createElement("span", null, "Label"))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", disabled: true }, "Label"))), /* @__PURE__ */ e.createElement(TabContent, { activeTab }, /* @__PURE__ */ e.createElement(TabPane, { tabId: "1", className: "p-3" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), /* @__PURE__ */ e.createElement(TabPane, { tabId: "2", className: "p-3" }, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), /* @__PURE__ */ e.createElement(TabPane, { tabId: "3", className: "p-3" }, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")));
  }
};
const SoloIcone = {
  render: () => {
    const ref1 = reactExports.useRef(null);
    const ref2 = reactExports.useRef(null);
    const ref3 = reactExports.useRef(null);
    const ref4 = reactExports.useRef(null);
    const [activeTab, toggleTab] = reactExports.useState("2");
    return /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Nav, { tabs: true, className: "mb-3" }, /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "1", onClick: () => {
      if (activeTab !== "1") {
        toggleTab("1");
      }
    } }, /* @__PURE__ */ e.createElement("span", { ref: ref1 }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true, title: "" }), /* @__PURE__ */ e.createElement("i", { className: "it-ico-lg it-link d-block text-center", "aria-label": "Descrizione per non vedenti" })))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "2", onClick: () => {
      if (activeTab !== "2") {
        toggleTab("2");
      }
    } }, /* @__PURE__ */ e.createElement("span", { ref: ref2 }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true, title: "" }), /* @__PURE__ */ e.createElement("i", { className: "it-ico-lg it-calendar d-block text-center", "aria-label": "Descrizione per non vedenti" })))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "3", onClick: () => {
      if (activeTab !== "3") {
        toggleTab("3");
      }
    } }, /* @__PURE__ */ e.createElement("span", { ref: ref3 }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true, title: "" }), /* @__PURE__ */ e.createElement("i", { className: "it-ico-lg it-comment d-block text-center", "aria-label": "Descrizione per non vedenti" })))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { disabled: true, href: "#", active: activeTab === "4", onClick: () => {
      if (activeTab !== "4") {
        toggleTab("4");
      }
    } }, /* @__PURE__ */ e.createElement("span", { ref: ref4 }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-copy", "aria-hidden": true, title: "" }), /* @__PURE__ */ e.createElement("i", { className: "it-ico-lg it-copy d-block text-center", "aria-label": "Descrizione per non vedenti" }))))), /* @__PURE__ */ e.createElement(TabContent, { activeTab }, /* @__PURE__ */ e.createElement(TabPane, { tabId: "1", className: "p-3" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), /* @__PURE__ */ e.createElement(TabPane, { tabId: "2", className: "p-3" }, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), /* @__PURE__ */ e.createElement(TabPane, { tabId: "3", className: "p-3" }, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), /* @__PURE__ */ e.createElement(TabPane, { tabId: "4", className: "p-3" }, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt")), /* @__PURE__ */ e.createElement(UncontrolledTooltip, { placement: "top", target: ref1 }, "Spiegazione icona 1 (per tutti)"), /* @__PURE__ */ e.createElement(UncontrolledTooltip, { placement: "top", target: ref2 }, "Spiegazione icona 2 (per tutti)"), /* @__PURE__ */ e.createElement(UncontrolledTooltip, { placement: "top", target: ref3 }, "Spiegazione icona 3 (per tutti)"), /* @__PURE__ */ e.createElement(UncontrolledTooltip, { placement: "top", target: ref4 }, "Spiegazione icona 4 (per tutti)"));
  }
};
const TestoEIcona = {
  render: () => {
    const [activeTab, toggleTab] = reactExports.useState("2");
    return /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Nav, { tabs: true, className: "mb-3" }, /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "1", onClick: () => {
      if (activeTab !== "1") {
        toggleTab("1");
      }
    } }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true })), /* @__PURE__ */ e.createElement("span", null, "Label"))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "2", onClick: () => {
      if (activeTab !== "2") {
        toggleTab("2");
      }
    } }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true })), /* @__PURE__ */ e.createElement("span", null, "Label"))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: activeTab === "3", onClick: () => {
      if (activeTab !== "3") {
        toggleTab("3");
      }
    } }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true })), /* @__PURE__ */ e.createElement("span", null, "Label"))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { disabled: true, href: "#", active: activeTab === "4", onClick: () => {
      if (activeTab !== "4") {
        toggleTab("4");
      }
    } }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-copy", "aria-hidden": true })), /* @__PURE__ */ e.createElement("span", null, "Label")))), /* @__PURE__ */ e.createElement(TabContent, { activeTab }, /* @__PURE__ */ e.createElement(TabPane, { tabId: "1", className: "p-3" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), /* @__PURE__ */ e.createElement(TabPane, { tabId: "2", className: "p-3" }, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), /* @__PURE__ */ e.createElement(TabPane, { tabId: "3", className: "p-3" }, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), /* @__PURE__ */ e.createElement(TabPane, { tabId: "4", className: "p-3" }, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt")));
  }
};
TabBar.parameters = {
  ...TabBar.parameters,
  docs: {
    ...(_a = TabBar.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <div>\n        <Nav tabs>\n          <NavItem>\n            <NavLink href="#">Label</NavLink>\n          </NavItem>\n          <NavItem>\n            <NavLink href="#" active>Label</NavLink>\n          </NavItem>\n          <NavItem>\n            <NavLink href="#">Label</NavLink>\n          </NavItem>\n          <NavItem>\n            <NavLink href="#" disabled>Label</NavLink>\n          </NavItem>\n        </Nav>\n      </div>;\n  }\n}',
      ...(_c = (_b = TabBar.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
SoloTesto.parameters = {
  ...SoloTesto.parameters,
  docs: {
    ...(_d = SoloTesto.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => {\n    const [activeTab, toggleTab] = useState("2");\n    return <div>\n        <Nav tabs className="mb-3">\n          <NavItem>\n            <NavLink href="#" active={activeTab === "1"} onClick={() => {\n            if (activeTab !== "1") {\n              toggleTab("1");\n            }\n          }}>\n              <span>Label</span>\n            </NavLink>\n          </NavItem>\n          <NavItem>\n            <NavLink href="#" active={activeTab === "2"} onClick={() => {\n            if (activeTab !== "2") {\n              toggleTab("2");\n            }\n          }}>\n              <span>Label</span>\n            </NavLink>\n          </NavItem>\n          <NavItem>\n            <NavLink href="#" active={activeTab === "3"} onClick={() => {\n            if (activeTab !== "3") {\n              toggleTab("3");\n            }\n          }}>\n              <span>Label</span>\n            </NavLink>\n          </NavItem>\n          <NavItem>\n            <NavLink href="#" disabled>Label</NavLink>\n          </NavItem>\n        </Nav>\n\n        <TabContent activeTab={activeTab}>\n          <TabPane tabId="1" className="p-3">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n            deserunt mollit anim id est laborum.\n          </TabPane>\n          <TabPane tabId="2" className="p-3">\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,\n            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur.\n          </TabPane>\n          <TabPane tabId="3" className="p-3">\n            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa\n            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n            ut labore et dolore magna aliqua.\n          </TabPane>\n        </TabContent>\n      </div>;\n  }\n}',
      ...(_f = (_e = SoloTesto.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
SoloIcone.parameters = {
  ...SoloIcone.parameters,
  docs: {
    ...(_g = SoloIcone.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: `{
  render: () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const [activeTab, toggleTab] = useState("2");
    return <div>
        <Nav tabs className="mb-3">
          <NavItem>
            <NavLink href="#" active={activeTab === "1"} onClick={() => {
            if (activeTab !== "1") {
              toggleTab("1");
            }
          }}>
              <span ref={ref1}>
                <Icon icon="it-link" aria-hidden title="" />
                <i className="it-ico-lg it-link d-block text-center" aria-label="Descrizione per non vedenti" />
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" active={activeTab === "2"} onClick={() => {
            if (activeTab !== "2") {
              toggleTab("2");
            }
          }}>
              <span ref={ref2}>
                <Icon icon="it-calendar" aria-hidden title="" />
                <i className="it-ico-lg it-calendar d-block text-center" aria-label="Descrizione per non vedenti" />
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" active={activeTab === "3"} onClick={() => {
            if (activeTab !== "3") {
              toggleTab("3");
            }
          }}>
              <span ref={ref3}>
                <Icon icon="it-comment" aria-hidden title="" />
                <i className="it-ico-lg it-comment d-block text-center" aria-label="Descrizione per non vedenti" />
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#" active={activeTab === "4"} onClick={() => {
            if (activeTab !== "4") {
              toggleTab("4");
            }
          }}>
              <span ref={ref4}>
                <Icon icon="it-copy" aria-hidden title="" />
                <i className="it-ico-lg it-copy d-block text-center" aria-label="Descrizione per non vedenti" />
              </span>
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1" className="p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </TabPane>
          <TabPane tabId="2" className="p-3">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </TabPane>
          <TabPane tabId="3" className="p-3">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </TabPane>
          <TabPane tabId="4" className="p-3">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
          </TabPane>
        </TabContent>
        <UncontrolledTooltip placement='top' target={ref1}>
          Spiegazione icona 1 (per tutti)
        </UncontrolledTooltip>
        <UncontrolledTooltip placement='top' target={ref2}>
          Spiegazione icona 2 (per tutti)
        </UncontrolledTooltip>
        <UncontrolledTooltip placement='top' target={ref3}>
          Spiegazione icona 3 (per tutti)
        </UncontrolledTooltip>
        <UncontrolledTooltip placement='top' target={ref4}>
          Spiegazione icona 4 (per tutti)
        </UncontrolledTooltip>
      </div>;
  }
}`,
      ...(_i = (_h = SoloIcone.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
TestoEIcona.parameters = {
  ...TestoEIcona.parameters,
  docs: {
    ...(_j = TestoEIcona.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  render: () => {\n    const [activeTab, toggleTab] = useState("2");\n    return <div>\n        <Nav tabs className="mb-3">\n          <NavItem>\n            <NavLink href="#" active={activeTab === "1"} onClick={() => {\n            if (activeTab !== "1") {\n              toggleTab("1");\n            }\n          }}>\n              <span>\n                <Icon icon="it-link" aria-hidden />\n              </span>\n              <span>Label</span>\n            </NavLink>\n          </NavItem>\n          <NavItem>\n            <NavLink href="#" active={activeTab === "2"} onClick={() => {\n            if (activeTab !== "2") {\n              toggleTab("2");\n            }\n          }}>\n              <span>\n                <Icon icon="it-calendar" aria-hidden />\n              </span>\n              <span>Label</span>\n            </NavLink>\n          </NavItem>\n          <NavItem>\n            <NavLink href="#" active={activeTab === "3"} onClick={() => {\n            if (activeTab !== "3") {\n              toggleTab("3");\n            }\n          }}>\n              <span>\n                <Icon icon="it-comment" aria-hidden />\n              </span>\n              <span>Label</span>\n            </NavLink>\n          </NavItem>\n          <NavItem>\n            <NavLink disabled href="#" active={activeTab === "4"} onClick={() => {\n            if (activeTab !== "4") {\n              toggleTab("4");\n            }\n          }}>\n              <span>\n                <Icon icon="it-copy" aria-hidden />\n              </span>\n              <span>Label</span>\n            </NavLink>\n          </NavItem>\n        </Nav>\n\n        <TabContent activeTab={activeTab}>\n          <TabPane tabId="1" className="p-3">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n            deserunt mollit anim id est laborum.\n          </TabPane>\n          <TabPane tabId="2" className="p-3">\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,\n            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur.\n          </TabPane>\n          <TabPane tabId="3" className="p-3">\n            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa\n            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n            ut labore et dolore magna aliqua.\n          </TabPane>\n          <TabPane tabId="4" className="p-3">\n            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt\n          </TabPane>\n        </TabContent>\n      </div>;\n  }\n}',
      ...(_l = (_k = TestoEIcona.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["TabBar", "SoloTesto", "SoloIcone", "TestoEIcona"];
const TabBarStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SoloIcone,
  SoloTesto,
  TabBar,
  TestoEIcona,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  SoloTesto as S,
  TabBarStories as T,
  TabBar as a,
  SoloIcone as b,
  TestoEIcona as c
};
