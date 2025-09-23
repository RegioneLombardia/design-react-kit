var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { e } from "./iframe-BFNAXEkx.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "./Breadcrumb-DyDegZTo.js";
import { I as Icon } from "./Icon-Be4XlCcy.js";
import "./track-focus-DbJ2CO43.js";
const meta = {
  title: "Documentazione/Menu di navigazione/Breadcrumbs",
  component: Breadcrumb
};
const Esempi = {
  render: () => /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement(Breadcrumb, null, /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Home"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Subsection"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, { active: true }, "Current section")), /* @__PURE__ */ e.createElement(Breadcrumb, null, /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Home"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, ">")), /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Subsection"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, ">")), /* @__PURE__ */ e.createElement(BreadcrumbItem, { active: true }, "Current section")))
};
const ConIcone = {
  render: () => /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement(Breadcrumb, null, /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement(Icon, { className: "align-top me-1", icon: "it-link", color: "secondary", "aria-hidden": true, size: "sm" }), /* @__PURE__ */ e.createElement("a", { href: "#" }, "Home"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement(Icon, { className: "align-top me-1", icon: "it-link", color: "secondary", "aria-hidden": true, size: "sm" }), /* @__PURE__ */ e.createElement("a", { href: "#" }, "Subsection"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, { active: true }, /* @__PURE__ */ e.createElement(Icon, { className: "align-top me-1", icon: "it-link", color: "secondary", "aria-hidden": true, size: "sm" }), "Current section")))
};
const SuSfondoScuro = {
  render: () => /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement(Breadcrumb, { dark: true }, /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Home"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Subsection"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, { active: true }, "Current section")), /* @__PURE__ */ e.createElement(Breadcrumb, { dark: true }, /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement(Icon, { className: "align-top me-1", icon: "it-link", color: "white", "aria-hidden": true, size: "sm" }), /* @__PURE__ */ e.createElement("a", { href: "#" }, "Home"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement(Icon, { className: "align-top me-1", icon: "it-link", color: "white", "aria-hidden": true, size: "sm" }), /* @__PURE__ */ e.createElement("a", { href: "#" }, "Subsection"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, { active: true }, /* @__PURE__ */ e.createElement(Icon, { className: "align-top me-1", icon: "it-link", color: "white", "aria-hidden": true, size: "sm" }), "Current section")))
};
Esempi.parameters = {
  ...Esempi.parameters,
  docs: {
    ...(_a = Esempi.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => <section>\n            <Breadcrumb>\n                <BreadcrumbItem>\n                    <a href="#">Home</a>\n                    <span className="separator">/</span>\n                </BreadcrumbItem>\n                <BreadcrumbItem>\n                    <a href="#">Subsection</a>\n                    <span className="separator">/</span>\n                </BreadcrumbItem>\n                <BreadcrumbItem active>Current section</BreadcrumbItem>\n            </Breadcrumb>\n\n            <Breadcrumb>\n                <BreadcrumbItem>\n                    <a href="#">Home</a>\n                    <span className="separator">&gt;</span>\n                </BreadcrumbItem>\n                <BreadcrumbItem>\n                    <a href="#">Subsection</a>\n                    <span className="separator">&gt;</span>\n                </BreadcrumbItem>\n                <BreadcrumbItem active>Current section</BreadcrumbItem>\n            </Breadcrumb>\n        </section>\n}',
      ...(_c = (_b = Esempi.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
ConIcone.parameters = {
  ...ConIcone.parameters,
  docs: {
    ...(_d = ConIcone.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => <section>\n            <Breadcrumb>\n                <BreadcrumbItem>\n                    <Icon className="align-top me-1" icon="it-link" color="secondary" aria-hidden size="sm" />\n                    <a href="#">Home</a>\n                    <span className="separator">/</span>\n                </BreadcrumbItem>\n                <BreadcrumbItem>\n                    <Icon className="align-top me-1" icon="it-link" color="secondary" aria-hidden size="sm" />\n                    <a href="#">Subsection</a>\n                    <span className="separator">/</span>\n                </BreadcrumbItem>\n                <BreadcrumbItem active>\n                    <Icon className="align-top me-1" icon="it-link" color="secondary" aria-hidden size="sm" />\n                    Current section\n                </BreadcrumbItem>\n            </Breadcrumb>\n        </section>\n}',
      ...(_f = (_e = ConIcone.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
SuSfondoScuro.parameters = {
  ...SuSfondoScuro.parameters,
  docs: {
    ...(_g = SuSfondoScuro.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: () => <section>\n            <Breadcrumb dark>\n                <BreadcrumbItem>\n                    <a href="#">Home</a>\n                    <span className="separator">/</span>\n                </BreadcrumbItem>\n                <BreadcrumbItem>\n                    <a href="#">Subsection</a>\n                    <span className="separator">/</span>\n                </BreadcrumbItem>\n                <BreadcrumbItem active>Current section</BreadcrumbItem>\n            </Breadcrumb>\n\n            <Breadcrumb dark>\n                <BreadcrumbItem>\n                    <Icon className="align-top me-1" icon="it-link" color="white" aria-hidden size="sm" />\n                    <a href="#">Home</a>\n                    <span className="separator">/</span>\n                </BreadcrumbItem>\n                <BreadcrumbItem>\n                    <Icon className="align-top me-1" icon="it-link" color="white" aria-hidden size="sm" />\n                    <a href="#">Subsection</a>\n                    <span className="separator">/</span>\n                </BreadcrumbItem>\n                <BreadcrumbItem active>\n                    <Icon className="align-top me-1" icon="it-link" color="white" aria-hidden size="sm" />\n                    Current section\n                </BreadcrumbItem>\n            </Breadcrumb>\n        </section>\n}',
      ...(_i = (_h = SuSfondoScuro.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["Esempi", "ConIcone", "SuSfondoScuro"];
const BreadcrumbStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ConIcone,
  Esempi,
  SuSfondoScuro,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  BreadcrumbStories as B,
  ConIcone as C,
  Esempi as E,
  SuSfondoScuro as S
};
