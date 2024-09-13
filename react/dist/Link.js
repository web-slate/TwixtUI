"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Link = function Link(_ref) {
  var href = _ref.href,
    text = _ref.text,
    className = _ref.className;
  if (!href) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: href,
    className: "inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ".concat(className)
  }, text));
};
var _default = exports["default"] = Link;