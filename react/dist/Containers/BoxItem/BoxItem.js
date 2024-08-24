"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function BoxItem(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'block' : _ref$type,
    children = _ref.children,
    _ref$overwriteClass = _ref.overwriteClass,
    overwriteClass = _ref$overwriteClass === void 0 ? '' : _ref$overwriteClass;
  if (type == 'block') {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: overwriteClass
    }, children);
  } else if (type == 'inline') {
    return /*#__PURE__*/_react["default"].createElement("span", {
      className: overwriteClass
    }, children);
  }
  return null;
}
var _default = exports["default"] = BoxItem;