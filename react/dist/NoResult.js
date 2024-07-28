"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var NoResult = function NoResult(_ref) {
  var _ref$message = _ref.message,
    message = _ref$message === void 0 ? 'No Result Found.' : _ref$message;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-center h-40"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-950 ffont-normal"
  }, message));
};
var _default = exports["default"] = NoResult;