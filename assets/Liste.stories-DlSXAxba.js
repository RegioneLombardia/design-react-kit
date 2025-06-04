var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { e, r as reactExports } from "./index-CkHlViRq.js";
import { C as Collapse } from "./Collapse-DQ64-E85.js";
import { I as Icon } from "./Icon-F0eg8ks0.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-BXSHz39N.js";
import "./track-focus-DbJ2CO43.js";
const meta = {
  title: "Linee Guida/Navigazione/Liste",
  component: LinkList
};
const Default = {
  render: () => /* @__PURE__ */ e.createElement(LinkList, { wrapperClassName: "it25-linklist-default" }, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { active: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { disabled: true }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")))
};
const SenzaDivider = {
  render: () => /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { active: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { disabled: true }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")))
};
const ConHeader = {
  render: () => /* @__PURE__ */ e.createElement(LinkList, { header: /* @__PURE__ */ e.createElement("div", { className: "link-list-heading" }, "Lorem ipsum") }, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { active: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, { disabled: true }, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")))
};
const NestedHooks = () => {
  const [collapseOpen1, toggleCollapse1] = reactExports.useState(false);
  const [collapseOpen2, toggleCollapse2] = reactExports.useState(false);
  const [collapseOpen3, toggleCollapse3] = reactExports.useState(false);
  const onToggle1 = (e2) => {
    e2.preventDefault();
    toggleCollapse1(!collapseOpen1);
  };
  const onToggle2 = (e2) => {
    e2.preventDefault();
    toggleCollapse2(!collapseOpen2);
  };
  const onToggle3 = (e2) => {
    e2.preventDefault();
    toggleCollapse3(!collapseOpen3);
  };
  const expanded = {
    "aria-expanded": true
  };
  return /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { bold: true, large: true, className: "icon-right border-bottom", onClick: onToggle1, ...collapseOpen1 ? expanded : {} }, /* @__PURE__ */ e.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ e.createElement("span", { className: "list-item-title" }, "Lorem ipsum dolor"), /* @__PURE__ */ e.createElement(Icon, { className: "right", color: "primary", icon: "it-expand", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(Collapse, { isOpen: collapseOpen1 }, /* @__PURE__ */ e.createElement(LinkList, { sublist: true }, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")))), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true, large: true, className: "icon-right border-bottom", onClick: onToggle2, ...collapseOpen2 ? expanded : {} }, /* @__PURE__ */ e.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ e.createElement("span", { className: "list-item-title" }, "Lorem ipsum dolor"), /* @__PURE__ */ e.createElement(Icon, { className: "right", color: "primary", icon: "it-expand", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(Collapse, { isOpen: collapseOpen2 }, /* @__PURE__ */ e.createElement(LinkList, { sublist: true }, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")))), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true, large: true, className: "icon-right border-bottom", onClick: onToggle3, ...collapseOpen3 ? expanded : {} }, /* @__PURE__ */ e.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ e.createElement("span", { className: "list-item-title" }, "Lorem ipsum dolor"), /* @__PURE__ */ e.createElement(Icon, { className: "right", color: "primary", icon: "it-expand", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(Collapse, { isOpen: collapseOpen3 }, /* @__PURE__ */ e.createElement(LinkList, { sublist: true }, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Lorem ipsum dolor")))));
};
const Nested = {
  render: () => {
    return /* @__PURE__ */ e.createElement(NestedHooks, null);
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_a = Default.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => <LinkList wrapperClassName="it25-linklist-default">\n      <LinkListItem>\n        <span>Lorem ipsum dolor</span>\n      </LinkListItem>\n      <LinkListItem active href="#">\n        <span>Lorem ipsum dolor</span>\n      </LinkListItem>\n      <LinkListItem>\n        <span>Lorem ipsum dolor</span>\n      </LinkListItem>\n      <LinkListItem disabled>\n        <span>Lorem ipsum dolor</span>\n      </LinkListItem>\n      <LinkListItem>\n        <span>Lorem ipsum dolor</span>\n      </LinkListItem>\n    </LinkList>\n}',
      ...(_c = (_b = Default.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
SenzaDivider.parameters = {
  ...SenzaDivider.parameters,
  docs: {
    ...(_d = SenzaDivider.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => <LinkList>\n      <LinkListItem>\n        <span>Lorem ipsum dolor</span>\n      </LinkListItem>\n      <LinkListItem active href="#">\n        <span>Lorem ipsum dolor</span>\n      </LinkListItem>\n      <LinkListItem>\n        <span>Lorem ipsum dolor</span>\n      </LinkListItem>\n      <LinkListItem disabled>\n        <span>Lorem ipsum dolor</span>\n      </LinkListItem>\n      <LinkListItem>\n        <span>Lorem ipsum dolor</span>\n      </LinkListItem>\n    </LinkList>\n}',
      ...(_f = (_e = SenzaDivider.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
ConHeader.parameters = {
  ...ConHeader.parameters,
  docs: {
    ...(_g = ConHeader.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: () => <LinkList header={<div className="link-list-heading">Lorem ipsum</div>}>\n      <LinkListItem>\n        <span>Lorem ipsum dolor</span>\n      </LinkListItem>\n      <LinkListItem active href="#">\n        <span>Lorem ipsum dolor</span>\n      </LinkListItem>\n      <LinkListItem>\n        <span>Lorem ipsum dolor</span>\n      </LinkListItem>\n      <LinkListItem disabled>\n        <span>Lorem ipsum dolor</span>\n      </LinkListItem>\n      <LinkListItem>\n        <span>Lorem ipsum dolor</span>\n      </LinkListItem>\n    </LinkList>\n}',
      ...(_i = (_h = ConHeader.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Nested.parameters = {
  ...Nested.parameters,
  docs: {
    ...(_j = Nested.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <NestedHooks />;\n  }\n}",
      ...(_l = (_k = Nested.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["Default", "SenzaDivider", "ConHeader", "Nested"];
const ListeStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ConHeader,
  Default,
  Nested,
  SenzaDivider,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  ConHeader as C,
  Default as D,
  ListeStories as L,
  Nested as N,
  SenzaDivider as S
};
