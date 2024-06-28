"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Spinner = function Spinner() {
  return /*#__PURE__*/React.createElement("div", {
    role: "status"
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "w-10 h-10 rounded-full border-4 border-text-gray-200 border-s-blue-600 animate-spin"
  }), /*#__PURE__*/React.createElement("span", {
    "class": "sr-only"
  }, "Loading..."));
};
var _default = exports["default"] = Spinner;