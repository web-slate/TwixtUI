"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TwixtHeader;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function TwixtHeader(_ref) {
  var headerClass = _ref.headerClass,
    children = _ref.children,
    rightBlock = _ref.rightBlock;
  return /*#__PURE__*/_react["default"].createElement("header", {
    className: "flex justify-between items-center ".concat(headerClass, " p-4")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "bg-slate-800 text-slate-100 rounded-full pr-2"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLineCap: "round",
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  }))), children), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex"
  }, rightBlock));
}