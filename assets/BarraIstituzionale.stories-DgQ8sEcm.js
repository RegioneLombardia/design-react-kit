var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { r as reactExports, e } from "./index-BehpJNG5.js";
import { C as Container } from "./Container-DM0Kn0QD.js";
import { R as Row, C as Col } from "./Col-CBduUdZh.js";
import { B as Button } from "./Button-CSHA-nY_.js";
import { I as Icon } from "./Icon-D_scqGwU.js";
import "./track-focus-DbJ2CO43.js";
import { T as TopBar } from "./TopBar-DmM21sZe.js";
import { M as MenuVerticale } from "./MenuVerticale-DqCThYyv.js";
import { F as Footer } from "./Footer-BJG0d9qW.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-E5PaFpui.js";
import { R as ResponsiveImage } from "./ResponsiveImage-VamWQThR.js";
import { S as Sidebar } from "./Sidebar-sTLe6AZz.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./utils-Cs0hNT-B.js";
import "./index-D3ELxcOV.js";
import "./Button-DpaK6EQT.js";
import "./iframe-Y7LDblFf.js";
import "../sb-preview/runtime.js";
import "./DropdownToggle-LNqCZlb7.js";
import "./DropdownToggle-DteEosLs.js";
import "./Popper-oXY5zJ3Q.js";
import "./index-DmVNLg0t.js";
import "./DropdownMenu-ByvFgIJX.js";
import "./HeaderContext-Dzs8nqu1.js";
function showVertMenu(show, id) {
  const vMenu = document.getElementById(id);
  const opener = document.getElementById("it25-btn-vmenu-opener");
  const closer = document.getElementById("it25-btn-vmenu-closer");
  if (vMenu && opener && closer) {
    if (show) {
      vMenu.classList.add("show");
      opener.classList.replace("d-block", "d-none");
      closer.classList.replace("d-none", "d-block");
    } else {
      vMenu.classList.remove("show");
      closer.classList.replace("d-block", "d-none");
      opener.classList.replace("d-none", "d-block");
    }
    document.activeElement.blur();
  }
}
const BarraIstituzionale = ({
  acronym = "",
  applicationName,
  search = false,
  hamburgerButton = false
}) => {
  const [openNav, setOpenNav] = reactExports.useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
    showVertMenu(!openNav, "it25-main-nav");
  };
  if (acronym == "") {
    acronym = applicationName;
    applicationName = "";
  }
  let HamburgerButton;
  if (hamburgerButton) {
    HamburgerButton = /* @__PURE__ */ e.createElement("div", { className: "it25-hamburger-btn-wrapper" }, /* @__PURE__ */ e.createElement(
      "button",
      {
        id: "btn-hamburger",
        "aria-controls": "it25-main-nav",
        "aria-expanded": "false",
        "aria-label": "Apri menù",
        className: "btn btn-xs d-md-none",
        "data-bs-toggle": "collapse",
        "data-bs-target": "#it25-main-nav",
        type: "button",
        onClick: toggle
      },
      /* @__PURE__ */ e.createElement(
        Icon,
        {
          className: "d-block",
          id: "it25-btn-vmenu-opener",
          color: "primary",
          icon: "it-burger"
        }
      ),
      /* @__PURE__ */ e.createElement(
        Icon,
        {
          className: "d-none",
          id: "it25-btn-vmenu-closer",
          color: "primary",
          icon: "it-close-big"
        }
      )
    ));
  }
  return /* @__PURE__ */ e.createElement("div", { className: "it-header-center-wrapper it25-barra-ist" }, /* @__PURE__ */ e.createElement(Container, { fluid: true }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 12 }, /* @__PURE__ */ e.createElement("div", { className: "it-header-center-content-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "it-brand-wrapper" }, HamburgerButton, /* @__PURE__ */ e.createElement("a", { href: "#" }, /* @__PURE__ */ e.createElement("img", { src: "img/logo-rl.png", alt: "logo regione lombardia", className: "it25-header-logo d-none d-md-block" }), /* @__PURE__ */ e.createElement("div", { className: "it-brand-text" }, acronym, " ", /* @__PURE__ */ e.createElement("span", { className: "d-none d-md-inline" }, applicationName)))), search && /* @__PURE__ */ e.createElement(Search, null))))));
};
const Search = () => {
  return /* @__PURE__ */ e.createElement("div", { className: "it-right-zone" }, /* @__PURE__ */ e.createElement("form", null, /* @__PURE__ */ e.createElement("div", { className: "it-search-wrapper" }, /* @__PURE__ */ e.createElement("input", { id: "search-input99", className: "form-control d-none d-lg-flex mr-sm-2 ml-auto", type: "search", placeholder: "Cerca...", "aria-label": "Testo per ricerca" }), /* @__PURE__ */ e.createElement(Button, { className: "btn p-0 m-1", type: "submit", "aria-label": "Esegui ricerca" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-search" })))));
};
BarraIstituzionale.__docgenInfo = { "description": "", "methods": [], "displayName": "BarraIstituzionale", "props": { "acronym": { "required": false, "tsType": { "name": "string" }, "description": "Acronimo dell'applicativo", "defaultValue": { "value": '""', "computed": false } }, "applicationName": { "required": true, "tsType": { "name": "string" }, "description": "Nome dell'applicativo" }, "search": { "required": false, "tsType": { "name": "boolean" }, "description": "Campo di recerca", "defaultValue": { "value": "false", "computed": false } }, "hamburgerButton": { "required": false, "tsType": { "name": "boolean" }, "description": "Bottone apertura/chiusura menù verticale *", "defaultValue": { "value": "false", "computed": false } } }, "composes": ["HTMLAttributes"] };
const meta = {
  title: "Linee Guida/Componenti Principali/Header/BarraIstituzionale",
  component: BarraIstituzionale,
  args: {
    acronym: "ACCREDITAS",
    applicationName: "Sistema di accreditamento"
  }
};
const BarraBase = {
  render: ({
    acronym,
    applicationName
  }) => /* @__PURE__ */ e.createElement(BarraIstituzionale, { acronym, applicationName })
};
const BarraSearch = {
  render: ({
    applicationName
  }) => /* @__PURE__ */ e.createElement(BarraIstituzionale, { applicationName, search: true })
};
const BottoneHamburger = {
  render: ({
    acronym,
    applicationName
  }) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("header", { className: "it25-menu" }, /* @__PURE__ */ e.createElement(TopBar, null), /* @__PURE__ */ e.createElement(BarraIstituzionale, { acronym, applicationName, hamburgerButton: true })), /* @__PURE__ */ e.createElement("main", null, /* @__PURE__ */ e.createElement(Container, { fluid: true }, /* @__PURE__ */ e.createElement(Row, { className: "flex-xl-nowrap" }, /* @__PURE__ */ e.createElement(Col, { xs: 12, md: 3 }, /* @__PURE__ */ e.createElement(MenuVerticale, { className: "collapse" }, /* @__PURE__ */ e.createElement(Sidebar, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { active: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link Attivo")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { disabled: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Disabilitato")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")))))), /* @__PURE__ */ e.createElement(Col, { xs: 12, md: 9, className: "p-3" }, /* @__PURE__ */ e.createElement(ResponsiveImage, { alt: "Alternative Text", src: "img/bike-sharing.jpg", title: "Image Title" }))))), /* @__PURE__ */ e.createElement(Footer, { acronym, applicationName }))
};
BarraBase.parameters = {
  ...BarraBase.parameters,
  docs: {
    ...(_a = BarraBase.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: ({\n    acronym,\n    applicationName\n  }) => <BarraIstituzionale acronym={acronym} applicationName={applicationName} />\n}",
      ...(_c = (_b = BarraBase.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
BarraSearch.parameters = {
  ...BarraSearch.parameters,
  docs: {
    ...(_d = BarraSearch.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: ({\n    applicationName\n  }) => <BarraIstituzionale applicationName={applicationName} search={true} />\n}",
      ...(_f = (_e = BarraSearch.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
BottoneHamburger.parameters = {
  ...BottoneHamburger.parameters,
  docs: {
    ...(_g = BottoneHamburger.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: ({\n    acronym,\n    applicationName\n  }) => <>\n      <header className="it25-menu">\n        <TopBar />\n        <BarraIstituzionale acronym={acronym} applicationName={applicationName} hamburgerButton={true} />\n      </header>\n      <main>\n        <Container fluid>\n          <Row className="flex-xl-nowrap">\n            <Col xs={12} md={3}>\n              <MenuVerticale className="collapse">\n                <Sidebar>\n                  <LinkList>\n                    <LinkListItem href="#">\n                      <span>Lorem ipsum dolor</span>\n                    </LinkListItem>\n                    <LinkListItem active href="#">\n                      <span>Link Attivo</span>\n                    </LinkListItem>\n                    <LinkListItem href="#">\n                      <span>Lorem ipsum dolor</span>\n                    </LinkListItem>\n                    <LinkListItem disabled href="#">\n                      <span>Disabilitato</span>\n                    </LinkListItem>\n                    <LinkListItem href="#">\n                      <span>Lorem ipsum dolor</span>\n                    </LinkListItem>\n                    <LinkListItem href="#">\n                      <span>Lorem ipsum dolor</span>\n                    </LinkListItem>\n                    <LinkListItem href="#">\n                      <span>Lorem ipsum dolor</span>\n                    </LinkListItem>\n                    <LinkListItem href="#">\n                      <span>Lorem ipsum dolor</span>\n                    </LinkListItem>\n                  </LinkList>\n                </Sidebar>\n              </MenuVerticale>\n            </Col>\n            <Col xs={12} md={9} className="p-3">\n              <ResponsiveImage alt="Alternative Text" src="img/bike-sharing.jpg" title="Image Title" />\n            </Col>\n          </Row>\n        </Container>\n      </main>\n      <Footer acronym={acronym} applicationName={applicationName}></Footer>\n    </>\n}',
      ...(_i = (_h = BottoneHamburger.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["BarraBase", "BarraSearch", "BottoneHamburger"];
export {
  BarraBase,
  BarraSearch,
  BottoneHamburger,
  __namedExportsOrder,
  meta as default
};
