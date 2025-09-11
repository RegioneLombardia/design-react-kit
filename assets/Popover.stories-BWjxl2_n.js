var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { e, r as reactExports } from "./iframe-CywKGv0B.js";
import { P as Popover, a as PopoverHeader, b as PopoverBody } from "./PopoverBody-DNlvUNrr.js";
import { B as Button } from "./Button-OS1IXdY8.js";
import { I as Icon } from "./Icon-CfKGR1lx.js";
import "./track-focus-DbJ2CO43.js";
const meta = {
  title: "Documentazione/Componenti/Popover",
  component: Popover,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const ExampleWithHooks = () => {
  const [popoverOpen, setPopoverOpen] = reactExports.useState(false);
  const targetRef = reactExports.useRef(null);
  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };
  return /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Button, { color: "danger", size: "lg", innerRef: targetRef, onClick: togglePopover }, "Clicca per attivare/disattivare il popover"), /* @__PURE__ */ e.createElement(Popover, { placement: "right", target: targetRef, isOpen: popoverOpen, toggle: togglePopover }, /* @__PURE__ */ e.createElement(PopoverHeader, null, "Titolo del popover"), /* @__PURE__ */ e.createElement(PopoverBody, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.")));
};
const Example = {
  render: () => /* @__PURE__ */ e.createElement(ExampleWithHooks, null)
};
const ElementiDisabilitatiWithHooks = () => {
  const [popoverOpen, setPopoverOpen] = reactExports.useState(false);
  const targetRef = reactExports.useRef(null);
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("span", { ref: targetRef }, /* @__PURE__ */ e.createElement(Button, { color: "primary", disabled: true, style: {
    pointerEvents: "none"
  } }, "Popover disabilitato")), /* @__PURE__ */ e.createElement(Popover, { placement: "right", target: targetRef, trigger: "hover", toggle: () => setPopoverOpen(!popoverOpen), isOpen: popoverOpen }, /* @__PURE__ */ e.createElement(PopoverHeader, null, "Titolo del popover"), /* @__PURE__ */ e.createElement(PopoverBody, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.")));
};
const ElementiDisabilitati = {
  render: () => /* @__PURE__ */ e.createElement(ElementiDisabilitatiWithHooks, null)
};
const DirezioniWithHooks = () => {
  const [popoverOpenSx, setPopoverOpenSx] = reactExports.useState(false);
  const [popoverOpenDx, setPopoverOpenDx] = reactExports.useState(false);
  const [popoverOpenAlto, setPopoverOpenAlto] = reactExports.useState(false);
  const [popoverOpenBasso, setPopoverOpenBasso] = reactExports.useState(false);
  const targetRefSx = reactExports.useRef(null);
  const targetRefDx = reactExports.useRef(null);
  const targetRefAlto = reactExports.useRef(null);
  const targetRefBasso = reactExports.useRef(null);
  return /* @__PURE__ */ e.createElement("div", { className: "d-flex flex-column" }, /* @__PURE__ */ e.createElement("div", { className: "mx-auto align-self-center p-2" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Button, { className: "me-1", color: "secondary", innerRef: targetRefSx, onClick: () => {
    setPopoverOpenSx(!popoverOpenSx);
  } }, "Popover ", "a sinistra"), /* @__PURE__ */ e.createElement(Popover, { placement: "left", isOpen: popoverOpenSx, target: targetRefSx, toggle: () => {
    setPopoverOpenSx(!popoverOpenSx);
  } }, /* @__PURE__ */ e.createElement(PopoverBody, null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus")))), /* @__PURE__ */ e.createElement("div", { className: "mx-auto align-self-center p-2" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Button, { className: "me-1", color: "secondary", innerRef: targetRefDx, onClick: () => {
    setPopoverOpenDx(!popoverOpenDx);
  } }, "Popover ", "a destra"), /* @__PURE__ */ e.createElement(Popover, { placement: "right", isOpen: popoverOpenDx, target: targetRefDx, toggle: () => {
    setPopoverOpenDx(!popoverOpenDx);
  } }, /* @__PURE__ */ e.createElement(PopoverBody, null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus")))), /* @__PURE__ */ e.createElement("div", { className: "mx-auto align-self-center p-2" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Button, { className: "me-1", color: "secondary", innerRef: targetRefAlto, onClick: () => {
    setPopoverOpenAlto(!popoverOpenAlto);
  } }, "Popover ", "in alto"), /* @__PURE__ */ e.createElement(Popover, { placement: "top", isOpen: popoverOpenAlto, target: targetRefAlto, toggle: () => {
    setPopoverOpenAlto(!popoverOpenAlto);
  } }, /* @__PURE__ */ e.createElement(PopoverBody, null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus")))), /* @__PURE__ */ e.createElement("div", { className: "mx-auto align-self-center p-2" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Button, { className: "me-1", color: "secondary", innerRef: targetRefBasso, onClick: () => {
    setPopoverOpenBasso(!popoverOpenBasso);
  } }, "Popover ", "in basso"), /* @__PURE__ */ e.createElement(Popover, { placement: "bottom", isOpen: popoverOpenBasso, target: targetRefBasso, toggle: () => {
    setPopoverOpenBasso(!popoverOpenBasso);
  } }, /* @__PURE__ */ e.createElement(PopoverBody, null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus")))));
};
const Direzioni = {
  render: () => /* @__PURE__ */ e.createElement(DirezioniWithHooks, null)
};
const TitoloIconaLinkWithHooks = () => {
  const [popoverOpen, setPopoverOpen] = reactExports.useState(false);
  const targetRef = reactExports.useRef(null);
  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };
  return /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Button, { color: "secondary", innerRef: targetRef, onClick: togglePopover }, "Popover con icona e link"), /* @__PURE__ */ e.createElement(Popover, { placement: "right", target: targetRef, isOpen: popoverOpen, toggle: togglePopover }, /* @__PURE__ */ e.createElement(PopoverHeader, null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-help-circle", "aria-hidden": true }), "Titolo con icona"), /* @__PURE__ */ e.createElement(PopoverBody, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.", /* @__PURE__ */ e.createElement("a", { href: "#", className: "popover-inner-link" }, "More info", /* @__PURE__ */ e.createElement(Icon, { icon: "it-arrow-right", "aria-hidden": true })))));
};
const TitoloIconaLink = {
  render: () => /* @__PURE__ */ e.createElement(TitoloIconaLinkWithHooks, null)
};
const ModalitàHoverWithHooks = () => {
  const [popoverOpen, setPopoverOpen] = reactExports.useState(false);
  const targetRef = reactExports.useRef(null);
  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };
  return /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Button, { color: "secondary", innerRef: targetRef }, "Apertura in Hover"), /* @__PURE__ */ e.createElement(Popover, { placement: "right", trigger: "hover", target: targetRef, isOpen: popoverOpen, toggle: togglePopover }, /* @__PURE__ */ e.createElement(PopoverHeader, null, "Popover in Hover"), /* @__PURE__ */ e.createElement(PopoverBody, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.")));
};
const ModalitàHover = {
  render: () => /* @__PURE__ */ e.createElement(ModalitàHoverWithHooks, null)
};
const ClickSuccessivoWithHooks = () => {
  const [popoverOpen, setPopoverOpen] = reactExports.useState(false);
  const targetRef = reactExports.useRef(null);
  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };
  return /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Button, { tabIndex: 0, color: "danger", innerRef: targetRef }, "Popover richiudibile"), /* @__PURE__ */ e.createElement(Popover, { placement: "right", trigger: "focus", target: targetRef, isOpen: popoverOpen, toggle: togglePopover }, /* @__PURE__ */ e.createElement(PopoverHeader, null, "Dismissible popover"), /* @__PURE__ */ e.createElement(PopoverBody, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.")));
};
const ClickSuccessivo = {
  render: () => /* @__PURE__ */ e.createElement(ClickSuccessivoWithHooks, null)
};
Example.parameters = {
  ...Example.parameters,
  docs: {
    ...(_a = Example.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <ExampleWithHooks />\n}",
      ...(_c = (_b = Example.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
ElementiDisabilitati.parameters = {
  ...ElementiDisabilitati.parameters,
  docs: {
    ...(_d = ElementiDisabilitati.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <ElementiDisabilitatiWithHooks />\n}",
      ...(_f = (_e = ElementiDisabilitati.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Direzioni.parameters = {
  ...Direzioni.parameters,
  docs: {
    ...(_g = Direzioni.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <DirezioniWithHooks />\n}",
      ...(_i = (_h = Direzioni.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
TitoloIconaLink.parameters = {
  ...TitoloIconaLink.parameters,
  docs: {
    ...(_j = TitoloIconaLink.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <TitoloIconaLinkWithHooks />\n}",
      ...(_l = (_k = TitoloIconaLink.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
ModalitàHover.parameters = {
  ...ModalitàHover.parameters,
  docs: {
    ...(_m = ModalitàHover.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: () => <ModalitàHoverWithHooks />\n}",
      ...(_o = (_n = ModalitàHover.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
ClickSuccessivo.parameters = {
  ...ClickSuccessivo.parameters,
  docs: {
    ...(_p = ClickSuccessivo.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  render: () => <ClickSuccessivoWithHooks />\n}",
      ...(_r = (_q = ClickSuccessivo.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
const __namedExportsOrder = ["Example", "ElementiDisabilitati", "Direzioni", "TitoloIconaLink", "ModalitàHover", "ClickSuccessivo"];
const PopoverStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ClickSuccessivo,
  Direzioni,
  ElementiDisabilitati,
  Example,
  ModalitàHover,
  TitoloIconaLink,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  ClickSuccessivo as C,
  Direzioni as D,
  Example as E,
  ModalitàHover as M,
  PopoverStories as P,
  TitoloIconaLink as T,
  ElementiDisabilitati as a
};
