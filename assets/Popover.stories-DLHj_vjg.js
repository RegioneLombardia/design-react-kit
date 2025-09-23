var _a, _b, _c;
import { e, r as reactExports } from "./iframe-BFNAXEkx.js";
import { C as Container } from "./Container-BxoeQkUV.js";
import { R as Row, C as Col } from "./Col-CkVB0JHd.js";
import { P as Popover, a as PopoverHeader, b as PopoverBody } from "./PopoverBody-CoMUzfsA.js";
import { B as Button } from "./Button-CPeRZpnQ.js";
import { I as Icon } from "./Icon-Be4XlCcy.js";
import "./track-focus-DbJ2CO43.js";
const meta = {
  title: "Linee Guida/Inserimento/Popover",
  component: Popover
};
const PosizionamentoWithHooks = () => {
  const [popoverOpenSx, setPopoverOpenSx] = reactExports.useState(false);
  const [popoverOpenDx, setPopoverOpenDx] = reactExports.useState(false);
  const [popoverOpenAlto, setPopoverOpenAlto] = reactExports.useState(false);
  const [popoverOpenBasso, setPopoverOpenBasso] = reactExports.useState(false);
  const targetRefSx = reactExports.useRef(null);
  const targetRefDx = reactExports.useRef(null);
  const targetRefAlto = reactExports.useRef(null);
  const targetRefBasso = reactExports.useRef(null);
  return /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: 12, md: {
    size: 4,
    offset: 4
  } }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Button, { className: "me-1", color: "secondary", innerRef: targetRefAlto, onClick: () => {
    setPopoverOpenAlto(!popoverOpenAlto);
  } }, "Popover ", "in alto"), /* @__PURE__ */ e.createElement(Popover, { placement: "top", isOpen: popoverOpenAlto, target: targetRefAlto, toggle: () => {
    setPopoverOpenAlto(!popoverOpenAlto);
  } }, /* @__PURE__ */ e.createElement(PopoverHeader, null, "Titolo del popover"), /* @__PURE__ */ e.createElement(PopoverBody, null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus", /* @__PURE__ */ e.createElement("a", { href: "#", className: "popover-inner-link" }, " altro ... ")))))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: 12, md: 4 }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Button, { className: "me-1", color: "secondary", innerRef: targetRefDx, onClick: () => {
    setPopoverOpenDx(!popoverOpenDx);
  } }, "Popover ", "a destra"), /* @__PURE__ */ e.createElement(Popover, { placement: "right", isOpen: popoverOpenDx, target: targetRefDx, toggle: () => {
    setPopoverOpenDx(!popoverOpenDx);
  } }, /* @__PURE__ */ e.createElement(PopoverBody, null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus")))), /* @__PURE__ */ e.createElement(Col, { xs: 12, md: {
    size: 4,
    offset: 4
  } }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Button, { className: "me-1", color: "secondary", innerRef: targetRefSx, onClick: () => {
    setPopoverOpenSx(!popoverOpenSx);
  } }, "Popover ", "a sinistra"), /* @__PURE__ */ e.createElement(Popover, { placement: "left", isOpen: popoverOpenSx, target: targetRefSx, toggle: () => {
    setPopoverOpenSx(!popoverOpenSx);
  } }, /* @__PURE__ */ e.createElement(PopoverHeader, null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-help-circle", "aria-hidden": true }), "Titolo con icona"), /* @__PURE__ */ e.createElement(PopoverBody, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.", /* @__PURE__ */ e.createElement("a", { href: "#", className: "popover-inner-link" }, " altro ...", /* @__PURE__ */ e.createElement(Icon, { icon: "it-arrow-right", "aria-hidden": true }))))))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: 12, md: {
    size: 4,
    offset: 4
  } }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Button, { className: "me-1", color: "secondary", innerRef: targetRefBasso, onClick: () => {
    setPopoverOpenBasso(!popoverOpenBasso);
  } }, "Popover ", "in basso"), /* @__PURE__ */ e.createElement(Popover, { placement: "bottom", isOpen: popoverOpenBasso, target: targetRefBasso, toggle: () => {
    setPopoverOpenBasso(!popoverOpenBasso);
  } }, /* @__PURE__ */ e.createElement(PopoverHeader, null, "Titolo del popover"), /* @__PURE__ */ e.createElement(PopoverBody, null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus", /* @__PURE__ */ e.createElement("a", { href: "#", className: "popover-inner-link" }, " altro ... ")))))));
};
const Posizionamento = {
  render: () => /* @__PURE__ */ e.createElement(PosizionamentoWithHooks, null)
};
Posizionamento.parameters = {
  ...Posizionamento.parameters,
  docs: {
    ...(_a = Posizionamento.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <PosizionamentoWithHooks />\n}",
      ...(_c = (_b = Posizionamento.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["Posizionamento"];
const PopoverStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Posizionamento,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  PopoverStories as P,
  Posizionamento as a
};
