var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { e } from "./iframe-CCeCdQXR.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "./Breadcrumb-BGShLczH.js";
import { I as Icon } from "./Icon-BE80VWGZ.js";
import "./track-focus-DbJ2CO43.js";
const meta = {
  title: "Linee Guida/Navigazione/Breadcrumbs",
  component: Breadcrumb
};
const HomeSenza = {
  render: () => /* @__PURE__ */ e.createElement(Breadcrumb, null, /* @__PURE__ */ e.createElement(BreadcrumbItem, { active: true }, "Home"))
};
const HomeConIcone = {
  render: () => /* @__PURE__ */ e.createElement(Breadcrumb, null, /* @__PURE__ */ e.createElement(BreadcrumbItem, { active: true }, /* @__PURE__ */ e.createElement(Icon, { className: "align-top me-1", icon: "it-pa", color: "secondary", "aria-hidden": true, size: "sm" }), "Home"))
};
const DueLivelliSenza = {
  render: () => /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement(Breadcrumb, null, /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Home"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, { active: true }, "Secondo livello")), /* @__PURE__ */ e.createElement(Breadcrumb, null, /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Home"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, ">")), /* @__PURE__ */ e.createElement(BreadcrumbItem, { active: true }, "Secondo livello")))
};
const DueLivelliCon = {
  render: () => /* @__PURE__ */ e.createElement(Breadcrumb, null, /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement(Icon, { className: "align-top me-1", icon: "it-pa", color: "secondary", "aria-hidden": true, size: "sm" }), /* @__PURE__ */ e.createElement("a", { href: "#" }, "Home"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, { active: true }, /* @__PURE__ */ e.createElement(Icon, { className: "align-top me-1", icon: "it-box", color: "secondary", "aria-hidden": true, size: "sm" }), "Secondo livello"))
};
const TreLivelliSenza = {
  render: () => /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement(Breadcrumb, null, /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Home"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Secondo livello"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, { active: true }, "Terzo livello")), /* @__PURE__ */ e.createElement(Breadcrumb, null, /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Home"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, ">")), /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Secondo livello"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, ">")), /* @__PURE__ */ e.createElement(BreadcrumbItem, { active: true }, "Terzo livello")))
};
const TreLivelliCon = {
  render: () => /* @__PURE__ */ e.createElement(Breadcrumb, null, /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement(Icon, { className: "align-top me-1", icon: "it-pa", color: "secondary", "aria-hidden": true, size: "sm" }), /* @__PURE__ */ e.createElement("a", { href: "#" }, "Home"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement(Icon, { className: "align-top me-1", icon: "it-box", color: "secondary", "aria-hidden": true, size: "sm" }), /* @__PURE__ */ e.createElement("a", { href: "#" }, "Secondo livello"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, { active: true }, /* @__PURE__ */ e.createElement(Icon, { className: "align-top me-1", icon: "it-file", color: "secondary", "aria-hidden": true, size: "sm" }), "Terzo livello"))
};
HomeSenza.parameters = {
  ...HomeSenza.parameters,
  docs: {
    ...(_a = HomeSenza.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <Breadcrumb>\n      <BreadcrumbItem active>Home</BreadcrumbItem>\n    </Breadcrumb>\n}",
      ...(_c = (_b = HomeSenza.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
HomeConIcone.parameters = {
  ...HomeConIcone.parameters,
  docs: {
    ...(_d = HomeConIcone.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => <Breadcrumb>\n      <BreadcrumbItem active>\n        <Icon className="align-top me-1" icon="it-pa" color="secondary" aria-hidden size="sm" />\n        Home\n      </BreadcrumbItem>\n    </Breadcrumb>\n}',
      ...(_f = (_e = HomeConIcone.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
DueLivelliSenza.parameters = {
  ...DueLivelliSenza.parameters,
  docs: {
    ...(_g = DueLivelliSenza.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: () => <section>\n      <Breadcrumb>\n        <BreadcrumbItem>\n          <a href="#">Home</a>\n          <span className="separator">/</span>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          Secondo livello\n        </BreadcrumbItem>\n      </Breadcrumb>\n      <Breadcrumb>\n        <BreadcrumbItem>\n          <a href="#">Home</a>\n          <span className="separator">&gt;</span>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          Secondo livello\n        </BreadcrumbItem>\n      </Breadcrumb>\n    </section>\n}',
      ...(_i = (_h = DueLivelliSenza.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
DueLivelliCon.parameters = {
  ...DueLivelliCon.parameters,
  docs: {
    ...(_j = DueLivelliCon.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  render: () => <Breadcrumb>\n      <BreadcrumbItem>\n        <Icon className="align-top me-1" icon="it-pa" color="secondary" aria-hidden size="sm" />\n        <a href="#">Home</a>\n        <span className="separator">/</span>\n      </BreadcrumbItem>\n      <BreadcrumbItem active>\n        <Icon className="align-top me-1" icon="it-box" color="secondary" aria-hidden size="sm" />\n        Secondo livello\n      </BreadcrumbItem>\n    </Breadcrumb>\n}',
      ...(_l = (_k = DueLivelliCon.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
TreLivelliSenza.parameters = {
  ...TreLivelliSenza.parameters,
  docs: {
    ...(_m = TreLivelliSenza.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '{\n  render: () => <section>\n      <Breadcrumb>\n        <BreadcrumbItem>\n          <a href="#">Home</a>\n          <span className="separator">/</span>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <a href="#">Secondo livello</a>\n          <span className="separator">/</span>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>Terzo livello</BreadcrumbItem>\n      </Breadcrumb>\n      <Breadcrumb>\n        <BreadcrumbItem>\n          <a href="#">Home</a>\n          <span className="separator">&gt;</span>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <a href="#">Secondo livello</a>\n          <span className="separator">&gt;</span>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>Terzo livello</BreadcrumbItem>\n      </Breadcrumb>\n    </section>\n}',
      ...(_o = (_n = TreLivelliSenza.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
TreLivelliCon.parameters = {
  ...TreLivelliCon.parameters,
  docs: {
    ...(_p = TreLivelliCon.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: '{\n  render: () => <Breadcrumb>\n      <BreadcrumbItem>\n        <Icon className="align-top me-1" icon="it-pa" color="secondary" aria-hidden size="sm" />\n        <a href="#">Home</a>\n        <span className="separator">/</span>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <Icon className="align-top me-1" icon="it-box" color="secondary" aria-hidden size="sm" />\n        <a href="#">Secondo livello</a>\n        <span className="separator">/</span>\n      </BreadcrumbItem>\n      <BreadcrumbItem active>\n        <Icon className="align-top me-1" icon="it-file" color="secondary" aria-hidden size="sm" />\n        Terzo livello\n      </BreadcrumbItem>\n    </Breadcrumb>\n}',
      ...(_r = (_q = TreLivelliCon.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
const __namedExportsOrder = ["HomeSenza", "HomeConIcone", "DueLivelliSenza", "DueLivelliCon", "TreLivelliSenza", "TreLivelliCon"];
const BreadcrumbStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DueLivelliCon,
  DueLivelliSenza,
  HomeConIcone,
  HomeSenza,
  TreLivelliCon,
  TreLivelliSenza,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  BreadcrumbStories as B,
  DueLivelliSenza as D,
  HomeSenza as H,
  TreLivelliSenza as T,
  HomeConIcone as a,
  DueLivelliCon as b,
  TreLivelliCon as c
};
