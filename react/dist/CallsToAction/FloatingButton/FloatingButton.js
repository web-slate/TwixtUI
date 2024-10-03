"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function FloatingButton(_ref) {
  var children = _ref.children,
    _ref$vertical = _ref.vertical,
    vertical = _ref$vertical === void 0 ? 'bottom' : _ref$vertical,
    _ref$horizontal = _ref.horizontal,
    horizontal = _ref$horizontal === void 0 ? 'right' : _ref$horizontal;
  if (vertical === 'bottom' && horizontal === 'left') {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "fixed bottom-4 left-4"
    }, children);
  } else if (vertical === 'top' && horizontal === 'right') {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "fixed top-4 right-4"
    }, children);
  } else if (vertical === 'top' && horizontal === 'left') {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "fixed top-4 left-4"
    }, children);
  } else if (vertical === 'middle' && horizontal === 'center') {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    }, children);
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed bottom-4 right-4"
  }, children);
}
var _default = exports["default"] = FloatingButton;