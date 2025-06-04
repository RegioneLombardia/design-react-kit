var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { e } from "./index-CkHlViRq.js";
import { B as BarraIstituzionale } from "./BarraIstituzionale-BevsDI8e.js";
import { T as TopBar } from "./TopBar-4MIecPQd.js";
import { M as MenuVerticale } from "./MenuVerticale-BYfr8qnJ.js";
import { F as Footer } from "./Footer-oNwv3gYb.js";
import { C as Container } from "./Container-Dh47g2ou.js";
import { R as Row, C as Col } from "./Col-BILKv079.js";
import { N as Navbar } from "./Navbar-D4bkcWi4.js";
import { N as NavItem, a as NavLink } from "./NavLink-DzvVMxEd.js";
import { C as Collapse } from "./Collapse-DQ64-E85.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-CLFH1mQx.js";
import { D as DropdownMenu } from "./DropdownMenu-ByvbSN40.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-BXSHz39N.js";
import { M as MegamenuItem } from "./MegamenuItem-DJ9YuNqc.js";
import { N as Nav } from "./Nav-Dnp0c3Au.js";
import { R as ResponsiveImage } from "./ResponsiveImage-CxR7vqJm.js";
import { S as Sidebar } from "./Sidebar-CNq3ytfG.js";
import "./track-focus-DbJ2CO43.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./Button-Bbm-EeTy.js";
import "./index-xoeSAV6i.js";
import "./Button-BIZ5TMd_.js";
import "./utils-o7gD2GSt.js";
import "./Icon-F0eg8ks0.js";
import "./iframe-CkfUY0Fy.js";
import "./BottoneHamburger-BU8ylzdT.js";
import "./Transition-DlYKBBR1.js";
import "./index-rIQx-mDE.js";
import "./DropdownToggle-1z-m1r3w.js";
import "./Popper-CviNA3nW.js";
import "./HeaderContext-B6sEmMfd.js";
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
  return /* @__PURE__ */ e.createElement(Sidebar, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { active: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link Attivo")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { disabled: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Disabilitato")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor"))));
};
const MenuOrizzontale = {
  render: ({
    acronym,
    applicationName
  }) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("header", null, /* @__PURE__ */ e.createElement(TopBar, null), /* @__PURE__ */ e.createElement(BarraIstituzionale, { acronym, applicationName, hamburgerButton: true, menuType: "horizontal", data_bs_target: "#nav1" }), /* @__PURE__ */ e.createElement("div", { className: "it-header-navbar-wrapper theme-light-desk it25-menu-orizzontale" }, /* @__PURE__ */ e.createElement(Navbar, { expand: "lg", className: "has-megamenu" }, /* @__PURE__ */ e.createElement(Collapse, { navbar: true, header: true, megamenu: true, id: "nav1" }, /* @__PURE__ */ e.createElement(Nav, { navbar: true }, /* @__PURE__ */ e.createElement(_navItems, null)))))), /* @__PURE__ */ e.createElement("main", null, /* @__PURE__ */ e.createElement(_mainContent, null)), /* @__PURE__ */ e.createElement(Footer, { acronym, applicationName }))
};
const MenuSidebar = {
  render: ({
    acronym,
    applicationName
  }) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("header", null, /* @__PURE__ */ e.createElement(TopBar, null), /* @__PURE__ */ e.createElement(BarraIstituzionale, { acronym, applicationName, hamburgerButton: true, menuType: "sidebar", data_bs_target: "#it25-main-nav" })), /* @__PURE__ */ e.createElement("main", null, /* @__PURE__ */ e.createElement(Container, { fluid: true }, /* @__PURE__ */ e.createElement(Row, { className: "flex-xl-nowrap" }, /* @__PURE__ */ e.createElement(Col, { xs: 12, md: 3 }, /* @__PURE__ */ e.createElement(MenuVerticale, { className: "collapse" }, /* @__PURE__ */ e.createElement(_sidebar, null))), /* @__PURE__ */ e.createElement(Col, { xs: 12, md: 9, className: "p-3" }, /* @__PURE__ */ e.createElement(ResponsiveImage, { alt: "Alternative Text", src: "img/bike-sharing.jpg", title: "Image Title" }))))), /* @__PURE__ */ e.createElement(Footer, { acronym, applicationName }))
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
      originalSource: `{
  render: ({
    acronym,
    applicationName
  }) => <>
      <header>
        <TopBar />
        <BarraIstituzionale acronym={acronym} applicationName={applicationName} hamburgerButton={true} menuType="horizontal" data_bs_target="#nav1" />
        <div className="it-header-navbar-wrapper theme-light-desk it25-menu-orizzontale">
          <Navbar expand="lg" className='has-megamenu'>
            <Collapse navbar header megamenu id="nav1">
              <Nav navbar>
                <_navItems />
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </header>
      <main>
        <_mainContent />
      </main>
      <Footer acronym={acronym} applicationName={applicationName}></Footer>
    </>
}`,
      ...(_c = (_b = MenuOrizzontale.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
MenuSidebar.parameters = {
  ...MenuSidebar.parameters,
  docs: {
    ...(_d = MenuSidebar.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: ({\n    acronym,\n    applicationName\n  }) => <>\n      <header>\n        <TopBar />\n        <BarraIstituzionale acronym={acronym} applicationName={applicationName} hamburgerButton={true} menuType="sidebar" data_bs_target="#it25-main-nav" />\n      </header>\n      <main>\n        <Container fluid>\n          <Row className="flex-xl-nowrap">\n            <Col xs={12} md={3}>\n              <MenuVerticale className="collapse">\n                <_sidebar />\n              </MenuVerticale>\n            </Col>\n            <Col xs={12} md={9} className="p-3">\n              <ResponsiveImage alt="Alternative Text" src="img/bike-sharing.jpg" title="Image Title" />\n            </Col>\n          </Row>\n        </Container>\n      </main>\n      <Footer acronym={acronym} applicationName={applicationName}></Footer>\n    </>\n}',
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
