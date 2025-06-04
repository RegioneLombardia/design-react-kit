import { e } from "./index-CkHlViRq.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { T as TooltipPopoverWrapper, p as propTypes$2 } from "./TooltipPopoverWrapper-DZhAg-T_.js";
import { m as mapToCssModules, P as PropTypes, t as tagPropType } from "./utils-o7gD2GSt.js";
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends$2.apply(this, arguments);
}
var defaultProps = {
  placement: "right",
  placementPrefix: "bs-popover",
  trigger: "click",
  offset: [0, 8]
};
function Popover(props) {
  var arrowClasses = classNames("popover-arrow", props.arrowClassName);
  var popperClasses = classNames("popover", "show", props.popperClassName);
  var classes = classNames("popover-inner", props.innerClassName);
  return /* @__PURE__ */ e.createElement(TooltipPopoverWrapper, _extends$2({}, props, {
    arrowClassName: arrowClasses,
    popperClassName: popperClasses,
    innerClassName: classes
  }));
}
Popover.propTypes = propTypes$2;
Popover.defaultProps = defaultProps;
var _excluded$1 = ["className", "cssModule", "tag"];
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
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
function PopoverHeader(props) {
  var className = props.className, cssModule = props.cssModule, _props$tag = props.tag, Tag = _props$tag === void 0 ? "h3" : _props$tag, attributes = _objectWithoutProperties$1(props, _excluded$1);
  var classes = mapToCssModules(classNames(className, "popover-header"), cssModule);
  return /* @__PURE__ */ e.createElement(Tag, _extends$1({}, attributes, {
    className: classes
  }));
}
PopoverHeader.propTypes = propTypes$1;
var _excluded = ["className", "cssModule", "tag"];
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
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
function PopoverBody(props) {
  var className = props.className, cssModule = props.cssModule, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, attributes = _objectWithoutProperties(props, _excluded);
  var classes = mapToCssModules(classNames(className, "popover-body"), cssModule);
  return /* @__PURE__ */ e.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}
PopoverBody.propTypes = propTypes;
export {
  Popover as P,
  PopoverHeader as a,
  PopoverBody as b
};
