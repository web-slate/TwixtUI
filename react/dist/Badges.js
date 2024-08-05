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
    overwriteClass = _ref.overwriteClass;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid gap-5"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: overwriteClass || violetBadge
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "p-1"
  }, text)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: indigoBadge
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
  })), text)));
};
var _default = exports["default"] = TwixtBadges;