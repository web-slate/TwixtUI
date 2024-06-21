"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SimpleCodeEditor;
var _react = _interopRequireDefault(require("react"));
var _reactCodemirror = _interopRequireDefault(require("@uiw/react-codemirror"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function SimpleCodeEditor(_ref) {
  var _ref$height = _ref.height,
    height = _ref$height === void 0 ? '200px' : _ref$height,
    _ref$extensions = _ref.extensions,
    extensions = _ref$extensions === void 0 ? [] : _ref$extensions,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange;
  return /*#__PURE__*/_react["default"].createElement(_reactCodemirror["default"], {
    height: height,
    extensions: extensions,
    value: value,
    onChange: onChange
  });
}