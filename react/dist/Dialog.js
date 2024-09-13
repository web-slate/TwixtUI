"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Dialog;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Dialog(_ref) {
  var title = _ref.title,
    desc = _ref.desc,
    footer = _ref.footer;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative z-10",
    "aria-labelledby": "modal-title",
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 z-10 w-screen overflow-y-auto"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sm:flex sm:items-start"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "h-6 w-6 text-red-600",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-base font-semibold leading-6 text-gray-900",
    id: "modal-title"
  }, title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-500"
  }, desc))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
  }, footer)))));
}