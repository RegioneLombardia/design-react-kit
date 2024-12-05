var _a, _b, _c, _d, _e, _f;
import { e } from "./index-BehpJNG5.js";
import { H as Header, a as HeaderContent } from "./HeaderContent-BxqNSSR8.js";
import { H as HeaderBrand, a as HeaderRightZone } from "./HeaderRightZone-Bu2rN6yG.js";
import { H as HeaderSocialsZone, a as HeaderSearch } from "./HeaderSocialsZone-hK1vRQ_J.js";
import { I as Icon } from "./Icon-CwbcXiv7.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./index-D3ELxcOV.js";
import "./Container-DM0Kn0QD.js";
import "./utils-Cs0hNT-B.js";
import "./Col-CBduUdZh.js";
import "./Navbar-B1vzUW4q.js";
import "./NavbarBrand-1cijj3Qy.js";
import "./iframe-CaWOas9z.js";
import "../sb-preview/runtime.js";
const meta = {
  title: "Documentazione/Menu di navigazione/Header/Center",
  component: Header,
  parameters: {
    docs: {
      controls: {
        exclude: ["isOpen", "className", "type", "small", "testId"]
      }
    }
  }
};
const CenterHeaderBasic = {
  render: ({
    theme,
    small
  }) => /* @__PURE__ */ e.createElement(Header, { type: "center", theme, small }, /* @__PURE__ */ e.createElement(HeaderContent, null, /* @__PURE__ */ e.createElement(HeaderBrand, { iconName: "it-code-circle", iconAlt: "it code circle icon" }, /* @__PURE__ */ e.createElement("h2", null, "Lorem Ipsum Lorem Ipsum"), /* @__PURE__ */ e.createElement("h3", null, "Inserire qui la tag line")), /* @__PURE__ */ e.createElement(HeaderRightZone, null, /* @__PURE__ */ e.createElement(HeaderSocialsZone, { label: "Seguici su" }, /* @__PURE__ */ e.createElement("ul", null, /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("a", { href: "#", "aria-label": "Facebook", target: "_blank" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-facebook" }))), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("a", { href: "#", "aria-label": "Github", target: "_blank" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-github" }))), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("a", { href: "#", "aria-label": "Twitter", target: "_blank" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-twitter" }))))), /* @__PURE__ */ e.createElement(HeaderSearch, { label: "Cerca", iconName: "it-search" })))),
  args: {
    theme: "",
    small: false
  },
  argTypes: {
    theme: {
      control: "radio",
      options: ["", "light", "dark"]
    }
  }
};
const HeaderCenterNarrow = {
  ...CenterHeaderBasic,
  args: {
    theme: "",
    small: true
  }
};
CenterHeaderBasic.parameters = {
  ...CenterHeaderBasic.parameters,
  docs: {
    ...(_a = CenterHeaderBasic.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: ({\n    theme,\n    small\n  }) => <Header type='center' theme={theme} small={small}>\n      <HeaderContent>\n        <HeaderBrand iconName='it-code-circle' iconAlt='it code circle icon'>\n          <h2>Lorem Ipsum Lorem Ipsum</h2>\n          <h3>Inserire qui la tag line</h3>\n        </HeaderBrand>\n        <HeaderRightZone>\n          <HeaderSocialsZone label='Seguici su'>\n            <ul>\n              <li>\n                <a href='#' aria-label='Facebook' target='_blank'>\n                  <Icon icon='it-facebook' />\n                </a>\n              </li>\n              <li>\n                <a href='#' aria-label='Github' target='_blank'>\n                  <Icon icon='it-github' />\n                </a>\n              </li>\n              <li>\n                <a href='#' aria-label='Twitter' target='_blank'>\n                  <Icon icon='it-twitter' />\n                </a>\n              </li>\n            </ul>\n          </HeaderSocialsZone>\n          <HeaderSearch label='Cerca' iconName='it-search' />\n        </HeaderRightZone>\n      </HeaderContent>\n    </Header>,\n  args: {\n    theme: '',\n    small: false\n  },\n  argTypes: {\n    theme: {\n      control: 'radio',\n      options: ['', 'light', 'dark']\n    }\n  }\n}",
      ...(_c = (_b = CenterHeaderBasic.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
HeaderCenterNarrow.parameters = {
  ...HeaderCenterNarrow.parameters,
  docs: {
    ...(_d = HeaderCenterNarrow.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  ...CenterHeaderBasic,\n  args: {\n    theme: '',\n    small: true\n  }\n}",
      ...(_f = (_e = HeaderCenterNarrow.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["CenterHeaderBasic", "HeaderCenterNarrow"];
export {
  CenterHeaderBasic,
  HeaderCenterNarrow,
  __namedExportsOrder,
  meta as default
};