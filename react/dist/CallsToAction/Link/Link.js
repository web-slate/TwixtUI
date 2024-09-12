"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TwixtLink;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function TwixtLink(_ref) {
  var _ref$background = _ref.background,
    background = _ref$background === void 0 ? '' : _ref$background,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'text-blue-500' : _ref$color,
    _ref$link = _ref.link,
    link = _ref$link === void 0 ? '#' : _ref$link,
    onClick = _ref.onClick,
    _ref$overwriteClass = _ref.overwriteClass,
    overwriteClass = _ref$overwriteClass === void 0 ? '' : _ref$overwriteClass,
    label = _ref.label,
    leftIcon = _ref.leftIcon,
    rightIcon = _ref.rightIcon,
    rightContent = _ref.rightContent,
    target = _ref.target;
  if (!label) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: link,
    className: "inline-flex items-center gap-4 ".concat(background, " ").concat(color, " ").concat(overwriteClass),
    onClick: onClick,
    target: target
  }, leftIcon && /*#__PURE__*/_react["default"].createElement("span", null, leftIcon), /*#__PURE__*/_react["default"].createElement("span", null, label), rightIcon && /*#__PURE__*/_react["default"].createElement("span", null, rightIcon), rightContent && /*#__PURE__*/_react["default"].createElement("span", null, rightContent));
}