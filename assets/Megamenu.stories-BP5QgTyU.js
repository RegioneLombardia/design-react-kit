var _a, _b, _c, _d, _e, _f;
import { e, r as reactExports } from "./index-BehpJNG5.js";
import { M as MegamenuItem } from "./MegamenuItem-DDQOytVu.js";
import { N as Navbar } from "./Navbar-B1vzUW4q.js";
import { R as Row, C as Col } from "./Col-CBduUdZh.js";
import { N as NavbarToggler } from "./NavbarToggler-CO2D7-XQ.js";
import { I as Icon } from "./Icon-CwbcXiv7.js";
import { C as Collapse } from "./Collapse-JUs9UIql.js";
import { N as Nav } from "./Nav-NOEIohim.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-E5PaFpui.js";
const meta = {
  title: "Linee Guida/Navigazione/Megamenu",
  component: MegamenuItem,
  parameters: {
    docs: {
      story: {
        height: "350px"
      },
      canvas: {
        sourceState: "none"
      }
    }
  }
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
const ClassicoHooks = () => {
  const [openNav, setOpenNav] = reactExports.useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
    showCloser(!openNav, "closer01");
  };
  return /* @__PURE__ */ e.createElement(Navbar, { expand: "lg", className: "has-megamenu" }, /* @__PURE__ */ e.createElement(NavbarToggler, { className: "custom-navbar-toggler", onClick: toggle }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-burger" })), /* @__PURE__ */ e.createElement(NavbarToggler, { className: "custom-navbar-toggler it25-megamenu-closer", id: "closer01", onClick: toggle }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close-big" })), /* @__PURE__ */ e.createElement(Collapse, { isOpen: openNav, navbar: true, header: true, megamenu: true }, /* @__PURE__ */ e.createElement(Nav, { className: "mt-0", navbar: true }, /* @__PURE__ */ e.createElement(MegamenuItem, { itemName: "Megamenu" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 3")))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#", active: true }, /* @__PURE__ */ e.createElement("span", null, "Link list 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 3")))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#", disabled: true }, /* @__PURE__ */ e.createElement("span", null, "Link list 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 3")))))))));
};
const Classico = {
  render: () => {
    return /* @__PURE__ */ e.createElement(ClassicoHooks, null);
  }
};
const ConIntestazioneColonneHooks = () => {
  const [openNav, setOpenNav] = reactExports.useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
    showCloser(!openNav, "closer02");
  };
  return /* @__PURE__ */ e.createElement(Navbar, { expand: "lg", className: "has-megamenu" }, /* @__PURE__ */ e.createElement(NavbarToggler, { className: "custom-navbar-toggler", onClick: toggle }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-burger" })), /* @__PURE__ */ e.createElement(NavbarToggler, { className: "custom-navbar-toggler it25-megamenu-closer", id: "closer02", onClick: toggle }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close-big" })), /* @__PURE__ */ e.createElement(Collapse, { isOpen: openNav, navbar: true, header: true, megamenu: true }, /* @__PURE__ */ e.createElement(Nav, { className: "mt-0", navbar: true }, /* @__PURE__ */ e.createElement(MegamenuItem, { itemName: "Megamenu" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkList, { header: /* @__PURE__ */ e.createElement("div", { className: "link-list-heading text-primary fw-bold" }, "Sezione 1") }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 3")))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkList, { header: /* @__PURE__ */ e.createElement("div", { className: "link-list-heading text-primary fw-bold" }, "Sezione 2") }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#", active: true }, /* @__PURE__ */ e.createElement("span", null, "Link list 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 3")))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkList, { header: /* @__PURE__ */ e.createElement("div", { className: "link-list-heading text-primary fw-bold" }, "Sezione 3") }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#", disabled: true }, /* @__PURE__ */ e.createElement("span", null, "Link list 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 3")))))))));
};
const ConIntestazioneColonne = {
  render: () => {
    return /* @__PURE__ */ e.createElement(ConIntestazioneColonneHooks, null);
  }
};
Classico.parameters = {
  ...Classico.parameters,
  docs: {
    ...(_a = Classico.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <ClassicoHooks />;\n  }\n}",
      ...(_c = (_b = Classico.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
ConIntestazioneColonne.parameters = {
  ...ConIntestazioneColonne.parameters,
  docs: {
    ...(_d = ConIntestazioneColonne.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <ConIntestazioneColonneHooks />;\n  }\n}",
      ...(_f = (_e = ConIntestazioneColonne.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Classico", "ConIntestazioneColonne"];
const MegamenuStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Classico,
  ConIntestazioneColonne,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Classico as C,
  MegamenuStories as M,
  ConIntestazioneColonne as a
};
