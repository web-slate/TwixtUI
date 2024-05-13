"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CopyButton;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function CopyButton(_ref) {
  var data = _ref.data,
    _ref$btnName = _ref.btnName,
    btnName = _ref$btnName === void 0 ? "CopyButton" : _ref$btnName,
    overwriteClass = _ref.overwriteClass;
  var handleCopy = function handleCopy(data) {
    navigator.clipboard.writeText(data);
  };
  var buttonClasses = overwriteClass ? overwriteClass : 'py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg';
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    className: buttonClasses,
    onClick: function onClick() {
      return handleCopy(data);
    }
  }, " ", btnName, " "));
}