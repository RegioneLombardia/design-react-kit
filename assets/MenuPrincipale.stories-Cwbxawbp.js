var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { e, r as reactExports } from "./iframe-BFNAXEkx.js";
import { B as BarraIstituzionale } from "./BarraIstituzionale-BNfKDM33.js";
import { T as TopBar } from "./TopBar-8hcAq-6L.js";
import { M as MenuVerticale } from "./MenuVerticale-Bks_3skJ.js";
import { F as Footer } from "./Footer-x1Jeq43b.js";
import { C as Container } from "./Container-BxoeQkUV.js";
import { R as Row, C as Col } from "./Col-CkVB0JHd.js";
import { N as Navbar } from "./Navbar-C9MC9uT7.js";
import { N as NavItem, a as NavLink } from "./NavLink-DHBXolkT.js";
import { C as Collapse } from "./Collapse-CzgOO3RC.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-C3RxkQUc.js";
import { D as DropdownMenu } from "./DropdownMenu-CEy5EV_9.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-DqRIkDYc.js";
import { M as MegamenuItem } from "./MegamenuItem-De7TdvK2.js";
import { N as Nav } from "./Nav-C_BR_slr.js";
import { R as ResponsiveImage } from "./ResponsiveImage-BTn01bsW.js";
import { S as Sidebar } from "./Sidebar-BLdY8ajy.js";
import "./track-focus-DbJ2CO43.js";
import "./preload-helper-CQrtv1eE.js";
import "./Button-CPeRZpnQ.js";
import "./index-CHcFYvVh.js";
import "./Button-DEAEXXjH.js";
import "./utils-DyznEV42.js";
import "./Icon-Be4XlCcy.js";
import "./BottoneHamburger-BtedJFJH.js";
import "./Transition-Hkr92Nga.js";
import "./index-R64eW5Wq.js";
import "./DropdownToggle-BIEYS7xk.js";
import "./Popper-DOzk8reh.js";
import "./HeaderContext-DAtYf8xv.js";
const meta = {
  title: "Linee Guida/Componenti Principali/Header/MenuPrincipale",
  component: Container,
  args: {
    acronym: "ACCREDITAS",
    applicationName: "Sistema di accreditamento"
  }
};
const _navItems = () => {
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link"))), /* @__PURE__ */ e.createElement(NavItem, { active: true }, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: true }, /* @__PURE__ */ e.createElement("span", null, "Attivo"), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "voce selezionata"))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", disabled: true }, /* @__PURE__ */ e.createElement("span", null, "Disabled"))), /* @__PURE__ */ e.createElement(Dropdown, { inNavbar: true, tag: "li", theme: "" }, /* @__PURE__ */ e.createElement(DropdownToggle, { caret: true, inNavbar: true, className: "text-start" }, /* @__PURE__ */ e.createElement("span", null, "Dropdown")), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, { header: /* @__PURE__ */ e.createElement("div", { className: "link-list-heading text-primary fw-bold" }, "Heading") }, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Link list 1")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Link list 2")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Link list 3")), /* @__PURE__ */ e.createElement(LinkListItem, { divider: true }), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Link list 4"))))), /* @__PURE__ */ e.createElement(MegamenuItem, { itemName: "Megamenu" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkList, { header: /* @__PURE__ */ e.createElement("div", { className: "link-list-heading text-primary fw-bold" }, "Heading") }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 3")))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkList, { header: /* @__PURE__ */ e.createElement("div", { className: "link-list-heading text-primary fw-bold" }, "Heading") }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#", active: true }, /* @__PURE__ */ e.createElement("span", null, "Link list 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 3")))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkList, { header: /* @__PURE__ */ e.createElement("div", { className: "link-list-heading text-primary fw-bold" }, "Heading") }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#", disabled: true }, /* @__PURE__ */ e.createElement("span", null, "Link list 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 3")))))));
};
const _mainContent = () => {
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(Container, { fluid: true }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: 12, className: "p-3" }, /* @__PURE__ */ e.createElement(ResponsiveImage, { alt: "Alternative Text", src: "img/bike-sharing.jpg", title: "Image Title" })))));
};
const _sidebar = () => {
  return /* @__PURE__ */ e.createElement(Sidebar, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { active: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link Attivo")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { disabled: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Disabilitato")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor"))));
};
const HorHeader = () => {
  const [isOpenSide, setIsOpenSide] = reactExports.useState(false);
  const acronym = "ACCREDITAS";
  const applicationName = "Sistema di accreditamento";
  return /* @__PURE__ */ e.createElement("header", null, /* @__PURE__ */ e.createElement(TopBar, null), /* @__PURE__ */ e.createElement(BarraIstituzionale, { acronym, applicationName, hamburgerButton: true, menuType: "horizontal", data_bs_target: "#nav1", isOpenSide, toggleMenu: setIsOpenSide }, /* @__PURE__ */ e.createElement("div", { className: "it-header-navbar-wrapper theme-light-desk it25-menu-orizzontale" }, /* @__PURE__ */ e.createElement(Navbar, { expand: "lg", className: "has-megamenu" }, /* @__PURE__ */ e.createElement(Collapse, { navbar: true, header: true, megamenu: true, id: "nav1", isOpen: isOpenSide, onOverlayClick: () => {
    setIsOpenSide(!isOpenSide);
  } }, /* @__PURE__ */ e.createElement(Nav, { navbar: true }, /* @__PURE__ */ e.createElement(_navItems, null)))))));
};
const MenuOrizzontale = {
  render: ({
    acronym,
    applicationName
  }) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(HorHeader, null), /* @__PURE__ */ e.createElement("main", null, /* @__PURE__ */ e.createElement(_mainContent, null)), /* @__PURE__ */ e.createElement(Footer, { acronym, applicationName }))
};
const SideHeader = () => {
  const [isOpenSide, setIsOpenSide] = reactExports.useState(false);
  const acronym = "ACCREDITAS";
  const applicationName = "Sistema di accreditamento";
  return /* @__PURE__ */ e.createElement("header", null, /* @__PURE__ */ e.createElement(TopBar, null), /* @__PURE__ */ e.createElement(BarraIstituzionale, { acronym, applicationName, hamburgerButton: true, menuType: "sidebar", data_bs_target: "#nav1", isOpenSide, toggleMenu: setIsOpenSide }, /* @__PURE__ */ e.createElement("div", { className: "it-header-navbar-wrapper theme-light-desk" }, /* @__PURE__ */ e.createElement(Collapse, { id: "nav1", isOpen: isOpenSide, onOverlayClick: () => {
    setIsOpenSide(!isOpenSide);
  } }, /* @__PURE__ */ e.createElement(MenuVerticale, null, /* @__PURE__ */ e.createElement(_sidebar, null))))));
};
const MenuSidebar = {
  render: ({
    acronym,
    applicationName
  }) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(SideHeader, null), /* @__PURE__ */ e.createElement("main", null, /* @__PURE__ */ e.createElement(Container, { fluid: true }, /* @__PURE__ */ e.createElement(Row, { className: "flex-xl-nowrap" }, /* @__PURE__ */ e.createElement(Col, { md: 4, lg: 3, xxl: 2 }, /* @__PURE__ */ e.createElement(MenuVerticale, { className: "collapse" }, /* @__PURE__ */ e.createElement(_sidebar, null))), /* @__PURE__ */ e.createElement(Col, { xs: 12, md: 8, lg: 9, xxl: 10, className: "p-3" }, /* @__PURE__ */ e.createElement(ResponsiveImage, { alt: "Alternative Text", src: "img/bike-sharing.jpg", title: "Image Title" }))))), /* @__PURE__ */ e.createElement(Footer, { acronym, applicationName }))
};
const MenuVerticaleComparsa = {
  render: ({
    acronym,
    applicationName
  }) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("header", null, /* @__PURE__ */ e.createElement(TopBar, null), /* @__PURE__ */ e.createElement(BarraIstituzionale, { acronym, applicationName, hamburgerButton: true, menuType: "vertical", data_bs_target: "#it25-menu-vert" }, /* @__PURE__ */ e.createElement("div", { id: "it25-menu-vert" }, /* @__PURE__ */ e.createElement(MenuVerticale, null, /* @__PURE__ */ e.createElement(_sidebar, null))))), /* @__PURE__ */ e.createElement("main", null, /* @__PURE__ */ e.createElement(_mainContent, null)), /* @__PURE__ */ e.createElement(Footer, { acronym, applicationName }))
};
MenuOrizzontale.parameters = {
  ...MenuOrizzontale.parameters,
  docs: {
    ...(_a = MenuOrizzontale.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: ({\n    acronym,\n    applicationName\n  }) => <>\n      <HorHeader />\n      <main>\n        <_mainContent />\n      </main>\n      <Footer acronym={acronym} applicationName={applicationName}></Footer>\n    </>\n}",
      ...(_c = (_b = MenuOrizzontale.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
MenuSidebar.parameters = {
  ...MenuSidebar.parameters,
  docs: {
    ...(_d = MenuSidebar.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: ({\n    acronym,\n    applicationName\n  }) => <>\n      <SideHeader />\n      <main>\n        <Container fluid>\n          <Row className="flex-xl-nowrap">\n            <Col md={4} lg={3} xxl={2}>\n              <MenuVerticale className="collapse">\n                <_sidebar />\n              </MenuVerticale>\n            </Col>\n            <Col xs={12} md={8} lg={9} xxl={10} className="p-3">\n              <ResponsiveImage alt="Alternative Text" src="img/bike-sharing.jpg" title="Image Title" />\n            </Col>\n          </Row>\n        </Container>\n      </main>\n      <Footer acronym={acronym} applicationName={applicationName}></Footer>\n    </>\n}',
      ...(_f = (_e = MenuSidebar.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
MenuVerticaleComparsa.parameters = {
  ...MenuVerticaleComparsa.parameters,
  docs: {
    ...(_g = MenuVerticaleComparsa.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: ({\n    acronym,\n    applicationName\n  }) => <>\n      <header>\n        <TopBar />\n        <BarraIstituzionale acronym={acronym} applicationName={applicationName} hamburgerButton={true} menuType="vertical" data_bs_target="#it25-menu-vert">\n          <div id="it25-menu-vert">\n            <MenuVerticale>\n              <_sidebar />\n            </MenuVerticale>\n          </div>\n        </BarraIstituzionale>\n      </header>\n      <main>\n        <_mainContent />\n      </main>\n      <Footer acronym={acronym} applicationName={applicationName}></Footer>\n    </>\n}',
      ...(_i = (_h = MenuVerticaleComparsa.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["MenuOrizzontale", "MenuSidebar", "MenuVerticaleComparsa"];
export {
  MenuOrizzontale,
  MenuSidebar,
  MenuVerticaleComparsa,
  __namedExportsOrder,
  meta as default
};
