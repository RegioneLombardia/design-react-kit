import { R as React } from "./index-aC1ZMUrs.js";
import { P as PropTypes } from "./index-C6XlOQIa.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { t as tagPropType, m as mapToCssModules } from "./utils-BToed_Um.js";
var _excluded$1 = ["active", "className", "cssModule", "disabled", "tag"];
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var propTypes$1 = {
  /** Set item as active */
  active: PropTypes.bool,
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set item as disabled */
  disabled: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType
};
function PaginationItem(props) {
  var active = props.active, className = props.className, cssModule = props.cssModule, disabled = props.disabled, _props$tag = props.tag, Tag = _props$tag === void 0 ? "li" : _props$tag, attributes = _objectWithoutProperties$1(props, _excluded$1);
  var classes = mapToCssModules(classNames(className, "page-item", {
    active,
    disabled
  }), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends$1({}, attributes, {
    className: classes
  }));
}
PaginationItem.propTypes = propTypes$1;
var _excluded = ["className", "cssModule", "next", "previous", "first", "last", "tag"];
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var propTypes = {
  "aria-label": PropTypes.string,
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Add to next button to add default aria label and icon */
  next: PropTypes.bool,
  /** Add to previous button to add default aria label and icon */
  previous: PropTypes.bool,
  /** Add to first button to add default aria label and icon */
  first: PropTypes.bool,
  /** Add to last button to add default aria label and icon */
  last: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType
};
function PaginationLink(props) {
  var className = props.className, cssModule = props.cssModule, next = props.next, previous = props.previous, first = props.first, last = props.last, _props$tag = props.tag, Tag = _props$tag === void 0 ? "a" : _props$tag, attributes = _objectWithoutProperties(props, _excluded);
  var classes = mapToCssModules(classNames(className, "page-link"), cssModule);
  var defaultAriaLabel;
  if (previous) {
    defaultAriaLabel = "Previous";
  } else if (next) {
    defaultAriaLabel = "Next";
  } else if (first) {
    defaultAriaLabel = "First";
  } else if (last) {
    defaultAriaLabel = "Last";
  }
  var ariaLabel = props["aria-label"] || defaultAriaLabel;
  var defaultCaret;
  if (previous) {
    defaultCaret = "‹";
  } else if (next) {
    defaultCaret = "›";
  } else if (first) {
    defaultCaret = "«";
  } else if (last) {
    defaultCaret = "»";
  }
  var children = props.children;
  if (children && Array.isArray(children) && children.length === 0) {
    children = null;
  }
  if (!attributes.href && Tag === "a") {
    Tag = "button";
  }
  if (previous || next || first || last) {
    children = [/* @__PURE__ */ React.createElement("span", {
      "aria-hidden": "true",
      key: "caret"
    }, children || defaultCaret), /* @__PURE__ */ React.createElement("span", {
      className: "visually-hidden",
      key: "ariaLabel"
    }, ariaLabel)];
  }
  return /* @__PURE__ */ React.createElement(Tag, _extends({}, attributes, {
    className: classes,
    "aria-label": ariaLabel
  }), children);
}
PaginationLink.propTypes = propTypes;
const Pager = ({
  className,
  tag = "nav",
  listTag: ListTag = "ul",
  listClassName,
  children,
  total,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames(className, "pagination-wrapper", {
    "pagination-total": total
  });
  const listClasses = classNames(listClassName, "pagination");
  const { ariaLabel, label } = total || {};
  const totalAriaLabel = ariaLabel ? /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, ariaLabel) : null;
  return /* @__PURE__ */ React.createElement(Tag, { className: classes, ...attributes, "data-testid": testId }, /* @__PURE__ */ React.createElement(ListTag, { className: listClasses }, children), total ? /* @__PURE__ */ React.createElement("p", null, totalAriaLabel, label) : null);
};
Pager.__docgenInfo = { "description": "", "methods": [], "displayName": "Pager", "props": { "aria-label": { "required": true, "tsType": { "name": "string" }, "description": "Etichetta di descrizione del contenuto del componente Pager" }, "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'nav'", "computed": false } }, "listTag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati per la l'elemento lista interno", "defaultValue": { "value": "'ul'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Pager" }, "listClassName": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente di lista interno Pager" }, "total": { "required": false, "tsType": { "name": "signature", "type": "object", "raw": "{ ariaLabel: string; label: string }", "signature": { "properties": [{ "key": "ariaLabel", "value": { "name": "string", "required": true } }, { "key": "label", "value": { "name": "string", "required": true } }] } }, "description": "Utilizzare questo attributo per indicare il numero totale di pagine" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  Pager as P,
  PaginationItem as a,
  PaginationLink as b
};
