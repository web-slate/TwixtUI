"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var InputSingleLine = function InputSingleLine(_ref) {
  var label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    error = _ref.error,
    warning = _ref.warning;
  var inputClass = "shadow appearance-none border ".concat(error ? 'border-red-500' : warning ? 'border-yellow-500' : 'border-gray-300', " text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500");
  var labelClass = "block text-gray-700 text-sm font-bold mb-2";
  var errorClass = "text-red-500 text-xs italic";
  var warningClass = "text-yellow-500 text-xs italic";
  return /*#__PURE__*/_react["default"].createElement("div", null, label && /*#__PURE__*/_react["default"].createElement("label", {
    className: labelClass
  }, label), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    value: value,
    onChange: onChange,
    onBlur: onBlur,
    className: inputClass
  }), error && /*#__PURE__*/_react["default"].createElement("p", {
    className: errorClass
  }, error), warning && !error && /*#__PURE__*/_react["default"].createElement("p", {
    className: warningClass
  }, warning));
};
var _default = exports["default"] = InputSingleLine;