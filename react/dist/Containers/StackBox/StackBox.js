"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function StackBox(_ref) {
  var _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'horizontal' : _ref$direction,
    children = _ref.children,
    _ref$overwriteClass = _ref.overwriteClass,
    overwriteClass = _ref$overwriteClass === void 0 ? '' : _ref$overwriteClass;
  var stackClasses = direction === 'horizontal' ? 'flex' : 'flex flex-col';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(stackClasses, " ").concat(overwriteClass)
  }, children);
}
var _default = exports["default"] = StackBox;