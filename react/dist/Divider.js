"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Divider = function Divider(_ref) {
  var _ref$gap = _ref.gap,
    gap = _ref$gap === void 0 ? 'mt-4' : _ref$gap;
  return /*#__PURE__*/_react["default"].createElement("hr", {
    className: "bg-gray-900 my-4 ".concat(gap)
  });
};
var _default = exports["default"] = Divider;