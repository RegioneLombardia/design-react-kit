var _a, _b, _c;
import { R as React, r as reactExports } from "./index-aC1ZMUrs.js";
import { c as classNames } from "./index-xoeSAV6i.js";
const Skiplink = ({ className, tag = "div", testId, ...attributes }) => {
  const Tag = tag;
  const classes = classNames(className, "skiplinks");
  return /* @__PURE__ */ React.createElement(Tag, { className: classes, ...attributes, "data-testid": testId });
};
Skiplink.__docgenInfo = { "description": "", "methods": [], "displayName": "Skiplink", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'div'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Skiplink" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const SkiplinkItem = ({
  className,
  tag = "a",
  focusable = true,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames(className, {
    "visually-hidden-focusable": focusable
  });
  const extraHref = attributes.onClick ? { href: "#" } : {};
  return /* @__PURE__ */ React.createElement(Tag, { className: classes, ...attributes, ...extraHref, "data-testid": testId });
};
SkiplinkItem.__docgenInfo = { "description": "", "methods": [], "displayName": "SkiplinkItem", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'a'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Skiplink" }, "focusable": { "required": false, "tsType": { "name": "boolean" }, "description": "Abilitare questo attributo per renderizzare lo SkipLinkItem al focus", "defaultValue": { "value": "true", "computed": false } }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["AnchorHTMLAttributes"] };
const meta = {
  title: "Documentazione/Componenti/Skiplinks",
  component: Skiplink,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const EsempiWithHooks = () => {
  const containerRef = reactExports.useRef(null);
  const footerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a2;
    (_a2 = containerRef.current) == null ? void 0 : _a2.focus();
  }, []);
  const onClick = () => {
    var _a2;
    (_a2 = footerRef.current) == null ? void 0 : _a2.scrollIntoView();
  };
  return /* @__PURE__ */ React.createElement("section", { tabIndex: -1, ref: containerRef }, /* @__PURE__ */ React.createElement("div", { id: "#main" }), /* @__PURE__ */ React.createElement("div", { id: "#footer", ref: footerRef }), /* @__PURE__ */ React.createElement(Skiplink, null, /* @__PURE__ */ React.createElement(SkiplinkItem, { href: "#main" }, "Skip to main content"), /* @__PURE__ */ React.createElement(SkiplinkItem, { onClick }, "Skip to footer")));
};
const _Esempi = {
  render: () => /* @__PURE__ */ React.createElement(EsempiWithHooks, null)
};
_Esempi.parameters = {
  ..._Esempi.parameters,
  docs: {
    ...(_a = _Esempi.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <EsempiWithHooks />\n}",
      ...(_c = (_b = _Esempi.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["_Esempi"];
const SkiplinksStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _Esempi,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  SkiplinksStories as S,
  _Esempi as _
};
