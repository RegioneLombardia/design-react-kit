var _a, _b, _c;
import { R as React, r as reactExports } from "./index-aC1ZMUrs.js";
import { C as Container } from "./Container-BSU_5rqZ.js";
import { R as Row, C as Col } from "./Col-sbjB5dMm.js";
import { N as Navbar } from "./Navbar-CvHgj2bA.js";
import { N as NavbarToggler } from "./NavbarToggler-D2aV78Eb.js";
import { N as NavItem, a as NavLink } from "./NavLink-QW5V8UQQ.js";
import { I as Icon } from "./Icon-By7ZoT9m.js";
import { C as Collapse } from "./Collapse-DybBevio.js";
import { N as Nav } from "./Nav-BMxviE6H.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-LBwHGDGD.js";
import { D as DropdownMenu } from "./DropdownMenu-BVvApC7Y.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-B69qYNZ5.js";
import { M as MegamenuItem } from "./MegamenuItem-C4vwUJoa.js";
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
  return /* @__PURE__ */ React.createElement("div", { className: "it-header-navbar-wrapper theme-light-desk it25-menu-orizzontale" }, /* @__PURE__ */ React.createElement(Navbar, { expand: "lg", className: "has-megamenu" }, /* @__PURE__ */ React.createElement(NavbarToggler, { className: "custom-navbar-toggler d-flex d-lg-none", onClick: toggle }, /* @__PURE__ */ React.createElement(Icon, { icon: "it-burger", color: "primary" }), /* @__PURE__ */ React.createElement("div", { className: "d-block d-lg-none align-self-center text-primary fw-semibold ms-2" }, "Apri Menu")), /* @__PURE__ */ React.createElement(NavbarToggler, { className: "custom-navbar-toggler it25-megamenu-closer", id: "closer01", onClick: toggle }, /* @__PURE__ */ React.createElement(Icon, { icon: "it-close-big" })), /* @__PURE__ */ React.createElement(Collapse, { isOpen: openNav, navbar: true, header: true, megamenu: true }, /* @__PURE__ */ React.createElement(Nav, { navbar: true }, /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, { href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Link"))), /* @__PURE__ */ React.createElement(NavItem, { active: true }, /* @__PURE__ */ React.createElement(NavLink, { href: "#", active: true }, /* @__PURE__ */ React.createElement("span", null, "Attivo"), /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, "voce selezionata"))), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, { href: "#", disabled: true }, /* @__PURE__ */ React.createElement("span", null, "Disabled"))), /* @__PURE__ */ React.createElement(Dropdown, { inNavbar: true, tag: "li", theme: "" }, /* @__PURE__ */ React.createElement(DropdownToggle, { caret: true, inNavbar: true, className: "text-start" }, /* @__PURE__ */ React.createElement("span", null, "Dropdown")), /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, { header: /* @__PURE__ */ React.createElement("div", { className: "link-list-heading text-primary fw-bold" }, "Heading") }, /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 1")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 2")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 3")), /* @__PURE__ */ React.createElement(LinkListItem, { divider: true }), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 4"))))), /* @__PURE__ */ React.createElement(MegamenuItem, { itemName: "Megamenu" }, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ React.createElement(LinkList, { header: /* @__PURE__ */ React.createElement("div", { className: "link-list-heading text-primary fw-bold" }, "Heading") }, /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Link list 1")), /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Link list 2")), /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Link list 3")))), /* @__PURE__ */ React.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ React.createElement(LinkList, { header: /* @__PURE__ */ React.createElement("div", { className: "link-list-heading text-primary fw-bold" }, "Heading") }, /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#", active: true }, /* @__PURE__ */ React.createElement("span", null, "Link list 1")), /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Link list 2")), /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Link list 3")))), /* @__PURE__ */ React.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ React.createElement(LinkList, { header: /* @__PURE__ */ React.createElement("div", { className: "link-list-heading text-primary fw-bold" }, "Heading") }, /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Link list 1")), /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#", disabled: true }, /* @__PURE__ */ React.createElement("span", null, "Link list 2")), /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Link list 3"))))))))));
};
const MenuOrizzontale = {
  render: () => {
    return /* @__PURE__ */ React.createElement(MenuOrizzontaleHooks, null);
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
