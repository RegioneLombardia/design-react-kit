var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { r as reactExports, R as React } from "./index-aC1ZMUrs.js";
import { C as Container } from "./Container-BSU_5rqZ.js";
import { R as Row, C as Col } from "./Col-sbjB5dMm.js";
import { B as Button } from "./Button-C7R8X7iu.js";
import { I as Icon } from "./Icon-Djhnk6Va.js";
import { T as TopBar } from "./TopBar-Ddn3P3IC.js";
import { M as MenuVerticale } from "./MenuVerticale-CunI0Gwc.js";
import { F as Footer } from "./Footer-BiKzUMw3.js";
import { S as Sidebar } from "./Sidebar-Bu00DWDp.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-B69qYNZ5.js";
import { R as ResponsiveImage } from "./ResponsiveImage-BzmNYRQG.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-C6XlOQIa.js";
import "./index-xoeSAV6i.js";
import "./utils-BToed_Um.js";
import "./Button-BqturWaL.js";
import "./iframe-B3SUZ60o.js";
import "../sb-preview/runtime.js";
import "./DropdownToggle-qEzyw4-F.js";
import "./DropdownToggle-CpBYzZpr.js";
import "./Popper-BdfyK_V7.js";
import "./index-DVdwlR73.js";
import "./DropdownMenu-BVvApC7Y.js";
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
    HamburgerButton = /* @__PURE__ */ React.createElement("div", { className: "it25-hamburger-btn-wrapper" }, /* @__PURE__ */ React.createElement(
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
      /* @__PURE__ */ React.createElement(
        Icon,
        {
          className: "d-block",
          id: "it25-btn-vmenu-opener",
          color: "primary",
          icon: "it-burger"
        }
      ),
      /* @__PURE__ */ React.createElement(
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
  return /* @__PURE__ */ React.createElement("div", { className: "it-header-center-wrapper it25-barra-ist" }, /* @__PURE__ */ React.createElement(Container, { fluid: true }, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, { sm: 12 }, /* @__PURE__ */ React.createElement("div", { className: "it-header-center-content-wrapper" }, /* @__PURE__ */ React.createElement("div", { className: "it-brand-wrapper" }, HamburgerButton, /* @__PURE__ */ React.createElement("a", { href: "#" }, /* @__PURE__ */ React.createElement("img", { src: "img/logo-rl.png", alt: "logo regione lombardia", className: "it25-header-logo d-none d-md-block" }), /* @__PURE__ */ React.createElement("div", { className: "it-brand-text" }, acronym, " ", /* @__PURE__ */ React.createElement("span", { className: "d-none d-md-inline" }, applicationName)))), search && /* @__PURE__ */ React.createElement(Search, null))))));
};
const Search = () => {
  return /* @__PURE__ */ React.createElement("div", { className: "it-right-zone" }, /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement("div", { className: "it-search-wrapper" }, /* @__PURE__ */ React.createElement("input", { id: "search-input99", className: "form-control d-none d-lg-flex mr-sm-2 ml-auto", type: "search", placeholder: "Cerca...", "aria-label": "Testo per ricerca" }), /* @__PURE__ */ React.createElement(Button, { className: "btn p-0 m-1", type: "submit", "aria-label": "Esegui ricerca" }, /* @__PURE__ */ React.createElement(Icon, { icon: "it-search" })))));
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
  }) => /* @__PURE__ */ React.createElement(BarraIstituzionale, { acronym, applicationName })
};
const BarraSearch = {
  render: ({
    applicationName
  }) => /* @__PURE__ */ React.createElement(BarraIstituzionale, { applicationName, search: true })
};
const BottoneHamburger = {
  render: ({
    acronym,
    applicationName
  }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("header", { className: "it25-menu" }, /* @__PURE__ */ React.createElement(TopBar, null), /* @__PURE__ */ React.createElement(BarraIstituzionale, { acronym, applicationName, hamburgerButton: true })), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(Container, { fluid: true }, /* @__PURE__ */ React.createElement(Row, { className: "flex-xl-nowrap" }, /* @__PURE__ */ React.createElement(Col, { xs: 12, md: 3 }, /* @__PURE__ */ React.createElement(MenuVerticale, { className: "collapse" }, /* @__PURE__ */ React.createElement(Sidebar, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ React.createElement(LinkListItem, { active: true, href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Link Attivo")), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ React.createElement(LinkListItem, { disabled: true, href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Disabilitato")), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Lorem ipsum dolor")))))), /* @__PURE__ */ React.createElement(Col, { xs: 12, md: 9, className: "p-3" }, /* @__PURE__ */ React.createElement(ResponsiveImage, { alt: "Alternative Text", src: "img/bike-sharing.jpg", title: "Image Title" }))))), /* @__PURE__ */ React.createElement(Footer, { acronym, applicationName }))
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
