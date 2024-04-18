"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TwixtHeading;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function TwixtHeading(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? "h6" : _ref$type,
    children = _ref.children;
  switch (type) {
    case 'h1':
      return /*#__PURE__*/_react["default"].createElement("h1", {
        className: "text-4xl font-bold text-gray-900"
      }, children);
    case 'h2':
      return /*#__PURE__*/_react["default"].createElement("h2", {
        className: "text-3xl font-bold text-gray-800"
      }, children);
    case 'h3':
      return /*#__PURE__*/_react["default"].createElement("h3", {
        className: "text-2xl font-bold text-gray-700"
      }, children);
    case 'h4':
      return /*#__PURE__*/_react["default"].createElement("h4", {
        className: "text-xl font-semibold text-gray-600"
      }, children);
    case 'h5':
      return /*#__PURE__*/_react["default"].createElement("h5", {
        className: "text-lg font-medium text-gray-500"
      }, children);
    case 'h6':
      return /*#__PURE__*/_react["default"].createElement("h6", {
        className: "text-base font-normal text-gray-400"
      }, children);
  }
  return /*#__PURE__*/_react["default"].createElement("h1", null, children);
}