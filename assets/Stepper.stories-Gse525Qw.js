var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { e } from "./index-BehpJNG5.js";
import { S as StepperContainer } from "./StepperContainer-CYxeGZAB.js";
import { S as StepperHeader, a as StepperHeaderElement } from "./StepperHeaderElement-Dy3wy5Gj.js";
import { I as Icon } from "./Icon-CwbcXiv7.js";
import { S as StepperContent, a as StepperNav } from "./StepperNav-rJ7ej5fN.js";
import { B as Button } from "./Button-CSHA-nY_.js";
const meta = {
  title: "Documentazione/Componenti/Stepper",
  component: StepperContainer
};
const TextOnly = () => {
  return /* @__PURE__ */ e.createElement(StepperContainer, null, /* @__PURE__ */ e.createElement(StepperHeader, null, /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "confirmed", appendIcon: "it-check" }, "Primo contenuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "active" }, "Secondo contenuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, null, "Terzo contenuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "mobile", tag: "span" }, "2/6")));
};
const TextAndIcons = () => {
  return /* @__PURE__ */ e.createElement(StepperContainer, null, /* @__PURE__ */ e.createElement(StepperHeader, null, /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "confirmed", appendIcon: "it-check", prependIcon: "it-calendar" }, "Primo contenuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "active", prependIcon: "it-lock" }, "Secondo contenuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { prependIcon: "it-settings" }, "Terzo contenuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "mobile", tag: "span" }, "2/6")));
};
const OrderOfTheSteps = () => {
  return /* @__PURE__ */ e.createElement(StepperContainer, null, /* @__PURE__ */ e.createElement(StepperHeader, null, /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "confirmed", stepperNumber: /* @__PURE__ */ e.createElement(Icon, { icon: "it-check" }) }, "Primo contenuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "active", noLine: true, stepperNumber: /* @__PURE__ */ e.createElement("span", null, "2") }, "Secondo contenuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { stepperNumber: /* @__PURE__ */ e.createElement("span", null, "3") }, "Terzo contenuto")));
};
const NavigationOfTheSteps = () => {
  return /* @__PURE__ */ e.createElement(StepperContainer, null, /* @__PURE__ */ e.createElement(StepperHeader, null, /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "confirmed", prependIcon: "it-check" }, "Primo contenuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "active" }, "Secondo contenuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, null, "Terzo contenuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "mobile", tag: "span" }, "2/6")), /* @__PURE__ */ e.createElement(StepperContent, null, /* @__PURE__ */ e.createElement("p", null, "Contenuto di esempio dello step corrente")), /* @__PURE__ */ e.createElement(StepperNav, null, /* @__PURE__ */ e.createElement(Button, { outline: true, color: "primary", size: "sm", className: "steppers-btn-prev" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left", color: "primary" }), "Indietro"), /* @__PURE__ */ e.createElement(Button, { outline: true, color: "primary", size: "sm", className: "steppers-btn-next" }, "Avanti", /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right", color: "primary" })), /* @__PURE__ */ e.createElement(Button, { color: "primary", size: "sm", className: "steppers-btn-confirm d-none d-lg-block" }, "Conferma")));
};
const VersionOnADarkBackground = () => {
  return /* @__PURE__ */ e.createElement(StepperContainer, { dark: true }, /* @__PURE__ */ e.createElement(StepperHeader, null, /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "confirmed", prependIcon: "it-check" }, "Primo contenuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "active" }, "Secondo contenuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, null, "Terzo contenuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "mobile", tag: "span" }, "2/6")), /* @__PURE__ */ e.createElement(StepperContent, { dark: true }, /* @__PURE__ */ e.createElement("p", null, "Contenuto di esempio dello step corrente")), /* @__PURE__ */ e.createElement(StepperNav, null, /* @__PURE__ */ e.createElement(Button, { outline: true, color: "primary", size: "sm", className: "steppers-btn-prev" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left", color: "primary" }), "Indietro"), /* @__PURE__ */ e.createElement(Button, { outline: true, color: "primary", size: "sm", className: "steppers-btn-next" }, "Avanti", /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right", color: "primary" })), /* @__PURE__ */ e.createElement(Button, { color: "primary", size: "sm", className: "stepper-btn-confirm d-none d-lg-block" }, "Conferma")));
};
const HeaderVariants = () => {
  return /* @__PURE__ */ e.createElement(StepperContainer, { dark: true }, /* @__PURE__ */ e.createElement(StepperHeader, null, /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "confirmed", prependIcon: "it-check" }, "Primo contenuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "active" }, "Secondo contenuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, null, "Terzo contnuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "mobile", tag: "span" }, "2/6")), /* @__PURE__ */ e.createElement(StepperHeader, null, /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "confirmed", appendIcon: "it-check", prependIcon: "it-calendar" }, "Primo contenuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "active", prependIcon: "it-lock" }, "Secondo contenuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { prependIcon: "it-settings" }, "Terzo contenuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "mobile", tag: "span" }, "2/6")), /* @__PURE__ */ e.createElement(StepperHeader, null, /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "confirmed", stepperNumber: /* @__PURE__ */ e.createElement(Icon, { icon: "it-check" }) }, "Primo contenuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "active", noLine: true, stepperNumber: /* @__PURE__ */ e.createElement("span", null, "2") }, "Secondo contenuto"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { stepperNumber: /* @__PURE__ */ e.createElement("span", null, "3") }, "Terzo contenuto")));
};
TextOnly.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TextOnly"
};
TextAndIcons.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TextAndIcons"
};
OrderOfTheSteps.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OrderOfTheSteps"
};
NavigationOfTheSteps.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NavigationOfTheSteps"
};
VersionOnADarkBackground.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "VersionOnADarkBackground"
};
HeaderVariants.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "HeaderVariants"
};
TextOnly.parameters = {
  ...TextOnly.parameters,
  docs: {
    ...(_a = TextOnly.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '() => {\n  return <StepperContainer>\n            <StepperHeader>\n                <StepperHeaderElement variant="confirmed" appendIcon="it-check">\n                    Primo contenuto\n                </StepperHeaderElement>\n                <StepperHeaderElement variant="active">Secondo contenuto</StepperHeaderElement>\n                <StepperHeaderElement>Terzo contenuto</StepperHeaderElement>\n                <StepperHeaderElement variant="mobile" tag={"span"}>\n                    2/6\n                </StepperHeaderElement>\n            </StepperHeader>\n        </StepperContainer>;\n}',
      ...(_c = (_b = TextOnly.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
TextAndIcons.parameters = {
  ...TextAndIcons.parameters,
  docs: {
    ...(_d = TextAndIcons.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '() => {\n  return <StepperContainer>\n            <StepperHeader>\n                <StepperHeaderElement variant="confirmed" appendIcon="it-check" prependIcon="it-calendar">\n                    Primo contenuto\n                </StepperHeaderElement>\n                <StepperHeaderElement variant="active" prependIcon="it-lock">\n                    Secondo contenuto\n                </StepperHeaderElement>\n                <StepperHeaderElement prependIcon="it-settings">Terzo contenuto</StepperHeaderElement>\n                <StepperHeaderElement variant="mobile" tag={"span"}>\n                    2/6\n                </StepperHeaderElement>\n            </StepperHeader>\n        </StepperContainer>;\n}',
      ...(_f = (_e = TextAndIcons.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
OrderOfTheSteps.parameters = {
  ...OrderOfTheSteps.parameters,
  docs: {
    ...(_g = OrderOfTheSteps.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '() => {\n  return <StepperContainer>\n            <StepperHeader>\n                <StepperHeaderElement variant="confirmed" stepperNumber={<Icon icon="it-check" />}>\n                    Primo contenuto\n                </StepperHeaderElement>\n                <StepperHeaderElement variant="active" noLine stepperNumber={<span>2</span>}>\n                    Secondo contenuto\n                </StepperHeaderElement>\n                <StepperHeaderElement stepperNumber={<span>3</span>}>Terzo contenuto</StepperHeaderElement>\n            </StepperHeader>\n        </StepperContainer>;\n}',
      ...(_i = (_h = OrderOfTheSteps.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
NavigationOfTheSteps.parameters = {
  ...NavigationOfTheSteps.parameters,
  docs: {
    ...(_j = NavigationOfTheSteps.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '() => {\n  return <StepperContainer>\n            <StepperHeader>\n                <StepperHeaderElement variant="confirmed" prependIcon="it-check">\n                    Primo contenuto\n                </StepperHeaderElement>\n                <StepperHeaderElement variant="active">Secondo contenuto</StepperHeaderElement>\n                <StepperHeaderElement>Terzo contenuto</StepperHeaderElement>\n                <StepperHeaderElement variant="mobile" tag={"span"}>\n                    2/6\n                </StepperHeaderElement>\n            </StepperHeader>\n            <StepperContent>\n                <p>Contenuto di esempio dello step corrente</p>\n            </StepperContent>\n            <StepperNav>\n                <Button outline color="primary" size="sm" className="steppers-btn-prev">\n                    <Icon icon="it-chevron-left" color="primary" />\n                    Indietro\n                </Button>\n                <Button outline color="primary" size="sm" className="steppers-btn-next">\n                    Avanti\n                    <Icon icon="it-chevron-right" color="primary" />\n                </Button>\n                <Button color="primary" size="sm" className="steppers-btn-confirm d-none d-lg-block">\n                    Conferma\n                </Button>\n            </StepperNav>\n        </StepperContainer>;\n}',
      ...(_l = (_k = NavigationOfTheSteps.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
VersionOnADarkBackground.parameters = {
  ...VersionOnADarkBackground.parameters,
  docs: {
    ...(_m = VersionOnADarkBackground.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '() => {\n  return <StepperContainer dark>\n            <StepperHeader>\n                <StepperHeaderElement variant="confirmed" prependIcon="it-check">\n                    Primo contenuto\n                </StepperHeaderElement>\n                <StepperHeaderElement variant="active">Secondo contenuto</StepperHeaderElement>\n                <StepperHeaderElement>Terzo contenuto</StepperHeaderElement>\n                <StepperHeaderElement variant="mobile" tag={"span"}>\n                    2/6\n                </StepperHeaderElement>\n            </StepperHeader>\n            <StepperContent dark>\n                <p>Contenuto di esempio dello step corrente</p>\n            </StepperContent>\n            <StepperNav>\n                <Button outline color="primary" size="sm" className="steppers-btn-prev">\n                    <Icon icon="it-chevron-left" color="primary" />\n                    Indietro\n                </Button>\n                <Button outline color="primary" size="sm" className="steppers-btn-next">\n                    Avanti\n                    <Icon icon="it-chevron-right" color="primary" />\n                </Button>\n                <Button color="primary" size="sm" className="stepper-btn-confirm d-none d-lg-block">\n                    Conferma\n                </Button>\n            </StepperNav>\n        </StepperContainer>;\n}',
      ...(_o = (_n = VersionOnADarkBackground.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
HeaderVariants.parameters = {
  ...HeaderVariants.parameters,
  docs: {
    ...(_p = HeaderVariants.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: '() => {\n  return <StepperContainer dark>\n            <StepperHeader>\n                <StepperHeaderElement variant="confirmed" prependIcon="it-check">\n                    Primo contenuto\n                </StepperHeaderElement>\n                <StepperHeaderElement variant="active">Secondo contenuto</StepperHeaderElement>\n                <StepperHeaderElement>Terzo contnuto</StepperHeaderElement>\n                <StepperHeaderElement variant="mobile" tag={"span"}>\n                    2/6\n                </StepperHeaderElement>\n            </StepperHeader>\n            <StepperHeader>\n                <StepperHeaderElement variant="confirmed" appendIcon="it-check" prependIcon="it-calendar">\n                    Primo contenuto\n                </StepperHeaderElement>\n                <StepperHeaderElement variant="active" prependIcon="it-lock">\n                    Secondo contenuto\n                </StepperHeaderElement>\n                <StepperHeaderElement prependIcon="it-settings">Terzo contenuto</StepperHeaderElement>\n                <StepperHeaderElement variant="mobile" tag={"span"}>\n                    2/6\n                </StepperHeaderElement>\n            </StepperHeader>\n            <StepperHeader>\n                <StepperHeaderElement variant="confirmed" stepperNumber={<Icon icon="it-check" />}>\n                    Primo contenuto\n                </StepperHeaderElement>\n                <StepperHeaderElement variant="active" noLine stepperNumber={<span>2</span>}>\n                    Secondo contenuto\n                </StepperHeaderElement>\n                <StepperHeaderElement stepperNumber={<span>3</span>}>Terzo contenuto</StepperHeaderElement>\n            </StepperHeader>\n        </StepperContainer>;\n}',
      ...(_r = (_q = HeaderVariants.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
const __namedExportsOrder = ["TextOnly", "TextAndIcons", "OrderOfTheSteps", "NavigationOfTheSteps", "VersionOnADarkBackground", "HeaderVariants"];
const StepperStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HeaderVariants,
  NavigationOfTheSteps,
  OrderOfTheSteps,
  TextAndIcons,
  TextOnly,
  VersionOnADarkBackground,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  HeaderVariants as H,
  NavigationOfTheSteps as N,
  OrderOfTheSteps as O,
  StepperStories as S,
  TextOnly as T,
  VersionOnADarkBackground as V,
  TextAndIcons as a
};
