var _a, _b, _c;
import { R as React, r as reactExports } from "./index-aC1ZMUrs.js";
import { P as Popover, a as PopoverHeader, b as PopoverBody } from "./PopoverBody-BihYbUrb.js";
import { C as Container } from "./Container-BSU_5rqZ.js";
import { R as Row, C as Col } from "./Col-sbjB5dMm.js";
import { B as Button } from "./Button-C7R8X7iu.js";
import { I as Icon } from "./Icon-Djhnk6Va.js";
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
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, { xs: 12, md: {
    size: 4,
    offset: 4
  } }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(Button, { className: "me-1", color: "secondary", innerRef: targetRefAlto, onClick: () => {
    setPopoverOpenAlto(!popoverOpenAlto);
  } }, "Popover ", "in alto"), /* @__PURE__ */ React.createElement(Popover, { placement: "top", isOpen: popoverOpenAlto, target: targetRefAlto, toggle: () => {
    setPopoverOpenAlto(!popoverOpenAlto);
  } }, /* @__PURE__ */ React.createElement(PopoverHeader, null, "Titolo del popover"), /* @__PURE__ */ React.createElement(PopoverBody, null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus", /* @__PURE__ */ React.createElement("a", { href: "#", className: "popover-inner-link" }, " altro ... ")))))), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, { xs: 12, md: 4 }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(Button, { className: "me-1", color: "secondary", innerRef: targetRefDx, onClick: () => {
    setPopoverOpenDx(!popoverOpenDx);
  } }, "Popover ", "a destra"), /* @__PURE__ */ React.createElement(Popover, { placement: "right", isOpen: popoverOpenDx, target: targetRefDx, toggle: () => {
    setPopoverOpenDx(!popoverOpenDx);
  } }, /* @__PURE__ */ React.createElement(PopoverBody, null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus")))), /* @__PURE__ */ React.createElement(Col, { xs: 12, md: {
    size: 4,
    offset: 4
  } }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(Button, { className: "me-1", color: "secondary", innerRef: targetRefSx, onClick: () => {
    setPopoverOpenSx(!popoverOpenSx);
  } }, "Popover ", "a sinistra"), /* @__PURE__ */ React.createElement(Popover, { placement: "left", isOpen: popoverOpenSx, target: targetRefSx, toggle: () => {
    setPopoverOpenSx(!popoverOpenSx);
  } }, /* @__PURE__ */ React.createElement(PopoverHeader, null, /* @__PURE__ */ React.createElement(Icon, { icon: "it-help-circle", "aria-hidden": true }), "Titolo con icona"), /* @__PURE__ */ React.createElement(PopoverBody, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.", /* @__PURE__ */ React.createElement("a", { href: "#", className: "popover-inner-link" }, " altro ...", /* @__PURE__ */ React.createElement(Icon, { icon: "it-arrow-right", "aria-hidden": true }))))))), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, { xs: 12, md: {
    size: 4,
    offset: 4
  } }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(Button, { className: "me-1", color: "secondary", innerRef: targetRefBasso, onClick: () => {
    setPopoverOpenBasso(!popoverOpenBasso);
  } }, "Popover ", "in basso"), /* @__PURE__ */ React.createElement(Popover, { placement: "bottom", isOpen: popoverOpenBasso, target: targetRefBasso, toggle: () => {
    setPopoverOpenBasso(!popoverOpenBasso);
  } }, /* @__PURE__ */ React.createElement(PopoverHeader, null, "Titolo del popover"), /* @__PURE__ */ React.createElement(PopoverBody, null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus", /* @__PURE__ */ React.createElement("a", { href: "#", className: "popover-inner-link" }, " altro ... ")))))));
};
const Posizionamento = {
  render: () => /* @__PURE__ */ React.createElement(PosizionamentoWithHooks, null)
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
