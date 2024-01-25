"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TwixModal;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function TwixModal(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? '' : _ref$title,
    children = _ref.children,
    footer = _ref.footer;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center items-center h-screen"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-gray-500 bg-opacity-20 transition-opacity",
    style: {
      transition: 'opacity 300ms ease-out'
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white rounded-md shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50",
    style: {
      transition: 'transform 300ms ease-out'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-indigo-500 text-white px-4 py-2 flex justify-between"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-lg font-semibold"
  }, title)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-4"
  }, children), /*#__PURE__*/_react["default"].createElement("div", {
    className: "border-t px-4 py-2 flex justify-end"
  }, footer)))));
}