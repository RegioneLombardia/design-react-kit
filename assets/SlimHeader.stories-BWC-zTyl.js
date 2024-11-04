var _a, _b, _c, _d, _e, _f;
import { R as React } from "./index-aC1ZMUrs.js";
import { H as Header, a as HeaderContent } from "./HeaderContent-CSEUZ_6Y.js";
import { H as HeaderBrand, a as HeaderRightZone } from "./HeaderRightZone-D5GjsZwH.js";
import { H as HeaderLinkZone } from "./HeaderLinkZone-BrVxzgyu.js";
import { H as HeaderToggler } from "./HeaderToggler-DBGe5SUa.js";
import { I as Icon } from "./Icon-CMQf0osR.js";
import { C as Collapse } from "./Collapse-DybBevio.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-B69qYNZ5.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-DjfptCRZ.js";
import { D as DropdownMenu } from "./DropdownMenu-BVvApC7Y.js";
import { R as Row, C as Col } from "./Col-sbjB5dMm.js";
import { B as Button } from "./Button-C7R8X7iu.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-xoeSAV6i.js";
import "./Container-BSU_5rqZ.js";
import "./index-C6XlOQIa.js";
import "./utils-BToed_Um.js";
import "./Navbar-CvHgj2bA.js";
import "./NavbarBrand-DqOLI5eZ.js";
import "./NavbarToggler-D2aV78Eb.js";
import "./iframe-BiDC3_i4.js";
import "../sb-preview/runtime.js";
import "./Transition-BB1znAg7.js";
import "./inheritsLoose-DBHupcN5.js";
import "./index-DVdwlR73.js";
import "./DropdownToggle-CpBYzZpr.js";
import "./Popper-BdfyK_V7.js";
import "./Button-BqturWaL.js";
const meta = {
  title: "Documentazione/Menu di navigazione/Header/Slim",
  component: Header
};
const SlimHeader = {
  render: ({
    theme,
    isOpen,
    brandText
  }) => {
    return /* @__PURE__ */ React.createElement(Header, { type: "slim", theme }, /* @__PURE__ */ React.createElement(HeaderContent, null, /* @__PURE__ */ React.createElement(HeaderBrand, null, brandText), /* @__PURE__ */ React.createElement(HeaderLinkZone, null, /* @__PURE__ */ React.createElement(HeaderToggler, { onClick: () => {
    } }, /* @__PURE__ */ React.createElement("span", null, brandText), /* @__PURE__ */ React.createElement(Icon, { icon: "it-expand" })), /* @__PURE__ */ React.createElement(Collapse, { isOpen, header: true }, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, { href: "#" }, "Link 1"), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#", active: true }, "Link 2 Active")))), /* @__PURE__ */ React.createElement(HeaderRightZone, null, /* @__PURE__ */ React.createElement(Dropdown, { inNavbar: true }, /* @__PURE__ */ React.createElement(DropdownToggle, { inNavbar: true, caret: true }, "ITA"), /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, { size: "12" }, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ React.createElement("span", null, "ITA")), /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ React.createElement("span", null, "ENG"))))))), /* @__PURE__ */ React.createElement("div", { className: "it-access-top-wrapper" }, /* @__PURE__ */ React.createElement(Button, { color: "primary", size: "sm" }, "Accedi")))));
  },
  parameters: {
    docs: {
      controls: {
        exclude: ["isOpen", "className", "type", "small", "testId"]
      }
    }
  },
  args: {
    theme: "",
    isOpen: false,
    brandText: "Ente appartenenza/Owner"
  }
};
const SlimHeaderFullResponse = {
  render: ({
    theme
  }) => {
    return /* @__PURE__ */ React.createElement(Header, { type: "slim", theme }, /* @__PURE__ */ React.createElement(HeaderContent, null, /* @__PURE__ */ React.createElement(HeaderBrand, { responsive: true }, "Ente appartenenza/Owner"), /* @__PURE__ */ React.createElement(HeaderRightZone, null, /* @__PURE__ */ React.createElement(Dropdown, { inNavbar: true }, /* @__PURE__ */ React.createElement(DropdownToggle, { inNavbar: true, caret: true }, "ITA"), /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, { size: "12" }, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ React.createElement("span", null, "ITA")), /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ React.createElement("span", null, "ENG"))))))), /* @__PURE__ */ React.createElement(Button, { color: "primary", className: "btn-icon btn-full", href: "#" }, /* @__PURE__ */ React.createElement("span", { className: "rounded-icon" }, /* @__PURE__ */ React.createElement(Icon, { color: "primary", icon: "it-user" })), /* @__PURE__ */ React.createElement("span", { className: "d-none d-lg-block" }, "Accedi all'area personale")))));
  }
};
SlimHeader.parameters = {
  ...SlimHeader.parameters,
  docs: {
    ...(_a = SlimHeader.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: ({\n    theme,\n    isOpen,\n    brandText\n  }) => {\n    return <Header type="slim" theme={theme}>\n                <HeaderContent>\n                    <HeaderBrand>{brandText}</HeaderBrand>\n                    <HeaderLinkZone>\n                        <HeaderToggler onClick={() => {\n            /* open logic state here */\n          }}>\n                            <span>{brandText}</span>\n                            <Icon icon="it-expand" />\n                        </HeaderToggler>\n                        <Collapse isOpen={isOpen} header>\n                            <LinkList>\n                                <LinkListItem href="#">Link 1</LinkListItem>\n                                <LinkListItem href="#" active>\n                                    Link 2 Active\n                                </LinkListItem>\n                            </LinkList>\n                        </Collapse>\n                    </HeaderLinkZone>\n                    <HeaderRightZone>\n                        <Dropdown inNavbar>\n                            <DropdownToggle inNavbar caret>\n                                ITA\n                            </DropdownToggle>\n                            <DropdownMenu>\n                                <Row>\n                                    <Col size="12">\n                                        <LinkList>\n                                            <LinkListItem inDropdown href="#">\n                                                <span>ITA</span>\n                                            </LinkListItem>\n                                            <LinkListItem inDropdown href="#">\n                                                <span>ENG</span>\n                                            </LinkListItem>\n                                        </LinkList>\n                                    </Col>\n                                </Row>\n                            </DropdownMenu>\n                        </Dropdown>\n                        <div className="it-access-top-wrapper">\n                            <Button color="primary" size="sm">\n                                Accedi\n                            </Button>\n                        </div>\n                    </HeaderRightZone>\n                </HeaderContent>\n            </Header>;\n  },\n  parameters: {\n    docs: {\n      controls: {\n        exclude: ["isOpen", "className", "type", "small", "testId"]\n      }\n    }\n  },\n  args: {\n    theme: "",\n    isOpen: false,\n    brandText: "Ente appartenenza/Owner"\n  }\n}',
      ...(_c = (_b = SlimHeader.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
SlimHeaderFullResponse.parameters = {
  ...SlimHeaderFullResponse.parameters,
  docs: {
    ...(_d = SlimHeaderFullResponse.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: ({\n    theme\n  }) => {\n    return <Header type="slim" theme={theme}>\n                <HeaderContent>\n                    <HeaderBrand responsive>Ente appartenenza/Owner</HeaderBrand>\n                    <HeaderRightZone>\n                        <Dropdown inNavbar>\n                            <DropdownToggle inNavbar caret>\n                                ITA\n                            </DropdownToggle>\n                            <DropdownMenu>\n                                <Row>\n                                    <Col size="12">\n                                        <LinkList>\n                                            <LinkListItem inDropdown href="#">\n                                                <span>ITA</span>\n                                            </LinkListItem>\n                                            <LinkListItem inDropdown href="#">\n                                                <span>ENG</span>\n                                            </LinkListItem>\n                                        </LinkList>\n                                    </Col>\n                                </Row>\n                            </DropdownMenu>\n                        </Dropdown>\n                        <Button color="primary" className="btn-icon btn-full" href="#">\n                            <span className="rounded-icon">\n                                <Icon color="primary" icon="it-user" />\n                            </span>\n                            <span className="d-none d-lg-block">Accedi all&#39;area personale</span>\n                        </Button>\n                    </HeaderRightZone>\n                </HeaderContent>\n            </Header>;\n  }\n}',
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
