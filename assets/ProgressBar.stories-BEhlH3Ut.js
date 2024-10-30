var _a, _b, _c;
import { R as React } from "./index-aC1ZMUrs.js";
import { P as PropTypes } from "./index-C6XlOQIa.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { t as tagPropType, e as toNumber, m as mapToCssModules } from "./utils-BToed_Um.js";
var _excluded = ["children", "className", "barClassName", "cssModule", "value", "min", "max", "animated", "striped", "color", "bar", "multi", "tag", "style", "barStyle", "barAriaValueText", "barAriaLabelledBy"];
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
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
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
  /** Enable animation to bar */
  animated: PropTypes.bool,
  bar: PropTypes.bool,
  barAriaLabelledBy: PropTypes.string,
  barAriaValueText: PropTypes.string,
  barClassName: PropTypes.string,
  barStyle: PropTypes.object,
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Add custom color to the placeholder */
  color: PropTypes.string,
  /** Maximum value of progress */
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Minimum value of progress, defaults to zero */
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  multi: PropTypes.bool,
  /** Add stripes to progress bar */
  striped: PropTypes.bool,
  style: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Current value of progress */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
function Progress(props) {
  var children = props.children, className = props.className, barClassName = props.barClassName, cssModule = props.cssModule, _props$value = props.value, value = _props$value === void 0 ? 0 : _props$value, _props$min = props.min, min = _props$min === void 0 ? 0 : _props$min, _props$max = props.max, max = _props$max === void 0 ? 100 : _props$max, animated = props.animated, striped = props.striped, color = props.color, bar = props.bar, multi = props.multi, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, _props$style = props.style, style = _props$style === void 0 ? {} : _props$style, _props$barStyle = props.barStyle, barStyle = _props$barStyle === void 0 ? {} : _props$barStyle, barAriaValueText = props.barAriaValueText, barAriaLabelledBy = props.barAriaLabelledBy, attributes = _objectWithoutProperties(props, _excluded);
  var percent = toNumber(value) / toNumber(max) * 100;
  var progressClasses = mapToCssModules(classNames(className, "progress"), cssModule);
  var progressBarClasses = mapToCssModules(classNames("progress-bar", bar ? className || barClassName : barClassName, animated ? "progress-bar-animated" : null, color ? "bg-".concat(color) : null, striped || animated ? "progress-bar-striped" : null), cssModule);
  var progressBarProps = {
    className: progressBarClasses,
    style: _objectSpread(_objectSpread(_objectSpread({}, bar ? style : {}), barStyle), {}, {
      width: "".concat(percent, "%")
    }),
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuetext": barAriaValueText,
    "aria-labelledby": barAriaLabelledBy,
    children
  };
  if (bar) {
    return /* @__PURE__ */ React.createElement(Tag, _extends({}, attributes, progressBarProps));
  }
  return /* @__PURE__ */ React.createElement(Tag, _extends({}, attributes, {
    style,
    className: progressClasses
  }), multi ? children : /* @__PURE__ */ React.createElement("div", progressBarProps));
}
Progress.propTypes = propTypes;
const meta = {
  title: "Linee Guida/Inserimento/ProgressBar",
  component: Progress
};
const Esempio = {
  render: () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Progress, { className: "progress-lg", value: "25" }), /* @__PURE__ */ React.createElement(Progress, { value: "33" }), /* @__PURE__ */ React.createElement(Progress, { value: "33", color: "dark" }))
};
Esempio.parameters = {
  ...Esempio.parameters,
  docs: {
    ...(_a = Esempio.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => <div>\n      <Progress className="progress-lg" value="25" />\n      <Progress value="33" />\n      <Progress value="33" color="dark" />\n    </div>\n}',
      ...(_c = (_b = Esempio.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["Esempio"];
const ProgressBarStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Esempio,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Esempio as E,
  ProgressBarStories as P
};
