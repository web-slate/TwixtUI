"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var violetBadge = 'cursor-pointer w-8 h-8 grid place-items-center text-base rounded-full text-white bg-violet-700';
var indigoBadge = 'cursor-pointer max-w-16 px-4 py-2 flex items-center text-base rounded-full text-indigo-500 border border-indigo-500';
var TwixtBadges = function TwixtBadges(_ref) {
  var text = _ref.text,
    overwriteClass = _ref.overwriteClass,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'violet' : _ref$variant;
  var badgeClass = variant === 'violet' ? violetBadge : indigoBadge;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: overwriteClass || badgeClass
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "p-1"
  }, text));
};
var _default = exports["default"] = TwixtBadges;