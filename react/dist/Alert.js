"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TwixtAlert;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function TwixtAlert(_ref) {
  var overwriteClass = _ref.overwriteClass,
    title = _ref.title,
    desc = _ref.desc;
  var alertClasses = overwriteClass ? overwriteClass : 'bg-orange-100 border-l-4 border-orange-500 text-orange-700 mx-4 p-2';
  return /*#__PURE__*/_react["default"].createElement("div", {
    "class": alertClasses,
    role: "alert"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    "class": "font-bold"
  }, title), /*#__PURE__*/_react["default"].createElement("p", null, desc));
}