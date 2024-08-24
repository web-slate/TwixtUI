"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TwixtButton;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function TwixtButton(_ref) {
  var _ref$background = _ref.background,
    background = _ref$background === void 0 ? 'bg-indigo-500' : _ref$background,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'text-white' : _ref$color,
    children = _ref.children,
    _ref$leftIcon = _ref.leftIcon,
    leftIcon = _ref$leftIcon === void 0 ? null : _ref$leftIcon,
    _ref$rightIcon = _ref.rightIcon,
    rightIcon = _ref$rightIcon === void 0 ? null : _ref$rightIcon,
    label = _ref.label,
    _ref$hideLabel = _ref.hideLabel,
    hideLabel = _ref$hideLabel === void 0 ? false : _ref$hideLabel,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$showSpinner = _ref.showSpinner,
    showSpinner = _ref$showSpinner === void 0 ? false : _ref$showSpinner,
    onClick = _ref.onClick,
    overwriteClass = _ref.overwriteClass;
  var buttonClasses = overwriteClass || 'px-4 py-2 rounded-md';
  var spinnerIcon = /*#__PURE__*/_react["default"].createElement("div", {
    role: "status"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    "aria-hidden": "true",
    className: "inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
    viewBox: "0 0 100 101",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
    fill: "currentFill"
  })), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "Loading..."));
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick,
    className: "flex items-center justify-center space-x-2 ".concat(background, " ").concat(color, " ").concat(buttonClasses),
    disabled: showSpinner || disabled
  }, children ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, leftIcon && /*#__PURE__*/_react["default"].createElement("span", null, leftIcon), !hideLabel && /*#__PURE__*/_react["default"].createElement("span", null, label), showSpinner && /*#__PURE__*/_react["default"].createElement("span", null, spinnerIcon), rightIcon && /*#__PURE__*/_react["default"].createElement("span", null, rightIcon)));
}