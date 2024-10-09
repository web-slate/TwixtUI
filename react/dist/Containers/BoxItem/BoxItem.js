"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _excluded = ["type", "children", "appendClass", "overwriteClass"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function BoxItem(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'block' : _ref$type,
    children = _ref.children,
    _ref$appendClass = _ref.appendClass,
    appendClass = _ref$appendClass === void 0 ? '' : _ref$appendClass,
    _ref$overwriteClass = _ref.overwriteClass,
    overwriteClass = _ref$overwriteClass === void 0 ? '' : _ref$overwriteClass,
    props = _objectWithoutProperties(_ref, _excluded);
  var itemClasses = overwriteClass != '' ? overwriteClass : "".concat(appendClass);
  if (type == 'block') {
    return /*#__PURE__*/_react["default"].createElement("div", _extends({
      className: itemClasses
    }, props), children);
  } else if (type == 'inline') {
    return /*#__PURE__*/_react["default"].createElement("span", _extends({
      className: itemClasses
    }, props), children);
  }
  return null;
}
var _default = exports["default"] = BoxItem;