var _a, _b, _c, _d, _e, _f;
import { e, r as reactExports } from "./iframe-BdFmv8SM.js";
import { R as Row, C as Col } from "./Col-Cgzm-KfT.js";
import { B as Button } from "./Button-CPPKlX23.js";
import { C as Collapse } from "./Collapse-CPmUrbY6.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-DaNh76XJ.js";
import { D as DropdownMenu } from "./DropdownMenu-WdlcMIRN.js";
import { H as Header, a as HeaderContent } from "./HeaderContent-DPx5JvoZ.js";
import { H as HeaderBrand, a as HeaderRightZone } from "./HeaderRightZone-BiYqGS-J.js";
import { H as HeaderLinkZone } from "./HeaderLinkZone-CyuV-IC2.js";
import { H as HeaderToggler } from "./HeaderToggler-EDh-8Og_.js";
import { I as Icon } from "./Icon-BOZjw-AL.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-ZtDH8DDC.js";
import "./track-focus-DbJ2CO43.js";
import "./preload-helper-CQrtv1eE.js";
import "./utils-I-sN1Vsl.js";
import "./index-CkVteFxl.js";
import "./Button-Bci7-Cud.js";
import "./Transition-Co8zp6LZ.js";
import "./index-D2R6h4pv.js";
import "./DropdownToggle-CfiQxFlB.js";
import "./Popper-BFzd-jOD.js";
import "./HeaderContext-DQxdJr8m.js";
import "./Container-Bwlgv8oa.js";
import "./Navbar-D8J2UkqA.js";
import "./NavbarBrand-BAzj6zep.js";
import "./NavbarToggler-BW5nW6Ov.js";
const meta = {
  title: "Documentazione/Menu di navigazione/Header/Slim",
  component: Header
};
const SlimHeaderHooks = ({
  theme,
  brandText
}) => {
  const [isOpenCollapse, setIsOpenCollapse] = reactExports.useState(false);
  return /* @__PURE__ */ e.createElement(Header, { type: "slim", theme }, /* @__PURE__ */ e.createElement(HeaderContent, null, /* @__PURE__ */ e.createElement(HeaderBrand, null, brandText), /* @__PURE__ */ e.createElement(HeaderLinkZone, { "aria-label": "Navigazione accessoria" }, /* @__PURE__ */ e.createElement(HeaderToggler, { onClick: () => {
    setIsOpenCollapse(!isOpenCollapse);
  } }, /* @__PURE__ */ e.createElement("span", null, brandText), /* @__PURE__ */ e.createElement(Icon, { icon: "it-expand" })), /* @__PURE__ */ e.createElement(Collapse, { isOpen: isOpenCollapse, header: true }, /* @__PURE__ */ e.createElement(LinkList, { noWrapper: true }, /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, "Link 1"), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#", active: true }, "Link 2 Active")))), /* @__PURE__ */ e.createElement(HeaderRightZone, null, /* @__PURE__ */ e.createElement(Dropdown, { inNavbar: true }, /* @__PURE__ */ e.createElement(DropdownToggle, { caret: true }, "ITA"), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { size: "12" }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "ITA")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "ENG"))))))), /* @__PURE__ */ e.createElement("div", { className: "it-access-top-wrapper" }, /* @__PURE__ */ e.createElement(Button, { color: "primary", size: "sm" }, "Accedi")))));
};
const SlimHeader = {
  render: ({
    theme,
    brandText
  }) => /* @__PURE__ */ e.createElement(SlimHeaderHooks, { theme, brandText }),
  parameters: {
    docs: {
      controls: {
        exclude: ["isOpen", "className", "type", "small", "testId"]
      }
    }
  },
  args: {
    theme: "",
    brandText: "Ente appartenenza"
  }
};
const SlimHeaderFullResponse = {
  render: ({
    theme
  }) => {
    return /* @__PURE__ */ e.createElement(Header, { type: "slim", theme }, /* @__PURE__ */ e.createElement(HeaderContent, null, /* @__PURE__ */ e.createElement(HeaderBrand, { responsive: true }, "Ente appartenenza/Owner"), /* @__PURE__ */ e.createElement(HeaderRightZone, null, /* @__PURE__ */ e.createElement(Dropdown, { inNavbar: true }, /* @__PURE__ */ e.createElement(DropdownToggle, { caret: true }, "ITA"), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { size: "12" }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "ITA")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "ENG"))))))), /* @__PURE__ */ e.createElement(Button, { color: "primary", className: "btn-icon btn-full", href: "#" }, /* @__PURE__ */ e.createElement("span", { className: "rounded-icon" }, /* @__PURE__ */ e.createElement(Icon, { color: "primary", icon: "it-user" })), /* @__PURE__ */ e.createElement("span", { className: "d-none d-lg-block" }, "Accedi all'area personale")))));
  }
};
SlimHeader.parameters = {
  ...SlimHeader.parameters,
  docs: {
    ...(_a = SlimHeader.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: ({\n    theme,\n    brandText\n  }) => <SlimHeaderHooks theme={theme} brandText={brandText}></SlimHeaderHooks>,\n  parameters: {\n    docs: {\n      controls: {\n        exclude: ['isOpen', 'className', 'type', 'small', 'testId']\n      }\n    }\n  },\n  args: {\n    theme: '',\n    brandText: 'Ente appartenenza'\n  }\n}",
      ...(_c = (_b = SlimHeader.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
SlimHeaderFullResponse.parameters = {
  ...SlimHeaderFullResponse.parameters,
  docs: {
    ...(_d = SlimHeaderFullResponse.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: ({\n    theme\n  }) => {\n    return <Header type='slim' theme={theme}>\n        <HeaderContent>\n          <HeaderBrand responsive>Ente appartenenza/Owner</HeaderBrand>\n          <HeaderRightZone>\n            <Dropdown inNavbar>\n              <DropdownToggle caret>\n                ITA\n              </DropdownToggle>\n              <DropdownMenu>\n                <Row>\n                  <Col size='12'>\n                    <LinkList>\n                      <LinkListItem inDropdown href='#'>\n                        <span>ITA</span>\n                      </LinkListItem>\n                      <LinkListItem inDropdown href='#'>\n                        <span>ENG</span>\n                      </LinkListItem>\n                    </LinkList>\n                  </Col>\n                </Row>\n              </DropdownMenu>\n            </Dropdown>\n            <Button color='primary' className='btn-icon btn-full' href='#'>\n              <span className='rounded-icon'>\n                <Icon color='primary' icon='it-user' />\n              </span>\n              <span className='d-none d-lg-block'>Accedi all&#39;area personale</span>\n            </Button>\n          </HeaderRightZone>\n        </HeaderContent>\n      </Header>;\n  }\n}",
      ...(_f = (_e = SlimHeaderFullResponse.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["SlimHeader", "SlimHeaderFullResponse"];
export {
  SlimHeader,
  SlimHeaderFullResponse,
  __namedExportsOrder,
  meta as default
};
