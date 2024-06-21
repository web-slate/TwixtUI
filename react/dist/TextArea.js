"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TwixtTextArea = function TwixtTextArea(_ref) {
  var value = _ref.value;
  return /*#__PURE__*/_react["default"].createElement("textarea", {
    className: "resize rounded-md"
  }, value);
};
var _default = exports["default"] = TwixtTextArea;