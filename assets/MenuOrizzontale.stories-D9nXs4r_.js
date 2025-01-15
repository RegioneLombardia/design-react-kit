var _a, _b, _c;
import { e, r as reactExports } from "./index-BehpJNG5.js";
import { C as Container } from "./Container-DM0Kn0QD.js";
import { R as Row, C as Col } from "./Col-CBduUdZh.js";
import { N as Navbar } from "./Navbar-B1vzUW4q.js";
import { N as NavbarToggler } from "./NavbarToggler-CO2D7-XQ.js";
import { N as NavItem, a as NavLink } from "./NavLink-_42ff20l.js";
import { C as Collapse } from "./Collapse--sLBEfCA.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-LNqCZlb7.js";
import { D as DropdownMenu } from "./DropdownMenu-ByvFgIJX.js";
import { I as Icon } from "./Icon-D_scqGwU.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-E5PaFpui.js";
import { M as MegamenuItem } from "./MegamenuItem-Dgvw1Vv1.js";
import { N as Nav } from "./Nav-NOEIohim.js";
import "./track-focus-DbJ2CO43.js";
const meta = {
  title: "Linee Guida/Componenti Principali/Menu Orizzontale",
  component: Container,
  parameters: {
    docs: {
      story: {
        height: "350px"
      },
      canvas: {
        sourceState: "none"
      }
    }
  },
  args: {}
};
function showCloser(show, id) {
  const closer = document.getElementById(id);
  if (closer) {
    if (show) {
      closer.classList.add("show");
      closer.setAttribute("style", "border-color:transparent !important;");
    } else {
      closer.classList.remove("show");
    }
    closer.blur();
  }
}
const MenuOrizzontaleHooks = () => {
  const [openNav, setOpenNav] = reactExports.useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
    showCloser(!openNav, "closer01");
  };
  return /* @__PURE__ */ e.createElement("div", { className: "it-header-navbar-wrapper theme-light-desk it25-menu-orizzontale" }, /* @__PURE__ */ e.createElement(Navbar, { expand: "lg", className: "has-megamenu" }, /* @__PURE__ */ e.createElement(NavbarToggler, { className: "custom-navbar-toggler d-flex d-lg-none", onClick: toggle }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-burger", color: "primary" }), /* @__PURE__ */ e.createElement("div", { className: "d-block d-lg-none align-self-center text-primary fw-semibold ms-2" }, "Apri Menu")), /* @__PURE__ */ e.createElement(NavbarToggler, { className: "custom-navbar-toggler it25-megamenu-closer", id: "closer01", onClick: toggle }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close-big" })), /* @__PURE__ */ e.createElement(Collapse, { isOpen: openNav, navbar: true, header: true, megamenu: true }, /* @__PURE__ */ e.createElement(Nav, { navbar: true }, /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link"))), /* @__PURE__ */ e.createElement(NavItem, { active: true }, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: true }, /* @__PURE__ */ e.createElement("span", null, "Attivo"), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "voce selezionata"))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", disabled: true }, /* @__PURE__ */ e.createElement("span", null, "Disabled"))), /* @__PURE__ */ e.createElement(Dropdown, { inNavbar: true, tag: "li", theme: "" }, /* @__PURE__ */ e.createElement(DropdownToggle, { caret: true, inNavbar: true, className: "text-start" }, /* @__PURE__ */ e.createElement("span", null, "Dropdown")), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, { header: /* @__PURE__ */ e.createElement("div", { className: "link-list-heading text-primary fw-bold" }, "Heading") }, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Link list 1")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Link list 2")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Link list 3")), /* @__PURE__ */ e.createElement(LinkListItem, { divider: true }), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Link list 4"))))), /* @__PURE__ */ e.createElement(MegamenuItem, { itemName: "Megamenu" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkList, { header: /* @__PURE__ */ e.createElement("div", { className: "link-list-heading text-primary fw-bold" }, "Heading") }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 3")))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkList, { header: /* @__PURE__ */ e.createElement("div", { className: "link-list-heading text-primary fw-bold" }, "Heading") }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#", active: true }, /* @__PURE__ */ e.createElement("span", null, "Link list 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 3")))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkList, { header: /* @__PURE__ */ e.createElement("div", { className: "link-list-heading text-primary fw-bold" }, "Heading") }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#", disabled: true }, /* @__PURE__ */ e.createElement("span", null, "Link list 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 3"))))))))));
};
const MenuOrizzontale = {
  render: () => {
    return /* @__PURE__ */ e.createElement(MenuOrizzontaleHooks, null);
  }
};
MenuOrizzontale.parameters = {
  ...MenuOrizzontale.parameters,
  docs: {
    ...(_a = MenuOrizzontale.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <MenuOrizzontaleHooks />;\n  }\n}",
      ...(_c = (_b = MenuOrizzontale.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["MenuOrizzontale"];
const MenuOrizzontaleStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MenuOrizzontale,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  MenuOrizzontaleStories as M,
  MenuOrizzontale as a
};
